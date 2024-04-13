goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20975 = arguments.length;
var i__5727__auto___20976 = (0);
while(true){
if((i__5727__auto___20976 < len__5726__auto___20975)){
args__5732__auto__.push((arguments[i__5727__auto___20976]));

var G__20977 = (i__5727__auto___20976 + (1));
i__5727__auto___20976 = G__20977;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20690){
var G__20691 = cljs.core.first(seq20690);
var seq20690__$1 = cljs.core.next(seq20690);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20691,seq20690__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20692 = cljs.core.seq(sources);
var chunk__20693 = null;
var count__20694 = (0);
var i__20695 = (0);
while(true){
if((i__20695 < count__20694)){
var map__20700 = chunk__20693.cljs$core$IIndexed$_nth$arity$2(null, i__20695);
var map__20700__$1 = cljs.core.__destructure_map(map__20700);
var src = map__20700__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20700__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20700__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20700__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20700__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20703){var e_20978 = e20703;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20978);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20978.message)].join('')));
}

var G__20979 = seq__20692;
var G__20980 = chunk__20693;
var G__20981 = count__20694;
var G__20982 = (i__20695 + (1));
seq__20692 = G__20979;
chunk__20693 = G__20980;
count__20694 = G__20981;
i__20695 = G__20982;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20692);
if(temp__5804__auto__){
var seq__20692__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20692__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20692__$1);
var G__20983 = cljs.core.chunk_rest(seq__20692__$1);
var G__20984 = c__5525__auto__;
var G__20985 = cljs.core.count(c__5525__auto__);
var G__20986 = (0);
seq__20692 = G__20983;
chunk__20693 = G__20984;
count__20694 = G__20985;
i__20695 = G__20986;
continue;
} else {
var map__20705 = cljs.core.first(seq__20692__$1);
var map__20705__$1 = cljs.core.__destructure_map(map__20705);
var src = map__20705__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20705__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20705__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20705__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20705__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20706){var e_20987 = e20706;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20987);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20987.message)].join('')));
}

var G__20988 = cljs.core.next(seq__20692__$1);
var G__20989 = null;
var G__20990 = (0);
var G__20991 = (0);
seq__20692 = G__20988;
chunk__20693 = G__20989;
count__20694 = G__20990;
i__20695 = G__20991;
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
var seq__20707 = cljs.core.seq(js_requires);
var chunk__20708 = null;
var count__20709 = (0);
var i__20710 = (0);
while(true){
if((i__20710 < count__20709)){
var js_ns = chunk__20708.cljs$core$IIndexed$_nth$arity$2(null, i__20710);
var require_str_20992 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20992);


var G__20993 = seq__20707;
var G__20994 = chunk__20708;
var G__20995 = count__20709;
var G__20996 = (i__20710 + (1));
seq__20707 = G__20993;
chunk__20708 = G__20994;
count__20709 = G__20995;
i__20710 = G__20996;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20707);
if(temp__5804__auto__){
var seq__20707__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20707__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20707__$1);
var G__20997 = cljs.core.chunk_rest(seq__20707__$1);
var G__20998 = c__5525__auto__;
var G__20999 = cljs.core.count(c__5525__auto__);
var G__21000 = (0);
seq__20707 = G__20997;
chunk__20708 = G__20998;
count__20709 = G__20999;
i__20710 = G__21000;
continue;
} else {
var js_ns = cljs.core.first(seq__20707__$1);
var require_str_21001 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21001);


