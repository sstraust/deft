goog.provide('examples.tic_tac_toe');
examples.tic_tac_toe.GameBoard = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null);

examples.tic_tac_toe._GT_GameBoard = (function examples$tic_tac_toe$_GT_GameBoard(var_args){
var args__5772__auto__ = [];
var len__5766__auto___50038 = arguments.length;
var i__5767__auto___50039 = (0);
while(true){
if((i__5767__auto___50039 < len__5766__auto___50038)){
args__5772__auto__.push((arguments[i__5767__auto___50039]));

var G__50040 = (i__5767__auto___50039 + (1));
i__5767__auto___50039 = G__50040;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic = (function (p__49960){
var map__49961 = p__49960;
var map__49961__$1 = cljs.core.__destructure_map(map__49961);
var args__47821__auto__ = map__49961__$1;
return (new examples.tic_tac_toe.TypeMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deft.core_cljs.prefix_keys("examples.tic-tac-toe",args__47821__auto__),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("examples.tic-tac-toe","GameBoard","examples.tic-tac-toe/GameBoard",-1138188783)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"required-keys","required-keys",-1498240343),cljs.core.set(cljs.core.keys(deft.core_cljs.prefix_keys("examples.tic-tac-toe",args__47821__auto__))),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("examples.tic-tac-toe","GameBoard","examples.tic-tac-toe/GameBoard",-1138188783)], null)));
}));

(examples.tic_tac_toe._GT_GameBoard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(examples.tic_tac_toe._GT_GameBoard.cljs$lang$applyTo = (function (seq49959){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49959));
}));



malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"examples.tic-tac-toe","examples.tic-tac-toe",779148805,null),new cljs.core.Symbol(null,">GameBoard",">GameBoard",-1541982228,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curr-move","curr-move",1254525366),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"curr-move","curr-move",1254525366)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)], null),examples.tic_tac_toe.GameBoard], null),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

examples.tic_tac_toe.make_new_game = (function examples$tic_tac_toe$make_new_game(){
return examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),null)))),new cljs.core.Keyword(null,"curr-move","curr-move",1254525366),new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)], 0));
});
examples.tic_tac_toe.place_tile = (function examples$tic_tac_toe$place_tile(board,p__49968){
var vec__49969 = p__49968;
var loc_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49969,(0),null);
var loc_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49969,(1),null);
var map__49972 = board;
var map__49972__$1 = cljs.core.__destructure_map(map__49972);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49972__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49972__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_x,loc_y], null)))){
alert("invalid tile placement");

throw exception("Invalid tile placement");
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(board,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_x,loc_y], null),curr_move),new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_move,new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)))?new cljs.core.Keyword("examples.tic-tac-toe","o","examples.tic-tac-toe/o",1873995957):new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)));
});
examples.tic_tac_toe.is_winning_seq_QMARK_ = (function examples$tic_tac_toe$is_winning_seq_QMARK_(tiles,tile_positions_list){
var tile_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49973_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,p1__49973_SHARP_);
}),tile_positions_list);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(tile_values)),(1))) && ((!((cljs.core.first(tile_values) == null)))));
});
examples.tic_tac_toe.is_victory_QMARK_ = (function examples$tic_tac_toe$is_victory_QMARK_(board){
var map__49975 = board;
var map__49975__$1 = cljs.core.__destructure_map(map__49975);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49975__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49975__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
var possible_victory_paths = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49976(s__49977){
return (new cljs.core.LazySeq(null,(function (){
var s__49977__$1 = s__49977;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49977__$1);
if(temp__5823__auto__){
var s__49977__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49977__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49977__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49979 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49978 = (0);
while(true){
if((i__49978 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__49978);
cljs.core.chunk_append(b__49979,(function (){var iter__5520__auto__ = ((function (i__49978,i,c__5518__auto__,size__5519__auto__,b__49979,s__49977__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49976_$_iter__49980(s__49981){
return (new cljs.core.LazySeq(null,((function (i__49978,i,c__5518__auto__,size__5519__auto__,b__49979,s__49977__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles){
return (function (){
var s__49981__$1 = s__49981;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__49981__$1);
if(temp__5823__auto____$1){
var s__49981__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49981__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__49981__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__49983 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__49982 = (0);
while(true){
if((i__49982 < size__5519__auto____$1)){
var j = cljs.core._nth(c__5518__auto____$1,i__49982);
cljs.core.chunk_append(b__49983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__50041 = (i__49982 + (1));
i__49982 = G__50041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49983),examples$tic_tac_toe$is_victory_QMARK__$_iter__49976_$_iter__49980(cljs.core.chunk_rest(s__49981__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49983),null);
}
} else {
var j = cljs.core.first(s__49981__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49976_$_iter__49980(cljs.core.rest(s__49981__$2)));
}
} else {
return null;
}
break;
}
});})(i__49978,i,c__5518__auto__,size__5519__auto__,b__49979,s__49977__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles))
,null,null));
});})(i__49978,i,c__5518__auto__,size__5519__auto__,b__49979,s__49977__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})());

var G__50042 = (i__49978 + (1));
i__49978 = G__50042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49979),examples$tic_tac_toe$is_victory_QMARK__$_iter__49976(cljs.core.chunk_rest(s__49977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49979),null);
}
} else {
var i = cljs.core.first(s__49977__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (i,s__49977__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49976_$_iter__49989(s__49990){
return (new cljs.core.LazySeq(null,(function (){
var s__49990__$1 = s__49990;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__49990__$1);
if(temp__5823__auto____$1){
var s__49990__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49990__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49990__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49992 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49991 = (0);
while(true){
if((i__49991 < size__5519__auto__)){
var j = cljs.core._nth(c__5518__auto__,i__49991);
cljs.core.chunk_append(b__49992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__50043 = (i__49991 + (1));
i__49991 = G__50043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49992),examples$tic_tac_toe$is_victory_QMARK__$_iter__49976_$_iter__49989(cljs.core.chunk_rest(s__49990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49992),null);
}
} else {
var j = cljs.core.first(s__49990__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49976_$_iter__49989(cljs.core.rest(s__49990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__49977__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})(),examples$tic_tac_toe$is_victory_QMARK__$_iter__49976(cljs.core.rest(s__49977__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})(),(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49993(s__49994){
return (new cljs.core.LazySeq(null,(function (){
var s__49994__$1 = s__49994;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__49994__$1);
if(temp__5823__auto__){
var s__49994__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49994__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__49994__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__49996 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__49995 = (0);
while(true){
if((i__49995 < size__5519__auto__)){
var j = cljs.core._nth(c__5518__auto__,i__49995);
cljs.core.chunk_append(b__49996,(function (){var iter__5520__auto__ = ((function (i__49995,j,c__5518__auto__,size__5519__auto__,b__49996,s__49994__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49993_$_iter__50000(s__50001){
return (new cljs.core.LazySeq(null,((function (i__49995,j,c__5518__auto__,size__5519__auto__,b__49996,s__49994__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles){
return (function (){
var s__50001__$1 = s__50001;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50001__$1);
if(temp__5823__auto____$1){
var s__50001__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50001__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__50001__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__50003 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__50002 = (0);
while(true){
if((i__50002 < size__5519__auto____$1)){
var i = cljs.core._nth(c__5518__auto____$1,i__50002);
cljs.core.chunk_append(b__50003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__50044 = (i__50002 + (1));
i__50002 = G__50044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50003),examples$tic_tac_toe$is_victory_QMARK__$_iter__49993_$_iter__50000(cljs.core.chunk_rest(s__50001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50003),null);
}
} else {
var i = cljs.core.first(s__50001__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49993_$_iter__50000(cljs.core.rest(s__50001__$2)));
}
} else {
return null;
}
break;
}
});})(i__49995,j,c__5518__auto__,size__5519__auto__,b__49996,s__49994__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles))
,null,null));
});})(i__49995,j,c__5518__auto__,size__5519__auto__,b__49996,s__49994__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})());

var G__50045 = (i__49995 + (1));
i__49995 = G__50045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49996),examples$tic_tac_toe$is_victory_QMARK__$_iter__49993(cljs.core.chunk_rest(s__49994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49996),null);
}
} else {
var j = cljs.core.first(s__49994__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (j,s__49994__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__49993_$_iter__50004(s__50005){
return (new cljs.core.LazySeq(null,(function (){
var s__50005__$1 = s__50005;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50005__$1);
if(temp__5823__auto____$1){
var s__50005__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50005__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50005__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50007 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50006 = (0);
while(true){
if((i__50006 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__50006);
cljs.core.chunk_append(b__50007,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__50046 = (i__50006 + (1));
i__50006 = G__50046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50007),examples$tic_tac_toe$is_victory_QMARK__$_iter__49993_$_iter__50004(cljs.core.chunk_rest(s__50005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50007),null);
}
} else {
var i = cljs.core.first(s__50005__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__49993_$_iter__50004(cljs.core.rest(s__50005__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__49994__$2,temp__5823__auto__,map__49975,map__49975__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})(),examples$tic_tac_toe$is_victory_QMARK__$_iter__49993(cljs.core.rest(s__49994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__50008(s__50009){
return (new cljs.core.LazySeq(null,(function (){
var s__50009__$1 = s__50009;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50009__$1);
if(temp__5823__auto__){
var s__50009__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50009__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50009__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50011 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50010 = (0);
while(true){
if((i__50010 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__50010);
cljs.core.chunk_append(b__50011,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((cljs.core.count(tiles) - (1)) - i)], null));

var G__50047 = (i__50010 + (1));
i__50010 = G__50047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50011),examples$tic_tac_toe$is_victory_QMARK__$_iter__50008(cljs.core.chunk_rest(s__50009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50011),null);
}
} else {
var i = cljs.core.first(s__50009__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((cljs.core.count(tiles) - (1)) - i)], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__50008(cljs.core.rest(s__50009__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__50012(s__50013){
return (new cljs.core.LazySeq(null,(function (){
var s__50013__$1 = s__50013;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50013__$1);
if(temp__5823__auto__){
var s__50013__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50013__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50013__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50015 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50014 = (0);
while(true){
if((i__50014 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__50014);
cljs.core.chunk_append(b__50015,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null));

var G__50048 = (i__50014 + (1));
i__50014 = G__50048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50015),examples$tic_tac_toe$is_victory_QMARK__$_iter__50012(cljs.core.chunk_rest(s__50013__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50015),null);
}
} else {
var i = cljs.core.first(s__50013__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__50012(cljs.core.rest(s__50013__$2)));
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
examples.tic_tac_toe.display_tile = (function examples$tic_tac_toe$display_tile(game_board_atom,p__50016){
var vec__50017 = p__50016;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50017,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50017,(1),null);
var map__50020 = cljs.core.deref(game_board_atom);
var map__50020__$1 = cljs.core.__destructure_map(map__50020);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50020__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50020__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.p-8.h-4.w-4.items-center.justify-center","v-box.p-8.h-4.w-4.items-center.justify-center",737770431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(game_board_atom,examples.tic_tac_toe.place_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),[(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0)))))?" border-l-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(cljs.core.count(tiles) - (1))))))?" border-r-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0)))))?" border-t-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(cljs.core.count(tiles) - (1))))))?" border-b-1":null)].join('')], null),(function (){var G__50021 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var G__50021__$1 = (((G__50021 instanceof cljs.core.Keyword))?G__50021.fqn:null);
switch (G__50021__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(cljs.core.truth_(examples.tic_tac_toe.is_victory_QMARK_(cljs.core.deref(game_board_atom)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Victory!!"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-box","h-box",-3344710),(function (){var map__50025 = cljs.core.deref(game_board_atom);
var map__50025__$1 = cljs.core.__destructure_map(map__50025);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50025__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
var iter__5520__auto__ = (function examples$tic_tac_toe$display_game_grid_$_iter__50026(s__50027){
return (new cljs.core.LazySeq(null,(function (){
var s__50027__$1 = s__50027;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50027__$1);
if(temp__5823__auto__){
var s__50027__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50027__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50027__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50029 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50028 = (0);
while(true){
if((i__50028 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__50028);
cljs.core.chunk_append(b__50029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(function (){var iter__5520__auto__ = ((function (i__50028,x,c__5518__auto__,size__5519__auto__,b__50029,s__50027__$2,temp__5823__auto__,map__50025,map__50025__$1,curr_move,tiles){
return (function examples$tic_tac_toe$display_game_grid_$_iter__50026_$_iter__50030(s__50031){
return (new cljs.core.LazySeq(null,((function (i__50028,x,c__5518__auto__,size__5519__auto__,b__50029,s__50027__$2,temp__5823__auto__,map__50025,map__50025__$1,curr_move,tiles){
return (function (){
var s__50031__$1 = s__50031;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50031__$1);
if(temp__5823__auto____$1){
var s__50031__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50031__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__50031__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__50033 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__50032 = (0);
while(true){
if((i__50032 < size__5519__auto____$1)){
var y = cljs.core._nth(c__5518__auto____$1,i__50032);
cljs.core.chunk_append(b__50033,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

var G__50050 = (i__50032 + (1));
i__50032 = G__50050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50033),examples$tic_tac_toe$display_game_grid_$_iter__50026_$_iter__50030(cljs.core.chunk_rest(s__50031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50033),null);
}
} else {
var y = cljs.core.first(s__50031__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),examples$tic_tac_toe$display_game_grid_$_iter__50026_$_iter__50030(cljs.core.rest(s__50031__$2)));
}
} else {
return null;
}
break;
}
});})(i__50028,x,c__5518__auto__,size__5519__auto__,b__50029,s__50027__$2,temp__5823__auto__,map__50025,map__50025__$1,curr_move,tiles))
,null,null));
});})(i__50028,x,c__5518__auto__,size__5519__auto__,b__50029,s__50027__$2,temp__5823__auto__,map__50025,map__50025__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,x))));
})()], null));

var G__50051 = (i__50028 + (1));
i__50028 = G__50051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50029),examples$tic_tac_toe$display_game_grid_$_iter__50026(cljs.core.chunk_rest(s__50027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50029),null);
}
} else {
var x = cljs.core.first(s__50027__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(function (){var iter__5520__auto__ = ((function (x,s__50027__$2,temp__5823__auto__,map__50025,map__50025__$1,curr_move,tiles){
return (function examples$tic_tac_toe$display_game_grid_$_iter__50026_$_iter__50034(s__50035){
return (new cljs.core.LazySeq(null,(function (){
var s__50035__$1 = s__50035;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50035__$1);
if(temp__5823__auto____$1){
var s__50035__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50035__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__50035__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__50037 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__50036 = (0);
while(true){
if((i__50036 < size__5519__auto__)){
var y = cljs.core._nth(c__5518__auto__,i__50036);
cljs.core.chunk_append(b__50037,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

var G__50052 = (i__50036 + (1));
i__50036 = G__50052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50037),examples$tic_tac_toe$display_game_grid_$_iter__50026_$_iter__50034(cljs.core.chunk_rest(s__50035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50037),null);
}
} else {
var y = cljs.core.first(s__50035__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),examples$tic_tac_toe$display_game_grid_$_iter__50026_$_iter__50034(cljs.core.rest(s__50035__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x,s__50027__$2,temp__5823__auto__,map__50025,map__50025__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,x))));
})()], null),examples$tic_tac_toe$display_game_grid_$_iter__50026(cljs.core.rest(s__50027__$2)));
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
