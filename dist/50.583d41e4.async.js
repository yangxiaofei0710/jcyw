webpackJsonp([50],{1350:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.saveAuthories=t.userForRole=t.queryUsersByRole=t.authrizeForRole=t.queryAuthories=t.queryRoleDetail=t.deleteRole=t.editRole=t.addRole=t.queryRoles=t.userControl=t.userDataSourceSync=t.queryUsers=void 0;var n=r(211),u=a(n),o=r(8),s=a(o),l=r(368),c=a(l),d=(t.queryUsers=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/user/search",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.userDataSourceSync=function(){var e=(0,c.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/user/sync",{method:"POST",body:{sync:!0}}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.userControl=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/user/setstatus",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryRoles=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/role/search",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.addRole=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/role/add",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.editRole=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/role/edit",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.deleteRole=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/role/delete",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryRoleDetail=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/role/roleinfo",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryAuthories=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/role/role/permissionlist",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.authrizeForRole=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/role/authoredit",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryUsersByRole=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/role/userinfos",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.userForRole=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/account/role/usersedit",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.saveAuthories=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/role/role/permissionedit",{method:"POST",body:(0,s.default)({},t)}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),r(376),r(375)),i=a(d)},863:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(369),u=a(n),o=r(211),s=a(o),l=r(8),c=a(l);r(370);var d=r(1),i=(a(d),r(371)),f=r(1350),p=r(344),h=r(377),y=a(h),g=function(e){return e.value},v=function(e){return{value:e}};t.default={namespace:"role-manage",state:{listInfo:{list:[],pagination:{current:1,pageSize:20,total:0},isLoading:!1},searchFormFields:{role_name:{value:void 0}},orgTreeData:[],authoriesTreeData:{treeData:[],selectKeys:[]},authorLoading:!1,modalLoading:!1,operatorLoading:!1,currentRoleId:1,currentSelectedIds:[],roleInfo:{detailFormFields:{role_name:{value:void 0},desc:{value:void 0}},isLoading:!1},operateAuthor:{}},effects:{fetchList:s.default.mark(function e(t,r){var a,n,u,o=t.payload,l=r.call,d=r.put,i=r.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(function(e){return e["role-manage"]});case 2:return a=e.sent,n=(0,p.objKeyWrapper)(a.searchFormFields,g),e.next=6,d({type:"changeLoading",payload:!0});case 6:return e.next=8,l(f.queryRoles,(0,c.default)({},n,o));case 8:if(u=e.sent,200!==u.code){e.next=12;break}return e.next=12,d({type:"saveList",payload:u.data});case 12:return e.next=14,d({type:"changeLoading",payload:!1});case 14:case"end":return e.stop()}},e,this)}),fetchOrgTreeData:s.default.mark(function e(t,r){var a,n=t.payload,u=r.call,o=r.put;r.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(i.loadCategoryTree,n);case 2:if(a=e.sent,200!==a.code){e.next=6;break}return e.next=6,o({type:"saveOrgTreeData",payload:a.data});case 6:case"end":return e.stop()}},e,this)}),fetchUsersByRole:s.default.mark(function e(t,r){var a,n,u=t.payload,o=r.call,l=r.put;r.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({type:"changeModalLoading",payload:!0});case 2:return e.next=4,o(f.queryUsersByRole,u);case 4:if(a=e.sent,200!==a.code){e.next=11;break}return n={currentRoleId:u.role_id,currentSelectedIds:a.data.user_ids.map(function(e){return e.user_id})},e.next=9,l({type:"changeModalLoading",payload:!1});case 9:return e.next=11,l({type:"currentRoleChange",payload:n});case 11:case"end":return e.stop()}},e,this)}),fetchRoleDetail:s.default.mark(function e(t,r){var a,n=t.payload,u=r.call,o=r.put;r.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"changeRoleInfoLoading",payload:!0});case 2:return e.next=4,u(f.queryRoleDetail,n);case 4:if(a=e.sent,200!==a.code){e.next=10;break}return e.next=8,o({type:"roleDetailFieldsChange",payload:(0,p.objKeyWrapper)(a.data,v)});case 8:return e.next=10,o({type:"changeRoleInfoLoading",payload:!1});case 10:case"end":return e.stop()}},e,this)}),fetchAuthories:s.default.mark(function e(t,r){var a,n=t.payload,u=r.call,o=r.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"changeAuthorLoading",payload:!0});case 2:return e.next=4,u(f.queryAuthories,n);case 4:if(a=e.sent,200!=a.code){e.next=8;break}return e.next=8,o({type:"saveAuthoriesTreeData",payload:a});case 8:return e.next=10,o({type:"changeAuthorLoading",payload:!1});case 10:case"end":return e.stop()}},e,this)}),saveAuthories:s.default.mark(function e(t,r){var a,n,o,l=t.payload,d=r.call,i=r.put,h=r.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(function(e){return e["role-manage"]});case 2:return a=e.sent,n=(0,p.objKeyWrapper)(a.searchFormFields,g),e.next=6,i({type:"changeAuthorLoading",payload:!0});case 6:return e.next=8,d(f.saveAuthories,(0,c.default)({},l,{role_id:a.currentRoleId}));case 8:if(o=e.sent,200!=o.code){e.next=14;break}return u.default.success("\u6388\u6743\u6210\u529f"),y.default.set("OptCodes",o.data),e.next=14,i({type:"fetchList",payload:(0,c.default)({},n,{page:a.listInfo.current,page_size:a.listInfo.pageSize})});case 14:return e.next=16,i({type:"changeAuthorLoading",payload:!1});case 16:case"end":return e.stop()}},e,this)}),roleUpdate:s.default.mark(function e(t,r){var a,n,u,o,l,d=t.payload,i=r.call,h=r.put,y=r.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.type,e.next=3,y(function(e){return e["role-manage"]});case 3:return n=e.sent,u=null,o=(0,p.objKeyWrapper)(n.roleInfo.detailFormFields,g),l=(0,p.objKeyWrapper)(n.searchFormFields,g),e.next=9,h({type:"changeRoleInfoLoading",payload:!0});case 9:if("add"!==a){e.next=15;break}return e.next=12,i(f.addRole,o);case 12:u=e.sent,e.next=18;break;case 15:return e.next=17,i(f.editRole,(0,c.default)({},o,{role_id:n.currentRoleId}));case 17:u=e.sent;case 18:if(200!==u.code){e.next=23;break}return e.next=21,h({type:"fetchList",payload:(0,c.default)({},l,{page:n.listInfo.current,page_size:n.listInfo.pageSize})});case 21:return e.next=23,h({type:"changeRoleInfoLoading",payload:!1});case 23:case"end":return e.stop()}},e,this)}),userForRole:s.default.mark(function e(t,r){var a,n=t.payload,u=r.call,o=r.put;r.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"changeModalLoading",payload:!0});case 2:return e.next=4,u(f.userForRole,n);case 4:if(a=e.sent,200!==a.code){e.next=8;break}return e.next=8,o({type:"changeModalLoading",payload:!1});case 8:case"end":return e.stop()}},e,this)}),deleteRole:s.default.mark(function e(t,r){var a,n,o,l=t.payload,d=r.call,i=r.put,h=r.select;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({type:"changeOperatorLoading",payload:!0});case 2:return e.next=4,h(function(e){return e["role-manage"]});case 4:return a=e.sent,e.next=7,d(f.deleteRole,l);case 7:if(n=e.sent,200!==n.code){e.next=15;break}return u.default.success("\u5220\u9664\u6210\u529f\uff01"),e.next=12,i({type:"changeOperatorLoading",payload:!1});case 12:return o=(0,p.objKeyWrapper)(a.searchFormFields,g),e.next=15,i({type:"fetchList",payload:(0,c.default)({},o,{page:a.listInfo.current,page_size:a.listInfo.pageSize})});case 15:case"end":return e.stop()}},e,this)})},reducers:{saveList:function(e,t){var r=t.payload;return(0,c.default)({},e,{listInfo:(0,c.default)({},e.listInfo,{list:r.msgdata},{pagination:{current:r.current_page,total:r.total,pageSize:r.page_size}}),operateAuthor:r.permissions})},changeLoading:function(e,t){var r=t.payload;return(0,c.default)({},e,{listInfo:(0,c.default)({},e.listInfo,{isLoading:r})})},changeModalLoading:function(e,t){var r=t.payload;return(0,c.default)({},e,{modalLoading:r})},changeOperatorLoading:function(e,t){var r=t.payload;return(0,c.default)({},e,{operatorLoading:r})},changeRoleInfoLoading:function(e,t){var r=t.payload;return(0,c.default)({},e,{roleInfo:(0,c.default)({},e.roleInfo,{isLoading:r})})},formFieldChange:function(e,t){var r=t.payload;return(0,c.default)({},e,{searchFormFields:(0,c.default)({},e.searchFormFields,r)})},saveOrgTreeData:function(e,t){var r=t.payload;return(0,c.default)({},e,{orgTreeData:r})},saveAuthoriesTreeData:function(e,t){var r=t.payload;return(0,c.default)({},e,{authoriesTreeData:(0,c.default)({},e.authoriesTreeData,{treeData:r.data,selectKeys:r.permission_list})})},changeSelectKeys:function(e,t){var r=t.payload;return(0,c.default)({},e,{authoriesTreeData:(0,c.default)({},e.authoriesTreeData,{selectKeys:r})})},changeAuthorLoading:function(e,t){var r=t.payload;return(0,c.default)({},e,{authorLoading:r})},currentRoleChange:function(e,t){var r=t.payload;return(0,c.default)({},e,{currentRoleId:r.currentRoleId,currentSelectedIds:r.currentSelectedIds})},roleDetailFieldsChange:function(e,t){var r=t.payload;return(0,c.default)({},e,{roleInfo:(0,c.default)({},e.roleInfo,{detailFormFields:(0,c.default)({},e.roleInfo.detailFormFields,r)})})},changeCurrentRoleId:function(e,t){var r=t.payload;return(0,c.default)({},e,{currentRoleId:r})}}},e.exports=t.default}});