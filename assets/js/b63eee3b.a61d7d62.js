"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7408],{59205:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>o});a(67294);var r=a(3905);const n={id:"requirements",sidebar_position:1,sidebar_label:"Hardware and Network Requirements",title:"Hardware and Network Requirements",keywords:["Installation Requirements"],description:"Outline the Harvester installation requirements"},l=void 0,i={unversionedId:"install/requirements",id:"version-v1.1/install/requirements",title:"Hardware and Network Requirements",description:"Outline the Harvester installation requirements",source:"@site/versioned_docs/version-v1.1/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/v1.1/install/requirements",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/install/requirements.md",tags:[],version:"v1.1",lastUpdatedAt:1722560913,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:1,frontMatter:{id:"requirements",sidebar_position:1,sidebar_label:"Hardware and Network Requirements",title:"Hardware and Network Requirements",keywords:["Installation Requirements"],description:"Outline the Harvester installation requirements"},sidebar:"api",previous:{title:"Harvester Overview",permalink:"/v1.1/"},next:{title:"ISO Installation",permalink:"/v1.1/install/iso-install"}},m={},o=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Network Requirements",id:"network-requirements",level:2},{value:"Port Requriements for Harvester Nodes",id:"port-requriements-for-harvester-nodes",level:3},{value:"Port Requirements for Integrating Harvester with Rancher",id:"port-requirements-for-integrating-harvester-with-rancher",level:3},{value:"Port Requirements for K3s or RKE/RKE2 Clusters",id:"port-requirements-for-k3s-or-rkerke2-clusters",level:3}],d={toc:o},s="wrapper";function p({components:t,...e}){return(0,r.kt)(s,{...d,...e,components:t,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/requirements"})),(0,r.kt)("p",null,"As an HCI solution on bare metal servers, there are minimum node hardware and network requirements to install and run Harvester."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"Harvester nodes have the following hardware requirements and recommendations for installation and testing."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Requirements and Recommendations"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,r.kt)("td",{parentName:"tr",align:"left"},"x86_64 only. Hardware-assisted virtualization is required. 8-core processor minimum for testing; 16-core or above required for production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"32 GB minimum for testing; 64 GB or above required for production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk Capacity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200 GB minimum for testing; 500 GB or above required for production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk Performance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk(SSD/NVMe). Management nodes (first 3 nodes) must be ",(0,r.kt)("a",{parentName:"td",href:"https://www.suse.com/support/kb/doc/?id=000020100"},"fast enough for etcd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network Card"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum for testing; 10 Gbps Ethernet minimum required for production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network Switch"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Trunking of ports required for VLAN support")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A three-node cluster is required to realize the multi-node features of Harvester fully."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The first node always defaults to be a management node of the cluster."),(0,r.kt)("li",{parentName:"ul"},"When there are three or more nodes, the two other nodes added first are automatically promoted to management nodes to form a high availability (HA) cluster."),(0,r.kt)("li",{parentName:"ul"},"We recommend server-class hardware for the best results. Laptops and nested virtualization are not officially supported."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"product_uuid")," fetched from ",(0,r.kt)("inlineCode",{parentName:"li"},"/sys/class/dmi/id/product_uuid")," in Linux must be unique in each node. Otherwise, features like VM live migration will be affected. For more information, refer to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4025"},"#4025"),"."))),(0,r.kt)("h2",{id:"network-requirements"},"Network Requirements"),(0,r.kt)("p",null,"Harvester nodes have the following network requirements for installation."),(0,r.kt)("h3",{id:"port-requriements-for-harvester-nodes"},"Port Requriements for Harvester Nodes"),(0,r.kt)("p",null,"Harvester nodes require the following port connections or inbound rules. Typically, all outbound traffic is allowed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Port"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Source"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2379"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd client port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2381"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2380"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd peer port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10010"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Containerd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6443"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9345"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10252"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10257"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager secure port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10251"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10259"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler secure port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10250"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubelet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-proxy health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10258"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-controller-manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9091"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal calico-node felix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9099"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal CNI health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8472"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal CNI with VxLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2112"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-vip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6444"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RKE2 agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6060"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-disk-manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10246/10247/10248/10249"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx worker process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8181"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8444"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10245"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"80"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9796"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-exporter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30000-32767"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NodePort port range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sshd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"68"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wicked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3260"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"iscsid")))),(0,r.kt)("h3",{id:"port-requirements-for-integrating-harvester-with-rancher"},"Port Requirements for Integrating Harvester with Rancher"),(0,r.kt)("p",null,"If you want to ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/rancher/rancher-integration"},"integrate Harvester with Rancher"),", you need to make sure that all Harvester nodes can connect to TCP port ",(0,r.kt)("strong",{parentName:"p"},"443")," of the Rancher load balancer."),(0,r.kt)("p",null,"When provisioning VMs with Kubernetes clusters from Rancher into Harvester, you need to be able to connect to TCP port ",(0,r.kt)("strong",{parentName:"p"},"443")," of the Rancher load balancer. Otherwise, the cluster won't be manageable by Rancher. For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/"},"Rancher Architecture"),"."),(0,r.kt)("h3",{id:"port-requirements-for-k3s-or-rkerke2-clusters"},"Port Requirements for K3s or RKE/RKE2 Clusters"),(0,r.kt)("p",null,"For the port requirements for guest clusters deployed inside Harvester VMs, refer to the following links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking"},"K3s Networking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"RKE Ports")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/requirements#networking"},"RKE2 Networking"))))}p.isMDXComponent=!0}}]);