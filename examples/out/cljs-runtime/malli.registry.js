goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_36140 = (function (this$,type){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (malli.registry._schema[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5391__auto__.call(null, this$,type));
} else {
var m__5389__auto__ = (malli.registry._schema["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5389__auto__.call(null, this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_36140(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_36144 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (malli.registry._schemas[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null, this$));
} else {
var m__5389__auto__ = (malli.registry._schemas["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_36144(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry36098 = (function (m,fm,meta36099){
this.m = m;
this.fm = fm;
this.meta36099 = meta36099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry36098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36100,meta36099__$1){
var self__ = this;
var _36100__$1 = this;
return (new malli.registry.t_malli$registry36098(self__.m,self__.fm,meta36099__$1));
}));

(malli.registry.t_malli$registry36098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36100){
var self__ = this;
var _36100__$1 = this;
return self__.meta36099;
}));

(malli.registry.t_malli$registry36098.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry36098.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry36098.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry36098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta36099","meta36099",-1422785210,null)], null);
}));

(malli.registry.t_malli$registry36098.cljs$lang$type = true);

(malli.registry.t_malli$registry36098.cljs$lang$ctorStr = "malli.registry/t_malli$registry36098");

(malli.registry.t_malli$registry36098.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry36098");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry36098.
 */
malli.registry.__GT_t_malli$registry36098 = (function malli$registry$__GT_t_malli$registry36098(m,fm,meta36099){
return (new malli.registry.t_malli$registry36098(m,fm,meta36099));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry36098(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry36103 = (function (m,meta36104){
this.m = m;
this.meta36104 = meta36104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry36103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36105,meta36104__$1){
var self__ = this;
var _36105__$1 = this;
return (new malli.registry.t_malli$registry36103(self__.m,meta36104__$1));
}));

(malli.registry.t_malli$registry36103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36105){
var self__ = this;
var _36105__$1 = this;
return self__.meta36104;
}));

(malli.registry.t_malli$registry36103.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry36103.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null, type));
}));

(malli.registry.t_malli$registry36103.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry36103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta36104","meta36104",561110540,null)], null);
}));

(malli.registry.t_malli$registry36103.cljs$lang$type = true);

(malli.registry.t_malli$registry36103.cljs$lang$ctorStr = "malli.registry/t_malli$registry36103");

(malli.registry.t_malli$registry36103.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry36103");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry36103.
 */
malli.registry.__GT_t_malli$registry36103 = (function malli$registry$__GT_t_malli$registry36103(m,meta36104){
return (new malli.registry.t_malli$registry36103(m,meta36104));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry36103(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry36115 = (function (meta36116){
this.meta36116 = meta36116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry36115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36117,meta36116__$1){
var self__ = this;
var _36117__$1 = this;
return (new malli.registry.t_malli$registry36115(meta36116__$1));
}));

(malli.registry.t_malli$registry36115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36117){
var self__ = this;
var _36117__$1 = this;
return self__.meta36116;
}));

(malli.registry.t_malli$registry36115.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry36115.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry36115.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry36115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36116","meta36116",-578977024,null)], null);
}));

(malli.registry.t_malli$registry36115.cljs$lang$type = true);

(malli.registry.t_malli$registry36115.cljs$lang$ctorStr = "malli.registry/t_malli$registry36115");

(malli.registry.t_malli$registry36115.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry36115");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry36115.
 */
malli.registry.__GT_t_malli$registry36115 = (function malli$registry$__GT_t_malli$registry36115(meta36116){
return (new malli.registry.t_malli$registry36115(meta36116));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry36115(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry36122 = (function (_QMARK_registries,registries,meta36123){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta36123 = meta36123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry36122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36124,meta36123__$1){
var self__ = this;
var _36124__$1 = this;
return (new malli.registry.t_malli$registry36122(self__._QMARK_registries,self__.registries,meta36123__$1));
}));

(malli.registry.t_malli$registry36122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36124){
var self__ = this;
var _36124__$1 = this;
return self__.meta36123;
}));

(malli.registry.t_malli$registry36122.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry36122.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__36118_SHARP_){
return malli.registry._schema(p1__36118_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry36122.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry36122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta36123","meta36123",-1526402551,null)], null);
}));

(malli.registry.t_malli$registry36122.cljs$lang$type = true);

(malli.registry.t_malli$registry36122.cljs$lang$ctorStr = "malli.registry/t_malli$registry36122");

