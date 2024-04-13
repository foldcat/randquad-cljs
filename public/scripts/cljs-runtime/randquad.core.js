goog.provide('randquad.core');
randquad.core.style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fixed","fixed",-562004358),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%, -50%)"], null)], null);
randquad.core.randnum = (function randquad$core$randnum(n,adjust){
while(true){
var random_number = cljs.core.rand_int(n);
var adjusted_number = (random_number - adjust);
if((adjusted_number === (0))){
var G__14083 = n;
var G__14084 = adjust;
n = G__14083;
adjust = G__14084;
continue;
} else {
return adjusted_number;
}
break;
}
});
/**
 * if n = 1 returns empty string, 
 *   otherwise return n as string
 */
randquad.core.hide_one = (function randquad$core$hide_one(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});
/**
 * if n is negetive format n into string, 
 *   if n is possitive format n into string and add + sign
 */
randquad.core.format_ve = (function randquad$core$format_ve(first_QMARK_,n){
if((n > (0))){
if(cljs.core.truth_(first_QMARK_)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
} else {
return ["+ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}
} else {
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.abs(n))].join('');
}
});
/**
 * the
 */
randquad.core.neg = (function randquad$core$neg(n){
return (n * (-1));
});
randquad.core.fmt_first = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(randquad.core.format_ve,true),randquad.core.hide_one);
randquad.core.fmt = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(randquad.core.format_ve,false),randquad.core.hide_one);
/**
 * generates random quad equation while updating the answer storage
 */
randquad.core.genquad = (function randquad$core$genquad(){
alert("genquad ran");

var _a = randquad.core.randnum((19),(9));
var _b = randquad.core.randnum((19),(9));
var _c = randquad.core.randnum((11),(5));
var a = _c;
var b = (_c * (_a + _b));
var c = ((_a * _b) * _c);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.string.format("%sx^2  %sx  %s",randquad.core.fmt_first(a),randquad.core.fmt(b),randquad.core.fmt(c)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),randquad.core.neg(_a),new cljs.core.Keyword(null,"b","b",1482224470),randquad.core.neg(_b)], null)], null);
});
randquad.core.input_box = (function randquad$core$input_box(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__14081_SHARP_){
return cljs.core.reset_BANG_(value,p1__14081_SHARP_.target.value);
})], null)], null);
});
randquad.core.validate_input = (function randquad$core$validate_input(s,root){
var processed = clojure.string.replace(s,/ /,"");
var matches = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14082_SHARP_){
return parseInt(p1__14082_SHARP_);
}),cljs.core.re_seq(/-?\d+/,processed));
var flipped = cljs.core.map.cljs$core$IFn$_invoke$arity$2(randquad.core.neg,matches);
var ans = cljs.core.deref(root);
var a = cljs.core.first(flipped);
var b = cljs.core.second(flipped);
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(ans),a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(ans),b)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(ans),a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(ans),b)))));
});
/**
 * submit and validate input, rerender
 */
randquad.core.submit = (function randquad$core$submit(input,root,msg,visibility){
if(randquad.core.validate_input(cljs.core.deref(input),root)){
cljs.core.reset_BANG_(msg,"correct answer");

return cljs.core.reset_BANG_(visibility,"block");
} else {
var ans = cljs.core.deref(root);
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(ans);
var b = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(ans);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));

return cljs.core.reset_BANG_(msg,goog.string.format("incorrect answer, roots are (%s, %s)",a,b));
}
});
/**
 * regenerate quad equation
 */
randquad.core.regen = (function randquad$core$regen(root,quad,msg,visibility){
alert("regen");

cljs.core.reset_BANG_(quad,randquad.core.genquad());

cljs.core.reset_BANG_(root,cljs.core.second(quad));

cljs.core.reset_BANG_(msg,"");

return cljs.core.reset_BANG_(visibility,"hidden");
});
randquad.core.indicator = (function randquad$core$indicator(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref(text)], null);
});
randquad.core.main_component = (function randquad$core$main_component(){
var quad = randquad.core.genquad();
var root = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.second(quad));
var quad_mut = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(quad));
var input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var msg = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var visibility = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("none");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),randquad.core.style,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"200%"], null)], null),cljs.core.deref(quad_mut)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [randquad.core.input_box,input], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return randquad.core.submit(input,root,msg,visibility);
})], null),"submit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [randquad.core.indicator,msg], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),cljs.core.deref(visibility)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return randquad.core.regen(root,quad_mut,msg,visibility);
})], null),"next"], null)], null)], null)], null);
});
randquad.core.run = (function randquad$core$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return randquad.core.main_component;},new cljs.core.Symbol("randquad.core","main-component","randquad.core/main-component",-1907785951,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"randquad.core","randquad.core",1152053509,null),new cljs.core.Symbol(null,"main-component","main-component",-40016256,null),"randquad/core.cljs",21,1,140,140,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(randquad.core.main_component)?randquad.core.main_component.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
goog.exportSymbol('randquad.core.run', randquad.core.run);

//# sourceMappingURL=randquad.core.js.map
