exports.id=900,exports.ids=[900],exports.modules={4415:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3579,23)),Promise.resolve().then(s.t.bind(s,619,23)),Promise.resolve().then(s.t.bind(s,1459,23)),Promise.resolve().then(s.t.bind(s,3456,23)),Promise.resolve().then(s.t.bind(s,847,23)),Promise.resolve().then(s.t.bind(s,7303,23))},715:()=>{},5303:()=>{},3941:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(3854);s(4218);let r=({children:e,onClick:t,addClass:s="bg-btn-primary hover:bg-btn-primary/80 text-white",type:r="button"})=>a.jsx("button",{type:r,className:`${s} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`,onClick:t,children:e})},3853:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(3854),r=s(1018),n=s(4218);let i=e=>{let[t,s]=(0,n.useState)(""),i=(0,r.usePathname)();return(0,n.useEffect)(()=>{if("/pegawai"===i)s("Selamat Datang di Halaman Pegawai");else{let e=i?.split("/");s(`Halaman ${e[e.length-1]}`)}return()=>{}},[i]),a.jsx("h3",{className:"capitalize text-center text-xl font-bold",children:t})}},8134:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(3854);s(4218);let r=()=>a.jsx("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-primary border-t-transparent shadow-md"})},5971:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var a=s(3854),r=s(4218),n=s(5745);let i=e=>`/admin${e}`,l=e=>`/petugas${e}`,o=[{name:"Home",href:i(""),icon:a.jsx(n.u9h,{})},{name:"Jenis",href:i("/jenis"),icon:a.jsx(n.ChU,{})},{name:"Satuan",href:i("/satuan"),icon:a.jsx(n.iVu,{})},{name:"Dokter",href:i("/dokter"),icon:a.jsx(n.iVu,{})},{name:"Petugas",href:i("/petugas"),icon:a.jsx(n.iVu,{})},{name:"Obat",icon:a.jsx(n.jh2,{}),slug:"obat",subMenus:[{name:"Daftar Obat",href:i("/obat/daftar")},{name:"Obat Masuk",href:i("/obat/masuk")}]}],c=[{name:"Home",href:l(""),icon:a.jsx(n.u9h,{})},{name:"Pasien",href:l("/pasien"),icon:a.jsx(n.w7k,{})},{name:"Resep",href:l("/resep"),icon:a.jsx(n.w7k,{})}];var d=s(5548),u=s.n(d),m=s(1018),h=s(3941),x=s(4012),f=s(6965),b=s(1820),p=s(8318);let g=(0,x.Ue)((0,f.mW)((e,t)=>({setToken:async()=>{let e=p.Z.get("token");return e},setLogout:async()=>{let e=await t().setToken();try{let t=await (0,b.I8)({method:"post",url:"/logout",headers:{Authorization:`Bearer ${e}`}});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}}))),v=({subMenus:e,name:t,icon:s,slug:r,index:n,pathname:i,openMenus:l})=>{let o=l.includes(r);return a.jsx("div",{children:(0,a.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",open:o,children:[(0,a.jsxs)("summary",{className:"flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-menu-active hover:text-gray-200 }",children:[(0,a.jsxs)("div",{className:"flex items-center cursor-pointer",children:[a.jsx("span",{children:s}),a.jsx("span",{className:"mx-2 text-sm font-medium",children:t})]}),a.jsx("span",{className:"shrink-0 transition duration-300 group-open:-rotate-180",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:a.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),e&&e.map((e,t)=>{let s=i===e.href;return(0,a.jsxs)("div",{className:"ml-4",children:[!e.subMenus&&a.jsx(u(),{href:e.href||"#",className:`flex items-center mx-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-menu-active hover:text-gray-200 ${s&&"border-b-2 border-menu-active bg-menu-active/50"}`,children:a.jsx("span",{className:"mx-2 text-sm font-medium",children:e.name})}),e.subMenus&&v({subMenus:e.subMenus,name:e.name,icon:e.icon,slug:e.slug,index:t,pathname:i,openMenus:l})]},t)})]})},n)};var j=s(8134);let y=async({setLogout:e,setLoadLogout:t,route:s})=>{t(!0);let a=await e();if(a?.status==="success")return p.Z.remove("token"),p.Z.remove("role"),p.Z.remove("petugas"),s.push("/login")},w=({type:e="admin"})=>{let[t,s]=(0,r.useState)(!1),i=(0,m.usePathname)(),l=(0,m.useRouter)(),[d,x]=(0,r.useState)([]),[f,b]=(0,r.useState)([]),[p,w]=(0,r.useState)(!1),{setLogout:k}=g();(0,r.useEffect)(()=>(s(!1),()=>{}),[i]),(0,r.useEffect)(()=>("admin"===e?x(o):"petugas"===e&&x(c),()=>{}),[e]);let N=()=>{s(!t)},P=e=>{for(let t of e){if(t?.href===i){let e=i?.split("/");e.splice(0,1),b(e)}t.subMenus&&P(t.subMenus)}};return(0,r.useEffect)(()=>(d&&P(d),()=>{}),[d,i]),(0,a.jsxs)("div",{className:"sidebar",children:[a.jsx("div",{className:"absolute top-0",children:(0,a.jsxs)("button",{onClick:N,type:"button",className:"inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[a.jsx("span",{className:"sr-only",children:"Open sidebar"}),a.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]})}),a.jsx("aside",{className:`fixed top-0 left-0 z-40 w-64 bg-puskesmas bg-cover bg-center h-screen transition-transform -translate-x-full sm:translate-x-0 ${t?"translate-x-0":""}`,"aria-label":"Sidebar",children:(0,a.jsxs)("div",{className:"sidebar z-50 h-full px-3 pt-4 overflow-y-auto bg-primary/[0.5] text-color-2 flex flex-row-reverse justify-between sm:block",children:[a.jsx("div",{className:"text-black cursor-pointer sm:hidden",onClick:N,children:a.jsx(n.C7Q,{})}),(0,a.jsxs)("div",{className:"relative h-full sidebar w-full",children:[a.jsx("div",{className:"h-24 sidebar"}),a.jsx("ul",{className:"space-y-2 font-medium w-full",children:d&&d.map((e,t)=>{let s=i===e.href,r=e?.subMenus,{name:n,icon:l,slug:o}=e;return r?v({subMenus:r,name:n,icon:l,slug:o,index:t,pathname:i,openMenus:f}):a.jsx("li",{children:(0,a.jsxs)(u(),{href:e.href||"#",className:`flex w-full items-center p-2 text-color-2 hover:bg-menu-active transition-all duration-500 rounded-lg group ${s&&"bg-menu-active"}`,children:[l,a.jsx("span",{className:"ms-3",children:n})]})},t)})}),p?a.jsx(j.Z,{}):a.jsx("div",{className:"absolute bottom-4 flex justify-center left-0 right-0",children:a.jsx(h.Z,{addClass:"bg-secondary text-color-1",onClick:()=>y({setLogout:k,setLoadLogout:w,route:l}),children:"Logout"})})]})]})})]})}},1820:(e,t,s)=>{"use strict";s.d(t,{I8:()=>c,Sj:()=>d,_n:()=>r,hi:()=>u});var a=s(3847);let r="https://back.menas.ta-uogp.my.id",n=`${r}/auth`,i=`${r}/api`,l=`${r}/crud`,o=`${r}/storage`,c=a.Z.create({baseURL:n}),d=a.Z.create({baseURL:l}),u=a.Z.create({baseURL:i});a.Z.create({baseURL:o})},7268:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var a=s(4012),r=s(6965),n=s(1820),i=s(8318);let l=(0,a.Ue)((0,r.mW)((e,t)=>({setToken:async()=>{let e=i.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,n.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let e=await t().setToken();try{let t=await (0,n.I8)({method:"post",url:"/cek_token",headers:{Authorization:`Bearer ${e}`}});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}}))),o=l},9113:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,metadata:()=>r});var a=s(4656);s(5023);let r={title:"Puskesmas Hom-Hom Wamena",description:"Generated by SmartSpartacuS"};function n({children:e}){return a.jsx("html",{lang:"en",children:a.jsx("body",{className:"text-color-1 overflow-x-hidden bg-bg-1 bg-cover",children:e})})}},7438:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>o});var a=s(5153);let r=(0,a.createProxy)(String.raw`/media/smarthagar/Assets/Project/NextJS/TA/menas/src/components/header/HeaderComp.tsx`),{__esModule:n,$$typeof:i}=r,l=r.default,o=l},6365:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>o});var a=s(5153);let r=(0,a.createProxy)(String.raw`/media/smarthagar/Assets/Project/NextJS/TA/menas/src/components/sidebar/Sidebar.tsx`),{__esModule:n,$$typeof:i}=r,l=r.default,o=l},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(8531);let r=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},5023:()=>{}};