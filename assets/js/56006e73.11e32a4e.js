"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[84089],{30546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>o});r(67294);var a=r(3905);const n={sidebar_position:8,sidebar_label:"Import Existing Cluster built on Harvester VM",title:"Import Existing Cluster built on Harvester VM",keywords:["Harvester","harvester","Rancher","rancher"]},l=void 0,s={unversionedId:"rancher/import-existing-vm",id:"rancher/import-existing-vm",title:"Import Existing Cluster built on Harvester VM",description:"Rancher allows you to import existing Harvester VMs in which you installed Kubernetes.",source:"@site/docs/rancher/import-existing-vm.md",sourceDirName:"rancher",slug:"/rancher/import-existing-vm",permalink:"/v1.4/rancher/import-existing-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/import-existing-vm.md",tags:[],version:"current",lastUpdatedAt:1728308548,formattedLastUpdatedAt:"Oct 7, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Import Existing Cluster built on Harvester VM",title:"Import Existing Cluster built on Harvester VM",keywords:["Harvester","harvester","Rancher","rancher"]},sidebar:"api",previous:{title:"Rancher Terraform",permalink:"/v1.4/rancher/rancher-terraform"},next:{title:"Harvester Terraform Provider",permalink:"/v1.4/terraform/terraform-provider"}},i={},o=[{value:"Deployment",id:"deployment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy Guest Clusters on Harvester VMs",id:"deploy-guest-clusters-on-harvester-vms",level:3}],p={toc:o},d="wrapper";function c({components:e,...t}){return(0,a.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("p",null,"Rancher allows you to import existing Harvester VMs in which you installed Kubernetes."),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester VMs.")),(0,a.kt)("h3",{id:"deploy-guest-clusters-on-harvester-vms"},"Deploy Guest Clusters on Harvester VMs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Generate the csi-driver cloud-config file using the ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/harvester/harvester-csi-driver/master/deploy/generate_addon_csi.sh"},"generate_addon_csi.sh")," script, which is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver"},"harvester/harvester-csi-driver")," repository."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./generate_addon_csi.sh <serviceaccount name> <namespace> RKE2\n")),(0,a.kt)("p",{parentName:"li"},"The generated output will be similar to the following one:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"########## cloud-config ############\napiVersion: v1\nclusters:\n- cluster: <token>\n    server: https://<YOUR HOST HARVESTER VIP>:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    namespace: default\n    user: rke2-guest-01-default-default\n  name: rke2-guest-01-default-default\ncurrent-context: rke2-guest-01-default-default\nkind: Config\npreferences: {}\nusers:\n- name: rke2-guest-01-default-default\n  user:\n    token: <token>\n\n########## cloud-init user data ############\nwrite_files:\n  - encoding: b64\n    content: YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKbFZFTkRRVklyWjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVd0TlUwbDNTVUZaUkZaUlVVUkVRbXg1WVRKVmVVeFlUbXdLWTI1YWJHTnBNV3BaVlVGNFRtcG5NVTE2VlhoT1JGRjNUVUkwV0VSVVNYcE5SRlY1VDFSQk5VMVVRVEJOUm05WVJGUk5lazFFVlhsT2FrRTFUVlJCTUFwTlJtOTNTa1JGYVUxRFFVZEJNVlZGUVhkM1dtTnRkR3hOYVRGNldsaEtNbHBZU1hSWk1rWkJUVlJaTkU1VVRURk5WRkV3VFVSQ1drMUNUVWRDZVhGSENsTk5ORGxCWjBWSFEwTnhSMU5OTkRsQmQwVklRVEJKUVVKSmQzRmFZMDVTVjBWU2FsQlVkalJsTUhFMk0ySmxTSEZEZDFWelducGtRa3BsU0VWbFpHTUtOVEJaUTNKTFNISklhbWdyTDJab2VXUklNME5ZVURNeFZXMWxTM1ZaVDBsVGRIVnZVbGx4YVdJMGFFZE5aekpxVVdwQ1FVMUJORWRCTVZWa1JIZEZRZ292ZDFGRlFYZEpRM0JFUVZCQ1owNVdTRkpOUWtGbU9FVkNWRUZFUVZGSUwwMUNNRWRCTVZWa1JHZFJWMEpDVWpaRGEzbEJOSEZqYldKSlVESlFWVW81Q2xacWJWVTNVV2R2WjJwQlMwSm5aM0ZvYTJwUFVGRlJSRUZuVGtsQlJFSkdRV2xCZUZKNU4xUTNRMVpEYVZWTVdFMDRZazVaVWtWek1HSnBZbWxVSzJzS1kwRnhlVmt5Tm5CaGMwcHpMM2RKYUVGTVNsQnFVVzVxZEcwMVptNTZWR3AxUVVsblRuTkdibFozWkZRMldXWXpieTg0ZFRsS05tMWhSR2RXQ2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBzZXJ2ZXI6IGh0dHBzOi8vMTkyLjE2OC4wLjEzMTo2NDQzCiAgbmFtZTogZGVmYXVsdApjb250ZXh0czoKLSBjb250ZXh0OgogICAgY2x1c3RlcjogZGVmYXVsdAogICAgbmFtZXNwYWNlOiBkZWZhdWx0CiAgICB1c2VyOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIG5hbWU6IHJrZTItZ3Vlc3QtMDEtZGVmYXVsdC1kZWZhdWx0CmN1cnJlbnQtY29udGV4dDogcmtlMi1ndWVzdC0wMS1kZWZhdWx0LWRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIHVzZXI6CiAgICB0b2tlbjogZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklreGhUazQxUTBsMWFsTnRORE5TVFZKS00waE9UbGszTkV0amNVeEtjM1JSV1RoYVpUbGZVazA0YW1zaWZRLmV5SnBjM01pT2lKcmRXSmxjbTVsZEdWekwzTmxjblpwWTJWaFkyTnZkVzUwSWl3aWEzVmlaWEp1WlhSbGN5NXBieTl6WlhKMmFXTmxZV05qYjNWdWRDOXVZVzFsYzNCaFkyVWlPaUprWldaaGRXeDBJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5elpXTnlaWFF1Ym1GdFpTSTZJbkpyWlRJdFozVmxjM1F0TURFdGRHOXJaVzRpTENKcmRXSmxjbTVsZEdWekxtbHZMM05sY25acFkyVmhZMk52ZFc1MEwzTmxjblpwWTJVdFlXTmpiM1Z1ZEM1dVlXMWxJam9pY210bE1pMW5kV1Z6ZEMwd01TSXNJbXQxWW1WeWJtVjBaWE11YVc4dmMyVnlkbWxqWldGalkyOTFiblF2YzJWeWRtbGpaUzFoWTJOdmRXNTBMblZwWkNJNkltTXlZak5sTldGaExUWTBNMlF0TkRkbU1pMDROemt3TFRjeU5qWXpNbVl4Wm1aaU5pSXNJbk4xWWlJNkluTjVjM1JsYlRwelpYSjJhV05sWVdOamIzVnVkRHBrWldaaGRXeDBPbkpyWlRJdFozVmxjM1F0TURFaWZRLmFRZmU1d19ERFRsSWJMYnUzWUVFY3hmR29INGY1VnhVdmpaajJDaWlhcXB6VWI0dUYwLUR0cnRsa3JUM19ZemdXbENRVVVUNzNja1BuQmdTZ2FWNDhhdmlfSjJvdUFVZC04djN5d3M0eXpjLVFsTVV0MV9ScGJkUURzXzd6SDVYeUVIREJ1dVNkaTVrRWMweHk0X0tDQ2IwRHQ0OGFoSVhnNlMwRDdJUzFfVkR3MmdEa24wcDVXUnFFd0xmSjdEbHJDOFEzRkNUdGhpUkVHZkUzcmJGYUdOMjdfamR2cUo4WXlJQVd4RHAtVHVNT1pKZUNObXRtUzVvQXpIN3hOZlhRTlZ2ZU05X29tX3FaVnhuTzFEanllbWdvNG9OSEpzekp1VWliRGxxTVZiMS1oQUxYSjZXR1Z2RURxSTlna1JlSWtkX3JqS2tyY3lYaGhaN3lTZ3o3QQo=\n    owner: root:root\n    path: /var/lib/rancher/rke2/etc/config-files/cloud-provider-config\n    permissions: '0644'\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Generate the cloud-provider cloud-config using the ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh"},"generate_addon.sh")," script, which is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/cloud-provider-harvester"},"harvester/cloud-provider-harvester")," repository."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./generate_addon.sh <serviceaccount name> <namespace>\n")),(0,a.kt)("p",{parentName:"li"},"The generated output will be similar to the following one:\nThe output will look as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"########## cloud config ############\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: <CACERT>\n    server: https://HARVESTER-ENDPOINT/k8s/clusters/local\n  name: local\ncontexts:\n- context:\n    cluster: local\n    namespace: default\n    user: harvester-cloud-provider-default-local\n  name: harvester-cloud-provider-default-local\ncurrent-context: harvester-cloud-provider-default-local\nkind: Config\npreferences: {}\nusers:\n- name: harvester-cloud-provider-default-local\n  user:\n    token: <TOKEN>\n\n########## cloud-init user data ############\nwrite_files:\n- encoding: b64\n  content: <CONTENT>\n  owner: root:root\n  path: /etc/kubernetes/cloud-config\n  permissions: '0644'\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create VM with two cloud-config files."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"VM with cloud-config",src:r(62160).Z,width:"2280",height:"1072"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install RKE2 in the VM."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sudo mkdir -p /etc/rancher/rke2\necho "cni: calico\ndisable-kube-proxy: false\netcd-expose-metrics: false" | sudo tee /etc/rancher/rke2/config.yaml\ncurl -sfL https://get.rke2.io | sudo sh -\nsudo systemctl enable rke2-server.service\nsudo systemctl start rke2-server.service\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify that RKE2 is running in the VM."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml get nodes\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the VM into Rancher."),(0,a.kt)("p",{parentName:"li"},"On the Rancher UI, go to ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," > ",(0,a.kt)("strong",{parentName:"p"},"Clusters")," > ",(0,a.kt)("strong",{parentName:"p"},"Import Existing")," > ",(0,a.kt)("strong",{parentName:"p"},"Generic")," > ",(0,a.kt)("strong",{parentName:"p"},"Create"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Import Exisging Cluster",src:r(42653).Z,width:"2016",height:"1272"})),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Run the command in the VM\ncurl --insecure -sfL https://192.168.0.181:6443/v3/import/g5p2g2gtxw4564nktdl4nr5cwwvtwqp9zxd6dmhm5nc7vpnxmr9cfk_c-m-mzf28skd.yaml | sudo /var/lib/rancher/rke2/bin/kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml apply -f -\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the Harvester Cloud Provider."),(0,a.kt)("p",{parentName:"li"},"On the RKE2 Cluster Dashboard, go to ",(0,a.kt)("strong",{parentName:"p"},"Apps")," > ",(0,a.kt)("strong",{parentName:"p"},"Charts")," > ",(0,a.kt)("strong",{parentName:"p"},"Harvester Cloud Provider")," > ",(0,a.kt)("strong",{parentName:"p"},"Install"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the Harvester CSI Driver."),(0,a.kt)("p",{parentName:"li"},"On the RKE2 Cluster Dashboard, go to ",(0,a.kt)("strong",{parentName:"p"},"Apps")," > ",(0,a.kt)("strong",{parentName:"p"},"Charts")," > ",(0,a.kt)("strong",{parentName:"p"},"Harvester CSI Driver")," > ",(0,a.kt)("strong",{parentName:"p"},"Install"),"."))))}c.isMDXComponent=!0},42653:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/import-existing-cluster-6772c5f3a8f83fd23c2d25cc60624840.png"},62160:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vm-with-cloud-config-37f80d81341582100eb37f126d76c755.png"}}]);