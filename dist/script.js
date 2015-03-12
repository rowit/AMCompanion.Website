/*
 AngularJS v1.4.0-beta.5
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,W,t){'use strict';function Q(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.0-beta.5/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Pa(b){if(null==b||Qa(b))return!1;var a=b.length;return b.nodeType===
qa&&a?!0:J(b)||D(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function p(b,a,c){var d,e;if(b)if(I(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(D(b)||Pa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==p)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Hd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function gc(b){return function(a,c){b(c,a)}}function Id(){return++fb}function hc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function R(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}hc(b,a);return b}function aa(b){return parseInt(b,10)}function Kb(b,a){return R(Object.create(b),a)}function w(){}function Ra(b){return b}function ra(b){return function(){return b}}function E(b){return"undefined"===
typeof b}function A(b){return"undefined"!==typeof b}function F(b){return null!==b&&"object"===typeof b}function J(b){return"string"===typeof b}function S(b){return"number"===typeof b}function sa(b){return"[object Date]"===ta.call(b)}function I(b){return"function"===typeof b}function gb(b){return"[object RegExp]"===ta.call(b)}function Qa(b){return b&&b.window===b}function Sa(b){return b&&b.$evalAsync&&b.$watch}function Ta(b){return"boolean"===typeof b}function ic(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Jd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return L(b.nodeName||b[0]&&b[0].nodeName)}function Ua(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function va(b,a,c,d){if(Qa(b)||Sa(b))throw Ca("cpws");if(jc.test(ta.call(a)))throw Ca("cpta");if(a){if(b===a)throw Ca("cpi");c=c||[];d=d||[];if(F(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(D(b))for(var f=a.length=0;f<b.length;f++)e=va(b[f],null,c,d),
F(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;D(a)?a.length=0:p(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=va(b[f],null,c,d),F(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);hc(a,g)}}else if(a=b)D(b)?a=va(b,[],c,d):jc.test(ta.call(b))?a=new b.constructor(b):sa(b)?a=new Date(b.getTime()):gb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):F(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=va(b,e,c,d));return a}function da(b,a){if(D(b)){a=
a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(F(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function la(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(D(b)){if(!D(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!la(b[d],a[d]))return!1;return!0}}else{if(sa(b))return sa(a)?la(b.getTime(),a.getTime()):!1;if(gb(b)&&gb(a))return b.toString()==a.toString();if(Sa(b)||
Sa(a)||Qa(b)||Qa(a)||D(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!I(b[d])){if(!la(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!I(a[d]))return!1;return!0}return!1}function Va(b,a,c){return b.concat(Wa.call(a,c))}function kc(b,a){var c=2<arguments.length?Wa.call(arguments,2):[];return!I(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Va(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,
arguments):a.call(b)}}function Kd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Qa(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Sa(a)&&(c="$SCOPE");return c}function Xa(b,a){if("undefined"===typeof b)return t;S(a)||(a=a?2:null);return JSON.stringify(b,Kd,a)}function lc(b){return J(b)?JSON.parse(b):b}function wa(b){b=H(b).clone();try{b.empty()}catch(a){}var c=H("<div>").append(b).html();try{return b[0].nodeType===hb?L(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,
b){return"<"+L(b)})}catch(d){return L(c)}}function mc(b){try{return decodeURIComponent(b)}catch(a){}}function nc(b){var a={},c,d;p((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=mc(c[0]),A(d)&&(b=A(c[1])?mc(c[1]):!0,oc.call(a,d)?D(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Lb(b){var a=[];p(b,function(b,d){D(b)?p(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function ib(b){return Da(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function pc(b,a){var c,d,e=Ja.length;b=H(b);for(d=0;d<e;++d)if(c=Ja[d]+a,J(c=b.attr(c)))return c;return null}function Ld(b,a){var c,d,e={};p(Ja,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});p(Ja,function(a){a+="app";
var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==pc(c,"strict-di"),a(c,d?[d]:[],e))}function qc(b,a,c){F(c)||(c={});c=R({strictDi:!1},c);var d=function(){b=H(b);if(b.injector()){var d=b[0]===W?"document":wa(b);throw Ca("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");
d=Ya(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");ba.resumeBootstrap=function(b){p(b,function(b){a.push(b)});return d()};I(ba.resumeDeferredBootstrap)&&ba.resumeDeferredBootstrap()}function Md(){O.name="NG_ENABLE_DEBUG_INFO!"+
O.name;O.location.reload()}function Nd(b){b=ba.element(b).injector();if(!b)throw Ca("test");return b.get("$$testability")}function rc(b,a){a=a||"_";return b.replace(Od,function(b,d){return(d?a:"")+b.toLowerCase()})}function Pd(){var b;if(!sc){var a=jb();ma=O.jQuery;A(a)&&(ma=null===a?t:O[a]);ma&&ma.fn.on?(H=ma,R(ma.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ma.cleanData,ma.cleanData=function(a){var d;if(Mb)Mb=!1;
else for(var e=0,f;null!=(f=a[e]);e++)(d=ma._data(f,"events"))&&d.$destroy&&ma(f).triggerHandler("$destroy");b(a)}):H=P;ba.element=H;sc=!0}}function Nb(b,a,c){if(!b)throw Ca("areq",a||"?",c||"required");return b}function kb(b,a,c){c&&D(b)&&(b=b[b.length-1]);Nb(I(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ca("badname",a);}function tc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,
g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&I(b)?kc(e,b):b}function lb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return H(c)}function na(){return Object.create(null)}function Qd(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=Q("$injector"),d=Q("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||Q;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=
null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],s=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider",
"register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:s,run:function(a){e.push(a);return this}};h&&s(h);return u})}})}function Rd(b){R(b,{bootstrap:qc,copy:va,extend:R,equals:la,element:H,forEach:p,injector:Ya,noop:w,bind:kc,toJson:Xa,fromJson:lc,identity:Ra,isUndefined:E,isDefined:A,isString:J,isFunction:I,isObject:F,isNumber:S,isElement:ic,isArray:D,version:Sd,isDate:sa,lowercase:L,uppercase:mb,callbacks:{counter:0},getTestability:Nd,$$minErr:Q,
$$csp:Za,reloadWithDebugInfo:Md});$a=Qd(O);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",Td)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ud});a.provider("$compile",uc).directive({a:Vd,input:vc,textarea:vc,form:Wd,script:Xd,select:Yd,style:Zd,option:$d,ngBind:ae,ngBindHtml:be,ngBindTemplate:ce,ngClass:de,ngClassEven:ee,ngClassOdd:fe,ngCloak:ge,ngController:he,ngForm:ie,ngHide:je,ngIf:ke,ngInclude:le,ngInit:me,ngNonBindable:ne,ngPluralize:oe,ngRepeat:pe,
ngShow:qe,ngStyle:re,ngSwitch:se,ngSwitchWhen:te,ngSwitchDefault:ue,ngOptions:ve,ngTransclude:we,ngModel:xe,ngList:ye,ngChange:ze,pattern:wc,ngPattern:wc,required:xc,ngRequired:xc,minlength:yc,ngMinlength:yc,maxlength:zc,ngMaxlength:zc,ngValue:Ae,ngModelOptions:Be}).directive({ngInclude:Ce}).directive(nb).directive(Ac);a.provider({$anchorScroll:De,$animate:Ee,$browser:Fe,$cacheFactory:Ge,$controller:He,$document:Ie,$exceptionHandler:Je,$filter:Bc,$interpolate:Ke,$interval:Le,$http:Me,$httpBackend:Ne,
$location:Oe,$log:Pe,$parse:Qe,$rootScope:Re,$q:Se,$$q:Te,$sce:Ue,$sceDelegate:Ve,$sniffer:We,$templateCache:Xe,$templateRequest:Ye,$$testability:Ze,$timeout:$e,$window:af,$$rAF:bf,$$asyncCallback:cf,$$jqLite:df})}])}function ab(b){return b.replace(ef,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ff,"Moz$1")}function Cc(b){b=b.nodeType;return b===qa||!b||9===b}function Dc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Ob.test(b)){c=c||e.appendChild(a.createElement("div"));d=(gf.exec(b)||
["",""])[1].toLowerCase();d=ea[d]||ea._default;c.innerHTML=d[1]+b.replace(hf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Va(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function P(b){if(b instanceof P)return b;var a;J(b)&&(b=V(b),a=!0);if(!(this instanceof P)){if(a&&"<"!=b.charAt(0))throw Pb("nosel");return new P(b)}if(a){a=W;var c;b=(c=jf.exec(b))?[a.createElement(c[1])]:(c=Dc(b,
a))?c.childNodes:[]}Ec(this,b)}function Qb(b){return b.cloneNode(!0)}function ob(b,a){a||pb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)pb(c[d])}function Fc(b,a,c,d){if(A(d))throw Pb("offargs");var e=(d=qb(b))&&d.events,f=d&&d.handle;if(f)if(a)p(a.split(" "),function(a){if(A(c)){var d=e[a];Ua(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function pb(b,a){var c=
b.ng339,d=c&&rb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Fc(b)),delete rb[c],b.ng339=t))}function qb(b,a){var c=b.ng339,c=c&&rb[c];a&&!c&&(b.ng339=c=++kf,c=rb[c]={events:{},data:{},handle:t});return c}function Rb(b,a,c){if(Cc(b)){var d=A(c),e=!d&&a&&!F(a),f=!a;b=(b=qb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];R(b,a)}}}function sb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
a+" "):!1}function tb(b,a){a&&b.setAttribute&&p(a.split(" "),function(a){b.setAttribute("class",V((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+V(a)+" "," ")))})}function ub(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");p(a.split(" "),function(a){a=V(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",V(c))}}function Ec(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==
a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Gc(b,a){return vb(b,"$"+(a||"ngController")+"Controller")}function vb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=D(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=H.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Hc(b){for(ob(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Sb(b,a){a||ob(b);var c=b.parentNode;c&&c.removeChild(b)}function lf(b,a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);
else H(a).on("load",b)}function Ic(b,a){var c=wb[a.toLowerCase()];return c&&Jc[ua(b)]&&c}function mf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Kc[a]}function nf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(E(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};1<g&&(f=da(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function df(){this.$get=function(){return R(P,{hasClass:function(b,a){b.attr&&(b=b[0]);return sb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return ub(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return tb(b,a)}})}}function Ea(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==
c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Id)():c+":"+b}function xb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}p(b,this.put,this)}function of(b){return(b=b.toString().replace(Lc,"").match(Mc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ya(b,a){function c(a){return function(b,c){if(F(b))p(b,gc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(I(b)||D(b))b=s.instantiate(b);if(!b.$get)throw Fa("pget",a);return m[a+"Provider"]=b}function e(a,b){return function(){var c=
y.invoke(b,this);if(E(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{J(a)?(c=$a(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):I(a)?b.push(s.invoke(a)):D(a)?b.push(s.invoke(a)):kb(a,"module")}catch(e){throw D(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==
e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,h){"string"===typeof f&&(h=f,f=null);var g=[],k=Ya.$$annotate(b,a,h),l,s,m;s=0;for(l=k.length;s<l;s++){m=k[s];if("string"!==typeof m)throw Fa("itkn",m);g.push(f&&
f.hasOwnProperty(m)?f[m]:d(m,h))}D(b)&&(b=b[l]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((D(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return F(a)||I(a)?a:d},get:d,annotate:Ya.$$annotate,has:function(a){return m.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new xb([],!0),m={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,
b){return f(a,ra(b),!1)}),constant:c(function(a,b){La(a,"constant");m[a]=b;u[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=y.invoke(d,c);return y.invoke(b,null,{$delegate:a})}}}},s=m.$injector=h(m,function(a,b){ba.isString(b)&&k.push(b);throw Fa("unpr",k.join(" <- "));}),u={},y=u.$injector=h(u,function(a,b){var c=s.get(a+"Provider",b);return y.invoke(c.$get,c,t,a)});p(g(b),function(a){y.invoke(a||w)});return y}function De(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;I(c)?c=c():ic(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):S(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||lf(function(){d.$evalAsync(g)})});return g}]}function cf(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function pf(b,a,c,d){function e(a){try{a.apply(null,Wa.call(arguments,1))}finally{if(q--,0===q)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function f(a,b){(function qf(){p(z,function(a){a()});x=b(qf,
a)})()}function g(){h();l()}function h(){G=b.history.state;G=E(G)?null:G;la(G,pa)&&(G=pa);pa=G}function l(){if(C!==n.url()||M!==G)C=n.url(),M=G,p(Y,function(a){a(n.url(),G)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var n=this,m=a[0],s=b.location,u=b.history,y=b.setTimeout,N=b.clearTimeout,v={};n.isMock=!1;var q=0,B=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){q++};n.notifyWhenNoOutstandingRequests=function(a){p(z,function(a){a()});0===q?a():
B.push(a)};var z=[],x;n.addPollFn=function(a){E(x)&&f(100,y);z.push(a);return a};var G,M,C=s.href,X=a.find("base"),fa=null;h();M=G;n.url=function(a,c,e){E(e)&&(e=null);s!==b.location&&(s=b.location);u!==b.history&&(u=b.history);if(a){var f=M===e;if(C===a&&(!d.history||f))return n;var g=C&&Ga(C)===Ga(a);C=a;M=e;!d.history||g&&f?(g||(fa=a),c?s.replace(a):g?(c=s,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):s.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),M=G);return n}return fa||s.href.replace(/%27/g,
"'")};n.state=function(){return G};var Y=[],ga=!1,pa=null;n.onUrlChange=function(a){if(!ga){if(d.history)H(b).on("popstate",g);H(b).on("hashchange",g);ga=!0}Y.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=X.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var r={},A="",I=n.baseHref();n.cookies=function(a,b){var d,e,f,h;if(a)b===t?m.cookie=encodeURIComponent(a)+"=;path="+I+";expires=Thu, 01 Jan 1970 00:00:00 GMT":J(b)&&(d=(m.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+
";path="+I).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==A)for(A=m.cookie,d=A.split("; "),r={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=k(e.substring(0,h)),r[a]===t&&(r[a]=k(e.substring(h+1))));return r}};n.defer=function(a,b){var c;q++;c=y(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],N(a),e(w),!0):!1}}function Fe(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new pf(b,d,a,c)}]}function Ge(){this.$get=function(){function b(b,d){function e(a){a!=m&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw Q("$cacheFactory")("iid",b);var g=0,h=R({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},m=null,s=null;return a[b]={put:function(a,b){if(!E(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);
return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==m&&(m=b.p);b==s&&(s=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};m=s=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return R({},h,{size:g})}}}var a={};b.info=function(){var b={};p(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Xe(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function uc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};p(a,function(a,f){var h=a.match(d);if(!h)throw ja("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:h[1][0],collection:"*"===h[2],optional:"?"===h[3],attrName:h[4]||f}});return e}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Jd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=
/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){La(a,"directive");J(a)?(Nb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];p(d[a],function(d,h){try{var g=b.invoke(d);I(g)?g={compile:ra(g)}:!g.compile&&g.link&&(g.compile=ra(g.link));g.priority=g.priority||0;g.index=h;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"EA";var k=g,l=g,m=g.name,u={isolateScope:null,bindToController:null};
F(l.scope)&&(!0===l.bindToController?(u.bindToController=c(l.scope,m,!0),u.isolateScope={}):u.isolateScope=c(l.scope,m,!1));F(l.bindToController)&&(u.bindToController=c(l.bindToController,m,!0));if(F(u.bindToController)){var X=l.controller,p=l.controllerAs;if(!X)throw ja("noctrl",m);var Y;a:if(p&&J(p))Y=p;else{if(J(X)){var ga=Oc.exec(X);if(ga){Y=ga[3];break a}}Y=void 0}if(!Y)throw ja("noident",m);}var pa=k.$$bindings=u;F(pa.isolateScope)&&(g.$$isolateBindings=pa.isolateScope);f.push(g)}catch(r){e(r)}});
return f}])),d[a].push(e)):p(a,gc(m));return this};this.aHrefSanitizationWhitelist=function(b){return A(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return A(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document",
"$sce","$animate","$$sanitizeUri",function(a,b,c,y,N,v,q,B,z,x,G){function M(a,b){try{a.addClass(b)}catch(c){}}function C(a,b,c,d,e){a instanceof H||(a=H(a));p(a,function(b,c){b.nodeType==hb&&b.nodeValue.match(/\S+/)&&(a[c]=H(b).wrap("<span></span>").parent()[0])});var f=X(a,b,a,c,d,e);C.$$addScopeClass(a);var h=null;return function(b,c,d){Nb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);h||(h=(d=
d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==h?H(Tb(h,H("<div>").append(a).html())):c?Ka.clone.call(a):a;if(g)for(var l in g)d.data("$"+l+"Controller",g[l].instance);C.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function X(a,b,c,d,e,f){function h(a,c,d,e){var f,l,k,s,m,u,y;if(q)for(y=Array(c.length),s=0;s<g.length;s+=3)f=g[s],y[f]=c[f];else y=c;s=0;for(m=g.length;s<m;)if(l=y[g[s++]],c=g[s++],f=g[s++],c){if(c.scope){if(k=a.$new(),C.$$addScopeInfo(H(l),
k),u=c.$$destroyBindings)c.$$destroyBindings=null,k.$on("$destroyed",u)}else k=a;u=c.transcludeOnThisElement?fa(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?fa(a,b):null;c(f,k,l,d,u,c)}else f&&f(a,l.childNodes,t,e)}for(var g=[],l,k,s,m,q,u=0;u<a.length;u++){l=new ca;k=Y(a[u],[],l,0===u?d:t,e);(f=k.length?A(k,a[u],l,b,c,null,[],[],f):null)&&f.scope&&C.$$addScopeClass(l.$$element);l=f&&f.terminal||!(s=a[u].childNodes)||!s.length?null:X(s,f?(f.transcludeOnThisElement||
!f.templateOnThisElement)&&f.transclude:b);if(f||l)g.push(u,f,l),m=!0,q=q||f;f=null}return m?h:null}function fa(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function Y(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case qa:ha(b,xa(ua(a)),"E",d,g);for(var k,s,m,q=a.attributes,u=0,y=q&&q.length;u<y;u++){var C=!1,M=!1;k=q[u];l=k.name;s=V(k.value);k=xa(l);if(m=ka.test(k))l=l.replace(Pc,
"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var G=k.replace(/(Start|End)$/,"");T(G)&&k===G+"Start"&&(C=l,M=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=xa(l.toLowerCase());h[k]=l;if(m||!c.hasOwnProperty(k))c[k]=s,Ic(a,k)&&(c[k]=!0);U(a,b,s,k,m);ha(b,k,"A",d,g,C,M)}a=a.className;F(a)&&(a=a.animVal);if(J(a)&&""!==a)for(;l=f.exec(a);)k=xa(l[2]),ha(b,k,"C",d,g)&&(c[k]=V(l[3])),a=a.substr(l.index+l[0].length);break;case hb:P(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=
xa(l[1]),ha(b,k,"M",d,g)&&(c[k]=V(l[2]))}catch(N){}}b.sort(O);return b}function ga(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return H(d)}function r(a,b,c){return function(d,e,f,g,h){e=ga(e[0],b,c);return a(d,e,f,g,h)}}function A(a,b,d,e,f,g,l,k,s){function m(a,b,c,d){if(a){c&&(a=r(a,c,d));a.require=K.require;a.directiveName=ha;if(x===
K||K.$$isolateScope)a=$(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=r(b,c,d));b.require=K.require;b.directiveName=ha;if(x===K||K.$$isolateScope)b=$(b,{isolateScope:!0});k.push(b)}}function q(a,b,c,d){var e;if(J(b)){var f=b.match(h);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ja("ctreq",b,a);}else if(D(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=q(a,b[g],c,d);return e||
null}function y(a,b,c,d,e,f){var g=na(),h;for(h in d){var l=d[h],k={$scope:l===x||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},s=l.controller;"@"==s&&(s=b[l.name]);k=v(s,k,!0,l.controllerAs);g[l.name]=k;Na||a.data("$"+l.name+"Controller",k.instance)}return g}function M(a,c,e,f,g,h){function s(a,b,c){var d;Sa(a)||(c=b,b=a,a=t);Na&&(d=Y);c||(c=Na?oa.parent():oa);return g(a,b,d,c,ga)}var m,u,G,v,Y,B,oa;b===e?(f=d,oa=d.$$element):(oa=H(e),f=new ca(oa,d));x&&(v=c.$new(!0));g&&(B=s,B.$$boundTransclude=
g);z&&(Y=y(oa,f,B,z,v,c));x&&(C.$$addScopeInfo(oa,v,!0,!(X&&(X===x||X===x.$$originalDirective))),C.$$addScopeClass(oa,!0),v.$$isolateBindings=x.$$isolateBindings,ba(c,f,v,v.$$isolateBindings,x,v));if(Y){var p=x||N,fa;p&&Y[p.name]&&(u=p.$$bindings.bindToController,(G=Y[p.name])&&G.identifier&&u&&(fa=G,h.$$destroyBindings=ba(c,f,G.instance,u,p)));for(m in Y){G=Y[m];var r=G();r!==G.instance&&G===fa&&(h.$$destroyBindings(),h.$$destroyBindings=ba(c,f,r,u,p))}}m=0;for(h=l.length;m<h;m++)u=l[m],aa(u,u.isolateScope?
v:c,oa,f,u.require&&q(u.directiveName,u.require,oa,Y),B);var ga=c;x&&(x.template||null===x.templateUrl)&&(ga=v);a&&a(ga,e.childNodes,t,g);for(m=k.length-1;0<=m;m--)u=k[m],aa(u,u.isolateScope?v:c,oa,f,u.require&&q(u.directiveName,u.require,oa,Y),B)}s=s||{};for(var G=-Number.MAX_VALUE,N,z=s.controllerDirectives,x=s.newIsolateScopeDirective,X=s.templateDirective,B=s.nonTlbTranscludeDirective,p=!1,fa=!1,Na=s.hasElementTranscludeDirective,w=d.$$element=H(b),K,ha,T,L=e,O,P=0,R=a.length;P<R;P++){K=a[P];
var S=K.$$start,U=K.$$end;S&&(w=ga(b,S,U));T=t;if(G>K.priority)break;if(T=K.scope)K.templateUrl||(F(T)?(Ma("new/isolated scope",x||N,K,w),x=K):Ma("new/isolated scope",x,K,w)),N=N||K;ha=K.name;!K.templateUrl&&K.controller&&(T=K.controller,z=z||na(),Ma("'"+ha+"' controller",z[ha],K,w),z[ha]=K);if(T=K.transclude)p=!0,K.$$tlb||(Ma("transclusion",B,K,w),B=K),"element"==T?(Na=!0,G=K.priority,T=w,w=d.$$element=H(W.createComment(" "+ha+": "+d[ha]+" ")),b=w[0],Z(f,Wa.call(T,0),b),L=C(T,e,G,g&&g.name,{nonTlbTranscludeDirective:B})):
(T=H(Qb(b)).contents(),w.empty(),L=C(T,e));if(K.template)if(fa=!0,Ma("template",X,K,w),X=K,T=I(K.template)?K.template(w,d):K.template,T=ia(T),K.replace){g=K;T=Ob.test(T)?Qc(Tb(K.templateNamespace,V(T))):[];b=T[0];if(1!=T.length||b.nodeType!==qa)throw ja("tplrt",ha,"");Z(f,w,b);R={$attr:{}};T=Y(b,[],R);var rf=a.splice(P+1,a.length-(P+1));x&&E(T);a=a.concat(T).concat(rf);Nc(d,R);R=a.length}else w.html(T);if(K.templateUrl)fa=!0,Ma("template",X,K,w),X=K,K.replace&&(g=K),M=Q(a.splice(P,a.length-P),w,d,
f,p&&L,l,k,{controllerDirectives:z,newIsolateScopeDirective:x,templateDirective:X,nonTlbTranscludeDirective:B}),R=a.length;else if(K.compile)try{O=K.compile(w,d,L),I(O)?m(null,O,S,U):O&&m(O.pre,O.post,S,U)}catch(da){c(da,wa(w))}K.terminal&&(M.terminal=!0,G=Math.max(G,K.priority))}M.scope=N&&!0===N.scope;M.transcludeOnThisElement=p;M.elementTranscludeOnThisElement=Na;M.templateOnThisElement=fa;M.transclude=L;s.hasElementTranscludeDirective=Na;return M}function E(a){for(var b=0,c=a.length;b<c;b++)a[b]=
Kb(a[b],{$$isolateScope:!0})}function ha(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var s;e=a.get(e+"Directive");for(var q=0,y=e.length;q<y;q++)try{s=e[q],(g===t||g>s.priority)&&-1!=s.restrict.indexOf(f)&&(l&&(s=Kb(s,{$$start:l,$$end:k})),b.push(s),h=s)}catch(C){c(C)}}return h}function T(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Nc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;p(a,function(d,
e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,f){"class"==f?(M(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Q(a,b,c,d,e,f,g,h){var l=[],k,s,m=b[0],q=a.shift(),u=Kb(q,{templateUrl:null,transclude:null,replace:null,$$originalDirective:q}),C=I(q.templateUrl)?q.templateUrl(b,c):q.templateUrl,
G=q.templateNamespace;b.empty();y(z.getTrustedResourceUrl(C)).then(function(y){var x,N;y=ia(y);if(q.replace){y=Ob.test(y)?Qc(Tb(G,V(y))):[];x=y[0];if(1!=y.length||x.nodeType!==qa)throw ja("tplrt",q.name,C);y={$attr:{}};Z(d,b,x);var z=Y(x,[],y);F(q.scope)&&E(z);a=z.concat(a);Nc(c,y)}else x=m,b.html(y);a.unshift(u);k=A(a,x,c,e,b,q,f,g,h);p(d,function(a,c){a==x&&(d[c]=b[0])});for(s=X(b[0].childNodes,e);l.length;){y=l.shift();N=l.shift();var v=l.shift(),B=l.shift(),z=b[0];if(!y.$$destroyed){if(N!==m){var ga=
N.className;h.hasElementTranscludeDirective&&q.replace||(z=Qb(x));Z(v,H(N),z);M(H(z),ga)}N=k.transcludeOnThisElement?fa(y,k.transclude,B):B;k(s,y,z,d,N,k)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=fa(b,k.transclude,e)),k(s,b,c,d,a,k)))}}function O(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ma(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,wa(d));}function P(a,c){var d=
b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&C.$$addBindingClass(a);return function(a,c){var e=c.parent();b||C.$$addBindingClass(e);C.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Tb(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function S(a,b){if("srcdoc"==b)return z.HTML;var c=ua(a);if("xlinkHref"==
b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return z.RESOURCE_URL}function U(a,c,d,e,f){var h=S(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===ua(a))throw ja("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ja("nodomevents");var m=g[e];m!==d&&(k=m&&b(m,!0,h,f),d=m);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,
b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function Z(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);H(c).data(H(d).data());ma?(Mb=!0,ma.cleanData([d])):delete H.cache[d[H.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],H(f).remove(),a.appendChild(f),
delete b[d];b[0]=c;b.length=1}function $(a,b){return R(function(){return a.apply(null,arguments)},a,b)}function aa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}function ba(a,c,d,e,f,g){var h;p(e,function(e,g){var l=e.attrName,k=e.optional,m,q,u,y;switch(e.mode){case "@":c.$observe(l,function(a){d[g]=a});c.$$observers[l].$$scope=a;c[l]&&(d[g]=b(c[l])(a));break;case "=":if(k&&!c[l])break;q=N(c[l]);y=q.literal?la:function(a,b){return a===b||a!==a&&b!==b};u=q.assign||function(){m=d[g]=q(a);throw ja("nonassign",
c[l],f.name);};m=d[g]=q(a);k=function(b){y(b,d[g])||(y(b,m)?u(a,b=d[g]):d[g]=b);return m=b};k.$stateful=!0;k=e.collection?a.$watchCollection(c[l],k):a.$watch(N(c[l],k),null,q.literal);h=h||[];h.push(k);break;case "&":if(!c.hasOwnProperty(l)&&k)break;q=N(c[l]);if(q===w&&k)break;d[g]=function(b){return q(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:w;return g&&e!==w?(g.$on("$destroy",e),w):e}var ca=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=
b[f]}else this.$attr={};this.$$element=a};ca.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&x.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&x.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Rc(a,b);c&&c.length&&x.addClass(this.$$element,c);(c=Rc(b,a))&&c.length&&x.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Ic(f,a),h=mf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=
this.$attr[a])||(this.$attr[a]=e=rc(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=G(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=V(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var s=2*k,g=g+G(V(h[s]),!0),g=g+(" "+V(h[s+1]));h=V(h[2*k]).split(/\s/);g+=G(V(h[0]),!0);2===h.length&&(g+=" "+V(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,
b));(a=this.$$observers)&&p(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=na()),e=d[a]||(d[a]=[]);e.push(b);q.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Ua(e,b)}}};var da=b.startSymbol(),ea=b.endSymbol(),ia="{{"==da||"}}"==ea?Ra:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,ea)},ka=/^ngAttr[A-Z]/;C.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];D(b)?c=c.concat(b):c.push(b);
a.data("$binding",c)}:w;C.$$addBindingClass=k?function(a){M(a,"ng-binding")}:w;C.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;C.$$addScopeClass=k?function(a,b){M(a,b?"ng-isolate-scope":"ng-scope")}:w;return C}]}function xa(b){return ab(b.replace(Pc,""))}function Rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Qc(b){b=
H(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&sf.call(b,a,1);return b}function He(){var b={},a=!1;this.register=function(a,d){La(a,"controller");F(a)?R(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!F(a.$scope))throw Q("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,m;h=!0===h;l&&J(l)&&(m=l);if(J(f)){l=f.match(Oc);if(!l)throw tf("ctrlfmt",f);n=l[1];m=m||l[3];f=b.hasOwnProperty(n)?
b[n]:tc(g.$scope,n,!0)||(a?tc(d,n,!0):t);kb(f,n,!0)}if(h)return h=(D(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),m&&e(g,m,k,n||f.name),R(function(){var a=c.invoke(f,k,g,n);a!==k&&(F(a)||I(a))&&(k=a,m&&e(g,m,k,n||f.name));return k},{instance:k,identifier:m});k=c.instantiate(f,g,n);m&&e(g,m,k,n||f.name);return k}}]}function Ie(){this.$get=["$window",function(b){return H(b.document)}]}function Je(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Ub(b,
a){if(J(b)){var c=b.replace(uf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Sc))||(d=(d=c.match(vf))&&wf[d[0]].test(c));d&&(b=lc(c))}}return b}function Tc(b){var a=na(),c;J(b)?p(b.split("\n"),function(b){c=b.indexOf(":");var e=L(V(b.substr(0,c)));b=V(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):F(b)&&p(b,function(b,c){var f=L(c),g=V(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function Uc(b){var a;return function(c){a||(a=Tc(b));return c?(c=a[L(c)],void 0===c&&(c=null),c):a}}function Vc(b,
a,c,d){if(I(d))return d(b,a,c);p(d,function(d){b=d(b,a,c)});return b}function Me(){var b=this.defaults={transformResponse:[Ub],transformRequest:[function(a){return F(a)&&"[object File]"!==ta.call(a)&&"[object Blob]"!==ta.call(a)&&"[object FormData]"!==ta.call(a)?Xa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:da(Vb),put:da(Vb),patch:da(Vb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return A(b)?(a=!!b,this):a};var c=this.interceptors=
[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=R({},a);b.data=a.data?Vc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};p(a,function(a,d){I(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!ba.isObject(a))throw Q("$http")("badreq",a);var e=R({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},
a);e.headers=function(a){var c=b.headers,e=R({},a.headers),f,g,h,c=R({},c.common,c[L(a.method)]);a:for(f in c){g=L(f);for(h in e)if(L(h)===g)continue a;e[f]=c[f]}return d(e,da(a))}(a);e.method=mb(e.method);var f=[function(a){var d=a.headers,e=Vc(a.data,Uc(d),t,a.transformRequest);E(e)&&p(d,function(a,b){"content-type"===L(b)&&delete d[b]});E(a.withCredentials)&&!E(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(p(u,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){n(c,b,d,e)}M&&(200<=b&&300>b?M.put(r,[b,c,Tc(d),e]):M.remove(r));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function n(a,
b,d,e){b=Math.max(b,0);(200<=b&&300>b?x.resolve:x.reject)({data:a,status:b,headers:Uc(d),config:c,statusText:e})}function u(a){n(a.data,a.status,da(a.headers()),a.statusText)}function z(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var x=h.defer(),G=x.promise,M,C,p=c.headers,r=m(c.url,c.params);k.pendingRequests.push(c);G.then(z,z);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(M=F(c.cache)?c.cache:F(b.cache)?b.cache:s);M&&(C=M.get(r),A(C)?C&&
I(C.then)?C.then(u,u):D(C)?n(C[1],C[0],da(C[2]),C[3]):n(C,200,{},"OK"):M.put(r,G));E(C)&&((C=Wc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(p[c.xsrfHeaderName||b.xsrfHeaderName]=C),d(c.method,r,f,l,p,c.timeout,c.withCredentials,c.responseType));return G}function m(a,b){if(!b)return a;var c=[];Hd(b,function(a,b){null===a||E(a)||(D(a)||(a=[a]),p(a,function(a){F(a)&&(a=sa(a)?a.toISOString():Xa(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));
return a}var s=f("$http"),u=[];p(c,function(a){u.unshift(J(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){p(arguments,function(a){k[a]=function(b,c){return k(R(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){k[a]=function(b,c,d){return k(R(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function xf(){return new O.XMLHttpRequest}function Ne(){this.$get=["$browser","$window","$document",function(b,a,c){return yf(b,
xf,b.defer,a.angular.callbacks,c[0])}]}function yf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,
h,l,k,n,m,s,u){function y(){q&&q();B&&B.abort()}function N(a,d,e,f,g){x!==t&&c.cancel(x);q=B=null;a(d,e,f,g);b.$$completeOutstandingRequest(w)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==L(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=a;d[v].called=!0};var q=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){N(k,a,d[v].data,"",b);d[v]=w})}else{var B=a();B.open(e,h,!0);p(n,function(a,b){A(a)&&B.setRequestHeader(b,a)});B.onload=function(){var a=B.statusText||
"",b="response"in B?B.response:B.responseText,c=1223===B.status?204:B.status;0===c&&(c=b?200:"file"==za(h).protocol?404:0);N(k,c,b,B.getAllResponseHeaders(),a)};e=function(){N(k,-1,null,null,"")};B.onerror=e;B.onabort=e;s&&(B.withCredentials=!0);if(u)try{B.responseType=u}catch(z){if("json"!==u)throw z;}B.send(l||null)}if(0<m)var x=c(y,m);else m&&I(m.then)&&m.then(y)}}function Ke(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):
a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,b).replace(m,a)}function h(f,h,m,n){function v(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var c;if(n&&!A(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Xa(a)}c=a}return c}catch(g){c=Wb("interr",f,g.toString()),d(c)}}n=!!n;for(var q,p,z=0,x=[],G=[],M=f.length,C=[],X=[];z<M;)if(-1!=(q=f.indexOf(b,z))&&-1!=
(p=f.indexOf(a,q+l)))z!==q&&C.push(g(f.substring(z,q))),z=f.substring(q+l,p),x.push(z),G.push(c(z,v)),z=p+k,X.push(C.length),C.push("");else{z!==M&&C.push(g(f.substring(z)));break}if(m&&1<C.length)throw Wb("noconcat",f);if(!h||x.length){var r=function(a){for(var b=0,c=x.length;b<c;b++){if(n&&E(a[b]))return;C[X[b]]=a[b]}return C.join("")};return R(function(a){var b=0,c=x.length,e=Array(c);try{for(;b<c;b++)e[b]=G[b](a);return r(e)}catch(g){a=Wb("interr",f,g.toString()),d(a)}},{exp:f,expressions:x,$$watchDelegate:function(a,
b,c){var d;return a.$watchGroup(G,function(c,e){var f=r(c);I(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function Le(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,m=a.clearInterval,s=0,u=A(k)&&!k,y=(u?d:c).defer(),N=y.promise;l=A(l)?l:0;N.then(null,null,e);N.$$intervalId=
n(function(){y.notify(s++);0<l&&s>=l&&(y.resolve(s),m(N.$$intervalId),delete f[N.$$intervalId]);u||b.$apply()},h);f[N.$$intervalId]=y;return N}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Td(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,
lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",
fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Xb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ib(b[a]);return b.join("/")}function Xc(b,a){var c=za(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||zf[c.protocol]||null}function Yc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=za(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?
d.pathname.substring(1):d.pathname);a.$$search=nc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function yb(b){return b.replace(/(#.+)|#$/,"$1")}function Yb(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function Zb(b,a){this.$$html5=!0;a=a||"";var c=Yb(b);Xc(b,this);this.$$parse=function(a){var b=ya(c,a);if(!J(b))throw zb("ipthprfx",
a,c);Yc(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Lb(this.$$search),b=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Xb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function $b(b,a){var c=Yb(b);Xc(b,this);this.$$parse=
function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),E(e)&&(e=d)):e=this.$$html5?d:"";Yc(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Lb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Xb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):
!1}}function Zc(b,a){this.$$html5=!0;$b.apply(this,arguments);var c=Yb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Lb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Xb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Ab(b){return function(){return this[b]}}function $c(b,a){return function(c){if(E(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function Oe(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return A(a)?(b=a,this):b};this.html5Mode=function(b){return Ta(b)?(a.enabled=b,this):F(b)?(Ta(b.enabled)&&(a.enabled=b.enabled),Ta(b.requireBase)&&(a.requireBase=b.requireBase),Ta(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),
f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var m=d.url(),s;if(a.enabled){if(!n&&a.requireBase)throw zb("nobase");s=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(n||"/");n=e.history?Zb:Zc}else s=Ga(m),n=$b;k=new n(s,"#"+b);k.$$parseLinkUrl(m,m);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&
!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=H(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");F(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=za(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});yb(k.absUrl())!=yb(m)&&d.url(k.absUrl(),!0);var y=!0;d.onUrlChange(function(a,
b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(y=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=yb(d.url()),b=yb(k.absUrl()),f=d.state(),g=k.$$replace,s=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(y||s)y=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===
b&&(d?(k.$$parse(a),k.$$state=f):(s&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Pe(){var b=!0,a=this;this.debugEnabled=function(a){return A(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(l){}return a?
function(){var a=[];p(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Aa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ca("isecfld",a);return b}function ia(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b.window===
b)throw ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ca("isecdom",a);if(b===Object)throw ca("isecobj",a);}return b}function ad(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b===Af||b===Bf||b===Cf)throw ca("isecff",a);}}function Df(b,a){return"undefined"!==typeof b?b:a}function bd(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case r.Program:c=!0;p(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});
b.constant=c;break;case r.Literal:b.constant=!0;b.toWatch=[];break;case r.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case r.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case r.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case r.ConditionalExpression:U(b.test,a);U(b.alternate,
a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case r.Identifier:b.constant=!1;b.toWatch=[b];break;case r.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case r.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];p(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;
b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case r.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case r.ArrayExpression:c=!0;d=[];p(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case r.ObjectExpression:c=!0;d=[];p(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=
d;break;case r.ThisExpression:b.constant=!1,b.toWatch=[]}}function cd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function dd(b){return b.type===r.Identifier||b.type===r.MemberExpression}function ed(b){if(1===b.body.length&&dd(b.body[0].expression))return{type:r.AssignmentExpression,left:b.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function fd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===r.Literal||
b.body[0].expression.type===r.ArrayExpression||b.body[0].expression.type===r.ObjectExpression)}function gd(b,a){this.astBuilder=b;this.$filter=a}function hd(b,a){this.astBuilder=b;this.$filter=a}function Bb(b,a,c,d){ia(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=Aa(a.shift(),d);var g=ia(b[e],d);g||(g={},b[e]=g);b=g}e=Aa(a.shift(),d);ia(b[e],d);return b[e]=c}function Cb(b){return"constructor"==b}function ac(b){return I(b.valueOf)?b.valueOf():Ef.call(b)}function Qe(){var b=na(),a=na();this.$get=
["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ac(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var l=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,l)||(h=d(a,t,t,[b]),l=b&&ac(b));return h},b,c,f)}for(var k=[],m=[],n=0,C=g.length;n<C;n++)k[n]=e,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!e(l,k[c])))m[c]=l,k[c]=l&&ac(l)}b&&
(h=d(a,t,t,m));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;I(b)&&b.apply(this,arguments);A(a)&&d.$$postDigest(function(){A(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;p(a,function(a){A(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;I(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,
c,d){I(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return A(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:d.csp,expensiveChecks:!1},m={csp:d.csp,expensiveChecks:!0};return function(d,e,y){var p,v,q;switch(typeof d){case "string":q=
d=d.trim();var r=y?a:b;p=r[q];p||(":"===d.charAt(0)&&":"===d.charAt(1)&&(v=!0,d=d.substring(2)),y=y?m:n,p=new bc(y),p=(new cc(p,c,y)).parse(d),p.constant?p.$$watchDelegate=l:v?p.$$watchDelegate=p.literal?h:g:p.inputs&&(p.$$watchDelegate=f),r[q]=p);return k(p,e);case "function":return k(d,e);default:return w}}}]}function Se(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return id(function(a){b.$evalAsync(a)},a)}]}function Te(){this.$get=["$browser","$exceptionHandler",function(b,a){return id(function(a){b.defer(a)},
a)}]}function id(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{I(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),
a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=Q("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};
g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(F(b)||I(b))d=b&&b.then;I(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=
a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(I(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{I(c)&&(d=c())}catch(e){return l(e,!1)}return d&&I(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):
l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},m=function u(a){if(!I(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.defer=function(){return new g};m.reject=function(a){var b=new g;b.reject(a);return b.promise};m.when=n;m.all=function(a){var b=new g,c=0,d=D(a)?[]:{};p(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||
b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function bf(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Re(){var b=10,a=Q("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&
(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=++fb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function m(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function u(){for(;t.length;)try{t.shift()()}catch(a){f(a)}d=null}function y(){null===d&&(d=h.defer(function(){r.$apply(u)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++fb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,l=h.$$watchers,k={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;I(b)||(k.fn=
w);l||(l=h.$$watchers=[]);l.unshift(k);n(this,1);return function(){0<=Ua(l,k)&&n(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});p(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});
return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!E(e)){if(F(e))if(Pa(e))for(f!==n&&(f=n,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==s&&(f=s={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);
return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,m=g(a,c),n=[],s={},q=!0,u=0;return this.$watch(m,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(l)if(F(e))if(Pa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)oc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,l,m,n,p,y=b,t,B=[],pa,w;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),u());c=null;do{p=!1;for(t=this;v.length;){try{w=v.shift(),w.scope.$eval(w.expression,w.locals)}catch(A){f(A)}c=
null}a:do{if(m=t.$$watchers)for(n=m.length;n--;)try{if(e=m[n])if((g=e.get(t))!==(l=e.last)&&!(e.eq?la(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))p=!0,c=e,e.last=e.eq?va(g,null):g,e.fn(g,l===s?g:l,t),5>y&&(pa=4-y,B[pa]||(B[pa]=[]),B[pa].push({msg:I(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){p=!1;break a}}catch(H){f(H)}if(!(m=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(m=t.$$nextSibling);)t=t.$parent}while(t=
m);if((p||v.length)&&!y--)throw r.$$phase=null,a("infdig",b,B);}while(p||v.length);for(r.$$phase=null;q.length;)try{q.shift()()}catch(E){f(E)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||v.length||h.defer(function(){v.length&&r.$digest()});v.push({scope:this,
expression:a,locals:b})},$$postDigest:function(a){q.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);y()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);
-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Va([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){f(n)}else d.splice(k,1),k--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,
targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Va([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,v=r.$$asyncQueue=[],q=r.$$postDigestQueue=
[],t=r.$$applyAsyncQueue=[];return r}]}function Ud(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return A(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return A(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=za(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Ff(b){if("self"===b)return b;if(J(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=jd(b).replace("\\*\\*",
".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(gb(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function kd(b){var a=[];A(b)&&p(b,function(b){a.push(Ff(b))});return a}function Ve(){this.SCE_CONTEXTS=ka;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=kd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=kd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Wc(b):!!a.exec(b.href)}function e(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",
a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ka.RESOURCE_URL){var g=za(e.toString()),m,s,u=!1;m=0;for(s=b.length;m<s;m++)if(d(b[m],g)){u=!0;break}if(u)for(m=0,s=a.length;m<s;m++)if(d(a[m],g)){u=!1;break}if(u)return e;throw Ba("insecurl",e.toString());}if(c===ka.HTML)return f(e);throw Ba("unsafe");
},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Ue(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>bb)throw Ba("iequirks");var d=da(ka);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,
a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;p(ka,function(a,b){var c=L(b);d[ab("parse_as_"+c)]=function(b){return e(a,b)};d[ab("get_trusted_"+c)]=function(b){return f(a,b)};d[ab("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function We(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(L((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var m in l)if(k=
h.exec(m)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=J(l.webkitTransition),n=J(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=bb)return!1;if(E(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function Ye(){this.$get=
["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;D(g)?g=g.filter(function(a){return a!==Ub}):g===Ub&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){b.put(e,a.data);return a.data},function(a){if(!f)throw ja("tpload",e,a.status,a.statusText);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Ze(){this.$get=["$rootScope","$browser",
"$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var d=ba.element(a).data("$binding");d&&p(d,function(d){c?(new RegExp("(^|\\s)"+jd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},
setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function $e(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){I(f)||(k=l,l=f,f=w);var n=A(k)&&!k,m=(n?d:c).defer(),s=m.promise;l=a.defer(function(){try{m.resolve(f())}catch(a){m.reject(a),e(a)}finally{delete g[s.$$timeoutId]}n||b.$apply()},l);s.$$timeoutId=l;g[l]=m;return s}var g={};f.cancel=function(b){return b&&b.$$timeoutId in
g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b){bb&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Wc(b){b=J(b)?za(b):b;return b.protocol===
ld.protocol&&b.host===ld.host}function af(){this.$get=ra(O)}function Bc(b){function a(c,d){if(F(c)){var e={};p(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",md);a("date",nd);a("filter",Gf);a("json",Hf);a("limitTo",If);a("lowercase",Jf);a("number",od);a("orderBy",pd);a("uppercase",Kf)}function Gf(){return function(b,a,c){if(!D(b)){if(null==b)return b;throw Q("filter")("notarray",
b);}var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Lf(a,c,d);break;default:return b}return b.filter(a)}}function Lf(b,a,c){var d=F(b)&&"$"in b;!0===a?a=la:I(a)||(a=function(a,b){if(F(a)||F(b))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!F(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=typeof b,g=typeof a;if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(D(b))return b.some(function(b){return Ha(b,
a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!I(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function md(b){var a=b.NUMBER_FORMATS;return function(b,d,e){E(d)&&(d=a.CURRENCY_SYM);E(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:qd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function od(b){var a=
b.NUMBER_FORMATS;return function(b,d){return null==b?b:qd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function qd(b,a,c,d,e){if(F(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,n=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var m=h.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(rd)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=
+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(rd),h=g[0],g=g[1]||"",m=0,s=a.lgSize,u=a.gSize;if(h.length>=s+u)for(m=h.length-s,k=0;k<m;k++)0===(m-k)%u&&0!==k&&(l+=c),l+=h.charAt(k);for(k=m;k<h.length;k++)0===(h.length-k)%s&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Db(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=
b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Db(e,a,d)}}function Eb(b,a){return function(c,d){var e=c["get"+b](),f=mb(a?"SHORT"+b:b);return d[f][e]}}function sd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function td(b){return function(a){var c=sd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Db(a,b)}}
function nd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||
"mediumDate";e=b.DATETIME_FORMATS[e]||e;J(c)&&(c=Mf.test(c)?aa(c):a(c));S(c)&&(c=new Date(c));if(!sa(c)||!isFinite(c.getTime()))return c;for(;e;)(k=Nf.exec(e))?(h=Va(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();f&&(e=Date.parse("Jan 01, 1970 00:00:00 "+f)/6E4,isNaN(e)||(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+n-e),n=e));p(h,function(a){l=Of[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Hf(){return function(b,a){E(a)&&
(a=2);return Xa(b,a)}}function If(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):aa(a);if(isNaN(a))return b;S(b)&&(b=b.toString());if(!D(b)&&!J(b))return b;c=!c||isNaN(c)?0:aa(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function pd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Pa(a))return a;c=D(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||Ra;if(J(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===
a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Wa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){I(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ra(b)}function ud(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Fb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);
f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){p(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){p(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];p(f.$pending,function(b,c){f.$setValidity(c,
null,a)});p(f.$error,function(b,c){f.$setValidity(c,null,a)});p(f.$$success,function(b,c){f.$setValidity(c,null,a)});Ua(g,a)};vd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Ua(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,Gb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Oa,Gb+" ng-submitted");f.$dirty=!1;f.$pristine=
!0;f.$submitted=!1;p(g,function(a){a.$setPristine()})};f.$setUntouched=function(){p(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function dc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function cb(b,a,c,d,e,f){var g=L(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=
a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=V(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}
function Hb(b,a){return function(c,d){var e,f;if(sa(c))return c;if(J(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Pf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},p(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,
1E3*f.sss||0)}return NaN}}function db(b,a,c,d){return function(e,f,g,h,l,k,n){function m(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return A(a)?sa(a)?a:c(a):t}wd(e,f,g,h);cb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,p;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,p),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!sa(a))throw Ib("datefmt",a);if(m(a)){if((p=a)&&"UTC"===
u){var b=6E4*p.getTimezoneOffset();p=new Date(p.getTime()+b)}return n("date")(a,d,u)}p=null;return""});if(A(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!m(a)||E(r)||c(a)>=r};g.$observe("min",function(a){r=s(a);h.$validate()})}if(A(g.max)||g.ngMax){var v;h.$validators.max=function(a){return!m(a)||E(v)||c(a)<=v};g.$observe("max",function(a){v=s(a);h.$validate()})}}}function wd(b,a,c,d){(d.$$hasNativeValidators=F(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};
return c.badInput&&!c.typeMismatch?t:b})}function xd(b,a,c,d,e){if(A(d)){b=b(d);if(!b.constant)throw Q("ngModel")("constexpr",c,d);return b(a)}return e}function ec(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(D(a))return a.join(" ").split(" ");if(J(a))return a.split(" ");if(F(a)){var b=[];p(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}return a}
return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];p(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var u=l(k,1);h.$addClass(u)}else if(!la(b,n)){var p=e(n),u=d(k,p),k=d(p,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}n=da(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});
"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function vd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+rc(b,"-"):"";a(eb+b,!0===c);a(yd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[yd]=!(f[eb]=e.hasClass(eb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending=
{}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),zd(d.$pending)&&(d.$pending=t));Ta(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Ad,!0),d.$valid=d.$invalid=t,c("",null)):(a(Ad,!1),d.$valid=zd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function zd(b){if(b)for(var a in b)return!1;return!0}var Qf=/^\/(.+)\/([a-z]*)$/,
L=function(b){return J(b)?b.toLowerCase():b},oc=Object.prototype.hasOwnProperty,mb=function(b){return J(b)?b.toUpperCase():b},bb,H,ma,Wa=[].slice,sf=[].splice,Rf=[].push,ta=Object.prototype.toString,Ca=Q("ng"),ba=O.angular||(O.angular={}),$a,fb=0;bb=W.documentMode;w.$inject=[];Ra.$inject=[];var D=Array.isArray,jc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,V=function(b){return J(b)?b.trim():b},jd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Za=function(){if(A(Za.isActive_))return Za.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},jb=function(){if(A(jb.name_))return jb.name_;var b,a,c=Ja.length;for(a=0;a<c&&!(b=W.querySelector("["+Ja[a].replace(":","\\:")+"jq]"));++a);var d;b&&(d=pc(b,"jq"));return jb.name_=d},Ja=["ng-","data-ng-","ng:","x-ng-"],Od=/[A-Z]/g,sc=!1,Mb,qa=1,hb=3,Sd={full:"1.4.0-beta.5",major:1,
minor:4,dot:0,codeName:"karmic-stabilization"};P.expando="ng339";var rb=P.cache={},kf=1;P._data=function(b){return this.cache[b[this.expando]]||{}};var ef=/([\:\-\_]+(.))/g,ff=/^moz([A-Z])/,Sf={mouseleave:"mouseout",mouseenter:"mouseover"},Pb=Q("jqLite"),jf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ob=/<|&#?\w+;/,gf=/<([\w:]+)/,hf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=ea.td;var Ka=P.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),P(O).on("load",a))},toString:function(){var b=[];p(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?H(this[b]):H(this[this.length+b])},length:0,push:Rf,sort:[].sort,splice:[].splice},wb={};p("multiple selected checked disabled readOnly required open".split(" "),function(b){wb[L(b)]=b});var Jc={};p("input select option textarea button form details".split(" "),function(b){Jc[b]=!0});var Kc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};p({data:Rb,removeData:pb},function(b,a){P[a]=b});p({data:Rb,inheritedData:vb,scope:function(b){return H.data(b,"$scope")||
vb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return H.data(b,"$isolateScope")||H.data(b,"$isolateScopeNoTemplate")},controller:Gc,injector:function(b){return vb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:sb,css:function(b,a,c){a=ab(a);if(A(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=L(a);if(wb[d])if(A(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?
d:t;else if(A(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(A(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(E(b)){var d=a.nodeType;return d===qa||d===hb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(E(a)){if(b.multiple&&"select"===ua(b)){var c=[];p(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;
ob(b,!0);b.innerHTML=a},empty:Hc},function(b,a){P.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Hc&&(2==b.length&&b!==sb&&b!==Gc?a:d)===t){if(F(a)){for(e=0;e<g;e++)if(b===Rb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});p({removeData:pb,on:function a(c,d,e,f){if(A(f))throw Pb("onargs");if(Cc(c)){var g=qb(c,!0);f=g.events;var h=g.handle;h||(h=
g.handle=nf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Sf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Fc,one:function(a,c,d){a=H(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;ob(a);p(new P(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,
a);d=c})},children:function(a){var c=[];p(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new P(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;p(new P(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=H(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},
remove:Sb,detach:function(a){Sb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new P(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:ub,removeClass:tb,toggleClass:function(a,c,d){c&&p(c.split(" "),function(c){var f=d;E(f)&&(f=!sb(a,c));(f?ub:tb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Qb,
triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=qb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:g,target:a},c.type&&(e=R(e,c)),c=da(h),f=d?[e].concat(d):[e],p(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,
f)})}},function(a,c){P.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)E(g)?(g=a(this[h],c,e,f),A(g)&&(g=H(g))):Ec(g,a(this[h],c,e,f));return A(g)?g:this};P.prototype.bind=P.prototype.on;P.prototype.unbind=P.prototype.off});xb.prototype={put:function(a,c){this[Ea(a,this.nextUid)]=c},get:function(a){return this[Ea(a,this.nextUid)]},remove:function(a){var c=this[a=Ea(a,this.nextUid)];delete this[a];return c}};var Mc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Tf=/,/,Uf=/^\s*(_?)(\S+?)\1\s*$/,
Lc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=Q("$injector");Ya.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw J(d)&&d||(d=a.name||of(a)),Fa("strictdi",d);c=a.toString().replace(Lc,"");c=c.match(Mc);p(c[1].split(Tf),function(a){a.replace(Uf,function(a,c,d){e.push(d)})})}a.$inject=e}}else D(a)?(c=a.length-1,kb(a[c],"fn"),e=a.slice(0,c)):kb(a,"fn",!0);return e};var Vf=Q("$animate"),Ee=["$provide",function(a){this.$$selectors={};this.register=function(c,
d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Vf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=na();
p((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});p(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ba.isObject(c)){var d=R(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,
e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=H(a);c=J(c)?c:D(c)?c.join(" "):"";p(a,function(a){ub(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=H(a);c=J(c)?c:D(c)?c.join(" "):"";p(a,function(a){tb(a,c)});k(a,d);return l()},setClass:function(a,
c,d,e){var k=this,l=!1;a=H(a);var n=a.data("$$animateClasses");n?e&&n.options&&(n.options=ba.extend(n.options||{},e)):(n={classes:{},options:e},l=!0);e=n.classes;c=D(c)?c:c.split(" ");d=D(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(n.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",n));return n.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,
c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:w,cancel:w}}]}],ja=Q("$compile");uc.$inject=["$provide","$$sanitizeUriProvider"];var Pc=/^((?:x|data)[\:\-_])/i,tf=Q("$controller"),Oc=/^(\S+)(\s+as\s+(\w+))?$/,Sc="application/json",Vb={"Content-Type":Sc+";charset=utf-8"},vf=/^\[|^\{(?!\{)/,wf={"[":/]$/,"{":/}$/},uf=/^\)\]\}',?\n/,Wb=Q("$interpolate"),Wf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,zf={http:80,https:443,ftp:21},zb=Q("$location"),Xf={$$html5:!1,$$replace:!1,absUrl:Ab("$$absUrl"),
url:function(a){if(E(a))return this.$$url;var c=Wf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ab("$$protocol"),host:Ab("$$host"),port:Ab("$$port"),path:$c("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(J(a)||S(a))a=a.toString(),this.$$search=nc(a);else if(F(a))a=va(a,{}),p(a,function(c,
e){null==c&&delete a[e]}),this.$$search=a;else throw zb("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:$c("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};p([Zc,$b,Zb],function(a){a.prototype=Object.create(Xf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==Zb||!this.$$html5)throw zb("nostate");this.$$state=E(c)?null:c;return this}});var ca=
Q("$parse"),Af=Function.prototype.call,Bf=Function.prototype.apply,Cf=Function.prototype.bind,Jb=na();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Jb[a]=!0});var Yf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},bc=function(a){this.options=a};bc.prototype={constructor:bc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Jb[c],f=Jb[d];Jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+
a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=A(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ca("lexerr",a,c,this.text);
},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=
this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=
4,d+=String.fromCharCode(parseInt(f,16))):d+=Yf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var r=function(a,c){this.lexer=a;this.options=c};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";
r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:r.AssignmentExpression,
left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,
operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:r.BinaryExpression,operator:c.text,
left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():
this.constants.hasOwnProperty(this.peek().text)?a=va(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:r.MemberExpression,
object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,
name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:r.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():
this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,c){throw ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",
this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:r.Literal,value:!0},"false":{type:r.Literal,value:!1},"null":{type:r.Literal,value:null},undefined:{type:r.Literal,value:t},"this":{type:r.ThisExpression}}};
gd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=ed(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=cd(e.body);d.stage="inputs";p(g,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();
d.recurse(a,f);d.return(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Aa,ia,ad,Df,bd,a);this.state=this.stage=t;f.literal=fd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",
watchFns:function(){var a=[],c=this.state.inputs,d=this;p(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;p(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+
this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,m;e=e||w;if(!g&&A(a.watchId))c=c||this.nextId(),this.if("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case r.Program:p(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return(l)});break;case r.Literal:m=this.escape(a.value);this.assign(c,
m);e(m);break;case r.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});m=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,m);e(m);break;case r.BinaryExpression:this.recurse(a.left,t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});m="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,m);e(m);break;case r.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if("&&"===a.operator?
c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case r.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case r.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Aa(a.name);k.if("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if("inputs"===k.stage||"s",function(){f&&1!==f&&
k.if(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Cb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case r.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if(k.notNull(h),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),
f&&1!==f&&k.if(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),m=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,m),d&&(d.computed=!0,d.name=l);else{Aa(a.property.name);f&&1!==f&&k.if(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));m=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Cb(a.property.name))m=k.ensureSafeObject(m);k.assign(c,m);d&&(d.computed=!1,d.name=a.property.name)}e(c)})},!!f);break;
case r.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],p(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),m=l+"("+n.join(",")+")",k.assign(c,m),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if(k.notNull(l),function(){k.addEnsureSafeFunction(l);p(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),m=k.member(h.context,h.name,
h.computed)+"("+n.join(",")+")"):m=l+"("+n.join(",")+")";m=k.ensureSafeObject(m);k.assign(c,m);e(c)})}));break;case r.AssignmentExpression:l=this.nextId();h={};if(!dd(a.left))throw ca("lval");this.recurse(a.left,t,h,function(){k.if(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));m=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,m);e(c||m)})},1);break;case r.ArrayExpression:n=[];p(a.elements,function(a){k.recurse(a,k.nextId(),
t,function(a){n.push(a)})});m="["+n.join(",")+"]";this.assign(c,m);e(m);break;case r.ObjectExpression:n=[];p(a.properties,function(a){k.recurse(a.value,k.nextId(),t,function(c){n.push(k.escape(a.key.type===r.Identifier?a.key.name:""+a.key.value)+":"+c)})});m="{"+n.join(",")+"}";this.assign(c,m);e(m);break;case r.ThisExpression:this.assign(c,"s");e("s");break;case r.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||
(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},"return":function(a){this.current().body.push("return ",a,";")},"if":function(a,c,d){if(!0===a)c();else{var e=this.current().body;
e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(J(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(S(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
hd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=ed(e))g=this.recurse(f);f=cd(e.body);var h;f&&(h=[],p(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];p(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;p(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
h);f.literal=fd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,c);case r.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case r.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case r.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case r.Identifier:return Aa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Cb(a.name),c,d,g.expression);case r.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Aa(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
g.expensiveChecks,c,d,g.expression);case r.CallExpression:return h=[],p(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var s=[],p=0;p<h.length;++p)s.push(h[p](a,d,e,g));a=f.apply(t,s,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,m){var s=f(a,d,e,m),p;if(null!=s.value){ia(s.context,g.expression);ad(s.value,g.expression);p=[];for(var r=0;r<h.length;++r)p.push(ia(h[r](a,d,e,m),
g.expression));p=ia(s.value.apply(s.context,p),g.expression)}return c?{value:p}:p};case r.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,m){var s=e(a,d,h,m);a=f(a,d,h,m);ia(s.value,g.expression);s.context[s.name]=a;return c?{value:a}:a};case r.ArrayExpression:return h=[],p(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],p=0;p<h.length;++p)g.push(h[p](a,d,e,f));return c?{value:g}:g};case r.ObjectExpression:return h=[],p(a.properties,
function(a){h.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},p=0;p<h.length;++p)g[h[p].key]=h[p].value(a,d,e,f);return c?{value:g}:g};case r.ThisExpression:return function(a){return c?{value:a}:a};case r.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=A(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);
d=A(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=bd(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(A(l)?l:0)-(A(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=
a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&ia(h,f);return d?{context:g,name:a,value:h}:h}},
computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),m,p;null!=n&&(m=c(g,h,l,k),Aa(m,f),e&&1!==e&&n&&!n[m]&&(n[m]={}),p=n[m],ia(p,f));return d?{context:n,name:m,value:p}:p}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:t;(d||Cb(c))&&ia(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var cc=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d;this.ast=new r(this.lexer);this.astCompiler=d.csp?new hd(this.ast,c):new gd(this.ast,c)};cc.prototype={constructor:cc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};na();na();var Ef=Object.prototype.valueOf,Ba=Q("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=Q("$compile"),Z=W.createElement("a"),ld=za(O.location.href);Bc.$inject=["$provide"];md.$inject=["$locale"];od.$inject=["$locale"];var rd=".",Of={yyyy:$("FullYear",
4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Eb("Month"),MMM:Eb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Eb("Day"),EEE:Eb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Db(Math[0<a?"floor":"ceil"](a/60),2)+Db(Math.abs(a%
60),2))},ww:td(2),w:td(1)},Nf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Mf=/^\-?\d+$/;nd.$inject=["$locale"];var Jf=ra(L),Kf=ra(mb);pd.$inject=["$parse"];var Vd=ra({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===ta.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),nb={};p(wb,function(a,c){function d(a,
d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=xa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});nb[e]=function(){return{restrict:"A",priority:100,link:f}}}});p(Kc,function(a,c){nb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Qf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});p(["src","srcset","href"],function(a){var c=
xa("ng-"+a);nb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===ta.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),bb&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Fb={$addControl:w,$$renameControl:function(a,c){a.$name=c},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};ud.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Bd=
function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:ud,compile:function(a){a.addClass(Oa).addClass(eb);return{pre:function(a,d,g,h){if(!("action"in g)){var l=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,n=h.$name;n&&(Bb(a,n,h,n),g.$observe(g.name?"name":"ngForm",function(c){n!==
c&&(Bb(a,n,t,n),n=c,Bb(a,n,h,n),k.$$renameControl(h,n))}));d.on("$destroy",function(){k.$removeControl(h);n&&Bb(a,n,t,n);R(h,Fb)})}}}}}]},Wd=Bd(),ie=Bd(!0),Pf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Zf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,$f=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ag=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Cd=/^(\d{4})-(\d{2})-(\d{2})$/,Dd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
fc=/^(\d{4})-W(\d\d)$/,Ed=/^(\d{4})-(\d\d)$/,Fd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Gd={text:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);dc(e)},date:db("date",Cd,Hb(Cd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":db("datetimelocal",Dd,Hb(Dd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:db("time",Fd,Hb(Fd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:db("week",fc,function(a,c){if(sa(a))return a;if(J(a)){fc.lastIndex=0;var d=fc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=
0,l=0,k=sd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:db("month",Ed,Hb(Ed,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){wd(a,c,d,e);cb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ag.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!S(a))throw Ib("numfmt",a);a=a.toString()}return a});if(A(d.min)||
d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||E(h)||a>=h};d.$observe("min",function(a){A(a)&&!S(a)&&(a=parseFloat(a,10));h=S(a)&&!isNaN(a)?a:t;e.$validate()})}if(A(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||E(l)||a<=l};d.$observe("max",function(a){A(a)&&!S(a)&&(a=parseFloat(a,10));l=S(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);dc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||
Zf.test(d)}},email:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);dc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},radio:function(a,c,d,e){E(d.name)&&c.attr("name",++fb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=xd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=xd(l,a,"ngFalseValue",d.ngFalseValue,
!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return la(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:w,button:w,submit:w,reset:w,file:w},vc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Gd[L(h.type)]||Gd.text)(f,g,h,l[0],c,a,d,e)}}}}],bg=/^(true|false|\d+)$/,
Ae=function(){return{restrict:"A",priority:100,compile:function(a,c){return bg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ae=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ce=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);
return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],be=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],ze=ra({restrict:"A",
require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),de=ec("",!0),fe=ec("Odd",0),ee=ec("Even",1),ge=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),he=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ac={},cg={blur:!0,focus:!0};p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=
xa("ng-"+a);Ac[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};cg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ke=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=lb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],le=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ba.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,p,r,t){var w=0,v,q,B,z=function(){q&&(q.remove(),q=null);v&&(v.$destroy(),
v=null);B&&(d.leave(B).then(function(){q=null}),q=B,B=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!A(k)||k&&!f.$eval(k)||c()},p=++w;e?(a(e,!0).then(function(a){if(p===w){var c=f.$new();r.template=a;a=t(c,function(a){z();d.enter(a,null,g).then(h)});v=c;B=a;v.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){p===w&&(z(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(z(),r.template=null)})}}}}],Ce=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Dc(f.template,W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],me=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ye=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?V(f):f;e.$parsers.push(function(a){if(!E(a)){var c=
[];a&&p(a.split(h),function(a){a&&c.push(g?V(a):a)});return c}});e.$formatters.push(function(a){return D(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},eb="ng-valid",yd="ng-invalid",Oa="ng-pristine",Gb="ng-dirty",Ad="ng-pending",Ib=new Q("ngModel"),dg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators=
{};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var m=f(d.ngModel),s=m.assign,r=m,y=s,N=null,v,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");r=function(a){var d=m(a);I(d)&&(d=c(a));return d};y=function(a,c){I(m(a))?g(a,{$$$p:q.$modelValue}):
s(a,q.$modelValue)}}else if(!m.assign)throw Ib("nonassign",d.ngModel,wa(e));};this.$render=w;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var B=e.inheritedData("$formController")||Fb,z=0;vd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:B,$animate:g});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;g.removeClass(e,Gb);g.addClass(e,Oa)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;g.removeClass(e,Oa);g.addClass(e,Gb);
B.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!S(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,c=q.$valid,d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,
function(f){e||c===f||(q.$modelValue=f?a:t,q.$modelValue!==d&&q.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;p(q.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(p(q.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;p(q.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!I(k.then))throw Ib("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},
w):h(!0)}function g(a,c){l===z&&q.$setValidity(a,c)}function h(a){l===z&&d(a)}z++;var l=z;(function(){var a=q.$$parserName||"parse";if(v===t)g(a,null);else return v||(p(q.$validators,function(a,c){g(c,null)}),p(q.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=q.$viewValue;h.cancel(N);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};
this.$$parseAndValidate=function(){var c=q.$$lastCommittedViewValue;if(v=E(c)?t:!0)for(var d=0;d<q.$parsers.length;d++)if(c=q.$parsers[d](c),E(c)){v=!1;break}S(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=r(a));var e=q.$modelValue,f=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=c;f&&(q.$modelValue=c,q.$modelValue!==e&&q.$$writeModelToScope());q.$$runValidators(c,q.$$lastCommittedViewValue,function(a){f||(q.$modelValue=a?c:t,q.$modelValue!==e&&q.$$writeModelToScope())})};this.$$writeModelToScope=
function(){y(a,q.$modelValue);p(q.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=q.$options;e&&A(e.debounce)&&(e=e.debounce,S(e)?d=e:S(e[c])?d=e[c]:S(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){q.$commitViewValue()},d):l.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var c=
r(a);if(c!==q.$modelValue){q.$modelValue=q.$$rawModelValue=c;v=t;for(var d=q.$formatters,e=d.length,f=c;e--;)f=d[e](f);q.$viewValue!==f&&(q.$viewValue=q.$$lastCommittedViewValue=f,q.$render(),q.$$runValidators(c,f,w))}return c})}],xe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:dg,priority:1,compile:function(c){c.addClass(Oa).addClass("ng-untouched").addClass(eb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Fb;h.$$setOptions(g[2]&&g[2].$options);
l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],eg=/(\s+|^)default(\s+|$)/,Be=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=
this;this.$options=va(a.$eval(c.ngModelOptions));this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(eg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},ne=Ia({terminal:!0,priority:1E3}),fg=Q("ngOptions"),gg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
ve=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}var n=a.match(gg);if(!n)throw fg("iexp",a,wa(d));var m=n[5]||n[7],p=n[6];a=/ as /.test(n[0])&&n[1];d=n[9];var r=c(n[2]?n[1]:m),t=a&&c(a)||r,w=d&&c(d),v=d?function(a,c){return w(e,c)}:function(a){return Ea(a)},q=c(n[2]||n[1]),B=c(n[3]||""),z=c(n[4]||""),x=c(n[8]),G={},M=p?function(a,c){G[p]=c;G[m]=a;return G}:function(a){G[m]=a;return G};return{getWatchables:c(x,
function(a){var c=[];a=a||[];Object.keys(a).forEach(function(d){var f=M(a[d],d);d=v(a[d],f);c.push(d);n[2]&&(d=q(e,f),c.push(d));n[4]&&(f=z(e,f),c.push(f))});return c}),getOptions:function(){var a=[],c={},d=x(e)||[];Object.keys(d).forEach(function(g){if("$"!==g.charAt(0)){var h=M(d[g],g),m=t(e,h);g=v(m,h);var n=q(e,h),p=B(e,h),h=z(e,h),m=new f(g,m,n,p,h);a.push(m);c[g]=m}});return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[v(a,M(a))]}}}}}var e=W.createElement("option"),f=
W.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function m(a,c,d,e){c&&L(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function s(a){for(var c;a;)c=a.nextSibling,Sb(a),a=c}function r(a){var c=q&&q[0],d=z&&z[0];if(c||d)for(;a&&(a===c||a===d);)a=
a.nextSibling;return a}function t(){var a=x&&v.readValue();x=G.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(q);d=r(d);x.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=m(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=m(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement=k.nextSibling):(k=m(h[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){s(c[a].currentOptionElement)});
s(d);w.$render();if(!w.$isEmpty(a)){var g=v.readValue();la(a,g)||w.$setViewValue(g)}}var w=k[1];if(w){var v=k[0];k=l.multiple;var q=v.emptyOption,B=!!q,z=H(e.cloneNode(!1));z.val("?");var x,G=d(l.ngOptions,h,c);v.writeValue=function(a){var c=x.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(z.remove(),B||q.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||B?(z.remove(),B||h.prepend(q),h.val(""),q.prop("selected",
!0),q.attr("selected",!0)):(B||q.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0))};v.readValue=function(){var a=x.selectValueMap[h.val()];return a&&!a.disabled?(B||q.remove(),z.remove(),a.viewValue):null};k&&(w.$isEmpty=function(a){return!a||0===a.length},v.writeValue=function(a){x.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=x.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},v.readValue=function(){var a=h.val()||[],
c=[];p(a,function(a){a=x.selectValueMap[a];a.disabled||c.push(a.viewValue)});return c});B?(q.remove(),a(q)(c),q.removeClass("ng-scope")):q=H(e.cloneNode(!1));t();c.$watchCollection(G.getWatchables,t)}}}}],oe=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(g,h,l){function k(a){h.text(a||"")}var n=l.count,m=l.$attr.when&&h.attr(l.$attr.when),s=l.offset||0,r=g.$eval(m)||{},t={},A=c.startSymbol(),v=c.endSymbol(),q=A+n+"-"+s+v,B=ba.noop,
z;p(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+L(d[2]),r[d]=h.attr(l.$attr[c]))});p(r,function(a,d){t[d]=c(a.replace(e,q))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in r||(e=a.pluralCat(e-s));e===z||f&&S(z)&&isNaN(z)||(B(),f=t[e],E(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+m),B=w,k()):B=g.$watch(f,k),z=e)})}}}],pe=["$parse","$animate",function(a,c){var d=Q("ngRepeat"),e=function(a,c,d,e,k,n,m){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=
c===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],m=k[2],s=k[3],r=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var w=
k[3]||k[1],A=k[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw d("badident",s);var v,q,B,z,x={$id:Ea};r?v=a(r):(B=function(a,c){return Ea(c)},z=function(a){return a});return function(a,f,g,k,n){v&&(q=function(c,d,e){A&&(x[A]=c);x[w]=d;x.$index=e;return v(a,x)});var r=na();a.$watchCollection(m,function(g){var k,m,u=f[0],v,x=na(),C,E,I,F,J,D,L;s&&(a[s]=g);if(Pa(g))J=g,m=q||B;else for(L in m=q||
z,J=[],g)g.hasOwnProperty(L)&&"$"!==L.charAt(0)&&J.push(L);C=J.length;L=Array(C);for(k=0;k<C;k++)if(E=g===J?k:J[k],I=g[E],F=m(E,I,k),r[F])D=r[F],delete r[F],x[F]=D,L[k]=D;else{if(x[F])throw p(L,function(a){a&&a.scope&&(r[a.id]=a)}),d("dupes",h,F,I);L[k]={id:F,scope:t,clone:t};x[F]=!0}for(v in r){D=r[v];F=lb(D.clone);c.leave(F);if(F[0].parentNode)for(k=0,m=F.length;k<m;k++)F[k].$$NG_REMOVED=!0;D.scope.$destroy()}for(k=0;k<C;k++)if(E=g===J?k:J[k],I=g[E],D=L[k],D.scope){v=u;do v=v.nextSibling;while(v&&
v.$$NG_REMOVED);D.clone[0]!=v&&c.move(lb(D.clone),null,H(u));u=D.clone[D.clone.length-1];e(D.scope,k,w,I,A,E,C)}else n(function(a,d){D.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,H(u));u=f;D.clone=a;x[D.id]=D;e(D.scope,k,w,I,A,E,C)});r=x})}}}}],qe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],je=["$animate",function(a){return{restrict:"A",
multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],re=Ia(function(a,c,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),se=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,
e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=lb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&p(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],te=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=
e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),ue=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),we=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw Q("ngTransclude")("orphan",wa(c));f(function(a){c.empty();c.append(a)})}}),Xd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==
d.type&&a.put(d.id,c[0].text)}}}],hg={$setViewValue:w,$render:w},ig=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new xb;e.ngModelCtrl=hg;e.unknownOption=H(W.createElement("option"));e.renderUnknownOption=function(c){c="? "+Ea(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=w});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};c=0;d=a.children();for(var g=d.length;c<g;c++)if(""===
d[c].value){e.emptyOption=d.eq(c);break}e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):E(c)&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a){La(a,'"option value"');var c=f.get(a)||0;f.put(a,c+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?f.remove(a):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],
Yd=function(){var a;return{restrict:"E",require:["select","?ngModel"],controller:ig,link:function(c,d,e,f){var g=f[1];if(g){var h=f[0];h.ngModelCtrl=g;g.$render=function(){h.writeValue(g.$viewValue)};d.on("change",function(){c.$apply(function(){g.$setViewValue(h.readValue())})});e.multiple&&(h.readValue=function(){var a=[];p(d.find("option"),function(c){c.selected&&a.push(c.value)});return a},h.writeValue=function(a){var c=new xb(a);p(d.find("option"),function(a){a.selected=A(c.get(a.value))})},c.$watch(function(){la(a,
g.$viewValue)||(a=da(g.$viewValue),g.$render())}),g.$isEmpty=function(a){return!a||0===a.length})}}}},$d=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&n.removeOption(f);
n.addOption(a,d);n.ngModelCtrl.$render();c(d)}):(n.addOption(e.value,d),n.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){n.removeOption(e.value);n.ngModelCtrl.$render()}))}}}}],Zd=ra({restrict:"E",terminal:!1}),xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},wc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){J(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw Q("ngPattern")("noregexp",g,a,wa(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||E(f)||f.test(a)}}}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||
c.length<=f}}}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Pd(),Rd(ba),H(W).ready(function(){Ld(W,qc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
@fileOverview

@toc

*/

