webpackJsonp([0],{179:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(69),r=n(l),i=a(41),o=n(i),u=a(40),s=n(u),c=a(14),d=n(c),f=a(15),m=n(f),p=a(17),h=n(p),v=a(16),g=n(v),E=a(3),_=n(E),b=a(10),y=(n(b),a(54),a(32)),N=n(y),k=a(52),w=(n(k),a(53)),D=(n(w),function(e){function t(){var e=this;(0,d.default)(this,t);var a=(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.submitUserProfile=(0,s.default)(o.default.mark(function t(){var n,l,r,i,u;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.props.routeProps,l=n.match,r=n.location,i=n.history,u=a,N.default.post("/api/profile/"+l.params.id,{baby_name:u.state.baby_name}).then(function(e){console.log(e)});case 3:case"end":return e.stop()}},t,e)})),a.handleChange=function(e){var t=e.target.name,n="checkbox"==e.target.type?e.target.checked:e.target.value;a.setState((0,r.default)({},t,n),function(){console.log("Handlechange",a.state)})},a.state={name:"Joe"},a}return(0,g.default)(t,e),(0,m.default)(t,[{key:"componentWillMount",value:function(){function e(){return t.apply(this,arguments)}var t=(0,s.default)(o.default.mark(function e(){var t,a,n,l,r,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.routeProps,a=t.match,n=t.location,l=t.history,r=this,i=function(){var e=(0,s.default)(o.default.mark(function e(){var t;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.default.get("/api/user/"+a.params.id);case 3:t=e.sent,console.log(t),r.setState({initialData:r.props.initialData,userProfile:t.data.user[0],following:t.data.following},function(){console.log("Profile"),console.log(r.state,"baby getUser")}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),i();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){if(void 0==this.state.userProfile)return _.default.createElement("div",null,"Loading");var e=this.state.userProfile,t=e.baby_name,a=e.baby_img;return console.log("baby render",this.state),_.default.createElement("div",{className:"content-area profile-page"},_.default.createElement("div",{className:"info info-panel"},_.default.createElement("label",null,"Baby's Name"),_.default.createElement("h1",null,""+t),_.default.createElement("div",null,_.default.createElement("form",null,_.default.createElement("input",{className:"form_title",type:"text",value:this.state.baby_name,name:"baby_name",placeholder:"Full Name Here",onChange:this.handleChange}),_.default.createElement("input",{className:"form_title",type:"text",name:"gender",placeholder:"Gender",onChange:this.handleChange}),_.default.createElement("button",{type:"button",onClick:this.submitUserProfile},"Save")))),_.default.createElement("div",{className:"user-img"},_.default.createElement("img",{className:"photo-reduce",src:a})))}}]),t}(E.Component));t.default=D},180:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(41),r=n(l),i=a(40),o=n(i),u=a(14),s=n(u),c=a(15),d=n(c),f=a(17),m=n(f),p=a(16),h=n(p),v=a(3),g=n(v),E=a(10),_=(n(E),a(54),a(32)),b=(n(_),a(52)),y=n(b),N=a(53),k=n(N),w=function(e){function t(){(0,s.default)(this,t);var e=(0,m.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clickedBtn=function(){console.log("swag")},e.state={name:"Joe"},e}return(0,h.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(r.default.mark(function e(){var t=this;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({initialData:this.props.initialData},function(){console.log(t.props,"Home method componet will mount")});case 1:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){return g.default.createElement("div",{className:"content-area"},g.default.createElement(y.default,{initialData:void 0==this.state.initialData?"loading":this.state.initialData}),g.default.createElement(k.default,{initialData:void 0==this.state.initialData?"loading":this.state.initialData}))}}]),t}(v.Component);t.default=w},181:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(14),r=n(l),i=a(15),o=n(i),u=a(17),s=n(u),c=a(16),d=n(c),f=a(3),m=n(f),p=a(10),h=(n(p),a(32)),v=(n(h),function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clickedDropdown=function(){e.setState({dropdown:!e.state.dropdown})},e.state={dropdown:!1},e}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){if(void 0==this.props.initialData.userInfo)return m.default.createElement("div",null,"Loading");var e=this.props.initialData.userInfo.name,t=this.props.initialData.userInfo.id;return console.log(this.props,"LEftMenu Will Mount"),m.default.createElement("section",{id:"left-menu"},m.default.createElement("div",{className:"account-dropdown"},m.default.createElement("div",{className:"logo"},m.default.createElement("a",{href:"/"},m.default.createElement("i",{className:"fab fa-typo3"}))," "),m.default.createElement("div",{className:"name"},m.default.createElement("a",{href:"/"},""+e)," "),m.default.createElement("div",{className:"dropdown "+(this.state.dropdown?"active":"")+" "},m.default.createElement("nav",null,m.default.createElement("a",{href:"/account"},"account"),m.default.createElement("a",{href:"/logout"},"logout")))),m.default.createElement("div",{className:"groups"},m.default.createElement("div",{className:"group"},m.default.createElement("div",{className:"title"},"My Account"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("a",{href:"/logout"},"Logout")," "),m.default.createElement("li",null,m.default.createElement("a",{href:"/profile/"+t},"Profile")," "),m.default.createElement("li",null,m.default.createElement("a",{href:"/mybaby/"+t},"My Baby")," ")))))}}]),t}(f.Component));t.default=v},182:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(14),r=n(l),i=a(15),o=n(i),u=a(17),s=n(u),c=a(16),d=n(c),f=a(3),m=n(f),p=a(10),h=(n(p),function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={dropdown:!1},e}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return m.default.createElement("section",{id:"loading-comp",className:"loading"==this.props.initialData?"active":""},m.default.createElement("div",{className:"loading-icon"},m.default.createElement("div",{className:"lds-css ng-scope",style:{width:"200px",height:"200px"}},m.default.createElement("div",{style:{width:"100%",height:"100%"},className:"lds-rolling"},m.default.createElement("div",null)))),m.default.createElement("div",{className:"loading-text"},"Loading!"))}}]),t}(f.Component));t.default=h},183:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(14),r=n(l),i=a(15),o=n(i),u=a(17),s=n(u),c=a(16),d=n(c),f=a(3),m=n(f),p=a(10),h=(n(p),function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clickedBtn=function(){console.log("swag")},e.state={name:"Joe"},e}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){if(void 0==this.props.initialData.userInfo)return m.default.createElement("div",null,"Loading");var e=this.props.initialData.userInfo.baby_name,t=this.props.initialData.userInfo.relationship,a=this.props.initialData.userInfo.baby_img;return console.log(this.props,"Right baby"),m.default.createElement("div",{className:"content-area baby-panel"},m.default.createElement("div",{className:"info"},m.default.createElement("label",null,"Baby Name"),m.default.createElement("h1",null,""+e),m.default.createElement("label",null,"Realationship with baby"),m.default.createElement("h1",null,""+t)),m.default.createElement("div",{className:"user-img"},m.default.createElement("img",{src:a})))}}]),t}(f.Component));t.default=h},184:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(69),r=n(l),i=a(41),o=n(i),u=a(40),s=n(u),c=a(14),d=n(c),f=a(15),m=n(f),p=a(17),h=n(p),v=a(16),g=n(v),E=a(3),_=n(E),b=a(10),y=(n(b),a(54),a(32)),N=n(y),k=a(52),w=(n(k),a(53)),D=(n(w),function(e){function t(){var e=this;(0,d.default)(this,t);var a=(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.submitUserProfile=(0,s.default)(o.default.mark(function t(){var n,l,r,i,u;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.props.routeProps,l=n.match,r=n.location,i=n.history,u=a,N.default.post("/api/profile/"+l.params.id,{name:a.state.name,relationship:a.state.relationship});case 3:case"end":return e.stop()}},t,e)})),a.handleChange=function(e){var t=e.target.name,n="checkbox"==e.target.type?e.target.checked:e.target.value;a.setState((0,r.default)({},t,n))},a.state={},a}return(0,g.default)(t,e),(0,m.default)(t,[{key:"componentWillMount",value:function(){function e(){return t.apply(this,arguments)}var t=(0,s.default)(o.default.mark(function e(){var t,a,n,l,r,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.routeProps,a=t.match,n=t.location,l=t.history,r=this,console.log(this.props,"profile will mount"),i=function(){var e=(0,s.default)(o.default.mark(function e(){var t;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.default.get("/api/user/"+a.params.id);case 3:t=e.sent,console.log(t),r.setState({initialData:r.props.initialData,userProfile:t.data.user[0],following:t.data.following},function(){console.log("Profile"),console.log(r.state)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),i();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){if(void 0==this.state.userProfile)return _.default.createElement("div",null,"Loading");var e=this.state.userProfile,t=e.name,a=e.profile_img,n=e.relationship;return _.default.createElement("div",{className:"content-area profile-page"},_.default.createElement("div",{className:"info info-panel"},_.default.createElement("label",null,"Full Name"),_.default.createElement("h1",null,""+t),_.default.createElement("label",null,"Realationship with baby"),_.default.createElement("h1",null,""+n),_.default.createElement("div",null,_.default.createElement("form",null,_.default.createElement("input",{className:"form_title",type:"text",value:this.state.name,name:"name",placeholder:"Full Name Here",onChange:this.handleChange}),_.default.createElement("input",{className:"form_title",type:"text",value:this.state.relationship,name:"relationship",placeholder:"Relationship with the baby",onChange:this.handleChange}),_.default.createElement("input",{className:"form_title",type:"email",name:"email_title",placeholder:"Email"}),_.default.createElement("input",{className:"form_title",type:"password",name:"password_title",placeholder:"Password"}),_.default.createElement("button",{type:"button",onClick:this.submitUserProfile},"Update")))),_.default.createElement("div",{className:"user-img"},_.default.createElement("img",{src:a})))}}]),t}(E.Component));t.default=D},185:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(14),r=n(l),i=a(15),o=n(i),u=a(17),s=n(u),c=a(16),d=n(c),f=a(3),m=n(f),p=a(10),h=(n(p),function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clickedBtn=function(){console.log("swag")},e.state={name:"Joe"},e}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return m.default.createElement("div",{className:"search-header"},m.default.createElement("div",{className:"search-box"},m.default.createElement("input",{type:"text",name:!0,id:!0}),m.default.createElement("div",{className:"icon-section"},m.default.createElement("div",{className:"noti"},m.default.createElement("i",{className:"fas fa-bell"}),m.default.createElement("div",{className:"noti-number active  "},"3")),m.default.createElement("div",{className:"comments"},m.default.createElement("i",{className:"fas fa-comment"}),m.default.createElement("div",{className:"noti-number active"},"3")),m.default.createElement("div",{className:"user"},m.default.createElement("i",{className:"fas fa-user"}),m.default.createElement("div",{className:"noti-number active"},"3")))))}}]),t}(f.Component));t.default=h},204:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var l=a(41),r=n(l),i=a(40),o=n(i),u=a(14),s=n(u),c=a(15),d=n(c),f=a(17),m=n(f),p=a(16),h=n(p),v=a(3),g=n(v),E=a(10),_=n(E),b=a(54),y=a(32),N=n(y),k=a(180),w=n(k),D=a(184),P=n(D),x=a(179),C=n(x),O=a(181),M=n(O),j=a(183),I=n(j),S=a(185),R=n(S),B=a(52),L=(n(B),a(53)),F=(n(L),a(182)),U=n(F),J=function(e){function t(){(0,s.default)(this,t);var e=(0,m.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clickedBtn=function(){console.log("swag")},e.state={name:"Joe"},e}return(0,h.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(r.default.mark(function e(){var t,a;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this,a=function(){var e=(0,o.default)(r.default.mark(function e(){var a;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.default.get("/api/initialApp");case 3:a=e.sent,t.setState({initialData:a.data},function(){console.log(t.state,"index")}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),a();case 3:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this;return console.log("render index"),console.log(this.state.initialData),g.default.createElement(b.BrowserRouter,null,g.default.createElement("div",{className:"app-container home-page"},g.default.createElement(U.default,{initialData:void 0==this.state.initialData?"loading":this.state.initialData}),g.default.createElement(M.default,{initialData:void 0==this.state.initialData?"loading":this.state.initialData}),g.default.createElement("section",{id:"content-container"},g.default.createElement(R.default,null),g.default.createElement(b.Route,{exact:!0,path:"/",component:function(t){return g.default.createElement(w.default,{routeProps:t,initialData:void 0==e.state.initialData?"loading":e.state.initialData})}}),g.default.createElement(b.Route,{exact:!0,path:"/profile/:id",component:function(t){return g.default.createElement(P.default,{routeProps:t,initialData:void 0==e.state.initialData?"loading":e.state.initialData})}}),g.default.createElement(b.Route,{exact:!0,path:"/mybaby/:id",component:function(t){return g.default.createElement(C.default,{routeProps:t,initialData:void 0==e.state.initialData?"loading":e.state.initialData})}})),g.default.createElement(I.default,{initialData:void 0==this.state.initialData?"loading":this.state.initialData})))}}]),t}(v.Component),W=document.getElementById("app");_.default.render(g.default.createElement(J,null),W)},52:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(69),r=n(l),i=a(41),o=n(i),u=a(40),s=n(u),c=a(14),d=n(c),f=a(15),m=n(f),p=a(17),h=n(p),v=a(16),g=n(v),E=a(3),_=n(E),b=a(10),y=(n(b),a(32)),N=n(y),k=function(e){function t(){var e=this;(0,d.default)(this,t);var a=(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.submitForm=(0,s.default)(o.default.mark(function t(){var n,l,r,i,u;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a,a.state.post_img){e.next=5;break}N.default.post("/api/post",{post_title:n.state.post_title,content:n.state.post_content,user_id:n.props.initialData.userInfo.id,type:"text"}).then(function(){n.forceUpdate()}),e.next=13;break;case 5:return l="https://api.cloudinary.com/v1_1/kevpro/image/upload",r=new FormData,r.append("upload_preset","xkuuysjv"),r.append("file",a.state.post_img),i={headers:{"content-type":"multipart/form-data"}},e.next=12,N.default.post(l,r,i).then(function(e){var t=e.data,a=t.secure_url;console.log(a),N.default.post("/api/post",{post_title:n.state.post_title,content:n.state.post_content,user_id:n.props.initialData.userInfo.id,type:"image",image_url:a})});case 12:u=e.sent;case 13:case"end":return e.stop()}},t,e)})),a.handleChange=function(e){var t=e.target.name,n="checkbox"==e.target.type?e.target.checked:e.target.value;a.setState((0,r.default)({},t,n),function(){console.log("Handlechange",a.state)})},a.handleFile=function(e){var t=e.target.name,n=e.target.files[0];a.setState((0,r.default)({},t,n))},a.state={},a}return(0,g.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this;if(console.log("compose start"),console.log(this.props,"compose"),void 0==this.props.initialData.userInfo)return _.default.createElement("div",null,"Loading");var t=this.props.initialData.userInfo.profile_img;return _.default.createElement("section",{className:"compose-section"},_.default.createElement("input",{className:"post_title",type:"text",name:"post_title",onChange:this.handleChange,placeholder:"Title"}),_.default.createElement("textarea",{name:"post_content",id:!0,cols:80,rows:8,defaultValue:"",onChange:this.handleChange,placeholder:"Whats happenning"}),_.default.createElement("input",{type:"file",name:"post_img",style:{display:"none"},ref:function(t){return e.fileInput=t},onChange:this.handleFile}),_.default.createElement("div",{className:"user-img",style:{background:"url('"+t+"')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}}),_.default.createElement("div",{className:"buttons"},_.default.createElement("div",{className:"button photo-btn"},_.default.createElement("i",{className:"fas fa-camera-retro",name:"post_img",onClick:function(){return e.fileInput.click()}})),_.default.createElement("div",{className:"button send-btn",onClick:this.submitForm},_.default.createElement("i",{className:"fas fa-paper-plane"}))))}}]),t}(E.Component);t.default=k},53:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(14),r=n(l),i=a(15),o=n(i),u=a(17),s=n(u),c=a(16),d=n(c),f=a(3),m=n(f),p=a(10),h=(n(p),function(e){function t(){(0,r.default)(this,t);var e=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.clickedBtn=function(){console.log("swag")},e.showLatestPosts=function(){if(void 0!=e.props.initialData.latestPosts)return e.props.initialData.latestPosts.reverse().map(function(e,t){var a=e.posts,n=e.users,l=e.posts.image_url;return m.default.createElement("div",{className:"update-container",key:t},m.default.createElement("div",{className:"media"},m.default.createElement("div",{className:"media__grey-container"},m.default.createElement("div",{className:"author-info"},m.default.createElement("a",{href:"#",className:"user-img",style:{backgroundImage:"url('"+n.profile_img+"')"}}),m.default.createElement("div",{className:"info"},m.default.createElement("a",{href:"/profile"},""+n.name)," shared a ",m.default.createElement("a",{href:"#"},"text"==a.type?"story":"image"))),m.default.createElement("div",{className:"update-info"},m.default.createElement("h3",null,a.title),m.default.createElement("p",null,a.content))),m.default.createElement("div",{className:"text"==a.type?"story":"image",style:{background:"url('"+l+"')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}})),m.default.createElement("div",{className:"padding-container"},m.default.createElement("div",{className:"grey-container"},m.default.createElement("div",{className:"update-stats"},m.default.createElement("div",{className:"icon-section"},m.default.createElement("div",{className:"like-circle"},m.default.createElement("i",{className:"fas fa-thumbs-up"}))),m.default.createElement("div",{className:"other-users"},"Chine Russell and 23 others liked update"),m.default.createElement("div",{className:"comments-stats"},"4 comments")),m.default.createElement("div",{className:"compose-comments"},m.default.createElement("textarea",{name:"name",id:!0,cols:80,rows:8,defaultValue:""}),m.default.createElement("div",{className:"buttons"},m.default.createElement("div",{className:"repost-button"},m.default.createElement("i",{className:"fas fa-redo"})),m.default.createElement("div",{className:"like-button"},m.default.createElement("i",{className:"fas fa-thumbs-up"})))))))})},e.state={name:"Postdide"},e}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return m.default.createElement("section",{id:"posts"},this.showLatestPosts())}}]),t}(f.Component));t.default=h}},[204]);