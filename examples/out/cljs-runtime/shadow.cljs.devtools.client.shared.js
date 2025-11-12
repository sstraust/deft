goog.provide('shadow.cljs.devtools.client.shared');
goog.scope(function(){
  shadow.cljs.devtools.client.shared.goog$module$goog$object = goog.module.get('goog.object');
});

/**
 * @interface
 */
shadow.cljs.devtools.client.shared.IRemote = function(){};

var shadow$cljs$devtools$client$shared$IRemote$remote_open$dyn_45089 = (function (this$,e){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.cljs.devtools.client.shared.remote_open[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,e) : m__5391__auto__.call(null, this$,e));
} else {
var m__5389__auto__ = (shadow.cljs.devtools.client.shared.remote_open["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,e) : m__5389__auto__.call(null, this$,e));
} else {
throw cljs.core.missing_protocol("IRemote.remote-open",this$);
}
}
});
shadow.cljs.devtools.client.shared.remote_open = (function shadow$cljs$devtools$client$shared$remote_open(this$,e){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IRemote$remote_open$arity$2 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IRemote$remote_open$arity$2(this$,e);
} else {
return shadow$cljs$devtools$client$shared$IRemote$remote_open$dyn_45089(this$,e);
}
});

var shadow$cljs$devtools$client$shared$IRemote$remote_msg$dyn_45092 = (function (this$,msg){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.cljs.devtools.client.shared.remote_msg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,msg) : m__5391__auto__.call(null, this$,msg));
} else {
var m__5389__auto__ = (shadow.cljs.devtools.client.shared.remote_msg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,msg) : m__5389__auto__.call(null, this$,msg));
} else {
throw cljs.core.missing_protocol("IRemote.remote-msg",this$);
}
}
});
shadow.cljs.devtools.client.shared.remote_msg = (function shadow$cljs$devtools$client$shared$remote_msg(this$,msg){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IRemote$remote_msg$arity$2 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IRemote$remote_msg$arity$2(this$,msg);
} else {
return shadow$cljs$devtools$client$shared$IRemote$remote_msg$dyn_45092(this$,msg);
}
});

var shadow$cljs$devtools$client$shared$IRemote$remote_close$dyn_45093 = (function (this$,e,info){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.cljs.devtools.client.shared.remote_close[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,e,info) : m__5391__auto__.call(null, this$,e,info));
} else {
var m__5389__auto__ = (shadow.cljs.devtools.client.shared.remote_close["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,e,info) : m__5389__auto__.call(null, this$,e,info));
} else {
throw cljs.core.missing_protocol("IRemote.remote-close",this$);
}
}
});
shadow.cljs.devtools.client.shared.remote_close = (function shadow$cljs$devtools$client$shared$remote_close(this$,e,info){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IRemote$remote_close$arity$3 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IRemote$remote_close$arity$3(this$,e,info);
} else {
return shadow$cljs$devtools$client$shared$IRemote$remote_close$dyn_45093(this$,e,info);
}
});

var shadow$cljs$devtools$client$shared$IRemote$remote_error$dyn_45095 = (function (this$,e){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.cljs.devtools.client.shared.remote_error[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,e) : m__5391__auto__.call(null, this$,e));
} else {
var m__5389__auto__ = (shadow.cljs.devtools.client.shared.remote_error["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,e) : m__5389__auto__.call(null, this$,e));
} else {
throw cljs.core.missing_protocol("IRemote.remote-error",this$);
}
}
});
shadow.cljs.devtools.client.shared.remote_error = (function shadow$cljs$devtools$client$shared$remote_error(this$,e){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IRemote$remote_error$arity$2 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IRemote$remote_error$arity$2(this$,e);
} else {
return shadow$cljs$devtools$client$shared$IRemote$remote_error$dyn_45095(this$,e);
}
});


/**
 * @interface
 */
shadow.cljs.devtools.client.shared.IHostSpecific = function(){};

var shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$dyn_45096 = (function (this$,action,done,error){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.cljs.devtools.client.shared.do_repl_init[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,action,done,error) : m__5391__auto__.call(null, this$,action,done,error));
} else {
var m__5389__auto__ = (shadow.cljs.devtools.client.shared.do_repl_init["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,action,done,error) : m__5389__auto__.call(null, this$,action,done,error));
} else {
throw cljs.core.missing_protocol("IHostSpecific.do-repl-init",this$);
}
}
});
shadow.cljs.devtools.client.shared.do_repl_init = (function shadow$cljs$devtools$client$shared$do_repl_init(this$,action,done,error){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4(this$,action,done,error);
} else {
return shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$dyn_45096(this$,action,done,error);
}
});

var shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$dyn_45097 = (function (this$,require_msg,done,error){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.cljs.devtools.client.shared.do_repl_require[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,require_msg,done,error) : m__5391__auto__.call(null, this$,require_msg,done,error));
} else {
var m__5389__auto__ = (shadow.cljs.devtools.client.shared.do_repl_require["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,require_msg,done,error) : m__5389__auto__.call(null, this$,require_msg,done,error));
} else {
throw cljs.core.missing_protocol("IHostSpecific.do-repl-require",this$);
}
}
});
shadow.cljs.devtools.client.shared.do_repl_require = (function shadow$cljs$devtools$client$shared$do_repl_require(this$,require_msg,done,error){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4(this$,require_msg,done,error);
} else {
return shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$dyn_45097(this$,require_msg,done,error);
}
});

var shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$dyn_45099 = (function (this$,ns,invoke_msg){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.cljs.devtools.client.shared.do_invoke[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,ns,invoke_msg) : m__5391__auto__.call(null, this$,ns,invoke_msg));
} else {
var m__5389__auto__ = (shadow.cljs.devtools.client.shared.do_invoke["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,ns,invoke_msg) : m__5389__auto__.call(null, this$,ns,invoke_msg));
} else {
throw cljs.core.missing_protocol("IHostSpecific.do-invoke",this$);
}
}
});
shadow.cljs.devtools.client.shared.do_invoke = (function shadow$cljs$devtools$client$shared$do_invoke(this$,ns,invoke_msg){
if((((!((this$ == null)))) && ((!((this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 == null)))))){
return this$.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3(this$,ns,invoke_msg);
} else {
return shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$dyn_45099(this$,ns,invoke_msg);
}
});

shadow.cljs.devtools.client.shared.load_sources = (function shadow$cljs$devtools$client$shared$load_sources(runtime,sources,callback){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44688){
var map__44689 = p__44688;
var map__44689__$1 = cljs.core.__destructure_map(map__44689);
var msg = map__44689__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44689__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(sources__$1) : callback.call(null, sources__$1));
})], null));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.shared !== 'undefined') && (typeof shadow.cljs.devtools.client.shared.runtime_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.shared.runtime_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.shared !== 'undefined') && (typeof shadow.cljs.devtools.client.shared.plugins_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.shared.plugins_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.cljs.devtools.client.shared.start_all_plugins_BANG_ = (function shadow$cljs$devtools$client$shared$start_all_plugins_BANG_(p__44691){
var map__44692 = p__44691;
var map__44692__$1 = cljs.core.__destructure_map(map__44692);
var runtime = map__44692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var started_set = cljs.core.set(cljs.core.keys(new cljs.core.Keyword("shadow.cljs.devtools.client.shared","plugins","shadow.cljs.devtools.client.shared/plugins",1565262855).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var plugins = cljs.core.deref(shadow.cljs.devtools.client.shared.plugins_ref);
var plugins_set = cljs.core.set(cljs.core.keys(plugins));
var pending_set = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(plugins_set,started_set);
var pending_set__$1 = pending_set;
while(true){
if(cljs.core.empty_QMARK_(pending_set__$1)){
return new cljs.core.Keyword("shadow.cljs.devtools.client.shared","done!","shadow.cljs.devtools.client.shared/done!",-748632664);
} else {
var G__45109 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pending_set__$1,started_set,plugins,plugins_set,pending_set,map__44692,map__44692__$1,runtime,state_ref){
return (function (pending_set__$2,plugin_id){
var map__44695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugins,plugin_id);
var map__44695__$1 = cljs.core.__destructure_map(map__44695);
var plugin = map__44695__$1;
var depends_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44695__$1,new cljs.core.Keyword(null,"depends-on","depends-on",-1448442022));
var init_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44695__$1,new cljs.core.Keyword(null,"init-fn","init-fn",777257971));
if(cljs.core.truth_(cljs.core.some(pending_set__$2,depends_on))){
return pending_set__$2;
} else {
var start_arg = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(new cljs.core.Keyword("shadow.cljs.devtools.client.shared","plugins","shadow.cljs.devtools.client.shared/plugins",1565262855).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)),depends_on),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime);
var started = (init_fn.cljs$core$IFn$_invoke$arity$1 ? init_fn.cljs$core$IFn$_invoke$arity$1(start_arg) : init_fn.call(null, start_arg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.cljs.devtools.client.shared","plugins","shadow.cljs.devtools.client.shared/plugins",1565262855),plugin_id], null),started);

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pending_set__$2,plugin_id);
}
});})(pending_set__$1,started_set,plugins,plugins_set,pending_set,map__44692,map__44692__$1,runtime,state_ref))
,pending_set__$1,pending_set__$1);
pending_set__$1 = G__45109;
continue;

}
break;
}
});
shadow.cljs.devtools.client.shared.add_plugin_BANG_ = (function shadow$cljs$devtools$client$shared$add_plugin_BANG_(plugin_id,depends_on,init_fn,stop_fn){
if((plugin_id instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? plugin-id)"));
}

if(cljs.core.set_QMARK_(depends_on)){
} else {
throw (new Error("Assert failed: (set? depends-on)"));
}

if(cljs.core.fn_QMARK_(init_fn)){
} else {
throw (new Error("Assert failed: (fn? init-fn)"));
}

if(cljs.core.fn_QMARK_(stop_fn)){
} else {
throw (new Error("Assert failed: (fn? stop-fn)"));
}

var temp__5827__auto___45112 = cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref);
if((temp__5827__auto___45112 == null)){
} else {
var runtime_45113 = temp__5827__auto___45112;
var temp__5827__auto___45114__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(runtime_45113,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.cljs.devtools.client.shared","plugins","shadow.cljs.devtools.client.shared/plugins",1565262855),plugin_id], null));
if((temp__5827__auto___45114__$1 == null)){
} else {
var started_45115 = temp__5827__auto___45114__$1;
var map__44705_45116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.shared.plugins_ref),plugin_id);
var map__44705_45117__$1 = cljs.core.__destructure_map(map__44705_45116);
var old_45118 = map__44705_45117__$1;
var stop_fn_45119__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44705_45117__$1,new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246));
(stop_fn_45119__$1.cljs$core$IFn$_invoke$arity$1 ? stop_fn_45119__$1.cljs$core$IFn$_invoke$arity$1(started_45115) : stop_fn_45119__$1.call(null, started_45115));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.shared.runtime_ref,cljs.core.update,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","plugins","shadow.cljs.devtools.client.shared/plugins",1565262855),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plugin_id], 0));
}
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.shared.plugins_ref,cljs.core.assoc,plugin_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ext-id","ext-id",-653860474),plugin_id,new cljs.core.Keyword(null,"depends-on","depends-on",-1448442022),depends_on,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),init_fn,new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246),stop_fn], null));

