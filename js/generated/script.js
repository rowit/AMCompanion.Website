/*
 AngularJS v1.3.0-rc.1
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(t,Y,s){'use strict';function K(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-rc.1/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Na(b){if(null==b||Oa(b))return!1;var a=b.length;return 1===b.nodeType&&
    a?!0:C(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(D(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(L(b)||Na(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
    function od(b,a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function pd(){return++bb}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var m=f[g];b[m]=e[m]}}ac(b,a);return b}function U(b){return parseInt(b,10)}function bc(b,a){return E(new (E(function(){},{prototype:b})),a)}function w(){}
    function Pa(b){return b}function da(b){return function(){return b}}function F(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function S(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function ea(b){return"number"===typeof b}function fa(b){return"[object Date]"===Ga.call(b)}function D(b){return"function"===typeof b}function cb(b){return"[object RegExp]"===Ga.call(b)}function Oa(b){return b&&b.window===b}function Qa(b){return b&&b.$evalAsync&&
        b.$watch}function qd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function rd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return P(b.nodeName||b[0].nodeName)}function sd(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ra(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Oa(b)||Qa(b))throw Sa("cpws");if(a){if(b===a)throw Sa("cpi");c=c||[];d=d||[];if(S(b)){var e=c.indexOf(b);if(-1!==e)return d[e];
        c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:r(a,function(c,b){delete a[b]});for(f in b)b.hasOwnProperty(f)&&(e=Ha(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);ac(a,g)}}else if(a=b)L(b)?a=Ha(b,[],c,d):fa(b)?a=new Date(b.getTime()):cb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):S(b)&&(e=Object.create(Object.getPrototypeOf(b)),
        a=Ha(b,e,c,d));return a}function qa(b,a){if(L(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(S(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ra(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ra(b[d],a[d]))return!1;return!0}}else{if(fa(b))return fa(a)?ra(b.getTime(),a.getTime()):!1;if(cb(b)&&
        cb(a))return b.toString()==a.toString();if(Qa(b)||Qa(a)||Oa(b)||Oa(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!D(b[d])){if(!ra(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!D(a[d]))return!1;return!0}return!1}function db(b,a,c){return b.concat(Ta.call(a,c))}function cc(b,a){var c=2<arguments.length?Ta.call(arguments,2):[];return!D(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ta.call(arguments,0))):
        a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function td(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Oa(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Qa(a)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,td,a?"  ":null)}function dc(b){return C(b)?JSON.parse(b):b}function ta(b){b=G(b).clone();try{b.empty()}catch(a){}var c=G("<div>").append(b).html();try{return 3===b[0].nodeType?P(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
        function(a,c){return"<"+P(c)})}catch(d){return P(c)}}function ec(b){try{return decodeURIComponent(b)}catch(a){}}function fc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=ec(c[0]),B(d)&&(b=B(c[1])?ec(c[1]):!0,Ab.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Bb(b){var a=[];r(b,function(b,d){L(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}
    function eb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function ud(b,a){var c,d,e=fb.length;b=G(b);for(d=0;d<e;++d)if(c=fb[d]+a,C(c=b.attr(c)))return c;return null}function vd(b,a){var c,d,e={};r(fb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});
        r(fb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==ud(c,"strict-di"),a(c,d?[d]:[],e))}function gc(b,a,c){S(c)||(c={});c=E({strictDi:!1},c);var d=function(){b=G(b);if(b.injector()){var d=b[0]===Y?"document":ta(b);throw Sa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
        a.unshift("ng");d=Cb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;t&&e.test(t.name)&&(c.debugInfoEnabled=!0,t.name=t.name.replace(e,""));if(t&&!f.test(t.name))return d();t.name=t.name.replace(f,"");Ea.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function wd(){t.name="NG_ENABLE_DEBUG_INFO!"+t.name;t.location.reload()}function xd(b){return Ea.element(b).injector().get("$$testability")}
    function Db(b,a){a=a||"_";return b.replace(yd,function(b,d){return(d?a:"")+b.toLowerCase()})}function zd(){var b;hc||((la=t.jQuery)&&la.fn.on?(G=la,E(la.fn,{scope:Ia.scope,isolateScope:Ia.isolateScope,controller:Ia.controller,injector:Ia.injector,inheritedData:Ia.inheritedData}),b=la.cleanData,la.cleanData=function(a){var c;if(Eb)Eb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=la._data(e,"events"))&&c.$destroy&&la(e).triggerHandler("$destroy");b(a)}):G=V,Ea.element=G,hc=!0)}function Fb(b,a,c){if(!b)throw Sa("areq",
            a||"?",c||"required");return b}function gb(b,a,c){c&&L(b)&&(b=b[b.length-1]);Fb(D(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ja(b,a){if("hasOwnProperty"===b)throw Sa("badname",a);}function ic(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&D(b)?cc(e,b):b}function hb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return G(c)}function Ad(b){function a(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b,c){return a[b]||(a[b]=c())}var c=K("$injector"),d=K("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||K;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return q}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],l=a("$injector","invoke","push",d),q={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,
        name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:l,run:function(a){e.push(a);return this}};h&&l(h);return q})}})}function Bd(b){E(b,{bootstrap:gc,copy:Ha,extend:E,equals:ra,element:G,forEach:r,
        injector:Cb,noop:w,bind:cc,toJson:sa,fromJson:dc,identity:Pa,isUndefined:F,isDefined:B,isString:C,isFunction:D,isObject:S,isNumber:ea,isElement:qd,isArray:L,version:Cd,isDate:fa,lowercase:P,uppercase:ib,callbacks:{counter:0},getTestability:xd,$$minErr:K,$$csp:Ua,reloadWithDebugInfo:wd,$$hasClass:jb});Va=Ad(t);try{Va("ngLocale")}catch(a){Va("ngLocale",[]).provider("$locale",Dd)}Va("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ed});a.provider("$compile",jc).directive({a:Fd,input:kc,
        textarea:kc,form:Gd,script:Hd,select:Id,style:Jd,option:Kd,ngBind:Ld,ngBindHtml:Md,ngBindTemplate:Nd,ngClass:Od,ngClassEven:Pd,ngClassOdd:Qd,ngCloak:Rd,ngController:Sd,ngForm:Td,ngHide:Ud,ngIf:Vd,ngInclude:Wd,ngInit:Xd,ngNonBindable:Yd,ngPluralize:Zd,ngRepeat:$d,ngShow:ae,ngStyle:be,ngSwitch:ce,ngSwitchWhen:de,ngSwitchDefault:ee,ngOptions:fe,ngTransclude:ge,ngModel:he,ngList:ie,ngChange:je,pattern:lc,ngPattern:lc,required:mc,ngRequired:mc,minlength:nc,ngMinlength:nc,maxlength:oc,ngMaxlength:oc,ngValue:ke,
        ngModelOptions:le}).directive({ngInclude:me}).directive(kb).directive(pc);a.provider({$anchorScroll:ne,$animate:oe,$browser:pe,$cacheFactory:qe,$controller:re,$document:se,$exceptionHandler:te,$filter:qc,$interpolate:ue,$interval:ve,$http:we,$httpBackend:xe,$location:ye,$log:ze,$parse:Ae,$rootScope:Be,$q:Ce,$$q:De,$sce:Ee,$sceDelegate:Fe,$sniffer:Ge,$templateCache:He,$templateRequest:Ie,$$testability:Je,$timeout:Ke,$window:Le,$$rAF:Me,$$asyncCallback:Ne})}])}function Wa(b){return b.replace(Oe,function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   b,d,e){return e?d.toUpperCase():d}).replace(Pe,"Moz$1")}function rc(b){b=b.nodeType;return 1===b||!b||9===b}function sc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Gb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Qe.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(Re,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=db(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
        return e}function V(b){if(b instanceof V)return b;var a;C(b)&&(b=ba(b),a=!0);if(!(this instanceof V)){if(a&&"<"!=b.charAt(0))throw Hb("nosel");return new V(b)}if(a){a=Y;var c;b=(c=Se.exec(b))?[a.createElement(c[1])]:(c=sc(b,a))?c.childNodes:[]}tc(this,b)}function Ib(b){return b.cloneNode(!0)}function lb(b,a){a||mb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)mb(c[d])}function uc(b,a,c,d){if(B(d))throw Hb("offargs");var e=(d=nb(b))&&d.events;if(d&&d.handle)if(a)r(a.split(" "),
        function(a){F(c)?(b.removeEventListener(a,e[a],!1),delete e[a]):Ra(e[a]||[],c)});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,e[a],!1),delete e[a]}function mb(b,a){var c=b.ng339,d=c&&ob[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),uc(b)),delete ob[c],b.ng339=s))}function nb(b,a){var c=b.ng339,c=c&&ob[c];a&&!c&&(b.ng339=c=++Te,c=ob[c]={events:{},data:{},handle:s});return c}function Jb(b,a,c){if(rc(b)){var d=B(c),e=!d&&a&&!S(a),f=!a;b=(b=nb(b,!e))&&b.data;
        if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];E(b,a)}}}function jb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Kb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ba(a)+" "," ")))})}function Lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=
        ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function tc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function vc(b,a){return pb(b,"$"+(a||"ngController")+"Controller")}function pb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=G.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}
    function wc(b){for(lb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function xc(b,a){a||lb(b);var c=b.parentNode;c&&c.removeChild(b)}function yc(b,a){var c=qb[a.toLowerCase()];return c&&zc[pa(b)]&&c}function Ue(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Ac[a]}function Ve(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){1<g&&(f=qa(f));for(var h=0;h<g;h++)f[h].call(b,c)}};c.elem=b;return c}function Ka(b,a){var c=
        b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||pd)():c+":"+b}function Xa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function We(b){return(b=b.toString().replace(Bc,"").match(Cc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Mb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw C(c)&&c||(c=b.name||We(b)),La("strictdi",
        c);a=b.toString().replace(Bc,"");a=a.match(Cc);r(a[1].split(Xe),function(a){a.replace(Ye,function(a,b,c){d.push(c)})})}b.$inject=d}}else L(b)?(a=b.length-1,gb(b[a],"fn"),d=b.slice(0,a)):gb(b,"fn",!0);return d}function Cb(b,a){function c(a){return function(b,c){if(S(b))r(b,$b(a));else return a(b,c)}}function d(a,b){Ja(a,"service");if(D(b)||L(b))b=p.instantiate(b);if(!b.$get)throw La("pget",a);return n[a+"Provider"]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;r(a,function(a){function d(a){var b,
        c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!k.get(a)){k.put(a,!0);try{C(a)?(c=Va(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):D(a)?b.push(p.invoke(a)):L(a)?b.push(p.invoke(a)):gb(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),La("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===
        h)throw La("cdep",a+" <- "+m.join(" <- "));return b[a]}try{return m.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{m.shift()}}function e(b,c,f,h){"string"===typeof f&&(h=f,f=null);var g=[];h=Mb(b,a,h);var k,m,l;m=0;for(k=h.length;m<k;m++){l=h[m];if("string"!==typeof l)throw La("itkn",l);g.push(f&&f.hasOwnProperty(l)?f[l]:d(l))}L(b)&&(b=b[k]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(L(a)?a[a.length-1]:a).prototype;
        d=new d;a=e(a,d,b,c);return S(a)||D(a)?a:d},get:d,annotate:Mb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},m=[],k=new Xa([],!0),n={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,da(b))}),constant:c(function(a,b){Ja(a,"constant");n[a]=b;l[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=q.invoke(d,
        c);return q.invoke(b,null,{$delegate:a})}}}},p=n.$injector=g(n,function(){throw La("unpr",m.join(" <- "));}),l={},q=l.$injector=g(l,function(a){var b=p.get(a+"Provider");return q.invoke(b.$get,b,s,a)});r(f(b),function(a){q.invoke(a||w)});return q}function ne(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==pa(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?
        d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function Ne(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Ze(b,a,c,d){function e(a){try{a.apply(null,Ta.call(arguments,1))}finally{if(A--,0===A)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function f(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           b){(function R(){r(x,function(a){a()});z=b(R,a)})()}function g(){y=null;T!=h.url()&&(T=h.url(),r(Q,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,n=b.history,p=b.setTimeout,l=b.clearTimeout,q={};h.isMock=!1;var A=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){A++};h.notifyWhenNoOutstandingRequests=function(a){r(x,function(a){a()});0===A?a():u.push(a)};var x=[],z;h.addPollFn=function(a){F(z)&&f(100,p);x.push(a);return a};var T=k.href,v=a.find("base"),y=
        null;h.url=function(a,c){k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){if(T!=a)return T=a,d.history?c?n.replaceState(null,"",a):(n.pushState(null,"",a),v.attr("href",v.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var Q=[],ca=!1;h.onUrlChange=function(a){if(!ca){if(d.history)G(b).on("popstate",g);if(d.hashchange)G(b).on("hashchange",g);else h.addPollFn(g);ca=!0}Q.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=v.attr("href");
        return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var J={},N="",M=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=encodeURIComponent(a)+"=;path="+M+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(m.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+M).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==N)for(N=m.cookie,d=N.split("; "),J={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),
        0<h&&(a=decodeURIComponent(e.substring(0,h)),J[a]===s&&(J[a]=decodeURIComponent(e.substring(h+1))));return J}};h.defer=function(a,b){var c;A++;c=p(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],l(a),e(w),!0):!1}}function pe(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Ze(b,d,a,c)}]}function qe(){this.$get=function(){function b(b,d){function e(a){a!=p&&(l?l==a&&(l=a.n):l=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}
        function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw K("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,l=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!F(b))return a in m||g++,m[a]=b,g>k&&this.remove(l.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==l&&(l=b.n);f(b.n,
            b.p);delete n[a]}delete m[a];g--},removeAll:function(){m={};g=0;n={};p=l=null},destroy:function(){n=h=m=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function He(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function jc(b,a){var c={},d=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,e=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,f=rd("ngSrc,ngSrcset,src,srcset"),g=
        /^(on[a-z]+|formaction)$/;this.directive=function k(a,d){Ja(a,"directive");C(a)?(Fb(d,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);D(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(d)):
        r(a,$b(k));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var h=!0;this.debugInfoEnabled=function(a){return B(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",
        function(a,b,p,l,q,A,u,x,z,T,v){function y(a,b){try{a.addClass(b)}catch(c){}}function Q(a,b,c,d,e){a instanceof G||(a=G(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=G(b).wrap("<span></span>").parent()[0])});var f=ca(a,b,a,c,d,e);Q.$$addScopeClass(a);var h=null,g=a,k;return function(b,c,d,e,l){Fb(b,"scope");h||(h=(l=l&&l[0])?"foreignobject"!==pa(l)&&l.toString().match(/SVG/)?"svg":"html":"html");"html"!==h&&a[0]!==k&&(g=G(Nb(h,G("<div>").append(a).html())));k=a[0];l=c?Ia.clone.call(g):
            g;if(d)for(var n in d)l.data("$"+n+"Controller",d[n].instance);Q.$$addScopeInfo(l,b);c&&c(l,b);f&&f(b,l,l,e);return l}}function ca(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,n,u,q,ua;if(p)for(ua=Array(c.length),n=0;n<g.length;n+=3)f=g[n],ua[f]=c[f];else ua=c;n=0;for(u=g.length;n<u;)k=ua[g[n++]],c=g[n++],f=g[n++],c?(c.scope?(l=a.$new(),Q.$$addScopeInfo(G(k),l)):l=a,q=c.transcludeOnThisElement?J(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?J(a,b):null,c(f,l,
            k,d,q)):f&&f(a,k.childNodes,s,e)}for(var g=[],k,l,n,u,p,q=0;q<a.length;q++){k=new Ob;l=N(a[q],[],k,0===q?d:s,e);(f=l.length?H(l,a[q],k,b,c,null,[],[],f):null)&&f.scope&&Q.$$addScopeClass(k.$$element);k=f&&f.terminal||!(n=a[q].childNodes)||!n.length?null:ca(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)g.push(q,f,k),u=!0,p=p||f;f=null}return u?h:null}function J(a,b,c,d){return function(e,f,h,g){var k=!1;e||(e=a.$new(),k=e.$$transcluded=!0);f=b(e,f,h,c,g);if(k&&
            !d)f.on("$destroy",function(){e.$destroy()});return f}}function N(b,f,h,g,l){var n=h.$attr,u;switch(b.nodeType){case 1:R(f,va(pa(b)),"E",g,l);for(var p,q,T,A=b.attributes,z=0,v=A&&A.length;z<v;z++){var x=!1,J=!1;p=A[z];if(!X||8<=X||p.specified){u=p.name;p=ba(p.value);q=va(u);if(T=U.test(q))u=Db(q.substr(6),"-");var W=q.replace(/(Start|End)$/,""),r;a:{var H=W;if(c.hasOwnProperty(H)){r=void 0;for(var H=a.get(H+"Directive"),O=0,Q=H.length;O<Q;O++)if(r=H[O],r.multiElement){r=!0;break a}}r=!1}r&&q===W+
            "Start"&&(x=u,J=u.substr(0,u.length-5)+"end",u=u.substr(0,u.length-6));q=va(u.toLowerCase());n[q]=u;if(T||!h.hasOwnProperty(q))h[q]=p,yc(b,q)&&(h[q]=!0);ya(b,f,p,q,T);R(f,q,"A",g,l,x,J)}}b=b.className;if(C(b)&&""!==b)for(;u=e.exec(b);)q=va(u[2]),R(f,q,"C",g,l)&&(h[q]=ba(u[3])),b=b.substr(u.index+u[0].length);break;case 3:t(f,b.nodeValue);break;case 8:try{if(u=d.exec(b.nodeValue))q=va(u[1]),R(f,q,"M",g,l)&&(h[q]=ba(u[2]))}catch(M){}}f.sort(F);return f}function M(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&
            a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return G(d)}function O(a,b,c){return function(d,e,f,h,g){e=M(e[0],b,c);return a(d,e,f,h,g)}}function H(a,c,d,e,f,h,g,k,l){function u(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=I.require;a.directiveName=ha;if(y===I||I.$$isolateScope)a=ga(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=O(b,c,d));b.require=I.require;b.directiveName=ha;if(y===
            I||I.$$isolateScope)b=ga(b,{isolateScope:!0});k.push(b)}}function T(a,b,c,d){var e,f="data",h=!1;if(C(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),h=h||"?"==e;e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||c[f]("$"+b+"Controller");if(!e&&!h)throw ja("ctreq",b,a);}else L(b)&&(e=[],r(b,function(b){e.push(T(a,b,c,d))}));return e}function z(a,e,f,h,l){function u(a,b,c){var d;Qa(a)||(c=b,b=a,a=s);E&&(d=W);c||(c=E?M.parent():M);return l(a,b,d,c)}var p,v,ua,x,W,O,
            M,R;c===f?(R=d,M=d.$$element):(M=G(f),R=new Ob(M,d));y&&(x=e.$new(!0));O=l&&u;J&&(H={},W={},r(J,function(a){var b={$scope:a===y||a.$$isolateScope?x:e,$element:M,$attrs:R,$transclude:O};ua=a.controller;"@"==ua&&(ua=R[a.name]);b=A(ua,b,!0,a.controllerAs);W[a.name]=b;E||M.data("$"+a.name+"Controller",b.instance);H[a.name]=b}));if(y){var N=/^\s*([@=&])(\??)\s*(\w*)\s*$/;Q.$$addScopeInfo(M,x,!0,!(ca&&(ca===y||ca===y.$$originalDirective)));Q.$$addScopeClass(M,!0);h=H&&H[y.name];var xa=x;h&&h.identifier&&
            !0===y.bindToController&&(xa=h.instance);r(y.scope,function(a,c){var d=a.match(N)||[],f=d[3]||c,h="?"==d[2],d=d[1],g,k,l,u;x.$$isolateBindings[c]=d+f;switch(d){case "@":R.$observe(f,function(a){x[c]=a});R.$$observers[f].$$scope=e;R[f]&&(xa[c]=b(R[f])(e));break;case "=":if(h&&!R[f])break;k=q(R[f]);u=k.literal?ra:function(a,b){return a===b||a!==a&&b!==b};l=k.assign||function(){g=xa[c]=k(e);throw ja("nonassign",R[f],y.name);};g=xa[c]=k(e);h=e.$watch(q(R[f],function(a){u(a,xa[c])||(u(a,g)?l(e,a=xa[c]):
            xa[c]=a);return g=a}),null,k.literal);x.$on("$destroy",h);break;case "&":k=q(R[f]);xa[c]=function(a){return k(e,a)};break;default:throw ja("iscp",y.name,c,a);}})}H&&(r(H,function(a){a()}),H=null);h=0;for(p=g.length;h<p;h++)v=g[h],Dc(v,v.isolateScope?x:e,M,R,v.require&&T(v.directiveName,v.require,M,W),O);h=e;y&&(y.template||null===y.templateUrl)&&(h=x);a&&a(h,f.childNodes,s,l);for(h=k.length-1;0<=h;h--)v=k[h],Dc(v,v.isolateScope?x:e,M,R,v.require&&T(v.directiveName,v.require,M,W),O)}l=l||{};for(var v=
            -Number.MAX_VALUE,x,J=l.controllerDirectives,H,y=l.newIsolateScopeDirective,ca=l.templateDirective,R=l.nonTlbTranscludeDirective,w=!1,F=!1,E=l.hasElementTranscludeDirective,aa=d.$$element=G(c),I,ha,t,P=e,za,ma=0,ya=a.length;ma<ya;ma++){I=a[ma];var U=I.$$start,X=I.$$end;U&&(aa=M(c,U,X));t=s;if(v>I.priority)break;if(t=I.scope)I.templateUrl||(S(t)?(K("new/isolated scope",y||x,I,aa),y=I):K("new/isolated scope",y,I,aa)),x=x||I;ha=I.name;!I.templateUrl&&I.controller&&(t=I.controller,J=J||{},K("'"+ha+"' controller",
            J[ha],I,aa),J[ha]=I);if(t=I.transclude)w=!0,I.$$tlb||(K("transclusion",R,I,aa),R=I),"element"==t?(E=!0,v=I.priority,t=aa,aa=d.$$element=G(Y.createComment(" "+ha+": "+d[ha]+" ")),c=aa[0],rb(f,Ta.call(t,0),c),P=Q(t,e,v,h&&h.name,{nonTlbTranscludeDirective:R})):(t=G(Ib(c)).contents(),aa.empty(),P=Q(t,e));if(I.template)if(F=!0,K("template",ca,I,aa),ca=I,t=D(I.template)?I.template(aa,d):I.template,t=V(t),I.replace){h=I;t=Gb.test(t)?G(Nb(I.templateNamespace,ba(t))):[];c=t[0];if(1!=t.length||1!==c.nodeType)throw ja("tplrt",
            ha,"");rb(f,aa,c);ya={$attr:{}};t=N(c,[],ya);var Z=a.splice(ma+1,a.length-(ma+1));y&&W(t);a=a.concat(t).concat(Z);B(d,ya);ya=a.length}else aa.html(t);if(I.templateUrl)F=!0,K("template",ca,I,aa),ca=I,I.replace&&(h=I),z=$e(a.splice(ma,a.length-ma),aa,d,f,w&&P,g,k,{controllerDirectives:J,newIsolateScopeDirective:y,templateDirective:ca,nonTlbTranscludeDirective:R}),ya=a.length;else if(I.compile)try{za=I.compile(aa,d,P),D(za)?u(null,za,U,X):za&&u(za.pre,za.post,U,X)}catch($){p($,ta(aa))}I.terminal&&(z.terminal=
            !0,v=Math.max(v,I.priority))}z.scope=x&&!0===x.scope;z.transcludeOnThisElement=w;z.elementTranscludeOnThisElement=E;z.templateOnThisElement=F;z.transclude=P;l.hasElementTranscludeDirective=E;return z}function W(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function R(b,d,e,f,h,g,l){if(d===h)return null;h=null;if(c.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var u=0,q=d.length;u<q;u++)try{n=d[u],(f===s||f>n.priority)&&-1!=n.restrict.indexOf(e)&&(g&&(n=bc(n,{$$start:g,
            $$end:l})),b.push(n),h=n)}catch(T){p(T)}}return h}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(y(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function $e(a,b,c,d,e,f,h,g){var k=[],n,u,p=b[0],q=a.shift(),
            T=E({},q,{templateUrl:null,transclude:null,replace:null,$$originalDirective:q}),v=D(q.templateUrl)?q.templateUrl(b,c):q.templateUrl,A=q.templateNamespace;b.empty();l(z.getTrustedResourceUrl(v)).then(function(l){var z,x;l=V(l);if(q.replace){l=Gb.test(l)?G(Nb(A,ba(l))):[];z=l[0];if(1!=l.length||1!==z.nodeType)throw ja("tplrt",q.name,v);l={$attr:{}};rb(d,b,z);var O=N(z,[],l);S(q.scope)&&W(O);a=O.concat(a);B(c,l)}else z=p,b.html(l);a.unshift(T);n=H(a,z,c,e,b,q,f,h,g);r(d,function(a,c){a==z&&(d[c]=b[0])});
            for(u=ca(b[0].childNodes,e);k.length;){l=k.shift();x=k.shift();var M=k.shift(),Q=k.shift(),O=b[0];if(x!==p){var R=x.className;g.hasElementTranscludeDirective&&q.replace||(O=Ib(z));rb(M,G(x),O);y(G(O),R)}x=n.transcludeOnThisElement?J(l,n.transclude,Q):Q;n(u,l,O,d,x)}k=null});return function(a,b,c,d,e){a=e;k?(k.push(b),k.push(c),k.push(d),k.push(a)):(n.transcludeOnThisElement&&(a=J(b,n.transclude,e)),n(u,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?
            -1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ta(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&Q.$$addBindingClass(a);return function(a,c){var e=c.parent();b||Q.$$addBindingClass(e);Q.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Nb(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;
            default:return b}}function za(a,b){if("srcdoc"==b)return z.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return z.RESOURCE_URL}function ya(a,c,d,e,h){var k=b(d,!0);if(k){if("multiple"===e&&"select"===pa(a))throw ja("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(g.test(e))throw ja("nodomevents");if(k=b(l[e],!0,za(a,e),f[e]||h))l[e]=k(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&
            l.$$observers[e].$$scope||c).$watch(k,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function rb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==d){a[h++]=c;g=h+e-1;for(var k=a.length;h<k;h++,g++)g<k?a[h]=a[g]:delete a[h];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);G(c).data(G(d).data());la?(Eb=!0,la.cleanData([d])):delete G.cache[d[G.expando]];d=1;for(e=b.length;d<
            e;d++)f=b[d],G(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ga(a,b){return E(function(){return a.apply(null,arguments)},a,b)}function Dc(a,b,c,d,e,f){try{a(b,c,d,e,f)}catch(h){p(h,ta(c))}}var Ob=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Ob.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&T.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&T.removeClass(this.$$element,
            a)},$updateClass:function(a,b){var c=Ec(a,b);c&&c.length&&T.addClass(this.$$element,c);(c=Ec(b,a))&&c.length&&T.removeClass(this.$$element,c)},$set:function(a,b,c,d){var e=this.$$element[0],f=yc(e,a),h=Ue(e,a),e=a;f?(this.$$element.prop(a,b),d=f):h&&(this[h]=b,e=h);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=Db(a,"-"));f=pa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=v(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,
            b));(a=this.$$observers)&&r(a[e],function(a){try{a(b)}catch(c){p(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Ra(e,b)}}};var ma=b.startSymbol(),ha=b.endSymbol(),V="{{"==ma||"}}"==ha?Pa:function(a){return a.replace(/\{\{/g,ma).replace(/}}/g,ha)},U=/^ngAttr[A-Z]/;Q.$$addBindingInfo=h?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;
            Q.$$addBindingClass=h?function(a){y(a,"ng-binding")}:w;Q.$$addScopeInfo=h?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;Q.$$addScopeClass=h?function(a,b){y(a,b?"ng-isolate-scope":"ng-scope")}:w;return Q}]}function va(b){return Wa(b.replace(af,""))}function Ec(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function re(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;
        this.register=function(a,c){Ja(a,"controller");S(a)?E(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!S(a.$scope))throw K("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,m,k){var n,p,l;m=!0===m;k&&C(k)&&(l=k);C(g)&&(k=g.match(c),p=k[1],l=l||k[3],g=b.hasOwnProperty(p)?b[p]:ic(h.$scope,p,!0)||(a?ic(e,p,!0):s),gb(g,p,!0));if(m)return m=function(){},m.prototype=(L(g)?g[g.length-1]:g).prototype,n=new m,l&&f(h,l,n,
                p||g.name),E(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:l});n=d.instantiate(g,h,p);l&&f(h,l,n,p||g.name);return n}}]}function se(){this.$get=["$window",function(b){return G(b.document)}]}function te(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Fc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=P(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Gc(b){var a=S(b)?b:
        s;return function(c){a||(a=Fc(b));return c?a[P(c)]||null:a}}function Hc(b,a,c){if(D(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function we(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=dc(d)));return d}],transformRequest:[function(a){return S(a)&&"[object File]"!==Ga.call(a)&&"[object Blob]"!==Ga.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
        post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return B(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,l){function q(a){function b(a){var d=E({},a,{data:Hc(a.data,a.headers,c.transformResponse)});a=a.status;return 200<=a&&300>a?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},
        d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[P(a.method)]);a:for(d in b){a=P(d);for(f in c)if(P(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){D(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=ib(c.method);var f=[function(a){d=a.headers;var c=Hc(a.data,Gc(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===P(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);
        return A(a,c,d).then(b,b)},s],h=p.when(c);for(r(z,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var g=f.shift(),h=h.then(a,g)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,c)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,c)});return h};return h}function A(c,g,k){function l(a,b,c,e){function h(){z(b,a,c,e)}O&&(200<=a&&
        300>a?O.put(W,[a,b,Fc(c),e]):O.remove(W));f?d.$applyAsync(h):(h(),d.$$phase||d.$apply())}function z(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?r.resolve:r.reject)({data:a,status:b,headers:Gc(d),config:c,statusText:e})}function A(){var a=q.pendingRequests.indexOf(c);-1!==a&&q.pendingRequests.splice(a,1)}var r=p.defer(),M=r.promise,O,H,W=u(c.url,c.params);q.pendingRequests.push(c);M.then(A,A);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=S(c.cache)?c.cache:S(e.cache)?e.cache:
        x);if(O)if(H=O.get(W),B(H)){if(H&&D(H.then))return H.then(A,A),H;L(H)?z(H[1],H[0],qa(H[2]),H[3]):z(H,200,{},"OK")}else O.put(W,M);F(H)&&((H=Ic(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(k[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,W,g,l,k,c.timeout,c.withCredentials,c.responseType));return M}function u(a,b){if(!b)return a;var c=[];od(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),r(a,function(a){S(a)&&(a=fa(a)?a.toISOString():sa(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&
    (a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var x=c("$http"),z=[];r(g,function(a){z.unshift(C(a)?l.get(a):l.invoke(a))});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");q.defaults=e;return q}]}function bf(b){if(8>=X&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
        !t.XMLHttpRequest))return new t.ActiveXObject("Microsoft.XMLHTTP");if(t.XMLHttpRequest)return new t.XMLHttpRequest;throw K("$httpBackend")("noxhr");}function xe(){this.$get=["$browser","$window","$document",function(b,a,c){return cf(b,bf,b.defer,a.angular.callbacks,c[0])}]}function cf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);
        f=null;var g=-1,q="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),q=a.type,g="error"===a.type?404:200);c&&c(g,q)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,m,k,n,p,l,q){function A(){x=-1;T&&T();v&&v.abort()}function u(a,d,e,f,g){Q&&c.cancel(Q);T=v=null;0===d&&(d=e?200:"file"==Aa(h).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(w)}var x;b.$$incOutstandingRequestCount();h=h||b.url();
        if("jsonp"==P(e)){var z="_"+(d.counter++).toString(36);d[z]=function(a){d[z].data=a;d[z].called=!0};var T=f(h.replace("JSON_CALLBACK","angular.callbacks."+z),z,function(a,b){u(k,a,d[z].data,"",b);d[z]=w})}else{var v=a(e);v.open(e,h,!0);r(n,function(a,b){B(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v&&4==v.readyState){var a=null,b=null,c="";-1!==x&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);-1===x&&10>X||(c=v.statusText);u(k,x||v.status,b,a,c)}};
            l&&(v.withCredentials=!0);if(q)try{v.responseType=q}catch(y){if("json"!==q)throw y;}v.send(m||null)}if(0<p)var Q=c(A,p);else p&&D(p.then)&&p.then(A)}}function ue(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,q,A){function u(c){return c.replace(k,b).replace(n,a)}function x(a){try{var b;var c=q?e.getTrusted(q,a):e.valueOf(a);
        if(null==c)b="";else{switch(typeof c){case "string":break;case "number":c=""+c;break;default:c=sa(c)}b=c}return b}catch(h){a=Pb("interr",f,h.toString()),d(a)}}A=!!A;for(var z,T,v=0,r=[],Q=[],s=f.length,J=[],N=[];v<s;)if(-1!=(z=f.indexOf(b,v))&&-1!=(T=f.indexOf(a,z+h)))v!==z&&J.push(u(f.substring(v,z))),v=f.substring(z+h,T),r.push(v),Q.push(c(v,x)),v=T+m,N.push(J.length),J.push("");else{v!==s&&J.push(u(f.substring(v)));break}if(q&&1<J.length)throw Pb("noconcat",f);if(!g||r.length){var M=function(a){for(var b=
        0,c=r.length;b<c;b++){if(A&&F(a[b]))return;J[N[b]]=a[b]}return J.join("")};return E(function(a){var b=0,c=r.length,e=Array(c);try{for(;b<c;b++)e[b]=Q[b](a);return M(e)}catch(h){a=Pb("interr",f,h.toString()),d(a)}},{exp:f,expressions:r,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(Q,function(c,e){var f=M(c);D(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,m=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
        function(){return a};return g}]}function ve(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,m,k){var n=a.setInterval,p=a.clearInterval,l=0,q=B(k)&&!k,A=(q?d:c).defer(),u=A.promise;m=B(m)?m:0;u.then(null,null,e);u.$$intervalId=n(function(){A.notify(l++);0<m&&l>=m&&(A.resolve(l),p(u.$$intervalId),delete f[u.$$intervalId]);q||b.$apply()},h);f[u.$$intervalId]=A;return u}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
        delete f[b.$$intervalId],!0):!1};return e}]}function Dd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=eb(b[a]);return b.join("/")}function Jc(b,a,c){b=Aa(b,c);a.$$protocol=
        b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||df[b.protocol]||null}function Kc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=Aa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=fc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,
            Ya(b).lastIndexOf("/")+1)}function Lc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);Jc(b,this,b);this.$$parse=function(a){var e=wa(c,a);if(!C(e))throw sb("ipthprfx",a,c);Kc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+eb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==s?
        (g=f,g=(f=wa(a,f))!==s?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Sb(b,a){var c=Rb(b);Jc(b,this,b);this.$$parse=function(d){var e=wa(b,d)||wa(c,d),e="#"==e.charAt(0)?wa(a,e):this.$$html5?e:"";if(!C(e))throw sb("ihshprfx",d,a);Kc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?
        "#"+eb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ya(b)==Ya(a)?(this.$$parse(a),!0):!1}}function Mc(b,a){this.$$html5=!0;Sb.apply(this,arguments);var c=Rb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ya(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+eb(this.$$hash):
        "";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Nc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ye(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),
        a)}var h,m=d.baseHref(),k=d.url();if(a){if(!m)throw sb("nobase");m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/");e=e.history?Lc:Mc}else m=Ya(k),e=Sb;h=new e(m,"#"+b);h.$$parseLinkUrl(k,k);var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=G(a.target);"a"!==pa(b[0]);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");S(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Aa(e.animVal).href);
        n.test(e)||!e||b.attr("target")||a.isDefaultPrevented()||!h.$$parseLinkUrl(e,g)||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),t.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),b=h.$$replace;p&&a==h.absUrl()||
    (p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return p});return h}]}function ze(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=
        c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Ba(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     a){if(b){if(b.constructor===b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function ub(b,a,c,d){Ba(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=Ba(b[e],d);g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Ba(b[e],d);return b[e]=c}function Oc(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,h){var m=h&&h.hasOwnProperty(b)?h:
        f;if(null==m)return m;m=m[b];if(!a)return m;if(null==m)return s;m=m[a];if(!c)return m;if(null==m)return s;m=m[c];if(!d)return m;if(null==m)return s;m=m[d];return e?null==m?s:m=m[e]:m}}function Pc(b,a,c){var d=Qc[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Oc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Oc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=s,a=g;while(d<f);return g};else{var g="";r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+
        a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=da(g);a.assign=function(a,c){return ub(a,b,c,b)};d=a}d.sharedGetter=!0;return Qc[b]=d}function Ae(){var b=Object.create(null),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;D(b)&&b.apply(this,
        arguments);B(a)&&d.$$postDigest(function(){B(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;r(a,function(a){B(a)||(b=!1)});return b}var f;return f=a.$watch(function(a){return d(a)},function(a,c,d){D(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(a)&&f()})},c)}function h(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){D(b)&&b.apply(this,arguments);e()},c)}function m(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return B(e)?f:e};c.$$watchDelegate=
        a.$$watchDelegate;return c}a.csp=d.csp;return function(d,n){var p,l,q;switch(typeof d){case "string":return q=d=d.trim(),p=b[q],p||(":"===d.charAt(0)&&":"===d.charAt(1)&&(l=!0,d=d.substring(2)),p=new Tb(a),p=(new Za(p,c,a)).parse(d),p.constant?p.$$watchDelegate=h:l&&(p=e(p),p.$$watchDelegate=p.literal?g:f),b[q]=p),m(p,n);case "function":return m(d,n);default:return m(w,n)}}}]}function Ce(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Rc(function(a){b.$evalAsync(a)},a)}]}function De(){this.$get=
        ["$browser","$exceptionHandler",function(b,a){return Rc(function(a){b.defer(a)},a)}]}function Rc(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,h=e.length;f<h;++f){d=e[f][0];b=e[f][c.status];try{D(b)?d.resolve(b(c.value)):
            1===c.status?d.resolve(c.value):d.reject(c.value)}catch(g){d.reject(g),a(g)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=K("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,
        !0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(S(b)||D(b))d=b&&b.then;D(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(h){e[1](h),a(h)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},
        $$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,h=d.length;f<h;f++){e=d[f][0];b=d[f][3];try{e.notify(D(b)?b(c):c)}catch(g){a(g)}}})}};var m=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{D(c)&&(d=c())}catch(e){return m(e,!1)}return d&&D(d.then)?d.then(function(){return m(a,
        b)},function(a){return m(a,!1)}):m(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function q(a){if(!D(a))throw h("norslvr",a);if(!(this instanceof q))return new q(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=L(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||
    (d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Me(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};
        f.supported=e;return f}]}function Be(){var b=10,a=K("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function m(){this.$id=++bb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount=
    {};this.$$isolateBindings={};this.$$applyAsyncQueue=[]}function k(b){if(A.$$phase)throw a("inprog",A.$$phase);A.$$phase=b}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function l(){for(var a=A.$$applyAsyncQueue;a.length;)try{a.shift()()}catch(b){f(b)}d=null}function q(){null===d&&(d=h.defer(function(){A.$apply(l)}))}m.prototype={constructor:m,$new:function(a){a?(a=new m,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,
        a.$$postDigestQueue=this.$$postDigestQueue):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++bb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),a=new this.$$ChildScope);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;D(b)||(h.fn=w);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Ra(f,h);c=null}},$watchGroup:function(a,b){function c(){g=!1;k?(k=!1,b(e,e,h)):b(e,d,h)}var d=Array(a.length),e=Array(a.length),f=[],h=this,g=!1,k=!0;if(!a.length){var m=!0;h.$evalAsync(function(){m&&b(e,e,h)});return function(){m=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=
        a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=h.$watch(a,function(a,f){e[b]=a;d[b]=f;g||(g=!0,h.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,k=0,m=g(a,function(a){d=a;var b,c,f,h;if(S(d))if(Na(d))for(e!==l&&(e=l,q=e.length=0,k++),a=d.length,q!==a&&(k++,e.length=q=a),b=0;b<a;b++)h=e[b],f=d[b],c=h!==h&&f!==f,c||h===f||(k++,e[b]=f);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,f=
        d[b],h=e[b],b in e?(c=h!==h&&f!==f,c||h===f||(k++,e[b]=f)):(q++,e[b]=f,k++));if(q>a)for(b in k++,e)d.hasOwnProperty(b)||(q--,delete e[b])}else e!==d&&(e=d,k++);return k}),l=[],n={},p=!0,q=0;return this.$watch(m,function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(S(d))if(Na(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)Ab.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var e,g,m,n,q=this.$$asyncQueue,r=this.$$postDigestQueue,s,B,J=b,N,M=[],O,H,W;k("$digest");h.$$checkUrlChange();
        this===A&&null!==d&&(h.defer.cancel(d),l());c=null;do{B=!1;for(N=this;q.length;){try{W=q.shift(),W.scope.$eval(W.expression)}catch(R){f(R)}c=null}a:do{if(n=N.$$watchers)for(s=n.length;s--;)try{if(e=n[s])if((g=e.get(N))!==(m=e.last)&&!(e.eq?ra(g,m):"number"===typeof g&&"number"===typeof m&&isNaN(g)&&isNaN(m)))B=!0,c=e,e.last=e.eq?Ha(g,null):g,e.fn(g,m===p?g:m,N),5>J&&(O=4-J,M[O]||(M[O]=[]),H=D(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,H+="; newVal: "+sa(g)+"; oldVal: "+sa(m),M[O].push(H));
        else if(e===c){B=!1;break a}}catch(t){f(t)}if(!(n=N.$$childHead||N!==this&&N.$$nextSibling))for(;N!==this&&!(n=N.$$nextSibling);)N=N.$parent}while(N=n);if((B||q.length)&&!J--)throw A.$$phase=null,a("infdig",b,sa(M));}while(B||q.length);for(A.$$phase=null;r.length;)try{r.shift()()}catch(G){f(G)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==A){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==
    this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null;this.$$listeners={};this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[];this.$destroy=this.$digest=this.$apply=w;this.$on=this.$watch=this.$watchGroup=
        function(){return w}}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){A.$$phase||A.$$asyncQueue.length||h.defer(function(){A.$$asyncQueue.length&&A.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{A.$$phase=null;try{A.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&A.$$applyAsyncQueue.push(b);
        q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[c.indexOf(b)]=null;n(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,h=!1,g={name:a,targetScope:e,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},k=db([g],arguments,1),m,l;do{d=e.$$listeners[a]||c;g.currentScope=e;m=0;for(l=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               d.length;m<l;m++)if(d[m])try{d[m].apply(null,k)}catch(n){f(n)}else d.splice(m,1),m--,l--;if(h)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var h=db([e],arguments,1),g,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(m){f(m)}else d.splice(g,
        1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var A=new m;return A}]}function Ed(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!X||8<=X)if(f=
        Aa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function ef(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(cb(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function Sc(b){var a=[];B(b)&&r(b,function(b){a.push(ef(b))});return a}function Fe(){this.SCE_CONTEXTS=ka;var b=["self"],a=[];
        this.resourceUrlWhitelist=function(a){arguments.length&&(b=Sc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Sc(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Ic(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}
            var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();
                if(c===ka.RESOURCE_URL){var g=Aa(e.toString()),p,l,q=!1;p=0;for(l=b.length;p<l;p++)if(d(b[p],g)){q=!0;break}if(q)for(p=0,l=a.length;p<l;p++)if(d(a[p],g)){q=!1;break}if(q)return e;throw Ca("insecurl",e.toString());}if(c===ka.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Ee(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw Ca("iequirks");
        var e=qa(ka);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Pa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(ka,function(a,b){var c=P(b);e[Wa("parse_as_"+c)]=function(b){return f(a,b)};e[Wa("get_trusted_"+c)]=function(b){return g(a,b)};e[Wa("trust_as_"+c)]=function(b){return h(a,
            b)}});return e}]}function Ge(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(P((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,n=!1,p=!1;if(k){for(var l in k)if(n=m.exec(l)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");n=!!("transition"in k||h+"Transition"in k);p=!!("animation"in k||h+"Animation"in
        k);!d||n&&p||(n=C(f.body.style.webkitTransition),p=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==X)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ua(),vendorPrefix:h,transitions:n,animations:p,android:d,msie:X,msieDocumentMode:g}}]}function Ie(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){h.totalPendingRequests--;
        if(!f)throw ja("tpload",e);return c.reject()}var h=d;h.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();h.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Je(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=Ea.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+
        b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var m=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(m.length)return m}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ke(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  a,c,d,e){function f(f,m,k){var n=B(k)&&!k,p=(n?d:c).defer(),l=p.promise;m=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},m);l.$$timeoutId=m;g[m]=p;return l}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b,a){var c=b;X&&(Z.setAttribute("href",c),c=Z.href);Z.setAttribute("href",c);return{href:Z.href,protocol:Z.protocol?
        Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Ic(b){b=C(b)?Aa(b):b;return b.protocol===Tc.protocol&&b.host===Tc.host}function Le(){this.$get=da(t)}function qc(b){function a(c,d){if(S(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
        "Filter")}}];a("currency",Uc);a("date",Vc);a("filter",ff);a("json",gf);a("limitTo",hf);a("lowercase",jf);a("number",Wc);a("orderBy",Xc);a("uppercase",kf)}function ff(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ea.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Ab.call(a,d)&&c(a[d],
        b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
    {$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function Uc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return null==b?b:Yc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Wc(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==
        b?b:Yc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Yc(b,a,c,d,e){if(!isFinite(b)||S(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?(g="0",b=0):(h=g,k=!0)}if(k)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(Zc)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Zc);g=b[0];b=b[1]||"";var n=
        0,p=a.lgSize,l=a.gSize;if(g.length>=p+l)for(n=g.length-p,k=0;k<n;k++)0===(n-k)%l&&0!==k&&(h+=c),h+=g.charAt(k);for(k=n;k<g.length;k++)0===(g.length-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();
        if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return vb(e,a,d)}}function wb(b,a){return function(c,d){var e=c["get"+b](),f=ib(a?"SHORT"+b:b);return d[f][e]}}function $c(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function ad(b){return function(a){var c=$c(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return vb(a,b)}}function Vc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:
        a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],m,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=lf.test(c)?U(c):a(c));ea(c)&&(c=new Date(c));if(!fa(c))return c;
        for(;e;)(k=mf.exec(e))?(h=db(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){m=nf[a];g+=m?m(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function gf(){return function(b){return sa(b,!0)}}function hf(){return function(b,a){if(!L(b)&&!C(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?
        a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Xc(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(fa(a)&&fa(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Na(a)||!c)return a;c=L(c)?c:[c];c=sd(c,function(a){var c=!1,d=a||Pa;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c=
        "-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var h=d();return e(function(a,b){return f(a[h],b[h])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Fa(b){D(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function bd(b,a,c,d){var e=this,f=b.parent().controller("form")||xb,g=[];e.$error={};e.$$success={};e.$pending=
        s;e.$name=a.name||a.ngForm;e.$dirty=!1;e.$pristine=!0;e.$valid=!0;e.$invalid=!1;e.$submitted=!1;f.$addControl(e);b.addClass(Ma);e.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};e.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};e.$addControl=function(a){Ja(a.$name,"input");g.push(a);a.$name&&(e[a.$name]=a)};e.$removeControl=function(a){a.$name&&e[a.$name]===a&&delete e[a.$name];r(e.$pending,function(b,c){e.$setValidity(c,null,a)});r(e.$error,function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           c){e.$setValidity(c,null,a)});Ra(g,a)};cd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Ra(d,c),0===d.length&&delete a[b])},parentForm:f,$animate:d});e.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,yb);e.$dirty=!0;e.$pristine=!1;f.$setDirty()};e.$setPristine=function(){d.setClass(b,Ma,yb+" ng-submitted");e.$dirty=!1;e.$pristine=!0;e.$submitted=!1;r(g,function(a){a.$setPristine()})};e.$setSubmitted=function(){d.addClass(b,
        "ng-submitted");e.$submitted=!0;f.$setSubmitted()}}function Ub(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function $a(b,a,c,d,e,f){a.prop("validity");var g=a[0].placeholder,h={},m=P(a[0].type);if(!e.android){var k=!1;a.on("compositionstart",function(a){k=!0});a.on("compositionend",function(){k=!1;n()})}var n=function(b){if(!k){var e=a.val(),f=b&&b.type;X&&"input"===(b||h).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===m||c.ngTrim&&"false"===c.ngTrim||(e=ba(e)),
        (d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",n);else{var p,l=function(a){p||(p=f.defer(function(){n(a);p=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||l(a)});if(e.hasEvent("paste"))a.on("paste cut",l)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function zb(b,a){return function(c){var d;if(fa(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-
        1)&&(c=c.substring(1,c.length-1));if(of.test(c))return new Date(c);b.lastIndex=0;if(c=b.exec(c))return c.shift(),d={yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0},r(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm,d.ss||0)}return NaN}}function ab(b,a,c,d){return function(e,f,g,h,m,k,n){function p(a){return B(a)?fa(a)?a:c(a):s}dd(e,f,g,h);$a(e,f,g,h,m,k);var l=h&&h.$options&&h.$options.timezone;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=
        c(b),"UTC"===l&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):s});h.$formatters.push(function(a){return fa(a)?n("date")(a,d,l):""});if(B(g.min)||g.ngMin){var q;h.$validators.min=function(a){return h.$isEmpty(a)||F(q)||c(a)>=q};g.$observe("min",function(a){q=p(a);h.$validate()})}if(B(g.max)||g.ngMax){var r;h.$validators.max=function(a){return h.$isEmpty(a)||F(r)||c(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function dd(b,a,c,d){(d.$$hasNativeValidators=S(a[0].validity))&&
    d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?s:b})}function ed(b,a,c,d,e){if(B(d)){b=b(d);if(!b.constant)throw K("ngModel")("constexpr",c,d);return b(a)}return e}function cd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Db(b,"-"):"";a(pf+b,!0===c);a(qf+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,m=b.parentForm,k=b.$animate;d.$setValidity=function(b,e,f){e===s?(d.$pending||
        (d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),fd(d.$pending)&&(d.$pending=s));"boolean"!==typeof e?(h(d.$error,b,f),h(d.$$success,b,f)):e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(gd,!0),d.$valid=d.$invalid=s,c("",null)):(a(gd,!1),d.$valid=fd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?s:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);m.$setValidity(b,e,d)};c("",!0)}function fd(b){if(b)for(var a in b)return!1;
        return!0}function Vb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(C(a))return a.split(" ");if(S(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});
        g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var q=m(k,1);h.$addClass(q)}else if(!ra(b,n)){var r=e(n),q=d(k,r),k=d(r,k),q=m(q,1),k=m(k,-1);q&&q.length&&c.addClass(g,q);k&&k.length&&c.removeClass(g,k)}}n=qa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}
    var rf=/^\/(.+)\/([a-z]*)$/,P=function(b){return C(b)?b.toLowerCase():b},Ab=Object.prototype.hasOwnProperty,ib=function(b){return C(b)?b.toUpperCase():b},X,G,la,Ta=[].slice,sf=[].push,Ga=Object.prototype.toString,Sa=K("ng"),Ea=t.angular||(t.angular={}),Va,bb=0;X=U((/msie (\d+)/.exec(P(navigator.userAgent))||[])[1]);isNaN(X)&&(X=U((/trident\/.*; rv:(\d+)/.exec(P(navigator.userAgent))||[])[1]));w.$inject=[];Pa.$inject=[];var L=Array.isArray,ba=function(b){return C(b)?b.trim():b},Ua=function(){if(B(Ua.isActive_))return Ua.isActive_;
        var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Ua.isActive_=b},fb=["ng-","data-ng-","ng:","x-ng-"],yd=/[A-Z]/g,hc=!1,Eb,Cd={full:"1.3.0-rc.1",major:1,minor:3,dot:0,codeName:"backyard-atomicity"};V.expando="ng339";var ob=V.cache={},Te=1;V._data=function(b){return this.cache[b[this.expando]]||{}};var Oe=/([\:\-\_]+(.))/g,Pe=/^moz([A-Z])/,tf={mouseleave:"mouseout",mouseenter:"mouseover"},Hb=K("jqLite"),Se=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gb=/<|&#?\w+;/,Qe=/<([\w:]+)/,Re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var Ia=V.prototype={ready:function(b){function a(){c||(c=
        !0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),V(t).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?G(this[b]):G(this[this.length+b])},length:0,push:sf,sort:[].sort,splice:[].splice},qb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){qb[P(b)]=b});var zc={};r("input select option textarea button form details".split(" "),
        function(b){zc[b]=!0});var Ac={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Jb,removeData:mb},function(b,a){V[a]=b});r({data:Jb,inheritedData:pb,scope:function(b){return G.data(b,"$scope")||pb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return G.data(b,"$isolateScope")||G.data(b,"$isolateScopeNoTemplate")},controller:vc,injector:function(b){return pb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:jb,
        css:function(b,a,c){a=Wa(a);if(B(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=P(a);if(qb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(F(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=
            b}b.$dv="";return b}(),val:function(b,a){if(F(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;lb(b,!0);b.innerHTML=a},empty:wc},function(b,a){V.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==wc&&(2==b.length&&b!==jb&&b!==vc?a:d)===s){if(S(a)){for(e=0;e<g;e++)if(b===Jb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
        g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:mb,on:function a(c,d,e,f){if(B(f))throw Hb("onargs");if(rc(c)){var g=nb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Ve(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],m=g.length;m--;){d=g[m];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,tf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,
        h,!1),k=f[d]);k.push(e)}}},off:uc,one:function(a,c,d){a=G(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;lb(a);r(new V(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(1===d||11===d){c=new V(c);for(var d=0,e=c.length;d<
        e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new V(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=G(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:xc,detach:function(a){xc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new V(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Lb,removeClass:Kb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=
        d;F(f)&&(f=!jb(a,c));(f?Lb:Kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ib,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=nb(a);if(g=(g=g&&g.events)&&g[e])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:w,type:e,target:a},c.type&&(e=E(e,c)),
        c=qa(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)})}},function(a,c){V.prototype[c]=function(c,e,f){for(var g,h=0,m=this.length;h<m;h++)F(g)?(g=a(this[h],c,e,f),B(g)&&(g=G(g))):tc(g,a(this[h],c,e,f));return B(g)?g:this};V.prototype.bind=V.prototype.on;V.prototype.unbind=V.prototype.off});Xa.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var Cc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Xe=/,/,Ye=/^\s*(_?)(\S+?)\1\s*$/,Bc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,La=K("$injector");Cb.$$annotate=Mb;var uf=K("$animate"),oe=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw uf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback",function(a,d){function e(){f||
        (f=a.defer(),d(function(){f.resolve();f=null}));return f.promise}var f;return{enter:function(a,c,d){d?d.after(a):c.prepend(a);return e()},leave:function(a){a.remove();return e()},move:function(a,c,d){return this.enter(a,c,d)},addClass:function(a,c){c=C(c)?c:L(c)?c.join(" "):"";r(a,function(a){Lb(a,c)});return e()},removeClass:function(a,c){c=C(c)?c:L(c)?c.join(" "):"";r(a,function(a){Kb(a,c)});return e()},setClass:function(a,c,d){this.addClass(a,c);this.removeClass(a,d);return e()},enabled:w,cancel:w}}]}],
        ja=K("$compile");jc.$inject=["$provide","$$sanitizeUriProvider"];var af=/^(x[\:\-_]|data[\:\-_])/i,Pb=K("$interpolate"),vf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,df={http:80,https:443,ftp:21},sb=K("$location");Mc.prototype=Sb.prototype=Lc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(F(a))return this.$$url;a=vf.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),
        port:tb("$$port"),path:Nc("$$path",function(a){a=a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||ea(a))a=a.toString(),this.$$search=fc(a);else if(S(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw sb("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Nc("$$hash",function(a){return a?a.toString():""}),replace:function(){this.$$replace=
            !0;return this}};var oa=K("$parse"),wf=Function.prototype.call,xf=Function.prototype.apply,yf=Function.prototype.bind,hd=Object.create(null);r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;hd[c]=a});var Wb=E(Object.create(null),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}}),zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Tb=function(a){this.options=a};Tb.prototype={constructor:Tb,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),
        this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=Wb[this.ch],e=Wb[a],f=Wb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,
        text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
        a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&
        e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}e&&"."===
        c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=s));if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}this.tokens.push({index:d,text:c,fn:hd[c]||Pc(c,this.options,a)});g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
        this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=
        d};Za.ZERO=E(function(){return 0},{sharedGetter:!0,constant:!0});Za.prototype={constructor:Za,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();
        (a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},
        peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&
            c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression(),c;c=this.expect("|");)a=this.binaryFn(a,c.fn,this.filter());return a},filter:function(){var a=
            this.expect(),c=this.$filter(a.text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());return da(function(a,g,h){if(e){e[0]=h;for(h=d.length;h--;)e[h+1]=d[h](a,g);return c.apply(s,e)}return c(h)})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,
            c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND());return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),
            c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;
            return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=Pc(d,this.options,c);return E(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return ub(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f);na(h,
            c);return g?Ba(g[h],c):s},{assign:function(e,f,g){var h=na(d(e,g),c);(g=Ba(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var m=c?c(g,h):g,k=a(g,h,m)||w;if(f)for(var n=d.length;n--;)f[n]=Ba(d[n](g,h),e);Ba(m,e);if(k){if(k.constructor===k)throw oa("isecfn",e);if(k===wf||k===xf||k===yf)throw oa("isecff",e);
        }m=k.apply?k.apply(m,f):k(f[0],f[1],f[2],f[3],f[4]);return Ba(m,e)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0,m=a.length;h<m;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||
            d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},m=0,k=a.length;m<k;m++){var n=a[m];e[n.key]=n.value(c,d)}return e},{literal:!0,constant:c})}};var Qc=Object.create(null),Ca=K("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=K("$compile"),Z=Y.createElement("a"),Tc=Aa(t.location.href,!0);qc.$inject=["$provide"];Uc.$inject=["$locale"];Wc.$inject=["$locale"];
    var Zc=".",nf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:wb("Month"),MMM:wb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:wb("Day"),EEE:wb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(vb(Math[0<
        a?"floor":"ceil"](a/60),2)+vb(Math.abs(a%60),2))},ww:ad(2),w:ad(1)},mf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,lf=/^\-?\d+$/;Vc.$inject=["$locale"];var jf=da(P),kf=da(ib);Xc.$inject=["$parse"];var Fd=da({restrict:"E",compile:function(a,c){8>=X&&(c.href||c.name||c.$set("href",""),a.append(Y.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ga.call(c.prop("href"))?"xlink:href":"href";c.on("click",
        function(a){c.attr(f)||a.preventDefault()})}}}),kb={};r(qb,function(a,c){if("multiple"!=a){var d=va("ng-"+c);kb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Ac,function(a,c){kb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(rf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=
        va("ng-"+a);kb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ga.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),X&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var xb={$addControl:w,$removeControl:w,$setValidity:w,$$setPending:w,$setDirty:w,$setPristine:w,$setSubmitted:w,$$clearControlValidity:w};bd.$inject=["$element","$attrs","$scope","$animate"];var id=function(a){return["$timeout",
            function(c){return{name:"form",restrict:a?"EAC":"E",controller:bd,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};e[0].addEventListener("submit",h,!1);e.on("$destroy",function(){c(function(){e[0].removeEventListener("submit",h,!1)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&ub(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);
                k&&ub(a,k,s,k);E(g,xb)})}}}}}]},Gd=id(),Td=id(!0),of=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Af=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Bf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Cf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,jd=/^(\d{4})-(\d{2})-(\d{2})$/,kd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d))?$/,Xb=/^(\d{4})-W(\d\d)$/,ld=/^(\d{4})-(\d\d)$/,md=/^(\d\d):(\d\d)(?::(\d\d))?$/,
        Df=/(\s+|^)default(\s+|$)/,Yb=new K("ngModel"),nd={text:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Ub(e)},date:ab("date",jd,zb(jd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ab("datetimelocal",kd,zb(kd,"yyyy MM dd HH mm ss".split(" ")),"yyyy-MM-ddTHH:mm:ss"),time:ab("time",md,zb(md,["HH","mm","ss"]),"HH:mm:ss"),week:ab("week",Xb,function(a){if(fa(a))return a;if(C(a)){Xb.lastIndex=0;var c=Xb.exec(a);if(c){a=+c[1];var d=+c[2],c=$c(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),
            month:ab("month",ld,zb(ld,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){dd(a,c,d,e);$a(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Cf.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!ea(a))throw Yb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||F(h)||a>=h};d.$observe("min",function(a){B(a)&&!ea(a)&&(a=parseFloat(a,10));h=ea(a)&&!isNaN(a)?a:s;e.$validate()})}if(d.max||
                d.ngMax){var m;e.$validators.max=function(a){return e.$isEmpty(a)||F(m)||a<=m};d.$observe("max",function(a){B(a)&&!ea(a)&&(a=parseFloat(a,10));m=ea(a)&&!isNaN(a)?a:s;e.$validate()})}},url:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Ub(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Af.test(d)}},email:function(a,c,d,e,f,g){$a(a,c,d,e,f,g);Ub(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Bf.test(d)}},radio:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   c,d,e){F(d.name)&&c.attr("name",++bb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,m){var k=ed(m,a,"ngTrueValue",d.ngTrueValue,!0),n=ed(m,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==k};e.$formatters.push(function(a){return ra(a,
                k)});e.$parsers.push(function(a){return a?k:n})},hidden:w,button:w,submit:w,reset:w,file:w},kc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:function(f,g,h,m){m[0]&&(nd[P(h.type)]||nd.text)(f,g,h,m[0],c,a,d,e)}}}],pf="ng-valid",qf="ng-invalid",Ma="ng-pristine",yb="ng-dirty",gd="ng-pending",Ef=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q",function(a,c,d,e,f,g,h,m,k){this.$modelValue=this.$viewValue=
            Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=s;this.$name=d.name;var n=f(d.ngModel),p=null,l=this,q=function(){var c=n(a);l.$options&&l.$options.getterSetter&&D(c)&&(c=c());return c},A=function(c){var d;l.$options&&l.$options.getterSetter&&D(d=n(a))?d(l.$modelValue):n.assign(a,
            l.$modelValue)};this.$$setOptions=function(a){l.$options=a;if(!(n.assign||a&&a.getterSetter))throw Yb("nonassign",d.ngModel,ta(e));};this.$render=w;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var u=e.inheritedData("$formController")||xb,x=0;e.addClass(Ma).addClass("ng-untouched");cd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:u,$animate:g});this.$setPristine=function(){l.$dirty=!1;l.$pristine=!0;g.removeClass(e,yb);g.addClass(e,
            Ma)};this.$setUntouched=function(){l.$touched=!1;l.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){l.$touched=!0;l.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(p);l.$viewValue=l.$$lastCommittedViewValue;l.$render()};this.$validate=function(){ea(l.$modelValue)&&isNaN(l.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;r(l.$validators,function(e,f){var h=e(c,
            d);a=a&&h;g(f,h)});return a?!0:(r(l.$asyncValidators,function(a,c){g(c,null)}),m(),!1)}function h(){var a=[];r(l.$asyncValidators,function(e,f){var h=e(c,d);if(!h||!D(h.then))throw Yb("$asyncValidators",h);g(f,s);a.push(h.then(function(){g(f,!0)},function(a){g(f,!1)}))});a.length?k.all(a).then(m):m()}function g(a,c){n===x&&l.$setValidity(a,c)}function m(){n===x&&e()}x++;var n=x;(function(a){var c=l.$$parserName||"parse";if(a===s)g(c,null);else if(g(c,a),!a)return r(l.$validators,function(a,c){g(c,
            null)}),r(l.$asyncValidators,function(a,c){g(c,null)}),m(),!1;return!0})(a)&&f()&&h()};this.$commitViewValue=function(){var a=l.$viewValue;h.cancel(p);if(l.$$lastCommittedViewValue!==a||""===a&&l.$$hasNativeValidators)l.$$lastCommittedViewValue=a,l.$pristine&&(l.$dirty=!0,l.$pristine=!1,g.removeClass(e,Ma),g.addClass(e,yb),u.$setDirty()),this.$$parseAndValidate()};this.$$parseAndValidate=function(){for(var a=!0,c=l.$$lastCommittedViewValue,d=c,e=0;e<l.$parsers.length;e++)if(d=l.$parsers[e](d),F(d)){a=
            !1;break}ea(l.$modelValue)&&isNaN(l.$modelValue)&&(l.$modelValue=q());var f=l.$modelValue,h=l.$options&&l.$options.allowInvalid;h&&(l.$modelValue=d,l.$modelValue!==f&&l.$$writeModelToScope());l.$$runValidators(a,d,c,function(){h||(l.$modelValue=l.$valid?d:s,l.$modelValue!==f&&l.$$writeModelToScope())})};this.$$writeModelToScope=function(){A(l.$modelValue);r(l.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){l.$viewValue=a;l.$options&&!l.$options.updateOnDefault||
        l.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=l.$options;e&&B(e.debounce)&&(e=e.debounce,ea(e)?d=e:ea(e[c])?d=e[c]:ea(e["default"])&&(d=e["default"]));h.cancel(p);d?p=h(function(){l.$commitViewValue()},d):m.$$phase?l.$commitViewValue():a.$apply(function(){l.$commitViewValue()})};a.$watch(function(){var a=q();if(a!==l.$modelValue){l.$modelValue=a;for(var c=l.$formatters,d=c.length,e=a;d--;)e=c[d](e);l.$viewValue!==e&&(l.$viewValue=l.$$lastCommittedViewValue=e,
            l.$render(),l.$$runValidators(s,a,e,w))}return a})}],he=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ef,link:{pre:function(a,c,d,e){var f=e[0],g=e[1]||xb;f.$$setOptions(e[2]&&e[2].$options);g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(a){f.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){f.$touched||a.$apply(function(){f.$setTouched()})})}}}},
        je=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),mc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},lc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&
        (a=new RegExp(a));if(a&&!a.test)throw K("ngPattern")("noregexp",g,a,ta(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||F(f)||f.test(a)}}}}},oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=U(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(c)||c.length<=f}}}}},nc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",
            function(a){f=U(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},ie=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?ba(f):f;e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?ba(a):a)});return c}});e.$formatters.push(function(a){return L(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},Ff=/^(true|false|\d+)$/,
        ke=function(){return{restrict:"A",priority:100,compile:function(a,c){return Ff.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},le=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=ba(this.$options.updateOn.replace(Df,function(){d.$options.updateOnDefault=
            !0;return" "}))):this.$options.updateOnDefault=!0}]}},Ld=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);c.$watch(f.ngBind,function(a){e.text(a==s?"":a)})}}}}],Nd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);g.$observe("ngBindTemplate",function(a){f.text(a)})}}}}],Md=
            ["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Od=Vb("",!0),Qd=Vb("Odd",0),Pd=Vb("Even",1),Rd=Fa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Sd=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],
        pc={},Gf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);pc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c]);return function(c,d){var f=P(a);d.on(f,function(a){var d=function(){h(c,{$event:a})};Gf[f]&&e.$$phase?c.$evalAsync(d):c.$apply(d)})}}}}]});var Vd=["$animate",function(a){return{multiElement:!0,
            transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(c){c?m||g(function(c,f){m=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=hb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],Wd=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
            controller:Ea.noop,compile:function(f,g){var h=g.ngInclude||g.src,m=g.onload||"",k=g.autoscroll;return function(f,g,l,q,r){var u=0,s,z,t,v=function(){z&&(z.remove(),z=null);s&&(s.$destroy(),s=null);t&&(d.leave(t).then(function(){z=null}),z=t,t=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!B(k)||k&&!f.$eval(k)||c()},l=++u;e?(a(e,!0).then(function(a){if(l===u){var c=f.$new();q.template=a;a=r(c,function(a){v();d.enter(a,null,g).then(h)});s=c;t=a;s.$emit("$includeContentLoaded");
                f.$eval(m)}},function(){l===u&&(v(),f.$emit("$includeContentError"))}),f.$emit("$includeContentRequested")):(v(),q.template=null)})}}}}],me=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(sc(f.template,Y).childNodes)(c,function(a){d.append(a)},s,s,d)):(d.html(f.template),a(d.contents())(c))}}}],Xd=Fa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Yd=Fa({terminal:!0,priority:1E3}),
        Zd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,n=e.$eval(m)||{},p={},l=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(n[P(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(n,function(a,e){p[e]=c(a.replace(d,l+h+"-"+k+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-k));return p[c](e)},
            function(a){f.text(a)})}}}],$d=["$parse","$animate",function(a,c){var d=K("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,m=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if(!k)throw d("iexp",h);var n=k[1],p=k[2],l=k[3],q=k[4],k=n.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw d("iidexp",n);var A=k[3]||k[1],u=k[2];if(l&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(l)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(l)))throw d("badident",l);var t,z,B,v,w={$id:Ka};q?t=a(q):(B=function(a,c){return Ka(c)},v=function(a){return a});return function(a,f,g,k,n){t&&(z=function(c,d,e){u&&(w[u]=c);w[A]=d;w.$index=e;return t(a,w)});
                var q=Object.create(null);a.$watchCollection(p,function(g){var k,p,t=f[0],J,x=Object.create(null),w,N,E,F,y,C,ga;l&&(a[l]=g);if(Na(g))y=g,p=z||B;else{p=z||v;y=[];for(ga in g)g.hasOwnProperty(ga)&&"$"!=ga.charAt(0)&&y.push(ga);y.sort()}w=y.length;ga=Array(w);for(k=0;k<w;k++)if(N=g===y?k:y[k],E=g[N],F=p(N,E,k),q[F])C=q[F],delete q[F],x[F]=C,ga[k]=C;else{if(x[F])throw r(ga,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",h,F,sa(E));ga[k]={id:F,scope:s,clone:s};x[F]=!0}for(J in q){C=q[J];F=hb(C.clone);
                    c.leave(F);if(F[0].parentNode)for(k=0,p=F.length;k<p;k++)F[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<w;k++)if(N=g===y?k:y[k],E=g[N],C=ga[k],C.scope){J=t;do J=J.nextSibling;while(J&&J.$$NG_REMOVED);C.clone[0]!=J&&c.move(hb(C.clone),null,G(t));t=C.clone[C.clone.length-1];e(C.scope,k,A,E,u,N,w)}else n(function(a,d){C.scope=d;var f=m.cloneNode(!1);a[a.length++]=f;c.enter(a,null,G(t));t=f;C.clone=a;x[C.id]=C;e(C.scope,k,A,E,u,N,w)});q=x})}}}}],ae=["$animate",function(a){return{restrict:"A",multiElement:!0,
            link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide")})}}}],Ud=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}}],be=Fa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ce=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        d,e,f){var g=[],h=[],m=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=m.length;d<e;++d)a.cancel(m[d]);d=m.length=0;for(e=k.length;d<e;++d){var s=hb(h[d].clone);k[d].$destroy();(m[d]=a.leave(s)).then(n(m,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],
        de=Fa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),ee=Fa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ge=Fa({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw K("ngTransclude")("orphan",ta(c));f(function(a){c.empty();
            c.append(a)})}}),Hd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Hf=K("ngOptions"),fe=da({restrict:"A",terminal:!0}),Id=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:w};return{restrict:"E",require:["select",
            "?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},n=e,p;m.databound=d.ngModel;m.init=function(a,c,d){n=a;p=d};m.addOption=function(c,d){Ja(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",
            !0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=w})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new Xa(d.$viewValue);r(c.find("option"),
            function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){ra(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,h){function g(){z||(e.$$postDigest(k),z=!0)}function k(){z=!1;var a={"":[]},c=[""],d,g,l,s,t;l=h.$modelValue;s=F(e)||[];var A=p?Zb(s):s,G,y,D;y={};D=!1;if(q)if(g=h.$modelValue,x&&L(g))for(D=new Xa([]),d={},t=0;t<g.length;t++)d[n]=
            g[t],D.put(x(e,d),g[t]);else D=new Xa(g);t=D;var H,K;for(D=0;G=A.length,D<G;D++){g=D;if(p){g=A[D];if("$"===g.charAt(0))continue;y[p]=g}y[n]=s[g];d=r(e,y)||"";(g=a[d])||(g=a[d]=[],c.push(d));q?d=B(t.remove(x?x(e,y):w(e,y))):(x?(d={},d[n]=l,d=x(e,d)===x(e,y)):d=l===w(e,y),t=t||d);H=m(e,y);H=B(H)?H:"";g.push({id:x?x(e,y):p?A[D]:D,label:H,selected:d})}q||(u||null===l?a[""].unshift({id:"",label:"",selected:!t}):t||a[""].unshift({id:"?",label:"",selected:!0}));y=0;for(A=c.length;y<A;y++){d=c[y];g=a[d];
            E.length<=y?(l={element:v.clone().attr("label",d),label:g.label},s=[l],E.push(s),f.append(l.element)):(s=E[y],l=s[0],l.label!=d&&l.element.attr("label",l.label=d));H=null;D=0;for(G=g.length;D<G;D++)d=g[D],(t=s[D+1])?(H=t.element,t.label!==d.label&&H.text(t.label=d.label),t.id!==d.id&&H.val(t.id=d.id),H[0].selected!==d.selected&&(H.prop("selected",t.selected=d.selected),X&&H.prop("selected",t.selected))):(""===d.id&&u?K=u:(K=C.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).text(d.label),
                s.push({element:K,label:d.label,id:d.id,selected:d.selected}),H?H.after(K):l.element.append(K),H=K);for(D++;s.length>D;)s.pop().element.remove()}for(;E.length>y;)E.pop()[0].element.remove()}var l;if(!(l=t.match(d)))throw Hf("iexp",t,ta(f));var m=c(l[2]||l[1]),n=l[4]||l[6],p=l[5],r=c(l[3]||""),w=c(l[2]?l[1]:n),F=c(l[7]),x=l[8]?c(l[8]):null,E=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=F(e)||[],d={},g,l,m,
            r,t,u,v;if(q)for(l=[],r=0,u=E.length;r<u;r++)for(a=E[r],m=1,t=a.length;m<t;m++){if((g=a[m].element)[0].selected){g=g.val();p&&(d[p]=g);if(x)for(v=0;v<c.length&&(d[n]=c[v],x(e,d)!=g);v++);else d[n]=c[g];l.push(w(e,d))}}else if(g=f.val(),"?"==g)l=s;else if(""===g)l=null;else if(x)for(v=0;v<c.length;v++){if(d[n]=c[v],x(e,d)==g){l=w(e,d);break}}else d[n]=c[g],p&&(d[p]=g),l=w(e,d);h.$setViewValue(l);k()})});h.$render=k;e.$watchCollection(F,g);q&&e.$watchCollection(function(){return h.$modelValue},g)}if(m[1]){var l=
            m[0];m=m[1];var q=h.multiple,t=h.ngOptions,u=!1,w,z=!1,C=G(Y.createElement("option")),v=G(Y.createElement("optgroup")),y=C.clone();h=0;for(var E=g.children(),D=E.length;h<D;h++)if(""===E[h].value){w=u=E.eq(h);break}l.init(m,u,y);q&&(m.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,m):q?n(e,g,m):k(e,g,m,l)}}}}],Kd=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Jd=da({restrict:"E",terminal:!1});t.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(zd(),Bd(Ea),G(Y).ready(function(){vd(Y,gc)}))})(window,document);
!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.3.0-rc.1
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(D,f,E){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(P,w,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?w.data("$$ngAnimateChildren",!0):P.$watch(g,function(f){w.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,w){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(P,w){function g(f){for(var g=0;g<f.length;g++){var h=f[g];if(1==h.nodeType)return h}}
    function Z(f,h){return g(f)==g(h)}var q=f.noop,h=f.forEach,$=w.$$selectors,W=f.isArray,u={running:!0};P.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest",function(Q,D,I,E,v,X,x,Y,J){function K(a,c){var d=a.data("$$ngAnimateState")||{};c&&(d.running=!0,d.structural=!0,a.data("$$ngAnimateState",d));return d.disabled||d.running&&d.structural}function L(a){var c,d=D.defer();d.promise.$$cancelFn=function(){c&&c()};
        x.$$postDigest(function(){c=a(function(){d.resolve()})});return d.promise}function M(a,c,d){d=d||{};var e={};h(c.add,function(b){b&&b.length&&(e[b]=e[b]||0,e[b]++)});h(c.remove,function(b){b&&b.length&&(e[b]=e[b]||0,e[b]--)});var R=[];h(d,function(b,a){h(a.split(" "),function(a){R[a]=b})});var g=[],l=[];h(e,function(b,c){var d=f.$$hasClass(a[0],c),e=R[c]||{};0>b?(d||"addClass"==e.event)&&l.push(c):0<b&&(d&&"removeClass"!=e.event||g.push(c))});return 0<g.length+l.length&&[g.join(" "),l.join(" ")]}
        function N(a){if(a){var c=[],d={};a=a.substr(1).split(".");(E.transitions||E.animations)&&c.push(I.get($[""]));for(var e=0;e<a.length;e++){var f=a[e],g=$[f];g&&!d[f]&&(c.push(I.get(g)),d[f]=!0)}return c}}function T(a,c,d){function e(b,a){var c=b[a],d=b["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(c||d)return"leave"==a&&(d=c,c=null),U.push({event:a,fn:c}),m.push({event:a,fn:d}),!0}function f(c,r,e){var A=[];h(c,function(b){b.fn&&A.push(b)});var k=0;h(A,function(c,f){var g=function(){a:{if(r){(r[f]||
            q)();if(++k<A.length)break a;r=null}e()}};switch(c.event){case "setClass":r.push(c.fn(a,l,b,g));break;case "addClass":r.push(c.fn(a,l||d,g));break;case "removeClass":r.push(c.fn(a,b||d,g));break;default:r.push(c.fn(a,g))}});r&&0===r.length&&e()}var g=a[0];if(g){var l,b;W(d)&&(l=d[0],b=d[1],l?b?d=l+" "+b:(d=l,c="addClass"):(d=b,c="removeClass"));var r="setClass"==c,A=r||"addClass"==c||"removeClass"==c,y=a.attr("class")+" "+d;if(B(y)){var C=q,k=[],m=[],n=q,s=[],U=[],y=(" "+y).replace(/\s+/g,".");h(N(y),
            function(b){!e(b,c)&&r&&(e(b,"addClass"),e(b,"removeClass"))});return{node:g,event:c,className:d,isClassBased:A,isSetClassOperation:r,before:function(b){C=b;f(m,k,function(){C=q;b()})},after:function(b){n=b;f(U,s,function(){n=q;b()})},cancel:function(){k&&(h(k,function(b){(b||q)(!0)}),C(!0));s&&(h(s,function(b){(b||q)(!0)}),n(!0))}}}}}function F(a,c,d,e,g,S,l){function b(b){var l="$animate:"+b;m&&m[l]&&0<m[l].length&&X(function(){d.triggerHandler(l,{event:a,className:c})})}function r(){b("before")}
            function A(){b("after")}function y(){y.hasBeenRun||(y.hasBeenRun=!0,S())}function C(){if(!C.hasBeenRun){C.hasBeenRun=!0;var r=d.data("$$ngAnimateState");r&&(k&&k.isClassBased?z(d,c):(X(function(){var b=d.data("$$ngAnimateState")||{};p==b.index&&z(d,c,a)}),d.data("$$ngAnimateState",r)));b("close");l()}}var k=T(d,a,c);if(!k)return y(),r(),A(),C(),q;a=k.event;c=k.className;var m=f.element._data(k.node),m=m&&m.events;e||(e=g?g.parent():d.parent());if(H(d,e))return y(),r(),A(),C(),q;e=d.data("$$ngAnimateState")||
            {};var n=e.active||{},s=e.totalActive||0,U=e.last;g=!1;if(0<s){s=[];if(k.isClassBased)"setClass"==U.event?(s.push(U),z(d,c)):n[c]&&(t=n[c],t.event==a?g=!0:(s.push(t),z(d,c)));else if("leave"==a&&n["ng-leave"])g=!0;else{for(var t in n)s.push(n[t]);e={};z(d,!0)}0<s.length&&h(s,function(b){b.cancel()})}!k.isClassBased||k.isSetClassOperation||g||(g="addClass"==a==d.hasClass(c));if(g)return y(),r(),A(),b("close"),l(),q;n=e.active||{};s=e.totalActive||0;if("leave"==a)d.one("$destroy",function(b){b=f.element(this);
                var a=b.data("$$ngAnimateState");a&&(a=a.active["ng-leave"])&&(a.cancel(),z(b,"ng-leave"))});d.addClass("ng-animate");var p=G++;s++;n[c]=k;d.data("$$ngAnimateState",{last:k,active:n,index:p,totalActive:s});r();k.before(function(b){var l=d.data("$$ngAnimateState");b=b||!l||!l.active[c]||k.isClassBased&&l.active[c].event!=a;y();!0===b?C():(A(),k.after(C))});return k.cancel}function p(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),
            h(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&h(a.active,function(a){a.cancel()})})}function z(a,c){if(Z(a,v))u.disabled||(u.running=!1,u.structural=!1);else if(c){var d=a.data("$$ngAnimateState")||{},e=!0===c;!e&&d.active&&d.active[c]&&(d.totalActive--,delete d.active[c]);if(e||!d.totalActive)a.removeClass("ng-animate"),a.removeData("$$ngAnimateState")}}function H(a,c){if(u.disabled)return!0;if(Z(a,v))return u.running;var d,e,g;do{if(0===c.length)break;var h=Z(c,v),l=h?
            u:c.data("$$ngAnimateState")||{};if(l.disabled)return!0;h&&(g=!0);!1!==d&&(h=c.data("$$ngAnimateChildren"),f.isDefined(h)&&(d=h));e=e||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!d&&e}v.data("$$ngAnimateState",u);var V=x.$watch(function(){return J.totalPendingRequests},function(a,c){0===a&&(V(),x.$$postDigest(function(){x.$$postDigest(function(){u.running=!1})}))}),G=0,O=w.classNameFilter(),B=O?function(a){return O.test(a)}:function(){return!0};return{enter:function(a,c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              d){a=f.element(a);c=c&&f.element(c);d=d&&f.element(d);K(a,!0);Q.enter(a,c,d);return L(function(e){return F("enter","ng-enter",f.element(g(a)),c,d,q,e)})},leave:function(a){a=f.element(a);p(a);K(a,!0);this.enabled(!1,a);return L(function(c){return F("leave","ng-leave",f.element(g(a)),null,null,function(){Q.leave(a)},c)})},move:function(a,c,d){a=f.element(a);c=c&&f.element(c);d=d&&f.element(d);p(a);K(a,!0);Q.move(a,c,d);return L(function(e){return F("move","ng-move",f.element(g(a)),c,d,q,e)})},addClass:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 c){return this.setClass(a,c,[])},removeClass:function(a,c){return this.setClass(a,[],c)},setClass:function(a,c,d){a=f.element(a);a=f.element(g(a));if(K(a))return Q.setClass(a,c,d);c=W(c)?c:c.split(" ");d=W(d)?d:d.split(" ");var e=a.data("$$animateClasses");if(e)return e.add=e.add.concat(c),e.remove=e.remove.concat(d),e.promise;a.data("$$animateClasses",e={add:c,remove:d});return e.promise=L(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");var l=a.data("$$ngAnimateState")||
        {},b=M(a,d,l.active);return b?F("setClass",b,a,null,null,function(){Q.setClass(a,b[0],b[1])},c):c()})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)z(c);else{var d=c.data("$$ngAnimateState")||{};d.disabled=!0;c.data("$$ngAnimateState",d)}break;case 1:u.disabled=!a;break;default:a=!u.disabled}return!!a}}}]);w.register("",["$window","$sniffer","$timeout","$$animateReflow",function(u,w,I,P){function v(a,b){d&&d();c.push(b);d=P(function(){h(c,function(b){b()});
        c=[];d=null;B={}})}function X(a,b){var c=g(a);a=f.element(c);S.push(a);c=Date.now()+b;c<=R||(I.cancel(e),R=c,e=I(function(){x(S);S=[]},b,!1))}function x(a){h(a,function(b){(b=b.data("$$ngAnimateCSS3Data"))&&h(b.closeAnimationFns,function(b){b()})})}function Y(a,b){var c=b?B[b]:null;if(!c){var d=0,e=0,g=0,f=0;h(a,function(b){if(1==b.nodeType){b=u.getComputedStyle(b)||{};d=Math.max(J(b[H+"Duration"]),d);e=Math.max(J(b[H+"Delay"]),e);f=Math.max(J(b[G+"Delay"]),f);var a=J(b[G+"Duration"]);0<a&&(a*=parseInt(b[G+
        "IterationCount"],10)||1);g=Math.max(a,g)}});c={total:0,transitionDelay:e,transitionDuration:d,animationDelay:f,animationDuration:g};b&&(B[b]=c)}return c}function J(a){var b=0;a=f.isString(a)?a.split(/\s*,\s*/):[];h(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function K(c,b,d){c=0<=["ng-enter","ng-leave","ng-move"].indexOf(d);var e,f=b.parent(),h=f.data("$$ngAnimateKey");h||(f.data("$$ngAnimateKey",++a),h=a);e=h+"-"+g(b).getAttribute("class");var f=e+" "+d,h=B[f]?++B[f].total:0,k={};if(0<
        h){var m=d+"-stagger",k=e+" "+m;(e=!B[k])&&b.addClass(m);k=Y(b,k);e&&b.removeClass(m)}b.addClass(d);var m=b.data("$$ngAnimateCSS3Data")||{},n=Y(b,f);e=n.transitionDuration;n=n.animationDuration;if(c&&0===e&&0===n)return b.removeClass(d),!1;d=c&&0<e;c=0<n&&0<k.animationDelay&&0===k.animationDuration;b.data("$$ngAnimateCSS3Data",{stagger:k,cacheKey:f,running:m.running||0,itemIndex:h,blockTransition:d,closeAnimationFns:m.closeAnimationFns||[]});b=g(b);d&&(b.style[H+"Property"]="none");c&&(b.style[G+
        "PlayState"]="paused");return!0}function L(a,b,c,d){function e(a){b.off(D,f);b.removeClass(m);b.removeClass(n);x&&I.cancel(x);F(b,c);a=g(b);for(var d in s)a.style.removeProperty(s[d])}function f(b){b.stopPropagation();var a=b.originalEvent||b;b=a.$manualTimeStamp||a.timeStamp||Date.now();a=parseFloat(a.elapsedTime.toFixed(3));Math.max(b-E,0)>=B&&a>=w&&d()}var k=g(b);a=b.data("$$ngAnimateCSS3Data");if(-1!=k.getAttribute("class").indexOf(c)&&a){a.blockTransition&&(k.style[H+"Property"]="");var m="",
        n="";h(c.split(" "),function(b,a){var c=(0<a?" ":"")+b;m+=c+"-active";n+=c+"-pending"});var s=[],p=a.itemIndex,t=a.stagger,q=0;if(0<p){q=0;0<t.transitionDelay&&0===t.transitionDuration&&(q=t.transitionDelay*p);var u=0;0<t.animationDelay&&0===t.animationDuration&&(u=t.animationDelay*p,s.push(z+"animation-play-state"));q=Math.round(100*Math.max(q,u))/100}q||b.addClass(m);var v=Y(b,a.cacheKey+" "+m),w=Math.max(v.transitionDuration,v.animationDuration);if(0===w)b.removeClass(m),F(b,c),d();else{var p=
        Math.max(v.transitionDelay,v.animationDelay),B=1E3*p;0<s.length&&(t=k.getAttribute("style")||"",";"!==t.charAt(t.length-1)&&(t+=";"),k.setAttribute("style",t+" "));var E=Date.now(),D=O+" "+V,p=1E3*(q+1.5*(p+w)),x;0<q&&(b.addClass(n),x=I(function(){x=null;b.addClass(m);b.removeClass(n);0<v.animationDuration&&(k.style[G+"PlayState"]="")},1E3*q,!1));b.on(D,f);a.closeAnimationFns.push(function(){e();d()});a.running++;X(b,p);return e}}else d()}function M(a,b,c,d){if(K(a,b,c,d))return function(a){a&&F(b,
        c)}}function N(a,b,c,d){if(b.data("$$ngAnimateCSS3Data"))return L(a,b,c,d);F(b,c);d()}function T(a,b,c,d){var e=M(a,b,c);if(e){var f=e;v(b,function(){f=N(a,b,c,d)});return function(b){(f||q)(b)}}d()}function F(a,b){a.removeClass(b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function p(a,b){var c="";a=W(a)?a:a.split(/\s+/);h(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var z="",H,V,G,O;D.ontransitionend===
    E&&D.onwebkittransitionend!==E?(z="-webkit-",H="WebkitTransition",V="webkitTransitionEnd transitionend"):(H="transition",V="transitionend");D.onanimationend===E&&D.onwebkitanimationend!==E?(z="-webkit-",G="WebkitAnimation",O="webkitAnimationEnd animationend"):(G="animation",O="animationend");var B={},a=0,c=[],d,e=null,R=0,S=[];return{enter:function(a,b){return T("enter",a,"ng-enter",b)},leave:function(a,b){return T("leave",a,"ng-leave",b)},move:function(a,b){return T("move",a,"ng-move",b)},beforeSetClass:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           b,c,d){b=p(c,"-remove")+" "+p(b,"-add");if(b=M("setClass",a,b))return v(a,d),b;d()},beforeAddClass:function(a,b,c){if(b=M("addClass",a,p(b,"-add")))return v(a,c),b;c()},beforeRemoveClass:function(a,b,c){if(b=M("removeClass",a,p(b,"-remove")))return v(a,c),b;c()},setClass:function(a,b,c,d){c=p(c,"-remove");b=p(b,"-add");return N("setClass",a,c+" "+b,d)},addClass:function(a,b,c){return N("addClass",a,p(b,"-add"),c)},removeClass:function(a,b,c){return N("removeClass",a,p(b,"-remove"),c)}}}])}])})(window,
    window.angular);
