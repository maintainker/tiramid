(this.webpackJsonppointcounter=this.webpackJsonppointcounter||[]).push([[0],{52:function(n,t,e){"use strict";e.r(t);var i=e(1),r=e(2),o=e.n(r),c=e(34),a=e.n(c),s=e(39),l=e(17),u=e.n(l),p=e(26),d=e(19),j=e(6),b=e(7),x=e(18),h=e(4),f=e(25),m=e(35),O=e(24);e(46);O.a.initializeApp({apiKey:"AIzaSyDRRfcqQcYS_XfZlNAdDNuZnAfdrOuBAOo",authDomain:"tiramid-fe62e.firebaseapp.com",databaseURL:"https://tiramid-fe62e.firebaseio.com",projectId:"tiramid-fe62e",storageBucket:"tiramid-fe62e.appspot.com",messagingSenderId:"532490031808",appId:"1:532490031808:web:addf4cb7ffb44e431b9325",measurementId:"G-5XDZWR4BYD"});var g=O.a.firestore();console.log(g),console.log(O.a);O.a;var w=g;function v(){var n=Object(j.a)(["\nlist-style:none;\ntext-align:center;\npadding :10px 0;\nli{\n  display:inline-block;\n  width:calc((100% - 60px)/3);\n  height:40px;\n  margin-left:15px;\n  a{\n    display:block;\n    width:100%;\n    height:100%;\n    box-sizing:border-box;\n    line-height:40px;\n    color:black;\n    text-decoration:none;\n  }\n  a:hover{\n    border-bottom: 3px solid green;\n  } \n  a.on{\n    border-bottom: 3px solid green;\n  }\n}\nli:first-child{\n  margin:0;\n}\n"]);return v=function(){return n},n}var y=b.a.ul(v()),k=function(n){var t=n.state;return Object(i.jsxs)(y,{children:[Object(i.jsx)("li",{children:Object(i.jsx)(x.b,{id:"win-ratio",to:"/win-ratio",className:"winRatio"===t?"winRatio on":"winRatio",children:"\uc2b9\ub960 \ud655\uc778"})}),Object(i.jsx)("li",{children:Object(i.jsx)(x.b,{id:"check-point",to:"/check-point",className:"checkPoint"===t?"checkPoint on":"checkPoint",children:"\ud3ec\uc778\ud2b8 \ud655\uc778"})}),Object(i.jsx)("li",{children:Object(i.jsx)(x.b,{id:"input-win",to:"/input-win",className:"putWin"===t?"putWin on":"putWin",children:"\uc2b9\ud328 \uc785\ub825"})})]})};function P(){var n=Object(j.a)(["\n  margin-right: ",";\n  display: inline-block;\n  width: 200px;\n  @media (max-width: 768px) {\n    width:calc((80% - 20px)/2);\n  }\n"]);return P=function(){return n},n}function N(){var n=Object(j.a)(["\n  text-align: center;\n  list-style: none;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return N=function(){return n},n}function S(){var n=Object(j.a)(["\n  width: ",";\n  height:24px;\n  text-align:right;\n  box-sizing:border-box;\n  padding:2px;\n  border:0;\n  border-bottom:1px solid #aaa;\n  @media (max-width: 768px) {\n    width:",";\n  }\n"]);return S=function(){return n},n}function z(){var n=Object(j.a)(["\n  width: 420px;\n  height: 50px;\n  margin-top: 20px;\n  @media (max-width: 768px) {\n    width:80%;\n  }\n\n"]);return z=function(){return n},n}function C(){var n=Object(j.a)(["\n  margin-right:",";\n  width:200px; \n  height:50px;\n  @media (max-width: 768px) {\n    width:calc((80% - 20px)/2);\n  }\n"]);return C=function(){return n},n}function D(){var n=Object(j.a)(["\n  display:inline-block;\n  margin-right:","\n  select{\n    margin-right:15px;\n    height:23px;\n  }\n  @media (max-width: 768px) {\n    width:calc((80% - 20px)/2);\n    select{\n      width:80px;\n    }\n  }\n  @media (max-width: 368px) {\n    select{\n      width:50px;\n      font-size:10px;\n    }\n  }\n"]);return D=function(){return n},n}function R(){var n=Object(j.a)(["\n  text-align:center;\n  margin-top:20px;\n"]);return R=function(){return n},n}var M=b.a.div(R()),A=b.a.div(D(),(function(n){return"winner"===n.name?"20px;":"0;"})),I=b.a.button(C(),(function(n){return"add"===n.state?"20px":"0"})),L=b.a.button(z()),F=b.a.input(S(),(function(n){return"player"===n.name?"200px":"100px"}),(function(n){return"player"===n.name?"33%":"20%"})),W=b.a.ul(N()),B=b.a.li(P(),(function(n){return"winner"===n.name?"20px":"0"})),Y=function(n){var t=n.players,e=n.addPlayer,o=(new Date).getFullYear(),c=(new Date).getMonth();console.log(o,c);var a=Object(r.useState)(""),s=Object(d.a)(a,2),l=s[0],j=s[1],b=Object(r.useState)([{winner:"0",winPoint:"0",loser:"0",losePoint:"0"},{winner:"0",winPoint:"0",loser:"0",losePoint:"0"}]),x=Object(d.a)(b,2),h=x[0],O=x[1],g=function(){var n=Object(p.a)(u.a.mark((function n(e){var i,r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=Object(m.a)(e),n.prev=1,i.s();case 3:if((r=i.n()).done){n.next=11;break}return a=r.value,n.next=7,w.doc("playerList".concat(o).concat(c,"/").concat(t[a.winner].id)).update({win:t[a.winner].win+1,point:t[a.winner].point+Number(a.winPoint)});case 7:return n.next=9,w.doc("playerList".concat(o).concat(c,"/").concat(t[a.loser].id)).update({lose:t[a.loser].lose+1,point:t[a.loser].point-Number(a.losePoint)});case 9:n.next=3;break;case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),i.e(n.t0);case 16:return n.prev=16,i.f(),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[1,13,16,19]])})));return function(t){return n.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{state:"putWin"}),Object(i.jsxs)(W,{children:[Object(i.jsx)(B,{name:"winner",children:"\uc2b9\ub9ac"}),Object(i.jsx)(B,{name:"loser",children:"\ud328\ubc30"})]}),h.map((function(n,e){return Object(i.jsxs)(M,{children:[Object(i.jsxs)(A,{name:"winner",className:"winner",children:[Object(i.jsx)("select",{onChange:function(n){h[e].winner=n.target.value},children:t.map((function(n,t){return Object(i.jsx)("option",{value:t,children:n.name},n.name)}))}),Object(i.jsxs)("select",{onChange:function(n){var t=Object(f.a)(h);t[e].winPoint=String(Number(n.target.value)),O(t)},children:[Object(i.jsx)("option",{value:"0",children:"0"}),Object(i.jsx)("option",{value:"1",children:"1"}),Object(i.jsx)("option",{value:"2",children:"2"})]})]}),Object(i.jsxs)(A,{name:"loser",className:"loser",children:[Object(i.jsx)("select",{onChange:function(n){h[e].loser=n.target.value},children:t.map((function(n,t){return Object(i.jsx)("option",{value:t,children:n.name},n.name)}))}),Object(i.jsxs)("select",{onChange:function(n){var t=Object(f.a)(h);t[e].losePoint=String(Number(n.target.value)),O(t)},children:[Object(i.jsx)("option",{value:"0",children:"0"}),Object(i.jsx)("option",{value:"1",children:"1"}),Object(i.jsx)("option",{value:"2",children:"2"})]})]})]},e)})),Object(i.jsxs)("div",{style:{marginTop:"20px",textAlign:"center"},children:[Object(i.jsx)(I,{state:"add",onClick:function(){var n=[].concat(Object(f.a)(h),[{winner:"",winPoint:"0",loser:"",losePoint:"0"}]);O(n)},children:"\uacb0\uacfc \ucd94\uac00"}),Object(i.jsx)(I,{onClick:function(){var n=Object(f.a)(h);n.pop(),O(n)},children:"\uacb0\uacfc \uc81c\uac70"})]}),Object(i.jsx)(L,{onClick:function(){var n=0;for(var t in h)n+=Number(h[t].winPoint)-Number(h[t].losePoint);var e=prompt("\ud2f0\ub77c\ubbf8\ub4dc \uc2b9\ud328 \uc785\ub825\uc744 \uc704\ud55c \ube44\ubc00\uc554\ud638");0===n&&"\ud0dc\uc9c4"===e?g(h).then((function(){alert("\uc785\ub825\uc644\ub8cc!"),O([{winner:"0",winPoint:"0",loser:"0",losePoint:"0"},{winner:"0",winPoint:"0",loser:"0",losePoint:"0"}])})):0!==n?alert("\ud569\uacc4\uac00 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"):alert("\uc554\ud638\ub97c \ub2f9\uc7a5 \uc54c\uc544\uc624\uc138\uc694!")},children:"\uacb0\uacfc \uc785\ub825\ud558\uae30"}),Object(i.jsxs)("div",{style:{margin:"20px 0"},children:[Object(i.jsx)(F,{name:"player",value:l,onChange:function(n){return j(n.target.value)}}),Object(i.jsx)("button",{style:{marginLeft:"20px",padding:"3px",height:"24px"},onClick:function(){window.confirm("\uc774\ub984\uc774 ".concat(l,"\uc774(\uac00) \ub9de\uc2b5\ub2c8\uae4c? \ud55c\ubc88 \ucd94\uac00\ud558\uba74 \uc81c\uac70\ud560\uc218 \uc5c6\uc2b5\ub2c8\ub2e4."))&&(e({name:l,win:0,lose:0,point:0}).then(alert("\ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),j(""))},children:"\ud50c\ub808\uc774\uc5b4 \ucd94\uac00"})]})]})},X=function(n){var t=n.players.filter((function(n){var t=!0;return("\ud2f0\ub77c\ubbf8\ub4dc"===n.name||n.win+n.lose<5)&&(t=!1),t}));return t.sort((function(n,t){var e=n.win/(n.win+n.lose);return t.win/(t.win+t.lose)-e})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{state:"winRatio"}),Object(i.jsxs)("div",{style:{padding:"30px 0",position:"relative"},children:[t.map((function(n,t){return Object(i.jsx)("div",{style:{padding:"8px"},children:Object(i.jsxs)("span",{children:[t+1,"\uc704 ",n.name," \uc2b9\ub960 : ",Math.round(n.win/(n.win+n.lose)*1e4)/100," % , win : ",n.win,", lose : ",n.lose]})},t)})),Object(i.jsx)("span",{style:{position:"absolute",bottom:"3px",right:"0",fontSize:"5px"},children:"* \ud569\uacc4 5\ud310 \uc774\uc0c1\ub9cc \uc9d1\uacc4\ub429\ub2c8\ub2e4. player\uc5d0 \uc774\ub984\uc774 \uc788\uc9c0\ub9cc \uc5ec\uae30\uc5d0 \uc774\ub984\uc774 \uc5c6\ub2e4\uba74 \uacbd\uae30\uc218\uac00 5\ud310\uc774 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]})]})};function Z(){var n=Object(j.a)(["\n  list-style:none;\n  margin :0 40px;\n  padding:10px 40px;\n  background:",";\n  margin-bottom:",";\n  margin-top:",";\n  li{\n    text-align:left;\n    font-size :13px;\n    margin:4px;\n  }\n"]);return Z=function(){return n},n}var E=b.a.ul(Z(),(function(n){return n.color}),(function(n){return"last"===n.position?"20px":"0"}),(function(n){return"first"===n.position?"20px":"0"})),J=function(n){var t=n.players,e=t.filter((function(n){return n.point>10})).sort((function(n,t){return t.point-n.point})),r=t.filter((function(n){return 11>n.point&&n.point>7})).sort((function(n,t){return t.point-n.point})),o=t.filter((function(n){return 8>n.point&&n.point>3})).sort((function(n,t){return t.point-n.point})),c=t.filter((function(n){return 4>n.point&&n.point>-1})).sort((function(n,t){return t.point-n.point})),a=t.filter((function(n){return 0>n.point&&n.point>-11})).sort((function(n,t){return t.point-n.point})),s=t.filter((function(n){return-10>n.point&&n.point})).sort((function(n,t){return t.point-n.point}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{state:"checkPoint"}),Object(i.jsxs)(E,{color:"rgba(242,184,7,0.3)",position:"first",children:[Object(i.jsx)("li",{children:" - \ucc9c\uacc4 ( 11 ~ )"}),e.map((function(n){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},n.name)}))]}),Object(i.jsxs)(E,{color:"rgba(9,115,104,0.3)",children:[Object(i.jsx)("li",{children:" - \uc655\uc871 ( 8 ~ 10 )"}),r.map((function(n){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},n.name)}))]}),Object(i.jsxs)(E,{color:"rgba(242,207,184,0.3)",children:[Object(i.jsx)("li",{children:" - \uadc0\uc871 ( 4 ~ 7 )"}),o.map((function(n){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},n.name)}))]}),Object(i.jsxs)(E,{color:"rgba(217,79,48,0.3)",children:[Object(i.jsx)("li",{children:" - \ud3c9\ubbfc ( 0 ~ 3 )"}),c.map((function(n){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},n.name)}))]}),Object(i.jsxs)(E,{color:"rgba(242,153,169,0.3)",children:[Object(i.jsx)("li",{children:" - \ub178\uc608 ( -1 ~ -10 )"}),a.map((function(n){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},n.name)}))]}),Object(i.jsxs)(E,{color:"rgba(5,20,125,0.3)",position:"last",children:[Object(i.jsx)("li",{children:" - \uc2ec\ud574 ( -11 ~ )"}),s.map((function(n){return Object(i.jsxs)("li",{children:[n.name," ",n.point," point"]},n.name)}))]})]})},q=function(n){var t=n.players,e=n.addPlayer;return Object(i.jsx)(x.a,{basename:"/tiramid/pointcounter/build",children:Object(i.jsxs)(h.d,{children:[Object(i.jsx)(h.b,{exact:!0,path:"/input-win",children:Object(i.jsx)(Y,{players:t,addPlayer:e})}),Object(i.jsx)(h.b,{exact:!0,path:"/win-ratio",children:Object(i.jsx)(X,{players:t})}),Object(i.jsx)(h.b,{exact:!0,path:"/check-point",children:Object(i.jsx)(J,{players:t})}),Object(i.jsx)(h.a,{from:"*",to:"/input-win"})]})})};function G(){var n=Object(j.a)(["\n  border: 0;\n  background: white;\n  position:absolute;\n  height:20px;\n  top:40px;\n  left:50%;\n  transform:translateX(-50%);\n  padding:20px;\n  line-height:0;\n  @media (max-width: 768px) {\n    top:40px;\n  }\n  \n"]);return G=function(){return n},n}function K(){var n=Object(j.a)(["\n  display: ","\n  z-index:100;\n  width: 500px;\n  position: absolute;\n  background:white;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%);\n  text-align:center;\n  @media (max-width: 768px) {\n    width:calc(100% - 20px);\n    left:10px;\n    transform:translate(0,-50%);\n  }\n"]);return K=function(){return n},n}var Q=b.a.div(K(),(function(n){return"true"===n.display?"block;":"none;"})),T=b.a.button(G());var U=function(){var n=Object(r.useState)([]),t=Object(d.a)(n,2),e=t[0],o=t[1],c=(new Date).getFullYear(),a=(new Date).getMonth(),l=function(){var n=Object(p.a)(u.a.mark((function n(t){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.collection("playerList".concat(c).concat(a)).add(t);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();Object(r.useEffect)((function(){w.collection("playerList".concat(c).concat(a)).onSnapshot((function(n){var t=n.docs.map((function(n){return Object(s.a)({id:n.id},n.data())}));0===t.length&&l({name:"\ud2f0\ub77c\ubbf8\ub4dc",win:0,lose:0,point:0}),o(t)}))}),[]);var j=Object(r.useMemo)((function(){return Math.floor(10*Math.random())}),[]),b=Object(r.useState)(!0),x=Object(d.a)(b,2),h=x[0],f=x[1];return Object(i.jsxs)("div",{style:{width:"100%",height:"100vh",backgroundSize:"cover",position:"relative",backgroundPosition:"center"},className:"img".concat(j),children:[Object(i.jsx)(Q,{display:String(h),children:Object(i.jsx)(q,{players:e,addPlayer:l})}),Object(i.jsx)(T,{onClick:function(){f((function(n){return!n}))},children:h?"\ubc30\uacbd \uad00\ub78c":"\uc785\ub825 \ub3cc\uc544\uac00\uae30"})]})};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(U,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.1f7b6a97.chunk.js.map