var temp__5827__auto__ = cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref);
if((temp__5827__auto__ == null)){
return null;
} else {
var runtime = temp__5827__auto__;
return shadow.cljs.devtools.client.shared.start_all_plugins_BANG_(runtime);
}
});
shadow.cljs.devtools.client.shared.transit_read = (function shadow$cljs$devtools$client$shared$transit_read(p__44711,data){
var map__44712 = p__44711;
var map__44712__$1 = cljs.core.__destructure_map(map__44712);
var state = map__44712__$1;
var transit_readers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44712__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","transit-readers","shadow.cljs.devtools.client.shared/transit-readers",-1866893537));
var t = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),transit_readers], null));
return cognitect.transit.read(t,data);
});
shadow.cljs.devtools.client.shared.transit_str = (function shadow$cljs$devtools$client$shared$transit_str(p__44714,obj){
var map__44715 = p__44714;
var map__44715__$1 = cljs.core.__destructure_map(map__44715);
var state = map__44715__$1;
var transit_writers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44715__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","transit-writers","shadow.cljs.devtools.client.shared/transit-writers",-776127897));
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),transit_writers], null));
return cognitect.transit.write(w,obj);
});
shadow.cljs.devtools.client.shared.add_transit_writers_BANG_ = (function shadow$cljs$devtools$client$shared$add_transit_writers_BANG_(p__44716,writers){
var map__44717 = p__44716;
var map__44717__$1 = cljs.core.__destructure_map(map__44717);
var runtime = map__44717__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44717__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","transit-writers","shadow.cljs.devtools.client.shared/transit-writers",-776127897),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([writers], 0));

return runtime;
});
shadow.cljs.devtools.client.shared.continue_BANG_ = (function shadow$cljs$devtools$client$shared$continue_BANG_(state){
return (shadow.cljs.devtools.client.shared.interpret_actions.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.shared.interpret_actions.cljs$core$IFn$_invoke$arity$1(state) : shadow.cljs.devtools.client.shared.interpret_actions.call(null, state));
});
shadow.cljs.devtools.client.shared.abort_BANG_ = (function shadow$cljs$devtools$client$shared$abort_BANG_(p__44718,action,ex){
var map__44719 = p__44718;
var map__44719__$1 = cljs.core.__destructure_map(map__44719);
var state = map__44719__$1;
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44719__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__44720 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"runtime-error","runtime-error",-2116843646),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ex","ex",-1413771341),ex,new cljs.core.Keyword(null,"ex-action","ex-action",672251553),action], 0)),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228)], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__44720) : callback.call(null, G__44720));
});
shadow.cljs.devtools.client.shared.handle_invoke = (function shadow$cljs$devtools$client$shared$handle_invoke(state,runtime,action){
var res = shadow.cljs.devtools.client.shared.do_invoke(runtime,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(state),action);
if(cljs.core.truth_(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(action))){
return state;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj,res);
}
});
shadow.cljs.devtools.client.shared.handle_repl_invoke = (function shadow$cljs$devtools$client$shared$handle_repl_invoke(state,runtime,action){
var ret = shadow.cljs.devtools.client.shared.do_invoke(runtime,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(state),action);
(cljs.core._STAR_3 = cljs.core._STAR_2);

(cljs.core._STAR_2 = cljs.core._STAR_1);

(cljs.core._STAR_1 = ret);

if(cljs.core.truth_(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(action))){
return state;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj,ret);
}
});
shadow.cljs.devtools.client.shared.interpret_action = (function shadow$cljs$devtools$client$shared$interpret_action(p__44728,p__44729){
var map__44734 = p__44728;
var map__44734__$1 = cljs.core.__destructure_map(map__44734);
var state = map__44734__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44734__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44735 = p__44729;
var map__44735__$1 = cljs.core.__destructure_map(map__44735);
var action = map__44735__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44735__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__44736 = type;
var G__44736__$1 = (((G__44736 instanceof cljs.core.Keyword))?G__44736.fqn:null);
switch (G__44736__$1) {
case "repl/init":
return shadow.cljs.devtools.client.shared.do_repl_init(runtime,action,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime),cljs.core.assoc,new cljs.core.Keyword(null,"init-complete","init-complete",-157163484),true);

return shadow.cljs.devtools.client.shared.continue_BANG_(state);
}),(function (ex){
return shadow.cljs.devtools.client.shared.abort_BANG_(state,action,ex);
}));

break;
case "repl/set-ns":
var map__44752 = action;
var map__44752__$1 = cljs.core.__destructure_map(map__44752);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44752__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var internal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44752__$1,new cljs.core.Keyword(null,"internal","internal",-854870097));
return shadow.cljs.devtools.client.shared.continue_BANG_((function (){var G__44763 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"ns","ns",441598760),ns);
if(cljs.core.not(internal)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__44763,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj,null);
} else {
return G__44763;
}
})());

