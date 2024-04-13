goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17892){
var map__17893 = p__17892;
var map__17893__$1 = cljs.core.__destructure_map(map__17893);
var m = map__17893__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17893__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17893__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17918_18235 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17919_18236 = null;
var count__17920_18237 = (0);
var i__17921_18238 = (0);
while(true){
if((i__17921_18238 < count__17920_18237)){
var f_18239 = chunk__17919_18236.cljs$core$IIndexed$_nth$arity$2(null, i__17921_18238);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18239], 0));


var G__18240 = seq__17918_18235;
var G__18241 = chunk__17919_18236;
var G__18242 = count__17920_18237;
var G__18243 = (i__17921_18238 + (1));
seq__17918_18235 = G__18240;
chunk__17919_18236 = G__18241;
count__17920_18237 = G__18242;
i__17921_18238 = G__18243;
continue;
} else {
var temp__5804__auto___18244 = cljs.core.seq(seq__17918_18235);
if(temp__5804__auto___18244){
var seq__17918_18245__$1 = temp__5804__auto___18244;
if(cljs.core.chunked_seq_QMARK_(seq__17918_18245__$1)){
var c__5525__auto___18246 = cljs.core.chunk_first(seq__17918_18245__$1);
var G__18247 = cljs.core.chunk_rest(seq__17918_18245__$1);
var G__18248 = c__5525__auto___18246;
var G__18249 = cljs.core.count(c__5525__auto___18246);
var G__18250 = (0);
seq__17918_18235 = G__18247;
chunk__17919_18236 = G__18248;
count__17920_18237 = G__18249;
i__17921_18238 = G__18250;
continue;
} else {
var f_18251 = cljs.core.first(seq__17918_18245__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18251], 0));


var G__18256 = cljs.core.next(seq__17918_18245__$1);
var G__18257 = null;
var G__18258 = (0);
var G__18259 = (0);
seq__17918_18235 = G__18256;
chunk__17919_18236 = G__18257;
count__17920_18237 = G__18258;
i__17921_18238 = G__18259;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18260 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18260], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18260)))?cljs.core.second(arglists_18260):arglists_18260)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17993_18266 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17995_18267 = null;
var count__17996_18268 = (0);
var i__17997_18269 = (0);
while(true){
if((i__17997_18269 < count__17996_18268)){
var vec__18028_18270 = chunk__17995_18267.cljs$core$IIndexed$_nth$arity$2(null, i__17997_18269);
var name_18271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028_18270,(0),null);
var map__18031_18272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028_18270,(1),null);
var map__18031_18273__$1 = cljs.core.__destructure_map(map__18031_18272);
var doc_18274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18031_18273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18031_18273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18271], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18275], 0));

if(cljs.core.truth_(doc_18274)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18274], 0));
} else {
}


var G__18278 = seq__17993_18266;
var G__18279 = chunk__17995_18267;
var G__18280 = count__17996_18268;
var G__18281 = (i__17997_18269 + (1));
seq__17993_18266 = G__18278;
chunk__17995_18267 = G__18279;
count__17996_18268 = G__18280;
i__17997_18269 = G__18281;
continue;
} else {
var temp__5804__auto___18282 = cljs.core.seq(seq__17993_18266);
if(temp__5804__auto___18282){
var seq__17993_18283__$1 = temp__5804__auto___18282;
if(cljs.core.chunked_seq_QMARK_(seq__17993_18283__$1)){
var c__5525__auto___18284 = cljs.core.chunk_first(seq__17993_18283__$1);
var G__18285 = cljs.core.chunk_rest(seq__17993_18283__$1);
var G__18286 = c__5525__auto___18284;
var G__18287 = cljs.core.count(c__5525__auto___18284);
var G__18288 = (0);
seq__17993_18266 = G__18285;
chunk__17995_18267 = G__18286;
count__17996_18268 = G__18287;
i__17997_18269 = G__18288;
continue;
} else {
var vec__18036_18289 = cljs.core.first(seq__17993_18283__$1);
var name_18290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18036_18289,(0),null);
var map__18039_18291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18036_18289,(1),null);
var map__18039_18292__$1 = cljs.core.__destructure_map(map__18039_18291);
var doc_18293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18039_18292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18039_18292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18290], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18294], 0));

if(cljs.core.truth_(doc_18293)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18293], 0));
} else {
}


var G__18295 = cljs.core.next(seq__17993_18283__$1);
var G__18296 = null;
var G__18297 = (0);
var G__18298 = (0);
seq__17993_18266 = G__18295;
chunk__17995_18267 = G__18296;
count__17996_18268 = G__18297;
i__17997_18269 = G__18298;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18046 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18047 = null;
var count__18048 = (0);
var i__18049 = (0);
while(true){
if((i__18049 < count__18048)){
var role = chunk__18047.cljs$core$IIndexed$_nth$arity$2(null, i__18049);
var temp__5804__auto___18302__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18302__$1)){
var spec_18304 = temp__5804__auto___18302__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18304)], 0));
} else {
}


