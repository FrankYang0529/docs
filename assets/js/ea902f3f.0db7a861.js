"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=s,m=p["".concat(o,".").concat(d)]||p[d]||h[d]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={sidebar_position:4,sidebar_label:"Access to the Virtual Machine",title:"Access to the Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Access to the VM"],Description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."},c=void 0,i={unversionedId:"vm/access-to-the-vm",id:"version-v0.3/vm/access-to-the-vm",title:"Access to the Virtual Machine",description:"Once the VM is up and running, you can access it using either the Virtual Network Computing (VNC) client or the serial console from the Harvester UI.",source:"@site/versioned_docs/version-v0.3/vm/access-to-the-vm.md",sourceDirName:"vm",slug:"/vm/access-to-the-vm",permalink:"/v0.3/vm/access-to-the-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/vm/access-to-the-vm.md",tags:[],version:"v0.3",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Access to the Virtual Machine",title:"Access to the Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Access to the VM"],Description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."},sidebar:"tutorialSidebar",previous:{title:"Create a Virtual Machine",permalink:"/v0.3/vm/create-vm"},next:{title:"VM Backup & Restore",permalink:"/v0.3/vm/backup-restore"}},o={},l=[{value:"Access with the Harvester UI",id:"access-with-the-harvester-ui",level:2},{value:"Access with the SSH Client",id:"access-with-the-ssh-client",level:2}],u={toc:l};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once the VM is up and running, you can access it using either the Virtual Network Computing (VNC) client or the serial console from the Harvester UI."),(0,s.kt)("p",null,"Additionally, you can connect directly from your computer's SSH client."),(0,s.kt)("h2",{id:"access-with-the-harvester-ui"},"Access with the Harvester UI"),(0,s.kt)("p",null,"VMs can be accessed from the UI directly using either VNC or the serial console."),(0,s.kt)("p",null,"If the VGA display is not enabled on the VM, as with the Ubuntu minimal cloud image, the VM can be accessed with the serial console."),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(6106).Z,width:"3354",height:"1444"})),(0,s.kt)("h2",{id:"access-with-the-ssh-client"},"Access with the SSH Client"),(0,s.kt)("p",null,"Enter the IP address of the host in a terminal emulation client, such as PuTTY. You may also run the following command to access the VM directly from your computer's SSH client:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," ssh -i ~/.ssh/your-ssh-key user@<ip-address-or-hostname>\n")))}h.isMDXComponent=!0},6106:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/access-to-vm-b97f6b27951342b26e004ad807925804.png"}}]);