var G__21002 = cljs.core.next(seq__20707__$1);
var G__21003 = null;
var G__21004 = (0);
var G__21005 = (0);
seq__20707 = G__21002;
chunk__20708 = G__21003;
count__20709 = G__21004;
i__20710 = G__21005;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20714){
var map__20715 = p__20714;
var map__20715__$1 = cljs.core.__destructure_map(map__20715);
var msg = map__20715__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20715__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20715__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20716(s__20717){
return (new cljs.core.LazySeq(null,(function (){
var s__20717__$1 = s__20717;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20717__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20722 = cljs.core.first(xs__6360__auto__);
var map__20722__$1 = cljs.core.__destructure_map(map__20722);
var src = map__20722__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20722__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20717__$1,map__20722,map__20722__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20715,map__20715__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20716_$_iter__20718(s__20719){
return (new cljs.core.LazySeq(null,((function (s__20717__$1,map__20722,map__20722__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20715,map__20715__$1,msg,info,reload_info){
return (function (){
var s__20719__$1 = s__20719;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20719__$1);
if(temp__5804__auto____$1){
var s__20719__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20719__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20719__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20721 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20720 = (0);
while(true){
if((i__20720 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20720);
cljs.core.chunk_append(b__20721,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21006 = (i__20720 + (1));
i__20720 = G__21006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20721),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20716_$_iter__20718(cljs.core.chunk_rest(s__20719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20721),null);
}
} else {
var warning = cljs.core.first(s__20719__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20716_$_iter__20718(cljs.core.rest(s__20719__$2)));
}
} else {
return null;
}
break;
}
});})(s__20717__$1,map__20722,map__20722__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20715,map__20715__$1,msg,info,reload_info))
,null,null));
});})(s__20717__$1,map__20722,map__20722__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20715,map__20715__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20716(cljs.core.rest(s__20717__$1)));
} else {
var G__21007 = cljs.core.rest(s__20717__$1);
s__20717__$1 = G__21007;
continue;
}
} else {
var G__21008 = cljs.core.rest(s__20717__$1);
s__20717__$1 = G__21008;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20723_21009 = cljs.core.seq(warnings);
var chunk__20724_21010 = null;
var count__20725_21011 = (0);
var i__20726_21012 = (0);
while(true){
if((i__20726_21012 < count__20725_21011)){
var map__20731_21013 = chunk__20724_21010.cljs$core$IIndexed$_nth$arity$2(null, i__20726_21012);
var map__20731_21014__$1 = cljs.core.__destructure_map(map__20731_21013);
var w_21015 = map__20731_21014__$1;
var msg_21016__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731_21014__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731_21014__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731_21014__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731_21014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21019)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21017),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21018),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21016__$1)].join(''));


var G__21020 = seq__20723_21009;
var G__21021 = chunk__20724_21010;
var G__21022 = count__20725_21011;
var G__21023 = (i__20726_21012 + (1));
seq__20723_21009 = G__21020;
chunk__20724_21010 = G__21021;
count__20725_21011 = G__21022;
i__20726_21012 = G__21023;
continue;
} else {
var temp__5804__auto___21024 = cljs.core.seq(seq__20723_21009);
if(temp__5804__auto___21024){
var seq__20723_21025__$1 = temp__5804__auto___21024;
if(cljs.core.chunked_seq_QMARK_(seq__20723_21025__$1)){
var c__5525__auto___21026 = cljs.core.chunk_first(seq__20723_21025__$1);
var G__21027 = cljs.core.chunk_rest(seq__20723_21025__$1);
var G__21028 = c__5525__auto___21026;
var G__21029 = cljs.core.count(c__5525__auto___21026);
var G__21030 = (0);
seq__20723_21009 = G__21027;
chunk__20724_21010 = G__21028;
count__20725_21011 = G__21029;
i__20726_21012 = G__21030;
continue;
} else {
var map__20732_21031 = cljs.core.first(seq__20723_21025__$1);
var map__20732_21032__$1 = cljs.core.__destructure_map(map__20732_21031);
var w_21033 = map__20732_21032__$1;
var msg_21034__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732_21032__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732_21032__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732_21032__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732_21032__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21037)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21035),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21036),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21034__$1)].join(''));


