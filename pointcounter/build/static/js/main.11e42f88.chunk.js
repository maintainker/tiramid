(this.webpackJsonppointcounter=this.webpackJsonppointcounter||[]).push([[0],{51:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(2),o=t.n(r),c=t(34),a=t.n(c),l=t(38),s=t(13),u=t.n(s),p=t(22),d=t(19),j=t(6),b=t(7),x=t(15),h=t(4),m=t(17),f=t(25);t(45);f.a.initializeApp({apiKey:"AIzaSyDRRfcqQcYS_XfZlNAdDNuZnAfdrOuBAOo",authDomain:"tiramid-fe62e.firebaseapp.com",databaseURL:"https://tiramid-fe62e.firebaseio.com",projectId:"tiramid-fe62e",storageBucket:"tiramid-fe62e.appspot.com",messagingSenderId:"532490031808",appId:"1:532490031808:web:addf4cb7ffb44e431b9325",measurementId:"G-5XDZWR4BYD"});var g=f.a.firestore();console.log(g),console.log(f.a);f.a;var O=g;function w(){var n=Object(j.a)(["\nlist-style:none;\ntext-align:center;\npadding :10px 0;\nli{\n  display:inline-block;\n  width:calc((100% - 80px)/4);\n  height:40px;\n  margin-left:15px;\n  a{\n    display:block;\n    width:100%;\n    height:100%;\n    box-sizing:border-box;\n    line-height:40px;\n    color:black;\n    text-decoration:none;\n  }\n  a:hover{\n    border-bottom: 3px solid green;\n  } \n  a.on{\n    border-bottom: 3px solid green;\n  }\n}\nli:first-child{\n  margin:0;\n}\n"]);return w=function(){return n},n}var v=b.a.ul(w()),y=function(n){var e=n.state;return Object(i.jsxs)(v,{children:[Object(i.jsx)("li",{children:Object(i.jsx)(x.b,{id:"win-ratio",to:"/win-ratio",className:"winRatio"===e?"winRatio on":"winRatio",children:"\uc2b9\ub960"})}),Object(i.jsx)("li",{children:Object(i.jsx)(x.b,{id:"check-point",to:"/check-point",className:"checkPoint"===e?"checkPoint on":"checkPoint",children:"\ud3ec\uc778\ud2b8"})}),Object(i.jsx)("li",{children:Object(i.jsx)(x.b,{id:"input-win",to:"/input-win",className:"putWin"===e?"putWin on":"putWin",children:"\uc2b9\ud328 \uc785\ub825"})}),Object(i.jsx)("li",{children:Object(i.jsx)(x.b,{id:"input-win",to:"/view-log",className:"viewlog"===e?"viewlog on":"viewlog",children:"\ub85c\uadf8"})})]})};function k(){var n=Object(j.a)(["\n  margin-right: ",";\n  display: inline-block;\n  width: 200px;\n  @media (max-width: 768px) {\n    width:calc((80% - 20px)/2);\n  }\n"]);return k=function(){return n},n}function P(){var n=Object(j.a)(["\n  text-align: center;\n  list-style: none;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return P=function(){return n},n}function S(){var n=Object(j.a)(["\n  width: ",";\n  height:24px;\n  text-align:right;\n  box-sizing:border-box;\n  padding:2px;\n  border:0;\n  border-bottom:1px solid #aaa;\n  @media (max-width: 768px) {\n    width:",";\n  }\n"]);return S=function(){return n},n}function N(){var n=Object(j.a)(["\n  width: 380px;\n  height: 50px;\n  margin-top: 20px;\n  @media (max-width: 768px) {\n    width:80%;\n  }\n\n"]);return N=function(){return n},n}function D(){var n=Object(j.a)(["\n  display:inline-block;\n  margin-right:","\n  select{\n    margin-right:15px;\n    height:23px;\n  }\n  @media (max-width: 768px) {\n    width:calc((80% - 20px)/2);\n    select{\n      width:80px;\n    }\n  }\n  @media (max-width: 368px) {\n    select{\n      width:50px;\n      font-size:10px;\n    }\n  }\n"]);return D=function(){return n},n}function z(){var n=Object(j.a)(["\n  text-align:center;\n  margin-top:20px;\n"]);return z=function(){return n},n}var M=b.a.div(z()),C=b.a.div(D(),(function(n){return"winner"===n.name?"20px;":"0;"})),R=b.a.button(N()),F=b.a.input(S(),(function(n){return"player"===n.name?"200px":"100px"}),(function(n){return"player"===n.name?"33%":"20%"})),I=b.a.ul(P()),L=b.a.li(k(),(function(n){return"winner"===n.name?"20px":"0"})),A=function(n){var e=n.players,t=n.addPlayer,o=n.logs,c=(new Date).getFullYear(),a=(new Date).getMonth(),l=Object(r.useState)(""),s=Object(d.a)(l,2),j=s[0],b=s[1],x=Object(r.useState)([{winner:"0",winPoint:"1",loser:"0",losePoint:"1"},{winner:"0",winPoint:"1",loser:"0",losePoint:"1"}]),h=Object(d.a)(x,2),f=h[0],g=h[1],w=function(){var n=Object(p.a)(u.a.mark((function n(t){var i,r,o,l,s,p;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(o in i=[],r=[],t)-1===(l=r.indexOf(e[t[o].winner].id))?(r.push(e[t[o].winner].id),i.push({point:e[t[o].winner].point+Number(t[o].winPoint)}),"\ud2f0\ub77c\ubbf8\ub4dc"!==e[t[o].loser].name&&(i[i.length-1].win=e[t[o].winner].win+1)):(i[l].point+=Number(t[o].winPoint),void 0===i[l].win&&"\ud2f0\ub77c\ubbf8\ub4dc"!==e[t[o].loser].name?i[l].win=e[t[o].winner].win+1:"\ud2f0\ub77c\ubbf8\ub4dc"!==e[t[o].loser].name&&(i[l].win+=1)),-1===(s=r.indexOf(e[t[o].loser].id))?(r.push(e[t[o].loser].id),i.push({point:e[t[o].loser].point-Number(t[o].losePoint)}),"\ud2f0\ub77c\ubbf8\ub4dc"!==e[t[o].loser].name&&(i[i.length-1].lose=e[t[o].loser].lose+1)):(i[s].point-=Number(t[o].losePoint),void 0===i[s].lose&&"\ud2f0\ub77c\ubbf8\ub4dc"!==e[t[o].loser].name?i[s].lose=e[t[o].loser].lose+1:"\ud2f0\ub77c\ubbf8\ub4dc"!==e[t[o].loser].name&&(i[s].lose+=1));n.t0=u.a.keys(r);case 4:if((n.t1=n.t0()).done){n.next=10;break}return p=n.t1.value,n.next=8,O.doc("playerList".concat(c).concat(a,"/").concat(r[p])).update(i[p]);case 8:n.next=4;break;case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{state:"putWin"}),Object(i.jsxs)(I,{children:[Object(i.jsx)(L,{name:"winner",children:"\uc2b9\ub9ac"}),Object(i.jsx)(L,{name:"loser",children:"\ud328\ubc30"})]}),f.map((function(n,t){return Object(i.jsxs)(M,{children:[Object(i.jsxs)(C,{name:"winner",className:"winner",children:[Object(i.jsx)("select",{value:f[t].winner,onChange:function(n){var e=Object(m.a)(f);e[t].winner=n.target.value,g(e)},children:e.map((function(n,e){return Object(i.jsx)("option",{value:e,children:n.name},e)}))}),Object(i.jsxs)("select",{value:f[t].winPoint,onChange:function(n){var e=Object(m.a)(f);e[t].winPoint=String(Number(n.target.value)),g(e)},children:[Object(i.jsx)("option",{value:"0",children:"0"}),Object(i.jsx)("option",{value:"1",children:"1"}),Object(i.jsx)("option",{value:"2",children:"2"})]})]}),Object(i.jsxs)(C,{name:"loser",className:"loser",children:[Object(i.jsx)("select",{value:f[t].loser,onChange:function(n){var e=Object(m.a)(f);e[t].loser=n.target.value,g(e)},children:e.map((function(n,e){return Object(i.jsx)("option",{value:e,children:n.name},e)}))}),Object(i.jsxs)("select",{value:f[t].losePoint,onChange:function(n){var e=Object(m.a)(f);e[t].losePoint=String(Number(n.target.value)),g(e)},children:[Object(i.jsx)("option",{value:"0",children:"0"}),Object(i.jsx)("option",{value:"1",children:"1"}),Object(i.jsx)("option",{value:"2",children:"2"})]})]})]},t)})),Object(i.jsx)(R,{onClick:function(){var n=0;for(var t in f)n+=Number(f[t].winPoint)-Number(f[t].losePoint);var i=window.confirm("\uc2b9 : ".concat(e[f[0].winner].name,", ").concat(e[f[1].winner].name," \ud328: ").concat(e[f[0].loser].name,", ").concat(e[f[1].loser].name," \uc774(\uac00) \ub9de\ub098\uc694?")),r=i?prompt("\ud2f0\ub77c\ubbf8\ub4dc \uc2b9\ud328 \uc785\ub825\uc744 \uc704\ud55c \ube44\ubc00\uc554\ud638"):null;0===n&&"\ud0dc\uc9c4"===r?w(f).then(Object(p.a)(u.a.mark((function n(){var t,i,r,l,s,p,d;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.id,i=new Date,r=1===String(i.getDate()).length?"0"+String(i.getDate()):String(i.getDate()),l=1===String(i.getHours()).length?"0"+String(i.getHours()):String(i.getHours()),s=1===String(i.getMinutes()).length?"0"+String(i.getMinutes()):String(i.getMinutes()),p={timeStamp:r+l+s,winner1:e[f[0].winner].name,winner2:e[f[1].winner].name,loser1:e[f[0].loser].name,loser2:e[f[1].loser].name},d=[p].concat(Object(m.a)(o.gamelog)),n.next=9,O.doc("playerList".concat(c).concat(a,"/").concat(t)).update({gamelog:d});case 9:case"end":return n.stop()}}),n)})))).then((function(){alert("\uc785\ub825\uc644\ub8cc!");var n=Object(m.a)(f);g([{winner:n[0].winner,winPoint:n[0].winPoint,loser:n[0].loser,losePoint:n[0].losePoint},{winner:n[1].winner,winPoint:n[1].winPoint,loser:n[1].loser,losePoint:n[1].losePoint}])})).catch((function(n){return console.error("Error:",n)})):0!==n?alert("\ud569\uacc4\uac00 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):i&&"\ud0dc\uc9c4"!==r&&alert("\uc554\ud638\ub97c \ub2f9\uc7a5 \uc54c\uc544\uc624\uc138\uc694!")},children:"\uacb0\uacfc \uc785\ub825\ud558\uae30"}),Object(i.jsxs)("div",{style:{margin:"20px 0"},children:[Object(i.jsx)(F,{name:"player",value:j,onChange:function(n){return b(n.target.value)}}),Object(i.jsx)("button",{style:{marginLeft:"20px",padding:"3px",height:"24px"},onClick:function(){window.confirm("\uc774\ub984\uc774 ".concat(j,"\uc774(\uac00) \ub9de\uc2b5\ub2c8\uae4c? \ud55c\ubc88 \ucd94\uac00\ud558\uba74 \uc81c\uac70\ud560\uc218 \uc5c6\uc2b5\ub2c8\ub2e4."))&&(t({name:j,win:0,lose:0,point:0}).then((function(n){n&&alert("\ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")})),b(""))},children:"\ud50c\ub808\uc774\uc5b4 \ucd94\uac00"})]})]})},H=function(n){var e=n.players.filter((function(n){var e=!0;return("\ud2f0\ub77c\ubbf8\ub4dc"===n.name||n.win+n.lose<5)&&(e=!1),e}));return e.sort((function(n,e){var t=n.win/(n.win+n.lose);return e.win/(e.win+e.lose)-t})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{state:"winRatio"}),Object(i.jsx)("div",{style:{margin:"20px 0 30px",position:"relative",maxHeight:"450px",overflow:"scroll"},children:e.map((function(n,e){return Object(i.jsx)("div",{style:{padding:"8px"},children:Object(i.jsxs)("span",{children:[e+1,"\uc704 ",n.name," \uc2b9\ub960 : ",Math.round(n.win/(n.win+n.lose)*1e4)/100," % , win : ",n.win,", lose : ",n.lose]})},e)}))}),Object(i.jsx)("span",{style:{position:"absolute",bottom:"3px",right:"0",fontSize:"5px"},children:"* \ud569\uacc4 5\ud310 \uc774\uc0c1\ub9cc \uc9d1\uacc4\ub429\ub2c8\ub2e4. player\uc5d0 \uc774\ub984\uc774 \uc788\uc9c0\ub9cc \uc5ec\uae30\uc5d0 \uc774\ub984\uc774 \uc5c6\ub2e4\uba74 \uacbd\uae30\uc218\uac00 5\ud310\uc774 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]})};function W(){var n=Object(j.a)(["\n  list-style:none;\n  margin :0 40px;\n  padding:10px 40px;\n  background:",";\n  li{\n    text-align:left;\n    font-size :13px;\n    margin:4px;\n  }\n"]);return W=function(){return n},n}var B=b.a.ul(W(),(function(n){return n.color})),Y=function(n){var e=n.players,t=e.filter((function(n){return n.point>10})).sort((function(n,e){return e.point-n.point})),r=e.filter((function(n){return 11>n.point&&n.point>7})).sort((function(n,e){return e.point-n.point})),o=e.filter((function(n){return 8>n.point&&n.point>3})).sort((function(n,e){return e.point-n.point})),c=e.filter((function(n){return 4>n.point&&n.point>-1})).sort((function(n,e){return e.point-n.point})),a=e.filter((function(n){return 0>n.point&&n.point>-11})).sort((function(n,e){return e.point-n.point})),l=e.filter((function(n){return-10>n.point&&n.point})).sort((function(n,e){return e.point-n.point}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{state:"checkPoint"}),Object(i.jsxs)("div",{className:"test",style:{margin:"10px auto 30px",maxHeight:"450px",overflow:"scroll"},children:[Object(i.jsxs)(B,{color:"rgba(242,184,7,0.3)",children:[Object(i.jsx)("li",{children:" - \ucc9c\uacc4 ( 11 ~ )"}),t.map((function(n,e){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},e)}))]}),Object(i.jsxs)(B,{color:"rgba(9,115,104,0.3)",children:[Object(i.jsx)("li",{children:" - \uc655\uc871 ( 8 ~ 10 )"}),r.map((function(n,e){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},e)}))]}),Object(i.jsxs)(B,{color:"rgba(242,207,184,0.3)",children:[Object(i.jsx)("li",{children:" - \uadc0\uc871 ( 4 ~ 7 )"}),o.map((function(n,e){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},e)}))]}),Object(i.jsxs)(B,{color:"rgba(217,79,48,0.3)",children:[Object(i.jsx)("li",{children:" - \ud3c9\ubbfc ( 0 ~ 3 )"}),c.map((function(n,e){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},e)}))]}),Object(i.jsxs)(B,{color:"rgba(242,153,169,0.3)",children:[Object(i.jsx)("li",{children:" - \ub178\uc608 ( -1 ~ -10 )"}),a.map((function(n,e){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},e)}))]}),Object(i.jsxs)(B,{color:"rgba(5,20,125,0.3)",children:[Object(i.jsx)("li",{children:" - \uc2ec\ud574 ( -11 ~ )"}),l.map((function(n,e){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},e)}))]})]})]})};function E(){var n=Object(j.a)(["\n  width:70px;\n"]);return E=function(){return n},n}function X(){var n=Object(j.a)(["\n  width:120px;\n  height:28px;\n  line-height:28px;\n"]);return X=function(){return n},n}function Z(){var n=Object(j.a)(["\n  margin:30px 50px;\n  list-style:none;\n  max-height:450px;\n  overflow:scroll;\n  li{\n    div{\n      display:inline-block;\n    }\n  }\n\n"]);return Z=function(){return n},n}var J=b.a.ul(Z()),q=b.a.div(X()),G=b.a.div(E()),K=function(n){var e=n.logs;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(y,{state:"viewlog"}),Object(i.jsxs)(J,{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(q,{children:"\uc2dc\uac04"}),Object(i.jsx)(G,{children:"\uc2b9\ub9ac1"}),Object(i.jsx)(G,{children:"\uc2b9\ub9ac2"}),Object(i.jsx)(G,{children:"\ud328\ubc301"}),Object(i.jsx)(G,{children:"\ud328\ubc302"})]}),e.gamelog&&e.gamelog.map((function(n){return Object(i.jsxs)("li",{children:[Object(i.jsx)(q,{children:n.timeStamp}),Object(i.jsx)(G,{children:n.winner1}),Object(i.jsx)(G,{children:n.winner2}),Object(i.jsx)(G,{children:n.loser1}),Object(i.jsx)(G,{children:n.loser2})]},n.timeStamp)}))]})]})},Q=function(n){var e=n.players,t=n.addPlayer,r=n.logs;return Object(i.jsx)(x.a,{basename:"/tiramid/pointcounter/build",children:Object(i.jsxs)(h.d,{children:[Object(i.jsx)(h.b,{exact:!0,path:"/input-win",children:Object(i.jsx)(A,{players:e,addPlayer:t,logs:r})}),Object(i.jsx)(h.b,{exact:!0,path:"/win-ratio",children:Object(i.jsx)(H,{players:e})}),Object(i.jsx)(h.b,{exact:!0,path:"/check-point",children:Object(i.jsx)(Y,{players:e})}),Object(i.jsx)(h.b,{exact:!0,path:"/view-log",children:Object(i.jsx)(K,{players:e,logs:r})}),Object(i.jsx)(h.a,{from:"*",to:"/input-win"})]})})};function U(){var n=Object(j.a)(["\n  border: 0;\n  background: white;\n  position:absolute;\n  height:20px;\n  top:40px;\n  left:50%;\n  transform:translateX(-50%);\n  padding:20px;\n  line-height:0;\n  @media (max-width: 768px) {\n    top:40px;\n  }\n  \n"]);return U=function(){return n},n}function _(){var n=Object(j.a)(["\n  display: ","\n  z-index:100;\n  width: 500px;\n  position: absolute;\n  background:white;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%);\n  text-align:center;\n  @media (max-width: 768px) {\n    width:calc(100% - 20px);\n    left:10px;\n    transform:translate(0,-50%);\n  }\n"]);return _=function(){return n},n}var T=b.a.div(_(),(function(n){return"true"===n.display?"block;":"none;"})),V=b.a.button(U());var $=function(){var n=Object(r.useState)([]),e=Object(d.a)(n,2),t=e[0],o=e[1],c=Object(r.useRef)([]),a=(new Date).getFullYear(),s=(new Date).getMonth();console.log("tiramid Counter v1.3");var j=function(){var n=Object(p.a)(u.a.mark((function n(e){var i,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r in i=!0,t)t[r].name===e.name&&(i=!1);if(!i){n.next=7;break}return n.next=5,O.collection("playerList".concat(a).concat(s)).add(e);case 5:n.next=8;break;case 7:alert("\uc911\ubcf5\ub41c \uc774\ub984\uc774 \uc788\uc2b5\ub2c8\ub2e4.");case 8:return n.abrupt("return",i);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();Object(r.useEffect)((function(){O.collection("playerList".concat(a).concat(s)).onSnapshot((function(n){var e=n.docs.map((function(n){return Object(l.a)({id:n.id},n.data())}));0===e.length&&j({name:"\ud2f0\ub77c\ubbf8\ub4dc",win:0,lose:0,point:0});var t=e.filter((function(n){return"log"!==n.name||(c.current=n,!1)}));t.length===e.length&&j({name:"log",gamelog:[]}),t.sort((function(n,e){return n.name<e.name?-1:1})),o(t)}))}),[]);var b=Object(r.useMemo)((function(){return Math.floor(12*Math.random())}),[]),x=Object(r.useState)(!0),h=Object(d.a)(x,2),m=h[0],f=h[1];return Object(i.jsxs)("div",{style:{width:"100%",height:"100vh",backgroundSize:"cover",position:"relative",backgroundPosition:"center"},className:"img".concat(b),children:[Object(i.jsx)(T,{display:String(m),children:Object(i.jsx)(Q,{players:t,addPlayer:j,logs:c.current})}),Object(i.jsx)(V,{onClick:function(){f((function(n){return!n}))},children:m?"\ubc30\uacbd \uad00\ub78c":"\uc785\ub825 \ub3cc\uc544\uac00\uae30"})]})};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)($,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.11e42f88.chunk.js.map