//# sourceMappingURL=angular-animate.min.js.map
/*
 AngularJS v1.3.0-rc.1
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
                    "macFrac": 0,
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
                    "macFrac": 0,
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
        "pluralCat": function (n, opt_precision) {  var i = n | 0;  if (i == 0 || i == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
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

/*
 AngularJS v1.3.0-rc.1
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(r,d,z){'use strict';function v(s,h,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,e,b,g,u){function w(){k&&(k.remove(),k=null);l&&(l.$destroy(),l=null);n&&(f.leave(n).then(function(){k=null}),k=n,n=null)}function t(){var c=s.current&&s.current.locals;if(d.isDefined(c&&c.$template)){var c=a.$new(),m=s.current;n=u(c,function(c){f.enter(c,null,n||e).then(function(){!d.isDefined(p)||p&&!a.$eval(p)||h()});w()});l=m.scope=c;l.$emit("$viewContentLoaded");
    l.$eval(q)}else w()}var l,n,k,p=b.autoscroll,q=b.onload||"";a.$on("$routeChangeSuccess",t);t()}}}function x(d,h,f){return{restrict:"ECA",priority:-400,link:function(a,e){var b=f.current,g=b.locals;e.html(g.$template);var u=d(e.contents());b.controller&&(g.$scope=a,g=h(b.controller,g),b.controllerAs&&(a[b.controllerAs]=g),e.data("$ngControllerController",g),e.children().data("$ngControllerController",g));u(a)}}}r=d.module("ngRoute",["ng"]).provider("$route",function(){function s(a,e){return d.extend(new (d.extend(function(){},
    {prototype:a})),e)}function h(a,d){var b=d.caseInsensitiveMatch,g={originalPath:a,regexp:a},f=g.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,e,b){a="?"===b?b:null;b="*"===b?b:null;f.push({name:e,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");g.regexp=new RegExp("^"+a+"$",b?"i":"");return g}var f={};this.when=function(a,e){f[a]=d.extend({reloadOnSearch:!0},e,a&&h(a,e));if(a){var b=
        "/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";f[b]=d.extend({redirectTo:a},h(b,e))}return this};this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,e,b,g,h,r,t){function l(){var c=n(),m=q.current;if(c&&m&&c.$$route===m.$$route&&d.equals(c.pathParams,m.pathParams)&&!c.reloadOnSearch&&!p)m.params=c.params,d.copy(m.params,b),a.$broadcast("$routeUpdate",
    m);else if(c||m)p=!1,a.$broadcast("$routeChangeStart",c,m),(q.current=c)&&c.redirectTo&&(d.isString(c.redirectTo)?e.path(k(c.redirectTo,c.params)).search(c.params).replace():e.url(c.redirectTo(c.pathParams,e.path(),e.search())).replace()),g.when(c).then(function(){if(c){var a=d.extend({},c.resolve),e,b;d.forEach(a,function(c,b){a[b]=d.isString(c)?h.get(c):h.invoke(c,null,null,b)});d.isDefined(e=c.template)?d.isFunction(e)&&(e=e(c.params)):d.isDefined(b=c.templateUrl)&&(d.isFunction(b)&&(b=b(c.params)),
    b=t.getTrustedResourceUrl(b),d.isDefined(b)&&(c.loadedTemplateUrl=b,e=r(b)));d.isDefined(e)&&(a.$template=e);return g.all(a)}}).then(function(e){c==q.current&&(c&&(c.locals=e,d.copy(c.params,b)),a.$broadcast("$routeChangeSuccess",c,m))},function(d){c==q.current&&a.$broadcast("$routeChangeError",c,m,d)})}function n(){var c,a;d.forEach(f,function(b,g){var f;if(f=!a){var h=e.path();f=b.keys;var l={};if(b.regexp)if(h=b.regexp.exec(h)){for(var k=1,n=h.length;k<n;++k){var p=f[k-1],q=h[k];p&&q&&(l[p.name]=
    q)}f=l}else f=null;else f=null;f=c=f}f&&(a=s(b,{params:d.extend({},e.search(),c),pathParams:c}),a.$$route=b)});return a||f[null]&&s(f[null],{params:{},pathParams:{}})}function k(a,b){var e=[];d.forEach((a||"").split(":"),function(a,c){if(0===c)e.push(a);else{var d=a.match(/(\w+)(.*)/),f=d[1];e.push(b[f]);e.push(d[2]||"");delete b[f]}});return e.join("")}var p=!1,q={routes:f,reload:function(){p=!0;a.$evalAsync(l)},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),
    function(d){f.current.pathParams[d]||(b[d]=a[d])});a=d.extend({},this.current.params,a);e.path(k(this.current.$$route.originalPath,a));e.search(d.extend({},e.search(),b))}else throw y("norout");}};a.$on("$locationChangeSuccess",l);return q}]});var y=d.$$minErr("ngRoute");r.provider("$routeParams",function(){this.$get=function(){return{}}});r.directive("ngView",v);r.directive("ngView",x);v.$inject=["$route","$anchorScroll","$animate"];x.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map
/*
 * angular-elastic v2.4.0
 * (c) 2014 Monospaced http://monospaced.com
 * License: MIT
 */