var G__21038 = cljs.core.next(seq__20723_21025__$1);
var G__21039 = null;
var G__21040 = (0);
var G__21041 = (0);
seq__20723_21009 = G__21038;
chunk__20724_21010 = G__21039;
count__20725_21011 = G__21040;
i__20726_21012 = G__21041;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20713_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20713_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20733){
var map__20734 = p__20733;
var map__20734__$1 = cljs.core.__destructure_map(map__20734);
var msg = map__20734__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20735 = cljs.core.seq(updates);
var chunk__20737 = null;
var count__20738 = (0);
var i__20739 = (0);
while(true){
if((i__20739 < count__20738)){
var path = chunk__20737.cljs$core$IIndexed$_nth$arity$2(null, i__20739);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20849_21042 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20853_21043 = null;
var count__20854_21044 = (0);
var i__20855_21045 = (0);
while(true){
if((i__20855_21045 < count__20854_21044)){
var node_21046 = chunk__20853_21043.cljs$core$IIndexed$_nth$arity$2(null, i__20855_21045);
if(cljs.core.not(node_21046.shadow$old)){
var path_match_21047 = shadow.cljs.devtools.client.browser.match_paths(node_21046.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21047)){
var new_link_21048 = (function (){var G__20881 = node_21046.cloneNode(true);
G__20881.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21047),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20881;
})();
(node_21046.shadow$old = true);

(new_link_21048.onload = ((function (seq__20849_21042,chunk__20853_21043,count__20854_21044,i__20855_21045,seq__20735,chunk__20737,count__20738,i__20739,new_link_21048,path_match_21047,node_21046,path,map__20734,map__20734__$1,msg,updates,reload_info){
return (function (e){
var seq__20882_21049 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20884_21050 = null;
var count__20885_21051 = (0);
var i__20886_21052 = (0);
while(true){
if((i__20886_21052 < count__20885_21051)){
var map__20890_21053 = chunk__20884_21050.cljs$core$IIndexed$_nth$arity$2(null, i__20886_21052);
var map__20890_21054__$1 = cljs.core.__destructure_map(map__20890_21053);
var task_21055 = map__20890_21054__$1;
var fn_str_21056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20890_21054__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20890_21054__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21058 = goog.getObjectByName(fn_str_21056,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21057)].join(''));

(fn_obj_21058.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21058.cljs$core$IFn$_invoke$arity$2(path,new_link_21048) : fn_obj_21058.call(null, path,new_link_21048));


var G__21059 = seq__20882_21049;
var G__21060 = chunk__20884_21050;
var G__21061 = count__20885_21051;
var G__21062 = (i__20886_21052 + (1));
seq__20882_21049 = G__21059;
chunk__20884_21050 = G__21060;
count__20885_21051 = G__21061;
i__20886_21052 = G__21062;
continue;
} else {
var temp__5804__auto___21063 = cljs.core.seq(seq__20882_21049);
if(temp__5804__auto___21063){
var seq__20882_21064__$1 = temp__5804__auto___21063;
if(cljs.core.chunked_seq_QMARK_(seq__20882_21064__$1)){
var c__5525__auto___21065 = cljs.core.chunk_first(seq__20882_21064__$1);
var G__21066 = cljs.core.chunk_rest(seq__20882_21064__$1);
var G__21067 = c__5525__auto___21065;
var G__21068 = cljs.core.count(c__5525__auto___21065);
var G__21069 = (0);
seq__20882_21049 = G__21066;
chunk__20884_21050 = G__21067;
count__20885_21051 = G__21068;
i__20886_21052 = G__21069;
continue;
} else {
var map__20891_21070 = cljs.core.first(seq__20882_21064__$1);
var map__20891_21071__$1 = cljs.core.__destructure_map(map__20891_21070);
var task_21072 = map__20891_21071__$1;
var fn_str_21073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891_21071__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891_21071__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21075 = goog.getObjectByName(fn_str_21073,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21074)].join(''));

(fn_obj_21075.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21075.cljs$core$IFn$_invoke$arity$2(path,new_link_21048) : fn_obj_21075.call(null, path,new_link_21048));


var G__21076 = cljs.core.next(seq__20882_21064__$1);
var G__21077 = null;
var G__21078 = (0);
var G__21079 = (0);
seq__20882_21049 = G__21076;
chunk__20884_21050 = G__21077;
count__20885_21051 = G__21078;
i__20886_21052 = G__21079;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21046);
});})(seq__20849_21042,chunk__20853_21043,count__20854_21044,i__20855_21045,seq__20735,chunk__20737,count__20738,i__20739,new_link_21048,path_match_21047,node_21046,path,map__20734,map__20734__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21047], 0));

goog.dom.insertSiblingAfter(new_link_21048,node_21046);


var G__21080 = seq__20849_21042;
var G__21081 = chunk__20853_21043;
var G__21082 = count__20854_21044;
var G__21083 = (i__20855_21045 + (1));
seq__20849_21042 = G__21080;
chunk__20853_21043 = G__21081;
count__20854_21044 = G__21082;
i__20855_21045 = G__21083;
continue;
} else {
var G__21084 = seq__20849_21042;
var G__21085 = chunk__20853_21043;
var G__21086 = count__20854_21044;
var G__21087 = (i__20855_21045 + (1));
seq__20849_21042 = G__21084;
chunk__20853_21043 = G__21085;
count__20854_21044 = G__21086;
i__20855_21045 = G__21087;
continue;
}
} else {
var G__21088 = seq__20849_21042;
var G__21089 = chunk__20853_21043;
var G__21090 = count__20854_21044;
var G__21091 = (i__20855_21045 + (1));
seq__20849_21042 = G__21088;
chunk__20853_21043 = G__21089;
count__20854_21044 = G__21090;
i__20855_21045 = G__21091;
continue;
}
} else {
var temp__5804__auto___21092 = cljs.core.seq(seq__20849_21042);
if(temp__5804__auto___21092){
var seq__20849_21093__$1 = temp__5804__auto___21092;
if(cljs.core.chunked_seq_QMARK_(seq__20849_21093__$1)){
var c__5525__auto___21094 = cljs.core.chunk_first(seq__20849_21093__$1);
var G__21095 = cljs.core.chunk_rest(seq__20849_21093__$1);
var G__21096 = c__5525__auto___21094;
var G__21097 = cljs.core.count(c__5525__auto___21094);
var G__21098 = (0);
seq__20849_21042 = G__21095;
chunk__20853_21043 = G__21096;
count__20854_21044 = G__21097;
i__20855_21045 = G__21098;
continue;
} else {
var node_21099 = cljs.core.first(seq__20849_21093__$1);
if(cljs.core.not(node_21099.shadow$old)){
var path_match_21100 = shadow.cljs.devtools.client.browser.match_paths(node_21099.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21100)){
var new_link_21101 = (function (){var G__20892 = node_21099.cloneNode(true);
G__20892.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21100),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20892;
})();
(node_21099.shadow$old = true);

(new_link_21101.onload = ((function (seq__20849_21042,chunk__20853_21043,count__20854_21044,i__20855_21045,seq__20735,chunk__20737,count__20738,i__20739,new_link_21101,path_match_21100,node_21099,seq__20849_21093__$1,temp__5804__auto___21092,path,map__20734,map__20734__$1,msg,updates,reload_info){
return (function (e){
var seq__20893_21102 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20895_21103 = null;
var count__20896_21104 = (0);
var i__20897_21105 = (0);
while(true){
if((i__20897_21105 < count__20896_21104)){
var map__20901_21106 = chunk__20895_21103.cljs$core$IIndexed$_nth$arity$2(null, i__20897_21105);
var map__20901_21107__$1 = cljs.core.__destructure_map(map__20901_21106);
var task_21108 = map__20901_21107__$1;
var fn_str_21109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20901_21107__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20901_21107__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21111 = goog.getObjectByName(fn_str_21109,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21110)].join(''));

(fn_obj_21111.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21111.cljs$core$IFn$_invoke$arity$2(path,new_link_21101) : fn_obj_21111.call(null, path,new_link_21101));


var G__21112 = seq__20893_21102;
var G__21113 = chunk__20895_21103;
var G__21114 = count__20896_21104;
var G__21115 = (i__20897_21105 + (1));
seq__20893_21102 = G__21112;
chunk__20895_21103 = G__21113;
count__20896_21104 = G__21114;
i__20897_21105 = G__21115;
continue;
} else {
var temp__5804__auto___21116__$1 = cljs.core.seq(seq__20893_21102);
if(temp__5804__auto___21116__$1){
var seq__20893_21117__$1 = temp__5804__auto___21116__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20893_21117__$1)){
var c__5525__auto___21118 = cljs.core.chunk_first(seq__20893_21117__$1);
var G__21119 = cljs.core.chunk_rest(seq__20893_21117__$1);
var G__21120 = c__5525__auto___21118;
var G__21121 = cljs.core.count(c__5525__auto___21118);
var G__21122 = (0);
seq__20893_21102 = G__21119;
chunk__20895_21103 = G__21120;
count__20896_21104 = G__21121;
i__20897_21105 = G__21122;
continue;
} else {
var map__20902_21123 = cljs.core.first(seq__20893_21117__$1);
var map__20902_21124__$1 = cljs.core.__destructure_map(map__20902_21123);
var task_21125 = map__20902_21124__$1;
var fn_str_21126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20902_21124__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20902_21124__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21128 = goog.getObjectByName(fn_str_21126,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21127)].join(''));

(fn_obj_21128.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21128.cljs$core$IFn$_invoke$arity$2(path,new_link_21101) : fn_obj_21128.call(null, path,new_link_21101));


var G__21129 = cljs.core.next(seq__20893_21117__$1);
var G__21130 = null;
var G__21131 = (0);
var G__21132 = (0);
seq__20893_21102 = G__21129;
chunk__20895_21103 = G__21130;
count__20896_21104 = G__21131;
i__20897_21105 = G__21132;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21099);
});})(seq__20849_21042,chunk__20853_21043,count__20854_21044,i__20855_21045,seq__20735,chunk__20737,count__20738,i__20739,new_link_21101,path_match_21100,node_21099,seq__20849_21093__$1,temp__5804__auto___21092,path,map__20734,map__20734__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21100], 0));

goog.dom.insertSiblingAfter(new_link_21101,node_21099);


var G__21133 = cljs.core.next(seq__20849_21093__$1);
var G__21134 = null;
var G__21135 = (0);
var G__21136 = (0);
seq__20849_21042 = G__21133;
chunk__20853_21043 = G__21134;
count__20854_21044 = G__21135;
i__20855_21045 = G__21136;
continue;
} else {
var G__21137 = cljs.core.next(seq__20849_21093__$1);
var G__21138 = null;
var G__21139 = (0);
var G__21140 = (0);
seq__20849_21042 = G__21137;
chunk__20853_21043 = G__21138;
count__20854_21044 = G__21139;
i__20855_21045 = G__21140;
continue;
}
} else {
var G__21141 = cljs.core.next(seq__20849_21093__$1);
var G__21142 = null;
var G__21143 = (0);
var G__21144 = (0);
seq__20849_21042 = G__21141;
chunk__20853_21043 = G__21142;
count__20854_21044 = G__21143;
i__20855_21045 = G__21144;
continue;
}
}
} else {
}
}
break;
}


