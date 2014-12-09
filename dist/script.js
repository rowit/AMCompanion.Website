/*
 AngularJS v1.3.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(U,V,u){'use strict';function A(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.5/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:I(b)||y(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(F(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(y(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Bd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Cd(){return++kb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}lc(b,a);return b}function $(b){return parseInt(b,10)}function x(){}function oa(b){return b}function ca(b){return function(){return b}}function G(b){return"undefined"===typeof b}function z(b){return"undefined"!==
typeof b}function K(b){return null!==b&&"object"===typeof b}function I(b){return"string"===typeof b}function X(b){return"number"===typeof b}function fa(b){return"[object Date]"===Ja.call(b)}function F(b){return"function"===typeof b}function lb(b){return"[object RegExp]"===Ja.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function Ua(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Dd(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return R(b.nodeName||b[0]&&b[0].nodeName)}function Va(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ca(b,a,c,d){if(Sa(b)||Ta(b))throw Wa("cpws");if(a){if(b===a)throw Wa("cpi");c=c||[];d=d||[];if(K(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(y(b))for(var f=a.length=0;f<b.length;f++)e=Ca(b[f],null,c,d),K(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;y(a)?a.length=
0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ca(b[f],null,c,d),K(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)y(b)?a=Ca(b,[],c,d):fa(b)?a=new Date(b.getTime()):lb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):K(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ca(b,e,c,d));return a}function ua(b,a){if(y(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(K(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function pa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(y(b)){if(!y(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!pa(b[d],a[d]))return!1;return!0}}else{if(fa(b))return fa(a)?pa(b.getTime(),a.getTime()):!1;if(lb(b)&&lb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||y(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!F(b[d])){if(!pa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==u&&!F(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!F(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Ed(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Sa(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":Ta(a)&&
(c="$SCOPE");return c}function Za(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Ed,a?"  ":null)}function oc(b){return I(b)?JSON.parse(b):b}function va(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===mb?R(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+R(b)})}catch(d){return R(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,
"%20").split("="),d=pc(c[0]),z(d)&&(b=z(c[1])?pc(c[1]):!0,Jb.call(a,d)?y(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Kb(b){var a=[];r(b,function(b,d){y(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function nb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,
"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Fd(b,a){var c,d,e=ob.length;b=B(b);for(d=0;d<e;++d)if(c=ob[d]+a,I(c=b.attr(c)))return c;return null}function Gd(b,a){var c,d,e={};r(ob,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(ob,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Fd(c,"strict-di"),a(c,d?[d]:[],e))}function rc(b,a,c){K(c)||
(c={});c=D({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===V?"document":va(b);throw Wa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Lb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=
/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;U&&e.test(U.name)&&(c.debugInfoEnabled=!0,U.name=U.name.replace(e,""));if(U&&!f.test(U.name))return d();U.name=U.name.replace(f,"");ha.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Hd(){U.name="NG_ENABLE_DEBUG_INFO!"+U.name;U.location.reload()}function Id(b){return ha.element(b).injector().get("$$testability")}function Mb(b,a){a=a||"_";return b.replace(Jd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Kd(){var b;sc||
((qa=U.jQuery)&&qa.fn.on?(B=qa,D(qa.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=qa.cleanData,qa.cleanData=function(a){var c;if(Nb)Nb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=qa._data(e,"events"))&&c.$destroy&&qa(e).triggerHandler("$destroy");b(a)}):B=S,ha.element=B,sc=!0)}function Ob(b,a,c){if(!b)throw Wa("areq",a||"?",c||"required");return b}function pb(b,a,c){c&&y(b)&&(b=b[b.length-1]);Ob(F(b),a,"not a function, got "+
(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Wa("badname",a);}function tc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&F(b)?nc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ia(){return Object.create(null)}function Ld(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=A("$injector"),
d=A("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||A;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],s=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide",
"factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:s,run:function(a){e.push(a);return this}};h&&s(h);return t})}})}function Md(b){D(b,{bootstrap:rc,copy:Ca,extend:D,equals:pa,element:B,forEach:r,injector:Lb,noop:x,bind:nc,toJson:Za,fromJson:oc,identity:oa,isUndefined:G,
isDefined:z,isString:I,isFunction:F,isObject:K,isNumber:X,isElement:mc,isArray:y,version:Nd,isDate:fa,lowercase:R,uppercase:rb,callbacks:{counter:0},getTestability:Id,$$minErr:A,$$csp:$a,reloadWithDebugInfo:Hd});ab=Ld(U);try{ab("ngLocale")}catch(a){ab("ngLocale",[]).provider("$locale",Od)}ab("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Pd});a.provider("$compile",uc).directive({a:Qd,input:vc,textarea:vc,form:Rd,script:Sd,select:Td,style:Ud,option:Vd,ngBind:Wd,ngBindHtml:Xd,ngBindTemplate:Yd,
ngClass:Zd,ngClassEven:$d,ngClassOdd:ae,ngCloak:be,ngController:ce,ngForm:de,ngHide:ee,ngIf:fe,ngInclude:ge,ngInit:he,ngNonBindable:ie,ngPluralize:je,ngRepeat:ke,ngShow:le,ngStyle:me,ngSwitch:ne,ngSwitchWhen:oe,ngSwitchDefault:pe,ngOptions:qe,ngTransclude:re,ngModel:se,ngList:te,ngChange:ue,pattern:wc,ngPattern:wc,required:xc,ngRequired:xc,minlength:yc,ngMinlength:yc,maxlength:zc,ngMaxlength:zc,ngValue:ve,ngModelOptions:we}).directive({ngInclude:xe}).directive(sb).directive(Ac);a.provider({$anchorScroll:ye,
$animate:ze,$browser:Ae,$cacheFactory:Be,$controller:Ce,$document:De,$exceptionHandler:Ee,$filter:Bc,$interpolate:Fe,$interval:Ge,$http:He,$httpBackend:Ie,$location:Je,$log:Ke,$parse:Le,$rootScope:Me,$q:Ne,$$q:Oe,$sce:Pe,$sceDelegate:Qe,$sniffer:Re,$templateCache:Se,$templateRequest:Te,$$testability:Ue,$timeout:Ve,$window:We,$$rAF:Xe,$$asyncCallback:Ye})}])}function bb(b){return b.replace(Ze,function(a,b,d,e){return e?d.toUpperCase():d}).replace($e,"Moz$1")}function Cc(b){b=b.nodeType;return b===
na||!b||9===b}function Dc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Pb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(af.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(bf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function S(b){if(b instanceof S)return b;var a;I(b)&&(b=P(b),a=!0);if(!(this instanceof
S)){if(a&&"<"!=b.charAt(0))throw Qb("nosel");return new S(b)}if(a){a=V;var c;b=(c=cf.exec(b))?[a.createElement(c[1])]:(c=Dc(b,a))?c.childNodes:[]}Ec(this,b)}function Rb(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Fc(b,a,c,d){if(z(d))throw Qb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),function(a){if(z(c)){var d=e[a];Va(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,
f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&wb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Fc(b)),delete wb[c],b.ng339=u))}function vb(b,a){var c=b.ng339,c=c&&wb[c];a&&!c&&(b.ng339=c=++df,c=wb[c]={events:{},data:{},handle:u});return c}function Sb(b,a,c){if(Cc(b)){var d=z(c),e=!d&&a&&!K(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];D(b,a)}}}
function Tb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Ub(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",P((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+P(a)+" "," ")))})}function Vb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=P(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",
P(c))}}function Ec(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Gc(b,a){return xb(b,"$"+(a||"ngController")+"Controller")}function xb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=y(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Hc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function Ic(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function ef(b,a){a=a||U;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Jc(b,a){var c=yb[a.toLowerCase()];return c&&Kc[ta(b)]&&c}function ff(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Lc[a]}function gf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(G(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ua(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Cd)():c+":"+b}function cb(b,
a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function hf(b){return(b=b.toString().replace(Mc,"").match(Nc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Wb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw I(c)&&c||(c=b.name||hf(b)),Ea("strictdi",c);a=b.toString().replace(Mc,"");a=a.match(Nc);r(a[1].split(jf),function(a){a.replace(kf,function(a,b,c){d.push(c)})})}b.$inject=d}}else y(b)?(a=b.length-1,pb(b[a],"fn"),
d=b.slice(0,a)):pb(b,"fn",!0);return d}function Lb(b,a){function c(a){return function(b,c){if(K(b))r(b,kc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(F(b)||y(b))b=s.instantiate(b);if(!b.$get)throw Ea("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=q.invoke(b,this,u,a);if(G(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],
f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=ab(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):F(a)?b.push(s.invoke(a)):y(a)?b.push(s.invoke(a)):pb(a,"module")}catch(e){throw y(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===k)throw Ea("cdep",a+" <- "+l.join(" <- "));
return b[a]}try{return l.unshift(a),b[a]=k,b[a]=c(a)}catch(e){throw b[a]===k&&delete b[a],e;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[];g=Wb(b,a,g);var h,l,q;l=0;for(h=g.length;l<h;l++){q=g[l];if("string"!==typeof q)throw Ea("itkn",q);k.push(f&&f.hasOwnProperty(q)?f[q]:d(q))}y(b)&&(b=b[h]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((y(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return K(a)||F(a)?a:d},get:d,annotate:Wb,
has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var k={},l=[],m=new cb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ca(b),!1)}),constant:c(function(a,b){La(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},s=p.$injector=
h(p,function(){throw Ea("unpr",l.join(" <- "));}),t={},q=t.$injector=h(t,function(a){var b=s.get(a+"Provider");return q.invoke(b.$get,b,u,a)});r(g(b),function(a){q.invoke(a||x)});return q}function ye(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;F(c)?c=c():mc(c)?(c=c[0],
c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):X(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||ef(function(){d.$evalAsync(g)})});return g}]}function Ye(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function lf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ya(){r(O,function(a){a()});E=b(ya,a)})()}function g(){h();k()}function h(){H=b.history.state;H=G(H)?null:H;pa(H,Q)&&(H=Q);Q=H}function k(){if(C!==m.url()||M!==H)C=m.url(),M=H,r(W,function(a){a(m.url(),H)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],s=b.location,
t=b.history,q=b.setTimeout,N=b.clearTimeout,n={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){r(O,function(a){a()});0===v?a():w.push(a)};var O=[],E;m.addPollFn=function(a){G(E)&&f(100,q);O.push(a);return a};var H,M,C=s.href,ea=a.find("base"),L=null;h();M=H;m.url=function(a,c,e){G(e)&&(e=null);s!==b.location&&(s=b.location);t!==b.history&&(t=b.history);if(a){var f=M===e;if(C===a&&(!d.history||
f))return m;var g=C&&Fa(C)===Fa(a);C=a;M=e;!d.history||g&&f?(g||(L=a),c?s.replace(a):s.href=a):(t[c?"replaceState":"pushState"](e,"",a),h(),M=H);return m}return L||s.href.replace(/%27/g,"'")};m.state=function(){return H};var W=[],ba=!1,Q=null;m.onUrlChange=function(a){if(!ba){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);ba=!0}W.push(a);return a};m.$$checkUrlChange=k;m.baseHref=function(){var a=ea.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var aa={},z="",da=m.baseHref();
m.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+da+";expires=Thu, 01 Jan 1970 00:00:00 GMT":I(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+da).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==z)for(z=p.cookie,d=z.split("; "),aa={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),aa[a]===u&&(aa[a]=l(e.substring(g+1))));
return aa}};m.defer=function(a,b){var c;v++;c=q(function(){delete n[c];e(a)},b||0);n[c]=!0;return c};m.defer.cancel=function(a){return n[a]?(delete n[a],N(a),e(x),!0):!1}}function Ae(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new lf(b,d,a,c)}]}function Be(){this.$get=function(){function b(b,d){function e(a){a!=p&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw A("$cacheFactory")("iid",b);var g=0,
h=D({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,s=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!G(b))return a in k||g++,k[a]=b,g>l&&this.remove(s.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==s&&(s=b.n);f(b.n,b.p);delete m[a]}delete k[a];g--},removeAll:function(){k={};g=0;m={};p=s=null},destroy:function(){m=
h=k=null;delete a[b]},info:function(){return D({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Se(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function uc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ka("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d=
{},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Dd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");I(a)?(Ob(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);F(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=
g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";K(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,kc(p));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var l=!0;this.debugInfoEnabled=
function(a){return z(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,q,N,n,v,w,O,E,H){function M(a,b){try{a.addClass(b)}catch(c){}}function C(a,b,c,d,e){a instanceof B||(a=B(a));r(a,function(b,c){b.nodeType==mb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=ea(a,b,a,c,d,e);C.$$addScopeClass(a);var g=null;return function(b,
c,d){Ob(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(U(g,B("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);C.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function ea(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,q,s,n,w;if(p)for(w=
Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(s=h.length;q<s;)k=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),C.$$addScopeInfo(B(k),l)):l=a,n=c.transcludeOnThisElement?L(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?L(a,b):null,c(f,l,k,d,n)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,q,s,p,n=0;n<a.length;n++){k=new X;l=W(a[n],[],k,0===n?d:u,e);(f=l.length?aa(l,a[n],k,b,c,null,[],[],f):null)&&f.scope&&C.$$addScopeClass(k.$$element);
k=f&&f.terminal||!(q=a[n].childNodes)||!q.length?null:ea(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(n,f,k),s=!0,p=p||f;f=null}return s?g:null}function L(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(b,c,g,h,k){var l=g.$attr,q;switch(b.nodeType){case na:da(c,wa(ta(b)),"E",h,k);for(var s,n,w,N=b.attributes,t=0,O=N&&N.length;t<
O;t++){var H=!1,v=!1;s=N[t];q=s.name;s=P(s.value);n=wa(q);if(w=Ga.test(n))q=Mb(n.substr(6),"-");var M=n.replace(/(Start|End)$/,""),E;a:{var C=M;if(d.hasOwnProperty(C)){E=void 0;for(var C=a.get(C+"Directive"),W=0,r=C.length;W<r;W++)if(E=C[W],E.multiElement){E=!0;break a}}E=!1}E&&n===M+"Start"&&(H=q,v=q.substr(0,q.length-5)+"end",q=q.substr(0,q.length-6));n=wa(q.toLowerCase());l[n]=q;if(w||!g.hasOwnProperty(n))g[n]=s,Jc(b,n)&&(g[n]=!0);S(b,c,s,n,w);da(c,n,"A",h,k,H,v)}b=b.className;if(I(b)&&""!==b)for(;q=
f.exec(b);)n=wa(q[2]),da(c,n,"C",h,k)&&(g[n]=P(q[3])),b=b.substr(q.index+q[0].length);break;case mb:T(c,b.nodeValue);break;case 8:try{if(q=e.exec(b.nodeValue))n=wa(q[1]),da(c,n,"M",h,k)&&(g[n]=P(q[2]))}catch(Q){}}c.sort(A);return c}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ka("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function Q(a,b,c){return function(d,
e,f,g,h){e=ba(e[0],b,c);return a(d,e,f,g,h)}}function aa(a,d,e,f,g,k,l,q,p){function w(a,b,c,d){if(a){c&&(a=Q(a,c,d));a.require=J.require;a.directiveName=ga;if(L===J||J.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=Q(b,c,d));b.require=J.require;b.directiveName=ga;if(L===J||J.$$isolateScope)b=Y(b,{isolateScope:!0});q.push(b)}}function O(a,b,c,d){var e,f="data",g=!1,k=c,l;if(I(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===
l[1]&&(f="inheritedData",k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw ka("ctreq",b,a);return e||null}y(b)&&(e=[],r(b,function(b){e.push(O(a,b,c,d))}));return e}function H(a,c,f,g,h){function k(a,b,c){var d;Ta(a)||(c=b,b=a,a=u);D&&(d=M);c||(c=D?W.parent():W);return h(a,b,d,c,Xb)}var p,w,t,v,M,db,W,Q;d===f?(Q=e,W=e.$$element):(W=B(f),Q=new X(W,e));L&&(v=c.$new(!0));h&&(db=k,db.$$boundTransclude=h);E&&(ea={},M={},r(E,function(a){var b=
{$scope:a===L||a.$$isolateScope?v:c,$element:W,$attrs:Q,$transclude:db};t=a.controller;"@"==t&&(t=Q[a.name]);b=n(t,b,!0,a.controllerAs);M[a.name]=b;D||W.data("$"+a.name+"Controller",b.instance);ea[a.name]=b}));if(L){C.$$addScopeInfo(W,v,!0,!(aa&&(aa===L||aa===L.$$originalDirective)));C.$$addScopeClass(W,!0);g=ea&&ea[L.name];var ba=v;g&&g.identifier&&!0===L.bindToController&&(ba=g.instance);r(v.$$isolateBindings=L.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":Q.$observe(e,
function(a){ba[d]=a});Q.$$observers[e].$$scope=c;Q[e]&&(ba[d]=b(Q[e])(c));break;case "=":if(f&&!Q[e])break;h=N(Q[e]);l=h.literal?pa:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw ka("nonassign",Q[e],L.name);};g=ba[d]=h(c);f=function(a){l(a,ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(Q[e],f):c.$watch(N(Q[e],f),null,h.literal);v.$on("$destroy",f);break;case "&":h=N(Q[e]),ba[d]=function(a){return h(c,a)}}})}ea&&
(r(ea,function(a){a()}),ea=null);g=0;for(p=l.length;g<p;g++)w=l[g],Z(w,w.isolateScope?v:c,W,Q,w.require&&O(w.directiveName,w.require,W,M),db);var Xb=c;L&&(L.template||null===L.templateUrl)&&(Xb=v);a&&a(Xb,f.childNodes,u,h);for(g=q.length-1;0<=g;g--)w=q[g],Z(w,w.isolateScope?v:c,W,Q,w.require&&O(w.directiveName,w.require,W,M),db)}p=p||{};for(var v=-Number.MAX_VALUE,M,E=p.controllerDirectives,ea,L=p.newIsolateScopeDirective,aa=p.templateDirective,da=p.nonTlbTranscludeDirective,x=!1,Na=!1,D=p.hasElementTranscludeDirective,
T=e.$$element=B(d),J,ga,A,Ga=f,za,R=0,S=a.length;R<S;R++){J=a[R];var zb=J.$$start,$=J.$$end;zb&&(T=ba(d,zb,$));A=u;if(v>J.priority)break;if(A=J.scope)J.templateUrl||(K(A)?(ya("new/isolated scope",L||M,J,T),L=J):ya("new/isolated scope",L,J,T)),M=M||J;ga=J.name;!J.templateUrl&&J.controller&&(A=J.controller,E=E||{},ya("'"+ga+"' controller",E[ga],J,T),E[ga]=J);if(A=J.transclude)x=!0,J.$$tlb||(ya("transclusion",da,J,T),da=J),"element"==A?(D=!0,v=J.priority,A=T,T=e.$$element=B(V.createComment(" "+ga+": "+
e[ga]+" ")),d=T[0],Ab(g,Ya.call(A,0),d),Ga=C(A,f,v,k&&k.name,{nonTlbTranscludeDirective:da})):(A=B(Rb(d)).contents(),T.empty(),Ga=C(A,f));if(J.template)if(Na=!0,ya("template",aa,J,T),aa=J,A=F(J.template)?J.template(T,e):J.template,A=Pc(A),J.replace){k=J;A=Pb.test(A)?Qc(U(J.templateNamespace,P(A))):[];d=A[0];if(1!=A.length||d.nodeType!==na)throw ka("tplrt",ga,"");Ab(g,T,d);S={$attr:{}};A=W(d,[],S);var mf=a.splice(R+1,a.length-(R+1));L&&z(A);a=a.concat(A).concat(mf);Oc(e,S);S=a.length}else T.html(A);
if(J.templateUrl)Na=!0,ya("template",aa,J,T),aa=J,J.replace&&(k=J),H=G(a.splice(R,a.length-R),T,e,g,x&&Ga,l,q,{controllerDirectives:E,newIsolateScopeDirective:L,templateDirective:aa,nonTlbTranscludeDirective:da}),S=a.length;else if(J.compile)try{za=J.compile(T,e,Ga),F(za)?w(null,za,zb,$):za&&w(za.pre,za.post,zb,$)}catch(ca){c(ca,va(T))}J.terminal&&(H.terminal=!0,v=Math.max(v,J.priority))}H.scope=M&&!0===M.scope;H.transcludeOnThisElement=x;H.elementTranscludeOnThisElement=D;H.templateOnThisElement=
Na;H.transclude=Ga;p.hasElementTranscludeDirective=D;return H}function z(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=D(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function da(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var s=0,n=e.length;s<n;s++)try{if(q=e[s],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)){if(k){var w={$$start:k,$$end:l};q=D(Object.create(q),w)}b.push(q);h=q}}catch(N){c(N)}}return h}function Oc(a,b){var c=b.$attr,d=
a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(M(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function G(a,b,c,d,e,f,g,h){var k=[],l,s,p=b[0],n=a.shift(),w=D({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),N=F(n.templateUrl)?
n.templateUrl(b,c):n.templateUrl,t=n.templateNamespace;b.empty();q(O.getTrustedResourceUrl(N)).then(function(q){var v,O;q=Pc(q);if(n.replace){q=Pb.test(q)?Qc(U(t,P(q))):[];v=q[0];if(1!=q.length||v.nodeType!==na)throw ka("tplrt",n.name,N);q={$attr:{}};Ab(d,b,v);var H=W(v,[],q);K(n.scope)&&z(H);a=H.concat(a);Oc(c,q)}else v=p,b.html(q);a.unshift(w);l=aa(a,v,c,e,b,n,f,g,h);r(d,function(a,c){a==v&&(d[c]=b[0])});for(s=ea(b[0].childNodes,e);k.length;){q=k.shift();O=k.shift();var E=k.shift(),C=k.shift(),
H=b[0];if(!q.$$destroyed){if(O!==p){var Q=O.className;h.hasElementTranscludeDirective&&n.replace||(H=Rb(v));Ab(E,B(O),H);M(B(H),Q)}O=l.transcludeOnThisElement?L(q,l.transclude,C):C;l(s,q,H,d,O)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=L(b,l.transclude,e)),l(s,b,c,d,a)))}}function A(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ya(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,
a,va(d));}function T(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&C.$$addBindingClass(a);return function(a,c){var e=c.parent();b||C.$$addBindingClass(e);C.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function U(a,b){a=R(a||"html");switch(a){case "svg":case "math":var c=V.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function za(a,b){if("srcdoc"==b)return O.HTML;
var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return O.RESOURCE_URL}function S(a,c,d,e,f){var h=b(d,!0);if(h){if("multiple"===e&&"select"===ta(a))throw ka("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(k.test(e))throw ka("nodomevents");l[e]&&(h=b(l[e],!0,za(a,e),g[e]||f))&&(l[e]=h(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(h,function(a,b){"class"===
e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function Ab(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());qa?(Nb=!0,qa.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];
b[0]=c;b.length=1}function Y(a,b){return D(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var X=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};X.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&E.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&E.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Rc(a,b);c&&
c.length&&E.addClass(this.$$element,c);(c=Rc(b,a))&&c.length&&E.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Jc(f,a),h=ff(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Mb(a,"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=H(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=P(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=
h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+H(P(h[q]),!0),g=g+(" "+P(h[q+1]));h=P(h[2*l]).split(/\s/);g+=H(P(h[0]),!0);2===h.length&&(g+=" "+P(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Va(e,
b)}}};var Na=b.startSymbol(),ga=b.endSymbol(),Pc="{{"==Na||"}}"==ga?oa:function(a){return a.replace(/\{\{/g,Na).replace(/}}/g,ga)},Ga=/^ngAttr[A-Z]/;C.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];y(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:x;C.$$addBindingClass=l?function(a){M(a,"ng-binding")}:x;C.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:x;C.$$addScopeClass=l?function(a,b){M(a,b?"ng-isolate-scope":"ng-scope")}:x;return C}]}
function wa(b){return bb(b.replace(nf,""))}function Rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Qc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&of.call(b,a,1);return b}function Ce(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");K(a)?D(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector",
"$window",function(d,e){function f(a,b,c,d){if(!a||!K(a.$scope))throw A("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,k,l){var m,p,s;k=!0===k;l&&I(l)&&(s=l);I(g)&&(l=g.match(c),p=l[1],s=s||l[3],g=b.hasOwnProperty(p)?b[p]:tc(h.$scope,p,!0)||(a?tc(e,p,!0):u),pb(g,p,!0));if(k)return k=(y(g)?g[g.length-1]:g).prototype,m=Object.create(k),s&&f(h,s,m,p||g.name),D(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:s});m=d.instantiate(g,h,p);s&&f(h,s,m,p||g.name);return m}}]}function De(){this.$get=
["$window",function(b){return B(b.document)}]}function Ee(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(I(b)){b=b.replace(pf,"");var c=a("Content-Type");if(c&&0===c.indexOf(Sc)&&b.trim()||qf.test(b)&&rf.test(b))b=oc(b)}return b}function Tc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=R(P(b.substr(0,e)));d=P(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Uc(b){var a=K(b)?b:u;return function(c){a||
(a=Tc(b));return c?(c=a[R(c)],void 0===c&&(c=null),c):a}}function Vc(b,a,c){if(F(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function He(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return K(a)&&"[object File]"!==Ja.call(a)&&"[object Blob]"!==Ja.call(a)?Za(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ua(Zb),put:ua(Zb),patch:ua(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return z(b)?
(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,k){function l(a){function c(a){var b=D({},a);b.data=a.data?Vc(a.data,a.headers,d.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}var d={method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},e=function(a){var c=b.headers,d=D({},a.headers),e,f,c=D({},c.common,c[R(a.method)]);a:for(e in c){a=R(e);for(f in d)if(R(f)===
a)continue a;d[e]=c[e]}(function(a){var b;r(a,function(c,d){F(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(d);return d}(a);if(!ha.isObject(a))throw A("$http")("badreq",a);D(d,a);d.headers=e;d.method=rb(d.method);var f=[function(a){e=a.headers;var d=Vc(a.data,Uc(e),a.transformRequest);G(d)&&r(e,function(a,b){"content-type"===R(b)&&delete e[b]});G(a.withCredentials)&&!G(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,d,e).then(c,c)},u],g=h.when(d);for(r(t,function(a){(a.request||
a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function m(c,f,k){function m(b,c,d,e){function f(){w(c,b,d,e)}M&&(200<=b&&300>b?M.put(r,[b,c,Tc(d),e]):M.remove(r));a?g.$applyAsync(f):(f(),g.$$phase||
g.$apply())}function w(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?E.resolve:E.reject)({data:a,status:b,headers:Uc(d),config:c,statusText:e})}function t(){var a=l.pendingRequests.indexOf(c);-1!==a&&l.pendingRequests.splice(a,1)}var E=h.defer(),H=E.promise,M,C,r=p(c.url,c.params);l.pendingRequests.push(c);H.then(t,t);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(M=K(c.cache)?c.cache:K(b.cache)?b.cache:s);if(M)if(C=M.get(r),z(C)){if(C&&F(C.then))return C.then(t,t),C;y(C)?w(C[1],
C[0],ua(C[2]),C[3]):w(C,200,{},"OK")}else M.put(r,H);G(C)&&((C=Wc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(k[c.xsrfHeaderName||b.xsrfHeaderName]=C),d(c.method,r,f,m,k,c.timeout,c.withCredentials,c.responseType));return H}function p(a,b){if(!b)return a;var c=[];Bd(b,function(a,b){null===a||G(a)||(y(a)||(a=[a]),r(a,function(a){K(a)&&(a=fa(a)?a.toISOString():Za(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var s=f("$http"),t=[];
r(c,function(a){t.unshift(I(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){r(arguments,function(a){l[a]=function(b,c){return l(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){l[a]=function(b,c,d){return l(D(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=b;return l}]}function sf(){return new U.XMLHttpRequest}function Ie(){this.$get=["$browser","$window","$document",function(b,a,c){return tf(b,sf,b.defer,a.angular.callbacks,
c[0])}]}function tf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,p,s,t){function q(){v&&
v();w&&w.abort()}function N(a,d,e,f,g){E!==u&&c.cancel(E);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(x)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==R(e)){var n="_"+(d.counter++).toString(36);d[n]=function(a){d[n].data=a;d[n].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+n),n,function(a,b){N(l,a,d[n].data,"",b);d[n]=x})}else{var w=a();w.open(e,h,!0);r(m,function(a,b){z(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?
w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);N(l,c,b,w.getAllResponseHeaders(),a)};e=function(){N(l,-1,null,null,"")};w.onerror=e;w.onabort=e;s&&(w.withCredentials=!0);if(t)try{w.responseType=t}catch(O){if("json"!==t)throw O;}w.send(k||null)}if(0<p)var E=c(q,p);else p&&F(p.then)&&p.then(q)}}function Fe(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse",
"$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,q){function N(c){return c.replace(l,b).replace(m,a)}function n(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(q&&!z(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Za(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}q=!!q;for(var v,w,O=0,E=[],H=[],M=f.length,C=[],r=[];O<M;)if(-1!=(v=f.indexOf(b,O))&&-1!=(w=f.indexOf(a,v+h)))O!==
v&&C.push(N(f.substring(O,v))),O=f.substring(v+h,w),E.push(O),H.push(c(O,n)),O=w+k,r.push(C.length),C.push("");else{O!==M&&C.push(N(f.substring(O)));break}if(t&&1<C.length)throw $b("noconcat",f);if(!g||E.length){var L=function(a){for(var b=0,c=E.length;b<c;b++){if(q&&G(a[b]))return;C[r[b]]=a[b]}return C.join("")};return D(function(a){var b=0,c=E.length,e=Array(c);try{for(;b<c;b++)e[b]=H[b](a);return L(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:E,$$watchDelegate:function(a,
b,c){var d;return a.$watchGroup(H,function(c,e){var f=L(c);F(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Ge(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,k,l){var m=a.setInterval,p=a.clearInterval,s=0,t=z(l)&&!l,q=(t?d:c).defer(),N=q.promise;k=z(k)?k:0;N.then(null,null,e);N.$$intervalId=
m(function(){q.notify(s++);0<k&&s>=k&&(q.resolve(s),p(N.$$intervalId),delete f[N.$$intervalId]);t||b.$apply()},h);f[N.$$intervalId]=q;return N}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Od(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,
lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",
fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function Xc(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=$(c.port)||uf[c.protocol]||null}function Yc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?
d.pathname.substring(1):d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function xa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function bc(b){return b.substr(0,Fa(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);Xc(b,this);this.$$parse=function(a){var b=xa(c,a);if(!I(b))throw eb("ipthprfx",a,c);Yc(b,this);this.$$path||
(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Kb(this.$$search),b=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=xa(b,d))!==u?(g=f,g=(f=xa(a,f))!==u?c+(xa("/",f)||f):b+g):(f=xa(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);Xc(b,this);this.$$parse=function(d){var e=xa(b,d)||
xa(c,d),e="#"==e.charAt(0)?xa(a,e):this.$$html5?e:"";if(!I(e))throw eb("ihshprfx",d,a);Yc(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Kb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):!1}}function Zc(b,
a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=xa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Kb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Bb(b){return function(){return this[b]}}function $c(b,a){return function(c){if(G(c))return this[b];this[b]=
a(c);this.$$compose();return this}}function Je(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return Ua(b)?(a.enabled=b,this):K(b)?(Ua(b.enabled)&&(a.enabled=b.enabled),Ua(b.requireBase)&&(a.requireBase=b.requireBase),Ua(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,
b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function h(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,l;l=d.baseHref();var m=d.url(),p;if(a.enabled){if(!l&&a.requireBase)throw eb("nobase");p=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?cc:Zc}else p=Fa(m),l=dc;k=new l(p,"#"+b);k.$$parseLinkUrl(m,m);k.$$state=d.state();var s=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=
B(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");K(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Aa(g.animVal).href);s.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,h)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),U.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=m&&d.url(k.absUrl(),!0);var t=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,
f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(t=!1,h(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=d.url(),b=d.state(),f=k.$$replace,l=a!==k.absUrl()||k.$$html5&&e.history&&b!==k.$$state;if(t||l)t=!1,c.$evalAsync(function(){var d=k.absUrl(),e=c.$broadcast("$locationChangeStart",d,a,k.$$state,b).defaultPrevented;k.absUrl()===d&&(e?(k.$$parse(a),k.$$state=b):(l&&g(d,f,b===k.$$state?null:
k.$$state),h(a,b)))});k.$$replace=!1});return k}]}function Ke(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ra(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function sa(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",a);if(b.children&&(b.nodeName||
b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function Oa(b,a,c,d){sa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=ra(a.shift(),d);var g=sa(b[e],d);g||(g={},b[e]=g);b=g}e=ra(a.shift(),d);sa(b[e],d);return b[e]=c}function Pa(b){return"constructor"==b}function ad(b,a,c,d,e,f,g){ra(b,f);ra(a,f);ra(c,f);ra(d,f);ra(e,f);var h=function(a){return sa(a,f)},k=g||Pa(b)?h:oa,l=g||Pa(a)?h:oa,m=g||Pa(c)?h:oa,p=g||Pa(d)?h:oa,
s=g||Pa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=k(h[b]);if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=m(h[c]);if(!d)return h;if(null==h)return u;h=p(h[d]);return e?null==h?u:h=s(h[e]):h}}function vf(b,a){return function(c,d){return b(c,d,sa,a)}}function bd(b,a,c){var d=a.expensiveChecks,e=d?wf:xf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ad(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;
do f=ad(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<h);return f};else{var k="";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var l=d;r(g,function(a,b){ra(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",l=!0;k+="if(s == null) return undefined;\ns="+e+";\n"});k+="return s;";a=new Function("s","l","eso","fe",k);a.toString=ca(k);l&&(a=vf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return Oa(a,b,c,b)};return e[b]=f}function fc(b){return F(b.valueOf)?
b.valueOf():yf.call(b)}function Le(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,
b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&fc(b));return h},b,c)}for(var l=[],s=0,m=e.length;s<m;s++)l[s]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&fc(k)}b&&(h=d(a));return h},b,c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;F(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&
e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){z(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;F(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){F(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==l&&c!==k?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),
f=b(e,c,d);return z(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var s={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,O;switch(typeof d){case "string":O=d=d.trim();var E=g?a:b;v=E[O];v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?t:s,v=new gc(g),v=(new fb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=m:w?(v=e(v),v.$$watchDelegate=v.literal?
l:k):v.inputs&&(v.$$watchDelegate=h),E[O]=v);return p(v,f);case "function":return p(d,f);default:return p(x,f)}}}]}function Ne(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return cd(function(a){b.$evalAsync(a)},a)}]}function Oe(){this.$get=["$browser","$exceptionHandler",function(b,a){return cd(function(a){b.defer(a)},a)}]}function cd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,
b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{F(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=A("$q",TypeError);d.prototype=
{then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,
this.$$reject);try{if(K(b)||F(b))d=b&&b.then;F(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,
e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(F(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{F(c)&&(d=c())}catch(e){return k(e,!1)}return d&&F(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!F(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;
a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=y(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Xe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||
b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Me(){var b=10,a=A("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",
function(e,f,g,h){function k(){this.$id=++kb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function s(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=
null}function t(){null===d&&(d=h.defer(function(){q.$apply(s)}))}k.prototype={constructor:k,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new k,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++kb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?
(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;F(b)||(h.fn=x);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Va(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=
!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!G(e)){if(K(e))if(Ra(e))for(f!==p&&(f=p,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==
g,d||h===g||(l++,f[b]=g);else{f!==s&&(f=s={},n=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>a)for(b in l++,f)e.hasOwnProperty(b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),p=[],s={},q=!0,n=0;return this.$watch(m,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(K(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Jb.call(e,
a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,m,t,v,r=b,L,u=[],z,Q;l("$digest");h.$$checkUrlChange();this===q&&null!==d&&(h.defer.cancel(d),s());c=null;do{v=!1;for(L=this;N.length;){try{Q=N.shift(),Q.scope.$eval(Q.expression)}catch(A){f(A)}c=null}a:do{if(m=L.$$watchers)for(t=m.length;t--;)try{if(e=m[t])if((g=e.get(L))!==(k=e.last)&&!(e.eq?pa(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))v=!0,c=e,e.last=e.eq?Ca(g,null):g,e.fn(g,k===p?g:k,L),5>r&&(z=4-r,u[z]||(u[z]=[]),
u[z].push({msg:F(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:k}));else if(e===c){v=!1;break a}}catch(B){f(B)}if(!(m=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(m=L.$$nextSibling);)L=L.$parent}while(L=m);if((v||N.length)&&!r--)throw q.$$phase=null,a("infdig",b,u);}while(v||N.length);for(q.$$phase=null;n.length;)try{n.shift()()}catch(da){f(da)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==
q){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=x;this.$on=this.$watch=this.$watchGroup=function(){return x};this.$$listeners={};this.$parent=this.$$nextSibling=
this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){q.$$phase||N.length||h.defer(function(){N.length&&q.$digest()});N.push({scope:this,expression:a})},$$postDigest:function(a){n.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){f(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);t()},$on:function(a,
b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Xa([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<
m;l++)if(d[l])try{d[l].apply(null,k)}catch(p){f(p)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Xa([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var q=new k,N=q.$$asyncQueue=[],n=q.$$postDigestQueue=[],v=q.$$applyAsyncQueue=[];return q}]}function Pd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=
function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function zf(b){if("self"===b)return b;if(I(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=dd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(lb(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function ed(b){var a=[];z(b)&&r(b,function(b){a.push(zf(b))});return a}function Qe(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&
(b=ed(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=ed(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Wc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&
(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=
Aa(e.toString()),p,s,t=!1;p=0;for(s=b.length;p<s;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,s=a.length;p<s;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ba("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Pe(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ha)throw Ba("iequirks");var d=ua(ma);d.isEnabled=function(){return b};
d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(ma,function(a,b){var c=R(b);d[bb("parse_as_"+c)]=function(b){return e(a,b)};d[bb("get_trusted_"+c)]=function(b){return f(a,b)};d[bb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Re(){this.$get=["$window",
"$document",function(b,a){var c={},d=$((/android (\d+)/.exec(R((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var p in k)if(l=h.exec(p)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!d||l&&m||(l=I(f.body.style.webkitTransition),m=I(f.body.style.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hasEvent:function(a){if("input"==a&&9==Ha)return!1;if(G(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$a(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Te(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;y(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){a=
a.data;d.totalPendingRequests--;b.put(e,a);return a},function(a){d.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Ue(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ha.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+dd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});
return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ve(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,k,l){var m=z(l)&&!l,p=(m?d:c).defer(),s=
p.promise;k=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[s.$$timeoutId]}m||b.$apply()},k);s.$$timeoutId=k;g[k]=p;return s}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Ha&&(Y.setAttribute("href",b),b=Y.href);Y.setAttribute("href",b);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?
Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function Wc(b){b=I(b)?Aa(b):b;return b.protocol===fd.protocol&&b.host===fd.host}function We(){this.$get=ca(U)}function Bc(b){function a(c,d){if(K(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",
gd);a("date",hd);a("filter",Af);a("json",Bf);a("limitTo",Cf);a("lowercase",Df);a("number",id);a("orderBy",jd);a("uppercase",Ef)}function Af(){return function(b,a,c){if(!y(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return ha.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Jb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=
(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
{$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function gd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){G(d)&&(d=a.CURRENCY_SYM);G(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:kd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function id(b){var a=b.NUMBER_FORMATS;
return function(b,d){return null==b?b:kd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function kd(b,a,c,d,e){if(!isFinite(b)||K(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?(g="0",b=0):(h=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(ld)[1]||"").length;G(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(ld);
g=b[0];b=b[1]||"";var m=0,p=a.lgSize,s=a.gSize;if(g.length>=p+s)for(m=g.length-p,l=0;l<m;l++)0===(m-l)%s&&0!==l&&(h+=c),h+=g.charAt(l);for(l=m;l<g.length;l++)0===(g.length-l)%p&&0!==l&&(h+=c),h+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}k.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return k.join("")}function Cb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+
b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Cb(e,a,d)}}function Db(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function md(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function nd(b){return function(a){var c=md(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Cb(a,b)}}function hd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:
a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;I(c)&&(c=Ff.test(c)?$(c):a(c));X(c)&&(c=new Date(c));if(!fa(c))return c;
for(;e;)(l=Gf.exec(e))?(h=Xa(h,l,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){k=Hf[a];g+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Bf(){return function(b){return Za(b,!0)}}function Cf(){return function(b,a){X(b)&&(b=b.toString());if(!y(b)&&!I(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):$(a);if(I(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):
"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function jd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(fa(a)&&fa(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=y(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||
oa;if(I(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var l=d();return e(function(a,b){return f(a[l],b[l])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return Ya.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){F(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function od(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=
b.parent().controller("form")||Eb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=
b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Va(g,a)};pd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Va(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,Fb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=
function(){d.setClass(b,Qa,Fb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var g=a[0].placeholder,h={},k=R(a[0].type);if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",
function(){l=!1;m()})}var m=function(b){if(!l){var e=a.val(),f=b&&b.type;Ha&&"input"===(b||h).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===k||c.ngTrim&&"false"===c.ngTrim||(e=P(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",m);else{var p,s=function(a){p||(p=f.defer(function(){m(a);p=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||s(a)});if(e.hasEvent("paste"))a.on("paste cut",
s)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Gb(b,a){return function(c,d){var e,f;if(fa(c))return c;if(I(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(If.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,
function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,g,h,k,l,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return z(a)?fa(a)?a:c(a):u}qd(e,f,g,h);gb(e,f,g,h,k,l);var t=h&&h.$options&&h.$options.timezone,q;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,q),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});
h.$formatters.push(function(a){if(a&&!fa(a))throw Hb("datefmt",a);if(p(a)){if((q=a)&&"UTC"===t){var b=6E4*q.getTimezoneOffset();q=new Date(q.getTime()+b)}return m("date")(a,d,t)}q=null;return""});if(z(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||G(r)||c(a)>=r};g.$observe("min",function(a){r=s(a);h.$validate()})}if(z(g.max)||g.ngMax){var n;h.$validators.max=function(a){return!p(a)||G(n)||c(a)<=n};g.$observe("max",function(a){n=s(a);h.$validate()})}}}function qd(b,a,c,d){(d.$$hasNativeValidators=
K(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function rd(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw A("ngModel")("constexpr",c,d);return b(a)}return e}function pd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Mb(b,"-"):"";a(ib+b,!0===c);a(sd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,k=b.parentForm,l=b.$animate;f[sd]=!(f[ib]=e.hasClass(ib));
d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),td(d.$pending)&&(d.$pending=u));Ua(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(ud,!0),d.$valid=d.$invalid=u,c("",null)):(a(ud,!1),d.$valid=td(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)}}function td(b){if(b)for(var a in b)return!1;
return!0}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!y(a)){if(I(a))return a.split(" ");if(K(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});
g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!m){var t=k(l,1);h.$addClass(t)}else if(!pa(b,m)){var q=e(m),t=d(l,q),l=d(q,l),t=k(t,1),l=k(l,-1);t&&t.length&&c.addClass(g,t);l&&l.length&&c.removeClass(g,l)}}m=ua(b)}var m;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}
var Jf=/^\/(.+)\/([a-z]*)$/,R=function(b){return I(b)?b.toLowerCase():b},Jb=Object.prototype.hasOwnProperty,rb=function(b){return I(b)?b.toUpperCase():b},Ha,B,qa,Ya=[].slice,of=[].splice,Kf=[].push,Ja=Object.prototype.toString,Wa=A("ng"),ha=U.angular||(U.angular={}),ab,kb=0;Ha=V.documentMode;x.$inject=[];oa.$inject=[];var y=Array.isArray,P=function(b){return I(b)?b.trim():b},dd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},$a=function(){if(z($a.isActive_))return $a.isActive_;
var b=!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return $a.isActive_=b},ob=["ng-","data-ng-","ng:","x-ng-"],Jd=/[A-Z]/g,sc=!1,Nb,na=1,mb=3,Nd={full:"1.3.5",major:1,minor:3,dot:5,codeName:"cybernetic-mercantilism"};S.expando="ng339";var wb=S.cache={},df=1;S._data=function(b){return this.cache[b[this.expando]]||{}};var Ze=/([\:\-\_]+(.))/g,$e=/^moz([A-Z])/,Lf={mouseleave:"mouseout",mouseenter:"mouseover"},Qb=A("jqLite"),cf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
Pb=/<|&#?\w+;/,af=/<([\w:]+)/,bf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=S.prototype={ready:function(b){function a(){c||(c=
!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(U).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:Kf,sort:[].sort,splice:[].splice},yb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){yb[R(b)]=b});var Kc={};r("input select option textarea button form details".split(" "),function(b){Kc[b]=
!0});var Lc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Sb,removeData:ub},function(b,a){S[a]=b});r({data:Sb,inheritedData:xb,scope:function(b){return B.data(b,"$scope")||xb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Gc,injector:function(b){return xb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Tb,css:function(b,
a,c){a=bb(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=R(a);if(yb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||x).specified?d:u;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(G(b)){var d=a.nodeType;return d===na||d===mb?a.textContent:""}a.textContent=b}
b.$dv="";return b}(),val:function(b,a){if(G(a)){if(b.multiple&&"select"===ta(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(G(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Hc},function(b,a){S.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Hc&&(2==b.length&&b!==Tb&&b!==Gc?a:d)===u){if(K(a)){for(e=0;e<g;e++)if(b===Sb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:ub,on:function a(c,d,e,f){if(z(f))throw Qb("onargs");if(Cc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=gf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Lf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,
h,!1),l=f[d]);l.push(e)}}},off:Fc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new S(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Ic,detach:function(a){Ic(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new S(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Vb,removeClass:Ub,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=
d;G(f)&&(f=!Tb(a,c));(f?Vb:Ub)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Rb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:x,type:g,target:a},c.type&&(e=D(e,c)),c=ua(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){S.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<k;h++)G(g)?(g=a(this[h],c,e,f),z(g)&&(g=B(g))):Ec(g,a(this[h],c,e,f));return z(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});cb.prototype={put:function(a,
c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Nc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,jf=/,/,kf=/^\s*(_?)(\S+?)\1\s*$/,Mc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=A("$injector");Lb.$$annotate=Wb;var Mf=A("$animate"),ze=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Mf("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):
!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function k(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ha.isObject(c)){var d=D(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return k()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return k()},leave:function(a,c){a.remove();return k()},move:function(a,c,d,e){return this.enter(a,
c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=I(c)?c:y(c)?c.join(" "):"";r(a,function(a){Vb(a,c)});l(a,d);return k()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=I(c)?c:y(c)?c.join(" "):"";r(a,function(a){Ub(a,c)});l(a,d);return k()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ha.extend(m.options||{},e)):
(m={classes:{},options:e},l=!0);e=m.classes;c=y(c)?c:c.split(" ");d=y(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return k()},enabled:x,cancel:x}}]}],ka=A("$compile");
uc.$inject=["$provide","$$sanitizeUriProvider"];var nf=/^((?:x|data)[\:\-_])/i,Sc="application/json",Zb={"Content-Type":Sc+";charset=utf-8"},qf=/^\s*(\[|\{[^\{])/,rf=/[\}\]]\s*$/,pf=/^\)\]\}',?\n/,$b=A("$interpolate"),Nf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,uf={http:80,https:443,ftp:21},eb=A("$location"),Of={$$html5:!1,$$replace:!1,absUrl:Bb("$$absUrl"),url:function(a){if(G(a))return this.$$url;var c=Nf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||
"");this.hash(c[5]||"");return this},protocol:Bb("$$protocol"),host:Bb("$$host"),port:Bb("$$port"),path:$c("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||X(a))a=a.toString(),this.$$search=qc(a);else if(K(a))a=Ca(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw eb("isrcharg");break;default:G(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();
return this},hash:$c("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([Zc,dc,cc],function(a){a.prototype=Object.create(Of);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw eb("nostate");this.$$state=G(c)?null:c;return this}});var la=A("$parse"),Pf=Function.prototype.call,Qf=Function.prototype.apply,Rf=Function.prototype.bind,Ib=ia();r({"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Ib[c]=a});Ib["this"]=function(a){return a};Ib["this"].sharedGetter=!0;var jb=D(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===
e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Sf={n:"\n",f:"\f",r:"\r",t:"\t",
v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=
a+this.peek(),d=c+this.peek(2),e=jb[c],f=jb[d];jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||
"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=R(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==
d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Sf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,
value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var fb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};fb.ZERO=D(function(){return 0},{sharedGetter:!0,constant:!0});fb.prototype={constructor:fb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),
this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+
1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);
var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=jb[a];return D(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=jb[c];return D(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;
return Ib[a]||bd(a,this.options,this.text)},constant:function(){var a=this.consume().value;return D(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),
d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return D(function(f,h){var k=a(f,h);if(e){e[0]=k;for(k=d.length;k--;)e[k+1]=d[k](f,h);return c.apply(u,e)}return c(k)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",
d),c=this.ternary(),D(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return D(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),c;if(c=
this.expect("&&"))a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.text,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.text,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=
this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(fb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.consume().text,e=bd(d,this.options,c);return D(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return Oa(h,d,g,c)}})},objectIndex:function(a){var c=
this.text,d=this.expression();this.consume("]");return D(function(e,f){var g=a(e,f),h=d(e,f);ra(h,c);return g?sa(g[h],c):u},{assign:function(e,f,g){var h=ra(d(e,g),c);(g=sa(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):g,l=a(g,h,k)||x;if(f)for(var m=d.length;m--;)f[m]=sa(d[m](g,h),e);sa(k,
e);if(l){if(l.constructor===l)throw la("isecfn",e);if(l===Pf||l===Qf||l===Rf)throw la("isecff",e);}k=l.apply?l.apply(k,f):l(f[0],f[1],f[2],f[3],f[4]);return sa(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==
this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return D(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var xf=ia(),wf=ia(),yf=Object.prototype.valueOf,Ba=A("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},ka=A("$compile"),Y=V.createElement("a"),fd=Aa(U.location.href);Bc.$inject=["$provide"];gd.$inject=["$locale"];id.$inject=["$locale"];var ld=".",Hf={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:Db("Month"),MMM:Db("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:Db("Day"),EEE:Db("Day",
!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Cb(Math[0<a?"floor":"ceil"](a/60),2)+Cb(Math.abs(a%60),2))},ww:nd(2),w:nd(1)},Gf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Ff=/^\-?\d+$/;hd.$inject=["$locale"];var Df=ca(R),Ef=ca(rb);jd.$inject=["$parse"];var Qd=ca({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===
Ja.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),sb={};r(yb,function(a,c){if("multiple"!=a){var d=wa("ng-"+c);sb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Lc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Jf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,
a)})}}}});r(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ja.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ha&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Eb={$addControl:x,$$renameControl:function(a,c){a.$name=c},$removeControl:x,$setValidity:x,$setDirty:x,$setPristine:x,$setSubmitted:x};od.$inject=["$element",
"$attrs","$scope","$animate","$interpolate"];var vd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:od,compile:function(a){a.addClass(Qa).addClass(ib);return{pre:function(a,d,g,h){if(!("action"in g)){var k=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",k,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",k,!1)},0,!1)})}var l=h.$$parentForm,m=h.$name;
m&&(Oa(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(Oa(a,m,u,m),m=c,Oa(a,m,h,m),l.$$renameControl(h,m))}));d.on("$destroy",function(){l.$removeControl(h);m&&Oa(a,m,u,m);D(h,Eb)})}}}}}]},Rd=vd(),de=vd(!0),If=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Tf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Uf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Vf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
wd=/^(\d{4})-(\d{2})-(\d{2})$/,xd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,yd=/^(\d{4})-(\d\d)$/,zd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Wf=/(\s+|^)default(\s+|$)/,Hb=new A("ngModel"),Ad={text:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e)},date:hb("date",wd,Gb(wd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",xd,Gb(xd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",zd,Gb(zd,["HH","mm","ss","sss"]),
"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(fa(a))return a;if(I(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=md(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,h,k)}}return NaN},"yyyy-Www"),month:hb("month",yd,Gb(yd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){qd(a,c,d,e);gb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Vf.test(a)?
parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!X(a))throw Hb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||G(h)||a>=h};d.$observe("min",function(a){z(a)&&!X(a)&&(a=parseFloat(a,10));h=X(a)&&!isNaN(a)?a:u;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||G(k)||a<=k};d.$observe("max",function(a){z(a)&&!X(a)&&(a=parseFloat(a,10));k=X(a)&&!isNaN(a)?a:u;e.$validate()})}},
url:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Tf.test(d)}},email:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Uf.test(d)}},radio:function(a,c,d,e){G(d.name)&&c.attr("name",++kb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",
e.$render)},checkbox:function(a,c,d,e,f,g,h,k){var l=rd(k,a,"ngTrueValue",d.ngTrueValue,!0),m=rd(k,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return pa(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:x,button:x,submit:x,reset:x,file:x},vc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",
require:["?ngModel"],link:{pre:function(f,g,h,k){k[0]&&(Ad[R(h.type)]||Ad.text)(f,g,h,k[0],c,a,d,e)}}}}],ib="ng-valid",sd="ng-invalid",Qa="ng-pristine",Fb="ng-dirty",ud="ng-pending",Xf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,k,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=
[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),s=p.assign,t=p,q=s,N=null,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);F(d)&&(d=c(a));return d};q=function(a,c){F(p(a))?g(a,{$$$p:n.$modelValue}):s(a,n.$modelValue)}}else if(!p.assign)throw Hb("nonassign",
d.ngModel,va(e));};this.$render=x;this.$isEmpty=function(a){return G(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Eb,w=0;pd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Fb);g.addClass(e,Qa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=!1;g.removeClass(e,Qa);g.addClass(e,Fb);v.$setDirty()};this.$setUntouched=function(){n.$touched=!1;
n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!X(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;n.$$runValidators(n.$error[n.$$parserName||"parse"]?!1:u,a,n.$$lastCommittedViewValue,
function(f){e||c===f||(n.$modelValue=f?a:u,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!F(k.then))throw Hb("$asyncValidators",k);h(g,u);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},
x):k(!0)}function h(a,c){m===w&&n.$setValidity(a,c)}function k(a){m===w&&e(a)}w++;var m=w;(function(a){var c=n.$$parserName||"parse";if(a===u)h(c,null);else if(h(c,a),!a)return r(n.$validators,function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(N);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};
this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue,d=c,e=G(d)?u:!0;if(e)for(var f=0;f<n.$parsers.length;f++)if(d=n.$parsers[f](d),G(d)){e=!1;break}X(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=t(a));var g=n.$modelValue,h=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=d;h&&(n.$modelValue=d,n.$modelValue!==g&&n.$$writeModelToScope());n.$$runValidators(e,d,c,function(a){h||(n.$modelValue=a?d:u,n.$modelValue!==g&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){q(a,
n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&z(e.debounce)&&(e=e.debounce,X(e)?d=e:X(e[c])?d=e[c]:X(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){n.$commitViewValue()},d):k.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=
t(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;for(var d=n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=f,n.$render(),n.$$runValidators(u,c,f,x))}return c})}],se=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Xf,priority:1,compile:function(c){c.addClass(Qa).addClass("ng-untouched").addClass(ib);return{pre:function(a,c,f,g){var h=g[0],k=g[1]||Eb;h.$$setOptions(g[2]&&g[2].$options);
k.$addControl(h);f.$observe("name",function(a){h.$name!==a&&k.$$renameControl(h,a)});a.$on("$destroy",function(){k.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],ue=ca({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},wc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw A("ngPattern")("noregexp",g,a,va(c));f=a||u;e.$validate()});e.$validators.pattern=
function(a){return e.$isEmpty(a)||G(f)||f.test(a)}}}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=$(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=$(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||
c.length>=f}}}}},te=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?P(f):f;e.$parsers.push(function(a){if(!G(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?P(a):a)});return c}});e.$formatters.push(function(a){return y(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},Yf=/^(true|false|\d+)$/,ve=function(){return{restrict:"A",priority:100,compile:function(a,c){return Yf.test(c.ngValue)?
function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},we=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=P(this.$options.updateOn.replace(Wf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Wd=["$compile",function(a){return{restrict:"AC",
compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],Yd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],Xd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",
compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Zd=ic("",!0),ae=ic("Odd",0),$d=ic("Even",1),be=Ia({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ce=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ac={},Zf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=wa("ng-"+a);Ac[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};Zf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var fe=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=V.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=qb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],ge=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ha.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,s,r,q){var u=0,n,v,w,O=function(){v&&(v.remove(),v=null);n&&(n.$destroy(),
n=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!z(l)||l&&!f.$eval(l)||c()},s=++u;e?(a(e,!0).then(function(a){if(s===u){var c=f.$new();r.template=a;a=q(c,function(a){O();d.enter(a,null,g).then(h)});n=c;w=a;n.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){s===u&&(O(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(O(),r.template=null)})}}}}],xe=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Dc(f.template,V).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],he=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ie=Ia({terminal:!0,priority:1E3}),je=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function k(a){g.text(a||"")}var l=
h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,s=f.$eval(m)||{},t={},m=c.startSymbol(),q=c.endSymbol(),u=m+l+"-"+p+q,n=ha.noop,v;r(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+R(d[2]),s[d]=g.attr(h.$attr[c]))});r(s,function(a,e){t[e]=c(a.replace(d,u))});f.$watch(l,function(c){c=parseFloat(c);var d=isNaN(c);d||c in s||(c=a.pluralCat(c-p));c===v||d&&isNaN(v)||(n(),n=f.$watch(t[c],k),v=c)})}}}],ke=["$parse","$animate",function(a,c){var d=A("ngRepeat"),e=function(a,c,d,e,l,m,p){a[d]=
e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=V.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var m=l[1],p=l[2],s=l[3],t=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
if(!l)throw d("iidexp",m);var q=l[3]||l[1],z=l[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(s)))throw d("badident",s);var n,v,w,A,E={$id:Ma};t?n=a(t):(w=function(a,c){return Ma(c)},A=function(a){return a});return function(a,f,g,l,m){n&&(v=function(c,d,e){z&&(E[z]=c);E[q]=d;E.$index=e;return n(a,E)});var t=ia();a.$watchCollection(p,function(g){var l,n,p=f[0],C,E=ia(),D,x,G,T,y,F,I;s&&(a[s]=g);if(Ra(g))y=g,n=v||
w;else{n=v||A;y=[];for(I in g)g.hasOwnProperty(I)&&"$"!=I.charAt(0)&&y.push(I);y.sort()}D=y.length;I=Array(D);for(l=0;l<D;l++)if(x=g===y?l:y[l],G=g[x],T=n(x,G,l),t[T])F=t[T],delete t[T],E[T]=F,I[l]=F;else{if(E[T])throw r(I,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,T,G);I[l]={id:T,scope:u,clone:u};E[T]=!0}for(C in t){F=t[C];T=qb(F.clone);c.leave(T);if(T[0].parentNode)for(l=0,n=T.length;l<n;l++)T[l].$$NG_REMOVED=!0;F.scope.$destroy()}for(l=0;l<D;l++)if(x=g===y?l:y[l],G=g[x],F=I[l],F.scope){C=
p;do C=C.nextSibling;while(C&&C.$$NG_REMOVED);F.clone[0]!=C&&c.move(qb(F.clone),null,B(p));p=F.clone[F.clone.length-1];e(F.scope,l,q,G,z,x,D)}else m(function(a,d){F.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(p));p=f;F.clone=a;E[F.id]=F;e(F.scope,l,q,G,z,x,D)});t=E})}}}}],le=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ee=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],me=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ne=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],m=function(a,c){return function(){a.splice(c,
1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var q=qb(h[d].clone);l[d].$destroy();(k[d]=a.leave(q)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=V.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],oe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),pe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),re=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw A("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),Sd=["$templateCache",function(a){return{restrict:"E",
terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],$f=A("ngOptions"),qe=ca({restrict:"A",terminal:!0}),Td=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:x};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,
c,d){var k=this,l={},m=e,p;k.databound=d.ngModel;k.init=function(a,c,d){m=a;p=d};k.addOption=function(c,d){La(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue===a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};
c.$on("$destroy",function(){k.renderUnknownOption=x})}],link:function(e,g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(E.parent()&&E.remove(),c.val(a),""===a&&n.prop("selected",!0)):G(a)&&n?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){E.parent()&&E.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new cb(d.$viewValue);r(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){pa(e,
d.$viewValue)||(e=ua(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){U[x]=d;G&&(U[G]=c);return a(e,U)}function k(a){var c;if(t)if(K&&y(a)){c=new cb([]);for(var d=0;d<a.length;d++)c.put(h(K,null,a[d]),!0)}else c=new cb(a);else K&&(a=h(K,null,a));return function(d,e){var f;f=K?K:D?D:H;return t?z(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(n),
v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function n(){v=!1;var a={"":[]},c=[""],d,l,p,q,u;p=g.$viewValue;q=M(e)||[];var D=G?Object.keys(q).sort():q,x,B,H,y,Q={};u=k(p);var P=!1,V,X;R={};for(y=0;H=D.length,y<H;y++){x=y;if(G&&(x=D[y],"$"===x.charAt(0)))continue;B=q[x];d=h(I,x,B)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=u(x,B);P=P||d;B=h(E,x,B);B=z(B)?B:"";X=K?K(e,U):G?D[y]:y;K&&(R[X]=x);l.push({id:X,label:B,selected:d})}t||(A||null===p?a[""].unshift({id:"",label:"",selected:!P}):P||a[""].unshift({id:"?",
label:"",selected:!0}));x=0;for(D=c.length;x<D;x++){d=c[x];l=a[d];S.length<=x?(p={element:F.clone().attr("label",d),label:l.label},q=[p],S.push(q),f.append(p.element)):(q=S[x],p=q[0],p.label!=d&&p.element.attr("label",p.label=d));P=null;y=0;for(H=l.length;y<H;y++)d=l[y],(u=q[y+1])?(P=u.element,u.label!==d.label&&(m(Q,u.label,!1),m(Q,d.label,!0),P.text(u.label=d.label),P.prop("label",u.label)),u.id!==d.id&&P.val(u.id=d.id),P[0].selected!==d.selected&&(P.prop("selected",u.selected=d.selected),Ha&&P.prop("selected",
u.selected))):(""===d.id&&A?V=A:(V=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),q.push(u={element:V,label:d.label,id:d.id,selected:d.selected}),m(Q,d.label,!0),P?P.after(V):p.element.append(V),P=V);for(y++;q.length>y;)d=q.pop(),m(Q,d.label,!1),d.element.remove()}for(;S.length>x;){l=S.pop();for(y=1;y<l.length;++y)m(Q,l[y].label,!1);l[0].element.remove()}r(Q,function(a,c){0<a?s.addOption(c):0>a&&s.removeOption(c)})}var p;if(!(p=q.match(d)))throw $f("iexp",
q,va(f));var E=c(p[2]||p[1]),x=p[4]||p[6],B=/ as /.test(p[0])&&p[1],D=B?c(B):null,G=p[5],I=c(p[3]||""),H=c(p[2]?p[1]:x),M=c(p[7]),K=p[8]?c(p[8]):null,R={},S=[[{element:f,label:""}]],U={};A&&(a(A)(e),A.removeClass("ng-scope"),A.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=M(e)||[],c;if(t)c=[],r(f.val(),function(d){d=K?R[d]:d;c.push("?"===d?u:""===d?null:h(D?D:H,d,a[d]))});else{var d=K?R[f.val()]:f.val();c="?"===d?u:""===d?null:h(D?D:H,d,a[d])}g.$setViewValue(c);n()})});g.$render=
n;e.$watchCollection(M,l);e.$watchCollection(function(){var a=M(e),c;if(a&&y(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(E,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(E,d,a[d]));return c},l);t&&e.$watchCollection(function(){return g.$modelValue},l)}if(k[1]){var s=k[0];k=k[1];var t=h.multiple,q=h.ngOptions,A=!1,n,v=!1,w=B(V.createElement("option")),F=B(V.createElement("optgroup")),E=w.clone();h=0;for(var x=g.children(),D=x.length;h<D;h++)if(""===x[h].value){n=A=x.eq(h);
break}s.init(k,A,E);t&&(k.$isEmpty=function(a){return!a||0===a.length});q?p(e,g,k):t?m(e,g,k):l(e,g,k,s)}}}}],Vd=["$interpolate",function(a){var c={addOption:x,removeOption:x};return{restrict:"E",priority:100,compile:function(d,e){if(G(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,
d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Ud=ca({restrict:"E",terminal:!1});U.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Kd(),Md(ha),B(V).ready(function(){Gd(V,rc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

// Declare app level module which depends on filters, and services
var amCompanion = angular.module('amCompanion', [
    'ngCookies','ngRoute','ngAnimate','ngTouch', 'igTruncate','angular-progress-arc','rzModule',"oitozero.ngSweetAlert"
]);
amCompanion.directive('amcHeader', function() {
    'use strict';
    return {
        restrict: 'E',
        controller:"AmcHeaderController",
        templateUrl: 'partials/utils/amc_header.html',
        scope:
        {
            homeDisplay:"=",
            libelle:"=",
            goBackHandler:"&",
            editMode:"="
        }
    };
});

/* Controllers */
amCompanion.controller('AmcHeaderController',
    [ "$scope","$timeout","RoutesService" ,
        function($scope,$timeout, RoutesService){

            'use strict';
            $scope.cancelColor = "#FFFFFF";
            $scope.backColor = "#FFFFFF";
            $scope.editColor = "#FFFFFF";
            $scope.validateColor = "#FFFFFF";

            /**
             * Cette fonction déconnecte l'utilisateur
             */
            $scope.disconnect = function()
            {
                RoutesService.disconnect();
            };

            $scope.goBack = function()
            {
                $scope.goBackHandler();
                $scope.backColor = "#2980b9";
                $timeout(function(){$scope.backColor = "#FFFFFF";},100);
            };

            $scope.toggleEditMode = function()
            {
                $scope.$emit("startEdit");
                $scope.editColor = "#2980b9";
                $timeout(function(){$scope.editColor = "#FFFFFF";},100);
            };

            $scope.validateEditMode = function()
            {
                $scope.$emit("validateEdit");
                $scope.validateColor = "#2980b9";
                $timeout(function(){$scope.validateColor = "#FFFFFF";},100);
            };

            $scope.cancelEditMode = function()
            {
                $scope.$emit("cancelEdit");
                $scope.cancelColor = "#2980b9";
                $timeout(function(){$scope.cancelColor = "#FFFFFF";},100);
            };

        }]);


