(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3501],{8638:function(e,n,t){Promise.resolve().then(t.bind(t,9384)),Promise.resolve().then(t.bind(t,6018)),Promise.resolve().then(t.bind(t,2836))},9384:function(e,n,t){"use strict";t.r(n);var s=t(7437),r=t(5967),u=t(4033),i=t(2265),l=t(1490),o=t(2230);n.default=e=>{let[n,t]=(0,i.useState)(!0),c=(0,u.usePathname)(),a=(0,u.useRouter)(),{cekToken:f}=(0,r.Z)(),h=async()=>{let e=await f();if(null==e?void 0:e.error)a.push("/login");else{let e=l.Z.get("role");"petugas"!==e&&a.push("/".concat(e))}return e};(0,i.useEffect)(()=>(h(),()=>{}),[c]);let d=async()=>{let e=await h();(null==e?void 0:e.error)||t(!1)};if((0,i.useEffect)(()=>(d(),console.log("pertama render"),()=>{}),[]),n)return(0,s.jsx)("div",{className:"flex min-h-screen h-screen justify-center items-center",children:(0,s.jsx)(o.Z,{})})}}},function(e){e.O(0,[8447,2750,8326,6488,2971,2472,1744],function(){return e(e.s=8638)}),_N_E=e.O()}]);