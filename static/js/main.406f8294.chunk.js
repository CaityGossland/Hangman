(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=n(4),i=n(2),u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header"},"HANGMAN"),r.a.createElement("p",{className:"description"},"Find the Hidden Word - Enter a Letter"))},s=function(e){var t=e.wrongLetters.length;return r.a.createElement("svg",{height:"250",width:"200",className:"figure-container"},r.a.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),r.a.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),r.a.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),r.a.createElement("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),t>0&&r.a.createElement("circle",{cx:"140",cy:"70",r:"20"}),t>1&&r.a.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150"}),t>2&&r.a.createElement("line",{x1:"140",y1:"120",x2:"120",y2:"100"}),t>3&&r.a.createElement("line",{x1:"140",y1:"120",x2:"160",y2:"100"}),t>4&&r.a.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180"}),t>5&&r.a.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180"}))},m=function(e){var t=e.wrongLetters;return r.a.createElement("div",{className:"wrong-letters-container"},r.a.createElement("div",null,t.length>0&&r.a.createElement("p",null,"Wrong"),t.map(function(e,t){return r.a.createElement("span",{key:t},e)}).reduce(function(e,t){return null===e?[t]:[e,", ",t]},null)))},d=function(e){var t=e.selectedWord,n=e.correctLetters;return r.a.createElement("div",{className:"word"},t.split("").map(function(e,t){return r.a.createElement("span",{className:"letter",key:t},n.includes(e)?e:"")}))};function E(e){e(!0),setTimeout(function(){e(!1)},2e3)}var f=function(e){var t=e.correctLetters,n=e.wrongLetters,c=e.selectedWord,l=e.setPlayable,o=e.playAgain,i="",u="",s=!0,m=function(e,t,n){var a="win";return n.split("").forEach(function(t){e.includes(t)||(a="")}),6===t.length&&(a="lose"),a}(t,n,c);return"win"===m?(i="Congratulations! You won! :)",s=!1):"lose"===m&&(i="Unfortunately you lost :(",u="...the word was: ".concat(c),s=!1),Object(a.useEffect)(function(){return l(s)}),r.a.createElement("div",{className:"popup-container",style:""!==i?{display:"flex"}:{}},r.a.createElement("div",{className:"popup"},r.a.createElement("h2",null,i),r.a.createElement("h3",null,u),r.a.createElement("button",{onClick:o},"Play Again")))},y=function(e){var t=e.showNotification;return r.a.createElement("div",{className:"notification-container ".concat(t?"show":"")},r.a.createElement("p",null,"You have already entered this letter"))},w=(n(12),["application","programming","interface","wizard"]),p=w[Math.floor(Math.random()*w.length)];var g=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),g=Object(i.a)(l,2),h=g[0],v=g[1],x=Object(a.useState)([]),b=Object(i.a)(x,2),L=b[0],N=b[1],j=Object(a.useState)(!1),O=Object(i.a)(j,2),k=O[0],M=O[1];return Object(a.useEffect)(function(){var e=function(e){var t=e.key,a=e.keyCode;if(n&&a>=65&&a<=90){var r=t.toLowerCase();p.includes(r)?h.includes(r)?E(M):v(function(e){return[].concat(Object(o.a)(e),[r])}):L.includes(r)?E(M):N(function(e){return[].concat(Object(o.a)(e),[r])})}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[h,L,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{className:"game-container"},r.a.createElement(s,{wrongLetters:L}),r.a.createElement(m,{wrongLetters:L}),r.a.createElement(d,{selectedWord:p,correctLetters:h})),r.a.createElement(f,{correctLetters:h,wrongLetters:L,selectedWord:p,setPlayable:c,playAgain:function(){c(!0),v([]),N([]),p=w[Math.floor(Math.random()*w.length)]}}),r.a.createElement(y,{showNotification:k}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.406f8294.chunk.js.map