# Deft

A collection of macros designed to address issues with objects in Clojure.

#### Example Syntax

```clojure
  (deft Circle [position radius])
  (def circle1 (>Circle :position [1 2]
                        :radius 12))
  (witht [Circle circle1]
	 (str position ": " radius)) ; => [1 2]: 12
```

#### What's wrong with records and protocols?
- Records are not REPL friendly. If you redefine a method inside of a Clojure record, it does not take effect until that record is reinstantiated.
- Records use single : keywords for field access, making programs difficult to refactor.
- Defining a record method is cumbersome because it requires an interface, but it's the only way to automatically destructure the record's fields.
- Leads to huge java-like class blocks in your programs. These are hard to manuever around, and don't let you do things like keep a method definition next to an assocaited macro definition, group related static helper functions, create let over lambdas, and generally give you the flexibility to organize a program the way you want.
- Most people in the community recommend you use maps instead (when feasible).

#### What's wrong with clojure maps (and multimethods)?
- When you define a new type, it's hard to verify that it implements all relevant multimethods. If you miss one, it will error at runtime, or fallback to a default value.
- Likewise, if you define a new method on an interface, it's hard to verify that all the relevant types are changed.
- Creating a map + schema definition is cumbersome. You need to write a type schema, write a constructor that implements that schema, create a :type keyword in the output to use for routing multimethods, it's just messy, and way more work than it should be.
- You still need to destructure the keys *every single time you use it* in contrast to Clojure's records, which sort of do it for you.


#### What does this library provide?
- An easy-to-use macro, **deft**, that defines a type, creates an associated Malli schema, creates a constructor, and allows you to specify what Multimethods, or Multimethod collections that type must implement.
- A macro **witht** that takes a type as input, and automatically destructures the fields of that type, similar to clojure records.
- A macro **defp** which lets you define and implement protocols as collections of multimethods.
- clj-kondo macroexpansions for deft, defp, witht, and defnt
- (planned) additional clj-kondo linters to verify types are fully and correctly defined.

## Key Features

#### deft
```clojure
(deft Circle [position radius])
```
Define a type of thing.

What this does is:
- Define Circle, so it evaluates to a Malli schema, which is a :map containing the keys ::position and ::radius, and the key-value pair {:type ::Circle}
- Define >Circle, a constructor function taking in the keyword arguments :position and :radius, and returning a new map that implements that Malli schema. The constructed map includes the :type keyword, which evaluates to ::Circle, and can be used in multimethod dispatch. The >Circle function itself is annotated with an appropriate Malli schema.
- Globally register the deft metadata that Circle contains the keys ::position and ::radius, such that it can later be destructured automatically using witht.


You can also attach additional info to the Malli schema, e.g.

```clojure
(deft Circle [position - [:tuple :double :double]
              radius - :double])
```



You can also define **protocols** and **implementations** in much the same way as clojure records. However, even though we use the same syntax as Clojure records, these are actually *implemented* using multimethod dispatch. This means you can do things like define custom dispatch behavior, create protocols as collections of *existing* multimethods, and have things reload properly when method definitions are evaluated in the REPL.

We go into detail on this in the defp section, but provide an example of the syntax below:
```clojure
(deft Circle [position radius]
   Shape
   (area [this] (* pi radius radius)))
```

