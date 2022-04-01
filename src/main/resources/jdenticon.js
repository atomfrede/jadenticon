// Jdenticon 3.1.1 | jdenticon.com | MIT licensed | (c) 2014-2021 Daniel Mester Pirttijärvi
!function(t,n){var i=function(t){"use strict";function n(t,n,i){return parseInt(t.substr(n,i),16)}function i(t){return(t|=0)<0?"00":t<16?"0"+t.toString(16):t<256?t.toString(16):"ff"}function e(t,n,e){return i(255*((e=e<0?e+6:e>6?e-6:e)<1?t+(n-t)*e:e<3?n:e<4?t+(n-t)*(4-e):t))}function r(t){if(/^#[0-9a-f]{3,8}$/i.test(t)){var n,i=t.length;if(i<6){var e=t[1],r=t[2],o=t[3],u=t[4]||"";n="#"+e+e+r+r+o+o+u+u}return(7==i||i>8)&&(n=t),n}}function o(t){var i,e=n(t,7,2);isNaN(e)?i=t:i="rgba("+n(t,1,2)+","+n(t,3,2)+","+n(t,5,2)+","+(e/255).toFixed(2)+")";return i}function u(t,n,r){var o;if(0==n){var u=i(255*r);o=u+u+u}else{var f=r<=.5?r*(n+1):r+n-r*n,h=2*r-f;o=e(h,f,6*t+2)+e(h,f,6*t)+e(h,f,6*t-2)}return"#"+o}function f(t,n,i){var e=[.55,.5,.5,.46,.6,.55,.55][6*t+.5|0];return u(t,n,i=i<.5?i*e*2:e+(i-.5)*(1-e)*2)}var h=t,s={G:"jdenticon_config",n:"config"},a={};function c(t){a=t}function v(t){return arguments.length&&(a[s.n]=t),a[s.n]}function l(t,n){var i="object"==typeof t&&t||a[s.n]||h[s.G]||{},e=i.lightness||{},o=i.saturation||{},u="color"in o?o.color:o,f=o.grayscale,c=i.backColor,v=i.padding;function l(t,n){var i=e[t];return i&&i.length>1||(i=n),function(t){return(t=i[0]+t*(i[1]-i[0]))<0?0:t>1?1:t}}function g(t){var n,e=i.hues;return e&&e.length>0&&(n=e[0|.999*t*e.length]),"number"==typeof n?(n/360%1+1)%1:t}return{X:g,p:"number"==typeof u?u:.5,H:"number"==typeof f?f:0,q:l("color",[.4,.8]),I:l("grayscale",[.3,.9]),J:r(c),Y:"number"==typeof t?t:"number"==typeof v?v:n}}var g=1,d=2,p={t:"data-jdenticon-hash",o:"data-jdenticon-value"},y="["+p.t+"],["+p.o+"]",m="undefined"!=typeof document&&document.querySelectorAll.bind(document);function b(t){if(t){var n=t.tagName;if(/^svg$/i.test(n))return g;if(/^canvas$/i.test(n)&&"getContext"in t)return d}}function w(t){"undefined"!=typeof MutationObserver&&new MutationObserver((function(n){for(var i=0;i<n.length;i++){for(var e=n[i],r=e.addedNodes,o=0;r&&o<r.length;o++){var u=r[o];if(1==u.nodeType)if(b(u))t(u);else for(var f=u.querySelectorAll(y),h=0;h<f.length;h++)t(f[h])}"attributes"==e.type&&b(e.target)&&t(e.target)}})).observe(document.body,{childList:!0,attributes:!0,attributeFilter:[p.o,p.t,"width","height"],subtree:!0})}function x(t,n){this.x=t,this.y=n}function A(t,n,i,e){this.u=t,this.v=n,this.K=i,this.Z=e}A.prototype.L=function(t,n,i,e){var r=this.u+this.K,o=this.v+this.K,u=this.Z;return 1===u?new x(r-n-(e||0),this.v+t):2===u?new x(r-t-(i||0),o-n-(e||0)):3===u?new x(this.u+n,o-t-(i||0)):new x(this.u+t,this.v+n)};var S=new A(0,0,0,0);function j(t){this.M=t,this.A=S}var C=j.prototype;function M(t,n,i,e){var r,o,u,f,h,s;(t%=14)?1==t?(u=0|.5*i,f=0|.8*i,n.j(i-u,0,u,f,2)):2==t?(u=0|i/3,n.i(u,u,i-u,i-u)):3==t?(s=i<6?1:i<8?2:0|.25*i,h=(h=.1*i)>1?0|h:h>.5?1:h,n.i(s,s,i-h-s,i-h-s)):4==t?(o=0|.15*i,u=0|.5*i,n.h(i-u-o,i-u-o,u)):5==t?((s=4*(h=.1*i))>3&&(s|=0),n.i(0,0,i,i),n.g([s,s,i-h,s,s+(i-s-h)/2,i-h],!0)):6==t?n.g([0,0,i,0,i,.7*i,.4*i,.4*i,.7*i,i,0,i]):7==t?n.j(i/2,i/2,i/2,i/2,3):8==t?(n.i(0,0,i,i/2),n.i(0,i/2,i/2,i/2),n.j(i/2,i/2,i/2,i/2,1)):9==t?(h=.14*i,s=i<4?1:i<6?2:0|.35*i,h=i<8?h:0|h,n.i(0,0,i,i),n.i(s,s,i-s-h,i-s-h,!0)):10==t?(s=3*(h=.12*i),n.i(0,0,i,i),n.h(s,s,i-h-s,!0)):11==t?n.j(i/2,i/2,i/2,i/2,3):12==t?(o=.25*i,n.i(0,0,i,i),n.N(o,o,i-o,i-o,!0)):!e&&(o=.4*i,u=1.2*i,n.h(o,o,u)):(r=.42*i,n.g([0,0,i,0,i,i-2*r,i-r,i,0,i]))}function N(t,n,i){var e;(t%=4)?1==t?n.j(0,i/2,i,i/2,0):2==t?n.N(0,0,i,i):(e=i/6,n.h(e,e,i-2*e)):n.j(0,0,i,i,0)}function T(t,n){return[f(t=n.X(t),n.H,n.I(0)),f(t,n.p,n.q(.5)),f(t,n.H,n.I(1)),f(t,n.p,n.q(1)),f(t,n.p,n.q(0))]}function k(t,i,e){var r=l(e,.08);r.J&&t.m(r.J);var o=t.k,u=.5+o*r.Y|0;o-=2*u;var f=new j(t),h=0|o/4,s=0|u+o/2-2*h,a=0|u+o/2-2*h;function c(e,r,o,u,c){var v=n(i,o,1),l=u?n(i,u,1):0;t.O(g[d[e]]);for(var p=0;p<c.length;p++)f.A=new A(s+c[p][0]*h,a+c[p][1]*h,h,l++%4),r(v,f,h,p);t.P()}var v,g=T(n(i,-7)/268435455,r),d=[];function p(t){if(t.indexOf(v)>=0)for(var n=0;n<t.length;n++)if(d.indexOf(t[n])>=0)return!0}for(var y=0;y<3;y++)v=n(i,8+y,1)%g.length,(p([0,4])||p([2,3]))&&(v=1),d.push(v);c(0,N,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),c(1,N,4,5,[[0,0],[3,0],[3,3],[0,3]]),c(2,M,1,null,[[1,1],[2,1],[2,2],[1,2]]),t.finish()}function I(t){var n,i=40,e=16,r=0,o=0,u=encodeURI(t)+"%80",f=[],h=[],s=1732584193,a=4023233417,c=~s,v=~a,l=3285377520,g=[s,a,c,v,l],d=0,p="";function y(t,n){return t<<n|t>>>32-n}for(;r<u.length;o++)f[o>>2]=f[o>>2]|("%"==u[r]?parseInt(u.substring(r+1,r+=3),16):u.charCodeAt(r++))<<8*(3-(3&o));for(f[(n=(1+(o+7>>6))*e)-1]=8*o-8;d<n;d+=e){for(r=0;r<80;r++)o=y(s,5)+l+(r<20?1518500249+(a&c^~a&v):r<40?1859775393+(a^c^v):r<60?2400959708+(a&c^a&v^c&v):3395469782+(a^c^v))+(h[r]=r<e?0|f[d+r]:y(h[r-3]^h[r-8]^h[r-14]^h[r-16],1)),l=v,v=c,c=y(a,30),a=s,s=o;g[0]=s=g[0]+s|0,g[1]=a=g[1]+a|0,g[2]=c=g[2]+c|0,g[3]=v=g[3]+v|0,g[4]=l=g[4]+l|0}for(r=0;r<i;r++)p+=(g[r>>3]>>>4*(7-(7&r))&15).toString(16);return p}function O(t){return/^[0-9a-f]{11,}$/i.test(t)&&t}function P(t){return I(null==t?"":""+t)}function F(t,n){var i=t.canvas,e=i.width,r=i.height;t.save(),n||(n=Math.min(e,r),t.translate((e-n)/2|0,(r-n)/2|0)),this.l=t,this.k=n,t.clearRect(0,0,n,n)}C.g=function(t,n){for(var i=this,e=n?-2:2,r=[],o=n?t.length-2:0;o<t.length&&o>=0;o+=e)r.push(i.A.L(t[o],t[o+1]));this.M.g(r)},C.h=function(t,n,i,e){var r=this.A.L(t,n,i,i);this.M.h(r,i,e)},C.i=function(t,n,i,e,r){this.g([t,n,t+i,n,t+i,n+e,t,n+e],r)},C.j=function(t,n,i,e,r,o){var u=[t+i,n,t+i,n+e,t,n+e,t,n];u.splice((r||0)%4*2,2),this.g(u,o)},C.N=function(t,n,i,e,r){this.g([t+i/2,n,t+i,n+e/2,t+i/2,n+e,t,n+e/2],r)};var R=F.prototype;function q(t,n,i,e){if(!t)throw new Error("No canvas specified.");k(new F(t,i),O(n)||P(n),e)}function B(t){return(10*t+.5|0)/10}function L(){this.B=""}R.m=function(t){var n=this.l,i=this.k;n.fillStyle=o(t),n.fillRect(0,0,i,i)},R.O=function(t){var n=this.l;n.fillStyle=o(t),n.beginPath()},R.P=function(){this.l.fill()},R.g=function(t){var n=this.l;n.moveTo(t[0].x,t[0].y);for(var i=1;i<t.length;i++)n.lineTo(t[i].x,t[i].y);n.closePath()},R.h=function(t,n,i){var e=this.l,r=n/2;e.moveTo(t.x+r,t.y+r),e.arc(t.x+r,t.y+r,r,0,2*Math.PI,i),e.closePath()},R.finish=function(){this.l.restore()};var D=L.prototype;function U(t){this.C,this.D={},this.R=t,this.k=t.k}D.g=function(t){for(var n="",i=0;i<t.length;i++)n+=(i?"L":"M")+B(t[i].x)+" "+B(t[i].y);this.B+=n+"Z"},D.h=function(t,n,i){var e=i?0:1,r=B(n/2),o=B(n),u="a"+r+","+r+" 0 1,"+e+" ";this.B+="M"+B(t.x)+" "+B(t.y+n/2)+u+o+",0"+u+-o+",0"};var $=U.prototype;$.m=function(t){var i=/^(#......)(..)?/.exec(t),e=i[2]?n(i[2],0)/255:1;this.R.m(i[1],e)},$.O=function(t){this.C=this.D[t]||(this.D[t]=new L)},$.P=function(){},$.g=function(t){this.C.g(t)},$.h=function(t,n,i){this.C.h(t,n,i)},$.finish=function(){var t=this,n=this.D;for(var i in n)n.hasOwnProperty(i)&&t.R.S(i,n[i].B)};var G={T:"http://www.w3.org/2000/svg",U:"width",V:"height"};function H(t){this.k=t,this.F='<svg xmlns="'+G.T+'" width="'+t+'" height="'+t+'" viewBox="0 0 '+t+" "+t+'">'}var J=H.prototype;function K(t,n,i){var e=new H(n);return k(new U(e),O(t)||P(t),i),e.toString()}function V(t,n){for(var i=[],e=arguments.length-2;e-- >0;)i[e]=arguments[e+2];for(var r=document.createElementNS(G.T,n),o=0;o+1<i.length;o+=2)r.setAttribute(i[o],i[o+1]);t.appendChild(r)}function W(t){var n=this.k=Math.min(Number(t.getAttribute(G.U))||100,Number(t.getAttribute(G.V))||100);for(this.W=t;t.firstChild;)t.removeChild(t.firstChild);t.setAttribute("viewBox","0 0 "+n+" "+n),t.setAttribute("preserveAspectRatio","xMidYMid meet")}J.m=function(t,n){n&&(this.F+='<rect width="100%" height="100%" fill="'+t+'" opacity="'+n.toFixed(2)+'"/>')},J.S=function(t,n){this.F+='<path fill="'+t+'" d="'+n+'"/>'},J.toString=function(){return this.F+"</svg>"};var Y=W.prototype;function Z(){m&&E(y)}function E(t,n,i){X(t,n,i,(function(t,n){if(n)return n==g?new U(new W(t)):new F(t.getContext("2d"))}))}function X(t,n,i,e){if("string"!=typeof t){var r=O(n)||null!=n&&P(n)||O(t.getAttribute(p.t))||t.hasAttribute(p.o)&&P(t.getAttribute(p.o));if(r){var o=e(t,b(t));o&&k(o,r,i)}}else if(m)for(var u=m(t),f=0;f<u.length;f++)X(u[f],n,i,e)}function Q(t,n){return this.each((function(i,e){E(e,t,n)})),this}Y.m=function(t,n){n&&V(this.W,"rect",G.U,"100%",G.V,"100%","fill",t,"opacity",n)},Y.S=function(t,n){V(this.W,"path","fill",t,"d",n)};var _=Z;c(_),_.configure=v,_.drawIcon=q,_.toSvg=K,_.update=E,_.updateCanvas=E,_.updateSvg=E,_.version="3.1.1",_.bundle="browser-umd";var z=h.jQuery;z&&(z.fn.jdenticon=Q);function tt(){var t=(_[s.n]||h[s.G]||{}).replaceMode;"never"!=t&&(Z(),"observe"==t&&w(E))}"function"==typeof setTimeout&&setTimeout(tt,0);return _}(t);"undefined"!=typeof module&&"exports"in module?module.exports=i:"function"==typeof define&&define.amd?define([],(function(){return i})):t.jdenticon=i}("undefined"!=typeof self?self:this);
//# sourceMappingURL=jdenticon.min.js.map