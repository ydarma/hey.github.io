(function(e){function t(t){for(var n,c,s=t[0],a=t[1],u=t[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dfd97c21"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=c(e);var u=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0f9d":function(e,t,r){"use strict";r("b54e")},"556a":function(e,t,r){"use strict";r("e486")},"9ae0":function(e,t,r){},b54e:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);var n=r("7a23");const o=Object(n["j"])("a",{class:"github-fork-ribbon right-top",href:"https://github.com/ydarma/hey","data-ribbon":"Contribuer sur GitHub",title:"Contribuer sur GitHub"}," Contribute on GitHub ",-1),i={class:"d-flex flex-column h-100"},c={id:"nav"},s=Object(n["k"])("A propos");function a(e,t,r,a,u,l){const d=Object(n["H"])("b-icon"),b=Object(n["H"])("b-button"),h=Object(n["H"])("table-of-content"),p=Object(n["H"])("b-card"),f=Object(n["H"])("router-view");return Object(n["B"])(),Object(n["i"])(n["b"],null,[o,Object(n["j"])("div",i,[Object(n["j"])("div",c,[Object(n["l"])(p,null,{default:Object(n["O"])(()=>[Object(n["l"])(b,{class:"mx-1",to:"/"},{default:Object(n["O"])(()=>[Object(n["l"])(d,{icon:"house"})]),_:1}),Object(n["l"])(h),Object(n["l"])(b,{class:"mx-1",variant:"info",to:"/about"},{default:Object(n["O"])(()=>[s]),_:1})]),_:1})]),Object(n["l"])(f,{class:"flex-fill"})])],64)}r("ab0d");function u(e,t,r,o,i,c){const s=Object(n["H"])("b-dropdown-item-button"),a=Object(n["H"])("b-dropdown");return Object(n["B"])(),Object(n["g"])(a,{id:"dropdown-1",text:"Table des matières",class:"m-md-2"},{default:Object(n["O"])(()=>[(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(e.toc,(t,r)=>(Object(n["B"])(),Object(n["g"])(s,{key:r,onClick:r=>e.open(t)},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(t),1)]),_:2},1032,["onClick"]))),128))]),_:1})}var l=r("5502"),d=Object(n["m"])({setup(){const e="1. Introduction.md\n2. Ada Lovelace.md\nimg".split("\n").map(e=>e.replace(/.md$/,""));return{toc:e}},methods:Object.assign(Object.assign({},Object(l["c"])(["setChapter"])),{open(e){this.$router.push({path:"/",query:{chapter:e}})}})}),b=r("6b0d"),h=r.n(b);const p=h()(d,[["render",u]]);var f=p,g=Object(n["m"])({components:{TableOfContent:f}});r("0f9d");const O=h()(g,[["render",a]]);var m=O,j=r("6c02");const v={class:"home m-3 d-flex flex-row h-100"},y={class:"p-2 w-50"},w={class:"p-2 w-50"},k={class:"d-flex flex-column h-100"},x={class:"p-2 flex-fill result"};function H(e,t,r,o,i,c){const s=Object(n["H"])("book-viewer"),a=Object(n["H"])("HeyEditor"),u=Object(n["H"])("b-icon"),l=Object(n["H"])("b-button"),d=Object(n["H"])("HeyOut");return Object(n["B"])(),Object(n["i"])("div",v,[Object(n["j"])("div",y,[Object(n["l"])(s)]),Object(n["j"])("div",w,[Object(n["j"])("div",k,[Object(n["l"])(a,{class:"mb-2 border rounded p-1 flex-fill editor"}),Object(n["j"])("div",null,[Object(n["l"])(l,{variant:"danger",class:"mx-3",pill:"",onClick:t[0]||(t[0]=t=>e.exec())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"play"})]),_:1}),Object(n["l"])(l,{variant:"secondary",class:"mr-3",pill:"",onClick:t[1]||(t[1]=t=>e.clear())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"x"})]),_:1})]),Object(n["j"])("div",x,[Object(n["l"])(d)])])])])}const E=Object(n["j"])("div",{id:"editor"},null,-1),C=[E];function P(e,t,r,o,i,c){return Object(n["B"])(),Object(n["i"])("div",null,C)}var S=r("9ab4"),A=r("6d4f"),_=r.n(A);r("65d8");const B=[{className:"comment",regex:";.*$"},{className:"string",regex:/".*[^"]("")*"/},{className:"number",regex:/[+-]?\d+/},{className:"def",regex:/\bdef\b/},{className:"constant",regex:/\b(green|blue|yellow|red|purple|grey|black|white)\b/},{className:"operator",regex:/[():]|->/},{className:"keyword",regex:/\b(range|square|concat|c|repeat|r|slice|s)\b/}],M=_.a.require("ace/lib/oop"),$=_.a.require("ace/mode/text").Mode,q=_.a.require("ace/mode/text_highlight_rules").TextHighlightRules,L=function(){this.$rules={start:B.map(e=>({token:e.className,regex:e.regex}))}};M.inherits(L,q);const T=function(){this.HighlightRules=L};M.inherits(T,$);class N{constructor(e){this.marker=0,this.editor=_.a.edit(e,{minLines:5,maxLines:20,fontSize:16,highlightActiveLine:!1,placeholder:"Entrer du code hey...",printMargin:!1}),this.editor.session.setMode(new T)}setProgram(e){this.resetError();const t=this.editor.session.getValue();t!=e&&this.editor.session.setValue(null!==e&&void 0!==e?e:"")}onProgramChange(e){this.editor.on("change",()=>e(this.editor.session.getValue()))}setError(e){if(this.resetError(),e){const t=new _.a.Range(e.line-1,e.col-1,e.line-1,e.col+2);this.marker=this.editor.session.addMarker(t,"alert alert-danger err py-2","text")}}resetError(){this.editor.session.removeMarker(this.marker),this.marker=0}}var R=function(e="editor"){let t;const r=new Promise(e=>t=e);return Object(n["z"])(()=>{const r=new N(e);t(r)}),{edit:e=>r.then(t=>{t.setProgram(e)}),onChange:e=>r.then(t=>{t.onProgramChange(e)}),setError:e=>r.then(t=>{t.setError(e)})}},V=(r("9ae0"),Object(n["m"])({name:"HeyEditor",props:[],data(){return{marker:0}},computed:Object.assign({},Object(l["d"])(["error","program"])),methods:Object.assign({},Object(l["c"])(["setProgram"])),setup(){return R()},beforeCreate(){this.$nextTick(()=>{this.edit(this.program),this.onChange(e=>this.setProgram(e))})},watch:{error(e){return Object(S["a"])(this,void 0,void 0,(function*(){this.setError(e)}))},program(e){return Object(S["a"])(this,void 0,void 0,(function*(){this.edit(e)}))}}}));const z=h()(V,[["render",P]]);var F=z;const I={key:1,class:"d-flex flex-row flex-wrap"},G=Object(n["j"])("div",{class:"paren"},"(",-1),J={key:0,class:"paren"},D={key:2};function K(e,t,r,o,i,c){const s=Object(n["H"])("b-alert");return Object(n["B"])(),Object(n["i"])("div",null,[e.isError?(Object(n["B"])(),Object(n["g"])(s,{key:0,variant:"danger",show:""},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(e.error),1)]),_:1})):Object(n["h"])("",!0),e.isArray?(Object(n["B"])(),Object(n["i"])("div",I,[G,(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(e.output,(e,t)=>(Object(n["B"])(),Object(n["i"])("div",{key:t,class:Object(n["t"])(["mx-1",{"text-secondary":t%2==0,"text-dark":t%2==1}])},Object(n["L"])(e),3))),128)),e.isArray?(Object(n["B"])(),Object(n["i"])("div",J,")")):Object(n["h"])("",!0)])):Object(n["h"])("",!0),e.isValue?(Object(n["B"])(),Object(n["i"])("div",D,Object(n["L"])(e.output),1)):Object(n["h"])("",!0)])}var Q=Object(n["m"])({props:[],computed:Object.assign(Object.assign({},Object(l["d"])(["output","error"])),{isArray(){return!this.isError&&Array.isArray(this.output)},isValue(){return!this.isError&&"object"!=typeof this.output},isError(){return!!this.error}})});const U=h()(Q,[["render",K]]);var W=U;const X=["innerHTML"];function Y(e,t,r,o,i,c){return Object(n["B"])(),Object(n["i"])("div",{innerHTML:e.content},null,8,X)}var Z=r("dfd0"),ee=r("1020"),te=r.n(ee),re=r("7c5c"),ne=function(){return{name:"hey",contains:B.map(e=>({className:e.className,begin:e.regex}))}};function oe(e){te.a.registerLanguage("hey",ne);const t=re["marked"].setOptions({highlight:(e,t)=>te.a.highlight(e,{language:t}).value})(e);return t}var ie=r("e409"),ce=r.n(ie);function se(e){ce()(".language-hey").parent().each((t,r)=>{ce()(r).append(ce()("<button/>").text("Essayer").addClass("btn btn-outline-primary btn-sm m-2").on({click:()=>{e(ce()(r).find("code").prop("innerText").trim())}}))})}function ae(){const e=ce()(".language-hey").filter((e,t)=>{var r,n;return/^;.*solution$/.test(null!==(n=null===(r=t.firstChild)||void 0===r?void 0:r.textContent)&&void 0!==n?n:"")});e.each((e,t)=>{const r=ce()(t).parent().children();let n=!0;const o=ce()("<button/>").text("Montrer la solution").addClass("btn btn-outline-secondary btn-sm m-2").on({click:()=>{n?(ce()(r).show(),o.text("Masquer la solution")):(ce()(r).hide(),o.text("Montrer la solution")),n=!n}});ce()(r).parent().append(o),ce()(r).hide()})}function ue(e){return Object(Z["a"])(`/book/${e}.md`).text().then(e=>oe(e))}var le={open:ue,tryit:se,solution:ae},de=Object(n["m"])({data:function(){return{content:void 0}},computed:{chapter(){const e=this.$route.query.chapter;return e||"1. Introduction"}},methods:{...Object(l["c"])(["setProgram"]),async open(){this.content=await le.open(this.chapter),this.$nextTick(()=>{le.tryit(e=>this.setProgram(e)),le.solution()})}},watch:{async"$route.query.chapter"(){await this.open()}},async mounted(){await this.open()}});const be=h()(de,[["render",Y]]);var he=be,pe=Object(n["m"])({name:"Home",methods:Object.assign({},Object(l["b"])(["exec","clear"])),components:{HeyEditor:F,HeyOut:W,BookViewer:he}});r("556a");const fe=h()(pe,[["render",H]]);var ge=fe;const Oe=[{path:"/",name:"Home",component:ge},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))}],me=Object(j["a"])({history:Object(j["b"])("/"),routes:Oe});var je=me,ve=r("e32f"),ye=r.n(ve);function we(e,t,r,n){const{line:o,col:i,tok:c}=s(t);return{line:o,col:i,message:`expected ${r}, got ${null!==n&&void 0!==n?n:c}`};function s(t){const r=e.substring(0,t+1),n=r.split(/\r\n|\r|\n/g),o=n.length,i=n[n.length-1].length,c=r.slice(-1);return{line:o,col:i,tok:c}}}function ke(e,t,r){return we(e,t,"color",r)}function xe(e,t,r){return we(e,t,"number",r)}function He(e,t,r){return we(e,t,"function or data",r)}function Ee(e,t,r){return we(e,t,"data",r)}function Ce(e,t,r){return we(e,t,"identifier",r)}function Pe(e,t,r,n){return we(e,t,n+" argument(s)",r)}function Se(e,t){const r=t.getRightmostFailurePosition(),n=Object.keys(t.matcher.memoTable[r].memo),o=n[n.length-1];return we(e,r,o)}class Ae{constructor(){this.stack=[{}]}pick(){const e=this.stack[this.stack.length-1];if("undefined"==typeof e)throw"interval error: empty stack";return e}has(e){return"string"==typeof e&&e in this.pick()}get(e){return"string"==typeof e&&e in this.pick()?this.pick()[e]:e}push(e){this.stack.push(Object.assign(Object.assign({},this.pick()),e))}pop(){const e=this.stack.pop();if("undefined"==typeof e)throw"interval error: empty stack";return e}}class _e{constructor(e,t){this.name=e,this.props=t}}class Be{constructor(){this.env=new Ae}prog(e,t){this.env.push(e);const r=t();return this.env.pop(),r}def(e,t,r){this.env.pick()[t]=r}range(e,t,r,n){if(!$e(t))throw xe(...e.get(0),t);if(!$e(r))throw xe(...e.get(1),r);if(!$e(n))throw xe(...e.get(2),n);const o=[];for(let i=t;i<r;i+=n)o.push(i);return o}square(e,t,r){if(!$e(t))throw xe(...e.get(0),t);if(!Me(r))throw ke(...e.get(1),r);return new _e("square",{size:t,color:r})}concat(e,...t){return t.reduce((e,t)=>[...e,...Array.isArray(t)?t:[t]],[])}repeat(e,t,r){const n=Array.isArray(r)?r:[r],o=new Array(t);for(let i=0;i<t;i++)o[i]=n[i%n.length];return o}slice(e,t,r,n){if(!Le(t))throw Ee(...e.get(0),t);if(!$e(r))throw xe(...e.get(1),r);if(void 0!=n&&!$e(n))throw xe(...e.get(2),n);return t.slice(r-1,n&&n<0?n+1:n)}funct(e,t,r){return(e,...n)=>{if(n.length!=t.length)throw Pe(...e.get(0),n.length,t.length);const o=t.reduce((e,t,r)=>Object.assign(Object.assign({},e),{[t]:n[r]}),{}),i=this.prog(o,r);return i}}result(e,t,...r){if(Le(t))return t[r[0]-1];if(qe(t))return t(e,...r);throw He(...e.get(0))}value(e,t){return this.env.get(t)}known(e,t){if(this.env.has(t))return this.value(e,t);throw Ce(...e.get(0),String(t))}}function Me(e){return["green","blue","yellow","red","purple","grey","black","white"].includes(e)}function $e(e){return"number"==typeof e}function qe(e){return"function"==typeof e}function Le(e){return Array.isArray(e)}function Te(e){return{Prog:(t,r)=>e.prog({},()=>(t.children.forEach(e=>e.eval()),r.eval())),Def:(t,r,n,o)=>e.def(new Ve(r,o),r.eval(),o.eval()),Val:t=>e.value(new Ve(t),t.eval()),Known:t=>e.known(new Ve(t),t.eval()),Result:(t,r,n,o)=>n.children.reduce((r,o)=>e.result(new Ve(t,...n.children),r,...o.children.map(e=>e.eval())),t.eval()),Range:(t,r,n,o,i,c)=>e.range(new Ve(n,o,i),n.eval(),o.eval(),i.eval()),Square:(t,r,n,o,i)=>e.square(new Ve(n,o),n.eval(),o.eval()),Concat:(t,r,n,o)=>e.concat(new Ve(...n.children),...n.children.map(e=>e.eval())),Repeat:(t,r,n,o,i)=>e.repeat(new Ve(o,n),o.eval(),n.eval()),Slice:(t,r,n,o,i,c)=>{var s;return e.slice(new Ve(n,o,i),n.eval(),o.eval(),null===(s=i.children[0])||void 0===s?void 0:s.eval())},Function:(t,r,n,o,i)=>{const c=e.funct(new Ve(...r.children,i),r.children.map(e=>e.eval()),()=>i.eval());return c.toString=()=>`(${r.children.map(e=>e.sourceString).join(" ")}) -> ${i.sourceString}`,c},comment:(e,t,r)=>{},number:(e,t)=>("-"==e.sourceString?-1:1)*parseInt(t.sourceString),color:e=>e.sourceString,string:(e,t,r)=>t.sourceString,identifier:e=>e.sourceString}}function Ne(e){const t=e();return"string"==typeof t?Re(t):e=>t.then(e=>Re(e)).then(t=>t(e))}function Re(e){const t=ye.a.grammar(e),r=t.createSemantics().addOperation("eval",Te(new Be));return e=>{const n=t.match(e);if(n.failed())throw Se(e,n);return r(n).eval()}}class Ve{constructor(...e){this.source=e[0].source.sourceString,this.pos=e.map(e=>e.source.startIdx)}get(e){return[this.source,this.pos[e]]}}var ze=Ne(()=>Object(Z["a"])("/hey.ohm").text()),Fe=Object(l["a"])({state:{program:"",output:void 0,error:void 0},mutations:{setProgram(e,t){e.program=t,e.error=void 0,e.output=void 0},setOutput(e,t){e.output=t},setError(e,t){e.error=t}},actions:{exec({state:e,commit:t}){var r;return Object(S["a"])(this,void 0,void 0,(function*(){try{const n=yield ze(null!==(r=e.program)&&void 0!==r?r:"");t("setOutput",n),t("setError",void 0)}catch(we){t("setError",we)}}))},clear({commit:e}){return Object(S["a"])(this,void 0,void 0,(function*(){e("setOutput",void 0),e("setError",void 0)}))}},modules:{}}),Ie=r("b80d");r("f9e3"),r("1a26");Object(n["f"])(m).use(Fe).use(je).use(Ie["a"]).mount("#app")},e486:function(e,t,r){}});
//# sourceMappingURL=app.1ea5fef0.js.map