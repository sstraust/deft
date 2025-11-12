goog.provide('examples.tic_tac_toe');
examples.tic_tac_toe.GameBoard = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null);

examples.tic_tac_toe._GT_GameBoard = (function examples$tic_tac_toe$_GT_GameBoard(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47625 = arguments.length;
var i__5767__auto___47626 = (0);
while(true){
if((i__5767__auto___47626 < len__5766__auto___47625)){
args__5772__auto__.push((arguments[i__5767__auto___47626]));

var G__47627 = (i__5767__auto___47626 + (1));
i__5767__auto___47626 = G__47627;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic = (function (p__47565){
var map__47566 = p__47565;
var map__47566__$1 = cljs.core.__destructure_map(map__47566);
var args__44582__auto__ = map__47566__$1;
return (new examples.tic_tac_toe.TypeMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(deft.core_cljs.prefix_keys("examples.tic-tac-toe",args__44582__auto__),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("examples.tic-tac-toe","GameBoard","examples.tic-tac-toe/GameBoard",-1138188783)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"required-keys","required-keys",-1498240343),cljs.core.set(cljs.core.keys(deft.core_cljs.prefix_keys("examples.tic-tac-toe",args__44582__auto__))),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("examples.tic-tac-toe","GameBoard","examples.tic-tac-toe/GameBoard",-1138188783)], null)));
}));

(examples.tic_tac_toe._GT_GameBoard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(examples.tic_tac_toe._GT_GameBoard.cljs$lang$applyTo = (function (seq47564){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47564));
}));



malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"examples.tic-tac-toe","examples.tic-tac-toe",779148805,null),new cljs.core.Symbol(null,">GameBoard",">GameBoard",-1541982228,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tiles","tiles",178505240),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"tiles","tiles",178505240)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curr-move","curr-move",1254525366),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"curr-move","curr-move",1254525366)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)], null),examples.tic_tac_toe.GameBoard], null),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

