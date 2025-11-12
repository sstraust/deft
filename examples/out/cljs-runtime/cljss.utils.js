goog.provide('cljss.utils');
cljss.utils.dev_QMARK_ = goog.DEBUG;
cljss.utils.pseudo_QMARK_ = (function cljss$utils$pseudo_QMARK_(p__41226){
var vec__41227 = p__41226;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41227,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41227,(1),null);
var and__5041__auto__ = cljs.core.re_matches(/&:.*/,cljs.core.name(rule));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.map_QMARK_(value);
} else {
return and__5041__auto__;
}
});
cljss.utils.nested_QMARK_ = (function cljss$utils$nested_QMARK_(p__41230){
var vec__41231 = p__41230;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41231,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41231,(1),null);
return ((typeof rule === 'string') && (cljs.core.map_QMARK_(value)));
});
cljss.utils.literal_QMARK_ = (function cljss$utils$literal_QMARK_(x){
return ((typeof x === 'string') || (typeof x === 'number'));
});
cljss.utils.escape_val = (function cljss$utils$escape_val(rule,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rule,new cljs.core.Keyword(null,"content","content",15833224))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
} else {
return val;
}
});
cljss.utils.build_css = (function cljss$utils$build_css(cls,styles){
return (function (p1__41240_SHARP_){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41240_SHARP_),"}"].join('');
})(clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41243){
var vec__41244 = p__41243;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41244,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41244,(1),null);
return [cljs.core.name(rule),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.utils.escape_val(rule,val)),";"].join('');
}),styles)));
});
cljss.utils.compile_css_rule = (function cljss$utils$compile_css_rule(p__41255){
var vec__41256 = p__41255;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41256,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41256,(1),null);
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name(rule),":"].join('')], null);
var r__$1 = ((cljs.core.vector_QMARK_(val))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(r,val):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,val));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r__$1,";");
});
cljss.utils.reduce_str = (function cljss$utils$reduce_str(s){
return cljs.core.reverse(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,s1){
var s0 = cljs.core.first(s__$1);
var srest = cljs.core.rest(s__$1);
if(((cljss.utils.literal_QMARK_(s1)) && (typeof s0 === 'string'))){
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s0),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)].join(''),srest);
} else {
return cljs.core.cons(s1,s__$1);
}
}),(new cljs.core.List(null,"",null,(1),null)),s));
});

//# sourceMappingURL=cljss.utils.js.map
