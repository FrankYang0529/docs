"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[27299],{30825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});n(67294);var i=n(3905);const r={sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"Air Gapped Environment",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},a=void 0,o={unversionedId:"airgap",id:"version-v1.0/airgap",title:"Air Gapped Environment",description:"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy.",source:"@site/versioned_docs/version-v1.0/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/v1.0/airgap",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/airgap.md",tags:[],version:"v1.0",lastUpdatedAt:1728308548,formattedLastUpdatedAt:"Oct 7, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"Air Gapped Environment",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},sidebar:"api",previous:{title:"Management Address",permalink:"/v1.0/install/management-address"},next:{title:"Upgrading Harvester",permalink:"/v1.0/upgrade/automatic"}},s={},l=[{value:"Working Behind an HTTP Proxy",id:"working-behind-an-http-proxy",level:2},{value:"Configure an HTTP Proxy During Installation",id:"configure-an-http-proxy-during-installation",level:3},{value:"Configure an HTTP Proxy in Harvester Settings",id:"configure-an-http-proxy-in-harvester-settings",level:3}],p={toc:l},d="wrapper";function c({components:e,...t}){return(0,i.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/airgap"})),(0,i.kt)("p",null,"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy."),(0,i.kt)("p",null,"The Harvester ISO image contains all the packages to make it work in an air gapped environment."),(0,i.kt)("h2",{id:"working-behind-an-http-proxy"},"Working Behind an HTTP Proxy"),(0,i.kt)("p",null,"In some environments, the connection to external services, from the servers or VMs, requires an HTTP(S) proxy."),(0,i.kt)("h3",{id:"configure-an-http-proxy-during-installation"},"Configure an HTTP Proxy During Installation"),(0,i.kt)("p",null,"You can configure the HTTP(S) proxy during the ",(0,i.kt)("a",{parentName:"p",href:"/v1.0/install/iso-install"},"ISO installation")," as shown in picture below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iso-proxy",src:n(69438).Z,width:"1596",height:"1198"})),(0,i.kt)("h3",{id:"configure-an-http-proxy-in-harvester-settings"},"Configure an HTTP Proxy in Harvester Settings"),(0,i.kt)("p",null,"You can configure the HTTP(S) proxy in the settings page of the Harvester dashboard:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the settings page of the Harvester UI."),(0,i.kt)("li",{parentName:"ol"},"Find the ",(0,i.kt)("inlineCode",{parentName:"li"},"http-proxy")," setting, click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit setting")),(0,i.kt)("li",{parentName:"ol"},"Enter the value(s) for ",(0,i.kt)("inlineCode",{parentName:"li"},"http-proxy"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"https-proxy")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"no-proxy"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"proxy-setting",src:n(72620).Z,width:"2860",height:"1164"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Harvester appends necessary addresses to user configured ",(0,i.kt)("inlineCode",{parentName:"p"},"no-proxy")," to ensure the internal traffic works.\ni.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,.svc,.cluster.local"))))}c.isMDXComponent=!0},69438:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/iso-proxy-4772156ef9e6a8688de2321ed356b078.png"},72620:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/proxy-setting-6433c2c6f3efd4cfb84757420ceeaf8a.png"}}]);