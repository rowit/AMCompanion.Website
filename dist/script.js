/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(S,X,u){'use strict';function y(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
    ka&&a?!0:I(b)||B(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(F(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(B(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function ic(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);
    return a.sort()}function zd(b,a,c){for(var d=ic(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function jc(b){return function(a,c){b(c,a)}}function Ad(){return++hb}function kc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,k=f.length;g<k;g++){var h=f[g];b[h]=e[h]}}kc(b,a);return b}function ba(b){return parseInt(b,10)}function lc(b,a){return E(new (E(function(){},{prototype:b})),
    a)}function A(){}function Ta(b){return b}function da(b){return function(){return b}}function w(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function G(b){return null!==b&&"object"===typeof b}function I(b){return"string"===typeof b}function W(b){return"number"===typeof b}function ea(b){return"[object Date]"===Ia.call(b)}function F(b){return"function"===typeof b}function ib(b){return"[object RegExp]"===Ia.call(b)}function Sa(b){return b&&b.window===b}function Ua(b){return b&&
    b.$evalAsync&&b.$watch}function Va(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Bd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return N(b.nodeName||b[0].nodeName)}function Wa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ca(b,a,c,d){if(Sa(b)||Ua(b))throw Xa("cpws");if(a){if(b===a)throw Xa("cpi");c=c||[];d=d||[];if(G(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(B(b))for(var f=
    a.length=0;f<b.length;f++)e=Ca(b[f],null,c,d),G(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;B(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ca(b[f],null,c,d),G(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);kc(a,g)}}else if(a=b)B(b)?a=Ca(b,[],c,d):ea(b)?a=new Date(b.getTime()):ib(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):G(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ca(b,e,c,d));return a}function qa(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        a){if(B(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(G(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function la(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(B(b)){if(!B(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!la(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?la(b.getTime(),a.getTime()):!1;if(ib(b)&&ib(a))return b.toString()==a.toString();
    if(Ua(b)||Ua(a)||Sa(b)||Sa(a)||B(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!F(b[d])){if(!la(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!F(a[d]))return!1;return!0}return!1}function jb(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!F(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
    a.apply(b,arguments):a.call(b)}}function Cd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Sa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Ua(a)&&(c="$SCOPE");return c}function ra(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Cd,a?"  ":null)}function oc(b){return I(b)?JSON.parse(b):b}function sa(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===kb?N(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+
    N(b)})}catch(d){return N(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),z(d)&&(b=z(c[1])?pc(c[1]):!0,Hb.call(a,d)?B(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Ib(b){var a=[];r(b,function(b,d){B(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function lb(b){return Da(b,
    !0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Dd(b,a){var c,d,e=mb.length;b=D(b);for(d=0;d<e;++d)if(c=mb[d]+a,I(c=b.attr(c)))return c;return null}function Ed(b,a){var c,d,e={};r(mb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(mb,function(a){a+="app";
    var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Dd(c,"strict-di"),a(c,d?[d]:[],e))}function rc(b,a,c){G(c)||(c={});c=E({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===X?"document":sa(b);throw Xa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");
    d=Jb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;S&&e.test(S.name)&&(c.debugInfoEnabled=!0,S.name=S.name.replace(e,""));if(S&&!f.test(S.name))return d();S.name=S.name.replace(f,"");ta.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Fd(){S.name="NG_ENABLE_DEBUG_INFO!"+S.name;S.location.reload()}function Gd(b){return ta.element(b).injector().get("$$testability")}
    function Kb(b,a){a=a||"_";return b.replace(Hd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Id(){var b;sc||((ma=S.jQuery)&&ma.fn.on?(D=ma,E(ma.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),b=ma.cleanData,ma.cleanData=function(a){var c;if(Lb)Lb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ma._data(e,"events"))&&c.$destroy&&ma(e).triggerHandler("$destroy");b(a)}):D=R,ta.element=D,sc=!0)}function Mb(b,a,c){if(!b)throw Xa("areq",
            a||"?",c||"required");return b}function nb(b,a,c){c&&B(b)&&(b=b[b.length-1]);Mb(F(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ka(b,a){if("hasOwnProperty"===b)throw Xa("badname",a);}function tc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&F(b)?nc(e,b):b}function ob(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function wa(){return Object.create(null)}
    function Jd(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=y("$injector"),d=y("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||y;return a(b,"module",function(){var b={};return function(f,g,k){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return n}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],p=a("$injector","invoke","push",d),n={_invokeQueue:b,_configBlocks:d,
        _runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:p,run:function(a){e.push(a);return this}};k&&p(k);return n})}})}function Kd(b){E(b,{bootstrap:rc,copy:Ca,extend:E,equals:la,
        element:D,forEach:r,injector:Jb,noop:A,bind:nc,toJson:ra,fromJson:oc,identity:Ta,isUndefined:w,isDefined:z,isString:I,isFunction:F,isObject:G,isNumber:W,isElement:mc,isArray:B,version:Ld,isDate:ea,lowercase:N,uppercase:pb,callbacks:{counter:0},getTestability:Gd,$$minErr:y,$$csp:Za,reloadWithDebugInfo:Fd});$a=Jd(S);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",Md)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Nd});a.provider("$compile",uc).directive({a:Od,
        input:vc,textarea:vc,form:Pd,script:Qd,select:Rd,style:Sd,option:Td,ngBind:Ud,ngBindHtml:Vd,ngBindTemplate:Wd,ngClass:Xd,ngClassEven:Yd,ngClassOdd:Zd,ngCloak:$d,ngController:ae,ngForm:be,ngHide:ce,ngIf:de,ngInclude:ee,ngInit:fe,ngNonBindable:ge,ngPluralize:he,ngRepeat:ie,ngShow:je,ngStyle:ke,ngSwitch:le,ngSwitchWhen:me,ngSwitchDefault:ne,ngOptions:oe,ngTransclude:pe,ngModel:qe,ngList:re,ngChange:se,pattern:wc,ngPattern:wc,required:xc,ngRequired:xc,minlength:yc,ngMinlength:yc,maxlength:zc,ngMaxlength:zc,
        ngValue:te,ngModelOptions:ue}).directive({ngInclude:ve}).directive(qb).directive(Ac);a.provider({$anchorScroll:we,$animate:xe,$browser:ye,$cacheFactory:ze,$controller:Ae,$document:Be,$exceptionHandler:Ce,$filter:Bc,$interpolate:De,$interval:Ee,$http:Fe,$httpBackend:Ge,$location:He,$log:Ie,$parse:Je,$rootScope:Ke,$q:Le,$$q:Me,$sce:Ne,$sceDelegate:Oe,$sniffer:Pe,$templateCache:Qe,$templateRequest:Re,$$testability:Se,$timeout:Te,$window:Ue,$$rAF:Ve,$$asyncCallback:We})}])}function ab(b){return b.replace(Xe,
        function(a,b,d,e){return e?d.toUpperCase():d}).replace(Ye,"Moz$1")}function Cc(b){b=b.nodeType;return b===ka||!b||9===b}function Dc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Nb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Ze.exec(b)||["",""])[1].toLowerCase();d=ha[d]||ha._default;c.innerHTML=d[1]+b.replace($e,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=jb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
        return e}function R(b){if(b instanceof R)return b;var a;I(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ob("nosel");return new R(b)}if(a){a=X;var c;b=(c=af.exec(b))?[a.createElement(c[1])]:(c=Dc(b,a))?c.childNodes:[]}Ec(this,b)}function Pb(b){return b.cloneNode(!0)}function rb(b,a){a||sb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)sb(c[d])}function Fc(b,a,c,d){if(z(d))throw Ob("offargs");var e=(d=tb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
        function(a){if(z(c)){var d=e[a];Wa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function sb(b,a){var c=b.ng339,d=c&&ub[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Fc(b)),delete ub[c],b.ng339=u))}function tb(b,a){var c=b.ng339,c=c&&ub[c];a&&!c&&(b.ng339=c=++bf,c=ub[c]={events:{},data:{},handle:u});return c}function Qb(b,a,c){if(Cc(b)){var d=z(c),e=!d&&a&&!G(a),
        f=!a;b=(b=tb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];E(b,a)}}}function Rb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Sb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Tb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
        r(a.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Ec(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Gc(b,a){return vb(b,"$"+(a||"ngController")+"Controller")}function vb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=B(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==u)return c;b=b.parentNode||
        11===b.nodeType&&b.host}}function Hc(b){for(rb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Ic(b,a){a||rb(b);var c=b.parentNode;c&&c.removeChild(b)}function cf(b,a){a=a||S;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Jc(b,a){var c=wb[a.toLowerCase()];return c&&Kc[pa(b)]&&c}function df(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Lc[a]}function ef(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
        a[e||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var h=0;h<g;h++)c.isImmediatePropagationStopped()||f[h].call(b,c)}};c.elem=b;return c}function La(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),
        c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ad)():c+":"+b}function bb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function ff(b){return(b=b.toString().replace(Mc,"").match(Nc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ub(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw I(c)&&c||(c=b.name||ff(b)),Ea("strictdi",c);a=b.toString().replace(Mc,"");a=a.match(Nc);r(a[1].split(gf),
        function(a){a.replace(hf,function(a,b,c){d.push(c)})})}b.$inject=d}}else B(b)?(a=b.length-1,nb(b[a],"fn"),d=b.slice(0,a)):nb(b,"fn",!0);return d}function Jb(b,a){function c(a){return function(b,c){if(G(b))r(b,jc(a));else return a(b,c)}}function d(a,b){Ka(a,"service");if(F(b)||B(b))b=p.instantiate(b);if(!b.$get)throw Ea("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this,u,a);if(w(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,
        b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=$a(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):F(a)?b.push(p.invoke(a)):B(a)?b.push(p.invoke(a)):nb(a,"module")}catch(e){throw B(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});
        return b}function k(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ea("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[];g=Ub(b,a,g);var k,l,n;l=0;for(k=g.length;l<k;l++){n=g[l];if("string"!==typeof n)throw Ea("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n))}B(b)&&(b=b[k]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b,c){var d=function(){};d.prototype=(B(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return G(a)||F(a)?a:d},get:d,annotate:Ub,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},l=[],m=new bb([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ka(a,"constant");q[a]=b;n[a]=b}),decorator:function(a,b){var c=
        p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},p=q.$injector=k(q,function(){throw Ea("unpr",l.join(" <- "));}),n={},s=n.$injector=k(n,function(a){var b=p.get(a+"Provider");return s.invoke(b.$get,b,u,a)});r(g(b),function(a){s.invoke(a||A)});return s}function we(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===
        pa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;F(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||cf(function(){d.$evalAsync(g)})});
        return g}]}function We(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function jf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(x--,0===x)for(;t.length;)try{t.pop()()}catch(b){c.error(b)}}}function f(a,b){(function xa(){r(T,function(a){a()});C=b(xa,a)})()}function g(){k();h()}function k(){M=b.history.state;M=w(M)?null:M;la(M,V)&&(M=V);V=M}function h(){if(H!==m.url()||P!==M)H=m.url(),P=M,r(O,function(a){a(m.url(),
        M)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,q=a[0],p=b.location,n=b.history,s=b.setTimeout,J=b.clearTimeout,v={};m.isMock=!1;var x=0,t=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){x++};m.notifyWhenNoOutstandingRequests=function(a){r(T,function(a){a()});0===x?a():t.push(a)};var T=[],C;m.addPollFn=function(a){w(C)&&f(100,s);T.push(a);return a};var M,P,H=p.href,Q=a.find("base"),aa=null;k();P=M;m.url=function(a,c,e){w(e)&&(e=null);
        p!==b.location&&(p=b.location);n!==b.history&&(n=b.history);if(a){var f=P===e;if(H!==a||d.history&&!f){var g=H&&Fa(H)===Fa(a);H=a;P=e;!d.history||g&&f?(g||(aa=a),c?p.replace(a):p.href=a):(n[c?"replaceState":"pushState"](e,"",a),k(),P=M);return m}}else return aa||p.href.replace(/%27/g,"'")};m.state=function(){return M};var O=[],K=!1,V=null;m.onUrlChange=function(a){if(!K){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);K=!0}O.push(a);return a};m.$$checkUrlChange=h;m.baseHref=function(){var a=
        Q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ca={},Ma="",fa=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===u?q.cookie=encodeURIComponent(a)+"=;path="+fa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":I(b)&&(d=(q.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+fa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(q.cookie!==Ma)for(Ma=q.cookie,d=Ma.split("; "),ca={},f=0;f<d.length;f++)e=
        d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),ca[a]===u&&(ca[a]=l(e.substring(g+1))));return ca}};m.defer=function(a,b){var c;x++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};m.defer.cancel=function(a){return v[a]?(delete v[a],J(a),e(A),!0):!1}}function ye(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new jf(b,d,a,c)}]}function ze(){this.$get=function(){function b(b,d){function e(a){a!=q&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw y("$cacheFactory")("iid",b);var g=0,k=E({},d,{id:b}),h={},l=d&&d.capacity||Number.MAX_VALUE,m={},q=null,p=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!w(b))return a in h||g++,h[a]=b,g>l&&this.remove(p.key),b},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==q&&(q=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}delete h[a];
        g--},removeAll:function(){h={};g=0;m={};q=p=null},destroy:function(){m=k=h=null;delete a[b]},info:function(){return E({},k,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Qe(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function uc(b,a){function c(a,b){var c=/^\s*([@=&])(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ia("iscp",b,e,a);d[e]={attrName:f[3]||e,mode:f[1],
        optional:"?"===f[2]}});return d}var d={},e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=Bd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,h=/^(on[a-z]+|formaction)$/;this.directive=function q(a,e){Ka(a,"directive");I(a)?(Mb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);F(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));
        h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";G(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,jc(q));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
        var l=!0;this.debugInfoEnabled=function(a){return z(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,J,v,x,t,T,C,M){function P(a,b){try{a.addClass(b)}catch(c){}}function H(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){b.nodeType==kb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=Q(a,b,a,c,d,e);H.$$addScopeClass(a);
            var g=null;return function(b,c,d,e,h){Mb(b,"scope");g||(g=(h=h&&h[0])?"foreignobject"!==pa(h)&&h.toString().match(/SVG/)?"svg":"html":"html");h="html"!==g?D(S(g,D("<div>").append(a).html())):c?Ja.clone.call(a):a;if(d)for(var k in d)h.data("$"+k+"Controller",d[k].instance);H.$$addScopeInfo(h,b);c&&c(h,b);f&&f(b,h,h,e);return h}}function Q(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,p,n,t,s;if(q)for(s=Array(c.length),p=0;p<h.length;p+=3)f=h[p],s[f]=c[f];else s=c;p=0;for(n=h.length;p<n;)k=s[h[p++]],c=
            h[p++],f=h[p++],c?(c.scope?(l=a.$new(),H.$$addScopeInfo(D(k),l)):l=a,t=c.transcludeOnThisElement?aa(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?aa(a,b):null,c(f,l,k,d,t)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,p,n,q,t=0;t<a.length;t++){k=new Xb;l=O(a[t],[],k,0===t?d:u,e);(f=l.length?ca(l,a[t],k,b,c,null,[],[],f):null)&&f.scope&&H.$$addScopeClass(k.$$element);k=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Q(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&
            f.transclude:b);if(f||k)h.push(t,f,k),n=!0,q=q||f;f=null}return n?g:null}function aa(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,f,c,g)}}function O(b,c,g,h,k){var l=g.$attr,p;switch(b.nodeType){case ka:fa(c,ua(pa(b)),"E",h,k);for(var n,t,s,v=b.attributes,J=0,T=v&&v.length;J<T;J++){var M=!1,C=!1;n=v[J];p=n.name;n=U(n.value);t=ua(p);if(s=ya.test(t))p=Kb(t.substr(6),"-");var H=t.replace(/(Start|End)$/,""),P;a:{var O=H;if(d.hasOwnProperty(O)){P=void 0;for(var O=
            a.get(O+"Directive"),r=0,aa=O.length;r<aa;r++)if(P=O[r],P.multiElement){P=!0;break a}}P=!1}P&&t===H+"Start"&&(M=p,C=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));t=ua(p.toLowerCase());l[t]=p;if(s||!g.hasOwnProperty(t))g[t]=n,Jc(b,t)&&(g[t]=!0);R(b,c,n,t,s);fa(c,t,"A",h,k,M,C)}b=b.className;if(I(b)&&""!==b)for(;p=f.exec(b);)t=ua(p[2]),fa(c,t,"C",h,k)&&(g[t]=U(p[3])),b=b.substr(p.index+p[0].length);break;case kb:Y(c,b.nodeValue);break;case 8:try{if(p=e.exec(b.nodeValue))t=ua(p[1]),fa(c,t,"M",
            h,k)&&(g[t]=U(p[2]))}catch(x){}}c.sort(y);return c}function K(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);a.nodeType==ka&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function V(a,b,c){return function(d,e,f,g,h){e=K(e[0],b,c);return a(d,e,f,g,h)}}function ca(a,d,e,f,g,h,l,q,t){function s(a,b,c,d){if(a){c&&(a=V(a,c,d));a.require=L.require;a.directiveName=ga;if(Q===L||L.$$isolateScope)a=
            Z(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=V(b,c,d));b.require=L.require;b.directiveName=ga;if(Q===L||L.$$isolateScope)b=Z(b,{isolateScope:!0});q.push(b)}}function T(a,b,c,d){var e,f="data",g=!1,h=c,l;if(I(b)){if(l=b.match(k),b=b.substring(l[0].length),l[3]&&(l[1]?l[3]=null:l[1]=l[3]),"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",h=c.parent()),"?"===l[2]&&(g=!0),e=null,d&&"data"===f&&(e=d[b])&&(e=e.instance),e=e||h[f]("$"+b+"Controller"),!e&&!g)throw ia("ctreq",b,a);}else B(b)&&(e=
            [],r(b,function(b){e.push(T(a,b,c,d))}));return e}function M(a,c,f,g,h){function k(a,b,c){var d;Ua(a)||(c=b,b=a,a=u);E&&(d=P);c||(c=E?O.parent():O);return h(a,b,d,c,Wb)}var n,t,s,C,P,xb,O,K;d===f?(K=e,O=e.$$element):(O=D(f),K=new Xb(O,e));Q&&(C=c.$new(!0));xb=h&&k;aa&&(x={},P={},r(aa,function(a){var b={$scope:a===Q||a.$$isolateScope?C:c,$element:O,$attrs:K,$transclude:xb};s=a.controller;"@"==s&&(s=K[a.name]);b=v(s,b,!0,a.controllerAs);P[a.name]=b;E||O.data("$"+a.name+"Controller",b.instance);x[a.name]=
            b}));if(Q){H.$$addScopeInfo(O,C,!0,!(ca&&(ca===Q||ca===Q.$$originalDirective)));H.$$addScopeClass(O,!0);g=x&&x[Q.name];var V=C;g&&g.identifier&&!0===Q.bindToController&&(V=g.instance);r(C.$$isolateBindings=Q.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":K.$observe(e,function(a){V[d]=a});K.$$observers[e].$$scope=c;K[e]&&(V[d]=b(K[e])(c));break;case "=":if(f&&!K[e])break;h=J(K[e]);l=h.literal?la:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=
            V[d]=h(c);throw ia("nonassign",K[e],Q.name);};g=V[d]=h(c);f=function(a){l(a,V[d])||(l(a,g)?k(c,a=V[d]):V[d]=a);return g=a};f.$stateful=!0;f=c.$watch(J(K[e],f),null,h.literal);C.$on("$destroy",f);break;case "&":h=J(K[e]),V[d]=function(a){return h(c,a)}}})}x&&(r(x,function(a){a()}),x=null);g=0;for(n=l.length;g<n;g++)t=l[g],$(t,t.isolateScope?C:c,O,K,t.require&&T(t.directiveName,t.require,O,P),xb);var Wb=c;Q&&(Q.template||null===Q.templateUrl)&&(Wb=C);a&&a(Wb,f.childNodes,u,h);for(g=q.length-1;0<=g;g--)t=
            q[g],$(t,t.isolateScope?C:c,O,K,t.require&&T(t.directiveName,t.require,O,P),xb)}t=t||{};for(var C=-Number.MAX_VALUE,P,aa=t.controllerDirectives,x,Q=t.newIsolateScopeDirective,ca=t.templateDirective,fa=t.nonTlbTranscludeDirective,Na=!1,A=!1,E=t.hasElementTranscludeDirective,Y=e.$$element=D(d),L,ga,y,Ga=f,N,R=0,ya=a.length;R<ya;R++){L=a[R];var W=L.$$start,Vb=L.$$end;W&&(Y=K(d,W,Vb));y=u;if(C>L.priority)break;if(y=L.scope)L.templateUrl||(G(y)?(xa("new/isolated scope",Q||P,L,Y),Q=L):xa("new/isolated scope",
            Q,L,Y)),P=P||L;ga=L.name;!L.templateUrl&&L.controller&&(y=L.controller,aa=aa||{},xa("'"+ga+"' controller",aa[ga],L,Y),aa[ga]=L);if(y=L.transclude)Na=!0,L.$$tlb||(xa("transclusion",fa,L,Y),fa=L),"element"==y?(E=!0,C=L.priority,y=Y,Y=e.$$element=D(X.createComment(" "+ga+": "+e[ga]+" ")),d=Y[0],yb(g,Ya.call(y,0),d),Ga=H(y,f,C,h&&h.name,{nonTlbTranscludeDirective:fa})):(y=D(Pb(d)).contents(),Y.empty(),Ga=H(y,f));if(L.template)if(A=!0,xa("template",ca,L,Y),ca=L,y=F(L.template)?L.template(Y,e):L.template,
            y=Oc(y),L.replace){h=L;y=Nb.test(y)?Pc(S(L.templateNamespace,U(y))):[];d=y[0];if(1!=y.length||d.nodeType!==ka)throw ia("tplrt",ga,"");yb(g,Y,d);ya={$attr:{}};y=O(d,[],ya);var ba=a.splice(R+1,a.length-(R+1));Q&&Ma(y);a=a.concat(y).concat(ba);z(e,ya);ya=a.length}else Y.html(y);if(L.templateUrl)A=!0,xa("template",ca,L,Y),ca=L,L.replace&&(h=L),M=w(a.splice(R,a.length-R),Y,e,g,Na&&Ga,l,q,{controllerDirectives:aa,newIsolateScopeDirective:Q,templateDirective:ca,nonTlbTranscludeDirective:fa}),ya=a.length;
        else if(L.compile)try{N=L.compile(Y,e,Ga),F(N)?s(null,N,W,Vb):N&&s(N.pre,N.post,W,Vb)}catch(kf){c(kf,sa(Y))}L.terminal&&(M.terminal=!0,C=Math.max(C,L.priority))}M.scope=P&&!0===P.scope;M.transcludeOnThisElement=Na;M.elementTranscludeOnThisElement=E;M.templateOnThisElement=A;M.transclude=Ga;t.hasElementTranscludeDirective=E;return M}function Ma(a){for(var b=0,c=a.length;b<c;b++)a[b]=lc(a[b],{$$isolateScope:!0})}function fa(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var p;e=
            a.get(e+"Directive");for(var t=0,s=e.length;t<s;t++)try{p=e[t],(g===u||g>p.priority)&&-1!=p.restrict.indexOf(f)&&(k&&(p=lc(p,{$$start:k,$$end:l})),b.push(p),h=p)}catch(v){c(v)}}return h}function z(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(P(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+
            ";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function w(a,b,c,d,e,f,g,h){var k=[],l,p,n=b[0],t=a.shift(),q=E({},t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),v=F(t.templateUrl)?t.templateUrl(b,c):t.templateUrl,J=t.templateNamespace;b.empty();s(T.getTrustedResourceUrl(v)).then(function(s){var C,T;s=Oc(s);if(t.replace){s=Nb.test(s)?Pc(S(J,U(s))):[];C=s[0];if(1!=s.length||C.nodeType!==ka)throw ia("tplrt",t.name,v);s={$attr:{}};yb(d,b,C);var M=O(C,
            [],s);G(t.scope)&&Ma(M);a=M.concat(a);z(c,s)}else C=n,b.html(s);a.unshift(q);l=ca(a,C,c,e,b,t,f,g,h);r(d,function(a,c){a==C&&(d[c]=b[0])});for(p=Q(b[0].childNodes,e);k.length;){s=k.shift();T=k.shift();var H=k.shift(),K=k.shift(),M=b[0];if(!s.$$destroyed){if(T!==n){var x=T.className;h.hasElementTranscludeDirective&&t.replace||(M=Pb(C));yb(H,D(T),M);P(D(M),x)}T=l.transcludeOnThisElement?aa(s,l.transclude,K):K;l(p,s,M,d,T)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?(k.push(b),k.push(c),
            k.push(d),k.push(a)):(l.transcludeOnThisElement&&(a=aa(b,l.transclude,e)),l(p,b,c,d,a)))}}function y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function xa(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,sa(d));}function Y(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&H.$$addBindingClass(a);return function(a,c){var e=c.parent();b||H.$$addBindingClass(e);H.$$addBindingInfo(e,d.expressions);a.$watch(d,
            function(a){c[0].nodeValue=a})}}})}function S(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Ga(a,b){if("srcdoc"==b)return T.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return T.RESOURCE_URL}function R(a,c,d,e,f){var k=b(d,!0);if(k){if("multiple"===e&&"select"===pa(a))throw ia("selmulti",sa(a));c.push({priority:100,compile:function(){return{pre:function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    d,l){d=l.$$observers||(l.$$observers={});if(h.test(e))throw ia("nodomevents");l[e]&&(k=b(l[e],!0,Ga(a,e),g[e]||f))&&(l[e]=k(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(k,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function yb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
            c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());ma?(Lb=!0,ma.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return E(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,sa(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
        {};this.$$element=a};Xb.prototype={$normalize:ua,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Qc(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=Qc(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Jc(f,a),h=df(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
            e=Kb(a,"-"));g=pa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var p=2*l,g=g+M(U(h[p]),!0),g=g+(" "+U(h[p+1]));h=U(h[2*l]).split(/\s/);g+=M(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
        r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=wa()),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){e.$$inter||b(c[a])});return function(){Wa(e,b)}}};var ga=b.startSymbol(),Na=b.endSymbol(),Oc="{{"==ga||"}}"==Na?Ta:function(a){return a.replace(/\{\{/g,ga).replace(/}}/g,Na)},ya=/^ngAttr[A-Z]/;H.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];B(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;H.$$addBindingClass=l?
            function(a){P(a,"ng-binding")}:A;H.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;H.$$addScopeClass=l?function(a,b){P(a,b?"ng-isolate-scope":"ng-scope")}:A;return H}]}function ua(b){return ab(b.replace(lf,""))}function Qc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pc(b){b=D(b);var a=b.length;if(1>=a)return b;for(;a--;)8===
    b[a].nodeType&&mf.call(b,a,1);return b}function Ae(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ka(a,"controller");G(a)?E(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!G(a.$scope))throw y("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,k,h,l){var m,q,p;h=!0===h;l&&I(l)&&(p=l);I(g)&&(l=g.match(c),q=l[1],p=p||l[3],g=b.hasOwnProperty(q)?b[q]:tc(k.$scope,q,!0)||(a?tc(e,q,!0):u),nb(g,q,!0));
        if(h)return h=function(){},h.prototype=(B(g)?g[g.length-1]:g).prototype,m=new h,p&&f(k,p,m,q||g.name),E(function(){d.invoke(g,m,k,q);return m},{instance:m,identifier:p});m=d.instantiate(g,k,q);p&&f(k,p,m,q||g.name);return m}}]}function Be(){this.$get=["$window",function(b){return D(b.document)}]}function Ce(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Rc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=N(U(b.substr(0,e)));
        d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Sc(b){var a=G(b)?b:u;return function(c){a||(a=Rc(b));return c?a[N(c)]||null:a}}function Tc(b,a,c){if(F(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Fe(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d,e){if(I(d)){d=d.replace(c,"");var f=e("Content-Type");if(f&&0===f.indexOf("application/json")||b.test(d)&&a.test(d))d=
        oc(d)}return d}],transformRequest:[function(a){return G(a)&&"[object File]"!==Ia.call(a)&&"[object Blob]"!==Ia.call(a)?ra(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return z(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,q,p){function n(a){function b(a){var d=
        E({},a);d.data=a.data?Tc(a.data,a.headers,c.transformResponse):a.data;a=a.status;return 200<=a&&300>a?d:q.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[N(a.method)]);a:for(d in b){a=N(d);for(f in c)if(N(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){F(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=pb(c.method);var f=
        [function(a){d=a.headers;var c=Tc(a.data,Sc(d),a.transformRequest);w(c)&&r(d,function(a,b){"content-type"===N(b)&&delete d[b]});w(a.withCredentials)&&!w(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},u],g=q.when(c);for(r(x,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,
        b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,g,l){function p(a,b,c,e){function g(){s(b,a,c,e)}O&&(200<=a&&300>a?O.put(V,[a,b,Rc(c),e]):O.remove(V));f?d.$applyAsync(g):(g(),d.$$phase||d.$apply())}function s(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?x.resolve:x.reject)({data:a,status:b,headers:Sc(d),config:c,statusText:e})}function H(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,
        1)}var x=q.defer(),r=x.promise,O,K,V=J(c.url,c.params);n.pendingRequests.push(c);r.then(H,H);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=G(c.cache)?c.cache:G(e.cache)?e.cache:v);if(O)if(K=O.get(V),z(K)){if(K&&F(K.then))return K.then(H,H),K;B(K)?s(K[1],K[0],qa(K[2]),K[3]):s(K,200,{},"OK")}else O.put(V,r);w(K)&&((K=Uc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:u)&&(l[c.xsrfHeaderName||e.xsrfHeaderName]=K),a(c.method,V,g,p,l,c.timeout,c.withCredentials,c.responseType));
        return r}function J(a,b){if(!b)return a;var c=[];zd(b,function(a,b){null===a||w(a)||(B(a)||(a=[a]),r(a,function(a){G(a)&&(a=ea(a)?a.toISOString():ra(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var v=c("$http"),x=[];r(g,function(a){x.unshift(I(a)?p.get(a):p.invoke(a))});n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=
        function(b,c,d){return n(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=e;return n}]}function nf(){return new S.XMLHttpRequest}function Ge(){this.$get=["$browser","$window","$document",function(b,a,c){return of(b,nf,b.defer,a.angular.callbacks,c[0])}]}function of(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);
        f=null;var g=-1,n="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),n=a.type,g="error"===a.type?404:200);c&&c(g,n)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,k,h,l,m,q,p,n){function s(){x&&x();t&&t.abort()}function J(a,d,e,f,g){C&&c.cancel(C);x=t=null;a(d,e,f,g);b.$$completeOutstandingRequest(A)}b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==N(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=
        a;d[v].called=!0};var x=f(k.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){J(l,a,d[v].data,"",b);d[v]=A})}else{var t=a();t.open(e,k,!0);r(m,function(a,b){z(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==za(k).protocol?404:0);J(l,c,b,t.getAllResponseHeaders(),a)};e=function(){J(l,-1,null,null,"")};t.onerror=e;t.onabort=e;p&&(t.withCredentials=!0);if(n)try{t.responseType=
        n}catch(T){if("json"!==n)throw T;}t.send(h||null)}if(0<q)var C=c(s,q);else q&&F(q.then)&&q.then(s)}}function De(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,n,s){function J(c){return c.replace(l,b).replace(m,a)}function v(a){try{var b;var c=n?e.getTrusted(n,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;
        case "number":c=""+c;break;default:c=ra(c)}b=c}return b}catch(g){a=Yb("interr",f,g.toString()),d(a)}}s=!!s;for(var x,t,T=0,C=[],M=[],P=f.length,H=[],r=[];T<P;)if(-1!=(x=f.indexOf(b,T))&&-1!=(t=f.indexOf(a,x+k)))T!==x&&H.push(J(f.substring(T,x))),T=f.substring(x+k,t),C.push(T),M.push(c(T,v)),T=t+h,r.push(H.length),H.push("");else{T!==P&&H.push(J(f.substring(T)));break}if(n&&1<H.length)throw Yb("noconcat",f);if(!g||C.length){var u=function(a){for(var b=0,c=C.length;b<c;b++){if(s&&w(a[b]))return;H[r[b]]=
        a[b]}return H.join("")};return E(function(a){var b=0,c=C.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return u(e)}catch(g){a=Yb("interr",f,g.toString()),d(a)}},{exp:f,expressions:C,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=u(c);F(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var k=b.length,h=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Ee(){this.$get=
        ["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,k,h,l){var m=a.setInterval,q=a.clearInterval,p=0,n=z(l)&&!l,s=(n?d:c).defer(),J=s.promise;h=z(h)?h:0;J.then(null,null,e);J.$$intervalId=m(function(){s.notify(p++);0<h&&p>=h&&(s.resolve(p),q(J.$$intervalId),delete f[J.$$intervalId]);n||b.$apply()},k);f[J.$$intervalId]=s;return J}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):
            !1};return e}]}function Md(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Zb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=lb(b[a]);return b.join("/")}function Vc(b,a,c){b=za(b,c);a.$$protocol=
        b.protocol;a.$$host=b.hostname;a.$$port=ba(b.port)||pf[b.protocol]||null}function Wc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=za(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=qc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function va(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function $b(b){return b.substr(0,
            Fa(b).lastIndexOf("/")+1)}function ac(b,a){this.$$html5=!0;a=a||"";var c=$b(b);Vc(b,this,b);this.$$parse=function(a){var e=va(c,a);if(!I(e))throw cb("ipthprfx",a,c);Wc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ib(this.$$search),b=this.$$hash?"#"+lb(this.$$hash):"";this.$$url=Zb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=va(b,d))!==u?
        (g=f,g=(f=va(a,f))!==u?c+(va("/",f)||f):b+g):(f=va(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function bc(b,a){var c=$b(b);Vc(b,this,b);this.$$parse=function(d){var e=va(b,d)||va(c,d),e="#"==e.charAt(0)?va(a,e):this.$$html5?e:"";if(!I(e))throw cb("ihshprfx",d,a);Wc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?
        "#"+lb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):!1}}function Xc(b,a){this.$$html5=!0;bc.apply(this,arguments);var c=$b(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=va(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?"#"+lb(this.$$hash):
        "";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function zb(b){return function(){return this[b]}}function Yc(b,a){return function(c){if(w(c))return this[b];this[b]=a(c);this.$$compose();return this}}function He(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return Va(b)?(a.enabled=b,this):G(b)?(Va(b.enabled)&&(a.enabled=b.enabled),Va(b.requireBase)&&(a.requireBase=b.requireBase),Va(b.rewriteLinks)&&
        (a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=h.url(),f=h.$$state;try{d.url(a,b,c),h.$$state=d.state()}catch(g){throw h.url(e),h.$$state=f,g;}}function k(a,b){c.$broadcast("$locationChangeSuccess",h.absUrl(),a,h.$$state,b)}var h,l;l=d.baseHref();var m=d.url(),q;if(a.enabled){if(!l&&a.requireBase)throw cb("nobase");q=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?ac:Xc}else q=Fa(m),
        l=bc;h=new l(q,"#"+b);h.$$parseLinkUrl(m,m);h.$$state=d.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=D(b.target);"a"!==pa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");G(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=za(g.animVal).href);p.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!h.$$parseLinkUrl(g,k)||(b.preventDefault(),h.absUrl()!=
        d.url()&&(c.$apply(),S.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);var n=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=h.absUrl(),e=h.$$state;h.$$parse(a);h.$$state=b;c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented?(h.$$parse(d),h.$$state=e,g(d,!1,e)):(n=!1,k(d,e))});c.$$phase||c.$digest()});c.$watch(function(){var a=d.url(),b=d.state(),f=h.$$replace,l=a!==h.absUrl()||h.$$html5&&e.history&&b!==h.$$state;if(n||l)n=!1,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
        h.absUrl(),a,h.$$state,b).defaultPrevented?(h.$$parse(a),h.$$state=b):(l&&g(h.absUrl(),f,b===h.$$state?null:h.$$state),k(a,b))});h.$$replace=!1});return h}]}function Ie(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||
    {},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(h){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Aa(b,a){if(b){if(b.constructor===
        b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function cc(b){return b.constant}function Oa(b,a,c,d){Aa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=Aa(b[e],d);g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Aa(b[e],d);return b[e]=c}function Zc(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,k){var h=k&&k.hasOwnProperty(b)?
        k:f;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return u;h=h[a];if(!c)return h;if(null==h)return u;h=h[c];if(!d)return h;if(null==h)return u;h=h[d];return e?null==h?u:h=h[e]:h}}function $c(b,a,c){var d=ad[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Zc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Zc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=u,a=g;while(d<f);return g};else{var g="";r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+
        a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=da(g);d=a}d.sharedGetter=!0;d.assign=function(a,c){return Oa(a,b,c,b)};return ad[b]=d}function Je(){var b=wa(),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&
        b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=a.valueOf(),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function k(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&b.valueOf());return h},b,c)}for(var l=[],m=0,q=e.length;m<q;m++)l[m]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&k.valueOf()}b&&(h=
        d(a));return h},b,c)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;F(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){z(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;F(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){F(b)&&
    b.apply(this,arguments);e()},c)}function q(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return z(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==k?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=k,c.inputs=[a]);return c}a.csp=d.csp;return function(d,f){var g,J,v;switch(typeof d){case "string":return v=d=d.trim(),g=b[v],g||(":"===d.charAt(0)&&":"===d.charAt(1)&&(J=!0,d=d.substring(2)),g=new dc(a),g=(new db(g,c,a)).parse(d),g.constant?g.$$watchDelegate=m:J?(g=e(g),
        g.$$watchDelegate=g.literal?l:h):g.inputs&&(g.$$watchDelegate=k),b[v]=g),q(g,f);case "function":return q(d,f);default:return q(A,f)}}}]}function Le(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return bd(function(a){b.$evalAsync(a)},a)}]}function Me(){this.$get=["$browser","$exceptionHandler",function(b,a){return bd(function(a){b.defer(a)},a)}]}function bd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state=
    {status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{F(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var k=
        y("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(k("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,
        e;e=c(this,this.$$resolve,this.$$reject);try{if(G(b)||F(b))d=b&&b.then;F(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
    d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(F(b)?b(c):c)}catch(h){a(h)}}})}};var h=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{F(c)&&(d=c())}catch(e){return h(e,!1)}return d&&F(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function n(a){if(!F(a))throw k("norslvr",a);if(!(this instanceof
        n))return new n(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;b.reject(a);return b.promise};q.when=m;q.all=function(a){var b=new g,c=0,d=B(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function Ve(){this.$get=["$window","$timeout",function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Ke(){var b=10,a=y("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler",
        "$parse","$browser",function(e,f,g,k){function h(){this.$id=++hb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(s.$$phase)throw a("inprog",s.$$phase);s.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function p(){for(;x.length;)try{x.shift()()}catch(a){f(a)}d=
            null}function n(){null===d&&(d=k.defer(function(){s.$apply(p)}))}h.prototype={constructor:h,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new h,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++hb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?
            (b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:q,get:e,exp:a,eq:!!d};c=null;F(b)||(h.fn=A);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Wa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=
            !0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(G(e))if(Ra(e))for(f!==p&&(f=p,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===
            g||(l++,f[b]=g);else{f!==n&&(f=n={},s=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)e.hasOwnProperty(b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),p=[],n={},q=!0,s=0;return this.$watch(m,function(){q?(q=!1,b(e,e,d)):b(e,h,d);if(k)if(G(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)Hb.call(e,
            a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,h,m,n,r,Q=b,x,O=[],K,u,z;l("$digest");k.$$checkUrlChange();this===s&&null!==d&&(k.defer.cancel(d),p());c=null;do{r=!1;for(x=this;J.length;){try{z=J.shift(),z.scope.$eval(z.expression)}catch(y){f(y)}c=null}a:do{if(m=x.$$watchers)for(n=m.length;n--;)try{if(e=m[n])if((g=e.get(x))!==(h=e.last)&&!(e.eq?la(g,h):"number"===typeof g&&"number"===typeof h&&isNaN(g)&&isNaN(h)))r=!0,c=e,e.last=e.eq?Ca(g,null):g,e.fn(g,h===q?g:h,x),5>Q&&(K=4-Q,O[K]||(O[K]=
            []),u=F(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,u+="; newVal: "+ra(g)+"; oldVal: "+ra(h),O[K].push(u));else if(e===c){r=!1;break a}}catch(D){f(D)}if(!(m=x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==this&&!(m=x.$$nextSibling);)x=x.$parent}while(x=m);if((r||J.length)&&!Q--)throw s.$$phase=null,a("infdig",b,ra(O));}while(r||J.length);for(s.$$phase=null;v.length;)try{v.shift()()}catch(A){f(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=
            !0;if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$parent=
            this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){s.$$phase||J.length||k.defer(function(){J.length&&s.$digest()});J.push({scope:this,expression:a})},$$postDigest:function(a){v.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&
        x.push(b);n()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[c.indexOf(b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=jb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;
            l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(p){f(p)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=jb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
            1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new h,J=s.$$asyncQueue=[],v=s.$$postDigestQueue=[],x=s.$$applyAsyncQueue=[];return s}]}function Nd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=
        function(){return function(c,d){var e=d?a:b,f;f=za(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function qf(b){if("self"===b)return b;if(I(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ib(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function cd(b){var a=[];z(b)&&r(b,function(b){a.push(qf(b))});return a}function Oe(){this.SCE_CONTEXTS=
        ja;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=cd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=cd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Uc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
        return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),k={};k[ja.HTML]=e(g);k[ja.CSS]=e(g);k[ja.URL]=e(g);k[ja.JS]=e(g);k[ja.RESOURCE_URL]=e(k[ja.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=k.hasOwnProperty(c)?k[c]:null;if(g&&e instanceof
        g)return e.$$unwrapTrustedValue();if(c===ja.RESOURCE_URL){var g=za(e.toString()),q,p,n=!1;q=0;for(p=b.length;q<p;q++)if(d(b[q],g)){n=!0;break}if(n)for(q=0,p=a.length;q<p;q++)if(d(a[q],g)){n=!1;break}if(n)return e;throw Ba("insecurl",e.toString());}if(c===ja.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Ne(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$document","$parse","$sceDelegate",function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     c,d){if(b&&8>a[0].documentMode)throw Ba("iequirks");var e=qa(ja);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ta);e.parseAs=function(a,b){var d=c(b);return d.literal&&d.constant?d:c(b,function(b){return e.getTrusted(a,b)})};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;r(ja,function(a,b){var c=N(b);e[ab("parse_as_"+c)]=function(b){return f(a,b)};e[ab("get_trusted_"+c)]=function(b){return g(a,
        b)};e[ab("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function Pe(){this.$get=["$window","$document",function(b,a){var c={},d=ba((/android (\d+)/.exec(N((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,m=!1;if(h){for(var q in h)if(l=k.exec(q)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||g+"Transition"in h);m=!!("animation"in
        h||g+"Animation"in h);!d||l&&m||(l=I(f.body.style.webkitTransition),m=I(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"==a&&9==Pa)return!1;if(w(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Re(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){k.totalPendingRequests--;if(!f)throw ia("tpload",e);return c.reject()}
        var k=d;k.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();k.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Se(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ta.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=
        d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(c?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Te(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,h,l){var m=z(l)&&
        !l,q=(m?d:c).defer(),p=q.promise;h=a.defer(function(){try{q.resolve(f())}catch(a){q.reject(a),e(a)}finally{delete g[p.$$timeoutId]}m||b.$apply()},h);p.$$timeoutId=h;g[h]=q;return p}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b,a){var c=b;Pa&&(Z.setAttribute("href",c),c=Z.href);Z.setAttribute("href",c);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):
        "",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Uc(b){b=I(b)?za(b):b;return b.protocol===dd.protocol&&b.host===dd.host}function Ue(){this.$get=da(S)}function Bc(b){function a(c,d){if(G(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
        "Filter")}}];a("currency",ed);a("date",fd);a("filter",rf);a("json",sf);a("limitTo",tf);a("lowercase",uf);a("number",gd);a("orderBy",hd);a("uppercase",vf)}function rf(){return function(b,a,c){if(!B(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return ta.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Hb.call(a,d)&&c(a[d],
        b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a=
    {$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=b[g];e.check(k,g)&&d.push(k)}return d}}function ed(b){var a=b.NUMBER_FORMATS;return function(b,d,e){w(d)&&(d=a.CURRENCY_SYM);w(e)&&(e=2);return null==b?b:id(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function gd(b){var a=b.NUMBER_FORMATS;return function(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         d){return null==b?b:id(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function id(b,a,c,d,e){if(!isFinite(b)||G(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",h=[],l=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?(g="0",b=0):(k=g,l=!0)}if(l)0<e&&-1<b&&1>b&&(k=b.toFixed(e));else{g=(g.split(jd)[1]||"").length;w(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(jd);g=b[0];
        b=b[1]||"";var m=0,q=a.lgSize,p=a.gSize;if(g.length>=q+p)for(m=g.length-q,l=0;l<m;l++)0===(m-l)%p&&0!==l&&(k+=c),k+=g.charAt(l);for(l=m;l<g.length;l++)0===(g.length-l)%q&&0!==l&&(k+=c),k+=g.charAt(l);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}h.push(f?a.negPre:a.posPre);h.push(k);h.push(f?a.negSuf:a.posSuf);return h.join("")}function Ab(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=
        e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ab(e,a,d)}}function Bb(b,a){return function(c,d){var e=c["get"+b](),f=pb(a?"SHORT"+b:b);return d[f][e]}}function kd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function ld(b){return function(a){var c=kd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ab(a,b)}}function fd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?
        a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));k.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;k=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",k=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;I(c)&&(c=wf.test(c)?ba(c):a(c));W(c)&&(c=new Date(c));
        if(!ea(c))return c;for(;e;)(l=xf.exec(e))?(k=jb(k,l,1),e=k.pop()):(k.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(k,function(a){h=yf[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function sf(){return function(b){return ra(b,!0)}}function tf(){return function(b,a){W(b)&&(b=b.toString());if(!B(b)&&!I(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):ba(a);if(I(b))return a?0<=a?b.slice(0,a):
        b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function hd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ea(a)&&ea(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=B(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=
        !1,d=a||Ta;if(I(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ha(b){F(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}
    function md(b,a,c,d,e){var f=this,g=[],k=f.$$parentForm=b.parent().controller("form")||Cb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;k.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ka(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Wa(g,a)};nd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Wa(d,c),0===d.length&&delete a[b])},parentForm:k,$animate:d});f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,Db);f.$dirty=
        !0;f.$pristine=!1;k.$setDirty()};f.$setPristine=function(){d.setClass(b,Qa,Db+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;k.$setSubmitted()}}function ec(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function eb(b,a,c,d,e,f){a.prop("validity");var g=a[0].placeholder,k={},h=N(a[0].type);if(!e.android){var l=
        !1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;m()})}var m=function(b){if(!l){var e=a.val(),f=b&&b.type;Pa&&"input"===(b||k).type&&a[0].placeholder!==g?g=a[0].placeholder:("password"===h||c.ngTrim&&"false"===c.ngTrim||(e=U(e)),(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,f))}};if(e.hasEvent("input"))a.on("input",m);else{var q,p=function(a){q||(q=f.defer(function(){m(a);q=null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&
        19>b||37<=b&&40>=b||p(a)});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",m);d.$render=function(){a.val(d.$isEmpty(d.$modelValue)?"":d.$viewValue)}}function Eb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(I(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(zf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/
        1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function fb(b,a,c,d){return function(e,f,g,k,h,l,m){function q(a){return z(a)?ea(a)?a:c(a):u}od(e,f,g,k);eb(e,f,g,k,h,l);var p=k&&k.$options&&k.$options.timezone,n;k.$$parserName=b;k.$parsers.push(function(b){return k.$isEmpty(b)?null:a.test(b)?(b=c(b,n),"UTC"===p&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});k.$formatters.push(function(a){if(k.$isEmpty(a))n=
        null;else{if(!ea(a))throw Fb("datefmt",a);if((n=a)&&"UTC"===p){var b=6E4*n.getTimezoneOffset();n=new Date(n.getTime()+b)}return m("date")(a,d,p)}return""});if(z(g.min)||g.ngMin){var s;k.$validators.min=function(a){return k.$isEmpty(a)||w(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);k.$validate()})}if(z(g.max)||g.ngMax){var r;k.$validators.max=function(a){return k.$isEmpty(a)||w(r)||c(a)<=r};g.$observe("max",function(a){r=q(a);k.$validate()})}k.$isEmpty=function(a){return!a||a.getTime&&a.getTime()!==
        a.getTime()}}}function od(b,a,c,d){(d.$$hasNativeValidators=G(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function pd(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw y("ngModel")("constexpr",c,d);return b(a)}return e}function nd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Kb(b,"-"):"";a(gb+b,!0===c);a(qd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,k=
        b.unset,h=b.parentForm,l=b.$animate;f[qd]=!(f[gb]=e.hasClass(gb));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&k(d.$pending,b,f),rd(d.$pending)&&(d.$pending=u));Va(e)?e?(k(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),k(d.$$success,b,f)):(k(d.$error,b,f),k(d.$$success,b,f));d.$pending?(a(sd,!0),d.$valid=d.$invalid=u,c("",null)):(a(sd,!1),d.$valid=rd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:
        d.$$success[b]?!0:null;c(b,e);h.$setValidity(b,e,d)}}function rd(b){if(b)for(var a in b)return!1;return!0}function fc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!B(a)){if(I(a))return a.split(" ");if(G(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function h(a,b){var c=g.data("$classCounts")||
    {},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!m){var n=h(l,1);k.$addClass(n)}else if(!la(b,m)){var s=e(m),n=d(l,s),l=d(s,l),n=h(n,1),l=h(l,-1);n&&n.length&&c.addClass(g,n);l&&l.length&&c.removeClass(g,l)}}m=qa(b)}var m;f.$watch(k[b],l,!0);k.$observe("class",function(a){l(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=
        e(f.$eval(k[b]));g===a?(g=h(l,1),k.$addClass(g)):(g=h(l,-1),k.$removeClass(g))}})}}}]}var Af=/^\/(.+)\/([a-z]*)$/,N=function(b){return I(b)?b.toLowerCase():b},Hb=Object.prototype.hasOwnProperty,pb=function(b){return I(b)?b.toUpperCase():b},Pa,D,ma,Ya=[].slice,mf=[].splice,Bf=[].push,Ia=Object.prototype.toString,Xa=y("ng"),ta=S.angular||(S.angular={}),$a,hb=0;Pa=X.documentMode;A.$inject=[];Ta.$inject=[];var B=Array.isArray,U=function(b){return I(b)?b.trim():b},Za=function(){if(z(Za.isActive_))return Za.isActive_;
        var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},mb=["ng-","data-ng-","ng:","x-ng-"],Hd=/[A-Z]/g,sc=!1,Lb,ka=1,kb=3,Ld={full:"1.3.0",major:1,minor:3,dot:0,codeName:"superluminal-nudge"};R.expando="ng339";var ub=R.cache={},bf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var Xe=/([\:\-\_]+(.))/g,Ye=/^moz([A-Z])/,Cf={mouseleave:"mouseout",mouseenter:"mouseover"},Ob=y("jqLite"),af=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Nb=/<|&#?\w+;/,Ze=/<([\w:]+)/,$e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var Ja=R.prototype={ready:function(b){function a(){c||(c=
        !0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(S).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Bf,sort:[].sort,splice:[].splice},wb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){wb[N(b)]=b});var Kc={};r("input select option textarea button form details".split(" "),
        function(b){Kc[b]=!0});var Lc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Qb,removeData:sb},function(b,a){R[a]=b});r({data:Qb,inheritedData:vb,scope:function(b){return D.data(b,"$scope")||vb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Gc,injector:function(b){return vb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Rb,
        css:function(b,a,c){a=ab(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=N(a);if(wb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||A).specified?d:u;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(w(b)){var d=a.nodeType;return d===ka||d===kb?a.textContent:""}a.textContent=
            b}b.$dv="";return b}(),val:function(b,a){if(w(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(w(a))return b.innerHTML;rb(b,!0);b.innerHTML=a},empty:Hc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Hc&&(2==b.length&&b!==Rb&&b!==Gc?a:d)===u){if(G(a)){for(e=0;e<g;e++)if(b===Qb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
        g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var k=b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:sb,on:function a(c,d,e,f){if(z(f))throw Ob("onargs");if(Cc(c)){var g=tb(c,!0);f=g.events;var k=g.handle;k||(k=g.handle=ef(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],h=g.length;h--;){d=g[h];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Cf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||k(a,d)}):"$destroy"!==d&&c.addEventListener(d,
        k,!1),l=f[d]);l.push(e)}}},off:Fc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;rb(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===ka&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===ka||11===d){c=new R(c);for(var d=0,e=c.length;d<
        e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===ka){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Ic,detach:function(a){Ic(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var k=c[f];e.insertBefore(k,d.nextSibling);d=k}},addClass:Tb,removeClass:Sb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=
        d;w(f)&&(f=!Rb(a,c));(f?Tb:Sb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Pb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,k=tb(a);if(k=(k=k&&k.events)&&k[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
        !0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:g,target:a},c.type&&(e=E(e,c)),c=qa(k),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,k=0,h=this.length;k<h;k++)w(g)?(g=a(this[k],c,e,f),z(g)&&(g=D(g))):Ec(g,a(this[k],c,e,f));return z(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});bb.prototype={put:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               c){this[La(a,this.nextUid)]=c},get:function(a){return this[La(a,this.nextUid)]},remove:function(a){var c=this[a=La(a,this.nextUid)];delete this[a];return c}};var Nc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,gf=/,/,hf=/^\s*(_?)(\S+?)\1\s*$/,Mc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=y("$injector");Jb.$$annotate=Ub;var Df=y("$animate"),xe=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Df("notcsel",c);this.$$selectors[c.substr(1)]=e;
        a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=wa();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):
        !0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function k(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function h(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ta.isObject(c)){var d=E(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return h()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return h()},leave:function(a,c){a.remove();return h()},move:function(a,c,d,e){return this.enter(a,
        c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=I(c)?c:B(c)?c.join(" "):"";r(a,function(a){Tb(a,c)});l(a,d);return h()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=I(c)?c:B(c)?c.join(" "):"";r(a,function(a){Sb(a,c)});l(a,d);return h()},setClass:function(a,c,d,e){var h=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ta.extend(m.options||{},e)):
        (m={classes:{},options:e},l=!0);e=m.classes;c=B(c)?c:c.split(" ");d=B(d)?d:d.split(" ");k(e,c,!0);k(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&h.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return h()},enabled:A,cancel:A}}]}],ia=y("$compile");
    uc.$inject=["$provide","$$sanitizeUriProvider"];var lf=/^(x[\:\-_]|data[\:\-_])/i,Yb=y("$interpolate"),Ef=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,pf={http:80,https:443,ftp:21},cb=y("$location"),Ff={$$html5:!1,$$replace:!1,absUrl:zb("$$absUrl"),url:function(a){if(w(a))return this.$$url;a=Ef.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:zb("$$protocol"),host:zb("$$host"),port:zb("$$port"),path:Yc("$$path",function(a){a=null!==
        a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||W(a))a=a.toString(),this.$$search=qc(a);else if(G(a))a=Ca(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw cb("isrcharg");break;default:w(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Yc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
    r([Xc,bc,ac],function(a){a.prototype=Object.create(Ff);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==ac||!this.$$html5)throw cb("nostate");this.$$state=w(c)?null:c;return this}});var oa=y("$parse"),Gf=Function.prototype.call,Hf=Function.prototype.apply,If=Function.prototype.bind,Gb=wa();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Gb[c]=a});Gb["this"]=
        function(a){return a};Gb["this"].sharedGetter=!0;var gc=E(wa(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,
        c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Jf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},dc=function(a){this.options=a};dc.prototype={constructor:dc,lex:function(a){this.text=a;this.index=0;this.ch=u;
        for(this.tokens=[];this.index<this.text.length;)if(this.ch=this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=gc[this.ch],e=gc[a],f=gc[c];f?(this.tokens.push({index:this.index,
            text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===
        a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==
        d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this.text,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===
    k&&(e=this.index),c+=k;else break;this.index++}e&&"."===c[c.length-1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=u));if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}this.tokens.push({index:d,text:c,fn:Gb[c]||$c(c,this.options,a)});g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;
        for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Jf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};
    var db=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};db.ZERO=E(function(){return 0},{sharedGetter:!0,constant:!0});db.prototype={constructor:db,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();
    else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
        this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     c,d,e){return E(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.expect(),d=this.$filter(c.text),e,f;if(this.peek(":"))for(e=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              [],f=[];this.expect(":");)e.push(this.expression());c=[a].concat(e||[]);return E(function(c,k){var h=a(c,k);if(f){f[0]=h;for(h=e.length;h--;)f[h+1]=e[h](c,k);return d.apply(u,f)}return d(h)},{constant:!d.$stateful&&c.every(cc),inputs:!d.$stateful&&c})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),
        E(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c,d;if(d=this.expect("?")){c=this.assignment();if(d=this.expect(":")){var e=this.assignment();return E(function(d,g){return a(d,g)?c(d,g):e(d,g)},{constant:a.constant&&c.constant&&e.constant})}this.throwError("expected :",d)}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},logicalAND:function(){var a=this.equality(),
        c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND(),!0);return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=
        this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(db.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.expect().text,e=$c(d,this.options,c);return E(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){(k=a(e,k))||a.assign(e,k={});return Oa(k,d,g,c)}})},objectIndex:function(a){var c=
        this.text,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),k=d(e,f);na(k,c);return g?Aa(g[k],c):u},{assign:function(e,f,g){var k=na(d(e,g),c);(g=Aa(a(e,g),c))||a.assign(e,g={});return g[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,k){var h=c?c(g,k):g,l=a(g,k,h)||A;if(f)for(var m=d.length;m--;)f[m]=Aa(d[m](g,k),e);Aa(h,
        e);if(l){if(l.constructor===l)throw oa("isecfn",e);if(l===Gf||l===Hf||l===If)throw oa("isecff",e);}h=l.apply?l.apply(h,f):l(f[0],f[1],f[2],f[3],f[4]);return Aa(h,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var c=this.expression();a.push(c)}while(this.expect(","))}this.consume("]");return E(function(c,e){for(var f=[],g=0,k=a.length;g<k;g++)f.push(a[g](c,e));return f},{literal:!0,constant:a.every(cc),inputs:a})},object:function(){var a=[],c=[];
        if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect();a.push(d.string||d.text);this.consume(":");d=this.expression();c.push(d)}while(this.expect(","))}this.consume("}");return E(function(d,f){for(var g={},k=0,h=c.length;k<h;k++)g[a[k]]=c[k](d,f);return g},{literal:!0,constant:c.every(cc),inputs:c})}};var ad=wa(),Ba=y("$sce"),ja={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ia=y("$compile"),Z=X.createElement("a"),dd=za(S.location.href,!0);Bc.$inject=
        ["$provide"];ed.$inject=["$locale"];gd.$inject=["$locale"];var jd=".",yf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Bb("Month"),MMM:Bb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Bb("Day"),EEE:Bb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=
        -1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ab(Math[0<a?"floor":"ceil"](a/60),2)+Ab(Math.abs(a%60),2))},ww:ld(2),w:ld(1)},xf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,wf=/^\-?\d+$/;fd.$inject=["$locale"];var uf=da(N),vf=da(pb);hd.$inject=["$parse"];var Od=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ia.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
    a.preventDefault()})}}}),qb={};r(wb,function(a,c){if("multiple"!=a){var d=ua("ng-"+c);qb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Lc,function(a,c){qb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Af))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=ua("ng-"+
        a);qb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===Ia.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(k,c),Pa&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}});var Cb={$addControl:A,$$renameControl:function(a,c){a.$name=c},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};md.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var td=function(a){return["$timeout",
            function(c){return{name:"form",restrict:a?"EAC":"E",controller:md,compile:function(a){a.addClass(Qa).addClass(gb);return{pre:function(a,d,g,k){if(!("action"in g)){var h=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};d[0].addEventListener("submit",h,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",h,!1)},0,!1)})}var l=k.$$parentForm,m=k.$name;m&&(Oa(a,m,k,m),g.$observe(g.name?"name":"ngForm",
                function(c){m!==c&&(Oa(a,m,u,m),m=c,Oa(a,m,k,m),l.$$renameControl(k,m))}));d.on("$destroy",function(){l.$removeControl(k);m&&Oa(a,m,u,m);E(k,Cb)})}}}}}]},Pd=td(),be=td(!0),zf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Kf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Lf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Mf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,ud=/^(\d{4})-(\d{2})-(\d{2})$/,
        vd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,hc=/^(\d{4})-W(\d\d)$/,wd=/^(\d{4})-(\d\d)$/,xd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Nf=/(\s+|^)default(\s+|$)/,Fb=new y("ngModel"),yd={text:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e)},date:fb("date",ud,Eb(ud,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":fb("datetimelocal",vd,Eb(vd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:fb("time",xd,Eb(xd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:fb("week",
            hc,function(a,c){if(ea(a))return a;if(I(a)){hc.lastIndex=0;var d=hc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,k=0,h=0,l=kd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),k=c.getSeconds(),h=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,k,h)}}return NaN},"yyyy-Www"),month:fb("month",wd,Eb(wd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){od(a,c,d,e);eb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Mf.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!W(a))throw Fb("numfmt",
            a);a=a.toString()}return a});if(d.min||d.ngMin){var k;e.$validators.min=function(a){return e.$isEmpty(a)||w(k)||a>=k};d.$observe("min",function(a){z(a)&&!W(a)&&(a=parseFloat(a,10));k=W(a)&&!isNaN(a)?a:u;e.$validate()})}if(d.max||d.ngMax){var h;e.$validators.max=function(a){return e.$isEmpty(a)||w(h)||a<=h};d.$observe("max",function(a){z(a)&&!W(a)&&(a=parseFloat(a,10));h=W(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e);e.$$parserName="url";e.$validators.url=function(a){return e.$isEmpty(a)||
            Kf.test(a)}},email:function(a,c,d,e,f,g){eb(a,c,d,e,f,g);ec(e);e.$$parserName="email";e.$validators.email=function(a){return e.$isEmpty(a)||Lf.test(a)}},radio:function(a,c,d,e){w(d.name)&&c.attr("name",++hb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,k,h){var l=pd(h,a,"ngTrueValue",d.ngTrueValue,!0),m=pd(h,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",
            function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==l};e.$formatters.push(function(a){return la(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:A,button:A,submit:A,reset:A,file:A},vc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,k,h){h[0]&&(yd[N(k.type)]||yd.text)(f,g,k,h[0],c,a,d,e)}}}}],gb="ng-valid",qd="ng-invalid",Qa="ng-pristine",
        Db="ng-dirty",sd="ng-pending",Of=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,k,h,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||
            "",!1)(a);var q=f(d.ngModel),p=null,n=this,s=function(){var c=q(a);n.$options&&n.$options.getterSetter&&F(c)&&(c=c());return c},J=function(c){var d;n.$options&&n.$options.getterSetter&&F(d=q(a))?d(n.$modelValue):q.assign(a,n.$modelValue)};this.$$setOptions=function(a){n.$options=a;if(!(q.assign||a&&a.getterSetter))throw Fb("nonassign",d.ngModel,sa(e));};this.$render=A;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Cb,x=0;nd({ctrl:this,$element:e,
            set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Db);g.addClass(e,Qa)};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){k.cancel(p);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){W(n.$modelValue)&&
        isNaN(n.$modelValue)||this.$$parseAndValidate()};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!F(k.then))throw Fb("$asyncValidators",k);h(g,u);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},A):k(!0)}function h(a,c){m===x&&n.$setValidity(a,
            c)}function k(a){m===x&&e(a)}x++;var m=x;(function(a){var c=n.$$parserName||"parse";if(a===u)h(c,null);else if(h(c,a),!a)return r(n.$validators,function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;k.cancel(p);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&(n.$dirty=!0,n.$pristine=!1,g.removeClass(e,Qa),g.addClass(e,Db),v.$setDirty()),
            this.$$parseAndValidate()};this.$$parseAndValidate=function(){var a=n.$$lastCommittedViewValue,c=a,d=w(c)?u:!0;if(d)for(var e=0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),w(c)){d=!1;break}W(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=s());var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,a,function(a){g||(n.$modelValue=a?c:u,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=
            function(){J(n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&z(e.debounce)&&(e=e.debounce,W(e)?d=e:W(e[c])?d=e[c]:W(e["default"])&&(d=e["default"]));k.cancel(p);d?p=k(function(){n.$commitViewValue()},d):h.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var a=
            s();if(a!==n.$modelValue){n.$modelValue=a;for(var c=n.$formatters,d=c.length,e=a;d--;)e=c[d](e);n.$viewValue!==e&&(n.$viewValue=n.$$lastCommittedViewValue=e,n.$render(),n.$$runValidators(u,a,e,A))}return a})}],qe=function(){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Of,priority:1,compile:function(a){a.addClass(Qa).addClass("ng-untouched").addClass(gb);return{pre:function(a,d,e,f){var g=f[0],k=f[1]||Cb;g.$$setOptions(f[2]&&f[2].$options);k.$addControl(g);e.$observe("name",
            function(a){g.$name!==a&&k.$$renameControl(g,a)});a.$on("$destroy",function(){k.$removeControl(g)})},post:function(a,d,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)d.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});d.on("blur",function(d){g.$touched||a.$apply(function(){g.$setTouched()})})}}}}},se=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xc=function(){return{restrict:"A",require:"?ngModel",
            link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a){return!d.required||!e.$isEmpty(a)},d.$observe("required",function(){e.$validate()}))}}},wc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw y("ngPattern")("noregexp",g,a,sa(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||w(f)||f.test(a)}}}}},
        zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(a)||c.length<=f}}}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(a)||c.length>=f}}}}},re=function(){return{restrict:"A",priority:100,
            require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,k=g?U(f):f;e.$parsers.push(function(a){if(!w(a)){var c=[];a&&r(a.split(k),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return B(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},Pf=/^(true|false|\d+)$/,te=function(){return{restrict:"A",priority:100,compile:function(a,c){return Pf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ue=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(Nf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ud=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],Wd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],Vd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),k=c(f.ngBindHtml,
            function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(k,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Xd=fc("",!0),Zd=fc("Odd",0),Yd=fc("Even",1),$d=Ha({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),ae=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ac={},Qf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
        function(a){var c=ua("ng-"+a);Ac[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var k=d(g[c]);return function(c,d){d.on(a,function(d){var f=function(){k(c,{$event:d})};Qf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var de=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,h,l;c.$watch(e.ngIf,function(c){c?h||g(function(c,f){h=f;c[c.length++]=X.createComment(" end ngIf: "+
        e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=ob(k.clone),a.leave(l).then(function(){l=null}),k=null))})}}}],ee=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ta.noop,compile:function(f,g){var k=g.ngInclude||g.src,h=g.onload||"",l=g.autoscroll;return function(f,g,p,n,r){var u=0,v,x,t,y=function(){x&&(x.remove(),x=null);v&&(v.$destroy(),
        v=null);t&&(d.leave(t).then(function(){x=null}),x=t,t=null)};f.$watch(e.parseAsResourceUrl(k),function(e){var k=function(){!z(l)||l&&!f.$eval(l)||c()},p=++u;e?(a(e,!0).then(function(a){if(p===u){var c=f.$new();n.template=a;a=r(c,function(a){y();d.enter(a,null,g).then(k)});v=c;t=a;v.$emit("$includeContentLoaded",e);f.$eval(h)}},function(){p===u&&(y(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(y(),n.template=null)})}}}}],ve=["$compile",function(a){return{restrict:"ECA",
        priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Dc(f.template,X).childNodes)(c,function(a){d.append(a)},u,u,d)):(d.html(f.template),a(d.contents())(c))}}}],fe=Ha({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ge=Ha({terminal:!0,priority:1E3}),he=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,h=g.$attr.when&&f.attr(g.$attr.when),l=g.offset||0,m=e.$eval(h)||
    {},q={},p=c.startSymbol(),n=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(m[N(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});r(m,function(a,e){q[e]=c(a.replace(d,p+k+"-"+l+n))});e.$watch(function(){var c=parseFloat(e.$eval(k));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-l));return q[c](e)},function(a){f.text(a)})}}}],ie=["$parse","$animate",function(a,c){var d=y("ngRepeat"),e=function(a,c,d,e,l,m,q){a[d]=e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===
        q-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=X.createComment(" end ngRepeat: "+k+" "),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",k);var m=l[1],q=l[2],p=l[3],n=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",m);var s=l[3]||l[1],J=
        l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(p)))throw d("badident",p);var v,x,t,y,z={$id:La};n?v=a(n):(t=function(a,c){return La(c)},y=function(a){return a});return function(a,f,g,l,n){v&&(x=function(c,d,e){J&&(z[J]=c);z[s]=d;z.$index=e;return v(a,z)});var m=wa();a.$watchCollection(q,function(g){var l,q,z=f[0],H,v=wa(),C,Q,A,E,w,B,F;p&&(a[p]=g);if(Ra(g))w=g,q=x||t;else{q=x||y;w=[];for(F in g)g.hasOwnProperty(F)&&
        "$"!=F.charAt(0)&&w.push(F);w.sort()}C=w.length;F=Array(C);for(l=0;l<C;l++)if(Q=g===w?l:w[l],A=g[Q],E=q(Q,A,l),m[E])B=m[E],delete m[E],v[E]=B,F[l]=B;else{if(v[E])throw r(F,function(a){a&&a.scope&&(m[a.id]=a)}),d("dupes",k,E,ra(A));F[l]={id:E,scope:u,clone:u};v[E]=!0}for(H in m){B=m[H];E=ob(B.clone);c.leave(E);if(E[0].parentNode)for(l=0,q=E.length;l<q;l++)E[l].$$NG_REMOVED=!0;B.scope.$destroy()}for(l=0;l<C;l++)if(Q=g===w?l:w[l],A=g[Q],B=F[l],B.scope){H=z;do H=H.nextSibling;while(H&&H.$$NG_REMOVED);
        B.clone[0]!=H&&c.move(ob(B.clone),null,D(z));z=B.clone[B.clone.length-1];e(B.scope,l,s,A,J,Q,C)}else n(function(a,d){B.scope=d;var f=h.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(z));z=f;B.clone=a;v[B.id]=B;e(B.scope,l,s,A,J,Q,C)});m=v})}}}}],je=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ce=["$animate",function(a){return{restrict:"A",multiElement:!0,
        link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ke=Ha(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),le=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],h=[],l=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,
        e;d=0;for(e=h.length;d<e;++d)a.cancel(h[d]);d=h.length=0;for(e=l.length;d<e;++d){var s=ob(k[d].clone);l[d].$destroy();(h[d]=a.leave(s)).then(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],me=Ha({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=
        e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),ne=Ha({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),pe=Ha({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw y("ngTransclude")("orphan",sa(c));f(function(a){c.empty();c.append(a)})}}),Qd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==
    d.type&&a.put(d.id,c[0].text)}}}],Rf=y("ngOptions"),oe=da({restrict:"A",terminal:!0}),Rd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var h=this,l={},m=e,q;h.databound=d.ngModel;
        h.init=function(a,c,d){m=a;q=d};h.addOption=function(c,d){Ka(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),q.parent()&&q.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};h.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue==a&&this.renderUnknownOption(a))};h.renderUnknownOption=function(c){c="? "+La(c)+" ?";q.val(c);a.prepend(q);a.val(c);q.prop("selected",!0)};h.hasOption=function(a){return l.hasOwnProperty(a)};c.$on("$destroy",function(){h.renderUnknownOption=
            A})}],link:function(e,g,k,h){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&v.prop("selected",!0)):w(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new bb(d.$viewValue);r(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){la(e,d.$viewValue)||(e=qa(d.$viewValue),
        d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function q(e,f,g){function h(a,c,d){N[A]=d;F&&(N[F]=c);return a(e,N)}function k(a){var c;if(n)if(G&&B(a)){c=new bb([]);for(var d=0;d<a.length;d++)c.put(h(G,null,a[d]),!0)}else c=new bb(a);else G&&(a=h(G,null,a));return function(d,e){var f;f=G?G:w?w:I;return n?z(c.remove(h(f,d,e))):a==h(f,d,e)}}function l(){x||(e.$$postDigest(q),x=!0)}function m(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function q(){x=!1;var a={"":[]},c=[""],d,l,s,u,v;s=g.$viewValue;u=P(e)||[];var A=F?ic(u):u,w,B,D,I,G,N={};I=k(s);v=!1;var S;for(G=0;D=A.length,G<D;G++){w=G;if(F&&(w=A[G],"$"===w.charAt(0)))continue;B=u[w];d=h(M,w,B)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=I(w,B);v=v||d;w=h(C,w,B);w=z(w)?w:"";l.push({id:F?A[G]:G,label:w,selected:d})}n||(y||null===s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(A=c.length;I<A;I++){d=
        c[I];l=a[d];R.length<=I?(s={element:E.clone().attr("label",d),label:l.label},u=[s],R.push(u),f.append(s.element)):(u=R[I],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));w=null;G=0;for(D=l.length;G<D;G++)d=l[G],(v=u[G+1])?(w=v.element,v.label!==d.label&&(m(N,v.label,!1),m(N,d.label,!0),w.text(v.label=d.label)),v.id!==d.id&&w.val(v.id=d.id),w[0].selected!==d.selected&&(w.prop("selected",v.selected=d.selected),Pa&&w.prop("selected",v.selected))):(""===d.id&&y?S=y:(S=t.clone()).val(d.id).prop("selected",
        d.selected).attr("selected",d.selected).text(d.label),u.push(v={element:S,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),w?w.after(S):s.element.append(S),w=S);for(G++;u.length>G;)d=u.pop(),m(N,d.label,!1),d.element.remove();r(N,function(a,c){0<a?p.addOption(c):0>a&&p.removeOption(c)})}for(;R.length>I;)R.pop()[0].element.remove()}var v;if(!(v=s.match(d)))throw Rf("iexp",s,sa(f));var C=c(v[2]||v[1]),A=v[4]||v[6],D=/ as /.test(v[0])&&v[1],w=D?c(D):null,F=v[5],M=c(v[3]||""),I=c(v[2]?v[1]:
        A),P=c(v[7]),G=v[8]?c(v[8]):null,R=[[{element:f,label:""}]],N={};y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(n)c=[],r(f.val(),function(d){c.push("?"===d?u:""===d?null:h(w?w:I,d,a[d]))});else{var d=f.val();c="?"===d?u:""===d?null:h(w?w:I,d,a[d])}g.$setViewValue(c);q()})});g.$render=q;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&B(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,
        d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);n&&e.$watchCollection(function(){return g.$modelValue},l)}if(h[1]){var p=h[0];h=h[1];var n=k.multiple,s=k.ngOptions,y=!1,v,x=!1,t=D(X.createElement("option")),E=D(X.createElement("optgroup")),C=t.clone();k=0;for(var A=g.children(),F=A.length;k<F;k++)if(""===A[k].value){v=y=A.eq(k);break}p.init(h,y,C);n&&(h.$isEmpty=function(a){return!a||0===a.length});s?q(e,g,h):n?m(e,g,h):l(e,g,h,p)}}}}],Td=["$interpolate",function(a){var c=
    {addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(w(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Sd=da({restrict:"E",terminal:!1});S.angular.bootstrap?
        console.log("WARNING: Tried to load angular more than once."):(Id(),Kd(ta),D(X).ready(function(){Ed(X,rc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
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
        templateUrl: '/partials/utils/amc_header.html',
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
        templateUrl: '/partials/embed/employee.html',
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

            if( $scope.employee.CurrentObjectives === undefined || $scope.employee.CurrentObjectives.length === 0 )
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
            for ( i = 0 ; i < $scope.selectedEmployee.CurrentObjectives.length ; i++ )
            {
                $scope.progressColors[i] = getColorForPercentage($scope.selectedEmployee.CurrentObjectives[i].ProgressionPercent/100);
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
                RoutesService.loadLinkView($scope.selectedEmployee, {Date:"new"});
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
            if( $scope.selectedEmployeeBackUp.CurrentObjectives.length !== $scope.selectedEmployee.CurrentObjectives.length ||
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
            $scope.selectedEmployee.CurrentObjectives.splice($index, 1);
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
                    $scope.selectedLink.Date = $scope.selectedDate.getTime();
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
                            if( currentLink.Date === parseInt($routeParams.timestamp) )
                            {
                                $scope.selectedLink = currentLink;
                                $scope.selectedLinkBackUp = angular.copy($scope.selectedLink);
                                $scope.selectedDate = new Date($scope.selectedLink.Date);
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
                        $scope.selectedLink.Date !== $scope.selectedLinkBackUp.Date ||
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
                        $scope.selectedObjective = $scope.selectedEmployee.CurrentObjectives[$routeParams.index];
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
                        $scope.selectedEmployee.CurrentObjectives.push($scope.selectedObjective);
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



    }]);



/**
 * Created by Sébastien on 18/05/2014.
 */
amCompanion.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';
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


amCompanion.factory("AmcContextService", [ "$http", "$rootScope","$q","urls","$cookies","$location","SweetAlert",
    function ($http, $rootScope, $q, urls, $cookies, $location, SweetAlert )
    {
        'use strict';

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
            data.updateStatus = 0;
        };
        //Init the context at the first injection
        this.initData();

        this.updateCurrentEmployee = function()
        {
            var defer = $q.defer();

            //data.updateStatus = 1;
            //$rootScope.$emit("serverUpdateStarted");

            $http.defaults.headers.common.Authorization = 'Bearer ' + sessionStorage.token;
            $http.put(
                urls.employes + "/" +data.selectedEmployee._id,
                data.selectedEmployee
            ).success(
                function (employee) {
                    //Update the user version
                    data.selectedEmployee.__v = employee.__v;
                    defer.resolve();
                }).error(function()
                {
                    //RoutesService.disconnect();
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
                    $http.get("/data/data.json").success(
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
                                SweetAlert.swal({
                                        title: "Session expirée",
                                        text: "Votre session a expirée, veuillez vous reconnecter.",
                                        type: "error",
                                        confirmButtonText: "Ok",
                                        closeOnConfirm: true},
                                    function(){
                                        sessionStorage.removeItem("token");
                                        $location.path("/login");
                                        $rootScope.$apply();
                                    });
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
            var currentEmployee, currentMax = -1;

            for( var i = 0 ; i < employees.length ; i ++ )
            {
                currentMax = -1;
                currentEmployee = employees[i];
                for( var j = 0 ; j < currentEmployee.Links.length ; j ++ )
                {

                    currentEmployee.Links[j].Date = Date.parse(currentEmployee.Links[j].Date);

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
            return $cookies.env === "dev";
        };

        //Accessor of employees
        this.getEmployees = function()
        {
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
                if ( data.employees[i]._id === id )
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
 AngularJS v1.3.0
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
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(p,e,B){'use strict';function u(q,h,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,b,c,g,x){function y(){k&&(f.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=f.leave(m),k.then(function(){k=null}),m=null)}function w(){var c=q.current&&q.current.locals;if(e.isDefined(c&&c.$template)){var c=a.$new(),g=q.current;m=x(c,function(c){f.enter(c,null,m||b).then(function(){!e.isDefined(s)||s&&!a.$eval(s)||h()});y()});l=g.scope=c;l.$emit("$viewContentLoaded");
    l.$eval(v)}else y()}var l,m,k,s=c.autoscroll,v=c.onload||"";a.$on("$routeChangeSuccess",w);w()}}}function z(e,h,f){return{restrict:"ECA",priority:-400,link:function(a,b){var c=f.current,g=c.locals;b.html(g.$template);var x=e(b.contents());c.controller&&(g.$scope=a,g=h(c.controller,g),c.controllerAs&&(a[c.controllerAs]=g),b.data("$ngControllerController",g),b.children().data("$ngControllerController",g));x(a)}}}p=e.module("ngRoute",["ng"]).provider("$route",function(){function q(a,b){return e.extend(new (e.extend(function(){},
    {prototype:a})),b)}function h(a,e){var c=e.caseInsensitiveMatch,g={originalPath:a,regexp:a},f=g.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,c,b){a="?"===b?b:null;b="*"===b?b:null;f.push({name:c,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");g.regexp=new RegExp("^"+a+"$",c?"i":"");return g}var f={};this.when=function(a,b){f[a]=e.extend({reloadOnSearch:!0},b,a&&h(a,b));if(a){var c=
        "/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";f[c]=e.extend({redirectTo:a},h(c,b))}return this};this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,b,c,g,h,p,w){function l(b){var d=r.current;(u=(n=k())&&d&&n.$$route===d.$$route&&e.equals(n.pathParams,d.pathParams)&&!n.reloadOnSearch&&!v)||!d&&!n||a.$broadcast("$routeChangeStart",n,d).defaultPrevented&&
    b&&b.preventDefault()}function m(){var t=r.current,d=n;if(u)t.params=d.params,e.copy(t.params,c),a.$broadcast("$routeUpdate",t);else if(d||t)v=!1,(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?b.path(s(d.redirectTo,d.params)).search(d.params).replace():b.url(d.redirectTo(d.pathParams,b.path(),b.search())).replace()),g.when(d).then(function(){if(d){var a=e.extend({},d.resolve),b,c;e.forEach(a,function(d,b){a[b]=e.isString(d)?h.get(d):h.invoke(d,null,null,b)});e.isDefined(b=d.template)?e.isFunction(b)&&
    (b=b(d.params)):e.isDefined(c=d.templateUrl)&&(e.isFunction(c)&&(c=c(d.params)),c=w.getTrustedResourceUrl(c),e.isDefined(c)&&(d.loadedTemplateUrl=c,b=p(c)));e.isDefined(b)&&(a.$template=b);return g.all(a)}}).then(function(b){d==r.current&&(d&&(d.locals=b,e.copy(d.params,c)),a.$broadcast("$routeChangeSuccess",d,t))},function(b){d==r.current&&a.$broadcast("$routeChangeError",d,t,b)})}function k(){var a,d;e.forEach(f,function(c,g){var f;if(f=!d){var h=b.path();f=c.keys;var l={};if(c.regexp)if(h=c.regexp.exec(h)){for(var k=
    1,m=h.length;k<m;++k){var n=f[k-1],p=h[k];n&&p&&(l[n.name]=p)}f=l}else f=null;else f=null;f=a=f}f&&(d=q(c,{params:e.extend({},b.search(),a),pathParams:a}),d.$$route=c)});return d||f[null]&&q(f[null],{params:{},pathParams:{}})}function s(a,b){var c=[];e.forEach((a||"").split(":"),function(a,e){if(0===e)c.push(a);else{var f=a.match(/(\w+)(.*)/),g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var v=!1,n,u,r={routes:f,reload:function(){v=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&
    this.current.$$route){var c={},f=this;e.forEach(Object.keys(a),function(b){f.current.pathParams[b]||(c[b]=a[b])});a=e.extend({},this.current.params,a);b.path(s(this.current.$$route.originalPath,a));b.search(e.extend({},b.search(),c))}else throw A("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return r}]});var A=e.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",u);p.directive("ngView",z);u.$inject=["$route",
    "$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.3.0
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

!function(e,t){function n(){var e='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',n=t.createElement("div");n.innerHTML=e,t.body.appendChild(n)}function o(t){var n=m(),o=n.querySelector("h2"),r=n.querySelector("p"),a=n.querySelector("button.cancel"),c=n.querySelector("button.confirm");if(o.innerHTML=b(t.title).split("\n").join("<br>"),r.innerHTML=b(t.text||"").split("\n").join("<br>"),t.text&&w(r),x(n.querySelectorAll(".icon")),t.type){for(var l=!1,s=0;s<d.length;s++)if(t.type===d[s]){l=!0;break}if(!l)return e.console.error("Unknown alert type: "+t.type),!1;var u=n.querySelector(".icon."+t.type);switch(w(u),t.type){case"success":g(u,"animate"),g(u.querySelector(".tip"),"animateSuccessTip"),g(u.querySelector(".long"),"animateSuccessLong");break;case"error":g(u,"animateErrorIcon"),g(u.querySelector(".x-mark"),"animateXMark");break;case"warning":g(u,"pulseWarning"),g(u.querySelector(".body"),"pulseWarningIns"),g(u.querySelector(".dot"),"pulseWarningIns")}}if(t.imageUrl){var f=n.querySelector(".icon.custom");f.style.backgroundImage="url("+t.imageUrl+")",w(f);var y=80,p=80;if(t.imageSize){var v=t.imageSize.split("x")[0],h=t.imageSize.split("x")[1];v&&h?(y=v,p=h,f.css({width:v+"px",height:h+"px"})):e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+t.imageSize)}f.setAttribute("style",f.getAttribute("style")+"width:"+y+"px; height:"+p+"px")}n.setAttribute("data-has-cancel-button",t.showCancelButton),t.showCancelButton?a.style.display="inline-block":x(a),t.cancelButtonText&&(a.innerHTML=b(t.cancelButtonText)),t.confirmButtonText&&(c.innerHTML=b(t.confirmButtonText)),c.style.backgroundColor=t.confirmButtonColor,i(c,t.confirmButtonColor),n.setAttribute("data-allow-ouside-click",t.allowOutsideClick);var S=t.doneFunction?!0:!1;n.setAttribute("data-has-done-function",S)}function r(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n="#",o,r;for(r=0;3>r;r++)o=parseInt(e.substr(2*r,2),16),o=Math.round(Math.min(Math.max(0,o+o*t),255)).toString(16),n+=("00"+o).substr(o.length);return n}function a(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null}function i(e,t){var n=a(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"}function c(){var e=m();B(y(),10),w(e),g(e,"showSweetAlert"),v(e,"hideSweetAlert"),I=t.activeElement;var n=e.querySelector("button.confirm");n.focus(),setTimeout(function(){g(e,"visible")},500)}function l(){var n=m();T(y(),5),T(n,5),v(n,"showSweetAlert"),g(n,"hideSweetAlert"),v(n,"visible");var o=n.querySelector(".icon.success");v(o,"animate"),v(o.querySelector(".tip"),"animateSuccessTip"),v(o.querySelector(".long"),"animateSuccessLong");var r=n.querySelector(".icon.error");v(r,"animateErrorIcon"),v(r.querySelector(".x-mark"),"animateXMark");var a=n.querySelector(".icon.warning");v(a,"pulseWarning"),v(a.querySelector(".body"),"pulseWarningIns"),v(a.querySelector(".dot"),"pulseWarningIns"),e.onkeydown=A,t.onclick=O,I&&I.focus(),M=void 0}function s(){var e=m();e.style.marginTop=C(m())}var u=".sweet-alert",f=".sweet-overlay",d=["error","warning","info","success"],m=function(){return t.querySelector(u)},y=function(){return t.querySelector(f)},p=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},g=function(e,t){p(e,t)||(e.className+=" "+t)},v=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(p(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},b=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},h=function(e){e.style.opacity="",e.style.display="block"},w=function(e){if(e&&!e.length)return h(e);for(var t=0;t<e.length;++t)h(e[t])},S=function(e){e.style.opacity="",e.style.display="none"},x=function(e){if(e&&!e.length)return S(e);for(var t=0;t<e.length;++t)S(e[t])},k=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},C=function(e){e.style.left="-9999px",e.style.display="block";var t=e.clientHeight,n=parseInt(getComputedStyle(e).getPropertyValue("padding"),10);return e.style.left="",e.style.display="none","-"+parseInt(t/2+n)+"px"},B=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)};o()}},T=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"};o()},E=function(n){if(MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var r=t.createEvent("MouseEvents");r.initEvent("click",!1,!1),n.dispatchEvent(r)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},q=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)},I,O,A,M;e.sweetAlert=e.swal=function(){function n(e){var t=e.keyCode||e.which;if(-1!==[9,13,32,27].indexOf(t)){for(var n=e.target||e.srcElement,o=-1,r=0;r<h.length;r++)if(n===h[r]){o=r;break}9===t?(n=-1===o?v:o===h.length-1?h[0]:h[o+1],q(e),n.focus(),i(n,u.confirmButtonColor)):(n=13===t||32===t?-1===o?v:void 0:27!==t||b.hidden||"none"===b.style.display?void 0:b,void 0!==n&&E(n,e))}}function a(e){var t=e.target||e.srcElement,n=e.relatedTarget,o=p(f,"visible");if(o){var r=-1;if(null!==n){for(var a=0;a<h.length;a++)if(n===h[a]){r=a;break}-1===r&&t.focus()}else M=t}}var u={title:"",text:"",type:null,allowOutsideClick:!1,showCancelButton:!1,closeOnConfirm:!0,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null};if(void 0===arguments[0])return e.console.error("sweetAlert expects at least 1 attribute!"),!1;switch(typeof arguments[0]){case"string":u.title=arguments[0],u.text=arguments[1]||"",u.type=arguments[2]||"";break;case"object":if(void 0===arguments[0].title)return e.console.error('Missing "title" argument!'),!1;u.title=arguments[0].title,u.text=arguments[0].text||u.text,u.type=arguments[0].type||u.type,u.allowOutsideClick=arguments[0].allowOutsideClick||u.allowOutsideClick,u.showCancelButton=void 0!==arguments[0].showCancelButton?arguments[0].showCancelButton:u.showCancelButton,u.closeOnConfirm=void 0!==arguments[0].closeOnConfirm?arguments[0].closeOnConfirm:u.closeOnConfirm,u.confirmButtonText=u.showCancelButton?"Confirm":u.confirmButtonText,u.confirmButtonText=arguments[0].confirmButtonText||u.confirmButtonText,u.confirmButtonColor=arguments[0].confirmButtonColor||u.confirmButtonColor,u.cancelButtonText=arguments[0].cancelButtonText||u.cancelButtonText,u.imageUrl=arguments[0].imageUrl||u.imageUrl,u.imageSize=arguments[0].imageSize||u.imageSize,u.doneFunction=arguments[1]||null;break;default:return e.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}o(u),s(),c();for(var f=m(),d=function(e){var t=e.target||e.srcElement,n="confirm"===t.className,o=p(f,"visible"),a=u.doneFunction&&"true"===f.getAttribute("data-has-done-function");switch(e.type){case"mouseover":n&&(e.target.style.backgroundColor=r(u.confirmButtonColor,-.04));break;case"mouseout":n&&(e.target.style.backgroundColor=u.confirmButtonColor);break;case"mousedown":n&&(e.target.style.backgroundColor=r(u.confirmButtonColor,-.14));break;case"mouseup":n&&(e.target.style.backgroundColor=r(u.confirmButtonColor,-.04));break;case"focus":var i=f.querySelector("button.confirm"),c=f.querySelector("button.cancel");n?c.style.boxShadow="none":i.style.boxShadow="none";break;case"click":n&&a&&o?(u.doneFunction(),u.closeOnConfirm&&l()):l()}},y=f.querySelectorAll("button"),g=0;g<y.length;g++)y[g].onclick=d,y[g].onmouseover=d,y[g].onmouseout=d,y[g].onmousedown=d,y[g].onfocus=d;O=t.onclick,t.onclick=function(e){var t=e.target||e.srcElement,n=f===t,o=k(f,e.target),r=p(f,"visible"),a="true"===f.getAttribute("data-allow-ouside-click");!n&&!o&&r&&a&&l()};var v=f.querySelector("button.confirm"),b=f.querySelector("button.cancel"),h=f.querySelectorAll("button:not([type=hidden])");A=e.onkeydown,e.onkeydown=n,v.onblur=a,b.onblur=a,e.onfocus=function(){e.setTimeout(function(){void 0!==M&&(M.focus(),M=void 0)},0)}},function(){"complete"===t.readyState||"interactive"===t.readyState?n():t.addEventListener?t.addEventListener("DOMContentLoaded",function e(){t.removeEventListener("DOMContentLoaded",arguments.callee,!1),n()},!1):t.attachEvent&&t.attachEvent("onreadystatechange",function(){"complete"===t.readyState&&(t.detachEvent("onreadystatechange",arguments.callee),n())})}()}(window,document);

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
