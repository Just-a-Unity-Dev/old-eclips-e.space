(()=>{var e={987:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,"",""]);const i=s},646:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,".window{width:800px;height:400px;background-color:#f1f1f1;color:#fff}.window .header{width:100%;height:50px;background-color:#383838;line-height:50px;cursor:move;color:#fff}.window .content{padding:10px;overflow:auto;height:350px}.window .content p{color:#000}.window .content h1{color:#000}.window .content h2{color:#000}.window .content h3{color:#000}",""]);const i=s},278:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,'form{width:auto;margin:auto;text-align:center;font-family:"Cascadia Code",monospace;left:50%;top:50%;position:absolute;transform:translate(-50%, -50%)}.input{background-color:#111;color:#fff;border:none;font-family:"Cascadia Code",monospace;font-size:1.5rem;padding:.5rem;border-radius:.5rem;text-align:left}.input *{text-align:center}.button{background-color:#fff;color:#111;border:none;font-family:"Cascadia Code",monospace;font-size:1.5rem;padding:.5rem;border-radius:.5rem;cursor:pointer;text-align:center}.button *{text-align:center}',""]);const i=s},192:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,"@import url(https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/cascadia-code.min.css);"]),s.push([e.id,'*{color:#ecf0f1}canvas{width:100vw;height:100vh;display:block;position:fixed;top:0;left:0;z-index:-9999}body{background-color:#000}h1{font-family:"Cascadia Code",sans-serif;color:#ecf0f1}h2{font-family:"Cascadia Code",sans-serif;color:#ecf0f1}h3{font-family:"Cascadia Code",sans-serif;color:#ecf0f1}h4{font-family:"Cascadia Code",sans-serif;color:#ecf0f1}h5{font-family:"Cascadia Code",sans-serif;color:#ecf0f1}h6{font-family:"Cascadia Code",sans-serif;color:#ecf0f1}p{font-family:"Cascadia Code",sans-serif}a{color:#3498db;font-family:"Cascadia Code",sans-serif;transition:font-size 500ms;font-size:1rem;transition-timing-function:ease}a:visited{text-decoration:none;color:#2980b9}a:hover{text-decoration:none;color:#c0392b;font-size:1.2rem}code{background-color:#d8d8d8}',""]);const i=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var f=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=r(p,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},393:()=>{let e=document.getElementById("login"),t=document.getElementById("register");t&&t.addEventListener("submit",(e=>{e.preventDefault(),async function(e){const t=e.username,n=e.password,o=e.bio,r=e.profile_pic;console.log(e);const a=document.location.href+"/../api/accounts/register";await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n,bio:o,profile_pic:r})}).then((e=>{console.log(e.body),400==e.status&&(document.getElementById("error_p").innerHTML=e.json().error,console.log("400"))}))}({username:t.elements[0].value,password:t.elements[1].value})})),e&&e.addEventListener("submit",(t=>{t.preventDefault(),async function(e){const t=e.username,n=e.password;console.log(e);const o=document.location.href+"/../api/accounts/login";await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})}).then((e=>e.json())).then((e=>{console.log(e)}))}({username:e.elements[0].value,password:e.elements[1].value})}))},158:()=>{var e,t,n,o=[];(e=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e3)).position.z=5,t=new THREE.Scene,(n=new THREE.WebGLRenderer).setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement),function(){for(var e=-1e3;e<1e3;e+=75){var n=new THREE.SphereGeometry(.5,32,32),r=new THREE.MeshBasicMaterial({color:16777215}),a=new THREE.Mesh(n,r);a.position.x=1e3*Math.random()-500,a.position.y=1e3*Math.random()-500,a.position.z=e,a.scale.x=a.scale.y=2,t.add(a),o.push(a)}}(),function r(){requestAnimationFrame(r),n.render(t,e),function(){for(var e=0;e<o.length;e++){const t=o[e];t.position.z+=e/10,t.position.z>1e3&&(t.position.z-=2e3)}}()}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),s=n.n(a),i=n(565),c=n.n(i),d=n(216),l=n.n(d),u=n(589),f=n.n(u),p=n(192),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var h=n(646),v={};v.styleTagTransform=f(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),t()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var y=n(987),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),t()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals;var b=n(278),w={};w.styleTagTransform=f(),w.setAttributes=c(),w.insert=s().bind(null,"head"),w.domAPI=r(),w.insertStyleElement=l(),t()(b.Z,w),b.Z&&b.Z.locals&&b.Z.locals,n(393),n(158)})()})();