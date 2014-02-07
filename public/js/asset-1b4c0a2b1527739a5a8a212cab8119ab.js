d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function u(){}function i(){}function o(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function a(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=la.length;r>e;++e){var u=la[e]+t;if(u in n)return u}}function c(){}function s(){}function l(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new u;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function f(){$o.event.preventDefault()}function h(){for(var n,t=$o.event;n=t.sourceEvent;)t=n;return t}function g(n){for(var t=new s,e=0,r=arguments.length;++e<r;)t[arguments[e]]=l(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=$o.event;u.target=n,$o.event=u,t[u.type].apply(e,r)}finally{$o.event=i}}},t}function p(n){return ha(n,ma),n}function v(n){return"function"==typeof n?n:function(){return ga(n,this)}}function d(n){return"function"==typeof n?n:function(){return pa(n,this)}}function m(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=$o.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function y(n){return n.trim().replace(/\s+/g," ")}function x(n){return new RegExp("(?:^|\\s+)"+$o.requote(n)+"(?:\\s+|$)","g")}function M(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=n.trim().split(/\s+/).map(_);var u=n.length;return"function"==typeof t?r:e}function _(n){var t=x(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",y(u+" "+n))):e.setAttribute("class",y(u.replace(t," ")))}}function b(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function w(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function S(n){return"function"==typeof n?n:(n=$o.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function k(n){return{__data__:n}}function E(n){return function(){return da(this,n)}}function A(n){return arguments.length||(n=$o.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function C(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function N(n){return ha(n,xa),n}function L(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function T(){var n=this.__transition__;n&&++n.active}function q(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=s(t,Wo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+$o.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),s=z;a>0&&(n=n.substring(0,a));var l=_a.get(n);return l&&(n=l,s=R),a?t?u:r:t?c:i}function z(n,t){return function(e){var r=$o.event;$o.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{$o.event=r}}}function R(n,t){var e=z(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function D(){var n=".dragsuppress-"+ ++wa,t="click"+n,e=$o.select(Ko).on("touchmove"+n,f).on("dragstart"+n,f).on("selectstart"+n,f);if(ba){var r=Go.style,u=r[ba];r[ba]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),ba&&(r[ba]=u),i&&(e.on(t,function(){f(),o()},!0),setTimeout(o,0))}}function P(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>Sa&&(Ko.scrollX||Ko.scrollY)){e=$o.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();Sa=!(u.f||u.e),e.remove()}return Sa?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function U(n){return n>0?1:0>n?-1:0}function j(n){return n>1?0:-1>n?ka:Math.acos(n)}function H(n){return n>1?Aa:-1>n?-Aa:Math.asin(n)}function F(n){return((n=Math.exp(n))-1/n)/2}function O(n){return((n=Math.exp(n))+1/n)/2}function Y(n){return((n=Math.exp(2*n))-1)/(n+1)}function I(n){return(n=Math.sin(n/2))*n}function Z(){}function V(n,t,e){return new X(n,t,e)}function X(n,t,e){this.h=n,this.s=t,this.l=e}function $(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,ot(u(n+120),u(n),u(n-120))}function B(n,t,e){return new W(n,t,e)}function W(n,t,e){this.h=n,this.c=t,this.l=e}function J(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),G(e,Math.cos(n*=La)*t,Math.sin(n)*t)}function G(n,t,e){return new K(n,t,e)}function K(n,t,e){this.l=n,this.a=t,this.b=e}function Q(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=tt(u)*Oa,r=tt(r)*Ya,i=tt(i)*Ia,ot(rt(3.2404542*u-1.5371385*r-.4985314*i),rt(-.969266*u+1.8760108*r+.041556*i),rt(.0556434*u-.2040259*r+1.0572252*i))}function nt(n,t,e){return n>0?B(Math.atan2(e,t)*Ta,Math.sqrt(t*t+e*e),n):B(0/0,0/0,n)}function tt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function et(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function rt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function ut(n){return ot(n>>16,255&n>>8,255&n)}function it(n){return ut(n)+""}function ot(n,t,e){return new at(n,t,e)}function at(n,t,e){this.r=n,this.g=t,this.b=e}function ct(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function st(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(gt(u[0]),gt(u[1]),gt(u[2]))}return(i=Xa.get(n))?t(i.r,i.g,i.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(o=n.charAt(1),o+=o,a=n.charAt(2),a+=a,c=n.charAt(3),c+=c):7===n.length&&(o=n.substring(1,3),a=n.substring(3,5),c=n.substring(5,7)),o=parseInt(o,16),a=parseInt(a,16),c=parseInt(c,16)),t(o,a,c))}function lt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),V(r,u,c)}function ft(n,t,e){n=ht(n),t=ht(t),e=ht(e);var r=et((.4124564*n+.3575761*t+.1804375*e)/Oa),u=et((.2126729*n+.7151522*t+.072175*e)/Ya),i=et((.0193339*n+.119192*t+.9503041*e)/Ia);return G(116*u-16,500*(r-u),200*(u-i))}function ht(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function gt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function pt(n){return"function"==typeof n?n:function(){return n}}function vt(n){return n}function dt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),mt(t,e,n,r)}}function mt(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=$o.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Ko.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=$o.event;$o.event=n;try{o.progress.call(i,c)}finally{$o.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Wo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},$o.rebind(i,o,"on"),null==r?i:i.get(yt(r))}function yt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function xt(){var n=Mt(),t=_t()-n;t>24?(isFinite(t)&&(clearTimeout(Ja),Ja=setTimeout(xt,t)),Wa=0):(Wa=1,Ka(xt))}function Mt(){var n=Date.now();for(Ga=$a;Ga;)n>=Ga.t&&(Ga.f=Ga.c(n-Ga.t)),Ga=Ga.n;return n}function _t(){for(var n,t=$a,e=1/0;t;)t.f?t=n?n.n=t.n:$a=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Ba=n,e}function bt(n,t){var e=Math.pow(10,3*aa(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function wt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function St(n){return n+""}function kt(){}function Et(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function At(n,t){n&&lc.hasOwnProperty(n.type)&&lc[n.type](n,t)}function Ct(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function Nt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)Ct(n[e],t,1);t.polygonEnd()}function Lt(){function n(n,t){n*=La,t=t*La/2+ka/4;var e=n-r,o=Math.cos(t),a=Math.sin(t),c=i*a,s=u*o+c*Math.cos(e),l=c*Math.sin(e);hc.add(Math.atan2(l,s)),r=n,u=o,i=a}var t,e,r,u,i;gc.point=function(o,a){gc.point=n,r=(t=o)*La,u=Math.cos(a=(e=a)*La/2+ka/4),i=Math.sin(a)},gc.lineEnd=function(){n(t,e)}}function Tt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function qt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function zt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Rt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Dt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Pt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Ut(n){return[Math.atan2(n[1],n[0]),H(n[2])]}function jt(n,t){return aa(n[0]-t[0])<Ca&&aa(n[1]-t[1])<Ca}function Ht(n,t){n*=La;var e=Math.cos(t*=La);Ft(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Ft(n,t,e){++pc,dc+=(n-dc)/pc,mc+=(t-mc)/pc,yc+=(e-yc)/pc}function Ot(){function n(n,u){n*=La;var i=Math.cos(u*=La),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);vc+=s,xc+=s*(t+(t=o)),Mc+=s*(e+(e=a)),_c+=s*(r+(r=c)),Ft(t,e,r)}var t,e,r;kc.point=function(u,i){u*=La;var o=Math.cos(i*=La);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),kc.point=n,Ft(t,e,r)}}function Yt(){kc.point=Ht}function It(){function n(n,t){n*=La;var e=Math.cos(t*=La),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-j(g)/h,v=Math.atan2(h,g);bc+=p*s,wc+=p*l,Sc+=p*f,vc+=v,xc+=v*(r+(r=o)),Mc+=v*(u+(u=a)),_c+=v*(i+(i=c)),Ft(r,u,i)}var t,e,r,u,i;kc.point=function(o,a){t=o,e=a,kc.point=n,o*=La;var c=Math.cos(a*=La);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),Ft(r,u,i)},kc.lineEnd=function(){n(t,e),kc.lineEnd=Yt,kc.point=Ht}}function Zt(){return!0}function Vt(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(jt(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new $t(e,n,null,!0),s=new $t(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new $t(r,n,null,!1),s=new $t(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Xt(i),Xt(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Xt(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function $t(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Bt(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r){if(1&t){n=e[0];var u,r=n.length-1,o=-1;for(i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);return i.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Wt))}}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[],i.polygonStart()},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=$o.merge(g);var n=Kt(m,p);g.length?Vt(g,Gt,n,e,i):n&&(i.lineStart(),e(null,null,1,i),i.lineEnd()),i.polygonEnd(),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=Jt(),M=t(x);return y}}function Wt(n){return n.length>1}function Jt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:c,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Gt(n,t){return((n=n.x)[0]<0?n[1]-Aa-Ca:Aa-n[1])-((t=t.x)[0]<0?t[1]-Aa-Ca:Aa-t[1])}function Kt(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;hc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+ka/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+ka/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=aa(_)>ka,w=p*x;if(hc.add(Math.atan2(w*Math.sin(_),v*M+w*Math.cos(_))),i+=b?_+(_>=0?Ea:-Ea):_,b^h>=e^m>=e){var S=zt(Tt(f),Tt(n));Pt(S);var k=zt(u,S);Pt(k);var E=(b^_>=0?-1:1)*H(k[2]);(r>E||r===E&&(S[0]||S[1]))&&(o+=b^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Ca>i||Ca>i&&0>hc)^1&o}function Qt(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?ka:-ka,c=aa(i-e);aa(c-ka)<Ca?(n.point(e,r=(r+o)/2>0?Aa:-Aa),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=ka&&(aa(e-u)<Ca&&(e-=u*Ca),aa(i-a)<Ca&&(i-=a*Ca),r=ne(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function ne(n,t,e,r){var u,i,o=Math.sin(n-e);return aa(o)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function te(n,t,e,r){var u;if(null==n)u=e*Aa,r.point(-ka,u),r.point(0,u),r.point(ka,u),r.point(ka,0),r.point(ka,-u),r.point(0,-u),r.point(-ka,-u),r.point(-ka,0),r.point(-ka,u);else if(aa(n[0]-t[0])>Ca){var i=n[0]<t[0]?ka:-ka;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function ee(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?ka:-ka),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(jt(e,g)||jt(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&jt(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=Tt(n),u=Tt(t),o=[1,0,0],a=zt(r,u),c=qt(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=zt(o,a),p=Dt(o,f),v=Dt(a,h);Rt(p,v);var d=g,m=qt(p,d),y=qt(d,d),x=m*m-y*(qt(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=Dt(d,(-m-M)/y);if(Rt(_,p),_=Ut(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=aa(A-ka)<Ca,N=C||Ca>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(aa(_[0]-w)<Ca?k:E):k<=_[1]&&_[1]<=E:A>ka^(w<=_[0]&&_[0]<=S)){var L=Dt(d,(-m+M)/y);return Rt(L,p),[_,Ut(L)]}}}function u(t,e){var r=o?n:ka-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=aa(i)>Ca,c=Le(n,6*La);return Bt(t,e,c,o?[0,-n]:[-ka,n-ka])}function re(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function ue(n,t,e,r){function u(r,u){return aa(r[0]-n)<Ca?u>0?0:3:aa(r[0]-e)<Ca?u>0?2:1:aa(r[1]-t)<Ca?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=m.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=m[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&s(l,i,n)>0&&++t:i[1]<=r&&s(l,i,n)<0&&--t,l=i;return 0!==t}function s(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function l(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function f(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function h(n,t){f(n,t)&&a.point(n,t)}function g(){L.point=v,m&&m.push(y=[]),k=!0,S=!1,b=w=0/0}function p(){d&&(v(x,M),_&&S&&C.rejoin(),d.push(C.buffer())),L.point=h,S&&a.lineEnd()}function v(n,t){n=Math.max(-Ac,Math.min(Ac,n)),t=Math.max(-Ac,Math.min(Ac,t));var e=f(n,t);if(m&&y.push([n,t]),k)x=n,M=t,_=e,k=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&S)a.point(n,t);else{var r={a:{x:b,y:w},b:{x:n,y:t}};N(r)?(S||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),E=!1):e&&(a.lineStart(),a.point(n,t),E=!1)}b=n,w=t,S=e}var d,m,y,x,M,_,b,w,S,k,E,A=a,C=Jt(),N=re(n,t,e,r),L={point:h,lineStart:g,lineEnd:p,polygonStart:function(){a=C,d=[],m=[],E=!0},polygonEnd:function(){a=A,d=$o.merge(d);var t=c([n,r]),e=E&&t,u=d.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Vt(d,i,t,l,a),a.polygonEnd()),d=m=y=null}};return L}}function ie(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function oe(n){var t=0,e=ka/3,r=be(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*ka/180,e=n[1]*ka/180):[180*(t/ka),180*(e/ka)]},u}function ae(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,H((i-(n*n+e*e)*u*u)/(2*u))]},e}function ce(){function n(n,t){Nc+=u*n-r*t,r=n,u=t}var t,e,r,u;Rc.point=function(i,o){Rc.point=n,t=r=i,e=u=o},Rc.lineEnd=function(){n(t,e)}}function se(n,t){Lc>n&&(Lc=n),n>qc&&(qc=n),Tc>t&&(Tc=t),t>zc&&(zc=t)}function le(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=fe(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=fe(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function fe(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function he(n,t){dc+=n,mc+=t,++yc}function ge(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);xc+=o*(t+n)/2,Mc+=o*(e+r)/2,_c+=o,he(t=n,e=r)}var t,e;Pc.point=function(r,u){Pc.point=n,he(t=r,e=u)}}function pe(){Pc.point=he}function ve(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);xc+=o*(r+n)/2,Mc+=o*(u+t)/2,_c+=o,o=u*n-r*t,bc+=o*(r+n),wc+=o*(u+t),Sc+=3*o,he(r=n,u=t)}var t,e,r,u;Pc.point=function(i,o){Pc.point=n,he(t=r=i,e=u=o)},Pc.lineEnd=function(){n(t,e)}}function de(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,Ea)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:c};return a}function me(n){function t(n){return(a?r:e)(n)}function e(t){return Me(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=Tt([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=aa(aa(w)-1)<Ca?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],L=C-t,T=N-e,q=x*L-y*T;(q*q/M>i||aa((y*L+x*T)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*La),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function ye(n){var t=me(function(t,e){return n([t*Ta,e*Ta])});return function(n){return we(t(n))}}function xe(n){this.stream=n}function Me(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function _e(n){return be(function(){return n})()}function be(n){function t(n){return n=a(n[0]*La,n[1]*La),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*Ta,n[1]*Ta]}function r(){a=ie(o=Ee(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=me(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Ec,_=vt,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=we(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Ec):ee((b=+n)*La),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?ue(n[0][0],n[0][1],n[1][0],n[1][1]):vt,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*La,d=n[1]%360*La,r()):[v*Ta,d*Ta]},t.rotate=function(n){return arguments.length?(m=n[0]%360*La,y=n[1]%360*La,x=n.length>2?n[2]%360*La:0,r()):[m*Ta,y*Ta,x*Ta]},$o.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function we(n){return Me(n,function(t,e){n.point(t*La,e*La)})}function Se(n,t){return[n,t]}function ke(n,t){return[n>ka?n-Ea:-ka>n?n+Ea:n,t]}function Ee(n,t,e){return n?t||e?ie(Ce(n),Ne(t,e)):Ce(n):t||e?Ne(t,e):ke}function Ae(n){return function(t,e){return t+=n,[t>ka?t-Ea:-ka>t?t+Ea:t,e]}}function Ce(n){var t=Ae(n);return t.invert=Ae(-n),t}function Ne(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),H(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),H(l*r-a*u)]},e}function Le(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=Te(e,u),i=Te(e,i),(o>0?i>u:u>i)&&(u+=o*Ea)):(u=n+o*Ea,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=Ut([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function Te(n,t){var e=Tt(t);e[0]-=n,Pt(e);var r=j(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ca)%(2*Math.PI)}function qe(n,t,e){var r=$o.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function ze(n,t,e){var r=$o.range(n,t-Ca,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Re(n){return n.source}function De(n){return n.target}function Pe(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(I(r-t)+u*o*I(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ta,Math.atan2(o,Math.sqrt(r*r+u*u))*Ta]}:function(){return[n*Ta,t*Ta]};return p.distance=h,p}function Ue(){function n(n,u){var i=Math.sin(u*=La),o=Math.cos(u),a=aa((n*=La)-t),c=Math.cos(a);Uc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;jc.point=function(u,i){t=u*La,e=Math.sin(i*=La),r=Math.cos(i),jc.point=n},jc.lineEnd=function(){jc.point=jc.lineEnd=c}}function je(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function He(n,t){function e(n,t){var e=aa(aa(t)-Aa)<Ca?0:o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(ka/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=U(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Aa]},e):Oe}function Fe(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return aa(u)<Ca?Se:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-U(u)*Math.sqrt(n*n+e*e)]},e)}function Oe(n,t){return[n,Math.log(Math.tan(ka/4+t/2))]}function Ye(n){var t,e=_e(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=ka*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ie(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function Ze(n){return n[0]}function Ve(n){return n[1]}function Xe(n,t,e,r){var u,i,o,a,c,s,l;return u=r[n],i=u[0],o=u[1],u=r[t],a=u[0],c=u[1],u=r[e],s=u[0],l=u[1],(l-o)*(a-i)-(c-o)*(s-i)>0}function $e(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Be(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function We(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Je(){mr(this),this.edge=this.site=this.circle=null}function Ge(n){var t=Jc.pop()||new Je;return t.site=n,t}function Ke(n){cr(n),$c.remove(n),Jc.push(n),mr(n)}function Qe(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Ke(n);for(var c=i;c.circle&&aa(e-c.circle.x)<Ca&&aa(r-c.circle.cy)<Ca;)i=c.P,a.unshift(c),Ke(c),c=i;a.unshift(c),cr(c);for(var s=o;s.circle&&aa(e-s.circle.x)<Ca&&aa(r-s.circle.cy)<Ca;)o=s.N,a.push(s),Ke(s),s=o;a.push(s),cr(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],pr(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=hr(c.site,s.site,null,u),ar(c),ar(s)}function nr(n){for(var t,e,r,u,i=n.x,o=n.y,a=$c._;a;)if(r=tr(a,o)-i,r>Ca)a=a.L;else{if(u=i-er(a,o),!(u>Ca)){r>-Ca?(t=a.P,e=a):u>-Ca?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Ge(n);if($c.insert(t,c),t||e){if(t===e)return cr(t),e=Ge(t.site),$c.insert(c,e),c.edge=e.edge=hr(t.site,c.site),ar(t),ar(e),void 0;if(!e)return c.edge=hr(t.site,c.site),void 0;cr(t),cr(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};pr(e.edge,s,p,M),c.edge=hr(s,n,null,M),e.edge=hr(n,p,null,M),ar(t),ar(e)}}function tr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function er(n,t){var e=n.N;if(e)return tr(e,t);var r=n.site;return r.y===t?r.x:1/0}function rr(n){this.site=n,this.edges=[]}function ur(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Xc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(aa(r-t)>Ca||aa(u-e)>Ca)&&(a.splice(o,0,new vr(gr(i.site,l,aa(r-f)<Ca&&p-u>Ca?{x:f,y:aa(t-f)<Ca?e:p}:aa(u-p)<Ca&&h-r>Ca?{x:aa(e-p)<Ca?t:h,y:p}:aa(r-h)<Ca&&u-g>Ca?{x:h,y:aa(t-h)<Ca?e:g}:aa(u-g)<Ca&&r-f>Ca?{x:aa(e-g)<Ca?t:f,y:g}:null),i.site,null)),++c)}function ir(n,t){return t.angle-n.angle}function or(){mr(this),this.x=this.y=this.arc=this.site=this.cy=null}function ar(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Na)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Gc.pop()||new or;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Wc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Wc.insert(y,m),y||(Bc=m)}}}}function cr(n){var t=n.circle;t&&(t.P||(Bc=t.N),Wc.remove(t),Gc.push(t),mr(t),n.circle=null)}function sr(n){for(var t,e=Vc,r=re(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!lr(t,n)||!r(t)||aa(t.a.x-t.b.x)<Ca&&aa(t.a.y-t.b.y)<Ca)&&(t.a=t.b=null,e.splice(u,1))}function lr(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;
if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function fr(n,t){this.l=n,this.r=t,this.a=this.b=null}function hr(n,t,e,r){var u=new fr(n,t);return Vc.push(u),e&&pr(u,n,t,e),r&&pr(u,t,n,r),Xc[n.i].edges.push(new vr(u,n,t)),Xc[t.i].edges.push(new vr(u,t,n)),u}function gr(n,t,e){var r=new fr(n,null);return r.a=t,r.b=e,Vc.push(r),r}function pr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function vr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function dr(){this._=null}function mr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function yr(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function xr(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Mr(n){for(;n.L;)n=n.L;return n}function _r(n,t){var e,r,u,i=n.sort(br).pop();for(Vc=[],Xc=new Array(n.length),$c=new dr,Wc=new dr;;)if(u=Bc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Xc[i.i]=new rr(i),nr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Qe(u.arc)}t&&(sr(t),ur(t));var o={cells:Xc,edges:Vc};return $c=Wc=Vc=Xc=null,o}function br(n,t){return t.y-n.y||t.x-n.x}function wr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function Sr(n){return n.x}function kr(n){return n.y}function Er(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function Ar(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&Ar(n,c[0],e,r,o,a),c[1]&&Ar(n,c[1],o,r,u,a),c[2]&&Ar(n,c[2],e,a,o,i),c[3]&&Ar(n,c[3],o,a,u,i)}}function Cr(n,t){n=$o.rgb(n),t=$o.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+ct(Math.round(e+i*n))+ct(Math.round(r+o*n))+ct(Math.round(u+a*n))}}function Nr(n,t){var e,r={},u={};for(e in n)e in t?r[e]=qr(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function Lr(n,t){return t-=n=+n,function(e){return n+t*e}}function Tr(n,t){var e,r,u,i,o,a=0,c=0,s=[],l=[];for(n+="",t+="",Qc.lastIndex=0,r=0;e=Qc.exec(t);++r)e.index&&s.push(t.substring(a,c=e.index)),l.push({i:s.length,x:e[0]}),s.push(null),a=Qc.lastIndex;for(a<t.length&&s.push(t.substring(a)),r=0,i=l.length;(e=Qc.exec(n))&&i>r;++r)if(o=l[r],o.x==e[0]){if(o.i)if(null==s[o.i+1])for(s[o.i-1]+=o.x,s.splice(o.i,1),u=r+1;i>u;++u)l[u].i--;else for(s[o.i-1]+=o.x+s[o.i+1],s.splice(o.i,2),u=r+1;i>u;++u)l[u].i-=2;else if(null==s[o.i+1])s[o.i]=o.x;else for(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1),u=r+1;i>u;++u)l[u].i--;l.splice(r,1),i--,r--}else o.x=Lr(parseFloat(e[0]),parseFloat(o.x));for(;i>r;)o=l.pop(),null==s[o.i+1]?s[o.i]=o.x:(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1)),i--;return 1===s.length?null==s[0]?(o=l[0].x,function(n){return o(n)+""}):function(){return t}:function(n){for(r=0;i>r;++r)s[(o=l[r]).i]=o.x(n);return s.join("")}}function qr(n,t){for(var e,r=$o.interpolators.length;--r>=0&&!(e=$o.interpolators[r](n,t)););return e}function zr(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(qr(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function Rr(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function Dr(n){return function(t){return 1-n(1-t)}}function Pr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Ur(n){return n*n}function jr(n){return n*n*n}function Hr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Fr(n){return function(t){return Math.pow(t,n)}}function Or(n){return 1-Math.cos(n*Aa)}function Yr(n){return Math.pow(2,10*(n-1))}function Ir(n){return 1-Math.sqrt(1-n*n)}function Zr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ea*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ea/t)}}function Vr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Xr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function $r(n,t){n=$o.hcl(n),t=$o.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return J(e+i*n,r+o*n,u+a*n)+""}}function Br(n,t){n=$o.hsl(n),t=$o.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return $(e+i*n,r+o*n,u+a*n)+""}}function Wr(n,t){n=$o.lab(n),t=$o.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return Q(e+i*n,r+o*n,u+a*n)+""}}function Jr(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Gr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Qr(t),u=Kr(t,e),i=Qr(nu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ta,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ta:0}function Kr(n,t){return n[0]*t[0]+n[1]*t[1]}function Qr(n){var t=Math.sqrt(Kr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function nu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function tu(n,t){var e,r=[],u=[],i=$o.transform(n),o=$o.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:Lr(a[0],c[0])},{i:3,x:Lr(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:Lr(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:Lr(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:Lr(g[0],p[0])},{i:e-2,x:Lr(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function eu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function ru(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function uu(n){for(var t=n.source,e=n.target,r=ou(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function iu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function ou(n,t){if(n===t)return n;for(var e=iu(n),r=iu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function au(n){n.fixed|=2}function cu(n){n.fixed&=-7}function su(n){n.fixed|=4,n.px=n.x,n.py=n.y}function lu(n){n.fixed&=-5}function fu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(fu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function hu(n,t){return $o.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=du,n}function gu(n){return n.children}function pu(n){return n.value}function vu(n,t){return t.value-n.value}function du(n){return $o.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function mu(n){return n.x}function yu(n){return n.y}function xu(n,t,e){n.y0=t,n.y=e}function Mu(n){return $o.range(n.length)}function _u(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function bu(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function wu(n){return n.reduce(Su,0)}function Su(n,t){return n+t[1]}function ku(n,t){return Eu(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function Eu(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function Au(n){return[$o.min(n),$o.max(n)]}function Cu(n,t){return n.parent==t.parent?1:2}function Nu(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function Lu(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function Tu(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=Tu(e[i],t),n)>0&&(n=r);return n}function qu(n,t){return n.x-t.x}function zu(n,t){return t.x-n.x}function Ru(n,t){return n.depth-t.depth}function Du(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function Pu(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function Uu(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function ju(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function Hu(n,t){return n.value-t.value}function Fu(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Ou(n,t){n._pack_next=t,t._pack_prev=n}function Yu(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Iu(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Zu),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],$u(r,u,i),t(i),Fu(r,i),r._pack_prev=i,Fu(i,u),u=r._pack_next,o=3;s>o;o++){$u(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(Yu(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Yu(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Ou(r,u=a):Ou(r=c,u),o--):(Fu(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Vu)}}function Zu(n){n._pack_next=n._pack_prev=n}function Vu(n){delete n._pack_next,delete n._pack_prev}function Xu(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)Xu(u[i],t,e,r)}function $u(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function Bu(n){return 1+$o.max(n,function(n){return n.y})}function Wu(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ju(n){var t=n.children;return t&&t.length?Ju(t[0]):n}function Gu(n){var t,e=n.children;return e&&(t=e.length)?Gu(e[t-1]):n}function Ku(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Qu(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function ni(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function ti(n){return n.rangeExtent?n.rangeExtent():ni(n.range())}function ei(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function ri(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function ui(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ss}function ii(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=$o.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function oi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?ii:ei,c=r?ru:eu;return o=u(n,t,c,e),a=u(t,n,c,qr),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Jr)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return li(n,t)},i.tickFormat=function(t,e){return fi(n,t,e)},i.nice=function(t){return ci(n,t),u()},i.copy=function(){return oi(n,t,e,r)},u()}function ai(n,t){return $o.rebind(n,t,"range","rangeRound","interpolate","clamp")}function ci(n,t){return ri(n,ui(si(n,t)[2]))}function si(n,t){null==t&&(t=10);var e=ni(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function li(n,t){return $o.range.apply($o,si(n,t))}function fi(n,t,e){var r=si(n,t);return $o.format(e?e.replace(uc,function(n,t,e,u,i,o,a,c,s,l){return[t,e,u,i,o,a,c,s||"."+gi(l,r),l].join("")}):",."+hi(r[2])+"f")}function hi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function gi(n,t){var e=hi(t[2]);return n in ls?Math.abs(e-hi(Math.max(Math.abs(t[0]),Math.abs(t[1]))))+ +("e"!==n):e-2*("%"===n)}function pi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=ri(r.map(u),e?Math:hs);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=ni(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return fs;arguments.length<2?t=fs:"function"!=typeof t&&(t=$o.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return pi(n.copy(),t,e,r)},ai(o,n)}function vi(n,t,e){function r(t){return n(u(t))}var u=di(t),i=di(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return li(e,n)},r.tickFormat=function(n,t){return fi(e,n,t)},r.nice=function(n){return r.domain(ci(e,n))},r.exponent=function(o){return arguments.length?(u=di(t=o),i=di(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return vi(n.copy(),t,e)},ai(r,n)}function di(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function mi(n,t){function e(e){return o[((i.get(e)||"range"===t.t&&i.set(e,n.push(e)))-1)%o.length]}function r(t,e){return $o.range(n.length).map(function(n){return t+e*n})}var i,o,a;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new u;for(var o,a=-1,c=r.length;++a<c;)i.has(o=r[a])||i.set(o,n.push(o));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(o=n,a=0,t={t:"range",a:arguments},e):o},e.rangePoints=function(u,i){arguments.length<2&&(i=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+i);return o=r(n.length<2?(c+s)/2:c+l*i/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-i+2*c);return o=r(l+h*c,h),s&&o.reverse(),a=h*(1-i),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-i+2*c)),g=f-l-(n.length-i)*h;return o=r(l+Math.round(g/2),h),s&&o.reverse(),a=Math.round(h*(1-i)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return ni(t.a[0])},e.copy=function(){return mi(n,t)},e.domain(n)}function yi(n,t){function e(){var e=0,i=t.length;for(u=[];++e<i;)u[e-1]=$o.quantile(n,e/i);return r}function r(n){return isNaN(n=+n)?void 0:t[$o.bisect(u,n)]}var u;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort($o.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return u},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?u[e-1]:n[0],e<u.length?u[e]:n[n.length-1]]},r.copy=function(){return yi(n,t)},e()}function xi(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return xi(n,t,e)},u()}function Mi(n,t){function e(e){return e>=e?t[$o.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return Mi(n,t)},e}function _i(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return li(n,t)},t.tickFormat=function(t,e){return fi(n,t,e)},t.copy=function(){return _i(n)},t}function bi(n){return n.innerRadius}function wi(n){return n.outerRadius}function Si(n){return n.startAngle}function ki(n){return n.endAngle}function Ei(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=pt(e),p=pt(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=Ze,r=Ve,u=Zt,i=Ai,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=xs.get(n)||Ai).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function Ai(n){return n.join("L")}function Ci(n){return Ai(n)+"Z"}function Ni(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function Li(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Ti(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function qi(n,t){return n.length<4?Ai(n):n[1]+Di(n.slice(1,n.length-1),Pi(n,t))}function zi(n,t){return n.length<3?Ai(n):n[0]+Di((n.push(n[0]),n),Pi([n[n.length-2]].concat(n,[n[1]]),t))}function Ri(n,t){return n.length<3?Ai(n):n[0]+Di(n,Pi(n,t))}function Di(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Ai(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function Pi(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function Ui(n){if(n.length<3)return Ai(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",Oi(bs,o),",",Oi(bs,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Yi(c,o,a);return n.pop(),c.push("L",r),c.join("")}function ji(n){if(n.length<4)return Ai(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(Oi(bs,i)+","+Oi(bs,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Yi(e,i,o);return e.join("")}function Hi(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[Oi(bs,o),",",Oi(bs,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Yi(t,o,a);return t.join("")}function Fi(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return Ui(n)}function Oi(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Yi(n,t,e){n.push("C",Oi(Ms,t),",",Oi(Ms,e),",",Oi(_s,t),",",Oi(_s,e),",",Oi(bs,t),",",Oi(bs,e))}function Ii(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Zi(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=Ii(u,i);++t<e;)r[t]=(o+(o=Ii(u=i,i=n[t+1])))/2;return r[t]=o,r}function Vi(n){for(var t,e,r,u,i=[],o=Zi(n),a=-1,c=n.length-1;++a<c;)t=Ii(n[a],n[a+1]),aa(t)<Ca?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Xi(n){return n.length<3?Ai(n):n[0]+Di(n,Vi(n))}function $i(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ms,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Bi(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=pt(e),_=pt(u),b=e===r?function(){return g}:pt(r),w=u===i?function(){return p}:pt(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ze,r=Ze,u=0,i=Ve,o=Zt,a=Ai,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=xs.get(n)||Ai).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Wi(n){return n.radius}function Ji(n){return[n.x,n.y]}function Gi(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ms;return[e*Math.cos(r),e*Math.sin(r)]}}function Ki(){return 64}function Qi(){return"circle"}function no(n){var t=Math.sqrt(n/ka);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function to(n,t){return ha(n,Cs),n.id=t,n}function eo(n,t,e,r){var u=n.id;return C(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function ro(n){return null==n&&(n=""),function(){this.textContent=n}}function uo(n,t,e,r){var i=n.__transition__||(n.__transition__={active:0,count:0}),o=i[e];if(!o){var a=r.time;o=i[e]={tween:new u,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++i.count,$o.timer(function(r){function u(r){return i.active>e?s():(i.active=e,o.event&&o.event.start.call(n,l,t),o.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),$o.timer(function(){return p.c=c(r||1)?Zt:c,1},0,a),void 0)}function c(r){if(i.active!==e)return s();for(var u=r/g,a=f(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,l,t),s()):void 0}function s(){return--i.count?delete i[e]:delete n.__transition__,1}var l=n.__data__,f=o.ease,h=o.delay,g=o.duration,p=Ga,v=[];return p.t=h+a,r>=h?u(r-h):(p.c=u,void 0)},0,a)}}function io(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function oo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function ao(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function co(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new Ds(e-1)),1),e}function i(n,e){return t(n=new Ds(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{Ds=ao;var r=new ao;return r._=n,o(r,t,e)}finally{Ds=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=so(n);return c.floor=c,c.round=so(r),c.ceil=so(u),c.offset=so(i),c.range=a,n}function so(n){return function(t,e){try{Ds=ao;var r=new ao;return r._=t,n(r,e)._}finally{Ds=Date}}}function lo(n){function t(t){for(var r,u,i,o=[],a=-1,c=0;++a<e;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=nl[r=n.charAt(++a)])&&(r=n.charAt(++a)),(i=tl[r])&&(r=i(t,null==u?"e"===r?" ":"0":u)),o.push(r),c=a+1);return o.push(n.substring(c,a)),o.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},r=fo(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+12*e.p);var u=null!=e.Z&&Ds!==ao,i=new(u?ao:Ds);return"j"in e?i.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(i.setFullYear(e.y,0,1),i.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(i.getDay()+5)%7:e.w+7*e.U-(i.getDay()+6)%7)):i.setFullYear(e.y,e.m,e.d),i.setHours(e.H+Math.floor(e.Z/100),e.M+e.Z%100,e.S,e.L),u?i._:i},t.toString=function(){return n},t}function fo(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=el[o in nl?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function ho(n){return new RegExp("^(?:"+n.map($o.requote).join("|")+")","i")}function go(n){for(var t=new u,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function po(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function vo(n,t,e){$s.lastIndex=0;var r=$s.exec(t.substring(e));return r?(n.w=Bs.get(r[0].toLowerCase()),e+r[0].length):-1}function mo(n,t,e){Vs.lastIndex=0;var r=Vs.exec(t.substring(e));return r?(n.w=Xs.get(r[0].toLowerCase()),e+r[0].length):-1}function yo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function xo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Mo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function _o(n,t,e){Gs.lastIndex=0;var r=Gs.exec(t.substring(e));return r?(n.m=Ks.get(r[0].toLowerCase()),e+r[0].length):-1}function bo(n,t,e){Ws.lastIndex=0;var r=Ws.exec(t.substring(e));return r?(n.m=Js.get(r[0].toLowerCase()),e+r[0].length):-1}function wo(n,t,e){return fo(n,tl.c.toString(),t,e)}function So(n,t,e){return fo(n,tl.x.toString(),t,e)}function ko(n,t,e){return fo(n,tl.X.toString(),t,e)}function Eo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Ao(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.y=No(+r[0]),e+r[0].length):-1}function Co(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=+t,e+5):-1}function No(n){return n+(n>68?1900:2e3)}function Lo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function To(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function qo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function zo(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function Ro(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function Do(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function Po(n,t,e){rl.lastIndex=0;var r=rl.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function Uo(n,t,e){var r=ul.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function jo(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(aa(t)/60),u=aa(t)%60;return e+po(r,"0",2)+po(u,"0",2)}function Ho(n,t,e){Qs.lastIndex=0;var r=Qs.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function Fo(n){function t(n){try{Ds=ao;var t=new Ds;return t._=n,e(t)}finally{Ds=Date}}var e=lo(n);return t.parse=function(n){try{Ds=ao;var t=e.parse(n);return t&&t._}finally{Ds=Date}},t.toString=e.toString,t}function Oo(n){return n.toISOString()}function Yo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=$o.bisect(ol,u);return i==ol.length?[t.year,si(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/ol[i-1]<ol[i]/u?i-1:i]:[ll,si(n,e)[2]]}return r.invert=function(t){return Io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Io(+e+1),t).length}var i=r.domain(),o=ni(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(ri(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=ni(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Yo(n.copy(),t,e)},ai(r,n)}function Io(n){return new Date(n)}function Zo(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function Vo(n){return JSON.parse(n.responseText)}function Xo(n){var t=Jo.createRange();return t.selectNode(Jo.body),t.createContextualFragment(n.responseText)}var $o={version:"3.3.9"};Date.now||(Date.now=function(){return+new Date});var Bo=[].slice,Wo=function(n){return Bo.call(n)},Jo=document,Go=Jo.documentElement,Ko=window;try{Wo(Go.childNodes)[0].nodeType}catch(Qo){Wo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Jo.createElement("div").style.setProperty("opacity",0,"")}catch(na){var ta=Ko.Element.prototype,ea=ta.setAttribute,ra=ta.setAttributeNS,ua=Ko.CSSStyleDeclaration.prototype,ia=ua.setProperty;ta.setAttribute=function(n,t){ea.call(this,n,t+"")},ta.setAttributeNS=function(n,t,e){ra.call(this,n,t,e+"")},ua.setProperty=function(n,t,e){ia.call(this,n,t+"",e)}}$o.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},$o.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},$o.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},$o.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},$o.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},$o.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},$o.mean=function(t,e){var r,u=t.length,i=0,o=-1,a=0;if(1===arguments.length)for(;++o<u;)n(r=t[o])&&(i+=(r-i)/++a);else for(;++o<u;)n(r=e.call(t,t[o],o))&&(i+=(r-i)/++a);return a?i:void 0},$o.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;
return i?u+i*(n[r]-u):u},$o.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?$o.quantile(t.sort($o.ascending),.5):void 0},$o.bisector=function(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n.call(t,t[i],i)<e?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;e<n.call(t,t[i],i)?u=i:r=i+1}return r}}};var oa=$o.bisector(function(n){return n});$o.bisectLeft=oa.left,$o.bisect=$o.bisectRight=oa.right,$o.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},$o.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},$o.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},$o.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,e=$o.min(arguments,t),r=new Array(e);++n<e;)for(var u,i=-1,o=r[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return r},$o.transpose=function(n){return $o.zip.apply($o,n)},$o.keys=function(n){var t=[];for(var e in n)t.push(e);return t},$o.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},$o.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},$o.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var aa=Math.abs;$o.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var u,i=[],o=e(aa(r)),a=-1;if(n*=o,t*=o,r*=o,0>r)for(;(u=n+r*++a)>t;)i.push(u/o);else for(;(u=n+r*++a)<t;)i.push(u/o);return i},$o.map=function(n){var t=new u;if(n instanceof u)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},r(u,{has:function(n){return ca+n in this},get:function(n){return this[ca+n]},set:function(n,t){return this[ca+n]=t},remove:function(n){return n=ca+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===sa&&n.call(this,t.substring(1),this[t])}});var ca="\x00",sa=ca.charCodeAt(0);$o.nest=function(){function n(t,a,c){if(c>=o.length)return r?r.call(i,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=o[c++],d=new u;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=o.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,i={},o=[],a=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n($o.map,e,0),0)},i.key=function(n){return o.push(n),i},i.sortKeys=function(n){return a[o.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},$o.set=function(n){var t=new i;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},r(i,{has:function(n){return ca+n in this},add:function(n){return this[ca+n]=!0,n},remove:function(n){return n=ca+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===sa&&n.call(this,t.substring(1))}}),$o.behavior={},$o.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=o(n,t,t[e]);return n};var la=["webkit","ms","moz","Moz","o","O"];$o.dispatch=function(){for(var n=new s,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=l(n);return n},s.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},$o.event=null,$o.requote=function(n){return n.replace(fa,"\\$&")};var fa=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ha={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ga=function(n,t){return t.querySelector(n)},pa=function(n,t){return t.querySelectorAll(n)},va=Go[a(Go,"matchesSelector")],da=function(n,t){return va.call(n,t)};"function"==typeof Sizzle&&(ga=function(n,t){return Sizzle(n,t)[0]||null},pa=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},da=Sizzle.matchesSelector),$o.selection=function(){return Ma};var ma=$o.selection.prototype=[];ma.select=function(n){var t,e,r,u,i=[];n=v(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return p(i)},ma.selectAll=function(n){var t,e,r=[];n=d(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Wo(n.call(e,e.__data__,a,u))),t.parentNode=e);return p(r)};var ya={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};$o.ns={prefix:ya,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),ya.hasOwnProperty(e)?{space:ya[e],local:n}:n}},ma.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=$o.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(m(t,n[t]));return this}return this.each(m(n,t))},ma.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!x(n[u]).test(t))return!1;return!0}for(t in n)this.each(M(t,n[t]));return this}return this.each(M(n,t))},ma.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(b(e,n[e],t));return this}if(2>r)return Ko.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(b(n,t,e))},ma.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(w(t,n[t]));return this}return this.each(w(n,t))},ma.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ma.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ma.append=function(n){return n=S(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ma.insert=function(n,t){return n=S(n),t=v(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ma.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},ma.data=function(n,t){function e(n,e){var r,i,o,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new u,y=new u,x=[];for(r=-1;++r<a;)d=t.call(i=n[r],i.__data__,r),m.has(d)?v[r]=i:m.set(d,i),x.push(d);for(r=-1;++r<f;)d=t.call(e,o=e[r],r),(i=m.get(d))?(g[r]=i,i.__data__=o):y.has(d)||(p[r]=k(o)),y.set(d,o),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],o=e[r],i?(i.__data__=o,g[r]=i):p[r]=k(o);for(;f>r;++r)p[r]=k(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,i,o=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++o<a;)(i=r[o])&&(n[o]=i.__data__);return n}var c=N([]),s=p([]),l=p([]);if("function"==typeof n)for(;++o<a;)e(r=this[o],n.call(r,r.parentNode.__data__,o));else for(;++o<a;)e(r=this[o],n);return s.enter=function(){return c},s.exit=function(){return l},s},ma.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ma.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=E(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a)&&t.push(r)}return p(u)},ma.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ma.sort=function(n){n=A.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ma.each=function(n){return C(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ma.call=function(n){var t=Wo(arguments);return n.apply(t[0]=this,t),this},ma.empty=function(){return!this.node()},ma.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ma.size=function(){var n=0;return this.each(function(){++n}),n};var xa=[];$o.selection.enter=N,$o.selection.enter.prototype=xa,xa.append=ma.append,xa.empty=ma.empty,xa.node=ma.node,xa.call=ma.call,xa.size=ma.size,xa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return p(o)},xa.insert=function(n,t){return arguments.length<2&&(t=L(this)),ma.insert.call(this,n,t)},ma.transition=function(){for(var n,t,e=Ss||++Ns,r=[],u=ks||{time:Date.now(),ease:Hr,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&uo(t,c,e,u),n.push(t)}return to(r,e)},ma.interrupt=function(){return this.each(T)},$o.select=function(n){var t=["string"==typeof n?ga(n,Jo):n];return t.parentNode=Go,p([t])},$o.selectAll=function(n){var t=Wo("string"==typeof n?pa(n,Jo):n);return t.parentNode=Go,p([t])};var Ma=$o.select(Go);ma.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(q(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(q(n,t,e))};var _a=$o.map({mouseenter:"mouseover",mouseleave:"mouseout"});_a.forEach(function(n){"on"+n in Jo&&_a.remove(n)});var ba="onselectstart"in Jo?null:a(Go.style,"userSelect"),wa=0;$o.mouse=function(n){return P(n,h())};var Sa=/WebKit/.test(Ko.navigator.userAgent)?-1:0;$o.touches=function(n,t){return arguments.length<2&&(t=h().touches),t?Wo(t).map(function(t){var e=P(n,t);return e.identifier=t.identifier,e}):[]},$o.behavior.drag=function(){function n(){this.on("mousedown.drag",o).on("touchstart.drag",a)}function t(){return $o.event.changedTouches[0].identifier}function e(n,t){return $o.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function o(){var n=t(l,g),e=n[0]-v[0],r=n[1]-v[1];d|=e|r,v=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function a(){m.on(e+"."+p,null).on(r+"."+p,null),y(d&&$o.event.target===h),f({type:"dragend"})}var c,s=this,l=s.parentNode,f=u.of(s,arguments),h=$o.event.target,g=n(),p=null==g?"drag":"drag-"+g,v=t(l,g),d=0,m=$o.select(Ko).on(e+"."+p,o).on(r+"."+p,a),y=D();i?(c=i.apply(s,arguments),c=[c.x-v[0],c.y-v[1]]):c=[0,0],f({type:"dragstart"})}}var u=g(n,"drag","dragstart","dragend"),i=null,o=r(c,$o.mouse,"mousemove","mouseup"),a=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},$o.rebind(n,u,"on")};var ka=Math.PI,Ea=2*ka,Aa=ka/2,Ca=1e-6,Na=Ca*Ca,La=ka/180,Ta=180/ka,qa=Math.SQRT2,za=2,Ra=4;$o.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=O(v),o=i/(za*h)*(e*Y(qa*t+v)-F(v));return[r+o*s,u+o*l,i*e/O(qa*t+v)]}return[r+n*s,u+n*l,i*Math.exp(qa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ra*f)/(2*i*za*h),p=(c*c-i*i-Ra*f)/(2*c*za*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/qa;return e.duration=1e3*y,e},$o.behavior.zoom=function(){function n(n){n.on(A,s).on(Ua+".zoom",h).on(C,p).on("dblclick.zoom",v).on(L,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(M.range().map(function(n){return(n-S.x)/S.k}).map(M.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u($o.mouse(r),h),a(i)}function e(){f.on(C,Ko===r?p:null).on(N,null),g(l&&$o.event.target===s),c(i)}var r=this,i=q.of(r,arguments),s=$o.event.target,l=0,f=$o.select(Ko).on(C,n).on(N,e),h=t($o.mouse(r)),g=D();T.call(r),o(i)}function l(){function n(){var n=$o.touches(p);return g=S.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=t(n))}),n}function e(){for(var t=$o.event.changedTouches,e=0,i=t.length;i>e;++e)d[t[e].identifier]=null;var o=n(),c=Date.now();if(1===o.length){if(500>c-x){var s=o[0],l=d[s.identifier];r(2*S.k),u(s,l),f(),a(v)}x=c}else if(o.length>1){var s=o[0],h=o[1],g=s[0]-h[0],p=s[1]-h[1];m=g*g+p*p}}function i(){for(var n,t,e,i,o=$o.touches(p),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=d[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=m&&Math.sqrt(l/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*g)}x=null,u(n,t),a(v)}function h(){if($o.event.touches.length){for(var t=$o.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}b.on(M,null).on(_,null),w.on(A,s).on(L,l),k(),c(v)}var g,p=this,v=q.of(p,arguments),d={},m=0,y=$o.event.changedTouches[0].identifier,M="touchmove.zoom-"+y,_="touchend.zoom-"+y,b=$o.select(Ko).on(M,i).on(_,h),w=$o.select(p).on(A,null).on(L,e),k=D();T.call(p),e(),o(v)}function h(){var n=q.of(this,arguments);y?clearTimeout(y):(T.call(this),o(n)),y=setTimeout(function(){y=null,c(n)},50),f();var e=m||$o.mouse(this);d||(d=t(e)),r(Math.pow(2,.002*Da())*S.k),u(e,d),a(n)}function p(){d=null}function v(){var n=q.of(this,arguments),e=$o.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,$o.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var d,m,y,x,M,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Pa,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",L="touchstart.zoom",q=g(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=q.of(this,arguments),t=S;Ss?$o.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=$o.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Pa:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,M=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},$o.rebind(n,q,"on")};var Da,Pa=[0,1/0],Ua="onwheel"in Jo?(Da=function(){return-$o.event.deltaY*($o.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Jo?(Da=function(){return $o.event.wheelDelta},"mousewheel"):(Da=function(){return-$o.event.detail},"MozMousePixelScroll");Z.prototype.toString=function(){return this.rgb()+""},$o.hsl=function(n,t,e){return 1===arguments.length?n instanceof X?V(n.h,n.s,n.l):st(""+n,lt,V):V(+n,+t,+e)};var ja=X.prototype=new Z;ja.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),V(this.h,this.s,this.l/n)},ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),V(this.h,this.s,n*this.l)},ja.rgb=function(){return $(this.h,this.s,this.l)},$o.hcl=function(n,t,e){return 1===arguments.length?n instanceof W?B(n.h,n.c,n.l):n instanceof K?nt(n.l,n.a,n.b):nt((n=ft((n=$o.rgb(n)).r,n.g,n.b)).l,n.a,n.b):B(+n,+t,+e)};var Ha=W.prototype=new Z;Ha.brighter=function(n){return B(this.h,this.c,Math.min(100,this.l+Fa*(arguments.length?n:1)))},Ha.darker=function(n){return B(this.h,this.c,Math.max(0,this.l-Fa*(arguments.length?n:1)))},Ha.rgb=function(){return J(this.h,this.c,this.l).rgb()},$o.lab=function(n,t,e){return 1===arguments.length?n instanceof K?G(n.l,n.a,n.b):n instanceof W?J(n.l,n.c,n.h):ft((n=$o.rgb(n)).r,n.g,n.b):G(+n,+t,+e)};var Fa=18,Oa=.95047,Ya=1,Ia=1.08883,Za=K.prototype=new Z;Za.brighter=function(n){return G(Math.min(100,this.l+Fa*(arguments.length?n:1)),this.a,this.b)},Za.darker=function(n){return G(Math.max(0,this.l-Fa*(arguments.length?n:1)),this.a,this.b)},Za.rgb=function(){return Q(this.l,this.a,this.b)},$o.rgb=function(n,t,e){return 1===arguments.length?n instanceof at?ot(n.r,n.g,n.b):st(""+n,ot,$):ot(~~n,~~t,~~e)};var Va=at.prototype=new Z;Va.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),ot(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):ot(u,u,u)},Va.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),ot(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Va.hsl=function(){return lt(this.r,this.g,this.b)},Va.toString=function(){return"#"+ct(this.r)+ct(this.g)+ct(this.b)};var Xa=$o.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Xa.forEach(function(n,t){Xa.set(n,ut(t))}),$o.functor=pt,$o.xhr=dt(vt),$o.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=$o.xhr(n,t,i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o.row(e)}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function o(t){return t.map(a).join(n)}function a(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=new RegExp('["'+n+"\n]"),s=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=c)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==s)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],c=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new i,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(a).join(n)].concat(t.map(function(t){return u.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(o).join("\n")},e},$o.csv=$o.dsv(",","text/csv"),$o.tsv=$o.dsv(" ","text/tab-separated-values");var $a,Ba,Wa,Ja,Ga,Ka=Ko[a(Ko,"requestAnimationFrame")]||function(n){setTimeout(n,17)};$o.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Ba?Ba.n=i:$a=i,Ba=i,Wa||(Ja=clearTimeout(Ja),Wa=1,Ka(xt))},$o.timer.flush=function(){Mt(),_t()};var Qa=".",nc=",",tc=[3,3],ec="$",rc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(bt);$o.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=$o.round(n,wt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),rc[8+e/3]},$o.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},$o.format=function(n){var t=uc.exec(n),e=t[1]||" ",r=t[2]||">",u=t[3]||"",i=t[4]||"",o=t[5],a=+t[6],c=t[7],s=t[8],l=t[9],f=1,h="",g=!1;switch(s&&(s=+s.substring(1)),(o||"0"===e&&"="===r)&&(o=e="0",r="=",c&&(a-=Math.floor((a-1)/4))),l){case"n":c=!0,l="g";break;case"%":f=100,h="%",l="f";break;case"p":f=100,h="%",l="r";break;case"b":case"o":case"x":case"X":"#"===i&&(i="0"+l.toLowerCase());case"c":case"d":g=!0,s=0;break;case"s":f=-1,l="r"}"#"===i?i="":"$"===i&&(i=ec),"r"!=l||s||(l="g"),null!=s&&("g"==l?s=Math.max(1,Math.min(21,s)):("e"==l||"f"==l)&&(s=Math.max(0,Math.min(20,s)))),l=ic.get(l)||St;var p=o&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):u;if(0>f){var v=$o.formatPrefix(n,s);n=v.scale(n),h=v.symbol}else n*=f;n=l(n,s);var d=n.lastIndexOf("."),m=0>d?n:n.substring(0,d),y=0>d?"":Qa+n.substring(d+1);!o&&c&&(m=oc(m));var x=i.length+m.length+y.length+(p?0:t.length),M=a>x?new Array(x=a-x+1).join(e):"";return p&&(m=oc(M+m)),t+=i,n=m+y,("<"===r?t+n+M:">"===r?M+t+n:"^"===r?M.substring(0,x>>=1)+t+n+M.substring(x):t+(p?n:M+n))+h}};var uc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,ic=$o.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=$o.round(n,wt(n,t))).toFixed(Math.max(0,Math.min(20,wt(n*(1+1e-15),t))))}}),oc=vt;if(tc){var ac=tc.length;oc=function(n){for(var t=n.length,e=[],r=0,u=tc[0];t>0&&u>0;)e.push(n.substring(t-=u,t+u)),u=tc[r=(r+1)%ac];return e.reverse().join(nc)}}$o.geo={},kt.prototype={s:0,t:0,add:function(n){Et(n,this.t,cc),Et(cc.s,this.s,this),this.s?this.t+=cc.t:this.s=cc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var cc=new kt;$o.geo.stream=function(n,t){n&&sc.hasOwnProperty(n.type)?sc[n.type](n,t):At(n,t)};var sc={Feature:function(n,t){At(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)At(e[r].geometry,t)}},lc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){Ct(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)Ct(e[r],t,0)},Polygon:function(n,t){Nt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)Nt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)At(e[r],t)}};$o.geo.area=function(n){return fc=0,$o.geo.stream(n,gc),fc};var fc,hc=new kt,gc={sphere:function(){fc+=4*ka},point:c,lineStart:c,lineEnd:c,polygonStart:function(){hc.reset(),gc.lineStart=Lt},polygonEnd:function(){var n=2*hc;fc+=0>n?4*ka+n:n,gc.lineStart=gc.lineEnd=gc.point=c}};$o.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=Tt([t*La,e*La]);if(m){var u=zt(m,r),i=[u[1],-u[0],0],o=zt(i,u);Pt(o),o=Ut(o);var c=t-p,s=c>0?1:-1,v=o[0]*Ta*s,d=aa(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*Ta;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*Ta;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=aa(r)>180?r+(r>0?360:-360):r}else v=n,d=e;gc.point(n,e),t(n,e)}function i(){gc.lineStart()}function o(){u(v,d),gc.lineEnd(),aa(y)>Ca&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,gc.polygonStart()},polygonEnd:function(){gc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>hc?(l=-(h=180),f=-(g=90)):y>Ca?g=90:-Ca>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],$o.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),$o.geo.centroid=function(n){pc=vc=dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,$o.geo.stream(n,kc);var t=bc,e=wc,r=Sc,u=t*t+e*e+r*r;return Na>u&&(t=xc,e=Mc,r=_c,Ca>vc&&(t=dc,e=mc,r=yc),u=t*t+e*e+r*r,Na>u)?[0/0,0/0]:[Math.atan2(e,t)*Ta,H(r/Math.sqrt(u))*Ta]};var pc,vc,dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc={sphere:c,point:Ht,lineStart:Ot,lineEnd:Yt,polygonStart:function(){kc.lineStart=It},polygonEnd:function(){kc.lineStart=Ot}},Ec=Bt(Zt,Qt,te,[-ka,-ka/2]),Ac=1e9;$o.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=ue(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},($o.geo.conicEqualArea=function(){return oe(ae)}).raw=ae,$o.geo.albers=function(){return $o.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},$o.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=$o.geo.albers(),o=$o.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=$o.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Ca,f+.12*s+Ca],[l-.214*s-Ca,f+.234*s-Ca]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Ca,f+.166*s+Ca],[l-.115*s-Ca,f+.234*s-Ca]]).stream(c).point,n},n.scale(1070)};var Cc,Nc,Lc,Tc,qc,zc,Rc={point:c,lineStart:c,lineEnd:c,polygonStart:function(){Nc=0,Rc.lineStart=ce},polygonEnd:function(){Rc.lineStart=Rc.lineEnd=Rc.point=c,Cc+=aa(Nc/2)}},Dc={point:se,lineStart:c,lineEnd:c,polygonStart:c,polygonEnd:c},Pc={point:he,lineStart:ge,lineEnd:pe,polygonStart:function(){Pc.lineStart=ve},polygonEnd:function(){Pc.point=he,Pc.lineStart=ge,Pc.lineEnd=pe}};$o.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),$o.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Cc=0,$o.geo.stream(n,u(Rc)),Cc},n.centroid=function(n){return dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,$o.geo.stream(n,u(Pc)),Sc?[bc/Sc,wc/Sc]:_c?[xc/_c,Mc/_c]:yc?[dc/yc,mc/yc]:[0/0,0/0]},n.bounds=function(n){return qc=zc=-(Lc=Tc=1/0),$o.geo.stream(n,u(Dc)),[[Lc,Tc],[qc,zc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||ye(n):vt,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new le:new de(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection($o.geo.albersUsa()).context(null)},$o.geo.transform=function(n){return{stream:function(t){var e=new xe(t);for(var r in n)e[r]=n[r];return e}}},xe.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()
},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},$o.geo.projection=_e,$o.geo.projectionMutator=be,($o.geo.equirectangular=function(){return _e(Se)}).raw=Se.invert=Se,$o.geo.rotation=function(n){function t(t){return t=n(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t}return n=Ee(n[0]%360*La,n[1]*La,n.length>2?n[2]*La:0),t.invert=function(t){return t=n.invert(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t},t},ke.invert=Se,$o.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=Ee(-n[0]*La,-n[1]*La,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ta,n[1]*=Ta}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=Le((t=+r)*La,u*La),n):t},n.precision=function(r){return arguments.length?(e=Le(t*La,(u=+r)*La),n):u},n.angle(90)},$o.geo.distance=function(n,t){var e,r=(t[0]-n[0])*La,u=n[1]*La,i=t[1]*La,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},$o.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return $o.range(Math.ceil(i/d)*d,u,d).map(h).concat($o.range(Math.ceil(s/m)*m,c,m).map(g)).concat($o.range(Math.ceil(r/p)*p,e,p).filter(function(n){return aa(n%d)>Ca}).map(l)).concat($o.range(Math.ceil(a/v)*v,o,v).filter(function(n){return aa(n%m)>Ca}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=qe(a,o,90),f=ze(r,e,y),h=qe(s,c,90),g=ze(i,u,y),n):y},n.majorExtent([[-180,-90+Ca],[180,90-Ca]]).minorExtent([[-180,-80-Ca],[180,80+Ca]])},$o.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=Re,u=De;return n.distance=function(){return $o.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},$o.geo.interpolate=function(n,t){return Pe(n[0]*La,n[1]*La,t[0]*La,t[1]*La)},$o.geo.length=function(n){return Uc=0,$o.geo.stream(n,jc),Uc};var Uc,jc={sphere:c,point:c,lineStart:Ue,lineEnd:c,polygonStart:c,polygonEnd:c},Hc=je(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});($o.geo.azimuthalEqualArea=function(){return _e(Hc)}).raw=Hc;var Fc=je(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},vt);($o.geo.azimuthalEquidistant=function(){return _e(Fc)}).raw=Fc,($o.geo.conicConformal=function(){return oe(He)}).raw=He,($o.geo.conicEquidistant=function(){return oe(Fe)}).raw=Fe;var Oc=je(function(n){return 1/n},Math.atan);($o.geo.gnomonic=function(){return _e(Oc)}).raw=Oc,Oe.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Aa]},($o.geo.mercator=function(){return Ye(Oe)}).raw=Oe;var Yc=je(function(){return 1},Math.asin);($o.geo.orthographic=function(){return _e(Yc)}).raw=Yc;var Ic=je(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});($o.geo.stereographic=function(){return _e(Ic)}).raw=Ic,Ie.invert=function(n,t){return[Math.atan2(F(n),Math.cos(t)),H(Math.sin(t)/O(n))]},($o.geo.transverseMercator=function(){return Ye(Ie)}).raw=Ie,$o.geom={},$o.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u,i,o,a,c,s,l,f,h,g,p,v=pt(e),d=pt(r),m=n.length,y=m-1,x=[],M=[],_=0;if(v===Ze&&r===Ve)t=n;else for(i=0,t=[];m>i;++i)t.push([+v.call(this,u=n[i],i),+d.call(this,u,i)]);for(i=1;m>i;++i)(t[i][1]<t[_][1]||t[i][1]==t[_][1]&&t[i][0]<t[_][0])&&(_=i);for(i=0;m>i;++i)i!==_&&(c=t[i][1]-t[_][1],a=t[i][0]-t[_][0],x.push({angle:Math.atan2(c,a),index:i}));for(x.sort(function(n,t){return n.angle-t.angle}),g=x[0].angle,h=x[0].index,f=0,i=1;y>i;++i){if(o=x[i].index,g==x[i].angle){if(a=t[h][0]-t[_][0],c=t[h][1]-t[_][1],s=t[o][0]-t[_][0],l=t[o][1]-t[_][1],a*a+c*c>=s*s+l*l){x[i].index=-1;continue}x[f].index=-1}g=x[i].angle,f=i,h=o}for(M.push(_),i=0,o=0;2>i;++o)x[o].index>-1&&(M.push(x[o].index),i++);for(p=M.length;y>o;++o)if(!(x[o].index<0)){for(;!Xe(M[p-2],M[p-1],x[o].index,t);)--p;M[p++]=x[o].index}var b=[];for(i=p-1;i>=0;--i)b.push(n[M[i]]);return b}var e=Ze,r=Ve;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},$o.geom.polygon=function(n){return ha(n,Zc),n};var Zc=$o.geom.polygon.prototype=[];Zc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Zc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Zc.clip=function(n){for(var t,e,r,u,i,o,a=We(n),c=-1,s=this.length-We(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],$e(o,l,u)?($e(i,l,u)||n.push(Be(i,o,l,u)),n.push(o)):$e(i,l,u)&&n.push(Be(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Vc,Xc,$c,Bc,Wc,Jc=[],Gc=[];rr.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(ir),t.length},vr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},dr.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=Mr(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(yr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,xr(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(xr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,yr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?Mr(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,yr(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,xr(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,yr(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,xr(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,yr(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,xr(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},$o.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return _r(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ca)*Ca,y:Math.round(o(n,t)/Ca)*Ca,i:t}})}var r=Ze,u=Ve,i=r,o=u,a=Kc;return n?t(n):(t.links=function(n){return _r(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return _r(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(ir),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&wr(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=pt(r=n),t):r},t.y=function(n){return arguments.length?(o=pt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Kc:n,t):a===Kc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Kc?null:a&&a[1]},t)};var Kc=[[-1e6,-1e6],[1e6,1e6]];$o.geom.delaunay=function(n){return $o.geom.voronoi().triangles(n)},$o.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(aa(c-e)+aa(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=Er()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=pt(a),M=pt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=Er();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){Ar(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=Ze,c=Ve;return(o=arguments.length)?(a=Sr,c=kr,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},$o.interpolateRgb=Cr,$o.interpolateObject=Nr,$o.interpolateNumber=Lr,$o.interpolateString=Tr;var Qc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;$o.interpolate=qr,$o.interpolators=[function(n,t){var e=typeof t;return("string"===e?Xa.has(t)||/^(#|rgb\(|hsl\()/.test(t)?Cr:Tr:t instanceof Z?Cr:"object"===e?Array.isArray(t)?zr:Nr:Lr)(n,t)}],$o.interpolateArray=zr;var ns=function(){return vt},ts=$o.map({linear:ns,poly:Fr,quad:function(){return Ur},cubic:function(){return jr},sin:function(){return Or},exp:function(){return Yr},circle:function(){return Ir},elastic:Zr,back:Vr,bounce:function(){return Xr}}),es=$o.map({"in":vt,out:Dr,"in-out":Pr,"out-in":function(n){return Pr(Dr(n))}});$o.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=ts.get(e)||ns,r=es.get(r)||vt,Rr(r(e.apply(null,Bo.call(arguments,1))))},$o.interpolateHcl=$r,$o.interpolateHsl=Br,$o.interpolateLab=Wr,$o.interpolateRound=Jr,$o.transform=function(n){var t=Jo.createElementNS($o.ns.prefix.svg,"g");return($o.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Gr(e?e.matrix:rs)})(n)},Gr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var rs={a:1,b:0,c:0,d:1,e:0,f:0};$o.interpolateTransform=tu,$o.layout={},$o.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(uu(n[e]));return t}},$o.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=$o.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push($o.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Ea-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},$o.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=1/Math.sqrt(i*i+o*o);if(v>(u-e)*a){var c=t.charge*a*a;return n.px-=i*c,n.py-=o*c,!0}if(t.point&&isFinite(a)){var c=t.pointCharge*a*a;n.px-=i*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=$o.event.x,n.py=$o.event.y,a.resume()}var e,r,u,i,o,a={},c=$o.dispatch("start","tick","end"),s=[1,1],l=.9,f=us,h=is,g=-30,p=.1,v=.8,d=[],m=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,v,y,x,M,_=d.length,b=m.length;for(e=0;b>e;++e)a=m[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(v=x*x+M*M)&&(v=r*i[e]*((v=Math.sqrt(v))-u[e])/v,x*=v,M*=v,h.x-=x*(y=f.weight/(h.weight+f.weight)),h.y-=M*y,f.x+=x*(y=1-y),f.y+=M*y);if((y=r*p)&&(x=s[0]/2,M=s[1]/2,e=-1,y))for(;++e<_;)a=d[e],a.x+=(x-a.x)*y,a.y+=(M-a.y)*y;if(g)for(fu(t=$o.geom.quadtree(d),r,o),e=-1;++e<_;)(a=d[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=d[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(d=n,a):d},a.links=function(n){return arguments.length?(m=n,a):m},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.gravity=function(n){return arguments.length?(p=+n,a):p},a.theta=function(n){return arguments.length?(v=+n,a):v},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),$o.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=m[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=d.length,l=m.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=d[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=m[t],"number"==typeof r.source&&(r.source=d[r.source]),"number"==typeof r.target&&(r.target=d[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=d[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,m[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,m[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,d[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=$o.behavior.drag().origin(vt).on("dragstart.force",au).on("drag.force",t).on("dragend.force",cu)),arguments.length?(this.on("mouseover.force",su).on("mouseout.force",lu).call(e),void 0):e},$o.rebind(a,c,"on")};var us=20,is=1;$o.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(s=c.length)){for(var s,l,f=-1,h=t.children=new Array(s),g=0,p=o+1;++f<s;)l=h[f]=n(c[f],p,a),l.parent=t,g+=l.value;r&&h.sort(r),i&&(t.value=g)}else delete t.children,i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,s=r+1;++c<a;)o+=t(u[c],s);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=vu,u=gu,i=pu;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},$o.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=$o.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},hu(e,r)},$o.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/$o.sum(o),s=$o.range(i.length);null!=e&&s.sort(e===os?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=os,r=0,u=Ea;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var os={};$o.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=$o.permute(s,f),l=$o.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=vt,e=Mu,r=_u,u=xu,i=mu,o=yu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:as.get(t)||Mu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:cs.get(t)||_u,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var as=$o.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(bu),i=n.map(wu),o=$o.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return $o.range(n.length).reverse()},"default":Mu}),cs=$o.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:_u});$o.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[$o.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=Au,u=ku;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=pt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return Eu(n,t)}:pt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},$o.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,s,l=r[0],f=l,h=-1;++h<i;)s=r[h],o(s,a),f=c(s,a,f),a=s;Pu(n);var g=.5*(l._tree.prelim+s._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],s=i._tree.mod,l=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=Lu(a),i=Nu(i),a&&i;)c=Nu(c),o=Lu(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-s+e(a,i),u>0&&(Uu(ju(a,n,r),n,u),s+=u,l+=u),f+=a._tree.mod,s+=i._tree.mod,h+=c._tree.mod,l+=o._tree.mod;a&&!Lu(o)&&(o._tree.thread=a,o._tree.mod+=f-l),i&&!Nu(c)&&(c._tree.thread=i,c._tree.mod+=s-h,r=n)}return r}var s=t.call(this,n,i),l=s[0];Du(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(l),a(l,-l._tree.prelim);var f=Tu(l,zu),h=Tu(l,qu),g=Tu(l,Ru),p=f.x-e(f,h)/2,v=h.x+e(h,f)/2,d=g.depth||1;return Du(l,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(v-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),s}var t=$o.layout.hierarchy().sort(null).value(null),e=Cu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},hu(n,t)},$o.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Du(a,function(n){n.r=+l(n.value)}),Du(a,Iu),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;Du(a,function(n){n.r+=f}),Du(a,Iu),Du(a,function(n){n.r-=f})}return Xu(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=$o.layout.hierarchy().sort(Hu),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},hu(n,e)},$o.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;Du(c,function(n){var t=n.children;t&&t.length?(n.x=Wu(t),n.y=Bu(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ju(c),f=Gu(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return Du(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=$o.layout.hierarchy().sort(null).value(null),e=Cu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},hu(n,t)},$o.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=$o.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=Ku,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ku(t):Qu(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Qu(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?Ku:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},hu(i,a)},$o.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=$o.random.normal.apply($o,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},$o.scale={};var ss={floor:vt,ceil:vt};$o.scale.linear=function(){return oi([0,1],[0,1],qr,!1)};var ls={s:1,g:1,p:1,r:1,e:1};$o.scale.log=function(){return pi($o.scale.linear().domain([0,1]),10,!0,[1,10])};var fs=$o.format(".0e"),hs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};$o.scale.pow=function(){return vi($o.scale.linear(),1,[0,1])},$o.scale.sqrt=function(){return $o.scale.pow().exponent(.5)},$o.scale.ordinal=function(){return mi([],{t:"range",a:[[]]})},$o.scale.category10=function(){return $o.scale.ordinal().range(gs)},$o.scale.category20=function(){return $o.scale.ordinal().range(ps)},$o.scale.category20b=function(){return $o.scale.ordinal().range(vs)},$o.scale.category20c=function(){return $o.scale.ordinal().range(ds)};var gs=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(it),ps=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(it),vs=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(it),ds=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(it);$o.scale.quantile=function(){return yi([],[])},$o.scale.quantize=function(){return xi(0,1,[0,1])},$o.scale.threshold=function(){return Mi([.5],[0,1])},$o.scale.identity=function(){return _i([0,1])},$o.svg={},$o.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ms,a=u.apply(this,arguments)+ms,c=(o>a&&(c=o,o=a,a=c),a-o),s=ka>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=ys?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=bi,e=wi,r=Si,u=ki;return n.innerRadius=function(e){return arguments.length?(t=pt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=pt(t),n):e},n.startAngle=function(t){return arguments.length?(r=pt(t),n):r},n.endAngle=function(t){return arguments.length?(u=pt(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ms;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ms=-Aa,ys=Ea-Ca;$o.svg.line=function(){return Ei(vt)};var xs=$o.map({linear:Ai,"linear-closed":Ci,step:Ni,"step-before":Li,"step-after":Ti,basis:Ui,"basis-open":ji,"basis-closed":Hi,bundle:Fi,cardinal:Ri,"cardinal-open":qi,"cardinal-closed":zi,monotone:Xi});xs.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Ms=[0,2/3,1/3,0],_s=[0,1/3,2/3,0],bs=[0,1/6,2/3,1/6];$o.svg.line.radial=function(){var n=Ei($i);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},Li.reverse=Ti,Ti.reverse=Li,$o.svg.area=function(){return Bi(vt)},$o.svg.area.radial=function(){var n=Bi($i);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},$o.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ms,l=s.call(n,u,r)+ms;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>ka)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=Re,o=De,a=Wi,c=Si,s=ki;return n.radius=function(t){return arguments.length?(a=pt(t),n):a},n.source=function(t){return arguments.length?(i=pt(t),n):i},n.target=function(t){return arguments.length?(o=pt(t),n):o},n.startAngle=function(t){return arguments.length?(c=pt(t),n):c},n.endAngle=function(t){return arguments.length?(s=pt(t),n):s},n},$o.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=Re,e=De,r=Ji;return n.source=function(e){return arguments.length?(t=pt(e),n):t},n.target=function(t){return arguments.length?(e=pt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},$o.svg.diagonal.radial=function(){var n=$o.svg.diagonal(),t=Ji,e=n.projection;return n.projection=function(n){return arguments.length?e(Gi(t=n)):t},n},$o.svg.symbol=function(){function n(n,r){return(ws.get(t.call(this,n,r))||no)(e.call(this,n,r))}var t=Qi,e=Ki;return n.type=function(e){return arguments.length?(t=pt(e),n):t},n.size=function(t){return arguments.length?(e=pt(t),n):e},n};var ws=$o.map({circle:no,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*As)),e=t*As;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Es),e=t*Es/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Es),e=t*Es/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});$o.svg.symbolTypes=ws.keys();var Ss,ks,Es=Math.sqrt(3),As=Math.tan(30*La),Cs=[],Ns=0;
Cs.call=ma.call,Cs.empty=ma.empty,Cs.node=ma.node,Cs.size=ma.size,$o.transition=function(n){return arguments.length?Ss?n.transition():n:Ma.transition()},$o.transition.prototype=Cs,Cs.select=function(n){var t,e,r,u=this.id,i=[];n=v(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),uo(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return to(i,u)},Cs.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=d(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&uo(u,g,o,i),t.push(u)}return to(a,o)},Cs.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=E(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a)&&t.push(r)}return to(u,this.id)},Cs.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):C(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Cs.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?tu:qr,a=$o.ns.qualify(n);return eo(this,"attr."+n,t,a.local?i:u)},Cs.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=$o.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Cs.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Ko.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=qr(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return eo(this,"style."+n,t,u)},Cs.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Ko.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Cs.text=function(n){return eo(this,"text",n,ro)},Cs.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Cs.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=$o.ease.apply($o,arguments)),C(this,function(e){e.__transition__[t].ease=n}))},Cs.delay=function(n){var t=this.id;return C(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Cs.duration=function(n){var t=this.id;return C(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Cs.each=function(n,t){var e=this.id;if(arguments.length<2){var r=ks,u=Ss;Ss=e,C(this,function(t,r,u){ks=t.__transition__[e],n.call(t,t.__data__,r,u)}),ks=r,Ss=u}else C(this,function(r){var u=r.__transition__[e];(u.event||(u.event=$o.dispatch("start","end"))).on(n,t)});return this},Cs.transition=function(){for(var n,t,e,r,u=this.id,i=++Ns,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,uo(e,s,i,r)),n.push(e)}return to(o,i)},$o.svg.axis=function(){function n(n){n.each(function(){var n,s=$o.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):vt:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ca),d=$o.transition(p.exit()).style("opacity",Ca).remove(),m=$o.transition(p).style("opacity",1),y=ti(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),$o.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=io,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=io,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=oo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=oo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f.rangeBand()/2,A=function(n){return f(n)+E};v.call(n,A),m.call(n,A)}else v.call(n,l),m.call(n,f),d.call(n,f)})}var t,e=$o.scale.linear(),r=Ls,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Ts?t+"":Ls,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Ls="bottom",Ts={top:1,right:1,bottom:1,left:1};$o.svg.brush=function(){function n(i){i.each(function(){var i=$o.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(d,vt);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return qs[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=$o.transition(i),h=$o.transition(o);c&&(l=ti(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=ti(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==$o.event.keyCode&&(C||(x=null,L[0]-=l[1],L[1]-=h[1],C=2),f())}function g(){32==$o.event.keyCode&&2==C&&(L[0]+=l[1],L[1]+=h[1],C=0,f())}function d(){var n=$o.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||($o.event.altKey?(x||(x=[(l[0]+l[1])/2,(h[0]+h[1])/2]),L[0]=l[+(n[0]<x[0])],L[1]=h[+(n[1]<x[1])]):x=null),E&&m(n,c,0)&&(e(S),u=!0),A&&m(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,a=ti(t),c=a[0],s=a[1],f=L[e],g=e?h:l,d=g[1]-g[0];return C&&(c-=f,s-=d+f),r=(e?v:p)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=f)+d:(x&&(f=Math.max(c,Math.min(s,2*x[e]-r))),r>f?(u=r,r=f):u=f),g[0]!=r||g[1]!=u?(e?o=null:i=null,g[0]=r,g[1]=u,!0):void 0}function y(){d(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),$o.select("body").style("cursor",null),T.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=$o.select($o.event.target),w=a.of(_,arguments),S=$o.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=D(),L=$o.mouse(_),T=$o.select(Ko).on("keydown.brush",u).on("keyup.brush",g);if($o.event.changedTouches?T.on("touchmove.brush",d).on("touchend.brush",y):T.on("mousemove.brush",d).on("mouseup.brush",y),S.interrupt().selectAll("*").interrupt(),C)L[0]=l[0]-L[0],L[1]=h[0]-L[1];else if(k){var q=+/w$/.test(k),z=+/^n/.test(k);M=[l[1-q]-L[0],h[1-z]-L[1]],L[0]=l[q],L[1]=h[z]}else $o.event.altKey&&(x=L.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),$o.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),d()}var i,o,a=g(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],h=[0,0],p=!0,v=!0,d=zs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:h,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ss?$o.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=zr(l,t.x),r=zr(h,t.y);return i=o=null,function(u){l=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,d=zs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,d=zs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(p=!!t[0],v=!!t[1]):c?p=!!t:s&&(v=!!t),n):c&&s?[p,v]:c?p:s?v:null},n.extent=function(t){var e,r,u,a,f;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(f=e,e=r,r=f),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(f=u,u=a,a=f),(u!=h[0]||a!=h[1])&&(h=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(f=e,e=r,r=f))),s&&(o?(u=o[0],a=o[1]):(u=h[0],a=h[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(f=u,u=a,a=f))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],h=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&h[0]==h[1]},$o.rebind(n,a,"on")};var qs={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},zs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Rs=$o.time={},Ds=Date,Ps=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];ao.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){Us.setUTCDate.apply(this._,arguments)},setDay:function(){Us.setUTCDay.apply(this._,arguments)},setFullYear:function(){Us.setUTCFullYear.apply(this._,arguments)},setHours:function(){Us.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){Us.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){Us.setUTCMinutes.apply(this._,arguments)},setMonth:function(){Us.setUTCMonth.apply(this._,arguments)},setSeconds:function(){Us.setUTCSeconds.apply(this._,arguments)},setTime:function(){Us.setTime.apply(this._,arguments)}};var Us=Date.prototype,js="%a %b %e %X %Y",Hs="%m/%d/%Y",Fs="%H:%M:%S",Os=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ys=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Is=["January","February","March","April","May","June","July","August","September","October","November","December"],Zs=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];Rs.year=co(function(n){return n=Rs.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),Rs.years=Rs.year.range,Rs.years.utc=Rs.year.utc.range,Rs.day=co(function(n){var t=new Ds(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),Rs.days=Rs.day.range,Rs.days.utc=Rs.day.utc.range,Rs.dayOfYear=function(n){var t=Rs.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},Ps.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=Rs[n]=co(function(n){return(n=Rs.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=Rs.year(n).getDay();return Math.floor((Rs.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});Rs[n+"s"]=e.range,Rs[n+"s"].utc=e.utc.range,Rs[n+"OfYear"]=function(n){var e=Rs.year(n).getDay();return Math.floor((Rs.dayOfYear(n)+(e+t)%7)/7)}}),Rs.week=Rs.sunday,Rs.weeks=Rs.sunday.range,Rs.weeks.utc=Rs.sunday.utc.range,Rs.weekOfYear=Rs.sundayOfYear,Rs.format=lo;var Vs=ho(Os),Xs=go(Os),$s=ho(Ys),Bs=go(Ys),Ws=ho(Is),Js=go(Is),Gs=ho(Zs),Ks=go(Zs),Qs=/^%/,nl={"-":"",_:" ",0:"0"},tl={a:function(n){return Ys[n.getDay()]},A:function(n){return Os[n.getDay()]},b:function(n){return Zs[n.getMonth()]},B:function(n){return Is[n.getMonth()]},c:lo(js),d:function(n,t){return po(n.getDate(),t,2)},e:function(n,t){return po(n.getDate(),t,2)},H:function(n,t){return po(n.getHours(),t,2)},I:function(n,t){return po(n.getHours()%12||12,t,2)},j:function(n,t){return po(1+Rs.dayOfYear(n),t,3)},L:function(n,t){return po(n.getMilliseconds(),t,3)},m:function(n,t){return po(n.getMonth()+1,t,2)},M:function(n,t){return po(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return po(n.getSeconds(),t,2)},U:function(n,t){return po(Rs.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return po(Rs.mondayOfYear(n),t,2)},x:lo(Hs),X:lo(Fs),y:function(n,t){return po(n.getFullYear()%100,t,2)},Y:function(n,t){return po(n.getFullYear()%1e4,t,4)},Z:jo,"%":function(){return"%"}},el={a:vo,A:mo,b:_o,B:bo,c:wo,d:To,e:To,H:zo,I:zo,j:qo,L:Po,m:Lo,M:Ro,p:Uo,S:Do,U:xo,w:yo,W:Mo,x:So,X:ko,y:Ao,Y:Eo,Z:Co,"%":Ho},rl=/^\s*\d+/,ul=$o.map({am:0,pm:1});lo.utc=Fo;var il=Fo("%Y-%m-%dT%H:%M:%S.%LZ");lo.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Oo:il,Oo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Oo.toString=il.toString,Rs.second=co(function(n){return new Ds(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),Rs.seconds=Rs.second.range,Rs.seconds.utc=Rs.second.utc.range,Rs.minute=co(function(n){return new Ds(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),Rs.minutes=Rs.minute.range,Rs.minutes.utc=Rs.minute.utc.range,Rs.hour=co(function(n){var t=n.getTimezoneOffset()/60;return new Ds(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),Rs.hours=Rs.hour.range,Rs.hours.utc=Rs.hour.utc.range,Rs.month=co(function(n){return n=Rs.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),Rs.months=Rs.month.range,Rs.months.utc=Rs.month.utc.range;var ol=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],al=[[Rs.second,1],[Rs.second,5],[Rs.second,15],[Rs.second,30],[Rs.minute,1],[Rs.minute,5],[Rs.minute,15],[Rs.minute,30],[Rs.hour,1],[Rs.hour,3],[Rs.hour,6],[Rs.hour,12],[Rs.day,1],[Rs.day,2],[Rs.week,1],[Rs.month,1],[Rs.month,3],[Rs.year,1]],cl=[[lo("%Y"),Zt],[lo("%B"),function(n){return n.getMonth()}],[lo("%b %d"),function(n){return 1!=n.getDate()}],[lo("%a %d"),function(n){return n.getDay()&&1!=n.getDate()}],[lo("%I %p"),function(n){return n.getHours()}],[lo("%I:%M"),function(n){return n.getMinutes()}],[lo(":%S"),function(n){return n.getSeconds()}],[lo(".%L"),function(n){return n.getMilliseconds()}]],sl=Zo(cl);al.year=Rs.year,Rs.scale=function(){return Yo($o.scale.linear(),al,sl)};var ll={range:function(n,t,e){return $o.range(+n,+t,e).map(Io)}},fl=al.map(function(n){return[n[0].utc,n[1]]}),hl=[[Fo("%Y"),Zt],[Fo("%B"),function(n){return n.getUTCMonth()}],[Fo("%b %d"),function(n){return 1!=n.getUTCDate()}],[Fo("%a %d"),function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],[Fo("%I %p"),function(n){return n.getUTCHours()}],[Fo("%I:%M"),function(n){return n.getUTCMinutes()}],[Fo(":%S"),function(n){return n.getUTCSeconds()}],[Fo(".%L"),function(n){return n.getUTCMilliseconds()}]],gl=Zo(hl);return fl.year=Rs.year.utc,Rs.scale.utc=function(){return Yo($o.scale.linear(),fl,gl)},$o.text=dt(function(n){return n.responseText}),$o.json=function(n,t){return mt(n,"application/json",Vo,t)},$o.html=function(n,t){return mt(n,"text/html",Xo,t)},$o.xml=dt(function(n){return n.responseXML}),$o}();
/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.4
 *
 * Requires: 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = [].slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
        if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

        // At a minimum, setup the deltaY to be delta
        deltaY = delta;

        // Firefox < 17 related to DOMMouseScroll event
        if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaY = 0;
            deltaX = delta * -1;
        }

        // New school wheel delta (wheel event)
        if ( orgEvent.deltaY ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( orgEvent.deltaX ) {
            deltaX = orgEvent.deltaX;
            delta  = deltaX * -1;
        }

        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

        // Get a whole value for the deltas
        fn     = delta > 0 ? 'floor' : 'ceil';
        delta  = Math[fn](delta  / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

}));

/**@license
 *|       __ _____                     ________                              __
 *|      / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /
 *|  __ / // // // // // _  // _// // / / // _  // _//     // //  \/ // _ \/ /
 *| /  / // // // // // ___// / / // / / // ___// / / / / // // /\  // // / /__
 *| \___//____ \\___//____//_/ _\_  / /_//____//_/ /_/ /_//_//_/ /_/ \__\_\___/
 *|           \/              /____/                              version {{VER}}
 * http://terminal.jcubic.pl
 *
 * Licensed under GNU LGPL Version 3 license
 * Copyright (c) 2011-2013 Jakub Jankiewicz <http://jcubic.pl>
 *
 * Includes:
 *
 * Storage plugin Distributed under the MIT License
 * Copyright (c) 2010 Dave Schindler
 *
 * jQuery Timers licenced with the WTFPL
 * <http://jquery.offput.ca/every/>
 *
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 *
 * Date: {{DATE}}
 */


(function($, undefined) {
    //"use strict";
    // -----------------------------------------------------------------------
    // :: map object to object
    // -----------------------------------------------------------------------
    $.omap = function(o, fn) {
        var result = {};
        $.each(o, function(k, v) {
            result[k] = fn.call(o, k, v);
        });
        return result;
    };
    // -----------------------------------------------------------------------
    // :: Storage plugin
    // -----------------------------------------------------------------------
    // Private data
    var isLS = typeof window.localStorage !== 'undefined';
    // Private functions
    function wls(n, v) {
        var c;
        if (typeof n === 'string' && typeof v === 'string') {
            localStorage[n] = v;
            return true;
        } else if (typeof n === 'object' && typeof v === 'undefined') {
            for (c in n) {
                if (n.hasOwnProperty(c)) {
                    localStorage[c] = n[c];
                }
            }
            return true;
        }
        return false;
    }
    function wc(n, v) {
        var dt, e, c;
        dt = new Date();
        dt.setTime(dt.getTime() + 31536000000);
        e = '; expires=' + dt.toGMTString();
        if (typeof n === 'string' && typeof v === 'string') {
            document.cookie = n + '=' + v + e + '; path=/';
            return true;
        } else if (typeof n === 'object' && typeof v === 'undefined') {
            for (c in n) {
                if (n.hasOwnProperty(c)) {
                    document.cookie = c + '=' + n[c] + e + '; path=/';
                }
            }
            return true;
        }
        return false;
    }
    function rls(n) {
        return localStorage[n];
    }
    function rc(n) {
        var nn, ca, i, c;
        nn = n + '=';
        ca = document.cookie.split(';');
        for (i = 0; i < ca.length; i++) {
            c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nn) === 0) {
                return c.substring(nn.length, c.length);
            }
        }
        return null;
    }
    function dls(n) {
        return delete localStorage[n];
    }
    function dc(n) {
        return wc(n, '', -1);
    }
    /**
    * Public API
    * $.Storage.set("name", "value")
    * $.Storage.set({"name1":"value1", "name2":"value2", etc})
    * $.Storage.get("name")
    * $.Storage.remove("name")
    */
    $.extend({
        Storage: {
            set: isLS ? wls : wc,
            get: isLS ? rls : rc,
            remove: isLS ? dls : dc
        }
    });
    // -----------------------------------------------------------------------
    // :: jQuery Timers
    // -----------------------------------------------------------------------
    jQuery.fn.extend({
        everyTime: function(interval, label, fn, times, belay) {
            return this.each(function() {
                jQuery.timer.add(this, interval, label, fn, times, belay);
            });
        },
        oneTime: function(interval, label, fn) {
            return this.each(function() {
                jQuery.timer.add(this, interval, label, fn, 1);
            });
        },
        stopTime: function(label, fn) {
            return this.each(function() {
                jQuery.timer.remove(this, label, fn);
            });
        }
    });

    jQuery.extend({
        timer: {
            guid: 1,
            global: {},
            regex: /^([0-9]+)\s*(.*s)?$/,
            powers: {
                // Yeah this is major overkill...
                'ms': 1,
                'cs': 10,
                'ds': 100,
                's': 1000,
                'das': 10000,
                'hs': 100000,
                'ks': 1000000
            },
            timeParse: function(value) {
                if (value === undefined || value === null) {
                    return null;
                }
                var result = this.regex.exec(jQuery.trim(value.toString()));
                if (result[2]) {
                    var num = parseInt(result[1], 10);
                    var mult = this.powers[result[2]] || 1;
                    return num * mult;
                } else {
                    return value;
                }
            },
            add: function(element, interval, label, fn, times, belay) {
                var counter = 0;

                if (jQuery.isFunction(label)) {
                    if (!times) {
                        times = fn;
                    }
                    fn = label;
                    label = interval;
                }

                interval = jQuery.timer.timeParse(interval);

                if (typeof interval !== 'number' ||
                    isNaN(interval) ||
                    interval <= 0) {
                    return;
                }
                if (times && times.constructor !== Number) {
                    belay = !!times;
                    times = 0;
                }

                times = times || 0;
                belay = belay || false;

                if (!element.$timers) {
                    element.$timers = {};
                }
                if (!element.$timers[label]) {
                    element.$timers[label] = {};
                }
                fn.$timerID = fn.$timerID || this.guid++;

                var handler = function() {
                    if (belay && handler.inProgress) {
                        return;
                    }
                    handler.inProgress = true;
                    if ((++counter > times && times !== 0) ||
                        fn.call(element, counter) === false) {
                        jQuery.timer.remove(element, label, fn);
                    }
                    handler.inProgress = false;
                };

                handler.$timerID = fn.$timerID;

                if (!element.$timers[label][fn.$timerID]) {
                    element.$timers[label][fn.$timerID] = window.setInterval(handler, interval);
                }

                if (!this.global[label]) {
                    this.global[label] = [];
                }
                this.global[label].push(element);

            },
            remove: function(element, label, fn) {
                var timers = element.$timers, ret;

                if (timers) {

                    if (!label) {
                        for (var lab in timers) {
                            if (timers.hasOwnProperty(lab)) {
                                this.remove(element, lab, fn);
                            }
                        }
                    } else if (timers[label]) {
                        if (fn) {
                            if (fn.$timerID) {
                                window.clearInterval(timers[label][fn.$timerID]);
                                delete timers[label][fn.$timerID];
                            }
                        } else {
                            for (var _fn in timers[label]) {
                                if (timers[label].hasOwnProperty(_fn)) {
                                    window.clearInterval(timers[label][_fn]);
                                    delete timers[label][_fn];
                                }
                            }
                        }

                        for (ret in timers[label]) {
                            if (timers[label].hasOwnProperty(ret)) {
                                break;
                            }
                        }
                        if (!ret) {
                            ret = null;
                            delete timers[label];
                        }
                    }

                    for (ret in timers) {
                        if (timers.hasOwnProperty(ret)) {
                            break;
                        }
                    }
                    if (!ret) {
                        element.$timers = null;
                    }
                }
            }
        }
    });

    if (jQuery.browser && jQuery.browser.msie ||
        /(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase())) {
        jQuery(window).one('unload', function() {
            var global = jQuery.timer.global;
            for (var label in global) {
                if (global.hasOwnProperty(label)) {
                    var els = global[label], i = els.length;
                    while (--i) {
                        jQuery.timer.remove(els[i], label);
                    }
                }
            }
        });
    }
    // -----------------------------------------------------------------------
    // :: CROSS BROWSER SPLIT
    // -----------------------------------------------------------------------

    (function(undef) {

        // prevent double include

        if (!String.prototype.split.toString().match(/\[native/)) {
            return;
        }

        var nativeSplit = String.prototype.split,
        compliantExecNpcg = /()??/.exec("")[1] === undef, // NPCG: nonparticipating capturing group
        self;

        self = function (str, separator, limit) {
            // If `separator` is not a regex, use `nativeSplit`
            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return nativeSplit.call(str, separator, limit);
            }
            var output = [],
            flags = (separator.ignoreCase ? "i" : "") +
                (separator.multiline  ? "m" : "") +
                (separator.extended   ? "x" : "") + // Proposed for ES6
                (separator.sticky     ? "y" : ""), // Firefox 3+
                lastLastIndex = 0,
            // Make `global` and avoid `lastIndex` issues by working with a copy
            separator2, match, lastIndex, lastLength;
            separator = new RegExp(separator.source, flags + "g");
            str += ""; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
            }
            /* Values for `limit`, per the spec:
         * If undefined: 4294967295 // Math.pow(2, 32) - 1
         * If 0, Infinity, or NaN: 0
         * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
         * If negative number: 4294967296 - Math.floor(Math.abs(limit))
         * If other: Type-convert, then use the above rules
         */
            // ? Math.pow(2, 32) - 1 : ToUint32(limit)
            limit = limit === undef ? -1 >>> 0 : limit >>> 0;
            while (match = separator.exec(str)) {
                    // `separator.lastIndex` is not reliable cross-browser
                    lastIndex = match.index + match[0].length;
                    if (lastIndex > lastLastIndex) {
                        output.push(str.slice(lastLastIndex, match.index));
                        // Fix browsers whose `exec` methods don't consistently return `undefined` for
                        // nonparticipating capturing groups
                        if (!compliantExecNpcg && match.length > 1) {
                            match[0].replace(separator2, function () {
                                for (var i = 1; i < arguments.length - 2; i++) {
                                    if (arguments[i] === undef) {
                                        match[i] = undef;
                                    }
                                }
                            });
                        }
                        if (match.length > 1 && match.index < str.length) {
                            Array.prototype.push.apply(output, match.slice(1));
                        }
                        lastLength = match[0].length;
                        lastLastIndex = lastIndex;
                        if (output.length >= limit) {
                            break;
                        }
                    }
                    if (separator.lastIndex === match.index) {
                        separator.lastIndex++; // Avoid an infinite loop
                    }
                }
            if (lastLastIndex === str.length) {
                if (lastLength || !separator.test("")) {
                    output.push("");
                }
            } else {
                output.push(str.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };

        // For convenience
        String.prototype.split = function (separator, limit) {
            return self(this, separator, limit);
        };

        return self;

    })();

    // -----------------------------------------------------------------------
    /*
    function decodeHTML(str) {
        if (typeof str === 'string') {
            str = str.replace(/&amp;/g, '&');
            str = str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            str = str.replace(/&#09;/g, '\t');
            str = str.replace(/<br\/?>/g, '\n').replace(/&nbsp;/g, ' ');
            return str;
        } else {
            return '';
        }
    }
    */
    //split string to array of strings with the same length
    // -----------------------------------------------------------------------
    // :: Split String into equal parts
    // -----------------------------------------------------------------------
    function str_parts(str, length) {
        var result = [];
        var len = str.length;
        if (len < length) {
            return [str];
        }
        for (var i = 0; i < len; i += length) {
            result.push(str.substring(i, i + length));
        }
        return result;
    }
    // -----------------------------------------------------------------------
    // :: CYCLE DATA STRUCTURE
    // -----------------------------------------------------------------------
    function Cycle(init) {
        var data = init ? [init] : [];
        var pos = 0;
        $.extend(this, {
            get: function() {
                return data;
            },
            rotate: function() {
                if (data.length === 1) {
                    return data[0];
                } else {
                    if (pos === data.length - 1) {
                        pos = 0;
                    } else {
                        ++pos;
                    }
                    return data[pos];
                }
            },
            length: function() {
                return data.length;
            },
            set: function(item) {
                for (var i = data.length; i--;) {
                    if (data[i] === item) {
                        pos = i;
                        return;
                    }
                }
                this.append(item);
            },
            front: function() {
                return data[pos];
            },
            append: function(item) {
                data.push(item);
            }
        });
    }
    // -----------------------------------------------------------------------
    // :: STACK DATA STRUCTURE
    // -----------------------------------------------------------------------
    function Stack(init) {
        var data = init ? [init] : [];
        $.extend(this, {
            size: function() {
                return data.length;
            },
            pop: function() {
                if (data.length === 0) {
                    return null;
                } else {
                    var value = data[data.length - 1];
                    data = data.slice(0, data.length - 1);
                    return value;
                }
            },
            push: function(value) {
                data = data.concat([value]);
                return value;
            },
            top: function() {
                return data.length > 0 ? data[data.length - 1] : null;
            }
        });
    }
    // -----------------------------------------------------------------------
    // :: Serialize object myself (biwascheme or prototype library do something
    // :: wiked with JSON serialization for Arrays)
    // -----------------------------------------------------------------------
    $.json_stringify = function(object, level) {
        var result = '', i;
        level = level === undefined ? 1 : level;
        var type = typeof object;
        switch (type) {
        case 'function':
            result += object;
            break;
        case 'boolean':
            result += object ? 'true' : 'false';
            break;
        case 'object':
            if (object === null) {
                result += 'null';
            } else if (object instanceof Array) {
                result += '[';
                var len = object.length;
                for (i = 0; i < len - 1; ++i) {
                    result += $.json_stringify(object[i], level + 1);
                }
                result += $.json_stringify(object[len - 1], level + 1) + ']';
            } else {
                result += '{';
                for (var property in object) {
                    if (object.hasOwnProperty(property)) {
                        result += '"' + property + '":' +
                            $.json_stringify(object[property], level + 1);
                    }
                }
                result += '}';
            }
            break;
        case 'string':
            var str = object;
            var repl = {
                '\\\\': '\\\\',
                '"': '\\"',
                '/': '\\/',
                '\\n': '\\n',
                '\\r': '\\r',
                '\\t': '\\t'};
            for (i in repl) {
                if (repl.hasOwnProperty(i)) {
                    str = str.replace(new RegExp(i, 'g'), repl[i]);
                }
            }
            result += '"' + str + '"';
            break;
        case 'number':
            result += String(object);
            break;
        }
        result += (level > 1 ? ',' : '');
        // quick hacks below
        if (level === 1) {
            // fix last comma
            result = result.replace(/,([\]}])/g, '$1');
        }
        // fix comma before array or object
        return result.replace(/([\[{]),/g, '$1');
    };
    // -----------------------------------------------------------------------
    // :: HISTORY CLASS
    // -----------------------------------------------------------------------
    function History(name, size) {
        var enabled = true;
        if (typeof name === 'string' && name !== '') {
            name += '_';
        }
        var data = $.Storage.get(name + 'commands');
        data = data ? new Function('return ' + data + ';')() : [];
        var pos = data.length-1;
        $.extend(this, {
            append: function(item) {
                if (enabled) {
                    if (data[data.length-1] !== item) {
                        data.push(item);
                        pos = data.length-1;
                        if (size && data.length > size) {
                            data = data.slice(-size);
                        }
                        $.Storage.set(name + 'commands', $.json_stringify(data));
                    }
                }
            },
            data: function() {
                return data;
            },
            next: function() {
                if (pos < data.length-1) {
                    ++pos;
                }
                if (pos !== -1) {
                    return data[pos];
                }
            },
            reset: function() {
                pos = data.length-1;
            },
            last: function() {
                return data[length-1];
            },
            end: function() {
                return pos === data.length-1;
            },
            position: function() {
                return pos;
            },
            previous: function() {
                var old = pos;
                if (pos > 0) {
                    --pos;
                }
                if (old !== -1) {
                    return data[old];
                }
            },
            clear: function() {
                data = [];
                this.purge();
            },
            enabled: function() {
                return enabled;
            },
            enable: function() {
                enabled = true;
            },
            purge: function() {
                $.Storage.remove(name + 'commands');
            },
            disable: function() {
                enabled = false;
            }
        });
    }
    // -----------------------------------------------------------------------
    // :: COMMAND LINE PLUGIN
    // -----------------------------------------------------------------------
    $.fn.cmd = function(options) {
        var self = this;
        var maybe_data = self.data('cmd');
        if (maybe_data) {
            return maybe_data;
        }
        self.addClass('cmd');
        self.append('<span class="prompt"></span><span></span>' +
                    '<span class="cursor">&nbsp;</span><span></span>');
        var clip = $('<textarea/>').addClass('clipboard').appendTo(self);
        if (options.width) {
            self.width(options.width);
        }
        var num_chars; // calculates by draw_prompt
        var prompt_len;
        var reverse_search = false;
        var reverse_search_string = '';
        var reverse_search_position = null;
        var backup_prompt;
        var mask = options.mask || false;
        var command = '';
        var position = 0;
        var prompt;
        var enabled = options.enabled;
        var historySize = options.historySize || 60;
        var name, history;
        var cursor = self.find('.cursor');
        // -----------------------------------------------------------------------
        // ::Blinking cursor function
        // -----------------------------------------------------------------------
        function blink(i) {
            cursor.toggleClass('inverted');
        }
        // -----------------------------------------------------------------------
        // :: Set prompt for reverse search
        // -----------------------------------------------------------------------
        function draw_reverse_prompt() {
            prompt = "(reverse-i-search)`" + reverse_search_string + "': ";
            draw_prompt();
        }
        // -----------------------------------------------------------------------
        // :: Disable reverse search
        // -----------------------------------------------------------------------
        function clear_reverse_state() {
            prompt = backup_prompt;
            reverse_search = false;
            reverse_search_position = null;
            reverse_search_string = '';
        }
        // -----------------------------------------------------------------------
        // :: Search through command line history. If next is not defined or false
        // :: it search for first item from the end. If true it search for next item
        // -----------------------------------------------------------------------
        function reverse_history_search(next) {
            var history_data = history.data();
            var regex;
            var len = history_data.length;
            if (next && reverse_search_position > 0) {
                len -= reverse_search_position;
            }
            if (reverse_search_string.length > 0) {
                for (var j=reverse_search_string.length; j>0; j--) {
                    regex = new RegExp('^' + reverse_search_string.substring(0, j));
                    for (var i=len; i--;) {
                        if (regex.test(history_data[i])) {
                            reverse_search_position = history_data.length - i;
                            position = 0;
                            self.set(history_data[i], true);
                            redraw();
                            if (reverse_search_string.length !== j) {
                                reverse_search_string = reverse_search_string.substring(0, j);
                                draw_reverse_prompt();
                            }
                            return;
                        }
                    }
                }
            }
        }
        // -----------------------------------------------------------------------
        // :: Recalculate number of characters in command line
        // -----------------------------------------------------------------------
        function change_num_chars() {
            var W = self.width();
            var w = cursor.innerWidth();
            num_chars = Math.floor(W / w);
        }
        // -----------------------------------------------------------------------
        // :: Return string repeated n times
        // -----------------------------------------------------------------------
        function str_repeat(str, n) {
            var result = '';
            for (var i = n; i--;) {
                result += str;
            }
            return result;
        }
        // -----------------------------------------------------------------------
        // :: Split String that fit into command line where first line need to
        // :: fit next to prompt (need to have less characters)
        // -----------------------------------------------------------------------
        function get_splited_command_line(string) {
            var first = string.substring(0, num_chars - prompt_len);
            var rest = string.substring(num_chars - prompt_len);
            return [first].concat(str_parts(rest, num_chars));
        }
        // -----------------------------------------------------------------------
        // :: Function that display command line. Split long line and place cursor
        // :: in right place
        // -----------------------------------------------------------------------
        var redraw = (function(self) {
            var before = cursor.prev();
            var after = cursor.next();
            // -----------------------------------------------------------------------
            // :: Draw line with the cursor
            // -----------------------------------------------------------------------
            function draw_cursor_line(string, position) {
                var len = string.length;
                if (position === len) {
                    before.html($.terminal.encode(string, true));
                    cursor.html('&nbsp;');
                    after.html('');
                } else if (position === 0) {
                    before.html('');
                    //fix for tilda in IE
                    cursor.html($.terminal.encode(string.slice(0, 1), true));
                    //cursor.html($.terminal.encode(string[0]));
                    after.html($.terminal.encode(string.slice(1), true));
                } else {
                    var before_str = $.terminal.encode(string.slice(0, position), true);
                    before.html(before_str);
                    //fix for tilda in IE
                    var c = string.slice(position, position + 1);
                    //cursor.html(string[position]));
                    cursor.html(c === ' ' ? '&nbsp;' : $.terminal.encode(c, true));
                    if (position === string.length - 1) {
                        after.html('');
                    } else {
                        after.html($.terminal.encode(string.slice(position + 1), true));
                    }
                }
            }
            function div(string) {
                return '<div>' + $.terminal.encode(string, true) + '</div>';
            }
            // -----------------------------------------------------------------------
            // :: Display lines afer cursor
            // -----------------------------------------------------------------------
            function lines_after(lines) {
                var last_ins = after;
                $.each(lines, function(i, line) {
                    last_ins = $(div(line)).insertAfter(last_ins).
                        addClass('clear');
                });
            }
            // -----------------------------------------------------------------------
            // :: Display lines before the cursor
            // -----------------------------------------------------------------------
            function lines_before(lines) {
                $.each(lines, function(i, line) {
                    before.before(div(line));
                });
            }
            var count = 0;
            // -----------------------------------------------------------------------
            // :: Redraw function
            // -----------------------------------------------------------------------
            return function() {
                var string = mask ? command.replace(/./g, '*') : command;
                var i, first_len;
                self.find('div').remove();
                before.html('');
                // long line
                if (string.length > num_chars - prompt_len - 1 ||
                    string.match(/\n/)) {
                    var array;
                    var tabs = string.match(/\t/g);
                    var tabs_rm = tabs ? tabs.length * 3 : 0;
                    //quick tabulation hack
                    if (tabs) {
                        string = string.replace(/\t/g, '\x00\x00\x00\x00');
                    }
                    // command contain new line characters
                    if (string.match(/\n/)) {
                        var tmp = string.split("\n");
                        first_len = num_chars - prompt_len - 1;
                        // empty character after each line
                        for (i=0; i<tmp.length-1; ++i) {
                            tmp[i] += ' ';
                        }
                        // split first line
                        if (tmp[0].length > first_len) {
                            array = [tmp[0].substring(0, first_len)];
                            array = array.concat(str_parts(tmp[0].substring(first_len), num_chars));
                        } else {
                            array = [tmp[0]];
                        }
                        // process rest of the lines
                        for (i=1; i<tmp.length; ++i) {
                            if (tmp[i].length > num_chars) {
                                array = array.concat(str_parts(tmp[i], num_chars));
                            } else {
                                array.push(tmp[i]);
                            }
                        }
                    } else {
                        array = get_splited_command_line(string);
                    }
                    if (tabs) {
                        array = $.map(array, function(line) {
                            return line.replace(/\x00\x00\x00\x00/g, '\t');
                        });
                    }
                    first_len = array[0].length;
                    //cursor in first line
                    if (first_len === 0 && array.length === 1) {
                        // skip empty line
                    } else if (position < first_len) {
                        draw_cursor_line(array[0], position);
                        lines_after(array.slice(1));
                    } else if (position === first_len) {
                        before.before(div(array[0]));
                        draw_cursor_line(array[1], 0);
                        lines_after(array.slice(2));
                    } else {
                        var num_lines = array.length;
                        var offset = 0;
                        if (position < first_len) {
                            draw_cursor_line(array[0], position);
                            lines_after(array.slice(1));
                        } else if (position === first_len) {
                            before.before(div(array[0]));
                            draw_cursor_line(array[1], 0);
                            lines_after(array.slice(2));
                        } else {
                            var last = array.slice(-1)[0];
                            var from_last = string.length - position;
                            var last_len = last.length;
                            var pos = 0;
                            if (from_last <= last_len) {
                                lines_before(array.slice(0, -1));
                                pos = last_len === from_last ? 0 : last_len-from_last;
                                draw_cursor_line(last, pos+tabs_rm);
                            } else {
                                // in the middle
                                if (num_lines === 3) {
                                    before.before('<div>' + $.terminal.encode(array[0], true) +
                                                  '</div>');
                                    draw_cursor_line(array[1], position-first_len-1);
                                    after.after('<div class="clear">' +
                                                $.terminal.encode(array[2], true) +
                                                '</div>');
                                } else {
                                    // more lines, cursor in the middle
                                    var line_index;
                                    var current;
                                    pos = position;
                                    for (i=0; i<array.length; ++i) {
                                        var current_len = array[i].length;
                                        if (pos > current_len) {
                                            pos -= current_len;
                                        } else {
                                            break;
                                        }
                                    }
                                    current = array[i];
                                    line_index = i;
                                    // cursor on first character in line
                                    if (pos === current.length) {
                                        pos = 0;
                                        current = array[++line_index];
                                    }
                                    draw_cursor_line(current, pos);
                                    lines_before(array.slice(0, line_index));
                                    lines_after(array.slice(line_index+1));
                                }
                            }
                        }
                    }
                } else {
                     if (string === '') {
                         before.html('');
                         cursor.html('&nbsp;');
                         after.html('');
                     } else {
                         draw_cursor_line(string, position);
                     }
                }
            };
        })(self);
        var last_command;
        // -----------------------------------------------------------------------
        // :: Draw prompt that can be a function or a string
        // -----------------------------------------------------------------------
        var draw_prompt = (function() {
            var prompt_node = self.find('.prompt');
            function set(prompt) {
                prompt_len = skipFormattingCount(prompt);
                prompt_node.html($.terminal.format($.terminal.encode(prompt)));
            }
            return function() {
                switch (typeof prompt) {
                case 'string':
                    set(prompt);
                    break;
                case 'function':
                    prompt(set);
                    break;
                }
            };
        })();
        // -----------------------------------------------------------------------
        // :: Paste content to terminal using hidden textarea
        // -----------------------------------------------------------------------
        function paste() {
            clip.focus();
            //wait until Browser insert text to textarea
            self.oneTime(1, function() {
                self.insert(clip.val());
                clip.blur().val('');
            });
        }
        var first_up_history = true;
        //var prevent_keypress = false;
        // -----------------------------------------------------------------------
        // :: Keydown Event Handler
        // -----------------------------------------------------------------------
        function keydown_event(e) {
            var result, pos, len;
            if (typeof options.keydown == 'function') {
                result = options.keydown(e);
                if (result !== undefined) {
                    //prevent_keypress = true;
                    return result;
                }
            }
            if (enabled) {
                if (e.which !== 38 &&
                    !(e.which === 80 && e.ctrlKey)) {
                    first_up_history = true;
                }
                // arrows / Home / End / ENTER
                if (reverse_search && (e.which === 35 || e.which === 36 ||
                                       e.which === 37 || e.which === 38 ||
                                       e.which === 39 || e.which === 40 ||
                                       e.which === 13 || e.which === 27)) {
                    clear_reverse_state();
                    draw_prompt();
                    if (e.which === 27) { // ESC
                        command = '';
                    }
                    redraw();
                    // finish reverse search and execute normal event handler
                    keydown_event.call(this, e);
                } else if (e.altKey) {
                    // Chrome on Windows set ctrlKey and altKey for alt
                    // need to check for alt first
                    //if (e.which === 18) { // press ALT
                    if (e.which === 68) { //ALT+D
                        self.set(command.slice(0, position) +
                                 command.slice(position).replace(/[^ ]+ |[^ ]+$/, ''),
                                 true);
                        // chrome jump to address bar
                        return false;
                    }
                    return true;
                } else if (e.keyCode === 13) { //enter
                    if ((history && command) &&
                        ((options.historyFilter &&
                         options.historyFilter(command)) ||
                         !options.historyFilter)) {
                        history.append(command);
                    }
                    var tmp = command;
                    history.reset();
                    self.set('');
                    if (options.commands) {
                        options.commands(tmp);
                    }
                    if (typeof prompt === 'function') {
                        draw_prompt();
                    }
                } else if (e.which === 8) { //backspace
                    if (reverse_search) {
                        reverse_search_string = reverse_search_string.slice(0, -1);
                        draw_reverse_prompt();
                    } else {
                        if (command !== '' && position > 0) {
                            command = command.slice(0, position - 1) +
                                command.slice(position, command.length);
                            --position;
                            redraw();
                        }
                    }
                } else if (e.which === 9 && !(e.ctrlKey || e.altKey)) { // TAB
                    self.insert('\t');
                } else if (e.which === 46) {
                    //DELETE
                    if (command !== '' && position < command.length) {
                        command = command.slice(0, position) +
                            command.slice(position + 1, command.length);
                        redraw();
                    }
                    return true;
                } else if (history && e.which === 38 ||
                           (e.which === 80 && e.ctrlKey)) {
                    //UP ARROW or CTRL+P
                    if (first_up_history) {
                        last_command = command;
                    }
                    first_up_history = false;
                    self.set(history.previous());
                } else if (history && e.which === 40 ||
                           (e.which === 78 && e.ctrlKey)) {
                    //DOWN ARROW or CTRL+N
                    self.set(history.end() ? last_command : history.next());
                } else if (e.which === 37 ||
                           (e.which === 66 && e.ctrlKey)) {
                    //CTRL+LEFT ARROW or CTRL+B
                    if (e.ctrlKey && e.which !== 66) {
                        len = position - 1;
                        pos = 0;
                        if (command[len] === ' ') {
                            --len;
                        }
                        for (var i = len; i > 0; --i) {
                            if (command[i] === ' ' && command[i+1] !== ' ') {
                                pos = i + 1;
                                break;
                            } else if (command[i] === '\n' && command[i+1] !== '\n') {
                                pos = i;
                                break;
                            }
                        }
                        self.position(pos);
                    } else {
                        //LEFT ARROW or CTRL+B
                        if (position > 0) {
                            --position;
                            redraw();
                        }
                    }
                } else if (e.which === 82 && e.ctrlKey) { // CTRL+R
                    if (reverse_search) {
                        reverse_history_search(true);
                    } else {
                        backup_prompt = prompt;
                        draw_reverse_prompt();
                        last_command = command;
                        command = '';
                        redraw();
                        reverse_search = true;
                    }
                } else if (e.which == 71 && e.ctrlKey) { // CTRL+G
                    if (reverse_search) {
                        prompt = backup_prompt;
                        draw_prompt();
                        command = last_command;
                        redraw();
                        reverse_search = false;
                    }
                } else if (e.which === 39 ||
                           (e.which === 70 && e.ctrlKey)) {
                    //RIGHT ARROW OR CTRL+F
                    if (e.ctrlKey && e.which !== 70) {
                        // jump to beginig or end of the word
                        if (command[position] === ' ') {
                            ++position;
                        }
                        var match = command.slice(position).match(/\S[\n\s]{2,}|[\n\s]+\S?/);
                        if (!match || match[0].match(/^\s+$/)) {
                            position = command.length;
                        } else {
                            if (match[0][0] !== ' ') {
                                position += match.index + 1;
                            } else {
                                position += match.index + match[0].length - 1;
                                if (match[0][match[0].length-1] !== ' ') {
                                    --position;
                                }
                            }
                        }
                        redraw();
                    } else {
                        if (position < command.length) {
                            ++position;
                            redraw();
                        }
                    }
                } else if (e.which === 123) { //F12 - Allow Firebug
                    return true;
                } else if (e.which === 36) { //HOME
                    self.position(0);
                } else if (e.which === 35) {
                    //END
                    self.position(command.length);
                } else if (e.shiftKey && e.which == 45) { // Shift+Insert
                    paste();
                    return true;
                } else if (e.ctrlKey || e.metaKey) {
                    if (e.which === 192) { // CMD+` switch browser window on Mac
                        return true;
                    }
                    if (e.metaKey) {
                        if(e.which === 82) { // CMD+r page reload in Chrome Mac
                            return true;
                        } else if(e.which === 76) {
                            return true; // CMD+l jump into Ominbox on Chrome Mac
                        }
                    }
                    if (e.shiftKey) { // CTRL+SHIFT+??
                        if (e.which === 84) {
                            //CTRL+SHIFT+T open closed tab
                            return true;
                        }
                    //} else if (e.altKey) { //ALT+CTRL+??
                    } else {
                        if (e.which === 87) { // CTRL+W
                            if (command !== '') {
                                var first = command.slice(0, position);
                                var last = command.slice(position+1);
                                var m = first.match(/([^ ]+ *$)/);
                                position = first.length-m[0].length;
                                command = first.slice(0, position) + last;
                                redraw();
                            }
                            return false;
                        } else if (e.which === 72) { // CTRL+H
                            if (command !== '' && position > 0) {
                                command = command.slice(0, --position);
                                if (position < command.length-1) {
                                    command += command.slice(position);
                                }
                                redraw();
                            }
                            return false;
                        //NOTE: in opera charCode is undefined
                        } else if (e.which === 65) {
                            //CTRL+A
                            self.position(0);
                        } else if (e.which === 69) {
                            //CTRL+E
                            self.position(command.length);
                        } else if (e.which === 88 || e.which === 67 || e.which === 84) {
                            //CTRL+X CTRL+C CTRL+W CTRL+T
                            return true;
                        } else if (e.which === 86) {
                            //CTRL+V
                            paste();
                            return true;
                        } else if (e.which === 75) {
                            //CTRL+K
                            if (position === 0) {
                                self.set('');
                            } else if (position !== command.length) {
                                self.set(command.slice(0, position));
                            }
                        } else if (e.which === 85) { // CTRL+U
                            self.set(command.slice(position, command.length));
                            self.position(0);
                        } else if (e.which === 17) { //CTRL+TAB switch tab
                            return false;
                        }
                    }
                } else {
                    return true;
                }
                return false;
            } /*else {
                if ((e.altKey && e.which === 68) ||
                    (e.ctrlKey &&
                     $.inArray(e.which, [65, 66, 68, 69, 80, 78, 70]) > -1) ||
                    // 68 === D
                    [35, 36, 37, 38, 39, 40].has(e.which)) {
                    return false;
                }
            } */
        }
        var history_list = [];
        // -----------------------------------------------------------------------
        // :: Command Line Methods
        // -----------------------------------------------------------------------
        $.extend(self, {
            name: function(string) {
                if (string !== undefined) {
                    name = string;
                    history = new History(string, historySize);
                    // disable new history if old was disabled
                    var len = history_list.length;
                    if (len && !history_list[len-1].enabled()) {
                        history.disable();
                    }
                    history_list.push(history);
                    return self;
                } else {
                    return name;
                }
            },
            purge: function() {
                for (var i=history_list.length; i--;) {
                    history_list[i].purge();
                }
                history_list = [];
                return self;
            },
            history: function() {
                return history;
            },
            set: function(string, stay) {
                if (string !== undefined) {
                    command = string;
                    if (!stay) {
                        position = command.length;
                    }
                    redraw();
                    if (typeof options.onCommandChange === 'function') {
                        options.onCommandChange(command);
                    }
                }
                return self;
            },
            insert: function(string, stay) {
                if (position === command.length) {
                    command += string;
                } else if (position === 0) {
                    command = string + command;
                } else {
                    command = command.slice(0, position) +
                        string + command.slice(position);
                }
                if (!stay) {
                    position += string.length;
                }
                redraw();
                if (typeof options.onCommandChange === 'function') {
                    options.onCommandChange(command);
                }
                return self;
            },
            get: function() {
                return command;
            },
            commands: function(commands) {
                if (commands) {
                    options.commands = commands;
                    return self;
                } else {
                    return commands;
                }
            },
            destroy: function() {
                $(document.documentElement || window).unbind('.cmd');
                self.stopTime('blink', blink);
                self.find('.cursor').next().remove().end().prev().remove().end().remove();
                self.find('.prompt, .clipboard').remove();
                self.removeClass('cmd').removeData('cmd');
                return self;
            },
            prompt: function(user_prompt) {
                if (user_prompt === undefined) {
                    return prompt;
                } else {
                    if (typeof user_prompt === 'string' ||
                        typeof user_prompt === 'function') {
                        prompt = user_prompt;
                    } else {
                        throw 'prompt must be a function or string';
                    }
                    draw_prompt();
                    // we could check if command is longer then numchars-new prompt
                    redraw();
                    return self;
                }
            },
            position: function(n) {
                if (typeof n === 'number') {
                    position = n < 0 ? 0 : n > command.length ? command.length : n;
                    redraw();
                    return self;
                } else {
                    return position;
                }
            },
            visible: (function() {
                var visible = self.visible;
                return function() {
                    visible.apply(self, []);
                    redraw();
                    draw_prompt();
                };
            })(),
            show: (function() {
                var show = self.show;
                return function() {
                    show.apply(self, []);
                    redraw();
                    draw_prompt();
                };
            })(),
            resize: function(num) {
                if (num) {
                    num_chars = num;
                } else {
                    change_num_chars();
                }
                redraw();
                return self;
            },
            enable: function() {
                if (!enabled) {
                    cursor.addClass('inverted');
                    self.everyTime(500, 'blink', blink);
                    enabled = true;
                }
                return self;
            },
            isenabled: function() {
                return enabled;
            },
            disable: function() {
                if (enabled) {
                    self.stopTime('blink', blink);
                    cursor.removeClass('inverted');
                    enabled = false;
                }
                return self;
            },
            mask: function(display) {
                if (typeof display === 'boolean') {
                    mask = display;
                    redraw();
                    return self;
                } else {
                    return mask;
                }
            }
        });
        // -----------------------------------------------------------------------
        // :: INIT
        // -----------------------------------------------------------------------
        self.name(options.name || options.prompt || '');
        prompt = options.prompt || '> ';
        draw_prompt();
        if (options.enabled === undefined || options.enabled === true) {
            self.enable();
        }
        // Keystrokes
        var object;
        $(document.documentElement || window).bind('keypress.cmd', function(e) {
            var result;
            if (e.ctrlKey && e.which === 99) { // CTRL+C
                return true;
            }
            if (!reverse_search && typeof options.keypress === 'function') {
                result = options.keypress(e);
            }
            if (result === undefined || result) {
                if (enabled) {
                    if ($.inArray(e.which, [38, 13, 0, 8]) > -1 &&
                        e.keyCode !== 123 && // for F12 which === 0
                        //!(e.which === 40 && e.shiftKey ||
                        !(e.which === 38 && e.shiftKey)) {
                        return false;
                    } else if (!e.ctrlKey && !(e.altKey && e.which === 100) || e.altKey) { // ALT+D
                        // TODO: this should be in one statement
                        if (reverse_search) {
                            reverse_search_string += String.fromCharCode(e.which);
                            reverse_history_search();
                            draw_reverse_prompt();
                        } else {
                            self.insert(String.fromCharCode(e.which));
                        }
                        return false;
                    }
                }
            } else {
                return result;
            }
        }).bind('keydown.cmd', keydown_event);
        // characters
        self.data('cmd', self);
        return self;
    };

    // -------------------------------------------------------------------------
    // :: TOOLS
    // -------------------------------------------------------------------------
    function skipFormattingCount(string) {
        // this will covert html entities to single characters
        return $('<div>' + $.terminal.strip(string) + '</div>').text().length;
    }
    // -------------------------------------------------------------------------
    function formattingCount(string) {
        return string.length - skipFormattingCount(string);
    }
    // -------------------------------------------------------------------------
    function processCommand(string, fn) {
        var args = string.split(/(\s+)/);
        return {
            name: args[0],
            args: fn(args.slice(2).join(''))
        };
    }
    // -------------------------------------------------------------------------
    var format_split_re = /(\[\[[gbiuso]*;[^;]*;[^\]]*\](?:[^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?)/;
    var format_parts_re = /\[\[([gbiuso]*);([^;]*);([^;\]]*);?([^;\]]*);?([^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/g;
    var format_re = /\[\[([gbiuso]*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^\[]*\[[^\]]*)\]?/gi;
    var color_hex_re = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/;
    var url_re = /https?:\/\/(?:(?!&[^;]+;)[^\s:"'<>)])+/g;
    var email_re = /((([^<>('")[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/g;
    var command_re = /('[^']*'|"(\\"|[^"])*"|\/(\\\/|[^\/])*\/|(\\ |[^ ])+|[\w-]+)/g;
    var format_begin_re = /(\[\[[gbiuso]*;[^;]*;[^\]]*\])/;
    var format_last_re = /\[\[[gbiuso]*;[^;]*;[^\]]*\]?$/;
    $.terminal = {
        // -----------------------------------------------------------------------
        // :: split text into lines with equal length so each line can be renderd
        // :: separatly (text formating can be longer then a line).
        // -----------------------------------------------------------------------
        split_equal: function(str, length) {
            var formatting = false;
            var in_text = false;
            var braket = 0;
            var prev_format = '';
            var result = [];
            var array = str.replace(format_re, function(_, format, text) {
                var semicolons = format.match(/;/g).length;
                // missing semicolons
                if (semicolons == 2) {
                    semicolons = ';;';
                } else if (semicolons == 3) {
                    semicolons = ';';
                } else {
                    semicolons = '';
                }
                //return '[[' + format + ']' + text + ']';
                // closing braket will break formatting
                return '[[' + format + semicolons +
                    text.replace(/\\\]/g, '&#93;').replace(/\n/g, '\\n') + ']' +
                    text + ']';
            }).split(/\n/g);
            for (var i = 0, len = array.length; i < len; ++i) {
                if (array[i] === '') {
                    result.push('');
                    continue;
                }
                var line = array[i];
                var first_index = 0;
                var count = 0;
                for (var j=0, jlen=line.length; j<jlen; ++j) {
                    if (line[j] === '[' && line[j+1] === '[') {
                        formatting = true;
                    } else if (formatting && line[j] === ']') {
                        if (in_text) {
                            formatting = false;
                            in_text = false;
                        } else {
                            in_text = true;
                        }
                    } else if ((formatting && in_text) || !formatting) {
                        if (line[j] === '&') { // treat entity as one character
                            var m = line.substring(j).match(/^(&[^;]+;)/);
                            if (!m) {
                                // should never happen if used by terminal, because
                                // it always call $.terminal.encode before this function
                                throw "Unclosed html entity in line " + (i+1) + ' at char ' + (j+1);
                            }
                            j+=m[1].length-2; // because contine add 1 to j
                            // if entity is at the end there is no next loop - issue #77
                            if (j === jlen-1) {
                                result.push(output_line + m[1]);
                            }
                            continue;
                        } else if (line[j] === ']' && line[j-1] === '\\') {
                            // escape \] count as one character
                            --count;
                        } else {
                            ++count;
                        }
                    }
                    if (count === length || j === jlen-1) {
                        var output_line = line.substring(first_index, j+1);
                        if (prev_format) {
                            output_line = prev_format + output_line;
                            if (output_line.match(']')) {
                                prev_format = '';
                            }
                        }
                        first_index = j+1;
                        count = 0;
                        var matched = output_line.match(format_re);
                        if (matched) {
                            var last = matched[matched.length-1];
                            if (last[last.length-1] !== ']') {
                                prev_format = last.match(format_begin_re)[1];
                                output_line += ']';
                            } else if (output_line.match(format_last_re)) {
                                var line_len = output_line.length;
                                var f_len = line_len - last[last.length-1].length;
                                output_line = output_line.replace(format_last_re, '');
                                prev_format = last.match(format_begin_re)[1];
                            }
                        }
                        result.push(output_line);
                    }
                }
            }
            return result;
        },
        // -----------------------------------------------------------------------
        // :: Encode formating as html for inser into DOM
        // -----------------------------------------------------------------------
        encode: function(str, full) {
            // don't escape entities
            if (full) {
                str = str.replace(/&(?![^=]+=)/g, '&amp;');
            } else {
                str = str.replace(/&(?!#[0-9]+;|[a-zA-Z]+;|[^= "]+=[^=])/g, '&amp;');
            }
            return str.replace(/</g, '&lt;').replace(/>/g, '&gt;')
                      .replace(/ /g, '&nbsp;')
                      .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        },
        // -----------------------------------------------------------------------
        // :: Replace terminal formatting with html
        // -----------------------------------------------------------------------
        format: function(str, options) {
            var settings = $.extend({}, {
                linksNoReferrer: false
            }, options || {});
            if (typeof str === 'string') {
                //support for formating foo[[u;;]bar]baz[[b;#fff;]quux]zzz
                var splited = str.split(format_split_re);
                if (splited && splited.length > 1) {
                    str = $.map(splited, function(text) {
                        if (text === '') {
                            return text;
                        } else if (text.substring(0,1) === '[') {
                            // use substring for IE quirks mode - [0] don't work
                            return text.replace(format_parts_re, function(s,
                                                                    style,
                                                                    color,
                                                                    background,
                                                                    _class,
                                                                    data_text,
                                                                    text) {
                                if (text === '') {
                                    return ''; //'<span>&nbsp;</span>';
                                }
                                text = text.replace(/\\]/g, ']');
                                var style_str = '';
                                if (style.indexOf('b') !== -1) {
                                    style_str += 'font-weight:bold;';
                                }
                                var text_decoration = [];
                                if (style.indexOf('u') !== -1) {
                                    text_decoration.push('underline');
                                }
                                if (style.indexOf('s') !== -1) {
                                    text_decoration.push('line-through');
                                }
                                if (style.indexOf('o') !== -1) {
                                    text_decoration.push('overline');
                                }
                                if (text_decoration.length) {
                                    style_str += 'text-decoration:' + text_decoration.join(' ') + ';';
                                }
                                if (style.indexOf('i') !== -1) {
                                    style_str += 'font-style:italic;';
                                }
                                if (color.match(color_hex_re)) {
                                    style_str += 'color:' + color + ';';
                                    if (style.indexOf('g') !== -1) {
                                        style_str += 'text-shadow:0 0 5px ' + color + ';';
                                    }
                                }
                                if (background.match(color_hex_re)) {
                                    style_str += 'background-color:' + background;
                                }
                                var result = '<span style="' + style_str + '"' + (_class !== '' ? ' class="' + _class + '"' : '') + ' data-text="'+ (data_text==='' ? text : data_text.replace(/&#93;/g, ']')).replace('"', '&quote;') + '">' + text + '</span>';
                                return result;
                            });
                        } else {
                            return '<span>' + text + '</span>';
                        }
                    }).join('');
                }
                return $.map(str.split(/(<\/?span[^>]*>)/g), function(string) {
                    if (!string.match(/span/)) {
                        return string.replace(url_re, function(link) {
                            var comma = link.match(/\.$/);
                            link = link.replace(/\.$/, '');
                            return '<a target="_blank" ' +
                                (settings.linksNoReferer ? ' rel="noreferrer" ' : '') +
                                'href="' + link + '">' + link + '</a>' +
                                (comma ? '.' : '');
                        }).replace(email_re, '<a href="mailto:$1">$1</a>');
                    } else {
                        return string;
                    }
                }).join('').replace(/<span><br\/?><\/span>/g, '<br/>');
            } else {
                return '';
            }
        },
        // -----------------------------------------------------------------------
        // :: Replace brackets with html entities
        // -----------------------------------------------------------------------
        escape_brackets: function(string) {
            return string.replace(/\[/g, '&#91;').replace(/\]/g, '&#93;');
        },
        // -----------------------------------------------------------------------
        // :: Remove formatting from text
        // -----------------------------------------------------------------------
        strip: function(str) {
            return str.replace(format_parts_re, '$6');
        },
        // -----------------------------------------------------------------------
        // :: Return active terminal
        // -----------------------------------------------------------------------
        active: function() {
            return terminals.front();
        },
        // -----------------------------------------------------------------------
        // :: Replace ntroff (from man) formatting with terminal formatting
        // -----------------------------------------------------------------------
        from_ntroff: function(string) {
            return string.replace(/((?:_\x08.|.\x08_)+)/g, function(full, g) {
                return '[[u;;]' + full.replace(/_x08|\x08_|_\u0008|\u0008_/g, '') + ']';
            }).replace(/((?:.\x08.)+)/g, function(full, g) {
                return '[[b;#fff;]' + full.replace(/(.)(?:\x08|\u0008)(.)/g,
                                                   function(full, g1, g2) {
                                                       return g2;
                                                   }) + ']';
            });
        },
        // -----------------------------------------------------------------------
        // :: Html colors taken from ANSI formatting in Linux Terminal
        // -----------------------------------------------------------------------
        ansi_colors: {
            normal: {
                black: '#000',
                red: '#A00',
                green: '#008400',
                yellow: '#A50',
                blue: '#00A',
                magenta: '#A0A',
                cyan: '#0AA',
                white: '#AAA'
            },
            faited: {
                black: '#000',
                red: '#640000',
                green: '#006100',
                yellow: '#737300',
                blue: '#000087',
                magenta: '#650065',
                cyan: '#008787',
                white: '#818181'
            },
            bold: {
                black: '#000',
                red: '#F55',
                green: '#44D544',
                yellow: '#FF5',
                blue: '#55F',
                magenta: '#F5F',
                cyan: '#5FF',
                white: '#FFF'
            },
            // XTerm 8-bit pallete
            palette: [
                '#000000', '#AA0000', '#00AA00', '#AA5500', '#0000AA',
                '#AA00AA', '#00AAAA', '#AAAAAA', '#555555', '#FF5555',
                '#55FF55', '#FFFF55', '#5555FF', '#FF55FF', '#55FFFF',
                '#FFFFFF', '#000000', '#00005F', '#000087', '#0000AF',
                '#0000D7', '#0000FF', '#005F00', '#005F5F', '#005F87',
                '#005FAF', '#005FD7', '#005FFF', '#008700', '#00875F',
                '#008787', '#0087AF', '#0087D7', '#00AF00', '#00AF5F',
                '#00AF87', '#00AFAF', '#00AFD7', '#00AFFF', '#00D700',
                '#00D75F', '#00D787', '#00D7AF', '#00D7D7', '#00D7FF',
                '#00FF00', '#00FF5F', '#00FF87', '#00FFAF', '#00FFD7',
                '#00FFFF', '#5F0000', '#5F005F', '#5F0087', '#5F00AF',
                '#5F00D7', '#5F00FF', '#5F5F00', '#5F5F5F', '#5F5F87',
                '#5F5FAF', '#5F5FD7', '#5F5FFF', '#5F8700', '#5F875F',
                '#5F8787', '#5F87AF', '#5F87D7', '#5F87FF', '#5FAF00',
                '#5FAF5F', '#5FAF87', '#5FAFAF', '#5FAFD7', '#5FAFFF',
                '#5FD700', '#5FD75F', '#5FD787', '#5FD7AF', '#5FD7D7',
                '#5FD7FF', '#5FFF00', '#5FFF5F', '#5FFF87', '#5FFFAF',
                '#5FFFD7', '#5FFFFF', '#870000', '#87005F', '#870087',
                '#8700AF', '#8700D7', '#8700FF', '#875F00', '#875F5F',
                '#875F87', '#875FAF', '#875FD7', '#875FFF', '#878700',
                '#87875F', '#878787', '#8787AF', '#8787D7', '#8787FF',
                '#87AF00', '#87AF5F', '#87AF87', '#87AFAF', '#87AFD7',
                '#87AFFF', '#87D700', '#87D75F', '#87D787', '#87D7AF',
                '#87D7D7', '#87D7FF', '#87FF00', '#87FF5F', '#87FF87',
                '#87FFAF', '#87FFD7', '#87FFFF', '#AF0000', '#AF005F',
                '#AF0087', '#AF00AF', '#AF00D7', '#AF00FF', '#AF5F00',
                '#AF5F5F', '#AF5F87', '#AF5FAF', '#AF5FD7', '#AF5FFF',
                '#AF8700', '#AF875F', '#AF8787', '#AF87AF', '#AF87D7',
                '#AF87FF', '#AFAF00', '#AFAF5F', '#AFAF87', '#AFAFAF',
                '#AFAFD7', '#AFAFFF', '#AFD700', '#AFD75F', '#AFD787',
                '#AFD7AF', '#AFD7D7', '#AFD7FF', '#AFFF00', '#AFFF5F',
                '#AFFF87', '#AFFFAF', '#AFFFD7', '#AFFFFF', '#D70000',
                '#D7005F', '#D70087', '#D700AF', '#D700D7', '#D700FF',
                '#D75F00', '#D75F5F', '#D75F87', '#D75FAF', '#D75FD7',
                '#D75FFF', '#D78700', '#D7875F', '#D78787', '#D787AF',
                '#D787D7', '#D787FF', '#D7AF00', '#D7AF5F', '#D7AF87',
                '#D7AFAF', '#D7AFD7', '#D7AFFF', '#D7D700', '#D7D75F',
                '#D7D787', '#D7D7AF', '#D7D7D7', '#D7D7FF', '#D7FF00',
                '#D7FF5F', '#D7FF87', '#D7FFAF', '#D7FFD7', '#D7FFFF',
                '#FF0000', '#FF005F', '#FF0087', '#FF00AF', '#FF00D7',
                '#FF00FF', '#FF5F00', '#FF5F5F', '#FF5F87', '#FF5FAF',
                '#FF5FD7', '#FF5FFF', '#FF8700', '#FF875F', '#FF8787',
                '#FF87AF', '#FF87D7', '#FF87FF', '#FFAF00', '#FFAF5F',
                '#FFAF87', '#FFAFAF', '#FFAFD7', '#FFAFFF', '#FFD700',
                '#FFD75F', '#FFD787', '#FFD7AF', '#FFD7D7', '#FFD7FF',
                '#FFFF00', '#FFFF5F', '#FFFF87', '#FFFFAF', '#FFFFD7',
                '#FFFFFF', '#080808', '#121212', '#1C1C1C', '#262626',
                '#303030', '#3A3A3A', '#444444', '#4E4E4E', '#585858',
                '#626262', '#6C6C6C', '#767676', '#808080', '#8A8A8A',
                '#949494', '#9E9E9E', '#A8A8A8', '#B2B2B2', '#BCBCBC',
                '#C6C6C6', '#D0D0D0', '#DADADA', '#E4E4E4', '#EEEEEE'
            ]
        },
        // -----------------------------------------------------------------------
        // :: Replace ANSI formatting with terminal formatting
        // -----------------------------------------------------------------------
        from_ansi: (function() {
            var color = {
                30: 'black',
                31: 'red',
                32: 'green',
                33: 'yellow',
                34: 'blue',
                35: 'magenta',
                36: 'cyan',
                37: 'white',

                39: 'white' // default color
            };
            var background = {
                40: 'black',
                41: 'red',
                42: 'green',
                43: 'yellow',
                44: 'blue',
                45: 'magenta',
                46: 'cyan',
                47: 'white',

                49: 'black' // default background
            };
            function format_ansi(code) {
                var controls = code.split(';');
                var num;
                var faited = false;
                var reverse = false;
                var bold = false;
                var styles = [];
                var output_color = '';
                var output_background = '';
                var _8bit_color = false;
                var _8bit_background = false;
                var process_8bit = false;
                var palette = $.terminal.ansi_colors.palette;
                for(var i in controls) {
                    num = parseInt(controls[i], 10);
                    switch(num) {
                    case 1:
                        styles.push('b');
                        bold = true;
                        faited = false;
                        break;
                    case 4:
                        styles.push('u');
                        break;
                    case 3:
                        styles.push('i');
                        break;
                    case 5:
                        process_8bit = true;
                        break;
                    case 38:
                        _8bit_color = true;
                        break;
                    case 48:
                        _8bit_background = true;
                        break;
                    case 2:
                        faited = true;
                        bold = false;
                        break;
                    case 7:
                        reverse = true;
                        break;
                    default:
                        if (_8bit_color && process_8bit && palette[num-1]) {
                            output_color = palette[num-1];
                        } else if (color[num]) {
                            output_color = color[num];
                        }
                        if (_8bit_background && process_8bit && palette[num-1]) {
                            output_background = palette[num-1];
                        } else if (background[num]) {
                            output_background = background[num];
                        }
                    }
                    if (num !== 5) {
                        process_8bit = false;
                    }
                }
                if (reverse) {
                    if (output_color && output_background) {
                        var tmp = output_background;
                        output_background = output_color;
                        output_color = tmp;
                    } else {
                        output_color = 'black';
                        output_background = 'white';
                    }
                }
                var colors, backgrounds;
                if (bold) {
                    colors = backgrounds = $.terminal.ansi_colors.bold;
                } else if (faited) {
                    colors = backgrounds = $.terminal.ansi_colors.faited;
                } else {
                    colors = backgrounds = $.terminal.ansi_colors.normal;
                }
                return [styles.join(''),
                        _8bit_color ? output_color : colors[output_color],
                        _8bit_background ? output_background : backgrounds[output_background]
                       ];
            }
            return function(input) {
                var splitted = input.split(/(\x1B\[[0-9;]*[A-Za-z])/g);
                if (splitted.length == 1) {
                    return input;
                }
                var output = [];
                //skip closing at the begining
                if (splitted.length > 3 && splitted.slice(0,3).join('') == '[0m') {
                    splitted = splitted.slice(3);
                }
                var inside = false, next, prev_color, prev_background, code, match;
                for (var i=0; i<splitted.length; ++i) {
                    match = splitted[i].match(/^\x1B\[([0-9;]*)([A-Za-z])$/);
                    if (match) {
                        switch (match[2]) {
                        case 'm':
                            if (match[1] === '') {
                                continue;
                            }
                            if (match[1] !== '0') {
                                code = format_ansi(match[1]);
                            } else {
                                code = ['', ''];
                            }
                            if (inside) {
                                output.push(']');
                                if (match[1] == '0') {
                                    //just closing
                                    inside = false;
                                    prev_color = prev_background = '';
                                } else {
                                    // someone forget to close - move to next
                                    code[1] = code[1] || prev_color;
                                    code[2] = code[2] || prev_background;
                                    output.push('[[' + code.join(';') + ']');
                                    // store colors to next use
                                    if (code[1]) {
                                        prev_color = code[1];
                                    }
                                    if (code[2]) {
                                        prev_background = code[2];
                                    }
                                }
                            } else {
                                inside = true;
                                output.push('[[' + code.join(';') + ']');
                                // store colors to next use
                                if (code[1]) {
                                    prev_color = code[1];
                                }
                                if (code[2]) {
                                    prev_background = code[2];
                                }
                            }
                            break;
                        }
                    } else {
                        output.push(splitted[i]);
                    }
                }
                if (inside) {
                    output.push(']');
                }
                return output.join(''); //.replace(/\[\[[^\]]+\]\]/g, '');
            };
        })(),
        // -----------------------------------------------------------------------
        // :: Function split arguments and work with string like
        // :: 'asd' 'asd\' asd' "asd asd" asd\ 123 -n -b / [^ ]+ / /\s+/ asd\ asd
        // :: it create regex and numbers and replace escape characters in double
        // :: quotes
        // -----------------------------------------------------------------------
        parseArguments: function(string) {
            return $.map(string.match(command_re) || [], function(arg) {
                if (arg[0] === "'" && arg[arg.length-1] === "'") {
                    return arg.replace(/^'|'$/g, '');
                } else if (arg[0] === '"' && arg[arg.length-1] === '"') {
                    arg = arg.replace(/^"|"$/g, '').replace(/\\([" ])/g, '$1');
                    return arg.replace(/\\\\|\\t|\\n/g, function(string) {
                        if (string[1] === 't') {
                            return '\t';
                        } else if (string[1] === 'n') {
                            return '\n';
                        } else {
                            return '\\';
                        }
                    }).replace(/\\x([0-9a-f]+)/gi, function(_, hex) {
                        return String.fromCharCode(parseInt(hex, 16));
                    }).replace(/\\0([0-7]+)/g, function(_, oct) {
                        return String.fromCharCode(parseInt(oct, 8));
                    });
                } else if (arg[0] === '/' && arg[arg.length-1] == '/') {
                    return new RegExp(arg.replace(/^\/|\/$/g, ''));
                } else if (arg.match(/^-?[0-9]+$/)) {
                    return parseInt(arg, 10);
                } else if (arg.match(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/)) {
                    return parseFloat(arg);
                } else {
                    return arg.replace(/\\ /g, ' ');
                }
            });
        },
        // -----------------------------------------------------------------------
        // :: Split arguments it only strip single and double quotes and escape space
        // -----------------------------------------------------------------------
        splitArguments: function(string) {
            return $.map(string.match(command_re) || [], function(arg) {
                if (arg[0] === "'" && arg[arg.length-1] === "'") {
                    return arg.replace(/^'|'$/g, '');
                } else if (arg[0] === '"' && arg[arg.length-1] === '"') {
                    return arg.replace(/^"|"$/g, '').replace(/\\([" ])/g, '$1');
                } else if (arg[0] === '/' && arg[arg.length-1] == '/') {
                    return arg;
                } else {
                    return arg.replace(/\\ /g, ' ');
                }
            });
        },
        // -----------------------------------------------------------------------
        // :: Function that return object {name,args} arguments are parsed using
        // :: parseArguments function
        // -----------------------------------------------------------------------
        parseCommand: function(string) {
            return processCommand(string, $.terminal.parseArguments);
        },
        // -----------------------------------------------------------------------
        // :: Same parseCommand but arguments are parsed using splitArguments
        // -----------------------------------------------------------------------
        splitCommand: function(string) {
            return processCommand(string, $.terminal.splitArguments);
        },
        // -----------------------------------------------------------------------
        // :: Test $.terminal functions using terminal
        // -----------------------------------------------------------------------
        test: function() {
            var term = $.terminal.active();
            if (!term) {
                term = $('body').terminal($.noop).css('margin', 0);
                var margin = term.outerHeight() - term.height();
                var $win = $(window);
                function size() {
                    term.css('height', $(window).height()-20);
                }
                $win.resize(size).resize();
            }
            term.echo('Testing...');
            function assert(cond, msg) {
                term.echo(msg + ' &#91;' + (cond ? '[[b;#44D544;]PASS]' : '[[b;#FF5555;]FAIL]') + '&#93;');
            }
            var string = 'name "foo bar" baz /^asd [x]/ str\\ str 10 1e10';
            var cmd = $.terminal.splitCommand(string);
            assert(cmd.name === 'name' && cmd.args[0] === 'foo bar' &&
                  cmd.args[1] === 'baz' && cmd.args[2] === '/^asd [x]/' &&
                  cmd.args[3] === 'str str' && cmd.args[4] === '10' &&
                  cmd.args[5] === '1e10', '$.terminal.splitCommand');
            cmd = $.terminal.parseCommand(string);
            assert(cmd.name === 'name' && cmd.args[0] === 'foo bar' &&
                  cmd.args[1] === 'baz' && $.type(cmd.args[2]) === 'regexp' &&
                  cmd.args[2].source === '^asd [x]' &&
                  cmd.args[3] === 'str str' && cmd.args[4] === 10 &&
                  cmd.args[5] === 1e10, '$.terminal.parseCommand');
            string = '\x1b[2;31;46mFoo\x1b[1;3;4;32;45mBar\x1b[0m\x1b[7mBaz';
            assert($.terminal.from_ansi(string) ===
                  '[[;#640000;#008787]Foo][[biu;#44D544;#F5F]Bar][[;#000;#AAA]Baz]',
                   '$.terminal.from_ansi');
            string = '[[biugs;#fff;#000]Foo][[i;;;foo]Bar][[ous;;]Baz]';
            term.echo('$.terminal.format');
            assert($.terminal.format(string) === '<span style="font-weight:bold;text-decoration:underline line-through;font-style:italic;color:#fff;text-shadow:0 0 5px #fff;background-color:#000" data-text="Foo">Foo</span><span style="font-style:italic;" class="foo" data-text="Bar">Bar</span><span style="text-decoration:underline line-through overline;" data-text="Baz">Baz</span>', '\tformatting');
            string = 'http://terminal.jcubic.pl/examples.php https://www.google.com/?q=jquery%20terminal';
            assert($.terminal.format(string) === '<a target="_blank" href="http://terminal.jcubic.pl/examples.php">http://terminal.jcubic.pl/examples.php</a> <a target="_blank" href="https://www.google.com/?q=jquery%20terminal">https://www.google.com/?q=jquery%20terminal</a>', '\turls');
            string = 'foo@bar.com baz.quux@example.com';
            assert($.terminal.format(string) === '<a href="mailto:foo@bar.com">foo@bar.com</a> <a href="mailto:baz.quux@example.com">baz.quux@example.com</a>', '\temails');
            string = '-_-[[biugs;#fff;#000]Foo]-_-[[i;;;foo]Bar]-_-[[ous;;]Baz]-_-';
            assert($.terminal.strip(string) === '-_-Foo-_-Bar-_-Baz-_-', '$.terminal.strip');
            string = '[[bui;#fff;]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed dolor nisl, in suscipit justo. Donec a enim et est porttitor semper at vitae augue. Proin at nulla at dui mattis mattis. Nam a volutpat ante. Aliquam consequat dui eu sem convallis ullamcorper. Nulla suscipit, massa vitae suscipit ornare, tellus] est [[b;;#f00]consequat nunc, quis blandit elit odio eu arcu. Nam a urna nec nisl varius sodales. Mauris iaculis tincidunt orci id commodo. Aliquam] non magna quis [[i;;]tortor malesuada aliquam] eget ut lacus. Nam ut vestibulum est. Praesent volutpat tellus in eros dapibus elementum. Nam laoreet risus non nulla mollis ac luctus [[ub;#fff;]felis dapibus. Pellentesque mattis elementum augue non sollicitudin. Nullam lobortis fermentum elit ac mollis. Nam ac varius risus. Cras faucibus euismod nulla, ac auctor diam rutrum sit amet. Nulla vel odio erat], ac mattis enim.';
            term.echo('$.terminal.split_equal');
            var cols = [10, 40, 60, 400];
            for (var i=cols.length; i--;) {
                var lines = $.terminal.split_equal(string, cols[i]);
                var success = true;
                for (var j=0; j<lines.length; ++j) {
                    if ($.terminal.strip(lines[j]).length > cols[i]) {
                        success = false;
                        break;
                    }
                }
                assert(success, '\tsplit ' + cols[i]);
            }
        }
    };

    // -----------------------------------------------------------------------
    // Helper plugins
    // -----------------------------------------------------------------------
    $.fn.visible = function() {
        return this.css('visibility', 'visible');
    };
    $.fn.hidden = function() {
        return this.css('visibility', 'hidden');
    };
    // -----------------------------------------------------------------------
    // JSON-RPC CALL
    // -----------------------------------------------------------------------
    var id = 0;
    $.jrpc = function(url, method, params, success, error) {
        var request = $.json_stringify({
           'jsonrpc': '2.0', 'method': method,
            'params': params, 'id': ++id});
        return $.ajax({
            url: url,
            data: request,
            success: success,
            error: error,
            contentType: 'application/json',
            dataType: 'json',
            async: true,
            cache: false,
            //timeout: 1,
            type: 'POST'});
    };

    // -----------------------------------------------------------------------
    function is_scrolled_into_view(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
    }
    // -----------------------------------------------------------------------
    // :: calculate numbers of characters
    // -----------------------------------------------------------------------
    function get_num_chars(terminal) {
        // Create fake terminal to calcualte the width of one character
        // this will make terminal work if terminal div is not added to the
        // DOM at init like with:
        // $('<div/>').terminal().echo('foo bar').appendTo('body');
        var temp = $('<div class="terminal"><span>&nbsp;</span></div>').
            appendTo('body');
        var width = temp.find('span').width();
        temp.remove();
        var result = Math.floor(terminal.width() / width);
        if (have_scrollbars(terminal)) {
            var SCROLLBAR_WIDTH = 20;
            // assume that scrollbars are 20px - in my Laptop with
            // Linux/Chrome they are 16px
            var margins = terminal.innerWidth() - terminal.width();
            result -= Math.ceil((SCROLLBAR_WIDTH - margins / 2) / (width-1));
        }
        return result;
    }
    // -----------------------------------------------------------------------
    // :: check if div have scrollbars (need to have overflow auto or always)
    // -----------------------------------------------------------------------
    function have_scrollbars(div) {
        return div.get(0).scrollHeight > div.innerHeight();
    }
    // -----------------------------------------------------------------------
    // :: TERMINAL PLUGIN CODE
    // -----------------------------------------------------------------------
    var version = '{{VER}}';
    var copyright = 'Copyright (c) 2011-2013 Jakub Jankiewicz <http://jcubic.pl>';
    var version_string = 'version ' + version;
    //regex is for placing version string aligned to the right
    var reg = new RegExp(" {" + version_string.length + "}$");
    // -----------------------------------------------------------------------
    // :: Terminal Signatures
    // -----------------------------------------------------------------------
    var signatures = [
        ['jQuery Terminal', '(c) 2011-2013 jcubic'],
        ['jQuery Terminal Emulator v. ' + version,
         copyright.replace(/ *<.*>/, '')],
        ['jQuery Terminal Emulator version ' + version_string,
         copyright.replace(/^Copyright /, '')],
        ['      _______                 ________                        __',
         '     / / _  /_ ____________ _/__  ___/______________  _____  / /',
         ' __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /',
         '/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__',
         '\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/ /_/ /_/  \\/\\__\\_\\___/',
         '         \\/          /____/                                   '.replace(reg, '') +
         version_string,
         copyright],
        ['      __ _____                     ________                              __',
         '     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /',
         ' __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ \\/ /',
         '/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // / /__',
         '\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/',
         '          \\/              /____/                                          '.replace(reg, '') +
         version_string,
         copyright]
    ];
    // -----------------------------------------------------------------------
    // :: Default options
    // -----------------------------------------------------------------------
    $.terminal.defaults = {
        prompt: '> ',
        history: true,
        exit: true,
        clear: true,
        enabled: true,
        historySize: 60,
        checkArity: true,
        displayExceptions: true,
        cancelableAjax: true,
        processArguments: true,
        linksNoReferrer: false,
        login: null,
        outputLimit: -1,
        tabcompletion: null,
        historyFilter: null,
        onInit: $.noop,
        onClear: $.noop,
        onBlur: $.noop,
        onFocus: $.noop,
        onTerminalChange: $.noop,
        onExit: $.noop,
        keypress: $.noop,
        keydown: $.noop
    };
    // -----------------------------------------------------------------------
    // :: All terminal globals
    // -----------------------------------------------------------------------
    var requests = []; // for canceling on CTRL+D
    var terminals = new Cycle(); // list of terminals global in this scope
    $.fn.terminal = function(init_interpreter, options) {
        // -----------------------------------------------------------------------
        // :: helper function
        // -----------------------------------------------------------------------
        function get_processed_command(command) {
            if (typeof settings.processArguments === 'function') {
                return processCommand(command, settings.processArguments);
            } else if (settings.processArguments) {
                return $.terminal.parseCommand(command);
            } else {
                return $.terminal.splitCommand(command);
            }
        }
        // -----------------------------------------------------------------------
        // :: Display object on terminal
        // -----------------------------------------------------------------------
        function display_object(object) {
            if (typeof object === 'string') {
                self.echo(object);
            } else if (object instanceof Array) {
                self.echo($.map(object, function(object) {
                    return $.json_stringify(object);
                }).join(' '));
            } else if (typeof object === 'object') {
                self.echo($.json_stringify(object));
            } else {
                self.echo(object);
            }
        }
        // -----------------------------------------------------------------------
        // :: Create interpreter function from url string
        // -----------------------------------------------------------------------
        function make_basic_json_rpc_interpreter(url) {
            var service = function(method, params) {
                self.pause();
                $.jrpc(url, method, params, function(json) {
                    if (!json.error) {
                        display_object(json.result);
                    } else {
                        self.error('&#91;RPC&#93; ' + json.error.message);
                    }
                    self.resume();
                }, function(xhr, status, error) {
                    if (status !== 'abort') {
                        self.error('&#91;AJAX&#93; ' + status +
                                       ' - Server reponse is: \n' +
                                       xhr.responseText);
                    }
                    self.resume();
                });
            };
            //this is interpreter function
            return function(command, terminal) {
                if (command === '') {
                    return;
                }
                command = get_processed_command(command);
                if (!settings.login || command.name === 'help') {
                    // allow to call help without token
                    service(command.name, command.args);
                } else {
                    var token = terminal.token();
                    if (token) {
                        service(command.name, [token].concat(command.args));
                    } else {
                        //should never happen
                        terminal.error('&#91;AUTH&#93; Access denied (no token)');
                    }
                }
            };
        }
        // -----------------------------------------------------------------------
        // :: Create interpreter function from Object if value is object it will
        // :: create nested interpreters
        // -----------------------------------------------------------------------
        function make_object_interpreter(object, arity) {
            // function that maps commands to object methods
            // it keeps terminal context
            return function(command, terminal) {
                if (command === '') {
                    return;
                }
                //command = split_command_line(command);
                command = get_processed_command(command);
                var val = object[command.name];
                var type = $.type(val);
                if (type === 'function') {
                    if (arity && val.length !== command.args.length) {
                        self.error("&#91;Arity&#93; wrong number of arguments. Function '" +
                                   command.name + "' expect " + val.length + ' got ' +
                                   command.args.length);
                    } else {
                        return val.apply(self, command.args);
                    }
                } else if (type === 'object' || type === 'string') {
                    var commands = [];
                    if (type === 'object') {
                        for (var m in val) {
                            if (val.hasOwnProperty(m)) {
                                commands.push(m);
                            }
                        }
                        val = make_object_interpreter(val, arity);
                    }
                    terminal.push(val, {
                        prompt: command.name + '> ',
                        name: command.name,
                        completion: type === 'object' ? function(term, string, callback) {
                            callback(commands);
                        } : undefined
                    });
                } else {
                    terminal.error("Command '" + command.name + "' Not Found");
                }
            };
        }
        // -----------------------------------------------------------------------
        function make_interpreter(interpreter, finalize) {
            finalize = finalize || $.noop;
            var type = $.type(interpreter);
            var result = {};
            if (type === 'string') {
                self.pause();
                $.jrpc(interpreter, 'system.describe', [], function(ret) {
                    var commands = [];
                    if (ret.procs) {
                        var interpreter_object = {};
                        $.each(ret.procs, function(_, proc) {
                            commands.push(proc.name);
                            interpreter_object[proc.name] = function() {
                                var args = Array.prototype.slice.call(arguments);
                                if (settings.checkArity && proc.params &&
                                    proc.params.length !== args.length) {
                                    self.error("&#91;Arity&#93; wrong number of arguments."+
                                               "Function '" + proc.name + "' expect " +
                                               proc.params.length + ' got ' + args.length);
                                } else {
                                    self.pause();
                                    $.jrpc(interpreter, proc.name, args, function(json) {
                                        if (!json.error) {
                                            display_object(json.result);
                                        } else {
                                            self.error('&#91;RPC&#93; ' + json.error.message);
                                        }
                                        self.resume();
                                    }, function(xhr, status, error) {
                                        if (status !== 'abort') {
                                            self.error('&#91;AJAX&#93; ' + status +
                                                       ' - Server reponse is: \n' +
                                                       xhr.responseText);
                                        }
                                        self.resume();
                                    });
                                }
                            };
                        });
                        result.interpreter = make_object_interpreter(interpreter_object,
                                                                     false);
                        result.completion = function(term, string, callback) {
                            callback(commands);
                        };
                    } else {
                        // no procs in system.describe
                        result.interpreter = make_basic_json_rpc_interpreter(interpreter);
                        result.completion = settings.completion;
                    }
                    self.resume();
                    finalize(result);
                }, function() {
                    result.completion = settings.completion;
                    result.interpreter = make_basic_json_rpc_interpreter(interpreter);
                    finalize(result);
                });
            } else if (type === 'object') {
                var commands = [];
                for (var name in interpreter) {
                    commands.push(name);
                }
                result.interpreter = make_object_interpreter(interpreter, true);
                result.completion = function(term, string, callback) {
                    callback(commands);
                };
                finalize(result);
            } else if (type !== 'function') {
                throw type + " is invalid interpreter value";
            } else {
                finalize({interpreter: interpreter, completion: settings.completion});
            }
        }
        // -----------------------------------------------------------------------
        // :: Return exception message as string
        // -----------------------------------------------------------------------
        function exception_message(e) {
            if (typeof e === 'string') {
                return e;
            } else {
                if (typeof e.fileName === 'string') {
                    return e.fileName + ': ' + e.message;
                } else {
                    return e.message;
                }
            }
        }
        // -----------------------------------------------------------------------
        // :: display Exception on terminal
        // -----------------------------------------------------------------------
        function display_exception(e, label) {
            if (settings.displayExceptions) {
                var message = exception_message(e);
                self.error('&#91;' + label + '&#93;: ' + message);
                if (typeof e.fileName === 'string') {
                    //display filename and line which throw exeption
                    self.pause();
                    $.get(e.fileName, function(file) {
                        self.resume();
                        var num = e.lineNumber - 1;
                        var line = file.split('\n')[num];
                        if (line) {
                            self.error('&#91;' + e.lineNumber + '&#93;: ' + line);
                        }
                    });
                }
                if (e.stack) {
                    self.error(e.stack);
                }
            }
        }
        // -----------------------------------------------------------------------
        function scroll_to_bottom() {
            var scrollHeight = scroll_object.prop ? scroll_object.prop('scrollHeight') :
                scroll_object.attr('scrollHeight');
            scroll_object.scrollTop(scrollHeight);
        }
        // -----------------------------------------------------------------------
        // :: validating if object is string or function, call that function and
        // :: display exeption if any
        // -----------------------------------------------------------------------
        function validate(label, object) {
            try {
                if (typeof object === 'function') {
                    object(function() {
                        // don't care
                    });
                } else if (typeof object !== 'string') {
                    var msg = label + ' must be string or function';
                    throw msg;
                }
            } catch (e) {
                display_exception(e, label.toUpperCase());
                return false;
            }
            return true;
        }
        // -----------------------------------------------------------------------
        // :: Draw line - can have line breaks and be longer then the width of
        // :: the terminal, there are 2 options raw and finalize
        // :: raw - will not encode the string and finalize if a function that
        // :: will have div container of the line as first argument
        // :: NOTE: it format and append lines to output_buffer the actual append
        // :: to terminal output happen in flush function
        // -----------------------------------------------------------------------
        var output_buffer = [];
        var NEW_LINE = 1;
        function draw_line(string, options) {
            // prevent exception in display exception
            try {
                var line_settings = $.extend({
                    raw: false,
                    finalize: $.noop
                }, options || {});
                string = $.type(string) === "function" ? string() : string;
                string = $.type(string) === "string" ? string : String(string);
                var i, len;
                if (!line_settings.raw) {
                    string = $.terminal.encode(string);
                }
                string = $.terminal.from_ntroff(string);
                string = $.terminal.from_ansi(string);
                output_buffer.push(NEW_LINE);
                if (!line_settings.raw && (string.length > num_chars || string.match(/\n/))) {
                    var array = $.terminal.split_equal(string, num_chars);
                    for (i = 0, len = array.length; i < len; ++i) {
                        if (array[i] === '' || array[i] === '\r') {
                            output_buffer.push('&nbsp');
                        } else {
                            if (line_settings.raw) {
                                output_buffer.push(array[i]);
                            } else {
                                output_buffer.push($.terminal.format(array[i], {
                                    linksNoReferer: settings.linksNoReferer
                                }));
                            }
                        }
                    }
                } else {
                    if (!line_settings.raw) {
                        string = $.terminal.format(string, {
                            linksNoReferer: settings.linksNoReferer
                        });
                    }
                    output_buffer.push(string);
                }
                output_buffer.push(line_settings.finalize);
            } catch (e) {
                output_buffer = [];
                // don't display exception if exception throw in terminal
                alert('Internal Exception(draw_line):' + exception_message(e) + '\n' +
                      e.stack);
            }
        }
        // -----------------------------------------------------------------------
        // :: Flush the output to the terminal
        function flush() {
            try {
                var wrapper;
                if (settings.outputLimit >= 0) {
                    var rows = self.rows();
                    var limit = settings.outputLimit === 0 ? rows : settings.outputLimit;
                    var lines = 0;
                    var finalize;
                    var tmp_output = $('<div/>');
                    for (var i=output_buffer.length; i--;) {
                        if (typeof output_buffer[i] === 'function') {
                            finalize = output_buffer[i];
                            wrapper = $('<div/>');
                        } else if (output_buffer[i] === NEW_LINE) {
                            wrapper.prependTo(tmp_output);
                            try {
                                finalize(wrapper);
                            } catch (e) {
                                display_exception(e, 'USER:echo(finalize)');
                            }
                        } else {
                            wrapper.prepend('<div>' + output_buffer[i] + '</div>');
                            if (++lines === limit) {
                                if (output_buffer[i-1] !== NEW_LINE) {
                                    // cut in the middle of the line
                                    try {
                                        finalize(wrapper);
                                    } catch (e) {
                                        display_exception(e, 'USER:echo(finalize)');
                                    }
                                }
                                break;
                            }
                        }
                    }
                    tmp_output.children().appendTo(output);
                } else {
                    // print all
                    $.each(output_buffer, function(i, line) {
                        if (line === NEW_LINE) {
                            wrapper = $('<div></div>');
                        } else if (typeof line === 'function') {
                            wrapper.appendTo(output);
                            try {
                                line(wrapper);
                            } catch (e) {
                                display_exception(e, 'USER:echo(finalize)');
                            }
                        } else {
                            $('<div/>').html(line).appendTo(wrapper).width('100%');
                        }
                    });
                }
                scroll_to_bottom();
                output_buffer = [];
            } catch (e) {
                alert('flush ' + exception_message(e) + '\n' +
                      e.stack);
            }
        }
        // -----------------------------------------------------------------------
        // :: Display user greetings or terminal signature
        // -----------------------------------------------------------------------
        function show_greetings() {
            if (settings.greetings === undefined) {
                self.echo(self.signature);
            } else if (settings.greetings) {
                self.echo(settings.greetings);
            }
        }
        // -----------------------------------------------------------------------
        // :: Display prompt and last command
        // -----------------------------------------------------------------------
        function echo_command(command) {
            command = $.terminal.escape_brackets($.terminal.encode(command, true));
            var prompt = command_line.prompt();
            if (command_line.mask()) {
                command = command.replace(/./g, '*');
            }
            if (typeof prompt === 'function') {
                prompt(function(string) {
                    self.echo(string + command);
                });
            } else {
                self.echo(prompt + command);
            }
        }
        // -----------------------------------------------------------------------
        // :: Wrapper over interpreter, it implements exit and catch all exeptions
        // :: from user code and display them on terminal
        // -----------------------------------------------------------------------
        function commands(command, silent) {
            try {
                prev_command = command;
                var interpreter = interpreters.top();
                if (command === 'exit' && settings.exit) {
                    if (interpreters.size() === 1) {
                        if (settings.login) {
                            logout();
                        } else {
                            var msg = "You can't exit from main interpeter";
                            if (!silent) {
                                echo_command(command);
                            }
                            self.echo(msg);
                        }
                    } else {
                        self.pop('exit');
                    }
                } else {
                    if (!silent) {
                        echo_command(command);
                    }
                    var position = lines.length-1;
                    if (command === 'clear' && settings.clear) {
                        self.clear();
                    } else {
                        var result = interpreter.interpreter(command, self);
                        if (result !== undefined) {
                            // was lines after echo_command (by interpreter)
                            if (position === lines.length-1) {
                                lines.pop();
                                if (result !== false) {
                                    self.echo(result);
                                }
                            } else {
                                if (result === false) {
                                    lines = lines.slice(0, position).
                                        concat(lines.slice(position+1));
                                } else {
                                    lines = lines.slice(0, position).
                                        concat([result]).
                                        concat(lines.slice(position+1));
                                }
                            }
                            self.resize();
                        }
                    }
                }
            } catch (e) {
                display_exception(e, 'USER');
                self.resume();
                throw e;
            }
        }
        // -----------------------------------------------------------------------
        // :: Functions change prompt of command line to login to password
        // :: and call user login function with callback that set token
        // :: if user call it with value that is truthy
        // -----------------------------------------------------------------------
        function login() {
            var user = null;
            command_line.prompt('login: ');
            // don't stor logins in history
            if (settings.history) {
                command_line.history().disable();
            }
            command_line.commands(function(command) {
                try {
                    echo_command(command);
                    if (!user) {
                        user = command;
                        command_line.prompt('password: ');
                        command_line.mask(true);
                    } else {
                        command_line.mask(false);
                        self.pause();
                        if (typeof settings.login !== 'function') {
                            throw "Value of login property must be a function";
                        }
                        var passwd = command;
                        settings.login(user, passwd, function(token) {
                            if (token) {
                                var name = settings.name;
                                name = (name ?  name + '_': '') + terminal_id + '_';
                                $.Storage.set(name + 'token', token);
                                $.Storage.set(name + 'login', user);
                                //restore commands and run interpreter
                                command_line.commands(commands);
                                initialize();
                            } else {
                                self.error('Wrong password try again');
                                command_line.prompt('login: ');
                                user = null;
                            }
                            self.resume();
                        }, self);
                    }
                } catch (e) {
                    display_exception(e, 'LOGIN', self);
                    throw e;
                }
            });
        }
        // -----------------------------------------------------------------------
        // :: Logout function remove Storage, disable history and run login function
        // :: this function is call only when options.login function is defined
        // :: check for this is in self.pop method
        // -----------------------------------------------------------------------
        function logout() {
            if (typeof settings.onBeforelogout === 'function') {
                try {
                    if (settings.onBeforelogout(self) === false) {
                        return;
                    }
                } catch (e) {
                    display_exception(e, 'onBeforelogout');
                    throw e;
                }
            }
            var name = (settings.name ? settings.name + '_': '') + terminal_id + '_';
            $.Storage.remove(name + 'token');
            $.Storage.remove(name + 'login');
            if (settings.history) {
                command_line.history().disable();
            }
            login();
            if (typeof settings.onAfterlogout === 'function') {
                try {
                    settings.onAfterlogout(self);
                } catch (e) {
                    display_exception(e, 'onAfterlogout');
                    throw e;
                }
            }
        }
        // -----------------------------------------------------------------------
        // :: Save interpreter name for use with purge
        // -----------------------------------------------------------------------
        function maybe_append_name(interpreter_name) {
            var name = (settings.name ? settings.name + '_': '') +
                terminal_id + "_interpreters";
            var names = $.Storage.get(name);
            if (names) {
                names = new Function('return ' + names + ';')();
            } else {
                names = [];
            }
            if ($.inArray(interpreter_name, names) == -1) {
                names.push(interpreter_name);
                $.Storage.set(name, $.json_stringify(names));
            }
        }
        // -----------------------------------------------------------------------
        // :: Function enable history, set prompt, run interpreter function
        // -----------------------------------------------------------------------
        function prepare_top_interpreter() {
            var interpreter = interpreters.top();
            var name = (settings.name ? settings.name + '_': '') + terminal_id +
                (names.length ? '_' + names.join('_') : '');
            maybe_append_name(name);
            command_line.name(name);
            if (typeof interpreter.prompt == 'function') {
                command_line.prompt(function(command) {
                    interpreter.prompt(command, self);
                });
            } else {
                command_line.prompt(interpreter.prompt);
            }
            command_line.set('');
            if (typeof interpreter.onStart === 'function') {
                interpreter.onStart(self);
            }
        }
        // ---------------------------------------------------------------------
        function initialize() {
            prepare_top_interpreter();
            if (settings.history) {
                command_line.history().enable();
            }
            show_greetings();
            if (typeof settings.onInit === 'function') {
                try {
                    settings.onInit(self);
                } catch (e) {
                    display_exception(e, 'OnInit');
                    throw e;
                }
            }
        }
        // ---------------------------------------------------------------------
        // :: Keydown event handler
        // ---------------------------------------------------------------------
        function key_down(e) {
            var result, i, top = interpreters.top();
            if ($.type(top.keydown) === 'function') {
                result = top.keydown(e, self);
                if (result !== undefined) {
                    return result;
                }
            }
            // after text pasted into textarea in cmd plugin
            self.oneTime(10, function() {
                on_scrollbar_show_resize();
            });
            if ($.type(settings.keydown) === 'function') {
                result = settings.keydown(e, self);
                if (result !== undefined) {
                    return result;
                }
            }
            if (!self.paused()) {
                if (e.which !== 9) { // not a TAB
                    tab_count = 0;
                }
                if (e.which === 68 && e.ctrlKey) { // CTRL+D
                    if (command_line.get() === '') {
                        if (interpreters.size() > 1 ||
                            settings.login !== undefined) {
                            self.pop('');
                        } else {
                            self.resume();
                            self.echo('');
                        }
                    } else {
                        self.set_command('');
                    }
                    return false;
                } else if (settings.tabcompletion && e.which === 9) { // TAB
                    // TODO: move this to cmd plugin
                    //       add tabcompletion = array | function
                    ++tab_count;
                    var command = command_line.get().substring(0, command_line.position());
                    var strings = command.split(' ');
                    var string;
                    if (strings.length == 1) {
                        string = strings[0];
                    } else {
                        string = strings[strings.length-1];
                        for (i=strings.length-1; i>0;i--) {
                            // treat escape space as part of the string
                            if (strings[i-1][strings[i-1].length-1] == '\\') {
                                string = strings[i-1] + ' ' + string;
                            } else {
                                break;
                            }
                        }
                    }
                    var special = /([\^\$\[\]\(\)\+\*\.\|])/g;
                    var clean = string.replace(special, '\\$1');
                    var reg = new RegExp('^' + clean);
                    interpreters.top().completion(self, string, function(commands) {
                        var test = command_line.get().substring(0, command_line.position());
                        if (test !== command) {
                            // command line changed between TABS - ignore
                            return;
                        }
                        var matched = [];
                        for (i=commands.length; i--;) {
                            if (reg.test(commands[i])) {
                                matched.push(commands[i]);
                            }
                        }
                        if (matched.length === 1) {
                            self.insert(matched[0].replace(reg, ''));
                        } else if (matched.length > 1) {
                            if (tab_count >= 2) {
                                echo_command(command);
                                self.echo(matched.join('\t'));
                                tab_count = 0;
                            } else {
                                var found = false;
                                loop:
                                for (var j=string.length; j<matched[0].length; ++j) {
                                    for (i=1; i<matched.length; ++i) {
                                        if (matched[0].charAt(j) !== matched[i].charAt(j)) {
                                            break loop;
                                        }
                                    }
                                    found = true;
                                }
                                if (found) {
                                    self.insert(matched[0].slice(0, j).replace(reg, ''));
                                }
                            }
                        }
                    });
                    return false;
                } else if (e.which === 86 && e.ctrlKey) { // CTRL+V
                    self.oneTime(1, function() {
                        scroll_to_bottom();
                    });
                    return;
                } else if (e.which === 9 && e.ctrlKey) { // CTRL+TAB
                    if (terminals.length() > 1) {
                        self.focus(false);
                        return false;
                    }
                } else if (e.which === 34) { // PAGE DOWN
                    self.scroll(self.height());
                } else if (e.which === 33) { // PAGE UP
                    self.scroll(-self.height());
                } else {
                    self.attr({scrollTop: self.attr('scrollHeight')});
                }
            } else if (e.which === 68 && e.ctrlKey) { // CTRL+D
                if (requests.length) {
                    for (i=requests.length; i--;) {
                        var r = requests[i];
                        if (4 !== r.readyState) {
                            try {
                                r.abort();
                            } catch (error) {
                                self.error('error in aborting ajax');
                            }
                        }
                    }
                    requests = [];
                    // only resume if there are ajax calls
                    self.resume();
                }
                return false;
            }
        }
        // -----------------------------------------------------------------------
        var self = this;
        if (this.length > 1) {
            return this.each(function() {
                $.fn.terminal.call($(this),
                                   init_interpreter,
                                   $.extend({name: self.selector}, options));
            });
        } else {
            // terminal already exist
            if (self.data('terminal')) {
                return self.data('terminal');
            }
            if (self.length === 0) {
                throw 'Sorry, but terminal said that "' + self.selector +
                    '" is not valid selector!';
            }
            var names = []; // stack if interpeter names
            var scroll_object;
            var prev_command;
            var tab_count = 0; // for tab completion
            // array of line objects:
            // - string (printed as-is)
            // - function (called whenever necessary, result is printed)
            // - array (expected form: [line, finalize function])
            // - anything else (cast to string when painted)
            var lines = [];
            var output; // .terminal-output jquery object
            var terminal_id = terminals.length();
            var num_chars; // numer of chars in line
            var command_list = []; // for tab completion
            var url;
            var old_width, old_height;
            var dalyed_commands = []; // used when exec commands with pause
            var settings = $.extend({},
                                    $.terminal.defaults,
                                    {name: self.selector},
                                    options || {});
            var pause = !settings.enabled;
            // -----------------------------------------------------------------------
            // TERMINAL METHODS
            // -----------------------------------------------------------------------
            $.extend(self, $.omap({
                // -----------------------------------------------------------------------
                // :: Clear the output
                // -----------------------------------------------------------------------
                clear: function() {
                    output.html('');
                    command_line.set('');
                    lines = [];
                    try {
                        settings.onClear(self);
                    } catch (e) {
                        display_exception(e, 'onClear');
                        throw e;
                    }
                    self.attr({ scrollTop: 0});
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Return object that can be use with import_view to restore the state
                // -----------------------------------------------------------------------
                export_view: function() {
                    return {
                        prompt: self.get_prompt(),
                        command: self.get_command(),
                        position: command_line.position(),
                        lines: lines.slice(0)
                    };
                },
                // -----------------------------------------------------------------------
                // :: Restore the state of prevoius exported view
                // -----------------------------------------------------------------------
                import_view: function(view) {
                    self.set_prompt(view.prompt);
                    self.set_command(view.command);
                    command_line.position(view.position);
                    lines = view.lines;
                    self.resize();
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Exectue a command, it will handle commands that do AJAX calls
                // :: and have delays, if second argument is set to true it will not
                // :: echo executed command
                // -----------------------------------------------------------------------
                exec: function(command, silent) {
                    if (pause) {
                        dalyed_commands.push([command, silent]);
                    } else {
                        commands(command, silent);
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Return commands function from top interpreter
                // -----------------------------------------------------------------------
                commands: function() {
                    return interpreters.top().interpreter;
                },
                // -----------------------------------------------------------------------
                // :: Show user greetings or terminal sugnature
                // -----------------------------------------------------------------------
                greetings: function() {
                    show_greetings();
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Return true if terminal is pased false otherwise
                // -----------------------------------------------------------------------
                paused: function() {
                    return pause;
                },
                // -----------------------------------------------------------------------
                // :: Pause the terminal, it should be used for ajax calls
                // -----------------------------------------------------------------------
                pause: function() {
                    if (command_line) {
                        pause = true;
                        self.disable();
                        command_line.hidden();
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Resume previous paused terminal
                // -----------------------------------------------------------------------
                resume: function() {
                    if (command_line) {
                        self.enable();
                        var original = dalyed_commands;
                        dalyed_commands = [];
                        while (original.length) {
                            var command = original.shift();
                            self.exec.apply(self, command);
                        }
                        command_line.visible();
                        scroll_to_bottom();
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Return number of characters that fit into width of the terminal
                // -----------------------------------------------------------------------
                cols: function() {
                    return num_chars;
                },
                // -----------------------------------------------------------------------
                // :: Return number of lines that fit into the height of the therminal
                // -----------------------------------------------------------------------
                rows: function() {
                    var tmp = $('<div class="terminal"><span>&nbsp;</span></div>').
                        appendTo('body');
                    var ret = Math.floor(self.height() / tmp.height());
                    tmp.remove();
                    return ret;
                },
                // -----------------------------------------------------------------------
                // :: Return History object
                // -----------------------------------------------------------------------
                history: function() {
                    return command_line.history();
                },
                // -----------------------------------------------------------------------
                // :: Switch to next terminal
                // -----------------------------------------------------------------------
                next: function() {
                    if (terminals.length() === 1) {
                        return self;
                    } else {
                        var offsetTop = self.offset().top;
                        var height = self.height();
                        var scrollTop = self.scrollTop();
                        if (!is_scrolled_into_view(self)) {
                            self.enable();
                            $('html,body').animate({scrollTop: offsetTop-50}, 500);
                            return self;
                        } else {
                            terminals.front().disable();
                            var next = terminals.rotate().enable();
                            // 100 provides buffer in viewport
                            var x = next.offset().top - 50;
                            $('html,body').animate({scrollTop: x}, 500);
                            try {
                                settings.onTerminalChange(next);
                            } catch (e) {
                                display_exception(e, 'onTerminalChange');
                                throw e;
                            }
                            return next;
                        }
                    }
                },
                // -----------------------------------------------------------------------
                // :: Make terminal in focus or blur depend on first argument if there
                // :: is more then one terminal it will switch to next one, if second
                // :: argument is set to true the events will be not fired used on init
                // -----------------------------------------------------------------------
                focus: function(toggle, silent) {
                    self.oneTime(1, function() {
                        if (terminals.length() === 1) {
                            if (toggle === false) {
                                try {
                                    if (!silent && settings.onBlur(self) !== false) {
                                        self.disable();
                                    }
                                } catch (e) {
                                    display_exception(e, 'onBlur');
                                    throw e;
                                }
                            } else {
                                try {
                                    if (!silent && settings.onFocus(self) !== false) {
                                        self.enable();
                                    }
                                } catch (e) {
                                    display_exception(e, 'onFocus');
                                    throw e;
                                }
                            }
                        } else {
                            if (toggle === false) {
                                self.next();
                            } else {
                                var front = terminals.front();
                                if (front != self) {
                                    front.disable();
                                    if (!silent) {
                                        try {
                                            settings.onTerminalChange(self);
                                        } catch (e) {
                                            display_exception(e, 'onTerminalChange');
                                            throw e;
                                        }
                                    }
                                }
                                terminals.set(self);
                                self.enable();
                            }
                        }
                    });
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Enable terminal
                // -----------------------------------------------------------------------
                enable: function() {
                    if (num_chars === undefined) {
                        //enabling first time
                        self.resize();
                    }
                    if (pause) {
                        if (command_line) {
                            command_line.enable();
                            pause = false;
                        }
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Disable terminal
                // -----------------------------------------------------------------------
                disable: function() {
                    if (command_line) {
                        pause = true;
                        command_line.disable();
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: return true if terminal is enabled
                // -----------------------------------------------------------------------
                enabled: function() {
                    return pause;
                },
                // -----------------------------------------------------------------------
                // :: Return terminal signature depending on the size of the terminal
                // -----------------------------------------------------------------------
                signature: function() {
                    var cols = self.cols();
                    var i = cols < 15 ? null : cols < 35 ? 0 : cols < 55 ? 1 : cols < 64 ? 2 : cols < 75 ? 3 : 4;
                    if (i !== null) {
                        return signatures[i].join('\n') + '\n';
                    } else {
                        return '';
                    }
                },
                // -----------------------------------------------------------------------
                // :: Return version number
                // -----------------------------------------------------------------------
                version: function() {
                    return version;
                },
                // -----------------------------------------------------------------------
                // :: Return current command entered by terminal
                // -----------------------------------------------------------------------
                get_command: function() {
                    return command_line.get();
                },
                // -----------------------------------------------------------------------
                // :: Insert text into command line after the cursor
                // -----------------------------------------------------------------------
                insert: function(string) {
                    if (typeof string === 'string') {
                        command_line.insert(string);
                        return self;
                    } else {
                        throw "insert function argument is not a string";
                    }
                },
                // -----------------------------------------------------------------------
                // :: Set the prompt of the command line
                // -----------------------------------------------------------------------
                set_prompt: function(prompt) {
                    if (validate('prompt', prompt)) {
                        if (typeof prompt == 'function') {
                            command_line.prompt(function(command) {
                                prompt(command, self);
                            });
                        } else {
                            command_line.prompt(prompt);
                        }
                        interpreters.top().prompt = prompt;
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Return the prompt used by terminal
                // -----------------------------------------------------------------------
                get_prompt: function() {
                    return interpreters.top().prompt;
                    // command_line.prompt(); - can be a wrapper
                    //return command_line.prompt();
                },
                // -----------------------------------------------------------------------
                // :: Change the command line to the new one
                // -----------------------------------------------------------------------
                set_command: function(command) {
                    command_line.set(command);
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Enable or Disable mask depedning on the passed argument
                // -----------------------------------------------------------------------
                set_mask: function(display) {
                    command_line.mask(display);
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Return ouput of the terminal as text
                // -----------------------------------------------------------------------
                get_output: function(raw) {
                    if (raw) {
                        return lines;
                    } else {
                        return $.map(lines, function(item) {
                            return typeof item[0] == 'function' ? item[0]() : item[0];
                        }).join('\n');
                    }
                },
                // -----------------------------------------------------------------------
                // :: Recalculate and redraw averything
                // -----------------------------------------------------------------------
                resize: function(width, height) {
                    if (width && height) {
                        self.width(width);
                        self.height(height);
                    }
                    width = self.width();
                    height = self.height();

                    var new_num_chars = get_num_chars(self);
                    if (new_num_chars !== num_chars) { // only if number of chars changed
                        num_chars = new_num_chars;
                        command_line.resize(num_chars);
                        var o = output.empty().detach();
                        
                        console.log('start to re draw')
                        
                        console.dir(lines)
                        console.info(draw_line)

                        $.each(lines, function(i, line) {
                            
                            console.info("line number" + i)
                            console.log(line)
                            console.info("line content")
                            if (typeof line == 'object') {
                              draw_line.apply(null, line); // line is an array
                            }
                        }); 
                        command_line.before(o);
                        flush();
                        if (typeof settings.onResize === 'function' &&
                            (old_height !== height || old_width !== width)) {
                            settings.onResize(self);
                        }
                        if (old_height !== height || old_width !== width) {
                            old_height = height;
                            old_width = width;
                        }
                    }
                    return self;
                },
                flush: function() {
                    flush();
                },
                // -----------------------------------------------------------------------
                // :: Print data to terminal output. It can have two options
                // :: a function that is called with the container div that holds the
                // :: output (as a jquery object) every time the output is printed
                // :: (including resize and scrolling)
                // :: If the line is a function it will be called for every redraw.
                // -----------------------------------------------------------------------
                echo: function(string, options) {
                    
                    console.log(string)

                    try {
                        var settings = $.extend({
                            flush: true,
                            raw: false,
                            finalize: $.noop
                        }, options || {});
                        output_buffer = [];
                        draw_line(string, settings);
                        if (settings.flush) {
                            flush();
                        }
                        console.dir(lines)
                        console.log('line delimineter')
                        lines.push([string, settings]);
                        if (settings.outputLimit >= 0) {
                            var limit = settings.outputLimit === 0 ?
                                self.rows() :
                                settings.outputLimit;
                            var $lines = output.find('div div');
                            if ($lines.length > limit) {
                                $lines.slice(0, lines.length-limit+1).remove();
                            }
                        }
                        on_scrollbar_show_resize();
                    } catch (e) {
                        // if echo throw exception we can't use error to display that exception
                        alert('terminal.echo ' + exception_message(e) + '\n' +
                              e.stack);
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: echo red text
                // -----------------------------------------------------------------------
                error: function(message, finalize) {
                    //quick hack to fix trailing back slash
                    return self.echo('[[;#f00;]' + $.terminal.escape_brackets(message).
                                     replace(/\\$/, '&#92;') + ']', finalize);
                },
                // -----------------------------------------------------------------------
                // :: Scroll Div that hold the terminal
                // -----------------------------------------------------------------------
                scroll: function(amount) {
                    var pos;
                    amount = Math.round(amount);
                    if (scroll_object.prop) {
                        if (amount > scroll_object.prop('scrollTop') && amount > 0) {
                            scroll_object.prop('scrollTop', 0);
                        }
                        pos = scroll_object.prop('scrollTop');
                        scroll_object.scrollTop(pos + amount);
                        return self;
                    } else {
                        if (amount > scroll_object.attr('scrollTop') && amount > 0) {
                            scroll_object.attr('scrollTop', 0);
                        }
                        pos = scroll_object.attr('scrollTop');
                        scroll_object.scrollTop(pos + amount);
                        return self;
                    }
                },
                // -----------------------------------------------------------------------
                // :: Exit all interpreters and logout the function will throw exception
                // :: if there is no login provided
                // -----------------------------------------------------------------------
                logout: settings.login ? function() {
                    while (interpreters.size() > 1) {
                        interpreters.pop();
                    }
                    logout();
                    return self;
                } : function() {
                    throw "You don't have login function";
                },
                // -----------------------------------------------------------------------
                // :: Function return token returned by callback function in login
                // :: function it do nothing (return undefined) if there is no login
                // -----------------------------------------------------------------------
                token: settings.login ? function() {
                    var name = settings.name;
                    return $.Storage.get((name ? name + '_': '') + terminal_id + '_token');
                } : $.noop,
                // -----------------------------------------------------------------------
                // :: Function return Login name entered by the user
                // -----------------------------------------------------------------------
                login_name: settings.login ? function() {
                    var name = settings.name;
                    return $.Storage.get((name ? name + '_': '') + terminal_id + '_login');
                } : $.noop,
                // -----------------------------------------------------------------------
                // :: Function return name of current interpreter
                // -----------------------------------------------------------------------
                name: function() {
                    return interpreters.top().name;
                },
                // -----------------------------------------------------------------------
                // :: Push new interenter on the Stack,
                // -----------------------------------------------------------------------
                push: function(interpreter, options) {
                    if (options && (!options.prompt || validate('prompt', options.prompt)) ||
                        !options) {
                        options = options || {};
                        options.name = options.name || prev_command;
                        options.prompt = options.prompt || options.name + ' ';
                        names.push(options.name);
                        var top = interpreters.top();
                        if (top) {
                            top.mask = command_line.mask();
                        }
                        make_interpreter(interpreter, function(interpreter) {
                            interpreters.push($.extend({}, interpreter, options));
                            prepare_top_interpreter();
                        });
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Remove last Interpreter from the Stack
                // -----------------------------------------------------------------------
                pop: function(string) {
                    if (string !== undefined) {
                        echo_command(string);
                    }
                    names.pop();
                    if (interpreters.top().name === settings.name) {
                        if (settings.login) {
                            logout();
                            if ($.type(settings.onExit) === 'function') {
                                try {
                                    settings.onExit(self);
                                } catch (e) {
                                    display_exception(e, 'onExit');
                                    throw e;
                                }
                            }
                        }
                    } else {
                        var current = interpreters.pop();
                        prepare_top_interpreter();
                        if ($.type(current.onExit) === 'function') {
                            try {
                                current.onExit(self);
                            } catch (e) {
                                display_exception(e, 'onExit');
                                throw e;
                            }
                        }
                        // restore mask
                        self.set_mask(interpreters.top().mask);
                    }
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Return how deep you are in nested interepter
                // -----------------------------------------------------------------------
                level: function() {
                    return interpreters.size();
                },
                // -----------------------------------------------------------------------
                // :: Reinitialize the terminal
                // -----------------------------------------------------------------------
                reset: function() {
                    self.clear();
                    while(interpreters.size() > 1) {
                        interpreters.pop();
                    }
                    initialize();
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Remove all local storage left by terminal, it will not logout you
                // :: until you refresh the browser
                // -----------------------------------------------------------------------
                purge: function() {
                    var prefix = (settings.name ? settings.name + '_': '') +
                        terminal_id + '_';
                    var names = $.Storage.get(prefix + 'interpreters');
                    $.each(new Function('return ' + names + ';')(), function(_, name) {
                        $.Storage.remove(name + '_commands');
                    });
                    $.Storage.remove(prefix + 'interpreters');
                    $.Storage.remove(prefix + 'token');
                    $.Storage.remove(prefix + 'login');
                    return self;
                },
                // -----------------------------------------------------------------------
                // :: Remove all events and DOM nodes left by terminal, it will not purge
                // :: terminal so you will have the same state when you refresh the
                // :: browser
                // -----------------------------------------------------------------------
                destroy: function() {
                    command_line.destroy().remove();
                    output.remove();
                    $(document).unbind('.terminal');
                    $(window).unbind('.terminal');
                    self.unbind('click, mousewheel');
                    self.removeData('terminal').removeClass('terminal');
                    if (settings.width) {
                        self.css('width', '');
                    }
                    if (settings.height) {
                        self.css('height', '');
                    }
                    return self;
                }
            }, function(_, fun) {
                // wrap all functions and display execptions
                return function() {
                    try {
                        return fun.apply(this, Array.prototype.slice.apply(arguments));
                    } catch (e) {
                        if (_ !== 'exec') { // exec catch by command
                                display_exception(e, 'TERMINAL');
                        }
                        throw e;
                    }
                };
            }));

            // ---------------------------------------------------------------------
            var on_scrollbar_show_resize = (function() {
                var scroll_bars = have_scrollbars(self);
                return function() {
                    if (scroll_bars !== have_scrollbars(self)) {
                        // if scollbars appearance change we will have different
                        // number of chars
                        self.resize();
                        scroll_bars = have_scrollbars(self);
                    }
                };
            })();

            // ---------------------------------------------------------------------
            // INIT CODE
            // ---------------------------------------------------------------------
            if (settings.width) {
                self.width(settings.width);
            }
            if (settings.height) {
                self.height(settings.height);
            }
            if (!navigator.userAgent.toLowerCase().match(/(webkit)[ \/]([\w.]+)/) &&
                self[0].tagName.toLowerCase() == 'body') {
                scroll_object = $('html');
            } else {
                scroll_object = self;
            }
            // register ajaxSend for cancel requests on CTRL+D
            $(document).bind('ajaxSend.terminal', function(e, xhr, opt) {
                requests.push(xhr);
            });
            output = $('<div>').addClass('terminal-output').appendTo(self);
            self.addClass('terminal');
            // keep focus in clipboard textarea in mobile
            if (('ontouchstart' in window) || window.DocumentTouch &&
                document instanceof DocumentTouch) {
                self.click(function() {
                    self.find('textarea').focus();
                });
                self.find('textarea').focus();
            }
            /*
              self.bind('touchstart.touchScroll', function() {

              });
              self.bind('touchmove.touchScroll', function() {

              });
            */
            //$('<input type="text"/>').hide().focus().appendTo(self);

            // before login event
            if (settings.login && typeof settings.onBeforeLogin === 'function') {
                try {
                    settings.onBeforeLogin(self);
                } catch (e) {
                    display_exception(e, 'onBeforeLogin');
                    throw e;
                }
            }
            // create json-rpc authentication function
            if (typeof init_interpreter === 'string' &&
                (typeof settings.login === 'string' || settings.login)) {
                settings.login = (function(method) {
                    return function(user, passwd, callback, term) {
                        self.pause();
                        $.jrpc(init_interpreter,
                               method,
                               [user, passwd],
                               function(response) {
                                   self.resume();
                                   if (!response.error && response.result) {
                                       callback(response.result);
                                   } else {
                                       callback(null);
                                   }
                               }, function(xhr, status, error) {
                                   self.resume();
                                   self.error('&#91;AJAX&#92; Response: ' +
                                              status + '\n' +
                                              xhr.responseText);
                               });
                    };
                    //default name is login so you can pass true
                })($.type(settings.login) === 'boolean' ? 'login' : settings.login);
            }
            terminals.append(self);
            if (validate('prompt', settings.prompt)) {
                var interpreters;
                var command_line;
                make_interpreter(init_interpreter, function(interpreter) {
                    interpreters = new Stack($.extend({
                        name: settings.name,
                        prompt: settings.prompt,
                        greetings: settings.greetings
                    }, interpreter));
                    // CREATE COMMAND LINE
                    command_line = $('<div/>').appendTo(self).cmd({
                        prompt: settings.prompt,
                        history: settings.history,
                        historyFilter: settings.historyFilter,
                        historySize: settings.historySize,
                        width: '100%',
                        keydown: key_down,
                        keypress: settings.keypress ? function(e) {
                            return settings.keypress(e, self);
                        } : null,
                        onCommandChange: function(command) {
                            if ($.type(settings.onCommandChange) === 'function') {
                                try {
                                    settings.onCommandChange(command, self);
                                } catch (e) {
                                    display_exception(e, 'onCommandChange');
                                    throw e;
                                }
                            }
                            scroll_to_bottom();
                        },
                        commands: commands
                    });
                    if (settings.enabled === true) {
                        self.focus(undefined, true);
                    } else {
                        self.disable();
                    }
                    $(document).bind('click.terminal', function(e) {
                        if (!$(e.target).parents().hasClass('terminal') &&
                            settings.onBlur(self) !== false) {
                            self.disable();
                        }
                    });
                    self.click(function() {
                        //if (!(pause && terminals.length() > 1 &&
                        //     self === $.terminal.active())) {
                        self.focus();
                    });
                    if (settings.login && self.token && !self.token() && self.login_name &&
                        !self.login_name()) {
                        login();
                    } else {
                        initialize();
                    }
                    num_chars = get_num_chars(self);
                    command_line.resize(num_chars);
                    self.oneTime(100, function() {
                        $(window).bind('resize.terminal', function() {
                            if (self.is(':visible')) {
                                var width = self.width();
                                var height = self.height();
                                // prevent too many calculations in IE because of resize event
                                // bug
                                if (old_height !== height || old_width !== width) {
                                    self.resize();
                                }
                            }
                        });
                    });
                    if ($.type($.fn.init.prototype.mousewheel) === 'function') {
                        self.mousewheel(function(event, delta) {
                            //self.echo(dir(event));
                            if (delta > 0) {
                                self.scroll(-40);
                            } else {
                                self.scroll(40);
                            }
                            return false;
                        }, true);
                    }
                });
            }
            self.data('terminal', self);
            return self;
        }
    }; //terminal plugin
})(jQuery);

;(function($){$.fn.unveil=function(threshold,callback){var $w=$(window),th=threshold||0,retina=window.devicePixelRatio>1,attrib=retina?"data-src-retina":"data-src",images=this,loaded;this.one("unveil",function(){var source=this.getAttribute(attrib);source=source||this.getAttribute("data-src");if(source){this.setAttribute("src",source);if(typeof callback==="function")callback.call(this);}});function unveil(){var inview=images.filter(function(){var $e=$(this),wt=$w.scrollTop(),wb=wt+$w.height(),et=$e.offset().top,eb=et+$e.height();return eb>=wt-th&&et<=wb+th;});loaded=inview.trigger("unveil");images=images.not(loaded);}$w.scroll(unveil);$w.resize(unveil);unveil();return this;};})(window.jQuery||window.Zepto);

(function () {
    var GraphTree = function () {
        this.width = 960
        this.height = 600;
        if ($('#d3me').width() < 960) {
            this.width = $('#d3me').width()     
        }
        this.color = d3.scale.category10();

        this.zoom = 2;
        this.force = d3.layout.force()
            .distance(50 * this.zoom)
            .charge(-150 * this.zoom)
            // .linkDistance(50 * this.zoom)
            // .linkStrength(0.3)
            .gravity(0.1)
            .size([this.width, this.height]);
 
        this.svg = d3.select("div#d3me").append("svg")
            .attr("width", this.width)
            .attr("height", this.height);

        this.complete_graph = {}
        this.params = {'center': 'Vinh','degree': 5}
    }

    GraphTree.prototype.redraw = function () {
        this.svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
    }

    GraphTree.prototype.repaint = function (params) {
        d3.selectAll('.node').remove();
        d3.selectAll('.link').remove();
        if (params['center'] && params['degree']) {
            this.force.gravity(0.03);
        }
        this.display_graph()
    }

    GraphTree.prototype.set_links = function (graph) {
        this.complete_graph = graph
    }

    GraphTree.prototype.display_graph = function () {
        var t = this
        var json = this.complete_graph
        var svg = this.svg
        var force = this.force

        var graph = this.complete_graph
            , zoom = this.zoom
            , center = this.params['center']
            , node_size = 16 * zoom
            , node_text_size = 8 * zoom + "px"
            , color = this.color

        this.force
            .nodes(graph.nodes)
            .links(graph.links)
            .start();

        var link = this.svg.selectAll(".link")
            .data(graph.links)
            .enter().append("line")
            .attr("class", "link")
            // .attr("title", function(d) {return d.value + ' '})
            .style("stroke-width", function (d) {
                return d.value * 10;
            });

        link.append("svg:title").text(function (d) {
            return d.value + ' '
        });

        var node = this.svg.selectAll(".node")
            .data(graph.nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(this.force.drag);

        node.append("circle")
            .attr("r", function (d) {
                // return node_size ;// * 2 * d.value
                return d.size * zoom
            })
            .attr('class', function (d) {
                return d.name === center ? 'center-node' : ''
            })
            .style("fill", function (d) {
                return color(d.group)
            });

        node.append("image")
          .attr("xlink:href", function (d) {
            if (typeof d.icon === 'undefined' || d.icon == '') {
                return "//axcoto.com/images/axcoto-fav.png"
            }
            return '//axcoto.com/images/graph/' + d.icon
          })
          .attr("x", -45)
          .attr("y", -45)
          .attr("width", function (d) {
            return d.size * zoom
          })
        .attr("height", function (d) {
            return d.size * zoom
          });
        node.append("text")
            .text(function (d) {
                return d.name.substr(0, 5)
            })
            .style("fill", "white")
            .style("text-anchor", "middle")
            .style("font-size", node_text_size)
            .style("font-family", "helvetica")
            
        node.on('click', function (d, i, event) {
            if (typeof d.url !== 'undefined' || d.url !=='') {
                var win=window.open(d.url, '_blank');
                win.focus();
            }    

            t.repaint({
                center: d.name,
                degree: 5
            });
            d3.event.stopPropagation();
        })

        node.on('mouseover', function () {
            d3.select(this)
                .select('circle')
                .style('stroke-width', 2)
                .style('z-index', 5)
                .style('stroke', '#333')
                .attr("r", function (d) {
                    var len = d.name.length
                    return Math.max(node_size * 1.2, node_size * len / 5)
                });

            d3.select(this)
                .select('text')
                .text(function (d) {
                    return d.name
                });
        })

        d3.selectAll(".center-node").style('fill', '#f00')
        node.on('mouseout', function () {
            d3.select(this)
                .select('circle')
                .style('stroke-width', 0)
                .attr("r", function (d) {
                    //return node_size
                    return d.size * zoom
                });

            d3.select(this)
                .select('text')
                .text(function (d) {
                    return d.name.substr(0, 5)
                });
        })

        // node.append("title")
        //     .text(function(d) { return d.name; });
        // text.append("title")
        //     .text(function(d) { return d.name; });

        this.force.on("tick", function () {
            link.attr("x1", function (d) {
                return d.source.x;
            })
                .attr("y1", function (d) {
                    return d.source.y;
                })
                .attr("x2", function (d) {
                    return d.target.x;
                })
                .attr("y2", function (d) {
                    return d.target.y;
                });

            node.selectAll('circle')
                .attr("cx", function (d) {
                    return d.x;
                })
                .attr("cy", function (d) {
                    return d.y;
                });

            node.selectAll('text')
                .attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y;
                });

            node.selectAll('image')
                .attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y;
                })
            // node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });               
            
        });
        
    }

    var g = new GraphTree()
    d3.json("/me", function (error, graph) {
        g.set_links(graph);
        g.repaint({center: 'Vinh', degree: 5});
    })

})()

// Generated by CoffeeScript 1.6.3
var App;

App = (function() {
  function App(name) {
    this.name = name;
    this.filterPortfolio();
    this.validateForm();
    $('img.lazy').unveil();
    this.animateFolio();
  }

  App.prototype.filterPortfolio = function() {
    var buttons, folioContainer, sFolio;
    buttons = $('#portfolio-nav li');
    folioContainer = $('#portfolio');
    sFolio = $('#portfolio-source');
    if ($("a.project-thumb[rel=portfolio]").length) {
      $("a.project-thumb[rel=portfolio]").colorbox({
        transition: "elastic",
        slideshow: true
      });
    }
    return buttons.click(function(e) {
      var s, type;
      e.preventDefault();
      s = $(this);
      buttons.removeClass('current');
      s.addClass('current');
      type = $('a', s.attr('class'));
      $('li', folioContainer).remove();
      return $('li.'.concat(type), sFolio).clone(true).sort(function() {
        return Math.round(Math.random() % 3) - 1;
      }).css({
        skew: ['10deg', '10deg'],
        scale: 0,
        position: 'absolute',
        top: '-100px',
        left: '-100px'
      }).appendTo(folioContainer).fadeIn('slow').animate({
        skew: ['0deg', '0deg'],
        top: '0',
        left: '0',
        scale: 1
      }, 200, function() {
        return $(this).css({
          position: 'relative'
        });
      });
    });
  };

  App.prototype.animateFolio = function() {
    var $folio;
    $folio = $('#portfolio');
    if (!$folio.length) {
      return false;
    }
    return $('li', $folio).hover(function() {
      var deg, direction;
      deg = Math.round(Math.random() * 10) % 3 + 1;
      direction = ['-', '+'];
      deg = direction[Math.round(Math.random() * 10) % 2].concat(deg, '0deg');
      return $(this).animate({
        rotate: deg,
        'z-index': 2
      }, 200, 'linear');
    }, function() {
      return $(this).animate({
        rotate: '0deg',
        'z-index': 0
      });
    });
  };

  App.prototype.validateForm = function() {
    var isContact;
    isContact = $('#email-contact-form').length;
    return isContact && $('#email-contact-form').submit(function() {
      var reg;
      $('.error').remove();
      if ($('#name').val() === '') {
        $('#name').after('<label class="error">Please enter your name</label>');
        return false;
      }
      reg = new RegExp("^[0-9a-zA-Z]+@[0-9a-zA-Z]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$");
      if ($('#email').val() === '' || !reg.test($('#email').val())) {
        $('#email').after('<label class="error">Please enter an valid email</label>');
        return false;
      }
      return true;
    });
  };

  return App;

})();

(function($) {
  if ($ == null) {
    $ = jQuery;
  }
  return $(document).ready(function() {
    return new App("frontpage");
  });
})();

// Generated by CoffeeScript 1.6.3
(function() {
  var Bucket, Node, Terminal,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  String.prototype.paddingLeft = function(paddingValue) {
    return String(paddingValue + this).slice(-paddingValue.length);
  };

  Node = (function() {
    function Node(prop, name) {
      this.prop = prop;
      this.name = name != null ? name : false;
      this._isDir = true;
      if (typeof this.prop === 'string') {
        this.name = this.prop;
        return true;
      }
      if (typeof this.prop === 'object' && ((this.prop.info != null) || (this.prop.desc != null))) {
        this._isDir = false;
        if (this.name === false) {
          if (this.prop.title != null) {
            this.name = this.prop.title;
          }
          if (this.prop.name != null) {
            this.name = this.prop.name;
          }
          if (this.prop.file != null) {
            this.name = this.prop.file;
          }
        }
        return true;
      }
    }

    Node.prototype.isDir = function() {
      return this._isDir;
    };

    Node.prototype.info = function() {
      return this.prop;
    };

    Node.prototype.echo = function() {
      if (this.isDir()) {
        return "[[;#e67e22;#000]d]r-xr-xr-x\t[[b;#2ecc71;#000]kurei\tstaff]\t\t" + this.name.length.toString().paddingLeft("      ") + "\t[[;#e67e22;#000]" + this.name + "]";
      }
      return "[[;#e67e22;#]-r-xr-xr-x]\t[[b;#2ecc71;#000]kurei\tstaff]\t\t" + this.name.length.toString().paddingLeft("      ") + "\t[[;#b94a48;#000]" + this.name + "]";
    };

    Node.prototype.content = function() {
      var key, value, _ref, _results;
      if (this.isDir()) {
        return false;
      }
      _ref = this.prop;
      _results = [];
      for (key in _ref) {
        value = _ref[key];
        _results.push(key === 'info' || key === 'desc' ? value : void 0);
      }
      return _results;
    };

    return Node;

  })();

  Bucket = (function() {
    function Bucket(json) {
      this.bucket = $.parseJSON(json);
      this.stack = ['/', 'home', 'kurei'];
      this.home = '/home/kurei';
      this.wd = '/home/kurei';
    }

    Bucket.prototype.normalize = function(path) {
      return path.split("/").reduce(function(o, x) {
        return o[x];
      }, obj);
    };

    Bucket.prototype.pluck = function(path) {
      var i, l, norm_path, _i, _len;
      norm_path = [];
      path = path.split('/');
      l = path.length;
      for (_i = 0, _len = path.length; _i < _len; _i++) {
        i = path[_i];
        if (i !== '') {
          norm_path.push(i);
        }
      }
      return $.merge(['/'], norm_path).reduce(function(o, x) {
        if (typeof o === 'undefined') {
          return false;
        }
        return o[x];
      }, this.bucket);
    };

    Bucket.prototype.cd = function(path) {
      var current_dir, current_stack, i, _i, _len;
      path = path.trim(' ');
      if (path === '') {
        return true;
      }
      if (path === '/') {
        this.stack = ['/'];
        this.wd = '/';
        return true;
      }
      if (path === '~') {
        this.stack = ['/', 'home', 'kurei'];
        this.wd = '/home/kurei';
        return true;
      }
      current_dir = this.wd;
      current_stack = this.stack;
      if (path.charAt(0) === '/') {
        this.stack = ['/'];
        this.wd = '/';
      }
      if (path.charAt(0) === '~') {
        path = path.replace('~', this.home);
      }
      path = path.split('/');
      for (_i = 0, _len = path.length; _i < _len; _i++) {
        i = path[_i];
        switch (i) {
          case '':
          case '.':
          case '/':
            continue;
          case '..':
            this.stack.pop();
            break;
          default:
            this.stack.push(i);
        }
      }
      if (this.stack[0] === '/') {
        this.wd = '/' + this.stack.slice(1).join('/');
      } else {
        this.wd = '/' + this.stack.join('/');
      }
      if (typeof this.pluck(this.wd) === 'undefined' || this.pluck(this.wd) === false) {
        this.wd = current_dir;
        this.stack = current_stack;
        return "Invalid folder";
      }
      return true;
    };

    Bucket.prototype.ls = function(path) {
      var dir, i, item, ls, prop, _i, _len;
      if (typeof path === 'undefined' || path === '') {
        path = this.wd;
      }
      if (['/', '.', '..'].indexOf(path.charAt(0)) < 0) {
        path = [this.wd, path].join('/');
      }
      item = this.pluck(path);
      if (typeof item === 'undefined') {
        throw new Error("Invalid directory");
      }
      ls = [];
      if ($.isArray(item)) {
        for (_i = 0, _len = item.length; _i < _len; _i++) {
          i = item[_i];
          ls.push(new Node(i));
        }
        return ls;
      }
      if (((item.name != null) || (item.title != null)) && ((item.info != null) || (item.desc != null))) {
        return [new Node(item)];
      }
      for (dir in item) {
        prop = item[dir];
        ls.push(new Node(prop, dir));
      }
      return ls;
    };

    Bucket.prototype.pwd = function() {
      if (this.wd === this.home) {
        return '~';
      } else {
        return this.wd;
      }
    };

    return Bucket;

  })();

  Terminal = (function() {
    var _this = this;

    function Terminal(bucket, option) {
      var t,
        _this = this;
      this.bucket = bucket;
      this.parse_command = __bind(this.parse_command, this);
      t = this;
      $('#terminalme').terminal(function(input, term) {
        var e, result, _cmd;
        if (input.trim() === '') {
          input = 'help';
        }
        if (input == null) {
          input = 'help';
        }
        _cmd = t.parse_command(input);
        try {
          result = t.sh[_cmd.c].call(t, term, _cmd.o);
          if (result !== true) {
            return term.error(new String(result));
          }
          return true;
        } catch (_error) {
          e = _error;
          term.echo('available command: help, uname, contact, ls, product, lab, echo, mail');
        }
        return true;
      }, $.extend(option, {
        prompt: function(p) {
          return p(['[kurei@axcoto.com]', t.bucket.pwd(), '➜ '].join(' '));
        }
      }));
    }

    Terminal.prototype.parse_command = function(input) {
      var s;
      if (input === '') {
        return {
          c: 'help',
          o: false
        };
      }
      s = input.replace(/\s+/, ' ').split(' ');
      if (typeof this.sh[s[0]] === 'undefined') {
        return {
          c: 'not_found',
          o: s
        };
      }
      if (s.length === 1) {
        return {
          c: s[0],
          o: false
        };
      }
      return {
        c: s[0],
        o: s.splice(1)
      };
    };

    Terminal.prototype.sh = {
      not_found: function(term, opt) {
        term.error("Command " + opt[0] + ' not found. Try help to see available commands.');
        return true;
      },
      cd: function(term, opt) {
        var $result;
        if (typeof opt[0] === 'undefined' && opt[0] === '') {
          return true;
        }
        if (true === ($result = this.bucket.cd(opt[0]))) {
          term.echo("You are in : " + this.bucket.pwd());
          return true;
        } else {
          return $result;
        }
      },
      whoami: function(term, opt) {
        term.echo("kurei");
        return true;
      },
      find: function(term, opt) {
        if (opt === false) {
          return "find search_term";
        }
        term.echo("Google in a new tab :-) " + opt.join(' '));
        return true;
      },
      whereami: function(term, opt) {
        term.echo("Your Ip: ");
        return true;
      },
      help: function(term, opt) {
        var c, commands;
        commands = [];
        for (c in this.sh) {
          if (c !== 'not_found') {
            commands.push("[[b;#fff;#f89406;] " + c + " ]");
          }
        }
        term.echo("Available commands:\n\t" + commands.join(', '));
        return true;
      },
      ls: function(term, opt) {
        var error, ls, node, _i, _len;
        if (typeof term === 'undefined') {
          return true;
        }
        try {
          ls = this.bucket.ls(opt[0]);
          console.log(ls);
          for (_i = 0, _len = ls.length; _i < _len; _i++) {
            node = ls[_i];
            console.log(node);
            if (typeof term !== 'undefined') {
              term.echo(node.echo());
            }
          }
          return true;
        } catch (_error) {
          error = _error;
          return error;
        }
      },
      pwd: function(term, opt) {
        term.echo("\t" + this.bucket.pwd());
        return true;
      },
      cat: function(term, opt) {
        var ls;
        if (opt.length === 0) {
          return "Missing file name";
        }
        ls = this.bucket.ls(opt.join('').trim());
        if ((ls == null) || ls.length === 0) {
          return "File not found";
        }
        if (ls.length === 1 && ls[0] instanceof Node) {
          ls = ls[0];
          term.echo("[[b;#faff6b;#000]" + ls.content() + "]");
          return true;
        }
        return [opt[0], "is a directory"].join(' ');
      },
      curl: function(term, opt) {
        var k, _i, _len, _ref;
        _ref = this.bucket;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          k = _ref[_i];
          term.echo(k);
        }
        return true;
      },
      contact: function(term, opt) {
        term.echo("echo 'Message body' | mail -s 'Subject' ");
        return true;
      }
    };

    return Terminal;

  }).call(this);

  (function($) {
    var bucket;
    if ($ == null) {
      $ = jQuery;
    }
    bucket = new Bucket($('#bucket').text());
    if (typeof this.bucket !== 'object') {
      bucket = {
        shop: [],
        products: [],
        lab: [],
        work: []
      };
    }
    return new Terminal(bucket, {
      greetings: "[[;#2ecc71;#000]Welcome, let type `help` to get around.]\nMake sure to check out file system wtih `ls /` too ;)\n\n .--.                   .-.      \n: .; :                 .' `.     \n:    :.-.,-. .--.  .--.`. .'.--. \n: :: :`.  .''  ..'' .; :: :' .; :\n:_;:_;:_,._;`.__.'`.__.':_;`.__.' ",
      name: 'kurei',
      height: 600,
      onResize: function(term) {
        return term;
      }
    });
  })();

}).call(this);

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-17051798-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();