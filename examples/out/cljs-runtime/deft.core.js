goog.provide('deft.core');

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
deft.core.TypeMap = (function (m,mta){
this.m = m;
this.mta = mta;
this.cljs$lang$protocol_mask$partition0$ = 2162558735;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(deft.core.TypeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.m,k);
}));

(deft.core.TypeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,default_value){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.m,k,default_value);
}));

(deft.core.TypeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#deft.core.TypeMap");

return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m","m",1632677161),self__.m,new cljs.core.Keyword(null,"mta","mta",335568965),self__.mta], null)], 0)));
}));

(deft.core.TypeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.mta;
}));

(deft.core.TypeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.m);
}));

(deft.core.TypeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m,self__.mta], null));
}));

(deft.core.TypeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
var and__5041__auto__ = (other instanceof deft.core.TypeMap);
if(and__5041__auto__){
var o = other;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.m,o.m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.mta,o.mta)));
} else {
return and__5041__auto__;
}
}));

(deft.core.TypeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new deft.core.TypeMap(cljs.core.PersistentArrayMap.EMPTY,self__.mta));
}));

(deft.core.TypeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"required-keys","required-keys",-1498240343).cljs$core$IFn$_invoke$arity$1(self__.mta),k)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.m,k);
} else {
return (new deft.core.TypeMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.m,k),self__.mta));
}
}));

(deft.core.TypeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new deft.core.TypeMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.m,k,v),self__.mta));
}));

(deft.core.TypeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core.contains_QMARK_(self__.m,k);
}));

(deft.core.TypeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(self__.m);
}));

(deft.core.TypeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_mta){
var self__ = this;
var ___$1 = this;
return (new deft.core.TypeMap(self__.m,new_mta));
}));

(deft.core.TypeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,entry){
var self__ = this;
var ___$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return (new deft.core.TypeMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(entry,(1))),self__.mta));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,(new deft.core.TypeMap(self__.m,self__.mta)),entry);
}
}));

(deft.core.TypeMap.prototype.call = (function (unused__11803__auto__){
var self__ = this;
var self__ = this;
var G__49281 = (arguments.length - (1));
switch (G__49281) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(deft.core.TypeMap.prototype.apply = (function (self__,args49280){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args49280)));
}));

(deft.core.TypeMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null, k);
}));

(deft.core.TypeMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null, k,not_found);
}));

(deft.core.TypeMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"mta","mta",1976100492,null)], null);
}));

(deft.core.TypeMap.cljs$lang$type = true);

(deft.core.TypeMap.cljs$lang$ctorStr = "deft.core/TypeMap");

(deft.core.TypeMap.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"deft.core/TypeMap");
}));

/**
 * Positional factory function for deft.core/TypeMap.
 */
deft.core.__GT_TypeMap = (function deft$core$__GT_TypeMap(m,mta){
return (new deft.core.TypeMap(m,mta));
});

/**
 * Verify that a type T implements a protocol (as defined with defp).
 * 
 *   A protocol is considered satisfied if, for every method in the protocol,
 *   there exists a multimethod implementation with dispatch value T
 * 
 *   [obj-type protocol & {:keys [available-methods]}]
 *   obj-type: should be the _dispatch value_ that is used for multimethods.
 *  for objects defined via deft, this is the _keyword_, so (deft Shape ...)
 *  would result in ::Shape
 *   protocol: the protocol to implement. If you define it with (defp Drawable ...)
 *  it's the variable stored in Drawable
 *   available-methods: a list of methods to restrict to. it's like saying, check
 *  if this protocol is satisfied, but assume that we can only see the value of
 *  these methods. It's useful for checking that all of the methods are defined in the same place
 *  (and not sporadically). If its nil, then it does no extra filtering.
 *   
 */
deft.core.check_implements = (function deft$core$check_implements(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49290 = arguments.length;
var i__5767__auto___49291 = (0);
while(true){
if((i__5767__auto___49291 < len__5766__auto___49290)){
args__5772__auto__.push((arguments[i__5767__auto___49291]));

var G__49292 = (i__5767__auto___49291 + (1));
i__5767__auto___49291 = G__49292;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return deft.core.check_implements.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(deft.core.check_implements.cljs$core$IFn$_invoke$arity$variadic = (function (obj_type,protocol,p__49285){
var map__49286 = p__49285;
var map__49286__$1 = cljs.core.__destructure_map(map__49286);
var available_methods = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49286__$1,new cljs.core.Keyword(null,"available-methods","available-methods",-1544493540));
var available_methods__$1 = (cljs.core.truth_(available_methods)?cljs.core.set(available_methods):null);
var undefined_methods = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49287){
var map__49288 = p__49287;
var map__49288__$1 = cljs.core.__destructure_map(map__49288);
var method_def = map__49288__$1;
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49288__$1,new cljs.core.Keyword("deft.core","key-fn","deft.core/key-fn",391923887));
var multimethod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49288__$1,new cljs.core.Keyword("deft.core","multimethod","deft.core/multimethod",136281142));
if(cljs.core.truth_((function (){var or__5043__auto__ = (!(cljs.core.contains_QMARK_(cljs.core.methods$(multimethod),(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(obj_type) : key_fn.call(null, obj_type)))));
if(or__5043__auto__){
return or__5043__auto__;
} else {
var and__5041__auto__ = available_methods__$1;
if(cljs.core.truth_(and__5041__auto__)){
return (!(cljs.core.contains_QMARK_(available_methods__$1,multimethod)));
} else {
return and__5041__auto__;
}
}
})())){
return method_def;
} else {
return null;
}
}),new cljs.core.Keyword("deft.core","implements-methods","deft.core/implements-methods",-519962181).cljs$core$IFn$_invoke$arity$1(protocol))));
if((!(cljs.core.empty_QMARK_(undefined_methods)))){
throw (new deft.core.RuntimeException(["methods ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(undefined_methods)," is not defined for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj_type)," in protocol ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol)].join('')));
} else {
return true;
}
}));

(deft.core.check_implements.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(deft.core.check_implements.cljs$lang$applyTo = (function (seq49282){
var G__49283 = cljs.core.first(seq49282);
var seq49282__$1 = cljs.core.next(seq49282);
var G__49284 = cljs.core.first(seq49282__$1);
var seq49282__$2 = cljs.core.next(seq49282__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49283,G__49284,seq49282__$2);
}));

deft.core.prefix_keys = (function deft$core$prefix_keys(ns_name,m){
var prefix_fn = (function (k){
if((k instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns_name),cljs.core.name(k));
} else {
return k;
}
});
return cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,prefix_fn(k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=deft.core.js.map
