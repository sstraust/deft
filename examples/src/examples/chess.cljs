(ns examples.chess
  (:require
   [malli.instrument :as mi]
   [deft.core :refer [defnt defp deft witht]]
   [easyreagent.components :as er]
   [malli.dev.cljs :as dev]
   [malli.dev.pretty :as pretty]
   [reagent.core :as r]))


;; (mi/collect!)
;; (mi/instrument!)

(deft.core/use-deft-malli-registry!)

(deft ChessMove [piece start-location end-location])
(deft ChessPiece [color - [:enum ::white ::black]
                  piece-type - [:and ::MovablePiece ::PieceType]])


(deft ChessBoard [tiles - [:vector [:vector [:or :nil ChessPiece]]]
                  curr-move - [:enum ::white ::black]
                  move-history - [:vector ChessMove]])


(defp PieceType
  (image-path [this]))

(defp MovablePiece
  (is-valid-move-for-piece? [this game-board start-location end-location]))

(defmethod is-valid-move-for-piece? nil [this game-board start-location end-location]
  false)

(defmethod is-valid-move-for-piece? :default [this game-board start-location end-location]
  true)

(defmulti special-move-for-piece (fn [x & args] (:type x)))

(defmethod special-move-for-piece :default [] nil)

(defn positions-between [start-location end-location]
  (let [direction (map - end-location start-location)
                 magnitude (apply max (map abs direction))]
             (for [i (range 1 magnitude)]
               (map + start-location
                    (map #(* (/ i magnitude) %) direction)))))

(defn is-piece-in-the-way? [game-board start-location end-location]
  (every? (fn [location] (nil? (get-in (::tiles game-board) location)))
          (positions-between start-location end-location)))

(defn is-valid-end-location? [game-board start-location end-location]
  (or (nil? (get-in (::tiles game-board) end-location))
       (not (= (::color (get-in (::tiles game-board) end-location))
               (::color (get-in (::tiles game-board) start-location))))))

(defn image-asset [file-name]
  (str "resources/image_assets/chess/" file-name))

(deft Castle []
  PieceType
  (image-path [this] (image-asset "castle_white.png"))
  MovablePiece
  (is-valid-move-for-piece?
   [this game-board start-location end-location]
   (and
   (or (= (first start-location) (first end-location))
       (= (second start-location) (second end-location)))

   (is-piece-in-the-way? game-board start-location end-location)

   (is-valid-end-location? game-board start-location end-location)))
  )

(deft Bishop []
  PieceType
  (image-path [this] (image-asset "bishop_white.png"))
  MovablePiece
  (is-valid-move-for-piece?
   [this game-board start-location end-location]
   (and
    (let [move-direction-magnitude (map abs (map - end-location start-location))]
      (= (first move-direction-magnitude) (second move-direction-magnitude)))

    (is-piece-in-the-way? game-board start-location end-location)

    (is-valid-end-location? game-board start-location end-location))))

(deft Knight []
  PieceType
  (image-path [this] (image-asset "knight_white.png"))
  MovablePiece
  (is-valid-move-for-piece?
   [this game-board start-location end-location]
   (and
    (let [direction (map abs (map - end-location start-location))]
      (or (and (= (first direction) 1) (= (second direction) 2))
          (and (= (first direction) 2) (= (second direction) 1))))
    (is-valid-end-location? game-board start-location end-location))))

(deft Queen []
  PieceType
  (image-path [this] (image-asset "queen_white.png"))
  MovablePiece
  (is-valid-move-for-piece?
   [this game-board start-location end-location]
   (or (is-valid-move-for-piece? (>Bishop) game-board start-location end-location)
       (is-valid-move-for-piece? (>Castle) game-board start-location end-location))))

(deft King []
  PieceType
  (image-path [this] (image-asset "king_white.png"))
  MovablePiece
  (is-valid-move-for-piece?
   [this game-board start-location end-location]
   (and (= (apply max (map abs (map - end-location start-location))) 1)
        (is-valid-end-location? game-board start-location end-location))))


(defn has-ever-moved? [game-board start-location]
  (some (fn [move] (= (::start-location move) start-location))
        (::move-history game-board)))

(defn is-enemy-attacking? [game-board enemy-color location]
  (let [enemy-piece-locations (filter
                               (fn [loc] (= (::color (get-in (::tiles game-board) loc) enemy-color) enemy-color))
                               (for [x (range 8)
                                     y (range 8)]
                                 [x y]))]
    (some (fn [enemy-location]
            (is-valid-move-for-piece?
             (::piece-type (get-in (::tiles game-board) enemy-location))
             game-board enemy-location location))
          enemy-piece-locations)))
    
(defmethod special-move-for-piece ::King
  [this game-board start-location end-location]
  (let [curr-color (::color (get-in (::tiles game-board) start-location))
        kings-rook-loction [7 (if (= curr-color ::white) 0 7)]
        queens-rook-loction [0 (if (= curr-color ::white) 0 7)]]
    (cond
      (and (not (has-ever-moved? game-board start-location))
           (not (has-ever-moved? game-board kings-rook-loction))
           (is-piece-in-the-way? game-board start-location kings-rook-loction)
           (every? (fn [pos]
                     (not (is-enemy-attacking? game-board (if (= curr-color ::white) ::black ::white)
                                               pos)))
                   (concat (positions-between start-location end-location) [start-location end-location]))
           (= start-location [4 (if (= curr-color ::white) 0 7)])
           (= end-location [6 (if (= curr-color ::white) 0 7)])

           )
      (-> game-board
          (update ::tiles assoc-in start-location nil)
          (update ::tiles assoc-in end-location
                  (get-in (::tiles game-board) start-location))
          (update ::tiles assoc-in kings-rook-loction nil)
          (update ::tiles assoc-in
                  (map - end-location [1 0])
                  (get-in (::tiles game-board) kings-rook-loction)))


      (and (not (has-ever-moved? game-board start-location))
           (not (has-ever-moved? game-board queens-rook-loction))
           (is-piece-in-the-way? game-board start-location queens-rook-loction)
           (every? (fn [pos]
                     (not (is-enemy-attacking? game-board (if (= curr-color ::white) ::black ::white)
                                               pos)))
                   (concat (positions-between start-location end-location) [start-location end-location]))
           (= start-location [4 (if (= curr-color ::white) 0 7)])
           (= end-location [2 (if (= curr-color ::white) 0 7)]))
      (-> game-board
          (update ::tiles assoc-in start-location nil)
          (update ::tiles assoc-in end-location
                  (get-in (::tiles game-board) start-location))
          (update ::tiles assoc-in queens-rook-loction nil)
          (update ::tiles assoc-in
                  (map - end-location [-1 0])
                  (get-in (::tiles game-board) queens-rook-loction))))))
          

      
           
         
    

(deft Pawn []
  PieceType
  (image-path [this] (image-asset "pawn_white.png"))

  MovablePiece
  (is-valid-move-for-piece?
   [this game-board start-location end-location]
   (let [curr-piece-color (::color (get-in (::tiles game-board) start-location))
         move-direction (into [] (map - end-location start-location))]
     (or 
      ;; move forward one square
      (and (= move-direction
              (if (= curr-piece-color ::white)
                [0 1]
                [0 -1]))
           (nil? (get-in (::tiles game-board) end-location)))
      ;; capture a piece
      (and (= (abs (first move-direction)) 1)
           (= (second move-direction) (if (= curr-piece-color ::white) 1 -1))
           (not (nil? (get-in (::tiles game-board) end-location)))
           (not (= (::color (get-in (::tiles game-board) end-location))
                   curr-piece-color)))
      
      ;; two squares from start location
      (and (or (and (= curr-piece-color ::white) (= (second start-location) 1))
               (and (= curr-piece-color ::black) (= (second start-location) 6)))
           (= move-direction (if (= curr-piece-color ::white)
                               [0 2]
                               [0 -2]))
           (is-piece-in-the-way? game-board start-location end-location)
           (nil? (get-in (::tiles game-board) end-location)))
      ;; capture en-passant
      ))))

(defmethod special-move-for-piece ::Pawn
  [this game-board start-location end-location]
  (let [curr-piece-color (::color (get-in (::tiles game-board) start-location))
        move-direction (into [] (map - end-location start-location))
        prev-move (last (::move-history game-board))]
    (cond
      ;; en passant
      (and (= (second move-direction)
              (if (= curr-piece-color ::white)
                1 -1))
           (= (abs (first move-direction)) 1)
         (= (:type (::piece-type (::piece prev-move))) ::Pawn)
         (= (apply max (map abs (map - (::end-location prev-move) (::start-location prev-move)))) 2)
         (= end-location
            (into []
                  (map +
                       (map (fn [x] (/ x 2 )) (map - (::end-location prev-move) (::start-location prev-move)))
                       (::start-location prev-move)))))
      (-> game-board
          (update ::tiles assoc-in start-location nil)
          (update ::tiles assoc-in end-location
                  (get-in (::tiles game-board) start-location))
          (update ::tiles assoc-in (::end-location prev-move)
                  nil))

      (and (is-valid-move-for-piece? this game-board start-location end-location)
           (or (= (second end-location) 0)
               (= (second end-location) 7)))
      (-> game-board
          (update ::tiles assoc-in start-location nil)
          (update ::tiles assoc-in end-location
                  (assoc (get-in (::tiles game-board) start-location)
                         ::piece-type (>Queen))))
      :else nil)))


(defn is-valid-move? [game-board start-location end-location]
  (let [curr-piece-type (::piece-type (get-in (::tiles game-board) start-location))]
    (and (= (::curr-move game-board)
            (::color (get-in (::tiles game-board) start-location)))
         (or (is-valid-move-for-piece?
              curr-piece-type
              game-board start-location end-location)
             (special-move-for-piece curr-piece-type game-board start-location end-location)))))


(defnt apply-move-to-tiles [game-board start-location end-location] ChessBoard
  (if-let [move (special-move-for-piece (::piece-type (get-in tiles start-location)) game-board start-location end-location)]
    move
    (-> game-board
      (update ::tiles assoc-in end-location (get-in tiles start-location))
      (update ::tiles assoc-in start-location nil))))

(defnt move-tile [game-board start-location end-location] ChessBoard
  (-> game-board
      (apply-move-to-tiles start-location end-location)
      (update ::curr-move (fn [x] (if (= x ::white) ::black ::white)))
      (update ::move-history conj
              (>ChessMove
               :piece (get-in tiles start-location)
               :start-location start-location
               :end-location end-location))))

(defn move-selected-piece [game-board-atom currently-selected-location click-location]
  (cond
    (nil? @currently-selected-location) (reset! currently-selected-location click-location)
    (= @currently-selected-location click-location) (reset! currently-selected-location nil)
    
    (not (is-valid-move? @game-board-atom @currently-selected-location click-location))
    (do (js/alert "your move is invalid")
        (reset! currently-selected-location nil))
    :else (do
            (swap! game-board-atom move-tile @currently-selected-location click-location)
            (reset! currently-selected-location nil))))

                                 
                            

(defn display-board [game-board-atom]
  (let [currently-selected-location (r/atom nil)]
    (fn [game-board-atom]
      (witht [ChessBoard @game-board-atom]
             [:h-box
              (doall (for [x (range (count tiles))]
                ^{:key x}
                [:v-box
                 (doall (for [y (reverse (range (count (nth tiles x))))]
                   ^{:key y}
                   [:p {:style {:background-color (cond
                                                    (= [x y] @currently-selected-location)  "yellow"
                                                    (= (mod (+ x y) 2) 1) "white"
                                                    :else "black")
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
                      "")]))]))]))))

  

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
      

(dev/start! {:report (pretty/reporter)})


(def curr-game-atom (r/atom (>ChessBoard :tiles (make-game-tiles)
                                         :curr-move ::white
                                         :move-history [])))
;; (= (:type (::piece-type (::piece (last (::move-history @curr-game-atom))))) ::Pawn)


(defn main-game-view []
  [er/heroed-content
   [display-board curr-game-atom]])


  


;; (mi/collect!)           ;; registers :malli/schema metadata into the function registry
;; (mi/instrument!)        ;; wraps functions with validation

;; ;; For clj-kondo integration:
;; (-> (mc/collect *ns*)   ;; collects schemas from a namespace
;;     (mc/linter-config)) ;; generates linter config
;; (mc/emit!)              ;; writes .clj-kondo config to disk
