(ns examples.chess
  (:require
   [malli.core]
   [deft.core-shared]
   [easyreagent.components :as er]
   [reagent.core :as r]
   [reagent.dom.client :as rdom-client])
  (:require-macros [deft.core :refer [deft witht defp defnt]]))


(deft ChessBoard [tiles - [:vector [:vector [:or :nil ::ChessPiece]]]
                  curr-move - [:enum ::white ::black]])


(defp PieceType
  (image-path [this]))

(defn image-asset [file-name]
  (str "resources/image_assets/chess/" file-name))

(deft Pawn []
  PieceType
  (image-path [this] (image-asset "pawn_white.png")))

(deft Castle []
  PieceType
  (image-path [this] (image-asset "castle_white.png")))

(deft Bishop []
  PieceType
  (image-path [this] (image-asset "bishop_white.png")))

(deft Knight []
  PieceType
  (image-path [this] (image-asset "knight_white.png")))

(deft Queen []
  PieceType
  (image-path [this] (image-asset "queen_white.png")))

(deft King []
  PieceType
  (image-path [this] (image-asset "king_white.png")))


(defnt move-tile [game-board start-location end-location] ChessBoard
  (-> game-board
      (update ::tiles assoc-in end-location (get-in tiles start-location))
      (update ::tiles assoc-in start-location nil)
      (update ::curr-move (fn [x] (if (= x ::white) ::black ::white)))))
      

(defn move-selected-piece [game-board-atom currently-selected-location click-location]
  (cond
    (nil? @currently-selected-location) (reset! currently-selected-location click-location)
    (= @currently-selected-location click-location) (reset! currently-selected-location nil)
    :else (do
            (swap! game-board-atom move-tile @currently-selected-location click-location)
            (reset! currently-selected-location nil))))

                                 
                            
  

(defn display-board [game-board-atom]
  (let [currently-selected-location (r/atom nil)]
    (fn [game-board-atom]
      (witht [ChessBoard @game-board-atom]
             [:h-box
              (for [x (range (count tiles))]
                [:v-box
                 (for [y (reverse (range (count (nth tiles x))))]
                   [:p {:style {:background-color (if (= (mod (+ x y) 2) 1)
                                                    "white"
                                                    "black")
                                :height "4rem"
                                :width "4rem"
                                }
                         :on-click (fn [] (move-selected-piece
                                                  game-board-atom
                                                  currently-selected-location
                                                  [x y]))}

                    (if (not (nil? (get-in tiles [x y])))
                      [:img {:src (image-path (::piece-type (get-in tiles [x y])))
                             :style {:height "100%"
                                     :width "100%"
                                     :filter (when (= (::color (get-in tiles [x y])) ::black)
                                               "invert()")}}]
                      "")])])]))))

(deft ChessPiece [color piece-type])
  

(defn make-game-tiles []
  (let [empty-board-atom (atom (vec (repeat 8 (vec (repeat 8 nil)))))]
    (doseq [x (range (count @empty-board-atom))]
      (swap! empty-board-atom assoc-in [x 1] (>ChessPiece :color ::white
                                                          :piece-type (>Pawn)))
      (swap! empty-board-atom assoc-in [x 6] (>ChessPiece :color ::black
                                                          :piece-type (>Pawn))))
    (doseq [[idx piece-type] (map-indexed vector [(>Castle) (>Knight) (>Bishop)
                                                  (>Queen) (>King)
                                                  (>Bishop) (>Knight) (>Castle)])]
      (swap! empty-board-atom assoc-in [idx 0] (>ChessPiece :color ::white
                                                            :piece-type piece-type))
      (swap! empty-board-atom assoc-in [idx 7] (>ChessPiece :color ::black
                                                            :piece-type piece-type)))
    @empty-board-atom))
      


(def curr-game-atom (r/atom (>ChessBoard :tiles (make-game-tiles)
                                         :curr-move ::white)))

(defn main-game-view []
  [er/heroed-content
   [display-board curr-game-atom]])


  
