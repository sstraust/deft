(ns examples.issues-demo
  (:require [deft.core :refer [defnt defp deft witht]]))

(defmulti log-str (some-fn :type type))
(defp Human :required-keys [::height ::weight])
(defmethod log-str ::Human [this]
  (witht [this Human]
      (str "height: " height ", weight: " weight)))

(deft Man [::height ::weight]
    Human)
(deft Woman [::height ::weight]
    Human)

