webpackJsonp([19],{333:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(7)),i=n(a(2)),s=n(a(3)),u=n(a(4)),r=n(a(5)),c=a(1),o=n(c),d=a(439),f=function(e){function t(e){(0,i.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.handleChangePage=function(e){a.setState({currentPage:e})},a.handleChangeSize=function(e){a.setState({currentPage:1,pageSize:e})},a.state={pageSize:10,currentPage:1},a}return(0,r.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"common-main pagination-main"},o.default.createElement("header",{className:"main-page-header"},o.default.createElement("h1",null,"Pagination 分页")),o.default.createElement("div",{className:"main-page-body"},o.default.createElement(d.Pagination,{totalRows:111,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onChangePage:this.handleChangePage,onChangeSize:this.handleChangeSize})))}}]),t}(c.Component);t.default=f},439:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Pagination=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(440));t.Pagination=n.default,t.default=n.default},440:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l,i,s=n(a(7)),u=n(a(2)),r=n(a(3)),c=n(a(4)),o=n(a(5)),d=a(1),f=n(d),g=n(a(6)),p=n(a(8)),h=a(322),m=a(55);a(441);var P=(i=l=function(e){function t(e){(0,u.default)(this,t);var a=(0,c.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.handleClickPageIndex=function(e){e!==a.props.currentPage&&"..."!==e&&a.props.onChangePage(e)},a.handleClickPrevious=function(){a.props.currentPage<=1||a.props.onChangePage(a.props.currentPage-1)},a.handleClickNext=function(){a.props.currentPage>=a.state.totalPages||a.props.onChangePage(a.props.currentPage+1)},a.handleClickQuick=function(){var e=Number(a.state.cPage);e>0&&e<=a.state.totalPages?a.props.onChangePage(e):a.setState({cPage:""})},a.handleChangePageSize=function(e){a.props.onChangeSize(e)},a.getPageNumbers=function(){var e=[1],t=a.props.currentPage,n=a.state.totalPages;if(n<=11){for(var l=2;l<=n;l++)e.push(l);return e}var i=t-3,s=t+3;i<2&&(s+=2-i),s>n-1&&(i-=s-n+1),i>2&&e.push("...");for(var u=Math.max(i,2);u<=Math.min(s,n-1);u++)e.push(u);return s<n-1&&e.push("..."),e.push(n),e},a.state={cPage:"",totalPages:Math.ceil(e.totalRows/e.pageSize)},a.pageSizes=[{text:"10",value:10},{text:"20",value:20},{text:"50",value:50},{text:"100",value:100}],a}return(0,o.default)(t,e),(0,r.default)(t,[{key:"componentWillReceiveProps",value:function(e){e.totalRows===this.props.totalRows&&e.pageSize===this.props.pageSize||this.setState({totalPages:Math.ceil(e.totalRows/e.pageSize)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.totalRows,n=t.pageSize,l=t.currentPage,i=t.showQuickBtn,s=t.showPageSize;if(a<=0)return null;var u=this.getPageNumbers(),r=l*n+1,c=(l+1)*n>a?a:(l+1)*n;return f.default.createElement("div",{className:(0,p.default)("hlrui-pagination",{"no-pagesize-selector":!s})},f.default.createElement("div",{className:"hlrui-pagination-statistics"},f.default.createElement("span",{className:(0,p.default)("statistics-text",{hidden:!s})},"显示第"),f.default.createElement("span",{className:(0,p.default)("statistics-number",{hidden:!s})}," ",r," "),f.default.createElement("span",{className:(0,p.default)("statistics-text",{hidden:!s})},"到第"),f.default.createElement("span",{className:(0,p.default)("statistics-number",{hidden:!s})}," ",c," "),f.default.createElement("span",{className:(0,p.default)("statistics-text",{hidden:!s})},"条记录，总"),f.default.createElement("span",{className:"statistics-text"},"共"),f.default.createElement("span",{className:"statistics-number"}," ",a," "),f.default.createElement("span",{className:"statistics-text"},"条记录"),f.default.createElement("span",{className:(0,p.default)("statistics-text",{hidden:!s})},"，每页显示"),f.default.createElement(h.Selector,{className:(0,p.default)("hlrui-form-control","pagesize-selector",{hidden:!s}),value:n,options:this.pageSizes,onChange:this.handleChangePageSize}),f.default.createElement("span",{className:(0,p.default)("statistics-text",{hidden:!s})},"条记录")),f.default.createElement("div",{className:"hlrui-pagination-content"},f.default.createElement("ul",{className:(0,p.default)("hlrui-pagination-wrap",{hidden:a<=n})},f.default.createElement("li",{className:(0,p.default)("btn-pagination","btn-previous",{disabled:l<=1}),onClick:this.handleClickPrevious},f.default.createElement(m.Icon,{type:"angle-left"})),u.map(function(t,a){return f.default.createElement("li",{key:a,className:(0,p.default)("btn-pagination btn-index",{active:t===l,"btn-page-expand":"..."===t}),onClick:function(){return e.handleClickPageIndex(t)}},t)}),f.default.createElement("li",{className:(0,p.default)("btn-pagination","btn-next",{disabled:l>=this.state.totalPages}),onClick:this.handleClickNext},f.default.createElement(m.Icon,{type:"angle-right"}))),i&&f.default.createElement("div",{className:(0,p.default)("hlrui-pagination-quick-wrap",{hidden:a<=n})},f.default.createElement("input",{className:"hlrui-form-control page-form-control",type:"number",value:this.state.cPage,onChange:function(t){return e.setState({cPage:t.target.value})}}),f.default.createElement("a",{className:"hlrui-btn hlrui-btn-tred hlrui-btn-quick",onClick:this.handleClickQuick},"跳 转"))))}}]),t}(d.Component),l.propTypes={totalRows:g.default.number,pageSize:g.default.number,currentPage:g.default.number,showQuickBtn:g.default.bool,showPageSize:g.default.bool,onChangePage:g.default.func.isRequired,onChangeSize:g.default.func.isRequired},l.defaultProps={pageSize:10,currentPage:1,showQuickBtn:!0,showPageSize:!1},i);t.default=P},441:function(e,t){}});