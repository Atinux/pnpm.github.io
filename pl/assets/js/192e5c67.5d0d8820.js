"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1048],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||p;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6001:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>s});var n=r(9518),o=r(7344),p=(r(9496),r(9613)),i=["components"],a={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"cli/import",title:"pnpm import",description:"Dodane w: v2.15.0",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/pl/next/cli/import",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"current",frontMatter:{id:"import",title:"pnpm import"},sidebar:"docs",previous:{title:"pnpm unlink",permalink:"/pl/next/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/pl/next/cli/rebuild"}},u=[],m={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Dodane w: v2.15.0"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm import")," generates a ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," from another package manager's lockfile. Supported source files:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"yarn.lock")," (od v6.14.0)")),(0,p.kt)("p",null,"Note that if you have workspaces you wish to import dependencies for, they will need to be declared in a ",(0,p.kt)("a",{parentName:"p",href:"/pl/next/pnpm-workspace_yaml"},"pnpm-workspace.yaml")," file beforehand."))}s.isMDXComponent=!0}}]);