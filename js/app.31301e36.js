(function(t){function e(e){for(var n,c,s=e[0],a=e[1],u=e[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(b.length)b.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dfd97c21"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=c(t);var u=new Error;i=function(e){a.onerror=a.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}o[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"0aa0":function(t,e,r){},"0ecc":function(t,e,r){"use strict";r("1868")},1868:function(t,e,r){},"45ab":function(t,e,r){},"561c":function(t,e,r){"use strict";r("45ab")},5799:function(t,e,r){},"9ae0":function(t,e,r){},ade2:function(t,e,r){"use strict";r("5799")},cd49:function(t,e,r){"use strict";r.r(e);var n=r("7a23");const o=Object(n["j"])("a",{class:"github-fork-ribbon right-top",href:"https://github.com/ydarma/hey","data-ribbon":"Contribuer sur GitHub",title:"Contribuer sur GitHub"}," Contribute on GitHub ",-1),i={class:"d-flex flex-column h-100"},c=Object(n["k"])("A propos");function s(t,e,r,s,a,u){const l=Object(n["H"])("b-icon"),d=Object(n["H"])("b-button"),b=Object(n["H"])("table-of-content"),h=Object(n["H"])("b-card"),p=Object(n["H"])("router-view");return Object(n["B"])(),Object(n["i"])(n["b"],null,[o,Object(n["j"])("div",i,[Object(n["l"])(h,{class:"sticky-top"},{default:Object(n["O"])(()=>[Object(n["l"])(d,{class:"mx-1",variant:"success",to:"/"},{default:Object(n["O"])(()=>[Object(n["l"])(l,{icon:"house"})]),_:1}),Object(n["l"])(b,{class:"mx-1"}),Object(n["l"])(d,{class:"mx-1",variant:"info",to:"/about"},{default:Object(n["O"])(()=>[c]),_:1})]),_:1}),Object(n["l"])(p,{class:"flex-fill"})])],64)}r("ab0d");function a(t,e,r,o,i,c){const s=Object(n["H"])("b-icon"),a=Object(n["H"])("b-button"),u=Object(n["H"])("b-dropdown-item-button"),l=Object(n["H"])("b-dropdown-divider"),d=Object(n["H"])("b-dropdown"),b=Object(n["H"])("b-button-group");return Object(n["B"])(),Object(n["g"])(b,{class:"mx-2"},{default:Object(n["O"])(()=>[Object(n["l"])(a,{variant:"secondary",disabled:!1===this.previous,onClick:e[0]||(e[0]=e=>t.open(t.previous))},{default:Object(n["O"])(()=>[Object(n["l"])(s,{icon:"arrow-left"})]),_:1},8,["disabled"]),Object(n["l"])(d,{id:"dropdown-1",text:"Table des matières"},{default:Object(n["O"])(()=>[(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(t.chapters,([e,r])=>(Object(n["B"])(),Object(n["g"])(u,{key:r,onClick:e=>t.open(r)},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(e),1)]),_:2},1032,["onClick"]))),128)),Object(n["l"])(l),(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(t.appendices,([e,r])=>(Object(n["B"])(),Object(n["g"])(u,{key:"ap"+r,onClick:e=>t.open(r)},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(e),1)]),_:2},1032,["onClick"]))),128))]),_:1}),Object(n["l"])(a,{variant:"secondary",disabled:!1===this.next,onClick:e[1]||(e[1]=e=>t.open(t.next))},{default:Object(n["O"])(()=>[Object(n["l"])(s,{icon:"arrow-right"})]),_:1},8,["disabled"])]),_:1})}var u=r("5502"),l=r("dfd0"),d=r("1020"),b=r.n(d),h=r("7c5c");const p=[{className:"comment",regex:";.*$"},{className:"string",regex:/".*[^"]("")*"/},{className:"number",regex:/[+-]?\d+/},{className:"def",regex:/\bdef\b/},{className:"constant",regex:/\b(green|blue|yellow|red|purple|grey|black|white|orange)\b(?![-0-9])/},{className:"operator",regex:/[():]|->/},{className:"keyword",regex:/\b(range|square|concat|c|repeat|r|slice|s)\b(?![-0-9])/}];var f=function(){return{name:"hey",contains:p.map(t=>({className:t.className,begin:t.regex}))}};function g(t){b.a.registerLanguage("hey",f);const e=h["marked"].setOptions({highlight:(t,e)=>b.a.highlight(t,{language:e}).value})(t);return e}var O=r("e409"),j=r.n(O);function m(t){j()(".language-hey").parent().each((e,r)=>{j()(r).append(j()("<button/>").text("Essayer").addClass("btn btn-outline-primary btn-sm m-2").on({click:()=>{t(j()(r).find("code").prop("innerText").trim())}}))})}function v(){const t=j()(".language-hey").filter((t,e)=>{var r,n;return/^;.*solution$/.test(null!==(n=null===(r=e.firstChild)||void 0===r?void 0:r.textContent)&&void 0!==n?n:"")});t.each((t,e)=>{const r=j()(e).parent().children();let n=!0;const o=j()("<button/>").text("Montrer la solution").addClass("btn btn-outline-warning btn-sm m-2").on({click:()=>{n?(j()(r).show(),o.text("Masquer la solution")):(j()(r).hide(),o.text("Montrer la solution")),n=!n}});j()(r).parent().append(o),j()(r).hide()})}function y(t){return Object(l["a"])(`/book/${t}.md`).text().then(t=>g(t))}const w="0 - Cover.md\n1 - Introduction.md\n2 - Ada Lovelace.md\n3 - Data.md\nA - hey documentation.md".split("\n").map((t,e)=>[t.replace(/.md$/,""),e]);var k={toc:w,open:y,tryit:m,solution:v},x=Object(n["m"])({props:[],data:function(){return{current:0}},computed:{chapters(){return k.toc.filter(([t])=>/^\d/.test(t))},appendices(){return k.toc.filter(([t])=>/^[A-Z]/.test(t))},previous(){return this.current>0&&this.current-1},next(){return this.current<k.toc.length-1&&this.current+1},title(){return this.$route.query.title}},methods:Object.assign(Object.assign({},Object(u["c"])(["setChapter"])),{open(t){this.current=t,this.$router.push({path:"/",query:{title:k.toc[t][0]}})}}),watch:{title(t){this.current=k.toc.findIndex(([e])=>e==t)}}}),H=r("6b0d"),S=r.n(H);const C=S()(x,[["render",a]]);var E=C,A=Object(n["m"])({components:{TableOfContent:E}});r("ade2");const P=S()(A,[["render",s]]);var B=P,L=r("6c02");const $={class:"home m-3 d-flex flex-row h-100"},_={class:"p-2 w-50"},M={class:"p-2 w-50"},T={class:"d-flex flex-column h-100 exec-pane"},q={class:"p-2 flex-fill result"};function z(t,e,r,o,i,c){const s=Object(n["H"])("book-viewer"),a=Object(n["H"])("HeyEditor"),u=Object(n["H"])("b-icon"),l=Object(n["H"])("b-button"),d=Object(n["H"])("HeyOut");return Object(n["B"])(),Object(n["i"])("div",$,[Object(n["j"])("div",_,[Object(n["l"])(s)]),Object(n["j"])("div",M,[Object(n["j"])("div",T,[Object(n["l"])(a,{class:"mb-2 border rounded p-1 flex-fill editor"}),Object(n["j"])("div",null,[Object(n["l"])(l,{variant:"danger",class:"mx-3",pill:"",onClick:e[0]||(e[0]=e=>t.exec())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"play"})]),_:1}),Object(n["l"])(l,{variant:"secondary",class:"mr-3",pill:"",onClick:e[1]||(e[1]=e=>t.clear())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"x"})]),_:1})]),Object(n["j"])("div",q,[Object(n["l"])(d)])])])])}const N=Object(n["j"])("div",{id:"editor"},null,-1),V=[N];function F(t,e,r,o,i,c){return Object(n["B"])(),Object(n["i"])("div",null,V)}var R=r("9ab4"),I=r("6d4f"),G=r.n(I);r("65d8");const D=G.a.require("ace/lib/oop"),J=G.a.require("ace/mode/text").Mode,K=G.a.require("ace/mode/text_highlight_rules").TextHighlightRules,Z=function(){this.$rules={start:p.map(t=>({token:t.className,regex:t.regex}))}};D.inherits(Z,K);const Q=function(){this.HighlightRules=Z};D.inherits(Q,J);class U{constructor(t){this.marker=0,this.editor=G.a.edit(t,{minLines:5,maxLines:20,fontSize:16,highlightActiveLine:!1,placeholder:"editeur de code hey!",printMargin:!1}),this.editor.session.setMode(new Q)}setProgram(t){this.resetError();const e=this.editor.session.getValue();e!=t&&this.editor.session.setValue(null!==t&&void 0!==t?t:"")}onProgramChange(t){this.editor.on("change",()=>t(this.editor.session.getValue()))}setError(t){if(this.resetError(),t){const e=new G.a.Range(t.line-1,t.col-1,t.line-1,t.col+2);this.marker=this.editor.session.addMarker(e,"alert alert-danger err py-2","text")}}resetError(){this.editor.session.removeMarker(this.marker),this.marker=0}}var W=function(t="editor"){let e;const r=new Promise(t=>e=t);return Object(n["z"])(()=>{const r=new U(t);e(r)}),{edit:t=>r.then(e=>{e.setProgram(t)}),onChange:t=>r.then(e=>{e.onProgramChange(t)}),setError:t=>r.then(e=>{e.setError(t)})}},X=(r("9ae0"),Object(n["m"])({name:"HeyEditor",props:[],data(){return{marker:0}},computed:Object.assign({},Object(u["d"])(["error","program"])),methods:Object.assign({},Object(u["c"])(["setProgram"])),setup(){return W()},beforeCreate(){this.$nextTick(()=>{this.edit(this.program),this.onChange(t=>this.setProgram(t))})},watch:{error(t){return Object(R["a"])(this,void 0,void 0,(function*(){this.setError(t)}))},program(t){return Object(R["a"])(this,void 0,void 0,(function*(){this.edit(t)}))}}}));const Y=S()(X,[["render",F]]);var tt=Y;function et(t,e,r,o,i,c){const s=Object(n["H"])("b-alert"),a=Object(n["H"])("hey-list"),u=Object(n["H"])("hey-value");return Object(n["B"])(),Object(n["i"])("div",null,[t.isError?(Object(n["B"])(),Object(n["g"])(s,{key:0,variant:"danger",show:""},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(t.error),1)]),_:1})):t.isArray?(Object(n["B"])(),Object(n["g"])(a,{key:1,output:t.output},null,8,["output"])):(Object(n["B"])(),Object(n["g"])(u,{key:2,output:t.output},null,8,["output"]))])}const rt={class:"d-flex flex-row flex-wrap"},nt=Object(n["j"])("div",{class:"paren m-1"},"(",-1),ot=Object(n["j"])("div",{class:"paren m-1"},")",-1);function it(t,e,r,o,i,c){const s=Object(n["H"])("hey-value");return Object(n["B"])(),Object(n["i"])("div",rt,[nt,(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(t.output,(t,e)=>(Object(n["B"])(),Object(n["i"])("div",{key:e,class:Object(n["t"])(["m-1",{"text-secondary":e%2==0,"text-dark":e%2==1}])},[Object(n["l"])(s,{output:t},null,8,["output"])],2))),128)),ot])}const ct=["innerHTML"];function st(t,e,r,o,i,c){return Object(n["B"])(),Object(n["i"])(n["b"],null,[t.isValue?(Object(n["B"])(),Object(n["i"])("div",{key:0,class:Object(n["t"])({fun:t.isFunction})},Object(n["L"])(t.output),3)):Object(n["h"])("",!0),t.isShape?(Object(n["B"])(),Object(n["i"])("div",{key:1,innerHTML:t.output},null,8,ct)):Object(n["h"])("",!0)],64)}class at{constructor(t,e){this.name=t,this.props=e}toString(){return at.renderer[this.name](this.props)}}at.renderer={square:t=>{var e,r;return null!==(r=null===(e=j()("<svg/>").width(t.size).height(t.size).append(j()("<rect/>").attr("width",String(t.size)).attr("height",String(t.size)).attr("fill",String(t.color)))[0])||void 0===e?void 0:e.outerHTML)&&void 0!==r?r:""}};var ut=Object(n["m"])({props:["output"],computed:{isValue(){return!this.isShape&&"object"!=typeof this.output},isFunction(){return this.isValue&&"function"==typeof this.output},isShape(){return this.output instanceof at}}});r("d4b8");const lt=S()(ut,[["render",st]]);var dt=lt,bt=Object(n["m"])({components:{HeyValue:dt},props:{output:Array}});const ht=S()(bt,[["render",it]]);var pt=ht,ft=Object(n["m"])({components:{HeyValue:dt,HeyList:pt},props:[],computed:Object.assign(Object.assign({},Object(u["d"])(["output","error"])),{isArray(){return!this.isError&&Array.isArray(this.output)},isError(){return!!this.error}})});const gt=S()(ft,[["render",et]]);var Ot=gt;const jt=["innerHTML"];function mt(t,e,r,o,i,c){return Object(n["B"])(),Object(n["i"])("div",{innerHTML:t.content},null,8,jt)}var vt=Object(n["m"])({data:function(){return{content:void 0}},computed:{title(){const t=this.$route.query.title;return t||k.toc[0][0]}},methods:{...Object(u["c"])(["setProgram"]),async open(){this.content=await k.open(this.title),this.$nextTick(()=>{k.tryit(t=>this.setProgram(t)),k.solution()})}},watch:{async"$route.query.title"(){await this.open()}},async mounted(){await this.open()}});r("561c");const yt=S()(vt,[["render",mt]]);var wt=yt,kt=Object(n["m"])({name:"Home",methods:Object.assign({},Object(u["b"])(["exec","clear"])),components:{HeyEditor:tt,HeyOut:Ot,BookViewer:wt}});r("0ecc");const xt=S()(kt,[["render",z]]);var Ht=xt;const St=[{path:"/",name:"Home",component:Ht},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))}],Ct=Object(L["a"])({history:Object(L["b"])("/"),routes:St});var Et=Ct,At=r("e32f"),Pt=r.n(At);function Bt(t,e,r,n){const{line:o,col:i,tok:c}=s(e);return{line:o,col:i,message:`expected ${r}, got ${null!==n&&void 0!==n?n:c}`};function s(e){const r=t.substring(0,e+1),n=r.split(/\r\n|\r|\n/g),o=n.length,i=n[n.length-1].length,c=r.slice(-1);return{line:o,col:i,tok:c}}}function Lt(t,e,r){return Bt(t,e,"color",r)}function $t(t,e,r){return Bt(t,e,"number",r)}function _t(t,e,r){return Bt(t,e,"function or data",r)}function Mt(t,e,r){return Bt(t,e,"data",r)}function Tt(t,e,r){return Bt(t,e,"identifier",r)}function qt(t,e,r,n){return Bt(t,e,n+" argument(s)",r)}function zt(t,e){const r=e.getRightmostFailurePosition(),n=Object.keys(e.matcher.memoTable[r].memo),o=n[n.length-1];return Bt(t,r,o)}const Nt=[[1,1],[-1,2]];function Vt(t){if(t<Nt.length)return Nt[t];const e=Rt(t),r=e.map(t=>Vt(t)),n=e.map(e=>It(e,t+1)),o=r.map((t,e)=>[t[0]*n[e],t[1]]),i=o.reduce((t,e)=>Ft([t[0]*e[1]+e[0]*t[1],t[1]*e[1]])),c=Ft([-i[0],i[1]*(t+1)]);return Nt.push(c,[0,1]),c}function Ft([t,e]){let r,n=t,o=e;while(o)r=n%o,n=o,o=r;return t/=n,e/=n,e>0?[t,e]:[-t,-e]}function Rt(t){return Array.from({length:t},(t,e)=>e)}function It(t,e){t=t>e/2?e-t:t;let r=1,n=1;for(let o=0;o<t;++o)r*=e-o,n*=o+1;return r/n}class Gt{constructor(){this.stack=[{}]}pick(){const t=this.stack[this.stack.length-1];if("undefined"==typeof t)throw"interval error: empty stack";return t}has(t){return"string"==typeof t&&t in this.pick()}get(t){return"string"==typeof t&&t in this.pick()?this.pick()[t]:t}push(t){this.stack.push(Object.assign(Object.assign({},this.pick()),t))}pop(){const t=this.stack.pop();if("undefined"==typeof t)throw"interval error: empty stack";return t}}class Dt{constructor(){this.env=new Gt}prog(t,e,r){this.env.push(e);const n=r(t);return this.env.pop(),n}def(t,e,r){this.env.pick()[e]=r}range(t,e,r,n){if(!Kt(e))throw $t(...t.get(0),e);if(!Kt(r))throw $t(...t.get(1),r);if("undefined"!=typeof n&&!Kt(n))throw $t(...t.get(2),n);const o=[];for(let i=e;i<=r;i+=null!==n&&void 0!==n?n:1)o.push(i);return o}adaLovelace(t,e){if(!Kt(e))throw $t(...t.get(0),e);const r=[];for(let n=1;n<=e;n++){const t=Vt(n+1);r.push(0==t[0]?"0":`${t[0]}/${t[1]}`)}return r}square(t,e,r){if(!Kt(e))throw $t(...t.get(0),e);if(!Jt(r))throw Lt(...t.get(1),r);return new at("square",{size:e,color:r})}concat(t,e){return e.reduce((t,e)=>[...t,...Array.isArray(e)?e:[e]],[])}repeat(t,e,r){if(!Kt(r))throw $t(...t.get(1),r);const n=Array.isArray(e)?e:[e],o=new Array(r);for(let i=0;i<r;i++)o[i]=n[i%n.length];return o}slice(t,e,r,n){if(!Qt(e))throw Mt(...t.get(0),e);if(!Kt(r))throw $t(...t.get(1),r);if(void 0!=n&&!Kt(n))throw $t(...t.get(2),n);return e.slice(r-1,n&&n<0?n+1:n)}funct(t,e,r){return(t,...n)=>{if(n.length!=e.length)throw qt(...t.get(0),n.length,e.length);const o=e.reduce((t,e,r)=>Object.assign(Object.assign({},t),{[e]:n[r]}),{});return this.prog(t,o,r)}}result(t,e,...r){if(Qt(e))return e[r[0]-1];if(Zt(e))return e(t,...r);throw _t(...t.get(0))}value(t,e){return this.env.get(e)}known(t,e){if(this.env.has(e))return this.value(t,e);throw Tt(...t.get(0),String(e))}unknown(t,e){if(!this.env.has(e))return e;throw Tt(...t.get(0),String(e))}}function Jt(t){return["green","blue","yellow","red","purple","grey","black","white","orange"].includes(t)}function Kt(t){return"number"==typeof t}function Zt(t){return"function"==typeof t}function Qt(t){return Array.isArray(t)}function Ut(t){const e=s("square",["size","color"]),r=s("range",["start","end","step"]),n=s("adaLovelace",["n"]),o=s("concat",["values"]),i=s("repeat",["data","count"]),c=s("slice",["data","start","end"]);function s(e,r){const n=t.funct(new Yt,r,n=>{const o=t[e],i=[n,...r.map(e=>t.value(n,e))];return o(...i)});return n.toString=()=>`(${r.join(" ")}) -> ${e}(${r.join(" ")})`,n}function a(t,e){return t.toString=e,t}return{Prog:(e,r)=>t.prog(new Yt(...e.children,r),{},()=>(e.children.forEach(t=>t.eval()),r.eval())),Def:(e,r,n,o)=>t.def(new Yt(r,o),r.eval(),o.eval()),Val:e=>t.value(new Yt(e),e.eval()),Known:e=>t.known(new Yt(e),e.eval()),Result:(e,r,n,o)=>n.children.reduce((r,o)=>t.result(new Yt(e,...n.children),r,...o.children.map(t=>t.eval())),e.eval()),Range:t=>a((t,e,n,o,...i)=>r(t,e,n,o,...i),r.toString),AdaLovelace:t=>a((t,e,...r)=>n(t,e,...r),n.toString),Square:t=>a((t,r,n,...o)=>e(t,r,n,...o),e.toString),Concat:t=>a((t,...e)=>o(t,e),o.toString),Repeat:t=>a((t,e,r,...n)=>i(t,e,r,...n),i.toString),Slice:t=>a((t,e,r,n,...o)=>c(t,e,r,n,...o),c.toString),Function:(e,r,n,o,i)=>{const c=t.funct(new Yt(...r.children,i),r.children.map(t=>t.eval()),()=>i.eval());return c.toString=()=>`(${r.children.map(t=>t.sourceString).join(" ")}) -> ${i.sourceString}`,c},comment:(t,e,r)=>{},number:(t,e)=>("-"==t.sourceString?-1:1)*parseInt(e.sourceString),color:t=>t.sourceString,string:(t,e,r)=>e.sourceString.replace(/""/g,'"'),identifier:t=>t.sourceString,builtin:t=>t.sourceString}}function Wt(t){const e=t();return"string"==typeof e?Xt(e):t=>e.then(t=>Xt(t)).then(e=>e(t))}function Xt(t){const e=Pt.a.grammar(t),r=e.createSemantics().addOperation("eval",Ut(new Dt));return t=>{const n=e.match(t);if(n.failed())throw zt(t,n);return r(n).eval()}}class Yt{constructor(...t){var e;this.source=null===(e=t[0])||void 0===e?void 0:e.source.sourceString,this.pos=t.map(t=>t.source.startIdx)}get(t){return[this.source,this.pos[t]]}}var te=Wt(()=>Object(l["a"])("/hey.ohm").text()),ee=Object(u["a"])({state:{program:void 0,output:void 0,error:void 0},mutations:{setProgram(t,e){t.program=e,t.error=void 0,t.output=void 0},setOutput(t,e){t.output=e},setError(t,e){t.error=e}},actions:{exec({state:t,commit:e}){var r;return Object(R["a"])(this,void 0,void 0,(function*(){try{const n=yield te(null!==(r=t.program)&&void 0!==r?r:"");e("setOutput",n),e("setError",void 0)}catch(Bt){e("setError",Bt)}}))},clear({commit:t}){return Object(R["a"])(this,void 0,void 0,(function*(){t("setOutput",void 0),t("setError",void 0)}))}},modules:{}}),re=r("b80d");r("f9e3"),r("1a26");Object(n["f"])(B).use(ee).use(Et).use(re["a"]).mount("#app")},d4b8:function(t,e,r){"use strict";r("0aa0")}});
//# sourceMappingURL=app.31301e36.js.map