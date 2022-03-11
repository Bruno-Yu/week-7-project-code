"use strict";(self["webpackChunkweek_7_project"]=self["webpackChunkweek_7_project"]||[]).push([[327],{1586:function(o,e,t){t.d(e,{Z:function(){return S}});var l=t(6252),n=t(3577);const a={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},s={class:"modal-dialog",role:"document"},d={class:"modal-content border-0"},u={class:"modal-header bg-danger text-white"},i={class:"modal-title"},c=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),p={class:"modal-body"},r=(0,l.Uk)(" 是否刪除 "),h={class:"text-danger"},m=(0,l.Uk)(" (刪除後將無法恢復)。 "),b={class:"modal-footer"},_=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function w(o,e,t,w,v,f){return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("div",s,[(0,l._)("div",d,[(0,l._)("div",u,[(0,l._)("h5",i,[(0,l._)("span",null,"刪除 "+(0,n.zw)(v.orderShow.title),1)]),c]),(0,l._)("div",p,[r,(0,l._)("strong",h,(0,n.zw)(v.orderShow.title),1),m]),(0,l._)("div",b,[_,(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...o)=>f.updateModal&&f.updateModal(...o))}," 確認刪除 ")])])])],512)}var v=t(7424),f=t.n(v),y={props:["order"],data(){return{modal:"",orderShow:{}}},watch:{order(){this.orderShow=this.order}},emits:["del-item"],methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()},updateModal(){this.$emit("del-item")}},mounted(){this.modal=new(f())(this.$refs.modal)}},C=t(3744);const g=(0,C.Z)(y,[["render",w]]);var S=g},9327:function(o,e,t){t.r(e),t.d(e,{default:function(){return E}});var l=t(6252),n=t(3577);const a=(0,l._)("h2",{class:"my-5 ms-2 fw-bold text-center"},"優惠券管理頁面",-1),s={class:"text-end mt-4"},d={class:"table mt-4"},u=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"名稱"),(0,l._)("th",null,"折扣百分比"),(0,l._)("th",null,"到期日"),(0,l._)("th",null,"是否啟用"),(0,l._)("th",null,"編輯")])],-1),i={key:0,class:"text-success"},c={key:1,class:"text-muted"},p={class:"btn-group"},r=["onClick"],h=["onClick"];function m(o,e,t,m,b,_){const w=(0,l.up)("CouponDetail"),v=(0,l.up)("OrderDelete");return(0,l.wg)(),(0,l.iD)("div",null,[a,(0,l._)("div",s,[(0,l._)("button",{class:"btn btn-dark",type:"button",onClick:e[0]||(e[0]=o=>_.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,l._)("table",d,[u,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(b.coupons,((o,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("td",null,(0,n.zw)(o.title),1),(0,l._)("td",null,(0,n.zw)(o.percent)+"%",1),(0,l._)("td",null,(0,n.zw)(o.due_date),1),(0,l._)("td",null,[1===o.is_enabled?((0,l.wg)(),(0,l.iD)("span",i,"啟用")):((0,l.wg)(),(0,l.iD)("span",c,"未啟用"))]),(0,l._)("td",null,[(0,l._)("div",p,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>_.openCouponModal(!1,o)}," 編輯 ",8,r),(0,l._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>_.openDelCouponModal(o)}," 刪除 ",8,h)])])])))),128))])]),(0,l.Wm)(w,{coupon:b.couponShow,isNew:b.isNew,ref:"couponDetail",onUpdateCoupon:_.updateCoupon},null,8,["coupon","isNew","onUpdateCoupon"]),(0,l.Wm)(v,{item:b.couponShow,ref:"delModal",onDelItem:_.delCoupon},null,8,["item","onDelItem"])])}var b=t(1586),_=t(9963);const w={class:"modal fade",id:"couponModal",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},v={class:"modal-dialog",role:"document"},f={class:"modal-content"},y={class:"modal-header"},C={class:"modal-title",id:"exampleModalLabel"},g={key:0},S={key:1},M=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),k={class:"modal-body"},D={class:"mb-3"},x=(0,l._)("label",{for:"title"},"標題",-1),$={class:"mb-3"},N=(0,l._)("label",{for:"coupon_code"},"優惠碼",-1),U={class:"mb-3"},z=(0,l._)("label",{for:"due_date"},"到期日",-1),V={class:"mb-3"},Z=(0,l._)("label",{for:"price"},"折扣百分比",-1),L={class:"mb-3"},F={class:"form-check"},T=(0,l._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),j={class:"modal-footer"},I=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1);function O(o,e,t,a,s,d){return(0,l.wg)(),(0,l.iD)("div",w,[(0,l._)("div",v,[(0,l._)("div",f,[(0,l._)("div",y,[(0,l._)("h5",C,[t.isNew?((0,l.wg)(),(0,l.iD)("span",g,"新增優惠卷")):((0,l.wg)(),(0,l.iD)("span",S,"編輯優惠卷"))]),M]),(0,l._)("div",k,[(0,l._)("div",D,[x,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>s.couponShow.title=o),placeholder:"請輸入標題"},null,512),[[_.nr,s.couponShow.title]])]),(0,l._)("div",$,[N,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=o=>s.couponShow.code=o),placeholder:"請輸入優惠碼"},null,512),[[_.nr,s.couponShow.code]])]),(0,l._)("div",U,[z,(0,l.wy)((0,l._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=o=>s.couponShow.dueDate=o)},null,512),[[_.nr,s.couponShow.dueDate]])]),(0,l._)("div",V,[Z,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":e[3]||(e[3]=o=>s.couponShow.percent=o),placeholder:"請輸入折扣百分比"},null,512),[[_.nr,s.couponShow.percent,void 0,{number:!0}]])]),(0,l._)("div",L,[(0,l._)("div",F,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=o=>s.couponShow.is_enabled=o),id:"is_enabled"},null,512),[[_.e8,s.couponShow.is_enabled]]),T])])]),(0,l._)("div",j,[I,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=(...o)=>d.updateCoupon&&d.updateCoupon(...o))},(0,n.zw)(t.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}var W=t(7424),Y=t.n(W),q={props:["coupon","isNew"],data(){return{couponShow:{}}},emits:["update-coupon"],watch:{couponShow(){this.couponShow=this.coupon}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()},updateCoupon(){this.$emit("update-coupon",this.couponShow)}},mounted(){this.modal=new(Y())(document.querySelector("#couponModal"))}},H=t(3744);const K=(0,H.Z)(q,[["render",O]]);var P=K,A={components:{CouponDetail:P,OrderDelete:b.Z},data(){return{coupons:{},couponShow:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{dateTimeFormat(o){const e=new Date(1e3*o),t=e.getFullYear(),l=e.getMonth()+1,n=e.getDate(),a=`${t}/${l}/${n}`;return a},openCouponModal(o,e){this.isNew=o,this.isNew?this.couponShow={due_date:(new Date).getTime()/1e3}:this.couponShow={...e},this.$refs.couponDetail.openModal()},openDelCouponModal(o){this.couponShow={...o},this.$refs.delModal.openModal()},getCoupons(){const o="https://vue3-course-api.hexschool.io/v2//api/brunoyu2022/admin/coupons";this.$http.get(o,this.tempProduct).then((o=>{this.coupons=o.data.coupons.map((o=>({...o,due_date:this.dateTimeFormat(o.due_date)})))})).catch((o=>{alert(o.response,"錯誤訊息")}))},updateCoupon(o){let e="https://vue3-course-api.hexschool.io/v2//api/brunoyu2022/admin/coupon",t="post",l=o;this.isNew||(e=`https://vue3-course-api.hexschool.io/v2//api/brunoyu2022/admin/coupon/${this.couponShow.id}`,t="put",l=this.couponShow),this.$http[t](e,{data:l}).then((o=>{alert(o,"新增優惠券"),this.getCoupons(),this.$refs.couponDetail.closeModal()})).catch((o=>{alert(o.response,"錯誤訊息")}))},delCoupon(){const o=`https://vue3-course-api.hexschool.io/v2//api/brunoyu2022/admin/coupon/${this.couponShow.id}`;this.$http.delete(o).then((o=>{alert(o,"刪除優惠券"),this.$refs.delModal.cloaseModal(),this.getCoupons()})).catch((o=>{this.alert(o.response,"刪除優惠券")}))}},created(){this.getCoupons()}};const B=(0,H.Z)(A,[["render",m]]);var E=B}}]);
//# sourceMappingURL=327.821f171a.js.map