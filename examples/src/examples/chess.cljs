(ns examples.chess
  (:require
   [deft.core-cljs]
   [malli.core]
   [easyreagent.components :as er]
   [reagent.core :as r]
   [reagent.dom.client :as rdom-client])
  (:require-macros [deft.core-cljs :refer [deft witht defp defnt]]))


(deft GameBoard [tiles
                 curr-move])

(defn make-new-game []
  (>GameBoard :tiles
              [[::W-R ::W-P nil nil nil nil ::W-P ::B-R]
               [::W-N ::W-P nil nil nil nil ::W-P ::B-N]
               [::W-B ::W-P nil nil nil nil ::W-P ::B-B]
               [::W-Q ::W-P nil nil nil nil ::W-P ::B-Q]
               [::W-K ::W-P nil nil nil nil ::W-P ::B-K]
               [::W-B ::W-P nil nil nil nil ::W-P ::B-B]
               [::W-N ::W-P nil nil nil nil ::W-P ::B-N]
               [::W-R ::W-P nil nil nil nil ::W-P ::B-R]])
  )