'use strict';

angular.module('oitozero.ngSweetAlert', [])
.factory('SweetAlert', [ function ( ) {

	var swal = window.swal;

	//public methods
	var self = {

		swal: function ( arg1, arg2, arg3 ) {
			swal( arg1, arg2, arg3 );
		},
		success: function(title, message) {
			swal( title, message, 'success' );
		},
		error: function(title, message) {
			swal( title, message, 'error' );
		},
		warning: function(title, message) {
			swal( title, message, 'warning' );
		},
		info: function(title, message) {	
			swal( title, message, 'info' );
		}
	};
	
	return self;
}]);


/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(M,f,S){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(T,B,k){k=k.ngAnimateChildren;f.isString(k)&&0===k.length?B.data("$$ngAnimateChildren",!0):T.$watch(k,function(f){B.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,B){return function(k){return f(function(){k()})}}]).config(["$provide","$animateProvider",function(T,B){function k(f){for(var g=0;g<f.length;g++){var k=f[g];if(1==k.nodeType)return k}}
    function N(f,g){return k(f)==k(g)}var s=f.noop,g=f.forEach,ba=B.$$selectors,$=f.isArray,ca=f.isString,da=f.isObject,t={running:!0};T.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest",function(O,M,I,U,x,C,P,S,V){function A(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function z(a){var c,b=M.defer();b.promise.$$cancelFn=
        function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function J(a){if(da(a))return a.tempClasses&&ca(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function W(a,c,b){b=b||{};var e={};g(b,function(a,d){g(d.split(" "),function(d){e[d]=a})});var m=Object.create(null);g((a.attr("class")||"").split(/\s+/),function(a){m[a]=!0});var f=[],k=[];g(c.classes,function(a,d){var b=m[d],c=e[d]||{};!1===a?(b||"addClass"==c.event)&&k.push(d):!0===a&&(b&&"removeClass"!=
        c.event||f.push(d))});return 0<f.length+k.length&&[f.join(" "),k.join(" ")]}function Q(a){if(a){var c=[],b={};a=a.substr(1).split(".");(U.transitions||U.animations)&&c.push(I.get(ba[""]));for(var e=0;e<a.length;e++){var f=a[e],k=ba[f];k&&!b[f]&&(c.push(I.get(k)),b[f]=!0)}return c}}function R(a,c,b,e){function m(a,d){var b=a[d],c=a["before"+d.charAt(0).toUpperCase()+d.substr(1)];if(b||c)return"leave"==d&&(c=b,b=null),l.push({event:d,fn:b}),H.push({event:d,fn:c}),!0}function k(c,h,G){var w=[];g(c,function(a){a.fn&&
    w.push(a)});var f=0;g(w,function(c,n){var u=function(){a:{if(h){(h[n]||s)();if(++f<w.length)break a;h=null}G()}};switch(c.event){case "setClass":h.push(c.fn(a,F,d,u,e));break;case "animate":h.push(c.fn(a,b,e.from,e.to,u));break;case "addClass":h.push(c.fn(a,F||b,u,e));break;case "removeClass":h.push(c.fn(a,d||b,u,e));break;default:h.push(c.fn(a,u,e))}});h&&0===h.length&&G()}var p=a[0];if(p){e&&(e.to=e.to||{},e.from=e.from||{});var F,d;$(b)&&(F=b[0],d=b[1],F?d?b=F+" "+d:(b=F,c="addClass"):(b=d,c="removeClass"));
        var h="setClass"==c,G=h||"addClass"==c||"removeClass"==c||"animate"==c,w=a.attr("class")+" "+b;if(X(w)){var u=s,n=[],H=[],q=s,r=[],l=[],w=(" "+w).replace(/\s+/g,".");g(Q(w),function(a){!m(a,c)&&h&&(m(a,"addClass"),m(a,"removeClass"))});return{node:p,event:c,className:b,isClassBased:G,isSetClassOperation:h,applyStyles:function(){e&&a.css(f.extend(e.from||{},e.to||{}))},before:function(a){u=a;k(H,n,function(){u=s;a()})},after:function(a){q=a;k(l,r,function(){q=s;a()})},cancel:function(){n&&(g(n,function(a){(a||
            s)(!0)}),u(!0));r&&(g(r,function(a){(a||s)(!0)}),q(!0))}}}}}function y(a,c,b,e,m,k,p,F){function d(d){var h="$animate:"+d;H&&H[h]&&0<H[h].length&&C(function(){b.triggerHandler(h,{event:a,className:c})})}function h(){d("before")}function G(){d("after")}function w(){w.hasBeenRun||(w.hasBeenRun=!0,k())}function u(){if(!u.hasBeenRun){n&&n.applyStyles();u.hasBeenRun=!0;p&&p.tempClasses&&g(p.tempClasses,function(a){b.removeClass(a)});var h=b.data("$$ngAnimateState");h&&(n&&n.isClassBased?l(b,c):(C(function(){var d=
        b.data("$$ngAnimateState")||{};v==d.index&&l(b,c,a)}),b.data("$$ngAnimateState",h)));d("close");F()}}var n=R(b,a,c,p);if(!n)return w(),h(),G(),u(),s;a=n.event;c=n.className;var H=f.element._data(n.node),H=H&&H.events;e||(e=m?m.parent():b.parent());if(Y(b,e))return w(),h(),G(),u(),s;e=b.data("$$ngAnimateState")||{};var q=e.active||{},r=e.totalActive||0,t=e.last;m=!1;if(0<r){r=[];if(n.isClassBased)"setClass"==t.event?(r.push(t),l(b,c)):q[c]&&(aa=q[c],aa.event==a?m=!0:(r.push(aa),l(b,c)));else if("leave"==
        a&&q["ng-leave"])m=!0;else{for(var aa in q)r.push(q[aa]);e={};l(b,!0)}0<r.length&&g(r,function(a){a.cancel()})}!n.isClassBased||n.isSetClassOperation||"animate"==a||m||(m="addClass"==a==b.hasClass(c));if(m)return w(),h(),G(),d("close"),F(),s;q=e.active||{};r=e.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var d=a.data("$$ngAnimateState");d&&(d=d.active["ng-leave"])&&(d.cancel(),l(a,"ng-leave"))});b.addClass("ng-animate");p&&p.tempClasses&&g(p.tempClasses,function(a){b.addClass(a)});
        var v=Z++;r++;q[c]=n;b.data("$$ngAnimateState",{last:n,active:q,index:v,totalActive:r});h();n.before(function(d){var h=b.data("$$ngAnimateState");d=d||!h||!h.active[c]||n.isClassBased&&h.active[c].event!=a;w();!0===d?u():(G(),n.after(u))});return n.cancel}function K(a){if(a=k(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),g(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&g(a.active,function(a){a.cancel()})})}
        function l(a,c){if(N(a,x))t.disabled||(t.running=!1,t.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},e=!0===c;!e&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(e||!b.totalActive)a.removeClass("ng-animate"),a.removeData("$$ngAnimateState")}}function Y(a,c){if(t.disabled)return!0;if(N(a,x))return t.running;var b,e,k;do{if(0===c.length)break;var g=N(c,x),p=g?t:c.data("$$ngAnimateState")||{};if(p.disabled)return!0;g&&(k=!0);!1!==b&&(g=c.data("$$ngAnimateChildren"),f.isDefined(g)&&
            (b=g));e=e||p.running||p.last&&!p.last.isClassBased}while(c=c.parent());return!k||!b&&e}x.data("$$ngAnimateState",t);var L=P.$watch(function(){return V.totalPendingRequests},function(a,c){0===a&&(L(),P.$$postDigest(function(){P.$$postDigest(function(){t.running=!1})}))}),Z=0,E=B.classNameFilter(),X=E?function(a){return E.test(a)}:function(){return!0};return{animate:function(a,c,b,e,g){e=e||"ng-inline-animate";g=J(g)||{};g.from=b?c:null;g.to=b?b:c;return z(function(b){return y("animate",e,f.element(k(a)),
            null,null,s,g,b)})},enter:function(a,c,b,e){e=J(e);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);A(a,!0);O.enter(a,c,b);return z(function(g){return y("enter","ng-enter",f.element(k(a)),c,b,s,e,g)})},leave:function(a,c){c=J(c);a=f.element(a);K(a);A(a,!0);return z(function(b){return y("leave","ng-leave",f.element(k(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,e){e=J(e);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);K(a);A(a,!0);O.move(a,c,b);return z(function(g){return y("move",
            "ng-move",f.element(k(a)),c,b,s,e,g)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,e){e=J(e);a=f.element(a);a=f.element(k(a));if(A(a))return O.$$setClassImmediately(a,c,b,e);var m,l=a.data("$$animateClasses"),p=!!l;l||(l={classes:{}});m=l.classes;c=$(c)?c:c.split(" ");g(c,function(a){a&&a.length&&(m[a]=!0)});b=$(b)?b:b.split(" ");g(b,function(a){a&&a.length&&(m[a]=!1)});if(p)return e&&l.options&&(l.options=
            f.extend(l.options||{},e)),l.promise;a.data("$$animateClasses",l={classes:m,options:e});return l.promise=z(function(b){var d=a.parent(),h=k(a),c=h.parentNode;if(!c||c.$$NG_REMOVED||h.$$NG_REMOVED)b();else{h=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},e=W(a,h,c.active);return e?y("setClass",e,a,d,null,function(){e[0]&&O.$$addClassImmediately(a,e[0]);e[1]&&O.$$removeClassImmediately(a,e[1])},h.options,b):b()}})},cancel:function(a){a.$$cancelFn()},
            enabled:function(a,c){switch(arguments.length){case 2:if(a)l(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:t.disabled=!a;break;default:a=!t.disabled}return!!a}}}]);B.register("",["$window","$sniffer","$timeout","$$animateReflow",function(t,B,I,U){function x(){e||(e=U(function(){b=[];e=null;a={}}))}function C(c,d){e&&e();b.push(d);e=U(function(){g(b,function(a){a()});b=[];e=null;a={}})}function P(a,d){var h=k(a);a=f.element(h);p.push(a);h=Date.now()+
        d;h<=N||(I.cancel(m),N=h,m=I(function(){T(p);p=[]},d,!1))}function T(a){g(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&g(a.closeAnimationFns,function(a){a()})})}function V(b,d){var h=d?a[d]:null;if(!h){var c=0,e=0,f=0,k=0;g(b,function(a){if(1==a.nodeType){a=t.getComputedStyle(a)||{};c=Math.max(A(a[L+"Duration"]),c);e=Math.max(A(a[L+"Delay"]),e);k=Math.max(A(a[E+"Delay"]),k);var d=A(a[E+"Duration"]);0<d&&(d*=parseInt(a[E+"IterationCount"],10)||1);f=Math.max(d,f)}});h={total:0,transitionDelay:e,
        transitionDuration:c,animationDelay:k,animationDuration:f};d&&(a[d]=h)}return h}function A(a){var d=0;a=ca(a)?a.split(/\s*,\s*/):[];g(a,function(a){d=Math.max(parseFloat(a)||0,d)});return d}function z(b,d,h,e){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(h);var f,g=d.parent(),n=g.data("$$ngAnimateKey");n||(g.data("$$ngAnimateKey",++c),n=c);f=n+"-"+k(d).getAttribute("class");var g=f+" "+h,n=a[g]?++a[g].total:0,l={};if(0<n){var q=h+"-stagger",l=f+" "+q;(f=!a[l])&&d.addClass(q);l=V(d,l);f&&d.removeClass(q)}d.addClass(h);
        var q=d.data("$$ngAnimateCSS3Data")||{},r=V(d,g);f=r.transitionDuration;r=r.animationDuration;if(b&&0===f&&0===r)return d.removeClass(h),!1;h=e||b&&0<f;b=0<r&&0<l.animationDelay&&0===l.animationDuration;d.data("$$ngAnimateCSS3Data",{stagger:l,cacheKey:g,running:q.running||0,itemIndex:n,blockTransition:h,closeAnimationFns:q.closeAnimationFns||[]});g=k(d);h&&(W(g,!0),e&&d.css(e));b&&(g.style[E+"PlayState"]="paused");return!0}function J(a,d,b,c,e){function f(){d.off(C,l);d.removeClass(q);d.removeClass(r);
        z&&I.cancel(z);K(d,b);var a=k(d),c;for(c in p)a.style.removeProperty(p[c])}function l(a){a.stopPropagation();var d=a.originalEvent||a;a=d.$manualTimeStamp||d.timeStamp||Date.now();d=parseFloat(d.elapsedTime.toFixed(3));Math.max(a-B,0)>=A&&d>=x&&c()}var m=k(d);a=d.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var q="",r="";g(b.split(" "),function(a,d){var b=(0<d?" ":"")+a;q+=b+"-active";r+=b+"-pending"});var p=[],t=a.itemIndex,v=a.stagger,s=0;if(0<t){s=0;0<v.transitionDelay&&
        0===v.transitionDuration&&(s=v.transitionDelay*t);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*t,p.push(Y+"animation-play-state"));s=Math.round(100*Math.max(s,y))/100}s||(d.addClass(q),a.blockTransition&&W(m,!1));var D=V(d,a.cacheKey+" "+q),x=Math.max(D.transitionDuration,D.animationDuration);if(0===x)d.removeClass(q),K(d,b),c();else{!s&&e&&(D.transitionDuration||(d.css("transition",D.animationDuration+"s linear all"),p.push("transition")),d.css(e));var t=Math.max(D.transitionDelay,
        D.animationDelay),A=1E3*t;0<p.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var B=Date.now(),C=X+" "+Z,t=1E3*(s+1.5*(t+x)),z;0<s&&(d.addClass(r),z=I(function(){z=null;0<D.transitionDuration&&W(m,!1);0<D.animationDuration&&(m.style[E+"PlayState"]="");d.addClass(q);d.removeClass(r);e&&(0===D.transitionDuration&&d.css("transition",D.animationDuration+"s linear all"),d.css(e),p.push("transition"))},1E3*s,!1));d.on(C,l);a.closeAnimationFns.push(function(){f();
        c()});a.running++;P(d,t);return f}}else c()}function W(a,d){a.style[L+"Property"]=d?"none":""}function Q(a,d,b,c){if(z(a,d,b,c))return function(a){a&&K(d,b)}}function R(a,d,b,c,e){if(d.data("$$ngAnimateCSS3Data"))return J(a,d,b,c,e);K(d,b);c()}function y(a,d,b,c,e){var f=Q(a,d,b,e.from);if(f){var g=f;C(d,function(){g=R(a,d,b,c,e.to)});return function(a){(g||s)(a)}}x();c()}function K(a,d){a.removeClass(d);var b=a.data("$$ngAnimateCSS3Data");b&&(b.running&&b.running--,b.running&&0!==b.running||a.removeData("$$ngAnimateCSS3Data"))}
        function l(a,d){var b="";a=$(a)?a:a.split(/\s+/);g(a,function(a,c){a&&0<a.length&&(b+=(0<c?" ":"")+a+d)});return b}var Y="",L,Z,E,X;M.ontransitionend===S&&M.onwebkittransitionend!==S?(Y="-webkit-",L="WebkitTransition",Z="webkitTransitionEnd transitionend"):(L="transition",Z="transitionend");M.onanimationend===S&&M.onwebkitanimationend!==S?(Y="-webkit-",E="WebkitAnimation",X="webkitAnimationEnd animationend"):(E="animation",X="animationend");var a={},c=0,b=[],e,m=null,N=0,p=[];return{animate:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 d,b,c,e,f){f=f||{};f.from=b;f.to=c;return y("animate",a,d,e,f)},enter:function(a,b,c){c=c||{};return y("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return y("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return y("move",a,"ng-move",b,c)},beforeSetClass:function(a,b,c,e,f){f=f||{};b=l(c,"-remove")+" "+l(b,"-add");if(f=Q("setClass",a,b,f.from))return C(a,e),f;x();e()},beforeAddClass:function(a,b,c,e){e=e||{};if(b=Q("addClass",a,l(b,"-add"),e.from))return C(a,c),b;x();c()},beforeRemoveClass:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            b,c,e){e=e||{};if(b=Q("removeClass",a,l(b,"-remove"),e.from))return C(a,c),b;x();c()},setClass:function(a,b,c,e,f){f=f||{};c=l(c,"-remove");b=l(b,"-add");return R("setClass",a,c+" "+b,e,f.to)},addClass:function(a,b,c,e){e=e||{};return R("addClass",a,l(b,"-add"),c,e.to)},removeClass:function(a,b,c,e){e=e||{};return R("removeClass",a,l(b,"-remove"),c,e.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.4.0-beta.5
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi"
    ],
    "MONTH": [
      "janvier",
      "f\u00e9vrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "ao\u00fbt",
      "septembre",
      "octobre",
      "novembre",
      "d\u00e9cembre"
    ],
    "SHORTDAY": [
      "dim.",
      "lun.",
      "mar.",
      "mer.",
      "jeu.",
      "ven.",
      "sam."
    ],
    "SHORTMONTH": [
      "janv.",
      "f\u00e9vr.",
      "mars",
      "avr.",
      "mai",
      "juin",
      "juil.",
      "ao\u00fbt",
      "sept.",
      "oct.",
      "nov.",
      "d\u00e9c."
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "dd/MM/y HH:mm",
    "shortDate": "dd/MM/y",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20ac",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": "\u00a0",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "fr-fr",
  "pluralCat": function(n, opt_precision) {  var i = n | 0;  if (i == 0 || i == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);

(function (angular) {

    'use strict';

    var app = angular.module('angular-progress-arc', []);

    app.provider('progressArcDefaults', function () {

        var defaults = {
            size: 48,
            strokeWidth: 2,
            stroke: 'black',
            background: null
        };

        this.setDefault = function (name, value) {
            defaults[name] = value;
            return this;
        };

        this.$get = function () {
            return function (attr) {
                angular.forEach(defaults, function (value, key) {
                    if (!attr[key]) {
                        attr[key] = value;
                    }
                });
            };
        };
    });

    app.directive('progressArc', ['progressArcDefaults', function (progressArcDefaults) {
        return {
            restrict: 'E',
            scope: {
                size:             '@', // Size of element in pixels.
                strokeWidth:      '@', // Width of progress arc stroke.
                stroke:           '=', // Color/appearance of stroke.
                counterClockwise: '@', // Boolean value indicating
                complete:         '&', // Expression evaluating to float [0.0, 1.0]
                background:       '@'  // Color of the background ring. Defaults to null.
            },
            compile: function (element, attr) {

                progressArcDefaults(attr);

                return function (scope, element, attr) {
                    // Firefox has a bug where it doesn't handle rotations and stroke dashes correctly.
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=949661
                    scope.offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90;
                    var updateRadius = function () {
                        scope.strokeWidthCapped = Math.min(scope.strokeWidth, scope.size / 2 - 1);
                        scope.radius = Math.max((scope.size - scope.strokeWidthCapped) / 2 - 1, 0);
                        scope.circumference = 2 * Math.PI * scope.radius;
                    };

                    scope.$watchCollection('[size, strokeWidth]', updateRadius);
                    updateRadius();
                };
            },
            template:
                '<svg ng-attr-width="{{48}}" ng-attr-height="{{48}}">' +
                    '<circle fill="none" ' +
                        'ng-if="background" ' +
                        'ng-attr-cx="{{size/2}}" ' +
                        'ng-attr-cy="{{size/2}}" ' +
                        'ng-attr-r="{{radius}}" ' +
                        'ng-attr-stroke="{{background}}" ' +
                        'ng-attr-stroke-width="{{strokeWidthCapped}}"' +
                        '/>' +
                    '<circle fill="none" ' +
                        'ng-attr-cx="{{size/2}}" ' +
                        'ng-attr-cy="{{size/2}}" ' +
                        'ng-attr-r="{{radius}}" ' +
                        'ng-attr-stroke="{{stroke}}" ' +
                        'ng-attr-stroke-width="{{strokeWidthCapped}}"' +
                        'ng-attr-stroke-dasharray="{{circumference}}"' +
                        'ng-attr-stroke-dashoffset="{{(counterClockwise?-1:1)*(1-complete())*circumference}}"' +
                        'ng-attr-transform="rotate({{offset}}, {{size/2}}, {{size/2}})"' +
                        '/>' +
                '</svg>'
        };
    }]);

})(window.angular);

angular.module('angRoundProgress',[]);

angular.module('angRoundProgress').directive('angRoundProgress', [function () {
    'use strict';
    var compilationFunction = function (templateElement) {
        if (templateElement.length === 1) {
            var node = templateElement[0],
                width = node.getAttribute('round-progress-width') || '400',
                height = node.getAttribute('round-progress-height') || '400',
                canvas = document.createElement('canvas')
                ;

            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            canvas.setAttribute('round-progress-model', node.getAttribute('round-progress-model'));

            node.parentNode.replaceChild(canvas, node);

            var outerCircleWidth = node.getAttribute('round-progress-outer-circle-width') || '20';
            var innerCircleWidth = node.getAttribute('round-progress-inner-circle-width') || '5';

            var outerCircleBackgroundColor = node.getAttribute('round-progress-outer-circle-background-color') || '#505769';
            var outerCircleForegroundColor = node.getAttribute('round-progress-outer-circle-foreground-color') || '#12eeb9';
            var innerCircleColor = node.getAttribute('round-progress-inner-circle-color') || '#505769';
            var labelColor = node.getAttribute('round-progress-label-color') || '#12eeb9';

            var outerCircleRadius = node.getAttribute('round-progress-outer-circle-radius') || '100';
            var innerCircleRadius = node.getAttribute('round-progress-inner-circle-radius') || '70';

            var labelFont = node.getAttribute('round-progress-label-font') || '50pt Calibri';

            return {
                pre: function preLink(scope) {
                    var expression = canvas.getAttribute('round-progress-model');
                    scope.$watch(expression, function (newValue) {
                        // Create the content of the canvas
                        var ctx = canvas.getContext('2d'), x = width / 2, y = height / 2;
                        ctx.clearRect(0, 0, width, height);

                        // The "background" circle
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(outerCircleRadius), 0, Math.PI * 2, false);
                        ctx.lineWidth = parseInt(outerCircleWidth);
                        ctx.strokeStyle = outerCircleBackgroundColor;
                        ctx.stroke();

                        // The inner circle
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(innerCircleRadius), 0, Math.PI * 2, false);
                        ctx.lineWidth = parseInt(innerCircleWidth);
                        ctx.strokeStyle = innerCircleColor;
                        ctx.stroke();

                        // The inner number
                        ctx.font = labelFont;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = labelColor;
                        ctx.fillText(newValue.label + "%", x, y);

                        console.log(newValue.label);

                        // The "foreground" circle
                        var startAngle = - (Math.PI / 2);
                        var endAngle = ((Math.PI * 2 ) * newValue.percentage) - (Math.PI / 2);
                        var anticlockwise = false;
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(outerCircleRadius), startAngle, endAngle, anticlockwise);
                        ctx.lineWidth = parseInt(outerCircleWidth);
                        ctx.strokeStyle = outerCircleForegroundColor;
                        ctx.stroke();
                    }, true);
                }
            };
        }
    };

    var roundProgress = {
        compile: compilationFunction,
        replace: true
    };
    return roundProgress;
}]);

/*
 AngularJS v1.4.0-beta.5
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.4.0-beta.5
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,u,z){'use strict';function s(h,k,p){n.directive(h,["$parse","$swipe",function(d,e){return function(l,m,f){function g(a){if(!c)return!1;var b=Math.abs(a.y-c.y);a=(a.x-c.x)*k;return q&&75>b&&0<a&&30<a&&.3>b/a}var b=d(f[h]),c,q,a=["touch"];u.isDefined(f.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,b){c=a;q=!0},cancel:function(a){q=!1},end:function(a,c){g(a)&&l.$apply(function(){m.triggerHandler(p);b(l,{$event:c})})}},a)}}])}var n=u.module("ngTouch",[]);n.factory("$swipe",
[function(){function h(d){var e=d.touches&&d.touches.length?d.touches:[d];d=d.changedTouches&&d.changedTouches[0]||d.originalEvent&&d.originalEvent.changedTouches&&d.originalEvent.changedTouches[0]||e[0].originalEvent||e[0];return{x:d.clientX,y:d.clientY}}function k(d,e){var l=[];u.forEach(d,function(d){(d=p[d][e])&&l.push(d)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(d,
e,l){var m,f,g,b,c=!1;l=l||["mouse","touch"];d.on(k(l,"start"),function(a){g=h(a);c=!0;f=m=0;b=g;e.start&&e.start(g,a)});var q=k(l,"cancel");if(q)d.on(q,function(a){c=!1;e.cancel&&e.cancel(a)});d.on(k(l,"move"),function(a){if(c&&g){var d=h(a);m+=Math.abs(d.x-b.x);f+=Math.abs(d.y-b.y);b=d;10>m&&10>f||(f>m?(c=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(d,a)))}});d.on(k(l,"end"),function(a){c&&(c=!1,e.end&&e.end(h(a),a))})}}}]);n.config(["$provide",function(h){h.decorator("ngClickDirective",
["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",["$parse","$timeout","$rootElement",function(h,k,p){function d(b,c,d){for(var a=0;a<b.length;a+=2){var e=b[a+1],f=d;if(25>Math.abs(b[a]-c)&&25>Math.abs(e-f))return b.splice(a,a+2),!0}return!1}function e(b){if(!(2500<Date.now()-m)){var c=b.touches&&b.touches.length?b.touches:[b],e=c[0].clientX,c=c[0].clientY;1>e&&1>c||g&&g[0]===e&&g[1]===c||(g&&(g=null),"label"===b.target.tagName.toLowerCase()&&(g=[e,c]),d(f,e,c)||(b.stopPropagation(),
b.preventDefault(),b.target&&b.target.blur()))}}function l(b){b=b.touches&&b.touches.length?b.touches:[b];var c=b[0].clientX,d=b[0].clientY;f.push(c,d);k(function(){for(var a=0;a<f.length;a+=2)if(f[a]==c&&f[a+1]==d){f.splice(a,a+2);break}},2500,!1)}var m,f,g;return function(b,c,g){function a(){n=!1;c.removeClass("ng-click-active")}var k=h(g.ngClick),n=!1,r,s,v,w;c.on("touchstart",function(a){n=!0;r=a.target?a.target:a.srcElement;3==r.nodeType&&(r=r.parentNode);c.addClass("ng-click-active");s=Date.now();
a=a.touches&&a.touches.length?a.touches:[a];a=a[0].originalEvent||a[0];v=a.clientX;w=a.clientY});c.on("touchmove",function(c){a()});c.on("touchcancel",function(c){a()});c.on("touchend",function(b){var k=Date.now()-s,h=b.changedTouches&&b.changedTouches.length?b.changedTouches:b.touches&&b.touches.length?b.touches:[b],t=h[0].originalEvent||h[0],h=t.clientX,t=t.clientY,x=Math.sqrt(Math.pow(h-v,2)+Math.pow(t-w,2));n&&750>k&&12>x&&(f||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",
l,!0),f=[]),m=Date.now(),d(f,h,t),r&&r.blur(),u.isDefined(g.disabled)&&!1!==g.disabled||c.triggerHandler("click",[b]));a()});c.onclick=function(a){};c.on("click",function(a,c){b.$apply(function(){k(b,{$event:c||a})})});c.on("mousedown",function(a){c.addClass("ng-click-active")});c.on("mousemove mouseup",function(a){c.removeClass("ng-click-active")})}}]);s("ngSwipeLeft",-1,"swipeleft");s("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

angular.module('igTruncate', []).filter('truncate', function (){
  return function (text, length, end){
    if (text != undefined){
      if (isNaN(length)){
        length = 10;
      }

      if (end === undefined){
        end = "...";
      }

      if (text.length <= length || text.length - end.length <= length){
        return text;
      }else{
        return String(text).substring(0, length - end.length) + end;
      }
    }
  };
});

/**
 * Angular JS slider directive
 *
 * (c) Rafal Zajac <rzajac@gmail.com>
 * http://github.com/rzajac/angularjs-slider
 *
 * Version: v0.1.6
 *
 * Licensed under the MIT license
 */

/* global angular: false */

angular.module('rzModule', [])

    .value('throttle',
    /**
     * throttle
     *
     * Taken from underscore project
     *
     * @param {Function} func
     * @param {number} wait
     * @param {ThrottleOptions} options
     * @returns {Function}
     */
        function throttle(func, wait, options) {
        var getTime = (Date.now || function() {
            return new Date().getTime();
        });
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : getTime();
            timeout = null;
            result = func.apply(context, args);
            context = args = null;
        };
        return function() {
            var now = getTime();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        }
    })

    .factory('Slider', ['$timeout', '$document', 'throttle', function($timeout, $document, throttle)
    {
        /**
         * Slider
         *
         * @param {ngScope} scope            The AngularJS scope
         * @param {Element} sliderElem The slider directive element wrapped in jqLite
         * @param {*} attributes       The slider directive attributes
         * @constructor
         */
        var Slider = function(scope, sliderElem, attributes)
        {
            /**
             * The slider's scope
             *
             * @type {ngScope}
             */
            this.scope = scope;

            /**
             * The slider attributes
             *
             * @type {*}
             */
            this.attributes = attributes;

            /**
             * Slider element wrapped in jqLite
             *
             * @type {jqLite}
             */
            this.sliderElem = sliderElem;

            /**
             * Slider type
             *
             * @type {string}
             */
            this.range = attributes.rzSliderHigh !== undefined && attributes.rzSliderModel !== undefined;

            /**
             * Half of the width of the slider handles
             *
             * @type {number}
             */
            this.handleHalfWidth = 0;

            /**
             * Maximum left the slider handle can have
             *
             * @type {number}
             */
            this.maxLeft = 0;

            /**
             * Precision
             *
             * @type {number}
             */
            this.precision = 0;

            /**
             * Step
             *
             * @type {number}
             */
            this.step = 0;

            /**
             * The name of the handle we are currently tracking
             *
             * @type {string}
             */
            this.tracking = '';

            /**
             * Minimum value (floor) of the model
             *
             * @type {number}
             */
            this.minValue = 0;

            /**
             * Maximum value (ceiling) of the model
             *
             * @type {number}
             */
            this.maxValue = 0;

            /**
             * The delta between min and max value
             *
             * @type {number}
             */
            this.valueRange = 0;

            /**
             * Set to true if init method already executed
             *
             * @type {boolean}
             */
            this.initRun = false;

            /**
             * Custom translate function
             *
             * @type {function}
             */
            this.customTrFn = null;

            // Slider DOM elements wrapped in jqLite
            this.fullBar = null; // The whole slider bar
            this.selBar = null;  // Highlight between two handles
            this.minH = null;  // Left slider handle
            this.maxH = null;  // Right slider handle
            this.flrLab = null;  // Floor label
            this.ceilLab = null; // Ceiling label
            this.minLab =  null; // Label above the low value
            this.maxLab = null; // Label above the high value
            this.cmbLab = null;  // Combined label

            // Initialize slider
            this.init();
        };

        // Add instance methods
        Slider.prototype = {

            /**
             * Initialize slider
             *
             * @returns {undefined}
             */
            init: function()
            {
                var self = this;

                if(this.scope.rzSliderTranslate)
                {
                    this.customTrFn = this.scope.rzSliderTranslate();
                }

                this.initElemHandles();
                this.calcViewDimensions();

                this.setMinAndMax();
                this.precision = this.scope.rzSliderPrecision === undefined ? 0 : +this.scope.rzSliderPrecision;
                this.step = this.scope.rzSliderStep === undefined ? 1 : +this.scope.rzSliderStep;

                $timeout(function()
                {
                    self.updateCeilLab();
                    self.updateFloorLab();
                    self.initHandles();
                    self.bindEvents();
                });

                // Recalculate slider view dimensions
                this.scope.$on('reCalcViewDimensions', angular.bind(this, this.calcViewDimensions));

                // Recalculate stuff if view port dimensions have changed
                angular.element(window).on('resize', angular.bind(this, this.calcViewDimensions));

                this.initRun = true;

                // Watch for changes to the model

                var thrLow = throttle(function()
                {
                    self.setMinAndMax();
                    self.updateLowHandle(self.valueToOffset(self.scope.rzSliderModel));

                    if(self.range)
                    {
                        self.updateSelectionBar();
                        self.updateCmbLabel();
                    }

                }, 350, { leading: false });

                var thrHigh = throttle(function()
                {
                    self.setMinAndMax();
                    self.updateHighHandle(self.valueToOffset(self.scope.rzSliderHigh));
                    self.updateSelectionBar();
                    self.updateCmbLabel();
                }, 350, { leading: false });

                this.scope.$on('rzSliderForceRender', function()
                {
                    self.resetLabelsValue();
                    thrLow();
                    thrHigh();
                    self.resetSlider();
                });

                // Watchers

                this.scope.$watch('rzSliderModel', function(newValue, oldValue)
                {
                    if(newValue === oldValue) return;
                    thrLow();
                });

                this.scope.$watch('rzSliderHigh', function(newValue, oldValue)
                {
                    if(newValue === oldValue) return;
                    thrHigh();
                });

                this.scope.$watch('rzSliderFloor', function(newValue, oldValue)
                {
                    if(newValue === oldValue) return;
                    self.resetSlider();
                });

                this.scope.$watch('rzSliderCeil', function(newValue, oldValue)
                {
                    if(newValue === oldValue) return;
                    self.resetSlider();
                });
            },

            /**
             * Resets slider
             *
             * @returns {undefined}
             */
            resetSlider: function()
            {
                this.setMinAndMax();
                this.calcViewDimensions();
                this.updateCeilLab();
                this.updateFloorLab();
            },

            /**
             * Reset label values
             *
             * @return {undefined}
             */
            resetLabelsValue: function()
            {
                this.minLab.rzsv = undefined;
                this.maxLab.rzsv = undefined;
            },

            /**
             * Initialize slider handles positions and labels
             *
             * Run only once during initialization and every time view port changes size
             *
             * @returns {undefined}
             */
            initHandles: function()
            {
                this.updateLowHandle(this.valueToOffset(this.scope.rzSliderModel));

                if(this.range)
                {
                    this.updateHighHandle(this.valueToOffset(this.scope.rzSliderHigh));
                    this.updateSelectionBar();
                    this.updateCmbLabel();
                }
            },

            /**
             * Translate value to human readable format
             *
             * @param {number|string} value
             * @param {jqLite} label
             * @param {bool?} useCustomTr
             * @returns {undefined}
             */
            translateFn: function(value, label, useCustomTr)
            {
                useCustomTr = useCustomTr === undefined ? true : useCustomTr;

                var valStr = this.customTrFn && useCustomTr ? '' + this.customTrFn(value) : '' + value,
                    getWidth = false;

                if(label.rzsv === undefined || label.rzsv.length != valStr.length || (label.rzsv.length > 0 && label.rzsw == 0))
                {
                    getWidth = true;
                    label.rzsv = valStr;
                }

                label.text(valStr);

                // Update width only when length of the label have changed
                if(getWidth) { this.getWidth(label); }
            },

            /**
             * Set maximum and minimum values for the slider
             *
             * @returns {undefined}
             */
            setMinAndMax: function()
            {
                if(this.scope.rzSliderFloor)
                {
                    this.minValue = +this.scope.rzSliderFloor;
                }
                else
                {
                    this.minValue = this.scope.rzSliderFloor = 0;
                }

                if(this.scope.rzSliderCeil)
                {
                    this.maxValue = +this.scope.rzSliderCeil;
                }
                else
                {
                    this.scope.rzSliderCeil = this.maxValue = this.range ? this.scope.rzSliderHigh : this.scope.rzSliderModel;
                }

                this.valueRange = this.maxValue - this.minValue;
            },

            /**
             * Set the slider children to variables for easy access
             *
             * Run only once during initialization
             *
             * @returns {undefined}
             */
            initElemHandles: function()
            {
                angular.forEach(this.sliderElem.children(), function(elem, index)
                {
                    var _elem = angular.element(elem);

                    switch(index)
                    {
                        case 0: this.fullBar = _elem; break;
                        case 1: this.selBar = _elem; break;
                        case 2: this.minH = _elem; break;
                        case 3: this.maxH = _elem; break;
                        case 4: this.flrLab = _elem; break;
                        case 5: this.ceilLab = _elem; break;
                        case 6: this.minLab = _elem; break;
                        case 7: this.maxLab = _elem; break;
                        case 8: this.cmbLab = _elem; break;
                    }

                }, this);

                // Initialize offsets
                this.fullBar.rzsl = 0;
                this.selBar.rzsl = 0;
                this.minH.rzsl = 0;
                this.maxH.rzsl = 0;
                this.flrLab.rzsl = 0;
                this.ceilLab.rzsl = 0;
                this.minLab.rzsl = 0;
                this.maxLab.rzsl = 0;
                this.cmbLab.rzsl = 0;

                // Remove stuff not needed in single slider
                if( ! this.range)
                {
                    this.cmbLab.remove();
                    this.maxLab.remove();
                    this.maxH.remove();
                    this.selBar.remove();
                }
            },

            /**
             * Calculate dimensions that are dependent on view port size
             *
             * Run once during initialization and every time view port changes size.
             *
             * @returns {undefined}
             */
            calcViewDimensions: function ()
            {
                var handleWidth = this.getWidth(this.minH);

                this.handleHalfWidth = handleWidth / 2;
                this.barWidth = this.getWidth(this.fullBar);

                this.maxLeft = this.barWidth - handleWidth;

                this.getWidth(this.sliderElem);
                this.sliderElem.rzsl = this.sliderElem[0].getBoundingClientRect().left;

                if(this.initRun)
                {
                    this.updateCeilLab();
                    this.initHandles();
                }
            },

            /**
             * Update position of the ceiling label
             *
             * @returns {undefined}
             */
            updateCeilLab: function()
            {
                this.translateFn(this.scope.rzSliderCeil, this.ceilLab);
                this.setLeft(this.ceilLab, this.barWidth - this.ceilLab.rzsw);
                this.getWidth(this.ceilLab);
            },

            /**
             * Update position of the floor label
             *
             * @returns {undefined}
             */
            updateFloorLab: function()
            {
                this.translateFn(this.scope.rzSliderFloor, this.flrLab);
                this.getWidth(this.flrLab);
            },

            /**
             * Update slider handles and label positions
             *
             * @param {string} which
             * @param {number} newOffset
             */
            updateHandles: function(which, newOffset)
            {
                if(which === 'rzSliderModel')
                {
                    this.updateLowHandle(newOffset);
                    if(this.range)
                    {
                        this.updateSelectionBar();
                        this.updateCmbLabel();
                    }
                    return;
                }

                if(which === 'rzSliderHigh')
                {
                    this.updateHighHandle(newOffset);
                    if(this.range)
                    {
                        this.updateSelectionBar();
                        this.updateCmbLabel();
                    }
                    return;
                }

                // Update both
                this.updateLowHandle(newOffset);
                this.updateHighHandle(newOffset);
                this.updateSelectionBar();
                this.updateCmbLabel();
            },

            /**
             * Update low slider handle position and label
             *
             * @param {number} newOffset
             * @returns {undefined}
             */
            updateLowHandle: function(newOffset)
            {
                this.setLeft(this.minH, newOffset);
                this.translateFn(this.scope.rzSliderModel, this.minLab);
                this.setLeft(this.minLab, newOffset - this.minLab.rzsw / 2 + this.handleHalfWidth);

                this.shFloorCeil();
            },

            /**
             * Update high slider handle position and label
             *
             * @param {number} newOffset
             * @returns {undefined}
             */
            updateHighHandle: function(newOffset)
            {
                this.setLeft(this.maxH, newOffset);
                this.translateFn(this.scope.rzSliderHigh, this.maxLab);
                this.setLeft(this.maxLab, newOffset - this.maxLab.rzsw / 2 + this.handleHalfWidth);

                this.shFloorCeil();
            },

            /**
             * Show / hide floor / ceiling label
             *
             * @returns {undefined}
             */
            shFloorCeil: function()
            {
                var flHidden = false, clHidden = false;

                if(this.minLab.rzsl <= this.flrLab.rzsl + this.flrLab.rzsw + 5)
                {
                    flHidden = true;
                    this.hideEl(this.flrLab);
                }
                else
                {
                    flHidden = false;
                    this.showEl(this.flrLab);
                }

                if(this.minLab.rzsl + this.minLab.rzsw >= this.ceilLab.rzsl - this.handleHalfWidth - 10)
                {
                    clHidden = true;
                    this.hideEl(this.ceilLab);
                }
                else
                {
                    clHidden = false;
                    this.showEl(this.ceilLab);
                }

                if(this.range)
                {
                    if(this.maxLab.rzsl + this.maxLab.rzsw >= this.ceilLab.rzsl - 10)
                    {
                        this.hideEl(this.ceilLab);
                    }
                    else if( ! clHidden)
                    {
                        this.showEl(this.ceilLab);
                    }

                    // Hide or show floor label
                    if(this.maxLab.rzsl <= this.flrLab.rzsl + this.flrLab.rzsw + this.handleHalfWidth)
                    {
                        this.hideEl(this.flrLab);
                    }
                    else if( ! flHidden)
                    {
                        this.showEl(this.flrLab);
                    }
                }
            },

            /**
             * Update slider selection bar, combined label and range label
             *
             * @returns {undefined}
             */
            updateSelectionBar: function()
            {
                this.setWidth(this.selBar, this.maxH.rzsl - this.minH.rzsl);
                this.setLeft(this.selBar, this.minH.rzsl + this.handleHalfWidth);
            },

            /**
             * Update combined label position and value
             *
             * @returns {undefined}
             */
            updateCmbLabel: function()
            {
                var lowTr, highTr;

                if(this.minLab.rzsl + this.minLab.rzsw + 10 >= this.maxLab.rzsl)
                {
                    if(this.customTrFn)
                    {
                        lowTr = this.customTrFn(this.scope.rzSliderModel);
                        highTr = this.customTrFn(this.scope.rzSliderHigh);
                    }
                    else
                    {
                        lowTr = this.scope.rzSliderModel;
                        highTr = this.scope.rzSliderHigh;
                    }

                    this.translateFn(lowTr + ' - ' + highTr, this.cmbLab, false);
                    this.setLeft(this.cmbLab, this.selBar.rzsl + this.selBar.rzsw / 2 - this.cmbLab.rzsw / 2);
                    this.hideEl(this.minLab);
                    this.hideEl(this.maxLab);
                    this.showEl(this.cmbLab);
                }
                else
                {
                    this.showEl(this.maxLab);
                    this.showEl(this.minLab);
                    this.hideEl(this.cmbLab);
                }
            },

            /**
             * Round value to step and precision
             *
             * @param {number} value
             * @returns {number}
             */
            roundStep: function(value)
            {
                var step = this.step,
                    remainder = (value - this.minValue) % step,
                    steppedValue = remainder > (step / 2) ? value + step - remainder : value - remainder;

                return +(steppedValue).toFixed(this.precision);
            },

            /**
             * Hide element
             *
             * @param element
             * @returns {jqLite} The jqLite wrapped DOM element
             */
            hideEl: function (element)
            {
                return element.css({opacity: 0});
            },

            /**
             * Show element
             *
             * @param element The jqLite wrapped DOM element
             * @returns {jqLite} The jqLite
             */
            showEl: function (element)
            {
                return element.css({opacity: 1});
            },

            /**
             * Set element left offset
             *
             * @param {jqLite} elem The jqLite wrapped DOM element
             * @param {number} left
             * @returns {number}
             */
            setLeft: function (elem, left)
            {
                elem.rzsl = left;
                elem.css({left: left + 'px'});
                return left;
            },

            /**
             * Get element width
             *
             * @param {jqLite} elem The jqLite wrapped DOM element
             * @returns {number}
             */
            getWidth: function(elem)
            {
                var val = elem[0].getBoundingClientRect();
                elem.rzsw = val.right - val.left;
                return elem.rzsw;
            },

            /**
             * Set element width
             *
             * @param {jqLite} elem  The jqLite wrapped DOM element
             * @param {number} width
             * @returns {*}
             */
            setWidth: function(elem, width)
            {
                elem.rzsw = width;
                elem.css({width: width + 'px'});
                return width;
            },

            /**
             * Translate value to pixel offset
             *
             * @param {number} val
             * @returns {number}
             */
            valueToOffset: function(val)
            {
                return (val - this.minValue) * this.maxLeft / this.valueRange;
            },

            /**
             * Translate offset to model value
             *
             * @param {number} offset
             * @returns {number}
             */
            offsetToValue: function(offset)
            {
                return (offset / this.maxLeft) * this.valueRange + this.minValue;
            },

            // Events

            /**
             * Bind mouse and touch events to slider handles
             *
             * @returns {undefined}
             */
            bindEvents: function()
            {
                this.minH.on('mousedown', angular.bind(this, this.onStart, this.minH, 'rzSliderModel'));
                if(this.range) { this.maxH.on('mousedown', angular.bind(this, this.onStart, this.maxH, 'rzSliderHigh')) }

                this.minH.on('touchstart', angular.bind(this, this.onStart, this.minH, 'rzSliderModel'));
                if(this.range) { this.maxH.on('touchstart', angular.bind(this, this.onStart, this.maxH, 'rzSliderHigh')) }
            },

            /**
             * onStart event handler
             *
             * @param {Object} pointer The jqLite wrapped DOM element
             * @param {string} ref     One of the refLow, refHigh values
             * @param {Event}  event   The event
             * @returns {undefined}
             */
            onStart: function (pointer, ref, event)
            {
                event.stopPropagation();
                event.preventDefault();

                if(this.tracking !== '') { return }

                // We have to do this in case the HTML where the sliders are on
                // have been animated into view.
                this.calcViewDimensions();
                this.tracking = ref;

                pointer.addClass('active');

                if(event.touches || (typeof(event.originalEvent) != 'undefined' && event.originalEvent.touches))
                {
                    $document.on('touchmove', angular.bind(this, this.onMove, pointer));
                    $document.on('touchend', angular.bind(this, this.onEnd));
                }
                else
                {
                    $document.on('mousemove', angular.bind(this, this.onMove, pointer));
                    $document.on('mouseup', angular.bind(this, this.onEnd));
                }
            },

            /**
             * onMove event handler
             *
             * @param {jqLite} pointer
             * @param {Event}  event The event
             * @returns {undefined}
             */
            onMove: function (pointer, event)
            {

                var eventX = event.clientX || (typeof(event.originalEvent) != 'undefined' ? event.originalEvent.touches[0].clientX : event.touches[0].clientX),
                    sliderLO = this.sliderElem.rzsl,
                    newOffset = eventX - sliderLO - this.handleHalfWidth,
                    newValue;

                if(newOffset <= 0)
                {
                    if(pointer.rzsl !== 0)
                    {
                        this.scope[this.tracking] = this.minValue;
                        this.updateHandles(this.tracking, 0);
                        this.scope.$apply();
                    }

                    return;
                }

                if(newOffset >= this.maxLeft)
                {
                    if(pointer.rzsl !== this.maxLeft)
                    {
                        this.scope[this.tracking] = this.maxValue;
                        this.updateHandles(this.tracking, this.maxLeft);
                        this.scope.$apply();
                    }

                    return;
                }

                newValue = this.offsetToValue(newOffset);
                newValue = this.roundStep(newValue);

                if (this.range)
                {
                    if (this.tracking === 'rzSliderModel' && newValue >= this.scope.rzSliderHigh)
                    {
                        this.scope[this.tracking] = this.scope.rzSliderHigh;
                        this.updateHandles(this.tracking, this.maxH.rzsl);
                        this.tracking = 'rzSliderHigh';
                        this.minH.removeClass('active');
                        this.maxH.addClass('active');
                    }
                    else if(this.tracking === 'rzSliderHigh' && newValue <= this.scope.rzSliderModel)
                    {
                        this.scope[this.tracking] = this.scope.rzSliderModel;
                        this.updateHandles(this.tracking, this.minH.rzsl);
                        this.tracking = 'rzSliderModel';
                        this.maxH.removeClass('active');
                        this.minH.addClass('active');
                    }
                }

                if(this.scope[this.tracking] !== newValue)
                {
                    this.scope[this.tracking] = newValue;
                    this.updateHandles(this.tracking, newOffset);
                    this.scope.$apply();
                }
            },

            /**
             * onEnd event handler
             *
             * @param {Event} event    The event
             * @returns {undefined}
             */
            onEnd: function(event)
            {
                this.minH.removeClass('active');
                this.maxH.removeClass('active');

                if(event.touches || (typeof(event.originalEvent) != 'undefined' && event.originalEvent.touches))
                {
                    $document.unbind('touchmove');
                    $document.unbind('touchend');
                }
                else
                {
                    $document.unbind('mousemove');
                    $document.unbind('mouseup');
                }

                this.scope.$emit('slideEnded');

                this.tracking = '';
            }
        };

        return Slider;
    }])

    .directive('rzslider', ['Slider', function(Slider)
    {
        return {
            restrict: 'EA',
            scope: {
                rzSliderFloor: '=?',
                rzSliderCeil: '=?',
                rzSliderStep: '@',
                rzSliderPrecision: '@',
                rzSliderModel: '=?',
                rzSliderHigh: '=?',
                rzSliderTranslate: '&'
            },
            template:   '<span class="bar"></span>' + // 0 The slider bar
                '<span class="bar selection"></span>' + // 1 Highlight between two handles
                '<span class="pointer"></span>' + // 2 Left slider handle
                '<span class="pointer"></span>' + // 3 Right slider handle
                '<span class="bubble limit"></span>' + // 4 Floor label
                '<span class="bubble limit"></span>' + // 5 Ceiling label
                '<span class="bubble"></span>' + // 6 Label above left slider handle
                '<span class="bubble"></span>' + // 7 Label above right slider handle
                '<span class="bubble"></span>' + // 8 Range label when the slider handles are close ex. 15 - 17
                '<span class="slider-bar"></span>', //AMC Customisation


            link: function(scope, elem, attr)
            {
                return new Slider(scope, elem, attr);
            }
        };
    }]);

// IDE assist

/**
 * @name ngScope
 *
 * @property {number} rzSliderModel
 * @property {number} rzSliderHigh
 * @property {number} rzSliderCeil
 */

/**
 * @name jqLite
 *
 * @property {number|undefined} rzsl
 * @property {number|undefined} rzsw
 * @property {string|undefined} rzsv
 * @property {Function} css
 * @property {Function} text
 */

/**
 * @name Event
 * @property {Array} touches
 */

/**
 * @name ThrottleOptions
 *
 * @property {bool} leading
 * @property {bool} trailing
 */

!function(e,t){function n(){function n(t){var n=t||e.event,o=n.keyCode||n.which;if(-1!==[9,13,32,27].indexOf(o)){for(var r=n.target||n.srcElement,a=-1,i=0;i<S.length;i++)if(r===S[i]){a=i;break}9===o?(r=-1===a?w:a===S.length-1?S[0]:S[a+1],O(n),r.focus(),l(r,f.confirmButtonColor)):(r=13===o||32===o?-1===a?w:void 0:27!==o||h.hidden||"none"===h.style.display?void 0:h,void 0!==r&&I(r,n))}}function i(t){var n=t||e.event,o=n.target||n.srcElement,r=n.relatedTarget,a=v(m,"visible");if(a){var i=-1;if(null!==r){for(var l=0;l<S.length;l++)if(r===S[l]){i=l;break}-1===i&&o.focus()}else L=o}}if(void 0===arguments[0])return e.console.error("sweetAlert expects at least 1 attribute!"),!1;var f=a({},y);switch(typeof arguments[0]){case"string":f.title=arguments[0],f.text=arguments[1]||"",f.type=arguments[2]||"";break;case"object":if(void 0===arguments[0].title)return e.console.error('Missing "title" argument!'),!1;f.title=arguments[0].title,f.text=arguments[0].text||y.text,f.type=arguments[0].type||y.type,f.customClass=arguments[0].customClass||f.customClass,f.allowOutsideClick=arguments[0].allowOutsideClick||y.allowOutsideClick,f.showCancelButton=void 0!==arguments[0].showCancelButton?arguments[0].showCancelButton:y.showCancelButton,f.closeOnConfirm=void 0!==arguments[0].closeOnConfirm?arguments[0].closeOnConfirm:y.closeOnConfirm,f.closeOnCancel=void 0!==arguments[0].closeOnCancel?arguments[0].closeOnCancel:y.closeOnCancel,f.timer=arguments[0].timer||y.timer,f.confirmButtonText=y.showCancelButton?"Confirm":y.confirmButtonText,f.confirmButtonText=arguments[0].confirmButtonText||y.confirmButtonText,f.confirmButtonColor=arguments[0].confirmButtonColor||y.confirmButtonColor,f.cancelButtonText=arguments[0].cancelButtonText||y.cancelButtonText,f.imageUrl=arguments[0].imageUrl||y.imageUrl,f.imageSize=arguments[0].imageSize||y.imageSize,f.doneFunction=arguments[1]||null;break;default:return e.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}o(f),u(),c();for(var m=p(),d=function(t){var n=t||e.event,o=n.target||n.srcElement,a="confirm"===o.className,i=v(m,"visible"),l=f.doneFunction&&"true"===m.getAttribute("data-has-done-function");switch(n.type){case"mouseover":a&&(o.style.backgroundColor=r(f.confirmButtonColor,-.04));break;case"mouseout":a&&(o.style.backgroundColor=f.confirmButtonColor);break;case"mousedown":a&&(o.style.backgroundColor=r(f.confirmButtonColor,-.14));break;case"mouseup":a&&(o.style.backgroundColor=r(f.confirmButtonColor,-.04));break;case"focus":var c=m.querySelector("button.confirm"),u=m.querySelector("button.cancel");a?u.style.boxShadow="none":c.style.boxShadow="none";break;case"click":if(a&&l&&i)f.doneFunction(!0),f.closeOnConfirm&&s();else if(l&&i){var d=String(f.doneFunction).replace(/\s/g,""),y="function("===d.substring(0,9)&&")"!==d.substring(9,10);y&&f.doneFunction(!1),f.closeOnCancel&&s()}else s()}},g=m.querySelectorAll("button"),b=0;b<g.length;b++)g[b].onclick=d,g[b].onmouseover=d,g[b].onmouseout=d,g[b].onmousedown=d,g[b].onfocus=d;M=t.onclick,t.onclick=function(t){var n=t||e.event,o=n.target||n.srcElement,r=m===o,a=B(m,o),i=v(m,"visible"),l="true"===m.getAttribute("data-allow-ouside-click");!r&&!a&&i&&l&&s()};var w=m.querySelector("button.confirm"),h=m.querySelector("button.cancel"),S=m.querySelectorAll("button:not([type=hidden])");z=e.onkeydown,e.onkeydown=n,w.onblur=i,h.onblur=i,e.onfocus=function(){e.setTimeout(function(){void 0!==L&&(L.focus(),L=void 0)},0)}}function o(t){var n=p(),o=n.querySelector("h2"),r=n.querySelector("p"),a=n.querySelector("button.cancel"),i=n.querySelector("button.confirm");if(o.innerHTML=h(t.title).split("\n").join("<br>"),r.innerHTML=h(t.text||"").split("\n").join("<br>"),t.text&&C(r),t.customClass&&b(n,t.customClass),k(n.querySelectorAll(".icon")),t.type){for(var c=!1,s=0;s<d.length;s++)if(t.type===d[s]){c=!0;break}if(!c)return e.console.error("Unknown alert type: "+t.type),!1;var u=n.querySelector(".icon."+t.type);switch(C(u),t.type){case"success":b(u,"animate"),b(u.querySelector(".tip"),"animateSuccessTip"),b(u.querySelector(".long"),"animateSuccessLong");break;case"error":b(u,"animateErrorIcon"),b(u.querySelector(".x-mark"),"animateXMark");break;case"warning":b(u,"pulseWarning"),b(u.querySelector(".body"),"pulseWarningIns"),b(u.querySelector(".dot"),"pulseWarningIns")}}if(t.imageUrl){var f=n.querySelector(".icon.custom");f.style.backgroundImage="url("+t.imageUrl+")",C(f);var m=80,y=80;if(t.imageSize){var g=t.imageSize.split("x")[0],v=t.imageSize.split("x")[1];g&&v?(m=g,y=v,f.css({width:g+"px",height:v+"px"})):e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+t.imageSize)}f.setAttribute("style",f.getAttribute("style")+"width:"+m+"px; height:"+y+"px")}n.setAttribute("data-has-cancel-button",t.showCancelButton),t.showCancelButton?a.style.display="inline-block":k(a),t.cancelButtonText&&(a.innerHTML=h(t.cancelButtonText)),t.confirmButtonText&&(i.innerHTML=h(t.confirmButtonText)),i.style.backgroundColor=t.confirmButtonColor,l(i,t.confirmButtonColor),n.setAttribute("data-allow-ouside-click",t.allowOutsideClick);var w=t.doneFunction?!0:!1;n.setAttribute("data-has-done-function",w),n.setAttribute("data-timer",t.timer)}function r(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n="#",o,r;for(r=0;3>r;r++)o=parseInt(e.substr(2*r,2),16),o=Math.round(Math.min(Math.max(0,o+o*t),255)).toString(16),n+=("00"+o).substr(o.length);return n}function a(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function i(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null}function l(e,t){var n=i(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"}function c(){var e=p();E(g(),10),C(e),b(e,"showSweetAlert"),w(e,"hideSweetAlert"),A=t.activeElement;var n=e.querySelector("button.confirm");n.focus(),setTimeout(function(){b(e,"visible")},500);var o=e.getAttribute("data-timer");"null"!==o&&""!==o&&(e.timeout=setTimeout(function(){s()},o))}function s(){var n=p();q(g(),5),q(n,5),w(n,"showSweetAlert"),b(n,"hideSweetAlert"),w(n,"visible");var o=n.querySelector(".icon.success");w(o,"animate"),w(o.querySelector(".tip"),"animateSuccessTip"),w(o.querySelector(".long"),"animateSuccessLong");var r=n.querySelector(".icon.error");w(r,"animateErrorIcon"),w(r.querySelector(".x-mark"),"animateXMark");var a=n.querySelector(".icon.warning");w(a,"pulseWarning"),w(a.querySelector(".body"),"pulseWarningIns"),w(a.querySelector(".dot"),"pulseWarningIns"),e.onkeydown=z,t.onclick=M,A&&A.focus(),L=void 0,clearTimeout(n.timeout)}function u(){var e=p();e.style.marginTop=T(p())}var f=".sweet-alert",m=".sweet-overlay",d=["error","warning","info","success"],y={title:"",text:"",type:null,allowOutsideClick:!1,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null},p=function(){return t.querySelector(f)},g=function(){return t.querySelector(m)},v=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},b=function(e,t){v(e,t)||(e.className+=" "+t)},w=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(v(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},h=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},S=function(e){e.style.opacity="",e.style.display="block"},C=function(e){if(e&&!e.length)return S(e);for(var t=0;t<e.length;++t)S(e[t])},x=function(e){e.style.opacity="",e.style.display="none"},k=function(e){if(e&&!e.length)return x(e);for(var t=0;t<e.length;++t)x(e[t])},B=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},T=function(e){e.style.left="-9999px",e.style.display="block";var t=e.clientHeight,n;return n="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt(t/2+n)+"px"},E=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)};o()}e.style.display="block"},q=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"};o()},I=function(n){if(MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var r=t.createEvent("MouseEvents");r.initEvent("click",!1,!1),n.dispatchEvent(r)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},O=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)},A,M,z,L;e.sweetAlertInitialize=function(){var e='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',n=t.createElement("div");n.innerHTML=e,t.body.appendChild(n)},e.sweetAlert=e.swal=function(){var e=arguments;if(null!==p())n.apply(this,e);else var t=setInterval(function(){null!==p()&&(clearInterval(t),n.apply(this,e))},100)},e.swal.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");a(y,e)},function(){"complete"===t.readyState||"interactive"===t.readyState&&t.body?e.sweetAlertInitialize():t.addEventListener?t.addEventListener("DOMContentLoaded",function n(){t.removeEventListener("DOMContentLoaded",arguments.callee,!1),e.sweetAlertInitialize()},!1):t.attachEvent&&t.attachEvent("onreadystatechange",function(){"complete"===t.readyState&&(t.detachEvent("onreadystatechange",arguments.callee),e.sweetAlertInitialize())})}()}(window,document);
"use strict";

