"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[69320],{85926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>s});t(67294);var o=t(3905);const a={sidebar_position:4,sidebar_label:"Monitoring",title:"Monitoring"},i=void 0,r={unversionedId:"troubleshooting/monitoring",id:"version-v1.1/troubleshooting/monitoring",title:"Monitoring",description:"The following sections contain tips to troubleshoot Harvester Monitoring.",source:"@site/versioned_docs/version-v1.1/troubleshooting/monitoring.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/monitoring",permalink:"/v1.1/troubleshooting/monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/troubleshooting/monitoring.md",tags:[],version:"v1.1",lastUpdatedAt:1728972989,formattedLastUpdatedAt:"Oct 15, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Monitoring",title:"Monitoring"},sidebar:"api",previous:{title:"Operating System",permalink:"/v1.1/troubleshooting/os"},next:{title:"VM",permalink:"/v1.1/troubleshooting/vm"}},l={},s=[{value:"Monitoring is unusable",id:"monitoring-is-unusable",level:2},{value:"Monitoring is unusable due to Pod being stuck in <code>Terminating</code> status",id:"monitoring-is-unusable-due-to-pod-being-stuck-in-terminating-status",level:3},{value:"Expand PV/Volume Size",id:"expand-pvvolume-size",level:2},{value:"View Volume",id:"view-volume",level:3},{value:"From Embedded Longhorn WebUI",id:"from-embedded-longhorn-webui",level:4},{value:"From CLI",id:"from-cli",level:4},{value:"Scale Down a Deployment",id:"scale-down-a-deployment",level:3},{value:"Expand Volume",id:"expand-volume",level:3},{value:"Scale Up a Deployment",id:"scale-up-a-deployment",level:3}],d={toc:s},m="wrapper";function c({components:e,...n}){return(0,o.kt)(m,{...d,...n,components:e,mdxType:"MDXLayout"},(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/monitoring"})),(0,o.kt)("p",null,"The following sections contain tips to troubleshoot Harvester Monitoring."),(0,o.kt)("h2",{id:"monitoring-is-unusable"},"Monitoring is unusable"),(0,o.kt)("p",null,"When the Harvester Dashboard is not showing any monitoring metrics, it can be caused by the following reasons."),(0,o.kt)("h3",{id:"monitoring-is-unusable-due-to-pod-being-stuck-in-terminating-status"},"Monitoring is unusable due to Pod being stuck in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Terminating")," status"),(0,o.kt)("p",null,"Harvester Monitoring pods are deployed randomly on the cluster Nodes. When the Node hosting the pods accidentally goes down, the related pods may become stuck in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminating")," status rendering the Monitoring unusable from the WebUI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n cattle-monitoring-system\n\nNAMESPACE                   NAME                                                     READY   STATUS        RESTARTS   AGE\ncattle-monitoring-system    prometheus-rancher-monitoring-prometheus-0               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-admission-create-fwjn9                0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-crd-create-9wtzf                      0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-ph4nz               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-t24sz               0/3     Init:0/2      0          132m\n\ncattle-monitoring-system    rancher-monitoring-kube-state-metrics-5bc8bb48bd-nbd92   1/1     Running       4          4d1h\n...\n\n")),(0,o.kt)("p",null,"Monitoring can be recovered using CLI commands to force delete the related pods. The cluster will redeploy new pods to replace them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Delete each none-running Pod in namespace cattle-monitoring-system.\n\n$ kubectl delete pod --force -n cattle-monitoring-system prometheus-rancher-monitoring-prometheus-0\n\n pod "prometheus-rancher-monitoring-prometheus-0" force deleted\n\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-admission-create-fwjn9\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-crd-create-9wtzf\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-ph4nz \n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-t24sz\n')),(0,o.kt)("p",null,"Wait for a few minutes so that the new pods are created and readied for the Monitoring dashboard to be usable again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get pods -n cattle-monitoring-system \n\nNAME                                                     READY   STATUS     RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               0/3     Init:0/1   0          98s\nrancher-monitoring-grafana-d9c56d79b-cp86w               0/3     Init:0/2   0          27s\n...\n\n$ kubectl get pods -n cattle-monitoring-system \n\nNAME                                                     READY   STATUS    RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               3/3     Running   0          7m57s\nrancher-monitoring-grafana-d9c56d79b-cp86w               3/3     Running   0          6m46s\n...\n\n")),(0,o.kt)("h2",{id:"expand-pvvolume-size"},"Expand PV/Volume Size"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Harvester")," integrates ",(0,o.kt)("inlineCode",{parentName:"p"},"Longhorn")," as the default storage provider."),(0,o.kt)("p",null,"Harvester ",(0,o.kt)("inlineCode",{parentName:"p"},"Monitoring")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Persistent Volume (PV)")," to store running data. When a cluster has been running for a certain time, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Persistent Volume")," may need to expand its size."),(0,o.kt)("p",null,"Based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Longhorn")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Volume")," expansion guide, ",(0,o.kt)("inlineCode",{parentName:"p"},"Harvester")," illustrates how to ",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/volumes-and-nodes/expansion/"},"expand the volume size"),"."),(0,o.kt)("h3",{id:"view-volume"},"View Volume"),(0,o.kt)("h4",{id:"from-embedded-longhorn-webui"},"From Embedded Longhorn WebUI"),(0,o.kt)("p",null,"Access the embedded Longhorn WebUI according to ",(0,o.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"this document"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(96908).Z,width:"1478",height:"872"})),(0,o.kt)("p",null,"The default view."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(10648).Z,width:"2506",height:"1276"})),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Volume")," to list all existing volumes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(56484).Z,width:"2668",height:"970"})),(0,o.kt)("h4",{id:"from-cli"},"From CLI"),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to get all Volumes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl get pvc -A\nNAMESPACE                  NAME                                                                                             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS         AGE\ncattle-monitoring-system   alertmanager-rancher-monitoring-alertmanager-db-alertmanager-rancher-monitoring-alertmanager-0   Bound    pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   5Gi        RWO            harvester-longhorn   43h\ncattle-monitoring-system   prometheus-rancher-monitoring-prometheus-db-prometheus-rancher-monitoring-prometheus-0           Bound    pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   50Gi       RWO            harvester-longhorn   43h\ncattle-monitoring-system   rancher-monitoring-grafana                                                                       Bound    pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   2Gi        RWO            harvester-longhorn   43h\n\n# kubectl get volume -A\nNAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE     AGE\nlonghorn-system   pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   attached   degraded                 5368709120    harv31   43h\nlonghorn-system   pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   attached   degraded                 53687091200   harv31   43h\nlonghorn-system   pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   attached   degraded                 2147483648    harv31   43h\n")),(0,o.kt)("h3",{id:"scale-down-a-deployment"},"Scale Down a Deployment"),(0,o.kt)("p",null,"To detach the ",(0,o.kt)("inlineCode",{parentName:"p"},"Volume"),", you need to scale down the ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment")," that uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Volume"),"."),(0,o.kt)("p",null,"The example below is against the PVC claimed by ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana"),"."),(0,o.kt)("p",null,"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment")," in the namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              1/1     1            1           43h  // target deployment\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n")),(0,o.kt)("p",null,"Scale down the deployment ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana")," to 0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl scale --replicas=0 deployment/rancher-monitoring-grafana -n cattle-monitoring-system\n")),(0,o.kt)("p",null,"Check the deployment and the volume."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              0/0     0            0           43h  // scaled down\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n\n# kubectl get volume -A\nNAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE     AGE\nlonghorn-system   pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   attached   degraded                 5368709120    harv31   43h\nlonghorn-system   pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   attached   degraded                 53687091200   harv31   43h\nlonghorn-system   pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   detached   unknown                  2147483648             43h  // volume is detached\n")),(0,o.kt)("h3",{id:"expand-volume"},"Expand Volume"),(0,o.kt)("p",null,"In the Longhorn WebUI, the related volume becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"Detached"),". Click the icon in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Operation")," column, and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Expand Volume"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(28921).Z,width:"2564",height:"1122"})),(0,o.kt)("p",null,"Input a new size, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Longhorn")," will expand the volume to this size."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(21695).Z,width:"2502",height:"1226"})),(0,o.kt)("h3",{id:"scale-up-a-deployment"},"Scale Up a Deployment"),(0,o.kt)("p",null,"After the ",(0,o.kt)("inlineCode",{parentName:"p"},"Volume")," is expanded to target size, you need to scale up the aforementioned deployment to its original replicas. For the above example of ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana"),", the original replicas is 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl scale --replicas=1 deployment/rancher-monitoring-grafana -n cattle-monitoring-system\n\n")),(0,o.kt)("p",null,"Check the deployment again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              1/1     1            1           43h  // scaled up\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Volume")," is attached to the new POD."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(46112).Z,width:"2696",height:"942"})),(0,o.kt)("p",null,"To now, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Volume")," is expanded to the new size and the POD is using it smoothly."))}c.isMDXComponent=!0},96908:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/1-access-embedded-longhorn-9f84b5f472675415f355f8d6a382dad6.png"},10648:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/2-longhorn-dashboard-90a68b82b511c671db6d640dc8038274.png"},56484:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/3-view-all-volume-f72a8c49486c5a86a66aa29680e39000.png"},28921:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/4-select-volume-to-expand-9c1002c23d1a8cd653272951031e0f34.png"},21695:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/5-expand-volue-to-new-size-0c5ddcb89f21656e1bfb1c1cc24d8c3c.png"},46112:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/6-after-scale-up-00d817e0272b5a4184bc09e289f45101.png"}}]);