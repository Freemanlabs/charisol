module.exports=__NEXT_REGISTER_PAGE("/admin-login",function(){var e=webpackJsonp([15],{180:function(e,t,n){e.exports=n(199)},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r="function"==typeof fetch?fetch.bind():function(e,t){t=t||{};return new Promise(function(n,r){var o=new XMLHttpRequest;o.open(t.method||"get",e);for(var a in t.headers)o.setRequestHeader(a,t.headers[a]);o.withCredentials="include"==t.credentials;o.onload=function(){n(i())};o.onerror=r;o.send(t.body);function i(){var e=[],t=[],n={},r;o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,a,i){e.push(a=a.toLowerCase());t.push([a,i]);r=n[a];n[a]=r?r+","+i:i});return{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return e},entries:function(){return t},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}})};t["default"]=r},331:function(e,t,n){e.exports=window.fetch||(window.fetch=n(277).default||n(277))},791:function(e,t,n){e.exports=n(792)},792:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(331);var o=n.n(r);var a=n(1);var i=n.n(a);var s=n(180);var u=n.n(s);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};var r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})));r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n;return e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function h(e,t,n){t&&d(e.prototype,t);n&&d(e,n);return e}function m(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g={saving:false,save:false,user:{firstName:"",lastName:"",email:"",image_url:""},error:{openError:false,errMessage:""}};var v=function(e){b(t,e);function t(e){var n;p(this,t);n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state=l({},g,{loignCode:e.url.query.code});return n}h(t,[{key:"componentDidMount",value:function e(){var t=this;if(void 0!==this.state.loignCode){this.setState({saving:true});o()("https://slack.com/api/oauth.access?client_id=128855814131.364624341426&client_secret=fcffdec17a2d48361b4467356339bc71&code=".concat(this.state.loignCode)).then(function(e){return e.json()}).then(function(e){e.ok?t.saveUserData(e):t.setState({error:{openError:true,errMessage:e}})})}else console.log(this.state.loignCode)}},{key:"saveUserData",value:function e(t){var n=this;var r=t.user;this.setState({user:{firstName:r.name.split(" ")[0],lastName:r.name.split(" ")[1],image_url:r.image_192,email:r.email}});o()("/api/update-create/".concat(r.email),{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(this.state.user)}).then(function(e){return e.json()}).then(function(e){console.log(e);n.setState({saving:false,save:true});localStorage.setItem("access_token",t.access_token);u.a.push("/admin-profile?_id=".concat(e.user._id),"/dashboard/profile/".concat(e.user._id))})}},{key:"render",value:function e(){var t=this.state;return i.a.createElement("div",null,i.a.createElement("a",{style:{left:"45%",position:"absolute",top:"45%"},href:"https://slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.team,identity.avatar&client_id=128855814131.364624341426"},i.a.createElement("img",{alt:"Sign in with Slack",height:"40",width:"172",src:"https://platform.slack-edge.com/img/sign_in_with_slack.png",srcset:"https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"})))}}]);return t}(a["Component"]);t["default"]=v}},[791]);return{page:e.default}});