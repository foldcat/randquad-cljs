goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13436){
var map__13438 = p__13436;
var map__13438__$1 = cljs.core.__destructure_map(map__13438);
var runtime = map__13438__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13815 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13815)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13454 = runtime;
var G__13455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13815);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13454,G__13455) : shadow.remote.runtime.shared.process.call(null, G__13454,G__13455));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13463,res){
var map__13464 = p__13463;
var map__13464__$1 = cljs.core.__destructure_map(map__13464);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13464__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13464__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13466 = res;
var G__13466__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13466,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13466);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13466__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13466__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13476 = arguments.length;
switch (G__13476) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13487,msg,handlers,timeout_after_ms){
var map__13489 = p__13487;
var map__13489__$1 = cljs.core.__destructure_map(map__13489);
var runtime = map__13489__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13489__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13832 = arguments.length;
var i__5727__auto___13833 = (0);
while(true){
if((i__5727__auto___13833 < len__5726__auto___13832)){
args__5732__auto__.push((arguments[i__5727__auto___13833]));

var G__13834 = (i__5727__auto___13833 + (1));
i__5727__auto___13833 = G__13834;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13505,ev,args){
var map__13510 = p__13505;
var map__13510__$1 = cljs.core.__destructure_map(map__13510);
var runtime = map__13510__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13510__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13515 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13518 = null;
var count__13519 = (0);
var i__13520 = (0);
while(true){
if((i__13520 < count__13519)){
var ext = chunk__13518.cljs$core$IIndexed$_nth$arity$2(null, i__13520);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13841 = seq__13515;
var G__13842 = chunk__13518;
var G__13843 = count__13519;
var G__13844 = (i__13520 + (1));
seq__13515 = G__13841;
chunk__13518 = G__13842;
count__13519 = G__13843;
i__13520 = G__13844;
continue;
} else {
var G__13845 = seq__13515;
var G__13846 = chunk__13518;
var G__13847 = count__13519;
var G__13848 = (i__13520 + (1));
seq__13515 = G__13845;
chunk__13518 = G__13846;
count__13519 = G__13847;
i__13520 = G__13848;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13515);
if(temp__5804__auto__){
var seq__13515__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13515__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13515__$1);
var G__13850 = cljs.core.chunk_rest(seq__13515__$1);
var G__13851 = c__5525__auto__;
var G__13852 = cljs.core.count(c__5525__auto__);
var G__13853 = (0);
seq__13515 = G__13850;
chunk__13518 = G__13851;
count__13519 = G__13852;
i__13520 = G__13853;
continue;
} else {
var ext = cljs.core.first(seq__13515__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13854 = cljs.core.next(seq__13515__$1);
var G__13855 = null;
var G__13856 = (0);
var G__13857 = (0);
seq__13515 = G__13854;
chunk__13518 = G__13855;
count__13519 = G__13856;
i__13520 = G__13857;
continue;
} else {
var G__13858 = cljs.core.next(seq__13515__$1);
var G__13859 = null;
var G__13860 = (0);
var G__13861 = (0);
seq__13515 = G__13858;
chunk__13518 = G__13859;
count__13519 = G__13860;
i__13520 = G__13861;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13496){
var G__13497 = cljs.core.first(seq13496);
var seq13496__$1 = cljs.core.next(seq13496);
var G__13498 = cljs.core.first(seq13496__$1);
var seq13496__$2 = cljs.core.next(seq13496__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13497,G__13498,seq13496__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13558,p__13559){
var map__13561 = p__13558;
var map__13561__$1 = cljs.core.__destructure_map(map__13561);
var runtime = map__13561__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13561__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13562 = p__13559;
var map__13562__$1 = cljs.core.__destructure_map(map__13562);
var msg = map__13562__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13562__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13565 = cljs.core.deref(state_ref);
var map__13565__$1 = cljs.core.__destructure_map(map__13565);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13565__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13565__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13571,msg){
var map__13574 = p__13571;
var map__13574__$1 = cljs.core.__destructure_map(map__13574);
var runtime = map__13574__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13574__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13594,key,p__13595){
var map__13596 = p__13594;
var map__13596__$1 = cljs.core.__destructure_map(map__13596);
var state = map__13596__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13596__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13597 = p__13595;
var map__13597__$1 = cljs.core.__destructure_map(map__13597);
var spec = map__13597__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13597__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13597__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13612,key,spec){
var map__13615 = p__13612;
var map__13615__$1 = cljs.core.__destructure_map(map__13615);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13615__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13626_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13626_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13628_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13628_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13629_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13629_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13630_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13630_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13631_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13631_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13671,key){
var map__13673 = p__13671;
var map__13673__$1 = cljs.core.__destructure_map(map__13673);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13673__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13688,msg){
var map__13690 = p__13688;
var map__13690__$1 = cljs.core.__destructure_map(map__13690);
var runtime = map__13690__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13690__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13703,p__13704){
var map__13709 = p__13703;
var map__13709__$1 = cljs.core.__destructure_map(map__13709);
var runtime = map__13709__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13709__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13710 = p__13704;
var map__13710__$1 = cljs.core.__destructure_map(map__13710);
var msg = map__13710__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13710__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13734 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13736 = null;
var count__13737 = (0);
var i__13738 = (0);
while(true){
if((i__13738 < count__13737)){
var map__13768 = chunk__13736.cljs$core$IIndexed$_nth$arity$2(null, i__13738);
var map__13768__$1 = cljs.core.__destructure_map(map__13768);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13768__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__13996 = seq__13734;
var G__13997 = chunk__13736;
var G__13998 = count__13737;
var G__13999 = (i__13738 + (1));
seq__13734 = G__13996;
chunk__13736 = G__13997;
count__13737 = G__13998;
i__13738 = G__13999;
continue;
} else {
var G__14005 = seq__13734;
var G__14006 = chunk__13736;
var G__14008 = count__13737;
var G__14009 = (i__13738 + (1));
seq__13734 = G__14005;
chunk__13736 = G__14006;
count__13737 = G__14008;
i__13738 = G__14009;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13734);
if(temp__5804__auto__){
var seq__13734__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13734__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13734__$1);
var G__14021 = cljs.core.chunk_rest(seq__13734__$1);
var G__14022 = c__5525__auto__;
var G__14023 = cljs.core.count(c__5525__auto__);
var G__14024 = (0);
seq__13734 = G__14021;
chunk__13736 = G__14022;
count__13737 = G__14023;
i__13738 = G__14024;
continue;
} else {
var map__13790 = cljs.core.first(seq__13734__$1);
var map__13790__$1 = cljs.core.__destructure_map(map__13790);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13790__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__14025 = cljs.core.next(seq__13734__$1);
var G__14026 = null;
var G__14027 = (0);
var G__14028 = (0);
seq__13734 = G__14025;
chunk__13736 = G__14026;
count__13737 = G__14027;
i__13738 = G__14028;
continue;
} else {
var G__14029 = cljs.core.next(seq__13734__$1);
var G__14030 = null;
var G__14031 = (0);
var G__14032 = (0);
seq__13734 = G__14029;
chunk__13736 = G__14030;
count__13737 = G__14031;
i__13738 = G__14032;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
