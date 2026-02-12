(ns examples.core
  (:require
   [examples.tic-tac-toe]
   [examples.chess]
   [easyreagent.components :as er]
   [reagent.core :as r]
   [malli.dev.cljs :as dev]
   [reagent.dom.client :as rdom-client]))


(def root-container (.getElementById js/document "main-app"))
(def react-root (rdom-client/create-root root-container))

(defn load-react [component]
  (rdom-client/render
   react-root
   [component]))

(defn load-page []
  (dev/start!)
  (load-react examples.chess/main-game-view))

