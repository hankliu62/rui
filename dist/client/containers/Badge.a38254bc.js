webpackJsonp([10],{343:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(a(7)),n=l(a(2)),d=l(a(3)),r=l(a(4)),s=l(a(5)),c=a(1),o=l(c),f=a(476),i=a(324),m=a(373),h=a(108),g=a(55),E=function(e){function t(e){(0,n.default)(this,t);var a=(0,r.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handleChange=function(e){a.setState({show:e})},a.handleDecline=function(){a.setState({count:a.state.count-1>0?a.state.count-1:0})},a.handleIncrease=function(){a.setState({count:a.state.count+1})},a.state={count:5,show:!0},a}return(0,s.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"common-main badge-main"},o.default.createElement("header",{className:"main-page-header"},o.default.createElement("h1",null,"Badge 徽标")),o.default.createElement("div",{className:"main-page-body"},o.default.createElement("div",{className:"badges-row-group"},o.default.createElement(f.Badge,{dot:!0}),o.default.createElement(f.Badge,{dot:!0},o.default.createElement(i.Avatar,null,"USER")),o.default.createElement(f.Badge,{dot:!0},o.default.createElement(i.Avatar,{shape:"square"},"USER"))),o.default.createElement("div",{className:"badges-row-group"},o.default.createElement(f.Badge,{count:"5"}),o.default.createElement(f.Badge,{count:"4",style:{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}}),o.default.createElement(f.Badge,{count:"109",style:{backgroundColor:"#52c41a"}}),o.default.createElement(f.Badge,{count:"5"},o.default.createElement(i.Avatar,{theme:"tyellow"},"Lucy")),o.default.createElement(f.Badge,{count:"5"},o.default.createElement(i.Avatar,{theme:"tyellow",shape:"square"},"Lucy")),o.default.createElement(f.Badge,{count:"5"},o.default.createElement(i.Avatar,{theme:"tgreen",shape:"square"},"Edward")),o.default.createElement(f.Badge,{count:99},o.default.createElement(i.Avatar,{theme:"tgreen",shape:"square"},"Edward")),o.default.createElement(f.Badge,{count:100},o.default.createElement(i.Avatar,{theme:"tgreen",shape:"square"},"Edward")),o.default.createElement(f.Badge,{count:99,overflowCount:10},o.default.createElement(i.Avatar,{shape:"square"},"Edward")),o.default.createElement(f.Badge,{count:1e3,overflowCount:999},o.default.createElement(i.Avatar,{shape:"square"},"Edward"))),o.default.createElement("div",{className:"badges-row-group"},o.default.createElement(f.Badge,{count:this.state.count},o.default.createElement(i.Avatar,{shape:"square"})),o.default.createElement(h.ButtonGroup,{style:{marginLeft:"15px"}},o.default.createElement(h.Button,{onClick:this.handleDecline},o.default.createElement(g.Icon,{type:"minus"})),o.default.createElement(h.Button,{onClick:this.handleIncrease},o.default.createElement(g.Icon,{type:"plus"})))),o.default.createElement("div",{className:"badges-row-group"},o.default.createElement(f.Badge,{dot:this.state.show},o.default.createElement(i.Avatar,{shape:"square"})),o.default.createElement(m.Switch,{onChange:this.handleChange,value:this.state.show,style:{marginLeft:"15px"}})),o.default.createElement("div",{className:"badges-row-group"},o.default.createElement(f.Badge,{status:"success"}),o.default.createElement(f.Badge,{status:"error"}),o.default.createElement(f.Badge,{status:"default"}),o.default.createElement(f.Badge,{status:"processing"}),o.default.createElement(f.Badge,{status:"warning"}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(f.Badge,{status:"success",statusText:"Success"}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(f.Badge,{status:"error",statusText:"Error"}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(f.Badge,{status:"default",statusText:"Default"}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(f.Badge,{status:"processing",statusText:"Processing"}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(f.Badge,{status:"warning",statusText:"Warning"}))))}}]),t}(c.Component);t.default=E},373:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(a(374));t.Switch=l.default,t.default=l.default},374:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,n,d,r=l(a(12)),s=l(a(9)),c=l(a(13)),o=l(a(7)),f=l(a(2)),i=l(a(3)),m=l(a(4)),h=l(a(5)),g=a(1),E=l(g),p=l(a(6)),v=l(a(8)),b=l(a(22));a(375);var w=(0,b.default)((d=n=function(e){function t(e){(0,f.default)(this,t);var a=(0,m.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.handleTriggleSwitch=function(){var e=a.props.disabled,t=a.state.checked;e||(a.setState({checked:!t}),a.props.onChange(!t))},a.state={checked:!!e.value},a.getSizeName=a.getSizeName.bind(a),a}return(0,h.default)(t,e),(0,i.default)(t,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.setState({checked:!!e.value})}},{key:"render",value:function(){var e,t=this.props,a=t.className,l=(t.value,t.disabled),u=t.theme,n=(t.onChange,t.checkedChildren),d=t.unCheckedChildren,o=(0,c.default)(t,["className","value","disabled","theme","onChange","checkedChildren","unCheckedChildren"]),f=this.state.checked,i=this.getSizeName();return delete o.size,E.default.createElement("span",(0,r.default)({},o,{className:(0,v.default)("hlrui-switch",(e={},(0,s.default)(e,a,a),(0,s.default)(e,"hlrui-switch-theme-"+u,u),(0,s.default)(e,"hlrui-switch-size-"+i,i),(0,s.default)(e,"hlrui-switch-checked",f),(0,s.default)(e,"disabled",l),e)),onClick:this.handleTriggleSwitch}),E.default.createElement("span",{className:"hlrui-switch-content"},f?n:d))}}]),t}(g.PureComponent),n.propTypes={className:p.default.string,theme:p.default.string,value:p.default.bool,disabled:p.default.bool,checkedChildren:p.default.any,unCheckedChildren:p.default.any,size:p.default.oneOf(["large","default","small"]),onChange:p.default.func},n.defaultProps={disabled:!1,onChange:function(){}},u=d))||u;t.default=w},375:function(e,t){},476:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(a(477));t.Badge=l.default,t.default=l.default},477:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,n,d=l(a(9)),r=l(a(12)),s=l(a(13)),c=l(a(7)),o=l(a(2)),f=l(a(3)),i=l(a(4)),m=l(a(5)),h=a(1),g=l(h),E=l(a(6)),p=l(a(8));a(478);var v=["default","success","error","processing","warning"],b=(n=u=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.className,l=t.count,u=t.overflowCount,n=t.dot,c=t.showZero,o=t.status,f=t.statusText,i=t.children,m=(0,s.default)(t,["className","count","overflowCount","dot","showZero","status","statusText","children"]),h=void 0;return n?h=g.default.createElement("span",(0,r.default)({},m,{className:"hlrui-badge-dot"})):+l>0?h=+u<+l?g.default.createElement("span",(0,r.default)({},m,{className:"hlrui-badge-count"}),u,"+"):g.default.createElement("span",(0,r.default)({},m,{className:"hlrui-badge-count"}),l):"0"!==l&&0!==l||!c?v.includes(o)&&(h=g.default.createElement("span",(0,r.default)({},m,{className:(0,p.default)("hlrui-badge-dot",(0,d.default)({},"hlrui-badge-dot-status-"+o,o))}))):h=g.default.createElement("span",(0,r.default)({},m,{className:"hlrui-badge-count"}),"0"),g.default.createElement("div",{className:(0,p.default)("hlrui-badge",(e={},(0,d.default)(e,a,a),(0,d.default)(e,"hlrui-badge-with-children",i),e))},i&&i,h,o&&g.default.createElement("span",{className:"hlrui-badge-status-content"},f))}}]),t}(h.PureComponent),u.propTypes={className:E.default.string,count:E.default.oneOfType([E.default.string,E.default.number]),overflowCount:E.default.oneOfType([E.default.string,E.default.number]),dot:E.default.bool,showZero:E.default.bool,status:E.default.oneOf(v),statusText:E.default.string},u.defaultProps={overflowCount:99,dot:!1,showZero:!1},n);t.default=b},478:function(e,t){}});