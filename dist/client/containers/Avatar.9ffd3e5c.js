webpackJsonp([5],{321:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(11)),s=r(a(7)),n=r(a(2)),u=r(a(3)),c=r(a(5)),i=r(a(6)),d=a(1),f=r(d),o=a(349),m=r(a(391));a(392);var h=function(e){function t(e){(0,n.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.handleChangeAvatar=function(e){return function(t){a.setState((0,l.default)({},e,t))}},a.state={disabled:!1,switch1:!1,switch2:!0,switch3:!1},a}return(0,i.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"common-main avatar-main"},f.default.createElement("header",{className:"main-page-header"},f.default.createElement("h1",null,"Avatar 开关")),f.default.createElement("div",{className:"main-page-body"},f.default.createElement("div",{className:"avatars-group avatars-group-size"},f.default.createElement(o.Avatar,{icon:"user",size:"large"}),f.default.createElement(o.Avatar,{icon:"user"}),f.default.createElement(o.Avatar,{icon:"user",size:"small"})),f.default.createElement("div",{className:"avatars-group"},f.default.createElement(o.Avatar,{icon:"user",size:"large",shape:"square"}),f.default.createElement(o.Avatar,{icon:"user",shape:"square"}),f.default.createElement(o.Avatar,{icon:"user",size:"small",shape:"square"})),f.default.createElement("div",{className:"avatars-group"},f.default.createElement(o.Avatar,{src:m.default}),f.default.createElement(o.Avatar,{src:m.default,shape:"square"}),f.default.createElement(o.Avatar,{theme:"tblue"},"U"),f.default.createElement(o.Avatar,{theme:"tblue",shape:"square"},"U"),f.default.createElement(o.Avatar,{theme:"tred"},"USER"),f.default.createElement(o.Avatar,{theme:"tred",shape:"square"},"USER"),f.default.createElement(o.Avatar,{theme:"tyellow"},"Lucy"),f.default.createElement(o.Avatar,{theme:"tyellow",shape:"square"},"Lucy"),f.default.createElement(o.Avatar,{theme:"tgreen"},"Tom"),f.default.createElement(o.Avatar,{theme:"tgreen",shape:"square"},"Tom"),f.default.createElement(o.Avatar,{theme:"tred",shape:"square"},"Edward"),f.default.createElement(o.Avatar,{theme:"tred"},"Edward"))))}}]),t}(d.Component);t.default=h},349:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(a(350));t.Avatar=r.default,t.default=r.default},350:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l,s,n=r(a(20)),u=r(a(11)),c=r(a(21)),i=r(a(7)),d=r(a(2)),f=r(a(3)),o=r(a(5)),m=r(a(6)),h=a(1),v=r(h),p=r(a(8)),E=r(a(9)),g=a(105);a(351);var A=(s=l=function(e){function t(e){(0,d.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.setScale=function(){var e=a.childrenNode;if(e){var t=e.offsetWidth,r=a.avatarNode.getBoundingClientRect().width;r-8<t?a.setState({scale:(r-8)/t}):a.setState({scale:1})}},a.state={scale:1,isImgExist:!0},a}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.setScale()}},{key:"componentDidUpdate",value:function(e,t){(e.children!==this.props.children||t.scale!==this.state.scale&&1===this.state.scale)&&this.setScale()}},{key:"render",value:function(){var e,t=this,a=this.props,r=a.className,l=a.src,s=a.icon,i=a.size,d=a.shape,f=a.theme,o=(0,c.default)(a,["className","src","icon","size","shape","theme"]),m=this.props.children;if(l&&this.state.isImgExist)m=v.default.createElement("img",{src:l,onError:function(){return t.setState({isImgExist:!1})}});else if(s)m="string"==typeof s?v.default.createElement(g.Icon,{type:s}):s;else{var h=this.childrenNode;if(h||1!==this.state.scale){var p={msTransform:"scale("+this.state.scale+")",WebkitTransform:"scale("+this.state.scale+")",transform:"scale("+this.state.scale+")",position:"absolute",display:"inline-block",left:"calc(50% - "+Math.round(h.offsetWidth/2)+"px)"};m=v.default.createElement("span",{className:"hlrui-avatar-string",ref:function(e){return t.childrenNode=e},style:p},m)}else m=v.default.createElement("span",{className:"hlrui-avatar-string",ref:function(e){return t.childrenNode=e}},m)}var A="";switch(i){case"large":A="lg";break;case"small":A="sm"}return delete o.children,v.default.createElement("div",(0,n.default)({},o,{className:(0,E.default)("hlrui-avatar",(e={},(0,u.default)(e,r,r),(0,u.default)(e,"hlrui-avatar-size-"+A,A),(0,u.default)(e,"hlrui-avatar-shape-"+d,"circle"!==d),(0,u.default)(e,"hlrui-avatar-theme-"+f,f),e)),ref:function(e){return t.avatarNode=e}}),m)}}]),t}(h.PureComponent),l.propTypes={className:p.default.string,icon:p.default.oneOfType([p.default.string,p.default.node]),src:p.default.string,theme:p.default.string,size:p.default.oneOf(["large","default","small"]),shape:p.default.oneOf(["circle","square"])},l.defaultProps={size:"default",shape:"circle"},s);t.default=A},351:function(e,t){},391:function(e,t,a){e.exports=a.p+"img/qq-avatar.7211403c.jpeg"},392:function(e,t){}});