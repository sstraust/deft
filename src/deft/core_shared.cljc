(ns deft.core-shared
  (:require
   #?(:clj [potemkin.collections :refer [def-map-type]])
   [clojure.pprint :as pprint]))

#?(:clj
   (def-map-type TypeMap [m mta]
     (get [_ k default-value]
          (if (contains? m k)
            (get m k)
            default-value))
     (assoc [_ k v]
            (TypeMap. (assoc m k v) mta))
     (dissoc [_ k]
             (if (contains? (:required-keys mta) k)
               (dissoc m k)
               (TypeMap. (dissoc m k) mta)))
     (keys [_]
           (keys m))
     (meta [_]
           mta)
     (with-meta [_ mta]
       (TypeMap. m mta))

     Object
     (equals [this other]
             (and (instance? TypeMap other)
                  (= m (.-m ^TypeMap other))
                  (= (:type mta) (:type (.-mta ^TypeMap other)))))
     (hashCode [this]
               (hash [m (:type mta)]))
     (toString [this]
               (pr-str this))

     clojure.lang.IHashEq
     (hasheq [_]
             (hash [TypeMap m (:type mta)]))


     clojure.lang.IPersistentCollection
     (equiv [this other]
            (and (instance? TypeMap other)
                  (= m (.-m ^TypeMap other))
                  (= (:type mta) (:type (.-mta ^TypeMap other)))))
     )
   
   :cljs
   (deftype TypeMap [m mta]
     ILookup
     (-lookup [_ k]
       (get m k))
     (-lookup [_ k default-value]
       (get m k default-value))
     
     IAssociative
     (-assoc [_ k v]
       (TypeMap. (assoc m k v) mta))
     (-contains-key? [_ k]
       (contains? m k))
     
     IMap
     (-dissoc [_ k]
       (if (contains? (:required-keys mta) k)
         (dissoc m k)
         (TypeMap. (dissoc m k) mta)))
     
     ICollection
     (-conj [_ entry]
       (if (vector? entry)
         (TypeMap. (assoc m (nth entry 0) (nth entry 1)) mta)
         (reduce -conj (TypeMap. m mta) entry)))
     
     ISeqable
     (-seq [_]
       (seq m))
     
     ICounted
     (-count [_]
       (count m))
     
     IEmptyableCollection
     (-empty [_]
       (TypeMap. {} mta))
     
     IMeta
     (-meta [_]
       mta)
     
     IWithMeta
     (-with-meta [_ new-mta]
       (TypeMap. m new-mta))
     
     IEquiv
     (-equiv [this other]
       (and (instance? TypeMap other)
            (let [^TypeMap o other] 
              (and (= m (.-m o))
                   (= mta (.-mta o))))))
     
     IHash
     (-hash [_]
       (hash [m mta]))
     
     IPrintWithWriter
     (-pr-writer [_ writer opts]
       (-write writer "#deft.core.TypeMap")
       (-write writer (pr-str {:m m :mta mta})))

     IKVReduce
     (-kv-reduce [_ f init]
       (reduce (fn [ret [k v]] (f ret k v)) init m))
     
     IFn
     (-invoke [this k]
       (-lookup this k))
     (-invoke [this k not-found]
       (-lookup this k not-found)))


   )

(defmethod pprint/simple-dispatch   TypeMap [input]
    (print (str input)))







(defn prefix-keys [ns-name m]
  (let [prefix-fn (fn [k]
                   (if (keyword? k)
                     (keyword (name ns-name) (name k))
                     k))]
    (reduce-kv (fn [acc k v]
                 (assoc acc (prefix-fn k) v))
               {}
               m)))
  

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
                (map (fn [{:deft.core/keys [key-fn multimethod] :as method-def}]
                            (when (or (not (contains?
                                        (methods multimethod)
                                        (key-fn obj-type)))
                                      (and available-methods
                                           (not (contains? available-methods multimethod))))
                              method-def))
                     (:deft.core/implements-methods protocol))))]
    (if (not (empty? undefined-methods))
      #?(:clj
         (throw (RuntimeException. (str "methods " undefined-methods " is not defined for " obj-type " in protocol " protocol)))
         :cljs (throw (js/Error "failed")))
      true)))
