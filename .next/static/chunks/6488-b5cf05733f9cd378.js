(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6488],{8528:function(e,t,r){"use strict";var a=r(7437);r(2265),t.Z=e=>{let{children:t,onClick:r,addClass:s="bg-btn-primary hover:bg-btn-primary/80 text-white",type:n="button"}=e;return(0,a.jsx)("button",{type:n,className:"".concat(s," font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"),onClick:r,children:t})}},6018:function(e,t,r){"use strict";r.r(t);var a=r(7437),s=r(4033),n=r(2265);t.default=e=>{let[t,r]=(0,n.useState)(""),o=(0,s.usePathname)();return(0,n.useEffect)(()=>{if("/pegawai"===o)r("Selamat Datang di Halaman Pegawai");else{let e=null==o?void 0:o.split("/");r("Halaman ".concat(e[e.length-1]))}return()=>{}},[o]),(0,a.jsx)("h3",{className:"capitalize text-center text-xl font-bold",children:t})}},2230:function(e,t,r){"use strict";var a=r(7437);r(2265),t.Z=()=>(0,a.jsx)("div",{className:"w-12 h-12 rounded-full animate-spin border-y border-solid border-primary border-t-transparent shadow-md"})},2836:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var a=r(7437),s=r(2265),n=r(4606);let o=e=>"/admin".concat(e),l=e=>"/petugas".concat(e),i=[{name:"Home",href:o(""),icon:(0,a.jsx)(n.u9h,{})},{name:"Jenis",href:o("/jenis"),icon:(0,a.jsx)(n.ChU,{})},{name:"Satuan",href:o("/satuan"),icon:(0,a.jsx)(n.iVu,{})},{name:"Dokter",href:o("/dokter"),icon:(0,a.jsx)(n.iVu,{})},{name:"Petugas",href:o("/petugas"),icon:(0,a.jsx)(n.iVu,{})},{name:"Obat",icon:(0,a.jsx)(n.jh2,{}),slug:"obat",subMenus:[{name:"Daftar Obat",href:o("/obat/daftar")},{name:"Obat Masuk",href:o("/obat/masuk")}]}],c=[{name:"Home",href:l(""),icon:(0,a.jsx)(n.u9h,{})},{name:"Pasien",href:l("/pasien"),icon:(0,a.jsx)(n.w7k,{})},{name:"Resep",href:l("/resep"),icon:(0,a.jsx)(n.w7k,{})}];var u=r(1396),d=r.n(u),m=r(4033),h=r(8528),f=r(4660),x=r(4810),p=r(8875),b=r(1490);let g=(0,f.Ue)((0,x.mW)((e,t)=>({setToken:async()=>{let e=b.Z.get("token");return e},setLogout:async()=>{let e=await t().setToken();try{let t=await (0,p.I8)({method:"post",url:"/logout",headers:{Authorization:"Bearer ".concat(e)}});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}}))),v=e=>{let{subMenus:t,name:r,icon:s,slug:n,index:o,pathname:l,openMenus:i}=e,c=i.includes(n);return(0,a.jsx)("div",{children:(0,a.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",open:c,children:[(0,a.jsxs)("summary",{className:"flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-menu-active hover:text-gray-200 }",children:[(0,a.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,a.jsx)("span",{children:s}),(0,a.jsx)("span",{className:"mx-2 text-sm font-medium",children:r})]}),(0,a.jsx)("span",{className:"shrink-0 transition duration-300 group-open:-rotate-180",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),t&&t.map((e,t)=>{let r=l===e.href;return(0,a.jsxs)("div",{className:"ml-4",children:[!e.subMenus&&(0,a.jsx)(d(),{href:e.href||"#",className:"flex items-center mx-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-menu-active hover:text-gray-200 ".concat(r&&"border-b-2 border-menu-active bg-menu-active/50"),children:(0,a.jsx)("span",{className:"mx-2 text-sm font-medium",children:e.name})}),e.subMenus&&v({subMenus:e.subMenus,name:e.name,icon:e.icon,slug:e.slug,index:t,pathname:l,openMenus:i})]},t)})]})},o)};var j=r(2230);let y=async e=>{let{setLogout:t,setLoadLogout:r,route:a}=e;r(!0);let s=await t();if((null==s?void 0:s.status)==="success")return b.Z.remove("token"),b.Z.remove("role"),b.Z.remove("petugas"),a.push("/login")};var w=e=>{let{type:t="admin"}=e,[r,o]=(0,s.useState)(!1),l=(0,m.usePathname)(),u=(0,m.useRouter)(),[f,x]=(0,s.useState)([]),[p,b]=(0,s.useState)([]),[w,k]=(0,s.useState)(!1),{setLogout:N}=g();(0,s.useEffect)(()=>(o(!1),()=>{}),[l]),(0,s.useEffect)(()=>("admin"===t?x(i):"petugas"===t&&x(c),()=>{}),[t]);let C=()=>{o(!r)},O=e=>{for(let t of e){if((null==t?void 0:t.href)===l){let e=null==l?void 0:l.split("/");e.splice(0,1),b(e)}t.subMenus&&O(t.subMenus)}};return(0,s.useEffect)(()=>(f&&O(f),()=>{}),[f,l]),(0,a.jsxs)("div",{className:"sidebar",children:[(0,a.jsx)("div",{className:"absolute top-0",children:(0,a.jsxs)("button",{onClick:C,type:"button",className:"inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open sidebar"}),(0,a.jsx)("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]})}),(0,a.jsx)("aside",{className:"fixed top-0 left-0 z-40 w-64 bg-puskesmas bg-cover bg-center h-screen transition-transform -translate-x-full sm:translate-x-0 ".concat(r?"translate-x-0":""),"aria-label":"Sidebar",children:(0,a.jsxs)("div",{className:"sidebar z-50 h-full px-3 pt-4 overflow-y-auto bg-primary/[0.5] text-color-2 flex flex-row-reverse justify-between sm:block",children:[(0,a.jsx)("div",{className:"text-black cursor-pointer sm:hidden",onClick:C,children:(0,a.jsx)(n.C7Q,{})}),(0,a.jsxs)("div",{className:"relative h-full sidebar w-full",children:[(0,a.jsx)("div",{className:"h-24 sidebar"}),(0,a.jsx)("ul",{className:"space-y-2 font-medium w-full",children:f&&f.map((e,t)=>{let r=l===e.href,s=null==e?void 0:e.subMenus,{name:n,icon:o,slug:i}=e;return s?v({subMenus:s,name:n,icon:o,slug:i,index:t,pathname:l,openMenus:p}):(0,a.jsx)("li",{children:(0,a.jsxs)(d(),{href:e.href||"#",className:"flex w-full items-center p-2 text-color-2 hover:bg-menu-active transition-all duration-500 rounded-lg group ".concat(r&&"bg-menu-active"),children:[o,(0,a.jsx)("span",{className:"ms-3",children:n})]})},t)})}),w?(0,a.jsx)(j.Z,{}):(0,a.jsx)("div",{className:"absolute bottom-4 flex justify-center left-0 right-0",children:(0,a.jsx)(h.Z,{addClass:"bg-secondary text-color-1",onClick:()=>y({setLogout:N,setLoadLogout:k,route:u}),children:"Logout"})})]})]})})]})}},8875:function(e,t,r){"use strict";r.d(t,{I8:function(){return n},Sj:function(){return o},_n:function(){return s},hi:function(){return l}});var a=r(2173);let s="https://back.menas.ta-uogp.my.id",n=a.Z.create({baseURL:"".concat(s,"/auth")}),o=a.Z.create({baseURL:"".concat(s,"/crud")}),l=a.Z.create({baseURL:"".concat(s,"/api")});a.Z.create({baseURL:"".concat(s,"/storage")})},5967:function(e,t,r){"use strict";var a=r(4660),s=r(4810),n=r(8875),o=r(1490);let l=(0,a.Ue)((0,s.mW)((e,t)=>({setToken:async()=>{let e=o.Z.get("token");return e},setLogin:async e=>{try{let t=await (0,n.I8)({method:"post",url:"/login",data:e});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}},cekToken:async()=>{let e=await t().setToken();try{let t=await (0,n.I8)({method:"post",url:"/cek_token",headers:{Authorization:"Bearer ".concat(e)}});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));t.Z=l},1396:function(e,t,r){e.exports=r(8326)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var a=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),o=function(){return(o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>t.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};function i(e){return function(t){return a.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return a.createElement(t.tag,o({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,s=e.attr,n=e.size,i=e.title,c=l(e,["attr","size","title"]),u=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==n?a.createElement(n.Consumer,null,function(e){return t(e)}):t(s)}}}]);