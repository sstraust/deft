goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__45847 = libspec;
var seq__45848 = cljs.core.seq(vec__45847);
var first__45849 = cljs.core.first(seq__45848);
var seq__45848__$1 = cljs.core.next(seq__45848);
var lib = first__45849;
var spec = seq__45848__$1;
var libspec__$1 = vec__45847;
var vec__45850 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45850,(0),null);
var vec__45853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45850,(1),null);
var seq__45854 = cljs.core.seq(vec__45853);
var first__45855 = cljs.core.first(seq__45854);
var seq__45854__$1 = cljs.core.next(seq__45854);
var _ = first__45855;
var first__45855__$1 = cljs.core.first(seq__45854__$1);
var seq__45854__$2 = cljs.core.next(seq__45854__$1);
var alias = first__45855__$1;
var post_spec = seq__45854__$2;
var post = vec__45853;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__45858 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45858,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__45858;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__45868 = cljs.core.seq(new_as_aliases);
var chunk__45869 = null;
var count__45870 = (0);
var i__45871 = (0);
while(true){
if((i__45871 < count__45870)){
var vec__45890 = chunk__45869.cljs$core$IIndexed$_nth$arity$2(null, i__45871);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45890,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45890,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__45922 = seq__45868;
var G__45923 = chunk__45869;
var G__45924 = count__45870;
var G__45925 = (i__45871 + (1));
seq__45868 = G__45922;
chunk__45869 = G__45923;
count__45870 = G__45924;
i__45871 = G__45925;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__45868);
if(temp__5823__auto__){
var seq__45868__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45868__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45868__$1);
var G__45926 = cljs.core.chunk_rest(seq__45868__$1);
var G__45927 = c__5565__auto__;
var G__45928 = cljs.core.count(c__5565__auto__);
var G__45929 = (0);
seq__45868 = G__45926;
chunk__45869 = G__45927;
count__45870 = G__45928;
i__45871 = G__45929;
continue;
} else {
var vec__45894 = cljs.core.first(seq__45868__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45894,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45894,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__45931 = cljs.core.next(seq__45868__$1);
var G__45932 = null;
var G__45933 = (0);
var G__45934 = (0);
seq__45868 = G__45931;
chunk__45869 = G__45932;
count__45870 = G__45933;
i__45871 = G__45934;
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
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__45900 = arguments.length;
switch (G__45900) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__45906 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__45906__$1 = cljs.core.__destructure_map(map__45906);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__45907 = ret__$1;
var G__45907__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45907,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__45907);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45907__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__45907__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__45908,p__45909){
var map__45910 = p__45908;
var map__45910__$1 = cljs.core.__destructure_map(map__45910);
var ret__$1 = map__45910__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45910__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__45911 = p__45909;
var seq__45912 = cljs.core.seq(vec__45911);
var first__45913 = cljs.core.first(seq__45912);
var seq__45912__$1 = cljs.core.next(seq__45912);
var spec_key = first__45913;
var libspecs = seq__45912__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__45914 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__45914__$1 = cljs.core.__destructure_map(map__45914);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45914__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45914__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__45915 = ret__$1;
var G__45915__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45915,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__45915);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__45915__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__45915__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
