"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6707],{20147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});a(67294);var r=a(3905);const n={sidebar_position:1,sidebar_label:"Harvester Overview",slug:"/",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},i=void 0,o={unversionedId:"index",id:"version-v1.0/index",title:"Harvester Overview",description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix.",source:"@site/versioned_docs/version-v1.0/index.md",sourceDirName:".",slug:"/",permalink:"/v1.0/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/index.md",tags:[],version:"v1.0",lastUpdatedAt:1728308548,formattedLastUpdatedAt:"Oct 7, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Overview",slug:"/",title:"Harvester Overview",keywords:["Harvester","harvester","Rancher","rancher","Harvester Intro"],description:"Harvester is an open source hyper-converged infrastructure (HCI) software built on Kubernetes. It is an open source alternative to vSphere and Nutanix."},sidebar:"api",next:{title:"Requirements",permalink:"/v1.0/install/requirements"}},s={},l=[{value:"Harvester Features",id:"harvester-features",level:2},{value:"Harvester Architecture",id:"harvester-architecture",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"ISO Installation",id:"iso-installation",level:3},{value:"PXE/iPXE Installation",id:"pxeipxe-installation",level:3}],p={toc:l},d="wrapper";function u({components:e,...t}){return(0,r.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2"})),(0,r.kt)("p",null,"Harvester is an open-source ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hyper-converged_infrastructure"},"hyper-converged infrastructure")," (HCI) software built on Kubernetes. It is an open alternative to using a proprietary HCI stack that incorporates the design and ethos of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cloud_native_computing"},"Cloud Native Computing"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"harvester-ui",src:a(97813).Z,width:"2558",height:"1304"})),(0,r.kt)("h2",{id:"harvester-features"},"Harvester Features"),(0,r.kt)("p",null,"Harvester implements HCI on bare metal servers. Harvester is designed to use local, direct attached storage instead of complex external SANs. It ships as an integrated bootable appliance image that can be deployed directly to servers through an ISO or PXE boot artifact."),(0,r.kt)("p",null,"Some notable features of Harvester include the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"VM lifecycle management including SSH-Key injection, cloud-init, and graphic and serial port console"),(0,r.kt)("li",{parentName:"ol"},"VM live migration support"),(0,r.kt)("li",{parentName:"ol"},"Supported VM backup and restore"),(0,r.kt)("li",{parentName:"ol"},"Distributed block storage"),(0,r.kt)("li",{parentName:"ol"},"Multiple network interface controllers (NICs) in the VM connecting to the management network or VLANs"),(0,r.kt)("li",{parentName:"ol"},"Virtual Machine and cloud-init templates"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher"},"Rancher")," integration with multi-cluster management and the Harvester node driver"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/v1.0/install/pxe-boot-install"},"PXE/iPXE boot support")),(0,r.kt)("li",{parentName:"ol"},"Virtual IP and bond NIC support"),(0,r.kt)("li",{parentName:"ol"},"Monitoring integration")),(0,r.kt)("h2",{id:"harvester-architecture"},"Harvester Architecture"),(0,r.kt)("p",null,"The following diagram outlines a high-level architecture of Harvester:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(27241).Z,width:"943",height:"486"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://longhorn.io/"},"Longhorn")," is a lightweight, reliable and easy-to-use distributed block storage system for Kubernetes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubevirt.io/"},"KubeVirt")," is a virtual machine management add-on for Kubernetes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancher-sandbox/cOS-toolkit"},"Elemental for SLE-Micro 5.2")," (based on openSUSE Leap 15.3 before v1.0.3) is an immutable Linux distribution designed to remove as much OS maintenance as possible in a Kubernetes cluster.")),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"To get the Harvester server up and running, the following minimum hardware is required:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Requirements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,r.kt)("td",{parentName:"tr",align:"left"},"x86_64 only. Hardware-assisted virtualization is required. 8-core processor minimum; 16-core or above preferred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"32 GB minimum; 64 GB or above preferred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk Capacity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"140 GB minimum for testing; 500 GB or above preferred for production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk Performance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk (SSD/NVMe). Management nodes (first three nodes) must be ",(0,r.kt)("a",{parentName:"td",href:"https://www.suse.com/support/kb/doc/?id=000020100"},"fast enough for etcd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network Card"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum for testing; 10Gbps Ethernet recommended for production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network Switch"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Trunking of ports required for VLAN support")))),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"You can install Harvester via the ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/iso-install"},"ISO")," installation or the ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/pxe-boot-install"},"PXE")," boot installation. Instructions are provided in the sections below."),(0,r.kt)("h3",{id:"iso-installation"},"ISO Installation"),(0,r.kt)("p",null,"You can use the ISO to install Harvester directly on the bare metal server to form a Harvester cluster. Users can add one or many compute nodes to join the existing cluster."),(0,r.kt)("p",null,"To get the Harvester ISO, download it from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Github releases"),"."),(0,r.kt)("p",null,"During the installation, you can either choose to form a new cluster or join the node to an existing cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mount the Harvester ISO disk and boot the server by selecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester Installer"),".\n",(0,r.kt)("img",{alt:"iso-install.png",src:a(22457).Z,width:"1429",height:"789"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the installation mode by either creating a new Harvester cluster or by joining an existing one.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the installation device on which the Harvester cluster will be installed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: By default, Harvester uses ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GPT")," partitioning schema for both UEFI and BIOS. If you use the BIOS boot, then you will have the option to select ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Master_boot_record"},"MBR"),".\n",(0,r.kt)("img",{alt:"iso-install-disk.png",src:a(84545).Z,width:"2100",height:"674"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the hostname and select the network interface for the management network. By default, Harvester will create a bonded NIC named ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-mgmt"),", and the IP address can be configured via DHCP or a statically assigned one ",(0,r.kt)("small",null,"(Note: The Node IP can not change at the lifecycle of a Harvester cluster, in case the DHCP is used, the user must make sure the DHCP server always offers the same IP for the same Node. Due to a changed Node IP the related Node can not join the cluster, or even break the cluster)"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"iso-installed.png",src:a(72627).Z,width:"422",height:"317"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional: Configure the DNS servers; use commas as delimiters.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual IP")," which you can use to access the cluster or join other nodes to the cluster ",(0,r.kt)("small",null,"(Note: If your IP address is configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP, VIP must be different than any Node IP)"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster token"),". This token will be used for adding other nodes to the cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the login password of the host. The default SSH user is ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Recommended configuring the NTP server to make sure all nodes' times are synchronized. This defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.suse.pool.ntp.org"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) If you need to use an HTTP proxy to access the outside world, enter the proxy URL address here. Otherwise, leave this blank.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) You can choose to import SSH keys from a remote server URL. Your GitHub public keys can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com/<username>.keys"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) If you need to customize the host with a ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/harvester-configuration"},"Harvester configuration")," file, enter the HTTP URL here.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the installation options and Harvester will be installed to your host. The installation may take a few minutes to complete.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the installation is complete, the host will restart, and a console UI with management URL and status will be displayed. ",(0,r.kt)("small",null,"(You can Use F12 to switch between the Harvester console and the Shell)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The default URL of the web interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://your-virtual-ip"),".\n",(0,r.kt)("img",{alt:"iso-installed.png",src:a(31557).Z,width:"1580",height:"770"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Users will be prompted to set the password for the default ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," user at first login.\n",(0,r.kt)("img",{alt:"first-login.png",src:a(35244).Z,width:"2555",height:"1295"})))),(0,r.kt)("div",{class:"text-center"},(0,r.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/Ngsk7m6NYf4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h3",{id:"pxeipxe-installation"},"PXE/iPXE Installation"),(0,r.kt)("p",null,"Harvester can also be installed automatically. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/pxe-boot-install"},"PXE Boot Install")," for detailed instructions and additional guidance."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"More iPXE usage examples are available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/ipxe-examples"},"harvester/ipxe-examples"),".")))}u.isMDXComponent=!0},27241:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/architecture-6e8723efeab0d976b53f60c563e3e843.svg"},97813:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dashboard-dbd4bec01989ce3a6a3bb94a79f130f7.png"},35244:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},84545:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iso-install-disk-448de385a9bb510d494266872258c964.png"},22457:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iso-install-6aba87041f92c999707af7cea0f6619c.png"},31557:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iso-installed-f4263be997514c7510a5865390e66421.png"},72627:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iso-nic-config-4bb63338169e1e0595130056ad1676c0.gif"}}]);