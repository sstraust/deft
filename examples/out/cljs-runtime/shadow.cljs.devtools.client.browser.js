goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45623 = arguments.length;
var i__5767__auto___45624 = (0);
while(true){
if((i__5767__auto___45624 < len__5766__auto___45623)){
args__5772__auto__.push((arguments[i__5767__auto___45624]));

var G__45625 = (i__5767__auto___45624 + (1));
i__5767__auto___45624 = G__45625;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45345){
var G__45346 = cljs.core.first(seq45345);
var seq45345__$1 = cljs.core.next(seq45345);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45346,seq45345__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45347 = cljs.core.seq(sources);
var chunk__45348 = null;
var count__45349 = (0);
var i__45350 = (0);
while(true){
if((i__45350 < count__45349)){
var map__45355 = chunk__45348.cljs$core$IIndexed$_nth$arity$2(null, i__45350);
var map__45355__$1 = cljs.core.__destructure_map(map__45355);
var src = map__45355__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45355__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45355__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45355__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45355__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45356){var e_45626 = e45356;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45626);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45626.message)].join('')));
}

var G__45627 = seq__45347;
var G__45628 = chunk__45348;
var G__45629 = count__45349;
var G__45630 = (i__45350 + (1));
seq__45347 = G__45627;
chunk__45348 = G__45628;
count__45349 = G__45629;
i__45350 = G__45630;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45347);
if(temp__5823__auto__){
var seq__45347__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45347__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45347__$1);
var G__45631 = cljs.core.chunk_rest(seq__45347__$1);
var G__45632 = c__5565__auto__;
var G__45633 = cljs.core.count(c__5565__auto__);
var G__45634 = (0);
seq__45347 = G__45631;
chunk__45348 = G__45632;
count__45349 = G__45633;
i__45350 = G__45634;
continue;
} else {
var map__45357 = cljs.core.first(seq__45347__$1);
var map__45357__$1 = cljs.core.__destructure_map(map__45357);
var src = map__45357__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45357__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45357__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45357__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45357__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45358){var e_45635 = e45358;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45635);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45635.message)].join('')));
}

var G__45636 = cljs.core.next(seq__45347__$1);
var G__45637 = null;
var G__45638 = (0);
var G__45639 = (0);
seq__45347 = G__45636;
chunk__45348 = G__45637;
count__45349 = G__45638;
i__45350 = G__45639;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45359 = cljs.core.seq(js_requires);
var chunk__45360 = null;
var count__45361 = (0);
var i__45362 = (0);
while(true){
if((i__45362 < count__45361)){
var js_ns = chunk__45360.cljs$core$IIndexed$_nth$arity$2(null, i__45362);
var require_str_45640 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45640);


var G__45641 = seq__45359;
var G__45642 = chunk__45360;
var G__45643 = count__45361;
var G__45644 = (i__45362 + (1));
seq__45359 = G__45641;
chunk__45360 = G__45642;
count__45361 = G__45643;
i__45362 = G__45644;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45359);
if(temp__5823__auto__){
var seq__45359__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45359__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45359__$1);
var G__45645 = cljs.core.chunk_rest(seq__45359__$1);
var G__45646 = c__5565__auto__;
var G__45647 = cljs.core.count(c__5565__auto__);
var G__45648 = (0);
seq__45359 = G__45645;
chunk__45360 = G__45646;
count__45361 = G__45647;
i__45362 = G__45648;
continue;
} else {
var js_ns = cljs.core.first(seq__45359__$1);
var require_str_45649 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45649);


