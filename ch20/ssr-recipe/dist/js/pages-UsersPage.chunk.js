exports.ids=[3],exports.modules={20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(2),c=function(e){var t=e.users;return t?a.a.createElement("div",null,a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(u.Link,{to:"/users/".concat(e.id)},e.username))})))):null},l=n(14),s=n(9),i=n(15),m=Object(l.connect)((function(e){return{users:e.users.users}}),{getUsers:s.c})((function(e){var t=e.users,n=e.getUsers;return Object(r.useEffect)((function(){t||n()}),[t,n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(c,{users:t}),a.a.createElement(i.a,{resolve:n}))})),o=function(e){var t=e.user,n=t.email,r=t.name,u=t.username;return a.a.createElement("div",null,a.a.createElement("h1",null,u," (",r,")"),a.a.createElement("p",null,a.a.createElement("b",null,"e-mail:")," ",n))},f=function(e){var t=e.id,n=Object(l.useSelector)((function(e){return e.users.user})),u=Object(l.useDispatch)();return Object(i.c)((function(){return u(Object(s.b)(t))})),Object(r.useEffect)((function(){n&&n.id===parseInt(t,10)||u(Object(s.b)(t))}),[u,t,n]),n?a.a.createElement(o,{user:n}):null};t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement(u.Route,{path:"/users/:id",render:function(e){var t=e.match;return a.a.createElement(f,{id:t.params.id})}}))}}};