var G__21145 = seq__20735;
var G__21146 = chunk__20737;
var G__21147 = count__20738;
var G__21148 = (i__20739 + (1));
seq__20735 = G__21145;
chunk__20737 = G__21146;
count__20738 = G__21147;
i__20739 = G__21148;
continue;
} else {
var G__21149 = seq__20735;
var G__21150 = chunk__20737;
var G__21151 = count__20738;
var G__21152 = (i__20739 + (1));
seq__20735 = G__21149;
chunk__20737 = G__21150;
count__20738 = G__21151;
i__20739 = G__21152;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20735);
if(temp__5804__auto__){
var seq__20735__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20735__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20735__$1);
var G__21153 = cljs.core.chunk_rest(seq__20735__$1);
var G__21154 = c__5525__auto__;
var G__21155 = cljs.core.count(c__5525__auto__);
var G__21156 = (0);
seq__20735 = G__21153;
chunk__20737 = G__21154;
count__20738 = G__21155;
i__20739 = G__21156;
continue;
} else {
var path = cljs.core.first(seq__20735__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20903_21157 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20907_21158 = null;
var count__20908_21159 = (0);
var i__20909_21160 = (0);
while(true){
if((i__20909_21160 < count__20908_21159)){
var node_21161 = chunk__20907_21158.cljs$core$IIndexed$_nth$arity$2(null, i__20909_21160);
if(cljs.core.not(node_21161.shadow$old)){
var path_match_21162 = shadow.cljs.devtools.client.browser.match_paths(node_21161.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21162)){
var new_link_21163 = (function (){var G__20935 = node_21161.cloneNode(true);
G__20935.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21162),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20935;
})();
(node_21161.shadow$old = true);

(new_link_21163.onload = ((function (seq__20903_21157,chunk__20907_21158,count__20908_21159,i__20909_21160,seq__20735,chunk__20737,count__20738,i__20739,new_link_21163,path_match_21162,node_21161,path,seq__20735__$1,temp__5804__auto__,map__20734,map__20734__$1,msg,updates,reload_info){
return (function (e){
var seq__20936_21164 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20938_21165 = null;
var count__20939_21166 = (0);
var i__20940_21167 = (0);
while(true){
if((i__20940_21167 < count__20939_21166)){
var map__20944_21168 = chunk__20938_21165.cljs$core$IIndexed$_nth$arity$2(null, i__20940_21167);
var map__20944_21169__$1 = cljs.core.__destructure_map(map__20944_21168);
var task_21170 = map__20944_21169__$1;
var fn_str_21171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944_21169__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20944_21169__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21173 = goog.getObjectByName(fn_str_21171,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21172)].join(''));

(fn_obj_21173.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21173.cljs$core$IFn$_invoke$arity$2(path,new_link_21163) : fn_obj_21173.call(null, path,new_link_21163));


var G__21174 = seq__20936_21164;
var G__21175 = chunk__20938_21165;
var G__21176 = count__20939_21166;
var G__21177 = (i__20940_21167 + (1));
seq__20936_21164 = G__21174;
chunk__20938_21165 = G__21175;
count__20939_21166 = G__21176;
i__20940_21167 = G__21177;
continue;
} else {
var temp__5804__auto___21178__$1 = cljs.core.seq(seq__20936_21164);
if(temp__5804__auto___21178__$1){
var seq__20936_21179__$1 = temp__5804__auto___21178__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20936_21179__$1)){
var c__5525__auto___21180 = cljs.core.chunk_first(seq__20936_21179__$1);
var G__21181 = cljs.core.chunk_rest(seq__20936_21179__$1);
var G__21182 = c__5525__auto___21180;
var G__21183 = cljs.core.count(c__5525__auto___21180);
var G__21184 = (0);
seq__20936_21164 = G__21181;
chunk__20938_21165 = G__21182;
count__20939_21166 = G__21183;
i__20940_21167 = G__21184;
continue;
} else {
var map__20945_21185 = cljs.core.first(seq__20936_21179__$1);
var map__20945_21186__$1 = cljs.core.__destructure_map(map__20945_21185);
var task_21187 = map__20945_21186__$1;
var fn_str_21188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945_21186__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945_21186__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21190 = goog.getObjectByName(fn_str_21188,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21189)].join(''));

(fn_obj_21190.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21190.cljs$core$IFn$_invoke$arity$2(path,new_link_21163) : fn_obj_21190.call(null, path,new_link_21163));


var G__21191 = cljs.core.next(seq__20936_21179__$1);
var G__21192 = null;
var G__21193 = (0);
var G__21194 = (0);
seq__20936_21164 = G__21191;
chunk__20938_21165 = G__21192;
count__20939_21166 = G__21193;
i__20940_21167 = G__21194;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21161);
});})(seq__20903_21157,chunk__20907_21158,count__20908_21159,i__20909_21160,seq__20735,chunk__20737,count__20738,i__20739,new_link_21163,path_match_21162,node_21161,path,seq__20735__$1,temp__5804__auto__,map__20734,map__20734__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21162], 0));

goog.dom.insertSiblingAfter(new_link_21163,node_21161);


var G__21195 = seq__20903_21157;
var G__21196 = chunk__20907_21158;
var G__21197 = count__20908_21159;
var G__21198 = (i__20909_21160 + (1));
seq__20903_21157 = G__21195;
chunk__20907_21158 = G__21196;
count__20908_21159 = G__21197;
i__20909_21160 = G__21198;
continue;
} else {
var G__21199 = seq__20903_21157;
var G__21200 = chunk__20907_21158;
var G__21201 = count__20908_21159;
var G__21202 = (i__20909_21160 + (1));
seq__20903_21157 = G__21199;
chunk__20907_21158 = G__21200;
count__20908_21159 = G__21201;
i__20909_21160 = G__21202;
continue;
}
} else {
var G__21203 = seq__20903_21157;
var G__21204 = chunk__20907_21158;
var G__21205 = count__20908_21159;
var G__21206 = (i__20909_21160 + (1));
seq__20903_21157 = G__21203;
chunk__20907_21158 = G__21204;
count__20908_21159 = G__21205;
i__20909_21160 = G__21206;
continue;
}
} else {
var temp__5804__auto___21207__$1 = cljs.core.seq(seq__20903_21157);
if(temp__5804__auto___21207__$1){
var seq__20903_21208__$1 = temp__5804__auto___21207__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20903_21208__$1)){
var c__5525__auto___21209 = cljs.core.chunk_first(seq__20903_21208__$1);
var G__21210 = cljs.core.chunk_rest(seq__20903_21208__$1);
var G__21211 = c__5525__auto___21209;
var G__21212 = cljs.core.count(c__5525__auto___21209);
var G__21213 = (0);
seq__20903_21157 = G__21210;
chunk__20907_21158 = G__21211;
count__20908_21159 = G__21212;
i__20909_21160 = G__21213;
continue;
} else {
var node_21214 = cljs.core.first(seq__20903_21208__$1);
if(cljs.core.not(node_21214.shadow$old)){
var path_match_21215 = shadow.cljs.devtools.client.browser.match_paths(node_21214.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21215)){
var new_link_21216 = (function (){var G__20946 = node_21214.cloneNode(true);
G__20946.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21215),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20946;
})();
(node_21214.shadow$old = true);

(new_link_21216.onload = ((function (seq__20903_21157,chunk__20907_21158,count__20908_21159,i__20909_21160,seq__20735,chunk__20737,count__20738,i__20739,new_link_21216,path_match_21215,node_21214,seq__20903_21208__$1,temp__5804__auto___21207__$1,path,seq__20735__$1,temp__5804__auto__,map__20734,map__20734__$1,msg,updates,reload_info){
return (function (e){
var seq__20947_21217 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20949_21218 = null;
var count__20950_21219 = (0);
var i__20951_21220 = (0);
while(true){
if((i__20951_21220 < count__20950_21219)){
var map__20955_21221 = chunk__20949_21218.cljs$core$IIndexed$_nth$arity$2(null, i__20951_21220);
var map__20955_21222__$1 = cljs.core.__destructure_map(map__20955_21221);
var task_21223 = map__20955_21222__$1;
var fn_str_21224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20955_21222__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20955_21222__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21226 = goog.getObjectByName(fn_str_21224,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21225)].join(''));

(fn_obj_21226.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21226.cljs$core$IFn$_invoke$arity$2(path,new_link_21216) : fn_obj_21226.call(null, path,new_link_21216));


var G__21227 = seq__20947_21217;
var G__21228 = chunk__20949_21218;
var G__21229 = count__20950_21219;
var G__21230 = (i__20951_21220 + (1));
seq__20947_21217 = G__21227;
chunk__20949_21218 = G__21228;
count__20950_21219 = G__21229;
i__20951_21220 = G__21230;
continue;
} else {
var temp__5804__auto___21231__$2 = cljs.core.seq(seq__20947_21217);
if(temp__5804__auto___21231__$2){
var seq__20947_21232__$1 = temp__5804__auto___21231__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20947_21232__$1)){
var c__5525__auto___21233 = cljs.core.chunk_first(seq__20947_21232__$1);
var G__21234 = cljs.core.chunk_rest(seq__20947_21232__$1);
var G__21235 = c__5525__auto___21233;
var G__21236 = cljs.core.count(c__5525__auto___21233);
var G__21237 = (0);
seq__20947_21217 = G__21234;
chunk__20949_21218 = G__21235;
count__20950_21219 = G__21236;
i__20951_21220 = G__21237;
continue;
} else {
var map__20956_21238 = cljs.core.first(seq__20947_21232__$1);
var map__20956_21239__$1 = cljs.core.__destructure_map(map__20956_21238);
var task_21240 = map__20956_21239__$1;
var fn_str_21241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20956_21239__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20956_21239__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21243 = goog.getObjectByName(fn_str_21241,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21242)].join(''));

(fn_obj_21243.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21243.cljs$core$IFn$_invoke$arity$2(path,new_link_21216) : fn_obj_21243.call(null, path,new_link_21216));


var G__21244 = cljs.core.next(seq__20947_21232__$1);
var G__21245 = null;
var G__21246 = (0);
var G__21247 = (0);
seq__20947_21217 = G__21244;
chunk__20949_21218 = G__21245;
count__20950_21219 = G__21246;
i__20951_21220 = G__21247;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21214);
});})(seq__20903_21157,chunk__20907_21158,count__20908_21159,i__20909_21160,seq__20735,chunk__20737,count__20738,i__20739,new_link_21216,path_match_21215,node_21214,seq__20903_21208__$1,temp__5804__auto___21207__$1,path,seq__20735__$1,temp__5804__auto__,map__20734,map__20734__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21215], 0));

