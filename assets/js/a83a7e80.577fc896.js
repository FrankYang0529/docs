"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[98707],{70026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});r(67294);var a=r(3905);const n={sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},i=void 0,l={unversionedId:"rancher/cloud-provider",id:"version-v0.3/rancher/cloud-provider",title:"Harvester Cloud Provider",description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer.",source:"@site/versioned_docs/version-v0.3/rancher/cloud-provider.md",sourceDirName:"rancher",slug:"/rancher/cloud-provider",permalink:"/v0.3/rancher/cloud-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/cloud-provider.md",tags:[],version:"v0.3",lastUpdatedAt:1724398153,formattedLastUpdatedAt:"Aug 23, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},sidebar:"api",previous:{title:"Creating an RKE2 Kubernetes Cluster",permalink:"/v0.3/rancher/node/rke2-cluster"},next:{title:"Harvester CSI Driver",permalink:"/v0.3/rancher/csi-driver"}},o={},s=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying to the RKE1 Cluster with Harvester Node Driver",id:"deploying-to-the-rke1-cluster-with-harvester-node-driver",level:3},{value:"Deploying to the RKE2 Cluster with Harvester Node Driver",id:"deploying-to-the-rke2-cluster-with-harvester-node-driver",level:3},{value:"Load Balancer Support",id:"load-balancer-support",level:2},{value:"IPAM",id:"ipam",level:3},{value:"Health Checks",id:"health-checks",level:3}],d={toc:s},p="wrapper";function c({components:e,...t}){return(0,a.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/cloud-provider"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,a.kt)("p",null,"Users can now provision both ",(0,a.kt)("a",{parentName:"p",href:"/v0.3/rancher/node/rke1-cluster"},"RKE1")," and ",(0,a.kt)("a",{parentName:"p",href:"/v0.3/rancher/node/rke2-cluster"},"RKE2")," clusters in Rancher 2.6.1, using the built-in Harvester Node Driver. Harvester can now provide ",(0,a.kt)("a",{parentName:"p",href:"#load-balancer-support"},"load balancer")," support as well as ",(0,a.kt)("a",{parentName:"p",href:"/v0.3/rancher/csi-driver"},"cluster Persistent Storage")," support to the guest Kubernetes cluster."),(0,a.kt)("p",null,"In this page we will learn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to deploy the Harvester cloud provider in both RKE1 and RKE2."),(0,a.kt)("li",{parentName:"ul"},"How to configure a ",(0,a.kt)("a",{parentName:"li",href:"#load-balancer-support"},"LoadBalancer service"),".")),(0,a.kt)("h2",{id:"deploying"},"Deploying"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,a.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace.")),(0,a.kt)("h3",{id:"deploying-to-the-rke1-cluster-with-harvester-node-driver"},"Deploying to the RKE1 Cluster with Harvester Node Driver"),(0,a.kt)("p",null,"When spinning up an RKE cluster using the Harvester node driver, you can perform two steps to deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"External")," cloud provider."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(35985).Z,width:"2628",height:"1302"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Generate add-on configuration and add it to the RKE YAML file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# depend on kubectl to operate the Harvester cluster\ncurl -sfL https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh | sh -s <serviceAccount name> <namespace>\n")))),(0,a.kt)("h3",{id:"deploying-to-the-rke2-cluster-with-harvester-node-driver"},"Deploying to the RKE2 Cluster with Harvester Node Driver"),(0,a.kt)("p",null,"When spinning up an RKE2 cluster using the Harvester node driver, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider. The node driver will then help deploy both the CSI driver and CCM automatically."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(45349).Z,width:"1669",height:"315"})),(0,a.kt)("h2",{id:"load-balancer-support"},"Load Balancer Support"),(0,a.kt)("p",null,"After deploying the Harvester cloud provider, users can now configure a Kubernetes service of the type ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),". Currently, users can only set the load balancer configuration using ",(0,a.kt)("inlineCode",{parentName:"p"},"service annotations"),"."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(44315).Z,width:"3578",height:"1958"})),(0,a.kt)("admonition",{title:"Example",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can specify the Harvester LoadBalancer service config through annotations. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/healthcheck-port")," annotation is required. For example:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cloudprovider.harvesterhci.io/ipam: dhcp")," - if the network of your Kubernetes nodes supports DHCP."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cloudprovider.harvesterhci.io/healthcheck-port: 80")," - specify the port of your service."))),(0,a.kt)("h3",{id:"ipam"},"IPAM"),(0,a.kt)("p",null,"Harvester's built-in load balancer supports both ",(0,a.kt)("inlineCode",{parentName:"p"},"pool")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dhcp")," modes. Users can specify the IPAM mode using the annotation key ",(0,a.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/ipam"),". This value defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"pool"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"pool: You should configure an IP address pool in Harvester in advance. The Harvester LoadBalancer controller will allocate an IP address from the IP address pool for the load balancer."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kube-vip/kube-vip-cloud-provider#global-and-namespace-pools"},"guideline")," to configure an IP address pool. E.g, for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace")," pool,\na service will take an address based upon its namespace pool cidr/range-namespace. These would look like the following:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"$ kubectl get configmap -n kube-system kubevip -o yaml\n\napiVersion: v1\nkind: ConfigMap\nmetadata:\nname: kubevip\nnamespace: kube-system\ndata:\ncidr-default: 192.168.0.200/29\ncidr-development: 192.168.0.210/29\ncidr-finance: 192.168.0.220/29\ncidr-testing: 192.168.0.230/29\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"dhcp:  A DHCP server is required. The Harvester LoadBalancer controller will request an IP address from the DHCP server of the Kubernetes nodes."))),(0,a.kt)("h3",{id:"health-checks"},"Health Checks"),(0,a.kt)("p",null,"The Harvester load balancer supports TCP health checks. Supported annotations are shown below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-port")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the port. The prober will access the address composed of the backend server IP and the port.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-success-threshold")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check success threshold. The default value is 1. If the number of times the prober continuously detects an address successfully reaches the success threshold, then the backend server can start to forward traffic.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-failure-threshold")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the success and failure threshold. The default value is 3. The backend server will stop forwarding traffic if the number of health check failures reaches the failure threshold.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-periodseconds")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check period. The default value is 5 seconds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-timeoutseconds")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the timeout of every health check. The default value is 3 seconds.")))))}c.isMDXComponent=!0},44315:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lb-svc-9f1cd5af6a99342fb70b53ca82e52c10.png"},35985:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke-cloud-provider-7e3efc40ff6c4c3cfcd76d41ce61341e.png"},45349:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-cloud-provider-2d541c4c966ae1adf2f7c375ea1743ac.png"}}]);