(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{814:function(e,t,o){"use strict";o.r(t);var n=o(674),r=o(466),c=o(673),l=(o(32),o(11),o(9),o(14),o(10),o(15),o(20)),d=o(2),m=(o(79),o(5),o(38),o(39),o(27),o(74),o(12),o(68),o(175),o(90));function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"OrderModal",components:{BaseModal:function(){return o.e(4).then(o.bind(null,813))},BaseButton:function(){return o.e(0).then(o.bind(null,816))},BaseSelect:function(){return Promise.all([o.e(1),o.e(2),o.e(12)]).then(o.bind(null,823))}},data:function(){return{selectedDate:null,selectedTime:null,selectedRow:null,selectedSeat:null}},computed:h(h({},Object(m.c)({options:"modal/getModalOption",checkModal:"modal/checkModal",genreList:"movies/getGenreList",movieShowDate:"movies/getMovieShowDate",movieShowList:"movies/getMovieShowList",moviePlaces:"movies/getMoviePlaces",bookedMovies:"movies/getBookedMovies"})),{},{getGenreNameById:function(){return this.genreList[this.movieItem.genre]},movieItem:function(){var e,t;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.movie)&&void 0!==e?e:{id:0,image:"https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs=",name:""}},showTimeList:function(){var e=this;try{return this.selectedDate?this.movieShowList.filter((function(t){return t.showdate===e.selectedDate}))[0].daytime.split(";"):[]}catch(e){return console.log("Error showTimeList",e),[]}},rowPlaces:function(){var e,t;return null!==(e=null===(t=this.moviePlaces)||void 0===t?void 0:t.map((function(e,t){return++t})))&&void 0!==e?e:[]},seatPlaces:function(){var e=this;try{var t;return this.selectedRow?null===(t=this.moviePlaces)||void 0===t?void 0:t.find((function(t){return t[0].row===e.selectedRow}))[1].filter((function(e){return e.is_free})).map((function(e){return e.seat})):[]}catch(e){return console.log("Error showTimeList",e),[]}}}),watch:{checkModal:{handler:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(o.prev=0,!e){o.next=6;break}return o.next=4,t.loadMovieShowList(t.options.movie.id);case 4:o.next=7;break;case 6:t.resetModal();case 7:o.next=12;break;case 9:o.prev=9,o.t0=o.catch(0),console.log("checkModal",o.t0);case 12:case"end":return o.stop()}}),o,null,[[0,9]])})))()},immediate:!0},selectedTime:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,data={id:e.movieItem.id,daytime:e.selectedTime,showdate:e.selectedDate},t.next=4,e.loadMoviePlaces(data);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("Error selectedTime",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},methods:h(h({},Object(m.b)({loadMovieShowList:"movies/loadMovieShowList",loadMoviePlaces:"movies/loadMoviePlaces",BookMovie:"movies/BookMovie",hideModal:"modal/hideModal",showModal:"modal/showModal"})),{},{resetModal:function(){this.selectedDate=null,this.selectedTime=null},goTo:function(link){this.$router.push(link),this.hideModal()},selectSession:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={movie_id:e.movieItem.id,row:e.selectedRow,seat:e.selectedSeat,showdate:e.selectedDate,daytime:e.selectedTime},t.next=3,e.BookMovie(data);case 3:o={type:"SuccessesModal",options:{id:e.movieItem.id}},e.showModal(o);case 5:case"end":return t.stop()}}),t)})))()}})},w=o(52),component=Object(w.a)(f,(function(){var e=this,t=e._self._c;return t("BaseModal",[t(c.a,[t(n.a,{attrs:{cols:"12",md:"6",lg:"4"}},[t("div",{on:{click:function(t){return e.goTo("/movie/".concat(e.movieItem.id))}}},[t(r.a,{staticClass:"mb-5 cursor-pointer",attrs:{src:e.movieItem.image,contain:"","max-height":"550"}})],1),e._v(" "),t("BaseButton",{attrs:{"button-color":"chips","button-size":"chip"},on:{click:function(t){return e.goTo("/genre/".concat(e.movieItem.genre))}}},[e._v(e._s(e.getGenreNameById))])],1),e._v(" "),t(n.a,{attrs:{cols:"12",md:"6",lg:"8"}},[t("h1",{staticClass:"main-brown-text",class:e.getFontSize(e.$breakpoints.width,700,[32,32,32,32,32])},[e._v("\n        "+e._s(e.movieItem.name)+"\n      ")]),e._v(" "),t("BaseSelect",{staticClass:"mb-5",attrs:{title:"Choose a date",items:e.movieShowDate},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}}),e._v(" "),t("BaseSelect",{staticClass:"mb-5",attrs:{title:"Choose a time",items:e.showTimeList,disabled:!e.selectedDate},model:{value:e.selectedTime,callback:function(t){e.selectedTime=t},expression:"selectedTime"}}),e._v(" "),t("BaseSelect",{staticClass:"mb-5",attrs:{title:"Choose a row",items:e.rowPlaces,disabled:!e.selectedTime},model:{value:e.selectedRow,callback:function(t){e.selectedRow=t},expression:"selectedRow"}}),e._v(" "),t("BaseSelect",{staticClass:"mb-5",attrs:{title:"Choose a place",items:e.seatPlaces,disabled:!e.selectedRow},model:{value:e.selectedSeat,callback:function(t){e.selectedSeat=t},expression:"selectedSeat"}}),e._v(" "),t("BaseButton",{attrs:{"button-color":"border","button-size":"large",disabled:!e.selectedSeat},on:{click:e.selectSession}},[e._v("SELECT SESSION")])],1)],1)],1)}),[],!1,null,"72089818",null);t.default=component.exports}}]);