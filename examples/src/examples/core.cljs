(ns examples.core
  (:require
   [examples.tic-tac-toe]
   [examples.chess]
   [easyreagent.components :as er]
   [reagent.core :as r]
   [malli.dev.cljs :as dev]
   [deft.core :as deft]
   [reagent.dom.client :as rdom-client]))


(def root-container (.getElementById js/document "main-app"))
(def react-root (rdom-client/create-root root-container))

(defn load-react [component]
  (rdom-client/render
   react-root
   [component]))

(defn load-page []
  (load-react examples.chess/main-game-view))