amCompanion.directive('embedEmployee', function() {
    'use strict';
    return {
        restrict: 'E',
        templateUrl: 'partials/embed/employee.html',
        controller:"EmbedEmployeeController",
        scope:
        {
            employee:"="
        }
    };
});


/* Controllers */
amCompanion.controller('EmbedEmployeeController',
    [ "$scope", "$filter","RoutesService",
        function($scope, $filter, RoutesService){
            'use strict';
            var lastLink = $filter("limitTo")($filter("orderBy")($scope.employee.Links, "Date", "reverse"), 1);
            if( lastLink.length > 0 )
            {
                $scope.lastLink = lastLink[0];
            }

            $scope.openEmployeeView = function()
            {
                RoutesService.loadEmployeeView($scope.employee);
            };

            if( $scope.employee.Objectives === undefined || $scope.employee.Objectives.length === 0 )
            {
                $scope.percentObjectives = 0;
            }
            else
            {
                var sum = 0;

                angular.forEach( $scope.employee.Objectives, function( objective )
                {
                    sum += (objective.progressionPercent/100) * (objective.ponderation);
                });

                //we round up the number to one decimal
                $scope.percentObjectives = Math.round( sum * 10 ) / 10;

                if( $scope.percentObjectives < 25 )
                {
                    $scope.objectiveColor = "danger";
                }
                else if( $scope.percentObjectives < 50 )
                {
                    $scope.objectiveColor = "warning";
                }
                else if( $scope.percentObjectives < 75 )
                {
                    $scope.objectiveColor = "success";
                }
                else
                {
                    $scope.objectiveColor = "info";
                }
            }
        }]);
