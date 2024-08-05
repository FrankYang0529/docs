"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[34138],{97299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});a(67294);var n=a(3905);const i={sidebar_position:2,sidebar_label:"Create a Windows Virtual Machine",title:"Create a Windows Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Windows","windows","Virtual Machine","virtual machine","Create a Windows VM"],description:"Create one or more Windows virtual machines from the Virtual Machines page."},o=void 0,r={unversionedId:"vm/create-windows-vm",id:"version-v1.0/vm/create-windows-vm",title:"Create a Windows Virtual Machine",description:"Create one or more Windows virtual machines from the Virtual Machines page.",source:"@site/versioned_docs/version-v1.0/vm/create-windows-vm.md",sourceDirName:"vm",slug:"/vm/create-windows-vm",permalink:"/v1.0/vm/create-windows-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/vm/create-windows-vm.md",tags:[],version:"v1.0",lastUpdatedAt:1722560913,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Create a Windows Virtual Machine",title:"Create a Windows Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Windows","windows","Virtual Machine","virtual machine","Create a Windows VM"],description:"Create one or more Windows virtual machines from the Virtual Machines page."},sidebar:"api",previous:{title:"Create a Virtual Machine",permalink:"/v1.0/vm/create-vm"},next:{title:"Edit a Virtual Machine",permalink:"/v1.0/vm/edit-vm"}},l={},d=[{value:"How to Create a Windows VM",id:"how-to-create-a-windows-vm",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Basics Tab",id:"basics-tab",level:3},{value:"Volumes Tab",id:"volumes-tab",level:3},{value:"Networks Tab",id:"networks-tab",level:3},{value:"Node Scheduling Tab",id:"node-scheduling-tab",level:3},{value:"Advanced Options Tab",id:"advanced-options-tab",level:3},{value:"Footer Section",id:"footer-section",level:3},{value:"Installation of Windows",id:"installation-of-windows",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Windows ISO unable to boot when using EFI mode",id:"windows-iso-unable-to-boot-when-using-efi-mode",level:3},{value:"VM crashes when reserved memory not enough",id:"vm-crashes-when-reserved-memory-not-enough",level:3},{value:"BSoD (Blue Screen of Death) at first boot time of Windows",id:"bsod-blue-screen-of-death-at-first-boot-time-of-windows",level:3}],s={toc:d},m="wrapper";function p({components:e,...t}){return(0,n.kt)(m,{...s,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/create-windows-vm"})),(0,n.kt)("p",null,"Create one or more virtual machines from the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," page."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For creating Linux virtual machines, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/vm/create-vm"},"this page"),".")),(0,n.kt)("h2",{id:"how-to-create-a-windows-vm"},"How to Create a Windows VM"),(0,n.kt)("h3",{id:"header-section"},"Header Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a single VM instance or multiple VM instances."),(0,n.kt)("li",{parentName:"ol"},"Set the VM name."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Provide a description for the VM."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Select the VM template ",(0,n.kt)("inlineCode",{parentName:"li"},"windows-iso-image-base-template"),". This template will add a volume with the ",(0,n.kt)("inlineCode",{parentName:"li"},"virtio")," drivers for Windows.")),(0,n.kt)("h3",{id:"basics-tab"},"Basics Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Configure the number of ",(0,n.kt)("inlineCode",{parentName:"li"},"CPU")," cores assigned to the VM."),(0,n.kt)("li",{parentName:"ol"},"Configure the amount of ",(0,n.kt)("inlineCode",{parentName:"li"},"Memory")," assigned to the VM."),(0,n.kt)("li",{parentName:"ol"},"(Optional) Select existing ",(0,n.kt)("inlineCode",{parentName:"li"},"SSH keys")," or upload new ones.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-windows-vm",src:a(47235).Z,width:"1920",height:"1080"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"As mentioned above, it is recommended that you use the Windows VM template. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Volumes")," section will describe the options which the Windows VM template created automatically.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"bootOrder")," values need to be set with the installation image first. If you change it, your VM might not boot into the installation disk.")),(0,n.kt)("h3",{id:"volumes-tab"},"Volumes Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"first volume")," is an ",(0,n.kt)("inlineCode",{parentName:"li"},"Image Volume")," with the following values: ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Name"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"cdrom-disk")," is set by default. You can keep it or change it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Image"),": Select the Windows image to be installed. See ",(0,n.kt)("a",{parentName:"li",href:"/v1.0/upload-image"},"Upload Images")," for the full description on how to create new images."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Type"),": Select ",(0,n.kt)("inlineCode",{parentName:"li"},"cd-rom"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Size"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"20")," is set by default. You can change it if your image has a bigger size."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Bus"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"SATA")," is set by default. It's recommended you don't change it."))),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"second volume")," is a ",(0,n.kt)("inlineCode",{parentName:"li"},"Volume")," with the following values:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Name"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"rootdisk")," is set by default. You can keep it or change it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Size"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"32")," is set by default. See the disk space requirements for ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/get-started/hardware-requirements#storage-controller-and-disk-space-requirements"},"Windows Server")," and ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/whats-new/windows-11-requirements#hardware-requirements"},"Windows 11")," before changing this value."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Bus"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"VirtIO")," is set by default. You can keep it or change it to the other available options, ",(0,n.kt)("inlineCode",{parentName:"li"},"SATA")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"SCSI"),"."))),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"third volume")," is a ",(0,n.kt)("inlineCode",{parentName:"li"},"Container")," with the following values:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Name"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"virtio-container-disk")," is set by default. You can keep it or change it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Docker Image"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"registry.suse.com/suse/vmdp/vmdp:2.5.3")," is set by default. It's recommended you don't change it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Bus"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"SATA")," is set by default. It's recommended you don't change it."))),(0,n.kt)("li",{parentName:"ol"},"You can add additional disks using the buttons ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Volume"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Existing Volume"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Add VM Image"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Container"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-windows-vm-volumes",src:a(66056).Z,width:"1920",height:"1080"})),(0,n.kt)("h3",{id:"networks-tab"},"Networks Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},"Management Network")," is added by default with the following values: ",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Name"),":  The value ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," is set by default. You can keep it or change it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Network"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"management Network")," is set by default. You can't change this option if no other network has been created. See ",(0,n.kt)("a",{parentName:"li",href:"/v1.0/networking/harvester-network"},"Harvester Network")," for the full description on how to create new networks."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Model"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"e1000")," is set by default. You can keep it or change it to the other available options from the dropdown."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Type"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"masquerade")," is set by default. You can keep it or change it to the other available option, ",(0,n.kt)("inlineCode",{parentName:"li"},"bridge"),"."))),(0,n.kt)("li",{parentName:"ol"},"You can add additional networks by clicking  ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Network"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-windows-vm-networks",src:a(7297).Z,width:"1920",height:"1080"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Changing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Node Scheduling")," settings can impact Harvester features, such as disabling ",(0,n.kt)("inlineCode",{parentName:"p"},"Live migration"),".")),(0,n.kt)("h3",{id:"node-scheduling-tab"},"Node Scheduling Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Node Scheduling")," is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"Run VM on any available node")," by default. You can keep it or change it to the other available options from the dropdown.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-windows-vm-scheduling",src:a(1244).Z,width:"1920",height:"1080"})),(0,n.kt)("h3",{id:"advanced-options-tab"},"Advanced Options Tab"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"OS Type"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"Windows")," is set by default. It's recommended you don't change it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Machine Type"),": The value ",(0,n.kt)("inlineCode",{parentName:"li"},"None")," is set by default. It's recommended you don't change it. See the ",(0,n.kt)("a",{parentName:"li",href:"https://kubevirt.io/user-guide/virtual_machines/virtual_hardware/#machine-type"},"KubeVirt Machine Type")," documentation before you change this value."),(0,n.kt)("li",{parentName:"ol"},"(Optional) ",(0,n.kt)("inlineCode",{parentName:"li"},"Hostname"),": Set the VM hostname."),(0,n.kt)("li",{parentName:"ol"},"(Optional) ",(0,n.kt)("inlineCode",{parentName:"li"},"Cloud Config"),": Both ",(0,n.kt)("inlineCode",{parentName:"li"},"User Data")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Network Data")," values are set with default values. Currently, these configurations are not applied to Windows-based VMs.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-windows-vm-advanced",src:a(32091).Z,width:"1920",height:"1080"})),(0,n.kt)("h3",{id:"footer-section"},"Footer Section"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Start virtual machine on creation"),": This option is checked by default. You can uncheck it if you don't want the VM to start once it's created.")),(0,n.kt)("p",null,"Once all the settings are in place, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Create")," to create the VM."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you need to add advanced settings, you can edit the VM configuration directly by clicking on ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit as YAML"),".\nAnd if you want to cancel all changes made, click ",(0,n.kt)("inlineCode",{parentName:"p"},"Cancel"),".")),(0,n.kt)("h2",{id:"installation-of-windows"},"Installation of Windows"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the VM you just created, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Start")," to boot up the VM.(If you checked ",(0,n.kt)("inlineCode",{parentName:"p"},"Start virtual machine on creation")," the VM will start automatically once it's created)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Boot into the installer, and follow the instructions given by the installer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) If you are using ",(0,n.kt)("inlineCode",{parentName:"p"},"virtio")," based volumes, you will need to load the specific driver to allow the installer to detect them. If you're using VM template ",(0,n.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template"),", the instruction is as follows:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Load driver"),", and then click ",(0,n.kt)("inlineCode",{parentName:"li"},"Browse")," on the dialog box, and find a CD-ROM drive with a ",(0,n.kt)("inlineCode",{parentName:"li"},"VMDP-WIN")," prefix. Next, find the driver directory according to the Windows version you're installing; for example, Windows Server 2012r2 should expand ",(0,n.kt)("inlineCode",{parentName:"li"},"win8.1-2012r2")," and choose the ",(0,n.kt)("inlineCode",{parentName:"li"},"pvvx")," directory inside.\n",(0,n.kt)("img",{alt:"find-virtio-driver-directory",src:a(56401).Z,width:"477",height:"384"})),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"OK")," to allow the installer to scan this directory for drivers, choose ",(0,n.kt)("inlineCode",{parentName:"li"},"SUSE Block Driver for Windows"),", and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Next")," to load the driver.\n",(0,n.kt)("img",{alt:"select-virtio-block-driver",src:a(19342).Z,width:"656",height:"498"})),(0,n.kt)("li",{parentName:"ol"},"Wait for the installer to load up the driver. If you choose the correct driver version the ",(0,n.kt)("inlineCode",{parentName:"li"},"virtio")," volumes will be detected once the driver is loaded.\n",(0,n.kt)("img",{alt:"installer-found-virtio-drive",src:a(47229).Z,width:"641",height:"485"})))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) If you are using other ",(0,n.kt)("inlineCode",{parentName:"p"},"virtio")," based hardware like network adapter, you will need to install those drivers manually after completing the installation. To install drivers, open the VMDP driver disk, and use the installer based on your platform."))),(0,n.kt)("p",null,"The support matrix of VMDP driver pack for Windows are as follows (assume the VMDP CD-ROM drive path is E):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Supported"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Driver path"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows 7"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2008"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2008r2"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows 8 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win8-2012\\x86(x64)\\pvvx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2012 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win8-2012\\x86(x64)\\pvvx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows 8.1 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win8.1-2012r2\\x86(x64)\\pvvx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2012r2 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win8.1-2012r2\\x86(x64)\\pvvx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows 10 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2016 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2019 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows 11 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win10-2004\\x86(x64)\\pvvx"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2022 x86(x64)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"E:\\win10-2004\\x86(x64)\\pvvx"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you didn't use the ",(0,n.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template")," template, and you still need ",(0,n.kt)("inlineCode",{parentName:"p"},"virtio")," devices, please make sure to add your custom Windows virtio driver to allow it to detect the hardware correctly.")),(0,n.kt)("h2",{id:"known-issues"},"Known Issues"),(0,n.kt)("h3",{id:"windows-iso-unable-to-boot-when-using-efi-mode"},"Windows ISO unable to boot when using EFI mode"),(0,n.kt)("p",null,"When using EFI mode with Windows, you may find the system booted with other devices like HDD or UEFI shell like the one below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"efi-shell",src:a(85685).Z,width:"800",height:"608"})),(0,n.kt)("p",null,"That's because Windows will prompt a ",(0,n.kt)("inlineCode",{parentName:"p"},"Press any key to boot from CD or DVD...")," to let the user decide whether to boot from the installer ISO or not, and it needs human intervention to allow the system to boot from CD or DVD."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"boot-from-cd",src:a(79264).Z,width:"818",height:"621"})),(0,n.kt)("p",null,"Alternately if the system has already booted into the UEFI shell, you can type in ",(0,n.kt)("inlineCode",{parentName:"p"},"reset")," to force the system to reboot again. Once the prompt appears you can press any key to let system boot from Windows ISO."),(0,n.kt)("h3",{id:"vm-crashes-when-reserved-memory-not-enough"},"VM crashes when reserved memory not enough"),(0,n.kt)("p",null,"There is a known issue with Windows VM when it is allocated more than 8GiB without enough reserve memory configured. The VM crashes without warning."),(0,n.kt)("p",null,"This can be fixed by allocating at least 256MiB of reserved memory to the template on the Advanced Options tab."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"reserved-memory-config",src:a(12103).Z,width:"1244",height:"501"})),(0,n.kt)("p",null,"We will add a default 256MiB of reserved memory to the Windows template to prevent this problem in the future release."),(0,n.kt)("h3",{id:"bsod-blue-screen-of-death-at-first-boot-time-of-windows"},"BSoD (Blue Screen of Death) at first boot time of Windows"),(0,n.kt)("p",null,"There is a known issue with Windows VM using Windows Server 2016 and above, a BSoD with error code ",(0,n.kt)("inlineCode",{parentName:"p"},"KMODE_EXCEPTION_NOT_HANDLED")," may appears at the first boot time of Windows. We are still looking into it and will fix this issue in the future release."),(0,n.kt)("p",null,"As a workaround, you can create or modify the file ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/kvm.conf")," within the installation of Harvester by updating ",(0,n.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml")," like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-YAML"},'name: Harvester Configuration\nstages:\n  initramfs:\n  - commands: # ...\n    files:\n    - path: /etc/modprobe.d/kvm.conf\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n          options kvm ignore_msrs=1\n      encoding: ""\n      ownerstring: ""\n      # ...\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This is still an experimental solution. For more information, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/276"},"this issue")," and please let us know if you have encountered any issues after applying this workaround.")))}p.isMDXComponent=!0},79264:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/boot-from-cd-5d0271f20ded1ac63970bc78f9da9ec5.png"},32091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-windows-vm-advanced-c8455fc5cdf66e23baf842adb44de30b.png"},7297:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-windows-vm-networks-1a29d10728925ba8f4edc495d26a7421.png"},1244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-windows-vm-scheduling-ffa18f9b5afd614db7aa8a50082f827e.png"},66056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-windows-vm-volumes-b654694515256a1d4a14655cc5241b90.png"},47235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-windows-vm-bd4beb4bebfe8c490ddd02d838760d56.png"},85685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/efi-shell-830d79cf172af786bad73c8dc479fe31.png"},56401:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/find-virtio-driver-directory-5be0d2673d0b8c1c34d87a6962da065f.png"},47229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/installer-found-virtio-drive-09000201fe0e2d95e1aec7e2a84e35b3.png"},12103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/reserved-memory-config-e07eb981514d4cc4b8a00e43acfaaa71.png"},19342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-virtio-block-driver-d72f63b4b89cb0c8fe7b4b8b9eb9971b.png"}}]);