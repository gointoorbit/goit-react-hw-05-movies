"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[452],{452:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(439),u=t(791),c=t(689),i={reviewAuthor:"Review_reviewAuthor__Y4JIT"},a=t(184),o=function(e){var r=e.review;return(0,a.jsxs)("li",{className:i.reviewItem,children:[(0,a.jsx)("p",{className:i.reviewAuthor,children:r.author}),(0,a.jsx)("p",{className:i.reviewText,children:r.content})]},r.id)},s=t(586),p={reviewInfo:"Reviews_reviewInfo__L5-dS"},f=function(){var e=(0,u.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],f=(0,c.UO)().movieId;return(0,u.useEffect)((function(){f&&(0,s.oc)(f).then((function(e){return i(e)})).catch((function(e){return console.log("Error with fetching data")}))}),[f]),(0,a.jsx)(a.Fragment,{children:t.length>0?(0,a.jsx)("ul",{className:p.reviewList,children:t.map((function(e){return(0,a.jsx)(o,{review:e})}))}):(0,a.jsx)("p",{className:p.reviewInfo,children:"There is no review"})})}},586:function(e,r,t){function n(e,r,t,n,u,c,i){try{var a=e[c](i),o=a.value}catch(s){return void t(s)}a.done?r(o):Promise.resolve(o).then(n,u)}function u(e){return function(){var r=this,t=arguments;return new Promise((function(u,c){var i=e.apply(r,t);function a(e){n(i,u,c,a,o,"next",e)}function o(e){n(i,u,c,a,o,"throw",e)}a(void 0)}))}}t.d(r,{e7:function(){return p},oC:function(){return h},hG:function(){return s},oc:function(){return f},LP:function(){return o}});var c=t(757),i=t.n(c),a=function(){var e=u(i().mark((function e(r){var t,n,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjE1ODRkODUyN2E3NGQyMGQxNDVhY2U0YTY3MDQxNSIsInN1YiI6IjY2NjE4ZTI3OGNlMGFlYzRkYzAwYmYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DJqz3xpPLRJkRoA5Xl4lFV82XaEbMVKQlweONxPDdz8"}},e.prev=1,e.next=4,fetch(r,t);case 4:return n=e.sent,e.next=7,n.json();case 7:return u=e.sent,e.abrupt("return",u);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=u(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",e.next=3,a("https://api.themoviedb.org/3/trending/all/day");case 3:return r=e.sent,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=u(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r),e.next=3,a(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=u(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r,"/credits"),e.next=3,a(t);case 3:return n=e.sent,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=u(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(r,"/reviews"),e.next=3,a(t);case 3:return n=e.sent,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=u(i().mark((function e(r,t){var n,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(r,"&page=").concat(t),e.next=3,a(n);case 3:return u=e.sent,e.abrupt("return",u.results);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=452.072ef54b.chunk.js.map