/*
amCompanion.constant("urls", {
        login: "http://localhost:1337/login",
        employes: "http://localhost:1337/api/employees"
    }
);
*/
amCompanion.constant("urls", {
        login: "http://amcserver.cloudapp.net/login",
        employes: "http://amcserver.cloudapp.net/api/employees"
    }
);

amCompanion.constant("linkTypes",[
    "Restaurant",
    "Appel",
    "Mail",
    "Café",
    "Entretien"
]);

amCompanion.constant("linkTypesIcons",[
    {label:"Restaurant",icon:"glyphicon-cutlery"},
    {label:"Appel",icon:"glyphicon-earphone"},
    {label:"Mail",icon:"glyphicon-envelope"},
    {label:"Café",icon:""},
    {label:"Entretien",icon:""}
]);
//types : ['Restaurant', 'Appel', 'Mail', 'Café', 'Entretien']

/* Controllers */
amCompanion.controller('FullEmployeeController',[
    "$scope","$routeParams","$anchorScroll","AmcContextService","RoutesService","SweetAlert", function(
        $scope,$routeParams, $anchorScroll ,AmcContextService, RoutesService, SweetAlert){

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
        var percentColors = [
            { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
            { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
            { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];

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

        function initColors()
        {
            var i;
            $scope.progressColors = [];
            for ( i = 0 ; i < $scope.selectedEmployee.Objectives.length ; i++ )
            {
                $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.Objectives[i].ProgressionPercent/100);
            }
        }

        //init the page's context
        var promise = AmcContextService.initEmployees();
        promise.then(function(){
            AmcContextService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
            $scope.nomPrenom = $scope.getName();
            initColors();
        });

        $scope.getIcon = function( type )
        {
            var icon;

            if( type === "Mail" )
            {
                icon = "fa-envelope-o";
            }
            else if ( type === "Restaurant" )
            {
                icon = "fa-cutlery";
            }
            else if ( type === "Appel" )
            {
                icon = "fa-phone";
            }
            else if ( type === "Café" )
            {
                icon = "fa-coffee";
            }
            else if ( type === "Entretien" )
            {
                icon = "fa-calendar";
            }


            return icon;
        };

        /**
         * get the name of the employee clicked
         * @returns {string}
         */
        $scope.getName = function()
        {
            var str = "";
            if( $scope.selectedEmployee !== undefined )
            {
                str = $scope.selectedEmployee.FirstName + " " + $scope.selectedEmployee.LastName;
            }
            return str;
        };

        /**
         * This function allow to return to the home page
         */
        $scope.goBack = function()
        {
            RoutesService.loadHomeView();
        };

        /**
         * This is what happened when a link is clicked
         * @param link
         */
        $scope.showFullLink = function( link )
        {
            if( $scope.editMode === false)
            {
                RoutesService.loadLinkView( $scope.selectedEmployee, link );
            }
        };

        $scope.createNewObjective = function()
        {
            if( $scope.editMode === false) {
                RoutesService.loadObjectiveView($scope.selectedEmployee, "new");
            }
        };

        $scope.createNewLink = function()
        {
            if( $scope.editMode === false) {
                RoutesService.loadLinkView($scope.selectedEmployee, {DateTimestamp:"new"});
            }
        };

        $scope.showFullObjective = function( $index )
        {
            if( $scope.editMode === false) {
                RoutesService.loadObjectiveView($scope.selectedEmployee, $index);
            }
        };

        $scope.$on( "startEdit" , function()
        {
            $scope.selectedEmployeeBackUp = angular.copy($scope.selectedEmployee);
            $scope.editMode = true;
        });

        $scope.$on("cancelEdit",function()
        {
            $scope.selectedEmployee = $scope.selectedEmployeeBackUp;
            $scope.editMode = false;
        });

        $scope.$on("validateEdit",function()
        {
            if( $scope.selectedEmployeeBackUp.Objectives.length !== $scope.selectedEmployee.Objectives.length ||
                $scope.selectedEmployeeBackUp.Links.length !== $scope.selectedEmployee.Links.length)
            {
                SweetAlert.swal({
                        title: "Êtes vous sûr ?",
                        text: "Voulez vous supprimer ces données ?",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",confirmButtonText: "Oui",
                        cancelButtonText: "Annuler",
                        closeOnConfirm: true,
                        closeOnCancel: true},
                    function(){
                        AmcContextService.updateCurrentEmployee();
                        $scope.editMode = false;
                    });
            }
            else
            {
                $scope.editMode = false;
            }
        });

        $scope.deleteObjective = function($event, $index)
        {
            $scope.selectedEmployee.Objectives.splice($index, 1);
            $event.stopPropagation();
        };

        $scope.deleteLink = function($event, $index)
        {
            $scope.selectedEmployee.Links.splice($index, 1);
            $event.stopPropagation();
        };

    }]);


/* Controllers */
amCompanion.controller('FullHomeController',[
    "$scope","AmcContextService",
    function( $scope,AmcContextService ){
        'use strict';
        AmcContextService.initEmployees();
        $scope.employees = AmcContextService.getEmployees();
}]);

/* Controllers */
amCompanion.controller('FullLinkController',[
        "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService", "linkTypes","SweetAlert", function(
            $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService, linkTypes, SweetAlert){
            'use strict';

            $anchorScroll();
            $scope.editMode = true;
            $scope.newMode = false;
            $scope.selectedDate = undefined;
            $scope.selectedLinkBackUp = undefined;

            $scope.linkTypes = linkTypes;

            /**
             * This methods is passed in parameter to header, it allow to go back to employee view
             */
            $scope.goBack = function()
            {
                RoutesService.loadEmployeeView($scope.selectedEmployee);
            };

            $scope.changeSelectedDate = function()
            {
                if( !!$scope.selectedDate )
                {
                    $scope.selectedLink.DateTimestamp = $scope.selectedDate.getTime();
                    $scope.selectedLink.Date = JSON.stringify($scope.selectedDate);
                }

            };

            $scope.getName = function()
            {
                var employee = AmcContextService.getSelectedEmployee();
                var str = "";
                if( employee !== undefined )
                {
                    str = employee.FirstName + " " + employee.LastName;
                }
                return str;
            };

            var promise = AmcContextService.initEmployees();
            promise.then(function(){

                    AmcContextService.setSelectedEmployeeFromId($routeParams.id);
                    $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
                    $scope.nomPrenom = $scope.getName();
                    var currentLink;

                    if( $routeParams.timestamp === "new" )
                    {
                        var date = new Date();

                        $scope.selectedLink = {
                            Type:undefined,
                            DateTimestamp: date.getTime(),
                            Date: JSON.stringify(date),
                            Comment:""
                        };
                        $scope.newMode = true;
                        $scope.editMode = true;
                        $scope.nomPrenom = "Nouveau rendez-vous";

                        $scope.selectedDate = date;
                    }
                    else
                    {
                        for( var i = 0 ; i < $scope.selectedEmployee.Links.length ; i++ )
                        {
                            currentLink = $scope.selectedEmployee.Links[i];
                            if( currentLink.DateTimestamp === parseInt($routeParams.timestamp) )
                            {
                                $scope.selectedLink = currentLink;
                                $scope.selectedLinkBackUp = angular.copy($scope.selectedLink);
                                $scope.selectedDate = new Date($scope.selectedLink.Date);
                                $scope.selectedDateTimestamp = new Date($scope.selectedLink.DateTimestamp);
                            }
                        }

                        if( $scope.selectedLink === undefined )
                        {
                            RoutesService.loadEmployeeView($scope.selectedEmployee);
                        }

                    }
                }
            );

            $scope.$on("cancelEdit",function()
            {
                if( $scope.newMode )
                {
                    $scope.goBack();
                }
                else
                {

                    $scope.selectedLink.Type = $scope.selectedLinkBackUp.Type;
                    $scope.selectedLink.Date = $scope.selectedLinkBackUp.Date;
                    $scope.selectedLink.DateTimestamp = $scope.selectedLinkBackUp.DateTimestamp;
                    $scope.selectedLink.Comment = $scope.selectedLinkBackUp.Comment;
                    $scope.goBack();
                }

            });

            $scope.$on("validateEdit",function() {

                if( $scope.selectedLink.Date === undefined) {
                    SweetAlert.error("","Une date valide est requise");
                }
                else if( $scope.selectedLink.Type === undefined )
                {
                    SweetAlert.error("","Un lieu est requis");
                }
                else {

                    //If it's a new objective
                    if ($scope.newMode) {
                        $scope.selectedEmployee.Links.push($scope.selectedLink);
                        AmcContextService.updateCurrentEmployee();
                    }
                    //If the new validated objectif is not the same as the original
                    else if( $scope.selectedLink.Type !== $scope.selectedLinkBackUp.Type ||
                        $scope.selectedLink.DateTimestamp !== $scope.selectedLinkBackUp.DateTimestamp ||
                        $scope.selectedLink.Comment !== $scope.selectedLinkBackUp.Comment )
                    {
                        AmcContextService.updateCurrentEmployee();
                    }
                    //Go back
                    $scope.goBack();
                }
            });


        }
    ]
);

amCompanion.controller('FullLoginController',
    [ "$scope","$timeout","$location","AuthService",
        function($scope,$timeout,$location ,AuthService)
        {
            'use strict';

            /**
             * Cette méthode permet d'initialiser le bouton de connexion
             */
            $scope.resetButton = function()
            {
                $scope.buttonLabel = "Connexion";
                $scope.failed = false;
                $scope.success = false;
            };

            /**
             * Cette méthode redirige vers la page principale de l'application une fois connecté
             */
            $scope.redirectToHome = function ()
            {
                $location.path("/");
            };

            $scope.resetButton();

            /**
             * Cette fonction permet de connecter l'utilisateur
             */
            $scope.login = function()
            {
                $scope.loading = true;
                var promise = AuthService.login($scope.credentials);
                promise.then(function()
                {
                    $scope.loading = false;
                    $scope.success = true;
                    $scope.buttonLabel = "Succès";

                    $timeout($scope.redirectToHome, 1000);
                },function()
                {
                    $scope.buttonLabel = "Echec de la connexion";
                    $scope.failed = true;
                    $scope.loading = false;

                    $timeout($scope.resetButton, 2000);

                });

            };

        }
    ]
);


/* Controllers */
amCompanion.controller('FullObjectiveController',[
        "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService","SweetAlert", function(
            $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService, SweetAlert){

            'use strict';
            $anchorScroll();
            $scope.editMode = true;
            $scope.newMode = false;

            /**
             * This methods is passed in parameter to header, it allow to go back to employee view
             */
            $scope.goBack = function()
            {
                RoutesService.loadEmployeeView($scope.selectedEmployee);
            };

            $scope.getName = function()
            {
                var employee = AmcContextService.getSelectedEmployee();
                var str = "";
                if( employee !== undefined )
                {
                    str = employee.FirstName + " " + employee.LastName;
                }
                return str;
            };

            var promise = AmcContextService.initEmployees();
            promise.then(
                function()
                {
                    AmcContextService.setSelectedEmployeeFromId($routeParams.id);
                    $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
                    $scope.nomPrenom = $scope.getName();
                    if( $routeParams.index === "new" )
                    {
                        $scope.selectedObjective = {
                            ProgressionPercent:0,
                            ponderation:0
                        };
                        $scope.newMode = true;
                        $scope.editMode = true;
                        $scope.nomPrenom = "Nouvel Objectif";
                    }
                    else
                    {
                        $scope.selectedObjective = $scope.selectedEmployee.Objectives[$routeParams.index];
                        $scope.selectedObjectiveBack = angular.copy($scope.selectedObjective);
                    }

                }
            );

            $scope.$on("cancelEdit",function()
            {
                if( $scope.newMode )
                {
                    $scope.goBack();
                }
                else
                {
                    $scope.selectedObjective.Text = $scope.selectedObjectiveBack.Text;
                    $scope.selectedObjective.ProgressionPercent = $scope.selectedObjectiveBack.ProgressionPercent;
                    $scope.selectedObjective.ponderation = $scope.selectedObjectiveBack.ponderation;
                    $scope.goBack();
                }

            });

            $scope.$on("validateEdit",function() {

                if ($scope.selectedObjective.Text === undefined) {
                    SweetAlert.error("","Un intitulé est requis.");
                }
                else {

                    //If it's a new objective
                    if ($scope.newMode) {
                        $scope.selectedEmployee.Objectives.push($scope.selectedObjective);
                        AmcContextService.updateCurrentEmployee();
                    }
                    //If the new validated objectif is not the same as the original
                    else if( $scope.selectedObjective.Text !== $scope.selectedObjectiveBack.Text ||
                        $scope.selectedObjective.ProgressionPercent !== $scope.selectedObjectiveBack.ProgressionPercent ||
                        $scope.selectedObjective.ponderation !== $scope.selectedObjectiveBack.ponderation )
                    {
                        AmcContextService.updateCurrentEmployee();
                    }
                    //Go back
                    $scope.goBack();
                }
            });

        }
    ]
);


/* Controllers */
amCompanion.controller('RootController',[
    "$scope","$rootScope", "AmcContextService", function(
        $scope,$rootScope , AmcContextService){
        'use strict';
        $scope.updateStatus = AmcContextService.getUpdateStatus();

        $rootScope.$on("serverUpdateStarted",function(){
            $scope.updateStatus = AmcContextService.getUpdateStatus();
        });

        $scope.closeNotif = function(){
            AmcContextService.setUpdateStatus(0);
            $scope.updateStatus = 0;
        };

        $scope.sendRapport = function(){
            window.location.href = "mailto:sebastien.romain@gmail.com;nicolas.wlodarczyk@outlook.com?" +
                                    "subject=AMC Fail report" +
                                    "&body=Here the error"
            ;
            AmcContextService.setUpdateStatus(0);
            $scope.updateStatus = 0;
        };

    }]);



/**
 * Created by Sébastien on 18/05/2014.
 */
amCompanion.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider.when('/', {
        id:"home",
        templateUrl: 'partials/full/home.html',
        controller: 'FullHomeController'
    });

    $routeProvider.when('/employee/:id', {
        id:"employee",
        templateUrl: 'partials/full/employee.html',
        controller: 'FullEmployeeController'
    });

    $routeProvider.when('/link/:id/:timestamp', {
        id:"link",
        templateUrl: 'partials/full/link.html',
        controller: 'FullLinkController'
    });

    $routeProvider.when('/objective/:id/:index', {
        id:"link",
        templateUrl: 'partials/full/objective.html',
        controller: 'FullObjectiveController'
    });

    $routeProvider.when('/login', {
        id:"login",
        templateUrl: 'partials/full/login.html',
        controller: 'FullLoginController'
    });

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});
}]);

