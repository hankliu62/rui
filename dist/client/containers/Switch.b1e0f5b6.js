webpackJsonp([13],{356:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=l(a(9)),n=l(a(8)),d=l(a(2)),s=l(a(3)),h=l(a(4)),c=l(a(5)),u=a(1),r=l(u),f=a(402);a(474);var o=function(e){function t(e){(0,d.default)(this,t);var a=(0,h.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.handleChangeSwitch=function(e){return function(t){a.setState((0,i.default)({},e,t))}},a.state={disabled:!1,switch1:!1,switch2:!0,switch3:!1},a}return(0,c.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return r.default.createElement("div",{className:"common-main switch-main"},r.default.createElement("header",{className:"main-page-header"},r.default.createElement("h1",null,"Switch 开关")),r.default.createElement("div",{className:"main-page-body"},r.default.createElement("div",{className:"switchs-group"},r.default.createElement(f.Switch,{value:this.state.switch1,onChange:this.handleChangeSwitch("switch1"),disabled:this.state.disabled,checkedChildren:"开",unCheckedChildren:"关"}),r.default.createElement(f.Switch,{value:!0,onChange:this.handleChangeSwitch("switch1"),disabled:!0})),r.default.createElement("div",{className:"switchs-group"},r.default.createElement(f.Switch,{value:this.state.switch2,onChange:this.handleChangeSwitch("switch2"),disabled:this.state.disabled,checkedChildren:"开",unCheckedChildren:"关",size:"large"}),r.default.createElement(f.Switch,{onChange:this.handleChangeSwitch("switch2"),disabled:!0,size:"large"})),r.default.createElement("div",{className:"switchs-group"},r.default.createElement(f.Switch,{value:this.state.switch3,onChange:this.handleChangeSwitch("switch3"),disabled:this.state.disabled,checkedChildren:"开",unCheckedChildren:"关",size:"small"}),r.default.createElement(f.Switch,{value:!0,onChange:this.handleChangeSwitch("switch3"),disabled:!0,size:"small"}))))}}]),t}(u.Component);t.default=o},402:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(a(403));t.Switch=l.default,t.default=l.default},403:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i,n,d,s=l(a(11)),h=l(a(9)),c=l(a(12)),u=l(a(8)),r=l(a(2)),f=l(a(3)),o=l(a(4)),m=l(a(5)),w=a(1),C=l(w),g=l(a(6)),v=l(a(7)),p=l(a(23));a(404);var b=(0,p.default)((d=n=function(e){function t(e){(0,r.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handleTriggleSwitch=function(){var e=a.props.disabled,t=a.state.checked;e||(a.setState({checked:!t}),a.props.onChange(!t))},a.state={checked:!!e.value},a.getSizeName=a.getSizeName.bind(a),a}return(0,m.default)(t,e),(0,f.default)(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.setState({checked:!!e.value})}},{key:"render",value:function(){var e,t=this.props,a=t.className,l=(t.value,t.disabled),i=t.theme,n=(t.onChange,t.checkedChildren),d=t.unCheckedChildren,u=(0,c.default)(t,["className","value","disabled","theme","onChange","checkedChildren","unCheckedChildren"]),r=this.state.checked,f=this.getSizeName();return delete u.size,C.default.createElement("span",(0,s.default)({},u,{className:(0,v.default)("hlrui-switch",(e={},(0,h.default)(e,a,a),(0,h.default)(e,"hlrui-switch-theme-"+i,i),(0,h.default)(e,"hlrui-switch-size-"+f,f),(0,h.default)(e,"hlrui-switch-checked",r),(0,h.default)(e,"disabled",l),e)),onClick:this.handleTriggleSwitch}),C.default.createElement("span",{className:"hlrui-switch-content"},r?n:d))}}]),t}(w.PureComponent),n.propTypes={className:g.default.string,theme:g.default.string,value:g.default.bool,disabled:g.default.bool,checkedChildren:g.default.any,unCheckedChildren:g.default.any,size:g.default.oneOf(["large","default","small"]),onChange:g.default.func},n.defaultProps={disabled:!1,onChange:function(){}},i=d))||i;t.default=b},404:function(e,t){},474:function(e,t){}});