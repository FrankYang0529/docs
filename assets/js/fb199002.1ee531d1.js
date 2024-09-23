"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[26483],{50739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>l});a(67294);var n=a(3905);const d={id:"Add-on-development-guide",title:"Add-on Development Guide",sidebar_position:1,sidebar_label:"Add-on Development Guide",keywords:["Harvester","harvester","Add-on Development"],Description:"How to write your own Harvester add-on"},o=void 0,i={unversionedId:"developer/Add-on-development-guide",id:"developer/Add-on-development-guide",title:"Add-on Development Guide",description:"Harvester add-ons allow you to enable and disable specific Harvester and third-party components based on your requirements. Add-ons function as a wrapper for the RKE2 HelmChart resource definition (CRD).",source:"@site/docs/developer/addon-development.md",sourceDirName:"developer",slug:"/developer/Add-on-development-guide",permalink:"/v1.4/developer/Add-on-development-guide",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/developer/addon-development.md",tags:[],version:"current",lastUpdatedAt:1726823719,formattedLastUpdatedAt:"Sep 20, 2024",sidebarPosition:1,frontMatter:{id:"Add-on-development-guide",title:"Add-on Development Guide",sidebar_position:1,sidebar_label:"Add-on Development Guide",keywords:["Harvester","harvester","Add-on Development"],Description:"How to write your own Harvester add-on"},sidebar:"api",previous:{title:"FAQ",permalink:"/v1.4/faq"},next:{title:"Introduction",permalink:"/v1.4/api/harvester-apis"}},r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add-on Specifications",id:"add-on-specifications",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"Uninstallation",id:"uninstallation",level:2}],s={toc:l},p="wrapper";function m({components:e,...t}){return(0,n.kt)(p,{...s,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("p",null,"Harvester add-ons allow you to enable and disable specific Harvester and third-party components based on your requirements. Add-ons function as a wrapper for the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rke2.io/helm#using-the-helm-crd"},"RKE2 HelmChart resource definition (CRD)"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An existing Harvester cluster")),(0,n.kt)("h2",{id:"add-on-specifications"},"Add-on Specifications"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Addon")," CRD supports the following fields:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: harvesterhci.io/v1beta1\nkind: Addon                         \nmetadata:\n  name: example-add-on           # Name of add-on\n  namespace: example-namespace  # Namespace where the add-on CRD is deployed and where the associated Kubernetes components will be deployed\n  labels:                       # Optional add-on labels\n    Add-on.harvesterhci.io/experimental: "true" # Predefined label used on the Harvester UI to identify add-ons with the "experimental" maturity level\nspec:\n  enabled: false                # Boolean indicating if an add-on should be enabled or disabled on definition\n  repo: https://chartsrepo.com  # Helm chart repository containing the Helm chart managed by the add-on\n  version: "v0.19.0"            # Version of the Helm chart to be installed\n  chart: mychart                # Name of the Helm chart in the Helm chart repository\n  valuesContent: |-             # File (values.yaml) that must be passed to the Helm chart\n    contents of values.yaml\n    that need to be passed\n    to the chart\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Experimental add-ons are not directly packaged in Harvester. An example is the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/experimental-addons/blob/main/rancher-vcluster/rancher-vcluster.yaml"},"rancher-vcluster")," add-on.")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f /path/to/add-on.yaml\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"After creating an ",(0,n.kt)("inlineCode",{parentName:"p"},"Addon")," CRD, you can can toggle the ",(0,n.kt)("inlineCode",{parentName:"p"},"enabled")," field to enable and disable the associated Helm chart."),(0,n.kt)("h2",{id:"upgrade"},"Upgrade"),(0,n.kt)("p",null,"Changes to the ",(0,n.kt)("inlineCode",{parentName:"p"},"repo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"chart")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"valueContent")," fields will trigger a ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade"),", which forces an upgrade of the existing Helm chart."),(0,n.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f /path/to/Add-on.yaml\n")))}m.isMDXComponent=!0}}]);