goog.dom.insertSiblingAfter(new_link_21216,node_21214);


var G__21248 = cljs.core.next(seq__20903_21208__$1);
var G__21249 = null;
var G__21250 = (0);
var G__21251 = (0);
seq__20903_21157 = G__21248;
chunk__20907_21158 = G__21249;
count__20908_21159 = G__21250;
i__20909_21160 = G__21251;
continue;
} else {
var G__21252 = cljs.core.next(seq__20903_21208__$1);
var G__21253 = null;
var G__21254 = (0);
var G__21255 = (0);
seq__20903_21157 = G__21252;
chunk__20907_21158 = G__21253;
count__20908_21159 = G__21254;
i__20909_21160 = G__21255;
continue;
}
} else {
var G__21256 = cljs.core.next(seq__20903_21208__$1);
var G__21257 = null;
var G__21258 = (0);
var G__21259 = (0);
seq__20903_21157 = G__21256;
chunk__20907_21158 = G__21257;
count__20908_21159 = G__21258;
i__20909_21160 = G__21259;
continue;
}
}
} else {
}
}
break;
}


var G__21260 = cljs.core.next(seq__20735__$1);
var G__21261 = null;
var G__21262 = (0);
var G__21263 = (0);
seq__20735 = G__21260;
chunk__20737 = G__21261;
count__20738 = G__21262;
i__20739 = G__21263;
continue;
} else {
var G__21264 = cljs.core.next(seq__20735__$1);
var G__21265 = null;
var G__21266 = (0);
var G__21267 = (0);
seq__20735 = G__21264;
chunk__20737 = G__21265;
count__20738 = G__21266;
i__20739 = G__21267;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__20957){
var map__20958 = p__20957;
var map__20958__$1 = cljs.core.__destructure_map(map__20958);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20958__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20959,done,error){
var map__20960 = p__20959;
var map__20960__$1 = cljs.core.__destructure_map(map__20960);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20960__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20961,done,error){
var map__20962 = p__20961;
var map__20962__$1 = cljs.core.__destructure_map(map__20962);
var msg = map__20962__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20963){
var map__20964 = p__20963;
var map__20964__$1 = cljs.core.__destructure_map(map__20964);
var src = map__20964__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20964__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20965 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20965) : done.call(null, G__20965));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20966){
var map__20967 = p__20966;
var map__20967__$1 = cljs.core.__destructure_map(map__20967);
var msg__$1 = map__20967__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20967__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e20968){var ex = e20968;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20969){
var map__20970 = p__20969;
var map__20970__$1 = cljs.core.__destructure_map(map__20970);
var env = map__20970__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20970__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20971){
var map__20972 = p__20971;
var map__20972__$1 = cljs.core.__destructure_map(map__20972);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__20973){
var map__20974 = p__20973;
var map__20974__$1 = cljs.core.__destructure_map(map__20974);
var svc = map__20974__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
