"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[45929],{4833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>m});a(67294);var i=a(3905);const o={id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},l=void 0,n={unversionedId:"volume/index",id:"version-v1.2/volume/index",title:"Create a Volume",description:"Create a volume from the Volume page.",source:"@site/versioned_docs/version-v1.2/volume/create-volume.md",sourceDirName:"volume",slug:"/volume/index",permalink:"/v1.2/volume/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/volume/create-volume.md",tags:[],version:"v1.2",lastUpdatedAt:1733305603,formattedLastUpdatedAt:"Dec 4, 2024",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Create a Volume",title:"Create a Volume",keywords:["Volume"],description:"Create a volume from the Volume page."},sidebar:"api",previous:{title:"Clone VM",permalink:"/v1.2/vm/clone-vm"},next:{title:"Edit a Volume",permalink:"/v1.2/volume/edit-volume"}},r={},m=[{value:"Create an Empty Volume",id:"create-an-empty-volume",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Basics Tab",id:"basics-tab",level:3},{value:"Create an Image Volume",id:"create-an-image-volume",level:2},{value:"Header Section",id:"header-section-1",level:3},{value:"Basics Tab",id:"basics-tab-1",level:3}],s={toc:m},d="wrapper";function u({components:e,...t}){return(0,i.kt)(d,{...s,...t,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/create-volume"})),(0,i.kt)("h2",{id:"create-an-empty-volume"},"Create an Empty Volume"),(0,i.kt)("h3",{id:"header-section"},"Header Section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the Volume ",(0,i.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,i.kt)("h3",{id:"basics-tab"},"Basics Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"New")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,i.kt)("li",{parentName:"ol"},"Select an existing ",(0,i.kt)("inlineCode",{parentName:"li"},"StorageClass"),"."),(0,i.kt)("li",{parentName:"ol"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-empty-volume",src:a(6262).Z,width:"2560",height:"726"})),(0,i.kt)("h2",{id:"create-an-image-volume"},"Create an Image Volume"),(0,i.kt)("h3",{id:"header-section-1"},"Header Section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the Volume ",(0,i.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Provide a ",(0,i.kt)("inlineCode",{parentName:"li"},"Description")," for the Volume.")),(0,i.kt)("h3",{id:"basics-tab-1"},"Basics Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"VM Image")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,i.kt)("li",{parentName:"ol"},"Select an existing ",(0,i.kt)("inlineCode",{parentName:"li"},"Image"),"."),(0,i.kt)("li",{parentName:"ol"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"li"},"Size")," of the volume.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When creating volumes from a VM image, ensure that the volume size is greater than or equal to the image size. The volume may become corrupted if the configured volume size is less than the size of the underlying image. This is particularly important for qcow2 images because the virtual size is typically greater than the physical size."),(0,i.kt)("p",{parentName:"admonition"},"To determine the virtual size of a qcow2 image, you can run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"qemu-img info YOUR_IMAGE_FILE.qcow2"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-image-volume",src:a(15487).Z,width:"2560",height:"726"})))}u.isMDXComponent=!0},6262:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-empty-volume-e64eb8d677034412d1b394dda137a8ad.png"},15487:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-image-volume-ad01408a1eaa69454a211039f3de6c36.png"}}]);