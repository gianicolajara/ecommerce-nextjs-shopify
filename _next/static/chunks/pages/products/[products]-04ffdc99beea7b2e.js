(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{710:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[products]",function(){return r(7329)}])},4966:function(e,n,r){"use strict";var c=r(5893),t=r(5675),i=r.n(t),a=r(1163),l=r(3576),s=r(4741);n.Z=function(e){var n=e.image,r=e.title,t=e.price,o=e.handle,u=(0,a.useRouter)();return(0,c.jsxs)("article",{className:"flex flex-col h-[500px]",children:[(0,c.jsx)("div",{className:"relative w-full h-full max-h-[60%]",children:(0,c.jsx)(i(),{src:n,alt:"imagen",layout:"fill",objectFit:"cover"})}),(0,c.jsxs)("div",{className:"flex flex-col flex-grow flex-shrink-0 justify-center p-3 gap-5",children:[(0,c.jsxs)("div",{className:"text-center",children:[(0,c.jsx)(s.Z,{children:r}),(0,c.jsx)(s.Z,{bold:!1,color:"text-blue-500",children:t})]}),(0,c.jsx)("div",{className:"flex w-full justify-center",children:(0,c.jsx)(l.Z,{onClick:function(){return e=o,void u.push("/product/".concat(e));var e},children:"Show"})})]})]})}},7329:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return i}});var c=r(5893),t=r(4966),i=!0;n.default=function(e){var n=e.products;return(0,c.jsx)("section",{className:"max-w-[999px] m-auto grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 py-10 ",children:n.map((function(e){return(0,c.jsx)(t.Z,{handle:e.node.handle,image:e.node.featuredImage.url,price:"".concat(e.node.priceRange.minVariantPrice.amount," ").concat(e.node.priceRange.minVariantPrice.currencyCode),title:e.node.title},e.node.key)}))})}}},function(e){e.O(0,[774,888,179],(function(){return n=710,e(e.s=n);var n}));var n=e.O();_N_E=n}]);