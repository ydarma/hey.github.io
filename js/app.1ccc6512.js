(function(e){function t(t){for(var n,c,s=t[0],a=t[1],u=t[2],l=0,h=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dfd97c21"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=c(e);var u=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,r[1](u)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0ecc":function(e,t,r){"use strict";r("1868")},1868:function(e,t,r){},6763:function(e,t,r){},"9ae0":function(e,t,r){},ab90:function(e,t,r){"use strict";r("6763")},cd49:function(e,t,r){"use strict";r.r(t);var n=r("7a23");const o=Object(n["j"])("a",{class:"github-fork-ribbon right-top",href:"https://github.com/ydarma/hey","data-ribbon":"Contribuer sur GitHub",title:"Contribuer sur GitHub"}," Contribute on GitHub ",-1),i={class:"d-flex flex-column h-100"},c=Object(n["k"])("A propos");function s(e,t,r,s,a,u){const l=Object(n["H"])("b-icon"),d=Object(n["H"])("b-button"),h=Object(n["H"])("table-of-content"),b=Object(n["H"])("b-card"),p=Object(n["H"])("router-view");return Object(n["B"])(),Object(n["i"])(n["b"],null,[o,Object(n["j"])("div",i,[Object(n["l"])(b,{class:"sticky-top"},{default:Object(n["O"])(()=>[Object(n["l"])(d,{class:"mx-1",to:"/"},{default:Object(n["O"])(()=>[Object(n["l"])(l,{icon:"house"})]),_:1}),Object(n["l"])(h),Object(n["l"])(d,{class:"mx-1",variant:"info",to:"/about"},{default:Object(n["O"])(()=>[c]),_:1})]),_:1}),Object(n["l"])(p,{class:"flex-fill"})])],64)}r("ab0d");function a(e,t,r,o,i,c){const s=Object(n["H"])("b-dropdown-item-button"),a=Object(n["H"])("b-dropdown");return Object(n["B"])(),Object(n["g"])(a,{id:"dropdown-1",text:"Table des matières",class:"m-md-2"},{default:Object(n["O"])(()=>[(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(e.toc,(t,r)=>(Object(n["B"])(),Object(n["g"])(s,{key:r,onClick:r=>e.open(t)},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(t),1)]),_:2},1032,["onClick"]))),128))]),_:1})}var u=r("5502"),l=Object(n["m"])({setup(){const e="1. Introduction.md\n2. Ada Lovelace.md".split("\n").map(e=>e.replace(/.md$/,""));return{toc:e}},methods:Object.assign(Object.assign({},Object(u["c"])(["setChapter"])),{open(e){this.$router.push({path:"/",query:{chapter:e}})}})}),d=r("6b0d"),h=r.n(d);const b=h()(l,[["render",a]]);var p=b,f=Object(n["m"])({components:{TableOfContent:p}});r("ab90");const g=h()(f,[["render",s]]);var O=g,j=r("6c02");const m={class:"home m-3 d-flex flex-row h-100"},v={class:"p-2 w-50"},y={class:"p-2 w-50"},w={class:"d-flex flex-column h-100 exec-pane"},k={class:"p-2 flex-fill result"};function x(e,t,r,o,i,c){const s=Object(n["H"])("book-viewer"),a=Object(n["H"])("HeyEditor"),u=Object(n["H"])("b-icon"),l=Object(n["H"])("b-button"),d=Object(n["H"])("HeyOut");return Object(n["B"])(),Object(n["i"])("div",m,[Object(n["j"])("div",v,[Object(n["l"])(s)]),Object(n["j"])("div",y,[Object(n["j"])("div",w,[Object(n["l"])(a,{class:"mb-2 border rounded p-1 flex-fill editor"}),Object(n["j"])("div",null,[Object(n["l"])(l,{variant:"danger",class:"mx-3",pill:"",onClick:t[0]||(t[0]=t=>e.exec())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"play"})]),_:1}),Object(n["l"])(l,{variant:"secondary",class:"mr-3",pill:"",onClick:t[1]||(t[1]=t=>e.clear())},{default:Object(n["O"])(()=>[Object(n["l"])(u,{size:"lg",icon:"x"})]),_:1})]),Object(n["j"])("div",k,[Object(n["l"])(d)])])])])}const H=Object(n["j"])("div",{id:"editor"},null,-1),S=[H];function E(e,t,r,o,i,c){return Object(n["B"])(),Object(n["i"])("div",null,S)}var C=r("9ab4"),P=r("6d4f"),M=r.n(P);r("65d8");const L=[{className:"comment",regex:";.*$"},{className:"string",regex:/".*[^"]("")*"/},{className:"number",regex:/[+-]?\d+/},{className:"def",regex:/\bdef\b/},{className:"constant",regex:/\b(green|blue|yellow|red|purple|grey|black|white)\b/},{className:"operator",regex:/[():]|->/},{className:"keyword",regex:/\b(range|square|concat|c|repeat|r|slice|s)\b/}],T=M.a.require("ace/lib/oop"),B=M.a.require("ace/mode/text").Mode,A=M.a.require("ace/mode/text_highlight_rules").TextHighlightRules,_=function(){this.$rules={start:L.map(e=>({token:e.className,regex:e.regex}))}};T.inherits(_,A);const q=function(){this.HighlightRules=_};T.inherits(q,B);class ${constructor(e){this.marker=0,this.editor=M.a.edit(e,{minLines:5,maxLines:20,fontSize:16,highlightActiveLine:!1,placeholder:"Entrer du code hey...",printMargin:!1}),this.editor.session.setMode(new q)}setProgram(e){this.resetError();const t=this.editor.session.getValue();t!=e&&this.editor.session.setValue(null!==e&&void 0!==e?e:"")}onProgramChange(e){this.editor.on("change",()=>e(this.editor.session.getValue()))}setError(e){if(this.resetError(),e){const t=new M.a.Range(e.line-1,e.col-1,e.line-1,e.col+2);this.marker=this.editor.session.addMarker(t,"alert alert-danger err py-2","text")}}resetError(){this.editor.session.removeMarker(this.marker),this.marker=0}}var N=function(e="editor"){let t;const r=new Promise(e=>t=e);return Object(n["z"])(()=>{const r=new $(e);t(r)}),{edit:e=>r.then(t=>{t.setProgram(e)}),onChange:e=>r.then(t=>{t.onProgramChange(e)}),setError:e=>r.then(t=>{t.setError(e)})}},z=(r("9ae0"),Object(n["m"])({name:"HeyEditor",props:[],data(){return{marker:0}},computed:Object.assign({},Object(u["d"])(["error","program"])),methods:Object.assign({},Object(u["c"])(["setProgram"])),setup(){return N()},beforeCreate(){this.$nextTick(()=>{this.edit(this.program),this.onChange(e=>this.setProgram(e))})},watch:{error(e){return Object(C["a"])(this,void 0,void 0,(function*(){this.setError(e)}))},program(e){return Object(C["a"])(this,void 0,void 0,(function*(){this.edit(e)}))}}}));const V=h()(z,[["render",E]]);var R=V;const F={key:1,class:"d-flex flex-row flex-wrap"},I=Object(n["j"])("div",{class:"paren m-1"},"(",-1),G={key:0},J=["innerHTML"],D=Object(n["j"])("div",{class:"paren m-1"},")",-1),K={key:2},Q=["innerHTML"];function U(e,t,r,o,i,c){const s=Object(n["H"])("b-alert");return Object(n["B"])(),Object(n["i"])("div",null,[e.isError()?(Object(n["B"])(),Object(n["g"])(s,{key:0,variant:"danger",show:""},{default:Object(n["O"])(()=>[Object(n["k"])(Object(n["L"])(e.error),1)]),_:1})):Object(n["h"])("",!0),e.isArray()?(Object(n["B"])(),Object(n["i"])("div",F,[I,(Object(n["B"])(!0),Object(n["i"])(n["b"],null,Object(n["F"])(e.output,(t,r)=>(Object(n["B"])(),Object(n["i"])("div",{key:r,class:Object(n["t"])(["m-1",{"text-secondary":r%2==0,"text-dark":r%2==1}])},[e.isValue(t)?(Object(n["B"])(),Object(n["i"])("div",G,Object(n["L"])(t),1)):Object(n["h"])("",!0),e.isShape(t)?(Object(n["B"])(),Object(n["i"])("div",{key:1,innerHTML:t},null,8,J)):Object(n["h"])("",!0)],2))),128)),D])):Object(n["h"])("",!0),e.isValue()?(Object(n["B"])(),Object(n["i"])("div",K,Object(n["L"])(e.output),1)):Object(n["h"])("",!0),e.isShape()?(Object(n["B"])(),Object(n["i"])("div",{key:3,innerHTML:e.output},null,8,Q)):Object(n["h"])("",!0)])}var W=r("e409"),X=r.n(W);class Y{constructor(e,t){this.name=e,this.props=t}toString(){return Y.renderer[this.name](this.props)}}Y.renderer={square:e=>{var t,r;return null!==(r=null===(t=X()("<svg/>").width(e.size).height(e.size).append(X()("<rect/>").attr("width",String(e.size)).attr("height",String(e.size)).attr("fill",String(e.color)))[0])||void 0===t?void 0:t.outerHTML)&&void 0!==r?r:""}};var Z=Object(n["m"])({props:[],computed:Object.assign({},Object(u["d"])(["output","error"])),methods:{isArray(e){return!this.isError()&&Array.isArray(e||this.output)},isValue(e){return!this.isError()&&!this.isShape(e)&&"object"!=typeof(e||this.output)},isShape(e){return!this.isError()&&(e||this.output)instanceof Y},isError(){return!!this.error}}});const ee=h()(Z,[["render",U]]);var te=ee;const re=["innerHTML"];function ne(e,t,r,o,i,c){return Object(n["B"])(),Object(n["i"])("div",{innerHTML:e.content},null,8,re)}var oe=r("dfd0"),ie=r("1020"),ce=r.n(ie),se=r("7c5c"),ae=function(){return{name:"hey",contains:L.map(e=>({className:e.className,begin:e.regex}))}};function ue(e){ce.a.registerLanguage("hey",ae);const t=se["marked"].setOptions({highlight:(e,t)=>ce.a.highlight(e,{language:t}).value})(e);return t}function le(e){X()(".language-hey").parent().each((t,r)=>{X()(r).append(X()("<button/>").text("Essayer").addClass("btn btn-outline-primary btn-sm m-2").on({click:()=>{e(X()(r).find("code").prop("innerText").trim())}}))})}function de(){const e=X()(".language-hey").filter((e,t)=>{var r,n;return/^;.*solution$/.test(null!==(n=null===(r=t.firstChild)||void 0===r?void 0:r.textContent)&&void 0!==n?n:"")});e.each((e,t)=>{const r=X()(t).parent().children();let n=!0;const o=X()("<button/>").text("Montrer la solution").addClass("btn btn-outline-secondary btn-sm m-2").on({click:()=>{n?(X()(r).show(),o.text("Masquer la solution")):(X()(r).hide(),o.text("Montrer la solution")),n=!n}});X()(r).parent().append(o),X()(r).hide()})}function he(e){return Object(oe["a"])(`/book/${e}.md`).text().then(e=>ue(e))}var be={open:he,tryit:le,solution:de},pe=Object(n["m"])({data:function(){return{content:void 0}},computed:{chapter(){const e=this.$route.query.chapter;return e||"1. Introduction"}},methods:{...Object(u["c"])(["setProgram"]),async open(){this.content=await be.open(this.chapter),this.$nextTick(()=>{be.tryit(e=>this.setProgram(e)),be.solution()})}},watch:{async"$route.query.chapter"(){await this.open()}},async mounted(){await this.open()}});const fe=h()(pe,[["render",ne]]);var ge=fe,Oe=Object(n["m"])({name:"Home",methods:Object.assign({},Object(u["b"])(["exec","clear"])),components:{HeyEditor:R,HeyOut:te,BookViewer:ge}});r("0ecc");const je=h()(Oe,[["render",x]]);var me=je;const ve=[{path:"/",name:"Home",component:me},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))}],ye=Object(j["a"])({history:Object(j["b"])("/"),routes:ve});var we=ye,ke=r("e32f"),xe=r.n(ke);function He(e,t,r,n){const{line:o,col:i,tok:c}=s(t);return{line:o,col:i,message:`expected ${r}, got ${null!==n&&void 0!==n?n:c}`};function s(t){const r=e.substring(0,t+1),n=r.split(/\r\n|\r|\n/g),o=n.length,i=n[n.length-1].length,c=r.slice(-1);return{line:o,col:i,tok:c}}}function Se(e,t,r){return He(e,t,"color",r)}function Ee(e,t,r){return He(e,t,"number",r)}function Ce(e,t,r){return He(e,t,"function or data",r)}function Pe(e,t,r){return He(e,t,"data",r)}function Me(e,t,r){return He(e,t,"identifier",r)}function Le(e,t,r,n){return He(e,t,n+" argument(s)",r)}function Te(e,t){const r=t.getRightmostFailurePosition(),n=Object.keys(t.matcher.memoTable[r].memo),o=n[n.length-1];return He(e,r,o)}class Be{constructor(){this.stack=[{}]}pick(){const e=this.stack[this.stack.length-1];if("undefined"==typeof e)throw"interval error: empty stack";return e}has(e){return"string"==typeof e&&e in this.pick()}get(e){return"string"==typeof e&&e in this.pick()?this.pick()[e]:e}push(e){this.stack.push(Object.assign(Object.assign({},this.pick()),e))}pop(){const e=this.stack.pop();if("undefined"==typeof e)throw"interval error: empty stack";return e}}class Ae{constructor(){this.env=new Be}prog(e,t){this.env.push(e);const r=t();return this.env.pop(),r}def(e,t,r){this.env.pick()[t]=r}range(e,t,r,n){if(!qe(t))throw Ee(...e.get(0),t);if(!qe(r))throw Ee(...e.get(1),r);if(!qe(n))throw Ee(...e.get(2),n);const o=[];for(let i=t;i<r;i+=n)o.push(i);return o}square(e,t,r){if(!qe(t))throw Ee(...e.get(0),t);if(!_e(r))throw Se(...e.get(1),r);return new Y("square",{size:t,color:r})}concat(e,...t){return t.reduce((e,t)=>[...e,...Array.isArray(t)?t:[t]],[])}repeat(e,t,r){const n=Array.isArray(r)?r:[r],o=new Array(t);for(let i=0;i<t;i++)o[i]=n[i%n.length];return o}slice(e,t,r,n){if(!Ne(t))throw Pe(...e.get(0),t);if(!qe(r))throw Ee(...e.get(1),r);if(void 0!=n&&!qe(n))throw Ee(...e.get(2),n);return t.slice(r-1,n&&n<0?n+1:n)}funct(e,t,r){return(e,...n)=>{if(n.length!=t.length)throw Le(...e.get(0),n.length,t.length);const o=t.reduce((e,t,r)=>Object.assign(Object.assign({},e),{[t]:n[r]}),{}),i=this.prog(o,r);return i}}result(e,t,...r){if(Ne(t))return t[r[0]-1];if($e(t))return t(e,...r);throw Ce(...e.get(0))}value(e,t){return this.env.get(t)}known(e,t){if(this.env.has(t))return this.value(e,t);throw Me(...e.get(0),String(t))}}function _e(e){return["green","blue","yellow","red","purple","grey","black","white"].includes(e)}function qe(e){return"number"==typeof e}function $e(e){return"function"==typeof e}function Ne(e){return Array.isArray(e)}function ze(e){return{Prog:(t,r)=>e.prog({},()=>(t.children.forEach(e=>e.eval()),r.eval())),Def:(t,r,n,o)=>e.def(new Fe(r,o),r.eval(),o.eval()),Val:t=>e.value(new Fe(t),t.eval()),Known:t=>e.known(new Fe(t),t.eval()),Result:(t,r,n,o)=>n.children.reduce((r,o)=>e.result(new Fe(t,...n.children),r,...o.children.map(e=>e.eval())),t.eval()),Range:(t,r,n,o,i,c)=>e.range(new Fe(n,o,i),n.eval(),o.eval(),i.eval()),Square:(t,r,n,o,i)=>e.square(new Fe(n,o),n.eval(),o.eval()),Concat:(t,r,n,o)=>e.concat(new Fe(...n.children),...n.children.map(e=>e.eval())),Repeat:(t,r,n,o,i)=>e.repeat(new Fe(o,n),o.eval(),n.eval()),Slice:(t,r,n,o,i,c)=>{var s;return e.slice(new Fe(n,o,i),n.eval(),o.eval(),null===(s=i.children[0])||void 0===s?void 0:s.eval())},Function:(t,r,n,o,i)=>{const c=e.funct(new Fe(...r.children,i),r.children.map(e=>e.eval()),()=>i.eval());return c.toString=()=>`(${r.children.map(e=>e.sourceString).join(" ")}) -> ${i.sourceString}`,c},comment:(e,t,r)=>{},number:(e,t)=>("-"==e.sourceString?-1:1)*parseInt(t.sourceString),color:e=>e.sourceString,string:(e,t,r)=>t.sourceString,identifier:e=>e.sourceString}}function Ve(e){const t=e();return"string"==typeof t?Re(t):e=>t.then(e=>Re(e)).then(t=>t(e))}function Re(e){const t=xe.a.grammar(e),r=t.createSemantics().addOperation("eval",ze(new Ae));return e=>{const n=t.match(e);if(n.failed())throw Te(e,n);return r(n).eval()}}class Fe{constructor(...e){this.source=e[0].source.sourceString,this.pos=e.map(e=>e.source.startIdx)}get(e){return[this.source,this.pos[e]]}}var Ie=Ve(()=>Object(oe["a"])("/hey.ohm").text()),Ge=Object(u["a"])({state:{program:"",output:void 0,error:void 0},mutations:{setProgram(e,t){e.program=t,e.error=void 0,e.output=void 0},setOutput(e,t){e.output=t},setError(e,t){e.error=t}},actions:{exec({state:e,commit:t}){var r;return Object(C["a"])(this,void 0,void 0,(function*(){try{const n=yield Ie(null!==(r=e.program)&&void 0!==r?r:"");t("setOutput",n),t("setError",void 0)}catch(He){t("setError",He)}}))},clear({commit:e}){return Object(C["a"])(this,void 0,void 0,(function*(){e("setOutput",void 0),e("setError",void 0)}))}},modules:{}}),Je=r("b80d");r("f9e3"),r("1a26");Object(n["f"])(O).use(Ge).use(we).use(Je["a"]).mount("#app")}});
//# sourceMappingURL=app.1ccc6512.js.map