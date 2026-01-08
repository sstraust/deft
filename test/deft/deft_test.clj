(ns deft.deft-test
  (:require
   [clojure.test :refer :all]
   [deft.core :refer :all :as deft]
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



;; api-spec means that everything in this test is part of the API SPEC
;; and BEHAVIOR SHOULD NOT BE CHANGED WITHOUT CAUTION
;; Test 15
(deftest deft-malli-type-definitions-test ^:api-spec
  (testing "test that deft creates a variable with a Malli schema, representing the object's type,
            using any for unspecified fields"
    (deft Rectangle15_1 [side1 side2])
    (is (= Rectangle15_1 [:map
                          [::side1 :any]
                          [::side2 :any]
                          [:type [:= ::Rectangle15_1]]])))
  (testing "test that deft creates a variable with a Malli schema, using type input args"
    (deft Rectangle15_2 [side1 - :double
                         side2 - :double])
    (is (= Rectangle15_2 [:map
                          [::side1 :double]
                          [::side2 :double]
                          [:type [:= ::Rectangle15_2]]])))
  (testing "test that deft Malli Schema can accept different combinations of specified/unspecified types"
    (deft Rectangle15_3 [side1 side2 - :double position])
    (is (= Rectangle15_3 [:map
                          [::side1 :any]
                          [::side2 :double]
                          [::position :any]
                          [:type [:= ::Rectangle15_3]]]))

    (deft Person_15_1 [name - :string age height])
    (is (= Person_15_1 [:map
                        [::name :string]
                        [::age :any]
                        [::height :any]
                        [:type [:= ::Person_15_1]]]))

    (deft Person_15_2 [name - :string age - :double height])
    (is (= Person_15_2 [:map
                        [::name :string]
                        [::age :double]
                        [::height :any]
                        [:type [:= ::Person_15_2]]]))))

;; Test 16
(deftest deft-construction-function-test ^:api-spec
  (testing "test that deft creates a constructor function that inputs keyword args, and outputs
            a map with the correct keys and :type"
    
    (deft Rectangle16_1 [side1 side2])
    (is (= (>Rectangle16_1 :side1 1 :side2 2)
           {::side1 1
            ::side2 2
            :type ::Rectangle16_1})))
  (testing "test that it still works if the type is defined in an external namespace"
    (is (= (deftest-external-ns-helper/>Rectangle16_2 :side1 1 :side2 2)
           {::deftest-external-ns-helper/side1 1
            ::deftest-external-ns-helper/side2 2
            :type ::deftest-external-ns-helper/Rectangle16_2}))))

;; Test 17
(deftest deft-construction-malli-test ^:api-spec
  (testing "test that deft annotates the type's constructor function (output) with an appropriate
            malli schema"
    (deft Position17_1 [x y])
    (is (= (malli.core/form (malli.core/from-ast (:output (malli.core/ast (get-in (malli.core/function-schemas) ['deft.deft-test '>Position17_1 :schema])))))
       Position17_1))
    (is (=  (malli.core/form (malli.core/from-ast (:output (malli.core/ast (get-in (malli.core/function-schemas) ['deft.deft-test '>Position17_1 :schema])))))
           [:map
            [::x :any]
            [::y :any]
            [:type [:= ::Position17_1]]]))


    (deft Position17_2 [x y - :double])
    (is (= (malli.core/form (malli.core/from-ast (:output (malli.core/ast (get-in (malli.core/function-schemas) ['deft.deft-test '>Position17_2 :schema])))))
       Position17_2))
    (is (= (malli.core/form (malli.core/from-ast (:output (malli.core/ast (get-in (malli.core/function-schemas) ['deft.deft-test '>Position17_2 :schema])))))
       [:map
        [::x :any]
        [::y :double]
        [:type [:= ::Position17_2]]])))

  (testing "test that deft annotates the type constructor's input, to require all of the fields are passed
            as input params"
    (deft Position17_3 [x y])
    (mi/instrument!)
    (is (thrown? clojure.lang.ExceptionInfo
                 (>Position17_3 :x 1.0))))

  (testing "test that deft annotates the type constructor's input, and validates the argument types"
    (deft Position17_4 [x y - :double])
    (mi/instrument!)
    (is (thrown? clojure.lang.ExceptionInfo
                 (>Position17_4 :x 1.0 :y "carrot"))))

  (testing "test that deft constructor passes if all of the types are valid"
    (deft Position17_5 [x - :double
                        y - :double])
    (mi/instrument!)
    (is (not (nil? (>Position17_5 :x 1.0 :y 3.0)))))

  (testing "test that deft constructor does not allow extra args"
    (deft Position17_6 [x y])
    (mi/instrument!)
    (is
     (is (thrown? clojure.lang.ExceptionInfo
                  (>Position17_4 :x 1.0 :y 3.0 :z 3))))))

;; Test 18
(deftest witht-destructures-fields ^:api-spec
  (testing "test that witht correctly destructures a record's fields so that they can be used"
    (deft Position18_1 [x y])
    (is (= (witht [Position18_1 (>Position18_1 :x 1 :y 2)]
             [x y])
           [1 2]))


    (let [pos (>Position18_1 :x 3 :y 4)]
      (is (= (witht [Position18_1 pos]
               (+ y 2))
             6)))))


;; Test 13
(deftest deft-external-refs-test ^:api-spec
  (testing "Verify that external references throw an exception on symbol collision when using deft"
    (def hello13_1 3)
    (deft MyClass13_1 [hello13_1])

    (is (thrown? Exception
                 (eval  '(witht [MyClass13_1 (>MyClass13_1 :hello13_1 "hi")]
                           hello13_1)))))
  (testing "Verify that class fields are ignored when using skip-fields"
    (def hello13_2 3)
    (deft MyClass13_2 [hello13_2])
    (is (= (witht [MyClass13_2 (>MyClass13_2 :hello13_2 "hi") :allow-overrides [] :skip-fields [hello13_2]]
             hello13_2)
           3)))

  (testing "Verify tht external references are skipped when using allow-overrides"
    (def hello13_3 3)
    (deft MyClass13_3 [hello13_3])
    (is (= (witht [MyClass13_3 (>MyClass13_3 :hello13_3 "hi") :allow-overrides [hello13_3] :skip-fields []]
             hello13_3)
           "hi"))))


;; Test 19
(deftest defnt-destructures-function ^:api-spec
  (testing "test that defnt defines a function with destructuring"
    (deft Position18_1 [x y])
    (defnt L1-distance-to-origin [this] Position18_1
      (+ (abs x) (abs y)))
    (is (= (L1-distance-to-origin (>Position18_1 :x 1 :y 2))
           3)))

  (testing "test that defnt destructuring fails when exists global var with same name"
    (deft Position18_2 [x_18 y_18])
    (def x_18 12)
    (is (thrown? Exception
                 (eval '(defnt L1-distance-to-origin [this] Position18_2
                          (+ (abs x_18) (abs y_18))))))))