note: Currently the Malli schema for the constructor ```(>Circle :position [1 2] :radius 2)```, requires that the keys be passed in the same order they appear in deft (:position first, :radius second), due to limitations of the Malli framework (https://github.com/metosin/malli/issues/994, https://github.com/metosin/malli/issues/1003 )

#### witht
A convenience tool for accessing the value inside of a deft.

```clojure
(witht [Circle circle1]
	 (str position ": " radius))
```

Usually when you write Clojure programs with maps as your main structures, you get a lot of code that looks like this:
```clojure
(defn [{:keys [position radius] :as circle}]
   ...
```

witht is really just a convenience tool to make that process less cumbersome.


By default, witht doesn't let you redefine variables that already exist in your current context (calling ```(resolve var-name)``` must be nil). This is to help you avoid accidents that might happen in which adding a new field to a class unintentionally overrides a variable that was used somewhere else.

you can change this behavior using
```(witht [MyClass (>MyClass :hello "hi") :allow-overrides [] :skip-fields [hello]]```

where ```:allow-overrides``` uses witht to override the var anyway

and ```:skip-fields``` does not apply the binding for that field using witht





#### defp
Define a protocol as a collection of multifns. It can be *implemented* by a type, if for every multifn, there exists a method definition such that that type is its dispatch value.

```clojure
(defp Shape
  (area [this]))
```

What this does is:
- Define a new multifn that dispatches on :type or type, e.g.
  ```(defmulti area (fn [this & args] (or (:type this) (type this))))```
- Define the *protocol* Shape, as a list of multimethods that must be implemented for something to be considered a shape. i.e. something can only be considered a shape if
  ```(defmethod area ::Circle [this] ...)``` is implemented for that type.
- Allow a user to *declare* that something implements a particular protocol.


Example:
```clojure
(defp Shape
   (area [this]))
   
(deft Circle [r]
   Shape
   (area [this] (* PI r r)))
```



Importantly, because these are implemented as Clojure multimethods, you don't need to define or implement them all in the same place. 

For example, if you have an existing draw multifn
```
(ns draw-stuff)
(defmulti draw type)
```

Then you can do 
```clojure
(defp Drawable
  :external-methods [draw-stuff/draw])
```


In particular, this means you can mix and match multimethods from different namespaces, and define protocols which rely on an overlapping set of multimethods.

You can also do

```clojure
(deft Circle [radius]
   Drawable :allows-external [draw-stuff/draw])
```

to declare that a type satisfies a protocol using an existing method implementation.

If the protocol was defined in a different namespace, you don't need to do anything special. i.e.

you can do
```clojure
(ns my-ns1)
(defp MyProtocol
  (say-hi [this]))
  
(ns my-ns2
  (:requires my-ns1))
(deft MyType []
   my-ns1/MyProtocol
   (say-hi [this] "hi"))
```

If you want to implement a method that is defined externally to the protocol, you can do:
```clojure
(defp MyProtocol
   :external-methods [draw-stuff/draw])
   
(deft MyImpl
   MyProtocol
   (draw-stuff/draw [this] (draw this)))
```

by default any methods without an explicit namespace prefix are namespaced to the place where MyProtocol was defined.


note: currently proto implementations use witht for destructuring, and do not have support for allow-overrides/skip-fields. I am planning to add this in a future release
<!-- !!!! TODO Actually add this feature!!! -->


<!-- #### extendt (under development) -->
<!-- Lets you extend a type definition. Works the same way as the implementations block of deft. -->
<!-- ```clojure -->
<!-- (extendt Shape Circle -->
<!--    (area [this] (* PI r r))) -->
<!-- ``` -->

<!-- #### listp  (under development) -->
<!-- Describes what protocols were implemented for a given type -->


<!-- #### defnt  (not yet ready) -->
<!-- Convenience function for defn + witht -->
<!-- ```clojure -->
<!-- (defnt diameter [circle] Circle -->
<!--    (* 2 pi radius)) -->
<!-- ``` -->


<!-- #### defmethodt (under development) -->
<!-- Convenience function for defmethod + witht -->
<!-- ```clojure -->
<!-- (defmethodt area Circle [circle] -->
<!--    (* pi radius radius)) -->
<!-- ``` -->
<!--
##### Why use different syntax ordering for defmethodt and defnt?
In defmethod, Circle is also the dispatch value, so it describes what *type* of thing you're defining, and is in some sense part of the _name_ of what you are trying to implement. In defnt, the fact that you're using Circle destructuring under the hood is an implementation detail, and so it belongs with the argument list (and after any docstrings). I know it seems strange to have two styles, but I thought long and hard about this, and decided this was the best approach for code readability, especially for scanning large existing files to see how they work.
-->


#### Copy clj-kondo deps
```clj-kondo --copy-configs --dependencies --lint "$(clojure -Spath)"```
after installing this library, you may want to run this command to copy the clj-kondo config into your project.


## Design Notes and Commentary
#### Behavior that is not guaranteed/likely to change
- You should not rely on inspecting the value inside of protocols. i.e. if you define a protocol, ```(defp Shape ...)``` the variable Shape evaluates to a value: it is a map containing a list of required multimethods. You should not rely on the structure of this map.
- record-like syntax is experimental and not as rigorously tested.
- When using record-like syntax, printing a deft object will print the constructor for this object. While this is usefulfor convenience, you should not rely on string-processing this output, as I'm still nailing down the exact right way to do this.
- Currently the deft constructor function only defines a Malli schema, and only checks that you've supplied all the map's keys as input if you instrument the Malli schema. you should not depend on this behavior (i.e. you should not intentionally not instrument a constructor, and then provide partial fragments of the type's fields, because we may add additional checks for this in the future). You also should not depend directly on the format of the constructor's spec beyond basic instrumentation.
- currently we do not enforce that protocols cannot define _additional_ methods. i.e. we don't enforce that all methods defined inside of deft must appear in the defp definition for the protocol, but plan to in the future.
- we also may plan to add in the future the ability to define headless methods on a deft type, that are not associated with any particular protocol, though the use-case for this is largely solved by defnt


In general, the behavior documented as ```^:api-spec``` in our tests is stuff that I intend to be stable and will be hesitant/reluctant to change. If you want to know whether certain behavior is part of the library/intentional, check to see if there is a test for it that is designated with ```^:api-spec```.



#### Design Decisions

##### Add more features to multimethods vs. add more features to records
There's essentially two ways to implement this:
###### Create a new implementation of defrecord which forwards every method implementation to a relevant multimethod. i.e. if the record does
```clojure
(defrecord Circle [position radius]
   Shape
   (area [this] (* PI radius radius)))
```

We could implement this by defining
```clojure
(defmulti method-area type)
(defmethod method-area Circle [this]
  (let [{:keys [position radius]} this]
    (* PI radius radius)))
```
and then do

```clojure
(defrecord Circle [position radius]
   Shape
   (area [this] (method-area this)))
```

This has the advantages that:
* It's easier to implement
* It lets you quickly redefine object methods at REPL time
* It lets you remove the multimethod implementation in certain builds to increase performance

But the disadvantages that:
* It still uses single-keyword record access. This would honestly be awesome in a world with static typing, but in a world without it, it makes programs hard to refactor
* It doesn't allow for complex dispatch in protocol definitions. i.e. you cannot do things like enforce that a program has separate implementations for [this integer] and [this String]
* defrecord doesn't have the same concepts of class hierarchies, so it's harder to think about enforcement of abstract-style classes, or more complex protocol surfaces.


###### Another option is to use multimethods and maps only, but then add tools to enforce schema and protocol conformity

Basically what this does is, given a record definition we:
* Create a Malli schema based on that definition
* Create a constructor to create maps of that type
* Allow you to define protocols, which are _lists_ of multimethods that must be fully defined for your schema type


This has the advantages that:
* It works well with existing schema libraries, and so it plays nicely with linters. It's easy to add extra syntax here that adds more stuff to the Malli schema.
* It lets you define protocols as _collections_ of _existing_ multimethods. So you can say things like, "it's ok for most users of this multimethod to fallback to a default, but if you want to declare _this protocol_, then you had better provide your own implementation"
* It lets you do double-keyword field access
* It lets you better define type-hierarchies, which are then called at the multimethod level. in the other approach the method assignment happens _first_ in the defrecord level, but here it happens at the multimethod dispatch level.
* You mostly don't have to worry about the default record internals being available, so you can more easily enforce where private constructors are called (? is this actually easier, can you just ban these with a linter ?)



But the disadvantages that:
* There isn't a clear way to implement existing protocols
* Maybe take a hit to performance


###### What matters in deciding?
* Stability -- I want this to be an implementation people can trust, and if it's simple, and small, there's less complexity and areas to go wrong.
* Ability to refactor existing code -- this is one of my biggest pain points with the existing clojure ecosystem, and why things feel scary
* Ease of use with the repl -- i wanna go fast vroom vroom code=yay
* Completeness -- sort of goes along with stability, but I want this to be done once I build it


#### Deploying

In order to deploy you need to change the version number in 

build.clj
deps.edn jar name
pom.xml


and then do 

```
clj -T:build jar
clj -X:deploy
```


