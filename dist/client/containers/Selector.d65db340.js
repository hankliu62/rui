webpackJsonp([37],{355:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(9)),u=l(a(8)),r=l(a(2)),o=l(a(3)),c=l(a(4)),s=l(a(5)),d=a(1),i=l(d),f=a(332),h=function(e){function t(e){(0,r.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handleChangeSelector=function(e){return function(t){a.setState((0,n.default)({},e,t))}},a.heros=[{text:"全部英雄",value:"all"},{text:"敌法师",value:"AM"},{text:"龙骑士",value:"DK"},{text:"复仇之魂",value:"VS"},{text:"水晶室女",value:"CM"},{text:"撼地神牛",value:"ES"},{text:"隐形刺客",value:"SA"},{text:"流浪剑客",value:"Sven"},{text:"山岭巨人",value:"Tiny"},{text:"精灵守卫",value:"IO"}],a.state={hero:a.heros[0].value},a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"common-main selector-main"},i.default.createElement("header",{className:"main-page-header"},i.default.createElement("h1",null,"Selector 选择器")),i.default.createElement("div",{className:"main-page-body"},i.default.createElement(f.Selector,{value:this.state.hero,options:this.heros,onChange:this.handleChangeSelector("hero")})))}}]),t}(d.Component);t.default=h}});