(this["webpackJsonpweather-page"]=this["webpackJsonpweather-page"]||[]).push([[0],{21:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},46:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(10),s=r.n(a),i=r(3),u=r.n(i),o=r(9),l=r(5),h=r(4),j=(r(21),r(0));function d(e){var t=e.onSubmit,r=Object(n.useState)(""),c=Object(h.a)(r,2),a=c[0],s=c[1];return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(a),s("")},children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter your location",value:a,onChange:function(e){s(e.currentTarget.value)}})]})})}r(23);function b(e){var t=e.weather;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"current-weather-wrap",children:Object(j.jsx)("ul",{className:"weather-list",children:t.map((function(e){var t=e.dt,r=e.name,n=e.main,c=e.weather,a=e.wind,s=e.clouds;return Object(j.jsxs)("li",{children:[Object(j.jsx)("h2",{children:"Current weather"}),Object(j.jsx)("p",{children:new Date(1e3*t).toDateString()}),Object(j.jsxs)("p",{children:["location: ",r]}),Object(j.jsxs)("p",{children:[Math.round(n.temp),"\xb0C / feels like"," ",Math.round(n.feels_like),"\xb0C"]}),c.map((function(e){var t=e.id,r=e.icon,n=e.description;return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(r,".png"),alt:"icon"}),Object(j.jsx)("p",{children:n})]},t)})),Object(j.jsxs)("p",{children:["cloudiness: ",s.all,"%"]}),Object(j.jsxs)("p",{children:["humidity: ",n.humidity,"%"]}),Object(j.jsxs)("p",{children:["wind speed: ",a.speed,"m/s"]})]},r)}))})})})}r(24);function p(e){var t=e.weekWeather;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){var t=e.lat,r=e.lon,n=e.daily;return Object(j.jsxs)("div",{className:!0,children:[Object(j.jsx)("h2",{className:"week-weather-title",children:"Week Weather"}),Object(j.jsxs)("p",{children:["lat: ",t," / lon: ",r]}),Object(j.jsx)("ul",{className:"week-weather-gallery",children:n.map((function(e){var t=e.dt,r=e.temp,n=e.feels_like,c=e.clouds,a=e.humidity,s=e.wind_speed;return Object(j.jsxs)("li",{className:"week-weather-item",children:[Object(j.jsx)("p",{children:new Date(1e3*t).toDateString()}),Object(j.jsxs)("p",{children:["Morning ",Math.round(r.morn),"\xb0C / Feels like"," ",Math.round(n.morn),"\xb0C"]}),Object(j.jsxs)("p",{children:["Day ",Math.round(r.day),"\xb0C / Feels like"," ",Math.round(n.day),"\xb0C"]}),Object(j.jsxs)("p",{children:["Evening ",Math.round(r.eve),"\xb0C / Feels like"," ",Math.round(n.eve),"\xb0C"]}),Object(j.jsxs)("p",{children:["Night ",Math.round(r.night),"\xb0C / Feels like"," ",Math.round(n.night),"\xb0C"]}),Object(j.jsxs)("p",{children:["Cloudiness: ",c,"%"]}),Object(j.jsxs)("p",{children:["Humidity: ",a,"%"]}),Object(j.jsxs)("p",{children:["Wind speed: ",s,"m/s"]})]},t)}))})]},t)}))})}var f=r(11),O=r(12),m=r(15),x=r(14),v=r(13),w=r.n(v),g=(r(45),function(e){Object(m.a)(r,e);var t=Object(x.a)(r);function r(){return Object(f.a)(this,r),t.apply(this,arguments)}return Object(O.a)(r,[{key:"render",value:function(){return Object(j.jsx)(w.a,{type:"Circles",color:"#ffffff",height:40,width:40,timeout:2e3})}}]),r}(n.Component)),k={fetchWeather:function(){var e=Object(l.a)(u.a.mark((function e(t){var r,n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.searchQuery,n=void 0===r?"":r,e.prev=1,"22301d37d5f356a26164cebb551f003e",e.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&appid=").concat("22301d37d5f356a26164cebb551f003e"));case 5:return c=e.sent,a=c.json(),e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),fetchWeekWeather:function(){var e=Object(l.a)(u.a.mark((function e(t){var r,n,c,a,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.lon,n=void 0===r?"":r,c=t.lat,a=void 0===c?"":c,e.prev=1,"22301d37d5f356a26164cebb551f003e",e.next=5,fetch("http:///api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(n,"&exclude=minutely&units=metric&appid=").concat("22301d37d5f356a26164cebb551f003e"));case 5:return s=e.sent,i=s.json(),e.abrupt("return",i);case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()};function y(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),s=Object(h.a)(a,2),i=s[0],f=s[1],O=Object(n.useState)("lviv"),m=Object(h.a)(O,2),x=m[0],v=m[1],w=Object(n.useState)("49.8383"),y=Object(h.a)(w,2),S=y[0],C=y[1],N=Object(n.useState)("24.0232"),M=Object(h.a)(N,2),F=M[0],W=M[1],E=Object(n.useState)(!1),D=Object(h.a)(E,2),T=D[0],_=D[1],J=Object(n.useState)(null),Q=Object(h.a)(J,2),q=Q[0],A=Q[1];Object(n.useEffect)((function(){return B(),H(),function(){return c([])}}),[x,S,F]);var B=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t={searchQuery:x,error:q},_(!0),x){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,k.fetchWeather(t);case 7:if(n=e.sent,a=n.coord,c([].concat(Object(o.a)(r),[n])),C(a.lat),W(a.lon),n){e.next=14;break}throw new Error("Something get wrong! Try again!");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),A(e.t0);case 19:_(!1);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t={lat:S,lon:F},_(!0),S&&F){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,k.fetchWeekWeather(t);case 7:if(r=e.sent,f([].concat(Object(o.a)(i),[r])),r){e.next=11;break}throw new Error("Something get wrong! Try again!");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),A(e.t0);case 16:_(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{onSubmit:function(e){v(e),W(""),C(""),c([]),f([]),A(null)}}),Object(j.jsxs)("div",{className:"App",children:[T&&Object(j.jsx)(g,{}),Object(j.jsx)(b,{weather:r}),Object(j.jsx)(p,{weekWeather:i}),q&&Object(j.jsx)("h2",{className:"ErrorMessage",children:q.message})]})]})}r(46),r(47);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.853d43ca.chunk.js.map