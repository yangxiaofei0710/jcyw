webpackJsonp([74],{847:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(211),o=r(n),c=t(8),u=r(c),l=t(371),d=t(344),s=function(e){return e.value};a.default={namespace:"projectList",state:{listInfo:{list:[],pagination:{current:1,pageSize:20,total:0},loading:!1},msg:"",visibal:!1,showProjectInfo:!1,projectInfoData:[],categoryTree:[],searchFormFields:{project_name:{value:void 0},createTime:{value:void 0},department_id:{value:void 0}},projectDataInfo:[],organizeTree:[],personOrganizeTree:[],currProjectInfo:{projectId:void 0,projectName:void 0},modalShowBol:!1,operateAuthor:{}},effects:{fetch:o.default.mark(function e(a,t){var r,n,c,f=a.payload,p=t.call,i=t.put,y=t.select;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(function(e){return e.projectList});case 2:return r=e.sent,n=(0,d.objKeyWrapper)(r.searchFormFields,s),e.next=6,i({type:"changeLoading",payload:!0});case 6:return e.next=8,p(l.fetchData,(0,u.default)({},n,f));case 8:if(c=e.sent,200!==c.code){e.next=12;break}return e.next=12,i({type:"save",payload:c.data});case 12:return e.next=14,i({type:"changeLoading",payload:!1});case 14:case"end":return e.stop()}},e,this)}),showProjectInfoModal:o.default.mark(function e(a,t){var r,n=a.payload,c=t.call,u=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(l.projectInfo,n);case 2:return r=e.sent,e.next=5,u({type:"changeProjectInfoModal",payload:!0,projectInfo:r.data});case 5:case"end":return e.stop()}},e,this)}),closeProjectInfoModal:o.default.mark(function e(a,t){var r=(t.call,t.put);return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({type:"changeProjectInfoModal",payload:!1,projectInfo:""});case 2:case"end":return e.stop()}},e,this)}),loadCategoryTree:o.default.mark(function e(a,t){var r,n=t.call,c=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(l.loadCategoryTree,a);case 2:return r=e.sent,e.next=5,c({type:"loadCategoryTreeData",payload:r.data});case 5:case"end":return e.stop()}},e,this)}),fetchOrganizeTree:o.default.mark(function e(a,t){var r,n,c,u=a.payload,d=t.call,s=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.loadType,n=u.withPerson,c=null,"department"!=r){e.next=11;break}return e.next=5,d(l.loadCategoryTree,{withPerson:n});case 5:if(c=e.sent,200!==c.code){e.next=9;break}return e.next=9,s({type:"saveOrganizeTree",payload:c.data});case 9:e.next=17;break;case 11:return e.next=13,d(l.loadCategoryTree,{withPerson:n});case 13:if(c=e.sent,200!==c.code){e.next=17;break}return e.next=17,s({type:"savePersonOrganizeTree",payload:c.data});case 17:case"end":return e.stop()}},e,this)}),saveProjectInfo:o.default.mark(function e(a,t){var r=a.payload,n=t.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:"saveCurrProjectInfo",payload:r});case 2:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,a){return(0,u.default)({},e,{listInfo:(0,u.default)({},e.listInfo,{list:a.payload.msgdata},{pagination:{current:a.payload.current_page,total:a.payload.total,pageSize:a.payload.page_size}}),operateAuthor:a.payload.permissions})},addResult:function(e,a){return(0,u.default)({},e,{msg:a.payload})},changeProjectInfoModal:function(e,a){var t=a.payload,r=a.projectInfoData;return(0,u.default)({},e,{showProjectInfo:t,projectInfoData:r})},loadCategoryTreeData:function(e,a){var t=a.payload;return(0,u.default)({},e,{categoryTree:t})},formFieldChange:function(e,a){return(0,u.default)({},e,{searchFormFields:(0,u.default)({},e.searchFormFields,a.payload)})},reste:function(e,a){return(0,u.default)({},e,{searchFormFields:(0,u.default)({},e.searchFormFields,a.payload)})},changeLoading:function(e,a){return(0,u.default)({},e,{listInfo:(0,u.default)({},e.listInfo,{loading:a.payload})})},saveOrganizeTree:function(e,a){return(0,u.default)({},e,{organizeTree:a.payload})},savePersonOrganizeTree:function(e,a){return(0,u.default)({},e,{personOrganizeTree:a.payload})},saveCurrProjectInfo:function(e,a){var t=a.payload;return(0,u.default)({},e,{currProjectInfo:(0,u.default)({},e.currProjectInfo,{projectId:t.projectId,projectName:t.projectName})})},changeModalBol:function(e,a){var t=a.payload;return(0,u.default)({},e,{modalShowBol:t})}}},e.exports=a.default}});