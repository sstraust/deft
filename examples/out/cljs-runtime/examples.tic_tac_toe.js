goog.provide('examples.tic_tac_toe');
examples.tic_tac_toe.GameBoard = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null);

examples.tic_tac_toe._GT_GameBoard = (function examples$tic_tac_toe$_GT_GameBoard(var_args){
var args__5772__auto__ = [];
var len__5766__auto___49354 = arguments.length;
var i__5767__auto___49355 = (0);
while(true){
if((i__5767__auto___49355 < len__5766__auto___49354)){
args__5772__auto__.push((arguments[i__5767__auto___49355]));

var G__49356 = (i__5767__auto___49355 + (1));
i__5767__auto___49355 = G__49356;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic = (function (p__49294){
var map__49295 = p__49294;
var map__49295__$1 = cljs.core.__destructure_map(map__49295);
var args__49228__auto__ = map__49295__$1;
return (new deft.core.cljs.TypeMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deft.core_cljs.prefix_keys("examples.tic-tac-toe",args__49228__auto__),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("examples.tic-tac-toe","GameBoard","examples.tic-tac-toe/GameBoard",-1138188783)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"required-keys","required-keys",-1498240343),cljs.core.set(cljs.core.keys(deft.core_cljs.prefix_keys("examples.tic-tac-toe",args__49228__auto__))),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("examples.tic-tac-toe","GameBoard","examples.tic-tac-toe/GameBoard",-1138188783)], null)));
}));

(examples.tic_tac_toe._GT_GameBoard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(examples.tic_tac_toe._GT_GameBoard.cljs$lang$applyTo = (function (seq49293){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49293));
}));



malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"examples.tic-tac-toe","examples.tic-tac-toe",779148805,null),new cljs.core.Symbol(null,">GameBoard",">GameBoard",-1541982228,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curr-move","curr-move",1254525366),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"curr-move","curr-move",1254525366)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)], null),examples.tic_tac_toe.GameBoard], null),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

examples.tic_tac_toe.make_new_game = (function examples$tic_tac_toe$make_new_game(){
return examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),null)))),new cljs.core.Keyword(null,"curr-move","curr-move",1254525366),new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)], 0));
});
examples.tic_tac_toe.place_tile = (function examples$tic_tac_toe$place_tile(board,p__49296){
var vec__49297 = p__49296;
var loc_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49297,(0),null);
var loc_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49297,(1),null);
var map__49300 = board;
var map__49300__$1 = cljs.core.__destructure_map(map__49300);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49300__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49300__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_x,loc_y], null)))){
alert("invalid tile placement");

throw exception("Invalid tile placement");
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(board,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_x,loc_y], null),curr_move),new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_move,new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)))?new cljs.core.Keyword("examples.tic-tac-toe","o","examples.tic-tac-toe/o",1873995957):new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)));
});
examples.tic_tac_toe.is_winning_seq_QMARK_ = (function examples$tic_tac_toe$is_winning_seq_QMARK_(tiles,tile_positions_list){
var tile_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49301_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,p1__49301_SHARP_);
}),tile_positions_list);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(tile_values)),(1))) && ((!((cljs.core.first(tile_values) == null)))));
});
examples.tic_tac_toe.is_victory_QMARK_ = (function examples$tic_tac_toe$is_victory_QMARK_(board){
var map__49302 = board;
var map__49302__$1 = cljs.core.__destructure_map(map__49302);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49302__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49302__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
var possible_victory_paths = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49303(s__49304){
return (new cljs.core.LazySeq(null,(function (){
var s__49304__$1 = s__49304;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49304__$1);
if(temp__5823__auto__){
var s__49304__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49304__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49304__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49306 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49305 = (0);
while(true){
if((i__49305 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__49305);
cljs.core.chunk_append(b__49306,(function (){var iter__5520__auto__ = ((function (i__49305,i,c__5518__auto__,size__5519__auto__,b__49306,s__49304__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49303_$_iter__49307(s__49308){
return (new cljs.core.LazySeq(null,((function (i__49305,i,c__5518__auto__,size__5519__auto__,b__49306,s__49304__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles){
return (function (){
var s__49308__$1 = s__49308;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__49308__$1);
if(temp__5823__auto____$1){
var s__49308__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49308__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__49308__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__49310 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__49309 = (0);
while(true){
if((i__49309 < size__5519__auto____$1)){
var j = cljs.core._nth(c__5518__auto____$1,i__49309);
cljs.core.chunk_append(b__49310,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__49357 = (i__49309 + (1));
i__49309 = G__49357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49310),examples$tic_tac_toe$is_victory_QMARK__$_iter__49303_$_iter__49307(cljs.core.chunk_rest(s__49308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49310),null);
}
} else {
var j = cljs.core.first(s__49308__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49303_$_iter__49307(cljs.core.rest(s__49308__$2)));
}
} else {
return null;
}
break;
}
});})(i__49305,i,c__5518__auto__,size__5519__auto__,b__49306,s__49304__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles))
,null,null));
});})(i__49305,i,c__5518__auto__,size__5519__auto__,b__49306,s__49304__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})());

var G__49358 = (i__49305 + (1));
i__49305 = G__49358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49306),examples$tic_tac_toe$is_victory_QMARK__$_iter__49303(cljs.core.chunk_rest(s__49304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49306),null);
}
} else {
var i = cljs.core.first(s__49304__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (i,s__49304__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49303_$_iter__49311(s__49312){
return (new cljs.core.LazySeq(null,(function (){
var s__49312__$1 = s__49312;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__49312__$1);
if(temp__5823__auto____$1){
var s__49312__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49312__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49312__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49314 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49313 = (0);
while(true){
if((i__49313 < size__5519__auto__)){
var j = cljs.core._nth(c__5518__auto__,i__49313);
cljs.core.chunk_append(b__49314,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__49359 = (i__49313 + (1));
i__49313 = G__49359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49314),examples$tic_tac_toe$is_victory_QMARK__$_iter__49303_$_iter__49311(cljs.core.chunk_rest(s__49312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49314),null);
}
} else {
var j = cljs.core.first(s__49312__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49303_$_iter__49311(cljs.core.rest(s__49312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__49304__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})(),examples$tic_tac_toe$is_victory_QMARK__$_iter__49303(cljs.core.rest(s__49304__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})(),(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49315(s__49316){
return (new cljs.core.LazySeq(null,(function (){
var s__49316__$1 = s__49316;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49316__$1);
if(temp__5823__auto__){
var s__49316__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49316__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49316__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49318 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49317 = (0);
while(true){
if((i__49317 < size__5519__auto__)){
var j = cljs.core._nth(c__5518__auto__,i__49317);
cljs.core.chunk_append(b__49318,(function (){var iter__5520__auto__ = ((function (i__49317,j,c__5518__auto__,size__5519__auto__,b__49318,s__49316__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49315_$_iter__49319(s__49320){
return (new cljs.core.LazySeq(null,((function (i__49317,j,c__5518__auto__,size__5519__auto__,b__49318,s__49316__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles){
return (function (){
var s__49320__$1 = s__49320;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__49320__$1);
if(temp__5823__auto____$1){
var s__49320__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49320__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__49320__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__49322 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__49321 = (0);
while(true){
if((i__49321 < size__5519__auto____$1)){
var i = cljs.core._nth(c__5518__auto____$1,i__49321);
cljs.core.chunk_append(b__49322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__49360 = (i__49321 + (1));
i__49321 = G__49360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49322),examples$tic_tac_toe$is_victory_QMARK__$_iter__49315_$_iter__49319(cljs.core.chunk_rest(s__49320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49322),null);
}
} else {
var i = cljs.core.first(s__49320__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49315_$_iter__49319(cljs.core.rest(s__49320__$2)));
}
} else {
return null;
}
break;
}
});})(i__49317,j,c__5518__auto__,size__5519__auto__,b__49318,s__49316__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles))
,null,null));
});})(i__49317,j,c__5518__auto__,size__5519__auto__,b__49318,s__49316__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})());

var G__49361 = (i__49317 + (1));
i__49317 = G__49361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49318),examples$tic_tac_toe$is_victory_QMARK__$_iter__49315(cljs.core.chunk_rest(s__49316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49318),null);
}
} else {
var j = cljs.core.first(s__49316__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (j,s__49316__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49315_$_iter__49323(s__49324){
return (new cljs.core.LazySeq(null,(function (){
var s__49324__$1 = s__49324;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__49324__$1);
if(temp__5823__auto____$1){
var s__49324__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49324__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49324__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49326 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49325 = (0);
while(true){
if((i__49325 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__49325);
cljs.core.chunk_append(b__49326,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__49362 = (i__49325 + (1));
i__49325 = G__49362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49326),examples$tic_tac_toe$is_victory_QMARK__$_iter__49315_$_iter__49323(cljs.core.chunk_rest(s__49324__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49326),null);
}
} else {
var i = cljs.core.first(s__49324__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49315_$_iter__49323(cljs.core.rest(s__49324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__49316__$2,temp__5823__auto__,map__49302,map__49302__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})(),examples$tic_tac_toe$is_victory_QMARK__$_iter__49315(cljs.core.rest(s__49316__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49327(s__49328){
return (new cljs.core.LazySeq(null,(function (){
var s__49328__$1 = s__49328;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49328__$1);
if(temp__5823__auto__){
var s__49328__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49328__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49328__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49330 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49329 = (0);
while(true){
if((i__49329 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__49329);
cljs.core.chunk_append(b__49330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((cljs.core.count(tiles) - (1)) - i)], null));

var G__49363 = (i__49329 + (1));
i__49329 = G__49363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49330),examples$tic_tac_toe$is_victory_QMARK__$_iter__49327(cljs.core.chunk_rest(s__49328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49330),null);
}
} else {
var i = cljs.core.first(s__49328__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((cljs.core.count(tiles) - (1)) - i)], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49327(cljs.core.rest(s__49328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49331(s__49332){
return (new cljs.core.LazySeq(null,(function (){
var s__49332__$1 = s__49332;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49332__$1);
if(temp__5823__auto__){
var s__49332__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49332__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49332__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49334 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49333 = (0);
while(true){
if((i__49333 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__49333);
cljs.core.chunk_append(b__49334,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null));

var G__49364 = (i__49333 + (1));
i__49333 = G__49364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49334),examples$tic_tac_toe$is_victory_QMARK__$_iter__49331(cljs.core.chunk_rest(s__49332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49334),null);
}
} else {
var i = cljs.core.first(s__49332__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49331(cljs.core.rest(s__49332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})()], null)], 0));
return cljs.core.some((function (victory_locs){
if(examples.tic_tac_toe.is_winning_seq_QMARK_(tiles,victory_locs)){
return victory_locs;
} else {
return null;
}
}),possible_victory_paths);
});
examples.tic_tac_toe.display_tile = (function examples$tic_tac_toe$display_tile(game_board_atom,p__49335){
var vec__49336 = p__49335;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49336,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49336,(1),null);
var map__49339 = cljs.core.deref(game_board_atom);
var map__49339__$1 = cljs.core.__destructure_map(map__49339);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49339__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49339__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.p-8.h-4.w-4.items-center.justify-center","v-box.p-8.h-4.w-4.items-center.justify-center",737770431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(game_board_atom,examples.tic_tac_toe.place_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),[(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0)))))?" border-l-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(cljs.core.count(tiles) - (1))))))?" border-r-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0)))))?" border-t-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(cljs.core.count(tiles) - (1))))))?" border-b-1":null)].join('')], null),(function (){var G__49340 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var G__49340__$1 = (((G__49340 instanceof cljs.core.Keyword))?G__49340.fqn:null);
switch (G__49340__$1) {
case "examples.tic-tac-toe/x":
return "X";

break;
case "examples.tic-tac-toe/o":
return "O";

break;
default:
return "";

}
})()], null);
});
examples.tic_tac_toe.display_game_grid = (function examples$tic_tac_toe$display_game_grid(game_board_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(cljs.core.truth_(examples.tic_tac_toe.is_victory_QMARK_(cljs.core.deref(game_board_atom)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Victory!!"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-box","h-box",-3344710),(function (){var map__49341 = cljs.core.deref(game_board_atom);
var map__49341__$1 = cljs.core.__destructure_map(map__49341);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49341__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49341__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
var iter__5520__auto__ = (function examples$tic_tac_toe$display_game_grid_$_iter__49342(s__49343){
return (new cljs.core.LazySeq(null,(function (){
var s__49343__$1 = s__49343;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49343__$1);
if(temp__5823__auto__){
var s__49343__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49343__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49343__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49345 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49344 = (0);
while(true){
if((i__49344 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__49344);
cljs.core.chunk_append(b__49345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(function (){var iter__5520__auto__ = ((function (i__49344,x,c__5518__auto__,size__5519__auto__,b__49345,s__49343__$2,temp__5823__auto__,map__49341,map__49341__$1,curr_move,tiles){
return (function examples$tic_tac_toe$display_game_grid_$_iter__49342_$_iter__49346(s__49347){
return (new cljs.core.LazySeq(null,((function (i__49344,x,c__5518__auto__,size__5519__auto__,b__49345,s__49343__$2,temp__5823__auto__,map__49341,map__49341__$1,curr_move,tiles){
return (function (){
var s__49347__$1 = s__49347;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__49347__$1);
if(temp__5823__auto____$1){
var s__49347__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49347__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__49347__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__49349 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__49348 = (0);
while(true){
if((i__49348 < size__5519__auto____$1)){
var y = cljs.core._nth(c__5518__auto____$1,i__49348);
cljs.core.chunk_append(b__49349,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

var G__49366 = (i__49348 + (1));
i__49348 = G__49366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49349),examples$tic_tac_toe$display_game_grid_$_iter__49342_$_iter__49346(cljs.core.chunk_rest(s__49347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49349),null);
}
} else {
var y = cljs.core.first(s__49347__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),examples$tic_tac_toe$display_game_grid_$_iter__49342_$_iter__49346(cljs.core.rest(s__49347__$2)));
}
} else {
return null;
}
break;
}
});})(i__49344,x,c__5518__auto__,size__5519__auto__,b__49345,s__49343__$2,temp__5823__auto__,map__49341,map__49341__$1,curr_move,tiles))
,null,null));
});})(i__49344,x,c__5518__auto__,size__5519__auto__,b__49345,s__49343__$2,temp__5823__auto__,map__49341,map__49341__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,x))));
})()], null));

var G__49367 = (i__49344 + (1));
i__49344 = G__49367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49345),examples$tic_tac_toe$display_game_grid_$_iter__49342(cljs.core.chunk_rest(s__49343__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49345),null);
}
} else {
var x = cljs.core.first(s__49343__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(function (){var iter__5520__auto__ = ((function (x,s__49343__$2,temp__5823__auto__,map__49341,map__49341__$1,curr_move,tiles){
return (function examples$tic_tac_toe$display_game_grid_$_iter__49342_$_iter__49350(s__49351){
return (new cljs.core.LazySeq(null,(function (){
var s__49351__$1 = s__49351;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__49351__$1);
if(temp__5823__auto____$1){
var s__49351__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49351__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49351__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49353 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49352 = (0);
while(true){
if((i__49352 < size__5519__auto__)){
var y = cljs.core._nth(c__5518__auto__,i__49352);
cljs.core.chunk_append(b__49353,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

var G__49368 = (i__49352 + (1));
i__49352 = G__49368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49353),examples$tic_tac_toe$display_game_grid_$_iter__49342_$_iter__49350(cljs.core.chunk_rest(s__49351__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49353),null);
}
} else {
var y = cljs.core.first(s__49351__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),examples$tic_tac_toe$display_game_grid_$_iter__49342_$_iter__49350(cljs.core.rest(s__49351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x,s__49343__$2,temp__5823__auto__,map__49341,map__49341__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,x))));
})()], null),examples$tic_tac_toe$display_game_grid_$_iter__49342(cljs.core.rest(s__49343__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})()], null)], null);
});
examples.tic_tac_toe.curr_board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(examples.tic_tac_toe.make_new_game());
examples.tic_tac_toe.main_game_view = (function examples$tic_tac_toe$main_game_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.heroed_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_game_grid,examples.tic_tac_toe.curr_board], null)], null);
});

//# sourceMappingURL=examples.tic_tac_toe.js.map
