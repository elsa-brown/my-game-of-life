function e(e,t,l,n){Object.defineProperty(e,t,{get:l,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=l.parcelRequiref626;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},l.parcelRequiref626=o),o.register("27Lyk",(function(t,l){var n,r;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var o={};n=function(e){for(var t=Object.keys(e),l=0;l<t.length;l++)o[t[l]]=e[t[l]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"9vqfN":"index.4605ad72.js","2M7TJ":"bloom-1-1x.febed305.gif","hfy9H":"bloom-2-1x.306acb87.gif","bmNnK":"bloom-3-1x.7f5cc346.gif","4LUYw":"bloom-4-1x.c4ae85af.gif","5jKE5":"bloom-5-72px.db436b77.gif"}'));var a;a=new URL(o("27Lyk").resolve("2M7TJ"),import.meta.url).toString();var i;i=new URL(o("27Lyk").resolve("hfy9H"),import.meta.url).toString();var d;d=new URL(o("27Lyk").resolve("bmNnK"),import.meta.url).toString();var s;s=new URL(o("27Lyk").resolve("4LUYw"),import.meta.url).toString();var c;c=new URL(o("27Lyk").resolve("5jKE5"),import.meta.url).toString();const u=[t(a),t(i),t(d),t(s),t(c)],m=document.getElementById("main"),f=(document.getElementById("canvas"),document.getElementById("audioPlayer")),g=document.getElementById("fireAudioPlayer"),v=document.getElementById("play"),y=document.getElementById("clear"),p=document.getElementById("sound"),h={width:18,height:18,interval:null,cells:{},playing:!1,hasPlayed:!1},E=()=>{const e=(()=>{let e;const t=Object.keys(h.cells).length;console.log("total: ",t);const l=Object.values(h.cells).filter((e=>"dead"===e)).length+70;return console.log("adjusted: ",l),console.log(l/t),e=e?l/t:0,console.log("volumeFire: ",e),e})();console.log(e);const t=(e=>{let t;return h.hasPlayed?(h.hasPlayed=!!h.hasPlayed,t=.5):t=1-e,t})(e);g.volume=e,f.volume=t},b=(e,t)=>{let l=document.getElementById(`${t}-${e}`);return l?(l.xCoord=t,l.yCoord=e,l):null},L=e=>{for(let t=0;t<h.width;t++)for(let l=0;l<h.height;l++){e(b(l,t),l,t)}},w=(e,t,l)=>{let n=((e,t,l)=>{let n=[];for(let e=l-1;e<=l+1;e++)for(let r=t-1;r<=t+1;r++)if((e!==l||r!==t)&&e>-1&&r>-1){let t=e+"-"+r;t&&n.push(t)}return n})(0,t,l),r=(e=>{let t=0;return e.map((e=>document.getElementById(e))).forEach((e=>{e&&e.classList.contains("alive")&&t++})),t})(n),o=e.classList;return o.contains("alive")?r<2||r>3?"dead":o:3===r?"alive":"dormant"},H=()=>{let e=Math.floor(5*Math.random());return u[e]},_=e=>{for(let t in e)if(e.hasOwnProperty(t)){let l=e[t];h.cells[t]=l;let n=document.getElementById(t);n.className=l,"alive"===n.className&&(n.querySelector("img").src=H())}console.log("setting"),E()},x=()=>{let e=Object.assign({},h.cells);L(((t,l,n)=>{e[`${n}-${l}`]=w(t,l,n)})),_(e)};let I=!1;v.addEventListener("click",(()=>(()=>{if(h.playing)clearInterval(h.interval),h.interval=null,v.innerHTML="Play",h.playing=!1;else{let e=Object.assign({},h.cells);L(((t,l,n)=>{Math.floor((l+n)*Math.random())%5==0&&(e[`${n}-${l}`]="alive")})),_(e),v.innerHTML="Pause",h.playing=!0,h.interval=setInterval(x,4e3)}})())),y.addEventListener("click",(()=>(()=>{let e=Object.assign({},h.cells);L(((t,l,n)=>{e[`${n}-${l}`]="dormant"})),_(e),clearInterval(h.interval),h.interval=null,h.playing=!1,v.innerHTML="Play",f.volume=.3,h.firstPlay=!1})())),p.addEventListener("click",(()=>{I?(f.pause(),g.pause(),p.classList.add("off"),I=!1):(f.play(),g.play(),p.classList.remove("off"),I=!0)})),f.volume=.3,g.volume=0,(()=>{const e=document.createElement("tbody");m.appendChild(e);for(let t=0;t<h.width;t++){let l=document.createElement("tr");e.appendChild(l);for(let e=0;e<h.height;e++){h.cells[`${t}-${e}`]="dormant";let n=document.createElement("td"),r=document.createElement("img");n.id=`${t}-${e}`,n.className="dormant",n.appendChild(r),l.appendChild(n)}}})();
//# sourceMappingURL=index.4605ad72.js.map
