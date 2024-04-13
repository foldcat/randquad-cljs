goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14523 = (function (f,blockable,meta14524){
this.f = f;
this.blockable = blockable;
this.meta14524 = meta14524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14525,meta14524__$1){
var self__ = this;
var _14525__$1 = this;
return (new cljs.core.async.t_cljs$core$async14523(self__.f,self__.blockable,meta14524__$1));
}));

(cljs.core.async.t_cljs$core$async14523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14525){
var self__ = this;
var _14525__$1 = this;
return self__.meta14524;
}));

(cljs.core.async.t_cljs$core$async14523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14524","meta14524",2114051003,null)], null);
}));

(cljs.core.async.t_cljs$core$async14523.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14523");

(cljs.core.async.t_cljs$core$async14523.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14523");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14523.
 */
cljs.core.async.__GT_t_cljs$core$async14523 = (function cljs$core$async$__GT_t_cljs$core$async14523(f,blockable,meta14524){
return (new cljs.core.async.t_cljs$core$async14523(f,blockable,meta14524));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14517 = arguments.length;
switch (G__14517) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14523(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14557 = arguments.length;
switch (G__14557) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14563 = arguments.length;
switch (G__14563) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14573 = arguments.length;
switch (G__14573) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17789 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17789) : fn1.call(null, val_17789));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17789) : fn1.call(null, val_17789));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14579 = arguments.length;
switch (G__14579) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17795 = n;
var x_17796 = (0);
while(true){
if((x_17796 < n__5593__auto___17795)){
(a[x_17796] = x_17796);

var G__17797 = (x_17796 + (1));
x_17796 = G__17797;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14599 = (function (flag,meta14600){
this.flag = flag;
this.meta14600 = meta14600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14601,meta14600__$1){
var self__ = this;
var _14601__$1 = this;
return (new cljs.core.async.t_cljs$core$async14599(self__.flag,meta14600__$1));
}));

(cljs.core.async.t_cljs$core$async14599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14601){
var self__ = this;
var _14601__$1 = this;
return self__.meta14600;
}));

(cljs.core.async.t_cljs$core$async14599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14600","meta14600",-415521409,null)], null);
}));

(cljs.core.async.t_cljs$core$async14599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14599");

(cljs.core.async.t_cljs$core$async14599.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14599.
 */
cljs.core.async.__GT_t_cljs$core$async14599 = (function cljs$core$async$__GT_t_cljs$core$async14599(flag,meta14600){
return (new cljs.core.async.t_cljs$core$async14599(flag,meta14600));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14599(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14604 = (function (flag,cb,meta14605){
this.flag = flag;
this.cb = cb;
this.meta14605 = meta14605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14606,meta14605__$1){
var self__ = this;
var _14606__$1 = this;
return (new cljs.core.async.t_cljs$core$async14604(self__.flag,self__.cb,meta14605__$1));
}));

(cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14606){
var self__ = this;
var _14606__$1 = this;
return self__.meta14605;
}));

(cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14605","meta14605",-2113623426,null)], null);
}));

