(function(t){function e(e){for(var i,c,s=e[0],a=e[1],u=e[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},o=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dfd97c21"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=i);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=c(t);var u=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"2dd1":function(t,e,n){},4639:function(t,e,n){},"4afb":function(t,e,n){"use strict";n("2dd1")},"62b7":function(t,e,n){},"8aeb":function(t,e,n){},9320:function(t,e,n){"use strict";n("62b7")},"933a":function(t,e,n){"use strict";n("8aeb")},"9ae0":function(t,e,n){},b6cf:function(t,e,n){},b6f6:function(t,e,n){"use strict";n("b6cf")},cd49:function(t,e,n){"use strict";n.r(e);var i=n("7a23");const r=Object(i["j"])("a",{class:"github-fork-ribbon right-top",href:"https://github.com/ydarma/hey","data-ribbon":"Contribuer sur GitHub",title:"Contribuer sur GitHub"}," Contribute on GitHub ",-1),o={class:"d-flex justify-content-between align-items-center"},c={class:"layout"},s={class:"toc mx-5 d-flex align-items-center"},a=Object(i["j"])("div",{class:"license d-flex align-items-center"},[Object(i["j"])("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},[Object(i["j"])("img",{alt:"Creative Commons License",style:{"border-width":"0"},src:"https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"})]),Object(i["j"])("span",{class:"d-none d-xl-inline"},[Object(i["k"])(" This work is licensed under a "),Object(i["j"])("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License")])],-1),u={class:"main"};function l(t,e,n,l,d,b){const h=Object(i["H"])("b-icon"),p=Object(i["H"])("b-button"),f=Object(i["H"])("b-button-group"),O=Object(i["H"])("table-of-content"),j=Object(i["H"])("b-card"),m=Object(i["H"])("router-view");return Object(i["B"])(),Object(i["i"])(i["b"],null,[r,Object(i["l"])(j,{class:"fixed-top menu"},{default:Object(i["O"])(()=>[Object(i["j"])("div",o,[Object(i["j"])("div",c,[Object(i["l"])(f,null,{default:Object(i["O"])(()=>[Object(i["l"])(p,{variant:"success",class:"left-pill",onClick:e[0]||(e[0]=e=>t.disposition="left")},{default:Object(i["O"])(()=>[Object(i["l"])(h,{size:"lg",icon:"box-arrow-left"})]),_:1}),Object(i["l"])(p,{variant:"success",onClick:e[1]||(e[1]=e=>t.disposition="balance")},{default:Object(i["O"])(()=>[Object(i["l"])(h,{size:"lg",icon:"vr"})]),_:1}),Object(i["l"])(p,{variant:"success",class:"right-pill",onClick:e[2]||(e[2]=e=>t.disposition="right")},{default:Object(i["O"])(()=>[Object(i["l"])(h,{size:"lg",icon:"box-arrow-right"})]),_:1})]),_:1})]),Object(i["j"])("div",s,[Object(i["l"])(p,{class:"m-1 d-none d-lg-inline px-3",variant:"success",to:"/"},{default:Object(i["O"])(()=>[Object(i["l"])(h,{size:"lg",icon:"house"})]),_:1}),Object(i["l"])(O,{class:"mx-1"}),Object(i["l"])(p,{class:"m-1 d-none d-lg-inline px-3",variant:"info",to:"/about"},{default:Object(i["O"])(()=>[Object(i["l"])(h,{size:"lg",icon:"info-circle"})]),_:1})]),a])]),_:1}),Object(i["j"])("div",u,[Object(i["l"])(m,{disposition:t.disposition},null,8,["disposition"])])],64)}n("ab0d");function d(t,e,n,r,o,c){const s=Object(i["H"])("b-icon"),a=Object(i["H"])("b-button"),u=Object(i["H"])("b-dropdown-item-button"),l=Object(i["H"])("b-dropdown-divider"),d=Object(i["H"])("b-dropdown"),b=Object(i["H"])("b-button-group");return Object(i["B"])(),Object(i["g"])(b,{class:"mx-2"},{default:Object(i["O"])(()=>[Object(i["l"])(a,{variant:"secondary",disabled:!1===this.previous,onClick:e[0]||(e[0]=e=>t.open(t.previous))},{default:Object(i["O"])(()=>[Object(i["l"])(s,{icon:"arrow-left"})]),_:1},8,["disabled"]),Object(i["l"])(d,{id:"dropdown-1"},{"button-content":Object(i["O"])(()=>[Object(i["l"])(s,{size:"lg",icon:"book"})]),default:Object(i["O"])(()=>[(Object(i["B"])(!0),Object(i["i"])(i["b"],null,Object(i["F"])(t.chapters,([e,n])=>(Object(i["B"])(),Object(i["g"])(u,{key:n,onClick:e=>t.open(n)},{default:Object(i["O"])(()=>[Object(i["k"])(Object(i["L"])(e),1)]),_:2},1032,["onClick"]))),128)),Object(i["l"])(l),(Object(i["B"])(!0),Object(i["i"])(i["b"],null,Object(i["F"])(t.appendices,([e,n])=>(Object(i["B"])(),Object(i["g"])(u,{key:"ap"+n,onClick:e=>t.open(n)},{default:Object(i["O"])(()=>[Object(i["k"])(Object(i["L"])(e),1)]),_:2},1032,["onClick"]))),128))]),_:1}),Object(i["l"])(a,{variant:"secondary",disabled:!1===this.next,onClick:e[1]||(e[1]=e=>t.open(t.next))},{default:Object(i["O"])(()=>[Object(i["l"])(s,{icon:"arrow-right"})]),_:1},8,["disabled"])]),_:1})}var b=n("5502"),h=n("dfd0"),p=n("1020"),f=n.n(p),O=n("7c5c");const j=[{className:"comment",regex:";.*$"},{className:"string",regex:/".*[^"]("")*"/},{className:"number",regex:/[+-]?\d+/},{className:"def",regex:/\bdef\b/},{className:"constant",regex:/\b(green|blue|yellow|red|purple|grey|black|white|orange)\b(?![-0-9])/},{className:"operator",regex:/[():]|->/},{className:"keyword",regex:/\b(range|square|concat|c|repeat|r|slice|s)\b(?![-0-9])/}];var m=function(){return{name:"hey",contains:j.map(t=>({className:t.className,begin:t.regex}))}};function g(t){f.a.registerLanguage("hey",m);const e=O["marked"].setOptions({highlight:(t,e)=>f.a.listLanguages().includes(e)?f.a.highlight(t,{language:e}).value:t})(t);return e}var v=n("e409"),y=n.n(v);function w(t){y()(".language-hey").parent().each((e,n)=>{y()(n).addClass("mx-5 my-3"),y()(n).append(y()("<button/>").text("Essayer").addClass("btn btn-outline-primary btn-sm m-1").on({click:()=>{t(y()(n).find("code").prop("innerText").trim())}}))})}function x(){const t=y()(".language-hey").filter((t,e)=>{var n,i;return/^;.*solution$/.test(null!==(i=null===(n=e.firstChild)||void 0===n?void 0:n.textContent)&&void 0!==i?i:"")});t.each((t,e)=>{const n=y()(e).parent().children();let i=!0;const r=y()("<button/>").text("Montrer la solution").addClass("btn btn-outline-warning btn-sm m-1").on({click:()=>{i?(y()(n).show(),r.text("Masquer la solution")):(y()(n).hide(),r.text("Montrer la solution")),i=!i}});y()(n).parent().append(r),y()(n).hide()})}function k(t){return Object(h["a"])(`/book/${t}.md`).text().then(t=>g(t))}const z="0.0 - Couverture.md\n0.1 - Introduction.md\n0.2 - Ada Lovelace.md\n1.1 - Données.md\n1.2 - Listes.md\n1.3 - Définitions.md\n1.4 - Fonctions.md\n3.1 - Fonctions récursives.md\n3.2 - Alan Turing.md\nA - hey! documentation.md".split("\n").map((t,e)=>[t.replace(/.md$/,""),e]);var H={toc:z,open:k,initInteractions:t=>{w(t),x()}},C=Object(i["m"])({props:[],data:function(){return{current:0}},computed:{chapters(){return H.toc.filter(([t])=>/^\d/.test(t))},appendices(){return H.toc.filter(([t])=>/^[A-Z]/.test(t))},previous(){return this.current>0&&this.current-1},next(){return this.current<H.toc.length-1&&this.current+1},title(){return this.$route.query.title}},methods:Object.assign(Object.assign({},Object(b["c"])(["setChapter"])),{open(t){this.current=t,this.$router.push({path:"/",query:{title:H.toc[t][0]}})}}),watch:{title(t){this.current=H.toc.findIndex(([e])=>e==t)}}}),S=n("6b0d"),E=n.n(S);const _=E()(C,[["render",d]]);var L=_,A=Object(i["m"])({data(){return{disposition:"balance"}},components:{TableOfContent:L}});n("d39a");const P=E()(A,[["render",l]]);var $=P,B=n("6c02");const M={class:"home m-3 d-flex flex-row h-100"},T={class:"d-flex flex-column h-100"};function q(t,e,n,r,o,c){const s=Object(i["H"])("HeyEditor"),a=Object(i["H"])("b-icon"),u=Object(i["H"])("b-button"),l=Object(i["H"])("b-button-group"),d=Object(i["H"])("HeyOut"),b=Object(i["H"])("book-viewer");return Object(i["B"])(),Object(i["i"])("div",M,[Object(i["j"])("div",{class:Object(i["t"])(["px-5 sandbox",{"w-50":"balance"==t.disposition,"w-100":"right"==t.disposition,invisible:"left"==t.disposition}])},[Object(i["j"])("div",T,[Object(i["j"])("div",{class:Object(i["t"])(["mb-2 border rounded p-1 editor",{minimize:t.minimizeEditor,balance:!t.minimizeEditor&&!t.minimizeOut,maximize:!t.minimizeEditor}]),ref:"editor"},[Object(i["l"])(s)],2),Object(i["j"])("div",null,[Object(i["l"])(u,{variant:"danger",class:"mx-3",pill:"",onClick:e[0]||(e[0]=e=>t.execute())},{default:Object(i["O"])(()=>[Object(i["l"])(a,{size:"lg",icon:"play"})]),_:1}),Object(i["l"])(u,{variant:"secondary",class:"mx-3",pill:"",onClick:e[1]||(e[1]=e=>t.clear())},{default:Object(i["O"])(()=>[Object(i["l"])(a,{size:"lg",icon:"x"})]),_:1}),Object(i["l"])(l,{class:"mx-3"},{default:Object(i["O"])(()=>[Object(i["l"])(u,{variant:"info",class:"left-pill",onClick:e[2]||(e[2]=e=>t.maximizeEditor())},{default:Object(i["O"])(()=>[Object(i["l"])(a,{size:"lg",icon:"box-arrow-down"})]),_:1}),Object(i["l"])(u,{variant:"info",onClick:e[3]||(e[3]=e=>t.balance())},{default:Object(i["O"])(()=>[Object(i["l"])(a,{size:"lg",icon:"hr"})]),_:1}),Object(i["l"])(u,{variant:"info",class:"right-pill",onClick:e[4]||(e[4]=e=>t.maximizeOut())},{default:Object(i["O"])(()=>[Object(i["l"])(a,{size:"lg",icon:"box-arrow-up"})]),_:1})]),_:1})]),Object(i["j"])("div",{class:Object(i["t"])(["p-2 result",{minimize:t.minimizeOut,balance:!t.minimizeEditor&&!t.minimizeOut,maximize:!t.minimizeOut}])},[Object(i["l"])(d)],2)])],2),Object(i["j"])("div",{class:Object(i["t"])(["px-5 book",{"w-50":"balance"==t.disposition,"w-100":"left"==t.disposition,invisible:"right"==t.disposition}])},[Object(i["l"])(b)],2)])}const V={class:"h-100",ref:"container"},N=Object(i["j"])("div",{id:"editor"},null,-1),F=[N];function I(t,e,n,r,o,c){return Object(i["B"])(),Object(i["i"])("div",V,F,512)}var R=n("9ab4"),D=n("6d4f"),G=n.n(D);n("65d8");const J=G.a.require("ace/lib/oop"),K=G.a.require("ace/mode/text").Mode,Z=G.a.require("ace/mode/text_highlight_rules").TextHighlightRules,Q=function(){this.$rules={start:j.map(t=>({token:t.className,regex:t.regex}))}};J.inherits(Q,Z);const U=function(){this.HighlightRules=Q};J.inherits(U,K);class W{constructor(t){this.marker=0,this.editor=G.a.edit(t,{minLines:5,maxLines:20,fontSize:16,highlightActiveLine:!1,placeholder:"editeur de code hey!",printMargin:!1,autoScrollEditorIntoView:!0}),this.editor.setAutoScrollEditorIntoView(!0),this.editor.session.setMode(new U)}setProgram(t){this.resetError();const e=this.editor.session.getValue();e!=t&&this.editor.session.setValue(null!==t&&void 0!==t?t:"")}onProgramChange(t){this.editor.on("change",()=>t(this.editor.session.getValue()))}setError(t){if(this.resetError(),t){const e=new G.a.Range(t.line-1,t.col-1,t.line-1,t.col+2);this.marker=this.editor.session.addMarker(e,"alert alert-danger err py-2","text")}}resetError(){this.editor.session.removeMarker(this.marker),this.marker=0}fit(t){const e=new ResizeObserver(()=>{this.resize(t.clientHeight)});e.observe(t)}resize(t){const e=this.editor.renderer.lineHeight;this.editor.setOptions({minLines:Math.trunc(t/e),maxLines:Math.trunc(t/e)})}}var X=function(t="editor"){let e;const n=new Promise(t=>e=t);return Object(i["z"])(()=>{const n=new W(t);e(n)}),{edit:t=>n.then(e=>{e.setProgram(t)}),onChange:t=>n.then(e=>{e.onProgramChange(t)}),setError:t=>n.then(e=>{e.setError(t)}),fit:t=>n.then(e=>{e.fit(t)})}},Y=(n("9ae0"),Object(i["m"])({name:"HeyEditor",props:[],data(){return{marker:0,height:0}},computed:Object.assign({},Object(b["d"])(["error","program"])),methods:Object.assign({},Object(b["c"])(["setProgram"])),setup(){return X()},updated(){this.height=this.$refs.editor.clientHeight,console.log(this.height)},beforeCreate(){this.$nextTick(()=>{this.fit(this.$refs.container),this.edit(this.program),this.onChange(t=>this.setProgram(t))})},watch:{error(t){return Object(R["a"])(this,void 0,void 0,(function*(){this.setError(t)}))},program(t){return Object(R["a"])(this,void 0,void 0,(function*(){this.edit(t)}))}}}));const tt=E()(Y,[["render",I]]);var et=tt;function nt(t,e,n,r,o,c){const s=Object(i["H"])("b-alert"),a=Object(i["H"])("hey-list"),u=Object(i["H"])("hey-value");return Object(i["B"])(),Object(i["g"])(i["d"],{name:t.isError?"err-bounce":"out-bounce"},{default:Object(i["O"])(()=>[t.isError?(Object(i["B"])(),Object(i["g"])(s,{key:0,variant:"danger",class:"error",show:""},{default:Object(i["O"])(()=>[Object(i["k"])(" ["+Object(i["L"])(t.error.line)+":"+Object(i["L"])(t.error.col)+"] "+Object(i["L"])(t.error.message),1)]),_:1})):t.isArray?(Object(i["B"])(),Object(i["g"])(a,{key:1,output:t.output},null,8,["output"])):t.isValue?(Object(i["B"])(),Object(i["g"])(u,{key:2,output:t.output},null,8,["output"])):Object(i["h"])("",!0)]),_:1},8,["name"])}const it={class:"d-flex flex-row flex-wrap"},rt=Object(i["j"])("div",{class:"paren m-1"},"(",-1),ot=Object(i["j"])("div",{class:"paren m-1"},")",-1);function ct(t,e,n,r,o,c){const s=Object(i["H"])("hey-value");return Object(i["B"])(),Object(i["i"])("div",it,[rt,(Object(i["B"])(!0),Object(i["i"])(i["b"],null,Object(i["F"])(t.output,(t,e)=>(Object(i["B"])(),Object(i["i"])("div",{key:e,class:Object(i["t"])(["m-1",{"text-secondary":e%2==0,"text-dark":e%2==1}])},[Object(i["l"])(s,{output:t},null,8,["output"])],2))),128)),ot])}const st=["innerHTML"];function at(t,e,n,r,o,c){return Object(i["B"])(),Object(i["i"])("div",null,[t.isValue?(Object(i["B"])(),Object(i["i"])("div",{key:0,class:Object(i["t"])({fun:t.isFunction})},Object(i["L"])(t.output),3)):Object(i["h"])("",!0),t.isShape?(Object(i["B"])(),Object(i["i"])("div",{key:1,innerHTML:t.output},null,8,st)):Object(i["h"])("",!0)])}class ut{constructor(t,e){this.name=t,this.props=e}toString(){return ut.renderer[this.name](this.props)}}ut.renderer={square:t=>{var e,n;return null!==(n=null===(e=y()("<svg/>").width(t.size).height(t.size).append(y()("<rect/>").attr("width",String(t.size)).attr("height",String(t.size)).attr("fill",String(t.color)))[0])||void 0===e?void 0:e.outerHTML)&&void 0!==n?n:""}};var lt=Object(i["m"])({props:["output"],computed:{isValue(){return!this.isShape&&"object"!=typeof this.output},isFunction(){return this.isValue&&"function"==typeof this.output},isShape(){return this.output instanceof ut}}});n("9320");const dt=E()(lt,[["render",at]]);var bt=dt,ht=Object(i["m"])({components:{HeyValue:bt},props:{output:Array}});const pt=E()(ht,[["render",ct]]);var ft=pt,Ot=Object(i["m"])({components:{HeyValue:bt,HeyList:ft},props:[],computed:Object.assign(Object.assign({},Object(b["d"])(["output","error"])),{isArray(){return!this.isError&&Array.isArray(this.output)},isValue(){return!this.isError&&!!this.output},isError(){return!!this.error}})});n("4afb");const jt=E()(Ot,[["render",nt]]);var mt=jt;const gt=["innerHTML"];function vt(t,e,n,r,o,c){return Object(i["B"])(),Object(i["i"])("div",{innerHTML:t.content},null,8,gt)}var yt=Object(i["m"])({data:function(){return{content:void 0}},computed:{title(){const t=this.$route.query.title;return t||H.toc[0][0]}},methods:{...Object(b["c"])(["setProgram"]),async open(){this.content=await H.open(this.title),this.$nextTick(()=>{H.initInteractions(t=>this.setProgram(t))})}},watch:{async"$route.query.title"(){await this.open()}},async mounted(){await this.open()}});n("b6f6");const wt=E()(yt,[["render",vt]]);var xt=wt,kt=Object(i["m"])({name:"Home",props:["disposition"],data(){return{minimizeEditor:!1,minimizeOut:!1,editorHeight:0}},methods:Object.assign(Object.assign({},Object(b["b"])(["exec","clear"])),{maximizeEditor(){this.minimizeEditor=!1,this.minimizeOut=!0},balance(){this.minimizeEditor=!1,this.minimizeOut=!1},maximizeOut(){this.minimizeEditor=!0,this.minimizeOut=!1},execute(){this.exec(),this.minimizeOut=!1}}),components:{HeyEditor:et,HeyOut:mt,BookViewer:xt}});n("933a");const zt=E()(kt,[["render",q]]);var Ht=zt;const Ct=[{path:"/",name:"Home",component:Ht},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))}],St=Object(B["a"])({history:Object(B["b"])("/"),routes:Ct});var Et=St,_t=n("e32f"),Lt=n.n(_t);function At(t,e,n,i){const{line:r,col:o,tok:c}=s(e);return{line:r,col:o,message:`expected ${n}, got ${null!==i&&void 0!==i?i:c}`};function s(e){const n=t.substring(0,e+1),i=n.split(/\r\n|\r|\n/g),r=i.length,o=i[i.length-1].length,c=n.slice(-1);return{line:r,col:o,tok:c}}}function Pt(t,e,n){return At(t,e,"color",n)}function $t(t,e,n){return At(t,e,"number",n)}function Bt(t,e,n){return At(t,e,"function or data",n)}function Mt(t,e,n){return At(t,e,"data",n)}function Tt(t,e,n){return At(t,e,"identifier",n)}function qt(t,e,n,i){return At(t,e,i+" argument(s)",n)}function Vt(t,e){const n=e.getRightmostFailurePosition(),i=Object.keys(e.matcher.memoTable[n].memo),r=i[i.length-1];return At(t,n,r)}function Nt(t,e,n){return At(t,e,"new identifier",n)}function Ft(t,e){return At(t,e,"continuation","interruption")}const It=[[1,1],[-1,2]];function Rt(t){if(t<It.length)return It[t];const e=Gt(t),n=e.map(t=>Rt(t)),i=e.map(e=>Jt(e,t+1)),r=n.map((t,e)=>[t[0]*i[e],t[1]]),o=r.reduce((t,e)=>Dt([t[0]*e[1]+e[0]*t[1],t[1]*e[1]])),c=Dt([-o[0],o[1]*(t+1)]);return It.push(c,[0,1]),c}function Dt([t,e]){let n,i=t,r=e;while(r)n=i%r,i=r,r=n;return t/=i,e/=i,e>0?[t,e]:[-t,-e]}function Gt(t){return Array.from({length:t},(t,e)=>e)}function Jt(t,e){t=t>e/2?e-t:t;let n=1,i=1;for(let r=0;r<t;++r)n*=e-r,i*=r+1;return n/i}class Kt{constructor(){this.stack=[{}]}pick(){const t=this.stack[this.stack.length-1];if("undefined"==typeof t)throw"interval error: empty stack";return t}has(t,e="global"){return"string"==typeof t&&("local"==e?t in this.pick():this.stack.some(e=>t in e))}get(t){return this.stack.reduce((e,n)=>"string"==typeof t&&t in n?n[t]:e,t)}push(...t){this.stack.push(...t)}pop(t=1){const e=this.stack.pop();if("undefined"==typeof e)throw"interval error: empty stack";return 1==t?e:this.pop(t-1)}}class Zt{constructor(){this.env=new Kt,this._cancel=!1}cancel(){this._cancel=!0}reset(){this._cancel=!1}assertContinue(t){return Object(R["a"])(this,void 0,void 0,(function*(){if(yield new Promise(t=>setTimeout(t)),this._cancel)throw this._cancel=!1,Ft(...t.get(0))}))}prog(t,e,n){return Object(R["a"])(this,void 0,void 0,(function*(){return this.env.push(...e),yield this.assertContinue(t),yield n(t).finally(()=>{this.env.pop(e.length)})}))}def(t,e,n){if(this.env.has(e,"local"))throw Nt(...t.get(0),e);this.env.pick()[e]=n}range(t,e,n,i){return Object(R["a"])(this,void 0,void 0,(function*(){if(!Ut(e))throw $t(...t.get(0),e);if(!Ut(n))throw $t(...t.get(1),n);if("undefined"!=typeof i&&!Ut(i))throw $t(...t.get(2),i);const r=[];for(let o=0;o<e;o++)o%100==0&&(yield this.assertContinue(t)),r.push(o*(null!==i&&void 0!==i?i:1)+n);return r}))}adaLovelace(t,e){return Object(R["a"])(this,void 0,void 0,(function*(){if(!Ut(e))throw $t(...t.get(0),e);const n=[];for(let i=1;i<=e;i++){i%100==0&&(yield this.assertContinue(t));const e=Rt(i+1);n.push(0==e[0]?"0":`${e[0]}/${e[1]}`)}return n}))}square(t,e,n){if(!Ut(e))throw $t(...t.get(0),e);if(!Qt(n))throw Pt(...t.get(1),n);return new ut("square",{size:e,color:n})}concat(t,e){return Object(R["a"])(this,void 0,void 0,(function*(){const n=[];for(let i=0;i<e.length;i++){i%100==0&&(yield this.assertContinue(t));const r=e[i];n.push(...Array.isArray(r)?r:[r])}return n}))}repeat(t,e,n){return Object(R["a"])(this,void 0,void 0,(function*(){if(!Ut(n))throw $t(...t.get(1),n);const i=Array.isArray(e)?e:[e],r=new Array(n);for(let e=0;e<n;e++)e%100==0&&(yield this.assertContinue(t)),r[e]=i[e%i.length];return r}))}slice(t,e,n,i){if(!Xt(e))throw Mt(...t.get(0),e);if(!Ut(n))throw $t(...t.get(1),n);if(void 0!=i&&!Ut(i))throw $t(...t.get(2),i);return e.slice(n>0?n-1:n,i&&i<0?i+1:i)}funct(t,e,n){const i=this.env.pick();return(t,...r)=>{if(r.length!=e.length)throw qt(...t.get(0),r.length,e.length);const o=e.reduce((t,e,n)=>Object.assign(Object.assign({},t),{[e]:r[n]}),{});return this.prog(t,[i,o],n)}}result(t,e,...n){return Object(R["a"])(this,void 0,void 0,(function*(){const i=yield e;if(Xt(i)){const t=n[0];return t>0&&t<=i.length?i[t-1]:n[1]}if(Wt(i))return i(t,...n);throw Bt(...t.get(0))}))}known(t,e){if(this.env.has(e))return this.env.get(e);throw Tt(...t.get(0),String(e))}unknown(t,e){if(!this.env.has(e))return e;throw Tt(...t.get(0),String(e))}}function Qt(t){return["green","blue","yellow","red","purple","grey","black","white","orange"].includes(t)}function Ut(t){return"number"==typeof t}function Wt(t){return"function"==typeof t}function Xt(t){return Array.isArray(t)}function Yt(t){const e=s("square",["size","color"]),n=s("range",["start","end","step"]),i=s("adaLovelace",["n"]),r=s("concat",["values"]),o=s("repeat",["data","count"]),c=s("slice",["data","start","end"]);function s(e,n){const i=t.funct(new ne,n,i=>Object(R["a"])(this,void 0,void 0,(function*(){const r=t[e],o=[i,...n.map(e=>t.known(i,e))];return r.call(t,...o)})));return i.toString=()=>`(${n.join(" ")}) -> ${e}(${n.join(" ")})`,i}function a(t,e){return t.toString=e,t}return{Prog:(e,n)=>t.prog(new ne(...e.children,n),[{}],()=>Object(R["a"])(this,void 0,void 0,(function*(){for(const t of e.children)yield t.eval();return yield n.eval()}))),Def:(e,n,i,r)=>Object(R["a"])(this,void 0,void 0,(function*(){return t.def(new ne(n,r),yield n.eval(),yield r.eval())})),Val:t=>t.eval(),Known:e=>Object(R["a"])(this,void 0,void 0,(function*(){return t.known(new ne(e),yield e.eval())})),Result:(e,n,i,r)=>Object(R["a"])(this,void 0,void 0,(function*(){return yield i.children.reduce((n,r)=>Object(R["a"])(this,void 0,void 0,(function*(){const o=[];for(const t of r.children)o.push(yield t.eval());return yield t.result(new ne(e,...i.children),n,...o)})),yield e.eval())})),Range:t=>a((t,e,i,r,...o)=>n(t,e,i,r,...o),n.toString),AdaLovelace:t=>a((t,e,...n)=>i(t,e,...n),i.toString),Square:t=>a((t,n,i,...r)=>e(t,n,i,...r),e.toString),Concat:t=>a((t,...e)=>r(t,e),r.toString),Repeat:t=>a((t,e,n,...i)=>o(t,e,n,...i),o.toString),Slice:t=>a((t,e,n,i,...r)=>c(t,e,n,i,...r),c.toString),Function:(e,n,i,r,o,c,s)=>Object(R["a"])(this,void 0,void 0,(function*(){const e=[];for(const t of i.children)e.push(yield t.eval());const n=t.funct(new ne(...i.children,c),e,()=>c.eval());return n.toString=()=>`(${i.children.map(t=>t.sourceString).join(" ")}) -> ${c.sourceString}`,n})),comment:(t,e,n)=>e.sourceString,number:(t,e)=>("-"==t.sourceString?-1:1)*parseInt(e.sourceString),color:t=>t.sourceString,string:(t,e,n)=>e.sourceString.replace(/""/g,'"'),identifier:t=>t.sourceString,builtin:t=>t.sourceString}}function te(t){const e=new Zt,n=()=>e.cancel(),i=t();return"string"==typeof i?{hey:ee(i,e),cancel:n}:{hey:t=>i.then(t=>ee(t,e)).then(e=>e(t)),cancel:n}}function ee(t,e){const n=Lt.a.grammar(t),i=n.createSemantics().addOperation("eval",Yt(e));return t=>{e.reset();const r=n.match(t);if(r.failed())throw Vt(t,r);return i(r).eval()}}class ne{constructor(...t){var e;this.source=null===(e=t[0])||void 0===e?void 0:e.source.sourceString,this.pos=t.map(t=>t.source.startIdx)}get(t){return[this.source,this.pos[t]]}}const{hey:ie,cancel:re}=te(()=>Object(h["a"])("/hey.ohm").text());var oe=Object(b["a"])({state:{program:void 0,output:void 0,error:void 0},mutations:{setProgram(t,e){t.program=e,t.error=void 0,t.output=void 0},setOutput(t,e){t.output=e},setError(t,e){t.error=e}},actions:{exec({state:t,commit:e}){var n;return Object(R["a"])(this,void 0,void 0,(function*(){try{e("setError",void 0);const i=yield ie(null!==(n=t.program)&&void 0!==n?n:"");e("setOutput",i)}catch(At){e("setError",At)}}))},clear({commit:t}){return Object(R["a"])(this,void 0,void 0,(function*(){console.log("cancel"),re(),t("setOutput",void 0),t("setError",void 0)}))}},modules:{}}),ce=n("b80d");n("f9e3"),n("1a26");Object(i["f"])($).use(oe).use(Et).use(ce["a"]).mount("#app")},d39a:function(t,e,n){"use strict";n("4639")}});
//# sourceMappingURL=app.0558e87c.js.map