amCompanion.run(["$rootScope", "$location","RoutesService",
        function ($rootScope, $location, RoutesService ) {
            'use strict';
            $rootScope.$on('$routeChangeStart', function (event, next, current) {

                var mainContainer = angular.element(document.getElementById("am-companion"));

                mainContainer.removeClass("slide-right-view");
                mainContainer.removeClass("slide-left-view");
                mainContainer.removeClass("fade-view");

                if( ( current === undefined ||
                    current.$$route.id === "login" && next.$$route.id === "home" ) ||
                    ( current.$$route.id === "home" && next.$$route.id === "login" )  )
                {
                    mainContainer.addClass("fade-view");
                }
                else if( ( current.$$route.id === "home" && next.$$route.id === "employee" ) ||
                    ( current.$$route.id === "employee" && next.$$route.id === "link" ) )
                {
                    mainContainer.addClass("slide-right-view");
                }
                else
                {
                    mainContainer.addClass("slide-left-view");
                }


                if( sessionStorage.getItem("token") === null )
                {
                    RoutesService.disconnect();
                }

            });
        }
    ]
);


amCompanion.factory("AmcContextService", [ "$http", "$rootScope","$timeout","$q","urls","$cookies","$location","SweetAlert",
    function ($http, $rootScope, $timeout, $q, urls, $cookies, $location, SweetAlert )
    {
        'use strict';

        var data = {};

        /**
         * This function is called to reset the service's data
         */
        this.initData = function()
        {
            data.employees = [];
            data.selectedEmployee = null;
            data.selectedEmployeeBackUp = null;
            data.isInit = false;
            data.userMail = sessionStorage.getItem("mail");
            data.updateStatus = 0;
        };
        //Init the context at the first injection
        this.initData();

        this.updateCurrentEmployee = function()
        {
            var defer = $q.defer();

            data.updateStatus = 1;
            $rootScope.$emit("serverUpdateStarted");

            $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
            $http.put(
                urls.employes + "/" +data.selectedEmployee.id,
                JSON.stringify(data.selectedEmployee)
            ).success(
                function (employee) {
                    //Update the user version
                    data.selectedEmployee._ts = employee._ts;
                    defer.resolve();
                    data.updateStatus = 2;
                    $rootScope.$emit("serverUpdateStarted");
                    $timeout(function(){
                        data.updateStatus = 0;
                        $rootScope.$emit("serverUpdateStarted");
                    },1500);

                }).error(function()
                {
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
        this.initEmployees = function ()
        {
            var defer = $q.defer();

            if( data.isInit === false )
            {
                defer = $q.defer();
                data.employees = [];

                if( this.isDevVersion() )
                {
                    $http.get("/data/data2.json").success(
                        function ( res ) {
                            addEmployeeDate(res);
                            data.employees.push.apply(data.employees , res);
                            data.isInit = true;
                            defer.resolve();
                        }).error(function()
                        {
                            //alert("data not loaded");
                        });
                }
                else
                {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
                    $http.get(
                        urls.employes + "/" +data.userMail
                    ).success(
                        function (res) {
                            addEmployeeDate(res);
                            data.employees.push.apply(data.employees , res);
                            data.isInit = true;
                            defer.resolve();

                        }).error(function(error,errorCode)
                        {
                            if( errorCode === 401)
                            {
                                SweetAlert.swal(
                                    {
                                        title: "Session expirée",
                                        text: "Votre session a expirée, veuillez vous reconnecter.",
                                        type: "error",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: true
                                    },
                                    function(){
                                        sessionStorage.removeItem("token");
                                        $location.path("/login");
                                        $rootScope.$apply();
                                    }
                                );
                            }
                            defer.reject();
                        });
                }

            }
            else
            {
                defer.resolve();
            }
            return defer.promise;
        };

        /**
         * This function get the max date of the links and set it on the employee
         * @param employees the employee's list from the server
         */
        function addEmployeeDate( employees )
        {
            var currentEmployee, currentMax, timestamp = -1;

            for( var i = 0 ; i < employees.length ; i ++ )
            {
                currentMax = -1;
                currentEmployee = employees[i];
                for( var j = 0 ; j < currentEmployee.Links.length ; j ++ )
                {

                    //Premier retour du serveur quand les dates sont sous forme textuelles.
                    if(typeof currentEmployee.Links[j].DateTimestamp === "undefined")
                    {
                        timestamp = Date.parse(currentEmployee.Links[j].Date);
                        currentEmployee.Links[j].DateTimestamp = timestamp > 0 ? timestamp : 0;
                        currentEmployee.Links[j].Date = JSON.stringify( new Date ( timestamp ) );
                    }

                    if( currentEmployee.Links[j].DateTimestamp > currentMax )
                    {
                        currentMax = currentEmployee.Links[j].DateTimestamp;
                    }
                }
                currentEmployee.dateMax = currentMax;
            }
        }

        this.isDevVersion = function()
        {
            return $cookies.env === "dev";
        };

        //Accessor of employees
        this.getEmployees = function()
        {
            addEmployeeDate(data.employees);
            return data.employees;
        };

        this.getSelectedEmployee = function()
        {
            return data.selectedEmployee;
        };

        this.setSelectedEmployee = function( employee )
        {
            data.selectedEmployee = employee;
        };

        this.setSelectedEmployeeFromId = function( id )
        {
            for( var i = 0 ; i < data.employees.length ; i ++ )
            {
                if ( data.employees[i].id === id )
                {
                    this.setSelectedEmployee(data.employees[i]);
                }
            }
        };

        this.unsetSelectedEmployee = function()
        {
            data.selectedEmployee = undefined;
        };

        this.setUpdateStatus = function( newStatus )
        {
            data.updateStatus = newStatus;
        };

        this.getUpdateStatus = function()
        {
            return data.updateStatus;
        };


        return this;
    }]);

amCompanion.factory('AuthService', ["$http", "$q", "urls", "AmcContextService",
    function ($http , $q, urls, AmcContextService) {
        'use strict';
        return {
            login: function (credentials){

                var defer = $q.defer();
                var data = {Email:credentials.email,Password:credentials.password};



                $http.post(
                    urls.login, data
                ).success(
                    function ( data )
                    {
                        sessionStorage.setItem("token", data.token);
                        sessionStorage.setItem("mail", credentials.email);
                        AmcContextService.initData();
                        defer.resolve("Login correct");
                    }).error(
                    function(){

                        if(AmcContextService.isDevVersion())
                        {
                            sessionStorage.setItem("token", data.token);
                            sessionStorage.setItem("mail", credentials.email);
                            AmcContextService.initData();
                            defer.resolve("Login correct");
                        }

                        defer.reject("Login Incorrect");
                    }
                );

                return defer.promise;
            }
        };
    }]);

amCompanion.factory("RoutesService",
    ["$location","AmcContextService",
        function( $location, AmcContextService )
        {
            'use strict';

            this.disconnect = function ()
            {
                sessionStorage.removeItem("token");
                $location.path("/login");
            };

            this.loadHomeView = function()
            {
                $location.path("/");
                AmcContextService.unsetSelectedEmployee();
            };

            this.loadEmployeeView = function( employee )
            {
                AmcContextService.unsetSelectedEmployee();
                $location.path("/employee/" + employee.id);
            };

            this.loadLinkView = function( employee, link )
            {
                $location.path("/link/"+employee.id+"/"+link.DateTimestamp);
            };

            this.loadObjectiveView = function( employee, index )
            {
                $location.path("/objective/"+employee.id+"/"+index);
            };

            return this;
        }
    ]
);

angular.module('amCompanion').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('index.html',
    "<!DOCTYPE html><!--[if lt IE 7]><html lang=\"en\" ng-app=\"amCompanion\" class=\"no-js lt-ie9 lt-ie8 lt-ie7\"><![endif]--><!--[if IE 7]><html lang=\"en\" ng-app=\"amCompanion\" class=\"no-js lt-ie9 lt-ie8\"><![endif]--><!--[if IE 8]><html lang=\"en\" ng-app=\"amCompanion\" class=\"no-js lt-ie9\"><![endif]--><!--[if gt IE 8]><!--><html lang=en ng-app=amCompanion class=no-js><!--<![endif]--><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content=\"IE=edge\"><title>Am Companion</title><meta name=description content=\"\"><meta name=viewport content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0\"><meta name=apple-mobile-web-app-capable content=\"yes\"><base href=\"/\"><link rel=\"stylesheet prefetch\" href=\"/dist/style.min.css\"></head><body id=am-companion class=fade-view ng-controller=RootController><div id=main-container ng-view class=view></div><div class=\"notif-update ng-hide\" ng-show=\"updateStatus != 0\" ng-class=\"{'tall':updateStatus == 3}\"><div ng-if=\"updateStatus == 1\">Mise à jour en cours <i class=\"fa fa-circle-o-notch fa-spin\"></i></div><div ng-if=\"updateStatus == 2\">Mise à jour effectuée <i class=\"fa fa-check fa-green\"></i></div><div ng-if=\"updateStatus == 3\"><div>Mise à jour échouée <i class=\"fa fa-times fa-red\"></i></div><div class=row><div class=\"columns small-6\"><button ng-click=sendRapport() class=\"btn btn-steria btn-xs small-10 small-centered push-1 columns\">Envoyer le rapport</button></div><div class=\"columns small-6\"><button ng-click=closeNotif() class=\"btn btn-steria btn-xs small-10 small-centered columns\">Fermer</button></div></div></div></div><script src=/dist/script.js></script></body></html>"
  );


  $templateCache.put('partials/embed/employee.html',
    "<div class=row ng-click=openEmployeeView()><div class=\"item employee columns small-12\" ng-class=\"{'last':last}\"><div class=row><i class=\"small-2 user-icon fa fa-flag-o status-{{employee.Status}}\"></i><div class=\"user-info columns small-9\"><div><span ng-bind=employee.FirstName></span> <span ng-bind=employee.LastName></span></div><div ng-if=\"lastLink != undefined\" class=sub-info><i class=\"glyphicon glyphicon-map-marker\"></i> <span ng-bind=\"lastLink.DateTimestamp|date:'dd/MM/yyyy'\"></span>, <span ng-bind=lastLink.Type|truncate:20></span></div><div ng-if=\"lastLink == undefined\">Pas de rendez vous</div></div><div class=\"next columns small-1\"><i class=\"fa-angle-right fa\"></i></div></div></div></div>"
  );


  $templateCache.put('partials/full/employee.html',
    "<div class=container id=employee-view><amc-header go-back-handler=goBack() libelle=nomPrenom home-display=false edit-mode=editMode></amc-header><div class=content><div class=row><div class=\"separator columns small-12\"><span class=text>Objectifs</span> <span class=\"action float-right\" ng-click=createNewObjective()><button class=\"btn add-new\" ng-disabled=editMode><span class=\"fa fa-plus\"></span></button></span></div><div class=\"item columns small-12\" ng-repeat=\"objective in selectedEmployee.Objectives\" ng-click=\"showFullObjective( $index )\"><div class=\"columns small-10\"><progress-arc complete=objective.ProgressionPercent/100 stroke=progressColors[$index]></progress-arc><div class=percent ng-class=\"{'cent':objective.ProgressionPercent == 100}\">{{objective.ProgressionPercent}}%</div><div class=text>{{objective.Text}}</div></div><div ng-if=!editMode class=\"next columns small-1\"></div><div ng-if=!editMode class=\"next columns small-1\"><i class=\"fa-angle-right fa\"></i></div><div ng-if=editMode class=\"text-center next columns small-2\" ng-click=\"deleteObjective($event, $index)\"><span class=\"fa fa-trash-o red\"></span></div></div><div class=\"separator columns small-12\"><span class=text>Entretiens</span> <span class=\"action float-right\" ng-click=createNewLink()><button class=\"btn add-new\" ng-disabled=editMode><span class=\"fa fa-plus\"></span></button></span></div><div class=\"item columns small-12\" ng-repeat=\"link in selectedEmployee.Links | orderBy:'date':'reverse'\" ng-click=\"showFullLink( link )\"><div class=row><div class=\"small-2 columns\"><i class=\"fa item-icon-left\" ng-class=getIcon(link.Type)></i></div><div class=\"small-8 columns\"><div>{{link.Type}}</div><div>{{link.DateTimestamp|date:'d MMMM yyyy'}}</div></div><div ng-if=!editMode class=\"next columns small-1\"></div><div ng-if=!editMode class=\"next columns small-1\"><i class=\"fa-angle-right fa\"></i></div><div ng-if=editMode class=\"text-center next columns small-2\" ng-click=\"deleteLink($event, $index)\"><span class=\"fa fa-trash-o red\"></span></div></div></div></div></div></div>"
  );


  $templateCache.put('partials/full/home.html',
    "<div id=home class=container><amc-header home-display=true></amc-header><div class=content><div class=row><div class=\"separator columns small-12\"><span class=text>Collaborateurs</span></div><div ng-repeat=\"employee in employees|orderBy:'dateMax' track by employee.id \" class=\"columns sm\"><embed-employee employee=employee last=$last></embed-employee></div></div></div></div>"
  );


  $templateCache.put('partials/full/link.html',
    "<div class=container id=employee-view><amc-header go-back-handler=goBack() libelle=nomPrenom home-display=false edit-mode=editMode></amc-header><div class=content><div class=row><div class=\"separator columns small-12\"><span class=text>Lieu</span></div><div class=\"item-without-padding columns small-12\"><select ng-model=selectedLink.Type ng-options=\"o as o for o in linkTypes\"></select></div><div class=\"separator columns small-12\"><span class=text>Date</span></div><div class=\"item-without-padding columns small-12\"><input type=date ng-model=selectedDate ng-change=changeSelectedDate()></div><div class=\"separator columns small-12\"><span class=text>Commentaire</span></div><div class=\"item-fit-without-padding columns small-12\"><textarea ng-model=selectedLink.Comment rows=10></textarea></div></div></div></div>"
  );


  $templateCache.put('partials/full/login.html',
    "<div id=loginModal><img id=logo src=\"./img/logo-white.png\"><div class=row><form class=\"columns large-4 large-centered small-10 small-centered center-block\" ng-submit=login() name=loginForm><div class=\"row collapse\"><div class=\"input-group input-group-lg\"><span class=input-group-addon>@</span> <input type=email name=email class=form-control placeholder=\"Adresse mail\" ng-model=credentials.email required></div></div><div class=\"row collapse\"><div class=\"input-group input-group-lg\"><span class=input-group-addon><span class=\"fa fa-lock\"></span></span> <input name=password type=password class=form-control placeholder=\"Mot de passe\" ng-model=credentials.password required></div></div><div class=\"row collapse\"><button type=submit ng-class=\"{'btn-danger':failed,'btn-success':success}\" class=\"btn btn-steria btn-lg btn-block small-10 small-centered columns large-12\" ng-disabled=\"!loginForm.$valid || loading\">{{buttonLabel}}</button></div></form><div class=clear></div></div></div>"
  );


  $templateCache.put('partials/full/objective.html',
    "<div class=container id=employee-view><amc-header go-back-handler=goBack() libelle=nomPrenom home-display=false edit-mode=editMode></amc-header><div class=content><div class=row><div class=\"separator columns small-12\"><span class=text>Intitulé</span></div><div class=\"columns small-12\"><div class=\"input-group input-group-lg columns small-12 small-centered\"><input class=form-control placeholder=Intitulé ng-model=selectedObjective.Text required></div></div><div class=\"separator columns small-12\"><span class=text>Pourcentage d'accomplissement</span></div><div class=\"item columns small-12\"><div class=\"input-group input-group-lg columns small-12 small-centered\"><div class=rzslider><rzslider rz-slider-model=selectedObjective.ProgressionPercent rz-slider-floor=0 rz-slider-ceil=100></rzslider></div></div></div></div></div></div>"
  );


  $templateCache.put('partials/utils/amc_header.html',
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div ng-if=homeDisplay><div class=navbar-header><div class=\"columns small-2\"></div><div class=\"columns small-8 menu-title\"><img src=/img/logo-icon.png id=nav-logo></div><div class=\"columns small-2\" ng-click=disconnect()><span class=\"right-menu-icon fa fa-power-off hv-center\"></span></div></div></div><div ng-if=!homeDisplay class=navbar-header><div class=row><div class=\"columns small-2\" ng-if=editMode ng-click=cancelEditMode()><span class=\"left-menu-icon fa-ban fa hv-center\" style=color:{{cancelColor}}></span></div><div class=\"columns small-2\" ng-if=!editMode ng-click=goBack()><span class=\"left-menu-icon fa fa-arrow-left hv-center\" style=color:{{backColor}}></span></div><div class=\"columns small-8 menu-title\"><span ng-bind=libelle></span></div><div class=\"columns small-2\" ng-if=!editMode ng-click=toggleEditMode()><span class=\"right-menu-icon fa-pencil-square-o fa hv-center\" style=color:{{editColor}}></span></div><div class=\"columns small-2\" ng-if=editMode ng-click=validateEditMode()><span class=\"right-menu-icon fa-check fa hv-center\" style=color:{{validateColor}}></span></div></div></div></nav>"
  );

}]);

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
 AngularJS v1.3.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
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

