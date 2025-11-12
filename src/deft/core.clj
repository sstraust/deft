(ns deft.core
  (:require [malli.core :as m]
            [deft.core-shared :refer :all]
            [potemkin :refer [def-map-type]]))


;; immitate record dereference type behavior
(def-map-type TypeMap [m mta]
  (get [_ k default-value]
       (if (contains? m k)
         (get m k)
         default-value))
  (assoc [_ k v]
    (TypeMap. (assoc m k v) mta))
  (dissoc [_ k]
          (if (contains? (:required-keys mta) k)
            m
            (TypeMap. (dissoc m k) mta)))
  (keys [_]
    (keys m))
  (meta [_]
    mta)
  (with-meta [_ mta]
    (TypeMap. m mta)))


(defmacro defp
  "Define a (defp) protocol, which is essentially a list of multimethods.

  It uses the same syntax as defprotocol, e.g.

  (defp Shape
      (area [this]))

  [protocol-name keyword-options? & method-signatures]
  protocol-name: The name of the protocol
  keyword-options: Named arguments, so far this is only
     :external-methods -- a list of methods in this protocol where 'defmulti' is defined elsewhere.
     :extends -- a protocol that this protocol extends. This creates a union of all methods defined here
                 and in the parent protocol
  method-signatures -- the actual methods to implement. for everything here, define a new multimethod on type
     and then attach it to this protocol
  "
  [protocol-name & opts+sigs]
  ;; I copied most of the code in this let from clojure core.
  (let [iname (symbol (str (munge (namespace-munge *ns*)) "." (munge name)))
        [opts sigs]
        (loop [opts {:on (list 'quote iname) :on-interface iname} sigs opts+sigs]
          (condp #(%1 %2) (first sigs)
            string? (recur (assoc opts :doc (first sigs)) (next sigs))
            keyword? (recur (assoc opts (first sigs) (second sigs)) (nnext sigs))
            [opts sigs]))
        sigs (when sigs
               (reduce (fn [m s]
                          (let [tag-to-class (fn [tag]
                                               (if-let [c (and (instance? clojure.lang.Symbol tag)
                                                            (= (.indexOf (.getName ^clojure.lang.Symbol tag) ".") -1)
                                                            (not (contains? '#{int long float double char short byte boolean void
                                                                               ints longs floats doubles chars shorts bytes booleans objects} tag))
                                                            (resolve tag))]
                                                 (symbol (.getName c))
                                                 tag))
                                name-meta (update-in (meta (first s)) [:tag] tag-to-class)
                                mname (with-meta (first s) nil)
                                [arglists doc]
                                (loop [as [] rs (rest s)]
                                  (if (vector? (first rs))
                                    (recur (conj as (first rs)) (next rs))
                                    [(seq as) (first rs)]))]
                            (when (some #{0} (map count arglists))
                              (throw (IllegalArgumentException. (str "Definition of function " mname " in protocol " name " must take at least one arg."))))
                            (when (m (keyword mname))
                              (throw (IllegalArgumentException. (str "Function " mname " in protocol " name " was redefined. Specify all arities in single definition."))))
                            (assoc m (keyword mname)
                                   (merge name-meta
                                          {:name (vary-meta mname assoc :doc doc :arglists arglists)
                                           :arglists arglists
                                           :doc doc}))))
                        {} sigs))]
    `(do
       ~@(for [method (vals sigs)]
           `(defmulti ~(symbol (str  (:name method))) (fn [~'this & ~'args] (:type ~'this))))
       
       (def ~protocol-name
         (apply merge-with concat
         {::implements-methods
          ~(into []
                (concat 
                  (for [method (vals sigs)]
                    `{::multimethod ~(symbol (str  (:name method)))
                      ::key-fn identity})
                  (for [external-method (:external-methods opts)]
                    (if (map? external-method)
                      `{::multimethod ~(:method external-method)
                        ::key-fn ~(:key-fn external-method)}
                      `{::multimethod ~external-method
                        ::key-fn identity}))))}
         ~(:extends opts))))))

(defn check-implements
  "Verify that a type T implements a protocol (as defined with defp).

  A protocol is considered satisfied if, for every method in the protocol,
  there exists a multimethod implementation with dispatch value T

  [obj-type protocol & {:keys [available-methods]}]
  obj-type: should be the _dispatch value_ that is used for multimethods.
    for objects defined via deft, this is the _keyword_, so (deft Shape ...)
    would result in ::Shape
  protocol: the protocol to implement. If you define it with (defp Drawable ...)
    it's the variable stored in Drawable
  available-methods: a list of methods to restrict to. it's like saying, check
    if this protocol is satisfied, but assume that we can only see the value of
    these methods. It's useful for checking that all of the methods are defined in the same place
    (and not sporadically). If its nil, then it does no extra filtering.
  "
  [obj-type protocol & {:keys [available-methods]}]
  (let [available-methods (when available-methods (set available-methods))
        undefined-methods
        (into []
        (remove nil?
                (map (fn [{::keys [key-fn multimethod] :as method-def}]
                            (when (or (not (contains?
                                        (methods multimethod)
                                        (key-fn obj-type)))
                                      (and available-methods
                                           (not (contains? available-methods multimethod))))
                              method-def))
                     (::implements-methods protocol))))]
    (if (not (empty? undefined-methods))
      (throw (RuntimeException. (str "methods " undefined-methods " is not defined for " obj-type " in protocol " protocol)))
      true)))


(defonce defc-fields-map (ref {}))

(defn prefix-keys [ns-name m]
  (let [prefix-fn (fn [k]
                   (if (keyword? k)
                     (keyword (name ns-name) (name k))
                     k))]
    (reduce-kv (fn [acc k v]
                 (assoc acc (prefix-fn k) v))
               {}
               m)))


(defn- deft-parse-impls [specs]
  (loop [ret {} s specs]
    (if (seq s)
      (let [keywords-args (take-while (comp keyword? first) (partition 2 (next s)))
            everything-after-kwds (drop (* 2 (count keywords-args)) (next s))]
        (recur (assoc ret (first s) {::impls (take-while seq? everything-after-kwds)
                                     ::opts (into {} (into [] (map #(apply vector %) keywords-args)))})
               (drop-while seq? everything-after-kwds)))
      ret)))


(defmacro witht [def-list & code]
  (let [[class-name var-name  & {:keys [allow-overrides skip-fields]}] def-list
        allow-override-set (set allow-overrides)
        skip-fields-set (set skip-fields)]

    (doseq [class-field (get @defc-fields-map
                             (symbol (resolve class-name)))]
      (let [var-name (symbol (str (namespace (symbol (resolve class-name))))
                             (str class-field))]
        (when (and (not (contains? allow-override-set class-field))
                   (not (contains? skip-fields-set class-field))
                   (resolve var-name))
          (throw (RuntimeException.
                  (str "witht cannot redefine an existing var.\n\n"
                       " the variable " class-field " is defined somewhere else in your environment."
                       " we don't let you override existing binding using deft, so that you don't accidentally"
                       " run into surprises when you add new field-names to an existing class."
                       " you can opt out of this by adding"
"\n(witht [YourClass your-var :allow-override [your-field-name]]
   ....
)"))))))
                             
    `(let [{~(keyword (namespace (symbol (resolve class-name))) (name :keys))
            ~(into [] (remove
              (fn [x] (contains? skip-fields-set x))
              (get @defc-fields-map
                      ;; does this happen at read time?
                      ;; you have to be careful with the resolves
                      (symbol (resolve class-name)))))}
         ~var-name]
       ~@code)))


(defn get-method-impl-name [interface-name impl]
  (if (qualified-symbol? (first impl))
    (first impl)
    (symbol (str (.ns (resolve interface-name)))
            (str (first impl)))))

(defmacro define-proto-implementations [type-obj type-name & record-implementations]
  `(do ~@(for [[interface-name interface-impls] (deft-parse-impls record-implementations)
               impl (::impls interface-impls)]
           ;; you need to resolve the method name from the
           ;; PROTOCOL def
             `(defmethod ~(get-method-impl-name interface-name impl)
                ~type-name
              ~(second impl)
              (witht [~type-obj ~(first (second impl))]
                ~@(drop 2 impl))))
       ~@(for [[interface-name interface-impls] (deft-parse-impls record-implementations)]
           `(check-implements ~type-name ~interface-name
                              :available-methods
                              ~(cond
                                (= :all (:allows-external (::opts interface-impls))) nil
                                :else (into []
                                             (concat (:allows-external (::opts interface-impls))
                                                     (map (fn [impl] (get-method-impl-name interface-name impl)) (::impls interface-impls)))))))
       ))





(defmacro deft [class-name inp-fields-list & record-implementations]
  (let [type-name (keyword (name (str *ns*)) (name class-name))
        fields-to-types (loop [inp-list inp-fields-list
                               outp-list []]
                          (cond
                            (= (second inp-list) '-)
                            (if (< (count inp-list) 3)
                              (throw (Exception. "wrong number of arguments to type expression"))
                              (recur (drop 3 inp-list) (concat outp-list [[(first inp-list) (nth inp-list 2)]])))

                            (empty? inp-list)
                            outp-list

                            :else (recur (drop 1 inp-list) (concat outp-list [[(first inp-list) :any]]))))
        fields-list (mapv first fields-to-types)

        keywords-args (take-while (comp keyword? first) (partition 2 (next record-implementations)))
        opts (into {} (into [] (map #(apply vector %) keywords-args)))
        record-implementations (drop (* 2 (count keywords-args)) record-implementations)]
    (dosync (alter defc-fields-map
                 assoc
                 (symbol (str *ns*) (name class-name))
                 fields-list))
    `(do
     (def ~class-name
       
       ~(into []
              (cons :map (for [[field type] fields-to-types]
                           [(keyword (str *ns*) (str field)) type]))))
     ;; (when (:extends opts)
     ;;   (derive ~type-name ~(:extends opts)))
     ;; what should the interface be?
     ;; (>Circle :position [1 2] :radius 12)
     ;; now for every protocol, I want to do check-implements on that protocol
     (defn ~(symbol (str ">" (name class-name))) [& {:as args#}]
       (TypeMap.
         (assoc (prefix-keys ~(str *ns*) args#)
                :type ~type-name)
         {:type ~type-name
          :required-keys (set (keys (prefix-keys ~(str *ns*) args#)))})
       )
     (define-proto-implementations ~class-name ~type-name ~@record-implementations)

     (m/=> ~(symbol (str ">" (name class-name)))
           [:=> [:cat ~(into []
                             (cons :catn
                                   (for [field fields-list]
                                           [(keyword (str field))
                                            [:cat [:= (keyword (str field))]
                                             :any]])))]
            ~class-name]))))


;; now you want to write your custom defn sugar
;; which is surprisingly nontrivial

;; lets look at how malli does it


;; I need to untangle the rest of body as attr-map and docstring?

;; TODO -- DOESN"T CURRENTLY SUPPORT MULTI-ARGUMENT FUNCTIONS
(defmacro defnt [fn-name & rest-of-body]
  (let [doc-string (when (string? (first rest-of-body)) (first rest-of-body))
        rest-of-body (if doc-string (next rest-of-body) rest-of-body)

        attr-map (when (map? (first rest-of-body)) (first rest-of-body))
        rest-of-body (if attr-map (next rest-of-body) rest-of-body)

        params (first rest-of-body)
        rest-of-body (next rest-of-body)

        obj-type (first rest-of-body)
        rest-of-body (next rest-of-body)


        conds (when (and (next rest-of-body) (map? (first rest-of-body))) 
                (first rest-of-body))
        rest-of-body (if conds (next rest-of-body) rest-of-body)]
    (doall (concat [`defn] [fn-name]
            (when doc-string [doc-string])
            (when attr-map [attr-map])
            [params]
            (when conds [conds])
            [`(witht [~obj-type ~(first params)]
               ~@rest-of-body)]
            ))))


        ;; TODO don't allow pre-post map for now because it's confusing to implement

  

