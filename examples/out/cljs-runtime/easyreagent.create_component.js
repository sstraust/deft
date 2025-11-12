goog.provide('easyreagent.create_component');
easyreagent.create_component.first_or_merge = (function easyreagent$create_component$first_or_merge(elt1,elt2){
if(((cljs.core.map_QMARK_(elt1)) && (cljs.core.map_QMARK_(elt2)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(easyreagent.create_component.first_or_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([elt1,elt2], 0));
} else {
return elt1;
}
});
easyreagent.create_component.merge_attrs = (function easyreagent$create_component$merge_attrs(attr_map,original_attr_map){
var class_attrs = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(original_attr_map))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attr_map))].join('');
var merged_maps = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(easyreagent.create_component.first_or_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_map,original_attr_map], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged_maps,new cljs.core.Keyword(null,"class","class",-2030961996),class_attrs);
});
easyreagent.create_component.with_attr_map = (function easyreagent$create_component$with_attr_map(attr_map,reagent_form){
if((!(cljs.core.map_QMARK_(cljs.core.second(reagent_form))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),reagent_form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr_map], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),reagent_form)], 0)));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),reagent_form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.create_component.merge_attrs(attr_map,cljs.core.second(reagent_form))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),reagent_form)], 0)));
}
});
easyreagent.create_component.merge_attrs(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"width","width",-384071477),(100)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-outline"], null));

//# sourceMappingURL=easyreagent.create_component.js.map
