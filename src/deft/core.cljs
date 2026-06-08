(ns deft.core
  (:require [deft.core-shared :as core-shared])
  (:require-macros [deft.core]))

(def get-deft-mutable-registry deft.core-shared/get-deft-mutable-registry-internal)
(def use-deft-malli-registry! deft.core-shared/use-deft-malli-registry-internal!)
;; warning!! this may enforce more things in the future
(def always-instrument! deft.core-shared/always-instrument!)