examples.tic_tac_toe.make_new_game = (function examples$tic_tac_toe$make_new_game(){
return examples.tic_tac_toe._GT_GameBoard.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),null)))),new cljs.core.Keyword(null,"curr-move","curr-move",1254525366),new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)], 0));
});
examples.tic_tac_toe.place_tile = (function examples$tic_tac_toe$place_tile(board,p__47567){
var vec__47568 = p__47567;
var loc_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47568,(0),null);
var loc_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47568,(1),null);
var map__47571 = board;
var map__47571__$1 = cljs.core.__destructure_map(map__47571);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47571__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47571__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_x,loc_y], null)))){
alert("invalid tile placement");

throw exception("Invalid tile placement");
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(board,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc_x,loc_y], null),curr_move),new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(curr_move,new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)))?new cljs.core.Keyword("examples.tic-tac-toe","o","examples.tic-tac-toe/o",1873995957):new cljs.core.Keyword("examples.tic-tac-toe","x","examples.tic-tac-toe/x",-1136156976)));
});
examples.tic_tac_toe.is_winning_seq_QMARK_ = (function examples$tic_tac_toe$is_winning_seq_QMARK_(tiles,tile_positions_list){
var tile_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47572_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,p1__47572_SHARP_);
}),tile_positions_list);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(tile_values)),(1))) && ((!((cljs.core.first(tile_values) == null)))));
});
examples.tic_tac_toe.is_victory_QMARK_ = (function examples$tic_tac_toe$is_victory_QMARK_(board){
var map__47573 = board;
var map__47573__$1 = cljs.core.__destructure_map(map__47573);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47573__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47573__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
var possible_victory_paths = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__47574(s__47575){
return (new cljs.core.LazySeq(null,(function (){
var s__47575__$1 = s__47575;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__47575__$1);
if(temp__5823__auto__){
var s__47575__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47575__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47575__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47577 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47576 = (0);
while(true){
if((i__47576 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__47576);
cljs.core.chunk_append(b__47577,(function (){var iter__5520__auto__ = ((function (i__47576,i,c__5518__auto__,size__5519__auto__,b__47577,s__47575__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__47574_$_iter__47578(s__47579){
return (new cljs.core.LazySeq(null,((function (i__47576,i,c__5518__auto__,size__5519__auto__,b__47577,s__47575__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles){
return (function (){
var s__47579__$1 = s__47579;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__47579__$1);
if(temp__5823__auto____$1){
var s__47579__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47579__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__47579__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__47581 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__47580 = (0);
while(true){
if((i__47580 < size__5519__auto____$1)){
var j = cljs.core._nth(c__5518__auto____$1,i__47580);
cljs.core.chunk_append(b__47581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__47628 = (i__47580 + (1));
i__47580 = G__47628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47581),examples$tic_tac_toe$is_victory_QMARK__$_iter__47574_$_iter__47578(cljs.core.chunk_rest(s__47579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47581),null);
}
} else {
var j = cljs.core.first(s__47579__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__47574_$_iter__47578(cljs.core.rest(s__47579__$2)));
}
} else {
return null;
}
break;
}
});})(i__47576,i,c__5518__auto__,size__5519__auto__,b__47577,s__47575__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles))
,null,null));
});})(i__47576,i,c__5518__auto__,size__5519__auto__,b__47577,s__47575__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})());

var G__47629 = (i__47576 + (1));
i__47576 = G__47629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47577),examples$tic_tac_toe$is_victory_QMARK__$_iter__47574(cljs.core.chunk_rest(s__47575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47577),null);
}
} else {
var i = cljs.core.first(s__47575__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (i,s__47575__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__47574_$_iter__47582(s__47583){
return (new cljs.core.LazySeq(null,(function (){
var s__47583__$1 = s__47583;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__47583__$1);
if(temp__5823__auto____$1){
var s__47583__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47583__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47583__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47585 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47584 = (0);
while(true){
if((i__47584 < size__5519__auto__)){
var j = cljs.core._nth(c__5518__auto__,i__47584);
cljs.core.chunk_append(b__47585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__47630 = (i__47584 + (1));
i__47584 = G__47630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47585),examples$tic_tac_toe$is_victory_QMARK__$_iter__47574_$_iter__47582(cljs.core.chunk_rest(s__47583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47585),null);
}
} else {
var j = cljs.core.first(s__47583__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__47574_$_iter__47582(cljs.core.rest(s__47583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__47575__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})(),examples$tic_tac_toe$is_victory_QMARK__$_iter__47574(cljs.core.rest(s__47575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})(),(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__47586(s__47587){
return (new cljs.core.LazySeq(null,(function (){
var s__47587__$1 = s__47587;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__47587__$1);
if(temp__5823__auto__){
var s__47587__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47587__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47587__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47589 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47588 = (0);
while(true){
if((i__47588 < size__5519__auto__)){
var j = cljs.core._nth(c__5518__auto__,i__47588);
cljs.core.chunk_append(b__47589,(function (){var iter__5520__auto__ = ((function (i__47588,j,c__5518__auto__,size__5519__auto__,b__47589,s__47587__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__47586_$_iter__47590(s__47591){
return (new cljs.core.LazySeq(null,((function (i__47588,j,c__5518__auto__,size__5519__auto__,b__47589,s__47587__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles){
return (function (){
var s__47591__$1 = s__47591;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__47591__$1);
if(temp__5823__auto____$1){
var s__47591__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47591__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__47591__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__47593 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__47592 = (0);
while(true){
if((i__47592 < size__5519__auto____$1)){
var i = cljs.core._nth(c__5518__auto____$1,i__47592);
cljs.core.chunk_append(b__47593,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__47631 = (i__47592 + (1));
i__47592 = G__47631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47593),examples$tic_tac_toe$is_victory_QMARK__$_iter__47586_$_iter__47590(cljs.core.chunk_rest(s__47591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47593),null);
}
} else {
var i = cljs.core.first(s__47591__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__47586_$_iter__47590(cljs.core.rest(s__47591__$2)));
}
} else {
return null;
}
break;
}
});})(i__47588,j,c__5518__auto__,size__5519__auto__,b__47589,s__47587__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles))
,null,null));
});})(i__47588,j,c__5518__auto__,size__5519__auto__,b__47589,s__47587__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})());

var G__47632 = (i__47588 + (1));
i__47588 = G__47632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47589),examples$tic_tac_toe$is_victory_QMARK__$_iter__47586(cljs.core.chunk_rest(s__47587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47589),null);
}
} else {
var j = cljs.core.first(s__47587__$2);
return cljs.core.cons((function (){var iter__5520__auto__ = ((function (j,s__47587__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles){
return (function examples$tic_tac_toe$is_victory_QMARK__$_iter__47586_$_iter__47594(s__47595){
return (new cljs.core.LazySeq(null,(function (){
var s__47595__$1 = s__47595;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__47595__$1);
if(temp__5823__auto____$1){
var s__47595__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47595__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47595__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47597 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47596 = (0);
while(true){
if((i__47596 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__47596);
cljs.core.chunk_append(b__47597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__47633 = (i__47596 + (1));
i__47596 = G__47633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47597),examples$tic_tac_toe$is_victory_QMARK__$_iter__47586_$_iter__47594(cljs.core.chunk_rest(s__47595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47597),null);
}
} else {
var i = cljs.core.first(s__47595__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__47586_$_iter__47594(cljs.core.rest(s__47595__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__47587__$2,temp__5823__auto__,map__47573,map__47573__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})(),examples$tic_tac_toe$is_victory_QMARK__$_iter__47586(cljs.core.rest(s__47587__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(tiles))));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__47598(s__47599){
return (new cljs.core.LazySeq(null,(function (){
var s__47599__$1 = s__47599;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__47599__$1);
if(temp__5823__auto__){
var s__47599__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47599__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47599__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47601 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47600 = (0);
while(true){
if((i__47600 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__47600);
cljs.core.chunk_append(b__47601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((cljs.core.count(tiles) - (1)) - i)], null));

var G__47634 = (i__47600 + (1));
i__47600 = G__47634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47601),examples$tic_tac_toe$is_victory_QMARK__$_iter__47598(cljs.core.chunk_rest(s__47599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47601),null);
}
} else {
var i = cljs.core.first(s__47599__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,((cljs.core.count(tiles) - (1)) - i)], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__47598(cljs.core.rest(s__47599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(tiles)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5520__auto__ = (function examples$tic_tac_toe$is_victory_QMARK__$_iter__47602(s__47603){
return (new cljs.core.LazySeq(null,(function (){
var s__47603__$1 = s__47603;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__47603__$1);
if(temp__5823__auto__){
var s__47603__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47603__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47603__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47605 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47604 = (0);
while(true){
if((i__47604 < size__5519__auto__)){
var i = cljs.core._nth(c__5518__auto__,i__47604);
cljs.core.chunk_append(b__47605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null));

var G__47635 = (i__47604 + (1));
i__47604 = G__47635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47605),examples$tic_tac_toe$is_victory_QMARK__$_iter__47602(cljs.core.chunk_rest(s__47603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47605),null);
}
} else {
var i = cljs.core.first(s__47603__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i], null),examples$tic_tac_toe$is_victory_QMARK__$_iter__47602(cljs.core.rest(s__47603__$2)));
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
examples.tic_tac_toe.display_tile = (function examples$tic_tac_toe$display_tile(game_board_atom,p__47606){
var vec__47607 = p__47606;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47607,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47607,(1),null);
var map__47610 = cljs.core.deref(game_board_atom);
var map__47610__$1 = cljs.core.__destructure_map(map__47610);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47610__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47610__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.p-8.h-4.w-4.items-center.justify-center","v-box.p-8.h-4.w-4.items-center.justify-center",737770431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(game_board_atom,examples.tic_tac_toe.place_tile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),[(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0)))))?" border-l-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(cljs.core.count(tiles) - (1))))))?" border-r-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0)))))?" border-t-1":null),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(cljs.core.count(tiles) - (1))))))?" border-b-1":null)].join('')], null),(function (){var G__47611 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var G__47611__$1 = (((G__47611 instanceof cljs.core.Keyword))?G__47611.fqn:null);
switch (G__47611__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(cljs.core.truth_(examples.tic_tac_toe.is_victory_QMARK_(cljs.core.deref(game_board_atom)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Victory!!"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-box","h-box",-3344710),(function (){var map__47612 = cljs.core.deref(game_board_atom);
var map__47612__$1 = cljs.core.__destructure_map(map__47612);
var curr_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47612__$1,new cljs.core.Keyword("examples.tic-tac-toe","curr-move","examples.tic-tac-toe/curr-move",-1970234491));
var tiles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47612__$1,new cljs.core.Keyword("examples.tic-tac-toe","tiles","examples.tic-tac-toe/tiles",-890378201));
var iter__5520__auto__ = (function examples$tic_tac_toe$display_game_grid_$_iter__47613(s__47614){
return (new cljs.core.LazySeq(null,(function (){
var s__47614__$1 = s__47614;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__47614__$1);
if(temp__5823__auto__){
var s__47614__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47614__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47614__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47616 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47615 = (0);
while(true){
if((i__47615 < size__5519__auto__)){
var x = cljs.core._nth(c__5518__auto__,i__47615);
cljs.core.chunk_append(b__47616,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(function (){var iter__5520__auto__ = ((function (i__47615,x,c__5518__auto__,size__5519__auto__,b__47616,s__47614__$2,temp__5823__auto__,map__47612,map__47612__$1,curr_move,tiles){
return (function examples$tic_tac_toe$display_game_grid_$_iter__47613_$_iter__47617(s__47618){
return (new cljs.core.LazySeq(null,((function (i__47615,x,c__5518__auto__,size__5519__auto__,b__47616,s__47614__$2,temp__5823__auto__,map__47612,map__47612__$1,curr_move,tiles){
return (function (){
var s__47618__$1 = s__47618;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__47618__$1);
if(temp__5823__auto____$1){
var s__47618__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47618__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__47618__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__47620 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__47619 = (0);
while(true){
if((i__47619 < size__5519__auto____$1)){
var y = cljs.core._nth(c__5518__auto____$1,i__47619);
cljs.core.chunk_append(b__47620,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

var G__47637 = (i__47619 + (1));
i__47619 = G__47637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47620),examples$tic_tac_toe$display_game_grid_$_iter__47613_$_iter__47617(cljs.core.chunk_rest(s__47618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47620),null);
}
} else {
var y = cljs.core.first(s__47618__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),examples$tic_tac_toe$display_game_grid_$_iter__47613_$_iter__47617(cljs.core.rest(s__47618__$2)));
}
} else {
return null;
}
break;
}
});})(i__47615,x,c__5518__auto__,size__5519__auto__,b__47616,s__47614__$2,temp__5823__auto__,map__47612,map__47612__$1,curr_move,tiles))
,null,null));
});})(i__47615,x,c__5518__auto__,size__5519__auto__,b__47616,s__47614__$2,temp__5823__auto__,map__47612,map__47612__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,x))));
})()], null));

var G__47638 = (i__47615 + (1));
i__47615 = G__47638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47616),examples$tic_tac_toe$display_game_grid_$_iter__47613(cljs.core.chunk_rest(s__47614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47616),null);
}
} else {
var x = cljs.core.first(s__47614__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),(function (){var iter__5520__auto__ = ((function (x,s__47614__$2,temp__5823__auto__,map__47612,map__47612__$1,curr_move,tiles){
return (function examples$tic_tac_toe$display_game_grid_$_iter__47613_$_iter__47621(s__47622){
return (new cljs.core.LazySeq(null,(function (){
var s__47622__$1 = s__47622;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__47622__$1);
if(temp__5823__auto____$1){
var s__47622__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47622__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47622__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47624 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47623 = (0);
while(true){
if((i__47623 < size__5519__auto__)){
var y = cljs.core._nth(c__5518__auto__,i__47623);
cljs.core.chunk_append(b__47624,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null));

var G__47639 = (i__47623 + (1));
i__47623 = G__47639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47624),examples$tic_tac_toe$display_game_grid_$_iter__47613_$_iter__47621(cljs.core.chunk_rest(s__47622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47624),null);
}
} else {
var y = cljs.core.first(s__47622__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [examples.tic_tac_toe.display_tile,game_board_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),examples$tic_tac_toe$display_game_grid_$_iter__47613_$_iter__47621(cljs.core.rest(s__47622__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(x,s__47614__$2,temp__5823__auto__,map__47612,map__47612__$1,curr_move,tiles))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tiles,x))));
})()], null),examples$tic_tac_toe$display_game_grid_$_iter__47613(cljs.core.rest(s__47614__$2)));
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
