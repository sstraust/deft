(ns examples.tic-tac-toe
  {:dev/always true}
  (:require
   [deft.core-shared]
   [malli.core]
   [easyreagent.components :as er]
   [reagent.core :as r]
   [reagent.dom.client :as rdom-client]
   [malli.instrument :as mi]
   )
  (:require-macros [deft.core :refer [deft witht defp defnt]]))




(deft GameBoard [tiles - [:vector [:vector [:enum ::x ::o nil]]]
                 curr-move - [:enum ::x ::o]])



(defn make-new-game []
  (>GameBoard :tiles (into [] (repeat 3 (into [] (repeat 3 nil))))
              :curr-move ::x))


;; (mi/instrument!)
(defnt place-tile [board [loc-x loc-y]] GameBoard
  (when (get-in tiles [loc-x loc-y])
    (do
      (js/alert "invalid tile placement")
      (throw (js/exception "Invalid tile placement"))))
  (-> board
      (update ::tiles assoc-in [loc-x loc-y] curr-move)
      (assoc ::curr-move (if (= curr-move ::x) ::o ::x))))
  
  


(defn display-tile [game-board-atom [x y]]
  (witht [GameBoard @game-board-atom]
    [:v-box.p-8.h-4.w-4.items-center.justify-center
     {:on-click #(swap! game-board-atom place-tile [x y])
      :class (str
              (when (not (= x 0))
                " border-l-1")
              (when (not (= x (dec (count tiles))))
                " border-r-1")
              (when (not (= y 0))
                " border-t-1")
              (when (not (= y (dec (count tiles))))
                " border-b-1"))}
     (case (get-in tiles [x y])
       ::x "X"
       ::o "O"
       "")]))

(defn is-winning-seq? [tiles tile-positions-list]
  (let [tile-values (map #(get-in tiles %) tile-positions-list)]
    (and (= (count (distinct tile-values)) 1)
         (not (nil? (first tile-values))))))


(defnt is-victory? [board] GameBoard
  (let [possible-victory-paths
        (concat
         (for [i (range (count tiles))]
           (for [j (range (count (first tiles)))] [i j]))

         (for [j (range (count (first tiles)))]
           (for [i (range (count tiles))] [i j]))

         [(for [i (range (count tiles))] [i (- (dec (count tiles)) i)])]
         [(for [i (range (count tiles))] [i i])])]
    (some (fn [victory-locs]
            (when (is-winning-seq? tiles victory-locs) victory-locs))
          possible-victory-paths)))





(defn display-game-grid [game-board-atom]
  [:v-box
   (when (is-victory? @game-board-atom)
     [:div "Victory!!"])
   (witht [GameBoard @game-board-atom]
     [:h-box
      (for [x (range (count tiles))]
        [:v-box
         (for [y (range (count (nth tiles x)))]
           [display-tile game-board-atom [x y]])])])])

  
(def curr-board (r/atom (make-new-game)))
(defn main-game-view []
  [er/heroed-content
   [display-game-grid curr-board]])





























;; (deft GameBoard [tiles
;;                  curr-move])

;; (defn make-new-game []
;;   (>GameBoard :tiles (into [] (repeat 3 (into [] (repeat 3 nil))))
;;               :curr-move ::x))


;; (defnt place-tile [board [loc-x loc-y]] GameBoard
;;   (when (get-in tiles [loc-x loc-y])
;;     (do
;;       (js/alert "invalid tile placement")
;;       (throw (js/exception "Invalid tile placement"))))
;;   (-> board
;;       (update ::tiles assoc-in [loc-x loc-y] curr-move)
;;       (assoc ::curr-move (if (= curr-move ::x) ::o ::x))))


;; (defn is-winning-seq? [tiles tile-positions-list]
;;   (let [tile-values (map #(get-in tiles %) tile-positions-list)]
;;     (and (= (count (distinct tile-values)) 1)
;;          (not (nil? (first tile-values))))))

;; (defnt is-victory? [board] GameBoard
;;   (let [possible-victory-paths
;;         (concat (for [i (range (count tiles))]
;;                   (for [j (range (count (first tiles)))] [i j]))

;;                 (for [j (range (count (first tiles)))]
;;                   (for [i (range (count tiles))] [i j]))

;;                 [(for [i (range (count tiles))] [i (- (dec (count tiles)) i)])]
;;                 [(for [i (range (count tiles))] [i i])])]
;;     (some (fn [victory-locs]
;;             (when (is-winning-seq? tiles victory-locs) victory-locs))
;;           possible-victory-paths)))


;; (defn display-tile [game-board-atom [x y]]
;;   (witht [GameBoard @game-board-atom]
;;     [:v-box.p-8.h-4.w-4.items-center.justify-center
;;      {:on-click #(swap! game-board-atom place-tile [x y])
;;       :class (str
;;               (when (not (= x 0))
;;                 " border-l-1")
;;               (when (not (= x (dec (count tiles))))
;;                 " border-r-1")
;;               (when (not (= y 0))
;;                 " border-t-1")
;;               (when (not (= y (dec (count tiles))))
;;                 " border-b-1"))
;;               }
;;      (case (get-in tiles [x y])
;;        ::x "X"
;;        ::o "O"
;;        "")]))

;; (defn display-game-grid [game-board-atom]
;;   [:v-box
;;    (when (is-victory? @game-board-atom)
;;      [:div "Victory!!"])
;;   [:h-box
;;    (witht [GameBoard @game-board-atom]
;;      (for [x (range (count tiles))]
;;        [:v-box
;;         (for [y (range (count (nth tiles x)))]
;;           [display-tile game-board-atom [x y]]
;;           )]))]])

;; (defn main-game-view [] ["hi"])

;; (comment
;;   1
;;   ;; this is loaded in core.cljs, using something that essentially does
;;   ;; the code below
;; (def root-container (.getElementById js/document "main-app"))
;; (def react-root (rdom-client/create-root root-container))

;; (defn load-react [component]
;;   (rdom-client/render
;;    react-root
;;    [component]))

;; (load-react main-game-view)
;; )
