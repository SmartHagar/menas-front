(()=>{var e={};e.id=974,e.ids=[974],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7656:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>h,tree:()=>o});var r=t(7096),s=t(6132),l=t(7284),i=t.n(l),n=t(2564),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(a,d);let o=["",{children:["admin",{children:["obat",{children:["keluar",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,328)),"/media/smarthagar/Assets/Project/NextJS/TA/menas/src/app/admin/obat/keluar/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3637)),"/media/smarthagar/Assets/Project/NextJS/TA/menas/src/app/admin/obat/keluar/layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,1432)),"/media/smarthagar/Assets/Project/NextJS/TA/menas/src/app/admin/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,9113)),"/media/smarthagar/Assets/Project/NextJS/TA/menas/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/media/smarthagar/Assets/Project/NextJS/TA/menas/src/app/admin/obat/keluar/page.tsx"],c="/admin/obat/keluar/page",m={require:t,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/obat/keluar/page",pathname:"/admin/obat/keluar",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},7809:(e,a,t)=>{Promise.resolve().then(t.bind(t,9626)),Promise.resolve().then(t.bind(t,3853)),Promise.resolve().then(t.bind(t,5971))},4143:(e,a,t)=>{Promise.resolve().then(t.bind(t,3652))},9626:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o});var r=t(3854),s=t(7268),l=t(1018),i=t(4218),n=t(8318),d=t(8134);let o=e=>{let[a,t]=(0,i.useState)(!0),o=(0,l.usePathname)(),u=(0,l.useRouter)(),{cekToken:c}=(0,s.Z)(),m=async()=>{let e=await c();if(e?.error)u.push("/login");else{let e=n.Z.get("role");"admin"!==e&&u.push(`/${e}`)}return e};(0,i.useEffect)(()=>(m(),()=>{}),[o]);let h=async()=>{let e=await m();e?.error||t(!1)};if((0,i.useEffect)(()=>(h(),console.log("pertama render"),()=>{}),[]),a)return r.jsx("div",{className:"flex min-h-screen h-screen justify-center items-center",children:r.jsx(d.Z,{})})}},3652:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>O});var r=t(3854),s=t(4218),l=t(8134),i=t(2591),n=t(4210),d=t(4012),o=t(6965),u=t(1820),c=t(7268);let m=(0,d.Ue)((0,o.mW)((e,a)=>({dtObatKeluar:[],setObatKeluar:async({page:a=1,limit:t=10,search:r})=>{try{let s=await c.Z.getState().setToken(),l=await (0,u.Sj)({method:"get",url:"/obatKeluar",headers:{Authorization:`Bearer ${s}`},params:{limit:t,page:a,search:r}});return e(e=>({...e,dtObatKeluar:l.data.data})),{status:"berhasil",data:l.data}}catch(e){return{status:"error",error:e.response?.data}}},setShowObatKeluar:async a=>{try{let t=await c.Z.getState().setToken(),r=await (0,u.Sj)({method:"get",url:`/obatKeluar/${a}`,headers:{Authorization:`Bearer ${t}`}});return e(e=>({...e,dtObatKeluar:r.data.data})),{status:"berhasil",data:r.data}}catch(e){return{status:"error",error:e.response?.data}}},addData:async a=>{try{let t=await c.Z.getState().setToken(),r=await (0,u.Sj)({method:"post",url:"/obatKeluar",headers:{Authorization:`Bearer ${t}`},data:a});return e(e=>({dtObatKeluar:{last_page:e.dtObatKeluar.last_page,current_page:e.dtObatKeluar.current_page,data:[r.data.data,...e.dtObatKeluar.data]}})),{status:"berhasil tambah",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async a=>{try{let t=await c.Z.getState().setToken(),r=await (0,u.Sj)({method:"delete",url:`/obatKeluar/${a}`,headers:{Authorization:`Bearer ${t}`}});return e(e=>({dtObatKeluar:{last_page:e.dtObatKeluar.last_page,current_page:e.dtObatKeluar.current_page,data:e.dtObatKeluar.data.filter(e=>e.id!==a)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(a,t)=>{try{let r=await c.Z.getState().setToken(),s=await (0,u.Sj)({method:"PUT",url:`/obatKeluar/${a}`,headers:{Authorization:`Bearer ${r}`},data:t});return e(e=>({dtObatKeluar:{last_page:e.dtObatKeluar.last_page,current_page:e.dtObatKeluar.current_page,data:e.dtObatKeluar.data.map(e=>e.id===a?{...e,...s.data.data}:e)}})),{status:"berhasil update",data:s.data}}catch(e){return{status:"error",data:e.response.data}}}}))),h=({setDelete:e,setEdit:a,search:t})=>{let{setObatKeluar:d,dtObatKeluar:o}=m(),[u,c]=(0,s.useState)(1),[h,x]=(0,s.useState)(10),[p,b]=(0,s.useState)(!0),g=async()=>{await d({page:u,limit:h,search:t}),b(!1)};return(0,s.useEffect)(()=>(g(),()=>{}),[u,h]),(0,s.useEffect)(()=>{c(1),g()},[t]),r.jsx("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:p?r.jsx(l.Z,{}):(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"",children:r.jsx(n.Z,{headTable:["No","Nama Obat","Jumlah","Layanan","Tgl. Masuk","Aksi"],tableBodies:["obat.nama","jumlah","layanan","tgl_masuk"],dataTable:o.data,page:u,limit:h,setEdit:a,setDelete:e,ubah:!0,hapus:!0})}),o?.last_page>1&&r.jsx("div",{className:"mt-4",children:r.jsx(i.Z,{currentPage:o?.current_page,totalPages:o?.last_page,setPage:c})})]})})};var x=t(9704),p=t(7610),b=t(2478),g=t(2747),j=t(98),f=t(5307),v=t(2855),y=t(8945);t(2094);let w=({register:e,errors:a,control:t,dtEdit:l,watch:i,setValue:n,showModal:d,tgl_keluar:o,setTgl_keluar:u})=>{let{setObatAll:c,dtObat:m}=(0,y.Z)(),h=async({search:e})=>{await c({search:e})};return(0,s.useEffect)(()=>{h({})},[d]),(0,r.jsxs)(r.Fragment,{children:[m?.data&&r.jsx(v.Z,{label:"Obat",placeholder:"Pilih Obat",name:"obat_id",dataDb:m?.data,body:["id","nama"],control:t,required:!0,errors:a.obat_id,addClass:"col-span-3"}),r.jsx(x.Z,{label:"Jumlah",name:"jumlah",register:e,required:!0,type:"number",errors:a.jumlah,addClass:"col-span-1"}),r.jsx(f.u,{label:"Layanan",defaultOption:"Pilih Layanan",register:e,errors:a,name:"layanan",options:[{value:"IFK",label:"IFK"},{value:"BPJS",label:"BPJS"},{value:"Dll",label:"Dll"}],addClass:"col-span-4 lg:col-span-2"}),r.jsx(j.Z,{label:"Tgl. Keluar",name:"tgl_keluar",control:t,startDate:o,setStartDate:u,required:!0,errors:a.tgl_keluar,addClass:"col-span-4 lg:col-span-2"})]})};var k=t(3941);let N=({showModal:e,setShowModal:a,dtEdit:t})=>{let{addData:l,updateData:i}=m(),[n,d]=(0,s.useState)(new Date),{register:o,handleSubmit:u,setValue:c,control:h,formState:{errors:j},watch:f}=(0,g.cI)(),v=()=>{c("id",""),c("obat_id",""),c("jumlah",""),c("tgl_keluar",""),d(""),c("layanan","")};(0,s.useEffect)(()=>{t?(c("id",t.id),c("obat_id",t.obat_id),c("jumlah",t.jumlah),c("tgl_keluar",t.tgl_keluar),d(new Date(t.tgl_keluar)),c("layanan",t.layanan)):v()},[e,t]);let y=async e=>{if(console.log({row:e}),t){let{data:r}=await i(t.id,e);(0,b.Z)({event:r}),a(!1)}else{let{data:a}=await l(e);console.log({data:a}),(0,b.Z)({event:a}),a?.type!=="success"||v()}};return r.jsx(p.Z,{title:"Form ObatKeluar",showModal:e,setShowModal:a,children:(0,r.jsxs)("form",{onSubmit:u(y),children:[r.jsx(x.Z,{name:"id",register:o,type:"hidden"}),r.jsx("div",{className:"grid grid-cols-4 gap-2 mb-4",children:r.jsx(w,{register:o,errors:j,dtEdit:t,control:h,watch:f,setValue:c,showModal:e,tgl_keluar:n,setTgl_keluar:d})}),r.jsx("div",{children:r.jsx(k.Z,{onClick:u(y),children:"Simpan"})})]})})};var _=t(3350),P=t(5256),S=t(1813);let O=()=>{let{removeData:e}=m(),[a,t]=(0,s.useState)(!1),[l,i]=(0,s.useState)(!1),[n,d]=(0,s.useState)(),[o,u]=(0,s.useState)(),[c,x]=(0,s.useState)(""),p=async({id:a,isDelete:t})=>{if(d(a),t){let{data:a}=await e(n);(0,b.Z)({event:a}),i(!1)}else i(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{children:[r.jsx(P.x7,{}),r.jsx(N,{dtEdit:o,showModal:a,setShowModal:t}),r.jsx(_.Z,{showDel:l,setShowDel:i,setDelete:p}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[r.jsx("p",{children:"Silahkan Mengolah data ObatKeluar"}),r.jsx("div",{children:r.jsx(k.Z,{onClick:()=>{t(!0),u(null)},children:"Tambah Data"})})]}),r.jsx(S.Z,{placeholder:"Cari ObatKeluar",onChange:e=>x(e)})]}),r.jsx(h,{setDelete:p,setEdit:e=>{t(!0),u(e)},search:c})]})}},98:(e,a,t)=>{"use strict";t.d(a,{Z:()=>d});var r=t(3854);t(4218);var s=t(2747),l=t(9144),i=t(496),n=t.n(i);let d=({control:e,required:a,name:t,errors:i,addClass:d,label:o,startDate:u,setStartDate:c})=>(0,r.jsxs)("div",{className:d,children:[(0,r.jsxs)("label",{className:"text-sm font-medium text-gray-700 tracking-wide block",children:[o,a&&r.jsx("span",{className:"ml-1 text-red-600",children:"*"})]}),r.jsx(s.Qr,{name:t,control:e,rules:{required:a},render:({field:e})=>r.jsx(l.ZP,{selected:u,onChange:a=>{if(a){c(a);let t=n()(a).format("YYYY-MM-DD");e.onChange(t)}else c(null),e.onChange("")},dateFormat:"dd/MM/yyyy",value:u||"",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",className:"w-full border rounded-lg py-2 px-4"})}),i?.type==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[o," tidak boleh kosong"]})]})},7610:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var r=t(3854);t(4218);var s=t(5745);let l=({showModal:e,setShowModal:a,children:t,title:l,width:i=""})=>r.jsx("div",{className:"",children:e&&r.jsx("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-xl w-[500px] h-min mt-[10%] max-h-[70%] overflow-hidden flex flex-col lg:w-[700px]",style:{width:i},children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.2] mb-4 pb-2",children:[r.jsx("h5",{className:"text-xl font-roboto",children:l}),r.jsx(s.C7Q,{className:"cursor-pointer hover:text-primary",onClick:()=>a(!1)})]}),r.jsx("div",{className:"overflow-auto",children:t})]})})})},3350:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var r=t(3854);t(4218);var s=t(5745);let l=({showDel:e,setShowDel:a,setDelete:t})=>e&&r.jsx("div",{children:r.jsx("div",{className:"fixed inset-0 z-50 mx-auto flex justify-center bg-black/[0.2]",children:(0,r.jsxs)("div",{className:"bg-white p-5 rounded-xl lg:ml-64 md:min-w-[500px] h-min mt-[20%] max-h-[70%] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-primary/[0.1] mb-4 pb-2",children:[r.jsx("h5",{className:"text-xl font-roboto",children:"Hapus Data"}),r.jsx(s.C7Q,{className:"cursor-pointer hover:text-black/[0.5]",onClick:()=>a(!1)})]}),(0,r.jsxs)("div",{children:[r.jsx("p",{children:"Apaka Anda Yakin Menghapus Data Ini?"}),(0,r.jsxs)("div",{className:"flex justify-center gap-4 mt-4",children:[r.jsx("button",{className:"hover:border hover:border-red-600 bg-red-600 w-20 py-2 rounded-xl text-white ",onClick:()=>t({isDelete:!0}),children:"Hapus"}),r.jsx("button",{className:"w-20 py-2 rounded-xl hover:border-b",onClick:()=>a(!1),children:"Batal"})]})]})]})})})},5307:(e,a,t)=>{"use strict";t.d(a,{u:()=>s});var r=t(3854);t(4218);let s=({label:e,register:a,required:t,name:s,placeholder:l,defaultOption:i,options:n=[],errors:d,addClass:o})=>(0,r.jsxs)("div",{className:o,children:[r.jsx("label",{className:"text-sm font-medium text-gray-700 tracking-wide",children:e}),t&&r.jsx("span",{className:"ml-1 text-red-600",children:"*"}),r.jsx("div",{className:"relative",children:(0,r.jsxs)("select",{className:"w-full rounded-lg py-2 px-2 bg-white border border-gray-300 focus:outline-none focus:border-secondary",id:e,placeholder:l,...a(s,{required:t}),children:[r.jsx("option",{value:"",children:i}),n.map((e,a)=>r.jsx("option",{value:e.value,children:e.label},a))]})}),d?.type==="required"&&(0,r.jsxs)("p",{className:"text-red-500 font-inter italic text-sm",children:[e," tidak boleh kosong"]})]})},8945:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});var r=t(4012),s=t(6965),l=t(1820);let i=(0,r.Ue)((0,s.mW)((e,a)=>({dtObat:[],setObat:async({page:a=1,limit:t=10,search:r})=>{try{let s=await (0,l.hi)({method:"get",url:"/obat",params:{limit:t,page:a,search:r}});return e(e=>({...e,dtObat:s.data})),{status:"berhasil",data:s.data}}catch(e){return{status:"error",error:e.response.data}}},setObatAll:async({search:a})=>{try{let t=await (0,l.hi)({method:"get",url:"/obat/all",params:{search:a}});return e(e=>({...e,dtObat:t.data})),{status:"berhasil",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}}))),n=i},1432:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var r=t(4656),s=t(7438),l=t(6365);t(3542);var i=t(5153);let n=(0,i.createProxy)(String.raw`/media/smarthagar/Assets/Project/NextJS/TA/menas/src/app/admin/Auth.tsx`),{__esModule:d,$$typeof:o}=n,u=n.default,c=e=>(0,r.jsxs)("div",{className:"min-h-screen h-screen flex flex-col bg-white/[0.8] text-gray-800 overflow-hidden",children:[r.jsx(u,{}),r.jsx("div",{className:"flex sm:ml-64 py-2 items-center justify-center shadow-md backdrop-blur-sm",children:r.jsx(s.ZP,{})}),r.jsx("div",{className:"sm:w-64 shrink-0",children:r.jsx(l.ZP,{})}),r.jsx("div",{className:"h-full flex ml-64 pb-16 px-4 mt-4",children:e.children})]})},3637:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l,metadata:()=>s});var r=t(4656);t(3542);let s={title:"Daftar Obat Keluar"},l=e=>r.jsx(r.Fragment,{children:e.children})},328:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>i,__esModule:()=>l,default:()=>d});var r=t(5153);let s=(0,r.createProxy)(String.raw`/media/smarthagar/Assets/Project/NextJS/TA/menas/src/app/admin/obat/keluar/page.tsx`),{__esModule:l,$$typeof:i}=s,n=s.default,d=n}};var a=require("../../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[271,544,308,644,290,50,747,651,930,900,907],()=>t(7656));module.exports=r})();