var G__45650 = cljs.core.next(seq__45359__$1);
var G__45651 = null;
var G__45652 = (0);
var G__45653 = (0);
seq__45359 = G__45650;
chunk__45360 = G__45651;
count__45361 = G__45652;
i__45362 = G__45653;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45364){
var map__45365 = p__45364;
var map__45365__$1 = cljs.core.__destructure_map(map__45365);
var msg = map__45365__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45365__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45365__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45366(s__45367){
return (new cljs.core.LazySeq(null,(function (){
var s__45367__$1 = s__45367;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__45367__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__45372 = cljs.core.first(xs__6383__auto__);
var map__45372__$1 = cljs.core.__destructure_map(map__45372);
var src = map__45372__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45372__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45372__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__45367__$1,map__45372,map__45372__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45365,map__45365__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45366_$_iter__45368(s__45369){
return (new cljs.core.LazySeq(null,((function (s__45367__$1,map__45372,map__45372__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45365,map__45365__$1,msg,info,reload_info){
return (function (){
var s__45369__$1 = s__45369;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__45369__$1);
if(temp__5823__auto____$1){
var s__45369__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45369__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__45369__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__45371 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__45370 = (0);
while(true){
if((i__45370 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__45370);
cljs.core.chunk_append(b__45371,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45654 = (i__45370 + (1));
i__45370 = G__45654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45371),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45366_$_iter__45368(cljs.core.chunk_rest(s__45369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45371),null);
}
} else {
var warning = cljs.core.first(s__45369__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45366_$_iter__45368(cljs.core.rest(s__45369__$2)));
}
} else {
return null;
}
break;
}
});})(s__45367__$1,map__45372,map__45372__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45365,map__45365__$1,msg,info,reload_info))
,null,null));
});})(s__45367__$1,map__45372,map__45372__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__45365,map__45365__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45366(cljs.core.rest(s__45367__$1)));
} else {
var G__45655 = cljs.core.rest(s__45367__$1);
s__45367__$1 = G__45655;
continue;
}
} else {
var G__45656 = cljs.core.rest(s__45367__$1);
s__45367__$1 = G__45656;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45373_45657 = cljs.core.seq(warnings);
var chunk__45374_45658 = null;
var count__45375_45659 = (0);
var i__45376_45660 = (0);
while(true){
if((i__45376_45660 < count__45375_45659)){
var map__45379_45661 = chunk__45374_45658.cljs$core$IIndexed$_nth$arity$2(null, i__45376_45660);
var map__45379_45662__$1 = cljs.core.__destructure_map(map__45379_45661);
var w_45663 = map__45379_45662__$1;
var msg_45664__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45379_45662__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45379_45662__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45379_45662__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45379_45662__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45667)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45665),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45666),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45664__$1)].join(''));


var G__45668 = seq__45373_45657;
var G__45669 = chunk__45374_45658;
var G__45670 = count__45375_45659;
var G__45671 = (i__45376_45660 + (1));
seq__45373_45657 = G__45668;
chunk__45374_45658 = G__45669;
count__45375_45659 = G__45670;
i__45376_45660 = G__45671;
continue;
} else {
var temp__5823__auto___45672 = cljs.core.seq(seq__45373_45657);
if(temp__5823__auto___45672){
var seq__45373_45673__$1 = temp__5823__auto___45672;
if(cljs.core.chunked_seq_QMARK_(seq__45373_45673__$1)){
var c__5565__auto___45674 = cljs.core.chunk_first(seq__45373_45673__$1);
var G__45675 = cljs.core.chunk_rest(seq__45373_45673__$1);
var G__45676 = c__5565__auto___45674;
var G__45677 = cljs.core.count(c__5565__auto___45674);
var G__45678 = (0);
seq__45373_45657 = G__45675;
chunk__45374_45658 = G__45676;
count__45375_45659 = G__45677;
i__45376_45660 = G__45678;
continue;
} else {
var map__45380_45679 = cljs.core.first(seq__45373_45673__$1);
var map__45380_45680__$1 = cljs.core.__destructure_map(map__45380_45679);
var w_45681 = map__45380_45680__$1;
var msg_45682__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380_45680__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380_45680__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380_45680__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380_45680__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45685)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45683),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45684),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45682__$1)].join(''));


