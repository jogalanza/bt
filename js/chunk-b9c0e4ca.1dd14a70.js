(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9c0e4ca"],{"0a51":function(n,t,e){"use strict";e.r(t);var c=e("7a23"),i={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},o=Object(c["k"])("div",{class:"text-h1 q-mb-md"},"Budget Tracker",-1),a=Object(c["k"])("div",{class:"text-h4",style:{opacity:"0.4"}},"Please sign in to use the application",-1);function u(n,t,e,u,s,r){var l=Object(c["J"])("q-btn");return Object(c["E"])(),Object(c["j"])("div",i,[Object(c["k"])("div",null,[o,a,Object(c["m"])(l,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",label:"Sign In","no-caps":"",onClick:n.SignIn},null,8,["onClick"])])])}var s=e("5502"),r=e("6c02"),l=e("a189"),d=Object(c["o"])({name:"Unauthorized",setup:function(){var n=Object(s["b"])(),t=Object(r["d"])(),e=Object(l["a"])(),i=e.SignIn,o=Object(c["f"])((function(){return n.getters["SignedIn"]}));return Object(c["O"])(o,(function(){o.value&&t.push({name:"Dashboard"})})),Object(c["B"])((function(){console.log("unauthorized:mounted")})),{signedIn:o,SignIn:i}}}),b=e("6b0d"),f=e.n(b),g=e("9c40"),O=e("93dc"),p=e.n(O);const v=f()(d,[["render",u]]);t["default"]=v;p()(d,"components",{QBtn:g["a"]})},"93dc":function(n,t){n.exports=function(n,t,e){const c=void 0!==n.__vccOpts?n.__vccOpts:n,i=c[t];if(void 0===i)c[t]=e;else for(var o in e)void 0===i[o]&&(i[o]=e[o])}},a189:function(n,t,e){"use strict";t["a"]=function(){function n(){window.gapi.auth2.getAuthInstance().signIn()}function t(){window.gapi.auth2.getAuthInstance().signOut()}return{SignIn:n,SignOut:t}}}}]);
//# sourceMappingURL=chunk-b9c0e4ca.1dd14a70.js.map