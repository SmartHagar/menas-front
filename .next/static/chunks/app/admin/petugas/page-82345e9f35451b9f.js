(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7659],{9651:function(e,a,t){Promise.resolve().then(t.bind(t,8697))},8697:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return Z}});var s=t(7437),r=t(2265),l=t(2230),n=t(3423),d=t(3842),i=t(4660),o=t(4810),u=t(8875),c=t(5967);let h=(0,i.Ue)((0,o.mW)((e,a)=>({dtPetugas:[],setPetugas:async a=>{let{page:t=1,limit:s=10,search:r,sortby:l,order:n}=a;try{let a=await c.Z.getState().setToken(),d=await (0,u.Sj)({method:"get",url:"/petugas",headers:{Authorization:"Bearer ".concat(a)},params:{limit:s,page:t,search:r,sortby:l,order:n}});return e(e=>({...e,dtPetugas:d.data.data})),{status:"berhasil",data:d.data}}catch(e){var d;return{status:"error",error:null===(d=e.response)||void 0===d?void 0:d.data}}},setShowPetugas:async a=>{try{let t=await c.Z.getState().setToken(),s=await (0,u.Sj)({method:"get",url:"/petugas/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({...e,dtPetugas:s.data.data})),{status:"berhasil",data:s.data}}catch(e){var t;return{status:"error",error:null===(t=e.response)||void 0===t?void 0:t.data}}},addData:async a=>{try{let t=await c.Z.getState().setToken(),s=await (0,u.Sj)({method:"post",url:"/petugas",headers:{Authorization:"Bearer ".concat(t)},data:a});return e(e=>({dtPetugas:{last_page:e.dtPetugas.last_page,current_page:e.dtPetugas.current_page,data:[s.data.data,...e.dtPetugas.data]}})),{status:"berhasil tambah",data:s.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await c.Z.getState().setToken(),s=await (0,u.Sj)({method:"delete",url:"/petugas/".concat(a),headers:{Authorization:"Bearer ".concat(t)}});return e(e=>({dtPetugas:{last_page:e.dtPetugas.last_page,current_page:e.dtPetugas.current_page,data:e.dtPetugas.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:s.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(a,t)=>{try{let s=await c.Z.getState().setToken(),r=await (0,u.Sj)({method:"PUT",url:"/petugas/".concat(a),headers:{Authorization:"Bearer ".concat(s)},data:t});return e(e=>({dtPetugas:{last_page:e.dtPetugas.last_page,current_page:e.dtPetugas.current_page,data:e.dtPetugas.data.map(e=>e.id===a?{...e,...r.data.data}:e)}})),{status:"berhasil update",data:r.data}}catch(e){return{status:"error",data:e.response.data}}}})));var g=t(4033),m=t(8963),p=t(4606),x=e=>{var a,t;let[l,n]=(0,r.useState)(!1),[d,i]=(0,r.useState)([]),o=e=>{n(!0),i(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(m.Z,{title:"Akun ".concat(null==d?void 0:d.nm_petugas),showModal:l,setShowModal:n,children:[(0,s.jsxs)("div",{children:["Email: ",null==d?void 0:null===(a=d.user)||void 0===a?void 0:a.email]}),(0,s.jsxs)("div",{children:["Password: ",null==d?void 0:null===(t=d.user)||void 0===t?void 0:t.show_password]})]}),(0,s.jsx)("div",{onClick:()=>o(e.data),className:"cursor-pointer",children:(0,s.jsx)(p.LSF,{})})]})},j=e=>{let{setDelete:a,setEdit:t,search:i}=e,{setPetugas:o,dtPetugas:u}=h(),[c,m]=(0,r.useState)(1),[p,j]=(0,r.useState)(10),[v,b]=(0,r.useState)(!0),f=(0,g.useSearchParams)(),w=f.get("sortby")||"",y=f.get("order")||"",k=async()=>{await o({page:c,limit:p,search:i,sortby:w,order:y}),b(!1)};return(0,r.useEffect)(()=>(k(),()=>{}),[c,p]),(0,r.useEffect)(()=>{m(1),k()},[i,w,y]),(0,s.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:v?(0,s.jsx)(l.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(d.Z,{headTable:["No","Nama Petugas","Jabatan","Aksi"],tableBodies:["nm_petugas","jabatan"],dataTable:u.data,page:c,limit:p,setEdit:t,setDelete:a,ubah:!0,hapus:!0,costume:e=>(0,s.jsx)(x,{data:e})})}),(null==u?void 0:u.last_page)>1&&(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(n.Z,{currentPage:null==u?void 0:u.current_page,totalPages:null==u?void 0:u.last_page,setPage:m})})]})})},v=t(5782),b=t(311),f=t(1865),w=t(5022);t(1240);var y=e=>{let{register:a,errors:t,control:r,dtEdit:l,watch:n,setValue:d,showModal:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.Z,{label:"Nama Petugas",name:"nm_petugas",register:a,required:!0,minLength:2,errors:t.nm_petugas,addClass:"col-span-4"}),(0,s.jsx)(w.u,{label:"Jabatan",defaultOption:"Pilih Jabatan",register:a,errors:t,name:"jabatan",options:[{value:"Penanggung Jawab",label:"Penanggung Jawab"},{value:"Asisten Opotik",label:"Asisten Opotik"}],addClass:"col-span-4 lg:col-span-2"})]})},k=t(8528),P=e=>{let{showModal:a,setShowModal:t,dtEdit:l}=e,{addData:n,updateData:d}=h(),{register:i,handleSubmit:o,setValue:u,control:c,formState:{errors:g},watch:p}=(0,f.cI)(),x=()=>{u("id",""),u("nm_petugas",""),u("jabatan","")};(0,r.useEffect)(()=>{l?(u("id",l.id),u("nm_petugas",l.nm_petugas),u("jabatan",l.jabatan)):x()},[a,l]);let j=async e=>{if(console.log({row:e}),l){let{data:a}=await d(l.id,e);(0,b.Z)({event:a}),t(!1)}else{let{data:a}=await n(e);console.log({data:a}),(0,b.Z)({event:a}),(null==a?void 0:a.type)!=="success"||x()}};return(0,s.jsx)(m.Z,{title:"Form Petugas",showModal:a,setShowModal:t,children:(0,s.jsxs)("form",{onSubmit:o(j),children:[(0,s.jsx)(v.Z,{name:"id",register:i,type:"hidden"}),(0,s.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:(0,s.jsx)(y,{register:i,errors:g,dtEdit:l,control:c,watch:p,setValue:u,showModal:a})}),(0,s.jsx)("div",{children:(0,s.jsx)(k.Z,{onClick:o(j),children:"Simpan"})})]})})},S=t(3015),N=t(5925),_=t(4123),Z=()=>{let{removeData:e}=h(),[a,t]=(0,r.useState)(!1),[l,n]=(0,r.useState)(!1),[d,i]=(0,r.useState)(),[o,u]=(0,r.useState)(),[c,g]=(0,r.useState)(""),m=async a=>{let{id:t,isDelete:s}=a;if(i(t),s){let{data:a}=await e(d);(0,b.Z)({event:a}),n(!1)}else n(!0)};return(0,s.jsxs)("div",{className:"flex flex-col h-full w-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(N.x7,{}),(0,s.jsx)(P,{dtEdit:o,showModal:a,setShowModal:t}),(0,s.jsx)(S.Z,{showDel:l,setShowDel:n,setDelete:m}),(0,s.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,s.jsx)("p",{children:"Silahkan Mengolah data Petugas"}),(0,s.jsx)("div",{children:(0,s.jsx)(k.Z,{onClick:()=>{t(!0),u(null)},children:"Tambah Data"})})]}),(0,s.jsx)(_.Z,{placeholder:"Cari Petugas",onChange:e=>g(e)})]}),(0,s.jsx)(j,{setDelete:m,setEdit:e=>{t(!0),u(e)},search:c})]})}},5782:function(e,a,t){"use strict";var s=t(7437);t(2265),a.Z=e=>{let{label:a,register:t,required:r,name:l,minLength:n,maxLength:d,errors:i,valueAsNumber:o,type:u="text",readOnly:c,placeholder:h,autoComplete:g="on",addClass:m,value:p,defaultValue:x,max:j,min:v,step:b}=e;return(0,s.jsxs)("div",{className:m,children:[(0,s.jsx)("label",{htmlFor:l,className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),r&&(0,s.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("input",{className:"w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary",type:u,id:l,readOnly:c,placeholder:h,autoComplete:g,...t(l,{required:r,minLength:n,maxLength:d,valueAsNumber:o,max:j,min:v,step:b}),defaultValue:x,value:p})}),(null==i?void 0:i.type)==="required"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]}),(null==i?void 0:i.type)==="minLength"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kurang dari ",n," karakter"]}),(null==i?void 0:i.type)==="maxLength"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh lebih dari ",d," karakter"]}),(null==i?void 0:i.type)==="pattern"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," hanya boleh angka."]}),(null==i?void 0:i.type)==="max"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh lebih dari ",j,"."]}),(null==i?void 0:i.type)==="min"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kurang dari ",v,"."]})]})}},5022:function(e,a,t){"use strict";t.d(a,{u:function(){return r}});var s=t(7437);t(2265);let r=e=>{let{label:a,register:t,required:r,name:l,placeholder:n,defaultOption:d,options:i=[],errors:o,addClass:u}=e;return(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:a}),r&&(0,s.jsx)("span",{className:"ml-1 text-red-600",children:"*"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:a,placeholder:n,...t(l,{required:r}),children:[(0,s.jsx)("option",{value:"",children:d}),i.map((e,a)=>(0,s.jsx)("option",{value:e.value,children:e.label},a))]})}),(null==o?void 0:o.type)==="required"&&(0,s.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[a," tidak boleh kosong"]})]})}},1240:function(){}},function(e){e.O(0,[8447,6990,2750,5869,1865,341,2710,2971,2472,1744],function(){return e(e.s=9651)}),_N_E=e.O()}]);