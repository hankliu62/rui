webpackJsonp([21],{352:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(i(7)),n=a(i(2)),l=a(i(3)),d=a(i(4)),u=a(i(5)),o=i(1),c=a(o),s=i(380),m=function(e){function t(){return(0,n.default)(this,t),(0,d.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"common-main divider-main"},c.default.createElement("header",{className:"main-page-header"},c.default.createElement("h1",null,"Divider 分割线")),c.default.createElement("div",{className:"main-page-body",style:{fontSize:14}},c.default.createElement("div",{style:{marginBottom:15}},"123213",c.default.createElement(s.Divider,null),"123213"),c.default.createElement("div",{style:{marginBottom:15}},c.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),c.default.createElement(s.Divider,null),c.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),c.default.createElement(s.Divider,null,"With Text"),c.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo."),c.default.createElement(s.Divider,{dashed:!0}),c.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.")),c.default.createElement("div",{style:{marginBottom:15}},"Text",c.default.createElement(s.Divider,{direction:"vertical"}),c.default.createElement("a",{href:"#"},"Link"),c.default.createElement(s.Divider,{direction:"vertical"}),c.default.createElement("a",{href:"#"},"Link"))))}}]),t}(o.Component);t.default=m},380:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Divider=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(i(381));t.Divider=a.default,t.default=a.default},381:function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,n,l=a(i(12)),d=a(i(16)),u=a(i(7)),o=a(i(2)),c=a(i(3)),s=a(i(4)),m=a(i(5)),f=i(1),p=a(f),v=a(i(6)),h=a(i(8));i(382);var E=(n=r=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.className,e.direction),i=e.dashed,a=e.children,r=(0,d.default)(e,["className","direction","dashed","children"]);return p.default.createElement("div",(0,l.default)({},r,{className:(0,h.default)("hlrui-divider","hlrui-divider-"+t,{"hlrui-divider-with-text":a,"hlrui-divider-dashed":!!i})}),a&&p.default.createElement("span",{className:"hlrui-divider-inner-text"},a))}}]),t}(f.PureComponent),r.propTypes={className:v.default.string,direction:v.default.oneOf(["horizontal","vertical"]),dashed:v.default.bool},r.defaultProps={direction:"horizontal",dashed:!1},n);t.default=E},382:function(e,t){}});