break;
case "repl/require":
var map__44765 = action;
var map__44765__$1 = cljs.core.__destructure_map(map__44765);
var internal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44765__$1,new cljs.core.Keyword(null,"internal","internal",-854870097));
return shadow.cljs.devtools.client.shared.do_repl_require(runtime,action,(function (sources){
return shadow.cljs.devtools.client.shared.continue_BANG_((function (){var G__44766 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"loaded-sources","loaded-sources",-300252436),cljs.core.into,sources);
if(cljs.core.not(internal)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__44766,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj,null);
} else {
return G__44766;
}
})());
}),(function (ex){
return shadow.cljs.devtools.client.shared.abort_BANG_(state,action,ex);
}));

break;
case "repl/invoke":
var repl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"repl","repl",-35398667)], null));
try{var invoke_fn = (cljs.core.truth_((function (){var and__5041__auto__ = repl;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__5041__auto__;
}
})())?shadow.cljs.devtools.client.shared.handle_repl_invoke:shadow.cljs.devtools.client.shared.handle_invoke);
return shadow.cljs.devtools.client.shared.continue_BANG_((invoke_fn.cljs$core$IFn$_invoke$arity$3 ? invoke_fn.cljs$core$IFn$_invoke$arity$3(state,runtime,action) : invoke_fn.call(null, state,runtime,action)));
}catch (e44767){var ex = e44767;
if(cljs.core.truth_(repl)){
(cljs.core._STAR_e = ex);
} else {
}

console.error("REPL Invoke Exception",ex,action);

return shadow.cljs.devtools.client.shared.abort_BANG_(state,action,ex);
}
break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unhandled repl action",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"action","action",-811238024),action], null));

}
});
shadow.cljs.devtools.client.shared.interpret_actions = (function shadow$cljs$devtools$client$shared$interpret_actions(p__44803){
var map__44804 = p__44803;
var map__44804__$1 = cljs.core.__destructure_map(map__44804);
var state = map__44804__$1;
var queue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44804__$1,new cljs.core.Keyword(null,"queue","queue",1455835879));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44804__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.empty_QMARK_(queue)){
var map__44809 = state;
var map__44809__$1 = cljs.core.__destructure_map(map__44809);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44809__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__44811 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"runtime","runtime",-1331573996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"queue","queue",1455835879)], 0)),new cljs.core.Keyword(null,"time-finish","time-finish",-1456032653),Date.now());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__44811) : callback.call(null, G__44811));
} else {
if(((cljs.core.seq(warnings)) && (shadow.cljs.devtools.client.env.ignore_warnings === false))){
var map__44812 = state;
var map__44812__$1 = cljs.core.__destructure_map(map__44812);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44812__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__44813 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"runtime","runtime",-1331573996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"queue","queue",1455835879)], 0)),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"warnings","warnings",-735437651),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings,new cljs.core.Keyword(null,"time-finish","time-finish",-1456032653),Date.now()], 0));
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__44813) : callback.call(null, G__44813));
} else {
var action = cljs.core.first(queue);
var state__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.rest);
return shadow.cljs.devtools.client.shared.interpret_action(state__$1,action);

}
}
});
shadow.cljs.devtools.client.shared.setup_actions = (function shadow$cljs$devtools$client$shared$setup_actions(runtime,input,p__44825,callback){
var map__44832 = p__44825;
var map__44832__$1 = cljs.core.__destructure_map(map__44832);
var msg = map__44832__$1;
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44832__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.Keyword(null,"loaded-sources","loaded-sources",-300252436),new cljs.core.Keyword(null,"warnings","warnings",-735437651),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"time-start","time-start",-590811745),new cljs.core.Keyword(null,"results","results",-1134170113)],[actions,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(input),msg,cljs.core.PersistentVector.EMPTY,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warnings","warnings",-735437651),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actions], 0))),new cljs.core.Keyword(null,"ok","ok",967785236),runtime,input,callback,Date.now(),cljs.core.PersistentVector.EMPTY]);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {shadow.cljs.devtools.client.shared.IRemote}
 * @implements {shadow.remote.runtime.api.IRuntime}
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
 * @implements {shadow.remote.runtime.api.IEvalCLJS}
*/
shadow.cljs.devtools.client.shared.Runtime = (function (state_ref,__meta,__extmap,__hash){
this.state_ref = state_ref;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.cljs.devtools.client.shared.Runtime.prototype.attempt_connect_BANG_ = (function (){
var self__ = this;
var this$ = this;
var map__44884 = cljs.core.deref(self__.state_ref);
var map__44884__$1 = cljs.core.__destructure_map(map__44884);
var state = map__44884__$1;
var ws_connecting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connecting","shadow.cljs.devtools.client.shared/ws-connecting",-847036450));
var ws_connect_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connect-timeout","shadow.cljs.devtools.client.shared/ws-connect-timeout",1477702043));
var shutdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","shutdown","shadow.cljs.devtools.client.shared/shutdown",1947481008));
var stale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","stale","shadow.cljs.devtools.client.shared/stale",-1017562082));
var ws_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-state","shadow.cljs.devtools.client.shared/ws-state",1653373656));
var ws_stop_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-stop-fn","shadow.cljs.devtools.client.shared/ws-stop-fn",88454255));
var ws_start_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-start-fn","shadow.cljs.devtools.client.shared/ws-start-fn",-49893682));
if(((cljs.core.not(shutdown)) && (((cljs.core.not(stale)) && (cljs.core.not(ws_connecting)))))){
if(cljs.core.truth_(ws_connect_timeout)){
clearTimeout(ws_connect_timeout);
} else {
}

if((!((ws_state == null)))){
(ws_stop_fn.cljs$core$IFn$_invoke$arity$1 ? ws_stop_fn.cljs$core$IFn$_invoke$arity$1(ws_state) : ws_stop_fn.call(null, ws_state));
} else {
}

var ws_state__$1 = (ws_start_fn.cljs$core$IFn$_invoke$arity$1 ? ws_start_fn.cljs$core$IFn$_invoke$arity$1(this$) : ws_start_fn.call(null, this$));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connecting","shadow.cljs.devtools.client.shared/ws-connecting",-847036450),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connected","shadow.cljs.devtools.client.shared/ws-connected",-1476385853),false,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-state","shadow.cljs.devtools.client.shared/ws-state",1653373656),ws_state__$1], 0));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.schedule_connect_BANG_ = (function (after){
var self__ = this;
var this$ = this;
var map__44909 = cljs.core.deref(self__.state_ref);
var map__44909__$1 = cljs.core.__destructure_map(map__44909);
var ws_connect_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44909__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connect-timeout","shadow.cljs.devtools.client.shared/ws-connect-timeout",1477702043));
var stale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44909__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","stale","shadow.cljs.devtools.client.shared/stale",-1017562082));
var shutdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44909__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","shutdown","shadow.cljs.devtools.client.shared/shutdown",1947481008));
if(cljs.core.truth_(ws_connect_timeout)){
clearTimeout(ws_connect_timeout);
} else {
}

if(((cljs.core.not(stale)) && (cljs.core.not(shutdown)))){
shadow.remote.runtime.shared.trigger_BANG_(this$,new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connect-timeout","shadow.cljs.devtools.client.shared/ws-connect-timeout",1477702043),setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state_ref,cljs.core.dissoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connect-timeout","shadow.cljs.devtools.client.shared/ws-connect-timeout",1477702043));

return this$.attempt_connect_BANG_();
}),after));
} else {
return null;
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5341__auto__,null);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k44841,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__44936 = k44841;
var G__44936__$1 = (((G__44936 instanceof cljs.core.Keyword))?G__44936.fqn:null);
switch (G__44936__$1) {
case "state-ref":
return self__.state_ref;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44841,else__5343__auto__);

}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__44939){
var vec__44940 = p__44939;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44940,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44940,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null, ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.cljs.devtools.client.shared.Runtime{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),self__.state_ref],null))], null),self__.__extmap));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44840){
var self__ = this;
var G__44840__$1 = this;
return (new cljs.core.RecordIter((0),G__44840__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-ref","state-ref",2127874952)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (229736719 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44842,other44843){
var self__ = this;
var this44842__$1 = this;
return (((!((other44843 == null)))) && ((((this44842__$1.constructor === other44843.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44842__$1.state_ref,other44843.state_ref)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44842__$1.__extmap,other44843.__extmap)))))));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalCLJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalCLJS$_cljs_eval$arity$3 = (function (this$,input,callback){
var self__ = this;
var this$__$1 = this;
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-compile","cljs-compile",-1735075279),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"include-init","include-init",1061115199),cljs.core.not(new cljs.core.Keyword(null,"init-complete","init-complete",-157163484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_ref)))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cljs-compile-result","cljs-compile-result",-1137644713),(function (msg){
return shadow.cljs.devtools.client.shared.interpret_actions(shadow.cljs.devtools.client.shared.setup_actions(this$__$1,input,msg,callback));
}),new cljs.core.Keyword(null,"cljs-compile-error","cljs-compile-error",-371665768),(function (p__44955){
var map__44956 = p__44955;
var map__44956__$1 = cljs.core.__destructure_map(map__44956);
var ex_oid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44956__$1,new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737));
var ex_client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44956__$1,new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984));
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44956__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var G__44957 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"compile-error","compile-error",-1313154526),new cljs.core.Keyword(null,"ex-oid","ex-oid",-650256737),ex_oid,new cljs.core.Keyword(null,"ex-client-id","ex-client-id",-446123984),ex_client_id,new cljs.core.Keyword(null,"report","report",1394055010),report], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__44957) : callback.call(null, G__44957));
}),new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),(function (msg){
var G__44958 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"worker-not-found","worker-not-found",-1848657608)], null);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__44958) : callback.call(null, G__44958));
})], null));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IRemote$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IRemote$remote_open$arity$2 = (function (this$,e){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-errors","shadow.cljs.devtools.client.shared/ws-errors",105464879),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connecting","shadow.cljs.devtools.client.shared/ws-connecting",-847036450),false,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connected","shadow.cljs.devtools.client.shared/ws-connected",-1476385853),true,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-last-msg","shadow.cljs.devtools.client.shared/ws-last-msg",-1438906782),shadow.remote.runtime.shared.now()], 0));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IRemote$remote_msg$arity$2 = (function (this$,text){
var self__ = this;
var this$__$1 = this;
var msg = shadow.cljs.devtools.client.shared.transit_read(cljs.core.deref(self__.state_ref),text);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-last-msg","shadow.cljs.devtools.client.shared/ws-last-msg",-1438906782),shadow.remote.runtime.shared.now());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(msg))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","stale","shadow.cljs.devtools.client.shared/stale",-1017562082),true);
} else {
}

