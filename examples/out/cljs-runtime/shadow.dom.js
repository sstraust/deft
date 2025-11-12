goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_43571 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null, this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_43571(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_43572 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null, this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_43572(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__41908 = coll;
var G__41909 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__41908,G__41909) : shadow.dom.lazy_native_coll_seq.call(null, G__41908,G__41909));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__41971 = arguments.length;
switch (G__41971) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__41982 = arguments.length;
switch (G__41982) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__42010 = arguments.length;
switch (G__42010) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__42034 = arguments.length;
switch (G__42034) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__42080 = arguments.length;
switch (G__42080) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__42118 = arguments.length;
switch (G__42118) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e42143){if((e42143 instanceof Object)){
var e = e42143;
return console.log("didnt support attachEvent",el,e);
} else {
throw e42143;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__42152 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__42153 = null;
var count__42154 = (0);
var i__42155 = (0);
while(true){
if((i__42155 < count__42154)){
var el = chunk__42153.cljs$core$IIndexed$_nth$arity$2(null, i__42155);
var handler_43595__$1 = ((function (seq__42152,chunk__42153,count__42154,i__42155,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__42152,chunk__42153,count__42154,i__42155,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43595__$1);


var G__43596 = seq__42152;
var G__43597 = chunk__42153;
var G__43598 = count__42154;
var G__43599 = (i__42155 + (1));
seq__42152 = G__43596;
chunk__42153 = G__43597;
count__42154 = G__43598;
i__42155 = G__43599;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42152);
if(temp__5823__auto__){
var seq__42152__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42152__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42152__$1);
var G__43600 = cljs.core.chunk_rest(seq__42152__$1);
var G__43601 = c__5565__auto__;
var G__43602 = cljs.core.count(c__5565__auto__);
var G__43603 = (0);
seq__42152 = G__43600;
chunk__42153 = G__43601;
count__42154 = G__43602;
i__42155 = G__43603;
continue;
} else {
var el = cljs.core.first(seq__42152__$1);
var handler_43604__$1 = ((function (seq__42152,chunk__42153,count__42154,i__42155,el,seq__42152__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__42152,chunk__42153,count__42154,i__42155,el,seq__42152__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43604__$1);


var G__43605 = cljs.core.next(seq__42152__$1);
var G__43606 = null;
var G__43607 = (0);
var G__43608 = (0);
seq__42152 = G__43605;
chunk__42153 = G__43606;
count__42154 = G__43607;
i__42155 = G__43608;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__42203 = arguments.length;
switch (G__42203) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__42221 = cljs.core.seq(events);
var chunk__42222 = null;
var count__42223 = (0);
var i__42224 = (0);
while(true){
if((i__42224 < count__42223)){
var vec__42251 = chunk__42222.cljs$core$IIndexed$_nth$arity$2(null, i__42224);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42251,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42251,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43610 = seq__42221;
var G__43611 = chunk__42222;
var G__43612 = count__42223;
var G__43613 = (i__42224 + (1));
seq__42221 = G__43610;
chunk__42222 = G__43611;
count__42223 = G__43612;
i__42224 = G__43613;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42221);
if(temp__5823__auto__){
var seq__42221__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42221__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42221__$1);
var G__43614 = cljs.core.chunk_rest(seq__42221__$1);
var G__43615 = c__5565__auto__;
var G__43616 = cljs.core.count(c__5565__auto__);
var G__43617 = (0);
seq__42221 = G__43614;
chunk__42222 = G__43615;
count__42223 = G__43616;
i__42224 = G__43617;
continue;
} else {
var vec__42254 = cljs.core.first(seq__42221__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42254,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43618 = cljs.core.next(seq__42221__$1);
var G__43619 = null;
var G__43620 = (0);
var G__43621 = (0);
seq__42221 = G__43618;
chunk__42222 = G__43619;
count__42223 = G__43620;
i__42224 = G__43621;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__42264 = cljs.core.seq(styles);
var chunk__42265 = null;
var count__42266 = (0);
var i__42267 = (0);
while(true){
if((i__42267 < count__42266)){
var vec__42283 = chunk__42265.cljs$core$IIndexed$_nth$arity$2(null, i__42267);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42283,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43622 = seq__42264;
var G__43623 = chunk__42265;
var G__43624 = count__42266;
var G__43625 = (i__42267 + (1));
seq__42264 = G__43622;
chunk__42265 = G__43623;
count__42266 = G__43624;
i__42267 = G__43625;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42264);
if(temp__5823__auto__){
var seq__42264__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42264__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42264__$1);
var G__43626 = cljs.core.chunk_rest(seq__42264__$1);
var G__43627 = c__5565__auto__;
var G__43628 = cljs.core.count(c__5565__auto__);
var G__43629 = (0);
seq__42264 = G__43626;
chunk__42265 = G__43627;
count__42266 = G__43628;
i__42267 = G__43629;
continue;
} else {
var vec__42291 = cljs.core.first(seq__42264__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42291,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42291,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43630 = cljs.core.next(seq__42264__$1);
var G__43631 = null;
var G__43632 = (0);
var G__43633 = (0);
seq__42264 = G__43630;
chunk__42265 = G__43631;
count__42266 = G__43632;
i__42267 = G__43633;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__42298_43634 = key;
var G__42298_43635__$1 = (((G__42298_43634 instanceof cljs.core.Keyword))?G__42298_43634.fqn:null);
switch (G__42298_43635__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_43637 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_43637,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_43637,"aria-");
}
})())){
el.setAttribute(ks_43637,value);
} else {
(el[ks_43637] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__42330){
var map__42331 = p__42330;
var map__42331__$1 = cljs.core.__destructure_map(map__42331);
var props = map__42331__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42331__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__42332 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42332,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42332,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42332,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__42341 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__42341,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__42341;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__42345 = arguments.length;
switch (G__42345) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__42355){
var vec__42357 = p__42355;
var seq__42358 = cljs.core.seq(vec__42357);
var first__42359 = cljs.core.first(seq__42358);
var seq__42358__$1 = cljs.core.next(seq__42358);
var nn = first__42359;
var first__42359__$1 = cljs.core.first(seq__42358__$1);
var seq__42358__$2 = cljs.core.next(seq__42358__$1);
var np = first__42359__$1;
var nc = seq__42358__$2;
var node = vec__42357;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42371 = nn;
var G__42372 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42371,G__42372) : create_fn.call(null, G__42371,G__42372));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42375 = nn;
var G__42376 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42375,G__42376) : create_fn.call(null, G__42375,G__42376));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__42382 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42382,(1),null);
var seq__42388_43639 = cljs.core.seq(node_children);
var chunk__42389_43640 = null;
var count__42390_43641 = (0);
var i__42391_43642 = (0);
while(true){
if((i__42391_43642 < count__42390_43641)){
var child_struct_43643 = chunk__42389_43640.cljs$core$IIndexed$_nth$arity$2(null, i__42391_43642);
var children_43644 = shadow.dom.dom_node(child_struct_43643);
if(cljs.core.seq_QMARK_(children_43644)){
var seq__42446_43645 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43644));
var chunk__42448_43646 = null;
var count__42449_43647 = (0);
var i__42450_43648 = (0);
while(true){
if((i__42450_43648 < count__42449_43647)){
var child_43649 = chunk__42448_43646.cljs$core$IIndexed$_nth$arity$2(null, i__42450_43648);
if(cljs.core.truth_(child_43649)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43649);


var G__43650 = seq__42446_43645;
var G__43651 = chunk__42448_43646;
var G__43652 = count__42449_43647;
var G__43653 = (i__42450_43648 + (1));
seq__42446_43645 = G__43650;
chunk__42448_43646 = G__43651;
count__42449_43647 = G__43652;
i__42450_43648 = G__43653;
continue;
} else {
var G__43654 = seq__42446_43645;
var G__43655 = chunk__42448_43646;
var G__43656 = count__42449_43647;
var G__43657 = (i__42450_43648 + (1));
seq__42446_43645 = G__43654;
chunk__42448_43646 = G__43655;
count__42449_43647 = G__43656;
i__42450_43648 = G__43657;
continue;
}
} else {
var temp__5823__auto___43658 = cljs.core.seq(seq__42446_43645);
if(temp__5823__auto___43658){
var seq__42446_43659__$1 = temp__5823__auto___43658;
if(cljs.core.chunked_seq_QMARK_(seq__42446_43659__$1)){
var c__5565__auto___43660 = cljs.core.chunk_first(seq__42446_43659__$1);
var G__43661 = cljs.core.chunk_rest(seq__42446_43659__$1);
var G__43662 = c__5565__auto___43660;
var G__43663 = cljs.core.count(c__5565__auto___43660);
var G__43664 = (0);
seq__42446_43645 = G__43661;
chunk__42448_43646 = G__43662;
count__42449_43647 = G__43663;
i__42450_43648 = G__43664;
continue;
} else {
var child_43665 = cljs.core.first(seq__42446_43659__$1);
if(cljs.core.truth_(child_43665)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43665);


var G__43666 = cljs.core.next(seq__42446_43659__$1);
var G__43667 = null;
var G__43668 = (0);
var G__43669 = (0);
seq__42446_43645 = G__43666;
chunk__42448_43646 = G__43667;
count__42449_43647 = G__43668;
i__42450_43648 = G__43669;
continue;
} else {
var G__43670 = cljs.core.next(seq__42446_43659__$1);
var G__43671 = null;
var G__43672 = (0);
var G__43673 = (0);
seq__42446_43645 = G__43670;
chunk__42448_43646 = G__43671;
count__42449_43647 = G__43672;
i__42450_43648 = G__43673;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43644);
}


var G__43674 = seq__42388_43639;
var G__43675 = chunk__42389_43640;
var G__43676 = count__42390_43641;
var G__43677 = (i__42391_43642 + (1));
seq__42388_43639 = G__43674;
chunk__42389_43640 = G__43675;
count__42390_43641 = G__43676;
i__42391_43642 = G__43677;
continue;
} else {
var temp__5823__auto___43678 = cljs.core.seq(seq__42388_43639);
if(temp__5823__auto___43678){
var seq__42388_43679__$1 = temp__5823__auto___43678;
if(cljs.core.chunked_seq_QMARK_(seq__42388_43679__$1)){
var c__5565__auto___43680 = cljs.core.chunk_first(seq__42388_43679__$1);
var G__43681 = cljs.core.chunk_rest(seq__42388_43679__$1);
var G__43682 = c__5565__auto___43680;
var G__43683 = cljs.core.count(c__5565__auto___43680);
var G__43684 = (0);
seq__42388_43639 = G__43681;
chunk__42389_43640 = G__43682;
count__42390_43641 = G__43683;
i__42391_43642 = G__43684;
continue;
} else {
var child_struct_43685 = cljs.core.first(seq__42388_43679__$1);
var children_43686 = shadow.dom.dom_node(child_struct_43685);
if(cljs.core.seq_QMARK_(children_43686)){
var seq__42497_43687 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43686));
var chunk__42499_43688 = null;
var count__42500_43689 = (0);
var i__42501_43690 = (0);
while(true){
if((i__42501_43690 < count__42500_43689)){
var child_43691 = chunk__42499_43688.cljs$core$IIndexed$_nth$arity$2(null, i__42501_43690);
if(cljs.core.truth_(child_43691)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43691);


var G__43692 = seq__42497_43687;
var G__43693 = chunk__42499_43688;
var G__43694 = count__42500_43689;
var G__43695 = (i__42501_43690 + (1));
seq__42497_43687 = G__43692;
chunk__42499_43688 = G__43693;
count__42500_43689 = G__43694;
i__42501_43690 = G__43695;
continue;
} else {
var G__43696 = seq__42497_43687;
var G__43697 = chunk__42499_43688;
var G__43698 = count__42500_43689;
var G__43699 = (i__42501_43690 + (1));
seq__42497_43687 = G__43696;
chunk__42499_43688 = G__43697;
count__42500_43689 = G__43698;
i__42501_43690 = G__43699;
continue;
}
} else {
var temp__5823__auto___43700__$1 = cljs.core.seq(seq__42497_43687);
if(temp__5823__auto___43700__$1){
var seq__42497_43701__$1 = temp__5823__auto___43700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42497_43701__$1)){
var c__5565__auto___43702 = cljs.core.chunk_first(seq__42497_43701__$1);
var G__43703 = cljs.core.chunk_rest(seq__42497_43701__$1);
var G__43704 = c__5565__auto___43702;
var G__43705 = cljs.core.count(c__5565__auto___43702);
var G__43706 = (0);
seq__42497_43687 = G__43703;
chunk__42499_43688 = G__43704;
count__42500_43689 = G__43705;
i__42501_43690 = G__43706;
continue;
} else {
var child_43707 = cljs.core.first(seq__42497_43701__$1);
if(cljs.core.truth_(child_43707)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43707);


var G__43708 = cljs.core.next(seq__42497_43701__$1);
var G__43709 = null;
var G__43710 = (0);
var G__43711 = (0);
seq__42497_43687 = G__43708;
chunk__42499_43688 = G__43709;
count__42500_43689 = G__43710;
i__42501_43690 = G__43711;
continue;
} else {
var G__43712 = cljs.core.next(seq__42497_43701__$1);
var G__43713 = null;
var G__43714 = (0);
var G__43715 = (0);
seq__42497_43687 = G__43712;
chunk__42499_43688 = G__43713;
count__42500_43689 = G__43714;
i__42501_43690 = G__43715;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43686);
}


var G__43716 = cljs.core.next(seq__42388_43679__$1);
var G__43717 = null;
var G__43718 = (0);
var G__43719 = (0);
seq__42388_43639 = G__43716;
chunk__42389_43640 = G__43717;
count__42390_43641 = G__43718;
i__42391_43642 = G__43719;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__42537 = cljs.core.seq(node);
var chunk__42538 = null;
var count__42539 = (0);
var i__42540 = (0);
while(true){
if((i__42540 < count__42539)){
var n = chunk__42538.cljs$core$IIndexed$_nth$arity$2(null, i__42540);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__43731 = seq__42537;
var G__43732 = chunk__42538;
var G__43733 = count__42539;
var G__43734 = (i__42540 + (1));
seq__42537 = G__43731;
chunk__42538 = G__43732;
count__42539 = G__43733;
i__42540 = G__43734;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42537);
if(temp__5823__auto__){
var seq__42537__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42537__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42537__$1);
var G__43735 = cljs.core.chunk_rest(seq__42537__$1);
var G__43736 = c__5565__auto__;
var G__43737 = cljs.core.count(c__5565__auto__);
var G__43738 = (0);
seq__42537 = G__43735;
chunk__42538 = G__43736;
count__42539 = G__43737;
i__42540 = G__43738;
continue;
} else {
var n = cljs.core.first(seq__42537__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__43739 = cljs.core.next(seq__42537__$1);
var G__43740 = null;
var G__43741 = (0);
var G__43742 = (0);
seq__42537 = G__43739;
chunk__42538 = G__43740;
count__42539 = G__43741;
i__42540 = G__43742;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__42611 = arguments.length;
switch (G__42611) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__42629 = arguments.length;
switch (G__42629) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__42646 = arguments.length;
switch (G__42646) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___43758 = arguments.length;
var i__5767__auto___43759 = (0);
while(true){
if((i__5767__auto___43759 < len__5766__auto___43758)){
args__5772__auto__.push((arguments[i__5767__auto___43759]));

var G__43761 = (i__5767__auto___43759 + (1));
i__5767__auto___43759 = G__43761;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__42674_43766 = cljs.core.seq(nodes);
var chunk__42675_43767 = null;
var count__42676_43768 = (0);
var i__42677_43769 = (0);
while(true){
if((i__42677_43769 < count__42676_43768)){
var node_43770 = chunk__42675_43767.cljs$core$IIndexed$_nth$arity$2(null, i__42677_43769);
fragment.appendChild(shadow.dom._to_dom(node_43770));


var G__43771 = seq__42674_43766;
var G__43772 = chunk__42675_43767;
var G__43773 = count__42676_43768;
var G__43774 = (i__42677_43769 + (1));
seq__42674_43766 = G__43771;
chunk__42675_43767 = G__43772;
count__42676_43768 = G__43773;
i__42677_43769 = G__43774;
continue;
} else {
var temp__5823__auto___43775 = cljs.core.seq(seq__42674_43766);
if(temp__5823__auto___43775){
var seq__42674_43776__$1 = temp__5823__auto___43775;
if(cljs.core.chunked_seq_QMARK_(seq__42674_43776__$1)){
var c__5565__auto___43777 = cljs.core.chunk_first(seq__42674_43776__$1);
var G__43778 = cljs.core.chunk_rest(seq__42674_43776__$1);
var G__43779 = c__5565__auto___43777;
var G__43780 = cljs.core.count(c__5565__auto___43777);
var G__43781 = (0);
seq__42674_43766 = G__43778;
chunk__42675_43767 = G__43779;
count__42676_43768 = G__43780;
i__42677_43769 = G__43781;
continue;
} else {
var node_43782 = cljs.core.first(seq__42674_43776__$1);
fragment.appendChild(shadow.dom._to_dom(node_43782));


var G__43787 = cljs.core.next(seq__42674_43776__$1);
var G__43788 = null;
var G__43789 = (0);
var G__43790 = (0);
seq__42674_43766 = G__43787;
chunk__42675_43767 = G__43788;
count__42676_43768 = G__43789;
i__42677_43769 = G__43790;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42666){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42666));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42693_43791 = cljs.core.seq(scripts);
var chunk__42694_43792 = null;
var count__42695_43793 = (0);
var i__42696_43794 = (0);
while(true){
if((i__42696_43794 < count__42695_43793)){
var vec__42709_43795 = chunk__42694_43792.cljs$core$IIndexed$_nth$arity$2(null, i__42696_43794);
var script_tag_43796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42709_43795,(0),null);
var script_body_43797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42709_43795,(1),null);
eval(script_body_43797);


var G__43801 = seq__42693_43791;
var G__43802 = chunk__42694_43792;
var G__43803 = count__42695_43793;
var G__43804 = (i__42696_43794 + (1));
seq__42693_43791 = G__43801;
chunk__42694_43792 = G__43802;
count__42695_43793 = G__43803;
i__42696_43794 = G__43804;
continue;
} else {
var temp__5823__auto___43805 = cljs.core.seq(seq__42693_43791);
if(temp__5823__auto___43805){
var seq__42693_43806__$1 = temp__5823__auto___43805;
if(cljs.core.chunked_seq_QMARK_(seq__42693_43806__$1)){
var c__5565__auto___43807 = cljs.core.chunk_first(seq__42693_43806__$1);
var G__43808 = cljs.core.chunk_rest(seq__42693_43806__$1);
var G__43809 = c__5565__auto___43807;
var G__43810 = cljs.core.count(c__5565__auto___43807);
var G__43811 = (0);
seq__42693_43791 = G__43808;
chunk__42694_43792 = G__43809;
count__42695_43793 = G__43810;
i__42696_43794 = G__43811;
continue;
} else {
var vec__42720_43812 = cljs.core.first(seq__42693_43806__$1);
var script_tag_43813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42720_43812,(0),null);
var script_body_43814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42720_43812,(1),null);
eval(script_body_43814);


var G__43818 = cljs.core.next(seq__42693_43806__$1);
var G__43819 = null;
var G__43820 = (0);
var G__43821 = (0);
seq__42693_43791 = G__43818;
chunk__42694_43792 = G__43819;
count__42695_43793 = G__43820;
i__42696_43794 = G__43821;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42729){
var vec__42730 = p__42729;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42730,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42730,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__42751 = arguments.length;
switch (G__42751) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__42771 = cljs.core.seq(style_keys);
var chunk__42772 = null;
var count__42773 = (0);
var i__42774 = (0);
while(true){
if((i__42774 < count__42773)){
var it = chunk__42772.cljs$core$IIndexed$_nth$arity$2(null, i__42774);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43829 = seq__42771;
var G__43830 = chunk__42772;
var G__43831 = count__42773;
var G__43832 = (i__42774 + (1));
seq__42771 = G__43829;
chunk__42772 = G__43830;
count__42773 = G__43831;
i__42774 = G__43832;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42771);
if(temp__5823__auto__){
var seq__42771__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42771__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42771__$1);
var G__43833 = cljs.core.chunk_rest(seq__42771__$1);
var G__43834 = c__5565__auto__;
var G__43835 = cljs.core.count(c__5565__auto__);
var G__43836 = (0);
seq__42771 = G__43833;
chunk__42772 = G__43834;
count__42773 = G__43835;
i__42774 = G__43836;
continue;
} else {
var it = cljs.core.first(seq__42771__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43837 = cljs.core.next(seq__42771__$1);
var G__43838 = null;
var G__43839 = (0);
var G__43840 = (0);
seq__42771 = G__43837;
chunk__42772 = G__43838;
count__42773 = G__43839;
i__42774 = G__43840;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k42795,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__42813 = k42795;
var G__42813__$1 = (((G__42813 instanceof cljs.core.Keyword))?G__42813.fqn:null);
switch (G__42813__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42795,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__42815){
var vec__42816 = p__42815;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42816,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42816,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null, ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42794){
var self__ = this;
var G__42794__$1 = this;
return (new cljs.core.RecordIter((0),G__42794__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42796,other42797){
var self__ = this;
var this42796__$1 = this;
return (((!((other42797 == null)))) && ((((this42796__$1.constructor === other42797.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42796__$1.x,other42797.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42796__$1.y,other42797.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42796__$1.__extmap,other42797.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k42795){
var self__ = this;
var this__5347__auto____$1 = this;
var G__42874 = k42795;
var G__42874__$1 = (((G__42874 instanceof cljs.core.Keyword))?G__42874.fqn:null);
switch (G__42874__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42795);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__42794){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__42877 = cljs.core.keyword_identical_QMARK_;
var expr__42878 = k__5349__auto__;
if(cljs.core.truth_((pred__42877.cljs$core$IFn$_invoke$arity$2 ? pred__42877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42878) : pred__42877.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__42878)))){
return (new shadow.dom.Coordinate(G__42794,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42877.cljs$core$IFn$_invoke$arity$2 ? pred__42877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42878) : pred__42877.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__42878)))){
return (new shadow.dom.Coordinate(self__.x,G__42794,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__42794),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__42794){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42794,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42803){
var extmap__5382__auto__ = (function (){var G__42904 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42803,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42803)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42904);
} else {
return G__42904;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42803),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42803),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k42925,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__42935 = k42925;
var G__42935__$1 = (((G__42935 instanceof cljs.core.Keyword))?G__42935.fqn:null);
switch (G__42935__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42925,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__42936){
var vec__42937 = p__42936;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42937,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42937,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null, ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42924){
var self__ = this;
var G__42924__$1 = this;
return (new cljs.core.RecordIter((0),G__42924__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42932,other42933){
var self__ = this;
var this42932__$1 = this;
return (((!((other42933 == null)))) && ((((this42932__$1.constructor === other42933.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42932__$1.w,other42933.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42932__$1.h,other42933.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42932__$1.__extmap,other42933.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k42925){
var self__ = this;
var this__5347__auto____$1 = this;
var G__42982 = k42925;
var G__42982__$1 = (((G__42982 instanceof cljs.core.Keyword))?G__42982.fqn:null);
switch (G__42982__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k42925);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__42924){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__42987 = cljs.core.keyword_identical_QMARK_;
var expr__42988 = k__5349__auto__;
if(cljs.core.truth_((pred__42987.cljs$core$IFn$_invoke$arity$2 ? pred__42987.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__42988) : pred__42987.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__42988)))){
return (new shadow.dom.Size(G__42924,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42987.cljs$core$IFn$_invoke$arity$2 ? pred__42987.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__42988) : pred__42987.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__42988)))){
return (new shadow.dom.Size(self__.w,G__42924,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__42924),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__42924){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42924,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42934){
var extmap__5382__auto__ = (function (){var G__43030 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42934,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43030);
} else {
return G__43030;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42934),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42934),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__43862 = (i + (1));
var G__43863 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43862;
ret = G__43863;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43194){
var vec__43195 = p__43194;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43195,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43195,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43210 = arguments.length;
switch (G__43210) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__43868 = ps;
var G__43869 = (i + (1));
el__$1 = G__43868;
i = G__43869;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__43337 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43337,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43337,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43337,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43376_43874 = cljs.core.seq(props);
var chunk__43377_43875 = null;
var count__43378_43876 = (0);
var i__43379_43877 = (0);
while(true){
if((i__43379_43877 < count__43378_43876)){
var vec__43413_43879 = chunk__43377_43875.cljs$core$IIndexed$_nth$arity$2(null, i__43379_43877);
var k_43880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43413_43879,(0),null);
var v_43881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43413_43879,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_43880);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43880),v_43881);


var G__43884 = seq__43376_43874;
var G__43885 = chunk__43377_43875;
var G__43886 = count__43378_43876;
var G__43887 = (i__43379_43877 + (1));
seq__43376_43874 = G__43884;
chunk__43377_43875 = G__43885;
count__43378_43876 = G__43886;
i__43379_43877 = G__43887;
continue;
} else {
var temp__5823__auto___43888 = cljs.core.seq(seq__43376_43874);
if(temp__5823__auto___43888){
var seq__43376_43889__$1 = temp__5823__auto___43888;
if(cljs.core.chunked_seq_QMARK_(seq__43376_43889__$1)){
var c__5565__auto___43890 = cljs.core.chunk_first(seq__43376_43889__$1);
var G__43891 = cljs.core.chunk_rest(seq__43376_43889__$1);
var G__43892 = c__5565__auto___43890;
var G__43893 = cljs.core.count(c__5565__auto___43890);
var G__43894 = (0);
seq__43376_43874 = G__43891;
chunk__43377_43875 = G__43892;
count__43378_43876 = G__43893;
i__43379_43877 = G__43894;
continue;
} else {
var vec__43416_43895 = cljs.core.first(seq__43376_43889__$1);
var k_43896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43416_43895,(0),null);
var v_43897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43416_43895,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_43896);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43896),v_43897);


var G__43901 = cljs.core.next(seq__43376_43889__$1);
var G__43902 = null;
var G__43903 = (0);
var G__43904 = (0);
seq__43376_43874 = G__43901;
chunk__43377_43875 = G__43902;
count__43378_43876 = G__43903;
i__43379_43877 = G__43904;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__43427 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43427,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43427,(1),null);
var seq__43431_43909 = cljs.core.seq(node_children);
var chunk__43433_43910 = null;
var count__43434_43911 = (0);
var i__43435_43912 = (0);
while(true){
if((i__43435_43912 < count__43434_43911)){
var child_struct_43913 = chunk__43433_43910.cljs$core$IIndexed$_nth$arity$2(null, i__43435_43912);
if((!((child_struct_43913 == null)))){
if(typeof child_struct_43913 === 'string'){
var text_43914 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43914),child_struct_43913].join(''));
} else {
var children_43915 = shadow.dom.svg_node(child_struct_43913);
if(cljs.core.seq_QMARK_(children_43915)){
var seq__43465_43916 = cljs.core.seq(children_43915);
var chunk__43467_43917 = null;
var count__43468_43918 = (0);
var i__43469_43919 = (0);
while(true){
if((i__43469_43919 < count__43468_43918)){
var child_43920 = chunk__43467_43917.cljs$core$IIndexed$_nth$arity$2(null, i__43469_43919);
if(cljs.core.truth_(child_43920)){
node.appendChild(child_43920);


var G__43921 = seq__43465_43916;
var G__43922 = chunk__43467_43917;
var G__43923 = count__43468_43918;
var G__43924 = (i__43469_43919 + (1));
seq__43465_43916 = G__43921;
chunk__43467_43917 = G__43922;
count__43468_43918 = G__43923;
i__43469_43919 = G__43924;
continue;
} else {
var G__43925 = seq__43465_43916;
var G__43926 = chunk__43467_43917;
var G__43927 = count__43468_43918;
var G__43928 = (i__43469_43919 + (1));
seq__43465_43916 = G__43925;
chunk__43467_43917 = G__43926;
count__43468_43918 = G__43927;
i__43469_43919 = G__43928;
continue;
}
} else {
var temp__5823__auto___43929 = cljs.core.seq(seq__43465_43916);
if(temp__5823__auto___43929){
var seq__43465_43930__$1 = temp__5823__auto___43929;
if(cljs.core.chunked_seq_QMARK_(seq__43465_43930__$1)){
var c__5565__auto___43933 = cljs.core.chunk_first(seq__43465_43930__$1);
var G__43934 = cljs.core.chunk_rest(seq__43465_43930__$1);
var G__43935 = c__5565__auto___43933;
var G__43936 = cljs.core.count(c__5565__auto___43933);
var G__43937 = (0);
seq__43465_43916 = G__43934;
chunk__43467_43917 = G__43935;
count__43468_43918 = G__43936;
i__43469_43919 = G__43937;
continue;
} else {
var child_43939 = cljs.core.first(seq__43465_43930__$1);
if(cljs.core.truth_(child_43939)){
node.appendChild(child_43939);


var G__43940 = cljs.core.next(seq__43465_43930__$1);
var G__43941 = null;
var G__43942 = (0);
var G__43943 = (0);
seq__43465_43916 = G__43940;
chunk__43467_43917 = G__43941;
count__43468_43918 = G__43942;
i__43469_43919 = G__43943;
continue;
} else {
var G__43944 = cljs.core.next(seq__43465_43930__$1);
var G__43945 = null;
var G__43946 = (0);
var G__43947 = (0);
seq__43465_43916 = G__43944;
chunk__43467_43917 = G__43945;
count__43468_43918 = G__43946;
i__43469_43919 = G__43947;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43915);
}
}


var G__43948 = seq__43431_43909;
var G__43949 = chunk__43433_43910;
var G__43950 = count__43434_43911;
var G__43951 = (i__43435_43912 + (1));
seq__43431_43909 = G__43948;
chunk__43433_43910 = G__43949;
count__43434_43911 = G__43950;
i__43435_43912 = G__43951;
continue;
} else {
var G__43952 = seq__43431_43909;
var G__43953 = chunk__43433_43910;
var G__43954 = count__43434_43911;
var G__43955 = (i__43435_43912 + (1));
seq__43431_43909 = G__43952;
chunk__43433_43910 = G__43953;
count__43434_43911 = G__43954;
i__43435_43912 = G__43955;
continue;
}
} else {
var temp__5823__auto___43956 = cljs.core.seq(seq__43431_43909);
if(temp__5823__auto___43956){
var seq__43431_43959__$1 = temp__5823__auto___43956;
if(cljs.core.chunked_seq_QMARK_(seq__43431_43959__$1)){
var c__5565__auto___43960 = cljs.core.chunk_first(seq__43431_43959__$1);
var G__43962 = cljs.core.chunk_rest(seq__43431_43959__$1);
var G__43963 = c__5565__auto___43960;
var G__43964 = cljs.core.count(c__5565__auto___43960);
var G__43965 = (0);
seq__43431_43909 = G__43962;
chunk__43433_43910 = G__43963;
count__43434_43911 = G__43964;
i__43435_43912 = G__43965;
continue;
} else {
var child_struct_43966 = cljs.core.first(seq__43431_43959__$1);
if((!((child_struct_43966 == null)))){
if(typeof child_struct_43966 === 'string'){
var text_43967 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43967),child_struct_43966].join(''));
} else {
var children_43968 = shadow.dom.svg_node(child_struct_43966);
if(cljs.core.seq_QMARK_(children_43968)){
var seq__43476_43969 = cljs.core.seq(children_43968);
var chunk__43478_43970 = null;
var count__43479_43971 = (0);
var i__43480_43972 = (0);
while(true){
if((i__43480_43972 < count__43479_43971)){
var child_43973 = chunk__43478_43970.cljs$core$IIndexed$_nth$arity$2(null, i__43480_43972);
if(cljs.core.truth_(child_43973)){
node.appendChild(child_43973);


var G__43974 = seq__43476_43969;
var G__43975 = chunk__43478_43970;
var G__43976 = count__43479_43971;
var G__43977 = (i__43480_43972 + (1));
seq__43476_43969 = G__43974;
chunk__43478_43970 = G__43975;
count__43479_43971 = G__43976;
i__43480_43972 = G__43977;
continue;
} else {
var G__43978 = seq__43476_43969;
var G__43979 = chunk__43478_43970;
var G__43980 = count__43479_43971;
var G__43981 = (i__43480_43972 + (1));
seq__43476_43969 = G__43978;
chunk__43478_43970 = G__43979;
count__43479_43971 = G__43980;
i__43480_43972 = G__43981;
continue;
}
} else {
var temp__5823__auto___43982__$1 = cljs.core.seq(seq__43476_43969);
if(temp__5823__auto___43982__$1){
var seq__43476_43983__$1 = temp__5823__auto___43982__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43476_43983__$1)){
var c__5565__auto___43984 = cljs.core.chunk_first(seq__43476_43983__$1);
var G__43985 = cljs.core.chunk_rest(seq__43476_43983__$1);
var G__43986 = c__5565__auto___43984;
var G__43987 = cljs.core.count(c__5565__auto___43984);
var G__43988 = (0);
seq__43476_43969 = G__43985;
chunk__43478_43970 = G__43986;
count__43479_43971 = G__43987;
i__43480_43972 = G__43988;
continue;
} else {
var child_43989 = cljs.core.first(seq__43476_43983__$1);
if(cljs.core.truth_(child_43989)){
node.appendChild(child_43989);


var G__43990 = cljs.core.next(seq__43476_43983__$1);
var G__43991 = null;
var G__43992 = (0);
var G__43993 = (0);
seq__43476_43969 = G__43990;
chunk__43478_43970 = G__43991;
count__43479_43971 = G__43992;
i__43480_43972 = G__43993;
continue;
} else {
var G__43994 = cljs.core.next(seq__43476_43983__$1);
var G__43995 = null;
var G__43996 = (0);
var G__43997 = (0);
seq__43476_43969 = G__43994;
chunk__43478_43970 = G__43995;
count__43479_43971 = G__43996;
i__43480_43972 = G__43997;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43968);
}
}


var G__44001 = cljs.core.next(seq__43431_43959__$1);
var G__44002 = null;
var G__44003 = (0);
var G__44004 = (0);
seq__43431_43909 = G__44001;
chunk__43433_43910 = G__44002;
count__43434_43911 = G__44003;
i__43435_43912 = G__44004;
continue;
} else {
var G__44005 = cljs.core.next(seq__43431_43959__$1);
var G__44006 = null;
var G__44007 = (0);
var G__44008 = (0);
seq__43431_43909 = G__44005;
chunk__43433_43910 = G__44006;
count__43434_43911 = G__44007;
i__43435_43912 = G__44008;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44013 = arguments.length;
var i__5767__auto___44014 = (0);
while(true){
if((i__5767__auto___44014 < len__5766__auto___44013)){
args__5772__auto__.push((arguments[i__5767__auto___44014]));

var G__44015 = (i__5767__auto___44014 + (1));
i__5767__auto___44014 = G__44015;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq43517){
var G__43518 = cljs.core.first(seq43517);
var seq43517__$1 = cljs.core.next(seq43517);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43518,seq43517__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__43523 = arguments.length;
switch (G__43523) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__38342__auto___44019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38343__auto__ = (function (){var switch__37656__auto__ = (function (state_43537){
var state_val_43538 = (state_43537[(1)]);
if((state_val_43538 === (1))){
var state_43537__$1 = state_43537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43537__$1,(2),once_or_cleanup);
} else {
if((state_val_43538 === (2))){
var inst_43531 = (state_43537[(2)]);
var inst_43532 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43537__$1 = (function (){var statearr_43549 = state_43537;
(statearr_43549[(7)] = inst_43531);

return statearr_43549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43537__$1,inst_43532);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37657__auto__ = null;
var shadow$dom$state_machine__37657__auto____0 = (function (){
var statearr_43550 = [null,null,null,null,null,null,null,null];
(statearr_43550[(0)] = shadow$dom$state_machine__37657__auto__);

(statearr_43550[(1)] = (1));

return statearr_43550;
});
var shadow$dom$state_machine__37657__auto____1 = (function (state_43537){
while(true){
var ret_value__37658__auto__ = (function (){try{while(true){
var result__37659__auto__ = switch__37656__auto__(state_43537);
if(cljs.core.keyword_identical_QMARK_(result__37659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37659__auto__;
}
break;
}
}catch (e43551){var ex__37660__auto__ = e43551;
var statearr_43552_44024 = state_43537;
(statearr_43552_44024[(2)] = ex__37660__auto__);


if(cljs.core.seq((state_43537[(4)]))){
var statearr_43553_44025 = state_43537;
(statearr_43553_44025[(1)] = cljs.core.first((state_43537[(4)])));

} else {
throw ex__37660__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44027 = state_43537;
state_43537 = G__44027;
continue;
} else {
return ret_value__37658__auto__;
}
break;
}
});
shadow$dom$state_machine__37657__auto__ = function(state_43537){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37657__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37657__auto____1.call(this,state_43537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37657__auto____0;
shadow$dom$state_machine__37657__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37657__auto____1;
return shadow$dom$state_machine__37657__auto__;
})()
})();
var state__38344__auto__ = (function (){var statearr_43554 = f__38343__auto__();
(statearr_43554[(6)] = c__38342__auto___44019);

return statearr_43554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38344__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
