"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6507],{59901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});n(67294);var a=n(3905);const r={sidebar_position:4,sidebar_label:"Storage Network",title:"Storage Network"},o=void 0,i={unversionedId:"advanced/storagenetwork",id:"advanced/storagenetwork",title:"Storage Network",description:"Harvester uses Longhorn as its built-in storage system to provide block device volumes for VMs and Pods. If the user wishes to isolate Longhorn replication traffic from the Kubernetes cluster network (i.e. the management network) or other cluster-wide workloads. Users can allocate a dedicated storage network for Longhorn replication traffic to get better network bandwidth and performance.",source:"@site/docs/advanced/storagenetwork.md",sourceDirName:"advanced",slug:"/advanced/storagenetwork",permalink:"/v1.4/advanced/storagenetwork",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/storagenetwork.md",tags:[],version:"current",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Storage Network",title:"Storage Network"},sidebar:"api",previous:{title:"Third-Party Storage Support",permalink:"/v1.4/advanced/csidriver"},next:{title:"Addons",permalink:"/v1.4/advanced/addons"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration Example",id:"configuration-example",level:2},{value:"Configuration Process",id:"configuration-process",level:2},{value:"Before Applying Harvester Storage Network Setting",id:"before-applying-harvester-storage-network-setting",level:3},{value:"Same Physical Interfaces",id:"same-physical-interfaces",level:4},{value:"Different Physical Interfaces",id:"different-physical-interfaces",level:4},{value:"Harvester Storage Network Setting",id:"harvester-storage-network-setting",level:3},{value:"Web UI",id:"web-ui",level:4},{value:"CLI",id:"cli",level:4},{value:"After Applying Harvester Storage Network Setting",id:"after-applying-harvester-storage-network-setting",level:3},{value:"Verify Configuration is Completed",id:"verify-configuration-is-completed",level:3},{value:"Step 1",id:"step-1",level:4},{value:"Step 2",id:"step-2",level:4},{value:"Step 3",id:"step-3",level:4},{value:"Step 4",id:"step-4",level:4},{value:"Start VM Manually",id:"start-vm-manually",level:3}],d={toc:s},p="wrapper";function c({components:e,...t}){return(0,a.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/storagenetwork"})),(0,a.kt)("p",null,"Harvester uses Longhorn as its built-in storage system to provide block device volumes for VMs and Pods. If the user wishes to isolate Longhorn replication traffic from the Kubernetes cluster network (i.e. the management network) or other cluster-wide workloads. Users can allocate a dedicated storage network for Longhorn replication traffic to get better network bandwidth and performance."),(0,a.kt)("p",null,"For more information, please see ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.4.3/advanced-resources/deploy/storage-network/"},"Longhorn Storage Network")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Configuring Longhorn settings directly is not recommended, as this can lead to untested situations.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"There are some prerequisites before configuring the Harvester Storage Network setting."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Well-configured Cluster Network and VLAN Config.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Users have to ensure the Cluster Network is configured and VLAN Config will cover all nodes and ensure the network connectivity is working and expected in all nodes. "))),(0,a.kt)("li",{parentName:"ul"},"All VMs should be stopped.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We recommend checking the VM status with the following command and should get an empty result."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get -A vmi")))),(0,a.kt)("li",{parentName:"ul"},"All pods that are attached to Longhorn Volumes should be stopped.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Users could skip this step with the Harvester Storage Network setting. Harvester will stop Longhorn-related pods automatically."))),(0,a.kt)("li",{parentName:"ul"},"All ongoing image uploads or downloads should be either completed or deleted.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If the Harvester cluster was upgraded from v1.0.3, please check if Whereabouts CNI is installed properly before you move on to the next step. We will always recommend following this guide to check. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3168"},"Issue 3168")," describes that the Harvester cluster will not always install Whereabouts CNI properly."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Verify the ",(0,a.kt)("inlineCode",{parentName:"li"},"ippools.whereabouts.cni.cncf.io")," CRD exists with the following command.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get crd ippools.whereabouts.cni.cncf.io")))),(0,a.kt)("li",{parentName:"ul"},"If the Harvester cluster doesn't have ",(0,a.kt)("inlineCode",{parentName:"li"},"ippools.whereabouts.cni.cncf.io"),", please add ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/tree/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds"},"these two CRDs")," before configuring ",(0,a.kt)("inlineCode",{parentName:"li"},"storage-network")," setting.")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f https://raw.githubusercontent.com/harvester/harvester/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds/whereabouts.cni.cncf.io_ippools.yaml\nkubectl apply -f https://raw.githubusercontent.com/harvester/harvester/v1.1.0/deploy/charts/harvester/dependency_charts/whereabouts/crds/whereabouts.cni.cncf.io_overlappingrangeipreservations.yaml\n"))),(0,a.kt)("h2",{id:"configuration-example"},"Configuration Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VLAN ID",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Please check with your network switch setting, and provide a dedicated VLAN ID for Storage Network."))),(0,a.kt)("li",{parentName:"ul"},"Well-configured Cluster Network and VLAN Config",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Please refer Networking page for more details and configure ",(0,a.kt)("inlineCode",{parentName:"li"},"Cluster Network")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"VLAN Config")," but not ",(0,a.kt)("inlineCode",{parentName:"li"},"Networks"),"."))),(0,a.kt)("li",{parentName:"ul"},"IP range for Storage Network",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IP range should not conflict or overlap with Kubernetes cluster networks(",(0,a.kt)("inlineCode",{parentName:"li"},"10.42.0.0/16"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"10.43.0.0/16"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"10.52.0.0/16")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"10.53.0.0/16")," are reserved)."),(0,a.kt)("li",{parentName:"ul"},"IP range should be in IPv4 CIDR format and Longhorn pods use Storage Network as follows:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"instance-manger-e")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"instance-manager-r")," pods: These require 2 IPs per node. During an upgrade, two versions of these pods will exist (old and new), and the old version will be deleted once the upgrade is successful."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"backing-image-ds")," pods: These are employed to process on-the-fly uploads and downloads of backing image data sources. These pods will be removed once the image uploads or downloads are completed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"backing-image-manager")," pods: 1 IP per disk, similar to the instance manager pods. Two versions of these will coexist during an upgrade, and the old ones will be removed after the upgrade is completed."),(0,a.kt)("li",{parentName:"ul"},"The required number of IPs is calculated using a simple formula: ",(0,a.kt)("inlineCode",{parentName:"li"},"Required Number of IPs = Number of Nodes * 4 + Number of Disks * 2 + Number of Images to Download/Upload")))),(0,a.kt)("li",{parentName:"ul"},"For example, if your cluster has five nodes, each node has two disks, and ten images will be uploaded simultaneously, the IP range should be greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"li"},"/26")," (",(0,a.kt)("inlineCode",{parentName:"li"},"5 * 4 + 5 * 2 * 2 + 10 = 50"),").")))),(0,a.kt)("p",null,"We will take the following configuration as an example to explain the details of the Storage Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VLAN ID for Storage Network: ",(0,a.kt)("inlineCode",{parentName:"li"},"100")),(0,a.kt)("li",{parentName:"ul"},"Cluster Network: ",(0,a.kt)("inlineCode",{parentName:"li"},"storage")),(0,a.kt)("li",{parentName:"ul"},"IP range: ",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.0.0/24"))),(0,a.kt)("h2",{id:"configuration-process"},"Configuration Process"),(0,a.kt)("p",null,"Harvester will create Multus NetworkAttachmentDefinition from the configuration, stop pods related to Longhorn Volume, update Longhorn setting, and restart previous pods."),(0,a.kt)("h3",{id:"before-applying-harvester-storage-network-setting"},"Before Applying Harvester Storage Network Setting"),(0,a.kt)("p",null,"Here we have two cases."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Expect that VM VLAN traffic and Longhorn Storage Network use the same group of physical interfaces."),(0,a.kt)("li",{parentName:"ul"},"Expect that VM VLAN traffic and Longhorn Storage Network use different physical interfaces.")),(0,a.kt)("p",null,"Longhorn will send replication traffic through the specific interfaces shown as the red line in the figure."),(0,a.kt)("h4",{id:"same-physical-interfaces"},"Same Physical Interfaces"),(0,a.kt)("p",null,"Take ",(0,a.kt)("inlineCode",{parentName:"p"},"eth2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth3")," as an example for VM VLAN traffic and Longhorn Storage Network simultaneously."),(0,a.kt)("p",null,"Please refer Networking page to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VLAN Config")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"eth2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth3")," and remember the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," name for the further step."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"storagenetwork-same.png",src:n(36138).Z,width:"1521",height:"661"})),(0,a.kt)("h4",{id:"different-physical-interfaces"},"Different Physical Interfaces"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eth2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth3")," are for VM VLAN Traffic. ",(0,a.kt)("inlineCode",{parentName:"p"},"eth4")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth5")," are for Longhorn Storage Network."),(0,a.kt)("p",null,"Please refer Networking page to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VLAN Config")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"eth4")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eth5")," for Storage Network and remember the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterNetwork")," name for the further step."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"storagenetwork-diff.png",src:n(74050).Z,width:"1551",height:"741"})),(0,a.kt)("h3",{id:"harvester-storage-network-setting"},"Harvester Storage Network Setting"),(0,a.kt)("p",null,"Harvester Storage Network setting will need ",(0,a.kt)("inlineCode",{parentName:"p"},"range"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterNetwork"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"vlan")," field to construct Multus NetworkAttachmentDefinition for Storage Network usage. You could apply this setting via Web UI or CLI."),(0,a.kt)("h4",{id:"web-ui"},"Web UI"),(0,a.kt)("p",null,"Harvester Storage Network setting could be easily modified on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > storage-network")," page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"storagenetwork-ui.png",src:n(75643).Z,width:"1715",height:"946"})),(0,a.kt)("h4",{id:"cli"},"CLI"),(0,a.kt)("p",null,"Users could use this command to edit Harvester Storage Network setting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit settings.harvesterhci.io storage-network\n")),(0,a.kt)("p",null,"The value format is JSON string or empty string as shown in below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "vlan": 100,\n    "clusterNetwork": "storage",\n    "range": "192.168.0.0/24"\n}\n')),(0,a.kt)("p",null,"The full configuration will be like this example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: harvesterhci.io/v1beta1\nkind: Setting\nmetadata:\n  name: storage-network\nvalue: \'{"vlan":100,"clusterNetwork":"storage","range":"192.168.0.0/24"}\'\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Because of the design, Harvester will treat extra and insignificant characters in JSON string as a different configuration.")),(0,a.kt)("h3",{id:"after-applying-harvester-storage-network-setting"},"After Applying Harvester Storage Network Setting"),(0,a.kt)("p",null,"After applying Harvester's Storage Network setting, Harvester will stop all pods that are related to Longhorn volumes. Currently, Harvester has some pods listed below that will be stopped during setting."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Grafana"),(0,a.kt)("li",{parentName:"ul"},"Alertmanager"),(0,a.kt)("li",{parentName:"ul"},"VM Import Controller")),(0,a.kt)("p",null,"Harvester will also create a new NetworkAttachmentDefinition and update the Longhorn Storage Network setting."),(0,a.kt)("p",null,"Once the Longhorn setting is updated, Longhorn will restart all ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-manager-r"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-manager-e"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"backing-image-manager")," pods to apply the new network configuration, and Harvester will restart the pods."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Harvester will not start VM automatically. Users should check whether the configuration is completed or not in the next section and start VM manually on demand.")),(0,a.kt)("h3",{id:"verify-configuration-is-completed"},"Verify Configuration is Completed"),(0,a.kt)("h4",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Check if Harvester Storage Network setting's status is ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," and the type is ",(0,a.kt)("inlineCode",{parentName:"p"},"configured"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get settings.harvesterhci.io storage-network -o yaml\n")),(0,a.kt)("p",null,"Completed Setting Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: harvesterhci.io/v1beta1\nkind: Setting\nmetadata:\n  annotations:\n    storage-network.settings.harvesterhci.io/hash: da39a3ee5e6b4b0d3255bfef95601890afd80709\n    storage-network.settings.harvesterhci.io/net-attach-def: ""\n    storage-network.settings.harvesterhci.io/old-net-attach-def: ""\n  creationTimestamp: "2022-10-13T06:36:39Z"\n  generation: 51\n  name: storage-network\n  resourceVersion: "154638"\n  uid: 2233ad63-ee52-45f6-a79c-147e48fc88db\nstatus:\n  conditions:\n  - lastUpdateTime: "2022-10-13T13:05:17Z"\n    reason: Completed\n    status: "True"\n    type: configured\n')),(0,a.kt)("h4",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"Verify the readiness of all Longhorn ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-manager-e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"instance-manager-r"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"backing-image-manager")," pods, and confirm that their networks are correctly configured."),(0,a.kt)("p",null,"Execute the following command to inspect a pod's details:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n longhorn-system describe pod <pod-name>\n")),(0,a.kt)("p",null,"If you encounter an event resembling the following one, the Storage Network might have run out of its available IPs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Events:\n  Type     Reason                  Age                    From     Message\n  ----     ------                  ----                   ----     -------\n  ....\n\n  Warning  FailedCreatePodSandBox  2m58s                  kubelet  Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for\n sandbox "04e9bc160c4f1da612e2bb52dadc86702817ac557e641a3b07b7c4a340c9fc48": plugin type="multus" name="multus-cni-network" failed (add): [longhorn-system/ba\ncking-image-ds-default-image-lxq7r/7d6995ee-60a6-4f67-b9ea-246a73a4df54:storagenetwork-sdfg8]: error adding container to network "storagenetwork-sdfg8": erro\nr at storage engine: Could not allocate IP in range: ip: 172.16.0.1 / - 172.16.0.6 / range: net.IPNet{IP:net.IP{0xac, 0x10, 0x0, 0x0}, Mask:net.IPMask{0xff,\n0xff, 0xff, 0xf8}}\n\n  ....\n')),(0,a.kt)("p",null,"Please reconfigure the Storage Network with a sufficient IP range."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the Storage Network has run out of IPs, you might encounter the same error when you upload/download images. Please delete the related images and reconfigure the Storage Network with a sufficient IP range.")),(0,a.kt)("h4",{id:"step-3"},"Step 3"),(0,a.kt)("p",null,"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.v1.cni.cncf.io/network-status")," annotations and ensure that an interface named ",(0,a.kt)("inlineCode",{parentName:"p"},"lhnet1")," exists, with an IP address within the designated IP range."),(0,a.kt)("p",null,"Users could use the following command to show all Longhorn Instance Manager to verify."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n longhorn-system -l longhorn.io/component=instance-manager -o yaml\n")),(0,a.kt)("p",null,"Correct Network Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  annotations:\n    cni.projectcalico.org/containerID: 2518b0696f6635896645b5546417447843e14208525d3c19d7ec6d7296cc13cd\n    cni.projectcalico.org/podIP: 10.52.2.122/32\n    cni.projectcalico.org/podIPs: 10.52.2.122/32\n    k8s.v1.cni.cncf.io/network-status: |-\n      [{\n          "name": "k8s-pod-network",\n          "ips": [\n              "10.52.2.122"\n          ],\n          "default": true,\n          "dns": {}\n      },{\n          "name": "harvester-system/storagenetwork-95bj4",\n          "interface": "lhnet1",\n          "ips": [\n              "192.168.0.3"\n          ],\n          "mac": "2e:51:e6:31:96:40",\n          "dns": {}\n      }]\n    k8s.v1.cni.cncf.io/networks: \'[{"namespace": "harvester-system", "name": "storagenetwork-95bj4",\n      "interface": "lhnet1"}]\'\n    k8s.v1.cni.cncf.io/networks-status: |-\n      [{\n          "name": "k8s-pod-network",\n          "ips": [\n              "10.52.2.122"\n          ],\n          "default": true,\n          "dns": {}\n      },{\n          "name": "harvester-system/storagenetwork-95bj4",\n          "interface": "lhnet1",\n          "ips": [\n              "192.168.0.3"\n          ],\n          "mac": "2e:51:e6:31:96:40",\n          "dns": {}\n      }]\n    kubernetes.io/psp: global-unrestricted-psp\n    longhorn.io/last-applied-tolerations: \'[{"key":"kubevirt.io/drain","operator":"Exists","effect":"NoSchedule"}]\'\n\nOmitted...\n')),(0,a.kt)("h4",{id:"step-4"},"Step 4"),(0,a.kt)("p",null,"The storage network is dedicated to ",(0,a.kt)("a",{parentName:"p",href:"#same-physical-interfaces"},"internal communication between Longhorn pods"),", resulting in high performance and reliability. However, the storage network still relies on the ",(0,a.kt)("a",{parentName:"p",href:"/v1.4/networking/deep-dive#external-networking"},"external network infrastructure")," for connectivity (similar to how the ",(0,a.kt)("a",{parentName:"p",href:"/v1.4/networking/harvester-network#create-a-vm-with-vlan-network"},"VM VLAN network")," functions). When the external network is not connected and configured correctly, you may encounter the following issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The newly created VM becomes stuck at the ",(0,a.kt)("inlineCode",{parentName:"p"},"Not-Ready")," state.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"longhorn-manager")," pod logs include error messages."))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'longhorn-manager-j6dhh/longhorn-manager.log:2024-03-20T16:25:24.662251001Z time="2024-03-20T16:25:24Z" level=error msg="Failed rebuilding of replica 10.0.16.26:10000" controller=longhorn-engine engine=pvc-0a151c59-ffa9-4938-9c86-59ebb296bc88-e-c2a7fe77 error="proxyServer=10.52.6.33:8501 destination=10.0.16.23:10000: failed to add replica tcp://10.0.16.26:10000 for volume: rpc error: code = Unknown desc = failed to get replica 10.0.16.26:10000: rpc error: code = Unavailable desc = all SubConns are in TransientFailure, latest connection error: connection error: desc = \\"transport: Error while dialing dial tcp 10.0.16.26:10000: connect: no route to host\\"" node=oml-harvester-9 volume=pvc-0a151c59-ffa9-4938-9c86-59ebb296bc88\n')),(0,a.kt)("p",null,"To test the communication between Longhorn pods, perform the following steps:"),(0,a.kt)("p",null,"4.1 Obtain the storage network IP of each Longhorn Instance Manager pod identified in the previous step."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"instance-manager-r-43f1624d14076e1d95cd72371f0316e2\nstorage network IP: 10.0.16.8\n\ninstance-manager-e-ba38771e483008ce61249acf9948322f\nstorage network IP: 10.0.16.14\n")),(0,a.kt)("p",null,"4.2 Log in to those pods."),(0,a.kt)("p",null,"When you run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"ip addr"),", the output includes IPs that are identical to IPs in the pod annotations. In the following example, one IP is for the pod network, while the other is for the storage network."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl exec -i -t -n longhorn-system instance-manager-e-ba38771e483008ce61249acf9948322f -- /bin/sh\n\n$ ip addr\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n...\n3: eth0@if2277: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc noqueue state UP group default\n    link/ether 0e:7c:d6:77:44:72 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n    inet 10.52.6.146/32 scope global eth0\n...\n4: lhnet1@if2278: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default\n    link/ether fe:92:4f:fb:dd:20 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n    inet 10.0.16.14/20 brd 10.0.31.255 scope global lhnet1\n...\n\n$ ip route\ndefault via 169.254.1.1 dev eth0\n10.0.16.0/20 dev lhnet1 proto kernel scope link src 10.0.16.14\n169.254.1.1 dev eth0 scope link\n")),(0,a.kt)("p",null,"4.3 Start a simple HTTP server in one pod."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ python3 -m http.server 8000 --bind 10.0.16.14 (replace with your pod storage network IP)\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Explicitly bind the simple HTTP server to the storage network IP.")),(0,a.kt)("p",null,"4.4 Test the HTTP server in another pod."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"From instance-manager-r-43f1624d14076e1d95cd72371f0316e2 (IP 10.0.16.8)\n\n$ curl http://10.0.16.14:8000\n")),(0,a.kt)("p",null,"When the storage network is functioning correctly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command returns a list of files on the HTTP server."),(0,a.kt)("p",null,"4.5 (Optional) Troubleshoot issues."),(0,a.kt)("p",null,"The storage network may malfunction because of issues with the external network, such as the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Physical NICs (installed on Harvester nodes) that are associated with the storage network were not added to the same VLAN in the external switches.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The external switches are not correctly connected and configured."))),(0,a.kt)("h3",{id:"start-vm-manually"},"Start VM Manually"),(0,a.kt)("p",null,"After verifying the configuration, users could start VM manually on demand."))}c.isMDXComponent=!0},74050:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storagenetwork-diff-27850c359733ffa1a4ce550cc16af4a5.png"},36138:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storagenetwork-same-cc797fc537845a0b6eb4290c78252e7e.png"},75643:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storagenetwork-ui-cb75b9781f2196e3bba724b398edd066.png"}}]);