return shadow.remote.runtime.shared.process(this$__$1,msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IRemote$remote_close$arity$3 = (function (this$,e,info){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state_ref,cljs.core.dissoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connected","shadow.cljs.devtools.client.shared/ws-connected",-1476385853),new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connecting","shadow.cljs.devtools.client.shared/ws-connecting",-847036450));

if(((3) >= new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-errors","shadow.cljs.devtools.client.shared/ws-errors",105464879).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_ref)))){
return this$__$1.schedule_connect_BANG_((5000));
} else {
return console.warn("shadow-cljs: giving up trying to connect to ",info);
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IRemote$remote_error$arity$2 = (function (this$,e){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state_ref,cljs.core.update,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-errors","shadow.cljs.devtools.client.shared/ws-errors",105464879),cljs.core.inc);

shadow.remote.runtime.shared.trigger_BANG_(this$__$1,new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814));

return console.error("shadow-cljs - remote-error",e);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IRuntime$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2 = (function (this$,msg){
var self__ = this;
var this$__$1 = this;
var map__44959 = cljs.core.deref(self__.state_ref);
var map__44959__$1 = cljs.core.__destructure_map(map__44959);
var state = map__44959__$1;
var ws_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44959__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-state","shadow.cljs.devtools.client.shared/ws-state",1653373656));
var ws_connected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44959__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connected","shadow.cljs.devtools.client.shared/ws-connected",-1476385853));
var ws_send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44959__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-send-fn","shadow.cljs.devtools.client.shared/ws-send-fn",-1986889866));
if(cljs.core.not(ws_connected)){
return console.warn("shadow-cljs - dropped ws message, not connected",msg,state);
} else {
var s = (function (){try{return shadow.cljs.devtools.client.shared.transit_str(state,msg);
}catch (e44960){var e = e44960;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to encode relay msg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
}})();
return (ws_send_fn.cljs$core$IFn$_invoke$arity$2 ? ws_send_fn.cljs$core$IFn$_invoke$arity$2(ws_state,s) : ws_send_fn.call(null, ws_state,s));
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IRuntime$add_extension$arity$3 = (function (runtime,key,spec){
var self__ = this;
var runtime__$1 = this;
return shadow.remote.runtime.shared.add_extension(runtime__$1,key,spec);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IRuntime$del_extension$arity$2 = (function (runtime,key){
var self__ = this;
var runtime__$1 = this;
return shadow.remote.runtime.shared.del_extension(runtime__$1,key);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k44841){
var self__ = this;
var this__5347__auto____$1 = this;
var G__44972 = k44841;
var G__44972__$1 = (((G__44972 instanceof cljs.core.Keyword))?G__44972.fqn:null);
switch (G__44972__$1) {
case "state-ref":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44841);

}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__44840){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__44977 = cljs.core.keyword_identical_QMARK_;
var expr__44978 = k__5349__auto__;
if(cljs.core.truth_((pred__44977.cljs$core$IFn$_invoke$arity$2 ? pred__44977.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),expr__44978) : pred__44977.call(null, new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),expr__44978)))){
return (new shadow.cljs.devtools.client.shared.Runtime(G__44840,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__44840),null));
}
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952),self__.state_ref,null))], null),self__.__extmap));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__44840){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.cljs.devtools.client.shared.Runtime(self__.state_ref,G__44840,self__.__extmap,self__.__hash));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.cljs.devtools.client.shared.Runtime.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-ref","state-ref",-526560817,null)], null);
}));