// Declare app level module which depends on filters, and services
angular.module("amCompanion", ["ngCookies", "ngRoute", "ngAnimate", "ngTouch", "igTruncate", "angRoundProgress", "angular-progress-arc", "rzModule", "oitozero.ngSweetAlert"]);
angular.module("amCompanion").controller("AmcHeaderController", ['$scope', '$timeout', 'RoutesService', function ($scope, $timeout, RoutesService) {

    "use strict";
    this.cancelColor = "#FFFFFF";
    this.backColor = "#FFFFFF";
    this.editColor = "#FFFFFF";
    this.validateColor = "#FFFFFF";

    /**
     * Cette fonction déconnecte l'utilisateur
     */
    this.disconnect = function () {
        RoutesService.disconnect();
    };

    this.goBack = function () {
        this.goBackHandler();
        this.backColor = "#2980b9";
        $timeout(function () {
            $scope.backColor = "#FFFFFF";
        }, 100);
    };

    this.toggleEditMode = function () {
        $scope.$emit("startEdit");
        this.editColor = "#2980b9";
        $timeout(function () {
            $scope.editColor = "#FFFFFF";
        }, 100);
    };

    this.validateEditMode = function () {
        $scope.$emit("validateEdit");
        this.validateColor = "#2980b9";
        $timeout(function () {
            $scope.validateColor = "#FFFFFF";
        }, 100);
    };

    this.cancelEditMode = function () {
        $scope.$emit("cancelEdit");
        this.cancelColor = "#2980b9";
        $timeout(function () {
            $scope.cancelColor = "#FFFFFF";
        }, 100);
    };
}]);
/* Controllers */

