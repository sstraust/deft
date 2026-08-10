(ns examples.issues-demo
  (:require [deft.core :refer [defnt defp deft witht]]))

(defmulti log-str (some-fn :type type))
(defp Human :required-keys [::height ::weight])
(defmethod log-str ::Human [this]
  (str "height: " (::height this) ", weight: "
       (::weight this)))

(deft Man [::height ::weight]
    Human)
(deft Woman [::height ::weight]
    Human)

