webpackJsonp([13],{337:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(6)),l=a(r(2)),s=a(r(3)),o=a(r(4)),i=a(r(5)),c=r(1),u=a(c),d=r(481);r(484);var f=function(e){function t(e){(0,l.default)(this,t);var r=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return r.state={show:1},r}return(0,i.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"common-main alert-main"},u.default.createElement("header",{className:"main-page-header"},u.default.createElement("h1",null,"Alert 警告")),u.default.createElement("div",{className:"main-page-body"},u.default.createElement(d.Alert,{message:"Success Text",type:"success"}),u.default.createElement(d.Alert,{message:"Info Text",type:"info"}),u.default.createElement(d.Alert,{message:"Warning Text",type:"warning"}),u.default.createElement(d.Alert,{message:"Error Text",type:"error"}),u.default.createElement(d.Alert,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:this.handleClose}),u.default.createElement(d.Alert,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:this.handleClose}),u.default.createElement(d.Alert,{message:"Success Tips",type:"success",showIcon:!0}),u.default.createElement(d.Alert,{message:"Informational Notes",type:"info",showIcon:!0}),u.default.createElement(d.Alert,{message:"Warning",type:"warning",showIcon:!0}),u.default.createElement(d.Alert,{message:"Error",type:"error",showIcon:!0}),u.default.createElement(d.Alert,{message:"success tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0,closable:!0,onClose:this.handleClose}),u.default.createElement(d.Alert,{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),u.default.createElement(d.Alert,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),u.default.createElement(d.Alert,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})))}}]),t}(c.Component);t.default=f},481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(r(482));t.Alert=a.default,t.default=a.default},482:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,l,s=a(r(6)),o=a(r(2)),i=a(r(3)),c=a(r(4)),u=a(r(5)),d=r(1),f=a(d),p=a(r(7)),m=a(r(8)),g=r(105);r(483);var h=(l=n=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.type,r=e.message,a=e.description,n=e.banner,l=e.showIcon,s=e.closable,o=e.onClose,i="info-sign";if(l)switch(t){case"success":i="ok-sign";break;case"warning":i="exclamation-sign";break;case"error":i="remove-sign"}return f.default.createElement("div",{className:(0,m.default)("hlrui-alert","hlrui-alert-"+t,{"hlrui-alert-banner":n,"hlrui-alert-width-description":a,"hlrui-alert-width-icon":l})},l&&f.default.createElement(g.Icon,{type:i}),f.default.createElement("div",{className:"hlrui-alert-message"},r),a&&f.default.createElement("div",{className:"hlrui-alert-description"},a),s&&f.default.createElement("span",{className:"hlrui-alert-close",onClick:o},"×"))}}]),t}(d.PureComponent),n.propTypes={type:p.default.oneOf(["success","info","warning","error"]),message:p.default.oneOfType([p.default.node,p.default.string]),description:p.default.oneOfType([p.default.node,p.default.string]),banner:p.default.bool,showIcon:p.default.bool,closable:p.default.bool,onClose:p.default.func},n.defaultProps={type:"info",banner:!1,closable:!1,showIcon:!1},l);t.default=h},483:function(e,t){},484:function(e,t){}});