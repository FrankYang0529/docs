"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[91205],{75821:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>i});a(67294);var r=a(3905);const n={sidebar_position:4,sidebar_label:"Load Balancer",title:"Load Balancer",keywords:["Load Balancer"]},l=void 0,s={unversionedId:"networking/loadbalancer",id:"version-v1.2/networking/loadbalancer",title:"Load Balancer",description:"Available as of v1.2.0",source:"@site/versioned_docs/version-v1.2/networking/loadbalancer.md",sourceDirName:"networking",slug:"/networking/loadbalancer",permalink:"/v1.2/networking/loadbalancer",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/networking/loadbalancer.md",tags:[],version:"v1.2",lastUpdatedAt:1724398153,formattedLastUpdatedAt:"Aug 23, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Load Balancer",title:"Load Balancer",keywords:["Load Balancer"]},sidebar:"api",previous:{title:"Harvester Network Deep Dive",permalink:"/v1.2/networking/deep-dive"},next:{title:"IP Pool",permalink:"/v1.2/networking/ippool"}},o={},i=[{value:"VM load balancer",id:"vm-load-balancer",level:2},{value:"Features",id:"features",level:3},{value:"Limitations",id:"limitations",level:3},{value:"How to create",id:"how-to-create",level:3},{value:"Health Checks",id:"health-checks",level:3},{value:"Guest Kubernetes cluster load balancer",id:"guest-kubernetes-cluster-load-balancer",level:2}],d={toc:i},c="wrapper";function h({components:e,...t}){return(0,r.kt)(c,{...d,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,r.kt)("p",null,"The Harvester load balancer (LB) is a built-in Layer 4 load balancer that distributes incoming traffic across workloads deployed on Harvester virtual machines (VMs) or guest Kubernetes clusters."),(0,r.kt)("h2",{id:"vm-load-balancer"},"VM load balancer"),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("p",null,"Harvester VM load balancer supports the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Address assignment:")," Get the LB IP address from a DHCP server or a pre-defined IP pool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Protocol support:")," Supports both TCP and UDP protocols for load balancing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multiple listeners:")," Create multiple listeners to handle incoming traffic on different ports or with other protocols."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label selector:")," The LB uses label selectors to match the backend servers. Therefore, you must configure the corresponding labels for the backend VMs you want to add to the LB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Health check:")," Only send traffic to healthy backend instances.")),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"Harvester VM load balancer has the following limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Namespace restriction:")," This restriction facilitates permission management and ensures the LB only uses VMs in the same namespace as the backend servers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IPv4-only:")," The LB is only compatible with IPv4 addresses for VMs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guest agent installation:")," Installing the guest agent on each backend VM is required to obtain IP addresses. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connectivity Requirement:")," Network connectivity must be established between backend VMs and Harvester hosts. When a VM has multiple IP addresses, the LB will select the first one as the backend address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Restriction:")," The VM LB address is exposed only within the same network as the Harvester hosts. To access the LB from outside the network, you must provide a route from outside to the LB address.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Harvester VM load balancer doesn't support Windows VMs because the guest agent is not available for Windows VMs.")),(0,r.kt)("h3",{id:"how-to-create"},"How to create"),(0,r.kt)("p",null,"To create a new Harvester VM load balancer:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Networks > Load Balancer")," page and select ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Namespace")," and specify the ",(0,r.kt)("strong",{parentName:"li"},"Name"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Basic")," tab to choose the IPAM mode, which can be ",(0,r.kt)("strong",{parentName:"li"},"DHCP")," or ",(0,r.kt)("strong",{parentName:"li"},"IP Pool"),". If you select ",(0,r.kt)("strong",{parentName:"li"},"IP Pool"),", prepare an IP pool first, specify the IP pool name, or choose ",(0,r.kt)("strong",{parentName:"li"},"auto"),". If you choose ",(0,r.kt)("strong",{parentName:"li"},"auto"),", the LB automatically selects an IP pool according to ",(0,r.kt)("a",{parentName:"li",href:"/v1.2/networking/ippool/#selection-policy"},"the IP pool selection policy"),".\n",(0,r.kt)("img",{src:a(68690).Z,width:"3504",height:"1086"})),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," tab to add listeners. You must specify the ",(0,r.kt)("strong",{parentName:"li"},"Port"),", ",(0,r.kt)("strong",{parentName:"li"},"Protocol"),", and ",(0,r.kt)("strong",{parentName:"li"},"Backend Port")," for each listener.\n",(0,r.kt)("img",{src:a(12791).Z,width:"3510",height:"1060"})),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Backend Server Selector")," tab to add label selectors. To add the VM to the LB, go to the ",(0,r.kt)("strong",{parentName:"li"},"Virtual Machine > Instance Labels")," tab to add the corresponding labels to the VM.\n",(0,r.kt)("img",{src:a(6928).Z,width:"3512",height:"1208"})),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Health Check")," tab to enable health check and specify the parameters, including the ",(0,r.kt)("strong",{parentName:"li"},"Port"),", ",(0,r.kt)("strong",{parentName:"li"},"Success Threshold"),", ",(0,r.kt)("strong",{parentName:"li"},"Failure Threshold"),", ",(0,r.kt)("strong",{parentName:"li"},"Interval"),", and ",(0,r.kt)("strong",{parentName:"li"},"Timeout")," if the backend service supports health check. Refer to ",(0,r.kt)("a",{parentName:"li",href:"#health-checks"},"Health Checks")," for more details.\n",(0,r.kt)("img",{src:a(32661).Z,width:"3512",height:"1294"}))),(0,r.kt)("h3",{id:"health-checks"},"Health Checks"),(0,r.kt)("p",null,"The Harvester load balancer supports TCP health checks. You can specify the parameters in the Harvester UI if you've enabled the ",(0,r.kt)("inlineCode",{parentName:"p"},"Health Check")," option."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(14970).Z,width:"3070",height:"1130"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Health Check Port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the port. The prober will access the address composed of the backend server IP and the port.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Health Check Success Threshold"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check success threshold. Disabled by default. The backend server will start forwarding traffic if the number of times the prober continuously detects an address successfully reaches the threshold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Health Check Failure Threshold"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check failure threshold. Disabled by default. The backend server will stop forwarding traffic if the number of health check failures reaches the threshold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Health Check Period"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check period in seconds. Disabled by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Health Check Timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the timeout of every health check in seconds. Disabled by default.")))),(0,r.kt)("h2",{id:"guest-kubernetes-cluster-load-balancer"},"Guest Kubernetes cluster load balancer"),(0,r.kt)("p",null,"In conjunction with Harvester Cloud Provider, the Harvester load balancer provides load balancing for LB services in the guest cluster.\n",(0,r.kt)("img",{src:a(90916).Z,width:"3502",height:"1034"}),"\nWhen you create, update, or delete an LB service on a guest cluster with Harvester Cloud Provider, the Harvester Cloud Provider will create a Harvester LB automatically."),(0,r.kt)("p",null,"For more details, refer to ",(0,r.kt)("a",{parentName:"p",href:"/v1.2/rancher/cloud-provider"},"Harvester Cloud Provider"),"."))}h.isMDXComponent=!0},68690:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-lb-01-80aa3085f513917fcded00e09e5cab67.png"},12791:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-lb-02-7c38c003f5ee1c4f842a07729013196f.png"},6928:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-lb-03-a13156f80d97a533a0fa3ab18fa70413.png"},32661:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-lb-04-2f0053989b04151fe42a70527d1dca47.png"},90916:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/guest-kubernetes-cluster-lb-5f53d4c65ebc2cdcd5c483851d0671c4.png"},14970:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/health-check-c2a0382511fc0fb24551d2643f3c6353.png"}}]);