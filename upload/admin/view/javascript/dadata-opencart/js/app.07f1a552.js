(function(t){function e(e){for(var n,i,r=e[0],c=e[1],u=e[2],f=0,d=[];f<r.length;f++)i=r[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/admin/view/javascript/dadata-opencart/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1a12":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min_height",attrs:{id:"app"}},[a("navbar",{attrs:{base:t.location_base,token:t.token}}),a("div",{staticClass:"container is-fluid"},[a("br"),a("BodyContent",{attrs:{base:t.location_base,token:t.token}}),a("br")],1)],1)},s=[],i=(a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-white"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item brand-text",attrs:{href:t.base+"index.php?route=extension/extension"+t.token}},[t._v(" Назад в модули ")])]),t._m(0)])])}),r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item"},[t._v("Документация")])])])}],c={name:"Navbar",props:{base:String,token:String}},u=c,l=(a("5dfc"),a("2877")),f=Object(l["a"])(u,i,r,!1,null,null,null),d=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[t.notification?a("div",{staticClass:"column is-fullwidth block-alert"},[a("div",{staticClass:"notification is-warning",domProps:{innerHTML:t._s(t.notification)}})]):t._e(),a("div",{staticClass:"column is-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"menu-label"},[t._v(" Статус модуля ")]),a("div",{staticClass:"page_status"},[a("div",{staticClass:"onoffswitch"},[a("input",{staticClass:"onoffswitch-checkbox",attrs:{type:"checkbox",name:"onoffswitch",id:"myonoffswitch_status",tabindex:"0"},domProps:{checked:t.status},on:{change:function(e){return t.changeStatus()}}}),t._m(0)])]),a("hr"),a("p",{staticClass:"menu-label"},[t._v(" Страницы/Route ")]),a("ul",{staticClass:"menu-list"},t._l(t.routers,(function(e){return a("li",{key:e},[a("a",{class:{"is-active":e===t.route_active},on:{click:function(a){a.preventDefault(),t.route_active=e}}},[t._v(" "+t._s(e)+" ")])])})),0),a("p",{staticClass:"menu-label"},[t._v(" Добавить route ")]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.route_new,expression:"route_new"}],staticClass:"input",attrs:{type:"text",placeholder:"Add route"},domProps:{value:t.route_new},on:{input:function(e){e.target.composing||(t.route_new=e.target.value)}}})])]),a("button",{staticClass:"button is-success is-fullwidth",on:{click:t.addRoute}},[t._v("Добавить")])])])]),t.route_active?a("div",{staticClass:"column is-9"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"},[t._v(" Настройки для "+t._s(t.route_active)+" ")]),a("div",{staticClass:"page_status"},[a("div",{staticClass:"onoffswitch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.routeSetting.status,expression:"routeSetting.status"}],staticClass:"onoffswitch-checkbox",attrs:{type:"checkbox",name:"onoffswitch",id:"myonoffswitch",tabindex:"0"},domProps:{value:t.routeSetting.status,checked:t.routeSetting.status,checked:Array.isArray(t.routeSetting.status)?t._i(t.routeSetting.status,t.routeSetting.status)>-1:t.routeSetting.status},on:{change:function(e){var a=t.routeSetting.status,n=e.target,o=!!n.checked;if(Array.isArray(a)){var s=t.routeSetting.status,i=t._i(a,s);n.checked?i<0&&t.$set(t.routeSetting,"status",a.concat([s])):i>-1&&t.$set(t.routeSetting,"status",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.routeSetting,"status",o)}}}),t._m(1)])])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("article",{staticClass:"message is-warning"},[a("div",{staticClass:"message-body"},[t._v(" Не забудьте добавить модуль "),a("strong",[t._v("Dadata Opencart")]),t._v(" на route "),a("em",[t._v(" "+t._s(t.route_active))]),t._v(", в разделе "),a("a",{attrs:{href:t.base+"index.php?route=design/layout"+t.token}},[t._v("схемы")]),t._v(". Если нужного route не нашлось создайте его или добавьте к сеществующему. Вызвать можно "),a("code",[t._v("if('"+t._s(t.route_active.replace("/","_"))+"' in window) "+t._s(t.route_active.replace("/","_"))+"();")])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-8 block-js"},[a("p",{staticClass:"menu-label"},[t._v(" Настройки Javascript ")]),a("Codemirror",{attrs:{name:"before",options:t.codemirrorJavascript},on:{input:t.onCmCodeChangeJavascriptBefore},model:{value:t.routeSetting.before,callback:function(e){t.$set(t.routeSetting,"before",e)},expression:"routeSetting.before"}}),a("p",{staticClass:"menu-label"},[t._v(" Вызов Javascript ")]),a("Codemirror",{attrs:{name:"after",options:t.codemirrorJavascript},on:{input:t.onCmCodeChangeJavascriptAfter},model:{value:t.routeSetting.after,callback:function(e){t.$set(t.routeSetting,"after",e)},expression:"routeSetting.after"}})],1),a("div",{staticClass:"column is-4 block-css"},[a("p",{staticClass:"menu-label"},[t._v(" Настройки стилей ")]),a("Codemirror",{attrs:{name:"css",options:t.codemirrorCss},on:{input:t.onCmCodeChangeCss},model:{value:t.routeSetting.css,callback:function(e){t.$set(t.routeSetting,"css",e)},expression:"routeSetting.css"}})],1)])])]),a("footer",{staticClass:"card-footer"},[a("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.saveSettingRoute(e)}}},[t._v("Сохранить")]),a("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.deleteSettingRoute(e)}}},[t._v("Удалить")])])])]):t._e()])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"onoffswitch-label",attrs:{for:"myonoffswitch_status"}},[a("span",{staticClass:"onoffswitch-inner"}),a("span",{staticClass:"onoffswitch-switch"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"onoffswitch-label",attrs:{for:"myonoffswitch"}},[a("span",{staticClass:"onoffswitch-inner"}),a("span",{staticClass:"onoffswitch-switch"})])}],v=(a("99af"),a("4160"),a("c975"),a("b0c0"),a("a9e3"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("textarea",{ref:"myCm"})}),m=[],g=a("56b3"),b=a.n(g),_=(a("f9d4"),a("7b00"),a("a7be"),a("7a7a"),a("31c5"),a("9948"),a("b933"),a("9b74"),a("f6b6"),a("3c98"),a("9c7b"),a("715d"),a("23de"),a("4ba6"),a("8c33"),a("7289"),a("2aed"),a("d72f"),a("0b6c"),a("9a48"),a("697e"),a("aedd"),a("164b"),a("4895"),a("cbc8"),a("8d70"),a("9f09"),a("a2c1"),{name:"Codemirror",props:{hidden:Boolean,value:String,options:Object},data:function(){return{myCodemirror:void 0}},mounted:function(){var t=this;this.myCodemirror=new b.a.fromTextArea(this.$refs.myCm,this.options),this.myCodemirror.setValue(this.value),this.myCodemirror.on("change",(function(e){t.$emit&&t.$emit("input",e.getValue())})),this.myCodemirror.on("focus",(function(t){t.refresh()}))}}),C=_,S=Object(l["a"])(C,v,m,!1,null,null,null),w=S.exports,y=a("bc3a").default,k={name:"HelloWorld",components:{Codemirror:w},props:{base:String,token:String},data:function(){return{notification:"",status:0,route_new:"",routers:[],routeSetting:{before:"",after:"",css:"",status:0},route_active:"",codemirrorJavascript:{tabSize:2,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!0,line:!0,foldGutter:!0,styleSelectedText:!0,mode:"text/javascript",keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai",extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1}},codemirrorCss:{tabSize:2,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!0,line:!0,foldGutter:!0,styleSelectedText:!0,mode:"text/css",keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai",extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1}}}},watch:{route_active:function(t){this.settingRoute(t),this.route_active=t},notification:function(t){var e=this;this.notification=t,t&&setTimeout((function(){e.notification=""}),5e3)}},methods:{changeStatus:function(){var t=this;this.status=!this.status,y.get("".concat(this.base,"index.php?route=catalog/dadata_opencart/changeStatus&status=").concat(this.status?1:0).concat(this.token)).then((function(e){console.log(e.data),e.data.notification&&(t.notification=e.data.notification)})).catch((function(t){console.log(t)}))},addRoute:function(){this.route_new&&-1===this.routers.indexOf(this.route_new)?(this.routers.push(this.route_new),this.route_new=""):""!==this.route_new&&(this.notification="Такой route уже есть на странице")},onCmCodeChangeJavascriptBefore:function(t){this.routeSetting.before=t},onCmCodeChangeJavascriptAfter:function(t){this.routeSetting.after=t},onCmCodeChangeCss:function(t){this.routeSetting.css=t},changePageSetting:function(t){t.notification&&(this.notification=t.notification),t.before?(this.routeSetting.before=t.before,this.routeSetting.after=t.after,this.routeSetting.css=t.css,this.routeSetting.status=t.status||0,this.$children.forEach((function(e){e.myCodemirror.setValue(t[e.$el.name])}))):(this.routeSetting.before="",this.routeSetting.after="",this.routeSetting.css="",this.routeSetting.status="",this.$children.forEach((function(t){t.myCodemirror.setValue("")})))},settingRoute:function(t){var e=this;y.get("".concat(this.base,"index.php?route=catalog/dadata_opencart/settingRoute&setting_name=").concat(t).concat(this.token)).then((function(t){console.log(t.data),e.changePageSetting(t.data)})).catch((function(t){console.log(t)}))},saveSettingRoute:function(){var t=this,e={name:this.route_active,before:this.routeSetting.before,after:this.routeSetting.after,css:this.routeSetting.css,status:this.routeSetting.status?1:0};y.post("".concat(this.base,"index.php?route=catalog/dadata_opencart/saveSettingRoute").concat(this.token),e).then((function(e){console.log(e.data),e.data.notification&&e.data.notification&&(t.notification=e.data.notification)})).catch((function(t){console.log(t)}))},deleteSettingRoute:function(){var t=this;y.get("".concat(this.base,"index.php?route=catalog/dadata_opencart/deleteSettingRoute&setting_name=").concat(this.route_active).concat(this.token)).then((function(e){console.log(e.data),t.changePageSetting(e.data),t.route_active="",t.routers=e.data.routers,e.data.notification&&(t.notification=e.data.notification)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;y.get("".concat(this.base,"index.php?route=catalog/dadata_opencart/getRoutes").concat(this.token)).then((function(e){console.log(e.data),e.data.status&&(t.status=Number(e.data.status)),e.data.routers&&(t.routers=e.data.routers)})).catch((function(t){console.log(t)}))}},x=k,$=(a("d2ed"),Object(l["a"])(x,h,p,!1,null,null,null)),O=$.exports,j="",P="";j=location.origin+"/admin/",P=location.href.replace(/.{0,}(&token=.*|&user_token=.*)/gi,"$1").replace(/#.+/gi,"");var R={name:"App",components:{Navbar:d,BodyContent:O},data:function(){return{location_base:j,token:P}}},A=R,J=(a("034f"),Object(l["a"])(A,o,s,!1,null,null,null)),E=J.exports;a("6597");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(E)}}).$mount("#app")},"5dfc":function(t,e,a){"use strict";a("1a12")},"85ec":function(t,e,a){},cf4d:function(t,e,a){},d2ed:function(t,e,a){"use strict";a("cf4d")}});
//# sourceMappingURL=app.07f1a552.js.map