angular.module('monospaced.elastic', [])
    .constant('msdElasticConfig', {
        append: ''
    })
    .directive('msdElastic', [
        '$timeout', '$window', 'msdElasticConfig',
        function($timeout, $window, config) {
            'use strict';
            return {
                require: 'ngModel',
                restrict: 'A, C',
                link: function(scope, element, attrs, ngModel) {
// cache a reference to the DOM element
                    var ta = element[0],
                        $ta = element;
// ensure the element is a textarea, and browser is capable
                    if (ta.nodeName !== 'TEXTAREA' || !$window.getComputedStyle) {
                        return;
                    }
// set these properties before measuring dimensions
                    $ta.css({
                        'overflow': 'hidden',
                        'overflow-y': 'hidden',
                        'word-wrap': 'break-word'
                    });
// force text reflow
                    var text = ta.value;
                    ta.value = '';
                    ta.value = text;
                    var append = attrs.msdElastic ? attrs.msdElastic.replace(/\\n/g, '\n') : config.append,
                        $win = angular.element($window),
                        mirrorInitStyle = 'position: absolute; top: -999px; right: auto; bottom: auto;' +
                            'left: 0; overflow: hidden; -webkit-box-sizing: content-box;' +
                            '-moz-box-sizing: content-box; box-sizing: content-box;' +
                            'min-height: 0 !important; height: 0 !important; padding: 0;' +
                            'word-wrap: break-word; border: 0;',
                        $mirror = angular.element('<textarea tabindex="-1" ' +
                            'style="' + mirrorInitStyle + '"/>').data('elastic', true),
                        mirror = $mirror[0],
                        taStyle = getComputedStyle(ta),
                        resize = taStyle.getPropertyValue('resize'),
                        borderBox = taStyle.getPropertyValue('box-sizing') === 'border-box' ||
                            taStyle.getPropertyValue('-moz-box-sizing') === 'border-box' ||
                            taStyle.getPropertyValue('-webkit-box-sizing') === 'border-box',
                        boxOuter = !borderBox ? {width: 0, height: 0} : {
                            width: parseInt(taStyle.getPropertyValue('border-right-width'), 10) +
                                parseInt(taStyle.getPropertyValue('padding-right'), 10) +
                                parseInt(taStyle.getPropertyValue('padding-left'), 10) +
                                parseInt(taStyle.getPropertyValue('border-left-width'), 10),
                            height: parseInt(taStyle.getPropertyValue('border-top-width'), 10) +
                                parseInt(taStyle.getPropertyValue('padding-top'), 10) +
                                parseInt(taStyle.getPropertyValue('padding-bottom'), 10) +
                                parseInt(taStyle.getPropertyValue('border-bottom-width'), 10)
                        },
                        minHeightValue = parseInt(taStyle.getPropertyValue('min-height'), 10),
                        heightValue = parseInt(taStyle.getPropertyValue('height'), 10),
                        minHeight = Math.max(minHeightValue, heightValue) - boxOuter.height,
                        maxHeight = parseInt(taStyle.getPropertyValue('max-height'), 10),
                        mirrored,
                        active,
                        copyStyle = ['font-family',
                            'font-size',
                            'font-weight',
                            'font-style',
                            'letter-spacing',
                            'line-height',
                            'text-transform',
                            'word-spacing',
                            'text-indent'];
// exit if elastic already applied (or is the mirror element)
                    if ($ta.data('elastic')) {
                        return;
                    }
// Opera returns max-height of -1 if not set
                    maxHeight = maxHeight && maxHeight > 0 ? maxHeight : 9e4;
// append mirror to the DOM
                    if (mirror.parentNode !== document.body) {
                        angular.element(document.body).append(mirror);
                    }
// set resize and apply elastic
                    $ta.css({
                        'resize': (resize === 'none' || resize === 'vertical') ? 'none' : 'horizontal'
                    }).data('elastic', true);
                    /*
                     * methods
                     */
                    function initMirror() {
                        var mirrorStyle = mirrorInitStyle;
                        mirrored = ta;
// copy the essential styles from the textarea to the mirror
                        taStyle = getComputedStyle(ta);
                        angular.forEach(copyStyle, function(val) {
                            mirrorStyle += val + ':' + taStyle.getPropertyValue(val) + ';';
                        });
                        mirror.setAttribute('style', mirrorStyle);
                    }
                    function adjust() {
                        var taHeight,
                            taComputedStyleWidth,
                            mirrorHeight,
                            width,
                            overflow;
                        if (mirrored !== ta) {
                            initMirror();
                        }
// active flag prevents actions in function from calling adjust again
                        if (!active) {
                            active = true;
                            mirror.value = ta.value + append; // optional whitespace to improve animation
                            mirror.style.overflowY = ta.style.overflowY;
                            taHeight = ta.style.height === '' ? 'auto' : parseInt(ta.style.height, 10);
                            taComputedStyleWidth = getComputedStyle(ta).getPropertyValue('width');
// ensure getComputedStyle has returned a readable 'used value' pixel width
                            if (taComputedStyleWidth.substr(taComputedStyleWidth.length - 2, 2) === 'px') {
// update mirror width in case the textarea width has changed
                                width = parseInt(taComputedStyleWidth, 10) - boxOuter.width;
                                mirror.style.width = width + 'px';
                            }
                            mirrorHeight = mirror.scrollHeight;
                            if (mirrorHeight > maxHeight) {
                                mirrorHeight = maxHeight;
                                overflow = 'scroll';
                            } else if (mirrorHeight < minHeight) {
                                mirrorHeight = minHeight;
                            }
                            mirrorHeight += boxOuter.height;
                            ta.style.overflowY = overflow || 'hidden';
                            if (taHeight !== mirrorHeight) {
                                ta.style.height = mirrorHeight + 'px';
                                scope.$emit('elastic:resize', $ta);
                            }
// small delay to prevent an infinite loop
                            $timeout(function() {
                                active = false;
                            }, 1);
                        }
                    }
                    function forceAdjust() {
                        active = false;
                        adjust();
                    }
                    /*
                     * initialise
                     */
// listen
                    if ('onpropertychange' in ta && 'oninput' in ta) {
// IE9
                        ta['oninput'] = ta.onkeyup = adjust;
                    } else {
                        ta['oninput'] = adjust;
                    }
                    $win.bind('resize', forceAdjust);
                    scope.$watch(function() {
                        return ngModel.$modelValue;
                    }, function(newValue) {
                        forceAdjust();
                    });
                    scope.$on('elastic:adjust', function() {
                        initMirror();
                        forceAdjust();
                    });
                    $timeout(adjust);
                    /*
                     * destroy
                     */
                    scope.$on('$destroy', function() {
                        $mirror.remove();
                        $win.unbind('resize', forceAdjust);
                    });
                }
            };
        }
    ]);
