/* empty css                  *//* empty css                   *//* empty css                 */import"./el-form-item.c6f666bf.js";import{f as e,g as a,h as t,j as l,k as s,o,m as r,n,p as i,q as c,s as u,t as d,u as v,v as f,w as m,x as h,y as p,z as g,A as w,B as y,C,D as x,F as E,G as b,H as k,I as T,J as I}from"./vendor.cc5c9397.js";const S=Math.PI;function V(e,a){return e+a}function _(e){return e*e}function M(e,a,t,l,s,o){e.beginPath(),e.moveTo(a,t),e.arc(a+l/2,t-s+2,s,.72*S,2.26*S),e.lineTo(a+l,t),e.arc(a+l+s-2,t+l/2,s,1.21*S,2.78*S),e.lineTo(a+l,t+l),e.lineTo(a,t+l),e.arc(a+s-2,t+l/2,s+.4,2.76*S,1.24*S,!0),e.lineTo(a,t),e.lineWidth=2,e.fillStyle="rgba(255, 255, 255, 0.7)",e.strokeStyle="rgba(255, 255, 255, 0.7)",e.stroke(),e[o](),e.globalCompositeOperation="destination-over"}function D(e,a){return Math.round(Math.random()*(a-e)+e)}function A(e){const a=e.length;return a>0?e[D(0,a-1)]:"https://picsum.photos/300/150/?image="+D(0,1084)}var F=(e,a)=>{const t=e.__vccOpts||e;for(const[l,s]of a)t[l]=s;return t};const B=e({name:"SlideVerify",props:{l:{type:Number,default:42},r:{type:Number,default:10},w:{type:Number,default:310},h:{type:Number,default:155},sliderText:{type:String,default:"Slide filled right"},accuracy:{type:Number,default:5},show:{type:Boolean,default:!0},imgs:{type:Array,default:()=>[]},interval:{type:Number,default:50}},emits:["success","again","fail","refresh"],setup(e,{emit:o}){const{imgs:r,l:n,r:i,w:c,h:u,accuracy:d,interval:v}=e,f=a(!0),m=a(0),h=a(0),p=t({containerActive:!1,containerSuccess:!1,containerFail:!1}),g=t({iconCls:"arrow-right",width:"0",left:"0"}),w=a(),y=a(),C=a(),x=a();let E;const{success:b,start:k,move:T,end:I,verify:S}=function(){const e=t({x:0,y:0}),l=a(!1),s=a(!1),o=a(0),r=a([]);return{origin:e,success:l,isMouseDown:s,timestamp:o,trail:r,start:a=>{l.value||(a instanceof MouseEvent?(e.x=a.clientX,e.y=a.clientY):(e.x=a.changedTouches[0].pageX,e.y=a.changedTouches[0].pageY),s.value=!0,o.value=Date.now())},move:(a,t,l)=>{if(!s.value)return!1;let o=0,n=0;if(t instanceof MouseEvent?(o=t.clientX-e.x,n=t.clientY-e.y):(o=t.changedTouches[0].pageX-e.x,n=t.changedTouches[0].pageY-e.y),o<0||o+38>=a)return!1;l(o),r.value.push(n)},end:(a,t)=>!!s.value&&(s.value=!1,(a instanceof MouseEvent?a.clientX:a.changedTouches[0].pageX)!==e.x&&(o.value=Date.now()-o.value,void t(o.value))),verify:(e,a,t)=>{const l=r.value,s=l.reduce(V)/l.length,o=l.map((e=>e-s)),n=Math.sqrt(o.map(_).reduce(V)/l.length),i=parseInt(e);return t=t<=1?1:t>10?10:t,{spliced:Math.abs(i-a)<=t,TuringTest:s!==n}}}}(),F=()=>{var e,a;b.value=!1,p.containerActive=!1,p.containerSuccess=!1,p.containerFail=!1,g.iconCls="arrow-right",g.left="0",g.width="0",w.value.style.left="0",null==(e=x.value)||e.clearRect(0,0,c,u),null==(a=y.value)||a.clearRect(0,0,c,u),w.value.width=c,E.src=A(r)};function B(e){g.left=e+"px";let a=(c-40-20)/(c-40)*e;w.value.style.left=a+"px",p.containerActive=!0,g.width=e+"px"}function P(e){const{spliced:a,TuringTest:t}=S(w.value.style.left,m.value,d);if(a){if(-1===d)return p.containerSuccess=!0,g.iconCls="success",b.value=!0,void o("success",e);t?(p.containerSuccess=!0,g.iconCls="success",b.value=!0,o("success",e)):(p.containerFail=!0,g.iconCls="fail",o("again"))}else p.containerFail=!0,g.iconCls="fail",o("fail"),setTimeout((()=>{F()}),1e3)}const $=function(e,a,t={leading:!0,trailing:!0}){const{leading:l,trailing:s,resultCallback:o}=t;let r=0,n=null;const i=function(...t){return new Promise(((i,c)=>{const u=(new Date).getTime();r||l||(r=u);const d=a-(u-r);if(d<=0){n&&(clearTimeout(n),n=null);const a=e.apply(this,t);return o&&o(a),i(a),void(r=u)}s&&!n&&(n=setTimeout((()=>{n=null,r=l?(new Date).getTime():0;const a=e.apply(this,t);o&&o(a),i(a)}),d))}))};return i.cancel=function(){n&&clearTimeout(n),n=null,r=0},i}((e=>{T(c,e,B)}),v),j=e=>{I(e,P)};return l((()=>{var e,a;const t=null==(e=C.value)?void 0:e.getContext("2d"),l=null==(a=w.value)?void 0:a.getContext("2d");x.value=t,y.value=l,E=function(e,a){const t=document.createElement("img");return t.crossOrigin="Anonymous",t.onload=a,t.onerror=()=>{t.src=A(e)},t.src=A(e),t}(r,(()=>{f.value=!1;const e=n+2*i+3;if(m.value=D(e+10,c-(e+10)),h.value=D(10+2*i,u-(e+10)),t&&l){M(t,m.value,h.value,n,i,"fill"),M(l,m.value,h.value,n,i,"clip"),t.drawImage(E,0,0,c,u),l.drawImage(E,0,0,c,u);const a=h.value-2*i-1,s=l.getImageData(m.value,a,e,e);w.value.width=e,l.putImageData(s,0,a)}})),document.addEventListener("mousemove",$),document.addEventListener("mouseup",j)})),s((()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",j)})),{block:w,canvas:C,loadBlock:f,containerCls:p,sliderBox:g,refresh:()=>{F(),o("refresh")},sliderDown:k,touchStartEvent:k,touchMoveEvent:$,touchEndEvent:j}}}),P=["width","height"],$=[(e=>(v("data-v-f61c42f2"),e=e(),f(),e))((()=>n("i",{class:"iconfont icon-refresh"},null,-1)))],j=["width","height"],L={class:"slide-verify-slider-text"};var N=F(B,[["render",function(e,a,t,l,s,v){return o(),r("div",{id:"slideVerify",class:"slide-verify",style:u({width:e.w+"px"}),onselectstart:"return false;"},[n("div",{class:i({"slider-verify-loading":e.loadBlock})},null,2),n("canvas",{ref:"canvas",width:e.w,height:e.h},null,8,P),e.show?(o(),r("div",{key:0,class:"slide-verify-refresh-icon",onClick:a[0]||(a[0]=(...a)=>e.refresh&&e.refresh(...a))},$)):c("",!0),n("canvas",{ref:"block",width:e.w,height:e.h,class:"slide-verify-block"},null,8,j),n("div",{class:i(["slide-verify-slider",{"container-active":e.containerCls.containerActive,"container-success":e.containerCls.containerSuccess,"container-fail":e.containerCls.containerFail}])},[n("div",{class:"slide-verify-slider-mask",style:u({width:e.sliderBox.width})},[n("div",{class:"slide-verify-slider-mask-item",style:u({left:e.sliderBox.left}),onMousedown:a[1]||(a[1]=(...a)=>e.sliderDown&&e.sliderDown(...a)),onTouchstart:a[2]||(a[2]=(...a)=>e.touchStartEvent&&e.touchStartEvent(...a)),onTouchmove:a[3]||(a[3]=(...a)=>e.touchMoveEvent&&e.touchMoveEvent(...a)),onTouchend:a[4]||(a[4]=(...a)=>e.touchEndEvent&&e.touchEndEvent(...a))},[n("i",{class:i(["slide-verify-slider-mask-item-icon","iconfont",`icon-${e.sliderBox.iconCls}`])},null,2)],36)],4),n("span",L,d(e.sliderText),1)],2)],4)}],["__scopeId","data-v-f61c42f2"]]);const X={class:"login-container",id:"register"},R=n("h3",{class:"login_title"},"后台管理系统--注册",-1),U=k("注册"),Y={class:"p"},O=k("已有账号，"),q={class:"valid-msg"};var z=e({name:"Register",setup(e){const{proxy:s}=m(),i=h(),c=a(!1),u=a(""),v=a(),f=a([]),S=()=>{var e;u.value="检测到非人为操作的哦！",null==(e=v.value)||e.refresh()},V=e=>{u.value=`验证成功, 耗时${(e/1e3).toFixed(1)}s`,c.value=!1,P();let a=setInterval((()=>{var e;null==(e=v.value)||e.refresh(),clearInterval(a)}),1e3)},_=()=>{u.value="验证失败，请重试"},M=()=>{u.value=""};l((()=>{(()=>{for(let e=1;e<=10;e++)f.value.push("src/assets/images/verifyImgs/"+e+".jpg")})()}));const D=a(),A=t({password:"",checkPass:"",email:"",validCode:""}),F=t({text:"发送验证码",isSend:!1,codeId:""}),B=t({password:[{validator:(e,a,t)=>{if(""===a)t(new Error("密码不能为空"));else{/^[A-Za-z]\w{5,15}$/.test(a)?t():t(new Error("密码支持字母数字下划线且首字母必须为字母(6~16位)"))}},trigger:"blur"}],checkPass:[{validator:(e,a,t)=>{""===a?t(new Error("请再次输入密码")):a!==A.password?t(new Error("两次密码不一致!")):t()},trigger:"blur"}],email:[{validator:(e,a,t)=>{if(""===a)t(new Error("邮箱不能为空"));else{/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(a)?t():t(new Error("邮箱格式不正确"))}},trigger:"blur"}],validCode:[{validator:(e,a,t)=>{if(""===a)t(new Error("验证码不能为空"));else{/^\d{6}$/.test(a)?t():t(new Error("输入6位数字验证码"))}},trigger:"blur"}]}),P=()=>{let e=120;s.$axios.post("/sendEmail",{email:A.email}).then((a=>{if(1010==a.data.status){F.codeId=a.data.data.codeId,F.text=e+"s后重新发送",F.isSend=!0;let t=setInterval((()=>{0==e?(clearInterval(t),t=null,F.text="发送验证码",F.isSend=!1):(e--,F.text=e+"s后重新发送")}),1e3);I({showClose:!0,message:a.data.msg,type:"success"})}else I({showClose:!0,message:a.data.msg,type:"error"})})).catch((e=>{console.log("error",e)}))};return(e,a)=>{const t=p,l=g,m=w,h=y,P=C;return o(),r(b,null,[n("div",X,[x(h,{class:"login-form",ref_key:"ruleFormRef",ref:D,model:A,"status-icon":"",rules:B},{default:E((()=>[R,x(l,{prop:"email"},{default:E((()=>[x(t,{placeholder:"邮箱",modelValue:A.email,"onUpdate:modelValue":a[0]||(a[0]=e=>A.email=e)},null,8,["modelValue"])])),_:1}),x(l,{prop:"password"},{default:E((()=>[x(t,{type:"password",autocomplete:"off",placeholder:"密码",modelValue:A.password,"onUpdate:modelValue":a[1]||(a[1]=e=>A.password=e)},null,8,["modelValue"])])),_:1}),x(l,{prop:"checkPass"},{default:E((()=>[x(t,{type:"password",autocomplete:"off",placeholder:"确认密码",modelValue:A.checkPass,"onUpdate:modelValue":a[2]||(a[2]=e=>A.checkPass=e)},null,8,["modelValue"])])),_:1}),x(l,{prop:"validCode",class:"validCode"},{default:E((()=>[x(t,{placeholder:"验证码",modelValue:A.validCode,"onUpdate:modelValue":a[3]||(a[3]=e=>A.validCode=e),maxlength:6},null,8,["modelValue"]),x(m,{disabled:F.isSend,onClick:a[4]||(a[4]=e=>{/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(A.email)?(u.value="",c.value=!0):I({showClose:!0,message:"邮箱格式不正确",type:"error"})})},{default:E((()=>[k(d(F.text),1)])),_:1},8,["disabled"])])),_:1}),x(l,{class:"submit"},{default:E((()=>[x(m,{type:"primary",onClick:a[5]||(a[5]=e=>{var a;(a=D.value)&&a.validate((e=>{if(e){if(""==F.codeId)return void I({showClose:!0,message:"请发送验证码",type:"error"});s.$axios.post("/register",{email:A.email,password:A.password,validCode:A.validCode,codeId:F.codeId}).then((e=>{1e3===e.data.status?(I({showClose:!0,message:e.data.msg,type:"success"}),i.push({name:"Login"})):(I({showClose:!0,message:e.data.msg,type:"error"}),A.validCode="")})).catch((e=>{A.validCode="",console.log("error",e)}))}}))})},{default:E((()=>[U])),_:1})])),_:1}),x(l,{class:"res"},{default:E((()=>[n("div",Y,[O,n("span",{onClick:a[6]||(a[6]=e=>{i.push({name:"Login"})})},"去登录>>")])])),_:1})])),_:1},8,["model","rules"])]),x(P,{modelValue:c.value,"onUpdate:modelValue":a[7]||(a[7]=e=>c.value=e),width:"350px","close-delay":500},{default:E((()=>[x(T(N),{ref_key:"block",ref:v,imgs:T(f),"slider-text":"向右滑动->",accuracy:3,onAgain:S,onSuccess:V,onFail:_,onRefresh:M},null,8,["imgs"]),n("div",q,d(u.value),1)])),_:1},8,["modelValue"])],64)}}});export{z as default};