var G__45686 = cljs.core.next(seq__45373_45673__$1);
var G__45687 = null;
var G__45688 = (0);
var G__45689 = (0);
seq__45373_45657 = G__45686;
chunk__45374_45658 = G__45687;
count__45375_45659 = G__45688;
i__45376_45660 = G__45689;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45363_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45363_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45381){
var map__45382 = p__45381;
var map__45382__$1 = cljs.core.__destructure_map(map__45382);
var msg = map__45382__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45382__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45382__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__45383 = cljs.core.seq(updates);
var chunk__45385 = null;
var count__45386 = (0);
var i__45387 = (0);
while(true){
if((i__45387 < count__45386)){
var path = chunk__45385.cljs$core$IIndexed$_nth$arity$2(null, i__45387);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45497_45690 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45501_45691 = null;
var count__45502_45692 = (0);
var i__45503_45693 = (0);
while(true){
if((i__45503_45693 < count__45502_45692)){
var node_45694 = chunk__45501_45691.cljs$core$IIndexed$_nth$arity$2(null, i__45503_45693);
if(cljs.core.not(node_45694.shadow$old)){
var path_match_45695 = shadow.cljs.devtools.client.browser.match_paths(node_45694.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45695)){
var new_link_45696 = (function (){var G__45529 = node_45694.cloneNode(true);
G__45529.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45695),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45529;
})();
(node_45694.shadow$old = true);

(new_link_45696.onload = ((function (seq__45497_45690,chunk__45501_45691,count__45502_45692,i__45503_45693,seq__45383,chunk__45385,count__45386,i__45387,new_link_45696,path_match_45695,node_45694,path,map__45382,map__45382__$1,msg,updates,reload_info){
return (function (e){
var seq__45530_45697 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45532_45698 = null;
var count__45533_45699 = (0);
var i__45534_45700 = (0);
while(true){
if((i__45534_45700 < count__45533_45699)){
var map__45538_45701 = chunk__45532_45698.cljs$core$IIndexed$_nth$arity$2(null, i__45534_45700);
var map__45538_45702__$1 = cljs.core.__destructure_map(map__45538_45701);
var task_45703 = map__45538_45702__$1;
var fn_str_45704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45538_45702__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45538_45702__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45706 = goog.getObjectByName(fn_str_45704,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45705)].join(''));

(fn_obj_45706.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45706.cljs$core$IFn$_invoke$arity$2(path,new_link_45696) : fn_obj_45706.call(null, path,new_link_45696));


var G__45707 = seq__45530_45697;
var G__45708 = chunk__45532_45698;
var G__45709 = count__45533_45699;
var G__45710 = (i__45534_45700 + (1));
seq__45530_45697 = G__45707;
chunk__45532_45698 = G__45708;
count__45533_45699 = G__45709;
i__45534_45700 = G__45710;
continue;
} else {
var temp__5823__auto___45711 = cljs.core.seq(seq__45530_45697);
if(temp__5823__auto___45711){
var seq__45530_45712__$1 = temp__5823__auto___45711;
if(cljs.core.chunked_seq_QMARK_(seq__45530_45712__$1)){
var c__5565__auto___45713 = cljs.core.chunk_first(seq__45530_45712__$1);
var G__45714 = cljs.core.chunk_rest(seq__45530_45712__$1);
var G__45715 = c__5565__auto___45713;
var G__45716 = cljs.core.count(c__5565__auto___45713);
var G__45717 = (0);
seq__45530_45697 = G__45714;
chunk__45532_45698 = G__45715;
count__45533_45699 = G__45716;
i__45534_45700 = G__45717;
continue;
} else {
var map__45539_45718 = cljs.core.first(seq__45530_45712__$1);
var map__45539_45719__$1 = cljs.core.__destructure_map(map__45539_45718);
var task_45720 = map__45539_45719__$1;
var fn_str_45721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539_45719__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539_45719__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45723 = goog.getObjectByName(fn_str_45721,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45722)].join(''));

(fn_obj_45723.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45723.cljs$core$IFn$_invoke$arity$2(path,new_link_45696) : fn_obj_45723.call(null, path,new_link_45696));


var G__45724 = cljs.core.next(seq__45530_45712__$1);
var G__45725 = null;
var G__45726 = (0);
var G__45727 = (0);
seq__45530_45697 = G__45724;
chunk__45532_45698 = G__45725;
count__45533_45699 = G__45726;
i__45534_45700 = G__45727;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45694);
});})(seq__45497_45690,chunk__45501_45691,count__45502_45692,i__45503_45693,seq__45383,chunk__45385,count__45386,i__45387,new_link_45696,path_match_45695,node_45694,path,map__45382,map__45382__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45695], 0));

goog.dom.insertSiblingAfter(new_link_45696,node_45694);


var G__45728 = seq__45497_45690;
var G__45729 = chunk__45501_45691;
var G__45730 = count__45502_45692;
var G__45731 = (i__45503_45693 + (1));
seq__45497_45690 = G__45728;
chunk__45501_45691 = G__45729;
count__45502_45692 = G__45730;
i__45503_45693 = G__45731;
continue;
} else {
var G__45732 = seq__45497_45690;
var G__45733 = chunk__45501_45691;
var G__45734 = count__45502_45692;
var G__45735 = (i__45503_45693 + (1));
seq__45497_45690 = G__45732;
chunk__45501_45691 = G__45733;
count__45502_45692 = G__45734;
i__45503_45693 = G__45735;
continue;
}
} else {
var G__45736 = seq__45497_45690;
var G__45737 = chunk__45501_45691;
var G__45738 = count__45502_45692;
var G__45739 = (i__45503_45693 + (1));
seq__45497_45690 = G__45736;
chunk__45501_45691 = G__45737;
count__45502_45692 = G__45738;
i__45503_45693 = G__45739;
continue;
}
} else {
var temp__5823__auto___45740 = cljs.core.seq(seq__45497_45690);
if(temp__5823__auto___45740){
var seq__45497_45741__$1 = temp__5823__auto___45740;
if(cljs.core.chunked_seq_QMARK_(seq__45497_45741__$1)){
var c__5565__auto___45742 = cljs.core.chunk_first(seq__45497_45741__$1);
var G__45743 = cljs.core.chunk_rest(seq__45497_45741__$1);
var G__45744 = c__5565__auto___45742;
var G__45745 = cljs.core.count(c__5565__auto___45742);
var G__45746 = (0);
seq__45497_45690 = G__45743;
chunk__45501_45691 = G__45744;
count__45502_45692 = G__45745;
i__45503_45693 = G__45746;
continue;
} else {
var node_45747 = cljs.core.first(seq__45497_45741__$1);
if(cljs.core.not(node_45747.shadow$old)){
var path_match_45748 = shadow.cljs.devtools.client.browser.match_paths(node_45747.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45748)){
var new_link_45749 = (function (){var G__45540 = node_45747.cloneNode(true);
G__45540.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45748),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45540;
})();
(node_45747.shadow$old = true);

(new_link_45749.onload = ((function (seq__45497_45690,chunk__45501_45691,count__45502_45692,i__45503_45693,seq__45383,chunk__45385,count__45386,i__45387,new_link_45749,path_match_45748,node_45747,seq__45497_45741__$1,temp__5823__auto___45740,path,map__45382,map__45382__$1,msg,updates,reload_info){
return (function (e){
var seq__45541_45750 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45543_45751 = null;
var count__45544_45752 = (0);
var i__45545_45753 = (0);
while(true){
if((i__45545_45753 < count__45544_45752)){
var map__45549_45754 = chunk__45543_45751.cljs$core$IIndexed$_nth$arity$2(null, i__45545_45753);
var map__45549_45755__$1 = cljs.core.__destructure_map(map__45549_45754);
var task_45756 = map__45549_45755__$1;
var fn_str_45757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45549_45755__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45549_45755__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45759 = goog.getObjectByName(fn_str_45757,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45758)].join(''));

(fn_obj_45759.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45759.cljs$core$IFn$_invoke$arity$2(path,new_link_45749) : fn_obj_45759.call(null, path,new_link_45749));


var G__45760 = seq__45541_45750;
var G__45761 = chunk__45543_45751;
var G__45762 = count__45544_45752;
var G__45763 = (i__45545_45753 + (1));
seq__45541_45750 = G__45760;
chunk__45543_45751 = G__45761;
count__45544_45752 = G__45762;
i__45545_45753 = G__45763;
continue;
} else {
var temp__5823__auto___45764__$1 = cljs.core.seq(seq__45541_45750);
if(temp__5823__auto___45764__$1){
var seq__45541_45765__$1 = temp__5823__auto___45764__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45541_45765__$1)){
var c__5565__auto___45766 = cljs.core.chunk_first(seq__45541_45765__$1);
var G__45767 = cljs.core.chunk_rest(seq__45541_45765__$1);
var G__45768 = c__5565__auto___45766;
var G__45769 = cljs.core.count(c__5565__auto___45766);
var G__45770 = (0);
seq__45541_45750 = G__45767;
chunk__45543_45751 = G__45768;
count__45544_45752 = G__45769;
i__45545_45753 = G__45770;
continue;
} else {
var map__45550_45771 = cljs.core.first(seq__45541_45765__$1);
var map__45550_45772__$1 = cljs.core.__destructure_map(map__45550_45771);
var task_45773 = map__45550_45772__$1;
var fn_str_45774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45550_45772__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45550_45772__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45776 = goog.getObjectByName(fn_str_45774,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45775)].join(''));

(fn_obj_45776.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45776.cljs$core$IFn$_invoke$arity$2(path,new_link_45749) : fn_obj_45776.call(null, path,new_link_45749));


var G__45777 = cljs.core.next(seq__45541_45765__$1);
var G__45778 = null;
var G__45779 = (0);
var G__45780 = (0);
seq__45541_45750 = G__45777;
chunk__45543_45751 = G__45778;
count__45544_45752 = G__45779;
i__45545_45753 = G__45780;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45747);
});})(seq__45497_45690,chunk__45501_45691,count__45502_45692,i__45503_45693,seq__45383,chunk__45385,count__45386,i__45387,new_link_45749,path_match_45748,node_45747,seq__45497_45741__$1,temp__5823__auto___45740,path,map__45382,map__45382__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45748], 0));

goog.dom.insertSiblingAfter(new_link_45749,node_45747);


var G__45781 = cljs.core.next(seq__45497_45741__$1);
var G__45782 = null;
var G__45783 = (0);
var G__45784 = (0);
seq__45497_45690 = G__45781;
chunk__45501_45691 = G__45782;
count__45502_45692 = G__45783;
i__45503_45693 = G__45784;
continue;
} else {
var G__45785 = cljs.core.next(seq__45497_45741__$1);
var G__45786 = null;
var G__45787 = (0);
var G__45788 = (0);
seq__45497_45690 = G__45785;
chunk__45501_45691 = G__45786;
count__45502_45692 = G__45787;
i__45503_45693 = G__45788;
continue;
}
} else {
var G__45789 = cljs.core.next(seq__45497_45741__$1);
var G__45790 = null;
var G__45791 = (0);
var G__45792 = (0);
seq__45497_45690 = G__45789;
chunk__45501_45691 = G__45790;
count__45502_45692 = G__45791;
i__45503_45693 = G__45792;
continue;
}
}
} else {
}
}
break;
}