amCompanion.directive('angRoundProgress', [function () {
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
 AngularJS v1.3.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,d,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=r.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=f.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));y(a)}}}p=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,c){return d.extend(Object.create(a),
c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(t(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=x.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(t(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
m);return s}]});var B=d.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.3.5
 (c) 2010-2014 Google, Inc. http://angularjs.org
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

!function(e,t){function n(t){var n=y(),o=n.querySelector("h2"),r=n.querySelector("p"),a=n.querySelector("button.cancel"),c=n.querySelector("button.confirm");if(o.innerHTML=w(t.title).split("\n").join("<br>"),r.innerHTML=w(t.text||"").split("\n").join("<br>"),t.text&&S(r),C(n.querySelectorAll(".icon")),t.type){for(var l=!1,s=0;s<d.length;s++)if(t.type===d[s]){l=!0;break}if(!l)return e.console.error("Unknown alert type: "+t.type),!1;var u=n.querySelector(".icon."+t.type);switch(S(u),t.type){case"success":v(u,"animate"),v(u.querySelector(".tip"),"animateSuccessTip"),v(u.querySelector(".long"),"animateSuccessLong");break;case"error":v(u,"animateErrorIcon"),v(u.querySelector(".x-mark"),"animateXMark");break;case"warning":v(u,"pulseWarning"),v(u.querySelector(".body"),"pulseWarningIns"),v(u.querySelector(".dot"),"pulseWarningIns")}}if(t.imageUrl){var f=n.querySelector(".icon.custom");f.style.backgroundImage="url("+t.imageUrl+")",S(f);var m=80,p=80;if(t.imageSize){var g=t.imageSize.split("x")[0],b=t.imageSize.split("x")[1];g&&b?(m=g,p=b,f.css({width:g+"px",height:b+"px"})):e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+t.imageSize)}f.setAttribute("style",f.getAttribute("style")+"width:"+m+"px; height:"+p+"px")}n.setAttribute("data-has-cancel-button",t.showCancelButton),t.showCancelButton?a.style.display="inline-block":C(a),t.cancelButtonText&&(a.innerHTML=w(t.cancelButtonText)),t.confirmButtonText&&(c.innerHTML=w(t.confirmButtonText)),c.style.backgroundColor=t.confirmButtonColor,i(c,t.confirmButtonColor),n.setAttribute("data-allow-ouside-click",t.allowOutsideClick);var h=t.doneFunction?!0:!1;n.setAttribute("data-has-done-function",h),n.setAttribute("data-timer",t.timer)}function o(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n="#",o,r;for(r=0;3>r;r++)o=parseInt(e.substr(2*r,2),16),o=Math.round(Math.min(Math.max(0,o+o*t),255)).toString(16),n+=("00"+o).substr(o.length);return n}function r(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function a(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null}function i(e,t){var n=a(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"}function c(){var e=y();T(p(),10),S(e),v(e,"showSweetAlert"),b(e,"hideSweetAlert"),I=t.activeElement;var n=e.querySelector("button.confirm");n.focus(),setTimeout(function(){v(e,"visible")},500);var o=e.getAttribute("data-timer");"null"!==o&&""!==o&&(e.timeout=setTimeout(function(){l()},o))}function l(){var n=y();E(p(),5),E(n,5),b(n,"showSweetAlert"),v(n,"hideSweetAlert"),b(n,"visible");var o=n.querySelector(".icon.success");b(o,"animate"),b(o.querySelector(".tip"),"animateSuccessTip"),b(o.querySelector(".long"),"animateSuccessLong");var r=n.querySelector(".icon.error");b(r,"animateErrorIcon"),b(r.querySelector(".x-mark"),"animateXMark");var a=n.querySelector(".icon.warning");b(a,"pulseWarning"),b(a.querySelector(".body"),"pulseWarningIns"),b(a.querySelector(".dot"),"pulseWarningIns"),e.onkeydown=M,t.onclick=A,I&&I.focus(),z=void 0,clearTimeout(n.timeout)}function s(){var e=y();e.style.marginTop=B(y())}var u=".sweet-alert",f=".sweet-overlay",d=["error","warning","info","success"],m={title:"",text:"",type:null,allowOutsideClick:!1,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null},y=function(){return t.querySelector(u)},p=function(){return t.querySelector(f)},g=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},v=function(e,t){g(e,t)||(e.className+=" "+t)},b=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(g(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},w=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},h=function(e){e.style.opacity="",e.style.display="block"},S=function(e){if(e&&!e.length)return h(e);for(var t=0;t<e.length;++t)h(e[t])},x=function(e){e.style.opacity="",e.style.display="none"},C=function(e){if(e&&!e.length)return x(e);for(var t=0;t<e.length;++t)x(e[t])},k=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},B=function(e){e.style.left="-9999px",e.style.display="block";var t=e.clientHeight,n;return n="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt(t/2+n)+"px"},T=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)};o()}e.style.display="block"},E=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"};o()},q=function(n){if(MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var r=t.createEvent("MouseEvents");r.initEvent("click",!1,!1),n.dispatchEvent(r)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},O=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)},I,A,M,z;e.sweetAlertInitialize=function(){var e='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',n=t.createElement("div");n.innerHTML=e,t.body.appendChild(n)},e.sweetAlert=e.swal=function(){function a(t){var n=t||e.event,o=n.keyCode||n.which;if(-1!==[9,13,32,27].indexOf(o)){for(var r=n.target||n.srcElement,a=-1,c=0;c<S.length;c++)if(r===S[c]){a=c;break}9===o?(r=-1===a?w:a===S.length-1?S[0]:S[a+1],O(n),r.focus(),i(r,f.confirmButtonColor)):(r=13===o||32===o?-1===a?w:void 0:27!==o||h.hidden||"none"===h.style.display?void 0:h,void 0!==r&&q(r,n))}}function u(t){var n=t||e.event,o=n.target||n.srcElement,r=n.relatedTarget,a=g(d,"visible");if(a){var i=-1;if(null!==r){for(var c=0;c<S.length;c++)if(r===S[c]){i=c;break}-1===i&&o.focus()}else z=o}}if(void 0===arguments[0])return e.console.error("sweetAlert expects at least 1 attribute!"),!1;var f=r({},m);switch(typeof arguments[0]){case"string":f.title=arguments[0],f.text=arguments[1]||"",f.type=arguments[2]||"";break;case"object":if(void 0===arguments[0].title)return e.console.error('Missing "title" argument!'),!1;f.title=arguments[0].title,f.text=arguments[0].text||m.text,f.type=arguments[0].type||m.type,f.allowOutsideClick=arguments[0].allowOutsideClick||m.allowOutsideClick,f.showCancelButton=void 0!==arguments[0].showCancelButton?arguments[0].showCancelButton:m.showCancelButton,f.closeOnConfirm=void 0!==arguments[0].closeOnConfirm?arguments[0].closeOnConfirm:m.closeOnConfirm,f.closeOnCancel=void 0!==arguments[0].closeOnCancel?arguments[0].closeOnCancel:m.closeOnCancel,f.timer=arguments[0].timer||m.timer,f.confirmButtonText=m.showCancelButton?"Confirm":m.confirmButtonText,f.confirmButtonText=arguments[0].confirmButtonText||m.confirmButtonText,f.confirmButtonColor=arguments[0].confirmButtonColor||m.confirmButtonColor,f.cancelButtonText=arguments[0].cancelButtonText||m.cancelButtonText,f.imageUrl=arguments[0].imageUrl||m.imageUrl,f.imageSize=arguments[0].imageSize||m.imageSize,f.doneFunction=arguments[1]||null;break;default:return e.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}n(f),s(),c();for(var d=y(),p=function(t){var n=t||e.event,r=n.target||n.srcElement,a="confirm"===r.className,i=g(d,"visible"),c=f.doneFunction&&"true"===d.getAttribute("data-has-done-function");switch(n.type){case"mouseover":a&&(r.style.backgroundColor=o(f.confirmButtonColor,-.04));break;case"mouseout":a&&(r.style.backgroundColor=f.confirmButtonColor);break;case"mousedown":a&&(r.style.backgroundColor=o(f.confirmButtonColor,-.14));break;case"mouseup":a&&(r.style.backgroundColor=o(f.confirmButtonColor,-.04));break;case"focus":var s=d.querySelector("button.confirm"),u=d.querySelector("button.cancel");a?u.style.boxShadow="none":s.style.boxShadow="none";break;case"click":if(a&&c&&i)f.doneFunction(!0),f.closeOnConfirm&&l();else if(c&&i){var m=String(f.doneFunction).replace(/\s/g,""),y="function("===m.substring(0,9)&&")"!==m.substring(9,10);y&&f.doneFunction(!1),f.closeOnCancel&&l()}else l()}},v=d.querySelectorAll("button"),b=0;b<v.length;b++)v[b].onclick=p,v[b].onmouseover=p,v[b].onmouseout=p,v[b].onmousedown=p,v[b].onfocus=p;A=t.onclick,t.onclick=function(t){var n=t||e.event,o=n.target||n.srcElement,r=d===o,a=k(d,o),i=g(d,"visible"),c="true"===d.getAttribute("data-allow-ouside-click");!r&&!a&&i&&c&&l()};var w=d.querySelector("button.confirm"),h=d.querySelector("button.cancel"),S=d.querySelectorAll("button:not([type=hidden])");M=e.onkeydown,e.onkeydown=a,w.onblur=u,h.onblur=u,e.onfocus=function(){e.setTimeout(function(){void 0!==z&&(z.focus(),z=void 0)},0)}},e.swal.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");r(m,e)},function(){"complete"===t.readyState||"interactive"===t.readyState&&t.body?e.sweetAlertInitialize():t.addEventListener?t.addEventListener("DOMContentLoaded",function n(){t.removeEventListener("DOMContentLoaded",arguments.callee,!1),e.sweetAlertInitialize()},!1):t.attachEvent&&t.attachEvent("onreadystatechange",function(){"complete"===t.readyState&&(t.detachEvent("onreadystatechange",arguments.callee),e.sweetAlertInitialize())})}()}(window,document);