/*
 AngularJS v1.3.0-rc.1
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

// Declare app level module which depends on filters, and services
var amCompanion = angular.module('amCompanion', [
    'ngCookies','ngRoute','ngAnimate','ngTouch', 'igTruncate','angular-progress-arc','rzModule','monospaced.elastic'
]);

'use strict';

/* Controllers */
amCompanion.controller('FullEmployeeController',[
    "$scope","$routeParams","$anchorScroll","AmcContextService","RoutesService", function(
        $scope,$routeParams, $anchorScroll ,AmcContextService, RoutesService){

        $scope.progressColors = [];
        $scope.editMode = false;
        $scope.selectedEmployeeEdited = undefined;
        $scope.nomPrenom = "";

        $anchorScroll();

        //init the page's context
        var promise = AmcContextService.initEmployees();
        promise.then(function(){
            AmcContextService.setSelectedEmployeeFromId($routeParams.id);
            $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
            $scope.nomPrenom = $scope.getName();
            initColors();
        });

        function initColors()
        {
            $scope.progressColors = [];
            for ( var i = 0 ; i < $scope.selectedEmployee.CurrentObjectives.length ; i++ )
            {
                $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.CurrentObjectives[i].ProgressionPercent/100);
            }
        }

        /**
         * get the name of the employee clicked
         * @returns {string}
         */
        $scope.getName = function()
        {
            var str = "";
            if( $scope.selectedEmployee != undefined )
            {
                str = $scope.selectedEmployee.FirstName + " " + $scope.selectedEmployee.LastName;
            }
            return str;
        }

        /**
         * This function allow to return to the home page
         */
        $scope.goBack = function()
        {
            RoutesService.loadHomeView();
        }

        /**
         * This is what happened when a link is clicked
         * @param link
         */
        $scope.showFullLink = function( link )
        {
            if( $scope.editMode == false)
            {
                RoutesService.loadLinkView( $scope.selectedEmployee, link );
            }
        }

        $scope.createNewObjective = function()
        {
            if( $scope.editMode == false) {
                RoutesService.loadObjectiveView($scope.selectedEmployee, "new");
            }
        }

        $scope.createNewLink = function()
        {
            if( $scope.editMode == false) {
                RoutesService.loadLinkView($scope.selectedEmployee, {Date:"new"});
            }
        }

        $scope.showFullObjective = function( $index )
        {
            if( $scope.editMode == false) {
                RoutesService.loadObjectiveView($scope.selectedEmployee, $index);
            }
        }

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
            $scope.editMode = false;
            AmcContextService.updateCurrentEmployee();
        });

        $scope.deleteObjective = function($event, $index)
        {
            $scope.selectedEmployee.CurrentObjectives.splice($index, 1);
            $event.stopPropagation();
        }

        $scope.deleteLink = function($event, $index)
        {
            $scope.selectedEmployee.Links.splice($index, 1);
            $event.stopPropagation();
        }

    }]);

