"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7048],{18360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>i});a(67294);var n=a(3905);const r={id:"developer-mode-installation",title:"Developer Mode Installation",sidebar_position:1,sidebar_label:"Developer",keywords:["Harvester","harvester","Rancher","rancher","Developer Mode Installation"],Description:"Developer mode (dev mode) is intended to be used for testing and development purposes."},s="Developer Mode",l={unversionedId:"developer/developer-mode-installation",id:"version-v1.3/developer/developer-mode-installation",title:"Developer Mode Installation",description:"Developer mode is intended to be used for development and testing purposes. Usage of this mode in production environments is not supported.",source:"@site/versioned_docs/version-v1.3/developer/developer-mode-installation.md",sourceDirName:"developer",slug:"/developer/developer-mode-installation",permalink:"/v1.3/developer/developer-mode-installation",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/developer/developer-mode-installation.md",tags:[],version:"v1.3",lastUpdatedAt:1728972989,formattedLastUpdatedAt:"Oct 15, 2024",sidebarPosition:1,frontMatter:{id:"developer-mode-installation",title:"Developer Mode Installation",sidebar_position:1,sidebar_label:"Developer",keywords:["Harvester","harvester","Rancher","rancher","Developer Mode Installation"],Description:"Developer mode (dev mode) is intended to be used for testing and development purposes."},sidebar:"api",previous:{title:"FAQ",permalink:"/v1.3/faq"},next:{title:"Introduction",permalink:"/v1.3/api/harvester-apis"}},o={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation of the First Node",id:"installation-of-the-first-node",level:2},{value:"Installation of Other Nodes",id:"installation-of-other-nodes",level:2},{value:"Uninstallation",id:"uninstallation",level:2}],p={toc:i},d="wrapper";function m({components:e,...t}){return(0,n.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("h1",{id:"developer-mode"},"Developer Mode"),(0,n.kt)("admonition",{title:"attention",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Developer mode is intended to be used for development and testing purposes. Usage of this mode in production environments is not supported.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The node has passed the ",(0,n.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/harvester/harvester/master/hack/host-check.sh"},"host-check")),(0,n.kt)("li",{parentName:"ul"},"Helm 3 and Git are installed on your local machine.")),(0,n.kt)("h2",{id:"installation-of-the-first-node"},"Installation of the First Node"),(0,n.kt)("p",null,"You can install Harvester on an ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," cluster using the ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," CLI. For more information about installing and configuring the Harvester Helm chart, see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/blob/master/deploy/charts/harvester/README.md"},"readme"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an RKE2 configuration file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /etc/rancher/rke2\ncat <<EOF | sudo tee /etc/rancher/rke2/config.yaml\ndisable:\n- rke2-snapshot-controller\n- rke2-snapshot-controller-crd\n- rke2-snapshot-validation-webhook\nnode-label:\n- harvesterhci.io/managed=true\ntoken: token\ncni:\n- multus\n- canal\nEOF\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install RKE2."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.rke2.io | sudo sh -\nsudo systemctl enable rke2-server.service --now\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a kubeconfig file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.kube\nsudo cp /etc/rancher/rke2/rke2.yaml ~/.kube/config\nsudo chown $(id -u):$(id -g) ~/.kube/config\n")),(0,n.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Allow some time for all pods in the ",(0,n.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace to reach the ",(0,n.kt)("inlineCode",{parentName:"p"},"Ready")," state before proceeding to the next step."),(0,n.kt)("p",{parentName:"admonition"},"If you are unable to locate the kubectl binary in ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),", check ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/bin"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install system-upgrade-controller. This Kubernetes-native upgrade controller for nodes installs ",(0,n.kt)("inlineCode",{parentName:"p"},"upgrade.cattle.io/v1")," CRDs."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/rancher/system-upgrade-controller/releases/download/v0.13.1/system-upgrade-controller.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the cattle-system namespace."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns cattle-system\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the Rancher chart repository."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the Rancher v2.7.5 chart."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'helm install rancher rancher-latest/rancher \\\n--namespace cattle-system \\\n--set tls=external \\\n--set rancherImagePullPolicy=IfNotPresent \\\n--set rancherImage=rancher/rancher \\\n--set rancherImageTag=v2.7.5 \\\n--set noDefaultAdmin=false \\\n--set features="multi-cluster-management=false\\,multi-cluster-management-agent=false" \\\n--set useBundledSystemChart=true \\\n--set bootstrapPassword=admin\n')),(0,n.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Allow some time for all pods in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace to reach the ",(0,n.kt)("inlineCode",{parentName:"p"},"Ready")," state before proceeding to the next step."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/charts")," repository."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/rancher/charts -b dev-v2.7\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the rancher-monitoring-crd chart."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-monitoring-crd ./charts/charts/rancher-monitoring-crd/102.0.2+up40.1.2/\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the harvester-system namespace."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns harvester-system\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester/harvester")," repository."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/harvester/harvester.git\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the harvester-crd chart."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install harvester-crd ./harvester/deploy/charts/harvester-crd --namespace harvester-system\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the Harvester chart using kube-vip running on a static IP."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'VIP_ADDRESS="replace with an IP which is allocated to any device, such as 192.168.5.131"\nhelm install harvester ./harvester/deploy/charts/harvester --namespace harvester-system \\\n--set harvester-node-disk-manager.enabled=true \\\n--set "harvester-node-disk-manager.labelFilter={COS_*,HARV_*}" \\\n--set harvester-network-controller.enabled=true \\\n--set harvester-network-controller.vipEnabled=true \\\n--set harvester-load-balancer.enabled=true \\\n--set kube-vip.enabled=true \\\n--set kube-vip-cloud-provider.enabled=true \\\n--set longhorn.enabled=true \\\n--set longhorn.defaultSettings.defaultDataPath=/var/lib/harvester/defaultdisk \\\n--set longhorn.defaultSettings.taintToleration=kubevirt.io/drain:NoSchedule \\\n--set rancherEmbedded=true \\\n--set service.vip.enabled=true \\\n--set service.vip.mode=static \\\n--set service.vip.ip=${VIP_ADDRESS}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access the Harvester UI at https://${VIP_ADDRESS}. The default password is ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),"."))),(0,n.kt)("h2",{id:"installation-of-other-nodes"},"Installation of Other Nodes"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an RKE2 configuration file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /etc/rancher/rke2\ncat <<EOF | sudo tee /etc/rancher/rke2/config.yaml\nserver: https://<vip address>:9345\ntoken: token\nEOF\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the RKE2 agent."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.rke2.io | INSTALL_RKE2_TYPE="agent" sudo sh -\nsudo systemctl enable rke2-agent.service --now\n')))),(0,n.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /usr/local/bin/rke2-uninstall.sh\n")))}m.isMDXComponent=!0}}]);