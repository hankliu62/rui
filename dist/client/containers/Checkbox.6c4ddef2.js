webpackJsonp([10],{318:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=u(a(11)),n=u(a(7)),o=u(a(2)),r=u(a(3)),d=u(a(5)),f=u(a(6)),c=a(1),i=u(c),s=a(342),h=function(e){function t(e){(0,o.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.handleChangeCheckbox=function(e){return function(t){a.setState((0,l.default)({},e,t))}},a.heros=[{text:"敌法师",value:"AM"},{text:"龙骑士",value:"DK"},{text:"复仇之魂",value:"VS"},{text:"水晶室女",value:"CM"},{text:"撼地神牛",value:"ES"},{text:"隐形刺客",value:"SA"},{text:"流浪剑客",value:"Sven"},{text:"山岭巨人",value:"Tiny"},{text:"精灵守卫",value:"IO"}],a.state={heros:[]},a}return(0,f.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.state.heros;return i.default.createElement("div",{className:"common-main checkbox-main"},i.default.createElement("header",{className:"main-page-header"},i.default.createElement("h1",null,"Checkbox 单选框")),i.default.createElement("div",{className:"main-page-body"},i.default.createElement(s.CheckboxGroup,{options:this.heros,value:e,onChange:this.handleChangeCheckbox("heros")})))}}]),t}(c.Component);t.default=h},337:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l,n,o=u(a(20)),r=u(a(11)),d=u(a(21)),f=u(a(7)),c=u(a(2)),i=u(a(3)),s=u(a(5)),h=u(a(6)),p=a(1),v=u(p),b=u(a(8)),m=u(a(9));a(338);var k=(n=l=function(e){function t(){return(0,c.default)(this,t),(0,s.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t=this,a=this.props,u=a.className,l=a.type,n=a.disabled,f=a.value,c=a.children,i=(0,d.default)(a,["className","type","disabled","value","children"]);return v.default.createElement("label",(0,o.default)({className:(0,m.default)("hlrui-checkbox","hlrui-checkbox-"+l,(e={},(0,r.default)(e,u,u),(0,r.default)(e,"checked",f),(0,r.default)(e,"disabled",n),e)),onClick:function(){return t.props.onChange(!f)}},i),v.default.createElement("i",{className:"hlrui-checkbox-icon"}),c&&v.default.createElement("span",{className:"hlrui-checkbox-content"},c))}}]),t}(p.Component),l.propTypes={className:b.default.string,type:b.default.string,disabled:b.default.bool,value:b.default.bool,onChange:b.default.func},l.defaultProps={type:"default",onChange:function(){}},n);t.default=k},338:function(e,t){},342:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxGroup=t.Checkbox=void 0;var l=u(a(337)),n=u(a(343));l.default.CheckboxGroup=n.default,t.Checkbox=l.default,t.CheckboxGroup=n.default,t.default=l.default},343:function(e,t,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l,n,o=u(a(11)),r=u(a(304)),d=u(a(7)),f=u(a(2)),c=u(a(3)),i=u(a(5)),s=u(a(6)),h=a(1),p=u(h),v=u(a(8)),b=u(a(9)),m=u(a(337));a(338);var k=(n=l=function(e){function t(){var e,a,u,l;(0,f.default)(this,t);for(var n=arguments.length,o=Array(n),c=0;c<n;c++)o[c]=arguments[c];return a=u=(0,i.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(o))),u.handleCheckItem=function(e){return function(t){var a=u.props,l=a.options,n=a.value,o=void 0===n?[]:n,d=l[e];if(d){var f=[].concat((0,r.default)(o));t?o.includes(d.value)||f.push(d.value):f=f.filter(function(e){return e!==d.value}),u.props.onChange(f)}}},l=a,(0,i.default)(u,l)}return(0,s.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e,t=this,a=this.props,u=a.className,l=a.block,n=a.disabled,r=a.options,d=a.value,f=void 0===d?[]:d;return r&&r.length?p.default.createElement("div",{className:(0,b.default)("hlrui-checkbox-group",(e={},(0,o.default)(e,u,!!u),(0,o.default)(e,"hlrui-checkbox-group-block",l),e))},r.map(function(e,a){return p.default.createElement(m.default,{key:e.value,disabled:n||e.disabled,value:f.includes(e.value),onChange:t.handleCheckItem(a)},e.render?e.render(e,f):e.text)})):null}}]),t}(h.Component),l.propTypes={block:v.default.bool,className:v.default.string,options:v.default.arrayOf(v.default.shape({text:v.default.node,value:v.default.any,disabled:v.default.bool,render:v.default.func})).isRequired,value:v.default.arrayOf(v.default.any),onChange:v.default.func.isRequired,disabled:v.default.bool},l.defaultProps={value:[],onChange:function(){}},n);t.default=k}});