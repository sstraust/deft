goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38449 = (function (f,blockable,meta38450){
this.f = f;
this.blockable = blockable;
this.meta38450 = meta38450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38451,meta38450__$1){
var self__ = this;
var _38451__$1 = this;
return (new cljs.core.async.t_cljs$core$async38449(self__.f,self__.blockable,meta38450__$1));
}));

(cljs.core.async.t_cljs$core$async38449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38451){
var self__ = this;
var _38451__$1 = this;
return self__.meta38450;
}));

(cljs.core.async.t_cljs$core$async38449.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38449.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38450","meta38450",1017785807,null)], null);
}));

(cljs.core.async.t_cljs$core$async38449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38449");

(cljs.core.async.t_cljs$core$async38449.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38449.
 */
cljs.core.async.__GT_t_cljs$core$async38449 = (function cljs$core$async$__GT_t_cljs$core$async38449(f,blockable,meta38450){
return (new cljs.core.async.t_cljs$core$async38449(f,blockable,meta38450));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38444 = arguments.length;
switch (G__38444) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async38449(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38486 = arguments.length;
switch (G__38486) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38497 = arguments.length;
switch (G__38497) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38507 = arguments.length;
switch (G__38507) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_41810 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41810) : fn1.call(null, val_41810));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41810) : fn1.call(null, val_41810));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38526 = arguments.length;
switch (G__38526) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___41820 = n;
var x_41822 = (0);
while(true){
if((x_41822 < n__5633__auto___41820)){
(a[x_41822] = x_41822);

var G__41823 = (x_41822 + (1));
x_41822 = G__41823;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38538 = (function (flag,meta38539){
this.flag = flag;
this.meta38539 = meta38539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38540,meta38539__$1){
var self__ = this;
var _38540__$1 = this;
return (new cljs.core.async.t_cljs$core$async38538(self__.flag,meta38539__$1));
}));

(cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38540){
var self__ = this;
var _38540__$1 = this;
return self__.meta38539;
}));

(cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38539","meta38539",-792876822,null)], null);
}));

(cljs.core.async.t_cljs$core$async38538.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38538");

(cljs.core.async.t_cljs$core$async38538.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38538");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38538.
 */
cljs.core.async.__GT_t_cljs$core$async38538 = (function cljs$core$async$__GT_t_cljs$core$async38538(flag,meta38539){
return (new cljs.core.async.t_cljs$core$async38538(flag,meta38539));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async38538(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38596 = (function (flag,cb,meta38597){
this.flag = flag;
this.cb = cb;
this.meta38597 = meta38597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38598,meta38597__$1){
var self__ = this;
var _38598__$1 = this;
return (new cljs.core.async.t_cljs$core$async38596(self__.flag,self__.cb,meta38597__$1));
}));

(cljs.core.async.t_cljs$core$async38596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38598){
var self__ = this;
var _38598__$1 = this;
return self__.meta38597;
}));

(cljs.core.async.t_cljs$core$async38596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38597","meta38597",1885367250,null)], null);
}));

