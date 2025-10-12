(ns deft)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; functions copied from clojure core
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn ^:private ^:static
  reduce1
       ([f coll]
             (let [s (seq coll)]
               (if s
         (reduce1 f (first s) (next s))
                 (f))))
       ([f val coll]
          (let [s (seq coll)]
            (if s
              (if (chunked-seq? s)
                (recur f 
                       (.reduce (chunk-first s) f val)
                       (chunk-next s))
                (recur f (f val (first s)) (next s)))
              val))))

(defn- parse-opts [s]
    (loop [opts {} [k v & rs :as s] s]
      (if (keyword? k)
        (recur (assoc opts k v) rs)
        [opts s])))

(defn- parse-impls [specs]
  (loop [ret {} s specs]
    (if (seq s)
      (recur (assoc ret (first s) (take-while seq? (next s)))
             (drop-while seq? (next s)))
      ret)))

(defn- maybe-destructured
  [params body]
  (if (every? symbol? params)
    (cons params body)
    (loop [params params
           new-params (with-meta [] (meta params))
           lets []]
      (if params
        (if (symbol? (first params))
          (recur (next params) (conj new-params (first params)) lets)
          (let [gparam (gensym "p__")]
            (recur (next params) (conj new-params gparam)
                   (-> lets (conj (first params)) (conj gparam)))))
        `(~new-params
          (let ~lets
            ~@body))))))

(defn- parse-opts+specs [opts+specs]
  (let [[opts specs] (parse-opts opts+specs)
        impls (parse-impls specs)
        interfaces (-> (map #(if (var? (resolve %)) 
                               (:on (deref (resolve %)))
                               %)
                            (keys impls))
                       set
                       (disj 'Object 'java.lang.Object)
                       vec)
        methods (map (fn [[name params & body]]
                       (cons name (maybe-destructured params body)))
                     (apply concat (vals impls)))]
    ;; (when-let [bad-opts (seq (remove #{:no-print :load-ns} (keys opts)))]
    ;;   (throw (IllegalArgumentException. (apply print-str "Unsupported option(s) -" bad-opts))))
    [interfaces methods opts]))






;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; begin spicy macros
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro defp [protocol-name & opts+sigs]
  (let [iname (symbol (str (munge (namespace-munge *ns*)) "." (munge name)))
        [opts sigs]
        (loop [opts {:on (list 'quote iname) :on-interface iname} sigs opts+sigs]
          (condp #(%1 %2) (first sigs) 
            string? (recur (assoc opts :doc (first sigs)) (next sigs))
            keyword? (recur (assoc opts (first sigs) (second sigs)) (nnext sigs))
            [opts sigs]))
        sigs (when sigs
               (reduce1 (fn [m s]
                          (let [tag-to-class (fn [tag] tag)
                                               ;; (if-let [c (and (instance? clojure.lang.Symbol tag)
                                               ;;              (= (.indexOf (.getName ^clojure.lang.Symbol tag) ".") -1)
                                               ;;              (not (contains? '#{int long float double char short byte boolean void
                                               ;;                                 ints longs floats doubles chars shorts bytes booleans objects} tag))
                                               ;;              (resolve tag))]
                                               ;;   (symbol (.getName c))
                                               ;;   tag)
                                _ (println "hi1")
                                name-meta (update-in (meta (first s)) [:tag] tag-to-class)
                                _ (println "hi2")
                                mname (with-meta (first s) nil)
                                _ (println "hi3")
                                [arglists doc]
                                (loop [as [] rs (rest s)]
                                  (if (vector? (first rs))
                                    (recur (conj as (first rs)) (next rs))
                                    [(seq as) (first rs)]))]
                            ;; (when (some #{0} (map count arglists))
                            ;;   (throw (IllegalArgumentException. (str "Definition of function " mname " in protocol " name " must take at least one arg."))))
                            ;; (when (m (keyword mname))
                            ;;   (throw (IllegalArgumentException. (str "Function " mname " in protocol " name " was redefined. Specify all arities in single definition."))))
                            (assoc m (keyword mname)
                                   (merge name-meta
                                          {:name (vary-meta mname assoc :doc doc :arglists arglists)
                                           :arglists arglists
                                           :doc doc}))))
                        {} sigs))
        ]
    `(do
       (def ~protocol-name nil)
       ;; (defprotocol ~protocol-name ~@opts+sigs)
       ~@(for [method (vals sigs)]
           `(defmulti ~(symbol (str  (:name method))) (fn [~'this & ~'args] (:type ~'this)))))))









(defn simple-resolve [symb]
  (str (symbol (str *ns*) (str symb))))

(defonce defc-fields-map (atom {}))

(defn prefix-keys [ns-name m]
  (let [prefix-fn (fn [k]
                   (if (keyword? k)
                     (keyword (name ns-name) (name k))
                     k))]
    (reduce-kv (fn [acc k v]
                 (assoc acc (prefix-fn k) v))
               {}
               m)))

(defn- parse-impls [specs]
  (loop [ret {} s specs]
    (if (seq s)
      (recur (assoc ret (first s) (take-while seq? (next s)))
             (drop-while seq? (next s)))
      ret)))

(defmacro witht [def-list & code]
  (let [[class-name var-name] def-list]
    `(let [{~(keyword (namespace (symbol (simple-resolve class-name))) (name :keys))
            ~(get @defc-fields-map
                      ;; does this happen at read time?
                      ;; you have to be careful with the resolves
                      (symbol (simple-resolve class-name)))}
         ~var-name]
       ~@code)))


(defmacro define-proto-implementations [type-obj type-name & record-implementations]
  `(do ~@(for [[interface-name interface-impls] (parse-impls record-implementations)
               impl interface-impls]
           (do
           ;; you need to resolve the method name from the
           ;; PROTOCOL def
             `(defmethod ~(symbol (str (.ns (resolve interface-name)))
                                  (str (first impl)))
                ~type-name
              ~(second impl)
              (witht [~type-obj ~(first (second impl))]
                ~@(drop 2 impl)))))))

(defmacro deft [class-name fields-list & record-implementations]
  (swap!  defc-fields-map
          assoc
          (symbol (str *ns*) (name class-name))
          fields-list)
  `(do
     (def ~class-name "nil")
     (defn ~(symbol (str ">" (name class-name))) [& {:as args#}]
       (~'spicyclojuremacros.deft/prefix-keys ~(str *ns*) args#)
       )))



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