;; Test 20
;; note that this test is _NOT_ part of the api spec, and you should NOT rely on this implementation detail
(deftest defp-protocol-test
  (testing "Test defp output format"
    (defp MyClass20_1
      (my-method [this hi]))
    (is (= MyClass20_1
           {:deft.core/implements-methods
            [{:deft.core/multimethod (eval 'deft.deft-test/my-method)
              :deft.core/key-fn identity}]})))


  (testing "Test defp output format with external methods"
    (defp MyClass20_2
      :external-methods [deftest-external-ns-helper/my-external-method]
      (my-method [this hi]))
    (is (= MyClass20_2
           {:deft.core/implements-methods
            [{:deft.core/multimethod (eval 'deft.deft-test/my-method)
              :deft.core/key-fn identity}
             {:deft.core/multimethod (eval 'deft.deftest-external-ns-helper/my-external-method)
              :deft.core/key-fn identity}]})))

  (testing "Test defp output format with empty external methods"
    (defp MyClass20_3
      :external-methods []
      (my-method [this hi]))
    (is (= MyClass20_3
           {:deft.core/implements-methods
            [{:deft.core/multimethod (eval 'deft.deft-test/my-method)
              :deft.core/key-fn identity}]})))

  (testing "Test defp output format with extends"
    (defp MyClass20_3
      :external-methods []
      (my-method [this hi]))
    (is (= MyClass20_3
           {:deft.core/implements-methods
            [{:deft.core/multimethod (eval 'deft.deft-test/my-method)
              :deft.core/key-fn identity}]})))

  (testing "Test defp output format with extends"
    (defp MyClass20_base
      (my-method [this hi]))
    (defp MyClass20_base2
      (my-other-method [this]))
    (defp MyClass20_extension
      :extends [MyClass20_base MyClass20_base2])

    (is (= MyClass20_extension
           {:deft.core/implements-methods
            [{:deft.core/multimethod (eval 'deft.deft-test/my-method)
              :deft.core/key-fn identity}
             {:deft.core/multimethod (eval 'deft.deft-test/my-other-method)
              :deft.core/key-fn identity}]}))))

;; Test 21
(deftest defp-dispatch-type-test ^:api-spec
  (testing "Test that the protocol defines a multimethod that dispatches on :type or type"
    (defp Shape21_1
      (area21_1 [this]))
    (defmethod area21_1 :wowza [this]
      "wow!!")
    (defmethod area21_1 :default [this]
      "default")
    
    (is (= (area21_1 {:type :wowza})
           "wow!!"))
    (is (= (area21_1 (with-meta [] {:type :wowza}))
           "wow!!"))
    (is (= (area21_1 "hi")
           "default"))))


;; Test 22
(deftest defp-protocols-are-properly-namespaced ^:api-spec
  (testing "Verify that defp can be implemented from another namespace"
    (deft Circle22-2 []
      deftest-external-ns-helper/Shape
      (test-area [this] "hi"))
    (is (= (deftest-external-ns-helper/test-area (>Circle22-2)) "hi")))
  (testing
      "Verify that deft can implement external methods in another ns"
    (defp Wowza22
      :external-methods [deftest-external-ns-helper/my-external-method])
    (deft Wowza22Impl []
      Wowza22
      (deftest-external-ns-helper/my-external-method [this] "wowza"))
    (is (= (deftest-external-ns-helper/my-external-method (>Wowza22Impl))
           "wowza")))

  (testing "Verify that deft must implement all external methods"
    (defp Wowza22_2
      :external-methods [deftest-external-ns-helper/my-external-method])

    ;; it does not throw an error without wowza protocol
    (is (some? (eval `(deft ~'Wowza22_3 []))))
    ;; or with wowza and all methods impled
    (is (some? (eval `(deft ~'Wowza22_3 []
                        Wowza22_2
                        (deftest-external-ns-helper/my-external-method [~'this] "wowza")))))

    (is (thrown? java.lang.RuntimeException (eval `(deft ~'Wowza22_3 []
                                    Wowza22_2
                                                     )))))


  (testing "Verify that deft must implement all external methods"
    (defmulti my-external-method22 :type)
    (defmethod my-external-method22 ::Impl22_4 [this] "yes!")
    (defp Wowza22_4
      :external-methods [my-external-method22])

    ;; it does not throw an error without wowza protocol
    (is (some? (eval `(deft ~'Impl22_4 []))))
    ;; or with wowza and all methods impled
    (is (some? (eval `(deft ~'Impl22_4 []
                        Wowza22_4
                        ~'(my-external-method22 [this] "wowza")))))

      (is (thrown? java.lang.RuntimeException
                   (eval `(deft ~'Impl22_4 []
                        Wowza22_4))))))

;; Test 23
(deftest defp-protocols-allows-external ^:api-spec
  (testing "Verify that allows-external allows externally defined methods"
    (defp Wowza23_1
      (my-method23_1 [this]))

    (defmethod my-method23_1 ::WowzaImpl23_1 [this] "hi")
    
    (deft WowzaImpl23_1 []
      WowzaImpl23_1 :allows-external [my-method23_1])

    (is (= (my-method23_1 (>WowzaImpl23_1)) "hi")))

  (testing "Verify that deft does not count external methods if they are defined elsewhere"
    (defp Wowza23_2
      (my-method23_2 [this]))



    (is (thrown? java.lang.RuntimeException
                 (eval `(deft ~'WowzaImpl23_2 []
                          Wowza23_2))))

    ;; but it does work when evaled with the same evaluation mechanism
    ;; and allows-external set
    ;; why did this ever work?
    (is (some?
         (eval `(do
                  (in-ns 'deft.deft-test)
                  (defmethod my-method23_2 ~'::WowzaImpl23_2 ~'[this] "hi")
                  (deft ~'WowzaImpl23_2 []
                    Wowza23_2
                    :allows-external [my-method23_2]))))))

  (testing "Verify that allows external still fails if the multimethod is not defined"
    (defp Wowza23_3
      (my-method23_3 [this]))

    (is (thrown? java.lang.RuntimeException
                 (eval `(do
                          (in-ns 'deft.deft-test)
                          (deft ~'WowzaImpl23_3 []
                            Wowza23_3
                            ~':allows-external [my-method23_3])))))
    
    (is (some?
         (eval `(do
                  (in-ns 'deft.deft-test)
                  (defmethod my-method23_3 ~'::WowzaImpl23_4 ~'[this] "test")
                  (deft ~'WowzaImpl23_4 []
                    Wowza23_3
                    ~':allows-external [my-method23_3])))
         )))
  (testing "Verify allows external works with a mix of local and external methods"
    (defp Wowza23_4
      (my-method23_4 [this])
      (my-method23_5 [this]))

    (defmethod my-method23_5 ::Impl23_5 [this] "hi")
    (deft Impl23_5 []
      Wowza23_4 :allows-external [my-method23_5]
      (my-method23_4 [this] "hello"))
    (is (= (my-method23_4 (>Impl23_5)) "hello"))
    (is (= (my-method23_5 (>Impl23_5)) "hi")))

  (testing "Verify that allows external can have multiple methods listed as external"
    (defp Wowza23_5
      (my-method23_6 [this])
      (my-method23_7 [this]))

    (defmethod my-method23_6 ::Impl23_6 [this] "hi")
    (defmethod my-method23_7 ::Impl23_6 [this] "hello")
    (deft Impl23_6 []
      Wowza23_5 :allows-external [my-method23_6 my-method23_7])
    (is (= (my-method23_6 (>Impl23_6)) "hi"))
    (is (= (my-method23_7 (>Impl23_6)) "hello"))))



;; Test 24
(deftest defp-protocols-extend-protocols-test ^:api-spec
  (testing "Verify that extending a protocol allows you to extend a protocol"
    (defp Proto24_1
      (my-method24_1 [this]))

    (defp Proto24_2 :extends [Proto24_1]
      (my-other-method24_1 [this]))

    (is (thrown? java.lang.RuntimeException
                 (eval `(deft ~'Impl24_1 []
                          Proto24_2))))

    (is (thrown? java.lang.RuntimeException
                 (eval `(deft ~'Impl24_1 []
                          Proto24_2
                          ~'(my-other-method24_1 [this] "hi")
                          ))))
    (is (some?
                 (eval `(deft ~'Impl24_1 []
                          Proto24_2
                          ~'(my-other-method24_1 [this] "hi")
                          ~'(my-method24_1 [this] "hi")
                          )))))
  
  (testing "Verify that you can extend more than one protocol"
    (defp Proto24_3
      (my-method-24_3 [this]))

    (defp Proto24_4
      (my-second-method-24_4 [this]))

    (defp Proto24_extends_both_1 :extends [Proto24_3 Proto24_4]
      (extends-both-method_1 [this]))

    (is (thrown?  java.lang.RuntimeException
                  (eval `(deft ~'Impl24_2 []
                           Proto24_extends_both_1))))

    (is (thrown?  java.lang.RuntimeException
                  (eval `(deft ~'Impl24_2 []
                           Proto24_extends_both_1
                           ~'(my-method-24_3 [this] "hi")
                           ~'(extends-both-method_1 [this] "hi")))))

    (is (some?
         (eval `(deft ~'Impl24_2 []
                  Proto24_extends_both_1
                  ~'(my-method-24_3 [this] "hi")
                  ~'(my-second-method-24_4 [this] "hi4")
                  ~'(extends-both-method_1 [this] "hi")))))
    )
  (testing "Verify that you can extend more than one method"
    (defp Proto24_5
      (my-method-24_6 [this])
      (my-method-24_7 [this]))

    (defp Impl24_4 :extends [Proto24_5])

    (is (thrown?  java.lang.RuntimeException
                  (eval `(deft ~'Impl24_4 []
                           Proto24_5))))

    (is (thrown?  java.lang.RuntimeException
                  (eval `(deft ~'Impl24_4 []
                           Proto24_5
                           ~'(my-method-24_6 [this] "hi")))))

    (is (some?
         (eval `(deft ~'Impl24_4 []
                           Proto24_5
                  ~'(my-method-24_6 [this] "hi")
                  ~'(my-method-24_7 [this] "hi")))))))

;; Test 25
(deftest method-implementations-can-use-the-records-fields ^:api-spec
  (testing "Verify that method implementations can rely on the records fields"
    (defp Shape25
      (get-width25 [this]))
    
    (deft Circle25 [radius]
      Shape25
      (get-width25 [this] (* 2 radius)))

    (is (= (get-width25 (>Circle25 :radius 4)) 8))))


;; Test 26
(deftest records-can-implement-multiple-protocols ^:api-spec
  (testing "Test that records can implement multiple protocols"
    (defp Shape26
      (get-width26 [this])
      (get-area26 [this]))
    
    (defp CoolFactor26
      (get-coolness26 [this y]))

    (deft Circle26 [radius]
      Shape26
      (get-width26 [this] (* 2 radius))
      (get-area26 [this] (* 3 radius radius)) ;think like an engineer!
      CoolFactor26
      (get-coolness26 [this y] (+ radius y)))

    (let [circle1 (>Circle26 :radius 3)]
      (is (= (get-width26 circle1) 6))
      (is (= (get-area26 circle1) 27))
      (is (= (get-coolness26 circle1 4) 7)))))


;; Test 27
(deftest records-can-implement-protocols-with-no-methods ^:api-spec
  (testing "Test that records can implement protocols with no methods"
    (defp Shape27)
    (deft Circle27 [radius]
      Shape27)
    (is (= (>Circle27 :radius 4)
           {::radius 4
            :type ::Circle27}))))


;; Test 28
(deftest records-must-implement-all-methods ^:api-spec
  (testing "verify record must implement all methods defined in the protocol"
    (defp Shape28
      (area28 [this])
      (perimeter28 [this]))
    (is (thrown?  java.lang.RuntimeException
                  (eval `(deft ~'Impl28_4 []
                           Shape28))))

    (is (thrown?  java.lang.RuntimeException
                  (eval `(deft ~'Impl28_4 []
                           Shape28
                           ~'(perimeter28 [this] 2)))))
    (is (some?
                  (eval `(deft ~'Impl28_4 []
                           Shape28
                           ~'(perimeter28 [this] 2)
                           ~'(area28 [this] 2)))))))


;; Test 29
(deftest external-methods-work-from-different-ns ^:api-spec
  (testing "Test that external methods work when importing proto form other ns"
    (defmethod deftest-external-ns-helper/test-area ::Circle29 [this]
      12)
    (deft Circle29 []
      deftest-external-ns-helper/Shape :allows-external [deftest-external-ns-helper/test-area])
    (is (= (deftest-external-ns-helper/test-area (>Circle29)) 12))))
      

      
    
      
      
    
    


;; (eval '(deft Wowza22Impl_2 []
;;          Wowza22_2
;;          (deftest-external-ns-helper/my-external-method [this] "wowza")))


    
    
    




(deftest dissoc-types-test
  (testing
      "test that dissoc reatins record type, except when dissocing initialized field"
    (deft DissocCircle [position radius] :record-like)
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
    (is (= (deftest-external-ns-helper/>Circle12
             :position 1
             :radius 12)
           {:deft.deftest-external-ns-helper/position 1,
            :deft.deftest-external-ns-helper/radius 12,
            :type :deft.deftest-external-ns-helper/Circle12})))
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





;; TODO tests for record-like:
;;  -- Create tests to verify printing behavior
;;  -- Create tests to verify that objects without the same type
;;       are not considered equal
;;  -- Create a fragment type to represent a typemap style object
;;       that retains its type when keys are dissoced. you are creating
;;       potentially more issues and complexity, because now you need to
;;       define equality for this relation. maybe ignore this thing for now