(shadow.cljs.devtools.client.shared.Runtime.cljs$lang$type = true);

(shadow.cljs.devtools.client.shared.Runtime.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.cljs.devtools.client.shared/Runtime",null,(1),null));
}));

(shadow.cljs.devtools.client.shared.Runtime.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.cljs.devtools.client.shared/Runtime");
}));

/**
 * Positional factory function for shadow.cljs.devtools.client.shared/Runtime.
 */
shadow.cljs.devtools.client.shared.__GT_Runtime = (function shadow$cljs$devtools$client$shared$__GT_Runtime(state_ref){
return (new shadow.cljs.devtools.client.shared.Runtime(state_ref,null,null,null));
});

/**
 * Factory function for shadow.cljs.devtools.client.shared/Runtime, taking a map of keywords to field values.
 */
shadow.cljs.devtools.client.shared.map__GT_Runtime = (function shadow$cljs$devtools$client$shared$map__GT_Runtime(G__44856){
var extmap__5382__auto__ = (function (){var G__44990 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44856,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.record_QMARK_(G__44856)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44990);
} else {
return G__44990;
}
})();
return (new shadow.cljs.devtools.client.shared.Runtime(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(G__44856),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.shared !== 'undefined') && (typeof shadow.cljs.devtools.client.shared.print_subs !== 'undefined')){
} else {
shadow.cljs.devtools.client.shared.print_subs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.devtools.client.shared.stop_runtime_BANG_ = (function shadow$cljs$devtools$client$shared$stop_runtime_BANG_(p__44992){
var map__44993 = p__44992;
var map__44993__$1 = cljs.core.__destructure_map(map__44993);
var runtime = map__44993__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44994 = cljs.core.deref(state_ref);
var map__44994__$1 = cljs.core.__destructure_map(map__44994);
var ws_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-state","shadow.cljs.devtools.client.shared/ws-state",1653373656));
var ws_stop_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-stop-fn","shadow.cljs.devtools.client.shared/ws-stop-fn",88454255));
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","interval","shadow.cljs.devtools.client.shared/interval",-2112273585));
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44994__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","plugins","shadow.cljs.devtools.client.shared/plugins",1565262855));
clearInterval(interval);

if((!((ws_state == null)))){
(ws_stop_fn.cljs$core$IFn$_invoke$arity$1 ? ws_stop_fn.cljs$core$IFn$_invoke$arity$1(ws_state) : ws_stop_fn.call(null, ws_state));
} else {
}

cljs.core.reduce_kv((function (_,plugin_id,started){
var map__45003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.shared.plugins_ref),plugin_id);
var map__45003__$1 = cljs.core.__destructure_map(map__45003);
var stop_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45003__$1,new cljs.core.Keyword(null,"stop-fn","stop-fn",-348472246));
return (stop_fn.cljs$core$IFn$_invoke$arity$1 ? stop_fn.cljs$core$IFn$_invoke$arity$1(started) : stop_fn.call(null, started));
}),null,plugins);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","shutdown","shadow.cljs.devtools.client.shared/shutdown",1947481008),true);
});
shadow.cljs.devtools.client.shared.init_runtime_BANG_ = (function shadow$cljs$devtools$client$shared$init_runtime_BANG_(client_info,ws_start_fn,ws_send_fn,ws_stop_fn){
var temp__5827__auto___45192 = cljs.core.deref(shadow.cljs.devtools.client.shared.runtime_ref);
if((temp__5827__auto___45192 == null)){
} else {
var runtime_45193 = temp__5827__auto___45192;
shadow.cljs.devtools.client.shared.stop_runtime_BANG_(runtime_45193);

cljs.core.reset_BANG_(shadow.cljs.devtools.client.shared.runtime_ref,null);
}

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),cljs.core.PersistentHashSet.EMPTY,(function (p1__45004_SHARP_){
return shadow.remote.runtime.obj_support.start(new cljs.core.Keyword(null,"runtime","runtime",-1331573996).cljs$core$IFn$_invoke$arity$1(p1__45004_SHARP_));
}),shadow.remote.runtime.obj_support.stop);

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword(null,"tap-support","tap-support",80346439),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),null], null), null),(function (p__45014){
var map__45015 = p__45014;
var map__45015__$1 = cljs.core.__destructure_map(map__45015);
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45015__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45015__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
return shadow.remote.runtime.tap_support.start(runtime,obj_support);
}),shadow.remote.runtime.tap_support.stop);

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword(null,"eval-support","eval-support",-1581799533),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),null], null), null),(function (p__45034){
var map__45036 = p__45034;
var map__45036__$1 = cljs.core.__destructure_map(map__45036);
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45036__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45036__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
return shadow.remote.runtime.eval_support.start(runtime,obj_support);
}),shadow.remote.runtime.eval_support.stop);