(cljs.core.async.t_cljs$core$async14604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14604");

(cljs.core.async.t_cljs$core$async14604.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14604.
 */
cljs.core.async.__GT_t_cljs$core$async14604 = (function cljs$core$async$__GT_t_cljs$core$async14604(flag,cb,meta14605){
return (new cljs.core.async.t_cljs$core$async14604(flag,cb,meta14605));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14604(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14609_SHARP_){
var G__14616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14609_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14616) : fret.call(null, G__14616));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14610_SHARP_){
var G__14617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14610_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14617) : fret.call(null, G__14617));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17803 = (i + (1));
i = G__17803;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17805 = arguments.length;
var i__5727__auto___17806 = (0);
while(true){
if((i__5727__auto___17806 < len__5726__auto___17805)){
args__5732__auto__.push((arguments[i__5727__auto___17806]));

var G__17807 = (i__5727__auto___17806 + (1));
i__5727__auto___17806 = G__17807;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14623){
var map__14624 = p__14623;
var map__14624__$1 = cljs.core.__destructure_map(map__14624);
var opts = map__14624__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14619){
var G__14620 = cljs.core.first(seq14619);
var seq14619__$1 = cljs.core.next(seq14619);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14620,seq14619__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14634 = arguments.length;
switch (G__14634) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14413__auto___17811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_14682){
var state_val_14683 = (state_14682[(1)]);
if((state_val_14683 === (7))){
var inst_14675 = (state_14682[(2)]);
var state_14682__$1 = state_14682;
var statearr_14692_17813 = state_14682__$1;
(statearr_14692_17813[(2)] = inst_14675);

(statearr_14692_17813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (1))){
var state_14682__$1 = state_14682;
var statearr_14697_17816 = state_14682__$1;
(statearr_14697_17816[(2)] = null);

(statearr_14697_17816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (4))){
var inst_14646 = (state_14682[(7)]);
var inst_14646__$1 = (state_14682[(2)]);
var inst_14650 = (inst_14646__$1 == null);
var state_14682__$1 = (function (){var statearr_14706 = state_14682;
(statearr_14706[(7)] = inst_14646__$1);

return statearr_14706;
})();
if(cljs.core.truth_(inst_14650)){
var statearr_14707_17819 = state_14682__$1;
(statearr_14707_17819[(1)] = (5));

} else {
var statearr_14709_17820 = state_14682__$1;
(statearr_14709_17820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (13))){
var state_14682__$1 = state_14682;
var statearr_14712_17823 = state_14682__$1;
(statearr_14712_17823[(2)] = null);

(statearr_14712_17823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (6))){
var inst_14646 = (state_14682[(7)]);
var state_14682__$1 = state_14682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14682__$1,(11),to,inst_14646);
} else {
if((state_val_14683 === (3))){
var inst_14677 = (state_14682[(2)]);
var state_14682__$1 = state_14682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14682__$1,inst_14677);
} else {
if((state_val_14683 === (12))){
var state_14682__$1 = state_14682;
var statearr_14714_17824 = state_14682__$1;
(statearr_14714_17824[(2)] = null);

(statearr_14714_17824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (2))){
var state_14682__$1 = state_14682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14682__$1,(4),from);
} else {
if((state_val_14683 === (11))){
var inst_14665 = (state_14682[(2)]);
var state_14682__$1 = state_14682;
if(cljs.core.truth_(inst_14665)){
var statearr_14715_17825 = state_14682__$1;
(statearr_14715_17825[(1)] = (12));

} else {
var statearr_14716_17826 = state_14682__$1;
(statearr_14716_17826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (9))){
var state_14682__$1 = state_14682;
var statearr_14717_17828 = state_14682__$1;
(statearr_14717_17828[(2)] = null);

(statearr_14717_17828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (5))){
var state_14682__$1 = state_14682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14722_17832 = state_14682__$1;
(statearr_14722_17832[(1)] = (8));

} else {
var statearr_14725_17833 = state_14682__$1;
(statearr_14725_17833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (14))){
var inst_14673 = (state_14682[(2)]);
var state_14682__$1 = state_14682;
var statearr_14726_17834 = state_14682__$1;
(statearr_14726_17834[(2)] = inst_14673);

(statearr_14726_17834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (10))){
var inst_14662 = (state_14682[(2)]);
var state_14682__$1 = state_14682;
var statearr_14733_17835 = state_14682__$1;
(statearr_14733_17835[(2)] = inst_14662);

(statearr_14733_17835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14683 === (8))){
var inst_14654 = cljs.core.async.close_BANG_(to);
var state_14682__$1 = state_14682;
var statearr_14734_17836 = state_14682__$1;
(statearr_14734_17836[(2)] = inst_14654);

(statearr_14734_17836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_14738 = [null,null,null,null,null,null,null,null];
(statearr_14738[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_14738[(1)] = (1));

return statearr_14738;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_14682){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_14682);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e14739){var ex__13350__auto__ = e14739;
var statearr_14740_17839 = state_14682;
(statearr_14740_17839[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_14682[(4)]))){
var statearr_14741_17841 = state_14682;
(statearr_14741_17841[(1)] = cljs.core.first((state_14682[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17844 = state_14682;
state_14682 = G__17844;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_14682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_14682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_14743 = f__14414__auto__();
(statearr_14743[(6)] = c__14413__auto___17811);

return statearr_14743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14768){
var vec__14769 = p__14768;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14769,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14769,(1),null);
var job = vec__14769;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14413__auto___17846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_14781){
var state_val_14783 = (state_14781[(1)]);
if((state_val_14783 === (1))){
var state_14781__$1 = state_14781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14781__$1,(2),res,v);
} else {
if((state_val_14783 === (2))){
var inst_14778 = (state_14781[(2)]);
var inst_14779 = cljs.core.async.close_BANG_(res);
var state_14781__$1 = (function (){var statearr_14797 = state_14781;
(statearr_14797[(7)] = inst_14778);

return statearr_14797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14781__$1,inst_14779);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0 = (function (){
var statearr_14801 = [null,null,null,null,null,null,null,null];
(statearr_14801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__);

(statearr_14801[(1)] = (1));

return statearr_14801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1 = (function (state_14781){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_14781);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e14804){var ex__13350__auto__ = e14804;
var statearr_14805_17850 = state_14781;
(statearr_14805_17850[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_14781[(4)]))){
var statearr_14810_17851 = state_14781;
(statearr_14810_17851[(1)] = cljs.core.first((state_14781[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17852 = state_14781;
state_14781 = G__17852;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = function(state_14781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1.call(this,state_14781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_14822 = f__14414__auto__();
(statearr_14822[(6)] = c__14413__auto___17846);

return statearr_14822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14829){
var vec__14831 = p__14829;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14831,(1),null);
var job = vec__14831;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17853 = n;
var __17854 = (0);
while(true){
if((__17854 < n__5593__auto___17853)){
var G__14842_17856 = type;
var G__14842_17857__$1 = (((G__14842_17856 instanceof cljs.core.Keyword))?G__14842_17856.fqn:null);
switch (G__14842_17857__$1) {
case "compute":
var c__14413__auto___17859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17854,c__14413__auto___17859,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async){
return (function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = ((function (__17854,c__14413__auto___17859,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async){
return (function (state_14866){
var state_val_14867 = (state_14866[(1)]);
if((state_val_14867 === (1))){
var state_14866__$1 = state_14866;
var statearr_14874_17861 = state_14866__$1;
(statearr_14874_17861[(2)] = null);

(statearr_14874_17861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14867 === (2))){
var state_14866__$1 = state_14866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14866__$1,(4),jobs);
} else {
if((state_val_14867 === (3))){
var inst_14864 = (state_14866[(2)]);
var state_14866__$1 = state_14866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14866__$1,inst_14864);
} else {
if((state_val_14867 === (4))){
var inst_14854 = (state_14866[(2)]);
var inst_14857 = process__$1(inst_14854);
var state_14866__$1 = state_14866;
if(cljs.core.truth_(inst_14857)){
var statearr_14881_17864 = state_14866__$1;
(statearr_14881_17864[(1)] = (5));

} else {
var statearr_14882_17865 = state_14866__$1;
(statearr_14882_17865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14867 === (5))){
var state_14866__$1 = state_14866;
var statearr_14884_17867 = state_14866__$1;
(statearr_14884_17867[(2)] = null);

(statearr_14884_17867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14867 === (6))){
var state_14866__$1 = state_14866;
var statearr_14887_17870 = state_14866__$1;
(statearr_14887_17870[(2)] = null);

(statearr_14887_17870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14867 === (7))){
var inst_14862 = (state_14866[(2)]);
var state_14866__$1 = state_14866;
var statearr_14893_17871 = state_14866__$1;
(statearr_14893_17871[(2)] = inst_14862);

(statearr_14893_17871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17854,c__14413__auto___17859,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async))
;
return ((function (__17854,switch__13346__auto__,c__14413__auto___17859,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0 = (function (){
var statearr_14897 = [null,null,null,null,null,null,null];
(statearr_14897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__);

(statearr_14897[(1)] = (1));

return statearr_14897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1 = (function (state_14866){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_14866);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e14901){var ex__13350__auto__ = e14901;
var statearr_14903_17876 = state_14866;
(statearr_14903_17876[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_14866[(4)]))){
var statearr_14904_17890 = state_14866;
(statearr_14904_17890[(1)] = cljs.core.first((state_14866[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17891 = state_14866;
state_14866 = G__17891;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = function(state_14866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1.call(this,state_14866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__;
})()
;})(__17854,switch__13346__auto__,c__14413__auto___17859,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async))
})();
var state__14415__auto__ = (function (){var statearr_14911 = f__14414__auto__();
(statearr_14911[(6)] = c__14413__auto___17859);

return statearr_14911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
});})(__17854,c__14413__auto___17859,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async))
);


break;
case "async":
var c__14413__auto___17902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17854,c__14413__auto___17902,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async){
return (function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = ((function (__17854,c__14413__auto___17902,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async){
return (function (state_14926){
var state_val_14928 = (state_14926[(1)]);
if((state_val_14928 === (1))){
var state_14926__$1 = state_14926;
var statearr_14936_17908 = state_14926__$1;
(statearr_14936_17908[(2)] = null);

(statearr_14936_17908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (2))){
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14926__$1,(4),jobs);
} else {
if((state_val_14928 === (3))){
var inst_14924 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14926__$1,inst_14924);
} else {
if((state_val_14928 === (4))){
var inst_14915 = (state_14926[(2)]);
var inst_14917 = async(inst_14915);
var state_14926__$1 = state_14926;
if(cljs.core.truth_(inst_14917)){
var statearr_14942_17931 = state_14926__$1;
(statearr_14942_17931[(1)] = (5));

} else {
var statearr_14943_17938 = state_14926__$1;
(statearr_14943_17938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (5))){
var state_14926__$1 = state_14926;
var statearr_14951_17948 = state_14926__$1;
(statearr_14951_17948[(2)] = null);

(statearr_14951_17948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (6))){
var state_14926__$1 = state_14926;
var statearr_14958_17951 = state_14926__$1;
(statearr_14958_17951[(2)] = null);

(statearr_14958_17951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (7))){
var inst_14922 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
var statearr_14960_17959 = state_14926__$1;
(statearr_14960_17959[(2)] = inst_14922);

(statearr_14960_17959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17854,c__14413__auto___17902,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async))
;
return ((function (__17854,switch__13346__auto__,c__14413__auto___17902,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0 = (function (){
var statearr_14963 = [null,null,null,null,null,null,null];
(statearr_14963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__);

(statearr_14963[(1)] = (1));

return statearr_14963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1 = (function (state_14926){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_14926);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e14965){var ex__13350__auto__ = e14965;
var statearr_14969_17992 = state_14926;
(statearr_14969_17992[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_14926[(4)]))){
var statearr_14973_17994 = state_14926;
(statearr_14973_17994[(1)] = cljs.core.first((state_14926[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18006 = state_14926;
state_14926 = G__18006;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = function(state_14926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1.call(this,state_14926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__;
})()
;})(__17854,switch__13346__auto__,c__14413__auto___17902,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async))
})();
var state__14415__auto__ = (function (){var statearr_14976 = f__14414__auto__();
(statearr_14976[(6)] = c__14413__auto___17902);

return statearr_14976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
});})(__17854,c__14413__auto___17902,G__14842_17856,G__14842_17857__$1,n__5593__auto___17853,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14842_17857__$1)].join('')));

}

var G__18010 = (__17854 + (1));
__17854 = G__18010;
continue;
} else {
}
break;
}

var c__14413__auto___18011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_15007){
var state_val_15008 = (state_15007[(1)]);
if((state_val_15008 === (7))){
var inst_15001 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15019_18021 = state_15007__$1;
(statearr_15019_18021[(2)] = inst_15001);

(statearr_15019_18021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (1))){
var state_15007__$1 = state_15007;
var statearr_15021_18025 = state_15007__$1;
(statearr_15021_18025[(2)] = null);

(statearr_15021_18025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (4))){
var inst_14985 = (state_15007[(7)]);
var inst_14985__$1 = (state_15007[(2)]);
var inst_14986 = (inst_14985__$1 == null);
var state_15007__$1 = (function (){var statearr_15024 = state_15007;
(statearr_15024[(7)] = inst_14985__$1);

return statearr_15024;
})();
if(cljs.core.truth_(inst_14986)){
var statearr_15025_18032 = state_15007__$1;
(statearr_15025_18032[(1)] = (5));

} else {
var statearr_15026_18033 = state_15007__$1;
(statearr_15026_18033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (6))){
var inst_14990 = (state_15007[(8)]);
var inst_14985 = (state_15007[(7)]);
var inst_14990__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14993 = [inst_14985,inst_14990__$1];
var inst_14994 = (new cljs.core.PersistentVector(null,2,(5),inst_14992,inst_14993,null));
var state_15007__$1 = (function (){var statearr_15028 = state_15007;
(statearr_15028[(8)] = inst_14990__$1);

return statearr_15028;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15007__$1,(8),jobs,inst_14994);
} else {
if((state_val_15008 === (3))){
var inst_15003 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15007__$1,inst_15003);
} else {
if((state_val_15008 === (2))){
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15007__$1,(4),from);
} else {
if((state_val_15008 === (9))){
var inst_14998 = (state_15007[(2)]);
var state_15007__$1 = (function (){var statearr_15029 = state_15007;
(statearr_15029[(9)] = inst_14998);

return statearr_15029;
})();
var statearr_15032_18041 = state_15007__$1;
(statearr_15032_18041[(2)] = null);

(statearr_15032_18041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (5))){
var inst_14988 = cljs.core.async.close_BANG_(jobs);
var state_15007__$1 = state_15007;
var statearr_15034_18043 = state_15007__$1;
(statearr_15034_18043[(2)] = inst_14988);

(statearr_15034_18043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (8))){
var inst_14990 = (state_15007[(8)]);
var inst_14996 = (state_15007[(2)]);
var state_15007__$1 = (function (){var statearr_15039 = state_15007;
(statearr_15039[(10)] = inst_14996);

return statearr_15039;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15007__$1,(9),results,inst_14990);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0 = (function (){
var statearr_15042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__);

(statearr_15042[(1)] = (1));

return statearr_15042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1 = (function (state_15007){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_15007);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e15043){var ex__13350__auto__ = e15043;
var statearr_15044_18051 = state_15007;
(statearr_15044_18051[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_15007[(4)]))){
var statearr_15045_18062 = state_15007;
(statearr_15045_18062[(1)] = cljs.core.first((state_15007[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18064 = state_15007;
state_15007 = G__18064;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = function(state_15007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1.call(this,state_15007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_15049 = f__14414__auto__();
(statearr_15049[(6)] = c__14413__auto___18011);

return statearr_15049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


var c__14413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_15094){
var state_val_15095 = (state_15094[(1)]);
if((state_val_15095 === (7))){
var inst_15090 = (state_15094[(2)]);
var state_15094__$1 = state_15094;
var statearr_15098_18066 = state_15094__$1;
(statearr_15098_18066[(2)] = inst_15090);

(statearr_15098_18066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (20))){
var state_15094__$1 = state_15094;
var statearr_15101_18072 = state_15094__$1;
(statearr_15101_18072[(2)] = null);

(statearr_15101_18072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (1))){
var state_15094__$1 = state_15094;
var statearr_15103_18074 = state_15094__$1;
(statearr_15103_18074[(2)] = null);

(statearr_15103_18074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (4))){
var inst_15052 = (state_15094[(7)]);
var inst_15052__$1 = (state_15094[(2)]);
var inst_15053 = (inst_15052__$1 == null);
var state_15094__$1 = (function (){var statearr_15104 = state_15094;
(statearr_15104[(7)] = inst_15052__$1);

return statearr_15104;
})();
if(cljs.core.truth_(inst_15053)){
var statearr_15105_18077 = state_15094__$1;
(statearr_15105_18077[(1)] = (5));

} else {
var statearr_15106_18080 = state_15094__$1;
(statearr_15106_18080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (15))){
var inst_15066 = (state_15094[(8)]);
var state_15094__$1 = state_15094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15094__$1,(18),to,inst_15066);
} else {
if((state_val_15095 === (21))){
var inst_15085 = (state_15094[(2)]);
var state_15094__$1 = state_15094;
var statearr_15108_18082 = state_15094__$1;
(statearr_15108_18082[(2)] = inst_15085);

(statearr_15108_18082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (13))){
var inst_15087 = (state_15094[(2)]);
var state_15094__$1 = (function (){var statearr_15109 = state_15094;
(statearr_15109[(9)] = inst_15087);

return statearr_15109;
})();
var statearr_15111_18090 = state_15094__$1;
(statearr_15111_18090[(2)] = null);

(statearr_15111_18090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (6))){
var inst_15052 = (state_15094[(7)]);
var state_15094__$1 = state_15094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15094__$1,(11),inst_15052);
} else {
if((state_val_15095 === (17))){
var inst_15078 = (state_15094[(2)]);
var state_15094__$1 = state_15094;
if(cljs.core.truth_(inst_15078)){
var statearr_15115_18091 = state_15094__$1;
(statearr_15115_18091[(1)] = (19));

} else {
var statearr_15116_18092 = state_15094__$1;
(statearr_15116_18092[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (3))){
var inst_15092 = (state_15094[(2)]);
var state_15094__$1 = state_15094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15094__$1,inst_15092);
} else {
if((state_val_15095 === (12))){
var inst_15063 = (state_15094[(10)]);
var state_15094__$1 = state_15094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15094__$1,(14),inst_15063);
} else {
if((state_val_15095 === (2))){
var state_15094__$1 = state_15094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15094__$1,(4),results);
} else {
if((state_val_15095 === (19))){
var state_15094__$1 = state_15094;
var statearr_15122_18093 = state_15094__$1;
(statearr_15122_18093[(2)] = null);

(statearr_15122_18093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (11))){
var inst_15063 = (state_15094[(2)]);
var state_15094__$1 = (function (){var statearr_15124 = state_15094;
(statearr_15124[(10)] = inst_15063);

return statearr_15124;
})();
var statearr_15126_18100 = state_15094__$1;
(statearr_15126_18100[(2)] = null);

(statearr_15126_18100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (9))){
var state_15094__$1 = state_15094;
var statearr_15128_18102 = state_15094__$1;
(statearr_15128_18102[(2)] = null);

(statearr_15128_18102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (5))){
var state_15094__$1 = state_15094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15130_18104 = state_15094__$1;
(statearr_15130_18104[(1)] = (8));

} else {
var statearr_15132_18106 = state_15094__$1;
(statearr_15132_18106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (14))){
var inst_15069 = (state_15094[(11)]);
var inst_15066 = (state_15094[(8)]);
var inst_15066__$1 = (state_15094[(2)]);
var inst_15068 = (inst_15066__$1 == null);
var inst_15069__$1 = cljs.core.not(inst_15068);
var state_15094__$1 = (function (){var statearr_15134 = state_15094;
(statearr_15134[(11)] = inst_15069__$1);

(statearr_15134[(8)] = inst_15066__$1);

return statearr_15134;
})();
if(inst_15069__$1){
var statearr_15135_18110 = state_15094__$1;
(statearr_15135_18110[(1)] = (15));

} else {
var statearr_15137_18111 = state_15094__$1;
(statearr_15137_18111[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (16))){
var inst_15069 = (state_15094[(11)]);
var state_15094__$1 = state_15094;
var statearr_15142_18113 = state_15094__$1;
(statearr_15142_18113[(2)] = inst_15069);

(statearr_15142_18113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (10))){
var inst_15060 = (state_15094[(2)]);
var state_15094__$1 = state_15094;
var statearr_15143_18117 = state_15094__$1;
(statearr_15143_18117[(2)] = inst_15060);

(statearr_15143_18117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (18))){
var inst_15075 = (state_15094[(2)]);
var state_15094__$1 = state_15094;
var statearr_15145_18119 = state_15094__$1;
(statearr_15145_18119[(2)] = inst_15075);

(statearr_15145_18119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15095 === (8))){
var inst_15057 = cljs.core.async.close_BANG_(to);
var state_15094__$1 = state_15094;
var statearr_15150_18120 = state_15094__$1;
(statearr_15150_18120[(2)] = inst_15057);

(statearr_15150_18120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0 = (function (){
var statearr_15157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__);

(statearr_15157[(1)] = (1));

return statearr_15157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1 = (function (state_15094){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_15094);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e15161){var ex__13350__auto__ = e15161;
var statearr_15162_18130 = state_15094;
(statearr_15162_18130[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_15094[(4)]))){
var statearr_15163_18131 = state_15094;
(statearr_15163_18131[(1)] = cljs.core.first((state_15094[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18133 = state_15094;
state_15094 = G__18133;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__ = function(state_15094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1.call(this,state_15094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_15170 = f__14414__auto__();
(statearr_15170[(6)] = c__14413__auto__);

return statearr_15170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));

return c__14413__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15181 = arguments.length;
switch (G__15181) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15202 = arguments.length;
switch (G__15202) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15227 = arguments.length;
switch (G__15227) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14413__auto___18170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_15283){
var state_val_15284 = (state_15283[(1)]);
if((state_val_15284 === (7))){
var inst_15276 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
var statearr_15293_18180 = state_15283__$1;
(statearr_15293_18180[(2)] = inst_15276);

(statearr_15293_18180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (1))){
var state_15283__$1 = state_15283;
var statearr_15295_18197 = state_15283__$1;
(statearr_15295_18197[(2)] = null);

(statearr_15295_18197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (4))){
var inst_15248 = (state_15283[(7)]);
var inst_15248__$1 = (state_15283[(2)]);
var inst_15251 = (inst_15248__$1 == null);
var state_15283__$1 = (function (){var statearr_15298 = state_15283;
(statearr_15298[(7)] = inst_15248__$1);

return statearr_15298;
})();
if(cljs.core.truth_(inst_15251)){
var statearr_15300_18205 = state_15283__$1;
(statearr_15300_18205[(1)] = (5));

} else {
var statearr_15304_18211 = state_15283__$1;
(statearr_15304_18211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (13))){
var state_15283__$1 = state_15283;
var statearr_15306_18215 = state_15283__$1;
(statearr_15306_18215[(2)] = null);

(statearr_15306_18215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (6))){
var inst_15248 = (state_15283[(7)]);
var inst_15262 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15248) : p.call(null, inst_15248));
var state_15283__$1 = state_15283;
if(cljs.core.truth_(inst_15262)){
var statearr_15310_18220 = state_15283__$1;
(statearr_15310_18220[(1)] = (9));

} else {
var statearr_15311_18221 = state_15283__$1;
(statearr_15311_18221[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (3))){
var inst_15278 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15283__$1,inst_15278);
} else {
if((state_val_15284 === (12))){
var state_15283__$1 = state_15283;
var statearr_15312_18229 = state_15283__$1;
(statearr_15312_18229[(2)] = null);

(statearr_15312_18229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (2))){
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15283__$1,(4),ch);
} else {
if((state_val_15284 === (11))){
var inst_15248 = (state_15283[(7)]);
var inst_15266 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15283__$1,(8),inst_15266,inst_15248);
} else {
if((state_val_15284 === (9))){
var state_15283__$1 = state_15283;
var statearr_15317_18234 = state_15283__$1;
(statearr_15317_18234[(2)] = tc);

(statearr_15317_18234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (5))){
var inst_15259 = cljs.core.async.close_BANG_(tc);
var inst_15260 = cljs.core.async.close_BANG_(fc);
var state_15283__$1 = (function (){var statearr_15318 = state_15283;
(statearr_15318[(8)] = inst_15259);

return statearr_15318;
})();
var statearr_15319_18252 = state_15283__$1;
(statearr_15319_18252[(2)] = inst_15260);

(statearr_15319_18252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (14))){
var inst_15274 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
var statearr_15327_18261 = state_15283__$1;
(statearr_15327_18261[(2)] = inst_15274);

(statearr_15327_18261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (10))){
var state_15283__$1 = state_15283;
var statearr_15328_18262 = state_15283__$1;
(statearr_15328_18262[(2)] = fc);

(statearr_15328_18262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (8))){
var inst_15269 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
if(cljs.core.truth_(inst_15269)){
var statearr_15330_18276 = state_15283__$1;
(statearr_15330_18276[(1)] = (12));

} else {
var statearr_15333_18277 = state_15283__$1;
(statearr_15333_18277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_15339 = [null,null,null,null,null,null,null,null,null];
(statearr_15339[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_15339[(1)] = (1));

return statearr_15339;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_15283){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_15283);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e15342){var ex__13350__auto__ = e15342;
var statearr_15343_18300 = state_15283;
(statearr_15343_18300[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_15283[(4)]))){
var statearr_15344_18301 = state_15283;
(statearr_15344_18301[(1)] = cljs.core.first((state_15283[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18309 = state_15283;
state_15283 = G__18309;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_15283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_15283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_15346 = f__14414__auto__();
(statearr_15346[(6)] = c__14413__auto___18170);

return statearr_15346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_15388){
var state_val_15389 = (state_15388[(1)]);
if((state_val_15389 === (7))){
var inst_15379 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15394_18325 = state_15388__$1;
(statearr_15394_18325[(2)] = inst_15379);

(statearr_15394_18325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (1))){
var inst_15362 = init;
var inst_15363 = inst_15362;
var state_15388__$1 = (function (){var statearr_15401 = state_15388;
(statearr_15401[(7)] = inst_15363);

return statearr_15401;
})();
var statearr_15402_18327 = state_15388__$1;
(statearr_15402_18327[(2)] = null);

(statearr_15402_18327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (4))){
var inst_15366 = (state_15388[(8)]);
var inst_15366__$1 = (state_15388[(2)]);
var inst_15367 = (inst_15366__$1 == null);
var state_15388__$1 = (function (){var statearr_15407 = state_15388;
(statearr_15407[(8)] = inst_15366__$1);

return statearr_15407;
})();
if(cljs.core.truth_(inst_15367)){
var statearr_15408_18336 = state_15388__$1;
(statearr_15408_18336[(1)] = (5));

} else {
var statearr_15411_18337 = state_15388__$1;
(statearr_15411_18337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (6))){
var inst_15363 = (state_15388[(7)]);
var inst_15366 = (state_15388[(8)]);
var inst_15370 = (state_15388[(9)]);
var inst_15370__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15363,inst_15366) : f.call(null, inst_15363,inst_15366));
var inst_15371 = cljs.core.reduced_QMARK_(inst_15370__$1);
var state_15388__$1 = (function (){var statearr_15412 = state_15388;
(statearr_15412[(9)] = inst_15370__$1);

return statearr_15412;
})();
if(inst_15371){
var statearr_15413_18341 = state_15388__$1;
(statearr_15413_18341[(1)] = (8));

} else {
var statearr_15414_18342 = state_15388__$1;
(statearr_15414_18342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (3))){
var inst_15381 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15388__$1,inst_15381);
} else {
if((state_val_15389 === (2))){
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15388__$1,(4),ch);
} else {
if((state_val_15389 === (9))){
var inst_15370 = (state_15388[(9)]);
var inst_15363 = inst_15370;
var state_15388__$1 = (function (){var statearr_15419 = state_15388;
(statearr_15419[(7)] = inst_15363);

return statearr_15419;
})();
var statearr_15420_18343 = state_15388__$1;
(statearr_15420_18343[(2)] = null);

(statearr_15420_18343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (5))){
var inst_15363 = (state_15388[(7)]);
var state_15388__$1 = state_15388;
var statearr_15422_18344 = state_15388__$1;
(statearr_15422_18344[(2)] = inst_15363);

(statearr_15422_18344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (10))){
var inst_15377 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15423_18346 = state_15388__$1;
(statearr_15423_18346[(2)] = inst_15377);

(statearr_15423_18346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (8))){
var inst_15370 = (state_15388[(9)]);
var inst_15373 = cljs.core.deref(inst_15370);
var state_15388__$1 = state_15388;
var statearr_15424_18347 = state_15388__$1;
(statearr_15424_18347[(2)] = inst_15373);

(statearr_15424_18347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13347__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13347__auto____0 = (function (){
var statearr_15425 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15425[(0)] = cljs$core$async$reduce_$_state_machine__13347__auto__);

(statearr_15425[(1)] = (1));

return statearr_15425;
});
var cljs$core$async$reduce_$_state_machine__13347__auto____1 = (function (state_15388){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_15388);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e15430){var ex__13350__auto__ = e15430;
var statearr_15434_18361 = state_15388;
(statearr_15434_18361[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_15388[(4)]))){
var statearr_15435_18366 = state_15388;
(statearr_15435_18366[(1)] = cljs.core.first((state_15388[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18369 = state_15388;
state_15388 = G__18369;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13347__auto__ = function(state_15388){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13347__auto____1.call(this,state_15388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13347__auto____0;
cljs$core$async$reduce_$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13347__auto____1;
return cljs$core$async$reduce_$_state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_15437 = f__14414__auto__();
(statearr_15437[(6)] = c__14413__auto__);

return statearr_15437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));

return c__14413__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_15451){
var state_val_15452 = (state_15451[(1)]);
if((state_val_15452 === (1))){
var inst_15445 = cljs.core.async.reduce(f__$1,init,ch);
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15451__$1,(2),inst_15445);
} else {
if((state_val_15452 === (2))){
var inst_15447 = (state_15451[(2)]);
var inst_15448 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15447) : f__$1.call(null, inst_15447));
var state_15451__$1 = state_15451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15451__$1,inst_15448);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13347__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13347__auto____0 = (function (){
var statearr_15457 = [null,null,null,null,null,null,null];
(statearr_15457[(0)] = cljs$core$async$transduce_$_state_machine__13347__auto__);

(statearr_15457[(1)] = (1));

return statearr_15457;
});
var cljs$core$async$transduce_$_state_machine__13347__auto____1 = (function (state_15451){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_15451);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e15458){var ex__13350__auto__ = e15458;
var statearr_15459_18378 = state_15451;
(statearr_15459_18378[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_15451[(4)]))){
var statearr_15460_18383 = state_15451;
(statearr_15460_18383[(1)] = cljs.core.first((state_15451[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18389 = state_15451;
state_15451 = G__18389;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13347__auto__ = function(state_15451){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13347__auto____1.call(this,state_15451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13347__auto____0;
cljs$core$async$transduce_$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13347__auto____1;
return cljs$core$async$transduce_$_state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_15463 = f__14414__auto__();
(statearr_15463[(6)] = c__14413__auto__);

return statearr_15463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));

return c__14413__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15473 = arguments.length;
switch (G__15473) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_15499){
var state_val_15500 = (state_15499[(1)]);
if((state_val_15500 === (7))){
var inst_15481 = (state_15499[(2)]);
var state_15499__$1 = state_15499;
var statearr_15507_18402 = state_15499__$1;
(statearr_15507_18402[(2)] = inst_15481);

(statearr_15507_18402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (1))){
var inst_15475 = cljs.core.seq(coll);
var inst_15476 = inst_15475;
var state_15499__$1 = (function (){var statearr_15509 = state_15499;
(statearr_15509[(7)] = inst_15476);

return statearr_15509;
})();
var statearr_15511_18409 = state_15499__$1;
(statearr_15511_18409[(2)] = null);

(statearr_15511_18409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (4))){
var inst_15476 = (state_15499[(7)]);
var inst_15479 = cljs.core.first(inst_15476);
var state_15499__$1 = state_15499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15499__$1,(7),ch,inst_15479);
} else {
if((state_val_15500 === (13))){
var inst_15493 = (state_15499[(2)]);
var state_15499__$1 = state_15499;
var statearr_15513_18417 = state_15499__$1;
(statearr_15513_18417[(2)] = inst_15493);

(statearr_15513_18417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (6))){
var inst_15484 = (state_15499[(2)]);
var state_15499__$1 = state_15499;
if(cljs.core.truth_(inst_15484)){
var statearr_15514_18419 = state_15499__$1;
(statearr_15514_18419[(1)] = (8));

} else {
var statearr_15515_18421 = state_15499__$1;
(statearr_15515_18421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (3))){
var inst_15497 = (state_15499[(2)]);
var state_15499__$1 = state_15499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15499__$1,inst_15497);
} else {
if((state_val_15500 === (12))){
var state_15499__$1 = state_15499;
var statearr_15516_18428 = state_15499__$1;
(statearr_15516_18428[(2)] = null);

(statearr_15516_18428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (2))){
var inst_15476 = (state_15499[(7)]);
var state_15499__$1 = state_15499;
if(cljs.core.truth_(inst_15476)){
var statearr_15517_18429 = state_15499__$1;
(statearr_15517_18429[(1)] = (4));

} else {
var statearr_15518_18430 = state_15499__$1;
(statearr_15518_18430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (11))){
var inst_15490 = cljs.core.async.close_BANG_(ch);
var state_15499__$1 = state_15499;
var statearr_15519_18434 = state_15499__$1;
(statearr_15519_18434[(2)] = inst_15490);

(statearr_15519_18434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (9))){
var state_15499__$1 = state_15499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15520_18435 = state_15499__$1;
(statearr_15520_18435[(1)] = (11));

} else {
var statearr_15521_18442 = state_15499__$1;
(statearr_15521_18442[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (5))){
var inst_15476 = (state_15499[(7)]);
var state_15499__$1 = state_15499;
var statearr_15522_18443 = state_15499__$1;
(statearr_15522_18443[(2)] = inst_15476);

(statearr_15522_18443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (10))){
var inst_15495 = (state_15499[(2)]);
var state_15499__$1 = state_15499;
var statearr_15523_18446 = state_15499__$1;
(statearr_15523_18446[(2)] = inst_15495);

(statearr_15523_18446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15500 === (8))){
var inst_15476 = (state_15499[(7)]);
var inst_15486 = cljs.core.next(inst_15476);
var inst_15476__$1 = inst_15486;
var state_15499__$1 = (function (){var statearr_15524 = state_15499;
(statearr_15524[(7)] = inst_15476__$1);

return statearr_15524;
})();
var statearr_15525_18449 = state_15499__$1;
(statearr_15525_18449[(2)] = null);

(statearr_15525_18449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_15526 = [null,null,null,null,null,null,null,null];
(statearr_15526[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_15526[(1)] = (1));

return statearr_15526;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_15499){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_15499);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e15527){var ex__13350__auto__ = e15527;
var statearr_15528_18450 = state_15499;
(statearr_15528_18450[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_15499[(4)]))){
var statearr_15529_18451 = state_15499;
(statearr_15529_18451[(1)] = cljs.core.first((state_15499[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18452 = state_15499;
state_15499 = G__18452;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_15499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_15499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_15530 = f__14414__auto__();
(statearr_15530[(6)] = c__14413__auto__);

return statearr_15530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));

return c__14413__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15533 = arguments.length;
switch (G__15533) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18466 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18466(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18477 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18477(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18479 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18479(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18483 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18483(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15558 = (function (ch,cs,meta15559){
this.ch = ch;
this.cs = cs;
this.meta15559 = meta15559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15560,meta15559__$1){
var self__ = this;
var _15560__$1 = this;
return (new cljs.core.async.t_cljs$core$async15558(self__.ch,self__.cs,meta15559__$1));
}));

(cljs.core.async.t_cljs$core$async15558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15560){
var self__ = this;
var _15560__$1 = this;
return self__.meta15559;
}));

(cljs.core.async.t_cljs$core$async15558.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15558.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15558.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15558.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15558.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15559","meta15559",1470822043,null)], null);
}));

(cljs.core.async.t_cljs$core$async15558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15558");

(cljs.core.async.t_cljs$core$async15558.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15558.
 */
cljs.core.async.__GT_t_cljs$core$async15558 = (function cljs$core$async$__GT_t_cljs$core$async15558(ch,cs,meta15559){
return (new cljs.core.async.t_cljs$core$async15558(ch,cs,meta15559));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15558(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14413__auto___18493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_15806){
var state_val_15810 = (state_15806[(1)]);
if((state_val_15810 === (7))){
var inst_15792 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15817_18494 = state_15806__$1;
(statearr_15817_18494[(2)] = inst_15792);

(statearr_15817_18494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (20))){
var inst_15623 = (state_15806[(7)]);
var inst_15663 = cljs.core.first(inst_15623);
var inst_15664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15663,(0),null);
var inst_15665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15663,(1),null);
var state_15806__$1 = (function (){var statearr_15818 = state_15806;
(statearr_15818[(8)] = inst_15664);

return statearr_15818;
})();
if(cljs.core.truth_(inst_15665)){
var statearr_15819_18495 = state_15806__$1;
(statearr_15819_18495[(1)] = (22));

} else {
var statearr_15820_18496 = state_15806__$1;
(statearr_15820_18496[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (27))){
var inst_15707 = (state_15806[(9)]);
var inst_15714 = (state_15806[(10)]);
var inst_15577 = (state_15806[(11)]);
var inst_15705 = (state_15806[(12)]);
var inst_15714__$1 = cljs.core._nth(inst_15705,inst_15707);
var inst_15717 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15714__$1,inst_15577,done);
var state_15806__$1 = (function (){var statearr_15821 = state_15806;
(statearr_15821[(10)] = inst_15714__$1);

return statearr_15821;
})();
if(cljs.core.truth_(inst_15717)){
var statearr_15822_18500 = state_15806__$1;
(statearr_15822_18500[(1)] = (30));

} else {
var statearr_15823_18502 = state_15806__$1;
(statearr_15823_18502[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (1))){
var state_15806__$1 = state_15806;
var statearr_15826_18504 = state_15806__$1;
(statearr_15826_18504[(2)] = null);

(statearr_15826_18504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (24))){
var inst_15623 = (state_15806[(7)]);
var inst_15672 = (state_15806[(2)]);
var inst_15675 = cljs.core.next(inst_15623);
var inst_15590 = inst_15675;
var inst_15591 = null;
var inst_15592 = (0);
var inst_15593 = (0);
var state_15806__$1 = (function (){var statearr_15828 = state_15806;
(statearr_15828[(13)] = inst_15593);

(statearr_15828[(14)] = inst_15591);

(statearr_15828[(15)] = inst_15592);

(statearr_15828[(16)] = inst_15590);

(statearr_15828[(17)] = inst_15672);

return statearr_15828;
})();
var statearr_15829_18509 = state_15806__$1;
(statearr_15829_18509[(2)] = null);

(statearr_15829_18509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (39))){
var state_15806__$1 = state_15806;
var statearr_15842_18511 = state_15806__$1;
(statearr_15842_18511[(2)] = null);

(statearr_15842_18511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (4))){
var inst_15577 = (state_15806[(11)]);
var inst_15577__$1 = (state_15806[(2)]);
var inst_15578 = (inst_15577__$1 == null);
var state_15806__$1 = (function (){var statearr_15843 = state_15806;
(statearr_15843[(11)] = inst_15577__$1);

return statearr_15843;
})();
if(cljs.core.truth_(inst_15578)){
var statearr_15844_18514 = state_15806__$1;
(statearr_15844_18514[(1)] = (5));

} else {
var statearr_15845_18515 = state_15806__$1;
(statearr_15845_18515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (15))){
var inst_15593 = (state_15806[(13)]);
var inst_15591 = (state_15806[(14)]);
var inst_15592 = (state_15806[(15)]);
var inst_15590 = (state_15806[(16)]);
var inst_15618 = (state_15806[(2)]);
var inst_15619 = (inst_15593 + (1));
var tmp15837 = inst_15591;
var tmp15838 = inst_15592;
var tmp15839 = inst_15590;
var inst_15590__$1 = tmp15839;
var inst_15591__$1 = tmp15837;
var inst_15592__$1 = tmp15838;
var inst_15593__$1 = inst_15619;
var state_15806__$1 = (function (){var statearr_15849 = state_15806;
(statearr_15849[(18)] = inst_15618);

(statearr_15849[(13)] = inst_15593__$1);

(statearr_15849[(14)] = inst_15591__$1);

(statearr_15849[(15)] = inst_15592__$1);

(statearr_15849[(16)] = inst_15590__$1);

return statearr_15849;
})();
var statearr_15850_18520 = state_15806__$1;
(statearr_15850_18520[(2)] = null);

(statearr_15850_18520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (21))){
var inst_15678 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15854_18521 = state_15806__$1;
(statearr_15854_18521[(2)] = inst_15678);

(statearr_15854_18521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (31))){
var inst_15714 = (state_15806[(10)]);
var inst_15723 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15714);
var state_15806__$1 = state_15806;
var statearr_15864_18525 = state_15806__$1;
(statearr_15864_18525[(2)] = inst_15723);

(statearr_15864_18525[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (32))){
var inst_15707 = (state_15806[(9)]);
var inst_15704 = (state_15806[(19)]);
var inst_15706 = (state_15806[(20)]);
var inst_15705 = (state_15806[(12)]);
var inst_15725 = (state_15806[(2)]);
var inst_15730 = (inst_15707 + (1));
var tmp15851 = inst_15704;
var tmp15852 = inst_15706;
var tmp15853 = inst_15705;
var inst_15704__$1 = tmp15851;
var inst_15705__$1 = tmp15853;
var inst_15706__$1 = tmp15852;
var inst_15707__$1 = inst_15730;
var state_15806__$1 = (function (){var statearr_15872 = state_15806;
(statearr_15872[(9)] = inst_15707__$1);

(statearr_15872[(21)] = inst_15725);

(statearr_15872[(19)] = inst_15704__$1);

(statearr_15872[(20)] = inst_15706__$1);

(statearr_15872[(12)] = inst_15705__$1);

return statearr_15872;
})();
var statearr_15875_18531 = state_15806__$1;
(statearr_15875_18531[(2)] = null);

(statearr_15875_18531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (40))){
var inst_15750 = (state_15806[(22)]);
var inst_15761 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15750);
var state_15806__$1 = state_15806;
var statearr_15876_18536 = state_15806__$1;
(statearr_15876_18536[(2)] = inst_15761);

(statearr_15876_18536[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (33))){
var inst_15733 = (state_15806[(23)]);
var inst_15735 = cljs.core.chunked_seq_QMARK_(inst_15733);
var state_15806__$1 = state_15806;
if(inst_15735){
var statearr_15878_18537 = state_15806__$1;
(statearr_15878_18537[(1)] = (36));

} else {
var statearr_15879_18541 = state_15806__$1;
(statearr_15879_18541[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (13))){
var inst_15609 = (state_15806[(24)]);
var inst_15614 = cljs.core.async.close_BANG_(inst_15609);
var state_15806__$1 = state_15806;
var statearr_15885_18542 = state_15806__$1;
(statearr_15885_18542[(2)] = inst_15614);

(statearr_15885_18542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (22))){
var inst_15664 = (state_15806[(8)]);
var inst_15669 = cljs.core.async.close_BANG_(inst_15664);
var state_15806__$1 = state_15806;
var statearr_15886_18546 = state_15806__$1;
(statearr_15886_18546[(2)] = inst_15669);

(statearr_15886_18546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (36))){
var inst_15733 = (state_15806[(23)]);
var inst_15738 = cljs.core.chunk_first(inst_15733);
var inst_15739 = cljs.core.chunk_rest(inst_15733);
var inst_15740 = cljs.core.count(inst_15738);
var inst_15704 = inst_15739;
var inst_15705 = inst_15738;
var inst_15706 = inst_15740;
var inst_15707 = (0);
var state_15806__$1 = (function (){var statearr_15889 = state_15806;
(statearr_15889[(9)] = inst_15707);

(statearr_15889[(19)] = inst_15704);

(statearr_15889[(20)] = inst_15706);

(statearr_15889[(12)] = inst_15705);

return statearr_15889;
})();
var statearr_15890_18551 = state_15806__$1;
(statearr_15890_18551[(2)] = null);

(statearr_15890_18551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (41))){
var inst_15733 = (state_15806[(23)]);
var inst_15763 = (state_15806[(2)]);
var inst_15764 = cljs.core.next(inst_15733);
var inst_15704 = inst_15764;
var inst_15705 = null;
var inst_15706 = (0);
var inst_15707 = (0);
var state_15806__$1 = (function (){var statearr_15891 = state_15806;
(statearr_15891[(9)] = inst_15707);

(statearr_15891[(19)] = inst_15704);

(statearr_15891[(25)] = inst_15763);

(statearr_15891[(20)] = inst_15706);

(statearr_15891[(12)] = inst_15705);

return statearr_15891;
})();
var statearr_15892_18553 = state_15806__$1;
(statearr_15892_18553[(2)] = null);

(statearr_15892_18553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (43))){
var state_15806__$1 = state_15806;
var statearr_15895_18558 = state_15806__$1;
(statearr_15895_18558[(2)] = null);

(statearr_15895_18558[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (29))){
var inst_15773 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15899_18559 = state_15806__$1;
(statearr_15899_18559[(2)] = inst_15773);

(statearr_15899_18559[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (44))){
var inst_15789 = (state_15806[(2)]);
var state_15806__$1 = (function (){var statearr_15903 = state_15806;
(statearr_15903[(26)] = inst_15789);

return statearr_15903;
})();
var statearr_15904_18560 = state_15806__$1;
(statearr_15904_18560[(2)] = null);

(statearr_15904_18560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (6))){
var inst_15693 = (state_15806[(27)]);
var inst_15692 = cljs.core.deref(cs);
var inst_15693__$1 = cljs.core.keys(inst_15692);
var inst_15694 = cljs.core.count(inst_15693__$1);
var inst_15695 = cljs.core.reset_BANG_(dctr,inst_15694);
var inst_15702 = cljs.core.seq(inst_15693__$1);
var inst_15704 = inst_15702;
var inst_15705 = null;
var inst_15706 = (0);
var inst_15707 = (0);
var state_15806__$1 = (function (){var statearr_15914 = state_15806;
(statearr_15914[(9)] = inst_15707);

(statearr_15914[(19)] = inst_15704);

(statearr_15914[(28)] = inst_15695);

(statearr_15914[(27)] = inst_15693__$1);

(statearr_15914[(20)] = inst_15706);

(statearr_15914[(12)] = inst_15705);

return statearr_15914;
})();
var statearr_15915_18561 = state_15806__$1;
(statearr_15915_18561[(2)] = null);

(statearr_15915_18561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (28))){
var inst_15733 = (state_15806[(23)]);
var inst_15704 = (state_15806[(19)]);
var inst_15733__$1 = cljs.core.seq(inst_15704);
var state_15806__$1 = (function (){var statearr_15922 = state_15806;
(statearr_15922[(23)] = inst_15733__$1);

return statearr_15922;
})();
if(inst_15733__$1){
var statearr_15923_18566 = state_15806__$1;
(statearr_15923_18566[(1)] = (33));

} else {
var statearr_15924_18567 = state_15806__$1;
(statearr_15924_18567[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (25))){
var inst_15707 = (state_15806[(9)]);
var inst_15706 = (state_15806[(20)]);
var inst_15709 = (inst_15707 < inst_15706);
var inst_15710 = inst_15709;
var state_15806__$1 = state_15806;
if(cljs.core.truth_(inst_15710)){
var statearr_15929_18571 = state_15806__$1;
(statearr_15929_18571[(1)] = (27));

} else {
var statearr_15934_18572 = state_15806__$1;
(statearr_15934_18572[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (34))){
var state_15806__$1 = state_15806;
var statearr_15939_18576 = state_15806__$1;
(statearr_15939_18576[(2)] = null);

(statearr_15939_18576[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (17))){
var state_15806__$1 = state_15806;
var statearr_15941_18577 = state_15806__$1;
(statearr_15941_18577[(2)] = null);

(statearr_15941_18577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (3))){
var inst_15794 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15806__$1,inst_15794);
} else {
if((state_val_15810 === (12))){
var inst_15684 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15946_18581 = state_15806__$1;
(statearr_15946_18581[(2)] = inst_15684);

(statearr_15946_18581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (2))){
var state_15806__$1 = state_15806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15806__$1,(4),ch);
} else {
if((state_val_15810 === (23))){
var state_15806__$1 = state_15806;
var statearr_15951_18586 = state_15806__$1;
(statearr_15951_18586[(2)] = null);

(statearr_15951_18586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (35))){
var inst_15770 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15955_18590 = state_15806__$1;
(statearr_15955_18590[(2)] = inst_15770);

(statearr_15955_18590[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (19))){
var inst_15623 = (state_15806[(7)]);
var inst_15627 = cljs.core.chunk_first(inst_15623);
var inst_15651 = cljs.core.chunk_rest(inst_15623);
var inst_15656 = cljs.core.count(inst_15627);
var inst_15590 = inst_15651;
var inst_15591 = inst_15627;
var inst_15592 = inst_15656;
var inst_15593 = (0);
var state_15806__$1 = (function (){var statearr_15965 = state_15806;
(statearr_15965[(13)] = inst_15593);

(statearr_15965[(14)] = inst_15591);

(statearr_15965[(15)] = inst_15592);

(statearr_15965[(16)] = inst_15590);

return statearr_15965;
})();
var statearr_15966_18591 = state_15806__$1;
(statearr_15966_18591[(2)] = null);

(statearr_15966_18591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (11))){
var inst_15623 = (state_15806[(7)]);
var inst_15590 = (state_15806[(16)]);
var inst_15623__$1 = cljs.core.seq(inst_15590);
var state_15806__$1 = (function (){var statearr_15970 = state_15806;
(statearr_15970[(7)] = inst_15623__$1);

return statearr_15970;
})();
if(inst_15623__$1){
var statearr_15973_18592 = state_15806__$1;
(statearr_15973_18592[(1)] = (16));

} else {
var statearr_15974_18593 = state_15806__$1;
(statearr_15974_18593[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (9))){
var inst_15686 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15976_18596 = state_15806__$1;
(statearr_15976_18596[(2)] = inst_15686);

(statearr_15976_18596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (5))){
var inst_15586 = cljs.core.deref(cs);
var inst_15587 = cljs.core.seq(inst_15586);
var inst_15590 = inst_15587;
var inst_15591 = null;
var inst_15592 = (0);
var inst_15593 = (0);
var state_15806__$1 = (function (){var statearr_15978 = state_15806;
(statearr_15978[(13)] = inst_15593);

(statearr_15978[(14)] = inst_15591);

(statearr_15978[(15)] = inst_15592);

(statearr_15978[(16)] = inst_15590);

return statearr_15978;
})();
var statearr_15979_18597 = state_15806__$1;
(statearr_15979_18597[(2)] = null);

(statearr_15979_18597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (14))){
var state_15806__$1 = state_15806;
var statearr_15980_18598 = state_15806__$1;
(statearr_15980_18598[(2)] = null);

(statearr_15980_18598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (45))){
var inst_15786 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15982_18603 = state_15806__$1;
(statearr_15982_18603[(2)] = inst_15786);

(statearr_15982_18603[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (26))){
var inst_15693 = (state_15806[(27)]);
var inst_15776 = (state_15806[(2)]);
var inst_15783 = cljs.core.seq(inst_15693);
var state_15806__$1 = (function (){var statearr_15983 = state_15806;
(statearr_15983[(29)] = inst_15776);

return statearr_15983;
})();
if(inst_15783){
var statearr_15985_18605 = state_15806__$1;
(statearr_15985_18605[(1)] = (42));

} else {
var statearr_15989_18606 = state_15806__$1;
(statearr_15989_18606[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (16))){
var inst_15623 = (state_15806[(7)]);
var inst_15625 = cljs.core.chunked_seq_QMARK_(inst_15623);
var state_15806__$1 = state_15806;
if(inst_15625){
var statearr_15990_18610 = state_15806__$1;
(statearr_15990_18610[(1)] = (19));

} else {
var statearr_15991_18611 = state_15806__$1;
(statearr_15991_18611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (38))){
var inst_15767 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_15993_18615 = state_15806__$1;
(statearr_15993_18615[(2)] = inst_15767);

(statearr_15993_18615[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (30))){
var state_15806__$1 = state_15806;
var statearr_15997_18617 = state_15806__$1;
(statearr_15997_18617[(2)] = null);

(statearr_15997_18617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (10))){
var inst_15593 = (state_15806[(13)]);
var inst_15591 = (state_15806[(14)]);
var inst_15608 = cljs.core._nth(inst_15591,inst_15593);
var inst_15609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15608,(0),null);
var inst_15610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15608,(1),null);
var state_15806__$1 = (function (){var statearr_15999 = state_15806;
(statearr_15999[(24)] = inst_15609);

return statearr_15999;
})();
if(cljs.core.truth_(inst_15610)){
var statearr_16000_18619 = state_15806__$1;
(statearr_16000_18619[(1)] = (13));

} else {
var statearr_16001_18625 = state_15806__$1;
(statearr_16001_18625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (18))){
var inst_15682 = (state_15806[(2)]);
var state_15806__$1 = state_15806;
var statearr_16006_18631 = state_15806__$1;
(statearr_16006_18631[(2)] = inst_15682);

(statearr_16006_18631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (42))){
var state_15806__$1 = state_15806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15806__$1,(45),dchan);
} else {
if((state_val_15810 === (37))){
var inst_15577 = (state_15806[(11)]);
var inst_15750 = (state_15806[(22)]);
var inst_15733 = (state_15806[(23)]);
var inst_15750__$1 = cljs.core.first(inst_15733);
var inst_15752 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15750__$1,inst_15577,done);
var state_15806__$1 = (function (){var statearr_16009 = state_15806;
(statearr_16009[(22)] = inst_15750__$1);

return statearr_16009;
})();
if(cljs.core.truth_(inst_15752)){
var statearr_16010_18640 = state_15806__$1;
(statearr_16010_18640[(1)] = (39));

} else {
var statearr_16022_18641 = state_15806__$1;
(statearr_16022_18641[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15810 === (8))){
var inst_15593 = (state_15806[(13)]);
var inst_15592 = (state_15806[(15)]);
var inst_15598 = (inst_15593 < inst_15592);
var inst_15599 = inst_15598;
var state_15806__$1 = state_15806;
if(cljs.core.truth_(inst_15599)){
var statearr_16023_18642 = state_15806__$1;
(statearr_16023_18642[(1)] = (10));

} else {
var statearr_16025_18646 = state_15806__$1;
(statearr_16025_18646[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13347__auto__ = null;
var cljs$core$async$mult_$_state_machine__13347__auto____0 = (function (){
var statearr_16027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16027[(0)] = cljs$core$async$mult_$_state_machine__13347__auto__);

(statearr_16027[(1)] = (1));

return statearr_16027;
});
var cljs$core$async$mult_$_state_machine__13347__auto____1 = (function (state_15806){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_15806);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e16032){var ex__13350__auto__ = e16032;
var statearr_16033_18656 = state_15806;
(statearr_16033_18656[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_15806[(4)]))){
var statearr_16034_18657 = state_15806;
(statearr_16034_18657[(1)] = cljs.core.first((state_15806[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18659 = state_15806;
state_15806 = G__18659;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13347__auto__ = function(state_15806){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13347__auto____1.call(this,state_15806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13347__auto____0;
cljs$core$async$mult_$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13347__auto____1;
return cljs$core$async$mult_$_state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_16039 = f__14414__auto__();
(statearr_16039[(6)] = c__14413__auto___18493);

return statearr_16039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16046 = arguments.length;
switch (G__16046) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18665 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18665(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18677 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18677(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18678 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18678(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18679 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18679(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18681 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18681(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18689 = arguments.length;
var i__5727__auto___18690 = (0);
while(true){
if((i__5727__auto___18690 < len__5726__auto___18689)){
args__5732__auto__.push((arguments[i__5727__auto___18690]));

var G__18691 = (i__5727__auto___18690 + (1));
i__5727__auto___18690 = G__18691;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16083){
var map__16088 = p__16083;
var map__16088__$1 = cljs.core.__destructure_map(map__16088);
var opts = map__16088__$1;
var statearr_16089_18695 = state;
(statearr_16089_18695[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16090_18696 = state;
(statearr_16090_18696[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16091_18700 = state;
(statearr_16091_18700[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16068){
var G__16069 = cljs.core.first(seq16068);
var seq16068__$1 = cljs.core.next(seq16068);
var G__16070 = cljs.core.first(seq16068__$1);
var seq16068__$2 = cljs.core.next(seq16068__$1);
var G__16071 = cljs.core.first(seq16068__$2);
var seq16068__$3 = cljs.core.next(seq16068__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16069,G__16070,G__16071,seq16068__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16103 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16104){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16104 = meta16104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16105,meta16104__$1){
var self__ = this;
var _16105__$1 = this;
return (new cljs.core.async.t_cljs$core$async16103(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16104__$1));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16105){
var self__ = this;
var _16105__$1 = this;
return self__.meta16104;
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16104","meta16104",1419047555,null)], null);
}));

(cljs.core.async.t_cljs$core$async16103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16103");

(cljs.core.async.t_cljs$core$async16103.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16103.
 */
cljs.core.async.__GT_t_cljs$core$async16103 = (function cljs$core$async$__GT_t_cljs$core$async16103(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16104){
return (new cljs.core.async.t_cljs$core$async16103(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16104));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16103(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14413__auto___18719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_16200){
var state_val_16201 = (state_16200[(1)]);
if((state_val_16201 === (7))){
var inst_16144 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
if(cljs.core.truth_(inst_16144)){
var statearr_16210_18720 = state_16200__$1;
(statearr_16210_18720[(1)] = (8));

} else {
var statearr_16215_18722 = state_16200__$1;
(statearr_16215_18722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (20))){
var inst_16137 = (state_16200[(7)]);
var state_16200__$1 = state_16200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16200__$1,(23),out,inst_16137);
} else {
if((state_val_16201 === (1))){
var inst_16118 = calc_state();
var inst_16120 = cljs.core.__destructure_map(inst_16118);
var inst_16121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16120,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16120,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16120,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16125 = inst_16118;
var state_16200__$1 = (function (){var statearr_16225 = state_16200;
(statearr_16225[(8)] = inst_16123);

(statearr_16225[(9)] = inst_16125);

(statearr_16225[(10)] = inst_16122);

(statearr_16225[(11)] = inst_16121);

return statearr_16225;
})();
var statearr_16230_18729 = state_16200__$1;
(statearr_16230_18729[(2)] = null);

(statearr_16230_18729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (24))){
var inst_16128 = (state_16200[(12)]);
var inst_16125 = inst_16128;
var state_16200__$1 = (function (){var statearr_16235 = state_16200;
(statearr_16235[(9)] = inst_16125);

return statearr_16235;
})();
var statearr_16236_18730 = state_16200__$1;
(statearr_16236_18730[(2)] = null);

(statearr_16236_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (4))){
var inst_16139 = (state_16200[(13)]);
var inst_16137 = (state_16200[(7)]);
var inst_16136 = (state_16200[(2)]);
var inst_16137__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16136,(0),null);
var inst_16138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16136,(1),null);
var inst_16139__$1 = (inst_16137__$1 == null);
var state_16200__$1 = (function (){var statearr_16237 = state_16200;
(statearr_16237[(14)] = inst_16138);

(statearr_16237[(13)] = inst_16139__$1);

(statearr_16237[(7)] = inst_16137__$1);

return statearr_16237;
})();
if(cljs.core.truth_(inst_16139__$1)){
var statearr_16238_18736 = state_16200__$1;
(statearr_16238_18736[(1)] = (5));

} else {
var statearr_16239_18738 = state_16200__$1;
(statearr_16239_18738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (15))){
var inst_16161 = (state_16200[(15)]);
var inst_16129 = (state_16200[(16)]);
var inst_16161__$1 = cljs.core.empty_QMARK_(inst_16129);
var state_16200__$1 = (function (){var statearr_16248 = state_16200;
(statearr_16248[(15)] = inst_16161__$1);

return statearr_16248;
})();
if(inst_16161__$1){
var statearr_16249_18745 = state_16200__$1;
(statearr_16249_18745[(1)] = (17));

} else {
var statearr_16256_18747 = state_16200__$1;
(statearr_16256_18747[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (21))){
var inst_16128 = (state_16200[(12)]);
var inst_16125 = inst_16128;
var state_16200__$1 = (function (){var statearr_16257 = state_16200;
(statearr_16257[(9)] = inst_16125);

return statearr_16257;
})();
var statearr_16258_18748 = state_16200__$1;
(statearr_16258_18748[(2)] = null);

(statearr_16258_18748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (13))){
var inst_16152 = (state_16200[(2)]);
var inst_16153 = calc_state();
var inst_16125 = inst_16153;
var state_16200__$1 = (function (){var statearr_16270 = state_16200;
(statearr_16270[(17)] = inst_16152);

(statearr_16270[(9)] = inst_16125);

return statearr_16270;
})();
var statearr_16271_18751 = state_16200__$1;
(statearr_16271_18751[(2)] = null);

(statearr_16271_18751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (22))){
var inst_16186 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
var statearr_16277_18752 = state_16200__$1;
(statearr_16277_18752[(2)] = inst_16186);

(statearr_16277_18752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (6))){
var inst_16138 = (state_16200[(14)]);
var inst_16142 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16138,change);
var state_16200__$1 = state_16200;
var statearr_16280_18755 = state_16200__$1;
(statearr_16280_18755[(2)] = inst_16142);

(statearr_16280_18755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (25))){
var state_16200__$1 = state_16200;
var statearr_16282_18756 = state_16200__$1;
(statearr_16282_18756[(2)] = null);

(statearr_16282_18756[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (17))){
var inst_16138 = (state_16200[(14)]);
var inst_16130 = (state_16200[(18)]);
var inst_16165 = (inst_16130.cljs$core$IFn$_invoke$arity$1 ? inst_16130.cljs$core$IFn$_invoke$arity$1(inst_16138) : inst_16130.call(null, inst_16138));
var inst_16166 = cljs.core.not(inst_16165);
var state_16200__$1 = state_16200;
var statearr_16301_18760 = state_16200__$1;
(statearr_16301_18760[(2)] = inst_16166);

(statearr_16301_18760[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (3))){
var inst_16190 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16200__$1,inst_16190);
} else {
if((state_val_16201 === (12))){
var state_16200__$1 = state_16200;
var statearr_16310_18761 = state_16200__$1;
(statearr_16310_18761[(2)] = null);

(statearr_16310_18761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (2))){
var inst_16125 = (state_16200[(9)]);
var inst_16128 = (state_16200[(12)]);
var inst_16128__$1 = cljs.core.__destructure_map(inst_16125);
var inst_16129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16128__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16128__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16128__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16200__$1 = (function (){var statearr_16317 = state_16200;
(statearr_16317[(12)] = inst_16128__$1);

(statearr_16317[(18)] = inst_16130);

(statearr_16317[(16)] = inst_16129);

return statearr_16317;
})();
return cljs.core.async.ioc_alts_BANG_(state_16200__$1,(4),inst_16131);
} else {
if((state_val_16201 === (23))){
var inst_16176 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
if(cljs.core.truth_(inst_16176)){
var statearr_16321_18765 = state_16200__$1;
(statearr_16321_18765[(1)] = (24));

} else {
var statearr_16322_18766 = state_16200__$1;
(statearr_16322_18766[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (19))){
var inst_16170 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
var statearr_16325_18767 = state_16200__$1;
(statearr_16325_18767[(2)] = inst_16170);

(statearr_16325_18767[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (11))){
var inst_16138 = (state_16200[(14)]);
var inst_16149 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16138);
var state_16200__$1 = state_16200;
var statearr_16329_18771 = state_16200__$1;
(statearr_16329_18771[(2)] = inst_16149);

(statearr_16329_18771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (9))){
var inst_16156 = (state_16200[(19)]);
var inst_16138 = (state_16200[(14)]);
var inst_16129 = (state_16200[(16)]);
var inst_16156__$1 = (inst_16129.cljs$core$IFn$_invoke$arity$1 ? inst_16129.cljs$core$IFn$_invoke$arity$1(inst_16138) : inst_16129.call(null, inst_16138));
var state_16200__$1 = (function (){var statearr_16330 = state_16200;
(statearr_16330[(19)] = inst_16156__$1);

return statearr_16330;
})();
if(cljs.core.truth_(inst_16156__$1)){
var statearr_16332_18778 = state_16200__$1;
(statearr_16332_18778[(1)] = (14));

} else {
var statearr_16333_18779 = state_16200__$1;
(statearr_16333_18779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (5))){
var inst_16139 = (state_16200[(13)]);
var state_16200__$1 = state_16200;
var statearr_16334_18782 = state_16200__$1;
(statearr_16334_18782[(2)] = inst_16139);

(statearr_16334_18782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (14))){
var inst_16156 = (state_16200[(19)]);
var state_16200__$1 = state_16200;
var statearr_16335_18784 = state_16200__$1;
(statearr_16335_18784[(2)] = inst_16156);

(statearr_16335_18784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (26))){
var inst_16181 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
var statearr_16336_18787 = state_16200__$1;
(statearr_16336_18787[(2)] = inst_16181);

(statearr_16336_18787[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (16))){
var inst_16172 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
if(cljs.core.truth_(inst_16172)){
var statearr_16338_18788 = state_16200__$1;
(statearr_16338_18788[(1)] = (20));

} else {
var statearr_16339_18789 = state_16200__$1;
(statearr_16339_18789[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (10))){
var inst_16188 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
var statearr_16343_18790 = state_16200__$1;
(statearr_16343_18790[(2)] = inst_16188);

(statearr_16343_18790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (18))){
var inst_16161 = (state_16200[(15)]);
var state_16200__$1 = state_16200;
var statearr_16344_18791 = state_16200__$1;
(statearr_16344_18791[(2)] = inst_16161);

(statearr_16344_18791[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (8))){
var inst_16137 = (state_16200[(7)]);
var inst_16147 = (inst_16137 == null);
var state_16200__$1 = state_16200;
if(cljs.core.truth_(inst_16147)){
var statearr_16345_18792 = state_16200__$1;
(statearr_16345_18792[(1)] = (11));

} else {
var statearr_16346_18797 = state_16200__$1;
(statearr_16346_18797[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13347__auto__ = null;
var cljs$core$async$mix_$_state_machine__13347__auto____0 = (function (){
var statearr_16347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16347[(0)] = cljs$core$async$mix_$_state_machine__13347__auto__);

(statearr_16347[(1)] = (1));

return statearr_16347;
});
var cljs$core$async$mix_$_state_machine__13347__auto____1 = (function (state_16200){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_16200);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e16355){var ex__13350__auto__ = e16355;
var statearr_16356_18803 = state_16200;
(statearr_16356_18803[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_16200[(4)]))){
var statearr_16361_18804 = state_16200;
(statearr_16361_18804[(1)] = cljs.core.first((state_16200[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18806 = state_16200;
state_16200 = G__18806;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13347__auto__ = function(state_16200){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13347__auto____1.call(this,state_16200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13347__auto____0;
cljs$core$async$mix_$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13347__auto____1;
return cljs$core$async$mix_$_state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_16366 = f__14414__auto__();
(statearr_16366[(6)] = c__14413__auto___18719);

return statearr_16366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18809 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18809(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18814 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18814(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18821 = (function() {
var G__18822 = null;
var G__18822__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18822__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18822 = function(p,v){
switch(arguments.length){
case 1:
return G__18822__1.call(this,p);
case 2:
return G__18822__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18822.cljs$core$IFn$_invoke$arity$1 = G__18822__1;
G__18822.cljs$core$IFn$_invoke$arity$2 = G__18822__2;
return G__18822;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16417 = arguments.length;
switch (G__16417) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18821(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18821(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16438 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16439){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16439 = meta16439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16440,meta16439__$1){
var self__ = this;
var _16440__$1 = this;
return (new cljs.core.async.t_cljs$core$async16438(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16439__$1));
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16440){
var self__ = this;
var _16440__$1 = this;
return self__.meta16439;
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16438.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16439","meta16439",-2017036263,null)], null);
}));

(cljs.core.async.t_cljs$core$async16438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16438");

(cljs.core.async.t_cljs$core$async16438.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16438.
 */
cljs.core.async.__GT_t_cljs$core$async16438 = (function cljs$core$async$__GT_t_cljs$core$async16438(ch,topic_fn,buf_fn,mults,ensure_mult,meta16439){
return (new cljs.core.async.t_cljs$core$async16438(ch,topic_fn,buf_fn,mults,ensure_mult,meta16439));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16437 = arguments.length;
switch (G__16437) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16435_SHARP_){
if(cljs.core.truth_((p1__16435_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16435_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16435_SHARP_.call(null, topic)))){
return p1__16435_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16435_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16438(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14413__auto___18856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_16521){
var state_val_16522 = (state_16521[(1)]);
if((state_val_16522 === (7))){
var inst_16517 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16524_18857 = state_16521__$1;
(statearr_16524_18857[(2)] = inst_16517);

(statearr_16524_18857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (20))){
var state_16521__$1 = state_16521;
var statearr_16525_18858 = state_16521__$1;
(statearr_16525_18858[(2)] = null);

(statearr_16525_18858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (1))){
var state_16521__$1 = state_16521;
var statearr_16527_18859 = state_16521__$1;
(statearr_16527_18859[(2)] = null);

(statearr_16527_18859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (24))){
var inst_16500 = (state_16521[(7)]);
var inst_16509 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16500);
var state_16521__$1 = state_16521;
var statearr_16528_18863 = state_16521__$1;
(statearr_16528_18863[(2)] = inst_16509);

(statearr_16528_18863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (4))){
var inst_16449 = (state_16521[(8)]);
var inst_16449__$1 = (state_16521[(2)]);
var inst_16450 = (inst_16449__$1 == null);
var state_16521__$1 = (function (){var statearr_16529 = state_16521;
(statearr_16529[(8)] = inst_16449__$1);

return statearr_16529;
})();
if(cljs.core.truth_(inst_16450)){
var statearr_16530_18870 = state_16521__$1;
(statearr_16530_18870[(1)] = (5));

} else {
var statearr_16531_18871 = state_16521__$1;
(statearr_16531_18871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (15))){
var inst_16494 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16532_18872 = state_16521__$1;
(statearr_16532_18872[(2)] = inst_16494);

(statearr_16532_18872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (21))){
var inst_16514 = (state_16521[(2)]);
var state_16521__$1 = (function (){var statearr_16533 = state_16521;
(statearr_16533[(9)] = inst_16514);

return statearr_16533;
})();
var statearr_16534_18873 = state_16521__$1;
(statearr_16534_18873[(2)] = null);

(statearr_16534_18873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (13))){
var inst_16473 = (state_16521[(10)]);
var inst_16475 = cljs.core.chunked_seq_QMARK_(inst_16473);
var state_16521__$1 = state_16521;
if(inst_16475){
var statearr_16537_18878 = state_16521__$1;
(statearr_16537_18878[(1)] = (16));

} else {
var statearr_16538_18879 = state_16521__$1;
(statearr_16538_18879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (22))){
var inst_16506 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
if(cljs.core.truth_(inst_16506)){
var statearr_16539_18880 = state_16521__$1;
(statearr_16539_18880[(1)] = (23));

} else {
var statearr_16546_18881 = state_16521__$1;
(statearr_16546_18881[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (6))){
var inst_16449 = (state_16521[(8)]);
var inst_16500 = (state_16521[(7)]);
var inst_16502 = (state_16521[(11)]);
var inst_16500__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16449) : topic_fn.call(null, inst_16449));
var inst_16501 = cljs.core.deref(mults);
var inst_16502__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16501,inst_16500__$1);
var state_16521__$1 = (function (){var statearr_16553 = state_16521;
(statearr_16553[(7)] = inst_16500__$1);

(statearr_16553[(11)] = inst_16502__$1);

return statearr_16553;
})();
if(cljs.core.truth_(inst_16502__$1)){
var statearr_16555_18884 = state_16521__$1;
(statearr_16555_18884[(1)] = (19));

} else {
var statearr_16556_18885 = state_16521__$1;
(statearr_16556_18885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (25))){
var inst_16511 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16558_18895 = state_16521__$1;
(statearr_16558_18895[(2)] = inst_16511);

(statearr_16558_18895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (17))){
var inst_16473 = (state_16521[(10)]);
var inst_16482 = cljs.core.first(inst_16473);
var inst_16486 = cljs.core.async.muxch_STAR_(inst_16482);
var inst_16487 = cljs.core.async.close_BANG_(inst_16486);
var inst_16488 = cljs.core.next(inst_16473);
var inst_16459 = inst_16488;
var inst_16460 = null;
var inst_16461 = (0);
var inst_16462 = (0);
var state_16521__$1 = (function (){var statearr_16559 = state_16521;
(statearr_16559[(12)] = inst_16462);

(statearr_16559[(13)] = inst_16461);

(statearr_16559[(14)] = inst_16460);

(statearr_16559[(15)] = inst_16487);

(statearr_16559[(16)] = inst_16459);

return statearr_16559;
})();
var statearr_16560_18902 = state_16521__$1;
(statearr_16560_18902[(2)] = null);

(statearr_16560_18902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (3))){
var inst_16519 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16521__$1,inst_16519);
} else {
if((state_val_16522 === (12))){
var inst_16496 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16563_18905 = state_16521__$1;
(statearr_16563_18905[(2)] = inst_16496);

(statearr_16563_18905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (2))){
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16521__$1,(4),ch);
} else {
if((state_val_16522 === (23))){
var state_16521__$1 = state_16521;
var statearr_16567_18906 = state_16521__$1;
(statearr_16567_18906[(2)] = null);

(statearr_16567_18906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (19))){
var inst_16449 = (state_16521[(8)]);
var inst_16502 = (state_16521[(11)]);
var inst_16504 = cljs.core.async.muxch_STAR_(inst_16502);
var state_16521__$1 = state_16521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16521__$1,(22),inst_16504,inst_16449);
} else {
if((state_val_16522 === (11))){
var inst_16473 = (state_16521[(10)]);
var inst_16459 = (state_16521[(16)]);
var inst_16473__$1 = cljs.core.seq(inst_16459);
var state_16521__$1 = (function (){var statearr_16568 = state_16521;
(statearr_16568[(10)] = inst_16473__$1);

return statearr_16568;
})();
if(inst_16473__$1){
var statearr_16569_18924 = state_16521__$1;
(statearr_16569_18924[(1)] = (13));

} else {
var statearr_16570_18925 = state_16521__$1;
(statearr_16570_18925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (9))){
var inst_16498 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16572_18926 = state_16521__$1;
(statearr_16572_18926[(2)] = inst_16498);

(statearr_16572_18926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (5))){
var inst_16456 = cljs.core.deref(mults);
var inst_16457 = cljs.core.vals(inst_16456);
var inst_16458 = cljs.core.seq(inst_16457);
var inst_16459 = inst_16458;
var inst_16460 = null;
var inst_16461 = (0);
var inst_16462 = (0);
var state_16521__$1 = (function (){var statearr_16573 = state_16521;
(statearr_16573[(12)] = inst_16462);

(statearr_16573[(13)] = inst_16461);

(statearr_16573[(14)] = inst_16460);

(statearr_16573[(16)] = inst_16459);

return statearr_16573;
})();
var statearr_16574_18928 = state_16521__$1;
(statearr_16574_18928[(2)] = null);

(statearr_16574_18928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (14))){
var state_16521__$1 = state_16521;
var statearr_16578_18931 = state_16521__$1;
(statearr_16578_18931[(2)] = null);

(statearr_16578_18931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (16))){
var inst_16473 = (state_16521[(10)]);
var inst_16477 = cljs.core.chunk_first(inst_16473);
var inst_16478 = cljs.core.chunk_rest(inst_16473);
var inst_16479 = cljs.core.count(inst_16477);
var inst_16459 = inst_16478;
var inst_16460 = inst_16477;
var inst_16461 = inst_16479;
var inst_16462 = (0);
var state_16521__$1 = (function (){var statearr_16579 = state_16521;
(statearr_16579[(12)] = inst_16462);

(statearr_16579[(13)] = inst_16461);

(statearr_16579[(14)] = inst_16460);

(statearr_16579[(16)] = inst_16459);

return statearr_16579;
})();
var statearr_16580_18932 = state_16521__$1;
(statearr_16580_18932[(2)] = null);

(statearr_16580_18932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (10))){
var inst_16462 = (state_16521[(12)]);
var inst_16461 = (state_16521[(13)]);
var inst_16460 = (state_16521[(14)]);
var inst_16459 = (state_16521[(16)]);
var inst_16467 = cljs.core._nth(inst_16460,inst_16462);
var inst_16468 = cljs.core.async.muxch_STAR_(inst_16467);
var inst_16469 = cljs.core.async.close_BANG_(inst_16468);
var inst_16470 = (inst_16462 + (1));
var tmp16575 = inst_16461;
var tmp16576 = inst_16460;
var tmp16577 = inst_16459;
var inst_16459__$1 = tmp16577;
var inst_16460__$1 = tmp16576;
var inst_16461__$1 = tmp16575;
var inst_16462__$1 = inst_16470;
var state_16521__$1 = (function (){var statearr_16585 = state_16521;
(statearr_16585[(12)] = inst_16462__$1);

(statearr_16585[(13)] = inst_16461__$1);

(statearr_16585[(17)] = inst_16469);

(statearr_16585[(14)] = inst_16460__$1);

(statearr_16585[(16)] = inst_16459__$1);

return statearr_16585;
})();
var statearr_16591_18944 = state_16521__$1;
(statearr_16591_18944[(2)] = null);

(statearr_16591_18944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (18))){
var inst_16491 = (state_16521[(2)]);
var state_16521__$1 = state_16521;
var statearr_16596_18947 = state_16521__$1;
(statearr_16596_18947[(2)] = inst_16491);

(statearr_16596_18947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16522 === (8))){
var inst_16462 = (state_16521[(12)]);
var inst_16461 = (state_16521[(13)]);
var inst_16464 = (inst_16462 < inst_16461);
var inst_16465 = inst_16464;
var state_16521__$1 = state_16521;
if(cljs.core.truth_(inst_16465)){
var statearr_16603_18950 = state_16521__$1;
(statearr_16603_18950[(1)] = (10));

} else {
var statearr_16604_18951 = state_16521__$1;
(statearr_16604_18951[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_16609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16609[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_16609[(1)] = (1));

return statearr_16609;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_16521){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_16521);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e16611){var ex__13350__auto__ = e16611;
var statearr_16612_18964 = state_16521;
(statearr_16612_18964[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_16521[(4)]))){
var statearr_16613_18965 = state_16521;
(statearr_16613_18965[(1)] = cljs.core.first((state_16521[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18966 = state_16521;
state_16521 = G__18966;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_16521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_16521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_16615 = f__14414__auto__();
(statearr_16615[(6)] = c__14413__auto___18856);

return statearr_16615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16629 = arguments.length;
switch (G__16629) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16647 = arguments.length;
switch (G__16647) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16664 = arguments.length;
switch (G__16664) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14413__auto___18984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_16744){
var state_val_16749 = (state_16744[(1)]);
if((state_val_16749 === (7))){
var state_16744__$1 = state_16744;
var statearr_16769_18985 = state_16744__$1;
(statearr_16769_18985[(2)] = null);

(statearr_16769_18985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (1))){
var state_16744__$1 = state_16744;
var statearr_16777_18987 = state_16744__$1;
(statearr_16777_18987[(2)] = null);

(statearr_16777_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (4))){
var inst_16684 = (state_16744[(7)]);
var inst_16685 = (state_16744[(8)]);
var inst_16687 = (inst_16685 < inst_16684);
var state_16744__$1 = state_16744;
if(cljs.core.truth_(inst_16687)){
var statearr_16787_18989 = state_16744__$1;
(statearr_16787_18989[(1)] = (6));

} else {
var statearr_16788_18990 = state_16744__$1;
(statearr_16788_18990[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (15))){
var inst_16723 = (state_16744[(9)]);
var inst_16728 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16723);
var state_16744__$1 = state_16744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16744__$1,(17),out,inst_16728);
} else {
if((state_val_16749 === (13))){
var inst_16723 = (state_16744[(9)]);
var inst_16723__$1 = (state_16744[(2)]);
var inst_16724 = cljs.core.some(cljs.core.nil_QMARK_,inst_16723__$1);
var state_16744__$1 = (function (){var statearr_16793 = state_16744;
(statearr_16793[(9)] = inst_16723__$1);

return statearr_16793;
})();
if(cljs.core.truth_(inst_16724)){
var statearr_16794_18992 = state_16744__$1;
(statearr_16794_18992[(1)] = (14));

} else {
var statearr_16796_18993 = state_16744__$1;
(statearr_16796_18993[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (6))){
var state_16744__$1 = state_16744;
var statearr_16800_18995 = state_16744__$1;
(statearr_16800_18995[(2)] = null);

(statearr_16800_18995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (17))){
var inst_16730 = (state_16744[(2)]);
var state_16744__$1 = (function (){var statearr_16805 = state_16744;
(statearr_16805[(10)] = inst_16730);

return statearr_16805;
})();
var statearr_16806_18996 = state_16744__$1;
(statearr_16806_18996[(2)] = null);

(statearr_16806_18996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (3))){
var inst_16739 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16744__$1,inst_16739);
} else {
if((state_val_16749 === (12))){
var _ = (function (){var statearr_16813 = state_16744;
(statearr_16813[(4)] = cljs.core.rest((state_16744[(4)])));

return statearr_16813;
})();
var state_16744__$1 = state_16744;
var ex16804 = (state_16744__$1[(2)]);
var statearr_16817_18999 = state_16744__$1;
(statearr_16817_18999[(5)] = ex16804);


if((ex16804 instanceof Object)){
var statearr_16821_19000 = state_16744__$1;
(statearr_16821_19000[(1)] = (11));

(statearr_16821_19000[(5)] = null);

} else {
throw ex16804;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (2))){
var inst_16683 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16684 = cnt;
var inst_16685 = (0);
var state_16744__$1 = (function (){var statearr_16841 = state_16744;
(statearr_16841[(7)] = inst_16684);

(statearr_16841[(8)] = inst_16685);

(statearr_16841[(11)] = inst_16683);

return statearr_16841;
})();
var statearr_16842_19007 = state_16744__$1;
(statearr_16842_19007[(2)] = null);

(statearr_16842_19007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (11))){
var inst_16699 = (state_16744[(2)]);
var inst_16700 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16744__$1 = (function (){var statearr_16843 = state_16744;
(statearr_16843[(12)] = inst_16699);

return statearr_16843;
})();
var statearr_16844_19008 = state_16744__$1;
(statearr_16844_19008[(2)] = inst_16700);

(statearr_16844_19008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (9))){
var inst_16685 = (state_16744[(8)]);
var _ = (function (){var statearr_16846 = state_16744;
(statearr_16846[(4)] = cljs.core.cons((12),(state_16744[(4)])));

return statearr_16846;
})();
var inst_16709 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16685) : chs__$1.call(null, inst_16685));
var inst_16710 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16685) : done.call(null, inst_16685));
var inst_16711 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16709,inst_16710);
var ___$1 = (function (){var statearr_16849 = state_16744;
(statearr_16849[(4)] = cljs.core.rest((state_16744[(4)])));

return statearr_16849;
})();
var state_16744__$1 = state_16744;
var statearr_16851_19010 = state_16744__$1;
(statearr_16851_19010[(2)] = inst_16711);

(statearr_16851_19010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (5))){
var inst_16721 = (state_16744[(2)]);
var state_16744__$1 = (function (){var statearr_16853 = state_16744;
(statearr_16853[(13)] = inst_16721);

return statearr_16853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16744__$1,(13),dchan);
} else {
if((state_val_16749 === (14))){
var inst_16726 = cljs.core.async.close_BANG_(out);
var state_16744__$1 = state_16744;
var statearr_16855_19013 = state_16744__$1;
(statearr_16855_19013[(2)] = inst_16726);

(statearr_16855_19013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (16))){
var inst_16733 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16856_19014 = state_16744__$1;
(statearr_16856_19014[(2)] = inst_16733);

(statearr_16856_19014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (10))){
var inst_16685 = (state_16744[(8)]);
var inst_16714 = (state_16744[(2)]);
var inst_16715 = (inst_16685 + (1));
var inst_16685__$1 = inst_16715;
var state_16744__$1 = (function (){var statearr_16857 = state_16744;
(statearr_16857[(8)] = inst_16685__$1);

(statearr_16857[(14)] = inst_16714);

return statearr_16857;
})();
var statearr_16860_19015 = state_16744__$1;
(statearr_16860_19015[(2)] = null);

(statearr_16860_19015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16749 === (8))){
var inst_16719 = (state_16744[(2)]);
var state_16744__$1 = state_16744;
var statearr_16861_19019 = state_16744__$1;
(statearr_16861_19019[(2)] = inst_16719);

(statearr_16861_19019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_16863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16863[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_16863[(1)] = (1));

return statearr_16863;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_16744){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_16744);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e16871){var ex__13350__auto__ = e16871;
var statearr_16872_19026 = state_16744;
(statearr_16872_19026[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_16744[(4)]))){
var statearr_16873_19027 = state_16744;
(statearr_16873_19027[(1)] = cljs.core.first((state_16744[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19033 = state_16744;
state_16744 = G__19033;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_16744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_16744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_16875 = f__14414__auto__();
(statearr_16875[(6)] = c__14413__auto___18984);

return statearr_16875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16879 = arguments.length;
switch (G__16879) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14413__auto___19046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_16918){
var state_val_16919 = (state_16918[(1)]);
if((state_val_16919 === (7))){
var inst_16895 = (state_16918[(7)]);
var inst_16896 = (state_16918[(8)]);
var inst_16895__$1 = (state_16918[(2)]);
var inst_16896__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16895__$1,(0),null);
var inst_16897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16895__$1,(1),null);
var inst_16898 = (inst_16896__$1 == null);
var state_16918__$1 = (function (){var statearr_16929 = state_16918;
(statearr_16929[(9)] = inst_16897);

(statearr_16929[(7)] = inst_16895__$1);

(statearr_16929[(8)] = inst_16896__$1);

return statearr_16929;
})();
if(cljs.core.truth_(inst_16898)){
var statearr_16930_19050 = state_16918__$1;
(statearr_16930_19050[(1)] = (8));

} else {
var statearr_16932_19051 = state_16918__$1;
(statearr_16932_19051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (1))){
var inst_16880 = cljs.core.vec(chs);
var inst_16881 = inst_16880;
var state_16918__$1 = (function (){var statearr_16934 = state_16918;
(statearr_16934[(10)] = inst_16881);

return statearr_16934;
})();
var statearr_16939_19052 = state_16918__$1;
(statearr_16939_19052[(2)] = null);

(statearr_16939_19052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (4))){
var inst_16881 = (state_16918[(10)]);
var state_16918__$1 = state_16918;
return cljs.core.async.ioc_alts_BANG_(state_16918__$1,(7),inst_16881);
} else {
if((state_val_16919 === (6))){
var inst_16914 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16940_19053 = state_16918__$1;
(statearr_16940_19053[(2)] = inst_16914);

(statearr_16940_19053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (3))){
var inst_16916 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16918__$1,inst_16916);
} else {
if((state_val_16919 === (2))){
var inst_16881 = (state_16918[(10)]);
var inst_16883 = cljs.core.count(inst_16881);
var inst_16884 = (inst_16883 > (0));
var state_16918__$1 = state_16918;
if(cljs.core.truth_(inst_16884)){
var statearr_16945_19054 = state_16918__$1;
(statearr_16945_19054[(1)] = (4));

} else {
var statearr_16946_19055 = state_16918__$1;
(statearr_16946_19055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (11))){
var inst_16881 = (state_16918[(10)]);
var inst_16906 = (state_16918[(2)]);
var tmp16941 = inst_16881;
var inst_16881__$1 = tmp16941;
var state_16918__$1 = (function (){var statearr_16947 = state_16918;
(statearr_16947[(11)] = inst_16906);

(statearr_16947[(10)] = inst_16881__$1);

return statearr_16947;
})();
var statearr_16949_19056 = state_16918__$1;
(statearr_16949_19056[(2)] = null);

(statearr_16949_19056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (9))){
var inst_16896 = (state_16918[(8)]);
var state_16918__$1 = state_16918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16918__$1,(11),out,inst_16896);
} else {
if((state_val_16919 === (5))){
var inst_16912 = cljs.core.async.close_BANG_(out);
var state_16918__$1 = state_16918;
var statearr_16955_19057 = state_16918__$1;
(statearr_16955_19057[(2)] = inst_16912);

(statearr_16955_19057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (10))){
var inst_16910 = (state_16918[(2)]);
var state_16918__$1 = state_16918;
var statearr_16959_19058 = state_16918__$1;
(statearr_16959_19058[(2)] = inst_16910);

(statearr_16959_19058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16919 === (8))){
var inst_16881 = (state_16918[(10)]);
var inst_16897 = (state_16918[(9)]);
var inst_16895 = (state_16918[(7)]);
var inst_16896 = (state_16918[(8)]);
var inst_16901 = (function (){var cs = inst_16881;
var vec__16891 = inst_16895;
var v = inst_16896;
var c = inst_16897;
return (function (p1__16877_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16877_SHARP_);
});
})();
var inst_16902 = cljs.core.filterv(inst_16901,inst_16881);
var inst_16881__$1 = inst_16902;
var state_16918__$1 = (function (){var statearr_16966 = state_16918;
(statearr_16966[(10)] = inst_16881__$1);

return statearr_16966;
})();
var statearr_16970_19062 = state_16918__$1;
(statearr_16970_19062[(2)] = null);

(statearr_16970_19062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_16977 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16977[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_16977[(1)] = (1));

return statearr_16977;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_16918){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_16918);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e16980){var ex__13350__auto__ = e16980;
var statearr_16981_19063 = state_16918;
(statearr_16981_19063[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_16918[(4)]))){
var statearr_16982_19064 = state_16918;
(statearr_16982_19064[(1)] = cljs.core.first((state_16918[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19065 = state_16918;
state_16918 = G__19065;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_16918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_16918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_16984 = f__14414__auto__();
(statearr_16984[(6)] = c__14413__auto___19046);

return statearr_16984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17017 = arguments.length;
switch (G__17017) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14413__auto___19071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_17062){
var state_val_17063 = (state_17062[(1)]);
if((state_val_17063 === (7))){
var inst_17035 = (state_17062[(7)]);
var inst_17035__$1 = (state_17062[(2)]);
var inst_17041 = (inst_17035__$1 == null);
var inst_17042 = cljs.core.not(inst_17041);
var state_17062__$1 = (function (){var statearr_17071 = state_17062;
(statearr_17071[(7)] = inst_17035__$1);

return statearr_17071;
})();
if(inst_17042){
var statearr_17072_19076 = state_17062__$1;
(statearr_17072_19076[(1)] = (8));

} else {
var statearr_17073_19077 = state_17062__$1;
(statearr_17073_19077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17063 === (1))){
var inst_17028 = (0);
var state_17062__$1 = (function (){var statearr_17074 = state_17062;
(statearr_17074[(8)] = inst_17028);

return statearr_17074;
})();
var statearr_17076_19080 = state_17062__$1;
(statearr_17076_19080[(2)] = null);

(statearr_17076_19080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17063 === (4))){
var state_17062__$1 = state_17062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17062__$1,(7),ch);
} else {
if((state_val_17063 === (6))){
var inst_17053 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17080_19081 = state_17062__$1;
(statearr_17080_19081[(2)] = inst_17053);

(statearr_17080_19081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17063 === (3))){
var inst_17055 = (state_17062[(2)]);
var inst_17056 = cljs.core.async.close_BANG_(out);
var state_17062__$1 = (function (){var statearr_17091 = state_17062;
(statearr_17091[(9)] = inst_17055);

return statearr_17091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17062__$1,inst_17056);
} else {
if((state_val_17063 === (2))){
var inst_17028 = (state_17062[(8)]);
var inst_17030 = (inst_17028 < n);
var state_17062__$1 = state_17062;
if(cljs.core.truth_(inst_17030)){
var statearr_17093_19090 = state_17062__$1;
(statearr_17093_19090[(1)] = (4));

} else {
var statearr_17094_19093 = state_17062__$1;
(statearr_17094_19093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17063 === (11))){
var inst_17028 = (state_17062[(8)]);
var inst_17045 = (state_17062[(2)]);
var inst_17046 = (inst_17028 + (1));
var inst_17028__$1 = inst_17046;
var state_17062__$1 = (function (){var statearr_17095 = state_17062;
(statearr_17095[(10)] = inst_17045);

(statearr_17095[(8)] = inst_17028__$1);

return statearr_17095;
})();
var statearr_17098_19099 = state_17062__$1;
(statearr_17098_19099[(2)] = null);

(statearr_17098_19099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17063 === (9))){
var state_17062__$1 = state_17062;
var statearr_17099_19102 = state_17062__$1;
(statearr_17099_19102[(2)] = null);

(statearr_17099_19102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17063 === (5))){
var state_17062__$1 = state_17062;
var statearr_17102_19106 = state_17062__$1;
(statearr_17102_19106[(2)] = null);

(statearr_17102_19106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17063 === (10))){
var inst_17050 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17103_19108 = state_17062__$1;
(statearr_17103_19108[(2)] = inst_17050);

(statearr_17103_19108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17063 === (8))){
var inst_17035 = (state_17062[(7)]);
var state_17062__$1 = state_17062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17062__$1,(11),out,inst_17035);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_17109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17109[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_17109[(1)] = (1));

return statearr_17109;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_17062){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_17062);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e17110){var ex__13350__auto__ = e17110;
var statearr_17111_19110 = state_17062;
(statearr_17111_19110[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_17062[(4)]))){
var statearr_17112_19111 = state_17062;
(statearr_17112_19111[(1)] = cljs.core.first((state_17062[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19114 = state_17062;
state_17062 = G__19114;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_17062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_17062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_17113 = f__14414__auto__();
(statearr_17113[(6)] = c__14413__auto___19071);

return statearr_17113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17125 = (function (f,ch,meta17119,_,fn1,meta17126){
this.f = f;
this.ch = ch;
this.meta17119 = meta17119;
this._ = _;
this.fn1 = fn1;
this.meta17126 = meta17126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17127,meta17126__$1){
var self__ = this;
var _17127__$1 = this;
return (new cljs.core.async.t_cljs$core$async17125(self__.f,self__.ch,self__.meta17119,self__._,self__.fn1,meta17126__$1));
}));

(cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17127){
var self__ = this;
var _17127__$1 = this;
return self__.meta17126;
}));

(cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17117_SHARP_){
var G__17144 = (((p1__17117_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17117_SHARP_) : self__.f.call(null, p1__17117_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17144) : f1.call(null, G__17144));
});
}));

(cljs.core.async.t_cljs$core$async17125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17119","meta17119",-954644996,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17118","cljs.core.async/t_cljs$core$async17118",691853293,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17126","meta17126",-1875007294,null)], null);
}));

(cljs.core.async.t_cljs$core$async17125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17125");

(cljs.core.async.t_cljs$core$async17125.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17125.
 */
cljs.core.async.__GT_t_cljs$core$async17125 = (function cljs$core$async$__GT_t_cljs$core$async17125(f,ch,meta17119,_,fn1,meta17126){
return (new cljs.core.async.t_cljs$core$async17125(f,ch,meta17119,_,fn1,meta17126));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17118 = (function (f,ch,meta17119){
this.f = f;
this.ch = ch;
this.meta17119 = meta17119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17120,meta17119__$1){
var self__ = this;
var _17120__$1 = this;
return (new cljs.core.async.t_cljs$core$async17118(self__.f,self__.ch,meta17119__$1));
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17120){
var self__ = this;
var _17120__$1 = this;
return self__.meta17119;
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17125(self__.f,self__.ch,self__.meta17119,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17150 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17150) : self__.f.call(null, G__17150));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17119","meta17119",-954644996,null)], null);
}));

(cljs.core.async.t_cljs$core$async17118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17118");

(cljs.core.async.t_cljs$core$async17118.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17118.
 */
cljs.core.async.__GT_t_cljs$core$async17118 = (function cljs$core$async$__GT_t_cljs$core$async17118(f,ch,meta17119){
return (new cljs.core.async.t_cljs$core$async17118(f,ch,meta17119));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17118(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17160 = (function (f,ch,meta17161){
this.f = f;
this.ch = ch;
this.meta17161 = meta17161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17162,meta17161__$1){
var self__ = this;
var _17162__$1 = this;
return (new cljs.core.async.t_cljs$core$async17160(self__.f,self__.ch,meta17161__$1));
}));

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17162){
var self__ = this;
var _17162__$1 = this;
return self__.meta17161;
}));

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17161","meta17161",-752878163,null)], null);
}));

(cljs.core.async.t_cljs$core$async17160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17160");

(cljs.core.async.t_cljs$core$async17160.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17160.
 */
cljs.core.async.__GT_t_cljs$core$async17160 = (function cljs$core$async$__GT_t_cljs$core$async17160(f,ch,meta17161){
return (new cljs.core.async.t_cljs$core$async17160(f,ch,meta17161));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17160(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17172 = (function (p,ch,meta17173){
this.p = p;
this.ch = ch;
this.meta17173 = meta17173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17174,meta17173__$1){
var self__ = this;
var _17174__$1 = this;
return (new cljs.core.async.t_cljs$core$async17172(self__.p,self__.ch,meta17173__$1));
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17174){
var self__ = this;
var _17174__$1 = this;
return self__.meta17173;
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17173","meta17173",527995641,null)], null);
}));

(cljs.core.async.t_cljs$core$async17172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17172");

(cljs.core.async.t_cljs$core$async17172.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17172.
 */
cljs.core.async.__GT_t_cljs$core$async17172 = (function cljs$core$async$__GT_t_cljs$core$async17172(p,ch,meta17173){
return (new cljs.core.async.t_cljs$core$async17172(p,ch,meta17173));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17172(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17194 = arguments.length;
switch (G__17194) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14413__auto___19152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_17257){
var state_val_17258 = (state_17257[(1)]);
if((state_val_17258 === (7))){
var inst_17250 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
var statearr_17274_19156 = state_17257__$1;
(statearr_17274_19156[(2)] = inst_17250);

(statearr_17274_19156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (1))){
var state_17257__$1 = state_17257;
var statearr_17275_19157 = state_17257__$1;
(statearr_17275_19157[(2)] = null);

(statearr_17275_19157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (4))){
var inst_17222 = (state_17257[(7)]);
var inst_17222__$1 = (state_17257[(2)]);
var inst_17226 = (inst_17222__$1 == null);
var state_17257__$1 = (function (){var statearr_17276 = state_17257;
(statearr_17276[(7)] = inst_17222__$1);

return statearr_17276;
})();
if(cljs.core.truth_(inst_17226)){
var statearr_17278_19159 = state_17257__$1;
(statearr_17278_19159[(1)] = (5));

} else {
var statearr_17279_19160 = state_17257__$1;
(statearr_17279_19160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (6))){
var inst_17222 = (state_17257[(7)]);
var inst_17238 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17222) : p.call(null, inst_17222));
var state_17257__$1 = state_17257;
if(cljs.core.truth_(inst_17238)){
var statearr_17280_19161 = state_17257__$1;
(statearr_17280_19161[(1)] = (8));

} else {
var statearr_17281_19162 = state_17257__$1;
(statearr_17281_19162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (3))){
var inst_17252 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17257__$1,inst_17252);
} else {
if((state_val_17258 === (2))){
var state_17257__$1 = state_17257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17257__$1,(4),ch);
} else {
if((state_val_17258 === (11))){
var inst_17243 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
var statearr_17291_19167 = state_17257__$1;
(statearr_17291_19167[(2)] = inst_17243);

(statearr_17291_19167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (9))){
var state_17257__$1 = state_17257;
var statearr_17296_19168 = state_17257__$1;
(statearr_17296_19168[(2)] = null);

(statearr_17296_19168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (5))){
var inst_17233 = cljs.core.async.close_BANG_(out);
var state_17257__$1 = state_17257;
var statearr_17297_19169 = state_17257__$1;
(statearr_17297_19169[(2)] = inst_17233);

(statearr_17297_19169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (10))){
var inst_17247 = (state_17257[(2)]);
var state_17257__$1 = (function (){var statearr_17298 = state_17257;
(statearr_17298[(8)] = inst_17247);

return statearr_17298;
})();
var statearr_17299_19170 = state_17257__$1;
(statearr_17299_19170[(2)] = null);

(statearr_17299_19170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (8))){
var inst_17222 = (state_17257[(7)]);
var state_17257__$1 = state_17257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17257__$1,(11),out,inst_17222);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_17306 = [null,null,null,null,null,null,null,null,null];
(statearr_17306[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_17306[(1)] = (1));

return statearr_17306;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_17257){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_17257);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e17307){var ex__13350__auto__ = e17307;
var statearr_17308_19172 = state_17257;
(statearr_17308_19172[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_17257[(4)]))){
var statearr_17309_19174 = state_17257;
(statearr_17309_19174[(1)] = cljs.core.first((state_17257[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19176 = state_17257;
state_17257 = G__19176;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_17257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_17257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_17310 = f__14414__auto__();
(statearr_17310[(6)] = c__14413__auto___19152);

return statearr_17310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17312 = arguments.length;
switch (G__17312) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_17382){
var state_val_17383 = (state_17382[(1)]);
if((state_val_17383 === (7))){
var inst_17375 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17384_19185 = state_17382__$1;
(statearr_17384_19185[(2)] = inst_17375);

(statearr_17384_19185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (20))){
var inst_17345 = (state_17382[(7)]);
var inst_17356 = (state_17382[(2)]);
var inst_17357 = cljs.core.next(inst_17345);
var inst_17328 = inst_17357;
var inst_17329 = null;
var inst_17330 = (0);
var inst_17331 = (0);
var state_17382__$1 = (function (){var statearr_17385 = state_17382;
(statearr_17385[(8)] = inst_17329);

(statearr_17385[(9)] = inst_17328);

(statearr_17385[(10)] = inst_17331);

(statearr_17385[(11)] = inst_17330);

(statearr_17385[(12)] = inst_17356);

return statearr_17385;
})();
var statearr_17390_19187 = state_17382__$1;
(statearr_17390_19187[(2)] = null);

(statearr_17390_19187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (1))){
var state_17382__$1 = state_17382;
var statearr_17391_19188 = state_17382__$1;
(statearr_17391_19188[(2)] = null);

(statearr_17391_19188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (4))){
var inst_17316 = (state_17382[(13)]);
var inst_17316__$1 = (state_17382[(2)]);
var inst_17317 = (inst_17316__$1 == null);
var state_17382__$1 = (function (){var statearr_17395 = state_17382;
(statearr_17395[(13)] = inst_17316__$1);

return statearr_17395;
})();
if(cljs.core.truth_(inst_17317)){
var statearr_17396_19190 = state_17382__$1;
(statearr_17396_19190[(1)] = (5));

} else {
var statearr_17397_19191 = state_17382__$1;
(statearr_17397_19191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (15))){
var state_17382__$1 = state_17382;
var statearr_17404_19192 = state_17382__$1;
(statearr_17404_19192[(2)] = null);

(statearr_17404_19192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (21))){
var state_17382__$1 = state_17382;
var statearr_17405_19194 = state_17382__$1;
(statearr_17405_19194[(2)] = null);

(statearr_17405_19194[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (13))){
var inst_17329 = (state_17382[(8)]);
var inst_17328 = (state_17382[(9)]);
var inst_17331 = (state_17382[(10)]);
var inst_17330 = (state_17382[(11)]);
var inst_17341 = (state_17382[(2)]);
var inst_17342 = (inst_17331 + (1));
var tmp17398 = inst_17329;
var tmp17399 = inst_17328;
var tmp17400 = inst_17330;
var inst_17328__$1 = tmp17399;
var inst_17329__$1 = tmp17398;
var inst_17330__$1 = tmp17400;
var inst_17331__$1 = inst_17342;
var state_17382__$1 = (function (){var statearr_17406 = state_17382;
(statearr_17406[(8)] = inst_17329__$1);

(statearr_17406[(14)] = inst_17341);

(statearr_17406[(9)] = inst_17328__$1);

(statearr_17406[(10)] = inst_17331__$1);

(statearr_17406[(11)] = inst_17330__$1);

return statearr_17406;
})();
var statearr_17407_19196 = state_17382__$1;
(statearr_17407_19196[(2)] = null);

(statearr_17407_19196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (22))){
var state_17382__$1 = state_17382;
var statearr_17408_19197 = state_17382__$1;
(statearr_17408_19197[(2)] = null);

(statearr_17408_19197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (6))){
var inst_17316 = (state_17382[(13)]);
var inst_17325 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17316) : f.call(null, inst_17316));
var inst_17326 = cljs.core.seq(inst_17325);
var inst_17328 = inst_17326;
var inst_17329 = null;
var inst_17330 = (0);
var inst_17331 = (0);
var state_17382__$1 = (function (){var statearr_17409 = state_17382;
(statearr_17409[(8)] = inst_17329);

(statearr_17409[(9)] = inst_17328);

(statearr_17409[(10)] = inst_17331);

(statearr_17409[(11)] = inst_17330);

return statearr_17409;
})();
var statearr_17410_19199 = state_17382__$1;
(statearr_17410_19199[(2)] = null);

(statearr_17410_19199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (17))){
var inst_17345 = (state_17382[(7)]);
var inst_17349 = cljs.core.chunk_first(inst_17345);
var inst_17350 = cljs.core.chunk_rest(inst_17345);
var inst_17351 = cljs.core.count(inst_17349);
var inst_17328 = inst_17350;
var inst_17329 = inst_17349;
var inst_17330 = inst_17351;
var inst_17331 = (0);
var state_17382__$1 = (function (){var statearr_17411 = state_17382;
(statearr_17411[(8)] = inst_17329);

(statearr_17411[(9)] = inst_17328);

(statearr_17411[(10)] = inst_17331);

(statearr_17411[(11)] = inst_17330);

return statearr_17411;
})();
var statearr_17412_19202 = state_17382__$1;
(statearr_17412_19202[(2)] = null);

(statearr_17412_19202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (3))){
var inst_17377 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17382__$1,inst_17377);
} else {
if((state_val_17383 === (12))){
var inst_17365 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17413_19204 = state_17382__$1;
(statearr_17413_19204[(2)] = inst_17365);

(statearr_17413_19204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (2))){
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17382__$1,(4),in$);
} else {
if((state_val_17383 === (23))){
var inst_17373 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17414_19209 = state_17382__$1;
(statearr_17414_19209[(2)] = inst_17373);

(statearr_17414_19209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (19))){
var inst_17360 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17415_19214 = state_17382__$1;
(statearr_17415_19214[(2)] = inst_17360);

(statearr_17415_19214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (11))){
var inst_17328 = (state_17382[(9)]);
var inst_17345 = (state_17382[(7)]);
var inst_17345__$1 = cljs.core.seq(inst_17328);
var state_17382__$1 = (function (){var statearr_17416 = state_17382;
(statearr_17416[(7)] = inst_17345__$1);

return statearr_17416;
})();
if(inst_17345__$1){
var statearr_17417_19215 = state_17382__$1;
(statearr_17417_19215[(1)] = (14));

} else {
var statearr_17418_19220 = state_17382__$1;
(statearr_17418_19220[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (9))){
var inst_17367 = (state_17382[(2)]);
var inst_17368 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17382__$1 = (function (){var statearr_17422 = state_17382;
(statearr_17422[(15)] = inst_17367);

return statearr_17422;
})();
if(cljs.core.truth_(inst_17368)){
var statearr_17423_19221 = state_17382__$1;
(statearr_17423_19221[(1)] = (21));

} else {
var statearr_17424_19222 = state_17382__$1;
(statearr_17424_19222[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (5))){
var inst_17319 = cljs.core.async.close_BANG_(out);
var state_17382__$1 = state_17382;
var statearr_17425_19224 = state_17382__$1;
(statearr_17425_19224[(2)] = inst_17319);

(statearr_17425_19224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (14))){
var inst_17345 = (state_17382[(7)]);
var inst_17347 = cljs.core.chunked_seq_QMARK_(inst_17345);
var state_17382__$1 = state_17382;
if(inst_17347){
var statearr_17429_19229 = state_17382__$1;
(statearr_17429_19229[(1)] = (17));

} else {
var statearr_17430_19230 = state_17382__$1;
(statearr_17430_19230[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (16))){
var inst_17363 = (state_17382[(2)]);
var state_17382__$1 = state_17382;
var statearr_17437_19235 = state_17382__$1;
(statearr_17437_19235[(2)] = inst_17363);

(statearr_17437_19235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17383 === (10))){
var inst_17329 = (state_17382[(8)]);
var inst_17331 = (state_17382[(10)]);
var inst_17339 = cljs.core._nth(inst_17329,inst_17331);
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17382__$1,(13),out,inst_17339);
} else {
if((state_val_17383 === (18))){
var inst_17345 = (state_17382[(7)]);
var inst_17354 = cljs.core.first(inst_17345);
var state_17382__$1 = state_17382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17382__$1,(20),out,inst_17354);
} else {
if((state_val_17383 === (8))){
var inst_17331 = (state_17382[(10)]);
var inst_17330 = (state_17382[(11)]);
var inst_17333 = (inst_17331 < inst_17330);
var inst_17334 = inst_17333;
var state_17382__$1 = state_17382;
if(cljs.core.truth_(inst_17334)){
var statearr_17438_19245 = state_17382__$1;
(statearr_17438_19245[(1)] = (10));

} else {
var statearr_17439_19246 = state_17382__$1;
(statearr_17439_19246[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13347__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13347__auto____0 = (function (){
var statearr_17440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17440[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13347__auto__);

(statearr_17440[(1)] = (1));

return statearr_17440;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13347__auto____1 = (function (state_17382){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_17382);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e17441){var ex__13350__auto__ = e17441;
var statearr_17442_19247 = state_17382;
(statearr_17442_19247[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_17382[(4)]))){
var statearr_17443_19248 = state_17382;
(statearr_17443_19248[(1)] = cljs.core.first((state_17382[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19249 = state_17382;
state_17382 = G__19249;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13347__auto__ = function(state_17382){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13347__auto____1.call(this,state_17382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_17444 = f__14414__auto__();
(statearr_17444[(6)] = c__14413__auto__);

return statearr_17444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));

return c__14413__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17446 = arguments.length;
switch (G__17446) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17448 = arguments.length;
switch (G__17448) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17456 = arguments.length;
switch (G__17456) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14413__auto___19274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_17485){
var state_val_17486 = (state_17485[(1)]);
if((state_val_17486 === (7))){
var inst_17476 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17490_19275 = state_17485__$1;
(statearr_17490_19275[(2)] = inst_17476);

(statearr_17490_19275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (1))){
var inst_17457 = null;
var state_17485__$1 = (function (){var statearr_17491 = state_17485;
(statearr_17491[(7)] = inst_17457);

return statearr_17491;
})();
var statearr_17492_19280 = state_17485__$1;
(statearr_17492_19280[(2)] = null);

(statearr_17492_19280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (4))){
var inst_17460 = (state_17485[(8)]);
var inst_17460__$1 = (state_17485[(2)]);
var inst_17461 = (inst_17460__$1 == null);
var inst_17462 = cljs.core.not(inst_17461);
var state_17485__$1 = (function (){var statearr_17493 = state_17485;
(statearr_17493[(8)] = inst_17460__$1);

return statearr_17493;
})();
if(inst_17462){
var statearr_17494_19284 = state_17485__$1;
(statearr_17494_19284[(1)] = (5));

} else {
var statearr_17495_19285 = state_17485__$1;
(statearr_17495_19285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (6))){
var state_17485__$1 = state_17485;
var statearr_17496_19286 = state_17485__$1;
(statearr_17496_19286[(2)] = null);

(statearr_17496_19286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (3))){
var inst_17479 = (state_17485[(2)]);
var inst_17480 = cljs.core.async.close_BANG_(out);
var state_17485__$1 = (function (){var statearr_17501 = state_17485;
(statearr_17501[(9)] = inst_17479);

return statearr_17501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17485__$1,inst_17480);
} else {
if((state_val_17486 === (2))){
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17485__$1,(4),ch);
} else {
if((state_val_17486 === (11))){
var inst_17460 = (state_17485[(8)]);
var inst_17469 = (state_17485[(2)]);
var inst_17457 = inst_17460;
var state_17485__$1 = (function (){var statearr_17502 = state_17485;
(statearr_17502[(10)] = inst_17469);

(statearr_17502[(7)] = inst_17457);

return statearr_17502;
})();
var statearr_17503_19287 = state_17485__$1;
(statearr_17503_19287[(2)] = null);

(statearr_17503_19287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (9))){
var inst_17460 = (state_17485[(8)]);
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17485__$1,(11),out,inst_17460);
} else {
if((state_val_17486 === (5))){
var inst_17457 = (state_17485[(7)]);
var inst_17460 = (state_17485[(8)]);
var inst_17464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17460,inst_17457);
var state_17485__$1 = state_17485;
if(inst_17464){
var statearr_17505_19289 = state_17485__$1;
(statearr_17505_19289[(1)] = (8));

} else {
var statearr_17506_19290 = state_17485__$1;
(statearr_17506_19290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (10))){
var inst_17473 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17507_19291 = state_17485__$1;
(statearr_17507_19291[(2)] = inst_17473);

(statearr_17507_19291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (8))){
var inst_17457 = (state_17485[(7)]);
var tmp17504 = inst_17457;
var inst_17457__$1 = tmp17504;
var state_17485__$1 = (function (){var statearr_17508 = state_17485;
(statearr_17508[(7)] = inst_17457__$1);

return statearr_17508;
})();
var statearr_17509_19292 = state_17485__$1;
(statearr_17509_19292[(2)] = null);

(statearr_17509_19292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_17517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17517[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_17517[(1)] = (1));

return statearr_17517;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_17485){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_17485);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e17518){var ex__13350__auto__ = e17518;
var statearr_17519_19293 = state_17485;
(statearr_17519_19293[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_17485[(4)]))){
var statearr_17520_19294 = state_17485;
(statearr_17520_19294[(1)] = cljs.core.first((state_17485[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19295 = state_17485;
state_17485 = G__19295;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_17485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_17485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_17521 = f__14414__auto__();
(statearr_17521[(6)] = c__14413__auto___19274);

return statearr_17521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17523 = arguments.length;
switch (G__17523) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14413__auto___19298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_17567){
var state_val_17568 = (state_17567[(1)]);
if((state_val_17568 === (7))){
var inst_17562 = (state_17567[(2)]);
var state_17567__$1 = state_17567;
var statearr_17573_19300 = state_17567__$1;
(statearr_17573_19300[(2)] = inst_17562);

(statearr_17573_19300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (1))){
var inst_17529 = (new Array(n));
var inst_17530 = inst_17529;
var inst_17531 = (0);
var state_17567__$1 = (function (){var statearr_17574 = state_17567;
(statearr_17574[(7)] = inst_17531);

(statearr_17574[(8)] = inst_17530);

return statearr_17574;
})();
var statearr_17575_19303 = state_17567__$1;
(statearr_17575_19303[(2)] = null);

(statearr_17575_19303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (4))){
var inst_17534 = (state_17567[(9)]);
var inst_17534__$1 = (state_17567[(2)]);
var inst_17535 = (inst_17534__$1 == null);
var inst_17536 = cljs.core.not(inst_17535);
var state_17567__$1 = (function (){var statearr_17582 = state_17567;
(statearr_17582[(9)] = inst_17534__$1);

return statearr_17582;
})();
if(inst_17536){
var statearr_17583_19304 = state_17567__$1;
(statearr_17583_19304[(1)] = (5));

} else {
var statearr_17584_19305 = state_17567__$1;
(statearr_17584_19305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (15))){
var inst_17556 = (state_17567[(2)]);
var state_17567__$1 = state_17567;
var statearr_17585_19306 = state_17567__$1;
(statearr_17585_19306[(2)] = inst_17556);

(statearr_17585_19306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (13))){
var state_17567__$1 = state_17567;
var statearr_17592_19307 = state_17567__$1;
(statearr_17592_19307[(2)] = null);

(statearr_17592_19307[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (6))){
var inst_17531 = (state_17567[(7)]);
var inst_17552 = (inst_17531 > (0));
var state_17567__$1 = state_17567;
if(cljs.core.truth_(inst_17552)){
var statearr_17593_19308 = state_17567__$1;
(statearr_17593_19308[(1)] = (12));

} else {
var statearr_17594_19309 = state_17567__$1;
(statearr_17594_19309[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (3))){
var inst_17564 = (state_17567[(2)]);
var state_17567__$1 = state_17567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17567__$1,inst_17564);
} else {
if((state_val_17568 === (12))){
var inst_17530 = (state_17567[(8)]);
var inst_17554 = cljs.core.vec(inst_17530);
var state_17567__$1 = state_17567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17567__$1,(15),out,inst_17554);
} else {
if((state_val_17568 === (2))){
var state_17567__$1 = state_17567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17567__$1,(4),ch);
} else {
if((state_val_17568 === (11))){
var inst_17546 = (state_17567[(2)]);
var inst_17547 = (new Array(n));
var inst_17530 = inst_17547;
var inst_17531 = (0);
var state_17567__$1 = (function (){var statearr_17601 = state_17567;
(statearr_17601[(10)] = inst_17546);

(statearr_17601[(7)] = inst_17531);

(statearr_17601[(8)] = inst_17530);

return statearr_17601;
})();
var statearr_17604_19310 = state_17567__$1;
(statearr_17604_19310[(2)] = null);

(statearr_17604_19310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (9))){
var inst_17530 = (state_17567[(8)]);
var inst_17544 = cljs.core.vec(inst_17530);
var state_17567__$1 = state_17567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17567__$1,(11),out,inst_17544);
} else {
if((state_val_17568 === (5))){
var inst_17539 = (state_17567[(11)]);
var inst_17531 = (state_17567[(7)]);
var inst_17534 = (state_17567[(9)]);
var inst_17530 = (state_17567[(8)]);
var inst_17538 = (inst_17530[inst_17531] = inst_17534);
var inst_17539__$1 = (inst_17531 + (1));
var inst_17540 = (inst_17539__$1 < n);
var state_17567__$1 = (function (){var statearr_17617 = state_17567;
(statearr_17617[(11)] = inst_17539__$1);

(statearr_17617[(12)] = inst_17538);

return statearr_17617;
})();
if(cljs.core.truth_(inst_17540)){
var statearr_17618_19311 = state_17567__$1;
(statearr_17618_19311[(1)] = (8));

} else {
var statearr_17619_19312 = state_17567__$1;
(statearr_17619_19312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (14))){
var inst_17559 = (state_17567[(2)]);
var inst_17560 = cljs.core.async.close_BANG_(out);
var state_17567__$1 = (function (){var statearr_17622 = state_17567;
(statearr_17622[(13)] = inst_17559);

return statearr_17622;
})();
var statearr_17623_19317 = state_17567__$1;
(statearr_17623_19317[(2)] = inst_17560);

(statearr_17623_19317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (10))){
var inst_17550 = (state_17567[(2)]);
var state_17567__$1 = state_17567;
var statearr_17624_19324 = state_17567__$1;
(statearr_17624_19324[(2)] = inst_17550);

(statearr_17624_19324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17568 === (8))){
var inst_17539 = (state_17567[(11)]);
var inst_17530 = (state_17567[(8)]);
var tmp17620 = inst_17530;
var inst_17530__$1 = tmp17620;
var inst_17531 = inst_17539;
var state_17567__$1 = (function (){var statearr_17625 = state_17567;
(statearr_17625[(7)] = inst_17531);

(statearr_17625[(8)] = inst_17530__$1);

return statearr_17625;
})();
var statearr_17626_19326 = state_17567__$1;
(statearr_17626_19326[(2)] = null);

(statearr_17626_19326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_17627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17627[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_17627[(1)] = (1));

return statearr_17627;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_17567){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_17567);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e17630){var ex__13350__auto__ = e17630;
var statearr_17631_19343 = state_17567;
(statearr_17631_19343[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_17567[(4)]))){
var statearr_17632_19348 = state_17567;
(statearr_17632_19348[(1)] = cljs.core.first((state_17567[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19353 = state_17567;
state_17567 = G__19353;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_17567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_17567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_17633 = f__14414__auto__();
(statearr_17633[(6)] = c__14413__auto___19298);

return statearr_17633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17635 = arguments.length;
switch (G__17635) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14413__auto___19374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14414__auto__ = (function (){var switch__13346__auto__ = (function (state_17683){
var state_val_17685 = (state_17683[(1)]);
if((state_val_17685 === (7))){
var inst_17679 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
var statearr_17695_19384 = state_17683__$1;
(statearr_17695_19384[(2)] = inst_17679);

(statearr_17695_19384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (1))){
var inst_17639 = [];
var inst_17640 = inst_17639;
var inst_17641 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17683__$1 = (function (){var statearr_17696 = state_17683;
(statearr_17696[(7)] = inst_17640);

(statearr_17696[(8)] = inst_17641);

return statearr_17696;
})();
var statearr_17697_19388 = state_17683__$1;
(statearr_17697_19388[(2)] = null);

(statearr_17697_19388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (4))){
var inst_17644 = (state_17683[(9)]);
var inst_17644__$1 = (state_17683[(2)]);
var inst_17645 = (inst_17644__$1 == null);
var inst_17646 = cljs.core.not(inst_17645);
var state_17683__$1 = (function (){var statearr_17698 = state_17683;
(statearr_17698[(9)] = inst_17644__$1);

return statearr_17698;
})();
if(inst_17646){
var statearr_17699_19394 = state_17683__$1;
(statearr_17699_19394[(1)] = (5));

} else {
var statearr_17700_19395 = state_17683__$1;
(statearr_17700_19395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (15))){
var inst_17640 = (state_17683[(7)]);
var inst_17671 = cljs.core.vec(inst_17640);
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17683__$1,(18),out,inst_17671);
} else {
if((state_val_17685 === (13))){
var inst_17666 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
var statearr_17701_19409 = state_17683__$1;
(statearr_17701_19409[(2)] = inst_17666);

(statearr_17701_19409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (6))){
var inst_17640 = (state_17683[(7)]);
var inst_17668 = inst_17640.length;
var inst_17669 = (inst_17668 > (0));
var state_17683__$1 = state_17683;
if(cljs.core.truth_(inst_17669)){
var statearr_17702_19410 = state_17683__$1;
(statearr_17702_19410[(1)] = (15));

} else {
var statearr_17707_19411 = state_17683__$1;
(statearr_17707_19411[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (17))){
var inst_17676 = (state_17683[(2)]);
var inst_17677 = cljs.core.async.close_BANG_(out);
var state_17683__$1 = (function (){var statearr_17708 = state_17683;
(statearr_17708[(10)] = inst_17676);

return statearr_17708;
})();
var statearr_17711_19413 = state_17683__$1;
(statearr_17711_19413[(2)] = inst_17677);

(statearr_17711_19413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (3))){
var inst_17681 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17683__$1,inst_17681);
} else {
if((state_val_17685 === (12))){
var inst_17640 = (state_17683[(7)]);
var inst_17659 = cljs.core.vec(inst_17640);
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17683__$1,(14),out,inst_17659);
} else {
if((state_val_17685 === (2))){
var state_17683__$1 = state_17683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17683__$1,(4),ch);
} else {
if((state_val_17685 === (11))){
var inst_17640 = (state_17683[(7)]);
var inst_17644 = (state_17683[(9)]);
var inst_17648 = (state_17683[(11)]);
var inst_17656 = inst_17640.push(inst_17644);
var tmp17719 = inst_17640;
var inst_17640__$1 = tmp17719;
var inst_17641 = inst_17648;
var state_17683__$1 = (function (){var statearr_17720 = state_17683;
(statearr_17720[(7)] = inst_17640__$1);

(statearr_17720[(12)] = inst_17656);

(statearr_17720[(8)] = inst_17641);

return statearr_17720;
})();
var statearr_17721_19419 = state_17683__$1;
(statearr_17721_19419[(2)] = null);

(statearr_17721_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (9))){
var inst_17641 = (state_17683[(8)]);
var inst_17652 = cljs.core.keyword_identical_QMARK_(inst_17641,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17683__$1 = state_17683;
var statearr_17725_19428 = state_17683__$1;
(statearr_17725_19428[(2)] = inst_17652);

(statearr_17725_19428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (5))){
var inst_17644 = (state_17683[(9)]);
var inst_17641 = (state_17683[(8)]);
var inst_17648 = (state_17683[(11)]);
var inst_17649 = (state_17683[(13)]);
var inst_17648__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17644) : f.call(null, inst_17644));
var inst_17649__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17648__$1,inst_17641);
var state_17683__$1 = (function (){var statearr_17726 = state_17683;
(statearr_17726[(11)] = inst_17648__$1);

(statearr_17726[(13)] = inst_17649__$1);

return statearr_17726;
})();
if(inst_17649__$1){
var statearr_17729_19431 = state_17683__$1;
(statearr_17729_19431[(1)] = (8));

} else {
var statearr_17730_19432 = state_17683__$1;
(statearr_17730_19432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (14))){
var inst_17644 = (state_17683[(9)]);
var inst_17648 = (state_17683[(11)]);
var inst_17661 = (state_17683[(2)]);
var inst_17662 = [];
var inst_17663 = inst_17662.push(inst_17644);
var inst_17640 = inst_17662;
var inst_17641 = inst_17648;
var state_17683__$1 = (function (){var statearr_17740 = state_17683;
(statearr_17740[(7)] = inst_17640);

(statearr_17740[(14)] = inst_17661);

(statearr_17740[(15)] = inst_17663);

(statearr_17740[(8)] = inst_17641);

return statearr_17740;
})();
var statearr_17741_19434 = state_17683__$1;
(statearr_17741_19434[(2)] = null);

(statearr_17741_19434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (16))){
var state_17683__$1 = state_17683;
var statearr_17742_19435 = state_17683__$1;
(statearr_17742_19435[(2)] = null);

(statearr_17742_19435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (10))){
var inst_17654 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
if(cljs.core.truth_(inst_17654)){
var statearr_17743_19436 = state_17683__$1;
(statearr_17743_19436[(1)] = (11));

} else {
var statearr_17744_19437 = state_17683__$1;
(statearr_17744_19437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (18))){
var inst_17673 = (state_17683[(2)]);
var state_17683__$1 = state_17683;
var statearr_17746_19438 = state_17683__$1;
(statearr_17746_19438[(2)] = inst_17673);

(statearr_17746_19438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17685 === (8))){
var inst_17649 = (state_17683[(13)]);
var state_17683__$1 = state_17683;
var statearr_17747_19439 = state_17683__$1;
(statearr_17747_19439[(2)] = inst_17649);

(statearr_17747_19439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13347__auto__ = null;
var cljs$core$async$state_machine__13347__auto____0 = (function (){
var statearr_17752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17752[(0)] = cljs$core$async$state_machine__13347__auto__);

(statearr_17752[(1)] = (1));

return statearr_17752;
});
var cljs$core$async$state_machine__13347__auto____1 = (function (state_17683){
while(true){
var ret_value__13348__auto__ = (function (){try{while(true){
var result__13349__auto__ = switch__13346__auto__(state_17683);
if(cljs.core.keyword_identical_QMARK_(result__13349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13349__auto__;
}
break;
}
}catch (e17754){var ex__13350__auto__ = e17754;
var statearr_17755_19451 = state_17683;
(statearr_17755_19451[(2)] = ex__13350__auto__);


if(cljs.core.seq((state_17683[(4)]))){
var statearr_17756_19456 = state_17683;
(statearr_17756_19456[(1)] = cljs.core.first((state_17683[(4)])));

} else {
throw ex__13350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19460 = state_17683;
state_17683 = G__19460;
continue;
} else {
return ret_value__13348__auto__;
}
break;
}
});
cljs$core$async$state_machine__13347__auto__ = function(state_17683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13347__auto____1.call(this,state_17683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13347__auto____0;
cljs$core$async$state_machine__13347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13347__auto____1;
return cljs$core$async$state_machine__13347__auto__;
})()
})();
var state__14415__auto__ = (function (){var statearr_17758 = f__14414__auto__();
(statearr_17758[(6)] = c__14413__auto___19374);

return statearr_17758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14415__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
