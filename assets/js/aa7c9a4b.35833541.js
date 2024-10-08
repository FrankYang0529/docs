"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[20538],{59949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>d});a(67294);var i=a(3905);const n={sidebar_position:3,sidebar_label:"Edit a Virtual Machine",title:"Edit a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Virtual Machine","virtual machine","Edit a VM"],description:"Edit Virtual Machines from the Harvester VM page."},r=void 0,o={unversionedId:"vm/edit-vm",id:"version-v1.2/vm/edit-vm",title:"Edit a Virtual Machine",description:"Edit Virtual Machines from the Harvester VM page.",source:"@site/versioned_docs/version-v1.2/vm/edit-vm.md",sourceDirName:"vm",slug:"/vm/edit-vm",permalink:"/v1.2/vm/edit-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/vm/edit-vm.md",tags:[],version:"v1.2",lastUpdatedAt:1728308548,formattedLastUpdatedAt:"Oct 7, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Edit a Virtual Machine",title:"Edit a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Virtual Machine","virtual machine","Edit a VM"],description:"Edit Virtual Machines from the Harvester VM page."},sidebar:"api",previous:{title:"Create a Windows Virtual Machine",permalink:"/v1.2/vm/create-windows-vm"},next:{title:"Access to the Virtual Machine",permalink:"/v1.2/vm/access-to-the-vm"}},s={},d=[{value:"How to Edit a VM",id:"how-to-edit-a-vm",level:2},{value:"Basics",id:"basics",level:3},{value:"Networks",id:"networks",level:3},{value:"Volumes",id:"volumes",level:3},{value:"Access Credentials",id:"access-credentials",level:3}],l={toc:d},c="wrapper";function u({components:e,...t}){return(0,i.kt)(c,{...l,...t,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/edit-vm"})),(0,i.kt)("h2",{id:"how-to-edit-a-vm"},"How to Edit a VM"),(0,i.kt)("p",null,"After creating a virtual machine, you can edit your virtual machine by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit Config")," button."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In addition to editing the description, a restart of the virtual machine is required for configuration changes to take effect.")),(0,i.kt)("h3",{id:"basics"},"Basics"),(0,i.kt)("p",null,"On the basics tab, you can config your requested CPU and memory, a VM restart is required for this configuration to take effect."),(0,i.kt)("p",null,"SSH Keys are injected into the cloud-init script when the virtual machine is first powered on. In order for the modified ssh key to take effect after the virtual machine is startup, the cloud-init script needs to be ",(0,i.kt)("a",{parentName:"p",href:"/v1.2/faq#how-to-install-the-qemu-guest-agent-of-a-running-vm"},"reinstalled")," from your guest OS."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit-vm",src:a(37054).Z,width:"4288",height:"2364"})),(0,i.kt)("h3",{id:"networks"},"Networks"),(0,i.kt)("p",null,"You can add additional VLAN networks to your VM instances after booting, the ",(0,i.kt)("inlineCode",{parentName:"p"},"management network")," is optional if you have the VLAN network configured."),(0,i.kt)("p",null,"Additional NICs are not enabled by default unless you configure them manually in the guest OS, e.g. using ",(0,i.kt)("a",{parentName:"p",href:"https://doc.opensuse.org/documentation/leap/reference/html/book-reference/cha-network.html#sec-network-manconf"},"wicked for your OpenSUSE Server")," or ",(0,i.kt)("a",{parentName:"p",href:"https://ubuntu.com/server/docs/network-configuration"},"netplan for your Ubuntu Server"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit-vm",src:a(84021).Z,width:"4364",height:"1298"})),(0,i.kt)("p",null,"For more details about the network implementation, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v1.2/networking/harvester-network"},"Networking")," page."),(0,i.kt)("h3",{id:"volumes"},"Volumes"),(0,i.kt)("p",null,"You can add additional volumes to the VM after booting. You can also expand the size of the volume after shutting down the VM, click the VM and go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Volumes")," tab, edit the size of the expanded volume. After restarting the VM and waiting for the resize to complete, your disk will automatically finish expanding."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit-vm",src:a(35842).Z,width:"1365",height:"750"})),(0,i.kt)("h3",{id:"access-credentials"},"Access Credentials"),(0,i.kt)("p",null,"Access Credentials allow you to inject basic auth or ssh keys dynamically at run time when your guest OS has QEMU guest agent installed."),(0,i.kt)("p",null,"For more details please check the page here: ",(0,i.kt)("a",{parentName:"p",href:"/v1.2/vm/access-to-the-vm#dynamic-ssh-key-injection-via-qemu-guest-agent"},"Dynamic SSH Key Injection via Qemu guest agent"),"."))}u.isMDXComponent=!0},37054:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/edit-vm-basics-1fad91e221260fcd8a5a3b701c9beddf.png"},84021:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/edit-vm-networks-fd853639d0ba1d31996c3581f349a895.png"},35842:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/edit-vm-volumes-a5b32802ad7637c13dfd56dd6f8dfa5c.png"}}]);