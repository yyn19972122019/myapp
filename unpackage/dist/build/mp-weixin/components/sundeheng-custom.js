(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/sundeheng-custom"],{"3f4d":function(t,n,a){"use strict";a.r(n);var e=a("9456"),u=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=u.a},"51f5":function(t,n,a){"use strict";a.r(n);var e=a("d46d"),u=a("3f4d");for(var c in u)"default"!==c&&function(t){a.d(n,t,(function(){return u[t]}))}(c);a("75cc");var r,i=a("f0c5"),o=Object(i["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=o.exports},"75cc":function(t,n,a){"use strict";var e=a("da45"),u=a.n(e);u.a},9456:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"sundeheng-custom",computed:{style:function(){var t=this.StatusBar,n=this.CustomBar,a=this.bgImage,e="height:".concat(n,"px;padding-top:").concat(t,"px;");return this.bgImage&&(e="".concat(e,"background-image:url(").concat(a,");")),e}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})},rightcli:function(){this.$emit("rightcli")}}};n.default=a}).call(this,a("543d")["default"])},d46d:function(t,n,a){"use strict";var e,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];a.d(n,"b",(function(){return u})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}))},da45:function(t,n,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sundeheng-custom-create-component',
    {
        'components/sundeheng-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("51f5"))
        })
    },
    [['components/sundeheng-custom-create-component']]
]);
