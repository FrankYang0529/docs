"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[95106],{32989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});r(67294);var a=r(3905);const s={id:"singlenodeclusters",sidebar_position:7,sidebar_label:"Single-Node Clusters",title:"Single-Node Clusters",keywords:["Single Node"],Description:"Support for deployment of single-node clusters"},n=void 0,i={unversionedId:"advanced/singlenodeclusters",id:"version-v1.2/advanced/singlenodeclusters",title:"Single-Node Clusters",description:"As of Harvester release v1.2.0, single-node clusters are supported for implementations that require minimal initial deployment resources or that can tolerate lower resiliency. You can create single-node clusters using the standard installation methods (ISO, USB, and PXE boot).",source:"@site/versioned_docs/version-v1.2/advanced/singlenodeclusters.md",sourceDirName:"advanced",slug:"/advanced/singlenodeclusters",permalink:"/v1.2/advanced/singlenodeclusters",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/advanced/singlenodeclusters.md",tags:[],version:"v1.2",lastUpdatedAt:1722560913,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:7,frontMatter:{id:"singlenodeclusters",sidebar_position:7,sidebar_label:"Single-Node Clusters",title:"Single-Node Clusters",keywords:["Single Node"],Description:"Support for deployment of single-node clusters"},sidebar:"api",previous:{title:"Rancher Manager",permalink:"/v1.2/advanced/addons/rancher-vcluster"},next:{title:"Rancher Integration",permalink:"/v1.2/rancher/index"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2}],d={toc:l},u="wrapper";function p({components:e,...t}){return(0,a.kt)(u,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/advanced/singlenodeclusters"})),(0,a.kt)("p",null,"As of Harvester release v1.2.0, single-node clusters are supported for implementations that require minimal initial deployment resources or that can tolerate lower resiliency. You can create single-node clusters using the standard installation methods (",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/index"},"ISO"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/usb-install"},"USB"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/pxe-boot-install"},"PXE boot"),")."),(0,a.kt)("p",null,"Single-node clusters support most Harvester features, including the creation of RKE2 clusters and node upgrades (with some limitations). However, this deployment type has the following key disadvantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No high availability: Errors and updates that require rebooting of the node cause downtime to running VMs."),(0,a.kt)("li",{parentName:"ul"},"No multi-replica support: Only one replica is created for each volume in Longhorn."),(0,a.kt)("li",{parentName:"ul"},"No live migration and zero-downtime support during upgrades.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin deploying your single-node cluster, ensure that the following requirements are addressed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hardware: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/requirements#hardware-requirements"},"Use server-class hardware")," with sufficient resources to run Harvester and a production workload. Laptops and nested virtualization are not supported.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Network: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/requirements#port-requirements-for-harvester-nodes"},"Configure ports")," based on the type of traffic to be transmitted among VMs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"StorageClass: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/advanced/storageclass#creating-a-storageclass"},"Create a new default StorageClass")," with the ",(0,a.kt)("strong",{parentName:"p"},"Number of Replicas"),' parameter set to "1". This ensures that only one replica is created for each volume in Longhorn.'),(0,a.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The default StorageClass ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-longhorn")," has a replica count value of ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),' for high availability. If you use this StorageClass to create volumes for your single-node cluster, Longhorn is unable to create the configured number of replicas. This results in volumes being marked as "Degraded" on the Longhorn UI.')))))}p.isMDXComponent=!0}}]);