angular.module("amCompanion").directive("amcHeader", function () {
    "use strict";
    return {
        restrict: "E",
        bindToController: {
            homeDisplay: "=",
            label: "=",
            goBackHandler: "&",
            editMode: "="
        },
        controller: "AmcHeaderController",
        controllerAs: "header",
        templateUrl: "app/components/amc_header/amc_header.html",
        scope: true
    };
});
/**
 * Created by romainseb on 03/02/15.
 */

/*
amCompanion.constant("urls", {
        login: "http://localhost:1337/login",
        employes: "http://localhost:1337/api/employees"
    }
);
*/
angular.module("amCompanion").constant("urls", {
    login: "http://amcserver.cloudapp.net/login",
    employes: "http://amcserver.cloudapp.net/api/employees"
}).constant("linkTypes", ["Restaurant", "Appel", "Mail", "Café", "Entretien"]).constant("linkTypesIcons", [{ label: "Restaurant", icon: "glyphicon-cutlery" }, { label: "Appel", icon: "glyphicon-earphone" }, { label: "Mail", icon: "glyphicon-envelope" }, { label: "Café", icon: "" }, { label: "Entretien", icon: "" }]).constant("moods", [{ label: "Satisfait", status: 0 }, { label: "Passable", status: 1 }, { label: "Moyen", status: 2 }, { label: "Insatisfait", status: 3 }, { label: "Alerte", status: 4 }]);
//types : ['Restaurant', 'Appel', 'Mail', 'Café', 'Entretien']

