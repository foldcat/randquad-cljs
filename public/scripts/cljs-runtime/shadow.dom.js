goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19158 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19158(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19166 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19166(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17949 = coll;
var G__17950 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17949,G__17950) : shadow.dom.lazy_native_coll_seq.call(null, G__17949,G__17950));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18035 = arguments.length;
switch (G__18035) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18045 = arguments.length;
switch (G__18045) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18063 = arguments.length;
switch (G__18063) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18073 = arguments.length;
switch (G__18073) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18089 = arguments.length;
switch (G__18089) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18099 = arguments.length;
switch (G__18099) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e18109){if((e18109 instanceof Object)){
var e = e18109;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18109;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18121 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18122 = null;
var count__18123 = (0);
var i__18124 = (0);
while(true){
if((i__18124 < count__18123)){
var el = chunk__18122.cljs$core$IIndexed$_nth$arity$2(null, i__18124);
var handler_19223__$1 = ((function (seq__18121,chunk__18122,count__18123,i__18124,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18121,chunk__18122,count__18123,i__18124,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19223__$1);


var G__19225 = seq__18121;
var G__19226 = chunk__18122;
var G__19227 = count__18123;
var G__19228 = (i__18124 + (1));
seq__18121 = G__19225;
chunk__18122 = G__19226;
count__18123 = G__19227;
i__18124 = G__19228;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18121);
if(temp__5804__auto__){
var seq__18121__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18121__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18121__$1);
var G__19231 = cljs.core.chunk_rest(seq__18121__$1);
var G__19232 = c__5525__auto__;
var G__19233 = cljs.core.count(c__5525__auto__);
var G__19234 = (0);
seq__18121 = G__19231;
chunk__18122 = G__19232;
count__18123 = G__19233;
i__18124 = G__19234;
continue;
} else {
var el = cljs.core.first(seq__18121__$1);
var handler_19236__$1 = ((function (seq__18121,chunk__18122,count__18123,i__18124,el,seq__18121__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__18121,chunk__18122,count__18123,i__18124,el,seq__18121__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19236__$1);


var G__19239 = cljs.core.next(seq__18121__$1);
var G__19240 = null;
var G__19241 = (0);
var G__19242 = (0);
seq__18121 = G__19239;
chunk__18122 = G__19240;
count__18123 = G__19241;
i__18124 = G__19242;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18141 = arguments.length;
switch (G__18141) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18153 = cljs.core.seq(events);
var chunk__18154 = null;
var count__18155 = (0);
var i__18156 = (0);
while(true){
if((i__18156 < count__18155)){
var vec__18200 = chunk__18154.cljs$core$IIndexed$_nth$arity$2(null, i__18156);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19250 = seq__18153;
var G__19251 = chunk__18154;
var G__19252 = count__18155;
var G__19253 = (i__18156 + (1));
seq__18153 = G__19250;
chunk__18154 = G__19251;
count__18155 = G__19252;
i__18156 = G__19253;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18153);
if(temp__5804__auto__){
var seq__18153__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18153__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18153__$1);
var G__19255 = cljs.core.chunk_rest(seq__18153__$1);
var G__19256 = c__5525__auto__;
var G__19257 = cljs.core.count(c__5525__auto__);
var G__19258 = (0);
seq__18153 = G__19255;
chunk__18154 = G__19256;
count__18155 = G__19257;
i__18156 = G__19258;
continue;
} else {
var vec__18212 = cljs.core.first(seq__18153__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19259 = cljs.core.next(seq__18153__$1);
var G__19260 = null;
var G__19261 = (0);
var G__19262 = (0);
seq__18153 = G__19259;
chunk__18154 = G__19260;
count__18155 = G__19261;
i__18156 = G__19262;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18222 = cljs.core.seq(styles);
var chunk__18223 = null;
var count__18224 = (0);
var i__18225 = (0);
while(true){
if((i__18225 < count__18224)){
var vec__18253 = chunk__18223.cljs$core$IIndexed$_nth$arity$2(null, i__18225);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18253,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19266 = seq__18222;
var G__19267 = chunk__18223;
var G__19268 = count__18224;
var G__19269 = (i__18225 + (1));
seq__18222 = G__19266;
chunk__18223 = G__19267;
count__18224 = G__19268;
i__18225 = G__19269;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18222);
if(temp__5804__auto__){
var seq__18222__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18222__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18222__$1);
var G__19270 = cljs.core.chunk_rest(seq__18222__$1);
var G__19271 = c__5525__auto__;
var G__19272 = cljs.core.count(c__5525__auto__);
var G__19273 = (0);
seq__18222 = G__19270;
chunk__18223 = G__19271;
count__18224 = G__19272;
i__18225 = G__19273;
continue;
} else {
var vec__18263 = cljs.core.first(seq__18222__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18263,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18263,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19276 = cljs.core.next(seq__18222__$1);
var G__19277 = null;
var G__19278 = (0);
var G__19279 = (0);
seq__18222 = G__19276;
chunk__18223 = G__19277;
count__18224 = G__19278;
i__18225 = G__19279;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18299_19281 = key;
var G__18299_19282__$1 = (((G__18299_19281 instanceof cljs.core.Keyword))?G__18299_19281.fqn:null);
switch (G__18299_19282__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19288 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_19288,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_19288,"aria-");
}
})())){
el.setAttribute(ks_19288,value);
} else {
(el[ks_19288] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18348){
var map__18349 = p__18348;
var map__18349__$1 = cljs.core.__destructure_map(map__18349);
var props = map__18349__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18349__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18354 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18354,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18354,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18354,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18359 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18359,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18359;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18368 = arguments.length;
switch (G__18368) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18379){
var vec__18380 = p__18379;
var seq__18381 = cljs.core.seq(vec__18380);
var first__18382 = cljs.core.first(seq__18381);
var seq__18381__$1 = cljs.core.next(seq__18381);
var nn = first__18382;
var first__18382__$1 = cljs.core.first(seq__18381__$1);
var seq__18381__$2 = cljs.core.next(seq__18381__$1);
var np = first__18382__$1;
var nc = seq__18381__$2;
var node = vec__18380;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18390 = nn;
var G__18391 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18390,G__18391) : create_fn.call(null, G__18390,G__18391));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18392 = nn;
var G__18393 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18392,G__18393) : create_fn.call(null, G__18392,G__18393));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18395 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18395,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18395,(1),null);
var seq__18398_19313 = cljs.core.seq(node_children);
var chunk__18399_19314 = null;
var count__18400_19315 = (0);
var i__18401_19316 = (0);
while(true){
if((i__18401_19316 < count__18400_19315)){
var child_struct_19318 = chunk__18399_19314.cljs$core$IIndexed$_nth$arity$2(null, i__18401_19316);
var children_19319 = shadow.dom.dom_node(child_struct_19318);
if(cljs.core.seq_QMARK_(children_19319)){
var seq__18453_19320 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19319));
var chunk__18455_19321 = null;
var count__18456_19322 = (0);
var i__18457_19323 = (0);
while(true){
if((i__18457_19323 < count__18456_19322)){
var child_19325 = chunk__18455_19321.cljs$core$IIndexed$_nth$arity$2(null, i__18457_19323);
if(cljs.core.truth_(child_19325)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19325);


var G__19327 = seq__18453_19320;
var G__19328 = chunk__18455_19321;
var G__19329 = count__18456_19322;
var G__19330 = (i__18457_19323 + (1));
seq__18453_19320 = G__19327;
chunk__18455_19321 = G__19328;
count__18456_19322 = G__19329;
i__18457_19323 = G__19330;
continue;
} else {
var G__19331 = seq__18453_19320;
var G__19332 = chunk__18455_19321;
var G__19333 = count__18456_19322;
var G__19334 = (i__18457_19323 + (1));
seq__18453_19320 = G__19331;
chunk__18455_19321 = G__19332;
count__18456_19322 = G__19333;
i__18457_19323 = G__19334;
continue;
}
} else {
var temp__5804__auto___19335 = cljs.core.seq(seq__18453_19320);
if(temp__5804__auto___19335){
var seq__18453_19336__$1 = temp__5804__auto___19335;
if(cljs.core.chunked_seq_QMARK_(seq__18453_19336__$1)){
var c__5525__auto___19337 = cljs.core.chunk_first(seq__18453_19336__$1);
var G__19338 = cljs.core.chunk_rest(seq__18453_19336__$1);
var G__19339 = c__5525__auto___19337;
var G__19340 = cljs.core.count(c__5525__auto___19337);
var G__19341 = (0);
seq__18453_19320 = G__19338;
chunk__18455_19321 = G__19339;
count__18456_19322 = G__19340;
i__18457_19323 = G__19341;
continue;
} else {
var child_19342 = cljs.core.first(seq__18453_19336__$1);
if(cljs.core.truth_(child_19342)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19342);


var G__19344 = cljs.core.next(seq__18453_19336__$1);
var G__19345 = null;
var G__19346 = (0);
var G__19347 = (0);
seq__18453_19320 = G__19344;
chunk__18455_19321 = G__19345;
count__18456_19322 = G__19346;
i__18457_19323 = G__19347;
continue;
} else {
var G__19349 = cljs.core.next(seq__18453_19336__$1);
var G__19350 = null;
var G__19351 = (0);
var G__19352 = (0);
seq__18453_19320 = G__19349;
chunk__18455_19321 = G__19350;
count__18456_19322 = G__19351;
i__18457_19323 = G__19352;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19319);
}


var G__19354 = seq__18398_19313;
var G__19355 = chunk__18399_19314;
var G__19356 = count__18400_19315;
var G__19357 = (i__18401_19316 + (1));
seq__18398_19313 = G__19354;
chunk__18399_19314 = G__19355;
count__18400_19315 = G__19356;
i__18401_19316 = G__19357;
continue;
} else {
var temp__5804__auto___19358 = cljs.core.seq(seq__18398_19313);
if(temp__5804__auto___19358){
var seq__18398_19359__$1 = temp__5804__auto___19358;
if(cljs.core.chunked_seq_QMARK_(seq__18398_19359__$1)){
var c__5525__auto___19360 = cljs.core.chunk_first(seq__18398_19359__$1);
var G__19361 = cljs.core.chunk_rest(seq__18398_19359__$1);
var G__19362 = c__5525__auto___19360;
var G__19363 = cljs.core.count(c__5525__auto___19360);
var G__19364 = (0);
seq__18398_19313 = G__19361;
chunk__18399_19314 = G__19362;
count__18400_19315 = G__19363;
i__18401_19316 = G__19364;
continue;
} else {
var child_struct_19367 = cljs.core.first(seq__18398_19359__$1);
var children_19368 = shadow.dom.dom_node(child_struct_19367);
if(cljs.core.seq_QMARK_(children_19368)){
var seq__18471_19369 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19368));
var chunk__18473_19370 = null;
var count__18474_19371 = (0);
var i__18475_19372 = (0);
while(true){
if((i__18475_19372 < count__18474_19371)){
var child_19373 = chunk__18473_19370.cljs$core$IIndexed$_nth$arity$2(null, i__18475_19372);
if(cljs.core.truth_(child_19373)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19373);


var G__19376 = seq__18471_19369;
var G__19377 = chunk__18473_19370;
var G__19378 = count__18474_19371;
var G__19379 = (i__18475_19372 + (1));
seq__18471_19369 = G__19376;
chunk__18473_19370 = G__19377;
count__18474_19371 = G__19378;
i__18475_19372 = G__19379;
continue;
} else {
var G__19380 = seq__18471_19369;
var G__19381 = chunk__18473_19370;
var G__19382 = count__18474_19371;
var G__19383 = (i__18475_19372 + (1));
seq__18471_19369 = G__19380;
chunk__18473_19370 = G__19381;
count__18474_19371 = G__19382;
i__18475_19372 = G__19383;
continue;
}
} else {
var temp__5804__auto___19385__$1 = cljs.core.seq(seq__18471_19369);
if(temp__5804__auto___19385__$1){
var seq__18471_19386__$1 = temp__5804__auto___19385__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18471_19386__$1)){
var c__5525__auto___19387 = cljs.core.chunk_first(seq__18471_19386__$1);
var G__19389 = cljs.core.chunk_rest(seq__18471_19386__$1);
var G__19390 = c__5525__auto___19387;
var G__19391 = cljs.core.count(c__5525__auto___19387);
var G__19392 = (0);
seq__18471_19369 = G__19389;
chunk__18473_19370 = G__19390;
count__18474_19371 = G__19391;
i__18475_19372 = G__19392;
continue;
} else {
var child_19393 = cljs.core.first(seq__18471_19386__$1);
if(cljs.core.truth_(child_19393)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19393);


var G__19396 = cljs.core.next(seq__18471_19386__$1);
var G__19397 = null;
var G__19398 = (0);
var G__19399 = (0);
seq__18471_19369 = G__19396;
chunk__18473_19370 = G__19397;
count__18474_19371 = G__19398;
i__18475_19372 = G__19399;
continue;
} else {
var G__19400 = cljs.core.next(seq__18471_19386__$1);
var G__19401 = null;
var G__19402 = (0);
var G__19403 = (0);
seq__18471_19369 = G__19400;
chunk__18473_19370 = G__19401;
count__18474_19371 = G__19402;
i__18475_19372 = G__19403;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19368);
}


var G__19405 = cljs.core.next(seq__18398_19359__$1);
var G__19406 = null;
var G__19407 = (0);
var G__19408 = (0);
seq__18398_19313 = G__19405;
chunk__18399_19314 = G__19406;
count__18400_19315 = G__19407;
i__18401_19316 = G__19408;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18488 = cljs.core.seq(node);
var chunk__18489 = null;
var count__18490 = (0);
var i__18491 = (0);
while(true){
if((i__18491 < count__18490)){
var n = chunk__18489.cljs$core$IIndexed$_nth$arity$2(null, i__18491);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19415 = seq__18488;
var G__19416 = chunk__18489;
var G__19417 = count__18490;
var G__19418 = (i__18491 + (1));
seq__18488 = G__19415;
chunk__18489 = G__19416;
count__18490 = G__19417;
i__18491 = G__19418;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18488);
if(temp__5804__auto__){
var seq__18488__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18488__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18488__$1);
var G__19420 = cljs.core.chunk_rest(seq__18488__$1);
var G__19421 = c__5525__auto__;
var G__19422 = cljs.core.count(c__5525__auto__);
var G__19423 = (0);
seq__18488 = G__19420;
chunk__18489 = G__19421;
count__18490 = G__19422;
i__18491 = G__19423;
continue;
} else {
var n = cljs.core.first(seq__18488__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__19424 = cljs.core.next(seq__18488__$1);
var G__19425 = null;
var G__19426 = (0);
var G__19427 = (0);
seq__18488 = G__19424;
chunk__18489 = G__19425;
count__18490 = G__19426;
i__18491 = G__19427;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18503 = arguments.length;
switch (G__18503) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18513 = arguments.length;
switch (G__18513) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18530 = arguments.length;
switch (G__18530) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19440 = arguments.length;
var i__5727__auto___19441 = (0);
while(true){
if((i__5727__auto___19441 < len__5726__auto___19440)){
args__5732__auto__.push((arguments[i__5727__auto___19441]));

var G__19444 = (i__5727__auto___19441 + (1));
i__5727__auto___19441 = G__19444;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18554_19446 = cljs.core.seq(nodes);
var chunk__18555_19447 = null;
var count__18556_19448 = (0);
var i__18557_19449 = (0);
while(true){
if((i__18557_19449 < count__18556_19448)){
var node_19450 = chunk__18555_19447.cljs$core$IIndexed$_nth$arity$2(null, i__18557_19449);
fragment.appendChild(shadow.dom._to_dom(node_19450));


var G__19452 = seq__18554_19446;
var G__19453 = chunk__18555_19447;
var G__19454 = count__18556_19448;
var G__19455 = (i__18557_19449 + (1));
seq__18554_19446 = G__19452;
chunk__18555_19447 = G__19453;
count__18556_19448 = G__19454;
i__18557_19449 = G__19455;
continue;
} else {
var temp__5804__auto___19457 = cljs.core.seq(seq__18554_19446);
if(temp__5804__auto___19457){
var seq__18554_19458__$1 = temp__5804__auto___19457;
if(cljs.core.chunked_seq_QMARK_(seq__18554_19458__$1)){
var c__5525__auto___19459 = cljs.core.chunk_first(seq__18554_19458__$1);
var G__19461 = cljs.core.chunk_rest(seq__18554_19458__$1);
var G__19462 = c__5525__auto___19459;
var G__19463 = cljs.core.count(c__5525__auto___19459);
var G__19464 = (0);
seq__18554_19446 = G__19461;
chunk__18555_19447 = G__19462;
count__18556_19448 = G__19463;
i__18557_19449 = G__19464;
continue;
} else {
var node_19465 = cljs.core.first(seq__18554_19458__$1);
fragment.appendChild(shadow.dom._to_dom(node_19465));


var G__19466 = cljs.core.next(seq__18554_19458__$1);
var G__19467 = null;
var G__19468 = (0);
var G__19469 = (0);
seq__18554_19446 = G__19466;
chunk__18555_19447 = G__19467;
count__18556_19448 = G__19468;
i__18557_19449 = G__19469;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18552){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18552));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18562_19470 = cljs.core.seq(scripts);
var chunk__18563_19471 = null;
var count__18564_19472 = (0);
var i__18565_19473 = (0);
while(true){
if((i__18565_19473 < count__18564_19472)){
var vec__18578_19474 = chunk__18563_19471.cljs$core$IIndexed$_nth$arity$2(null, i__18565_19473);
var script_tag_19475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18578_19474,(0),null);
var script_body_19476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18578_19474,(1),null);
eval(script_body_19476);


var G__19477 = seq__18562_19470;
var G__19478 = chunk__18563_19471;
var G__19479 = count__18564_19472;
var G__19480 = (i__18565_19473 + (1));
seq__18562_19470 = G__19477;
chunk__18563_19471 = G__19478;
count__18564_19472 = G__19479;
i__18565_19473 = G__19480;
continue;
} else {
var temp__5804__auto___19481 = cljs.core.seq(seq__18562_19470);
if(temp__5804__auto___19481){
var seq__18562_19482__$1 = temp__5804__auto___19481;
if(cljs.core.chunked_seq_QMARK_(seq__18562_19482__$1)){
var c__5525__auto___19484 = cljs.core.chunk_first(seq__18562_19482__$1);
var G__19485 = cljs.core.chunk_rest(seq__18562_19482__$1);
var G__19486 = c__5525__auto___19484;
var G__19487 = cljs.core.count(c__5525__auto___19484);
var G__19488 = (0);
seq__18562_19470 = G__19485;
chunk__18563_19471 = G__19486;
count__18564_19472 = G__19487;
i__18565_19473 = G__19488;
continue;
} else {
var vec__18582_19489 = cljs.core.first(seq__18562_19482__$1);
var script_tag_19490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18582_19489,(0),null);
var script_body_19491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18582_19489,(1),null);
eval(script_body_19491);


var G__19492 = cljs.core.next(seq__18562_19482__$1);
var G__19493 = null;
var G__19494 = (0);
var G__19495 = (0);
seq__18562_19470 = G__19492;
chunk__18563_19471 = G__19493;
count__18564_19472 = G__19494;
i__18565_19473 = G__19495;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18585){
var vec__18587 = p__18585;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18587,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18587,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18595 = arguments.length;
switch (G__18595) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18627 = cljs.core.seq(style_keys);
var chunk__18628 = null;
var count__18629 = (0);
var i__18630 = (0);
while(true){
if((i__18630 < count__18629)){
var it = chunk__18628.cljs$core$IIndexed$_nth$arity$2(null, i__18630);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19507 = seq__18627;
var G__19508 = chunk__18628;
var G__19509 = count__18629;
var G__19510 = (i__18630 + (1));
seq__18627 = G__19507;
chunk__18628 = G__19508;
count__18629 = G__19509;
i__18630 = G__19510;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18627);
if(temp__5804__auto__){
var seq__18627__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18627__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18627__$1);
var G__19511 = cljs.core.chunk_rest(seq__18627__$1);
var G__19512 = c__5525__auto__;
var G__19513 = cljs.core.count(c__5525__auto__);
var G__19514 = (0);
seq__18627 = G__19511;
chunk__18628 = G__19512;
count__18629 = G__19513;
i__18630 = G__19514;
continue;
} else {
var it = cljs.core.first(seq__18627__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19515 = cljs.core.next(seq__18627__$1);
var G__19516 = null;
var G__19517 = (0);
var G__19518 = (0);
seq__18627 = G__19515;
chunk__18628 = G__19516;
count__18629 = G__19517;
i__18630 = G__19518;
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
* @constructor
 * @implements {cljs.core.IRecord}
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
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18650,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18662 = k18650;
var G__18662__$1 = (((G__18662 instanceof cljs.core.Keyword))?G__18662.fqn:null);
switch (G__18662__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18650,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18666){
var vec__18667 = p__18666;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18667,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18667,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18649){
var self__ = this;
var G__18649__$1 = this;
return (new cljs.core.RecordIter((0),G__18649__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18651,other18652){
var self__ = this;
var this18651__$1 = this;
return (((!((other18652 == null)))) && ((((this18651__$1.constructor === other18652.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18651__$1.x,other18652.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18651__$1.y,other18652.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18651__$1.__extmap,other18652.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18650){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18692 = k18650;
var G__18692__$1 = (((G__18692 instanceof cljs.core.Keyword))?G__18692.fqn:null);
switch (G__18692__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18650);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18649){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18697 = cljs.core.keyword_identical_QMARK_;
var expr__18698 = k__5309__auto__;
if(cljs.core.truth_((pred__18697.cljs$core$IFn$_invoke$arity$2 ? pred__18697.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18698) : pred__18697.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__18698)))){
return (new shadow.dom.Coordinate(G__18649,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18697.cljs$core$IFn$_invoke$arity$2 ? pred__18697.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18698) : pred__18697.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__18698)))){
return (new shadow.dom.Coordinate(self__.x,G__18649,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18649),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18649){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18649,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18655){
var extmap__5342__auto__ = (function (){var G__18702 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18655,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18655)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18702);
} else {
return G__18702;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18655),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18655),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k18707,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__18718 = k18707;
var G__18718__$1 = (((G__18718 instanceof cljs.core.Keyword))?G__18718.fqn:null);
switch (G__18718__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18707,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__18723){
var vec__18724 = p__18723;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18724,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18724,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18706){
var self__ = this;
var G__18706__$1 = this;
return (new cljs.core.RecordIter((0),G__18706__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18708,other18709){
var self__ = this;
var this18708__$1 = this;
return (((!((other18709 == null)))) && ((((this18708__$1.constructor === other18709.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18708__$1.w,other18709.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18708__$1.h,other18709.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18708__$1.__extmap,other18709.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k18707){
var self__ = this;
var this__5307__auto____$1 = this;
var G__18754 = k18707;
var G__18754__$1 = (((G__18754 instanceof cljs.core.Keyword))?G__18754.fqn:null);
switch (G__18754__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18707);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__18706){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__18757 = cljs.core.keyword_identical_QMARK_;
var expr__18758 = k__5309__auto__;
if(cljs.core.truth_((pred__18757.cljs$core$IFn$_invoke$arity$2 ? pred__18757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18758) : pred__18757.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__18758)))){
return (new shadow.dom.Size(G__18706,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18757.cljs$core$IFn$_invoke$arity$2 ? pred__18757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18758) : pred__18757.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__18758)))){
return (new shadow.dom.Size(self__.w,G__18706,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__18706),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__18706){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18706,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18710){
var extmap__5342__auto__ = (function (){var G__18768 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18710,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18710)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18768);
} else {
return G__18768;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18710),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18710),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__19567 = (i + (1));
var G__19568 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19567;
ret = G__19568;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18798){
var vec__18799 = p__18798;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18799,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18807 = arguments.length;
switch (G__18807) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19572 = ps;
var G__19573 = (i + (1));
el__$1 = G__19572;
i = G__19573;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18834 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18834,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18834,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18834,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18838_19580 = cljs.core.seq(props);
var chunk__18839_19581 = null;
var count__18840_19582 = (0);
var i__18841_19583 = (0);
while(true){
if((i__18841_19583 < count__18840_19582)){
var vec__18849_19584 = chunk__18839_19581.cljs$core$IIndexed$_nth$arity$2(null, i__18841_19583);
var k_19585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18849_19584,(0),null);
var v_19586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18849_19584,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19585);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19585),v_19586);


var G__19587 = seq__18838_19580;
var G__19588 = chunk__18839_19581;
var G__19589 = count__18840_19582;
var G__19590 = (i__18841_19583 + (1));
seq__18838_19580 = G__19587;
chunk__18839_19581 = G__19588;
count__18840_19582 = G__19589;
i__18841_19583 = G__19590;
continue;
} else {
var temp__5804__auto___19591 = cljs.core.seq(seq__18838_19580);
if(temp__5804__auto___19591){
var seq__18838_19592__$1 = temp__5804__auto___19591;
if(cljs.core.chunked_seq_QMARK_(seq__18838_19592__$1)){
var c__5525__auto___19596 = cljs.core.chunk_first(seq__18838_19592__$1);
var G__19599 = cljs.core.chunk_rest(seq__18838_19592__$1);
var G__19600 = c__5525__auto___19596;
var G__19601 = cljs.core.count(c__5525__auto___19596);
var G__19602 = (0);
seq__18838_19580 = G__19599;
chunk__18839_19581 = G__19600;
count__18840_19582 = G__19601;
i__18841_19583 = G__19602;
continue;
} else {
var vec__18860_19603 = cljs.core.first(seq__18838_19592__$1);
var k_19604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860_19603,(0),null);
var v_19605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18860_19603,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19604);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19604),v_19605);


var G__19606 = cljs.core.next(seq__18838_19592__$1);
var G__19607 = null;
var G__19608 = (0);
var G__19609 = (0);
seq__18838_19580 = G__19606;
chunk__18839_19581 = G__19607;
count__18840_19582 = G__19608;
i__18841_19583 = G__19609;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18886 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18886,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18886,(1),null);
var seq__18889_19611 = cljs.core.seq(node_children);
var chunk__18891_19612 = null;
var count__18892_19613 = (0);
var i__18893_19614 = (0);
while(true){
if((i__18893_19614 < count__18892_19613)){
var child_struct_19620 = chunk__18891_19612.cljs$core$IIndexed$_nth$arity$2(null, i__18893_19614);
if((!((child_struct_19620 == null)))){
if(typeof child_struct_19620 === 'string'){
var text_19621 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19621),child_struct_19620].join(''));
} else {
var children_19623 = shadow.dom.svg_node(child_struct_19620);
if(cljs.core.seq_QMARK_(children_19623)){
var seq__18977_19627 = cljs.core.seq(children_19623);
var chunk__18979_19628 = null;
var count__18980_19629 = (0);
var i__18981_19630 = (0);
while(true){
if((i__18981_19630 < count__18980_19629)){
var child_19652 = chunk__18979_19628.cljs$core$IIndexed$_nth$arity$2(null, i__18981_19630);
if(cljs.core.truth_(child_19652)){
node.appendChild(child_19652);


var G__19653 = seq__18977_19627;
var G__19654 = chunk__18979_19628;
var G__19655 = count__18980_19629;
var G__19656 = (i__18981_19630 + (1));
seq__18977_19627 = G__19653;
chunk__18979_19628 = G__19654;
count__18980_19629 = G__19655;
i__18981_19630 = G__19656;
continue;
} else {
var G__19657 = seq__18977_19627;
var G__19658 = chunk__18979_19628;
var G__19659 = count__18980_19629;
var G__19660 = (i__18981_19630 + (1));
seq__18977_19627 = G__19657;
chunk__18979_19628 = G__19658;
count__18980_19629 = G__19659;
i__18981_19630 = G__19660;
continue;
}
} else {
var temp__5804__auto___19661 = cljs.core.seq(seq__18977_19627);
if(temp__5804__auto___19661){
var seq__18977_19662__$1 = temp__5804__auto___19661;
if(cljs.core.chunked_seq_QMARK_(seq__18977_19662__$1)){
var c__5525__auto___19664 = cljs.core.chunk_first(seq__18977_19662__$1);
var G__19667 = cljs.core.chunk_rest(seq__18977_19662__$1);
var G__19668 = c__5525__auto___19664;
var G__19669 = cljs.core.count(c__5525__auto___19664);
var G__19670 = (0);
seq__18977_19627 = G__19667;
chunk__18979_19628 = G__19668;
count__18980_19629 = G__19669;
i__18981_19630 = G__19670;
continue;
} else {
var child_19671 = cljs.core.first(seq__18977_19662__$1);
if(cljs.core.truth_(child_19671)){
node.appendChild(child_19671);


var G__19672 = cljs.core.next(seq__18977_19662__$1);
var G__19673 = null;
var G__19674 = (0);
var G__19675 = (0);
seq__18977_19627 = G__19672;
chunk__18979_19628 = G__19673;
count__18980_19629 = G__19674;
i__18981_19630 = G__19675;
continue;
} else {
var G__19676 = cljs.core.next(seq__18977_19662__$1);
var G__19677 = null;
var G__19678 = (0);
var G__19679 = (0);
seq__18977_19627 = G__19676;
chunk__18979_19628 = G__19677;
count__18980_19629 = G__19678;
i__18981_19630 = G__19679;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19623);
}
}


var G__19680 = seq__18889_19611;
var G__19681 = chunk__18891_19612;
var G__19682 = count__18892_19613;
var G__19683 = (i__18893_19614 + (1));
seq__18889_19611 = G__19680;
chunk__18891_19612 = G__19681;
count__18892_19613 = G__19682;
i__18893_19614 = G__19683;
continue;
} else {
var G__19684 = seq__18889_19611;
var G__19685 = chunk__18891_19612;
var G__19686 = count__18892_19613;
var G__19687 = (i__18893_19614 + (1));
seq__18889_19611 = G__19684;
chunk__18891_19612 = G__19685;
count__18892_19613 = G__19686;
i__18893_19614 = G__19687;
continue;
}
} else {
var temp__5804__auto___19688 = cljs.core.seq(seq__18889_19611);
if(temp__5804__auto___19688){
var seq__18889_19689__$1 = temp__5804__auto___19688;
if(cljs.core.chunked_seq_QMARK_(seq__18889_19689__$1)){
var c__5525__auto___19690 = cljs.core.chunk_first(seq__18889_19689__$1);
var G__19691 = cljs.core.chunk_rest(seq__18889_19689__$1);
var G__19692 = c__5525__auto___19690;
var G__19693 = cljs.core.count(c__5525__auto___19690);
var G__19694 = (0);
seq__18889_19611 = G__19691;
chunk__18891_19612 = G__19692;
count__18892_19613 = G__19693;
i__18893_19614 = G__19694;
continue;
} else {
var child_struct_19695 = cljs.core.first(seq__18889_19689__$1);
if((!((child_struct_19695 == null)))){
if(typeof child_struct_19695 === 'string'){
var text_19696 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19696),child_struct_19695].join(''));
} else {
var children_19697 = shadow.dom.svg_node(child_struct_19695);
if(cljs.core.seq_QMARK_(children_19697)){
var seq__19001_19698 = cljs.core.seq(children_19697);
var chunk__19003_19699 = null;
var count__19004_19700 = (0);
var i__19005_19701 = (0);
while(true){
if((i__19005_19701 < count__19004_19700)){
var child_19707 = chunk__19003_19699.cljs$core$IIndexed$_nth$arity$2(null, i__19005_19701);
if(cljs.core.truth_(child_19707)){
node.appendChild(child_19707);


var G__19708 = seq__19001_19698;
var G__19709 = chunk__19003_19699;
var G__19710 = count__19004_19700;
var G__19711 = (i__19005_19701 + (1));
seq__19001_19698 = G__19708;
chunk__19003_19699 = G__19709;
count__19004_19700 = G__19710;
i__19005_19701 = G__19711;
continue;
} else {
var G__19712 = seq__19001_19698;
var G__19713 = chunk__19003_19699;
var G__19714 = count__19004_19700;
var G__19715 = (i__19005_19701 + (1));
seq__19001_19698 = G__19712;
chunk__19003_19699 = G__19713;
count__19004_19700 = G__19714;
i__19005_19701 = G__19715;
continue;
}
} else {
var temp__5804__auto___19716__$1 = cljs.core.seq(seq__19001_19698);
if(temp__5804__auto___19716__$1){
var seq__19001_19717__$1 = temp__5804__auto___19716__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19001_19717__$1)){
var c__5525__auto___19718 = cljs.core.chunk_first(seq__19001_19717__$1);
var G__19719 = cljs.core.chunk_rest(seq__19001_19717__$1);
var G__19720 = c__5525__auto___19718;
var G__19721 = cljs.core.count(c__5525__auto___19718);
var G__19722 = (0);
seq__19001_19698 = G__19719;
chunk__19003_19699 = G__19720;
count__19004_19700 = G__19721;
i__19005_19701 = G__19722;
continue;
} else {
var child_19723 = cljs.core.first(seq__19001_19717__$1);
if(cljs.core.truth_(child_19723)){
node.appendChild(child_19723);


var G__19724 = cljs.core.next(seq__19001_19717__$1);
var G__19725 = null;
var G__19726 = (0);
var G__19727 = (0);
seq__19001_19698 = G__19724;
chunk__19003_19699 = G__19725;
count__19004_19700 = G__19726;
i__19005_19701 = G__19727;
continue;
} else {
var G__19728 = cljs.core.next(seq__19001_19717__$1);
var G__19729 = null;
var G__19730 = (0);
var G__19731 = (0);
seq__19001_19698 = G__19728;
chunk__19003_19699 = G__19729;
count__19004_19700 = G__19730;
i__19005_19701 = G__19731;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19697);
}
}


var G__19732 = cljs.core.next(seq__18889_19689__$1);
var G__19733 = null;
var G__19734 = (0);
var G__19735 = (0);
seq__18889_19611 = G__19732;
chunk__18891_19612 = G__19733;
count__18892_19613 = G__19734;
i__18893_19614 = G__19735;
continue;
} else {
var G__19736 = cljs.core.next(seq__18889_19689__$1);
var G__19737 = null;
var G__19738 = (0);
var G__19739 = (0);
seq__18889_19611 = G__19736;
chunk__18891_19612 = G__19737;
count__18892_19613 = G__19738;
i__18893_19614 = G__19739;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19741 = arguments.length;
var i__5727__auto___19742 = (0);
while(true){
if((i__5727__auto___19742 < len__5726__auto___19741)){
args__5732__auto__.push((arguments[i__5727__auto___19742]));

var G__19743 = (i__5727__auto___19742 + (1));
i__5727__auto___19742 = G__19743;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19047){
var G__19048 = cljs.core.first(seq19047);
var seq19047__$1 = cljs.core.next(seq19047);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19048,seq19047__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19060 = arguments.length;
switch (G__19060) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__14413__auto___19748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_19091){
var state_val_19094 = (state_19091[(1)]);
if((state_val_19094 === (1))){
var state_19091__$1 = state_19091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19091__$1,(2),once_or_cleanup);
} else {
if((state_val_19094 === (2))){
var inst_19086 = (state_19091[(2)]);
var inst_19088 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19091__$1 = (function (){var statearr_19109 = state_19091;
(statearr_19109[(7)] = inst_19086);

return statearr_19109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19091__$1,inst_19088);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13347__auto__ = null;
var shadow$dom$state_machine__13347__auto____0 = (function (){
var statearr_19119 = [null,null,null,null,null,null,null,null];
(statearr_19119[(0)] = shadow$dom$state_machine__13347__auto__);

(statearr_19119[(1)] = (1));

return statearr_19119;
});
var shadow$dom$state_machine__13347__auto____1 = (function (state_19091){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_19091);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e19122){var ex__13350__auto__ = e19122;
var statearr_19124_19751 = state_19091;
(statearr_19124_19751[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_19091[(4)]))){
var statearr_19125_19753 = state_19091;
(statearr_19125_19753[(1)] = cljs.core.first((state_19091[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19755 = state_19091;
state_19091 = G__19755;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
shadow$dom$state_machine__13347__auto__ = function(state_19091){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13347__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13347__auto____1.call(this,state_19091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13347__auto____0;
shadow$dom$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13347__auto____1;
return shadow$dom$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_19130 = f__14414__auto__();
(statearr_19130[(6)] = c__14413__auto___19748);

return statearr_19130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
