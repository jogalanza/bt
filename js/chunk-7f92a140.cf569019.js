(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f92a140"],{"0a89":function(e){e.exports=JSON.parse('{"appId":"com.jogalanza.budgettracker","appName":"Budget Tracker","bundledWebRuntime":false,"webDir":"dist","plugins":{"GoogleAuth":{"scopes":["profile","email"],"serverClientId":"638500515999-qqedfumejapak00tsg78735skq55qfv3.apps.googleusercontent.com","forceCodeForRefreshToken":true}}}')},"9e96":function(e,t,n){"use strict";n.r(t),n.d(t,"GoogleAuthWeb",(function(){return i}));var s=n("1547"),a=n("0a89");class i extends s["b"]{constructor(){super()}get webConfigured(){return"undefined"!==typeof document&&document.getElementsByName("google-signin-client_id").length>0}loadScript(){const e="gapi",t=null===document||void 0===document?void 0:document.getElementById(e);if(!t){var n=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.defer=!0,s.async=!0,s.id=e,s.onload=this.platformJsLoaded,s.src="https://apis.google.com/js/platform.js",n.appendChild(s)}}init(){this.webConfigured&&(this.gapiLoaded=new Promise(e=>{window.gapiResolve=e,this.loadScript()}),this.addUserChangeListener())}platformJsLoaded(){gapi.load("auth2",()=>{const e={client_id:document.getElementsByName("google-signin-client_id")[0].content};null!=a.plugins.GoogleAuth&&null!=a.plugins.GoogleAuth.scopes&&(e.scope=a.plugins.GoogleAuth.scopes.join(" ")),gapi.auth2.init(e),window.gapiResolve()})}async signIn(){return new Promise(async(e,t)=>{try{var n,s=!1;try{s=null!=a.plugins.GoogleAuth.serverClientId}catch(i){}if(s){const e=await gapi.auth2.getAuthInstance().grantOfflineAccess();n=e.code}else await gapi.auth2.getAuthInstance().signIn();const t=gapi.auth2.getAuthInstance().currentUser.get();s&&await t.reloadAuthResponse();const o=this.getUserFrom(t);o.serverAuthCode=n,e(o)}catch(o){t(o)}})}async refresh(){const e=await gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();return{accessToken:e.access_token,idToken:e.id_token}}async signOut(){return gapi.auth2.getAuthInstance().signOut()}async addUserChangeListener(){await this.gapiLoaded,gapi.auth2.getAuthInstance().currentUser.listen(e=>{this.notifyListeners("userChange",e.isSignedIn()?this.getUserFrom(e):null)})}getUserFrom(e){const t={},n=e.getBasicProfile();t.email=n.getEmail(),t.familyName=n.getFamilyName(),t.givenName=n.getGivenName(),t.id=n.getId(),t.imageUrl=n.getImageUrl(),t.name=n.getName();const s=e.getAuthResponse(!0);return t.authentication={accessToken:s.access_token,idToken:s.id_token},t}}}}]);
//# sourceMappingURL=chunk-7f92a140.cf569019.js.map