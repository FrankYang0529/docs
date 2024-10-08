"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[79206],{61447:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>o});a(67294);var s=a(3905);const n={sidebar_position:9,sidebar_label:"Net Install ISO",title:"Net Install ISO",keywords:["Harvester","Net ISO Installation","BMC ISO Redirection","BMC Virtual Media"],description:"Harvester Net Install ISO is a minimal ISO that contains only the OS binaries. It's useful for some situations."},i=void 0,l={unversionedId:"install/net-install",id:"version-v1.3/install/net-install",title:"Net Install ISO",description:"Harvester Net Install ISO is a minimal ISO that contains only the OS binaries. It's useful for some situations.",source:"@site/versioned_docs/version-v1.3/install/net-install.md",sourceDirName:"install",slug:"/install/net-install",permalink:"/v1.3/install/net-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/install/net-install.md",tags:[],version:"v1.3",lastUpdatedAt:1728308548,formattedLastUpdatedAt:"Oct 7, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Net Install ISO",title:"Net Install ISO",keywords:["Harvester","Net ISO Installation","BMC ISO Redirection","BMC Virtual Media"],description:"Harvester Net Install ISO is a minimal ISO that contains only the OS binaries. It's useful for some situations."},sidebar:"api",previous:{title:"Install Harvester Binaries Only",permalink:"/v1.3/install/install-binaries-mode"},next:{title:"Air Gapped Environment",permalink:"/v1.3/airgap"}},r={},o=[{value:"Usage",id:"usage",level:2},{value:"PXE Installation",id:"pxe-installation",level:2}],h={toc:o},d="wrapper";function u({components:e,...t}){return(0,s.kt)(d,{...h,...t,components:e,mdxType:"MDXLayout"},(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/install/net-install"})),(0,s.kt)("p",null,"The Harvester net install ISO is a minimal installation image that contains only the core OS components, allowing the installer to boot and then install the Harvester OS on a disk. After installation is completed, the Harvester OS pulls all required container images from the internet (mostly from Docker Hub)."),(0,s.kt)("p",null,"You can use the net install ISO in the following situations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The virtual media implementation on a server is buggy or slow. Community users have reported that ISO redirection is too slow to preload all images onto a system. For more information, see ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2651"},"Issue 2651"),"."),(0,s.kt)("li",{parentName:"ul"},"You have a private registry that contains all Harvester images, as well as the knowledge and experience required to configure image mirrors for containerd.")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"You must always use the full ISO to bootstrap a Harvester cluster")," (in other words, use the ISO without the ",(0,s.kt)("inlineCode",{parentName:"p"},"-net-install")," suffix). The full ISO contains all required images, and the installer preloads those images during installation. You can easily reach the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/download-rate-limit/"},"Docker Hub rate limit")," when using a net install ISO to bootstrap the Harvester cluster.")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Download the net install ISO from the GitHub ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Releases")," page, and then boot the ISO to install Harvester. Net install ISO file names have the suffix ",(0,s.kt)("inlineCode",{parentName:"p"},"net-install")," (for example, ",(0,s.kt)("a",{parentName:"p",href:"https://releases.rancher.com/harvester/v1.3.0/harvester-v1.3.0-amd64-net-install.iso"},"https://releases.rancher.com/harvester/v1.3.0/harvester-v1.3.0-amd64-net-install.iso"),")."),(0,s.kt)("h2",{id:"pxe-installation"},"PXE Installation"),(0,s.kt)("p",null,"If you decide to use the net install ISO as the PXE installation source, add the following parameter when booting the kernel:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"harvester.install.with_net_images=true\n")),(0,s.kt)("p",null,"Please check ",(0,s.kt)("a",{parentName:"p",href:"/v1.3/install/pxe-boot-install"},"PXE Boot Installation")," for more information."))}u.isMDXComponent=!0}}]);