/* Controllers */
angular.module("amCompanion").controller("RootController", ['$scope', '$rootScope', 'AmcContextService', function ($scope, $rootScope, AmcContextService) {
    "use strict";
    $scope.updateStatus = AmcContextService.getUpdateStatus();

    $rootScope.$on("serverUpdateStarted", function () {
        $scope.updateStatus = AmcContextService.getUpdateStatus();
    });

    $scope.closeNotif = function () {
        AmcContextService.setUpdateStatus(0);
        $scope.updateStatus = 0;
    };

    $scope.sendRapport = function () {
        window.location.href = "mailto:sebastien.romain@gmail.com;nicolas.wlodarczyk@outlook.com?" + "subject=AMC Fail report" + "&body=Here the error";
        AmcContextService.setUpdateStatus(0);
        $scope.updateStatus = 0;
    };
}]);

/**
 * Created by Sébastien on 18/05/2014.
 */
angular.module("amCompanion").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    "use strict";
    $routeProvider.when("/", {
        id: "home",
        templateUrl: "app/views/home/home.html",
        controller: "FullHomeController",
        controllerAs: "homeController"

    });

    $routeProvider.when("/employee/:id", {
        id: "employee",
        templateUrl: "app/views/employee/employee.html",
        controller: "FullEmployeeController"
    });

    $routeProvider.when("/link/:id/:timestamp", {
        id: "link",
        templateUrl: "app/views/link/link.html",
        controller: "FullLinkController"
    });

    $routeProvider.when("/objective/:id/:index", {
        id: "link",
        templateUrl: "app/views/objective/objective.html",
        controller: "FullObjectiveController"
    });

    $routeProvider.when("/login", {
        id: "login",
        templateUrl: "app/views/login/login.html",
        controller: "FullLoginController"
    });

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({ redirectTo: "/" });
}]);