var G__45793 = seq__45383;
var G__45794 = chunk__45385;
var G__45795 = count__45386;
var G__45796 = (i__45387 + (1));
seq__45383 = G__45793;
chunk__45385 = G__45794;
count__45386 = G__45795;
i__45387 = G__45796;
continue;
} else {
var G__45797 = seq__45383;
var G__45798 = chunk__45385;
var G__45799 = count__45386;
var G__45800 = (i__45387 + (1));
seq__45383 = G__45797;
chunk__45385 = G__45798;
count__45386 = G__45799;
i__45387 = G__45800;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45383);
if(temp__5823__auto__){
var seq__45383__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45383__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45383__$1);
var G__45801 = cljs.core.chunk_rest(seq__45383__$1);
var G__45802 = c__5565__auto__;
var G__45803 = cljs.core.count(c__5565__auto__);
var G__45804 = (0);
seq__45383 = G__45801;
chunk__45385 = G__45802;
count__45386 = G__45803;
i__45387 = G__45804;
continue;
} else {
var path = cljs.core.first(seq__45383__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45551_45805 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45555_45806 = null;
var count__45556_45807 = (0);
var i__45557_45808 = (0);
while(true){
if((i__45557_45808 < count__45556_45807)){
var node_45809 = chunk__45555_45806.cljs$core$IIndexed$_nth$arity$2(null, i__45557_45808);
if(cljs.core.not(node_45809.shadow$old)){
var path_match_45810 = shadow.cljs.devtools.client.browser.match_paths(node_45809.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45810)){
var new_link_45811 = (function (){var G__45583 = node_45809.cloneNode(true);
G__45583.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45810),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45583;
})();
(node_45809.shadow$old = true);

(new_link_45811.onload = ((function (seq__45551_45805,chunk__45555_45806,count__45556_45807,i__45557_45808,seq__45383,chunk__45385,count__45386,i__45387,new_link_45811,path_match_45810,node_45809,path,seq__45383__$1,temp__5823__auto__,map__45382,map__45382__$1,msg,updates,reload_info){
return (function (e){
var seq__45584_45812 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45586_45813 = null;
var count__45587_45814 = (0);
var i__45588_45815 = (0);
while(true){
if((i__45588_45815 < count__45587_45814)){
var map__45592_45816 = chunk__45586_45813.cljs$core$IIndexed$_nth$arity$2(null, i__45588_45815);
var map__45592_45817__$1 = cljs.core.__destructure_map(map__45592_45816);
var task_45818 = map__45592_45817__$1;
var fn_str_45819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45592_45817__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45592_45817__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45821 = goog.getObjectByName(fn_str_45819,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45820)].join(''));

(fn_obj_45821.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45821.cljs$core$IFn$_invoke$arity$2(path,new_link_45811) : fn_obj_45821.call(null, path,new_link_45811));


var G__45822 = seq__45584_45812;
var G__45823 = chunk__45586_45813;
var G__45824 = count__45587_45814;
var G__45825 = (i__45588_45815 + (1));
seq__45584_45812 = G__45822;
chunk__45586_45813 = G__45823;
count__45587_45814 = G__45824;
i__45588_45815 = G__45825;
continue;
} else {
var temp__5823__auto___45826__$1 = cljs.core.seq(seq__45584_45812);
if(temp__5823__auto___45826__$1){
var seq__45584_45827__$1 = temp__5823__auto___45826__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45584_45827__$1)){
var c__5565__auto___45828 = cljs.core.chunk_first(seq__45584_45827__$1);
var G__45829 = cljs.core.chunk_rest(seq__45584_45827__$1);
var G__45830 = c__5565__auto___45828;
var G__45831 = cljs.core.count(c__5565__auto___45828);
var G__45832 = (0);
seq__45584_45812 = G__45829;
chunk__45586_45813 = G__45830;
count__45587_45814 = G__45831;
i__45588_45815 = G__45832;
continue;
} else {
var map__45593_45833 = cljs.core.first(seq__45584_45827__$1);
var map__45593_45834__$1 = cljs.core.__destructure_map(map__45593_45833);
var task_45835 = map__45593_45834__$1;
var fn_str_45836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45593_45834__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45593_45834__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45838 = goog.getObjectByName(fn_str_45836,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45837)].join(''));

(fn_obj_45838.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45838.cljs$core$IFn$_invoke$arity$2(path,new_link_45811) : fn_obj_45838.call(null, path,new_link_45811));


var G__45839 = cljs.core.next(seq__45584_45827__$1);
var G__45840 = null;
var G__45841 = (0);
var G__45842 = (0);
seq__45584_45812 = G__45839;
chunk__45586_45813 = G__45840;
count__45587_45814 = G__45841;
i__45588_45815 = G__45842;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45809);
});})(seq__45551_45805,chunk__45555_45806,count__45556_45807,i__45557_45808,seq__45383,chunk__45385,count__45386,i__45387,new_link_45811,path_match_45810,node_45809,path,seq__45383__$1,temp__5823__auto__,map__45382,map__45382__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45810], 0));

goog.dom.insertSiblingAfter(new_link_45811,node_45809);


var G__45843 = seq__45551_45805;
var G__45844 = chunk__45555_45806;
var G__45845 = count__45556_45807;
var G__45846 = (i__45557_45808 + (1));
seq__45551_45805 = G__45843;
chunk__45555_45806 = G__45844;
count__45556_45807 = G__45845;
i__45557_45808 = G__45846;
continue;
} else {
var G__45847 = seq__45551_45805;
var G__45848 = chunk__45555_45806;
var G__45849 = count__45556_45807;
var G__45850 = (i__45557_45808 + (1));
seq__45551_45805 = G__45847;
chunk__45555_45806 = G__45848;
count__45556_45807 = G__45849;
i__45557_45808 = G__45850;
continue;
}
} else {
var G__45851 = seq__45551_45805;
var G__45852 = chunk__45555_45806;
var G__45853 = count__45556_45807;
var G__45854 = (i__45557_45808 + (1));
seq__45551_45805 = G__45851;
chunk__45555_45806 = G__45852;
count__45556_45807 = G__45853;
i__45557_45808 = G__45854;
continue;
}
} else {
var temp__5823__auto___45855__$1 = cljs.core.seq(seq__45551_45805);
if(temp__5823__auto___45855__$1){
var seq__45551_45856__$1 = temp__5823__auto___45855__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45551_45856__$1)){
var c__5565__auto___45857 = cljs.core.chunk_first(seq__45551_45856__$1);
var G__45858 = cljs.core.chunk_rest(seq__45551_45856__$1);
var G__45859 = c__5565__auto___45857;
var G__45860 = cljs.core.count(c__5565__auto___45857);
var G__45861 = (0);
seq__45551_45805 = G__45858;
chunk__45555_45806 = G__45859;
count__45556_45807 = G__45860;
i__45557_45808 = G__45861;
continue;
} else {
var node_45862 = cljs.core.first(seq__45551_45856__$1);
if(cljs.core.not(node_45862.shadow$old)){
var path_match_45863 = shadow.cljs.devtools.client.browser.match_paths(node_45862.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45863)){
var new_link_45864 = (function (){var G__45594 = node_45862.cloneNode(true);
G__45594.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45863),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45594;
})();
(node_45862.shadow$old = true);

(new_link_45864.onload = ((function (seq__45551_45805,chunk__45555_45806,count__45556_45807,i__45557_45808,seq__45383,chunk__45385,count__45386,i__45387,new_link_45864,path_match_45863,node_45862,seq__45551_45856__$1,temp__5823__auto___45855__$1,path,seq__45383__$1,temp__5823__auto__,map__45382,map__45382__$1,msg,updates,reload_info){
return (function (e){
var seq__45595_45865 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45597_45866 = null;
var count__45598_45867 = (0);
var i__45599_45868 = (0);
while(true){
if((i__45599_45868 < count__45598_45867)){
var map__45603_45869 = chunk__45597_45866.cljs$core$IIndexed$_nth$arity$2(null, i__45599_45868);
var map__45603_45870__$1 = cljs.core.__destructure_map(map__45603_45869);
var task_45871 = map__45603_45870__$1;
var fn_str_45872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45603_45870__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45603_45870__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45874 = goog.getObjectByName(fn_str_45872,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45873)].join(''));

(fn_obj_45874.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45874.cljs$core$IFn$_invoke$arity$2(path,new_link_45864) : fn_obj_45874.call(null, path,new_link_45864));


var G__45875 = seq__45595_45865;
var G__45876 = chunk__45597_45866;
var G__45877 = count__45598_45867;
var G__45878 = (i__45599_45868 + (1));
seq__45595_45865 = G__45875;
chunk__45597_45866 = G__45876;
count__45598_45867 = G__45877;
i__45599_45868 = G__45878;
continue;
} else {
var temp__5823__auto___45879__$2 = cljs.core.seq(seq__45595_45865);
if(temp__5823__auto___45879__$2){
var seq__45595_45880__$1 = temp__5823__auto___45879__$2;
if(cljs.core.chunked_seq_QMARK_(seq__45595_45880__$1)){
var c__5565__auto___45881 = cljs.core.chunk_first(seq__45595_45880__$1);
var G__45882 = cljs.core.chunk_rest(seq__45595_45880__$1);
var G__45883 = c__5565__auto___45881;
var G__45884 = cljs.core.count(c__5565__auto___45881);
var G__45885 = (0);
seq__45595_45865 = G__45882;
chunk__45597_45866 = G__45883;
count__45598_45867 = G__45884;
i__45599_45868 = G__45885;
continue;
} else {
var map__45604_45886 = cljs.core.first(seq__45595_45880__$1);
var map__45604_45887__$1 = cljs.core.__destructure_map(map__45604_45886);
var task_45888 = map__45604_45887__$1;
var fn_str_45889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45604_45887__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45604_45887__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45891 = goog.getObjectByName(fn_str_45889,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45890)].join(''));

(fn_obj_45891.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45891.cljs$core$IFn$_invoke$arity$2(path,new_link_45864) : fn_obj_45891.call(null, path,new_link_45864));


var G__45892 = cljs.core.next(seq__45595_45880__$1);
var G__45893 = null;
var G__45894 = (0);
var G__45895 = (0);
seq__45595_45865 = G__45892;
chunk__45597_45866 = G__45893;
count__45598_45867 = G__45894;
i__45599_45868 = G__45895;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45862);
});})(seq__45551_45805,chunk__45555_45806,count__45556_45807,i__45557_45808,seq__45383,chunk__45385,count__45386,i__45387,new_link_45864,path_match_45863,node_45862,seq__45551_45856__$1,temp__5823__auto___45855__$1,path,seq__45383__$1,temp__5823__auto__,map__45382,map__45382__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45863], 0));