var state_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.remote.runtime.shared.init_state(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(client_info,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"runtime","runtime",-1331573996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"cljs","cljs",1492417629),new cljs.core.Keyword(null,"build-id","build-id",1642831089),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),new cljs.core.Keyword(null,"worker-id","worker-id",644510040),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"proc-id","proc-id",-1856109278),shadow.cljs.devtools.client.env.proc_id], 0))),new cljs.core.Keyword("shadow.cljs.devtools.client.shared","shutdown","shadow.cljs.devtools.client.shared/shutdown",1947481008),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.cljs.devtools.client.shared","stale","shadow.cljs.devtools.client.shared/stale",-1017562082),false,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","plugins","shadow.cljs.devtools.client.shared/plugins",1565262855),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-errors","shadow.cljs.devtools.client.shared/ws-errors",105464879),(0),new cljs.core.Keyword("shadow.cljs.devtools.client.shared","transit-writers","shadow.cljs.devtools.client.shared/transit-writers",-776127897),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","transit-readers","shadow.cljs.devtools.client.shared/transit-readers",-1866893537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.tagged_literal], null),new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-start-fn","shadow.cljs.devtools.client.shared/ws-start-fn",-49893682),ws_start_fn,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-send-fn","shadow.cljs.devtools.client.shared/ws-send-fn",-1986889866),ws_send_fn,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-stop-fn","shadow.cljs.devtools.client.shared/ws-stop-fn",88454255),ws_stop_fn], 0)));
var runtime = (function (){var G__45047 = shadow.cljs.devtools.client.shared.__GT_Runtime(state_ref);
shadow.remote.runtime.shared.add_defaults(G__45047);

return G__45047;
})();
var idle_fn = (function (){
var map__45058 = cljs.core.deref(state_ref);
var map__45058__$1 = cljs.core.__destructure_map(map__45058);
var state = map__45058__$1;
var shutdown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45058__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","shutdown","shadow.cljs.devtools.client.shared/shutdown",1947481008));
var ws_connected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45058__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connected","shadow.cljs.devtools.client.shared/ws-connected",-1476385853));
var ws_last_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45058__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-last-msg","shadow.cljs.devtools.client.shared/ws-last-msg",-1438906782));
var ws_connect_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45058__$1,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connect-timeout","shadow.cljs.devtools.client.shared/ws-connect-timeout",1477702043));
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not(ws_connect_timeout);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.not(shutdown);
if(and__5041__auto____$1){
var and__5041__auto____$2 = ws_connected;
if(cljs.core.truth_(and__5041__auto____$2)){
return (shadow.remote.runtime.shared.now() > (ws_last_msg + (20000)));
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,cljs.core.dissoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","ws-connected","shadow.cljs.devtools.client.shared/ws-connected",-1476385853));

runtime.schedule_connect_BANG_((2000));
} else {
}

return shadow.remote.runtime.shared.run_on_idle(state_ref);
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.cljs.devtools.client.shared","interval","shadow.cljs.devtools.client.shared/interval",-2112273585),setInterval(idle_fn,(1000)));

cljs.core.reset_BANG_(shadow.cljs.devtools.client.shared.runtime_ref,runtime);

(goog.global.cljs_eval = (function (input,opts){
var input__$1 = ((cljs.core.map_QMARK_(input))?input:((((typeof input === 'string') && (cljs.core.not(opts))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),input,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null):((((typeof input === 'string') && (cljs.core.object_QMARK_(opts))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),input,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.shared.goog$module$goog$object.get(opts,"ns"))], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid arguments, call cljs_eval(string, opts-obj) or cljs_eval(map)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"opts","opts",155075701),opts], null))})()
)));
return (new Promise((function (resolve,reject){
return shadow.remote.runtime.api.cljs_eval(runtime,input__$1,(function (p__45062){
var map__45063 = p__45062;
var map__45063__$1 = cljs.core.__destructure_map(map__45063);
var info = map__45063__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45063__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45063__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ok","ok",967785236),result)){
var G__45064 = cljs.core.last(results);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__45064) : resolve.call(null, G__45064));
} else {
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(info) : reject.call(null, info));
}
}));
})));
}));

runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3(null, new cljs.core.Keyword("shadow.cljs.devtools.client.shared","print-support","shadow.cljs.devtools.client.shared/print-support",-1090548637),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"runtime-print-sub","runtime-print-sub",1832904759),(function (p__45065){
var map__45066 = p__45065;
var map__45066__$1 = cljs.core.__destructure_map(map__45066);
var msg = map__45066__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45066__$1,new cljs.core.Keyword(null,"from","from",1815293044));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.print_subs,cljs.core.conj,from);

return shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-notify","request-notify",351029173),new cljs.core.Keyword(null,"notify-op","notify-op",1568109361),new cljs.core.Keyword("shadow.cljs.devtools.client.shared","runtime-print-disconnect","shadow.cljs.devtools.client.shared/runtime-print-disconnect",2030167412),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"client-id","client-id",-464622140),from], null)], null));
}),new cljs.core.Keyword(null,"runtime-print-unsub","runtime-print-unsub",2055442536),(function (p__45067){
var map__45068 = p__45067;
var map__45068__$1 = cljs.core.__destructure_map(map__45068);
var msg = map__45068__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.print_subs,cljs.core.disj,from);
}),new cljs.core.Keyword("shadow.cljs.devtools.client.shared","runtime-print-disconnect","shadow.cljs.devtools.client.shared/runtime-print-disconnect",2030167412),(function (p__45069){
var map__45070 = p__45069;
var map__45070__$1 = cljs.core.__destructure_map(map__45070);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45070__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45070__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.print_subs,cljs.core.disj,client_id);
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),(function (p__45071){
var map__45072 = p__45071;
var map__45072__$1 = cljs.core.__destructure_map(map__45072);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45072__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.shared.print_subs,cljs.core.disj,client_id);
})], null));

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

shadow.cljs.devtools.client.env.set_print_fns_BANG_((function (stream,text){
var subs = cljs.core.deref(shadow.cljs.devtools.client.shared.print_subs);
if(cljs.core.seq(subs)){
return shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"runtime-print","runtime-print",-1950604603),new cljs.core.Keyword(null,"to","to",192099007),subs,new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
} else {
return null;
}
}));

runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3(null, new cljs.core.Keyword("shadow.cljs.devtools.client.shared","shared","shadow.cljs.devtools.client.shared/shared",85374117),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"request-clients","request-clients",13229886),new cljs.core.Keyword(null,"notify","notify",-1256867814),true,new cljs.core.Keyword(null,"notify-op","notify-op",1568109361),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword("shadow.cljs.model","worker-for","shadow.cljs.model/worker-for",-228262107),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clients","clients",1436018090),(function (p__45077){
var map__45078 = p__45077;
var map__45078__$1 = cljs.core.__destructure_map(map__45078);
var msg = map__45078__$1;
var clients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45078__$1,new cljs.core.Keyword(null,"clients","clients",1436018090));
if(cljs.core.not(cljs.core.seq(clients))){
return console.error(["shadow-cljs watch for build :",shadow.cljs.devtools.client.env.build_id," not running!"].join(''));
} else {
var worker = cljs.core.first(clients);
var map__45080 = worker;
var map__45080__$1 = cljs.core.__destructure_map(map__45080);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45080__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)){
console.warn("shadow-cljs worker id outdated! This can mean that the JS loaded is outdated! Ensure that the shadow-cljs output is not cached. If other tools process this output make sure they update correctly. The code may continue to run fine, but if unexplained things happen make sure to fix this first.");

return (shadow.cljs.devtools.client.env.worker_client_id = client_id);
} else {
return null;
}
}
})], null));
})], null));

shadow.cljs.devtools.client.shared.start_all_plugins_BANG_(runtime);

return runtime.attempt_connect_BANG_();
});

//# sourceMappingURL=shadow.cljs.devtools.client.shared.js.map
