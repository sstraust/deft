goog.provide('examples.core');
examples.core.root_container = document.getElementById("main-app");
examples.core.react_root = reagent.dom.client.create_root(examples.core.root_container);
examples.core.load_react = (function examples$core$load_react(component){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(examples.core.react_root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));
});
examples.core.load_react(examples.tic_tac_toe.main_game_view);

//# sourceMappingURL=examples.core.js.map