goog.dom.insertSiblingAfter(new_link_45864,node_45862);


var G__45896 = cljs.core.next(seq__45551_45856__$1);
var G__45897 = null;
var G__45898 = (0);
var G__45899 = (0);
seq__45551_45805 = G__45896;
chunk__45555_45806 = G__45897;
count__45556_45807 = G__45898;
i__45557_45808 = G__45899;
continue;
} else {
var G__45900 = cljs.core.next(seq__45551_45856__$1);
var G__45901 = null;
var G__45902 = (0);
var G__45903 = (0);
seq__45551_45805 = G__45900;
chunk__45555_45806 = G__45901;
count__45556_45807 = G__45902;
i__45557_45808 = G__45903;
continue;
}
} else {
var G__45904 = cljs.core.next(seq__45551_45856__$1);
var G__45905 = null;
var G__45906 = (0);
var G__45907 = (0);
seq__45551_45805 = G__45904;
chunk__45555_45806 = G__45905;
count__45556_45807 = G__45906;
i__45557_45808 = G__45907;
continue;
}
}
} else {
}
}
break;
}


var G__45908 = cljs.core.next(seq__45383__$1);
var G__45909 = null;
var G__45910 = (0);
var G__45911 = (0);
seq__45383 = G__45908;
chunk__45385 = G__45909;
count__45386 = G__45910;
i__45387 = G__45911;
continue;
} else {
var G__45912 = cljs.core.next(seq__45383__$1);
var G__45913 = null;
var G__45914 = (0);
var G__45915 = (0);
seq__45383 = G__45912;
chunk__45385 = G__45913;
count__45386 = G__45914;
i__45387 = G__45915;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__45605){
var map__45606 = p__45605;
var map__45606__$1 = cljs.core.__destructure_map(map__45606);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45606__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45607,done,error){
var map__45608 = p__45607;
var map__45608__$1 = cljs.core.__destructure_map(map__45608);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45608__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45609,done,error){
var map__45610 = p__45609;
var map__45610__$1 = cljs.core.__destructure_map(map__45610);
var msg = map__45610__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45610__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45610__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45610__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45611){
var map__45612 = p__45611;
var map__45612__$1 = cljs.core.__destructure_map(map__45612);
var src = map__45612__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45613 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45613) : done.call(null, G__45613));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45614){
var map__45615 = p__45614;
var map__45615__$1 = cljs.core.__destructure_map(map__45615);
var msg__$1 = map__45615__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45615__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e45616){var ex = e45616;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45617){
var map__45618 = p__45617;
var map__45618__$1 = cljs.core.__destructure_map(map__45618);
var env = map__45618__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45618__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45619){
var map__45620 = p__45619;
var map__45620__$1 = cljs.core.__destructure_map(map__45620);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45620__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45620__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45621){
var map__45622 = p__45621;
var map__45622__$1 = cljs.core.__destructure_map(map__45622);
var svc = map__45622__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45622__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
