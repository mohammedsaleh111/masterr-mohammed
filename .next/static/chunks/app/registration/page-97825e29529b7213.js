(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{4267:function(e,a,l){Promise.resolve().then(l.bind(l,6629))},6629:function(e,a,l){"use strict";l.r(a);var r=l(7437),t=l(2265),n=l(8131),s=l(5978),o=l(4752),i=l(2926),d=l(6576),u=l.n(d);l(4074),a.default=()=>{let[e,a]=(0,t.useState)({goal:"",age:"",gender:"",activityLevel:"",userPhone:"",bloodType:"",medicalHistory:""}),[l,d]=(0,t.useState)(null),[c,m]=(0,t.useState)("تواصل الان");(0,t.useEffect)(()=>{let e=(0,o.Aj)(n.I8,e=>{e?d({uid:e.uid,displayName:e.displayName,email:e.email,photoURL:e.photoURL}):d(null)});return()=>e()},[]);let p=l=>{let{name:r,value:t}=l.target;a({...e,[r]:t})},h=async()=>{try{let a={userName:null==l?void 0:l.displayName,userEmail:null==l?void 0:l.email,userPhone:e.userPhone,goal:e.goal,age:e.age,gender:e.gender,activityLevel:e.activityLevel,bloodType:e.bloodType,medicalHistory:e.medicalHistory};await i.ZP.send("service_3kz71eb","template_2fafnpo",a,"XNb6U8l6Pb57-H3K9"),alert("تم إرسال طلب التواصل بنجاح!")}catch(e){console.error("خطأ أثناء إرسال البريد الإلكتروني:",e)}},b=async()=>{try{if(!l){alert("يرجى تسجيل الدخول أولاً.");return}m("جاري ارسال البيانات...");let a=(0,s.JU)(n.db,"users",l.uid);(await (0,s.QT)(a)).exists()||await (0,s.pl)(a,{userId:null==l?void 0:l.uid,name:l.displayName,image:l.photoURL,email:l.email,userPhone:e.userPhone,age:e.age,gender:e.gender,activityLevel:e.activityLevel,goal:e.goal,bloodType:e.bloodType,medicalHistory:e.medicalHistory,isSeen:!1,sendDataAt:new Date().toISOString()}),await h(),alert("تم التواصل بنجاح! سيتم التواصل معك في خلال 48 ساعة من قبل إدارة الموقع علي رقم الواتساب لبدء التدريب."),window.location.href="/"}catch(e){console.error("خطأ أثناء حفظ بيانات التمرين:",e),alert("حدث خطأ. حاول مرة أخرى.")}};return(0,r.jsx)("div",{className:"p-8 bg-gray-100 min-h-screen text-right",children:(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto",children:[(0,r.jsx)("h2",{className:"text-2xl font-semibold text-center mb-4",children:"تسجيل شراء تمرين"}),(0,r.jsxs)("p",{className:"text-gray-700",children:["الاسم: ",(null==l?void 0:l.displayName)||"لم يتم تسجيل الدخول"]}),(0,r.jsxs)("p",{className:"text-gray-700",children:["البريد الإلكتروني: ",(null==l?void 0:l.email)||"لم يتم تسجيل الدخول"]}),(0,r.jsxs)("form",{className:"flex flex-col",onSubmit:e=>{e.preventDefault(),b()},children:[(0,r.jsx)("label",{className:"mt-4",children:": أهدافك من ممارسة التشي كونغ"}),(0,r.jsx)("input",{type:"text",name:"goal",value:e.goal,onChange:p,required:!0,className:"border border-gray-300 p-2 rounded-md"}),(0,r.jsx)("label",{className:"mt-4",children:": العمر"}),(0,r.jsx)("input",{type:"number",name:"age",value:e.age,onChange:p,required:!0,className:"border border-gray-300 p-2 rounded-md"}),(0,r.jsx)("label",{className:"mt-4",children:": الجنس"}),(0,r.jsxs)("select",{name:"gender",value:e.gender,onChange:p,required:!0,className:"border border-gray-300 p-2 rounded-md",children:[(0,r.jsx)("option",{value:"",children:"اختر"}),(0,r.jsx)("option",{value:"male",children:"ذكر"}),(0,r.jsx)("option",{value:"female",children:"أنثى"})]}),(0,r.jsx)("label",{className:"mt-4",children:": مستوى النشاط"}),(0,r.jsxs)("select",{name:"activityLevel",value:e.activityLevel,onChange:p,required:!0,className:"border border-gray-300 p-2 rounded-md",children:[(0,r.jsx)("option",{value:"",children:"اختر"}),(0,r.jsx)("option",{value:"low",children:"منخفض"}),(0,r.jsx)("option",{value:"moderate",children:"متوسط"}),(0,r.jsx)("option",{value:"high",children:"مرتفع"})]}),(0,r.jsx)("label",{className:"mt-4",children:": فصيلة الدم"}),(0,r.jsxs)("select",{name:"bloodType",value:e.bloodType,onChange:p,required:!0,className:"border border-gray-300 p-2 rounded-md",children:[(0,r.jsx)("option",{value:"",children:"اختر"}),(0,r.jsx)("option",{value:"A",children:"A"}),(0,r.jsx)("option",{value:"B",children:"B"}),(0,r.jsx)("option",{value:"AB",children:"AB"}),(0,r.jsx)("option",{value:"O",children:"O"})]}),(0,r.jsx)("label",{className:"mt-4",children:": التاريخ المرضي"}),(0,r.jsx)("input",{type:"text",name:"medicalHistory",value:e.medicalHistory,onChange:p,required:!0,className:"border border-gray-300 p-2 rounded-md"}),(0,r.jsx)("label",{className:"mt-4",children:": رقم الواتس"}),(0,r.jsx)(u(),{country:"eg",value:e.userPhone,onChange:l=>{a({...e,userPhone:l})},placeholder:"ادخل رقم الواتس بدون رمز البلد",inputProps:{type:"tel",name:"userPhone",required:!0,className:"border border-gray-300 p-2  rounded-md text-black"},enableSearch:!0,disableCountryGuess:!0,disableCountryCode:!0,disableDropdown:!1}),(0,r.jsx)("button",{type:"submit",className:"mt-10 text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6",children:c})]})]})})}},8131:function(e,a,l){"use strict";l.d(a,{I8:function(){return o},Vv:function(){return d},db:function(){return i}});var r=l(738),t=l(4752),n=l(5978);let s=(0,r.ZF)({apiKey:"AIzaSyBorC9kXfGX6zQY4NL7ScXakibEXb7S06g",authDomain:"master-mohammed.firebaseapp.com",projectId:"master-mohammed",storageBucket:"master-mohammed.appspot.com",messagingSenderId:"224950210262",appId:"1:224950210262:web:82916d4b790282528fc377",measurementId:"G-KKWHJP51LM"}),o=(0,t.v0)(s),i=(0,n.ad)(s),d=new t.hJ}},function(e){e.O(0,[826,358,387,434,891,971,117,744],function(){return e(e.s=4267)}),_N_E=e.O()}]);