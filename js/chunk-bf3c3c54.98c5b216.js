(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf3c3c54"],{"615b":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return o}));var i=a("b0af"),n=a("80d2"),r=Object(n["g"])("v-card__actions"),s=Object(n["g"])("v-card__subtitle"),c=Object(n["g"])("v-card__text"),o=Object(n["g"])("v-card__title");i["a"]},acca:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"projects"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{align:"center",justify:"center"}},[a("h1",[t._v("My Projects")])])],1),t._l(t.projects,(function(e,i){return a("v-row",{key:i,attrs:{align:"center",justify:"center"}},t._l(e,(function(e){return a("v-col",{key:e.id,attrs:{justify:"center"}},[a("v-card",{staticClass:"elevation-2 d-flex flex-column",attrs:{"min-height":"200","max-width":"380"}},[a("v-card-title",{staticClass:"headline",domProps:{innerHTML:t._s(e.title)}},[a("b",[t._v(" "+t._s(e.title)+" ")])]),a("v-card-text",{domProps:{innerHTML:t._s(e.description)}},[t._v(" "+t._s(e.desciption)+" ")]),a("v-spacer"),a("v-card-actions",[a("v-btn",{attrs:{text:"",href:e.link,target:"_blank"}},[t._v(" "+t._s(e.linkType)+" "),a("v-icon",[t._v("mdi-code-greater-than")])],1)],1)],1)],1)})),1)}))],2)},n=[],r={data:function(){return{rows:1,cols:1,projects:[[{id:1,title:"VEDL",description:"VEDL: A Novel Video Event Searching Technique Using Deep Learning.<br> It is a research paper that got published in springer",linkType:"Read",link:"https://link.springer.com/chapter/10.1007/978-981-15-0751-9_83"},{id:2,title:"Command line news",description:"A command line interface for reading news written in golang\n\n                            ",link:"https://github.com/AkshayS96/news-cli-golang",linkType:"Code"},{id:3,title:"Live Media Streaming",description:"A Client and Server software for Live media Streaming over RTSP protocal.<br> Both client and server are written in java",link:"https://github.com/AkshayS96/LiveMediaStreaming",linkType:"Code"}],[{id:4,title:"JavaFX Media Player",description:"A media player written in java using vlcj library",link:"https://github.com/AkshayS96/javafxVideoPlayer",linkType:"Code"}],[]]}}},s=r,c=a("2877"),o=a("6544"),l=a.n(o),d=a("8336"),u=a("b0af"),h=a("99d9"),v=a("62ad"),p=a("a523"),g=a("132d"),f=a("0fd9"),b=a("2fa4"),m=Object(c["a"])(s,i,n,!1,null,null,null);e["default"]=m.exports;l()(m,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:v["a"],VContainer:p["a"],VIcon:g["a"],VRow:f["a"],VSpacer:b["a"]})},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var i=a("5530"),n=(a("615b"),a("10d2")),r=a("297c"),s=a("1c87"),c=a("58df");e["a"]=Object(c["a"])(r["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(i["a"])({"v-card":!0},s["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-bf3c3c54.98c5b216.js.map