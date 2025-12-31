(ns deft.deft-test
  (:require
   [clojure.pprint :as pprint]
   [clojure.test :refer :all]
   [deft.core :refer :all :as deft]
   [deft.core-shared :as core-shared]
   [deft.deftest-external-ns-helper :as deftest-external-ns-helper]
   [malli.core]
   [malli.instrument :as mi]))



(deftest simple-object-test
  (testing 
      "The simplest test we can show! See what's possible with deft!"
    (deft Circle [position
                  radius])
    (def circle1 (>Circle :position [1 2]
                          :radius 12))
    (witht [Circle circle1]
      (is (= position [1 2])
          (= radius 12))))

  (testing
      "test that schema constructor respects malli type checking"
    (deft Circle4 [position
                   radius - :double])
    (mi/instrument!)
    (is (thrown? clojure.lang.ExceptionInfo
                 (>Circle4 :position [1 2]
                           :radius "wowza"))))
  (testing
      "test that you can create a protocol, and then implement that protocol"
    (defp Shape
      (area [this]))
    (deft Square [side-length - :double]
      Shape
      (area [this] (* side-length side-length)))
    (let [sq (>Square :side-length 12)]
      (is (= (area sq) 144))))

  (testing
      "test that creating a type that does not fully implement a protocol fails"
    (defp Shape2
      (area [this]))
    (is (thrown?
         Exception
         (deft BadSquare [side-length]
           Shape2))))
  (testing
      "test that creating a type that does not fully implement a protocol fails -- more complex test"
    (defp Shape3
      (area [this])
      (perimeter [this]))
    (is (thrown?
         Exception
         (deft BadSquare [side-length]
           Shape3
           (perimeter [this] (* 4 side-length)))))))


(deftest dissoc-types-test
  (testing
      "test that dissoc reatins record type, except when dissocing initialized field"
    (deft DissocCircle [position radius])
    (is (= (type
            (dissoc 
             (>DissocCircle :position [3 4]
                            :radius 4)
             :wowza))
           :deft.deft-test/DissocCircle))
    (is (= (type
            (dissoc 
             (>DissocCircle :position [3 4]
                            :radius 4)))
           :deft.deft-test/DissocCircle))
    (is (= (type
            (dissoc 
             (>DissocCircle :position [3 4]
                            :radius 4)
             ::position))
           clojure.lang.PersistentArrayMap))))


(deftest external-definitions-test
  (testing
      "test that allows external allows you to use externally defined methods"
    (defp Test4Shape
      (area [this]))
    (is (thrown?
         Exception
         (deft Test4BadSquare [side-length]
           Test4Shape)))
    (defmethod area ::Test4Circle [this] 12)
    (deft Test4Circle []
      Shape :allows-external [area])
    (is (= (area (>Test4Circle)) 12))

    (defmethod area ::Test4Circle2 [this] 15)
    (deft Test4Circle2 []
      Shape :allows-external :all)
    (is (= (area (>Test4Circle2)) 15))))

;; Test 12
;;   Verify that deft and defp work when importing across namespaces.
(deftest external-namespaces-test
  (testing
      "Verify that deft constructor can be called from other ns."
    (is (= (deftest-external-ns-helper/>Circle12 :position 1
             :radius 12)
           (core-shared/->TypeMap
             {:deft.deftest-external-ns-helper/position 1,
              :deft.deftest-external-ns-helper/radius 12}
             {:type :deft.deftest-external-ns-helper/Circle12}))))
  (testing
      "Verify that defp can be implemented from other ns."
    (deft Circle12-2 []
      deftest-external-ns-helper/Shape
      (test-area [this] "hi"))
    (is (= (deftest-external-ns-helper/test-area (>Circle12-2)) "hi")))
  (testing
      "Verify that deft can implement external methods in another ns"
    (defp Wowza12
      :external-methods [deftest-external-ns-helper/my-external-method])
    (deft Wowza12Impl []
      Wowza12
      (deftest-external-ns-helper/my-external-method [this] "wowza"))
    (is (= (deftest-external-ns-helper/my-external-method (>Wowza12Impl))
           "wowza"))))


;; Test 13
(deftest external-refs-test
  (testing "Verify that external references behave as expected when using witht"
    (def hello13 3)
    (deft MyClass13 [hello13])

    (is (thrown? Exception
                 (eval  '(witht [MyClass13 (>MyClass13 :hello13 "hi")]
                                   hello13))))
    

    (is (= (witht [MyClass13 (>MyClass13 :hello13 "hi") :allow-overrides [] :skip-fields [hello13]]
             hello13)
           3))

    (is (= (witht [MyClass13 (>MyClass13 :hello13 "hi") :allow-overrides [hello13] :skip-fields []]
             hello13)
           "hi"))))



;; TODO:
;;  -- Create tests to verify printing behavior
;;  -- Create tests to verify that objects without the same type
;;       are not considered equal
;;  -- Create a fragment type to represent a typemap style object
;;       that retains its type when keys are dissoced. you are creating
;;       potentially more issues and complexity, because now you need to
;;       define equality for this relation. maybe ignore this thing for now
;; 
