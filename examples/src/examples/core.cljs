(ns examples.core
  (:require
   [examples.tic-tac-toe]
   [easyreagent.components :as er]
   [reagent.core :as r]
   [reagent.dom.client :as rdom-client]))


(def root-container (.getElementById js/document "main-app"))
(def react-root (rdom-client/create-root root-container))

(defn load-react [component]
  (rdom-client/render
   react-root
   [component]))

(load-react examples.tic-tac-toe/main-game-view)

