goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__40420 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40421 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40421);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__40423 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40424 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40424);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40423);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40420);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__40436 = arguments.length;
switch (G__40436) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__40440 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40440,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40440,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__40460_40514 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__40461_40515 = null;
var count__40462_40516 = (0);
var i__40463_40517 = (0);
while(true){
if((i__40463_40517 < count__40462_40516)){
var vec__40486_40520 = chunk__40461_40515.cljs$core$IIndexed$_nth$arity$2(null, i__40463_40517);
var container_40521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486_40520,(0),null);
var comp_40522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486_40520,(1),null);
reagent.dom.re_render_component(comp_40522,container_40521);


var G__40523 = seq__40460_40514;
var G__40524 = chunk__40461_40515;
var G__40525 = count__40462_40516;
var G__40526 = (i__40463_40517 + (1));
seq__40460_40514 = G__40523;
chunk__40461_40515 = G__40524;
count__40462_40516 = G__40525;
i__40463_40517 = G__40526;
continue;
} else {
var temp__5823__auto___40527 = cljs.core.seq(seq__40460_40514);
if(temp__5823__auto___40527){
var seq__40460_40528__$1 = temp__5823__auto___40527;
if(cljs.core.chunked_seq_QMARK_(seq__40460_40528__$1)){
var c__5565__auto___40529 = cljs.core.chunk_first(seq__40460_40528__$1);
var G__40531 = cljs.core.chunk_rest(seq__40460_40528__$1);
var G__40533 = c__5565__auto___40529;
var G__40534 = cljs.core.count(c__5565__auto___40529);
var G__40535 = (0);
seq__40460_40514 = G__40531;
chunk__40461_40515 = G__40533;
count__40462_40516 = G__40534;
i__40463_40517 = G__40535;
continue;
} else {
var vec__40494_40537 = cljs.core.first(seq__40460_40528__$1);
var container_40538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494_40537,(0),null);
var comp_40539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494_40537,(1),null);
reagent.dom.re_render_component(comp_40539,container_40538);


var G__40540 = cljs.core.next(seq__40460_40528__$1);
var G__40541 = null;
var G__40542 = (0);
var G__40543 = (0);
seq__40460_40514 = G__40540;
chunk__40461_40515 = G__40541;
count__40462_40516 = G__40542;
i__40463_40517 = G__40543;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
