(ns deft.deftest-external-ns-helper
  (:require [clojure.test :as t]
            [deft.core :refer :all :as deft]
            [deft.core-shared :refer :all]
            ))

(deft Circle12 [position
                radius])

(defp Shape
  (test-area [this]))

(defmulti my-external-method :type)

