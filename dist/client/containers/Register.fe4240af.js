webpackJsonp([3],{369:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(9)),r=i(a(326)),s=i(a(8)),o=i(a(2)),c=i(a(3)),l=i(a(4)),u=i(a(5)),d=a(1),m=i(d),v=i(a(109));a(381);var p=a(435),f=a(330),h=a(328),b=a(108),y=a(324),_=a(438),g=a(539);a(546);var w=function(e){function t(e){(0,o.default)(this,t);var a=(0,l.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.fetchAuthCode=function(){return new r.default(function(e){setTimeout(function(){e("success")},1e3)})},a.handleChangeSelector=function(e){return function(t){a.setState((0,n.default)({},e,t))}},a.handleBeforeFetchAuthCode=function(){return!0},a.handleFetchedAuthCode=function(){},a.handleFetchAuthCodeError=function(){},a.renderPhoneNumber=function(){var e=a.state.phoneNumber;return m.default.createElement(h.Selector,{value:e,options:a.phoneNumbers,onChange:a.handleChangeSelector("phoneNumber"),size:"large"})},a.phoneNumbers=[{text:"+86",value:"+86"},{text:"+87",value:"+87"}],a.state={remeber:!1,phoneNumber:a.phoneNumbers[0].value},a}return(0,u.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return m.default.createElement("div",{className:"register-main"},m.default.createElement(_.Particles,null),m.default.createElement("div",{className:"register-main-body"},m.default.createElement("div",{className:"register-main-body-wrap"},m.default.createElement("div",{className:"body-wrap-top"},m.default.createElement("div",{className:"body-wrap-top-header"},m.default.createElement("a",{className:"top-header-logo",href:"/"},m.default.createElement("img",{className:"logo-image",src:v.default})),m.default.createElement("span",{className:"top-header-content"},"HLRUI Design")),m.default.createElement("div",{className:"body-wrap-top-desc"},'HLRUI Design 是"加里敦"大学最具影响力的 Web 设计规范')),m.default.createElement("div",{className:"body-wrap-mian"},m.default.createElement("h3",{className:"register-form-title"},"注册"),m.default.createElement("form",{className:"hlrui-form register-form"},m.default.createElement("div",{className:"hlrui-form-item"},m.default.createElement("div",{className:"hlrui-form-item-control-wrap"},m.default.createElement("div",{className:"hlrui-form-item-control"},m.default.createElement(f.Input,{placeholder:"邮箱",size:"large"})))),m.default.createElement("div",{className:"hlrui-form-item"},m.default.createElement("div",{className:"hlrui-form-item-control-wrap"},m.default.createElement("div",{className:"hlrui-form-item-control"},m.default.createElement(f.Input,{type:"password",placeholder:"至少6位密码，区分大小写",size:"large"})))),m.default.createElement("div",{className:"hlrui-form-item"},m.default.createElement("div",{className:"hlrui-form-item-control-wrap"},m.default.createElement("div",{className:"hlrui-form-item-control"},m.default.createElement(f.Input,{type:"password",placeholder:"确认密码",size:"large"})))),m.default.createElement("div",{className:"hlrui-form-item"},m.default.createElement("div",{className:"hlrui-form-item-control-wrap"},m.default.createElement("div",{className:"hlrui-form-item-control"},m.default.createElement(f.Input,{addonBefore:this.renderPhoneNumber(),placeholder:"11位手机号",size:"large"})))),m.default.createElement("div",{className:"hlrui-form-item phone-auth-form-item"},m.default.createElement("div",{className:"hlrui-form-item-control-wrap"},m.default.createElement("div",{className:"hlrui-form-item-control"},m.default.createElement(f.Input,{placeholder:"验证码",size:"large"}),m.default.createElement(g.AuthCode,{theme:"default",size:"large",seconds:60,fetchAuthCode:this.fetchAuthCode,onBeforeFetch:this.handleBeforeFetchAuthCode,onFetched:this.handleFetchedAuthCode,onError:this.handleFetchAuthCodeError})))),m.default.createElement("div",{className:"hlrui-form-item"},m.default.createElement("div",{className:"hlrui-form-item-control-wrap"},m.default.createElement("div",{className:"hlrui-form-item-control"},m.default.createElement(b.Button,{className:"btn-register",theme:"primary",size:"large"},"注 册"),m.default.createElement(y.Link,{className:"exist-link",href:"/account/login"},"使用已有账户登录")))))))),m.default.createElement(p.Footer,{className:"register-main-footer",companyName:"上海云汐信息科技有限公司",icp:"沪ICP备XXXXXXXX号-X",style:{backgroundColor:"rgba(0, 0, 0, .32)",color:"#333"}}))}}]),t}(d.Component);t.default=w},381:function(e,t){function a(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,a,i){return t+t+a+a+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function i(e,t){return t.indexOf(e)>-1}var n=function(e,t){var n=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:n,w:n.offsetWidth,h:n.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var r=this.pJS;t&&Object.deepExtend(r,t),r.tmp.obj={size_value:r.particles.size.value,size_anim_speed:r.particles.size.anim.speed,move_speed:r.particles.move.speed,line_linked_distance:r.particles.line_linked.distance,line_linked_width:r.particles.line_linked.width,mode_grab_distance:r.interactivity.modes.grab.distance,mode_bubble_distance:r.interactivity.modes.bubble.distance,mode_bubble_size:r.interactivity.modes.bubble.size,mode_repulse_distance:r.interactivity.modes.repulse.distance},r.fn.retinaInit=function(){r.retina_detect&&window.devicePixelRatio>1?(r.canvas.pxratio=window.devicePixelRatio,r.tmp.retina=!0):(r.canvas.pxratio=1,r.tmp.retina=!1),r.canvas.w=r.canvas.el.offsetWidth*r.canvas.pxratio,r.canvas.h=r.canvas.el.offsetHeight*r.canvas.pxratio,r.particles.size.value=r.tmp.obj.size_value*r.canvas.pxratio,r.particles.size.anim.speed=r.tmp.obj.size_anim_speed*r.canvas.pxratio,r.particles.move.speed=r.tmp.obj.move_speed*r.canvas.pxratio,r.particles.line_linked.distance=r.tmp.obj.line_linked_distance*r.canvas.pxratio,r.interactivity.modes.grab.distance=r.tmp.obj.mode_grab_distance*r.canvas.pxratio,r.interactivity.modes.bubble.distance=r.tmp.obj.mode_bubble_distance*r.canvas.pxratio,r.particles.line_linked.width=r.tmp.obj.line_linked_width*r.canvas.pxratio,r.interactivity.modes.bubble.size=r.tmp.obj.mode_bubble_size*r.canvas.pxratio,r.interactivity.modes.repulse.distance=r.tmp.obj.mode_repulse_distance*r.canvas.pxratio},r.fn.canvasInit=function(){r.canvas.ctx=r.canvas.el.getContext("2d")},r.fn.canvasSize=function(){r.canvas.el.width=r.canvas.w,r.canvas.el.height=r.canvas.h,r&&r.interactivity.events.resize&&window.addEventListener("resize",function(){r.canvas.w=r.canvas.el.offsetWidth,r.canvas.h=r.canvas.el.offsetHeight,r.tmp.retina&&(r.canvas.w*=r.canvas.pxratio,r.canvas.h*=r.canvas.pxratio),r.canvas.el.width=r.canvas.w,r.canvas.el.height=r.canvas.h,r.particles.move.enable||(r.fn.particlesEmpty(),r.fn.particlesCreate(),r.fn.particlesDraw(),r.fn.vendors.densityAutoParticles()),r.fn.vendors.densityAutoParticles()})},r.fn.canvasPaint=function(){r.canvas.ctx.fillRect(0,0,r.canvas.w,r.canvas.h)},r.fn.canvasClear=function(){r.canvas.ctx.clearRect(0,0,r.canvas.w,r.canvas.h)},r.fn.particle=function(e,t,i){if(this.radius=(r.particles.size.random?Math.random():1)*r.particles.size.value,r.particles.size.anim.enable&&(this.size_status=!1,this.vs=r.particles.size.anim.speed/100,r.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=i?i.x:Math.random()*r.canvas.w,this.y=i?i.y:Math.random()*r.canvas.h,this.x>r.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>r.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),r.particles.move.bounce&&r.fn.vendors.checkOverlap(this,i),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var n=e.value[Math.floor(Math.random()*r.particles.color.value.length)];this.color.rgb=a(n)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=a(this.color.value));this.opacity=(r.particles.opacity.random?Math.random():1)*r.particles.opacity.value,r.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=r.particles.opacity.anim.speed/100,r.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var s={};switch(r.particles.move.direction){case"top":s={x:0,y:-1};break;case"top-right":s={x:.5,y:-.5};break;case"right":s={x:1,y:-0};break;case"bottom-right":s={x:.5,y:.5};break;case"bottom":s={x:0,y:1};break;case"bottom-left":s={x:-.5,y:1};break;case"left":s={x:-1,y:0};break;case"top-left":s={x:-.5,y:-.5};break;default:s={x:0,y:0}}r.particles.move.straight?(this.vx=s.x,this.vy=s.y,r.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=s.x+Math.random()-.5,this.vy=s.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var o=r.particles.shape.type;if("object"==typeof o){if(o instanceof Array){var c=o[Math.floor(Math.random()*o.length)];this.shape=c}}else this.shape=o;if("image"==this.shape){var l=r.particles.shape;this.img={src:l.image.src,ratio:l.image.width/l.image.height},this.img.ratio||(this.img.ratio=1),"svg"==r.tmp.img_type&&void 0!=r.tmp.source_svg&&(r.fn.vendors.createSvgImg(this),r.tmp.pushing&&(this.img.loaded=!1))}},r.fn.particle.prototype.draw=function(){var e=this;if(void 0!=e.radius_bubble)var t=e.radius_bubble;else t=e.radius;if(void 0!=e.opacity_bubble)var a=e.opacity_bubble;else a=e.opacity;if(e.color.rgb)var i="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")";else i="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")";switch(r.canvas.ctx.fillStyle=i,r.canvas.ctx.beginPath(),e.shape){case"circle":r.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":r.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":r.fn.vendors.drawShape(r.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":r.fn.vendors.drawShape(r.canvas.ctx,e.x-t/(r.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(r.particles.shape.polygon.nb_sides/3),r.particles.shape.polygon.nb_sides,1);break;case"star":r.fn.vendors.drawShape(r.canvas.ctx,e.x-2*t/(r.particles.shape.polygon.nb_sides/4),e.y-t/1.52,2*t*2.66/(r.particles.shape.polygon.nb_sides/3),r.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==r.tmp.img_type)var n=e.img.obj;else n=r.tmp.img_obj;n&&r.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}r.canvas.ctx.closePath(),r.particles.shape.stroke.width>0&&(r.canvas.ctx.strokeStyle=r.particles.shape.stroke.color,r.canvas.ctx.lineWidth=r.particles.shape.stroke.width,r.canvas.ctx.stroke()),r.canvas.ctx.fill()},r.fn.particlesCreate=function(){for(var e=0;e<r.particles.number.value;e++)r.particles.array.push(new r.fn.particle(r.particles.color,r.particles.opacity.value))},r.fn.particlesUpdate=function(){for(var e=0;e<r.particles.array.length;e++){var t=r.particles.array[e];if(r.particles.move.enable){var a=r.particles.move.speed/2;t.x+=t.vx*a,t.y+=t.vy*a}if(r.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=r.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=r.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),r.particles.size.anim.enable&&(1==t.size_status?(t.radius>=r.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=r.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==r.particles.move.out_mode)var n={x_left:t.radius,x_right:r.canvas.w,y_top:t.radius,y_bottom:r.canvas.h};else n={x_left:-t.radius,x_right:r.canvas.w+t.radius,y_top:-t.radius,y_bottom:r.canvas.h+t.radius};switch(t.x-t.radius>r.canvas.w?(t.x=n.x_left,t.y=Math.random()*r.canvas.h):t.x+t.radius<0&&(t.x=n.x_right,t.y=Math.random()*r.canvas.h),t.y-t.radius>r.canvas.h?(t.y=n.y_top,t.x=Math.random()*r.canvas.w):t.y+t.radius<0&&(t.y=n.y_bottom,t.x=Math.random()*r.canvas.w),r.particles.move.out_mode){case"bounce":t.x+t.radius>r.canvas.w?t.vx=-t.vx:t.x-t.radius<0&&(t.vx=-t.vx),t.y+t.radius>r.canvas.h?t.vy=-t.vy:t.y-t.radius<0&&(t.vy=-t.vy)}if(i("grab",r.interactivity.events.onhover.mode)&&r.fn.modes.grabParticle(t),(i("bubble",r.interactivity.events.onhover.mode)||i("bubble",r.interactivity.events.onclick.mode))&&r.fn.modes.bubbleParticle(t),(i("repulse",r.interactivity.events.onhover.mode)||i("repulse",r.interactivity.events.onclick.mode))&&r.fn.modes.repulseParticle(t),r.particles.line_linked.enable||r.particles.move.attract.enable)for(var s=e+1;s<r.particles.array.length;s++){var o=r.particles.array[s];r.particles.line_linked.enable&&r.fn.interact.linkParticles(t,o),r.particles.move.attract.enable&&r.fn.interact.attractParticles(t,o),r.particles.move.bounce&&r.fn.interact.bounceParticles(t,o)}}},r.fn.particlesDraw=function(){r.canvas.ctx.clearRect(0,0,r.canvas.w,r.canvas.h),r.fn.particlesUpdate();for(var e=0;e<r.particles.array.length;e++){r.particles.array[e].draw()}},r.fn.particlesEmpty=function(){r.particles.array=[]},r.fn.particlesRefresh=function(){cancelRequestAnimFrame(r.fn.checkAnimFrame),cancelRequestAnimFrame(r.fn.drawAnimFrame),r.tmp.source_svg=void 0,r.tmp.img_obj=void 0,r.tmp.count_svg=0,r.fn.particlesEmpty(),r.fn.canvasClear(),r.fn.vendors.start()},r.fn.interact.linkParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i);if(n<=r.particles.line_linked.distance){var s=r.particles.line_linked.opacity-n/(1/r.particles.line_linked.opacity)/r.particles.line_linked.distance;if(s>0){var o=r.particles.line_linked.color_rgb_line;r.canvas.ctx.strokeStyle="rgba("+o.r+","+o.g+","+o.b+","+s+")",r.canvas.ctx.lineWidth=r.particles.line_linked.width,r.canvas.ctx.beginPath(),r.canvas.ctx.moveTo(e.x,e.y),r.canvas.ctx.lineTo(t.x,t.y),r.canvas.ctx.stroke(),r.canvas.ctx.closePath()}}},r.fn.interact.attractParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;if(Math.sqrt(a*a+i*i)<=r.particles.line_linked.distance){var n=a/(1e3*r.particles.move.attract.rotateX),s=i/(1e3*r.particles.move.attract.rotateY);e.vx-=n,e.vy-=s,t.vx+=n,t.vy+=s}},r.fn.interact.bounceParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;Math.sqrt(a*a+i*i)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},r.fn.modes.pushParticles=function(e,t){r.tmp.pushing=!0;for(var a=0;a<e;a++)r.particles.array.push(new r.fn.particle(r.particles.color,r.particles.opacity.value,{x:t?t.pos_x:Math.random()*r.canvas.w,y:t?t.pos_y:Math.random()*r.canvas.h})),a==e-1&&(r.particles.move.enable||r.fn.particlesDraw(),r.tmp.pushing=!1)},r.fn.modes.removeParticles=function(e){r.particles.array.splice(0,e),r.particles.move.enable||r.fn.particlesDraw()},r.fn.modes.bubbleParticle=function(e){function t(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function a(t,a,i,n,s){if(t!=a)if(r.tmp.bubble_duration_end){if(void 0!=i){c=t+(t-(n-m*(n-t)/r.interactivity.modes.bubble.duration)),"size"==s&&(e.radius_bubble=c),"opacity"==s&&(e.opacity_bubble=c)}}else if(d<=r.interactivity.modes.bubble.distance){if(void 0!=i)var o=i;else o=n;if(o!=t){var c=n-m*(n-t)/r.interactivity.modes.bubble.duration;"size"==s&&(e.radius_bubble=c),"opacity"==s&&(e.opacity_bubble=c)}}else"size"==s&&(e.radius_bubble=void 0),"opacity"==s&&(e.opacity_bubble=void 0)}if(r.interactivity.events.onhover.enable&&i("bubble",r.interactivity.events.onhover.mode)){var n=e.x-r.interactivity.mouse.pos_x,s=e.y-r.interactivity.mouse.pos_y,o=1-(d=Math.sqrt(n*n+s*s))/r.interactivity.modes.bubble.distance;if(d<=r.interactivity.modes.bubble.distance){if(o>=0&&"mousemove"==r.interactivity.status){if(r.interactivity.modes.bubble.size!=r.particles.size.value)if(r.interactivity.modes.bubble.size>r.particles.size.value){(l=e.radius+r.interactivity.modes.bubble.size*o)>=0&&(e.radius_bubble=l)}else{var c=e.radius-r.interactivity.modes.bubble.size,l=e.radius-c*o;e.radius_bubble=l>0?l:0}if(r.interactivity.modes.bubble.opacity!=r.particles.opacity.value)if(r.interactivity.modes.bubble.opacity>r.particles.opacity.value){(u=r.interactivity.modes.bubble.opacity*o)>e.opacity&&u<=r.interactivity.modes.bubble.opacity&&(e.opacity_bubble=u)}else{var u;(u=e.opacity-(r.particles.opacity.value-r.interactivity.modes.bubble.opacity)*o)<e.opacity&&u>=r.interactivity.modes.bubble.opacity&&(e.opacity_bubble=u)}}}else t();"mouseleave"==r.interactivity.status&&t()}else if(r.interactivity.events.onclick.enable&&i("bubble",r.interactivity.events.onclick.mode)){if(r.tmp.bubble_clicking){n=e.x-r.interactivity.mouse.click_pos_x,s=e.y-r.interactivity.mouse.click_pos_y;var d=Math.sqrt(n*n+s*s),m=((new Date).getTime()-r.interactivity.mouse.click_time)/1e3;m>r.interactivity.modes.bubble.duration&&(r.tmp.bubble_duration_end=!0),m>2*r.interactivity.modes.bubble.duration&&(r.tmp.bubble_clicking=!1,r.tmp.bubble_duration_end=!1)}r.tmp.bubble_clicking&&(a(r.interactivity.modes.bubble.size,r.particles.size.value,e.radius_bubble,e.radius,"size"),a(r.interactivity.modes.bubble.opacity,r.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},r.fn.modes.repulseParticle=function(e){if(r.interactivity.events.onhover.enable&&i("repulse",r.interactivity.events.onhover.mode)&&"mousemove"==r.interactivity.status){var t=e.x-r.interactivity.mouse.pos_x,a=e.y-r.interactivity.mouse.pos_y,n=Math.sqrt(t*t+a*a),s=t/n,o=a/n,c=function(e,t,a){return Math.min(Math.max(e,t),a)}(1/(u=r.interactivity.modes.repulse.distance)*(-1*Math.pow(n/u,2)+1)*u*100,0,50),l={x:e.x+s*c,y:e.y+o*c};"bounce"==r.particles.move.out_mode?(l.x-e.radius>0&&l.x+e.radius<r.canvas.w&&(e.x=l.x),l.y-e.radius>0&&l.y+e.radius<r.canvas.h&&(e.y=l.y)):(e.x=l.x,e.y=l.y)}else if(r.interactivity.events.onclick.enable&&i("repulse",r.interactivity.events.onclick.mode))if(r.tmp.repulse_finish||(r.tmp.repulse_count++,r.tmp.repulse_count==r.particles.array.length&&(r.tmp.repulse_finish=!0)),r.tmp.repulse_clicking){var u=Math.pow(r.interactivity.modes.repulse.distance/6,3),d=r.interactivity.mouse.click_pos_x-e.x,m=r.interactivity.mouse.click_pos_y-e.y,v=d*d+m*m,p=-u/v*1;v<=u&&function(){var t=Math.atan2(m,d);if(e.vx=p*Math.cos(t),e.vy=p*Math.sin(t),"bounce"==r.particles.move.out_mode){var a=e.x+e.vx,i=e.y+e.vy;a+e.radius>r.canvas.w?e.vx=-e.vx:a-e.radius<0&&(e.vx=-e.vx),i+e.radius>r.canvas.h?e.vy=-e.vy:i-e.radius<0&&(e.vy=-e.vy)}}()}else 0==r.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},r.fn.modes.grabParticle=function(e){if(r.interactivity.events.onhover.enable&&"mousemove"==r.interactivity.status){var t=e.x-r.interactivity.mouse.pos_x,a=e.y-r.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a);if(i<=r.interactivity.modes.grab.distance){var n=r.interactivity.modes.grab.line_linked.opacity-i/(1/r.interactivity.modes.grab.line_linked.opacity)/r.interactivity.modes.grab.distance;if(n>0){var s=r.particles.line_linked.color_rgb_line;r.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+n+")",r.canvas.ctx.lineWidth=r.particles.line_linked.width,r.canvas.ctx.beginPath(),r.canvas.ctx.moveTo(e.x,e.y),r.canvas.ctx.lineTo(r.interactivity.mouse.pos_x,r.interactivity.mouse.pos_y),r.canvas.ctx.stroke(),r.canvas.ctx.closePath()}}}},r.fn.vendors.eventsListeners=function(){"window"==r.interactivity.detect_on?r.interactivity.el=window:r.interactivity.el=r.canvas.el,(r.interactivity.events.onhover.enable||r.interactivity.events.onclick.enable)&&(r.interactivity.el.addEventListener("mousemove",function(e){if(r.interactivity.el==window)var t=e.clientX,a=e.clientY;else t=e.offsetX||e.clientX,a=e.offsetY||e.clientY;r.interactivity.mouse.pos_x=t,r.interactivity.mouse.pos_y=a,r.tmp.retina&&(r.interactivity.mouse.pos_x*=r.canvas.pxratio,r.interactivity.mouse.pos_y*=r.canvas.pxratio),r.interactivity.status="mousemove"}),r.interactivity.el.addEventListener("mouseleave",function(e){r.interactivity.mouse.pos_x=null,r.interactivity.mouse.pos_y=null,r.interactivity.status="mouseleave"})),r.interactivity.events.onclick.enable&&r.interactivity.el.addEventListener("click",function(){if(r.interactivity.mouse.click_pos_x=r.interactivity.mouse.pos_x,r.interactivity.mouse.click_pos_y=r.interactivity.mouse.pos_y,r.interactivity.mouse.click_time=(new Date).getTime(),r.interactivity.events.onclick.enable)switch(r.interactivity.events.onclick.mode){case"push":r.particles.move.enable?r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb,r.interactivity.mouse):1==r.interactivity.modes.push.particles_nb?r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb,r.interactivity.mouse):r.interactivity.modes.push.particles_nb>1&&r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb);break;case"remove":r.fn.modes.removeParticles(r.interactivity.modes.remove.particles_nb);break;case"bubble":r.tmp.bubble_clicking=!0;break;case"repulse":r.tmp.repulse_clicking=!0,r.tmp.repulse_count=0,r.tmp.repulse_finish=!1,setTimeout(function(){r.tmp.repulse_clicking=!1},1e3*r.interactivity.modes.repulse.duration)}})},r.fn.vendors.densityAutoParticles=function(){if(r.particles.number.density.enable){var e=r.canvas.el.width*r.canvas.el.height/1e3;r.tmp.retina&&(e/=2*r.canvas.pxratio);var t=e*r.particles.number.value/r.particles.number.density.value_area,a=r.particles.array.length-t;a<0?r.fn.modes.pushParticles(Math.abs(a)):r.fn.modes.removeParticles(a)}},r.fn.vendors.checkOverlap=function(e,t){for(var a=0;a<r.particles.array.length;a++){var i=r.particles.array[a],n=e.x-i.x,s=e.y-i.y;Math.sqrt(n*n+s*s)<=e.radius+i.radius&&(e.x=t?t.x:Math.random()*r.canvas.w,e.y=t?t.y:Math.random()*r.canvas.h,r.fn.vendors.checkOverlap(e))}},r.fn.vendors.createSvgImg=function(e){var t=r.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,function(t,a,i,n){if(e.color.rgb)var r="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else r="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return r}),a=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),i=window.URL||window.webkitURL||window,n=i.createObjectURL(a),s=new Image;s.addEventListener("load",function(){e.img.obj=s,e.img.loaded=!0,i.revokeObjectURL(n),r.tmp.count_svg++}),s.src=n},r.fn.vendors.destroypJS=function(){cancelAnimationFrame(r.fn.drawAnimFrame),n.remove(),pJSDom=null},r.fn.vendors.drawShape=function(e,t,a,i,n,r){var s=n*r,o=n/r,c=180*(o-2)/o,l=Math.PI-Math.PI*c/180;e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0);for(var u=0;u<s;u++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},r.fn.vendors.exportImg=function(){window.open(r.canvas.el.toDataURL("image/png"),"_blank")},r.fn.vendors.loadImg=function(e){if(r.tmp.img_error=void 0,""!=r.particles.shape.image.src)if("svg"==e){var t=new XMLHttpRequest;t.open("GET",r.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(r.tmp.source_svg=e.currentTarget.response,r.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),r.tmp.img_error=!0))},t.send()}else{var a=new Image;a.addEventListener("load",function(){r.tmp.img_obj=a,r.fn.vendors.checkBeforeDraw()}),a.src=r.particles.shape.image.src}else console.log("Error pJS - No image.src"),r.tmp.img_error=!0},r.fn.vendors.draw=function(){"image"==r.particles.shape.type?"svg"==r.tmp.img_type?r.tmp.count_svg>=r.particles.number.value?(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame)):r.tmp.img_error||(r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw)):void 0!=r.tmp.img_obj?(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame)):r.tmp.img_error||(r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw)):(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame))},r.fn.vendors.checkBeforeDraw=function(){"image"==r.particles.shape.type?"svg"==r.tmp.img_type&&void 0==r.tmp.source_svg?r.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(r.tmp.checkAnimFrame),r.tmp.img_error||(r.fn.vendors.init(),r.fn.vendors.draw())):(r.fn.vendors.init(),r.fn.vendors.draw())},r.fn.vendors.init=function(){r.fn.retinaInit(),r.fn.canvasInit(),r.fn.canvasSize(),r.fn.canvasPaint(),r.fn.particlesCreate(),r.fn.vendors.densityAutoParticles(),r.particles.line_linked.color_rgb_line=a(r.particles.line_linked.color)},r.fn.vendors.start=function(){i("image",r.particles.shape.type)?(r.tmp.img_type=r.particles.shape.image.src.substr(r.particles.shape.image.src.length-3),r.fn.vendors.loadImg(r.tmp.img_type)):r.fn.vendors.checkBeforeDraw()},r.fn.vendors.eventsListeners(),r.fn.vendors.start()};Object.deepExtend=function(e,t){for(var a in t)t[a]&&t[a].constructor&&t[a].constructor===Object?(e[a]=e[a]||{},arguments.callee(e[a],t[a])):e[a]=t[a];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(e,t){"string"!=typeof e&&(t=e,e="particles-js"),e||(e="particles-js");var a=document.getElementById(e),i="particles-js-canvas-el",r=a.getElementsByClassName(i);if(r.length)for(;r.length>0;)a.removeChild(r[0]);var s=document.createElement("canvas");s.className=i,s.style.width="100%",s.style.height="100%";null!=document.getElementById(e).appendChild(s)&&pJSDom.push(new n(e,t))},window.particlesJS.load=function(e,t,a){var i=new XMLHttpRequest;i.open("GET",t),i.onreadystatechange=function(t){if(4==i.readyState)if(200==i.status){var n=JSON.parse(t.currentTarget.response);window.particlesJS(e,n),a&&a()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()}},435:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(a(436));t.Footer=i.default,t.default=i.default},436:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,r,s=i(a(11)),o=i(a(9)),c=i(a(12)),l=i(a(8)),u=i(a(2)),d=i(a(3)),m=i(a(4)),v=i(a(5)),p=a(1),f=i(p),h=i(a(6)),b=i(a(7));a(437);var y=(r=n=function(e){function t(){var e,a,i,n;(0,u.default)(this,t);for(var r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];return a=i=(0,m.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(s))),i.renderCommonFooter=function(){var e=i.props,t=e.beginYear,a=e.companyName,n=e.icp,r=(new Date).getFullYear();return t&&(r=t+" - "+r),[f.default.createElement("div",{key:"copyright",className:"hlrui-footer-copyright"},"Copyright © ",r," ",a),f.default.createElement("div",{key:"icp",className:"hlrui-footer-icp"},n)]},n=a,(0,m.default)(i,n)}return(0,v.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,i=(0,c.default)(e,["className","children"]);return delete i.beginYear,delete i.companyName,delete i.icp,f.default.createElement("footer",(0,s.default)({},i,{className:(0,b.default)("hlrui-footer",(0,o.default)({},t,t))}),f.default.createElement("div",{className:"hlrui-footer-wrap"},a||this.renderCommonFooter()))}}]),t}(p.PureComponent),n.propTypes={beginYear:h.default.oneOfType([h.default.string,h.default.number]),companyName:h.default.string.isRequired,icp:h.default.string.isRequired,className:h.default.string},r);t.default=y},437:function(e,t){},438:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Particles=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(a(439));t.Particles=i.default,t.default=i.default},439:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,r,s=i(a(9)),o=i(a(8)),c=i(a(2)),l=i(a(3)),u=i(a(4)),d=i(a(5)),m=a(1),v=i(m),p=i(a(6)),f=i(a(7));a(381),a(440);var h=(r=n=function(e){function t(){return(0,c.default)(this,t),(0,u.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){window.particlesJS("particles-js",{particles:{number:{value:20,density:{enable:!0,value_area:1e3}},color:{value:["#aaa","#57c8f1","#f36b5f","#ffb40d","#7ed320"]},shape:{type:["circle"],stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:16,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:300,color:"#bbb",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children;return v.default.createElement("div",{className:(0,f.default)("hlrui-particles",(0,s.default)({},t,t)),id:"particles-js"},a&&a)}}]),t}(m.PureComponent),n.propTypes={className:p.default.string},r);t.default=h},440:function(e,t){},539:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AuthCode=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(a(540));t.AuthCode=i.default,t.default=i.default},540:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n,r,s,o=i(a(9)),c=i(a(8)),l=i(a(2)),u=i(a(3)),d=i(a(4)),m=i(a(5)),v=i(a(1)),p=i(a(6)),f=i(a(7)),h=i(a(541)),b=a(108),y=i(a(23));a(545);var _=(0,y.default)((s=r=function(e){function t(e){(0,l.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return a.handleClickFetchButton=function(){a.props.onBeforeFetch()&&(a.props.fetchAuthCode().then(function(e){a.setState({isFetching:!1}),a.props.onFetched(e)},function(e){a.setState({isFetching:!1}),a.props.onError(e)}),a.clearCountdownTimer(),a.genCountdownTimer(),a.props.onFetching(),a.setState({isFetching:!0}))},a.clearCountdownTimer=function(){a.setState({remainingSeconds:0}),a.timer&&(window.clearTimeout(a.timer),a.timer=null)},a.genCountdownTimer=function(){var e=function e(){if(a.state.remainingSeconds){var t=a.state.remainingSeconds-1;a.setState({remainingSeconds:t}),a.timer=window.setTimeout(e,1e3)}};a.setState({remainingSeconds:a.props.seconds},function(){return window.setTimeout(e,1e3)})},a.state={isFetching:!1,remainingSeconds:0},a.countdownTimer=null,a.getSizeName=a.getSizeName.bind(a),a}return(0,m.default)(t,e),(0,u.default)(t,[{key:"componentWillUnmount",value:function(){this.clearCountdownTimer()}},{key:"render",value:function(){var e,t=this.state.isFetching,a=this.props,i=a.className,n=a.theme,r=a.size,s=this.getSizeName();return v.default.createElement("div",{className:(0,f.default)("hlrui-authcode",(e={fetching:t},(0,o.default)(e,i,i),(0,o.default)(e,"hlrui-authcode-size-"+s,s),e))},!this.state.remainingSeconds&&v.default.createElement(b.Button,{theme:n,size:r,onClick:(0,h.default)(this.handleClickFetchButton,800)},"获取验证码"),!!this.state.remainingSeconds&&v.default.createElement("div",{className:"hlrui-countdown"},this.state.remainingSeconds,"s"))}}]),t}(v.default.Component),r.propTypes={className:p.default.string,theme:p.default.string,size:p.default.string,seconds:p.default.number,fetchAuthCode:p.default.func.isRequired,onBeforeFetch:p.default.func,onFetching:p.default.func,onFetched:p.default.func,onError:p.default.func},r.defaultProps={theme:"tred",size:"default",seconds:120,onBeforeFetch:function(){return!0},onFetchAuthCode:function(){},onFetched:function(){},onError:function(){alert("获取短信验证码失败")}},n=s))||n;t.default=_},541:function(e,t,a){var i=a(542),n=a(18),r="Expected a function";e.exports=function(e,t,a){var s=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return n(a)&&(s="leading"in a?!!a.leading:s,o="trailing"in a?!!a.trailing:o),i(e,t,{leading:s,maxWait:t,trailing:o})}},542:function(e,t,a){var i=a(18),n=a(543),r=a(544),s="Expected a function",o=Math.max,c=Math.min;e.exports=function(e,t,a){function l(t){var a=p,i=f;return p=f=void 0,g=t,b=e.apply(i,a)}function u(e){var a=e-_;return void 0===_||a>=t||a<0||x&&e-g>=h}function d(){var e=n();if(u(e))return m(e);y=setTimeout(d,function(e){var a=t-(e-_);return x?c(a,h-(e-g)):a}(e))}function m(e){return y=void 0,k&&p?l(e):(p=f=void 0,b)}function v(){var e=n(),a=u(e);if(p=arguments,f=this,_=e,a){if(void 0===y)return function(e){return g=e,y=setTimeout(d,t),w?l(e):b}(_);if(x)return y=setTimeout(d,t),l(_)}return void 0===y&&(y=setTimeout(d,t)),b}var p,f,h,b,y,_,g=0,w=!1,x=!1,k=!0;if("function"!=typeof e)throw new TypeError(s);return t=r(t)||0,i(a)&&(w=!!a.leading,h=(x="maxWait"in a)?o(r(a.maxWait)||0,t):h,k="trailing"in a?!!a.trailing:k),v.cancel=function(){void 0!==y&&clearTimeout(y),g=0,p=_=f=y=void 0},v.flush=function(){return void 0===y?b:m(n())},v}},543:function(e,t,a){var i=a(13);e.exports=function(){return i.Date.now()}},544:function(e,t,a){var i=a(18),n=a(37),r=NaN,s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(n(e))return r;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var a=c.test(e);return a||l.test(e)?u(e.slice(2),a?2:8):o.test(e)?r:+e}},545:function(e,t){},546:function(e,t){}});