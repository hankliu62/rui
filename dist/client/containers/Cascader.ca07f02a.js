webpackJsonp([18],{316:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(7)),u=l(a(2)),i=l(a(3)),r=l(a(5)),o=l(a(6)),d=a(1),s=l(d),c=a(387),f=function(e){function t(e){(0,u.default)(this,t);var a=(0,r.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={dishTypes:["all"]},a.dishTypes=[{text:"全部分类",value:"all"},{text:"热菜",value:"1",subOptions:[{text:"荤菜",value:"4",subOptions:[{text:"牛肉类",value:"10"},{text:"羊肉类",value:"11"},{text:"猪肉类",value:"12"},{text:"鸡肉类",value:"13"}]},{text:"素菜",value:"5",subOptions:[{text:"叶类",value:"14"},{text:"茎类",value:"15"},{text:"根类",value:"16"}]},{text:"汤羹",value:"6",subOptions:[{text:"浓汤",value:"17"},{text:"清汤",value:"18"}]}]},{text:"冷菜",value:"2",subOptions:[{text:"卤菜",value:"7",subOptions:[{text:"鱼类",value:"19"},{text:"豆类",value:"20"}]},{text:"罐头",value:"8",subOptions:[{text:"清蒸类",value:"21"},{text:"调味类",value:"22"},{text:"腌制类",value:"23"},{text:"烟熏类",value:"24"},{text:"香肠类",value:"25"},{text:"内脏类",value:"26"},{text:"白烧类",value:"27"},{text:"去骨类",value:"28"},{text:"糖水类",value:"29"},{text:"糖浆类",value:"30"},{text:"果酱类",value:"31"},{text:"果汁类",value:"32"},{text:"醋渍类",value:"33"},{text:"坚果类",value:"34"}]},{text:"水果",value:"9"}]},{text:"甜品",value:"3"}],a}return(0,o.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.state.dishTypes;return s.default.createElement("div",{className:"common-main cascader-main"},s.default.createElement("header",{className:"main-page-header"},s.default.createElement("h1",null,"Cascader 图标")),s.default.createElement("div",{className:"main-page-body"},s.default.createElement(c.Cascader,{className:"mw-form-control dish-server-control",value:t,options:this.dishTypes,onChange:function(t){return e.setState({dishTypes:t})}})))}}]),t}(d.Component);t.default=f},387:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Cascader=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(a(388));t.Cascader=l.default,t.default=l.default},388:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,u,i,r=l(a(304)),o=l(a(305)),d=l(a(11)),s=l(a(57)),c=l(a(7)),f=l(a(2)),p=l(a(3)),h=l(a(5)),v=l(a(6)),m=a(1),b=l(m),x=l(a(8)),w=l(a(9));a(389);var g=(u=n=function(e){function t(e){(0,f.default)(this,t);var a=(0,h.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));i.call(a);var l=a.getSelectedOptionLabel(e);return a.state={isShowDropdown:!1,search:"",selectedOptionLabel:l,checkedValues:e.value||[]},a}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickDocument,!1)}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;if((0,s.default)(this.props.value)!==(0,s.default)(t)){var a=this.getSelectedOptionLabel(e);this.setState({selectedOptionLabel:a,checkedValues:t||[]})}}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickDocument,!1)}},{key:"isChildOf",value:function(e,t){return e.parentNode===t||null!==e.parentNode&&this.isChildOf(e.parentNode,t)}},{key:"render",value:function(){var e,t=this,a=this.props,l=a.subOptionsField,n=a.labelField,u=a.valueField,i=a.disabled,r=a.filterable,s=a.placeholder,c=a.className,f=this.props.options,p=this.state,h=p.selectedOptionLabel,v=p.isShowDropdown,m=p.search,x=p.checkedValues,g=[f];r&&m&&(g[0]=f.filter(function(e){return t.matchSearch(e[n])}));var y=f,k=!0,O=!1,C=void 0;try{for(var S,_=(0,o.default)(x);!(k=(S=_.next()).done)&&"break"!==function(){var e=S.value,t=y.find(function(t){return t[u]===e});if(!t)return"break";(y=t[l])&&g.push(y)}();k=!0);}catch(e){O=!0,C=e}finally{try{!k&&_.return&&_.return()}finally{if(O)throw C}}return b.default.createElement("div",{className:(0,w.default)("hlrui-cascader",(e={},(0,d.default)(e,c,c),(0,d.default)(e,"disabled",i),(0,d.default)(e,"focus",v),(0,d.default)(e,"placeholder-status",!h),e)),ref:function(e){return t.selector=e}},b.default.createElement("div",{className:"hlrui-cascader-source",onClick:this.handleToggleDropdown},b.default.createElement("div",{className:"hlrui-cascader-source-control","data-for":"source"},h||s),b.default.createElement("i",{className:(0,w.default)("icon-triangle-down",{up:v})})),v&&b.default.createElement("div",{className:"hlrui-dropdown-wrapper"},g.map(function(e,a){return b.default.createElement("div",{key:a,className:(0,w.default)("hlrui-dropdown-box","hlrui-dropdown-box-"+a)},r&&b.default.createElement("input",{className:"hlrui-dropdown-filter-input u-ipt-box",name:"search",type:"text",value:m,onChange:t.handleInputChange}),b.default.createElement("div",{className:"hlrui-dropdown-list"},b.default.createElement("ul",null,e.map(function(e){return b.default.createElement("li",{className:(0,w.default)("hlrui-dropdown-item",{selected:x[a]===e[u],"with-sub-options":e[l]&&e[l].length}),key:e[u],onClick:t.handleSelectItem(a,e),"data-for":"option","data-tip":e[n]},e[n])}))))})),b.default.createElement("div",{className:(0,w.default)("hlrui-mobile-mask hidden",{"mobile-show":v}),onClick:this.handleHiddenDropdown}))}}]),t}(m.Component),n.propTypes={subOptionsField:x.default.string,labelField:x.default.string,valueField:x.default.string,disabled:x.default.oneOfType([x.default.string,x.default.bool]),placeholder:x.default.string,filterable:x.default.bool,options:x.default.array.isRequired,onChange:x.default.func.isRequired},n.defaultProps={filterable:!1,tooltipable:!1,labelField:"text",valueField:"value",subOptionsField:"subOptions"},i=function(){var e=this;this.handleInputChange=function(t){var a=t.target.name,l=t.target.value;e.setState((0,d.default)({},a,l))},this.handleToggleDropdown=function(t){t&&t.stopPropagation();var a=e.props,l=a.disabled,n=a.value;l||e.setState(function(e){var t={isShowDropdown:!e.isShowDropdown};return t.isShowDropdown&&(t.checkedValues=n||[]),t})},this.handleSelectItem=function(t,a){return function(l){l&&l.stopPropagation();var n=e.props,u=n.valueField,i=n.subOptionsField,o=[].concat((0,r.default)(e.state.checkedValues||[])),d=a[u];o.length=t+1,o[t]=d,a[i]?e.setState({checkedValues:o}):(e.props.onChange(o),e.handleToggleDropdown())}},this.handleClickDocument=function(t){!e.isChildOf(t.target,e.selector)&&e.state.isShowDropdown&&e.handleHiddenDropdown()},this.handleHiddenDropdown=function(){e.setState({isShowDropdown:!1})},this.getSelectedOptionLabel=function(e){var t=e.value,a=e.subOptionsField,l=e.labelField,n=e.valueField,u=e.options,i=[];if(t){var r=void 0===u?[]:u,d=!0,s=!1,c=void 0;try{for(var f,p=(0,o.default)(t);!(d=(f=p.next()).done)&&"break"!==function(){var e=f.value,t=r.find(function(t){return t[n]===e});if(!t)return"break";i.push(t),r=t[a]||[]}();d=!0);}catch(e){s=!0,c=e}finally{try{!d&&p.return&&p.return()}finally{if(s)throw c}}}return i.length?i.map(function(e){return e[l]}).join(" > "):""},this.matchSearch=function(t){var a=e.state.search.trim();return""===a||t.indexOf(a)>=0}},u);t.default=g},389:function(e,t){}});