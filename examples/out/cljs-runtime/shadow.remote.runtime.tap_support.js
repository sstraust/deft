goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44328,p__44329){
var map__44332 = p__44328;
var map__44332__$1 = cljs.core.__destructure_map(map__44332);
var svc = map__44332__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44332__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44332__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44332__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44334 = p__44329;
var map__44334__$1 = cljs.core.__destructure_map(map__44334);
var msg = map__44334__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44334__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44334__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44334__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44334__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44340,p__44341){
var map__44346 = p__44340;
var map__44346__$1 = cljs.core.__destructure_map(map__44346);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44346__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44347 = p__44341;
var map__44347__$1 = cljs.core.__destructure_map(map__44347);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44347__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44373,p__44374){
var map__44375 = p__44373;
var map__44375__$1 = cljs.core.__destructure_map(map__44375);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44375__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44375__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44377 = p__44374;
var map__44377__$1 = cljs.core.__destructure_map(map__44377);
var msg = map__44377__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44377__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44390,tid){
var map__44391 = p__44390;
var map__44391__$1 = cljs.core.__destructure_map(map__44391);
var svc = map__44391__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44391__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44442 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44443 = null;
var count__44444 = (0);
var i__44445 = (0);
while(true){
if((i__44445 < count__44444)){
var vec__44457 = chunk__44443.cljs$core$IIndexed$_nth$arity$2(null, i__44445);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44457,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44457,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44496 = seq__44442;
var G__44497 = chunk__44443;
var G__44498 = count__44444;
var G__44499 = (i__44445 + (1));
seq__44442 = G__44496;
chunk__44443 = G__44497;
count__44444 = G__44498;
i__44445 = G__44499;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44442);
if(temp__5823__auto__){
var seq__44442__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44442__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__44442__$1);
var G__44505 = cljs.core.chunk_rest(seq__44442__$1);
var G__44506 = c__5565__auto__;
var G__44507 = cljs.core.count(c__5565__auto__);
var G__44508 = (0);
seq__44442 = G__44505;
chunk__44443 = G__44506;
count__44444 = G__44507;
i__44445 = G__44508;
continue;
} else {
var vec__44461 = cljs.core.first(seq__44442__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44461,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44461,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44515 = cljs.core.next(seq__44442__$1);
var G__44516 = null;
var G__44517 = (0);
var G__44518 = (0);
seq__44442 = G__44515;
chunk__44443 = G__44516;
count__44444 = G__44517;
i__44445 = G__44518;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44428_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44428_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44429_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44429_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44430_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44430_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44431_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44431_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44471){
var map__44473 = p__44471;
var map__44473__$1 = cljs.core.__destructure_map(map__44473);
var svc = map__44473__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44473__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44473__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
