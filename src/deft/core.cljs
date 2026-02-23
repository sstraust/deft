(ns deft.core
  (:require [deft.core-shared :as core-shared])
  (:require-macros [deft.core]))

(def get-deft-mutable-registry deft.core-shared/get-deft-mutable-registry)
(def use-deft-malli-registry! deft.core-shared/use-deft-malli-registry!)
