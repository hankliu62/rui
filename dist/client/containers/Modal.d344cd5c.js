webpackJsonp([23],{371:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=l(t(9)),o=l(t(8)),r=l(t(2)),s=l(t(3)),d=l(t(4)),u=l(t(5)),i=t(1),c=l(i),m=t(58),f=t(546),h=function(e){function a(e){(0,r.default)(this,a);var t=(0,d.default)(this,(a.__proto__||(0,o.default)(a)).call(this,e));return t.handleOpenModal=function(){t.setState({isShow:!0,code:"",name:"",id:""})},t.handleCloseModal=function(){t.setState({isShow:!1,code:"",name:"",id:""})},t.handleChangeInput=function(e){var a=e.target.name,l=e.target.value;t.setState((0,n.default)({},a,l))},t.handleSubmitForm=function(e){e&&e.preventDefault();var a=t.state,l=a.saving,n=a.code,o=a.name;l||(t.setState({saving:!0}),console.log(n,o,"save"),setTimeout(function(){t.setState({saving:!1})},2e3))},t.state={isShow:!1,saving:!1,id:"",code:"",name:""},t}return(0,u.default)(a,e),(0,s.default)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.isShow,l=a.id,n=a.code,o=a.name,r=a.saving;return c.default.createElement("div",{className:"common-main loading-main"},c.default.createElement("header",{className:"main-page-header"},c.default.createElement("h1",null,"Modal 对话框")),c.default.createElement("div",{className:"main-page-body"},c.default.createElement("button",{className:"hlrui-btn hlrui-btn-tgreen",onClick:this.handleOpenModal},"新建英雄"),c.default.createElement(f.Modal,{show:t,className:"create-area-container",onClose:this.handleCloseModal,title:l?"编辑英雄":"新增英雄"},c.default.createElement("form",{className:"panel-form create-area-form form-body"},c.default.createElement("div",{className:"hlrui-form-group"},c.default.createElement("label",{className:"hlrui-form-label"},"英雄编号:"),c.default.createElement("div",{className:"hlrui-form-content"},c.default.createElement("div",{className:"hlrui-form-control-wrapper"},c.default.createElement("input",{type:"text",name:"code",className:"hlrui-form-control",ref:function(a){return e.codeInput=a},value:n,onChange:this.handleChangeInput,maxLength:"20",placeholder:"请输入英雄编号，最多支持20个纯数字"})))),c.default.createElement("div",{className:"hlrui-form-group"},c.default.createElement("label",{className:"hlrui-form-label"},"英雄名称:"),c.default.createElement("div",{className:"hlrui-form-content"},c.default.createElement("div",{className:"hlrui-form-control-wrapper"},c.default.createElement("input",{type:"text",name:"name",className:"hlrui-form-control",ref:function(a){return e.bameInput=a},value:o,onChange:this.handleChangeInput,maxLength:"20",placeholder:"请输入英雄名称，最多支持20个字符"})))),c.default.createElement("div",{className:"hlrui-form-group form-group-btns"},c.default.createElement("label",{className:"hlrui-form-label"}),c.default.createElement("div",{className:"hlrui-form-content btn-groups"},c.default.createElement("div",{className:"hlrui-form-control-wrapper"},c.default.createElement("button",{className:"hlrui-btn hlrui-btn-tred",onClick:(0,m.throttle)(this.handleSubmitForm,800)},r?c.default.createElement("i",{className:"fa fa-spinner fa-spin fa-fw"}):"保存"),c.default.createElement("span",{className:"hlrui-btn hlrui-btn-default",onClick:this.handleCloseModal},"取消"))))))))}}]),a}(i.Component);a.default=h},546:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.Modal=void 0;var l=function(e){return e&&e.__esModule?e:{default:e}}(t(547));a.Modal=l.default,a.default=l.default},547:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n,o,r=l(t(9)),s=l(t(334)),d=l(t(8)),u=l(t(2)),i=l(t(3)),c=l(t(4)),m=l(t(5)),f=t(1),h=l(f),p=l(t(6)),v=l(t(7));t(548);var N=(o=n=function(e){function a(){var e,t,l,n;(0,u.default)(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=l=(0,c.default)(this,(e=a.__proto__||(0,d.default)(a)).call.apply(e,[this].concat(r))),l.handleCloseModal=function(e){e.stopPropagation(),l.props.onClose()},l.handleConfirmModal=function(e){e.stopPropagation(),l.props.onConfirm&&l.props.onConfirm()},l.handleCancelModal=function(e){e.stopPropagation(),l.props.onCancel&&l.props.onCancel()},l.addBodyOverflowHidden=function(){var e=document.body;e.className.includes("overflowy-hidden")||(e.className=(e.className+" overflowy-hidden").trim())},l.removeBodyOverflowHidden=function(){var e=document.getElementsByClassName("hlrui-modal"),a=document.body;if(a.className.includes("overflowy-hidden")){var t=!1;if(e.length){var n=!0,o=!1,r=void 0;try{for(var d,u=(0,s.default)(e);!(n=(d=u.next()).done);n=!0){var i=d.value;i!==l.modal&&i.className.includes("show")&&(t=!0)}}catch(e){o=!0,r=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw r}}t||(a.className=a.className.replace("overflowy-hidden","").trim())}else a.className=a.className.replace("overflowy-hidden","").trim()}},n=t,(0,c.default)(l,n)}return(0,m.default)(a,e),(0,i.default)(a,[{key:"componentWillReceiveProps",value:function(e){e.show&&!this.props.show&&this.addBodyOverflowHidden(),!e.show&&this.props.show&&this.removeBodyOverflowHidden()}},{key:"render",value:function(){var e=this,a=this.props,t=a.show,l=a.title,n=a.className,o=a.extraRender,s=a.children;return h.default.createElement("div",{ref:function(a){return e.modal=a},className:(0,v.default)("hlrui-modal",(0,r.default)({show:t},n,n))},h.default.createElement("div",{className:"hlrui-modal-container"},(l||o)&&h.default.createElement("div",{className:"hlrui-modal-header"},h.default.createElement("span",{className:"hlrui-modal-title"},l),o&&h.default.createElement("div",{className:"hlrui-modal-extra"},o()),h.default.createElement("span",{className:"hlrui-modal-close",onClick:this.handleCloseModal},"×")),s&&h.default.createElement("div",{className:"hlrui-modal-body"},s),h.default.createElement("div",{className:"hlrui-modal-footer"},this.props.onConfirm&&h.default.createElement("span",{className:"hlrui-btn hlrui-btn-primary",onClick:this.handleConfirmModal},"确定"),this.props.onCancel&&h.default.createElement("span",{className:"hlrui-btn hlrui-btn-default",onClick:this.handleCancelModal},"取消"))),h.default.createElement("div",{className:"hlrui-mask",onClick:this.handleCloseModal}))}}]),a}(f.Component),n.propTypes={show:p.default.bool,className:p.default.string,title:p.default.any,onConfirm:p.default.func,onCancel:p.default.func,onClose:p.default.func.isRequired},n.defaultProps={onClose:function(){}},o);a.default=N},548:function(e,a){}});