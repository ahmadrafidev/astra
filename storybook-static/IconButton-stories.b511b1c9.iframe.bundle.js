"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[4844],{"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cov_u35lfyphl(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"a28d0bcfef70a9d6da2156340ad3611c4f702a3d"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts",statementMap:{0:{start:{line:4,column:4},end:{line:4,column:33}}},fnMap:{0:{name:"cn",decl:{start:{line:3,column:16},end:{line:3,column:18}},loc:{start:{line:3,column:30},end:{line:5,column:1}},line:3}},branchMap:{},s:{0:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts"],sourcesContent:['import { type ClassValue, clsx } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n'],names:["clsx","twMerge","cn","inputs"],mappings:"AAAA,SAA0BA,IAAI,QAAQ,OAAM;AAC5C,SAASC,OAAO,QAAQ,iBAAgB;AAExC,OAAO,SAASC,GAAG,GAAGC,MAAoB;IACxC,OAAOF,QAAQD,KAAKG;AACtB"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a28d0bcfef70a9d6da2156340ad3611c4f702a3d"});var actualCoverage=coverage[path];return cov_u35lfyphl=function(){return actualCoverage},actualCoverage}function cn(...inputs){return cov_u35lfyphl().f[0]++,cov_u35lfyphl().s[0]++,(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}cov_u35lfyphl()},"./stories/IconButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LargeSize:()=>LargeSize,OutlinedBorder:()=>OutlinedBorder,OutlinedNoBorder:()=>OutlinedNoBorder,SmallSize:()=>SmallSize,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconButton_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");function CheckCircleIcon({title,titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}const esm_CheckCircleIcon=react.forwardRef(CheckCircleIcon);var utils=__webpack_require__("./lib/utils.ts");function cov_1umaivj4xy(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/components/IconButton/IconButton.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"6e6aec1af9db092ee02d2adaffc36c97130459c2"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/components/IconButton/IconButton.tsx",statementMap:{0:{start:{line:4,column:19},end:{line:4,column:159}},1:{start:{line:5,column:22},end:{line:9,column:1}},2:{start:{line:10,column:19},end:{line:14,column:1}},3:{start:{line:27,column:37},end:{line:42,column:2}},4:{start:{line:28,column:24},end:{line:32,column:5}},5:{start:{line:33,column:4},end:{line:41,column:7}},6:{start:{line:43,column:0},end:{line:43,column:38}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:27,column:48},end:{line:27,column:49}},loc:{start:{line:27,column:150},end:{line:42,column:1}},line:27}},branchMap:{0:{loc:{start:{line:27,column:63},end:{line:27,column:84}},type:"default-arg",locations:[{start:{line:27,column:73},end:{line:27,column:84}}],line:27},1:{loc:{start:{line:27,column:86},end:{line:27,column:97}},type:"default-arg",locations:[{start:{line:27,column:93},end:{line:27,column:97}}],line:27}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0},b:{0:[0],1:[0]},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/components/IconButton/IconButton.tsx"],sourcesContent:["import React, { forwardRef, ElementType } from 'react';\nimport { cn } from '@/lib/utils';\n\nconst baseStyles = \"inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors rounded-full\";\n\nconst variantStyles = {\n  contained: \"text-white\",\n  outlinedBorder: \"border text-blue-500\",\n  outlinedNoBorder: \"text-blue-500\",\n};\n\nconst sizeStyles = {\n  sm: \"p-1\",\n  md: \"p-2\",\n  lg: \"p-3\",\n};\n\nexport interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  icon: ElementType;\n  iconClassName?: string;\n  variant?: 'contained' | 'outlinedBorder' | 'outlinedNoBorder';\n  size?: 'sm' | 'md' | 'lg';\n  color?: string;\n}\n\n/**\n * IconButton component renders a button with an icon.\n * It supports contained, outlined with border, and outlined without border variants and different sizes.\n * Users can specify custom colors.\n *\n * @param {ElementType} icon - The icon component to be rendered inside the button.\n * @param {string} [iconClassName] - Additional class names for the icon.\n * @param {'contained' | 'outlinedBorder' | 'outlinedNoBorder'} [variant=\"contained\"] - The variant of the button, determining its style.\n * @param {'sm' | 'md' | 'lg'} [size=\"md\"] - The size of the button.\n * @param {string} [color] - Custom color for the button.\n * @param {IconButtonProps} props - Additional props for the IconButton component.\n * @returns {JSX.Element} The rendered IconButton component.\n */\nconst IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(\n  ({ icon: Icon, variant = \"contained\", size = \"md\", className, iconClassName, color, ...props }, ref) => {\n\n    const colorStyles = {\n      contained: `bg-${color}-600 hover:bg-${color}-500 focus-visible:ring-${color}-500`,\n      outlinedBorder: `border-${color}-600 hover:bg-${color}-200 dark:hover:bg-${color}-800 focus-visible:ring-${color}-600 text-${color}-600 dark:text-${color}-200`,\n      outlinedNoBorder: `hover:bg-${color}-200 dark:hover:bg-${color}-800 focus-visible:ring-${color}-600 text-${color}-600 dark:text-${color}-200`,\n    };\n\n    return (\n      <button\n        ref={ref}\n        className={cn(\n          baseStyles,\n          variantStyles[variant],\n          sizeStyles[size],\n          colorStyles[variant],\n          className\n        )}\n        {...props}\n      >\n        <Icon className={cn(\"w-6 h-6\", iconClassName)} aria-hidden=\"true\" />\n      </button>\n    );\n  }\n);\n\nIconButton.displayName = \"IconButton\";\nexport default IconButton;\n"],names:["React","forwardRef","cn","baseStyles","variantStyles","contained","outlinedBorder","outlinedNoBorder","sizeStyles","sm","md","lg","IconButton","icon","Icon","variant","size","className","iconClassName","color","props","ref","colorStyles","button","aria-hidden","displayName"],mappings:";AAAA,OAAOA,SAASC,UAAU,QAAqB,QAAQ;AACvD,SAASC,EAAE,QAAQ,cAAc;AAEjC,MAAMC,aAAa;AAEnB,MAAMC,gBAAgB;IACpBC,WAAW;IACXC,gBAAgB;IAChBC,kBAAkB;AACpB;AAEA,MAAMC,aAAa;IACjBC,IAAI;IACJC,IAAI;IACJC,IAAI;AACN;AAUA;;;;;;;;;;;;CAYC,GACD,MAAMC,2BAAaX,WACjB,CAAC,EAAEY,MAAMC,IAAI,EAAEC,UAAU,WAAW,EAAEC,OAAO,IAAI,EAAEC,SAAS,EAAEC,aAAa,EAAEC,KAAK,EAAE,GAAGC,OAAO,EAAEC;IAE9F,MAAMC,cAAc;QAClBjB,WAAW,CAAC,GAAG,EAAEc,MAAM,cAAc,EAAEA,MAAM,wBAAwB,EAAEA,MAAM,IAAI,CAAC;QAClFb,gBAAgB,CAAC,OAAO,EAAEa,MAAM,cAAc,EAAEA,MAAM,mBAAmB,EAAEA,MAAM,wBAAwB,EAAEA,MAAM,UAAU,EAAEA,MAAM,eAAe,EAAEA,MAAM,IAAI,CAAC;QAC/JZ,kBAAkB,CAAC,SAAS,EAAEY,MAAM,mBAAmB,EAAEA,MAAM,wBAAwB,EAAEA,MAAM,UAAU,EAAEA,MAAM,eAAe,EAAEA,MAAM,IAAI,CAAC;IAC/I;IAEA,qBACE,KAACI;QACCF,KAAKA;QACLJ,WAAWf,GACTC,YACAC,aAAa,CAACW,QAAQ,EACtBP,UAAU,CAACQ,KAAK,EAChBM,WAAW,CAACP,QAAQ,EACpBE;QAED,GAAGG,KAAK;kBAET,cAAA,KAACN;YAAKG,WAAWf,GAAG,WAAWgB;YAAgBM,eAAY;;;AAGjE;AAGFZ,WAAWa,WAAW,GAAG;AACzB,eAAeb,WAAW"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6e6aec1af9db092ee02d2adaffc36c97130459c2"});var actualCoverage=coverage[path];return cov_1umaivj4xy=function(){return actualCoverage},actualCoverage}cov_1umaivj4xy();const baseStyles=(cov_1umaivj4xy().s[0]++,"inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors rounded-full"),variantStyles=(cov_1umaivj4xy().s[1]++,{contained:"text-white",outlinedBorder:"border text-blue-500",outlinedNoBorder:"text-blue-500"}),sizeStyles=(cov_1umaivj4xy().s[2]++,{sm:"p-1",md:"p-2",lg:"p-3"}),IconButton=(cov_1umaivj4xy().s[3]++,(0,react.forwardRef)((({icon:Icon,variant=(cov_1umaivj4xy().b[0][0]++,"contained"),size=(cov_1umaivj4xy().b[1][0]++,"md"),className,iconClassName,color,...props},ref)=>{cov_1umaivj4xy().f[0]++;const colorStyles=(cov_1umaivj4xy().s[4]++,{contained:`bg-${color}-600 hover:bg-${color}-500 focus-visible:ring-${color}-500`,outlinedBorder:`border-${color}-600 hover:bg-${color}-200 dark:hover:bg-${color}-800 focus-visible:ring-${color}-600 text-${color}-600 dark:text-${color}-200`,outlinedNoBorder:`hover:bg-${color}-200 dark:hover:bg-${color}-800 focus-visible:ring-${color}-600 text-${color}-600 dark:text-${color}-200`});return cov_1umaivj4xy().s[5]++,(0,jsx_runtime.jsx)("button",{ref,className:(0,utils.cn)(baseStyles,variantStyles[variant],sizeStyles[size],colorStyles[variant],className),...props,children:(0,jsx_runtime.jsx)(Icon,{className:(0,utils.cn)("w-6 h-6",iconClassName),"aria-hidden":"true"})})})));cov_1umaivj4xy().s[6]++,IconButton.displayName="IconButton";const IconButton_IconButton=IconButton;try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"IconButton component renders a button with an icon.\nIt supports contained, outlined with border, and outlined without border variants and different sizes.\nUsers can specify custom colors.",displayName:"IconButton",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ElementType"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlinedBorder"'},{value:'"outlinedNoBorder"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}const IconButton_stories={title:"Components/IconButton",component:IconButton_IconButton,argTypes:{icon:{control:"select",description:"The icon component to be rendered inside the button.",table:{type:{summary:"ElementType"}},options:["CheckCircleIcon","XIcon","BellIcon"],mapping:{CheckCircleIcon:esm_CheckCircleIcon,XIcon:props=>(0,jsx_runtime.jsx)("svg",{...props,children:(0,jsx_runtime.jsx)("path",{d:"M..."})}),BellIcon:props=>(0,jsx_runtime.jsx)("svg",{...props,children:(0,jsx_runtime.jsx)("path",{d:"M..."})})}},iconClassName:{control:"text",description:"Additional class names for the icon.",table:{type:{summary:"string"}}},variant:{control:{type:"select",options:["contained","outlinedBorder","outlinedNoBorder"]},description:"The variant of the button, determining its style.",table:{type:{summary:"'contained' | 'outlinedBorder' | 'outlinedNoBorder'"},defaultValue:{summary:"'contained'"}}},size:{control:{type:"select",options:["sm","md","lg"]},description:"The size of the button.",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},color:{control:"text",description:"Custom color for the button.",table:{type:{summary:"string"}}},className:{control:"text",description:"Additional class names for custom styling.",table:{type:{summary:"string"}}}}},Template=args=>(0,jsx_runtime.jsx)(IconButton_IconButton,{...args}),Default=Template.bind({});Default.args={icon:esm_CheckCircleIcon,variant:"contained",size:"md",color:"blue"};const OutlinedBorder=Template.bind({});OutlinedBorder.args={icon:esm_CheckCircleIcon,variant:"outlinedBorder",size:"md",color:"green"};const OutlinedNoBorder=Template.bind({});OutlinedNoBorder.args={icon:esm_CheckCircleIcon,variant:"outlinedNoBorder",size:"md",color:"red"};const SmallSize=Template.bind({});SmallSize.args={icon:esm_CheckCircleIcon,variant:"contained",size:"sm",color:"yellow"};const LargeSize=Template.bind({});LargeSize.args={icon:esm_CheckCircleIcon,variant:"contained",size:"lg",color:"purple"};const __namedExportsOrder=["Default","OutlinedBorder","OutlinedNoBorder","SmallSize","LargeSize"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <IconButton {...args} />",...Default.parameters?.docs?.source}}},OutlinedBorder.parameters={...OutlinedBorder.parameters,docs:{...OutlinedBorder.parameters?.docs,source:{originalSource:"args => <IconButton {...args} />",...OutlinedBorder.parameters?.docs?.source}}},OutlinedNoBorder.parameters={...OutlinedNoBorder.parameters,docs:{...OutlinedNoBorder.parameters?.docs,source:{originalSource:"args => <IconButton {...args} />",...OutlinedNoBorder.parameters?.docs?.source}}},SmallSize.parameters={...SmallSize.parameters,docs:{...SmallSize.parameters?.docs,source:{originalSource:"args => <IconButton {...args} />",...SmallSize.parameters?.docs?.source}}},LargeSize.parameters={...LargeSize.parameters,docs:{...LargeSize.parameters?.docs,source:{originalSource:"args => <IconButton {...args} />",...LargeSize.parameters?.docs?.source}}}}}]);