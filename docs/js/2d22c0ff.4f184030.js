(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{attrs:{elevated:""}},[e("q-toolbar",[e("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(a){t.leftDrawerOpen=!t.leftDrawerOpen}}},[e("q-icon",{attrs:{name:"menu"}})],1),e("q-toolbar-title",[t._v("\n        Quasar App\n      ")]),e("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),e("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(a){t.leftDrawerOpen=a},expression:"leftDrawerOpen"}},[e("q-list",[e("q-item-label",{attrs:{header:""}},[t._v("Essential Links")]),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"school"}})],1),e("q-item-section",[e("q-item-label",[t._v("Docs")]),e("q-item-label",{attrs:{caption:""}},[t._v("quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"code"}})],1),e("q-item-section",[e("q-item-label",[t._v("Github")]),e("q-item-label",{attrs:{caption:""}},[t._v("github.com/quasarframework")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://chat.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"chat"}})],1),e("q-item-section",[e("q-item-label",[t._v("Discord Chat Channel")]),e("q-item-label",{attrs:{caption:""}},[t._v("chat.quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://forum.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"record_voice_over"}})],1),e("q-item-section",[e("q-item-label",[t._v("Forum")]),e("q-item-label",{attrs:{caption:""}},[t._v("forum.quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"rss_feed"}})],1),e("q-item-section",[e("q-item-label",[t._v("Twitter")]),e("q-item-label",{attrs:{caption:""}},[t._v("@quasarframework")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://facebook.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"public"}})],1),e("q-item-section",[e("q-item-label",[t._v("Facebook")]),e("q-item-label",{attrs:{caption:""}},[t._v("@QuasarFramework")])],1)],1)],1)],1),e("q-page-container",[e("router-view")],1)],1)},o=[],i=e("0967"),n=e("2b0e"),s=function(t,a){var e=window.open;if(!0===i["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)e=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==n["a"].prototype.$q.electron)return n["a"].prototype.$q.electron.shell.openExternal(t);var r=e(t,"_blank");if(r)return r.focus(),r;a&&a()},l={name:"MyLayout",data:function(){return{leftDrawerOpen:!1}},methods:{openURL:s}},c=l,q=e("2877"),v=Object(q["a"])(c,r,o,!1,null,null,null);a["default"]=v.exports}}]);