(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[2381],{35318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98150:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(29603),i=r(50120),o=(r(27378),r(35318)),a=["components"],l={id:"prettier",title:"Prettier & Linters"},s={unversionedId:"integrations/prettier",id:"integrations/prettier",isDocsHomePage:!1,title:"Prettier & Linters",description:"The codegen supports lifecycle hooks, and you can use those for integration with Prettier or other linters, to apply your custom code-style and formatting rules. Before adding hooks consider the alternative of having codegen ignored in your linting. Codegen files are not edited manually and formatting them slows down your codegen considerably. On a big project difference can be measured in several seconds for every run.",source:"@site/docs/integrations/prettier.md",sourceDirName:"integrations",slug:"/integrations/prettier",permalink:"/docs/integrations/prettier",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/integrations/prettier.md",version:"current",frontMatter:{id:"prettier",title:"Prettier & Linters"},sidebar:"sidebar",previous:{title:"GatsbyJS",permalink:"/docs/integrations/gatsby"},next:{title:"Apollo Federation",permalink:"/docs/integrations/federation"}},c=[{value:"Prettier",id:"prettier",children:[]},{value:"TSLint",id:"tslint",children:[]},{value:"ESLint",id:"eslint",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The codegen supports lifecycle hooks, and you can use those for integration with Prettier or other linters, to apply your custom code-style and formatting rules. Before adding hooks consider the alternative of having codegen ignored in your linting. Codegen files are not edited manually and formatting them slows down your codegen considerably. On a big project difference can be measured in several seconds for every run."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/lifecycle-hooks"},"You can read the complete documentation of lifecycle hooks here")),(0,o.kt)("h2",{id:"prettier"},"Prettier"),(0,o.kt)("p",null,"You can run it per each file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"hooks:\n  afterOneFileWrite:\n    - prettier --write\n")),(0,o.kt)("p",null,"Or, for all files together:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"hooks:\n  afterAllFileWrite:\n    - prettier --write\n")),(0,o.kt)("p",null,"Prefer this method if you're using near-operation-file preset as this has better performance when writing many files."),(0,o.kt)("h2",{id:"tslint"},"TSLint"),(0,o.kt)("p",null,"You can run it per each file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"hooks:\n  afterOneFileWrite:\n    - tslint --fix\n")),(0,o.kt)("p",null,"Or, for all files together:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"hooks:\n  afterAllFileWrite:\n    - tslint --fix\n")),(0,o.kt)("h2",{id:"eslint"},"ESLint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"hooks:\n  afterOneFileWrite:\n    - eslint --fix\n")),(0,o.kt)("p",null,"Or, for all files together:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"hooks:\n  afterAllFileWrite:\n    - eslint --fix\n")))}p.isMDXComponent=!0}}]);