angular.module("amCompanion").run(['$rootScope', '$location', 'RoutesService', function ($rootScope, $location, RoutesService) {
    "use strict";
    $rootScope.$on("$routeChangeStart", function (event, next, current) {

        var mainContainer = angular.element(document.getElementById("am-companion"));

        mainContainer.removeClass("slide-right-view");
        mainContainer.removeClass("slide-left-view");
        mainContainer.removeClass("fade-view");

        if (current === undefined || current.$$route.id === "login" && next.$$route.id === "home" || current.$$route.id === "home" && next.$$route.id === "login") {
            mainContainer.addClass("fade-view");
        } else if (current.$$route.id === "home" && next.$$route.id === "employee" || current.$$route.id === "employee" && next.$$route.id === "link") {
            mainContainer.addClass("slide-right-view");
        } else {
            mainContainer.addClass("slide-left-view");
        }

        if (sessionStorage.getItem("token") === null) {
            RoutesService.disconnect();
        }
    });
}]);

angular.module("amCompanion").factory("AmcContextService", ['$http', '$rootScope', '$timeout', '$q', 'urls', '$cookies', '$location', 'SweetAlert', function ($http, $rootScope, $timeout, $q, urls, $cookies, $location, SweetAlert) {
    "use strict";

    var data = {};

    /**
     * This function is called to reset the service's data
     */
    this.initData = function () {
        data.employees = [];
        data.selectedEmployee = null;
        data.selectedEmployeeBackUp = null;
        data.isInit = false;
        data.userMail = sessionStorage.getItem("mail");
        data.updateStatus = 0;
    };

    this.updateCurrentEmployee = function () {
        var defer = $q.defer();

        /*
        if( data.updateStatus === 1)
        {
        }
        */

        data.updateStatus = 1;
        $rootScope.$emit("serverUpdateStarted");

        $http.defaults.headers.common.Authorization = "Bearer " + sessionStorage.token;
        $http.put(urls.employes + "/" + data.selectedEmployee.id, JSON.stringify(data.selectedEmployee)).success(function (employee) {
            //Update the user version
            data.selectedEmployee._ts = employee._ts;
            defer.resolve();
            data.updateStatus = 2;
            $rootScope.$emit("serverUpdateStarted");
            $timeout(function () {
                data.updateStatus = 0;
                $rootScope.$emit("serverUpdateStarted");
            }, 1500);
        }).error(function () {
            //RoutesService.disconnect();
            data.updateStatus = 3;
            $rootScope.$emit("serverUpdateStarted");
            defer.reject();
        });
        return defer.promise;
    };

    /**
     * This method get the data from the stub
     */
    this.initEmployees = function () {
        var defer = $q.defer();

        if (data.isInit === false) {
            if (this.isDevVersion()) {
                $http.get("/data/data2.json").success(function (res) {
                    addEmployeeDate(res);
                    Array.prototype.push.apply(data.employees, res);
                    data.isInit = true;
                    defer.resolve();
                }).error(function () {});
            } else {
                $http.defaults.headers.common.Authorization = "Bearer " + sessionStorage.token;
                $http.get(urls.employes + "/" + data.userMail).success(function (res) {
                    addEmployeeDate(res);
                    Array.prototype.push.apply(data.employees, res);
                    data.isInit = true;
                    defer.resolve();
                }).error(function (error, errorCode) {
                    if (errorCode === 401) {
                        SweetAlert.swal({
                            title: "Session expirée",
                            text: "Votre session a expirée, veuillez vous reconnecter.",
                            type: "error",
                            confirmButtonText: "Ok",
                            closeOnConfirm: true
                        }, function () {
                            sessionStorage.removeItem("token");
                            $location.path("/login");
                            $rootScope.$apply();
                        });
                    }
                    defer.reject();
                });
            }
        } else {
            defer.resolve();
        }
        return defer.promise;
    };

    /**
     * This function get the max date of the links and set it on the employee
     * @param employees the employee's list from the server
     */
    function addEmployeeDate(employees) {
        var currentEmployee,
            currentMax,
            timestamp = -1;

        for (var i = 0; i < employees.length; i++) {
            currentMax = -1;
            currentEmployee = employees[i];
            for (var j = 0; j < currentEmployee.Links.length; j++) {

                //Premier retour du serveur quand les dates sont sous forme textuelles.
                if (typeof currentEmployee.Links[j].DateTimestamp === "undefined") {
                    timestamp = Date.parse(currentEmployee.Links[j].Date.slice(1, 25));
                    currentEmployee.Links[j].DateTimestamp = timestamp > 0 ? timestamp : 0;
                    currentEmployee.Links[j].Date = JSON.stringify(new Date(timestamp));
                }

                if (currentEmployee.Links[j].DateTimestamp > currentMax) {
                    currentMax = currentEmployee.Links[j].DateTimestamp;
                }
            }
            currentEmployee.dateMax = currentMax;
        }
    }

    this.isDevVersion = function () {
        return $cookies.env === "dev";
    };

    //Accessor of employees
    this.getEmployees = function () {
        addEmployeeDate(data.employees);return data.employees;
    };

    this.getSelectedEmployee = function () {
        return data.selectedEmployee;
    };

    this.setSelectedEmployee = function (employee) {
        data.selectedEmployee = employee;
    };

    this.setSelectedEmployeeFromId = function (id) {
        for (var i = 0; i < data.employees.length; i++) {
            if (data.employees[i].id === id) {
                this.setSelectedEmployee(data.employees[i]);
            }
        }
    };

    this.unsetSelectedEmployee = function () {
        data.selectedEmployee = undefined;
    };

    this.setUpdateStatus = function (newStatus) {
        data.updateStatus = newStatus;
    };

    this.getUpdateStatus = function () {
        return data.updateStatus;
    };

    //Init the context at the first injection
    this.initData();

    return this;
}]);

