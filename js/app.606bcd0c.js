(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},s=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/SI/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var a={};r.r(a),r.d(a,"keys",(function(){return yt})),r.d(a,"texts",(function(){return gt})),r.d(a,"strings",(function(){return bt})),r.d(a,"result",(function(){return xt})),r.d(a,"vars",(function(){return Ct}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Dashboard")},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("Navbar"),r("v-main",{staticClass:"grey lighten-3"},[r("v-container",[r("v-col",[r("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[r("MainView")],1)],1)],1)],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[r("v-container",{staticClass:"py-0 fill-height justify-center"},t._l(t.links,(function(e){return r("v-btn",{key:e.route,staticClass:"ml-5 mr-5",attrs:{to:e.route,text:""}},[t._v(" "+t._s(e.title)+" ")])})),1)],1)],1)},u=[],p={name:"Navbar",data:function(){return{links:[{title:"Crypt",route:"crypt"},{title:"Decrypt",route:"decrypt"},{title:"Compare",route:"comp"}]}}},d=p,f=r("2877"),m=r("6544"),v=r.n(m),h=r("40dc"),y=r("8336"),g=r("a523"),b=Object(f["a"])(d,l,u,!1,null,"2fd882f6",null),x=b.exports;v()(b,{VAppBar:h["a"],VBtn:y["a"],VContainer:g["a"]});var C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("router-view")],1)},T=[],w={name:"MainView"},_=w,S=Object(f["a"])(_,C,T,!1,null,"5d41ea02",null),P=S.exports;v()(S,{VContainer:g["a"]});var $={name:"Dashboard",components:{MainView:P,Navbar:x}},V=$,j=r("7496"),M=r("62ad"),O=r("f6c4"),D=r("8dd9"),k=Object(f["a"])(V,o,c,!1,null,"47cabaca",null),N=k.exports;v()(k,{VApp:j["a"],VCol:M["a"],VContainer:g["a"],VMain:O["a"],VSheet:D["a"]});var E={name:"App",components:{Dashboard:N},data:function(){return{}}},q=E,K=Object(f["a"])(q,s,i,!1,null,null,null),A=K.exports,B=r("f309");n["a"].use(B["a"]);var J=new B["a"]({}),Q=r("8c4f"),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",{staticClass:"mt-8 mr-8 ml-16"},[r("v-select",{staticClass:"mr-16",attrs:{items:t.primaryNumbers,label:"P",outlined:""},model:{value:t.p,callback:function(e){t.p=e},expression:"p"}}),r("v-select",{staticClass:"ml-16",attrs:{items:t.primaryNumbers,label:"Q",outlined:""},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}})],1),r("v-textarea",{attrs:{label:"String to encrypt","hide-details":"auto",filled:"",height:"200"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),r("v-spacer"),r("v-row",{staticClass:"justify-center"},[r("v-btn",{staticClass:"mt-8",attrs:{depressed:"",color:"primary",elevation:"4"},on:{click:t.encrypt}},[t._v(" Encrypt ")])],1),r("v-row",[r("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:JSON.stringify(t.encryptedMessage),expression:"JSON.stringify(encryptedMessage)",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"mt-10 ml-5",attrs:{depressed:"",color:"secondary",elevation:"4"}},[t._v(" Copy ")]),r("p",{staticClass:"ml-5 mt-11"},[r("b",{staticStyle:{color:"green"}},[t._v(t._s(t.success))])])],1),r("p",{staticClass:"mt-10"},[t._v(t._s(t.encryptedMessage))])],1)},F=[],I=(r("99af"),r("a630"),r("3ca3"),r("8ba4"),r("a9e3"),r("7409")),L=r.n(I),z={name:"Crypt",data:function(){return{message:"",encryptedMessage:"",success:"",p:null,q:null,fi:null,e:null,primaryNumbers:[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997]}},mounted:function(){this.message=this.$store.getters["texts/getTextToCrypt"],this.encryptedMessage=this.$store.getters["result/getCryptedTExt"],this.p=this.$store.getters["vars/getP"],this.q=this.$store.getters["vars/getQ"],this.success=""},watch:{message:function(t){this.$store.commit("texts/mutateTextToCrypt",t)},encryptedMessage:function(t){this.$store.commit("result/mutateCryptedText",t)},p:function(t){this.$store.commit("vars/mutateP",t)},q:function(t){this.$store.commit("vars/mutateQ",t)}},methods:{encrypt:function(){var t=65536,e=this.p,r=this.q;console.log("p: ".concat(e,", q: ").concat(r));var a=e*r;if(a<t)alert("".concat(a," < ").concat(t));else{console.log("".concat(a," > ").concat(t," === ").concat(a>t)),this.fi=(e-1)*(r-1),console.log("fi: ".concat(this.fi));var n=this.getD(this.fi);n||alert("Error generating d and e"),console.log("e: ".concat(this.e)),console.log("d: ".concat(n));var s={e:this.e,N:a},i={d:n,N:a};this.$store.commit("keys/mutatePublicKey",s),this.$store.commit("keys/mutatePrivateKey",i),console.log("C.pub: (".concat(s.e,", ").concat(s.N,")")),console.log("C.priv: (".concat(i.d,", ").concat(i.N,")"));for(var o=Array.from(this.message),c=[],l=0,u=o;l<u.length;l++){var p=u[l],d=p.charCodeAt(0),f=L()(d).modPow(s.e,s.N);c.push(f)}this.encryptedMessage=c}},getD:function(t){for(var e=null,r=1;r<101;r++)for(var a=2;a<102;a++)if(a<t&&(e=(1+r*t)/a,Number.isInteger(e)))return this.e=a,e;return e},onCopy:function(){this.success="Copied!"}}},G=z,H=r("0fd9"),U=r("b974"),W=r("2fa4"),X=r("a844"),Y=Object(f["a"])(G,R,F,!1,null,"83c047c8",null),Z=Y.exports;v()(Y,{VBtn:y["a"],VRow:H["a"],VSelect:U["a"],VSpacer:W["a"],VTextarea:X["a"]});var tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-textarea",{attrs:{label:"String to decrypt","hide-details":"auto",filled:"",height:"200"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),r("v-spacer"),r("v-row",{staticClass:"justify-center"},[r("v-btn",{staticClass:"mt-8",attrs:{depressed:"",color:"primary",elevation:"4"},on:{click:t.decrypt}},[t._v(" Decrypt ")])],1),r("p",{staticClass:"mt-10"},[t._v(t._s(t.decryptedMessage))])],1)},et=[],rt=r("b85c"),at=(r("a15b"),{name:"Decrypt",data:function(){return{message:"",decryptedMessage:"",privateKey:{}}},mounted:function(){this.privateKey=this.$store.getters["keys/getPrivateKey"],this.message=this.$store.getters["texts/getTextToDecrypt"],this.decryptedMessage=this.$store.getters["result/getDecryptedTExt"]},watch:{message:function(t){this.$store.commit("texts/mutateTextToDecrypt",t)},decryptedMessage:function(t){this.$store.commit("result/mutateDecryptedText",t)}},methods:{decrypt:function(){var t,e=JSON.parse(this.message),r=[],a=Object(rt["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value,s=L()(n).modPow(this.privateKey.d,this.privateKey.N);r.push(String.fromCharCode(s))}}catch(i){a.e(i)}finally{a.f()}this.decryptedMessage=r.join("")}}}),nt=at,st=Object(f["a"])(nt,tt,et,!1,null,"252ea90e",null),it=st.exports;v()(st,{VBtn:y["a"],VRow:H["a"],VSpacer:W["a"],VTextarea:X["a"]});var ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-textarea",{attrs:{label:"Fist String","hide-details":"auto",filled:"",height:"200"},model:{value:t.field1,callback:function(e){t.field1=e},expression:"field1"}}),r("v-textarea",{staticClass:"mt-3",attrs:{label:"Second String","hide-details":"auto",filled:"",height:"200"},model:{value:t.field2,callback:function(e){t.field2=e},expression:"field2"}}),r("v-spacer"),r("v-row",{staticClass:"justify-center"},[r("v-btn",{staticClass:"mt-8 mb-8",attrs:{depressed:"",color:"primary",elevation:"4"},on:{click:t.comp}},[t._v(" Compare ")])],1)],1)},ct=[],lt=(r("ac1f"),r("5319"),{name:"Compare",data:function(){return{field1:"",field2:""}},mounted:function(){this.field1=this.$store.getters["strings/getStr1"],this.field2=this.$store.getters["strings/getStr2"]},watch:{field1:function(t){this.$store.commit("strings/mutateStr1",t)},field2:function(t){this.$store.commit("strings/mutateStr2",t)}},methods:{comp:function(){var t=this.field1.replace(/(\r\n|\n|\r)/gm,""),e=this.field2.replace(/(\r\n|\n|\r)/gm,"");alert("Similarity:  ".concat(100*this.similarity(t,e),"  %"))},similarity:function(t,e){var r=t,a=e;t.length<e.length&&(r=e,a=t);var n=r.length;return 0===n?1:(n-this.editDistance(r,a))/parseFloat(n)},editDistance:function(t,e){t=t.toLowerCase(),e=e.toLowerCase();for(var r=[],a=0;a<=t.length;a++){for(var n=a,s=0;s<=e.length;s++)if(0===a)r[s]=s;else if(s>0){var i=r[s-1];t.charAt(a-1)!==e.charAt(s-1)&&(i=Math.min(Math.min(i,n),r[s])+1),r[s-1]=n,n=i}a>0&&(r[e.length]=n)}return r[e.length]}}}),ut=lt,pt=Object(f["a"])(ut,ot,ct,!1,null,"03d44dae",null),dt=pt.exports;v()(pt,{VBtn:y["a"],VRow:H["a"],VSpacer:W["a"],VTextarea:X["a"]}),n["a"].use(Q["a"]);var ft=[{path:"/",redirect:"/crypt"},{path:"/crypt",component:Z},{path:"/decrypt",component:it},{path:"/comp",component:dt}],mt=new Q["a"]({routes:ft,mode:"history"}),vt=mt,ht=r("2f62"),yt={namespaced:!0,state:{cPub:{},cPriv:{}},getters:{getPublicKey:function(t){return t.cPub},getPrivateKey:function(t){return t.cPriv}},actions:{},mutations:{mutatePublicKey:function(t,e){t.cPub=e},mutatePrivateKey:function(t,e){t.cPriv=e}}},gt={namespaced:!0,state:{textToCrypt:"",textToDecrypt:""},getters:{getTextToCrypt:function(t){return t.textToCrypt},getTextToDecrypt:function(t){return t.textToDecrypt}},actions:{},mutations:{mutateTextToCrypt:function(t,e){t.textToCrypt=e},mutateTextToDecrypt:function(t,e){t.textToDecrypt=e}}},bt={namespaced:!0,state:{str1:"",str2:""},getters:{getStr1:function(t){return t.str1},getStr2:function(t){return t.str2}},actions:{},mutations:{mutateStr1:function(t,e){t.str1=e},mutateStr2:function(t,e){t.str2=e}}},xt={namespaced:!0,state:{cryptedText:"",decryptedText:""},getters:{getCryptedTExt:function(t){return t.cryptedText},getDecryptedTExt:function(t){return t.decryptedText}},actions:{},mutations:{mutateCryptedText:function(t,e){t.cryptedText=e},mutateDecryptedText:function(t,e){t.decryptedText=e}}},Ct={namespaced:!0,state:{p:"",q:""},getters:{getP:function(t){return t.p},getQ:function(t){return t.q}},actions:{},mutations:{mutateP:function(t,e){t.p=e},mutateQ:function(t,e){t.q=e}}};n["a"].use(ht["a"]);var Tt=new ht["a"].Store({modules:a}),wt=r("4eb5"),_t=r.n(wt);n["a"].config.productionTip=!1,n["a"].use(_t.a),new n["a"]({vuetify:J,router:vt,store:Tt,render:function(t){return t(A)}}).$mount("#app")}});
//# sourceMappingURL=app.606bcd0c.js.map