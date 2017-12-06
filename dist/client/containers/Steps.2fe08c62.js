webpackJsonp([2],{308:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(8)),a=i(n(3)),s=i(n(4)),o=i(n(6)),c=i(n(7)),l=n(1),u=i(l),f=n(350),p=n(296),d=function(e){function t(e){(0,a.default)(this,t);var n=(0,o.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.state={show:1},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"common-main steps-main"},u.default.createElement("header",{className:"main-page-header"},u.default.createElement("h1",null,"Steps 步骤条")),u.default.createElement("div",{className:"main-page-body"},u.default.createElement(f.Steps,{current:1},u.default.createElement(f.Step,{title:"Finished",description:"This is a description."}),u.default.createElement(f.Step,{title:"In Progress",description:"This is a description."}),u.default.createElement(f.Step,{title:"Waiting",description:"This is a description."})),u.default.createElement(f.Steps,{size:"small",current:1},u.default.createElement(f.Step,{title:"Finished"}),u.default.createElement(f.Step,{title:"In Progress"}),u.default.createElement(f.Step,{title:"Waiting"})),u.default.createElement(f.Steps,null,u.default.createElement(f.Step,{status:"finish",title:"Login",icon:u.default.createElement(p.Icon,{type:"user"})}),u.default.createElement(f.Step,{status:"finish",title:"Verification",icon:u.default.createElement(p.Icon,{type:"hdd"})}),u.default.createElement(f.Step,{status:"process",title:"Pay",icon:u.default.createElement(p.Icon,{type:"credit-card"})}),u.default.createElement(f.Step,{status:"wait",title:"Done",icon:u.default.createElement(p.Icon,{type:"ok-circle"})})),u.default.createElement(f.Steps,{current:1,status:"error"},u.default.createElement(f.Step,{title:"Finished",description:"This is a description"}),u.default.createElement(f.Step,{title:"In Process",description:"This is a description"}),u.default.createElement(f.Step,{title:"Waiting",description:"This is a description"}))))}}]),t}(l.Component);t.default=d},350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Step=t.Steps=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(351)),r=i.default.Step;t.Steps=i.default,t.Step=r,t.default=i.default},351:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,a,s=i(n(8)),o=i(n(3)),c=i(n(4)),l=i(n(6)),u=i(n(7)),f=n(1),p=i(f),d=i(n(9)),m=i(n(352));n(357);var h=(a=r=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return p.default.createElement(m.default,this.props)}}]),t}(f.PureComponent),r.Step=m.default.Step,r.propTypes={className:d.default.string,prefixCls:d.default.string,iconPrefix:d.default.string,current:d.default.number,status:d.default.oneOf(["wait","process","finish","error"]),size:d.default.oneOf(["default","small"]),direction:d.default.oneOf(["horizontal","vertical"]),progressDot:d.default.oneOfType([d.default.bool,d.default.func])},r.defaultProps={prefixCls:"hlrui-steps",iconPrefix:"",current:0},a);t.default=h},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(353),r=n(356);n.d(t,"Step",function(){return r.a}),i.a.Step=r.a,t.default=i.a},353:function(e,t,n){"use strict";var i=n(50),r=n.n(i),a=n(51),s=n.n(a),o=n(3),c=n.n(o),l=n(6),u=n.n(l),f=n(7),p=n.n(f),d=n(1),m=n.n(d),h=n(9),y=n.n(h),v=n(53),g=(n.n(v),n(10)),S=n.n(g),b=n(354),E=n.n(b),x=n(355),O=function(e){function t(n){c()(this,t);var i=u()(this,e.call(this,n));return i.calcStepOffsetWidth=function(){if(!Object(x.a)()){var e=Object(v.findDOMNode)(i);e.children.length>0&&(i.calcTimeout&&clearTimeout(i.calcTimeout),i.calcTimeout=setTimeout(function(){var t=(e.lastChild.offsetWidth||0)+1;i.state.lastStepOffsetWidth===t||Math.abs(i.state.lastStepOffsetWidth-t)<=3||i.setState({lastStepOffsetWidth:t})}))}},i.state={flexSupported:!0,lastStepOffsetWidth:0},i.calcStepOffsetWidth=E()(i.calcStepOffsetWidth,150),i}return p()(t,e),t.prototype.componentDidMount=function(){this.calcStepOffsetWidth(),Object(x.a)()||this.setState({flexSupported:!1})},t.prototype.componentDidUpdate=function(){this.calcStepOffsetWidth()},t.prototype.componentWillUnmount=function(){this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcStepOffsetWidth&&this.calcStepOffsetWidth.cancel&&this.calcStepOffsetWidth.cancel()},t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,i=t.style,a=void 0===i?{}:i,o=t.className,c=t.children,l=t.direction,u=t.labelPlacement,f=t.iconPrefix,p=t.status,h=t.size,y=t.current,v=t.progressDot,g=s()(t,["prefixCls","style","className","children","direction","labelPlacement","iconPrefix","status","size","current","progressDot"]),b=this.state,E=b.lastStepOffsetWidth,x=b.flexSupported,O=m.a.Children.toArray(c).filter(function(e){return!!e}),N=O.length-1,T=v?"vertical":u,P=S()(n,n+"-"+l,o,(e={},e[n+"-"+h]=h,e[n+"-label-"+T]="horizontal"===l,e[n+"-dot"]=!!v,e));return m.a.createElement("div",r()({className:P,style:a},g),d.Children.map(O,function(e,t){if(!e)return null;var i=r()({stepNumber:""+(t+1),prefixCls:n,iconPrefix:f,wrapperStyle:a,progressDot:v},e.props);return x||"vertical"===l||t===N||(i.itemWidth=100/N+"%",i.adjustMarginRight=-Math.round(E/N+1)),"error"===p&&t===y-1&&(i.className=n+"-next-error"),e.props.status||(i.status=t===y?p:t<y?"finish":"wait"),Object(d.cloneElement)(e,i)}))},t}(d.Component);O.propTypes={prefixCls:y.a.string,className:y.a.string,iconPrefix:y.a.string,direction:y.a.string,labelPlacement:y.a.string,children:y.a.any,status:y.a.string,size:y.a.string,progressDot:y.a.oneOfType([y.a.bool,y.a.func]),style:y.a.object,current:y.a.number},O.defaultProps={prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",current:0,status:"process",size:"",progressDot:!1},t.a=O},354:function(e,t,n){(function(t){function n(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function r(e){return"symbol"==typeof e||i(e)&&v.call(e)==c}function a(e){if("number"==typeof e)return e;if(r(e))return o;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var i=f.test(e);return i||p.test(e)?d(e.slice(2),i?2:8):u.test(e)?o:+e}var s="Expected a function",o=NaN,c="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,d=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,y=m||h||Function("return this")(),v=Object.prototype.toString,g=Math.max,S=Math.min,b=function(){return y.Date.now()};e.exports=function(e,t,i){function r(t){var n=d,i=m;return d=m=void 0,x=t,y=e.apply(i,n)}function o(e){return x=e,v=setTimeout(u,t),O?r(e):y}function c(e){var n=t-(e-E);return N?S(n,h-(e-x)):n}function l(e){var n=e-E;return void 0===E||n>=t||n<0||N&&e-x>=h}function u(){var e=b();if(l(e))return f(e);v=setTimeout(u,c(e))}function f(e){return v=void 0,T&&d?r(e):(d=m=void 0,y)}function p(){var e=b(),n=l(e);if(d=arguments,m=this,E=e,n){if(void 0===v)return o(E);if(N)return v=setTimeout(u,t),r(E)}return void 0===v&&(v=setTimeout(u,t)),y}var d,m,h,y,v,E,x=0,O=!1,N=!1,T=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,n(i)&&(O=!!i.leading,h=(N="maxWait"in i)?g(a(i.maxWait)||0,t):h,T="trailing"in i?!!i.trailing:T),p.cancel=function(){void 0!==v&&clearTimeout(v),x=0,d=E=m=v=void 0},p.flush=function(){return void 0===v?y:f(b())},p}}).call(t,n(54))},355:function(e,t,n){"use strict";t.a=function(){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=window.document.documentElement;return"flex"in e.style||"webkitFlex"in e.style||"Flex"in e.style||"msFlex"in e.style}return!1}},356:function(e,t,n){"use strict";function i(e){return"string"==typeof e}var r=n(50),a=n.n(r),s=n(51),o=n.n(s),c=n(3),l=n.n(c),u=n(6),f=n.n(u),p=n(7),d=n.n(p),m=n(1),h=n.n(m),y=n(9),v=n.n(y),g=n(10),S=n.n(g),b=function(e){function t(){return l()(this,t),f()(this,e.apply(this,arguments))}return d()(t,e),t.prototype.renderIconNode=function(){var e,t=this.props,n=t.prefixCls,r=t.progressDot,a=t.stepNumber,s=t.status,o=t.title,c=t.description,l=t.icon,u=t.iconPrefix,f=S()(n+"-icon",u+"icon",(e={},e[u+"icon-"+l]=l&&i(l),e[u+"icon-check"]=!l&&"finish"===s,e[u+"icon-cross"]=!l&&"error"===s,e)),p=h.a.createElement("span",{className:n+"-icon-dot"});return r?"function"==typeof r?h.a.createElement("span",{className:n+"-icon"},r(p,{index:a-1,status:s,title:o,description:c})):h.a.createElement("span",{className:n+"-icon"},p):l&&!i(l)?h.a.createElement("span",{className:n+"-icon"},l):l||"finish"===s||"error"===s?h.a.createElement("span",{className:f}):h.a.createElement("span",{className:n+"-icon"},a)},t.prototype.render=function(){var e,t=this.props,n=t.className,i=t.prefixCls,r=t.style,s=t.itemWidth,c=t.status,l=void 0===c?"wait":c,u=(t.iconPrefix,t.icon),f=(t.wrapperStyle,t.adjustMarginRight),p=(t.stepNumber,t.description),d=t.title,m=(t.progressDot,o()(t,["className","prefixCls","style","itemWidth","status","iconPrefix","icon","wrapperStyle","adjustMarginRight","stepNumber","description","title","progressDot"])),y=S()(i+"-item",i+"-item-"+l,n,(e={},e[i+"-item-custom"]=u,e)),v=a()({},r);return s&&(v.width=s),f&&(v.marginRight=f),h.a.createElement("div",a()({},m,{className:y,style:v}),h.a.createElement("div",{className:i+"-item-tail"}),h.a.createElement("div",{className:i+"-item-icon"},this.renderIconNode()),h.a.createElement("div",{className:i+"-item-content"},h.a.createElement("div",{className:i+"-item-title"},d),p&&h.a.createElement("div",{className:i+"-item-description"},p)))},t}(h.a.Component);b.propTypes={className:v.a.string,prefixCls:v.a.string,style:v.a.object,wrapperStyle:v.a.object,itemWidth:v.a.oneOfType([v.a.number,v.a.string]),status:v.a.string,iconPrefix:v.a.string,icon:v.a.node,adjustMarginRight:v.a.oneOfType([v.a.number,v.a.string]),stepNumber:v.a.string,description:v.a.any,title:v.a.any,progressDot:v.a.oneOfType([v.a.bool,v.a.func])},t.a=b},357:function(e,t){}});