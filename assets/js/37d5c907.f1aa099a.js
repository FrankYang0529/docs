"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[47923],{31219:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>y,contentTitle:()=>k,default:()=>N,frontMatter:()=>h,metadata:()=>u,toc:()=>g});s(67294);var t=s(3905),m=s(54734),i=s(90238),n=s.n(i),l=s(36765),p=s(99473),r=s(50690),c=s(88337),o=s(48951),d=s(50551);const h={id:"patch-namespaced-persistent-volume-claim",title:"Patch a Persistent Volume Claim",description:"Patch a PersistentVolumeClaim object.",sidebar_label:"Patch a Persistent Volume Claim",hide_title:!0,hide_table_of_contents:!0,api:"eJzdV0uT2kYQ/iuqPiZD2HXlEt3ilCvZ8iPU2vFlzaGRGhiv5uHpEbWP0n9P9QywyyJkSDiZi4T69fVzeh6hJq6C9lE7CyVMMFbLAosJBdYcycbPrmkN/dGgNoWbfaUq/gIKIi4YyhvIVIapAucpoKi5qqEEL4o+oCH2WFHdqw8UBPrWEsfXrr6H8hEqZ4VHXtH7RldJ4fgrOztKGn+WVyFztSSD8hbvPUEJGRt0ndoRNRQWdLRslxHpQDWUMbSUPrB3lolF4NXFhTx2g/b3W1BD0IdsPjd4A7fa1iAO6M8SMGclsD5IaKPOCJ7RnpRxDNouoFNZQx/BUMQaI2b4c2wbwdqpQTwWDe1DSF/7bNhNvnuoElv2VH3X/gt3q4qY37s6/10zYwh4Dwp0JMP7xtSTBUgVIY5/dG3YQTaUgX7H0es/g2v9CZHfhaIOxG4P8N3otp1RsBSJRwb9aON4dEZXsOPSNc1/GK8CcfKJTyyTRhsduS8MWNdaOhGbyY5En/JtrW4H0/lUpvqnhqroQp/SXX+MDKw3dz4QS6sP1v7R3XxLIpfntAv7hSD04SS+SGEaq6M8YpPw2kQPE8eAkRbCk/gl2Vsk362vFTbt/xgAKfgppO9wRs1JSR1WfExNc3QBF3LkMX84NDpX6ViUOTdAPiCdSitibE/tmvMMV2waV2Gk+vp5856pDyv0WOl4f06Vzma583RVom0TsNdUDXKcBDejTzonbwidSuyfAlpOCI+TMcSMi/7CCYR8YFV4Kpnh5svUEzthfzSs43TkbPBL5F6rZFsjYX/t2nSmvXMsGZmQrYVhmg8R/UAfD7jXrX8Kfr243F/m/rHYxqUL+oHq/7DWPTeiwGNAQ5GCLMsvLUk3F25exCUVm3Nvc0iX+aFA27xML+HlaqoOGlfQWv2tpatcy2mP7dTe1pqKuRA7Bdq6ELcLrpwnVXArtwAu5i4UkdBw4vDBiQjvgswL3xmRTtOyunTba4TMLdFbwhi9Hq8ux1u7PH7cvpc3OHq4GP02XT+/fBlNf+rGfnv1yEO0kqvHWq5fBBRIfq+f7iZv7tD4hnL/aTt3yRUd5RP8hWFFHCkUv0+uJDirzX4Oq8sZRbyErvsXqmWpGA==",sidebar_class_name:"patch api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},k=void 0,u={unversionedId:"api/patch-namespaced-persistent-volume-claim",id:"version-v1.2/api/patch-namespaced-persistent-volume-claim",title:"Patch a Persistent Volume Claim",description:"Patch a PersistentVolumeClaim object.",source:"@site/versioned_docs/version-v1.2/api/patch-namespaced-persistent-volume-claim.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-persistent-volume-claim",permalink:"/v1.2/api/patch-namespaced-persistent-volume-claim",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"patch-namespaced-persistent-volume-claim",title:"Patch a Persistent Volume Claim",description:"Patch a PersistentVolumeClaim object.",sidebar_label:"Patch a Persistent Volume Claim",hide_title:!0,hide_table_of_contents:!0,api:"eJzdV0uT2kYQ/iuqPiZD2HXlEt3ilCvZ8iPU2vFlzaGRGhiv5uHpEbWP0n9P9QywyyJkSDiZi4T69fVzeh6hJq6C9lE7CyVMMFbLAosJBdYcycbPrmkN/dGgNoWbfaUq/gIKIi4YyhvIVIapAucpoKi5qqEEL4o+oCH2WFHdqw8UBPrWEsfXrr6H8hEqZ4VHXtH7RldJ4fgrOztKGn+WVyFztSSD8hbvPUEJGRt0ndoRNRQWdLRslxHpQDWUMbSUPrB3lolF4NXFhTx2g/b3W1BD0IdsPjd4A7fa1iAO6M8SMGclsD5IaKPOCJ7RnpRxDNouoFNZQx/BUMQaI2b4c2wbwdqpQTwWDe1DSF/7bNhNvnuoElv2VH3X/gt3q4qY37s6/10zYwh4Dwp0JMP7xtSTBUgVIY5/dG3YQTaUgX7H0es/g2v9CZHfhaIOxG4P8N3otp1RsBSJRwb9aON4dEZXsOPSNc1/GK8CcfKJTyyTRhsduS8MWNdaOhGbyY5En/JtrW4H0/lUpvqnhqroQp/SXX+MDKw3dz4QS6sP1v7R3XxLIpfntAv7hSD04SS+SGEaq6M8YpPw2kQPE8eAkRbCk/gl2Vsk362vFTbt/xgAKfgppO9wRs1JSR1WfExNc3QBF3LkMX84NDpX6ViUOTdAPiCdSitibE/tmvMMV2waV2Gk+vp5856pDyv0WOl4f06Vzma583RVom0TsNdUDXKcBDejTzonbwidSuyfAlpOCI+TMcSMi/7CCYR8YFV4Kpnh5svUEzthfzSs43TkbPBL5F6rZFsjYX/t2nSmvXMsGZmQrYVhmg8R/UAfD7jXrX8Kfr243F/m/rHYxqUL+oHq/7DWPTeiwGNAQ5GCLMsvLUk3F25exCUVm3Nvc0iX+aFA27xML+HlaqoOGlfQWv2tpatcy2mP7dTe1pqKuRA7Bdq6ELcLrpwnVXArtwAu5i4UkdBw4vDBiQjvgswL3xmRTtOyunTba4TMLdFbwhi9Hq8ux1u7PH7cvpc3OHq4GP02XT+/fBlNf+rGfnv1yEO0kqvHWq5fBBRIfq+f7iZv7tD4hnL/aTt3yRUd5RP8hWFFHCkUv0+uJDirzX4Oq8sZRbyErvsXqmWpGA==",sidebar_class_name:"patch api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Patch a Node Network",permalink:"/v1.2/api/patch-namespaced-node-network"},next:{title:"Patch a Support Bundle",permalink:"/v1.2/api/patch-namespaced-support-bundle"}},y={},g=[{value:"Request",id:"request",level:2}],_={toc:g},v="wrapper";function N({components:e,...a}){return(0,t.kt)(v,{..._,...a,components:e,mdxType:"MDXLayout"},(0,t.kt)("h1",{className:"openapi__heading"},"Patch a Persistent Volume Claim"),(0,t.kt)(n(),{method:"patch",path:"/api/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/persistentvolumeclaims/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,t.kt)("p",null,"Patch a PersistentVolumeClaim object."),(0,t.kt)("h2",{id:"request"},"Request"),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(p.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,t.kt)(p.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,t.kt)("span",{className:"openapi-schema__required"},"required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"object"))))),(0,t.kt)(d.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,t.kt)("span",{className:"openapi-schema__required"},"required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"object")))))),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,t.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"OK")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"accessModes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"dataSource"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiGroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"dataSourceRef"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiGroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"resources"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"limits"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"requests"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"selector"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"matchExpressions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"key",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"","x-kubernetes-patch-merge-key":"key","x-kubernetes-patch-strategy":"merge"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"matchLabels"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,t.kt)(c.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"volumeMode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"volumeName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"accessModes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"allocatedResources"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"capacity"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Bound`, `Lost`, `Pending`]",schema:{type:"string",enum:["Bound","Lost","Pending"]},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"resizeStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(r.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "accessModes": [\n      "string"\n    ],\n    "dataSource": {\n      "apiGroup": "string",\n      "kind": "string",\n      "name": "string"\n    },\n    "dataSourceRef": {\n      "apiGroup": "string",\n      "kind": "string",\n      "name": "string"\n    },\n    "resources": {\n      "limits": {},\n      "requests": {}\n    },\n    "selector": {\n      "matchExpressions": [\n        {\n          "key": "string",\n          "operator": "string",\n          "values": [\n            "string"\n          ]\n        }\n      ],\n      "matchLabels": {}\n    },\n    "storageClassName": "string",\n    "volumeMode": "string",\n    "volumeName": "string"\n  },\n  "status": {\n    "accessModes": [\n      "string"\n    ],\n    "allocatedResources": {},\n    "capacity": {},\n    "conditions": [\n      {\n        "lastProbeTime": {},\n        "lastTransitionTime": {},\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "Bound",\n    "resizeStatus": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Unauthorized")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))))))))))}N.isMDXComponent=!0}}]);