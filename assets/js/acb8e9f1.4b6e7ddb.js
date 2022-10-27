"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8292],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:3,sidebar_label:"Upgrade from v1.0.0 to v1.0.1",title:""},o="Upgrade from v1.0.0 to v1.0.1",s={unversionedId:"upgrade/previous-releases/v1-0-0-to-v1-0-1",id:"upgrade/previous-releases/v1-0-0-to-v1-0-1",title:"",description:"This document describes how to upgrade from Harvester v1.0.0 to v1.0.1.",source:"@site/docs/upgrade/previous-releases/v1-0-0-to-v1-0-1.md",sourceDirName:"upgrade/previous-releases",slug:"/upgrade/previous-releases/v1-0-0-to-v1-0-1",permalink:"/v1.1/upgrade/previous-releases/v1-0-0-to-v1-0-1",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/previous-releases/v1-0-0-to-v1-0-1.md",tags:[],version:"current",lastUpdatedAt:1666689083,formattedLastUpdatedAt:"Oct 25, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Upgrade from v1.0.0 to v1.0.1",title:""},sidebar:"tutorialSidebar",previous:{title:"Upgrade from v1.0.1 to v1.0.2",permalink:"/v1.1/upgrade/previous-releases/v1-0-1-to-v1-0-2"},next:{title:"Authentication",permalink:"/v1.1/authentication"}},l={},p=[{value:"Create a version",id:"create-a-version",level:2},{value:"Start the upgrade",id:"start-the-upgrade",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Fail to download upgrade image",id:"fail-to-download-upgrade-image",level:3},{value:"Stuck in <strong>Upgrading System Service</strong>",id:"stuck-in-upgrading-system-service",level:3},{value:"VMs fail to migrate",id:"vms-fail-to-migrate",level:3},{value:"fleet-local/local: another operation (install/upgrade/rollback) is in progress",id:"fleet-locallocal-another-operation-installupgraderollback-is-in-progress",level:3},{value:"Single node upgrade might fail if node name is too long (&gt;24 characters)",id:"single-node-upgrade-might-fail-if-node-name-is-too-long-24-characters",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upgrade-from-v100-to-v101"},"Upgrade from v1.0.0 to v1.0.1"),(0,n.kt)("p",null,"This document describes how to upgrade from Harvester ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.0.0")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.0.1"),"."),(0,n.kt)("p",null,"Note we are still working towards zero-downtime upgrade, due to some known issues please follow the steps below before you upgrade your Harvester cluster:"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Before you upgrade your Harvester cluster, we highly recommend:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Shutting down all your VMs (Harvester GUI -> Virtual Machines -> Select VMs -> Actions -> Stop)."),(0,n.kt)("li",{parentName:"ul"},"Back up your VMs."))),(0,n.kt)("li",{parentName:"ul"},"Do not operate the cluster during an upgrade. For example, creating new VMs, uploading new images, etc."),(0,n.kt)("li",{parentName:"ul"},"Make sure your hardware meets the ",(0,n.kt)("strong",{parentName:"li"},"preferred")," ",(0,n.kt)("a",{parentName:"li",href:"/v1.1/#hardware-requirements"},"hardware requirements"),". This is due to there will be intermediate resources consumed by an upgrade."),(0,n.kt)("li",{parentName:"ul"},"Make sure each node has at least 25 GB of free space (",(0,n.kt)("inlineCode",{parentName:"li"},"df -h /usr/local/"),")."))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure all nodes' times are in sync. Using an NTP server to synchronize time is recommended. If an NTP server is not configured during the installation, you can manually add an NTP server ",(0,n.kt)("strong",{parentName:"p"},"on each node"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo -i\n\n# Add time servers\n$ vim /etc/systemd/timesyncd.conf\n[ntp]\nNTP=0.pool.ntp.org\n\n# Enable and start the systemd-timesyncd\n$ timedatectl set-ntp true\n\n# Check status\n$ timedatectl status\n"))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"NICs that connect to a PCI bridge might be renamed after an upgrade. Please check the ",(0,n.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/nic-naming-scheme"},"knowledge base article")," for further information."))),(0,n.kt)("h2",{id:"create-a-version"},"Create a version"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Log in to one of your server nodes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Become root and create a version:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"rancher@node1:~> sudo -i\n\nnode1:~ # kubectl create -f https://releases.rancher.com/harvester/v1.0.1/version.yaml\nversion.harvesterhci.io/1.0.1 created\n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"By default, the ISO image is downloaded from the Harvester release server. To speed up the upgrade and make the upgrade progress smoother, the user can also download the ISO file to a local HTTP server first and substitute the ",(0,n.kt)("inlineCode",{parentName:"p"},"isoURL")," value in the ",(0,n.kt)("inlineCode",{parentName:"p"},"version.yaml")," manifest."),(0,n.kt)("p",{parentName:"admonition"},"e.g.,"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"# Download the ISO from release server first, assume it's store in http://10.10.0.1/harvester.iso\n$ sudo -i\n$ curl -fL https://releases.rancher.com/harvester/v1.0.1/version.yaml -o version.yaml\n$ vim version.yaml \napiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n  name: v1.0.1\n  namespace: harvester-system\nspec:\n  isoChecksum: <SHA-512 checksum of the ISO> \n  isoURL: http://10.10.0.1/harvester.iso\n  releaseDate: '20220408'\n"))),(0,n.kt)("h2",{id:"start-the-upgrade"},"Start the upgrade"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure to read the Warning paragraph at the top of this document first.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Navigate to Harvester GUI and click the upgrade button on the Dashboard page."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(60369).Z,width:"1910",height:"812"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select a version to start upgrading."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(88045).Z,width:"1030",height:"598"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the circle on the top to display the upgrade progress.\n",(0,n.kt)("img",{src:a(40826).Z,width:"1910",height:"1124"})))),(0,n.kt)("h2",{id:"known-issues"},"Known issues"),(0,n.kt)("h3",{id:"fail-to-download-upgrade-image"},"Fail to download upgrade image"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Description")),(0,n.kt)("p",{parentName:"li"},"  Downloading the upgrade image can't complete."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(97495).Z,width:"372",height:"468"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Workaround")),(0,n.kt)("p",{parentName:"li"},"  We can delete the current upgrade and start over."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# log in to one of the server nodes\n$ sudo -i\n\n# list current upgrade, the name changes between deployments\n$ kubectl get upgrades.harvesterhci.io -n harvester-system\nNAMESPACE          NAME                 AGE\nharvester-system   hvst-upgrade-77cks   119m\n\n$ kubectl delete upgrades.harvesterhci.io hvst-upgrade-77cks -n harvester-system\n")),(0,n.kt)("p",{parentName:"li"},"  We recommend mirroring the ISO file to a local webserver, please check the notes in the ",(0,n.kt)("a",{parentName:"p",href:"#create-a-version"},"previous section"),"."))),(0,n.kt)("h3",{id:"stuck-in-upgrading-system-service"},"Stuck in ",(0,n.kt)("strong",{parentName:"h3"},"Upgrading System Service")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Description")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The upgrade is stuck at ",(0,n.kt)("strong",{parentName:"p"},"Upgrading System service"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Similar logs are found in rancher pods:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"[ERROR] available chart version (100.0.2+up0.3.8) for fleet is less than the min version (100.0.3+up0.3.9-rc1) \n[ERROR] Failed to find system chart fleet will try again in 5 seconds: no chart name found\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Workaround")),(0,n.kt)("p",{parentName:"li"},"  Delete rancher cluster repositories and restart rancher pods."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# login to a server node and become root first\nkubectl delete clusterrepos.catalog.cattle.io rancher-charts\nkubectl delete clusterrepos.catalog.cattle.io rancher-rke2-charts\nkubectl delete clusterrepos.catalog.cattle.io rancher-partner-charts\nkubectl delete settings.management.cattle.io chart-default-branch\nkubectl rollout restart deployment rancher -n cattle-system\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Related issues")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2011"},'[BUG] Rancher upgrade fail: Failed to find system chart "fleet"'))))),(0,n.kt)("h3",{id:"vms-fail-to-migrate"},"VMs fail to migrate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Description")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A node keeps waiting in ",(0,n.kt)("inlineCode",{parentName:"li"},"Pre-draining")," state."),(0,n.kt)("li",{parentName:"ul"},"There are VMs on that node (checking for ",(0,n.kt)("inlineCode",{parentName:"li"},"virt-launcher-xxx")," pods) and they can't be live-migrated out of the node."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Workaround")),(0,n.kt)("p",{parentName:"li"},"  Shutdown the VMs, you can do this by:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Using the GUI."),(0,n.kt)("li",{parentName:"ul"},"Using the ",(0,n.kt)("inlineCode",{parentName:"li"},"virtctl")," command."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Related issues")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2029"},"[BUG] Upgrade: VMs fail to live-migrate to other hosts in some cases"))))),(0,n.kt)("h3",{id:"fleet-locallocal-another-operation-installupgraderollback-is-in-progress"},"fleet-local/local: another operation (install/upgrade/rollback) is in progress"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Description")),(0,n.kt)("p",{parentName:"li"},"  You see bundles have ",(0,n.kt)("inlineCode",{parentName:"p"},"fleet-local/local: another operation (install/upgrade/rollback) is in progress")," status in the output:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get bundles -A\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Related issues")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/1983"},"[BUG] Upgrade: rancher-monitoring charts can't be upgraded"))))),(0,n.kt)("h3",{id:"single-node-upgrade-might-fail-if-node-name-is-too-long-24-characters"},"Single node upgrade might fail if node name is too long (>24 characters)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Related issues"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2114"},"https://github.com/harvester/harvester/issues/2114"))))))}d.isMDXComponent=!0},97495:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/known_issue_downloading_image_failure-e5c4ab5abb0ac17b4aaaa166991ad825.png"},60369:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_button-cba6e7e3b12154a0c675fe149c719d4c.png"},40826:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_progress-9f571e740ff5c16d9fc0fc6518ee7b73.png"},88045:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_select_version-cee0dbf88994b0b636f3df5ed2e47ae4.png"}}]);