angular.module("amCompanion").factory("AuthService", ['$http', '$q', 'urls', 'AmcContextService', function ($http, $q, urls, AmcContextService) {
    "use strict";
    return {
        login: function login(credentials) {

            var defer = $q.defer();
            var data = { Email: credentials.email, Password: credentials.password };

            $http.post(urls.login, data).success(function (data) {
                sessionStorage.setItem("token", data.token);
                sessionStorage.setItem("mail", credentials.email);
                AmcContextService.initData();
                defer.resolve("Login correct");
            }).error(function () {

                if (AmcContextService.isDevVersion()) {
                    sessionStorage.setItem("token", data.token);
                    sessionStorage.setItem("mail", credentials.email);
                    AmcContextService.initData();
                    defer.resolve("Login correct");
                }

                defer.reject("Login Incorrect");
            });

            return defer.promise;
        }
    };
}]);

angular.module("amCompanion").factory("RoutesService", ['$location', 'AmcContextService', function ($location, AmcContextService) {
    "use strict";

    this.disconnect = function () {
        sessionStorage.removeItem("token");
        $location.path("/login");
    };

    this.loadHomeView = function () {
        $location.path("/");
        AmcContextService.unsetSelectedEmployee();
    };

    this.loadEmployeeView = function (employee) {
        AmcContextService.unsetSelectedEmployee();
        $location.path("/employee/" + employee.id);
    };

    this.loadLinkView = function (employee, link) {
        $location.path("/link/" + employee.id + "/" + link.DateTimestamp);
    };

    this.loadObjectiveView = function (employee, index) {
        $location.path("/objective/" + employee.id + "/" + index);
    };

    return this;
}]);

