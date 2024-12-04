"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[542],{31738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});a(67294);var r=a(3905);const n={sidebar_position:5,sidebar_label:"VM Backup & Restore",title:"VM Backup & Restore",keywords:["Harvester","harvester","Rancher","rancher","VM Backup & Restore"],description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM."},i=void 0,l={unversionedId:"vm/backup-restore",id:"version-v1.0/vm/backup-restore",title:"VM Backup & Restore",description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM.",source:"@site/versioned_docs/version-v1.0/vm/backup-restore.md",sourceDirName:"vm",slug:"/vm/backup-restore",permalink:"/v1.0/vm/backup-restore",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/vm/backup-restore.md",tags:[],version:"v1.0",lastUpdatedAt:1733305603,formattedLastUpdatedAt:"Dec 4, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"VM Backup & Restore",title:"VM Backup & Restore",keywords:["Harvester","harvester","Rancher","rancher","VM Backup & Restore"],description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM."},sidebar:"api",previous:{title:"Access to the Virtual Machine",permalink:"/v1.0/vm/access-to-the-vm"},next:{title:"Live Migration",permalink:"/v1.0/vm/live-migration"}},o={},s=[{value:"Configure Backup Target",id:"configure-backup-target",level:2},{value:"Create a VM backup",id:"create-a-vm-backup",level:2},{value:"Restore a new VM using a backup",id:"restore-a-new-vm-using-a-backup",level:2},{value:"Replace an Existing VM using a backup",id:"replace-an-existing-vm-using-a-backup",level:2},{value:"Restore a new VM on another Harvester cluster",id:"restore-a-new-vm-on-another-harvester-cluster",level:2},{value:"Upload the same VM images to a new cluster",id:"upload-the-same-vm-images-to-a-new-cluster",level:3},{value:"Restore a new VM in a new cluster",id:"restore-a-new-vm-in-a-new-cluster",level:3}],p={toc:s},c="wrapper";function u({components:e,...t}){return(0,r.kt)(c,{...p,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/backup-restore"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,r.kt)("p",null,"VM backups are created from the ",(0,r.kt)("strong",{parentName:"p"},"Virtual Machines")," page. The VM backup volumes will be stored in the ",(0,r.kt)("strong",{parentName:"p"},"Backup Target")," (an NFS or S3 server), and they can be used to either restore a new VM or replace an existing VM.\n",(0,r.kt)("img",{alt:"vm-backup.png",src:a(13849).Z,width:"3354",height:"1284"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A backup target must be set up. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"#configure-backup-target"},"Configure Backup Target"),". If the backup target has not been set, you\u2019ll be prompted with a message to do so.")),(0,r.kt)("h2",{id:"configure-backup-target"},"Configure Backup Target"),(0,r.kt)("p",null,"A backup target is an endpoint used to access a backup store in Harvester. A backup store is an NFS server or S3 compatible server that stores the backups of VM volumes. The backup target can be set at ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > backup-target"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Choose S3 or NFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A hostname or an IP address. It can be left empty for AWS S3.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BucketName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BucketRegion"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Region of the bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AccessKeyID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A user-id that uniquely identifies your account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SecretAccessKey"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The password to your account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Certificate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Paste to use a self-signed SSL certificate of your S3 server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"VirtualHostedStyle"),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"VirtualHostedStyle")," access only; e.g., Alibaba Cloud (Aliyun) OSS")))),(0,r.kt)("h2",{id:"create-a-vm-backup"},"Create a VM backup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Once the backup target is set, go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Take Backup")," of the VM actions to create a new VM backup."),(0,r.kt)("li",{parentName:"ol"},"Set a custom backup name and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM backup.\n",(0,r.kt)("img",{alt:"create-backup.png",src:a(52076).Z,width:"3356",height:"1244"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The backup is created. You will receive a notification message, and you can also go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced > Backups")," page to view all VM backups."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadyToUse")," status will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," once the Backup is complete."),(0,r.kt)("p",null,"Users can either choose to restore a new VM or replace an existing VM using this backup."),(0,r.kt)("h2",{id:"restore-a-new-vm-using-a-backup"},"Restore a new VM using a backup"),(0,r.kt)("p",null,"To restore a new VM from a backup, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Backups")," page."),(0,r.kt)("li",{parentName:"ol"},"Specify the new VM name and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"A new VM will be restored using the backup volumes and metadata, and you can access it from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,r.kt)("img",{alt:"restore-vm.png",src:a(55635).Z,width:"3358",height:"1102"}))),(0,r.kt)("h2",{id:"replace-an-existing-vm-using-a-backup"},"Replace an Existing VM using a backup"),(0,r.kt)("p",null,"You can replace an existing VM using the backup with the same VM backup target."),(0,r.kt)("p",null,"You can choose to either delete or retain the previous volumes. By default, all previous volumes are deleted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements:")," The VM must exist and is required to be in the powered-off status."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Backups")," page."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,r.kt)("p",null,"The restore process can be viewed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Virtual Machines")," page."),(0,r.kt)("h2",{id:"restore-a-new-vm-on-another-harvester-cluster"},"Restore a new VM on another Harvester cluster"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.0.0")),(0,r.kt)("p",null,"Users can now restore a new VM on another cluster by leveraging the VM metadata & content backup feature."),(0,r.kt)("admonition",{title:"prerequisites",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You must manually configure the virtual machine images with the same name on the new cluster first, otherwise the virtual machines will be failed to recover.")),(0,r.kt)("h3",{id:"upload-the-same-vm-images-to-a-new-cluster"},"Upload the same VM images to a new cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check the existing image name (normally starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"image-"),") and create the same one on the new cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get vmimages -A\nNAMESPACE   NAME                               DISPLAY-NAME                              SIZE         AGE\ndefault     image-79hdq                        focal-server-cloudimg-amd64.img           566886400    5h36m\ndefault     image-l7924                        harvester-v1.0.0-rc2-amd64.iso            3964551168   137m\ndefault     image-lvqxn                        opensuse-leap-15.3.x86_64-nocloud.qcow2   568524800    5h35m\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Apply a VM image YAML with the same name and content in the new cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ cat <<EOF | kubectl apply -f -\napiVersion: harvesterhci.io/v1beta1\nkind: VirtualMachineImage\nmetadata:\n  name: image-lvqxn\n  namespace: default\nspec:\n  displayName: opensuse-leap-15.3.x86_64-nocloud.qcow2\n  pvcName: ""\n  pvcNamespace: ""\n  sourceType: download\n  url: http://download.opensuse.org/repositories/Cloud:/Images:/Leap_15.3/images/openSUSE-Leap-15.3.x86_64-NoCloud.qcow2\nEOF\n')),(0,r.kt)("h3",{id:"restore-a-new-vm-in-a-new-cluster"},"Restore a new VM in a new cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setup the same backup target in a new cluster. And the backup controller will automatically sync the backup metadata to the new cluster."),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Backups")," page."),(0,r.kt)("li",{parentName:"ol"},"Select the synced VM backup metadata and choose to restore a new VM with a specified VM name."),(0,r.kt)("li",{parentName:"ol"},"A new VM will be restored using the backup volumes and metadata. You can access it from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.")))}u.isMDXComponent=!0},52076:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-backup-b9abcf911df3ed050acd08bfa7892900.png"},55635:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/restore-vm-1a0c9b7a3b12bd8f45cb00882f08b354.png"},13849:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/vm-backup-d2283dbf85c8455e2d61f5f20c5fcb51.png"}}]);