(malli.registry.t_malli$registry36122.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry36122");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry36122.
 */
malli.registry.__GT_t_malli$registry36122 = (function malli$registry$__GT_t_malli$registry36122(_QMARK_registries,registries,meta36123){
return (new malli.registry.t_malli$registry36122(_QMARK_registries,registries,meta36123));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5772__auto__ = [];
var len__5766__auto___36162 = arguments.length;
var i__5767__auto___36163 = (0);
while(true){
if((i__5767__auto___36163 < len__5766__auto___36162)){
args__5772__auto__.push((arguments[i__5767__auto___36163]));

var G__36164 = (i__5767__auto___36163 + (1));
i__5767__auto___36163 = G__36164;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry36122(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq36120){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36120));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry36125 = (function (db,meta36126){
this.db = db;
this.meta36126 = meta36126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry36125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36127,meta36126__$1){
var self__ = this;
var _36127__$1 = this;
return (new malli.registry.t_malli$registry36125(self__.db,meta36126__$1));
}));

(malli.registry.t_malli$registry36125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36127){
var self__ = this;
var _36127__$1 = this;
return self__.meta36126;
}));

(malli.registry.t_malli$registry36125.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry36125.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry36125.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry36125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta36126","meta36126",-719123539,null)], null);
}));

(malli.registry.t_malli$registry36125.cljs$lang$type = true);

(malli.registry.t_malli$registry36125.cljs$lang$ctorStr = "malli.registry/t_malli$registry36125");

(malli.registry.t_malli$registry36125.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry36125");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry36125.
 */
malli.registry.__GT_t_malli$registry36125 = (function malli$registry$__GT_t_malli$registry36125(db,meta36126){
return (new malli.registry.t_malli$registry36125(db,meta36126));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry36125(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry36128 = (function (meta36129){
this.meta36129 = meta36129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry36128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36130,meta36129__$1){
var self__ = this;
var _36130__$1 = this;
return (new malli.registry.t_malli$registry36128(meta36129__$1));
}));

(malli.registry.t_malli$registry36128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36130){
var self__ = this;
var _36130__$1 = this;
return self__.meta36129;
}));

(malli.registry.t_malli$registry36128.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry36128.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry36128.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry36128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36129","meta36129",-1439523169,null)], null);
}));

(malli.registry.t_malli$registry36128.cljs$lang$type = true);

(malli.registry.t_malli$registry36128.cljs$lang$ctorStr = "malli.registry/t_malli$registry36128");

(malli.registry.t_malli$registry36128.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry36128");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry36128.
 */
malli.registry.__GT_t_malli$registry36128 = (function malli$registry$__GT_t_malli$registry36128(meta36129){
return (new malli.registry.t_malli$registry36128(meta36129));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry36128(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry36131 = (function (meta36132){
this.meta36132 = meta36132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry36131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36133,meta36132__$1){
var self__ = this;
var _36133__$1 = this;
return (new malli.registry.t_malli$registry36131(meta36132__$1));
}));

(malli.registry.t_malli$registry36131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36133){
var self__ = this;
var _36133__$1 = this;
return self__.meta36132;
}));

(malli.registry.t_malli$registry36131.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry36131.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry36131.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry36131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36132","meta36132",397931065,null)], null);
}));

(malli.registry.t_malli$registry36131.cljs$lang$type = true);

(malli.registry.t_malli$registry36131.cljs$lang$ctorStr = "malli.registry/t_malli$registry36131");

(malli.registry.t_malli$registry36131.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry36131");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry36131.
 */
malli.registry.__GT_t_malli$registry36131 = (function malli$registry$__GT_t_malli$registry36131(meta36132){
return (new malli.registry.t_malli$registry36131(meta36132));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry36131(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry36134 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta36135){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta36135 = meta36135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry36134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36136,meta36135__$1){
var self__ = this;
var _36136__$1 = this;
return (new malli.registry.t_malli$registry36134(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta36135__$1));
}));

(malli.registry.t_malli$registry36134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36136){
var self__ = this;
var _36136__$1 = this;
return self__.meta36135;
}));

(malli.registry.t_malli$registry36134.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry36134.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5043__auto__ = (function (){var fexpr__36137 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__36137.cljs$core$IFn$_invoke$arity$1 ? fexpr__36137.cljs$core$IFn$_invoke$arity$1(name) : fexpr__36137.call(null, name));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var temp__5823__auto__ = (function (){var G__36138 = name;
var G__36139 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__36138,G__36139) : self__.provider.call(null, G__36138,G__36139));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var schema = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry36134.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry36134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta36135","meta36135",-1618503287,null)], null);
}));

(malli.registry.t_malli$registry36134.cljs$lang$type = true);

(malli.registry.t_malli$registry36134.cljs$lang$ctorStr = "malli.registry/t_malli$registry36134");

(malli.registry.t_malli$registry36134.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"malli.registry/t_malli$registry36134");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry36134.
 */
malli.registry.__GT_t_malli$registry36134 = (function malli$registry$__GT_t_malli$registry36134(default_registry,provider,cache_STAR_,registry_STAR_,meta36135){
return (new malli.registry.t_malli$registry36134(default_registry,provider,cache_STAR_,registry_STAR_,meta36135));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry36134(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