'use strict';

/* Controllers */
amCompanion.controller('FullHomeController',[
    "$scope","AuthService","AmcContextService",
    function( $scope, AuthService,AmcContextService ){

    AmcContextService.initEmployees();
    $scope.employees = AmcContextService.getEmployees();


}]);

'use strict';

/* Controllers */
amCompanion.controller('FullLinkController',[
        "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService", "linkTypes", function(
            $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService, linkTypes){

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
            }

            $scope.changeSelectedDate = function()
            {
                if( !!$scope.selectedDate )
                {
                    $scope.selectedLink.Date = $scope.selectedDate.getTime();
                }

            }

            $scope.getName = function()
            {
                var employee = AmcContextService.getSelectedEmployee();
                var str = "";
                if( employee != undefined )
                {
                    str = employee.FirstName + " " + employee.LastName;
                }
                return str;
            }

            var promise = AmcContextService.initEmployees();
            promise.then(function(){
                    AmcContextService.setSelectedEmployeeFromId($routeParams.id);
                    $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
                    $scope.nomPrenom = $scope.getName();
                    var currentLink = undefined;

                    if( $routeParams.timestamp == "new" )
                    {
                        var date = new Date();

                        $scope.selectedLink = {
                            Type:undefined,
                            Date: date.getTime(),
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
                            if( currentLink.Date == $routeParams.timestamp )
                            {
                                $scope.selectedLink = currentLink;
                                $scope.selectedLinkBackUp = angular.copy($scope.selectedLink);
                                $scope.selectedDate = new Date($scope.selectedLink.Date);
                            }
                        }

                        if( $scope.selectedLink == undefined )
                        {
                            RoutesService.loadEmployeeView($scope.selectedEmployee);
                        }

                    }
                }
            )

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
                    $scope.selectedLink.Comment = $scope.selectedLinkBackUp.Comment;
                    $scope.goBack();
                }

            });

            $scope.$on("validateEdit",function() {

                if( $scope.selectedLink.Date == undefined) {
                    alert("Une date valide est requise");
                }
                else {

                    //If it's a new objective
                    if ($scope.newMode) {
                        $scope.selectedEmployee.Links.push($scope.selectedLink);
                        AmcContextService.updateCurrentEmployee();
                    }
                    //If the new validated objectif is not the same as the original
                    else if( $scope.selectedLink.Type != $scope.selectedLinkBackUp.Type ||
                        $scope.selectedLink.Date != $scope.selectedLinkBackUp.Date ||
                        $scope.selectedLink.Comment != $scope.selectedLinkBackUp.Comment )
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

        }]);
