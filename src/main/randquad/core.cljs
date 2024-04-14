(ns randquad.core
  (:require
    [clojure.string :as cs]
    [goog.string :as gstring]
    [goog.string.format]
    [reagent.core :as r]
    [reagent.dom :as rdom]))


(defonce quad (r/atom nil))
(defonce msg (r/atom ""))
(defonce visibility (r/atom "hidden"))
(defonce input (r/atom ""))


(def style
  {:style
   {:position :fixed
    :top "50%"
    :left "50%"
    :text-align "center"
    :transform "translate(-50%, -50%)"}})


(defn randnum
  [n adjust]
  (let [random-number (rand-int n)
        adjusted-number (- random-number adjust)]
    (if (zero? adjusted-number)
      (recur n adjust)
      adjusted-number)))


(defn hide-one
  "if n = 1 returns empty string, 
  otherwise return n as string"
  [first? last? n]
  (if (= (abs n) 1)
    (if (= n 1)
      (cond
        first? ""
        last? "+1"
        :else "+")
      (if last?
        "-1"
        "-"))
    n))


(defn format-ve
  "if n is negative format n into string, 
  if n is positive format n into string and add + sign"
  [first? n]
  (if (string? n)
    n
    (if (pos? n)
      (if first?
        (str n)
        (str "+ " n))
      (str "- " (abs n)))))


(defn neg
  "the"
  [n]
  (* n -1))


(def fmt-first
  (comp (partial format-ve true)
        (partial hide-one true false)))


(def fmt
  (comp (partial format-ve false)
        (partial hide-one false false)))

(def fmt-last
  (comp (partial format-ve false)
        (partial hide-one false true)))


(defn genquad
  "generates random quad equation"
  []
  (js/alert "genquad ran")
  (let [-a (randnum 19 9)
        -b (randnum 19 9)
        -c (randnum 11 5)
        a -c
        b (* -c (+ -a -b))
        c (* -a -b -c)]

    [(gstring/format
       "$%sx^2  %sx  %s$"
       (fmt-first a)
       (fmt b)
       (fmt-last c))
     {:a (neg -a)
      :b (neg -b)}]))


(defn input-box
  [value]
  [:input
   {:type "text"
    :value @value
    :on-change
    #(reset!
       value
       (-> %
           .-target
           .-value))}])


(defn validate-input
  [s root]
  (let [processed (cs/replace s #" " "")
        matches (map #(js/parseInt %)
                     (re-seq #"-?\d+" processed))
        flipped (map neg matches)
        ans root
        a (first flipped)
        b (second flipped)]
    (or (and (= (:a ans) a) (= (:b ans) b))
        (and (= (:b ans) a) (= (:a ans) b)))))


(defn submit
  "submit and validate input, rerender"
  [input root msg visibility]
  (if (validate-input @input root)
    (do (reset! msg "correct answer")
        (reset! visibility "visible"))
    (let [ans root
          a (:a ans)
          b (:b ans)]
      (println a b)
      (reset!
        msg
        (gstring/format "incorrect answer, roots are (%s, %s)"
                        a b)))))


(defn regen
  "regenerate quad equation"
  [msg visibility]
  (js/alert "regen")
  (reset! quad (genquad))
  (reset! msg "")
  (reset! visibility "hidden")
  (reset! input ""))

(defn indicator
  [text]
  [:p @text])


(defn main-component
  []
  (let [root (second @quad)
        quad-mut (first @quad)]
    [:div style
     [:div
      [:p
       {:style {:font-size "200%"}}
       quad-mut]
      [:div
       [input-box input]
       [:button {:on-click #(submit input root msg visibility)}
        "submit"]
       [indicator msg]]
      [:div {:style {:visibility @visibility}}
       [:button {:on-click #(regen msg visibility)}
        "next"]]]]))


;; TODO move genquad away from main-component 
;; and place it in toplevel

(defn ^:export run
  []
  (reset! quad (genquad))
  (rdom/render
    [#'main-component]
    (js/document.getElementById "app")))
