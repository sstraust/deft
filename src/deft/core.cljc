(ns deft.core
  (:require [malli.registry :as mr]
            [malli.core :as m]
            [deft.core-shared :as core-shared])
  #?(:cljs
     (:require-macros [deft.core])))
(defn get-deft-mutable-registry
  "Note that this is the mutable registry only, and
  does _not_ include the default schemas."
  []
  (mr/mutable-registry core-shared/malli-registry-atom))

(defn use-deft-malli-registry! []
  (mr/set-default-registry!
   (mr/composite-registry
    (m/default-schemas)
    (mr/mutable-registry core-shared/malli-registry-atom))))