(cljs.core.async.t_cljs$core$async38596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38596");

(cljs.core.async.t_cljs$core$async38596.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38596.
 */
cljs.core.async.__GT_t_cljs$core$async38596 = (function cljs$core$async$__GT_t_cljs$core$async38596(flag,cb,meta38597){
return (new cljs.core.async.t_cljs$core$async38596(flag,cb,meta38597));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async38596(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38623_SHARP_){
var G__38643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38623_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38643) : fret.call(null, G__38643));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38624_SHARP_){
var G__38647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38624_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38647) : fret.call(null, G__38647));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41847 = (i + (1));
i = G__41847;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41852 = arguments.length;
var i__5767__auto___41859 = (0);
while(true){
if((i__5767__auto___41859 < len__5766__auto___41852)){
args__5772__auto__.push((arguments[i__5767__auto___41859]));

var G__41860 = (i__5767__auto___41859 + (1));
i__5767__auto___41859 = G__41860;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38688){
var map__38689 = p__38688;
var map__38689__$1 = cljs.core.__destructure_map(map__38689);
var opts = map__38689__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38669){
var G__38670 = cljs.core.first(seq38669);
var seq38669__$1 = cljs.core.next(seq38669);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38670,seq38669__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38705 = arguments.length;
switch (G__38705) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38342__auto___41867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_38959){
var state_val_38963 = (state_38959[(1)]);
if((state_val_38963 === (7))){
var inst_38911 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_38990_41868 = state_38959__$1;
(statearr_38990_41868[(2)] = inst_38911);

(statearr_38990_41868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (1))){
var state_38959__$1 = state_38959;
var statearr_38993_41870 = state_38959__$1;
(statearr_38993_41870[(2)] = null);

(statearr_38993_41870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (4))){
var inst_38857 = (state_38959[(7)]);
var inst_38857__$1 = (state_38959[(2)]);
var inst_38870 = (inst_38857__$1 == null);
var state_38959__$1 = (function (){var statearr_38999 = state_38959;
(statearr_38999[(7)] = inst_38857__$1);

return statearr_38999;
})();
if(cljs.core.truth_(inst_38870)){
var statearr_39000_41872 = state_38959__$1;
(statearr_39000_41872[(1)] = (5));

} else {
var statearr_39001_41873 = state_38959__$1;
(statearr_39001_41873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (13))){
var state_38959__$1 = state_38959;
var statearr_39008_41876 = state_38959__$1;
(statearr_39008_41876[(2)] = null);

(statearr_39008_41876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (6))){
var inst_38857 = (state_38959[(7)]);
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38959__$1,(11),to,inst_38857);
} else {
if((state_val_38963 === (3))){
var inst_38925 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38959__$1,inst_38925);
} else {
if((state_val_38963 === (12))){
var state_38959__$1 = state_38959;
var statearr_39013_41886 = state_38959__$1;
(statearr_39013_41886[(2)] = null);

(statearr_39013_41886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (2))){
var state_38959__$1 = state_38959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38959__$1,(4),from);
} else {
if((state_val_38963 === (11))){
var inst_38895 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
if(cljs.core.truth_(inst_38895)){
var statearr_39015_41887 = state_38959__$1;
(statearr_39015_41887[(1)] = (12));

} else {
var statearr_39019_41889 = state_38959__$1;
(statearr_39019_41889[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (9))){
var state_38959__$1 = state_38959;
var statearr_39023_41890 = state_38959__$1;
(statearr_39023_41890[(2)] = null);

(statearr_39023_41890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (5))){
var state_38959__$1 = state_38959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39026_41891 = state_38959__$1;
(statearr_39026_41891[(1)] = (8));

} else {
var statearr_39027_41893 = state_38959__$1;
(statearr_39027_41893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (14))){
var inst_38909 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39036_41894 = state_38959__$1;
(statearr_39036_41894[(2)] = inst_38909);

(statearr_39036_41894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (10))){
var inst_38892 = (state_38959[(2)]);
var state_38959__$1 = state_38959;
var statearr_39037_41897 = state_38959__$1;
(statearr_39037_41897[(2)] = inst_38892);

(statearr_39037_41897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38963 === (8))){
var inst_38875 = cljs.core.async.close_BANG_(to);
var state_38959__$1 = state_38959;
var statearr_39042_41898 = state_38959__$1;
(statearr_39042_41898[(2)] = inst_38875);

(statearr_39042_41898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_39044 = [null,null,null,null,null,null,null,null];
(statearr_39044[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_39044[(1)] = (1));

return statearr_39044;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_38959){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_38959);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39051){var ex__37660__auto__ = e39051;
var statearr_39053_41903 = state_38959;
(statearr_39053_41903[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_38959[(4)]))){
var statearr_39055_41904 = state_38959;
(statearr_39055_41904[(1)] = cljs.core.first((state_38959[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41905 = state_38959;
state_38959 = G__41905;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_38959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_38959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39065 = f__38343__auto__();
(statearr_39065[(6)] = c__38342__auto___41867);

return statearr_39065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__39077){
var vec__39078 = p__39077;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39078,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39078,(1),null);
var job = vec__39078;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38342__auto___41917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_39088){
var state_val_39089 = (state_39088[(1)]);
if((state_val_39089 === (1))){
var state_39088__$1 = state_39088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39088__$1,(2),res,v);
} else {
if((state_val_39089 === (2))){
var inst_39085 = (state_39088[(2)]);
var inst_39086 = cljs.core.async.close_BANG_(res);
var state_39088__$1 = (function (){var statearr_39093 = state_39088;
(statearr_39093[(7)] = inst_39085);

return statearr_39093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39088__$1,inst_39086);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0 = (function (){
var statearr_39094 = [null,null,null,null,null,null,null,null];
(statearr_39094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__);

(statearr_39094[(1)] = (1));

return statearr_39094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1 = (function (state_39088){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39088);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39095){var ex__37660__auto__ = e39095;
var statearr_39096_41925 = state_39088;
(statearr_39096_41925[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39088[(4)]))){
var statearr_39097_41926 = state_39088;
(statearr_39097_41926[(1)] = cljs.core.first((state_39088[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41927 = state_39088;
state_39088 = G__41927;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = function(state_39088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1.call(this,state_39088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39100 = f__38343__auto__();
(statearr_39100[(6)] = c__38342__auto___41917);

return statearr_39100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39101){
var vec__39102 = p__39101;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39102,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39102,(1),null);
var job = vec__39102;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___41929 = n;
var __41930 = (0);
while(true){
if((__41930 < n__5633__auto___41929)){
var G__39106_41932 = type;
var G__39106_41933__$1 = (((G__39106_41932 instanceof cljs.core.Keyword))?G__39106_41932.fqn:null);
switch (G__39106_41933__$1) {
case "compute":
var c__38342__auto___41935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41930,c__38342__auto___41935,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async){
return (function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = ((function (__41930,c__38342__auto___41935,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async){
return (function (state_39120){
var state_val_39121 = (state_39120[(1)]);
if((state_val_39121 === (1))){
var state_39120__$1 = state_39120;
var statearr_39122_41938 = state_39120__$1;
(statearr_39122_41938[(2)] = null);

(statearr_39122_41938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39121 === (2))){
var state_39120__$1 = state_39120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39120__$1,(4),jobs);
} else {
if((state_val_39121 === (3))){
var inst_39118 = (state_39120[(2)]);
var state_39120__$1 = state_39120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39120__$1,inst_39118);
} else {
if((state_val_39121 === (4))){
var inst_39110 = (state_39120[(2)]);
var inst_39111 = process__$1(inst_39110);
var state_39120__$1 = state_39120;
if(cljs.core.truth_(inst_39111)){
var statearr_39125_41942 = state_39120__$1;
(statearr_39125_41942[(1)] = (5));

} else {
var statearr_39126_41943 = state_39120__$1;
(statearr_39126_41943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39121 === (5))){
var state_39120__$1 = state_39120;
var statearr_39129_41944 = state_39120__$1;
(statearr_39129_41944[(2)] = null);

(statearr_39129_41944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39121 === (6))){
var state_39120__$1 = state_39120;
var statearr_39130_41948 = state_39120__$1;
(statearr_39130_41948[(2)] = null);

(statearr_39130_41948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39121 === (7))){
var inst_39116 = (state_39120[(2)]);
var state_39120__$1 = state_39120;
var statearr_39133_41950 = state_39120__$1;
(statearr_39133_41950[(2)] = inst_39116);

(statearr_39133_41950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41930,c__38342__auto___41935,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async))
;
return ((function (__41930,switch__37656__auto__,c__38342__auto___41935,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0 = (function (){
var statearr_39134 = [null,null,null,null,null,null,null];
(statearr_39134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__);

(statearr_39134[(1)] = (1));

return statearr_39134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1 = (function (state_39120){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39120);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39135){var ex__37660__auto__ = e39135;
var statearr_39136_41956 = state_39120;
(statearr_39136_41956[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39120[(4)]))){
var statearr_39137_41958 = state_39120;
(statearr_39137_41958[(1)] = cljs.core.first((state_39120[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41959 = state_39120;
state_39120 = G__41959;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = function(state_39120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1.call(this,state_39120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__;
})()
;})(__41930,switch__37656__auto__,c__38342__auto___41935,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async))
})();
var state__38344__auto__ = (function (){var statearr_39139 = f__38343__auto__();
(statearr_39139[(6)] = c__38342__auto___41935);

return statearr_39139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
});})(__41930,c__38342__auto___41935,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async))
);


break;
case "async":
var c__38342__auto___41963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41930,c__38342__auto___41963,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async){
return (function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = ((function (__41930,c__38342__auto___41963,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async){
return (function (state_39153){
var state_val_39154 = (state_39153[(1)]);
if((state_val_39154 === (1))){
var state_39153__$1 = state_39153;
var statearr_39157_41970 = state_39153__$1;
(statearr_39157_41970[(2)] = null);

(statearr_39157_41970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (2))){
var state_39153__$1 = state_39153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39153__$1,(4),jobs);
} else {
if((state_val_39154 === (3))){
var inst_39151 = (state_39153[(2)]);
var state_39153__$1 = state_39153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39153__$1,inst_39151);
} else {
if((state_val_39154 === (4))){
var inst_39142 = (state_39153[(2)]);
var inst_39143 = async(inst_39142);
var state_39153__$1 = state_39153;
if(cljs.core.truth_(inst_39143)){
var statearr_39161_41972 = state_39153__$1;
(statearr_39161_41972[(1)] = (5));

} else {
var statearr_39162_41973 = state_39153__$1;
(statearr_39162_41973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (5))){
var state_39153__$1 = state_39153;
var statearr_39163_41974 = state_39153__$1;
(statearr_39163_41974[(2)] = null);

(statearr_39163_41974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (6))){
var state_39153__$1 = state_39153;
var statearr_39165_41975 = state_39153__$1;
(statearr_39165_41975[(2)] = null);

(statearr_39165_41975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (7))){
var inst_39148 = (state_39153[(2)]);
var state_39153__$1 = state_39153;
var statearr_39166_41977 = state_39153__$1;
(statearr_39166_41977[(2)] = inst_39148);

(statearr_39166_41977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41930,c__38342__auto___41963,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async))
;
return ((function (__41930,switch__37656__auto__,c__38342__auto___41963,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0 = (function (){
var statearr_39171 = [null,null,null,null,null,null,null];
(statearr_39171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__);

(statearr_39171[(1)] = (1));

return statearr_39171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1 = (function (state_39153){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39153);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39172){var ex__37660__auto__ = e39172;
var statearr_39174_41983 = state_39153;
(statearr_39174_41983[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39153[(4)]))){
var statearr_39175_41990 = state_39153;
(statearr_39175_41990[(1)] = cljs.core.first((state_39153[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41991 = state_39153;
state_39153 = G__41991;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = function(state_39153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1.call(this,state_39153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__;
})()
;})(__41930,switch__37656__auto__,c__38342__auto___41963,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async))
})();
var state__38344__auto__ = (function (){var statearr_39177 = f__38343__auto__();
(statearr_39177[(6)] = c__38342__auto___41963);

return statearr_39177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
});})(__41930,c__38342__auto___41963,G__39106_41932,G__39106_41933__$1,n__5633__auto___41929,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39106_41933__$1)].join('')));

}

var G__41995 = (__41930 + (1));
__41930 = G__41995;
continue;
} else {
}
break;
}

var c__38342__auto___41996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_39211){
var state_val_39212 = (state_39211[(1)]);
if((state_val_39212 === (7))){
var inst_39205 = (state_39211[(2)]);
var state_39211__$1 = state_39211;
var statearr_39215_42000 = state_39211__$1;
(statearr_39215_42000[(2)] = inst_39205);

(statearr_39215_42000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (1))){
var state_39211__$1 = state_39211;
var statearr_39219_42006 = state_39211__$1;
(statearr_39219_42006[(2)] = null);

(statearr_39219_42006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (4))){
var inst_39183 = (state_39211[(7)]);
var inst_39183__$1 = (state_39211[(2)]);
var inst_39185 = (inst_39183__$1 == null);
var state_39211__$1 = (function (){var statearr_39225 = state_39211;
(statearr_39225[(7)] = inst_39183__$1);

return statearr_39225;
})();
if(cljs.core.truth_(inst_39185)){
var statearr_39228_42013 = state_39211__$1;
(statearr_39228_42013[(1)] = (5));

} else {
var statearr_39230_42014 = state_39211__$1;
(statearr_39230_42014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (6))){
var inst_39183 = (state_39211[(7)]);
var inst_39189 = (state_39211[(8)]);
var inst_39189__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39196 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39197 = [inst_39183,inst_39189__$1];
var inst_39198 = (new cljs.core.PersistentVector(null,2,(5),inst_39196,inst_39197,null));
var state_39211__$1 = (function (){var statearr_39235 = state_39211;
(statearr_39235[(8)] = inst_39189__$1);

return statearr_39235;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39211__$1,(8),jobs,inst_39198);
} else {
if((state_val_39212 === (3))){
var inst_39208 = (state_39211[(2)]);
var state_39211__$1 = state_39211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39211__$1,inst_39208);
} else {
if((state_val_39212 === (2))){
var state_39211__$1 = state_39211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39211__$1,(4),from);
} else {
if((state_val_39212 === (9))){
var inst_39202 = (state_39211[(2)]);
var state_39211__$1 = (function (){var statearr_39240 = state_39211;
(statearr_39240[(9)] = inst_39202);

return statearr_39240;
})();
var statearr_39241_42031 = state_39211__$1;
(statearr_39241_42031[(2)] = null);

(statearr_39241_42031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (5))){
var inst_39187 = cljs.core.async.close_BANG_(jobs);
var state_39211__$1 = state_39211;
var statearr_39245_42035 = state_39211__$1;
(statearr_39245_42035[(2)] = inst_39187);

(statearr_39245_42035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39212 === (8))){
var inst_39189 = (state_39211[(8)]);
var inst_39200 = (state_39211[(2)]);
var state_39211__$1 = (function (){var statearr_39246 = state_39211;
(statearr_39246[(10)] = inst_39200);

return statearr_39246;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39211__$1,(9),results,inst_39189);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0 = (function (){
var statearr_39249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__);

(statearr_39249[(1)] = (1));

return statearr_39249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1 = (function (state_39211){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39211);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39250){var ex__37660__auto__ = e39250;
var statearr_39251_42050 = state_39211;
(statearr_39251_42050[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39211[(4)]))){
var statearr_39252_42055 = state_39211;
(statearr_39252_42055[(1)] = cljs.core.first((state_39211[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42056 = state_39211;
state_39211 = G__42056;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = function(state_39211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1.call(this,state_39211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39256 = f__38343__auto__();
(statearr_39256[(6)] = c__38342__auto___41996);

return statearr_39256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


var c__38342__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_39303){
var state_val_39304 = (state_39303[(1)]);
if((state_val_39304 === (7))){
var inst_39299 = (state_39303[(2)]);
var state_39303__$1 = state_39303;
var statearr_39306_42057 = state_39303__$1;
(statearr_39306_42057[(2)] = inst_39299);

(statearr_39306_42057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (20))){
var state_39303__$1 = state_39303;
var statearr_39307_42058 = state_39303__$1;
(statearr_39307_42058[(2)] = null);

(statearr_39307_42058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (1))){
var state_39303__$1 = state_39303;
var statearr_39309_42059 = state_39303__$1;
(statearr_39309_42059[(2)] = null);

(statearr_39309_42059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (4))){
var inst_39260 = (state_39303[(7)]);
var inst_39260__$1 = (state_39303[(2)]);
var inst_39261 = (inst_39260__$1 == null);
var state_39303__$1 = (function (){var statearr_39311 = state_39303;
(statearr_39311[(7)] = inst_39260__$1);

return statearr_39311;
})();
if(cljs.core.truth_(inst_39261)){
var statearr_39312_42064 = state_39303__$1;
(statearr_39312_42064[(1)] = (5));

} else {
var statearr_39313_42065 = state_39303__$1;
(statearr_39313_42065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (15))){
var inst_39277 = (state_39303[(8)]);
var state_39303__$1 = state_39303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39303__$1,(18),to,inst_39277);
} else {
if((state_val_39304 === (21))){
var inst_39290 = (state_39303[(2)]);
var state_39303__$1 = state_39303;
var statearr_39315_42069 = state_39303__$1;
(statearr_39315_42069[(2)] = inst_39290);

(statearr_39315_42069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (13))){
var inst_39294 = (state_39303[(2)]);
var state_39303__$1 = (function (){var statearr_39316 = state_39303;
(statearr_39316[(9)] = inst_39294);

return statearr_39316;
})();
var statearr_39317_42073 = state_39303__$1;
(statearr_39317_42073[(2)] = null);

(statearr_39317_42073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (6))){
var inst_39260 = (state_39303[(7)]);
var state_39303__$1 = state_39303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39303__$1,(11),inst_39260);
} else {
if((state_val_39304 === (17))){
var inst_39285 = (state_39303[(2)]);
var state_39303__$1 = state_39303;
if(cljs.core.truth_(inst_39285)){
var statearr_39318_42074 = state_39303__$1;
(statearr_39318_42074[(1)] = (19));

} else {
var statearr_39319_42075 = state_39303__$1;
(statearr_39319_42075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (3))){
var inst_39301 = (state_39303[(2)]);
var state_39303__$1 = state_39303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39303__$1,inst_39301);
} else {
if((state_val_39304 === (12))){
var inst_39272 = (state_39303[(10)]);
var state_39303__$1 = state_39303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39303__$1,(14),inst_39272);
} else {
if((state_val_39304 === (2))){
var state_39303__$1 = state_39303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39303__$1,(4),results);
} else {
if((state_val_39304 === (19))){
var state_39303__$1 = state_39303;
var statearr_39323_42083 = state_39303__$1;
(statearr_39323_42083[(2)] = null);

(statearr_39323_42083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (11))){
var inst_39272 = (state_39303[(2)]);
var state_39303__$1 = (function (){var statearr_39325 = state_39303;
(statearr_39325[(10)] = inst_39272);

return statearr_39325;
})();
var statearr_39327_42084 = state_39303__$1;
(statearr_39327_42084[(2)] = null);

(statearr_39327_42084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (9))){
var state_39303__$1 = state_39303;
var statearr_39328_42085 = state_39303__$1;
(statearr_39328_42085[(2)] = null);

(statearr_39328_42085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (5))){
var state_39303__$1 = state_39303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39331_42091 = state_39303__$1;
(statearr_39331_42091[(1)] = (8));

} else {
var statearr_39332_42092 = state_39303__$1;
(statearr_39332_42092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (14))){
var inst_39277 = (state_39303[(8)]);
var inst_39279 = (state_39303[(11)]);
var inst_39277__$1 = (state_39303[(2)]);
var inst_39278 = (inst_39277__$1 == null);
var inst_39279__$1 = cljs.core.not(inst_39278);
var state_39303__$1 = (function (){var statearr_39333 = state_39303;
(statearr_39333[(8)] = inst_39277__$1);

(statearr_39333[(11)] = inst_39279__$1);

return statearr_39333;
})();
if(inst_39279__$1){
var statearr_39335_42098 = state_39303__$1;
(statearr_39335_42098[(1)] = (15));

} else {
var statearr_39336_42099 = state_39303__$1;
(statearr_39336_42099[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (16))){
var inst_39279 = (state_39303[(11)]);
var state_39303__$1 = state_39303;
var statearr_39337_42100 = state_39303__$1;
(statearr_39337_42100[(2)] = inst_39279);

(statearr_39337_42100[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (10))){
var inst_39267 = (state_39303[(2)]);
var state_39303__$1 = state_39303;
var statearr_39339_42102 = state_39303__$1;
(statearr_39339_42102[(2)] = inst_39267);

(statearr_39339_42102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (18))){
var inst_39282 = (state_39303[(2)]);
var state_39303__$1 = state_39303;
var statearr_39340_42103 = state_39303__$1;
(statearr_39340_42103[(2)] = inst_39282);

(statearr_39340_42103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39304 === (8))){
var inst_39264 = cljs.core.async.close_BANG_(to);
var state_39303__$1 = state_39303;
var statearr_39342_42104 = state_39303__$1;
(statearr_39342_42104[(2)] = inst_39264);

(statearr_39342_42104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0 = (function (){
var statearr_39343 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__);

(statearr_39343[(1)] = (1));

return statearr_39343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1 = (function (state_39303){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39303);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39345){var ex__37660__auto__ = e39345;
var statearr_39346_42120 = state_39303;
(statearr_39346_42120[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39303[(4)]))){
var statearr_39347_42121 = state_39303;
(statearr_39347_42121[(1)] = cljs.core.first((state_39303[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42122 = state_39303;
state_39303 = G__42122;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__ = function(state_39303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1.call(this,state_39303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37657__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39349 = f__38343__auto__();
(statearr_39349[(6)] = c__38342__auto__);

return statearr_39349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));

return c__38342__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39353 = arguments.length;
switch (G__39353) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39363 = arguments.length;
switch (G__39363) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39371 = arguments.length;
switch (G__39371) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38342__auto___42146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_39399){
var state_val_39400 = (state_39399[(1)]);
if((state_val_39400 === (7))){
var inst_39395 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
var statearr_39405_42149 = state_39399__$1;
(statearr_39405_42149[(2)] = inst_39395);

(statearr_39405_42149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (1))){
var state_39399__$1 = state_39399;
var statearr_39406_42151 = state_39399__$1;
(statearr_39406_42151[(2)] = null);

(statearr_39406_42151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (4))){
var inst_39376 = (state_39399[(7)]);
var inst_39376__$1 = (state_39399[(2)]);
var inst_39377 = (inst_39376__$1 == null);
var state_39399__$1 = (function (){var statearr_39409 = state_39399;
(statearr_39409[(7)] = inst_39376__$1);

return statearr_39409;
})();
if(cljs.core.truth_(inst_39377)){
var statearr_39411_42156 = state_39399__$1;
(statearr_39411_42156[(1)] = (5));

} else {
var statearr_39412_42158 = state_39399__$1;
(statearr_39412_42158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (13))){
var state_39399__$1 = state_39399;
var statearr_39413_42161 = state_39399__$1;
(statearr_39413_42161[(2)] = null);

(statearr_39413_42161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (6))){
var inst_39376 = (state_39399[(7)]);
var inst_39382 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39376) : p.call(null, inst_39376));
var state_39399__$1 = state_39399;
if(cljs.core.truth_(inst_39382)){
var statearr_39414_42162 = state_39399__$1;
(statearr_39414_42162[(1)] = (9));

} else {
var statearr_39415_42164 = state_39399__$1;
(statearr_39415_42164[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (3))){
var inst_39397 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39399__$1,inst_39397);
} else {
if((state_val_39400 === (12))){
var state_39399__$1 = state_39399;
var statearr_39419_42170 = state_39399__$1;
(statearr_39419_42170[(2)] = null);

(statearr_39419_42170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (2))){
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39399__$1,(4),ch);
} else {
if((state_val_39400 === (11))){
var inst_39376 = (state_39399[(7)]);
var inst_39386 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39399__$1,(8),inst_39386,inst_39376);
} else {
if((state_val_39400 === (9))){
var state_39399__$1 = state_39399;
var statearr_39421_42172 = state_39399__$1;
(statearr_39421_42172[(2)] = tc);

(statearr_39421_42172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (5))){
var inst_39379 = cljs.core.async.close_BANG_(tc);
var inst_39380 = cljs.core.async.close_BANG_(fc);
var state_39399__$1 = (function (){var statearr_39422 = state_39399;
(statearr_39422[(8)] = inst_39379);

return statearr_39422;
})();
var statearr_39423_42173 = state_39399__$1;
(statearr_39423_42173[(2)] = inst_39380);

(statearr_39423_42173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (14))){
var inst_39393 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
var statearr_39426_42174 = state_39399__$1;
(statearr_39426_42174[(2)] = inst_39393);

(statearr_39426_42174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (10))){
var state_39399__$1 = state_39399;
var statearr_39427_42177 = state_39399__$1;
(statearr_39427_42177[(2)] = fc);

(statearr_39427_42177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (8))){
var inst_39388 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
if(cljs.core.truth_(inst_39388)){
var statearr_39428_42180 = state_39399__$1;
(statearr_39428_42180[(1)] = (12));

} else {
var statearr_39429_42182 = state_39399__$1;
(statearr_39429_42182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_39433 = [null,null,null,null,null,null,null,null,null];
(statearr_39433[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_39433[(1)] = (1));

return statearr_39433;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_39399){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39399);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39434){var ex__37660__auto__ = e39434;
var statearr_39435_42187 = state_39399;
(statearr_39435_42187[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39399[(4)]))){
var statearr_39436_42191 = state_39399;
(statearr_39436_42191[(1)] = cljs.core.first((state_39399[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42195 = state_39399;
state_39399 = G__42195;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_39399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_39399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39439 = f__38343__auto__();
(statearr_39439[(6)] = c__38342__auto___42146);

return statearr_39439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38342__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_39466){
var state_val_39467 = (state_39466[(1)]);
if((state_val_39467 === (7))){
var inst_39461 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39469_42204 = state_39466__$1;
(statearr_39469_42204[(2)] = inst_39461);

(statearr_39469_42204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (1))){
var inst_39441 = init;
var inst_39442 = inst_39441;
var state_39466__$1 = (function (){var statearr_39470 = state_39466;
(statearr_39470[(7)] = inst_39442);

return statearr_39470;
})();
var statearr_39472_42208 = state_39466__$1;
(statearr_39472_42208[(2)] = null);

(statearr_39472_42208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (4))){
var inst_39445 = (state_39466[(8)]);
var inst_39445__$1 = (state_39466[(2)]);
var inst_39446 = (inst_39445__$1 == null);
var state_39466__$1 = (function (){var statearr_39473 = state_39466;
(statearr_39473[(8)] = inst_39445__$1);

return statearr_39473;
})();
if(cljs.core.truth_(inst_39446)){
var statearr_39475_42209 = state_39466__$1;
(statearr_39475_42209[(1)] = (5));

} else {
var statearr_39476_42210 = state_39466__$1;
(statearr_39476_42210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (6))){
var inst_39442 = (state_39466[(7)]);
var inst_39449 = (state_39466[(9)]);
var inst_39445 = (state_39466[(8)]);
var inst_39449__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39442,inst_39445) : f.call(null, inst_39442,inst_39445));
var inst_39451 = cljs.core.reduced_QMARK_(inst_39449__$1);
var state_39466__$1 = (function (){var statearr_39477 = state_39466;
(statearr_39477[(9)] = inst_39449__$1);

return statearr_39477;
})();
if(inst_39451){
var statearr_39478_42217 = state_39466__$1;
(statearr_39478_42217[(1)] = (8));

} else {
var statearr_39479_42218 = state_39466__$1;
(statearr_39479_42218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (3))){
var inst_39463 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39466__$1,inst_39463);
} else {
if((state_val_39467 === (2))){
var state_39466__$1 = state_39466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39466__$1,(4),ch);
} else {
if((state_val_39467 === (9))){
var inst_39449 = (state_39466[(9)]);
var inst_39442 = inst_39449;
var state_39466__$1 = (function (){var statearr_39482 = state_39466;
(statearr_39482[(7)] = inst_39442);

return statearr_39482;
})();
var statearr_39483_42219 = state_39466__$1;
(statearr_39483_42219[(2)] = null);

(statearr_39483_42219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (5))){
var inst_39442 = (state_39466[(7)]);
var state_39466__$1 = state_39466;
var statearr_39487_42220 = state_39466__$1;
(statearr_39487_42220[(2)] = inst_39442);

(statearr_39487_42220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (10))){
var inst_39459 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39492_42225 = state_39466__$1;
(statearr_39492_42225[(2)] = inst_39459);

(statearr_39492_42225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (8))){
var inst_39449 = (state_39466[(9)]);
var inst_39454 = cljs.core.deref(inst_39449);
var state_39466__$1 = state_39466;
var statearr_39493_42232 = state_39466__$1;
(statearr_39493_42232[(2)] = inst_39454);

(statearr_39493_42232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37657__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37657__auto____0 = (function (){
var statearr_39497 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39497[(0)] = cljs$core$async$reduce_$_state_machine__37657__auto__);

(statearr_39497[(1)] = (1));

return statearr_39497;
});
var cljs$core$async$reduce_$_state_machine__37657__auto____1 = (function (state_39466){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39466);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39501){var ex__37660__auto__ = e39501;
var statearr_39502_42239 = state_39466;
(statearr_39502_42239[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39466[(4)]))){
var statearr_39503_42243 = state_39466;
(statearr_39503_42243[(1)] = cljs.core.first((state_39466[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42247 = state_39466;
state_39466 = G__42247;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37657__auto__ = function(state_39466){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37657__auto____1.call(this,state_39466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37657__auto____0;
cljs$core$async$reduce_$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37657__auto____1;
return cljs$core$async$reduce_$_state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39504 = f__38343__auto__();
(statearr_39504[(6)] = c__38342__auto__);

return statearr_39504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));

return c__38342__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__38342__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_39516){
var state_val_39517 = (state_39516[(1)]);
if((state_val_39517 === (1))){
var inst_39508 = cljs.core.async.reduce(f__$1,init,ch);
var state_39516__$1 = state_39516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39516__$1,(2),inst_39508);
} else {
if((state_val_39517 === (2))){
var inst_39510 = (state_39516[(2)]);
var inst_39511 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39510) : f__$1.call(null, inst_39510));
var state_39516__$1 = state_39516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39516__$1,inst_39511);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37657__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37657__auto____0 = (function (){
var statearr_39518 = [null,null,null,null,null,null,null];
(statearr_39518[(0)] = cljs$core$async$transduce_$_state_machine__37657__auto__);

(statearr_39518[(1)] = (1));

return statearr_39518;
});
var cljs$core$async$transduce_$_state_machine__37657__auto____1 = (function (state_39516){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39516);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39520){var ex__37660__auto__ = e39520;
var statearr_39521_42257 = state_39516;
(statearr_39521_42257[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39516[(4)]))){
var statearr_39523_42258 = state_39516;
(statearr_39523_42258[(1)] = cljs.core.first((state_39516[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42262 = state_39516;
state_39516 = G__42262;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37657__auto__ = function(state_39516){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37657__auto____1.call(this,state_39516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37657__auto____0;
cljs$core$async$transduce_$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37657__auto____1;
return cljs$core$async$transduce_$_state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39527 = f__38343__auto__();
(statearr_39527[(6)] = c__38342__auto__);

return statearr_39527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));

return c__38342__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__39529 = arguments.length;
switch (G__39529) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38342__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_39555){
var state_val_39556 = (state_39555[(1)]);
if((state_val_39556 === (7))){
var inst_39537 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39561_42271 = state_39555__$1;
(statearr_39561_42271[(2)] = inst_39537);

(statearr_39561_42271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (1))){
var inst_39531 = cljs.core.seq(coll);
var inst_39532 = inst_39531;
var state_39555__$1 = (function (){var statearr_39562 = state_39555;
(statearr_39562[(7)] = inst_39532);

return statearr_39562;
})();
var statearr_39563_42272 = state_39555__$1;
(statearr_39563_42272[(2)] = null);

(statearr_39563_42272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (4))){
var inst_39532 = (state_39555[(7)]);
var inst_39535 = cljs.core.first(inst_39532);
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39555__$1,(7),ch,inst_39535);
} else {
if((state_val_39556 === (13))){
var inst_39549 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39571_42273 = state_39555__$1;
(statearr_39571_42273[(2)] = inst_39549);

(statearr_39571_42273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (6))){
var inst_39540 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
if(cljs.core.truth_(inst_39540)){
var statearr_39572_42274 = state_39555__$1;
(statearr_39572_42274[(1)] = (8));

} else {
var statearr_39573_42275 = state_39555__$1;
(statearr_39573_42275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (3))){
var inst_39553 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39555__$1,inst_39553);
} else {
if((state_val_39556 === (12))){
var state_39555__$1 = state_39555;
var statearr_39575_42279 = state_39555__$1;
(statearr_39575_42279[(2)] = null);

(statearr_39575_42279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (2))){
var inst_39532 = (state_39555[(7)]);
var state_39555__$1 = state_39555;
if(cljs.core.truth_(inst_39532)){
var statearr_39576_42280 = state_39555__$1;
(statearr_39576_42280[(1)] = (4));

} else {
var statearr_39577_42281 = state_39555__$1;
(statearr_39577_42281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (11))){
var inst_39546 = cljs.core.async.close_BANG_(ch);
var state_39555__$1 = state_39555;
var statearr_39578_42282 = state_39555__$1;
(statearr_39578_42282[(2)] = inst_39546);

(statearr_39578_42282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (9))){
var state_39555__$1 = state_39555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39579_42286 = state_39555__$1;
(statearr_39579_42286[(1)] = (11));

} else {
var statearr_39580_42287 = state_39555__$1;
(statearr_39580_42287[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (5))){
var inst_39532 = (state_39555[(7)]);
var state_39555__$1 = state_39555;
var statearr_39581_42288 = state_39555__$1;
(statearr_39581_42288[(2)] = inst_39532);

(statearr_39581_42288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (10))){
var inst_39551 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39582_42289 = state_39555__$1;
(statearr_39582_42289[(2)] = inst_39551);

(statearr_39582_42289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (8))){
var inst_39532 = (state_39555[(7)]);
var inst_39542 = cljs.core.next(inst_39532);
var inst_39532__$1 = inst_39542;
var state_39555__$1 = (function (){var statearr_39586 = state_39555;
(statearr_39586[(7)] = inst_39532__$1);

return statearr_39586;
})();
var statearr_39587_42290 = state_39555__$1;
(statearr_39587_42290[(2)] = null);

(statearr_39587_42290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_39591 = [null,null,null,null,null,null,null,null];
(statearr_39591[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_39591[(1)] = (1));

return statearr_39591;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_39555){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39555);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39592){var ex__37660__auto__ = e39592;
var statearr_39593_42294 = state_39555;
(statearr_39593_42294[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39555[(4)]))){
var statearr_39594_42295 = state_39555;
(statearr_39594_42295[(1)] = cljs.core.first((state_39555[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42296 = state_39555;
state_39555 = G__42296;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_39555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_39555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39601 = f__38343__auto__();
(statearr_39601[(6)] = c__38342__auto__);

return statearr_39601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));

return c__38342__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39609 = arguments.length;
switch (G__39609) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_42299 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null, _));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_42299(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_42303 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_42303(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_42305 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_42305(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_42306 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null, m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_42306(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39634 = (function (ch,cs,meta39635){
this.ch = ch;
this.cs = cs;
this.meta39635 = meta39635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39636,meta39635__$1){
var self__ = this;
var _39636__$1 = this;
return (new cljs.core.async.t_cljs$core$async39634(self__.ch,self__.cs,meta39635__$1));
}));

(cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39636){
var self__ = this;
var _39636__$1 = this;
return self__.meta39635;
}));

(cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39634.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39635","meta39635",-1065749860,null)], null);
}));

(cljs.core.async.t_cljs$core$async39634.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39634");

(cljs.core.async.t_cljs$core$async39634.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39634");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39634.
 */
cljs.core.async.__GT_t_cljs$core$async39634 = (function cljs$core$async$__GT_t_cljs$core$async39634(ch,cs,meta39635){
return (new cljs.core.async.t_cljs$core$async39634(ch,cs,meta39635));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async39634(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__38342__auto___42313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_39797){
var state_val_39798 = (state_39797[(1)]);
if((state_val_39798 === (7))){
var inst_39793 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39800_42314 = state_39797__$1;
(statearr_39800_42314[(2)] = inst_39793);

(statearr_39800_42314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (20))){
var inst_39685 = (state_39797[(7)]);
var inst_39702 = cljs.core.first(inst_39685);
var inst_39703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39702,(0),null);
var inst_39704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39702,(1),null);
var state_39797__$1 = (function (){var statearr_39803 = state_39797;
(statearr_39803[(8)] = inst_39703);

return statearr_39803;
})();
if(cljs.core.truth_(inst_39704)){
var statearr_39807_42318 = state_39797__$1;
(statearr_39807_42318[(1)] = (22));

} else {
var statearr_39808_42319 = state_39797__$1;
(statearr_39808_42319[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (27))){
var inst_39741 = (state_39797[(9)]);
var inst_39735 = (state_39797[(10)]);
var inst_39733 = (state_39797[(11)]);
var inst_39652 = (state_39797[(12)]);
var inst_39741__$1 = cljs.core._nth(inst_39733,inst_39735);
var inst_39742 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39741__$1,inst_39652,done);
var state_39797__$1 = (function (){var statearr_39809 = state_39797;
(statearr_39809[(9)] = inst_39741__$1);

return statearr_39809;
})();
if(cljs.core.truth_(inst_39742)){
var statearr_39810_42320 = state_39797__$1;
(statearr_39810_42320[(1)] = (30));

} else {
var statearr_39811_42321 = state_39797__$1;
(statearr_39811_42321[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (1))){
var state_39797__$1 = state_39797;
var statearr_39812_42322 = state_39797__$1;
(statearr_39812_42322[(2)] = null);

(statearr_39812_42322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (24))){
var inst_39685 = (state_39797[(7)]);
var inst_39709 = (state_39797[(2)]);
var inst_39710 = cljs.core.next(inst_39685);
var inst_39661 = inst_39710;
var inst_39662 = null;
var inst_39663 = (0);
var inst_39664 = (0);
var state_39797__$1 = (function (){var statearr_39813 = state_39797;
(statearr_39813[(13)] = inst_39662);

(statearr_39813[(14)] = inst_39709);

(statearr_39813[(15)] = inst_39661);

(statearr_39813[(16)] = inst_39664);

(statearr_39813[(17)] = inst_39663);

return statearr_39813;
})();
var statearr_39814_42326 = state_39797__$1;
(statearr_39814_42326[(2)] = null);

(statearr_39814_42326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (39))){
var state_39797__$1 = state_39797;
var statearr_39820_42327 = state_39797__$1;
(statearr_39820_42327[(2)] = null);

(statearr_39820_42327[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (4))){
var inst_39652 = (state_39797[(12)]);
var inst_39652__$1 = (state_39797[(2)]);
var inst_39653 = (inst_39652__$1 == null);
var state_39797__$1 = (function (){var statearr_39821 = state_39797;
(statearr_39821[(12)] = inst_39652__$1);

return statearr_39821;
})();
if(cljs.core.truth_(inst_39653)){
var statearr_39822_42328 = state_39797__$1;
(statearr_39822_42328[(1)] = (5));

} else {
var statearr_39823_42329 = state_39797__$1;
(statearr_39823_42329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (15))){
var inst_39662 = (state_39797[(13)]);
var inst_39661 = (state_39797[(15)]);
var inst_39664 = (state_39797[(16)]);
var inst_39663 = (state_39797[(17)]);
var inst_39679 = (state_39797[(2)]);
var inst_39682 = (inst_39664 + (1));
var tmp39816 = inst_39662;
var tmp39817 = inst_39661;
var tmp39818 = inst_39663;
var inst_39661__$1 = tmp39817;
var inst_39662__$1 = tmp39816;
var inst_39663__$1 = tmp39818;
var inst_39664__$1 = inst_39682;
var state_39797__$1 = (function (){var statearr_39833 = state_39797;
(statearr_39833[(13)] = inst_39662__$1);

(statearr_39833[(15)] = inst_39661__$1);

(statearr_39833[(18)] = inst_39679);

(statearr_39833[(16)] = inst_39664__$1);

(statearr_39833[(17)] = inst_39663__$1);

return statearr_39833;
})();
var statearr_39836_42335 = state_39797__$1;
(statearr_39836_42335[(2)] = null);

(statearr_39836_42335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (21))){
var inst_39713 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39841_42336 = state_39797__$1;
(statearr_39841_42336[(2)] = inst_39713);

(statearr_39841_42336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (31))){
var inst_39741 = (state_39797[(9)]);
var inst_39746 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_39741);
var state_39797__$1 = state_39797;
var statearr_39843_42340 = state_39797__$1;
(statearr_39843_42340[(2)] = inst_39746);

(statearr_39843_42340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (32))){
var inst_39735 = (state_39797[(10)]);
var inst_39733 = (state_39797[(11)]);
var inst_39732 = (state_39797[(19)]);
var inst_39734 = (state_39797[(20)]);
var inst_39748 = (state_39797[(2)]);
var inst_39749 = (inst_39735 + (1));
var tmp39838 = inst_39733;
var tmp39839 = inst_39732;
var tmp39840 = inst_39734;
var inst_39732__$1 = tmp39839;
var inst_39733__$1 = tmp39838;
var inst_39734__$1 = tmp39840;
var inst_39735__$1 = inst_39749;
var state_39797__$1 = (function (){var statearr_39844 = state_39797;
(statearr_39844[(10)] = inst_39735__$1);

(statearr_39844[(11)] = inst_39733__$1);

(statearr_39844[(19)] = inst_39732__$1);

(statearr_39844[(21)] = inst_39748);

(statearr_39844[(20)] = inst_39734__$1);

return statearr_39844;
})();
var statearr_39845_42343 = state_39797__$1;
(statearr_39845_42343[(2)] = null);

(statearr_39845_42343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (40))){
var inst_39766 = (state_39797[(22)]);
var inst_39770 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_39766);
var state_39797__$1 = state_39797;
var statearr_39847_42346 = state_39797__$1;
(statearr_39847_42346[(2)] = inst_39770);

(statearr_39847_42346[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (33))){
var inst_39752 = (state_39797[(23)]);
var inst_39754 = cljs.core.chunked_seq_QMARK_(inst_39752);
var state_39797__$1 = state_39797;
if(inst_39754){
var statearr_39848_42347 = state_39797__$1;
(statearr_39848_42347[(1)] = (36));

} else {
var statearr_39849_42348 = state_39797__$1;
(statearr_39849_42348[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (13))){
var inst_39673 = (state_39797[(24)]);
var inst_39676 = cljs.core.async.close_BANG_(inst_39673);
var state_39797__$1 = state_39797;
var statearr_39854_42349 = state_39797__$1;
(statearr_39854_42349[(2)] = inst_39676);

(statearr_39854_42349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (22))){
var inst_39703 = (state_39797[(8)]);
var inst_39706 = cljs.core.async.close_BANG_(inst_39703);
var state_39797__$1 = state_39797;
var statearr_39855_42350 = state_39797__$1;
(statearr_39855_42350[(2)] = inst_39706);

(statearr_39855_42350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (36))){
var inst_39752 = (state_39797[(23)]);
var inst_39757 = cljs.core.chunk_first(inst_39752);
var inst_39759 = cljs.core.chunk_rest(inst_39752);
var inst_39760 = cljs.core.count(inst_39757);
var inst_39732 = inst_39759;
var inst_39733 = inst_39757;
var inst_39734 = inst_39760;
var inst_39735 = (0);
var state_39797__$1 = (function (){var statearr_39858 = state_39797;
(statearr_39858[(10)] = inst_39735);

(statearr_39858[(11)] = inst_39733);

(statearr_39858[(19)] = inst_39732);

(statearr_39858[(20)] = inst_39734);

return statearr_39858;
})();
var statearr_39859_42351 = state_39797__$1;
(statearr_39859_42351[(2)] = null);

(statearr_39859_42351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (41))){
var inst_39752 = (state_39797[(23)]);
var inst_39772 = (state_39797[(2)]);
var inst_39773 = cljs.core.next(inst_39752);
var inst_39732 = inst_39773;
var inst_39733 = null;
var inst_39734 = (0);
var inst_39735 = (0);
var state_39797__$1 = (function (){var statearr_39860 = state_39797;
(statearr_39860[(10)] = inst_39735);

(statearr_39860[(11)] = inst_39733);

(statearr_39860[(19)] = inst_39732);

(statearr_39860[(25)] = inst_39772);

(statearr_39860[(20)] = inst_39734);

return statearr_39860;
})();
var statearr_39861_42352 = state_39797__$1;
(statearr_39861_42352[(2)] = null);

(statearr_39861_42352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (43))){
var state_39797__$1 = state_39797;
var statearr_39862_42353 = state_39797__$1;
(statearr_39862_42353[(2)] = null);

(statearr_39862_42353[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (29))){
var inst_39781 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39863_42354 = state_39797__$1;
(statearr_39863_42354[(2)] = inst_39781);

(statearr_39863_42354[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (44))){
var inst_39790 = (state_39797[(2)]);
var state_39797__$1 = (function (){var statearr_39864 = state_39797;
(statearr_39864[(26)] = inst_39790);

return statearr_39864;
})();
var statearr_39865_42356 = state_39797__$1;
(statearr_39865_42356[(2)] = null);

(statearr_39865_42356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (6))){
var inst_39723 = (state_39797[(27)]);
var inst_39722 = cljs.core.deref(cs);
var inst_39723__$1 = cljs.core.keys(inst_39722);
var inst_39724 = cljs.core.count(inst_39723__$1);
var inst_39725 = cljs.core.reset_BANG_(dctr,inst_39724);
var inst_39730 = cljs.core.seq(inst_39723__$1);
var inst_39732 = inst_39730;
var inst_39733 = null;
var inst_39734 = (0);
var inst_39735 = (0);
var state_39797__$1 = (function (){var statearr_39866 = state_39797;
(statearr_39866[(28)] = inst_39725);

(statearr_39866[(10)] = inst_39735);

(statearr_39866[(11)] = inst_39733);

(statearr_39866[(19)] = inst_39732);

(statearr_39866[(20)] = inst_39734);

(statearr_39866[(27)] = inst_39723__$1);

return statearr_39866;
})();
var statearr_39869_42366 = state_39797__$1;
(statearr_39869_42366[(2)] = null);

(statearr_39869_42366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (28))){
var inst_39752 = (state_39797[(23)]);
var inst_39732 = (state_39797[(19)]);
var inst_39752__$1 = cljs.core.seq(inst_39732);
var state_39797__$1 = (function (){var statearr_39871 = state_39797;
(statearr_39871[(23)] = inst_39752__$1);

return statearr_39871;
})();
if(inst_39752__$1){
var statearr_39872_42373 = state_39797__$1;
(statearr_39872_42373[(1)] = (33));

} else {
var statearr_39873_42374 = state_39797__$1;
(statearr_39873_42374[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (25))){
var inst_39735 = (state_39797[(10)]);
var inst_39734 = (state_39797[(20)]);
var inst_39737 = (inst_39735 < inst_39734);
var inst_39738 = inst_39737;
var state_39797__$1 = state_39797;
if(cljs.core.truth_(inst_39738)){
var statearr_39874_42377 = state_39797__$1;
(statearr_39874_42377[(1)] = (27));

} else {
var statearr_39875_42378 = state_39797__$1;
(statearr_39875_42378[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (34))){
var state_39797__$1 = state_39797;
var statearr_39878_42379 = state_39797__$1;
(statearr_39878_42379[(2)] = null);

(statearr_39878_42379[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (17))){
var state_39797__$1 = state_39797;
var statearr_39880_42381 = state_39797__$1;
(statearr_39880_42381[(2)] = null);

(statearr_39880_42381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (3))){
var inst_39795 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39797__$1,inst_39795);
} else {
if((state_val_39798 === (12))){
var inst_39718 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39885_42385 = state_39797__$1;
(statearr_39885_42385[(2)] = inst_39718);

(statearr_39885_42385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (2))){
var state_39797__$1 = state_39797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39797__$1,(4),ch);
} else {
if((state_val_39798 === (23))){
var state_39797__$1 = state_39797;
var statearr_39889_42386 = state_39797__$1;
(statearr_39889_42386[(2)] = null);

(statearr_39889_42386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (35))){
var inst_39779 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39890_42387 = state_39797__$1;
(statearr_39890_42387[(2)] = inst_39779);

(statearr_39890_42387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (19))){
var inst_39685 = (state_39797[(7)]);
var inst_39691 = cljs.core.chunk_first(inst_39685);
var inst_39692 = cljs.core.chunk_rest(inst_39685);
var inst_39696 = cljs.core.count(inst_39691);
var inst_39661 = inst_39692;
var inst_39662 = inst_39691;
var inst_39663 = inst_39696;
var inst_39664 = (0);
var state_39797__$1 = (function (){var statearr_39891 = state_39797;
(statearr_39891[(13)] = inst_39662);

(statearr_39891[(15)] = inst_39661);

(statearr_39891[(16)] = inst_39664);

(statearr_39891[(17)] = inst_39663);

return statearr_39891;
})();
var statearr_39892_42392 = state_39797__$1;
(statearr_39892_42392[(2)] = null);

(statearr_39892_42392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (11))){
var inst_39685 = (state_39797[(7)]);
var inst_39661 = (state_39797[(15)]);
var inst_39685__$1 = cljs.core.seq(inst_39661);
var state_39797__$1 = (function (){var statearr_39893 = state_39797;
(statearr_39893[(7)] = inst_39685__$1);

return statearr_39893;
})();
if(inst_39685__$1){
var statearr_39894_42393 = state_39797__$1;
(statearr_39894_42393[(1)] = (16));

} else {
var statearr_39896_42394 = state_39797__$1;
(statearr_39896_42394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (9))){
var inst_39720 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39897_42395 = state_39797__$1;
(statearr_39897_42395[(2)] = inst_39720);

(statearr_39897_42395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (5))){
var inst_39659 = cljs.core.deref(cs);
var inst_39660 = cljs.core.seq(inst_39659);
var inst_39661 = inst_39660;
var inst_39662 = null;
var inst_39663 = (0);
var inst_39664 = (0);
var state_39797__$1 = (function (){var statearr_39900 = state_39797;
(statearr_39900[(13)] = inst_39662);

(statearr_39900[(15)] = inst_39661);

(statearr_39900[(16)] = inst_39664);

(statearr_39900[(17)] = inst_39663);

return statearr_39900;
})();
var statearr_39902_42404 = state_39797__$1;
(statearr_39902_42404[(2)] = null);

(statearr_39902_42404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (14))){
var state_39797__$1 = state_39797;
var statearr_39904_42406 = state_39797__$1;
(statearr_39904_42406[(2)] = null);

(statearr_39904_42406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (45))){
var inst_39787 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39905_42407 = state_39797__$1;
(statearr_39905_42407[(2)] = inst_39787);

(statearr_39905_42407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (26))){
var inst_39723 = (state_39797[(27)]);
var inst_39783 = (state_39797[(2)]);
var inst_39784 = cljs.core.seq(inst_39723);
var state_39797__$1 = (function (){var statearr_39908 = state_39797;
(statearr_39908[(29)] = inst_39783);

return statearr_39908;
})();
if(inst_39784){
var statearr_39909_42408 = state_39797__$1;
(statearr_39909_42408[(1)] = (42));

} else {
var statearr_39910_42409 = state_39797__$1;
(statearr_39910_42409[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (16))){
var inst_39685 = (state_39797[(7)]);
var inst_39688 = cljs.core.chunked_seq_QMARK_(inst_39685);
var state_39797__$1 = state_39797;
if(inst_39688){
var statearr_39911_42410 = state_39797__$1;
(statearr_39911_42410[(1)] = (19));

} else {
var statearr_39913_42411 = state_39797__$1;
(statearr_39913_42411[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (38))){
var inst_39776 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39916_42415 = state_39797__$1;
(statearr_39916_42415[(2)] = inst_39776);

(statearr_39916_42415[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (30))){
var state_39797__$1 = state_39797;
var statearr_39917_42416 = state_39797__$1;
(statearr_39917_42416[(2)] = null);

(statearr_39917_42416[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (10))){
var inst_39662 = (state_39797[(13)]);
var inst_39664 = (state_39797[(16)]);
var inst_39672 = cljs.core._nth(inst_39662,inst_39664);
var inst_39673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39672,(0),null);
var inst_39674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39672,(1),null);
var state_39797__$1 = (function (){var statearr_39923 = state_39797;
(statearr_39923[(24)] = inst_39673);

return statearr_39923;
})();
if(cljs.core.truth_(inst_39674)){
var statearr_39924_42417 = state_39797__$1;
(statearr_39924_42417[(1)] = (13));

} else {
var statearr_39926_42418 = state_39797__$1;
(statearr_39926_42418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (18))){
var inst_39716 = (state_39797[(2)]);
var state_39797__$1 = state_39797;
var statearr_39930_42419 = state_39797__$1;
(statearr_39930_42419[(2)] = inst_39716);

(statearr_39930_42419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (42))){
var state_39797__$1 = state_39797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39797__$1,(45),dchan);
} else {
if((state_val_39798 === (37))){
var inst_39752 = (state_39797[(23)]);
var inst_39652 = (state_39797[(12)]);
var inst_39766 = (state_39797[(22)]);
var inst_39766__$1 = cljs.core.first(inst_39752);
var inst_39767 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39766__$1,inst_39652,done);
var state_39797__$1 = (function (){var statearr_39932 = state_39797;
(statearr_39932[(22)] = inst_39766__$1);

return statearr_39932;
})();
if(cljs.core.truth_(inst_39767)){
var statearr_39933_42420 = state_39797__$1;
(statearr_39933_42420[(1)] = (39));

} else {
var statearr_39934_42421 = state_39797__$1;
(statearr_39934_42421[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39798 === (8))){
var inst_39664 = (state_39797[(16)]);
var inst_39663 = (state_39797[(17)]);
var inst_39666 = (inst_39664 < inst_39663);
var inst_39667 = inst_39666;
var state_39797__$1 = state_39797;
if(cljs.core.truth_(inst_39667)){
var statearr_39939_42422 = state_39797__$1;
(statearr_39939_42422[(1)] = (10));

} else {
var statearr_39941_42423 = state_39797__$1;
(statearr_39941_42423[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37657__auto__ = null;
var cljs$core$async$mult_$_state_machine__37657__auto____0 = (function (){
var statearr_39946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39946[(0)] = cljs$core$async$mult_$_state_machine__37657__auto__);

(statearr_39946[(1)] = (1));

return statearr_39946;
});
var cljs$core$async$mult_$_state_machine__37657__auto____1 = (function (state_39797){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_39797);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e39952){var ex__37660__auto__ = e39952;
var statearr_39953_42430 = state_39797;
(statearr_39953_42430[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_39797[(4)]))){
var statearr_39954_42431 = state_39797;
(statearr_39954_42431[(1)] = cljs.core.first((state_39797[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42436 = state_39797;
state_39797 = G__42436;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37657__auto__ = function(state_39797){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37657__auto____1.call(this,state_39797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37657__auto____0;
cljs$core$async$mult_$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37657__auto____1;
return cljs$core$async$mult_$_state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_39956 = f__38343__auto__();
(statearr_39956[(6)] = c__38342__auto___42313);

return statearr_39956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39962 = arguments.length;
switch (G__39962) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_42440 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_42440(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_42445 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_42445(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_42454 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null, m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_42454(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_42455 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null, m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_42455(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_42457 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null, m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_42457(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___42478 = arguments.length;
var i__5767__auto___42479 = (0);
while(true){
if((i__5767__auto___42479 < len__5766__auto___42478)){
args__5772__auto__.push((arguments[i__5767__auto___42479]));

var G__42484 = (i__5767__auto___42479 + (1));
i__5767__auto___42479 = G__42484;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40023){
var map__40024 = p__40023;
var map__40024__$1 = cljs.core.__destructure_map(map__40024);
var opts = map__40024__$1;
var statearr_40026_42496 = state;
(statearr_40026_42496[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40031_42503 = state;
(statearr_40031_42503[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_40032_42504 = state;
(statearr_40032_42504[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40009){
var G__40010 = cljs.core.first(seq40009);
var seq40009__$1 = cljs.core.next(seq40009);
var G__40011 = cljs.core.first(seq40009__$1);
var seq40009__$2 = cljs.core.next(seq40009__$1);
var G__40012 = cljs.core.first(seq40009__$2);
var seq40009__$3 = cljs.core.next(seq40009__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40010,G__40011,G__40012,seq40009__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40052 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40053){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40053 = meta40053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40054,meta40053__$1){
var self__ = this;
var _40054__$1 = this;
return (new cljs.core.async.t_cljs$core$async40052(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40053__$1));
}));

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40054){
var self__ = this;
var _40054__$1 = this;
return self__.meta40053;
}));

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async40052.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async40052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40053","meta40053",1268593167,null)], null);
}));

(cljs.core.async.t_cljs$core$async40052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40052");

(cljs.core.async.t_cljs$core$async40052.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40052.
 */
cljs.core.async.__GT_t_cljs$core$async40052 = (function cljs$core$async$__GT_t_cljs$core$async40052(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40053){
return (new cljs.core.async.t_cljs$core$async40052(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40053));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async40052(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__38342__auto___42531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_40156){
var state_val_40157 = (state_40156[(1)]);
if((state_val_40157 === (7))){
var inst_40110 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
if(cljs.core.truth_(inst_40110)){
var statearr_40164_42532 = state_40156__$1;
(statearr_40164_42532[(1)] = (8));

} else {
var statearr_40166_42533 = state_40156__$1;
(statearr_40166_42533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (20))){
var inst_40100 = (state_40156[(7)]);
var state_40156__$1 = state_40156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40156__$1,(23),out,inst_40100);
} else {
if((state_val_40157 === (1))){
var inst_40082 = calc_state();
var inst_40083 = cljs.core.__destructure_map(inst_40082);
var inst_40084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40083,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40083,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40083,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40087 = inst_40082;
var state_40156__$1 = (function (){var statearr_40171 = state_40156;
(statearr_40171[(8)] = inst_40085);

(statearr_40171[(9)] = inst_40087);

(statearr_40171[(10)] = inst_40084);

(statearr_40171[(11)] = inst_40086);

return statearr_40171;
})();
var statearr_40174_42536 = state_40156__$1;
(statearr_40174_42536[(2)] = null);

(statearr_40174_42536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (24))){
var inst_40091 = (state_40156[(12)]);
var inst_40087 = inst_40091;
var state_40156__$1 = (function (){var statearr_40179 = state_40156;
(statearr_40179[(9)] = inst_40087);

return statearr_40179;
})();
var statearr_40180_42541 = state_40156__$1;
(statearr_40180_42541[(2)] = null);

(statearr_40180_42541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (4))){
var inst_40104 = (state_40156[(13)]);
var inst_40100 = (state_40156[(7)]);
var inst_40099 = (state_40156[(2)]);
var inst_40100__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40099,(0),null);
var inst_40101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40099,(1),null);
var inst_40104__$1 = (inst_40100__$1 == null);
var state_40156__$1 = (function (){var statearr_40188 = state_40156;
(statearr_40188[(13)] = inst_40104__$1);

(statearr_40188[(7)] = inst_40100__$1);

(statearr_40188[(14)] = inst_40101);

return statearr_40188;
})();
if(cljs.core.truth_(inst_40104__$1)){
var statearr_40192_42545 = state_40156__$1;
(statearr_40192_42545[(1)] = (5));

} else {
var statearr_40194_42546 = state_40156__$1;
(statearr_40194_42546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (15))){
var inst_40092 = (state_40156[(15)]);
var inst_40125 = (state_40156[(16)]);
var inst_40125__$1 = cljs.core.empty_QMARK_(inst_40092);
var state_40156__$1 = (function (){var statearr_40196 = state_40156;
(statearr_40196[(16)] = inst_40125__$1);

return statearr_40196;
})();
if(inst_40125__$1){
var statearr_40198_42547 = state_40156__$1;
(statearr_40198_42547[(1)] = (17));

} else {
var statearr_40200_42548 = state_40156__$1;
(statearr_40200_42548[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (21))){
var inst_40091 = (state_40156[(12)]);
var inst_40087 = inst_40091;
var state_40156__$1 = (function (){var statearr_40201 = state_40156;
(statearr_40201[(9)] = inst_40087);

return statearr_40201;
})();
var statearr_40202_42549 = state_40156__$1;
(statearr_40202_42549[(2)] = null);

(statearr_40202_42549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (13))){
var inst_40117 = (state_40156[(2)]);
var inst_40118 = calc_state();
var inst_40087 = inst_40118;
var state_40156__$1 = (function (){var statearr_40208 = state_40156;
(statearr_40208[(9)] = inst_40087);

(statearr_40208[(17)] = inst_40117);

return statearr_40208;
})();
var statearr_40212_42557 = state_40156__$1;
(statearr_40212_42557[(2)] = null);

(statearr_40212_42557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (22))){
var inst_40147 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40217_42558 = state_40156__$1;
(statearr_40217_42558[(2)] = inst_40147);

(statearr_40217_42558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (6))){
var inst_40101 = (state_40156[(14)]);
var inst_40108 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40101,change);
var state_40156__$1 = state_40156;
var statearr_40220_42567 = state_40156__$1;
(statearr_40220_42567[(2)] = inst_40108);

(statearr_40220_42567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (25))){
var state_40156__$1 = state_40156;
var statearr_40223_42578 = state_40156__$1;
(statearr_40223_42578[(2)] = null);

(statearr_40223_42578[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (17))){
var inst_40093 = (state_40156[(18)]);
var inst_40101 = (state_40156[(14)]);
var inst_40127 = (inst_40093.cljs$core$IFn$_invoke$arity$1 ? inst_40093.cljs$core$IFn$_invoke$arity$1(inst_40101) : inst_40093.call(null, inst_40101));
var inst_40128 = cljs.core.not(inst_40127);
var state_40156__$1 = state_40156;
var statearr_40228_42583 = state_40156__$1;
(statearr_40228_42583[(2)] = inst_40128);

(statearr_40228_42583[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (3))){
var inst_40151 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40156__$1,inst_40151);
} else {
if((state_val_40157 === (12))){
var state_40156__$1 = state_40156;
var statearr_40231_42589 = state_40156__$1;
(statearr_40231_42589[(2)] = null);

(statearr_40231_42589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (2))){
var inst_40091 = (state_40156[(12)]);
var inst_40087 = (state_40156[(9)]);
var inst_40091__$1 = cljs.core.__destructure_map(inst_40087);
var inst_40092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40091__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40091__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40091__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40156__$1 = (function (){var statearr_40239 = state_40156;
(statearr_40239[(15)] = inst_40092);

(statearr_40239[(18)] = inst_40093);

(statearr_40239[(12)] = inst_40091__$1);

return statearr_40239;
})();
return cljs.core.async.ioc_alts_BANG_(state_40156__$1,(4),inst_40094);
} else {
if((state_val_40157 === (23))){
var inst_40136 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
if(cljs.core.truth_(inst_40136)){
var statearr_40241_42606 = state_40156__$1;
(statearr_40241_42606[(1)] = (24));

} else {
var statearr_40242_42608 = state_40156__$1;
(statearr_40242_42608[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (19))){
var inst_40131 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40247_42610 = state_40156__$1;
(statearr_40247_42610[(2)] = inst_40131);

(statearr_40247_42610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (11))){
var inst_40101 = (state_40156[(14)]);
var inst_40114 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_40101);
var state_40156__$1 = state_40156;
var statearr_40252_42612 = state_40156__$1;
(statearr_40252_42612[(2)] = inst_40114);

(statearr_40252_42612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (9))){
var inst_40092 = (state_40156[(15)]);
var inst_40121 = (state_40156[(19)]);
var inst_40101 = (state_40156[(14)]);
var inst_40121__$1 = (inst_40092.cljs$core$IFn$_invoke$arity$1 ? inst_40092.cljs$core$IFn$_invoke$arity$1(inst_40101) : inst_40092.call(null, inst_40101));
var state_40156__$1 = (function (){var statearr_40253 = state_40156;
(statearr_40253[(19)] = inst_40121__$1);

return statearr_40253;
})();
if(cljs.core.truth_(inst_40121__$1)){
var statearr_40255_42613 = state_40156__$1;
(statearr_40255_42613[(1)] = (14));

} else {
var statearr_40256_42614 = state_40156__$1;
(statearr_40256_42614[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (5))){
var inst_40104 = (state_40156[(13)]);
var state_40156__$1 = state_40156;
var statearr_40260_42617 = state_40156__$1;
(statearr_40260_42617[(2)] = inst_40104);

(statearr_40260_42617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (14))){
var inst_40121 = (state_40156[(19)]);
var state_40156__$1 = state_40156;
var statearr_40264_42620 = state_40156__$1;
(statearr_40264_42620[(2)] = inst_40121);

(statearr_40264_42620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (26))){
var inst_40142 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40265_42621 = state_40156__$1;
(statearr_40265_42621[(2)] = inst_40142);

(statearr_40265_42621[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (16))){
var inst_40133 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
if(cljs.core.truth_(inst_40133)){
var statearr_40267_42625 = state_40156__$1;
(statearr_40267_42625[(1)] = (20));

} else {
var statearr_40268_42626 = state_40156__$1;
(statearr_40268_42626[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (10))){
var inst_40149 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40269_42628 = state_40156__$1;
(statearr_40269_42628[(2)] = inst_40149);

(statearr_40269_42628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (18))){
var inst_40125 = (state_40156[(16)]);
var state_40156__$1 = state_40156;
var statearr_40277_42630 = state_40156__$1;
(statearr_40277_42630[(2)] = inst_40125);

(statearr_40277_42630[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (8))){
var inst_40100 = (state_40156[(7)]);
var inst_40112 = (inst_40100 == null);
var state_40156__$1 = state_40156;
if(cljs.core.truth_(inst_40112)){
var statearr_40281_42631 = state_40156__$1;
(statearr_40281_42631[(1)] = (11));

} else {
var statearr_40282_42632 = state_40156__$1;
(statearr_40282_42632[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37657__auto__ = null;
var cljs$core$async$mix_$_state_machine__37657__auto____0 = (function (){
var statearr_40286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40286[(0)] = cljs$core$async$mix_$_state_machine__37657__auto__);

(statearr_40286[(1)] = (1));

return statearr_40286;
});
var cljs$core$async$mix_$_state_machine__37657__auto____1 = (function (state_40156){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_40156);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e40294){var ex__37660__auto__ = e40294;
var statearr_40295_42633 = state_40156;
(statearr_40295_42633[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_40156[(4)]))){
var statearr_40297_42634 = state_40156;
(statearr_40297_42634[(1)] = cljs.core.first((state_40156[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42635 = state_40156;
state_40156 = G__42635;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37657__auto__ = function(state_40156){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37657__auto____1.call(this,state_40156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37657__auto____0;
cljs$core$async$mix_$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37657__auto____1;
return cljs$core$async$mix_$_state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_40302 = f__38343__auto__();
(statearr_40302[(6)] = c__38342__auto___42531);

return statearr_40302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_42637 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_42637(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_42648 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null, p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_42648(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_42649 = (function() {
var G__42650 = null;
var G__42650__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null, p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__42650__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null, p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__42650 = function(p,v){
switch(arguments.length){
case 1:
return G__42650__1.call(this,p);
case 2:
return G__42650__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42650.cljs$core$IFn$_invoke$arity$1 = G__42650__1;
G__42650.cljs$core$IFn$_invoke$arity$2 = G__42650__2;
return G__42650;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40366 = arguments.length;
switch (G__40366) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42649(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_42649(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40414 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40415){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40415 = meta40415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40416,meta40415__$1){
var self__ = this;
var _40416__$1 = this;
return (new cljs.core.async.t_cljs$core$async40414(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40415__$1));
}));

(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40416){
var self__ = this;
var _40416__$1 = this;
return self__.meta40415;
}));

(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40415","meta40415",717442181,null)], null);
}));

(cljs.core.async.t_cljs$core$async40414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40414");

(cljs.core.async.t_cljs$core$async40414.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40414.
 */
cljs.core.async.__GT_t_cljs$core$async40414 = (function cljs$core$async$__GT_t_cljs$core$async40414(ch,topic_fn,buf_fn,mults,ensure_mult,meta40415){
return (new cljs.core.async.t_cljs$core$async40414(ch,topic_fn,buf_fn,mults,ensure_mult,meta40415));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40398 = arguments.length;
switch (G__40398) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40381_SHARP_){
if(cljs.core.truth_((p1__40381_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40381_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40381_SHARP_.call(null, topic)))){
return p1__40381_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40381_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async40414(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__38342__auto___42678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_40531){
var state_val_40532 = (state_40531[(1)]);
if((state_val_40532 === (7))){
var inst_40527 = (state_40531[(2)]);
var state_40531__$1 = state_40531;
var statearr_40534_42680 = state_40531__$1;
(statearr_40534_42680[(2)] = inst_40527);

(statearr_40534_42680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (20))){
var state_40531__$1 = state_40531;
var statearr_40536_42681 = state_40531__$1;
(statearr_40536_42681[(2)] = null);

(statearr_40536_42681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (1))){
var state_40531__$1 = state_40531;
var statearr_40537_42682 = state_40531__$1;
(statearr_40537_42682[(2)] = null);

(statearr_40537_42682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (24))){
var inst_40510 = (state_40531[(7)]);
var inst_40519 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40510);
var state_40531__$1 = state_40531;
var statearr_40538_42684 = state_40531__$1;
(statearr_40538_42684[(2)] = inst_40519);

(statearr_40538_42684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (4))){
var inst_40455 = (state_40531[(8)]);
var inst_40455__$1 = (state_40531[(2)]);
var inst_40456 = (inst_40455__$1 == null);
var state_40531__$1 = (function (){var statearr_40539 = state_40531;
(statearr_40539[(8)] = inst_40455__$1);

return statearr_40539;
})();
if(cljs.core.truth_(inst_40456)){
var statearr_40540_42685 = state_40531__$1;
(statearr_40540_42685[(1)] = (5));

} else {
var statearr_40543_42686 = state_40531__$1;
(statearr_40543_42686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (15))){
var inst_40504 = (state_40531[(2)]);
var state_40531__$1 = state_40531;
var statearr_40544_42687 = state_40531__$1;
(statearr_40544_42687[(2)] = inst_40504);

(statearr_40544_42687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (21))){
var inst_40524 = (state_40531[(2)]);
var state_40531__$1 = (function (){var statearr_40545 = state_40531;
(statearr_40545[(9)] = inst_40524);

return statearr_40545;
})();
var statearr_40546_42688 = state_40531__$1;
(statearr_40546_42688[(2)] = null);

(statearr_40546_42688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (13))){
var inst_40481 = (state_40531[(10)]);
var inst_40484 = cljs.core.chunked_seq_QMARK_(inst_40481);
var state_40531__$1 = state_40531;
if(inst_40484){
var statearr_40548_42689 = state_40531__$1;
(statearr_40548_42689[(1)] = (16));

} else {
var statearr_40549_42690 = state_40531__$1;
(statearr_40549_42690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (22))){
var inst_40516 = (state_40531[(2)]);
var state_40531__$1 = state_40531;
if(cljs.core.truth_(inst_40516)){
var statearr_40550_42691 = state_40531__$1;
(statearr_40550_42691[(1)] = (23));

} else {
var statearr_40551_42692 = state_40531__$1;
(statearr_40551_42692[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (6))){
var inst_40510 = (state_40531[(7)]);
var inst_40512 = (state_40531[(11)]);
var inst_40455 = (state_40531[(8)]);
var inst_40510__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40455) : topic_fn.call(null, inst_40455));
var inst_40511 = cljs.core.deref(mults);
var inst_40512__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40511,inst_40510__$1);
var state_40531__$1 = (function (){var statearr_40552 = state_40531;
(statearr_40552[(7)] = inst_40510__$1);

(statearr_40552[(11)] = inst_40512__$1);

return statearr_40552;
})();
if(cljs.core.truth_(inst_40512__$1)){
var statearr_40553_42700 = state_40531__$1;
(statearr_40553_42700[(1)] = (19));

} else {
var statearr_40555_42701 = state_40531__$1;
(statearr_40555_42701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (25))){
var inst_40521 = (state_40531[(2)]);
var state_40531__$1 = state_40531;
var statearr_40556_42702 = state_40531__$1;
(statearr_40556_42702[(2)] = inst_40521);

(statearr_40556_42702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (17))){
var inst_40481 = (state_40531[(10)]);
var inst_40492 = cljs.core.first(inst_40481);
var inst_40493 = cljs.core.async.muxch_STAR_(inst_40492);
var inst_40494 = cljs.core.async.close_BANG_(inst_40493);
var inst_40495 = cljs.core.next(inst_40481);
var inst_40465 = inst_40495;
var inst_40466 = null;
var inst_40467 = (0);
var inst_40468 = (0);
var state_40531__$1 = (function (){var statearr_40557 = state_40531;
(statearr_40557[(12)] = inst_40467);

(statearr_40557[(13)] = inst_40465);

(statearr_40557[(14)] = inst_40494);

(statearr_40557[(15)] = inst_40466);

(statearr_40557[(16)] = inst_40468);

return statearr_40557;
})();
var statearr_40558_42707 = state_40531__$1;
(statearr_40558_42707[(2)] = null);

(statearr_40558_42707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (3))){
var inst_40529 = (state_40531[(2)]);
var state_40531__$1 = state_40531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40531__$1,inst_40529);
} else {
if((state_val_40532 === (12))){
var inst_40506 = (state_40531[(2)]);
var state_40531__$1 = state_40531;
var statearr_40561_42708 = state_40531__$1;
(statearr_40561_42708[(2)] = inst_40506);

(statearr_40561_42708[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (2))){
var state_40531__$1 = state_40531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40531__$1,(4),ch);
} else {
if((state_val_40532 === (23))){
var state_40531__$1 = state_40531;
var statearr_40562_42715 = state_40531__$1;
(statearr_40562_42715[(2)] = null);

(statearr_40562_42715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (19))){
var inst_40512 = (state_40531[(11)]);
var inst_40455 = (state_40531[(8)]);
var inst_40514 = cljs.core.async.muxch_STAR_(inst_40512);
var state_40531__$1 = state_40531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40531__$1,(22),inst_40514,inst_40455);
} else {
if((state_val_40532 === (11))){
var inst_40465 = (state_40531[(13)]);
var inst_40481 = (state_40531[(10)]);
var inst_40481__$1 = cljs.core.seq(inst_40465);
var state_40531__$1 = (function (){var statearr_40563 = state_40531;
(statearr_40563[(10)] = inst_40481__$1);

return statearr_40563;
})();
if(inst_40481__$1){
var statearr_40564_42719 = state_40531__$1;
(statearr_40564_42719[(1)] = (13));

} else {
var statearr_40565_42723 = state_40531__$1;
(statearr_40565_42723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (9))){
var inst_40508 = (state_40531[(2)]);
var state_40531__$1 = state_40531;
var statearr_40566_42724 = state_40531__$1;
(statearr_40566_42724[(2)] = inst_40508);

(statearr_40566_42724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (5))){
var inst_40462 = cljs.core.deref(mults);
var inst_40463 = cljs.core.vals(inst_40462);
var inst_40464 = cljs.core.seq(inst_40463);
var inst_40465 = inst_40464;
var inst_40466 = null;
var inst_40467 = (0);
var inst_40468 = (0);
var state_40531__$1 = (function (){var statearr_40569 = state_40531;
(statearr_40569[(12)] = inst_40467);

(statearr_40569[(13)] = inst_40465);

(statearr_40569[(15)] = inst_40466);

(statearr_40569[(16)] = inst_40468);

return statearr_40569;
})();
var statearr_40570_42733 = state_40531__$1;
(statearr_40570_42733[(2)] = null);

(statearr_40570_42733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (14))){
var state_40531__$1 = state_40531;
var statearr_40574_42735 = state_40531__$1;
(statearr_40574_42735[(2)] = null);

(statearr_40574_42735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (16))){
var inst_40481 = (state_40531[(10)]);
var inst_40486 = cljs.core.chunk_first(inst_40481);
var inst_40488 = cljs.core.chunk_rest(inst_40481);
var inst_40489 = cljs.core.count(inst_40486);
var inst_40465 = inst_40488;
var inst_40466 = inst_40486;
var inst_40467 = inst_40489;
var inst_40468 = (0);
var state_40531__$1 = (function (){var statearr_40577 = state_40531;
(statearr_40577[(12)] = inst_40467);

(statearr_40577[(13)] = inst_40465);

(statearr_40577[(15)] = inst_40466);

(statearr_40577[(16)] = inst_40468);

return statearr_40577;
})();
var statearr_40578_42741 = state_40531__$1;
(statearr_40578_42741[(2)] = null);

(statearr_40578_42741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (10))){
var inst_40467 = (state_40531[(12)]);
var inst_40465 = (state_40531[(13)]);
var inst_40466 = (state_40531[(15)]);
var inst_40468 = (state_40531[(16)]);
var inst_40475 = cljs.core._nth(inst_40466,inst_40468);
var inst_40476 = cljs.core.async.muxch_STAR_(inst_40475);
var inst_40477 = cljs.core.async.close_BANG_(inst_40476);
var inst_40478 = (inst_40468 + (1));
var tmp40571 = inst_40467;
var tmp40572 = inst_40465;
var tmp40573 = inst_40466;
var inst_40465__$1 = tmp40572;
var inst_40466__$1 = tmp40573;
var inst_40467__$1 = tmp40571;
var inst_40468__$1 = inst_40478;
var state_40531__$1 = (function (){var statearr_40579 = state_40531;
(statearr_40579[(12)] = inst_40467__$1);

(statearr_40579[(13)] = inst_40465__$1);

(statearr_40579[(17)] = inst_40477);

(statearr_40579[(15)] = inst_40466__$1);

(statearr_40579[(16)] = inst_40468__$1);

return statearr_40579;
})();
var statearr_40580_42742 = state_40531__$1;
(statearr_40580_42742[(2)] = null);

(statearr_40580_42742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (18))){
var inst_40498 = (state_40531[(2)]);
var state_40531__$1 = state_40531;
var statearr_40586_42743 = state_40531__$1;
(statearr_40586_42743[(2)] = inst_40498);

(statearr_40586_42743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40532 === (8))){
var inst_40467 = (state_40531[(12)]);
var inst_40468 = (state_40531[(16)]);
var inst_40470 = (inst_40468 < inst_40467);
var inst_40471 = inst_40470;
var state_40531__$1 = state_40531;
if(cljs.core.truth_(inst_40471)){
var statearr_40587_42749 = state_40531__$1;
(statearr_40587_42749[(1)] = (10));

} else {
var statearr_40588_42750 = state_40531__$1;
(statearr_40588_42750[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_40589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40589[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_40589[(1)] = (1));

return statearr_40589;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_40531){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_40531);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e40590){var ex__37660__auto__ = e40590;
var statearr_40591_42753 = state_40531;
(statearr_40591_42753[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_40531[(4)]))){
var statearr_40592_42754 = state_40531;
(statearr_40592_42754[(1)] = cljs.core.first((state_40531[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42755 = state_40531;
state_40531 = G__42755;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_40531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_40531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_40593 = f__38343__auto__();
(statearr_40593[(6)] = c__38342__auto___42678);

return statearr_40593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40595 = arguments.length;
switch (G__40595) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40605 = arguments.length;
switch (G__40605) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40613 = arguments.length;
switch (G__40613) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__38342__auto___42767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_40696){
var state_val_40697 = (state_40696[(1)]);
if((state_val_40697 === (7))){
var state_40696__$1 = state_40696;
var statearr_40708_42769 = state_40696__$1;
(statearr_40708_42769[(2)] = null);

(statearr_40708_42769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (1))){
var state_40696__$1 = state_40696;
var statearr_40709_42770 = state_40696__$1;
(statearr_40709_42770[(2)] = null);

(statearr_40709_42770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (4))){
var inst_40620 = (state_40696[(7)]);
var inst_40621 = (state_40696[(8)]);
var inst_40623 = (inst_40621 < inst_40620);
var state_40696__$1 = state_40696;
if(cljs.core.truth_(inst_40623)){
var statearr_40723_42776 = state_40696__$1;
(statearr_40723_42776[(1)] = (6));

} else {
var statearr_40724_42778 = state_40696__$1;
(statearr_40724_42778[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (15))){
var inst_40682 = (state_40696[(9)]);
var inst_40687 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40682);
var state_40696__$1 = state_40696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40696__$1,(17),out,inst_40687);
} else {
if((state_val_40697 === (13))){
var inst_40682 = (state_40696[(9)]);
var inst_40682__$1 = (state_40696[(2)]);
var inst_40683 = cljs.core.some(cljs.core.nil_QMARK_,inst_40682__$1);
var state_40696__$1 = (function (){var statearr_40733 = state_40696;
(statearr_40733[(9)] = inst_40682__$1);

return statearr_40733;
})();
if(cljs.core.truth_(inst_40683)){
var statearr_40734_42783 = state_40696__$1;
(statearr_40734_42783[(1)] = (14));

} else {
var statearr_40737_42784 = state_40696__$1;
(statearr_40737_42784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (6))){
var state_40696__$1 = state_40696;
var statearr_40738_42785 = state_40696__$1;
(statearr_40738_42785[(2)] = null);

(statearr_40738_42785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (17))){
var inst_40689 = (state_40696[(2)]);
var state_40696__$1 = (function (){var statearr_40761 = state_40696;
(statearr_40761[(10)] = inst_40689);

return statearr_40761;
})();
var statearr_40762_42786 = state_40696__$1;
(statearr_40762_42786[(2)] = null);

(statearr_40762_42786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (3))){
var inst_40694 = (state_40696[(2)]);
var state_40696__$1 = state_40696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40696__$1,inst_40694);
} else {
if((state_val_40697 === (12))){
var _ = (function (){var statearr_40763 = state_40696;
(statearr_40763[(4)] = cljs.core.rest((state_40696[(4)])));

return statearr_40763;
})();
var state_40696__$1 = state_40696;
var ex40760 = (state_40696__$1[(2)]);
var statearr_40764_42790 = state_40696__$1;
(statearr_40764_42790[(5)] = ex40760);


if((ex40760 instanceof Object)){
var statearr_40766_42791 = state_40696__$1;
(statearr_40766_42791[(1)] = (11));

(statearr_40766_42791[(5)] = null);

} else {
throw ex40760;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (2))){
var inst_40619 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40620 = cnt;
var inst_40621 = (0);
var state_40696__$1 = (function (){var statearr_40771 = state_40696;
(statearr_40771[(11)] = inst_40619);

(statearr_40771[(7)] = inst_40620);

(statearr_40771[(8)] = inst_40621);

return statearr_40771;
})();
var statearr_40772_42793 = state_40696__$1;
(statearr_40772_42793[(2)] = null);

(statearr_40772_42793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (11))){
var inst_40658 = (state_40696[(2)]);
var inst_40659 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40696__$1 = (function (){var statearr_40773 = state_40696;
(statearr_40773[(12)] = inst_40658);

return statearr_40773;
})();
var statearr_40774_42802 = state_40696__$1;
(statearr_40774_42802[(2)] = inst_40659);

(statearr_40774_42802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (9))){
var inst_40621 = (state_40696[(8)]);
var _ = (function (){var statearr_40775 = state_40696;
(statearr_40775[(4)] = cljs.core.cons((12),(state_40696[(4)])));

return statearr_40775;
})();
var inst_40665 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40621) : chs__$1.call(null, inst_40621));
var inst_40666 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40621) : done.call(null, inst_40621));
var inst_40667 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40665,inst_40666);
var ___$1 = (function (){var statearr_40776 = state_40696;
(statearr_40776[(4)] = cljs.core.rest((state_40696[(4)])));

return statearr_40776;
})();
var state_40696__$1 = state_40696;
var statearr_40777_42806 = state_40696__$1;
(statearr_40777_42806[(2)] = inst_40667);

(statearr_40777_42806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (5))){
var inst_40680 = (state_40696[(2)]);
var state_40696__$1 = (function (){var statearr_40778 = state_40696;
(statearr_40778[(13)] = inst_40680);

return statearr_40778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40696__$1,(13),dchan);
} else {
if((state_val_40697 === (14))){
var inst_40685 = cljs.core.async.close_BANG_(out);
var state_40696__$1 = state_40696;
var statearr_40783_42810 = state_40696__$1;
(statearr_40783_42810[(2)] = inst_40685);

(statearr_40783_42810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (16))){
var inst_40692 = (state_40696[(2)]);
var state_40696__$1 = state_40696;
var statearr_40784_42811 = state_40696__$1;
(statearr_40784_42811[(2)] = inst_40692);

(statearr_40784_42811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (10))){
var inst_40621 = (state_40696[(8)]);
var inst_40670 = (state_40696[(2)]);
var inst_40674 = (inst_40621 + (1));
var inst_40621__$1 = inst_40674;
var state_40696__$1 = (function (){var statearr_40787 = state_40696;
(statearr_40787[(8)] = inst_40621__$1);

(statearr_40787[(14)] = inst_40670);

return statearr_40787;
})();
var statearr_40791_42812 = state_40696__$1;
(statearr_40791_42812[(2)] = null);

(statearr_40791_42812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40697 === (8))){
var inst_40678 = (state_40696[(2)]);
var state_40696__$1 = state_40696;
var statearr_40792_42814 = state_40696__$1;
(statearr_40792_42814[(2)] = inst_40678);

(statearr_40792_42814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_40794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40794[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_40794[(1)] = (1));

return statearr_40794;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_40696){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_40696);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e40795){var ex__37660__auto__ = e40795;
var statearr_40797_42819 = state_40696;
(statearr_40797_42819[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_40696[(4)]))){
var statearr_40798_42824 = state_40696;
(statearr_40798_42824[(1)] = cljs.core.first((state_40696[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42826 = state_40696;
state_40696 = G__42826;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_40696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_40696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_40799 = f__38343__auto__();
(statearr_40799[(6)] = c__38342__auto___42767);

return statearr_40799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40802 = arguments.length;
switch (G__40802) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38342__auto___42850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_40842){
var state_val_40843 = (state_40842[(1)]);
if((state_val_40843 === (7))){
var inst_40820 = (state_40842[(7)]);
var inst_40819 = (state_40842[(8)]);
var inst_40819__$1 = (state_40842[(2)]);
var inst_40820__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40819__$1,(0),null);
var inst_40822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40819__$1,(1),null);
var inst_40823 = (inst_40820__$1 == null);
var state_40842__$1 = (function (){var statearr_40848 = state_40842;
(statearr_40848[(7)] = inst_40820__$1);

(statearr_40848[(9)] = inst_40822);

(statearr_40848[(8)] = inst_40819__$1);

return statearr_40848;
})();
if(cljs.core.truth_(inst_40823)){
var statearr_40856_42851 = state_40842__$1;
(statearr_40856_42851[(1)] = (8));

} else {
var statearr_40857_42852 = state_40842__$1;
(statearr_40857_42852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (1))){
var inst_40808 = cljs.core.vec(chs);
var inst_40809 = inst_40808;
var state_40842__$1 = (function (){var statearr_40858 = state_40842;
(statearr_40858[(10)] = inst_40809);

return statearr_40858;
})();
var statearr_40859_42866 = state_40842__$1;
(statearr_40859_42866[(2)] = null);

(statearr_40859_42866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (4))){
var inst_40809 = (state_40842[(10)]);
var state_40842__$1 = state_40842;
return cljs.core.async.ioc_alts_BANG_(state_40842__$1,(7),inst_40809);
} else {
if((state_val_40843 === (6))){
var inst_40838 = (state_40842[(2)]);
var state_40842__$1 = state_40842;
var statearr_40861_42867 = state_40842__$1;
(statearr_40861_42867[(2)] = inst_40838);

(statearr_40861_42867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (3))){
var inst_40840 = (state_40842[(2)]);
var state_40842__$1 = state_40842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40842__$1,inst_40840);
} else {
if((state_val_40843 === (2))){
var inst_40809 = (state_40842[(10)]);
var inst_40811 = cljs.core.count(inst_40809);
var inst_40812 = (inst_40811 > (0));
var state_40842__$1 = state_40842;
if(cljs.core.truth_(inst_40812)){
var statearr_40868_42869 = state_40842__$1;
(statearr_40868_42869[(1)] = (4));

} else {
var statearr_40869_42870 = state_40842__$1;
(statearr_40869_42870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (11))){
var inst_40809 = (state_40842[(10)]);
var inst_40831 = (state_40842[(2)]);
var tmp40866 = inst_40809;
var inst_40809__$1 = tmp40866;
var state_40842__$1 = (function (){var statearr_40870 = state_40842;
(statearr_40870[(11)] = inst_40831);

(statearr_40870[(10)] = inst_40809__$1);

return statearr_40870;
})();
var statearr_40871_42872 = state_40842__$1;
(statearr_40871_42872[(2)] = null);

(statearr_40871_42872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (9))){
var inst_40820 = (state_40842[(7)]);
var state_40842__$1 = state_40842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40842__$1,(11),out,inst_40820);
} else {
if((state_val_40843 === (5))){
var inst_40836 = cljs.core.async.close_BANG_(out);
var state_40842__$1 = state_40842;
var statearr_40875_42875 = state_40842__$1;
(statearr_40875_42875[(2)] = inst_40836);

(statearr_40875_42875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (10))){
var inst_40834 = (state_40842[(2)]);
var state_40842__$1 = state_40842;
var statearr_40878_42876 = state_40842__$1;
(statearr_40878_42876[(2)] = inst_40834);

(statearr_40878_42876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40843 === (8))){
var inst_40820 = (state_40842[(7)]);
var inst_40822 = (state_40842[(9)]);
var inst_40819 = (state_40842[(8)]);
var inst_40809 = (state_40842[(10)]);
var inst_40825 = (function (){var cs = inst_40809;
var vec__40815 = inst_40819;
var v = inst_40820;
var c = inst_40822;
return (function (p1__40800_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40800_SHARP_);
});
})();
var inst_40826 = cljs.core.filterv(inst_40825,inst_40809);
var inst_40809__$1 = inst_40826;
var state_40842__$1 = (function (){var statearr_40880 = state_40842;
(statearr_40880[(10)] = inst_40809__$1);

return statearr_40880;
})();
var statearr_40882_42880 = state_40842__$1;
(statearr_40882_42880[(2)] = null);

(statearr_40882_42880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_40883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40883[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_40883[(1)] = (1));

return statearr_40883;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_40842){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_40842);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e40885){var ex__37660__auto__ = e40885;
var statearr_40886_42881 = state_40842;
(statearr_40886_42881[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_40842[(4)]))){
var statearr_40887_42882 = state_40842;
(statearr_40887_42882[(1)] = cljs.core.first((state_40842[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42887 = state_40842;
state_40842 = G__42887;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_40842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_40842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_40899 = f__38343__auto__();
(statearr_40899[(6)] = c__38342__auto___42850);

return statearr_40899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40901 = arguments.length;
switch (G__40901) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38342__auto___42893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_40942){
var state_val_40943 = (state_40942[(1)]);
if((state_val_40943 === (7))){
var inst_40917 = (state_40942[(7)]);
var inst_40917__$1 = (state_40942[(2)]);
var inst_40918 = (inst_40917__$1 == null);
var inst_40919 = cljs.core.not(inst_40918);
var state_40942__$1 = (function (){var statearr_40948 = state_40942;
(statearr_40948[(7)] = inst_40917__$1);

return statearr_40948;
})();
if(inst_40919){
var statearr_40949_42897 = state_40942__$1;
(statearr_40949_42897[(1)] = (8));

} else {
var statearr_40950_42898 = state_40942__$1;
(statearr_40950_42898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (1))){
var inst_40906 = (0);
var state_40942__$1 = (function (){var statearr_40951 = state_40942;
(statearr_40951[(8)] = inst_40906);

return statearr_40951;
})();
var statearr_40952_42899 = state_40942__$1;
(statearr_40952_42899[(2)] = null);

(statearr_40952_42899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (4))){
var state_40942__$1 = state_40942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40942__$1,(7),ch);
} else {
if((state_val_40943 === (6))){
var inst_40937 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
var statearr_40953_42905 = state_40942__$1;
(statearr_40953_42905[(2)] = inst_40937);

(statearr_40953_42905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (3))){
var inst_40939 = (state_40942[(2)]);
var inst_40940 = cljs.core.async.close_BANG_(out);
var state_40942__$1 = (function (){var statearr_40954 = state_40942;
(statearr_40954[(9)] = inst_40939);

return statearr_40954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40942__$1,inst_40940);
} else {
if((state_val_40943 === (2))){
var inst_40906 = (state_40942[(8)]);
var inst_40908 = (inst_40906 < n);
var state_40942__$1 = state_40942;
if(cljs.core.truth_(inst_40908)){
var statearr_40955_42906 = state_40942__$1;
(statearr_40955_42906[(1)] = (4));

} else {
var statearr_40956_42907 = state_40942__$1;
(statearr_40956_42907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (11))){
var inst_40906 = (state_40942[(8)]);
var inst_40926 = (state_40942[(2)]);
var inst_40930 = (inst_40906 + (1));
var inst_40906__$1 = inst_40930;
var state_40942__$1 = (function (){var statearr_40957 = state_40942;
(statearr_40957[(10)] = inst_40926);

(statearr_40957[(8)] = inst_40906__$1);

return statearr_40957;
})();
var statearr_40960_42908 = state_40942__$1;
(statearr_40960_42908[(2)] = null);

(statearr_40960_42908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (9))){
var state_40942__$1 = state_40942;
var statearr_40962_42913 = state_40942__$1;
(statearr_40962_42913[(2)] = null);

(statearr_40962_42913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (5))){
var state_40942__$1 = state_40942;
var statearr_40966_42914 = state_40942__$1;
(statearr_40966_42914[(2)] = null);

(statearr_40966_42914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (10))){
var inst_40934 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
var statearr_40967_42915 = state_40942__$1;
(statearr_40967_42915[(2)] = inst_40934);

(statearr_40967_42915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (8))){
var inst_40917 = (state_40942[(7)]);
var state_40942__$1 = state_40942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40942__$1,(11),out,inst_40917);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_40970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40970[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_40970[(1)] = (1));

return statearr_40970;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_40942){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_40942);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e40973){var ex__37660__auto__ = e40973;
var statearr_40974_42916 = state_40942;
(statearr_40974_42916[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_40942[(4)]))){
var statearr_40975_42917 = state_40942;
(statearr_40975_42917[(1)] = cljs.core.first((state_40942[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42918 = state_40942;
state_40942 = G__42918;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_40942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_40942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_40981 = f__38343__auto__();
(statearr_40981[(6)] = c__38342__auto___42893);

return statearr_40981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40998 = (function (f,ch,meta40990,_,fn1,meta40999){
this.f = f;
this.ch = ch;
this.meta40990 = meta40990;
this._ = _;
this.fn1 = fn1;
this.meta40999 = meta40999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41000,meta40999__$1){
var self__ = this;
var _41000__$1 = this;
return (new cljs.core.async.t_cljs$core$async40998(self__.f,self__.ch,self__.meta40990,self__._,self__.fn1,meta40999__$1));
}));

(cljs.core.async.t_cljs$core$async40998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41000){
var self__ = this;
var _41000__$1 = this;
return self__.meta40999;
}));

(cljs.core.async.t_cljs$core$async40998.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40986_SHARP_){
var G__41008 = (((p1__40986_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40986_SHARP_) : self__.f.call(null, p1__40986_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__41008) : f1.call(null, G__41008));
});
}));

(cljs.core.async.t_cljs$core$async40998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40990","meta40990",-472843076,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40989","cljs.core.async/t_cljs$core$async40989",1906441240,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40999","meta40999",161467417,null)], null);
}));

(cljs.core.async.t_cljs$core$async40998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40998");

(cljs.core.async.t_cljs$core$async40998.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40998.
 */
cljs.core.async.__GT_t_cljs$core$async40998 = (function cljs$core$async$__GT_t_cljs$core$async40998(f,ch,meta40990,_,fn1,meta40999){
return (new cljs.core.async.t_cljs$core$async40998(f,ch,meta40990,_,fn1,meta40999));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40989 = (function (f,ch,meta40990){
this.f = f;
this.ch = ch;
this.meta40990 = meta40990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40991,meta40990__$1){
var self__ = this;
var _40991__$1 = this;
return (new cljs.core.async.t_cljs$core$async40989(self__.f,self__.ch,meta40990__$1));
}));

(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40991){
var self__ = this;
var _40991__$1 = this;
return self__.meta40990;
}));

(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async40998(self__.f,self__.ch,self__.meta40990,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__41011 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__41011) : self__.f.call(null, G__41011));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40989.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40990","meta40990",-472843076,null)], null);
}));

(cljs.core.async.t_cljs$core$async40989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40989");

(cljs.core.async.t_cljs$core$async40989.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40989.
 */
cljs.core.async.__GT_t_cljs$core$async40989 = (function cljs$core$async$__GT_t_cljs$core$async40989(f,ch,meta40990){
return (new cljs.core.async.t_cljs$core$async40989(f,ch,meta40990));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40989(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41012 = (function (f,ch,meta41013){
this.f = f;
this.ch = ch;
this.meta41013 = meta41013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41014,meta41013__$1){
var self__ = this;
var _41014__$1 = this;
return (new cljs.core.async.t_cljs$core$async41012(self__.f,self__.ch,meta41013__$1));
}));

(cljs.core.async.t_cljs$core$async41012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41014){
var self__ = this;
var _41014__$1 = this;
return self__.meta41013;
}));

(cljs.core.async.t_cljs$core$async41012.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41012.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41012.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41012.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41012.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41012.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async41012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41013","meta41013",-2115506500,null)], null);
}));

(cljs.core.async.t_cljs$core$async41012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41012");

(cljs.core.async.t_cljs$core$async41012.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async41012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41012.
 */
cljs.core.async.__GT_t_cljs$core$async41012 = (function cljs$core$async$__GT_t_cljs$core$async41012(f,ch,meta41013){
return (new cljs.core.async.t_cljs$core$async41012(f,ch,meta41013));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async41012(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41022 = (function (p,ch,meta41023){
this.p = p;
this.ch = ch;
this.meta41023 = meta41023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41024,meta41023__$1){
var self__ = this;
var _41024__$1 = this;
return (new cljs.core.async.t_cljs$core$async41022(self__.p,self__.ch,meta41023__$1));
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41024){
var self__ = this;
var _41024__$1 = this;
return self__.meta41023;
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41023","meta41023",-2048739641,null)], null);
}));

(cljs.core.async.t_cljs$core$async41022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41022");

(cljs.core.async.t_cljs$core$async41022.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async41022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41022.
 */
cljs.core.async.__GT_t_cljs$core$async41022 = (function cljs$core$async$__GT_t_cljs$core$async41022(p,ch,meta41023){
return (new cljs.core.async.t_cljs$core$async41022(p,ch,meta41023));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async41022(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41042 = arguments.length;
switch (G__41042) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38342__auto___42949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_41073){
var state_val_41074 = (state_41073[(1)]);
if((state_val_41074 === (7))){
var inst_41069 = (state_41073[(2)]);
var state_41073__$1 = state_41073;
var statearr_41075_42952 = state_41073__$1;
(statearr_41075_42952[(2)] = inst_41069);

(statearr_41075_42952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41074 === (1))){
var state_41073__$1 = state_41073;
var statearr_41076_42954 = state_41073__$1;
(statearr_41076_42954[(2)] = null);

(statearr_41076_42954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41074 === (4))){
var inst_41055 = (state_41073[(7)]);
var inst_41055__$1 = (state_41073[(2)]);
var inst_41056 = (inst_41055__$1 == null);
var state_41073__$1 = (function (){var statearr_41077 = state_41073;
(statearr_41077[(7)] = inst_41055__$1);

return statearr_41077;
})();
if(cljs.core.truth_(inst_41056)){
var statearr_41078_42958 = state_41073__$1;
(statearr_41078_42958[(1)] = (5));

} else {
var statearr_41079_42960 = state_41073__$1;
(statearr_41079_42960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41074 === (6))){
var inst_41055 = (state_41073[(7)]);
var inst_41060 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41055) : p.call(null, inst_41055));
var state_41073__$1 = state_41073;
if(cljs.core.truth_(inst_41060)){
var statearr_41080_42961 = state_41073__$1;
(statearr_41080_42961[(1)] = (8));

} else {
var statearr_41081_42962 = state_41073__$1;
(statearr_41081_42962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41074 === (3))){
var inst_41071 = (state_41073[(2)]);
var state_41073__$1 = state_41073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41073__$1,inst_41071);
} else {
if((state_val_41074 === (2))){
var state_41073__$1 = state_41073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41073__$1,(4),ch);
} else {
if((state_val_41074 === (11))){
var inst_41063 = (state_41073[(2)]);
var state_41073__$1 = state_41073;
var statearr_41085_42964 = state_41073__$1;
(statearr_41085_42964[(2)] = inst_41063);

(statearr_41085_42964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41074 === (9))){
var state_41073__$1 = state_41073;
var statearr_41094_42966 = state_41073__$1;
(statearr_41094_42966[(2)] = null);

(statearr_41094_42966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41074 === (5))){
var inst_41058 = cljs.core.async.close_BANG_(out);
var state_41073__$1 = state_41073;
var statearr_41101_42968 = state_41073__$1;
(statearr_41101_42968[(2)] = inst_41058);

(statearr_41101_42968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41074 === (10))){
var inst_41066 = (state_41073[(2)]);
var state_41073__$1 = (function (){var statearr_41102 = state_41073;
(statearr_41102[(8)] = inst_41066);

return statearr_41102;
})();
var statearr_41110_42970 = state_41073__$1;
(statearr_41110_42970[(2)] = null);

(statearr_41110_42970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41074 === (8))){
var inst_41055 = (state_41073[(7)]);
var state_41073__$1 = state_41073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41073__$1,(11),out,inst_41055);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_41112 = [null,null,null,null,null,null,null,null,null];
(statearr_41112[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_41112[(1)] = (1));

return statearr_41112;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_41073){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_41073);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e41113){var ex__37660__auto__ = e41113;
var statearr_41114_42974 = state_41073;
(statearr_41114_42974[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_41073[(4)]))){
var statearr_41115_42977 = state_41073;
(statearr_41115_42977[(1)] = cljs.core.first((state_41073[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42981 = state_41073;
state_41073 = G__42981;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_41073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_41073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_41131 = f__38343__auto__();
(statearr_41131[(6)] = c__38342__auto___42949);

return statearr_41131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41139 = arguments.length;
switch (G__41139) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38342__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_41223){
var state_val_41224 = (state_41223[(1)]);
if((state_val_41224 === (7))){
var inst_41215 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41225_42991 = state_41223__$1;
(statearr_41225_42991[(2)] = inst_41215);

(statearr_41225_42991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (20))){
var inst_41174 = (state_41223[(7)]);
var inst_41192 = (state_41223[(2)]);
var inst_41193 = cljs.core.next(inst_41174);
var inst_41157 = inst_41193;
var inst_41158 = null;
var inst_41159 = (0);
var inst_41160 = (0);
var state_41223__$1 = (function (){var statearr_41228 = state_41223;
(statearr_41228[(8)] = inst_41158);

(statearr_41228[(9)] = inst_41160);

(statearr_41228[(10)] = inst_41192);

(statearr_41228[(11)] = inst_41157);

(statearr_41228[(12)] = inst_41159);

return statearr_41228;
})();
var statearr_41229_42998 = state_41223__$1;
(statearr_41229_42998[(2)] = null);

(statearr_41229_42998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (1))){
var state_41223__$1 = state_41223;
var statearr_41230_43003 = state_41223__$1;
(statearr_41230_43003[(2)] = null);

(statearr_41230_43003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (4))){
var inst_41146 = (state_41223[(13)]);
var inst_41146__$1 = (state_41223[(2)]);
var inst_41147 = (inst_41146__$1 == null);
var state_41223__$1 = (function (){var statearr_41231 = state_41223;
(statearr_41231[(13)] = inst_41146__$1);

return statearr_41231;
})();
if(cljs.core.truth_(inst_41147)){
var statearr_41232_43004 = state_41223__$1;
(statearr_41232_43004[(1)] = (5));

} else {
var statearr_41233_43005 = state_41223__$1;
(statearr_41233_43005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (15))){
var state_41223__$1 = state_41223;
var statearr_41237_43007 = state_41223__$1;
(statearr_41237_43007[(2)] = null);

(statearr_41237_43007[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (21))){
var state_41223__$1 = state_41223;
var statearr_41238_43008 = state_41223__$1;
(statearr_41238_43008[(2)] = null);

(statearr_41238_43008[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (13))){
var inst_41158 = (state_41223[(8)]);
var inst_41160 = (state_41223[(9)]);
var inst_41157 = (state_41223[(11)]);
var inst_41159 = (state_41223[(12)]);
var inst_41170 = (state_41223[(2)]);
var inst_41171 = (inst_41160 + (1));
var tmp41234 = inst_41158;
var tmp41235 = inst_41157;
var tmp41236 = inst_41159;
var inst_41157__$1 = tmp41235;
var inst_41158__$1 = tmp41234;
var inst_41159__$1 = tmp41236;
var inst_41160__$1 = inst_41171;
var state_41223__$1 = (function (){var statearr_41239 = state_41223;
(statearr_41239[(8)] = inst_41158__$1);

(statearr_41239[(9)] = inst_41160__$1);

(statearr_41239[(11)] = inst_41157__$1);

(statearr_41239[(14)] = inst_41170);

(statearr_41239[(12)] = inst_41159__$1);

return statearr_41239;
})();
var statearr_41240_43010 = state_41223__$1;
(statearr_41240_43010[(2)] = null);

(statearr_41240_43010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (22))){
var state_41223__$1 = state_41223;
var statearr_41241_43012 = state_41223__$1;
(statearr_41241_43012[(2)] = null);

(statearr_41241_43012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (6))){
var inst_41146 = (state_41223[(13)]);
var inst_41155 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41146) : f.call(null, inst_41146));
var inst_41156 = cljs.core.seq(inst_41155);
var inst_41157 = inst_41156;
var inst_41158 = null;
var inst_41159 = (0);
var inst_41160 = (0);
var state_41223__$1 = (function (){var statearr_41245 = state_41223;
(statearr_41245[(8)] = inst_41158);

(statearr_41245[(9)] = inst_41160);

(statearr_41245[(11)] = inst_41157);

(statearr_41245[(12)] = inst_41159);

return statearr_41245;
})();
var statearr_41246_43031 = state_41223__$1;
(statearr_41246_43031[(2)] = null);

(statearr_41246_43031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (17))){
var inst_41174 = (state_41223[(7)]);
var inst_41181 = cljs.core.chunk_first(inst_41174);
var inst_41182 = cljs.core.chunk_rest(inst_41174);
var inst_41183 = cljs.core.count(inst_41181);
var inst_41157 = inst_41182;
var inst_41158 = inst_41181;
var inst_41159 = inst_41183;
var inst_41160 = (0);
var state_41223__$1 = (function (){var statearr_41247 = state_41223;
(statearr_41247[(8)] = inst_41158);

(statearr_41247[(9)] = inst_41160);

(statearr_41247[(11)] = inst_41157);

(statearr_41247[(12)] = inst_41159);

return statearr_41247;
})();
var statearr_41248_43032 = state_41223__$1;
(statearr_41248_43032[(2)] = null);

(statearr_41248_43032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (3))){
var inst_41217 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41223__$1,inst_41217);
} else {
if((state_val_41224 === (12))){
var inst_41201 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41257_43038 = state_41223__$1;
(statearr_41257_43038[(2)] = inst_41201);

(statearr_41257_43038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (2))){
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41223__$1,(4),in$);
} else {
if((state_val_41224 === (23))){
var inst_41213 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41258_43048 = state_41223__$1;
(statearr_41258_43048[(2)] = inst_41213);

(statearr_41258_43048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (19))){
var inst_41196 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41259_43050 = state_41223__$1;
(statearr_41259_43050[(2)] = inst_41196);

(statearr_41259_43050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (11))){
var inst_41174 = (state_41223[(7)]);
var inst_41157 = (state_41223[(11)]);
var inst_41174__$1 = cljs.core.seq(inst_41157);
var state_41223__$1 = (function (){var statearr_41263 = state_41223;
(statearr_41263[(7)] = inst_41174__$1);

return statearr_41263;
})();
if(inst_41174__$1){
var statearr_41264_43052 = state_41223__$1;
(statearr_41264_43052[(1)] = (14));

} else {
var statearr_41265_43053 = state_41223__$1;
(statearr_41265_43053[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (9))){
var inst_41203 = (state_41223[(2)]);
var inst_41204 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_41223__$1 = (function (){var statearr_41268 = state_41223;
(statearr_41268[(15)] = inst_41203);

return statearr_41268;
})();
if(cljs.core.truth_(inst_41204)){
var statearr_41269_43055 = state_41223__$1;
(statearr_41269_43055[(1)] = (21));

} else {
var statearr_41270_43056 = state_41223__$1;
(statearr_41270_43056[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (5))){
var inst_41149 = cljs.core.async.close_BANG_(out);
var state_41223__$1 = state_41223;
var statearr_41274_43063 = state_41223__$1;
(statearr_41274_43063[(2)] = inst_41149);

(statearr_41274_43063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (14))){
var inst_41174 = (state_41223[(7)]);
var inst_41179 = cljs.core.chunked_seq_QMARK_(inst_41174);
var state_41223__$1 = state_41223;
if(inst_41179){
var statearr_41275_43072 = state_41223__$1;
(statearr_41275_43072[(1)] = (17));

} else {
var statearr_41276_43075 = state_41223__$1;
(statearr_41276_43075[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (16))){
var inst_41199 = (state_41223[(2)]);
var state_41223__$1 = state_41223;
var statearr_41282_43076 = state_41223__$1;
(statearr_41282_43076[(2)] = inst_41199);

(statearr_41282_43076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41224 === (10))){
var inst_41158 = (state_41223[(8)]);
var inst_41160 = (state_41223[(9)]);
var inst_41168 = cljs.core._nth(inst_41158,inst_41160);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41223__$1,(13),out,inst_41168);
} else {
if((state_val_41224 === (18))){
var inst_41174 = (state_41223[(7)]);
var inst_41186 = cljs.core.first(inst_41174);
var state_41223__$1 = state_41223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41223__$1,(20),out,inst_41186);
} else {
if((state_val_41224 === (8))){
var inst_41160 = (state_41223[(9)]);
var inst_41159 = (state_41223[(12)]);
var inst_41162 = (inst_41160 < inst_41159);
var inst_41163 = inst_41162;
var state_41223__$1 = state_41223;
if(cljs.core.truth_(inst_41163)){
var statearr_41293_43098 = state_41223__$1;
(statearr_41293_43098[(1)] = (10));

} else {
var statearr_41294_43102 = state_41223__$1;
(statearr_41294_43102[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37657__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37657__auto____0 = (function (){
var statearr_41295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41295[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37657__auto__);

(statearr_41295[(1)] = (1));

return statearr_41295;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37657__auto____1 = (function (state_41223){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_41223);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e41299){var ex__37660__auto__ = e41299;
var statearr_41300_43118 = state_41223;
(statearr_41300_43118[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_41223[(4)]))){
var statearr_41304_43119 = state_41223;
(statearr_41304_43119[(1)] = cljs.core.first((state_41223[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43120 = state_41223;
state_41223 = G__43120;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37657__auto__ = function(state_41223){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37657__auto____1.call(this,state_41223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37657__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37657__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_41307 = f__38343__auto__();
(statearr_41307[(6)] = c__38342__auto__);

return statearr_41307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));

return c__38342__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41314 = arguments.length;
switch (G__41314) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41318 = arguments.length;
switch (G__41318) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41320 = arguments.length;
switch (G__41320) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38342__auto___43185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_41355){
var state_val_41356 = (state_41355[(1)]);
if((state_val_41356 === (7))){
var inst_41350 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
var statearr_41359_43192 = state_41355__$1;
(statearr_41359_43192[(2)] = inst_41350);

(statearr_41359_43192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (1))){
var inst_41327 = null;
var state_41355__$1 = (function (){var statearr_41360 = state_41355;
(statearr_41360[(7)] = inst_41327);

return statearr_41360;
})();
var statearr_41361_43193 = state_41355__$1;
(statearr_41361_43193[(2)] = null);

(statearr_41361_43193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (4))){
var inst_41334 = (state_41355[(8)]);
var inst_41334__$1 = (state_41355[(2)]);
var inst_41336 = (inst_41334__$1 == null);
var inst_41337 = cljs.core.not(inst_41336);
var state_41355__$1 = (function (){var statearr_41365 = state_41355;
(statearr_41365[(8)] = inst_41334__$1);

return statearr_41365;
})();
if(inst_41337){
var statearr_41366_43203 = state_41355__$1;
(statearr_41366_43203[(1)] = (5));

} else {
var statearr_41367_43204 = state_41355__$1;
(statearr_41367_43204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (6))){
var state_41355__$1 = state_41355;
var statearr_41368_43205 = state_41355__$1;
(statearr_41368_43205[(2)] = null);

(statearr_41368_43205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (3))){
var inst_41352 = (state_41355[(2)]);
var inst_41353 = cljs.core.async.close_BANG_(out);
var state_41355__$1 = (function (){var statearr_41372 = state_41355;
(statearr_41372[(9)] = inst_41352);

return statearr_41372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41355__$1,inst_41353);
} else {
if((state_val_41356 === (2))){
var state_41355__$1 = state_41355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41355__$1,(4),ch);
} else {
if((state_val_41356 === (11))){
var inst_41334 = (state_41355[(8)]);
var inst_41344 = (state_41355[(2)]);
var inst_41327 = inst_41334;
var state_41355__$1 = (function (){var statearr_41373 = state_41355;
(statearr_41373[(10)] = inst_41344);

(statearr_41373[(7)] = inst_41327);

return statearr_41373;
})();
var statearr_41374_43211 = state_41355__$1;
(statearr_41374_43211[(2)] = null);

(statearr_41374_43211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (9))){
var inst_41334 = (state_41355[(8)]);
var state_41355__$1 = state_41355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41355__$1,(11),out,inst_41334);
} else {
if((state_val_41356 === (5))){
var inst_41327 = (state_41355[(7)]);
var inst_41334 = (state_41355[(8)]);
var inst_41339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41334,inst_41327);
var state_41355__$1 = state_41355;
if(inst_41339){
var statearr_41379_43216 = state_41355__$1;
(statearr_41379_43216[(1)] = (8));

} else {
var statearr_41382_43221 = state_41355__$1;
(statearr_41382_43221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (10))){
var inst_41347 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
var statearr_41383_43222 = state_41355__$1;
(statearr_41383_43222[(2)] = inst_41347);

(statearr_41383_43222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (8))){
var inst_41327 = (state_41355[(7)]);
var tmp41378 = inst_41327;
var inst_41327__$1 = tmp41378;
var state_41355__$1 = (function (){var statearr_41384 = state_41355;
(statearr_41384[(7)] = inst_41327__$1);

return statearr_41384;
})();
var statearr_41385_43223 = state_41355__$1;
(statearr_41385_43223[(2)] = null);

(statearr_41385_43223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_41386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41386[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_41386[(1)] = (1));

return statearr_41386;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_41355){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_41355);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e41387){var ex__37660__auto__ = e41387;
var statearr_41388_43228 = state_41355;
(statearr_41388_43228[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_41355[(4)]))){
var statearr_41392_43229 = state_41355;
(statearr_41392_43229[(1)] = cljs.core.first((state_41355[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43230 = state_41355;
state_41355 = G__43230;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_41355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_41355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_41393 = f__38343__auto__();
(statearr_41393[(6)] = c__38342__auto___43185);

return statearr_41393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41407 = arguments.length;
switch (G__41407) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38342__auto___43258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_41485){
var state_val_41486 = (state_41485[(1)]);
if((state_val_41486 === (7))){
var inst_41478 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
var statearr_41512_43268 = state_41485__$1;
(statearr_41512_43268[(2)] = inst_41478);

(statearr_41512_43268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (1))){
var inst_41421 = (new Array(n));
var inst_41422 = inst_41421;
var inst_41423 = (0);
var state_41485__$1 = (function (){var statearr_41515 = state_41485;
(statearr_41515[(7)] = inst_41422);

(statearr_41515[(8)] = inst_41423);

return statearr_41515;
})();
var statearr_41516_43270 = state_41485__$1;
(statearr_41516_43270[(2)] = null);

(statearr_41516_43270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (4))){
var inst_41426 = (state_41485[(9)]);
var inst_41426__$1 = (state_41485[(2)]);
var inst_41427 = (inst_41426__$1 == null);
var inst_41428 = cljs.core.not(inst_41427);
var state_41485__$1 = (function (){var statearr_41525 = state_41485;
(statearr_41525[(9)] = inst_41426__$1);

return statearr_41525;
})();
if(inst_41428){
var statearr_41526_43271 = state_41485__$1;
(statearr_41526_43271[(1)] = (5));

} else {
var statearr_41527_43272 = state_41485__$1;
(statearr_41527_43272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (15))){
var inst_41472 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
var statearr_41529_43273 = state_41485__$1;
(statearr_41529_43273[(2)] = inst_41472);

(statearr_41529_43273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (13))){
var state_41485__$1 = state_41485;
var statearr_41530_43274 = state_41485__$1;
(statearr_41530_43274[(2)] = null);

(statearr_41530_43274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (6))){
var inst_41423 = (state_41485[(8)]);
var inst_41468 = (inst_41423 > (0));
var state_41485__$1 = state_41485;
if(cljs.core.truth_(inst_41468)){
var statearr_41531_43285 = state_41485__$1;
(statearr_41531_43285[(1)] = (12));

} else {
var statearr_41532_43286 = state_41485__$1;
(statearr_41532_43286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (3))){
var inst_41480 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41485__$1,inst_41480);
} else {
if((state_val_41486 === (12))){
var inst_41422 = (state_41485[(7)]);
var inst_41470 = cljs.core.vec(inst_41422);
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41485__$1,(15),out,inst_41470);
} else {
if((state_val_41486 === (2))){
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41485__$1,(4),ch);
} else {
if((state_val_41486 === (11))){
var inst_41462 = (state_41485[(2)]);
var inst_41463 = (new Array(n));
var inst_41422 = inst_41463;
var inst_41423 = (0);
var state_41485__$1 = (function (){var statearr_41537 = state_41485;
(statearr_41537[(7)] = inst_41422);

(statearr_41537[(8)] = inst_41423);

(statearr_41537[(10)] = inst_41462);

return statearr_41537;
})();
var statearr_41542_43304 = state_41485__$1;
(statearr_41542_43304[(2)] = null);

(statearr_41542_43304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (9))){
var inst_41422 = (state_41485[(7)]);
var inst_41460 = cljs.core.vec(inst_41422);
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41485__$1,(11),out,inst_41460);
} else {
if((state_val_41486 === (5))){
var inst_41422 = (state_41485[(7)]);
var inst_41452 = (state_41485[(11)]);
var inst_41423 = (state_41485[(8)]);
var inst_41426 = (state_41485[(9)]);
var inst_41430 = (inst_41422[inst_41423] = inst_41426);
var inst_41452__$1 = (inst_41423 + (1));
var inst_41453 = (inst_41452__$1 < n);
var state_41485__$1 = (function (){var statearr_41550 = state_41485;
(statearr_41550[(11)] = inst_41452__$1);

(statearr_41550[(12)] = inst_41430);

return statearr_41550;
})();
if(cljs.core.truth_(inst_41453)){
var statearr_41551_43305 = state_41485__$1;
(statearr_41551_43305[(1)] = (8));

} else {
var statearr_41552_43306 = state_41485__$1;
(statearr_41552_43306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (14))){
var inst_41475 = (state_41485[(2)]);
var inst_41476 = cljs.core.async.close_BANG_(out);
var state_41485__$1 = (function (){var statearr_41554 = state_41485;
(statearr_41554[(13)] = inst_41475);

return statearr_41554;
})();
var statearr_41555_43307 = state_41485__$1;
(statearr_41555_43307[(2)] = inst_41476);

(statearr_41555_43307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (10))){
var inst_41466 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
var statearr_41556_43308 = state_41485__$1;
(statearr_41556_43308[(2)] = inst_41466);

(statearr_41556_43308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (8))){
var inst_41422 = (state_41485[(7)]);
var inst_41452 = (state_41485[(11)]);
var tmp41553 = inst_41422;
var inst_41422__$1 = tmp41553;
var inst_41423 = inst_41452;
var state_41485__$1 = (function (){var statearr_41557 = state_41485;
(statearr_41557[(7)] = inst_41422__$1);

(statearr_41557[(8)] = inst_41423);

return statearr_41557;
})();
var statearr_41558_43309 = state_41485__$1;
(statearr_41558_43309[(2)] = null);

(statearr_41558_43309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_41560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41560[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_41560[(1)] = (1));

return statearr_41560;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_41485){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_41485);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e41561){var ex__37660__auto__ = e41561;
var statearr_41562_43310 = state_41485;
(statearr_41562_43310[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_41485[(4)]))){
var statearr_41563_43311 = state_41485;
(statearr_41563_43311[(1)] = cljs.core.first((state_41485[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43312 = state_41485;
state_41485 = G__43312;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_41485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_41485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_41564 = f__38343__auto__();
(statearr_41564[(6)] = c__38342__auto___43258);

return statearr_41564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41571 = arguments.length;
switch (G__41571) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38342__auto___43340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_41648){
var state_val_41649 = (state_41648[(1)]);
if((state_val_41649 === (7))){
var inst_41643 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41655_43341 = state_41648__$1;
(statearr_41655_43341[(2)] = inst_41643);

(statearr_41655_43341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (1))){
var inst_41591 = [];
var inst_41592 = inst_41591;
var inst_41593 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41648__$1 = (function (){var statearr_41659 = state_41648;
(statearr_41659[(7)] = inst_41592);

(statearr_41659[(8)] = inst_41593);

return statearr_41659;
})();
var statearr_41661_43344 = state_41648__$1;
(statearr_41661_43344[(2)] = null);

(statearr_41661_43344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (4))){
var inst_41606 = (state_41648[(9)]);
var inst_41606__$1 = (state_41648[(2)]);
var inst_41607 = (inst_41606__$1 == null);
var inst_41608 = cljs.core.not(inst_41607);
var state_41648__$1 = (function (){var statearr_41665 = state_41648;
(statearr_41665[(9)] = inst_41606__$1);

return statearr_41665;
})();
if(inst_41608){
var statearr_41666_43345 = state_41648__$1;
(statearr_41666_43345[(1)] = (5));

} else {
var statearr_41667_43346 = state_41648__$1;
(statearr_41667_43346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (15))){
var inst_41592 = (state_41648[(7)]);
var inst_41635 = cljs.core.vec(inst_41592);
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41648__$1,(18),out,inst_41635);
} else {
if((state_val_41649 === (13))){
var inst_41630 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41682_43351 = state_41648__$1;
(statearr_41682_43351[(2)] = inst_41630);

(statearr_41682_43351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (6))){
var inst_41592 = (state_41648[(7)]);
var inst_41632 = inst_41592.length;
var inst_41633 = (inst_41632 > (0));
var state_41648__$1 = state_41648;
if(cljs.core.truth_(inst_41633)){
var statearr_41685_43352 = state_41648__$1;
(statearr_41685_43352[(1)] = (15));

} else {
var statearr_41686_43353 = state_41648__$1;
(statearr_41686_43353[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (17))){
var inst_41640 = (state_41648[(2)]);
var inst_41641 = cljs.core.async.close_BANG_(out);
var state_41648__$1 = (function (){var statearr_41687 = state_41648;
(statearr_41687[(10)] = inst_41640);

return statearr_41687;
})();
var statearr_41688_43354 = state_41648__$1;
(statearr_41688_43354[(2)] = inst_41641);

(statearr_41688_43354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (3))){
var inst_41645 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41648__$1,inst_41645);
} else {
if((state_val_41649 === (12))){
var inst_41592 = (state_41648[(7)]);
var inst_41623 = cljs.core.vec(inst_41592);
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41648__$1,(14),out,inst_41623);
} else {
if((state_val_41649 === (2))){
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41648__$1,(4),ch);
} else {
if((state_val_41649 === (11))){
var inst_41592 = (state_41648[(7)]);
var inst_41606 = (state_41648[(9)]);
var inst_41611 = (state_41648[(11)]);
var inst_41620 = inst_41592.push(inst_41606);
var tmp41689 = inst_41592;
var inst_41592__$1 = tmp41689;
var inst_41593 = inst_41611;
var state_41648__$1 = (function (){var statearr_41692 = state_41648;
(statearr_41692[(7)] = inst_41592__$1);

(statearr_41692[(12)] = inst_41620);

(statearr_41692[(8)] = inst_41593);

return statearr_41692;
})();
var statearr_41693_43358 = state_41648__$1;
(statearr_41693_43358[(2)] = null);

(statearr_41693_43358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (9))){
var inst_41593 = (state_41648[(8)]);
var inst_41615 = cljs.core.keyword_identical_QMARK_(inst_41593,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_41648__$1 = state_41648;
var statearr_41694_43359 = state_41648__$1;
(statearr_41694_43359[(2)] = inst_41615);

(statearr_41694_43359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (5))){
var inst_41612 = (state_41648[(13)]);
var inst_41606 = (state_41648[(9)]);
var inst_41611 = (state_41648[(11)]);
var inst_41593 = (state_41648[(8)]);
var inst_41611__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41606) : f.call(null, inst_41606));
var inst_41612__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41611__$1,inst_41593);
var state_41648__$1 = (function (){var statearr_41697 = state_41648;
(statearr_41697[(13)] = inst_41612__$1);

(statearr_41697[(11)] = inst_41611__$1);

return statearr_41697;
})();
if(inst_41612__$1){
var statearr_41698_43361 = state_41648__$1;
(statearr_41698_43361[(1)] = (8));

} else {
var statearr_41700_43362 = state_41648__$1;
(statearr_41700_43362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (14))){
var inst_41606 = (state_41648[(9)]);
var inst_41611 = (state_41648[(11)]);
var inst_41625 = (state_41648[(2)]);
var inst_41626 = [];
var inst_41627 = inst_41626.push(inst_41606);
var inst_41592 = inst_41626;
var inst_41593 = inst_41611;
var state_41648__$1 = (function (){var statearr_41703 = state_41648;
(statearr_41703[(14)] = inst_41627);

(statearr_41703[(7)] = inst_41592);

(statearr_41703[(15)] = inst_41625);

(statearr_41703[(8)] = inst_41593);

return statearr_41703;
})();
var statearr_41704_43363 = state_41648__$1;
(statearr_41704_43363[(2)] = null);

(statearr_41704_43363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (16))){
var state_41648__$1 = state_41648;
var statearr_41705_43366 = state_41648__$1;
(statearr_41705_43366[(2)] = null);

(statearr_41705_43366[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (10))){
var inst_41618 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
if(cljs.core.truth_(inst_41618)){
var statearr_41706_43367 = state_41648__$1;
(statearr_41706_43367[(1)] = (11));

} else {
var statearr_41707_43368 = state_41648__$1;
(statearr_41707_43368[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (18))){
var inst_41637 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41709_43369 = state_41648__$1;
(statearr_41709_43369[(2)] = inst_41637);

(statearr_41709_43369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (8))){
var inst_41612 = (state_41648[(13)]);
var state_41648__$1 = state_41648;
var statearr_41710_43370 = state_41648__$1;
(statearr_41710_43370[(2)] = inst_41612);

(statearr_41710_43370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37657__auto__ = null;
var cljs$core$async$state_machine__37657__auto____0 = (function (){
var statearr_41727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41727[(0)] = cljs$core$async$state_machine__37657__auto__);

(statearr_41727[(1)] = (1));

return statearr_41727;
});
var cljs$core$async$state_machine__37657__auto____1 = (function (state_41648){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_41648);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e41731){var ex__37660__auto__ = e41731;
var statearr_41732_43371 = state_41648;
(statearr_41732_43371[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_41648[(4)]))){
var statearr_41737_43372 = state_41648;
(statearr_41737_43372[(1)] = cljs.core.first((state_41648[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43374 = state_41648;
state_41648 = G__43374;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
cljs$core$async$state_machine__37657__auto__ = function(state_41648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37657__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37657__auto____1.call(this,state_41648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37657__auto____0;
cljs$core$async$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37657__auto____1;
return cljs$core$async$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_41741 = f__38343__auto__();
(statearr_41741[(6)] = c__38342__auto___43340);

return statearr_41741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
