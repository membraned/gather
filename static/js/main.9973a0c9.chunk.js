(this.webpackJsonpgather=this.webpackJsonpgather||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(15),o=n.n(s),c=(n(40),n(7)),i=n(8),u=n(10),l=n(9),d=n(18),h=n(22),p=n(34),m=(n(41),n(42),n(43),n(1)),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(m.jsx)("div",{className:"event",children:Object(m.jsxs)("div",{className:"eventCard",children:[Object(m.jsx)("h1",{className:"eventCardName",children:t.summary}),Object(m.jsxs)("p",{className:"eventCardDate",children:["starts: ",t.start.dateTime]}),Object(m.jsxs)("p",{className:"eventCardDate",children:["timezone: ",t.start.timeZone]}),Object(m.jsxs)("p",{className:"eventCardLocation",children:["location: ",t.location]}),!this.state.showDetails&&Object(m.jsx)("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()},children:"show details"}),this.state.showDetails&&Object(m.jsxs)("div",{className:"eventOpen",children:[Object(m.jsxs)("p",{className:"eventCardLink",children:["link: ",t.htmlLink]}),Object(m.jsxs)("p",{className:"eventCardDesc",children:["description: ",t.description]}),Object(m.jsx)("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()},children:"hide details"})]})]})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(m.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(f,{event:e})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"CitySearch",children:[Object(m.jsx)("input",{type:"text",className:"city",placeholder:"search cities",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(m.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(m.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(m.jsx)("b",{children:"see all cities"})})]})]})}}]),n}(a.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInput=function(t){var n=t.target.value;n<1?console.error("please choose a number greater than or equal to 1"):(e.setState({numberOfEvents:n}),e.props.updateEvents(e.props.selectedLocation,n))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"NumberOfEvents",children:[Object(m.jsx)("label",{className:"eventNumLabel",children:"number of events: \xa0"}),Object(m.jsx)("input",{className:"events",type:"number",value:this.props.numberOfEvents,onChange:this.handleInput})]})}}]),n}(a.Component),g=n(12),w=n.n(g),y=n(16),O=n(35),k=n(25),x=n.n(k),S=n(17),N=n.n(S),T=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TH,TU"],iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187221506816000"',id:"48m09le389vijbqfs2mcr6i87q",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:39:01.000Z",updated:"2020-07-01T13:39:13.408Z",summary:"Node Gang",description:"We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",location:"Sydney NSW, Australia",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T09:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T10:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;BYDAY=TU"],iCalUID:"48m09le389vijbqfs2mcr6i87q@google.com",sequence:1,hangoutLink:"https://meet.google.com/wdc-wutt-tji",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/wdc-wutt-tji",label:"meet.google.com/wdc-wutt-tji"},{entryPointType:"more",uri:"https://tel.meet/wdc-wutt-tji?pin=3796108774207",pin:"3796108774207"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618974",label:"+49 40 8081618974",pin:"170634768"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"wdc-wutt-tji",signature:"AL9oL6Xu9pm++ltHcO4H0DIZIngA"},reminders:{useDefault:!0},eventType:"default"}],E=function(e){var t=e.map((function(e){return e.location}));return Object(O.a)(new Set(t))},C=function(){var e=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Z=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://vyceiykdg5.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,a,r,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",T);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),N.a.done(),e.abrupt("return",JSON.parse(t).events);case 8:return e.next=10,M();case 10:if(!(n=e.sent)){e.next=20;break}return D(),a="https://vyceiykdg5.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,x.a.get(a);case 16:return(r=e.sent).data&&(s=E(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),N.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(y.a)(w.a.mark((function e(){var t,n,a,r,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("accees_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,x.a.get("https://vyceiykdg5.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&Z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],selectedLocation:"all",numberOfEvents:32},e.updateEvents=function(t,n){L().then((function(a){var r=a.filter((function(e){return e.location===t}));e.setState({events:r,numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,L().then((function(t){e.mounted&&e.setState({events:t,locations:E(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations,a=e.selectedLocation,r=e.numberOfEvents;return Object(m.jsxs)("div",{children:[Object(m.jsxs)(d.a,{className:"navbar",sticky:"top",expand:"lg",children:[Object(m.jsx)(d.a.Brand,{className:"logo",href:"#home",children:"gather"}),Object(m.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(h.a,{className:"mr-auto",children:[Object(m.jsx)(h.a.Link,{href:"https://github.com/membraned",children:"github"}),Object(m.jsx)(h.a.Link,{href:"https://www.linkedin.com/in/aidanheck/",children:"linkedin"})]})})]}),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(p.a,{className:"appContainer",children:[Object(m.jsx)(b,{locations:n,updateEvents:this.updateEvents}),Object(m.jsx)(v,{events:t}),Object(m.jsx)(j,{numberOfEvents:r,selectedLocation:a,updateEvents:this.updateEvents})]})})]})}}]),n}(a.Component),A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root")),A()}},[[70,1,2]]]);
//# sourceMappingURL=main.9973a0c9.chunk.js.map