'use strict';

/* Controllers */
amCompanion.controller('FullObjectiveController',[
        "$scope","$routeParams","$anchorScroll","AmcContextService", "RoutesService", function(
            $scope,$routeParams,$anchorScroll ,AmcContextService, RoutesService){

            $anchorScroll();
            $scope.editMode = true;
            $scope.newMode = false;

            /**
             * This methods is passed in parameter to header, it allow to go back to employee view
             */
            $scope.goBack = function()
            {
                RoutesService.loadEmployeeView($scope.selectedEmployee);
            }

            $scope.getName = function()
            {
                var employee = AmcContextService.getSelectedEmployee();
                var str = "";
                if( employee != undefined )
                {
                    str = employee.FirstName + " " + employee.LastName;
                }
                return str;
            }

            var promise = AmcContextService.initEmployees();
            promise.then(
                function()
                {
                    AmcContextService.setSelectedEmployeeFromId($routeParams.id);
                    $scope.selectedEmployee = AmcContextService.getSelectedEmployee();
                    $scope.nomPrenom = $scope.getName();
                    if( $routeParams.index == "new" )
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
                        $scope.selectedObjective = $scope.selectedEmployee.CurrentObjectives[$routeParams.index];
                        $scope.selectedObjectiveBack = angular.copy($scope.selectedObjective);
                    }

                }
            )

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

                if ($scope.selectedObjective.Text == undefined) {
                    alert("Un intitulé est requis.");
                }
                else {

                    //If it's a new objective
                    if ($scope.newMode) {
                        $scope.selectedEmployee.CurrentObjectives.push($scope.selectedObjective);
                        AmcContextService.updateCurrentEmployee();
                    }
                    //If the new validated objectif is not the same as the original
                    else if( $scope.selectedObjective.Text != $scope.selectedObjectiveBack.Text ||
                        $scope.selectedObjective.ProgressionPercent != $scope.selectedObjectiveBack.ProgressionPercent ||
                        $scope.selectedObjective.ponderation != $scope.selectedObjectiveBack.ponderation )
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

amCompanion.directive('amcHeader', function() {
    return {
        restrict: 'E',
        controller:"AmcHeaderController",
        templateUrl: '/partials/utils/amc_header.html',
        scope:
        {
            homeDisplay:"=",
            libelle:"=",
            goBackHandler:"&",
            editMode:"="
        }
    }
});

/* Controllers */
amCompanion.controller('AmcHeaderController', [ "$scope","RoutesService" , function($scope, RoutesService){

    /**
     * Cette fonction déconnecte l'utilisateur
     */
    $scope.disconnect = function()
    {
        RoutesService.disconnect();
    }

    $scope.goBack = function()
    {
        $scope.goBackHandler();
    }

    $scope.toggleEditMode = function()
    {
        $scope.$emit("startEdit");
    }

    $scope.validateEditMode = function()
    {
        $scope.$emit("validateEdit");
    }

    $scope.cancelEditMode = function()
    {
        $scope.$emit("cancelEdit");
    }

}]);

amCompanion.directive('angRoundProgress', [function () {

  var compilationFunction = function (templateElement, templateAttributes, transclude) {
    if (templateElement.length === 1) {
      var node = templateElement[0];

      var width = node.getAttribute('round-progress-width') || '400';
      var height = node.getAttribute('round-progress-height') || '400';

      var canvas = document.createElement('canvas');
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
        pre: function preLink(scope, instanceElement, instanceAttributes, controller) {
          var expression = canvas.getAttribute('round-progress-model');
          scope.$watch(expression, function (newValue, oldValue) {
            // Create the content of the canvas
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, width, height);

            // The "background" circle
            var x = width / 2;
            var y = height / 2;
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
        },
        post: function postLink(scope, instanceElement, instanceAttributes, controller) {}
      };
    }
  };

  var roundProgress = {
    compile: compilationFunction,
    replace: true
  };
  return roundProgress;
}]);

'use strict';
amCompanion.directive('embedEmployee', function() {
    return {
        restrict: 'E',
        templateUrl: '/partials/embed/employee.html',
        controller:"EmbedEmployeeController",
        scope:
        {
            employee:"="
        }
    }
});


/* Controllers */
amCompanion.controller('EmbedEmployeeController',
    [ "$scope", "$filter","RoutesService","AmcContextService",
        function($scope, $filter, RoutesService, AmcContextService){

            var lastLink = $filter("limitTo")($filter("orderBy")($scope.employee.Links, "date", "reverse"), 1);
            if( lastLink.length > 0 )
            {
                $scope.lastLink = lastLink[0];
            }

            $scope.openEmployeeView = function()
            {
                RoutesService.loadEmployeeView($scope.employee);
            }

            if( $scope.employee.CurrentObjectives == undefined || $scope.employee.CurrentObjectives.length == 0 )
            {
                $scope.percentObjectives = 0;
            }
            else
            {
                var sum = 0;

                angular.forEach( $scope.employee.CurrentObjectives, function( objective )
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

amCompanion.factory("AmcContextService", [ "$http","$q","urls","$cookies",
    function( $http, $q, urls,$cookies )
    {

        var data = {};

        /**
         * This function is called to reset the service's data
         */
        this.initData = function()
        {
            data.employees = [];
            data.selectedEmployee = undefined;
            data.isInit = false;
            data.userMail = sessionStorage.getItem("mail");
        }
        //Init the context at the first injection
        this.initData();

        this.updateCurrentEmployee = function()
        {
            var defer = $q.defer();

            console.log(data.selectedEmployee);

            $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
            $http.put(
                    urls.employes + "/" +data.selectedEmployee._id,
                    data.selectedEmployee
            ).success(
                function (res, status, headers ) {
                    defer.resolve();

                }).error(function()
                {
                    //RoutesService.disconnect();
                    defer.reject();
                });
            return defer.promise;
        }

        /**
         * This method get the data from the stub
         */
        this.initEmployees = function ()
        {
            var defer = $q.defer();

            if( data.isInit == false )
            {
                var defer = $q.defer();
                data.employees = [];


                if( this.isDevVersion() )
                {
                    $http.get("/data/data.json").success(
                        function ( res ) {
                            addEmployeeDate(res);
                            data.employees.push.apply(data.employees , res);
                            data.isInit = true;
                            defer.resolve();
                        }).error(function()
                        {
                            alert("data not loaded");
                        });
                }
                else
                {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
                    $http.get(
                            urls.employes + "/" +data.userMail
                    ).success(
                        function (res, status, headers ) {

                            addEmployeeDate(res);

                            data.employees.push.apply(data.employees , res);
                            data.isInit = true;
                            defer.resolve();

                        }).error(function()
                        {
                            //RoutesService.disconnect();
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
            var currentEmployee = undefined;
            var currentMax = -1;

            for( var i = 0 ; i < employees.length ; i ++ )
            {
                currentMax = -1;
                currentEmployee = employees[i];
                for( var j = 0 ; j < currentEmployee.Links.length ; j ++ )
                {
                    if( currentEmployee.Links[j].Date > currentMax )
                    {
                        currentMax = currentEmployee.Links[j].Date;
                    }
                }
                currentEmployee.dateMax = currentMax;
            }
        }

        this.isDevVersion = function()
        {
            return $cookies.env == "dev";
        }

        //Accessor of employees
        this.getEmployees = function()
        {
            return data.employees;
        };

        this.getSelectedEmployee = function()
        {
            return data.selectedEmployee;
        }

        this.setSelectedEmployee = function( employee )
        {
            data.selectedEmployee = employee;
        }

        this.setSelectedEmployeeFromId = function( id )
        {
            for( var i = 0 ; i < data.employees.length ; i ++ )
            {
                if ( data.employees[i]._id == id )
                {
                    this.setSelectedEmployee(data.employees[i]);
                }
            }
        }

        this.unsetSelectedEmployee = function()
        {
            data.selectedEmployee = undefined;
        }

        return this;
    }]);

amCompanion.factory('AuthService', ["$http", "$q", "urls", "AmcContextService",
    function ($http , $q, urls, AmcContextService) {
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
                $location.path("/employee/" + employee._id);
            };

            this.loadLinkView = function( employee, link )
            {
                $location.path("/link/"+employee._id+"/"+link.Date);
            };

            this.loadObjectiveView = function( employee, index )
            {
                $location.path("/objective/"+employee._id+"/"+index);
            };

            return this;
        }
    ]
);
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
])
//types : ['Restaurant', 'Appel', 'Mail', 'Café', 'Entretien']

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
var getColorForPercentage = function(pct) {
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
    return hex.length == 1 ? "0" + hex : hex;
}
/**
 * Created by Sébastien on 18/05/2014.
 */
amCompanion.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        id:"home",
        templateUrl: '/partials/full/home.html',
        controller: 'FullHomeController'
    });

    $routeProvider.when('/employee/:id', {
        id:"employee",
        templateUrl: '/partials/full/employee.html',
        controller: 'FullEmployeeController'
    });

    $routeProvider.when('/link/:id/:timestamp', {
        id:"link",
        templateUrl: '/partials/full/link.html',
        controller: 'FullLinkController'
    });

    $routeProvider.when('/objective/:id/:index', {
        id:"link",
        templateUrl: '/partials/full/objective.html',
        controller: 'FullObjectiveController'
    });

    $routeProvider.when('/login', {
        id:"login",
        templateUrl: '/partials/full/login.html',
        controller: 'FullLoginController'
    });

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});
}]);

amCompanion.run(["$rootScope", "$location","RoutesService",
    function ($rootScope, $location, RoutesService ) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {

            //var mainContainer = angular.element(document.getElementById("am-companion"))

            /*
            mainContainer.removeClass("slide-right-view");
            mainContainer.removeClass("slide-left-view");
            mainContainer.removeClass("fade-view");

            if( ( current == undefined
                ||  current.$$route.id == "login" && next.$$route.id == "home" )
                || ( current.$$route.id == "home" && next.$$route.id == "login" )  )
            {
                mainContainer.addClass("fade-view");
            }
            else if( ( current.$$route.id == "home" && next.$$route.id == "employee" ) ||
                ( current.$$route.id == "employee" && next.$$route.id == "link" ) )
            {
                mainContainer.addClass("slide-right-view");
            }
            else
            {
                mainContainer.addClass("slide-left-view");
            }
            */
            if( sessionStorage.getItem("token") == undefined )
            {
                RoutesService.disconnect();
            }

        });
    }]);