var G__18305 = seq__18046;
var G__18306 = chunk__18047;
var G__18307 = count__18048;
var G__18308 = (i__18049 + (1));
seq__18046 = G__18305;
chunk__18047 = G__18306;
count__18048 = G__18307;
i__18049 = G__18308;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18046);
if(temp__5804__auto____$1){
var seq__18046__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18046__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18046__$1);
var G__18310 = cljs.core.chunk_rest(seq__18046__$1);
var G__18311 = c__5525__auto__;
var G__18312 = cljs.core.count(c__5525__auto__);
var G__18313 = (0);
seq__18046 = G__18310;
chunk__18047 = G__18311;
count__18048 = G__18312;
i__18049 = G__18313;
continue;
} else {
var role = cljs.core.first(seq__18046__$1);
var temp__5804__auto___18314__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18314__$2)){
var spec_18315 = temp__5804__auto___18314__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18315)], 0));
} else {
}


var G__18316 = cljs.core.next(seq__18046__$1);
var G__18317 = null;
var G__18318 = (0);
var G__18319 = (0);
seq__18046 = G__18316;
chunk__18047 = G__18317;
count__18048 = G__18318;
i__18049 = G__18319;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18094 = datafied_throwable;
var map__18094__$1 = cljs.core.__destructure_map(map__18094);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18094__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18094__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18094__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18096 = cljs.core.last(via);
var map__18096__$1 = cljs.core.__destructure_map(map__18096);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18096__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18097 = data;
var map__18097__$1 = cljs.core.__destructure_map(map__18097);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18097__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18097__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18097__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18098 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18098__$1 = cljs.core.__destructure_map(map__18098);
var top_data = map__18098__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18098__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18101 = phase;
var G__18101__$1 = (((G__18101 instanceof cljs.core.Keyword))?G__18101.fqn:null);
switch (G__18101__$1) {
case "read-source":
var map__18103 = data;
var map__18103__$1 = cljs.core.__destructure_map(map__18103);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18103__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18103__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18105 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18105__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18105,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18105);
var G__18105__$2 = (cljs.core.truth_((function (){var fexpr__18107 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18107.cljs$core$IFn$_invoke$arity$1 ? fexpr__18107.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18107.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18105__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18105__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18105__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18105__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18108 = top_data;
var G__18108__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18108);
var G__18108__$2 = (cljs.core.truth_((function (){var fexpr__18112 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18112.cljs$core$IFn$_invoke$arity$1 ? fexpr__18112.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18112.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18108__$1);
var G__18108__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18108__$2);
var G__18108__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18108__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18108__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18108__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18114 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18114,(3),null);
var G__18118 = top_data;
var G__18118__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18118,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18118);
var G__18118__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18118__$1);
var G__18118__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18118__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18118__$2);
var G__18118__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18118__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18118__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18118__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18118__$4;
}

break;
case "execution":
var vec__18125 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18125,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18125,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18125,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18125,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18083_SHARP_){
var or__5002__auto__ = (p1__18083_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18128.cljs$core$IFn$_invoke$arity$1 ? fexpr__18128.cljs$core$IFn$_invoke$arity$1(p1__18083_SHARP_) : fexpr__18128.call(null, p1__18083_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18129 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18129__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18129,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18129);
var G__18129__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18129__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18129__$1);
var G__18129__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18129__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18129__$2);
var G__18129__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18129__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18129__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18129__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18129__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18101__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18137){
var map__18138 = p__18137;
var map__18138__$1 = cljs.core.__destructure_map(map__18138);
var triage_data = map__18138__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18138__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18142 = phase;
var G__18142__$1 = (((G__18142 instanceof cljs.core.Keyword))?G__18142.fqn:null);
switch (G__18142__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18143 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18144 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18145 = loc;
var G__18146 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18147_18362 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18148_18363 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18149_18364 = true;
var _STAR_print_fn_STAR__temp_val__18150_18365 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18149_18364);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18150_18365);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18135_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18135_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18148_18363);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18147_18362);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18143,G__18144,G__18145,G__18146) : format.call(null, G__18143,G__18144,G__18145,G__18146));

break;
case "macroexpansion":
var G__18157 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18158 = cause_type;
var G__18159 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18160 = loc;
var G__18161 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18157,G__18158,G__18159,G__18160,G__18161) : format.call(null, G__18157,G__18158,G__18159,G__18160,G__18161));

break;
case "compile-syntax-check":
var G__18165 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18166 = cause_type;
var G__18167 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18168 = loc;
var G__18169 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18165,G__18166,G__18167,G__18168,G__18169) : format.call(null, G__18165,G__18166,G__18167,G__18168,G__18169));

break;
case "compilation":
var G__18171 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18172 = cause_type;
var G__18173 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18174 = loc;
var G__18175 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18171,G__18172,G__18173,G__18174,G__18175) : format.call(null, G__18171,G__18172,G__18173,G__18174,G__18175));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18176 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18177 = symbol;
var G__18178 = loc;
var G__18179 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18184_18370 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18185_18371 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18186_18372 = true;
var _STAR_print_fn_STAR__temp_val__18187_18373 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18186_18372);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18187_18373);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18136_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18136_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18185_18371);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18184_18370);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18176,G__18177,G__18178,G__18179) : format.call(null, G__18176,G__18177,G__18178,G__18179));
} else {
var G__18206 = "Execution error%s at %s(%s).\n%s\n";
var G__18207 = cause_type;
var G__18208 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18209 = loc;
var G__18210 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18206,G__18207,G__18208,G__18209,G__18210) : format.call(null, G__18206,G__18207,G__18208,G__18209,G__18210));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18142__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
