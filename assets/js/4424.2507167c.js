(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[4424],{44424:function(e,n,r){"use strict";r.r(n),r.d(n,{plugin:function(){return s},validate:function(){return p}});var t,i=r(41476),a=r(57135),_=r.n(a),o=r(482),u=r(70247),l=r(67425);!function(e){e[e.Namespace=0]="Namespace",e[e.Default=1]="Default",e[e.Regular=2]="Regular"}(t||(t={}));var c=function(e,n){return null==e?n:e},s=function(){var e=(0,i.Z)(_().mark((function e(n,r,t){var i,a,l,s,p,d;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.federation?(0,u.NT)(n):n,a=c(t.descriptions,!0),l=c(t.directiveIsRepeatable,!0),s=c(t.schemaDescription,void 0),p=c(t.specifiedByUrl,void 0),d=(0,o.U)(i,{descriptions:a,directiveIsRepeatable:l,schemaDescription:s,specifiedByUrl:p}),e.abrupt("return",t.minify?JSON.stringify(d):JSON.stringify(d,null,2));case 7:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)(_().mark((function e(n,r,t,i){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(".json"===(0,l.extname)(i)){e.next=2;break}throw new Error('Plugin "introspection" requires extension to be ".json"!');case 2:case"end":return e.stop()}}),e)})));return function(n,r,t,i){return e.apply(this,arguments)}}()},70247:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{u3:function(){return ApolloFederation},tF:function(){return DetailedError},E1:function(){return addFederationReferencesToSchema},f4:function(){return federationSpec},Wp:function(){return getBaseType},Ed:function(){return isComplexPluginOutput},L5:function(){return isUsingTypes},NT:function(){return removeFederation},o9:function(){return removeNonNullWrapper},IF:function(){return resolveExternalModuleAndFn}});var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(55117),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16726),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(58459),graphql__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(93067),graphql__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(44825),graphql__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41867),graphql__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44399),graphql__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(27057),lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(98784),lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__),process=__webpack_require__(27061);function resolveExternalModuleAndFn(pointer){if("function"==typeof pointer)return pointer;var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")},_pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName="change-case-all");var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var n={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var r,t;"string"==typeof e?n.content+=e:(n.content+=e.content,(r=n.prepend).push.apply(r,e.prepend||[]),(t=n.append).push.apply(t,e.append||[]))})),[].concat(n.prepend,[n.content],n.append).join("\n")}function isWrapperType(e){return(0,graphql__WEBPACK_IMPORTED_MODULE_1__.HG)(e)||(0,graphql__WEBPACK_IMPORTED_MODULE_1__.zM)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function removeNonNullWrapper(e){return(0,graphql__WEBPACK_IMPORTED_MODULE_1__.zM)(e)?e.ofType:e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:isConfiguredOutput(e)?e.plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var n;return"string"==typeof e?[(n={},n[e]={},n)]:Array.isArray(e)?e.map((function(e){var n;return"string"==typeof e?((n={})[e]={},n):e})):"object"==typeof e?Object.keys(e).reduce((function(n,r){var t;return[].concat(n,[(t={},t[r]=e[r],t)])}),[]):[]}function hasNullableTypeRecursively(e){return!(0,graphql__WEBPACK_IMPORTED_MODULE_1__.zM)(e)||!(!(0,graphql__WEBPACK_IMPORTED_MODULE_1__.HG)(e)&&!(0,graphql__WEBPACK_IMPORTED_MODULE_1__.zM)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,n,r){var t=0,i=[];return(0,graphql__WEBPACK_IMPORTED_MODULE_2__.Vn)(e,{SelectionSet:{enter:function(e,t,a,_){if(!_.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var o=e.selections||[];if(r&&o.length>0){var u=function(){if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.FRAGMENT_DEFINITION)return a.typeCondition.name.value;if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.FIELD){var e=i[i.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var n=e.getFields()[a.name.value];if(!n)throw new Error('Unable to find field "'+a.name.value+'" on type "'+e+'"!');return getBaseType(n.type).name}if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.OPERATION_DEFINITION){if("query"===a.operation)return r.getQueryType().name;if("mutation"===a.operation)return r.getMutationType().name;if("subscription"===a.operation)return r.getSubscriptionType().name}else if(a.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.INLINE_FRAGMENT)return a.typeCondition?a.typeCondition.name.value:i[i.length-1].name;return null}();i.push(r.getType(u))}}},leave:function(e){var n=e.selections||[];r&&n.length>0&&i.pop()}},Field:{enter:function(e,a,_,o,u){if(!e.name.value.startsWith("__")&&!u.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var l=e.selectionSet&&e.selectionSet.selections||[],c=l.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_3__.h.FRAGMENT_SPREAD&&!n.includes(e.name.value)}));if((0===l.length||c.length>0)&&t++,r){var s=i[i.length-1];if(s&&(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(s)){var p=s.getFields()[e.name.value];if(!p)throw new Error('Unable to find field "'+e.name.value+'" on type "'+s+'"!');hasNullableTypeRecursively(p.type)&&t++}}}}},enter:{VariableDefinition:function(e,r,i,a,_){_.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||t++},InputValueDefinition:function(e,r,i,a,_){_.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||t++}}}),t>0}var federationSpec=(0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var n=e.getTypeMap();for(var r in n){var t=e.getType(r);if((0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(t)&&isFederationObjectType(t)){var i,a=t.toConfig();a.fields=Object.assign(((i={})[resolveReferenceFieldName]={type:t},i),a.fields);var _=new graphql__WEBPACK_IMPORTED_MODULE_1__.h6(a);_.astNode=_.astNode||(0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)((0,graphql__WEBPACK_IMPORTED_MODULE_5__.yG)(_)).definitions[0],_.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_3__.h.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_3__.h.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_3__.h.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_3__.h.NAME,value:r}}}),n[r]=_}}return e}function removeFederation(e){var n=e.getQueryType().getFields();delete n._entities,delete n._service;var r=e.getTypeMap();return delete r._Service,delete r._Entity,delete r._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var n=e.enabled,r=e.schema;this.enabled=!1,this.enabled=n,this.schema=r,this.providesMap=this.createMapOfProvides()}var n=e.prototype;return n.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},n.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},n.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},n.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},n.skipField=function(e){var n=e.fieldNode,r=e.parentType;return!!(this.enabled&&(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(r)&&isFederationObjectType(r))&&this.isExternalAndNotProvided(n,r)},n.isResolveReferenceField=function(e){var n="string"==typeof e.name?e.name:e.name.value;return this.enabled&&n===resolveReferenceFieldName},n.transformParentType=function(e){var n=this,r=e.fieldNode,t=e.parentType,i=e.parentTypeSignature;if(this.enabled&&(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(t)&&isFederationObjectType(t)&&(isTypeExtension(t)||r.name.value===resolveReferenceFieldName)){var a=getDirectivesByName("key",t);if(a.length){var _=["{ __typename: '"+t.name+"' } &"],o=getDirectivesByName("requires",r).map(this.extractKeyOrRequiresFieldSet),u=this.translateFieldSet(lodash__WEBPACK_IMPORTED_MODULE_0__.merge.apply(void 0,[{}].concat(o)),i),l=a.map((function(e){var r=n.extractKeyOrRequiresFieldSet(e);return n.translateFieldSet(r,i)})),c=l.length>1?["(",")"]:["",""],s=c[0],p=c[1];return _.push([s,l.join(" | "),p].join("")),o.length&&_.push("& "+u),_.join(" ")}}return i},n.isExternalAndNotProvided=function(e,n){return this.isExternal(e)&&!this.hasProvides(n,e)},n.isExternal=function(e){return getDirectivesByName("external",e).length>0},n.hasProvides=function(e,n){var r=this.providesMap[(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(e)?e.name:e.name.value];return!(!r||!r.length)&&r.includes(n.name.value)},n.translateFieldSet=function(e,n){return"GraphQLRecursivePick<"+n+", "+JSON.stringify(e)+">"},n.extractKeyOrRequiresFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;return(0,graphql__WEBPACK_IMPORTED_MODULE_2__.Vn)((0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)("{"+n+"}"),{leave:{SelectionSet:function(e){return e.selections.reduce((function(e,n){return e[n.name]=n.selection,e}),{})},Field:function(e){return{name:e.name.value,selection:!e.selectionSet||e.selectionSet}},Document:function(e){return e.definitions.find((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})).selectionSet}}})},n.extractProvidesFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(n))throw new Error("Nested fields in _FieldSet is not supported in the @provides directive");return n.split(/\s+/g)},n.createMapOfProvides=function(){var e=this,n={};return Object.keys(this.schema.getTypeMap()).forEach((function(r){var t=e.schema.getType(r);(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(t)&&Object.values(t.getFields()).forEach((function(r){var t,i=getDirectivesByName("provides",r.astNode).map(e.extractProvidesFieldSet).reduce((function(e,n){return[].concat(e,n)}),[]),a=getBaseType(r.type);n[a.name]||(n[a.name]=[]),(t=n[a.name]).push.apply(t,i)}))})),n},e}();function isFederationObjectType(e){var n=(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(e)?e.astNode||(0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)((0,graphql__WEBPACK_IMPORTED_MODULE_5__.yG)(e)).definitions[0]:e,r=n.name.value,t=n.directives,i=!["Query","Mutation","Subscription"].includes(r),a=!r.startsWith("__"),_=t.some((function(e){return"key"===e.name.value}));return i&&a&&_}function getDirectivesByName(e,n){var r;return(r=(0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(n)?n.astNode:n)&&r.directives?r.directives.filter((function(n){return n.name.value===e})):[]}function isTypeExtension(e){var n;return null===(n=((0,graphql__WEBPACK_IMPORTED_MODULE_1__.lp)(e)?e.astNode||(0,graphql__WEBPACK_IMPORTED_MODULE_4__.Qc)((0,graphql__WEBPACK_IMPORTED_MODULE_5__.yG)(e)).definitions[0]:e).fields)||void 0===n?void 0:n.some((function(e){return getDirectivesByName("external",e).length}))}var DetailedError=function(e){function n(r,t,i){var a;return(a=e.call(this,r)||this).message=r,a.details=t,a.source=i,Object.setPrototypeOf((0,_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.Z)(a),n.prototype),Error.captureStackTrace((0,_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.Z)(a),n),a}return(0,_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__.Z)(n,e),n}((0,_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_8__.Z)(Error));function isDetailedError(e){return e.details}},58170:function(e,n,r){"use strict";function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e){var n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({descriptions:!0,specifiedByUrl:!1,directiveIsRepeatable:!1,schemaDescription:!1,inputValueDeprecation:!1},e),r=n.descriptions?"description":"",a=n.specifiedByUrl?"specifiedByUrl":"",_=n.directiveIsRepeatable?"isRepeatable":"",o=n.schemaDescription?r:"";function u(e){return n.inputValueDeprecation?e:""}return"\n    query IntrospectionQuery {\n      __schema {\n        ".concat(o,"\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ").concat(r,"\n          ").concat(_,"\n          locations\n          args").concat(u("(includeDeprecated: true)")," {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(r,"\n      ").concat(a,"\n      fields(includeDeprecated: true) {\n        name\n        ").concat(r,"\n        args").concat(u("(includeDeprecated: true)")," {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields").concat(u("(includeDeprecated: true)")," {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(r,"\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(r,"\n      type { ...TypeRef }\n      defaultValue\n      ").concat(u("isDeprecated"),"\n      ").concat(u("deprecationReason"),"\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")}r.d(n,{K:function(){return a}})},482:function(e,n,r){"use strict";r.d(n,{U:function(){return l}});var t=r(12210),i=r(44399),a=r(18361),_=r(58170);function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){u(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({specifiedByUrl:!0,directiveIsRepeatable:!0,schemaDescription:!0,inputValueDeprecation:!0},n),l=(0,i.Qc)((0,_.K)(r)),c=(0,a.p0)({schema:e,document:l});return!c.errors&&c.data||(0,t.Z)(0),c.data}}}]);