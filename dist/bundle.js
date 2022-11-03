(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>g});var i=t(81),a=t.n(i),o=t(645),r=t.n(o),s=t(667),c=t.n(s),l=new URL(t(536),t.b),u=new URL(t(19),t.b),d=new URL(t(378),t.b),p=r()(a()),m=c()(l),f=c()(u),v=c()(d);p.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  min-height: 100%;\n  background-image: url("+m+");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  font-size: 10px;\n  z-index: -2;\n}\n\n#bgLogo {\n  min-height: 100%;\n  background-image: url("+f+');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: fixed;\n}\n\n#content {\n  font-family: "Raleway", sans-serif;\n  color: #f2f5ff;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-attachment: fixed;\n  z-index: 100;\n}\n\nheader {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 3.5rem;\n}\n\nheader h1 {\n  font-size: 5.4rem;\n  letter-spacing: 0.3rem;\n  color: #f2f5ff;\n  font-family: Helvetica, sans-serif;\n}\n\nheader h1 span {\n  color: #af3a3a;\n}\n\nnav {\n  margin: 3rem 0;\n}\n\nnav ul {\n  display: flex;\n  list-style: none;\n}\n\nnav ul li button {\n  padding: 1rem 3.5rem;\n  font-size: 2.4rem;\n  width: 230px;\n  border: none;\n  border-radius: 0;\n  background-color: #838e83;\n  color: #f2f5ff;\n  cursor: pointer;\n\n  transition: background-color 400ms ease-in, text-decoration 500ms ease-in;\n}\n\nnav ul li button:hover {\n  background-color: #af3a3a;\n  text-decoration: underline;\n}\n\nli:nth-child(1) button {\n  border-radius: 6px 0 0 6px;\n}\n\nli:nth-child(3) button {\n  border-radius: 0 6px 6px 0;\n}\n\n.sectionText {\n  padding: 0.75rem;\n  background-color: rgba(0, 0, 0, 0.185);\n  border-radius: 6px;\n  margin-bottom: 5rem;\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n\n#aboutUsSection {\n  line-height: 2;\n  font-size: 1.6rem;\n  letter-spacing: 1.5px;\n}\n\n#menuSection {\n  display: none;\n}\n\n#reservationSection {\n  display: none;\n}\n\n.contentDisplayWindow {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  width: 70%;\n  margin: 0 auto;\n}\n\n.member {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0);\n  margin: 2rem 0;\n  padding: 2rem;\n}\n\n.photo {\n  height: 100px;\n  min-width: 100px;\n  background-color: #f2f5ff;\n  background-image: url('+v+");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100px 100px;\n  margin: 0 2.5rem;\n  border-radius: 50%;\n}\n\n.bio {\n  background-color: rgba(0, 0, 0, 0);\n  margin-bottom: 2rem;\n}\n\n.name {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n  text-decoration: underline;\n}\n\n#left .name {\n  justify-content: flex-start;\n}\n\n#contactInfo {\n  margin-bottom: 2.5rem;\n}\n",""]);const g=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);i&&r[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var o={},r=[],s=0;s<e.length;s++){var c=e[s],l=i.base?c[0]+i.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,i);i.byIndex=s,n.splice(s,0,{identifier:d,updater:f,references:1})}r.push(d)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var s=t(o[r]);n[s].references--}for(var c=i(e,a),l=0;l<o.length;l++){var u=t(o[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},378:(e,n,t)=>{e.exports=t.p+"1dc6b02003e21e00f4d6.png"},19:(e,n,t)=>{e.exports=t.p+"fb30c952432186608c64.svg"},536:(e,n,t)=>{e.exports=t.p+"8ae42fad9132b5ea187e.svg"}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var o=n[i]={id:i,exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),a=t.n(i),o=t(569),r=t.n(o),s=t(565),c=t.n(s),l=t(216),u=t.n(l),d=t(589),p=t.n(d),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=(e,n,...t)=>{const i=document.createElement(e);for(let e in n)i.setAttribute(e,n[e]);return t.forEach((e=>{"string"==typeof e?i.appendChild(document.createTextNode(e)):i.appendChild(e)})),i},g=document.getElementById("content"),h=v("div",{id:"bgLogo"}),b=v("header",{},v("h1",{},"LEFT",v("span",{},"OVERS")),v("nav",{},v("ul",{},v("li",{class:"navChoice"},v("button",{class:"navBtn"},"Home")),v("li",{class:"navChoice"},v("button",{class:"navBtn"},"Menu")),v("li",{class:"navChoice"},v("button",{class:"navBtn"},"Reservations"))))),x=v("div",{id:"aboutUsSection",class:"contentDisplayWindow"},v("p",{class:"sectionText"},"Leftsovers is a one of a kind restaurant, creating a unique dining experience with local Kanto ingredients. We pride ourselves on being the only establishment in the region that specializes in the preparation and creation of pokemon based cuisine. From the most common of catches to the rarest of shinies, our artiste chefs have perfected the craft of preparing pokemon."),v("div",{class:"sectionText",id:"team"},v("div",{class:"member"},v("div",{class:"bio"},v("h3",{class:"name"},"Dummy Review #1"),v("p",{class:"bioText"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nisl in erat interdum posuere. Morbi risus risus, viverra id sagittis vel, faucibus at justo. Curabitur ante purus, volutpat in ligula a, fringilla ultricies diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales risus, sit amet facilisis ipsum. Vivamus sapien felis, scelerisque interdum dignissim eget, ornare sit.")),v("div",{class:"photo"})),v("div",{class:"member",id:"left"},v("div",{class:"photo"}),v("div",{class:"bio"},v("h3",{class:"name"},"Dummy Review #2"),v("p",{class:"bioText"},"     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales risus, sit amet facilisis ipsum. Vivamus sapien felis, scelerisque interdum dignissim eget, ornare sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nisl in erat interdum posuere. Morbi risus risus, viverra id sagittis vel, faucibus at justo. Curabitur ante purus, volutpat in ligula a, fringilla ultricies diam."))),v("div",{class:"member"},v("div",{class:"bio"},v("h3",{class:"name"},"Dummy Review #3"),v("p",{class:"bioText"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra eros non erat bibendum facilisis. In hac habitasse platea dictumst. Proin porttitor tincidunt mi, a elementum arcu bibendum id. Proin mauris urna, aliquet vel egestas vel, viverra vel quam. Pellentesque in sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nisl in erat interdum posuere. Morbi risus risus, viverra id sagittis vel, faucibus at justo. Curabitur ante purus, volutpat in ligula a, fringilla ultricies diam.")),v("div",{class:"photo"}))),v("div",{class:"sectionText",id:"contactInfo"},v("p",{id:"hours"},"Open Monday-Friday 4pm - 11pm"),v("p",{id:"phoneNumber"},"Phone: 555-555-5555"),v("p",{id:"email"},"Email: LEFTOVERS@leftovers.net"),v("p",{id:"address"},"Located at corner of Fake St and Make Believe Rd"))),y=v("div",{id:"menuSection",class:"contentDisplayWindow"},v("h2",{class:"sectionTitle"},"Menu"),v("ul",{class:"sectionText",class:"menuList"},v("li",{class:"sectionText",class:"menuListItem"},"Menu Item #1"),v("li",{class:"sectionText",class:"menuListItem"},"Menu Item #2"),v("li",{class:"sectionText",class:"menuListItem"},"Menu Item #3"),v("li",{class:"sectionText",class:"menuListItem"},"Menu Item #4"),v("li",{class:"sectionText",class:"menuListItem"},"Menu Item #5"))),w=v("div",{id:"reservationSection",class:"contentDisplayWindow"},v("h2",{class:"sectionTitle"},"Reservations"),v("form",{class:"resForm",method:"",action:""},v("input",{type:"text",name:"FullName",placeholder:"Full Name"}),v("select",{name:"guests",id:"guest-selection"},v("option",{value:"one-guest"},"1   Guest"),v("option",{value:"two-guest"},"Two Guest"),v("option",{value:"two-guest"},"2 Guests"),v("option",{value:"three-guest"},"3 Guests"),v("option",{value:"four-guest"},"4 Guests"),v("option",{value:"five-plus-guest"},"5+ Guests")),v("select",{name:"time",id:"time-selection"},v("option",{value:"400"},"4:00 pm"),v("option",{value:"430"},"4:30 pm"),v("option",{value:"500"},"5:00 pm"),v("option",{value:"530"},"5:30 pm"),v("option",{value:"600"},"6:00 pm"),v("option",{value:"630"},"6:30 pm"),v("option",{value:"700"},"7:00 pm"),v("option",{value:"730"},"7:30 pm"),v("option",{value:"800"},"8:00 pm"),v("option",{value:"830"},"8:30 pm"),v("option",{value:"900"},"9:00 pm"),v("option",{value:"930"},"9:30 pm"),v("option",{value:"1000"},"10:00 pm")),v("div",{class:"date-picker"},v("div",{class:"selected-date"}),"30 / 07 / 2019",v("div",{class:"dates"},v("div",{class:"month"},v("div",{class:"arrows prev-month"},"<"),v("div",{class:"month"}),v("div",{class:"arrows next-month"},">")),v("div",{class:"days"})))));g.appendChild(h),h.appendChild(b),h.appendChild(x),h.appendChild(y),h.appendChild(w)})()})();