angular.module("amCompanion").run(["$templateCache", function ($templateCache) {
    "use strict";

    $templateCache.put("index.html", "<!DOCTYPE html><!--[if lt IE 7]><html lang=\"en\" ng-app=\"amCompanion\" class=\"no-js lt-ie9 lt-ie8 lt-ie7\"><![endif]--><!--[if IE 7]><html lang=\"en\" ng-app=\"amCompanion\" class=\"no-js lt-ie9 lt-ie8\"><![endif]--><!--[if IE 8]><html lang=\"en\" ng-app=\"amCompanion\" class=\"no-js lt-ie9\"><![endif]--><!--[if gt IE 8]><!--><html lang=en ng-app=amCompanion class=no-js><!--<![endif]--><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=\"IE=edge\"><title>Am Companion</title><meta name=description content=\"\"><meta name=viewport content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0\"><meta name=apple-mobile-web-app-capable content=\"yes\"><base href=\"/\"><link rel=\"stylesheet prefetch\" href=\"/dist/style.min.css\"></head><body id=am-companion class=fade-view ng-controller=RootController><div id=main-container ng-view class=view></div><div class=\"notif-update ng-hide\" ng-show=\"updateStatus != 0\" ng-class=\"{'tall':updateStatus == 3}\"><div ng-if=\"updateStatus == 1\">Mise à jour en cours <i class=\"fa fa-circle-o-notch fa-spin\"></i></div><div ng-if=\"updateStatus == 2\">Mise à jour effectuée <i class=\"fa fa-check fa-green\"></i></div><div ng-if=\"updateStatus == 3\"><div>Mise à jour échouée <i class=\"fa fa-times fa-red\"></i></div><div class=row><div class=\"columns small-6\"><button ng-click=sendRapport() class=\"btn btn-steria btn-xs small-10 small-centered push-1 columns\">Envoyer le rapport</button></div><div class=\"columns small-6\"><button ng-click=closeNotif() class=\"btn btn-steria btn-xs small-10 small-centered columns\">Fermer</button></div></div></div></div><script src=/dist/script.min.js></script></body></html>");

    $templateCache.put("app/components/amc_header/amc_header.html", "<nav class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div ng-if=header.homeDisplay><div class=navbar-header><div class=\"columns small-2\"></div><div class=\"columns small-8 menu-title\"><img src=/img/logo-icon.png id=nav-logo></div><div class=\"columns small-2\" ng-click=header.disconnect()><span class=\"right-menu-icon fa fa-power-off hv-center\"></span></div></div></div><div ng-if=!header.homeDisplay class=navbar-header><div class=row><div class=\"columns small-2\" ng-if=header.editMode ng-click=header.cancelEditMode()><span class=\"left-menu-icon fa-ban fa hv-center\" style=color:{{cancelColor}}></span></div><div class=\"columns small-2\" ng-if=!header.editMode ng-click=header.goBack()><span class=\"left-menu-icon fa fa-arrow-left hv-center\" style=color:{{backColor}}></span></div><div class=\"columns small-8 menu-title\"><span ng-bind=header.label></span></div><div class=\"columns small-2\" ng-if=!header.editMode ng-click=header.toggleEditMode()><span class=\"right-menu-icon fa-pencil-square-o fa hv-center\" style=color:{{editColor}}></span></div><div class=\"columns small-2\" ng-if=header.editMode ng-click=header.validateEditMode()><span class=\"right-menu-icon fa-check fa hv-center\" style=color:{{validateColor}}></span></div></div></div></nav>");

    $templateCache.put("app/views/employee/employee.html", "<div class=container id=employee-view><amc-header go-back-handler=goBack() label=nomPrenom home-display=false edit-mode=editMode></amc-header><div class=content><form><div class=row><div class=\"separator columns small-12\"><span class=text>Humeur</span></div><div class=\"item-without-padding columns small-12\"><div class=text ng-bind=moods[selectedEmployee.Status].label ng-if=!editMode></div><select ng-options=\"mood.status as mood.label for mood in moods\" ng-show=editMode ng-model=selectedEmployee.Status></select></div><div class=\"separator columns small-12\"><span class=text>Prochain EPDI</span></div><div class=\"item-without-padding columns small-12\"><input ng-show=editMode type=date ng-model=nextEPDI><div class=text ng-bind=\"nextEPDI|date:'d MMMM yyyy'\" ng-if=!editMode></div></div><div class=\"separator columns small-12\"><span class=text>Objectifs</span> <span class=\"action float-right\" ng-click=createNewObjective()><button class=\"btn add-new\" ng-disabled=editMode><span class=\"fa fa-plus\"></span></button></span></div><div class=\"item columns small-12\" ng-repeat=\"objective in selectedEmployee.Objectives\" ng-click=\"showFullObjective( $index )\"><div class=\"columns small-10\"><progress-arc complete=objective.ProgressionPercent/100 stroke=progressColors[$index]></progress-arc><div class=percent ng-class=\"{'cent':objective.ProgressionPercent == 100}\">{{objective.ProgressionPercent}}%</div><div class=text>{{objective.Text}}</div></div><div ng-if=!editMode class=\"next columns small-1\"></div><div ng-if=!editMode class=\"next columns small-1\"><i class=\"fa-angle-right fa\"></i></div><div ng-if=editMode class=\"text-center next columns small-2\" ng-click=\"deleteObjective($event, $index)\"><span class=\"fa fa-trash-o red\"></span></div></div><div class=\"separator columns small-12\"><span class=text>Entretiens</span> <span class=\"action float-right\" ng-click=createNewLink()><button class=\"btn add-new\" ng-disabled=editMode><span class=\"fa fa-plus\"></span></button></span></div><div class=\"item columns small-12\" ng-repeat=\"link in selectedEmployee.Links | orderBy:'date':'reverse'\" ng-click=\"showFullLink( link )\"><div class=row><div class=\"small-2 columns\"><i class=\"fa item-icon-left\" ng-class=getIcon(link.Type)></i></div><div class=\"small-8 columns\"><div>{{link.Type}}</div><div>{{link.DateTimestamp|date:'d MMMM yyyy'}}</div></div><div ng-if=!editMode class=\"next columns small-1\"></div><div ng-if=!editMode class=\"next columns small-1\"><i class=\"fa-angle-right fa\"></i></div><div ng-if=editMode class=\"text-center next columns small-2\" ng-click=\"deleteLink($event, $index)\"><span class=\"fa fa-trash-o red\"></span></div></div></div></div></form></div></div>");

    $templateCache.put("app/views/home/components/employee/employee.html", "<div class=row ng-click=openEmployeeView()><div class=\"item employee columns small-12\" ng-class=\"{'last':last}\"><div class=row><i class=\"small-2 user-icon fa fa-flag-o status-{{employee.Status}}\"></i><div class=\"user-info columns small-9\"><div><span ng-bind=employee.FirstName></span> <span ng-bind=employee.LastName></span></div><div ng-if=\"lastLink != undefined\" class=sub-info><i class=\"glyphicon glyphicon-map-marker\"></i> <span ng-bind=\"lastLink.DateTimestamp|date:'dd/MM/yyyy'\"></span>, <span ng-bind=lastLink.Type|truncate:20></span></div><div ng-if=\"lastLink == undefined\">Pas de rendez vous</div></div><div class=\"next columns small-1\"><i class=\"fa-angle-right fa\"></i></div></div></div></div>");

    $templateCache.put("app/views/home/home.html", "<div id=home class=container><amc-header home-display=true></amc-header><div class=content><div class=row><div class=\"separator columns small-12\"><span class=text>Collaborateurs</span></div><div ng-repeat=\"employee in homeController.employees|orderBy:'dateMax' track by employee.id \" class=\"columns sm\"><embed-employee employee=employee last=$last></embed-employee></div></div></div></div>");

    $templateCache.put("app/views/link/link.html", "<div class=container id=employee-view><amc-header go-back-handler=goBack() label=nomPrenom home-display=false edit-mode=editMode></amc-header><div class=content><div class=row><div class=\"separator columns small-12\"><span class=text>Lieu</span></div><div class=\"item-without-padding columns small-12\"><select ng-model=selectedLink.Type ng-options=\"o as o for o in linkTypes\"></select></div><div class=\"separator columns small-12\"><span class=text>Date</span></div><div class=\"item-without-padding columns small-12\"><input type=date ng-model=selectedDate ng-change=changeSelectedDate()></div><div class=\"separator columns small-12\"><span class=text>Commentaire</span></div><div class=\"item-fit-without-padding columns small-12\"><textarea ng-model=selectedLink.Comment rows=10></textarea></div></div></div></div>");

    $templateCache.put("app/views/login/login.html", "<div id=loginModal><img id=logo src=\"../../../img/logo-white.png\"><div class=row><form class=\"columns large-4 large-centered small-10 small-centered center-block\" ng-submit=login() name=loginForm><div class=\"row collapse\"><div class=\"input-group input-group-lg\"><span class=input-group-addon>@</span> <input type=email name=email class=form-control placeholder=\"Adresse mail\" ng-model=credentials.email required></div></div><div class=\"row collapse\"><div class=\"input-group input-group-lg\"><span class=input-group-addon><span class=\"fa fa-lock\"></span></span> <input name=password type=password class=form-control placeholder=\"Mot de passe\" ng-model=credentials.password required></div></div><div class=\"row collapse\"><button type=submit ng-class=\"{'btn-danger':failed,'btn-success':success}\" class=\"btn btn-steria btn-lg btn-block small-10 small-centered columns large-12\" ng-disabled=\"!loginForm.$valid || loading\">{{buttonLabel}}</button></div></form><div class=clear></div></div></div>");

    $templateCache.put("app/views/objective/objective.html", "<div class=container id=employee-view><amc-header go-back-handler=goBack() label=nomPrenom home-display=false edit-mode=editMode></amc-header><div class=content><div class=row><div class=\"separator columns small-12\"><span class=text>Intitulé</span></div><div class=\"columns small-12\"><div class=\"input-group input-group-lg columns small-12 small-centered\"><input class=form-control placeholder=Intitulé ng-model=selectedObjective.Text required></div></div><div class=\"separator columns small-12\"><span class=text>Pourcentage d'accomplissement</span></div><div class=\"item columns small-12\"><div class=\"input-group input-group-lg columns small-12 small-centered\"><div class=rzslider><rzslider rz-slider-model=selectedObjective.ProgressionPercent rz-slider-floor=0 rz-slider-ceil=100></rzslider></div></div></div></div></div></div>");
}]);

/* Controllers */
angular.module("amCompanion").controller("FullEmployeeController", ['$scope', '$routeParams', '$anchorScroll', 'AmcContextService', 'RoutesService', 'SweetAlert', 'moods', function ($scope, $routeParams, $anchorScroll, AmcContextService, RoutesService, SweetAlert, moods) {

    "use strict";

    $scope.progressColors = [];
    $scope.editMode = false;
    $scope.selectedEmployeeEdited = undefined;
    $scope.nomPrenom = "";

    $anchorScroll();

    /**
     * This function set the percent of colors to make the gradient red to green
     * @type {{pct: number, color: {r: number, g: number, b: number}}[]}
     */
    var percentColors = [{ pct: 0, color: { r: 255, g: 0, b: 0 } }, { pct: 0.5, color: { r: 255, g: 255, b: 0 } }, { pct: 1, color: { r: 0, g: 255, b: 0 } }];

    /**
     * This function allow to get the color from red to green with a percentage
     * @param pct the percentage
     * @returns {string} the color #EXAEXA
     */
    function getColorForPercentage(pct) {
        for (var i = 1; i < percentColors.length - 1; i++) {
            if (pct < percentColors[i].pct) {
                break;
            }
        }
        var lower = percentColors[i - 1];
        var upper = percentColors[i];
        var range = upper.pct - lower.pct;
        var rangePct = (pct - lower.pct) / range;
        var pctLower = 1 - rangePct;
        var pctUpper = rangePct;
        var color = {
            r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
            g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
            b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
        };
        //return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
        return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
        // or output as hex if preferred
    }

    /**
     * This function allow to get the exa code for a color.
     * @param c
     * @returns {string}
     */
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function initColors() {
        var i;
        $scope.progressColors = [];
        for (i = 0; i < $scope.selectedEmployee.Objectives.length; i++) {
            $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.Objectives[i].ProgressionPercent / 100);
        }
    }

    //init the page's context
    var promise = AmcContextService.initEmployees();
    promise.then(function () {
        AmcContextService.setSelectedEmployeeFromId($routeParams.id);
        $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
        $scope.nomPrenom = $scope.getName();
        $scope.nextEPDI = new Date($scope.selectedEmployee.NextEPDI);
        $scope.moods = moods;
        initColors();
    });

    $scope.getIcon = function (type) {
        var icon;

        if (type === "Mail") {
            icon = "fa-envelope-o";
        } else if (type === "Restaurant") {
            icon = "fa-cutlery";
        } else if (type === "Appel") {
            icon = "fa-phone";
        } else if (type === "Café") {
            icon = "fa-coffee";
        } else if (type === "Entretien") {
            icon = "fa-calendar";
        }

        return icon;
    };

    /**
     * get the name of the employee clicked
     * @returns {string}
     */
    $scope.getName = function () {
        var str = "";
        if ($scope.selectedEmployee !== undefined) {
            str = $scope.selectedEmployee.FirstName + " " + $scope.selectedEmployee.LastName;
        }
        return str;
    };

    /**
     * This function allow to return to the home page
     */
    $scope.goBack = function () {
        RoutesService.loadHomeView();
    };

    /**
     * This is what happened when a link is clicked
     * @param link
     */
    $scope.showFullLink = function (link) {
        if ($scope.editMode === false) {
            RoutesService.loadLinkView($scope.selectedEmployee, link);
        }
    };

    $scope.createNewObjective = function () {
        if ($scope.editMode === false) {
            RoutesService.loadObjectiveView($scope.selectedEmployee, "new");
        }
    };

    $scope.createNewLink = function () {
        if ($scope.editMode === false) {
            RoutesService.loadLinkView($scope.selectedEmployee, { DateTimestamp: "new" });
        }
    };

    $scope.showFullObjective = function ($index) {
        if ($scope.editMode === false) {
            RoutesService.loadObjectiveView($scope.selectedEmployee, $index);
        }
    };

    $scope.$on("startEdit", function () {
        $scope.selectedEmployeeBackUp = angular.copy($scope.selectedEmployee);
        $scope.editMode = true;
    });

    $scope.$on("cancelEdit", function () {
        $scope.selectedEmployee = $scope.selectedEmployeeBackUp;
        $scope.editMode = false;
    });

    $scope.$on("validateEdit", function () {

        if ($scope.selectedEmployeeBackUp.Objectives.length !== $scope.selectedEmployee.Objectives.length || $scope.selectedEmployeeBackUp.Links.length !== $scope.selectedEmployee.Links.length) {
            SweetAlert.swal({
                title: "Êtes vous sûr ?",
                text: "Voulez vous supprimer ces données ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Oui",
                cancelButtonText: "Annuler",
                closeOnConfirm: true,
                closeOnCancel: true }, function () {
                $scope.selectedEmployee.NextEPDI = $scope.nextEPDI;
                AmcContextService.updateCurrentEmployee();
                $scope.editMode = false;
            });
        } else if ($scope.nextEPDI.getTime() !== $scope.selectedEmployeeBackUp.NextEPDI || $scope.selectedEmployee.Status !== $scope.selectedEmployeeBackUp.Status) {
            $scope.selectedEmployee.NextEPDI = $scope.nextEPDI.getTime();
            AmcContextService.updateCurrentEmployee();
            $scope.editMode = false;
        } else {
            $scope.editMode = false;
        }
    });

    $scope.deleteObjective = function ($event, $index) {
        $scope.selectedEmployee.Objectives.splice($index, 1);
        $event.stopPropagation();
    };

    $scope.deleteLink = function ($event, $index) {
        $scope.selectedEmployee.Links.splice($index, 1);
        $event.stopPropagation();
    };
}]);

/* Controllers */
angular.module("amCompanion").controller("EmbedEmployeeController", ['$scope', '$filter', 'RoutesService', function ($scope, $filter, RoutesService) {
    "use strict";
    var lastLink = $filter("limitTo")($filter("orderBy")($scope.employee.Links, "Date", "reverse"), 1);
    if (lastLink.length > 0) {
        $scope.lastLink = lastLink[0];
    }

    $scope.openEmployeeView = function () {
        RoutesService.loadEmployeeView($scope.employee);
    };

    if ($scope.employee.Objectives === undefined || $scope.employee.Objectives.length === 0) {
        $scope.percentObjectives = 0;
    } else {
        var sum = 0;

        angular.forEach($scope.employee.Objectives, function (objective) {
            sum += objective.progressionPercent / 100 * objective.ponderation;
        });

        //we round up the number to one decimal
        $scope.percentObjectives = Math.round(sum * 10) / 10;

        if ($scope.percentObjectives < 25) {
            $scope.objectiveColor = "danger";
        } else if ($scope.percentObjectives < 50) {
            $scope.objectiveColor = "warning";
        } else if ($scope.percentObjectives < 75) {
            $scope.objectiveColor = "success";
        } else {
            $scope.objectiveColor = "info";
        }
    }
}]);
angular.module("amCompanion").directive("embedEmployee", function () {
    "use strict";
    return {
        restrict: "E",
        templateUrl: "app/views/home/components/employee/employee.html",
        controller: "EmbedEmployeeController",
        scope: {
            employee: "="
        }
    };
});
/**
 * Created by romainseb on 03/02/15.
 */

/* Controllers */
angular.module("amCompanion").controller("FullHomeController", ['AmcContextService', function (AmcContextService) {
    "use strict";
    AmcContextService.initEmployees();
    this.employees = AmcContextService.getEmployees();
}]);

/**
 * Created by romainseb on 03/02/15.
 */

/* Controllers */
angular.module("amCompanion").controller("FullLinkController", ['$scope', '$routeParams', '$anchorScroll', 'AmcContextService', 'RoutesService', 'linkTypes', 'SweetAlert', function ($scope, $routeParams, $anchorScroll, AmcContextService, RoutesService, linkTypes, SweetAlert) {
    "use strict";

    $anchorScroll();
    $scope.editMode = true;
    $scope.newMode = false;
    $scope.selectedDate = undefined;
    $scope.selectedLinkBackUp = undefined;

    $scope.linkTypes = linkTypes;

    /**
     * This methods is passed in parameter to header, it allow to go back to employee view
     */
    $scope.goBack = function () {
        RoutesService.loadEmployeeView($scope.selectedEmployee);
    };

    $scope.changeSelectedDate = function () {
        if (!!$scope.selectedDate) {
            $scope.selectedLink.DateTimestamp = $scope.selectedDate.getTime();
            $scope.selectedLink.Date = JSON.stringify($scope.selectedDate);
        }
    };

    $scope.getName = function () {
        var employee = AmcContextService.getSelectedEmployee();
        var str = "";
        if (employee !== undefined) {
            str = employee.FirstName + " " + employee.LastName;
        }
        return str;
    };

    var promise = AmcContextService.initEmployees();
    promise.then(function () {

        AmcContextService.setSelectedEmployeeFromId($routeParams.id);
        $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
        $scope.nomPrenom = $scope.getName();
        var currentLink;

        if ($routeParams.timestamp === "new") {
            var date = new Date();

            $scope.selectedLink = {
                Type: undefined,
                DateTimestamp: date.getTime(),
                Date: JSON.stringify(date),
                Comment: ""
            };
            $scope.newMode = true;
            $scope.editMode = true;
            $scope.nomPrenom = "Nouveau rendez-vous";

            $scope.selectedDate = date;
        } else {
            for (var i = 0; i < $scope.selectedEmployee.Links.length; i++) {
                currentLink = $scope.selectedEmployee.Links[i];
                if (currentLink.DateTimestamp === parseInt($routeParams.timestamp)) {
                    $scope.selectedLink = currentLink;
                    $scope.selectedLinkBackUp = angular.copy($scope.selectedLink);
                    $scope.selectedDate = new Date($scope.selectedLink.Date.slice(1, 25));
                    $scope.selectedDateTimestamp = new Date($scope.selectedLink.DateTimestamp);
                }
            }

            if ($scope.selectedLink === undefined) {
                RoutesService.loadEmployeeView($scope.selectedEmployee);
            }
        }
    });

    $scope.$on("cancelEdit", function () {
        if ($scope.newMode) {
            $scope.goBack();
        } else {

            $scope.selectedLink.Type = $scope.selectedLinkBackUp.Type;
            $scope.selectedLink.Date = $scope.selectedLinkBackUp.Date;
            $scope.selectedLink.DateTimestamp = $scope.selectedLinkBackUp.DateTimestamp;
            $scope.selectedLink.Comment = $scope.selectedLinkBackUp.Comment;
            $scope.goBack();
        }
    });

    $scope.$on("validateEdit", function () {

        if ($scope.selectedLink.Date === undefined) {
            SweetAlert.error("", "Une date valide est requise");
        } else if ($scope.selectedLink.Type === undefined) {
            SweetAlert.error("", "Un lieu est requis");
        } else {

            //If it's a new objective
            if ($scope.newMode) {
                $scope.selectedEmployee.Links.push($scope.selectedLink);
                AmcContextService.updateCurrentEmployee();
            }
            //If the new validated objectif is not the same as the original
            else if ($scope.selectedLink.Type !== $scope.selectedLinkBackUp.Type || $scope.selectedLink.DateTimestamp !== $scope.selectedLinkBackUp.DateTimestamp || $scope.selectedLink.Comment !== $scope.selectedLinkBackUp.Comment) {
                AmcContextService.updateCurrentEmployee();
            }
            //Go back
            $scope.goBack();
        }
    });
}]);

angular.module("amCompanion").controller("FullLoginController", ['$scope', '$timeout', '$location', 'AuthService', function ($scope, $timeout, $location, AuthService) {
    "use strict";

    /**
     * Cette méthode permet d'initialiser le bouton de connexion
     */
    $scope.resetButton = function () {
        $scope.buttonLabel = "Connexion";
        $scope.failed = false;
        $scope.success = false;
    };

    /**
     * Cette méthode redirige vers la page principale de l'application une fois connecté
     */
    $scope.redirectToHome = function () {
        $location.path("/");
    };

    $scope.resetButton();

    /**
     * Cette fonction permet de connecter l'utilisateur
     */
    $scope.login = function () {
        $scope.loading = true;
        var promise = AuthService.login($scope.credentials);
        promise.then(function () {
            $scope.loading = false;
            $scope.success = true;
            $scope.buttonLabel = "Succès";

            $timeout($scope.redirectToHome, 1000);
        }, function () {
            $scope.buttonLabel = "Echec de la connexion";
            $scope.failed = true;
            $scope.loading = false;

            $timeout($scope.resetButton, 2000);
        });
    };
}]);

/* Controllers */
angular.module("amCompanion").controller("FullObjectiveController", ['$scope', '$routeParams', '$anchorScroll', 'AmcContextService', 'RoutesService', 'SweetAlert', function ($scope, $routeParams, $anchorScroll, AmcContextService, RoutesService, SweetAlert) {

    "use strict";
    $anchorScroll();
    $scope.editMode = true;
    $scope.newMode = false;

    /**
     * This methods is passed in parameter to header, it allow to go back to employee view
     */
    $scope.goBack = function () {
        RoutesService.loadEmployeeView($scope.selectedEmployee);
    };

    $scope.getName = function () {
        var employee = AmcContextService.getSelectedEmployee();
        var str = "";
        if (employee !== undefined) {
            str = employee.FirstName + " " + employee.LastName;
        }
        return str;
    };

    var promise = AmcContextService.initEmployees();
    promise.then(function () {
        AmcContextService.setSelectedEmployeeFromId($routeParams.id);
        $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
        $scope.nomPrenom = $scope.getName();
        if ($routeParams.index === "new") {
            $scope.selectedObjective = {
                ProgressionPercent: 0,
                ponderation: 0
            };
            $scope.newMode = true;
            $scope.editMode = true;
            $scope.nomPrenom = "Nouvel Objectif";
        } else {
            $scope.selectedObjective = $scope.selectedEmployee.Objectives[$routeParams.index];
            $scope.selectedObjectiveBack = angular.copy($scope.selectedObjective);
        }
    });

    $scope.$on("cancelEdit", function () {
        if ($scope.newMode) {
            $scope.goBack();
        } else {
            $scope.selectedObjective.Text = $scope.selectedObjectiveBack.Text;
            $scope.selectedObjective.ProgressionPercent = $scope.selectedObjectiveBack.ProgressionPercent;
            $scope.selectedObjective.ponderation = $scope.selectedObjectiveBack.ponderation;
            $scope.goBack();
        }
    });

    $scope.$on("validateEdit", function () {

        if ($scope.selectedObjective.Text === undefined) {
            SweetAlert.error("", "Un intitulé est requis.");
        } else {

            //If it's a new objective
            if ($scope.newMode) {
                $scope.selectedEmployee.Objectives.push($scope.selectedObjective);
                AmcContextService.updateCurrentEmployee();
            }
            //If the new validated objectif is not the same as the original
            else if ($scope.selectedObjective.Text !== $scope.selectedObjectiveBack.Text || $scope.selectedObjective.ProgressionPercent !== $scope.selectedObjectiveBack.ProgressionPercent || $scope.selectedObjective.ponderation !== $scope.selectedObjectiveBack.ponderation) {
                AmcContextService.updateCurrentEmployee();
            }
            //Go back
            $scope.goBack();
        }
    });
}]);

//alert("data not loaded");