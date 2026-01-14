(ns examples.chess
  (:require
   [malli.core]
   [easyreagent.components :as er]
   [reagent.core :as r]
   [reagent.dom.client :as rdom-client])
  (:require-macros [deft.core :refer [deft witht defp defnt]]))

;; color
;; pawn, bishop, knight
(defp PieceType
  (valid-moves [this game-board location]))

(deft ChessPiece [color - [:enum ::white ::black]
                  piece-type - ::PieceType])

(deft GameBoard [tiles - [:vector [:vector [:or nil ::ChessPiece]]]
                 curr-move - [:enum ::white ::black]])

(deft MyMove []
  PieceType
  (valid-moves [this game-board location]
               "test"))
(valid-moves (>MyMove))


(defn display-board [game-board-atom]
  (witht [GameBoard @game-board-atom]
    [:h-box
     (for [x (range (count tiles))]
       [:v-box
        (for [y (range (count tiles))]
          [:div.h-4.w-4
           (witht [ChessPiece (get-in tiles [x y])]
                  (str color ":" (name (:type piece-type))))])])]))
                 
