"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[83362],{84876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});a(67294);var n=a(3905);const i={sidebar_position:1,sidebar_label:"Create a Virtual Machine",title:"Create a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Virtual Machine","virtual machine","Create a VM"],description:"Create one or more virtual machines from the Virtual Machines page."},r=void 0,o={unversionedId:"vm/create-vm",id:"version-v1.0/vm/create-vm",title:"Create a Virtual Machine",description:"Create one or more virtual machines from the Virtual Machines page.",source:"@site/versioned_docs/version-v1.0/vm/create-vm.md",sourceDirName:"vm",slug:"/vm/create-vm",permalink:"/v1.0/vm/create-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/vm/create-vm.md",tags:[],version:"v1.0",lastUpdatedAt:1724398153,formattedLastUpdatedAt:"Aug 23, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Create a Virtual Machine",title:"Create a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Virtual Machine","virtual machine","Create a VM"],description:"Create one or more virtual machines from the Virtual Machines page."},sidebar:"api",previous:{title:"Host Management",permalink:"/v1.0/host/"},next:{title:"Create a Windows Virtual Machine",permalink:"/v1.0/vm/create-windows-vm"}},s={},l=[{value:"How to Create a VM",id:"how-to-create-a-vm",level:2},{value:"Volumes",id:"volumes",level:2},{value:"Networks",id:"networks",level:2},{value:"Management Network",id:"management-network",level:3},{value:"Secondary Network",id:"secondary-network",level:3},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Run Strategy",id:"run-strategy",level:3},{value:"Cloud Configuration",id:"cloud-configuration",level:3},{value:"Cloud-init",id:"cloud-init",level:4},{value:"Installing the QEMU guest agent",id:"installing-the-qemu-guest-agent",level:4}],d={toc:l},p="wrapper";function u({components:e,...t}){return(0,n.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/create-vm"})),(0,n.kt)("h2",{id:"how-to-create-a-vm"},"How to Create a VM"),(0,n.kt)("p",null,"You can create one or more virtual machines from the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," page."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/vm/create-windows-vm"},"this page")," for creating Windows virtual machines.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Choose the option to create either one or multiple VM instances."),(0,n.kt)("li",{parentName:"ol"},"Select the namespace of your VMs, only the ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-public")," namespace is visible to all users."),(0,n.kt)("li",{parentName:"ol"},"The VM Name is a required field."),(0,n.kt)("li",{parentName:"ol"},"(Optional) VM template is optional, you can choose ",(0,n.kt)("inlineCode",{parentName:"li"},"iso-image"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"raw-image")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"windows-iso-image")," template to speed up your VM instance creation."),(0,n.kt)("li",{parentName:"ol"},"Configure the virtual machine's CPU and memory (see ",(0,n.kt)("a",{parentName:"li",href:"/v1.0/settings/#overcommit-config"},"overcommit settings")," if you want to over-provision)."),(0,n.kt)("li",{parentName:"ol"},"Select SSH keys or upload new keys."),(0,n.kt)("li",{parentName:"ol"},"Select a custom VM image on the ",(0,n.kt)("strong",{parentName:"li"},"Volumes")," tab. The default disk will be the root disk. You can add more disks to the VM."),(0,n.kt)("li",{parentName:"ol"},"To configure networks, go to the ",(0,n.kt)("strong",{parentName:"li"},"Networks")," tab. ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"Management Network")," is added by default, you can remove it if the VLAN network is configured."),(0,n.kt)("li",{parentName:"ol"},"You can also add additional networks to the VMs using VLAN networks. You may configure the VLAN networks on ",(0,n.kt)("strong",{parentName:"li"},"Advanced > Networks")," first."))),(0,n.kt)("li",{parentName:"ol"},"Advanced options such as run strategy, os type and cloud-init data are optional. You may configure these in the ",(0,n.kt)("strong",{parentName:"li"},"Advanced Options")," section when applicable.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-vm",src:a(98842).Z,width:"3354",height:"1448"})),(0,n.kt)("h2",{id:"volumes"},"Volumes"),(0,n.kt)("p",null,"You can add one or more additional volumes via the ",(0,n.kt)("inlineCode",{parentName:"p"},"Volumes")," tab, by default the first disk will be the root disk, you can change the boot order by dragging and dropping volumes, or using the arrow buttons."),(0,n.kt)("p",null,"A disk can be made accessible via the following types:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disk"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A disk disk will expose the volume as an ordinary disk to the VM.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cd-rom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A cd-rom disk will expose the volume as a cd-rom drive to the VM. It is read-only by default.")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-vm",src:a(44827).Z,width:"2165",height:"808"})),(0,n.kt)("admonition",{title:"Container Disk",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"Container disks")," are ephemeral storage devices that can be assigned to any number of VMs. This makes them an ideal tool for users who want to replicate a large number of VM workloads or inject machine drivers that do not require persistent data."),(0,n.kt)("p",{parentName:"admonition"},"Note: Container disks are not a good solution for any workload that requires persistent root disks across VM restarts.")),(0,n.kt)("h2",{id:"networks"},"Networks"),(0,n.kt)("p",null,"You can choose to add both the ",(0,n.kt)("inlineCode",{parentName:"p"},"management network")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"VLAN network")," to your VM instances via the ",(0,n.kt)("inlineCode",{parentName:"p"},"Networks")," tab, the ",(0,n.kt)("inlineCode",{parentName:"p"},"management network")," is optional if you have the VLAN network configured."),(0,n.kt)("p",null,"Network interfaces are configured through the ",(0,n.kt)("inlineCode",{parentName:"p"},"Type")," field. They describe the properties of the virtual interfaces seen inside the guest OS:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bridge"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connect using a Linux bridge")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"masquerade"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connect using iptables rules to NAT the traffic")))),(0,n.kt)("h3",{id:"management-network"},"Management Network"),(0,n.kt)("p",null,"A management network represents the default VM eth0 interface configured by the cluster network solution that is present in each VM."),(0,n.kt)("p",null,"By default, VMs are accessible through the management network within the cluster nodes."),(0,n.kt)("h3",{id:"secondary-network"},"Secondary Network"),(0,n.kt)("p",null,"It is also possible to connect VMs using additional networks with Harvester's built-in ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/networking/harvester-network"},"VLAN networks"),". "),(0,n.kt)("p",null,"In bridge VLAN, virtual machines are connected to the host network through a linux ",(0,n.kt)("inlineCode",{parentName:"p"},"bridge"),". The network IPv4 address is delegated to the virtual machine via DHCPv4. The virtual machine should be configured to use DHCP to acquire IPv4 addresses."),(0,n.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,n.kt)("h3",{id:"run-strategy"},"Run Strategy"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.0.2")),(0,n.kt)("p",null,"Prior to v1.0.2, Harvester used the ",(0,n.kt)("inlineCode",{parentName:"p"},"Running")," (a boolean) field to determine if the VM instance should be running. However, a simple boolean value is not always sufficient to fully describe the user's desired behavior. For example, in some cases the user wants to be able to shut down the instance from inside the virtual machine. If the ",(0,n.kt)("inlineCode",{parentName:"p"},"running")," field is used, the VM will be restarted immediately."),(0,n.kt)("p",null,"In order to meet the scenario requirements of more users, the ",(0,n.kt)("inlineCode",{parentName:"p"},"RunStrategy")," field is introduced. This is mutually exclusive with ",(0,n.kt)("inlineCode",{parentName:"p"},"Running")," because their conditions overlap somewhat. There are currently four ",(0,n.kt)("inlineCode",{parentName:"p"},"RunStrategies")," defined:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Always: The VM instance will always exist. If VM instance crashes, a new one will be spawned. This is the same behavior as ",(0,n.kt)("inlineCode",{parentName:"p"},"Running: true"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RerunOnFailure (default): If the previous instance failed in an error state, a VM instance will be respawned. If the guest is successfully stopped (e.g. shut down from inside the guest), it will not be recreated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Manual: The presence or absence of a VM instance is controlled only by the ",(0,n.kt)("inlineCode",{parentName:"p"},"start/stop/restart")," VirtualMachine actions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stop: There will be no VM instance. If the guest is already running, it will be stopped. This is the same behavior as ",(0,n.kt)("inlineCode",{parentName:"p"},"Running: false"),"."))),(0,n.kt)("h3",{id:"cloud-configuration"},"Cloud Configuration"),(0,n.kt)("p",null,"Harvester supports the ability to assign a startup script to a virtual machine instance which is executed automatically when the VM initializes."),(0,n.kt)("p",null,"These scripts are commonly used to automate injection of users and SSH keys into VMs in order to provide remote access to the machine. For example, a startup script can be used to inject credentials into a VM that allows an Ansible job running on a remote host to access and provision the VM."),(0,n.kt)("h4",{id:"cloud-init"},"Cloud-init"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," is a widely adopted project and the industry standard multi-distribution method for cross-platform cloud instance initialization. It is supported across all major cloud image provider like SUSE, Redhat, Ubuntu and etc., cloud-init has established itself as the defacto method of providing startup scripts to VMs."),(0,n.kt)("p",null,"Harvester supports injecting your custom cloud-init startup scripts into a VM instance through the use of an ephemeral disk. VMs with the cloud-init package installed will detect the ephemeral disk and execute custom user-data and network-data scripts at boot."),(0,n.kt)("p",null,"Example of password configuration for the default user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-YAML"},"#cloud-config\npassword: password\nchpasswd: { expire: False }\nssh_pwauth: True\n")),(0,n.kt)("p",null,"Example of network-data configuration using DHCP:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-YAML"},"network:\n  version: 1\n  config:\n    - type: physical\n      name: eth0\n      subnets:\n        - type: dhcp\n    - type: physical\n      name: eth1\n      subnets:\n        - type: dhcp\n")),(0,n.kt)("p",null,"You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Advanced > Cloud Config Templates")," feature to create a pre-defined cloud-init configuration template for the VM."),(0,n.kt)("h4",{id:"installing-the-qemu-guest-agent"},"Installing the QEMU guest agent"),(0,n.kt)("p",null,"The QEMU guest agent is a daemon that runs on the virtual machine instance and passes information to the host about the VM, users, file systems, and secondary networks."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Install guest agent")," checkbox is enabled by default when a new VM is created."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(79961).Z,width:"2554",height:"1267"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If your OS is openSUSE and the version is less than 15.3, please replace ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent.service")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-ga.service"),".")))}u.isMDXComponent=!0},44827:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-volumes-4fdb59c15a62916e8412f7fe894976bb.png"},98842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-0ca8943777f01beee7fa8462995631ee.png"},79961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/qga-90f05b81749ae9d4778770e240da5c55.png"}}]);