(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{683:function(e,t,r){var content=r(722);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("c06792ba",content,!0,{sourceMap:!1})},719:function(e,t,r){r(4)({target:"Number",stat:!0},{isInteger:r(720)})},720:function(e,t,r){var n=r(35),o=Math.floor;e.exports=Number.isInteger||function(e){return!n(e)&&isFinite(e)&&o(e)===e}},721:function(e,t,r){"use strict";r(683)},722:function(e,t,r){var n=r(17)(!1);n.push([e.i,".movies-title[data-v-c271653c]{background:#373737;box-shadow:inset 0 0 20px 3px #000;border:2px solid #fff}",""]),e.exports=n},802:function(e,t,r){"use strict";r.r(t);var n=r(674),o=r(676),c=r(673),l=(r(11),r(9),r(12),r(14),r(10),r(15),r(20)),f=r(2),d=(r(79),r(5),r(38),r(39),r(719),r(44),r(90));function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"GenrePage",components:{AppCard:function(){return r.e(3).then(r.bind(null,812))}},data:function(){return{genreId:this.$route.params.tag}},computed:m(m({},Object(d.c)({searchResult:"movies/getSearchMovies",genreList:"movies/getGenreList"})),{},{genreName:function(){return this.genreList[this.genreId]}}),created:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={genres:Number.isInteger(+e.genreId)?e.genreId:6},t.next=3,e.searchMovieByTeg(r);case 3:case"end":return t.stop()}}),t)})))()},methods:m({},Object(d.b)({searchMovieByTeg:"movies/loadSearchingMovies"}))},O=(r(721),r(52)),component=Object(O.a)(h,(function(){var e,t=this,r=t._self._c;return r(o.a,{attrs:{fluid:""}},[r(o.a,{staticClass:"movies px-0"},[r("div",{staticClass:"movies-title mb-6 px-10"},[r("h1",{staticClass:"mb-10 text-uppercase main-brown-text",class:t.getFontSize(t.$breakpoints.width,700,[48,48,48,38,38])},[t._v("\n        SEARCH FOR "+t._s(t.genreName)+" MOVIES\n      ")]),t._v(" "),r("div",{staticClass:"mb-15",class:t.getFontSize(t.$breakpoints.width,400,[32,32,32,24,24])},[t._v("\n        We've picked "+t._s(null===(e=t.searchResult)||void 0===e?void 0:e.length)+" movies for you!\n      ")])]),t._v(" "),r(c.a,t._l(t.searchResult,(function(e){return r(n.a,{key:e.id,attrs:{cols:"12",md:"4",lg:"2"}},[r("AppCard",{attrs:{item:e}})],1)})),1)],1)],1)}),[],!1,null,"c271653c",null);t.default=component.exports}}]);