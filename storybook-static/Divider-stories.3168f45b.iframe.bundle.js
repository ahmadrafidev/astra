"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[186],{"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cov_u35lfyphl(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"a28d0bcfef70a9d6da2156340ad3611c4f702a3d"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts",statementMap:{0:{start:{line:4,column:4},end:{line:4,column:33}}},fnMap:{0:{name:"cn",decl:{start:{line:3,column:16},end:{line:3,column:18}},loc:{start:{line:3,column:30},end:{line:5,column:1}},line:3}},branchMap:{},s:{0:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts"],sourcesContent:['import { type ClassValue, clsx } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n'],names:["clsx","twMerge","cn","inputs"],mappings:"AAAA,SAA0BA,IAAI,QAAQ,OAAM;AAC5C,SAASC,OAAO,QAAQ,iBAAgB;AAExC,OAAO,SAASC,GAAG,GAAGC,MAAoB;IACxC,OAAOF,QAAQD,KAAKG;AACtB"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a28d0bcfef70a9d6da2156340ad3611c4f702a3d"});var actualCoverage=coverage[path];return cov_u35lfyphl=function(){return actualCoverage},actualCoverage}function cn(...inputs){return cov_u35lfyphl().f[0]++,cov_u35lfyphl().s[0]++,(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}cov_u35lfyphl()},"./stories/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Horizontal:()=>Horizontal,LargeDivider:()=>LargeDivider,Vertical:()=>Vertical,WithCustomColor:()=>WithCustomColor,WithoutLabel:()=>WithoutLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Divider_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs"),utils=__webpack_require__("./lib/utils.ts");function cov_1e6mltoeyp(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Divider/Divider.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"5c4a7eb78bb07d5d127d3e765b7f959e31d96544"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Divider/Divider.tsx",statementMap:{0:{start:{line:5,column:24},end:{line:53,column:2}},1:{start:{line:60,column:34},end:{line:85,column:2}},2:{start:{line:61,column:25},end:{line:61,column:51}},3:{start:{line:62,column:31},end:{line:70,column:21}},4:{start:{line:71,column:4},end:{line:84,column:7}},5:{start:{line:86,column:0},end:{line:86,column:32}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:60,column:51},end:{line:60,column:52}},loc:{start:{line:60,column:157},end:{line:85,column:1}},line:60}},branchMap:{0:{loc:{start:{line:60,column:65},end:{line:60,column:91}},type:"default-arg",locations:[{start:{line:60,column:79},end:{line:60,column:91}}],line:60},1:{loc:{start:{line:60,column:113},end:{line:60,column:137}},type:"default-arg",locations:[{start:{line:60,column:129},end:{line:60,column:137}}],line:60},2:{loc:{start:{line:62,column:31},end:{line:70,column:21}},type:"cond-expr",locations:[{start:{line:62,column:46},end:{line:66,column:21}},{start:{line:66,column:24},end:{line:70,column:21}}],line:62},3:{loc:{start:{line:76,column:19},end:{line:76,column:63}},type:"binary-expr",locations:[{start:{line:76,column:19},end:{line:76,column:24}},{start:{line:76,column:28},end:{line:76,column:40}},{start:{line:76,column:44},end:{line:76,column:63}}],line:76},4:{loc:{start:{line:76,column:65},end:{line:76,column:106}},type:"binary-expr",locations:[{start:{line:76,column:65},end:{line:76,column:70}},{start:{line:76,column:74},end:{line:76,column:87}},{start:{line:76,column:91},end:{line:76,column:106}}],line:76},5:{loc:{start:{line:78,column:28},end:{line:78,column:52}},type:"binary-expr",locations:[{start:{line:78,column:28},end:{line:78,column:39}},{start:{line:78,column:43},end:{line:78,column:52}}],line:78},6:{loc:{start:{line:80,column:18},end:{line:83,column:10}},type:"binary-expr",locations:[{start:{line:80,column:18},end:{line:80,column:23}},{start:{line:80,column:41},end:{line:83,column:10}}],line:80},7:{loc:{start:{line:81,column:86},end:{line:81,column:140}},type:"cond-expr",locations:[{start:{line:81,column:101},end:{line:81,column:111}},{start:{line:81,column:114},end:{line:81,column:140}}],line:81}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0},b:{0:[0],1:[0],2:[0,0],3:[0,0,0],4:[0,0,0],5:[0,0],6:[0,0],7:[0,0]},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Divider/Divider.tsx"],sourcesContent:["import React from 'react';\n\nimport { cva, type VariantProps } from 'class-variance-authority';\nimport { cn } from '@/lib/utils';\n\nconst dividerVariants = cva(\n  'flex shrink-0',\n  {\n    variants: {\n      orientation: {\n        horizontal: 'w-full',\n        vertical: 'h-full',\n      },\n      size: {\n        sm: '',\n        md: '',\n        lg: '',\n      },\n    },\n    compoundVariants: [\n      {\n        orientation: 'horizontal',\n        size: 'sm',\n        class: 'h-px',\n      },\n      {\n        orientation: 'horizontal',\n        size: 'md',\n        class: 'h-0.5',\n      },\n      {\n        orientation: 'horizontal',\n        size: 'lg',\n        class: 'h-1',\n      },\n      {\n        orientation: 'vertical',\n        size: 'sm',\n        class: 'w-px',\n      },\n      {\n        orientation: 'vertical',\n        size: 'md',\n        class: 'w-0.5',\n      },\n      {\n        orientation: 'vertical',\n        size: 'lg',\n        class: 'w-1',\n      },\n    ],\n    defaultVariants: {\n      orientation: 'horizontal',\n      size: 'md',\n    },\n  }\n);\n\n/**\n * Props for the Divider component.\n * @typedef {Object} DividerProps\n * @property {string} [color] - Custom color for the divider.\n * @property {string} [label] - Optional label to display on the divider.\n * @property {'start' | 'center' | 'end'} [labelPosition='center'] - Position of the label along the divider.\n * @property {'horizontal' | 'vertical'} [orientation='horizontal'] - The orientation of the divider.\n * @property {'sm' | 'md' | 'lg'} [size='md'] - The size of the divider.\n */\nexport interface DividerProps\n  extends React.HTMLAttributes<HTMLDivElement>,\n    VariantProps<typeof dividerVariants> {\n  color?: string;\n  label?: string;\n  labelPosition?: 'start' | 'center' | 'end';\n}\n\n/**\n * A flexible Divider component that supports different orientations, sizes, and optional labels.\n *\n * @component\n * @param {DividerProps} props - Props for the Divider component.\n * @returns {JSX.Element} The rendered Divider component.\n */\nconst Divider = React.forwardRef<HTMLDivElement, DividerProps>(\n  ({ className, orientation = 'horizontal', size, color, label, labelPosition = 'center', ...props }, ref) => {\n    const isHorizontal = orientation !== 'vertical';\n    const labelPositionClass = isHorizontal\n      ? {\n          start: 'justify-start',\n          center: 'justify-center',\n          end: 'justify-end',\n        }[labelPosition]\n      : {\n          start: 'items-start',\n          center: 'items-center',\n          end: 'items-end',\n        }[labelPosition];\n\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          dividerVariants({ orientation, size }),\n          color,\n          label && isHorizontal && 'flex items-center',\n          label && !isHorizontal && 'flex flex-col',\n          labelPositionClass,\n          className\n        )}\n        role=\"separator\"\n        aria-orientation={ orientation || undefined }\n        {...props}\n      >\n        {label && (\n          <span className={cn(\n            \"px-2 rounded-lg text-sm text-gray-700 dark:text-gray-100\",\n            isHorizontal ? \"bg-white\" : \"writing-mode-vertical-rl\"\n          )}>\n            {label}\n          </span>\n        )}\n      </div>\n    );\n  }\n);\n\nDivider.displayName = 'Divider';\nexport default Divider;\n"],names:["React","cva","cn","dividerVariants","variants","orientation","horizontal","vertical","size","sm","md","lg","compoundVariants","class","defaultVariants","Divider","forwardRef","className","color","label","labelPosition","props","ref","isHorizontal","labelPositionClass","start","center","end","div","role","aria-orientation","undefined","span","displayName"],mappings:";AAAA,OAAOA,WAAW,QAAQ;AAE1B,SAASC,GAAG,QAA2B,2BAA2B;AAClE,SAASC,EAAE,QAAQ,cAAc;AAEjC,MAAMC,kBAAkBF,IACtB,iBACA;IACEG,UAAU;QACRC,aAAa;YACXC,YAAY;YACZC,UAAU;QACZ;QACAC,MAAM;YACJC,IAAI;YACJC,IAAI;YACJC,IAAI;QACN;IACF;IACAC,kBAAkB;QAChB;YACEP,aAAa;YACbG,MAAM;YACNK,OAAO;QACT;QACA;YACER,aAAa;YACbG,MAAM;YACNK,OAAO;QACT;QACA;YACER,aAAa;YACbG,MAAM;YACNK,OAAO;QACT;QACA;YACER,aAAa;YACbG,MAAM;YACNK,OAAO;QACT;QACA;YACER,aAAa;YACbG,MAAM;YACNK,OAAO;QACT;QACA;YACER,aAAa;YACbG,MAAM;YACNK,OAAO;QACT;KACD;IACDC,iBAAiB;QACfT,aAAa;QACbG,MAAM;IACR;AACF;AAoBF;;;;;;CAMC,GACD,MAAMO,wBAAUf,MAAMgB,UAAU,CAC9B,CAAC,EAAEC,SAAS,EAAEZ,cAAc,YAAY,EAAEG,IAAI,EAAEU,KAAK,EAAEC,KAAK,EAAEC,gBAAgB,QAAQ,EAAE,GAAGC,OAAO,EAAEC;IAClG,MAAMC,eAAelB,gBAAgB;IACrC,MAAMmB,qBAAqBD,eACvB,CAAA;QACEE,OAAO;QACPC,QAAQ;QACRC,KAAK;IACP,CAAA,CAAC,CAACP,cAAc,GAChB,CAAA;QACEK,OAAO;QACPC,QAAQ;QACRC,KAAK;IACP,CAAA,CAAC,CAACP,cAAc;IAEpB,qBACE,KAACQ;QACCN,KAAKA;QACLL,WAAWf,GACTC,gBAAgB;YAAEE;YAAaG;QAAK,IACpCU,OACAC,SAASI,gBAAgB,qBACzBJ,SAAS,CAACI,gBAAgB,iBAC1BC,oBACAP;QAEFY,MAAK;QACLC,oBAAmBzB,eAAe0B;QACjC,GAAGV,KAAK;kBAERF,uBACC,KAACa;YAAKf,WAAWf,GACf,4DACAqB,eAAe,aAAa;sBAE3BJ;;;AAKX;AAGFJ,QAAQkB,WAAW,GAAG;AACtB,eAAelB,QAAQ"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5c4a7eb78bb07d5d127d3e765b7f959e31d96544"});var actualCoverage=coverage[path];return cov_1e6mltoeyp=function(){return actualCoverage},actualCoverage}cov_1e6mltoeyp();const dividerVariants=(cov_1e6mltoeyp().s[0]++,(0,dist.F)("flex shrink-0",{variants:{orientation:{horizontal:"w-full",vertical:"h-full"},size:{sm:"",md:"",lg:""}},compoundVariants:[{orientation:"horizontal",size:"sm",class:"h-px"},{orientation:"horizontal",size:"md",class:"h-0.5"},{orientation:"horizontal",size:"lg",class:"h-1"},{orientation:"vertical",size:"sm",class:"w-px"},{orientation:"vertical",size:"md",class:"w-0.5"},{orientation:"vertical",size:"lg",class:"w-1"}],defaultVariants:{orientation:"horizontal",size:"md"}})),Divider=(cov_1e6mltoeyp().s[1]++,react.forwardRef((({className,orientation=(cov_1e6mltoeyp().b[0][0]++,"horizontal"),size,color,label,labelPosition=(cov_1e6mltoeyp().b[1][0]++,"center"),...props},ref)=>{cov_1e6mltoeyp().f[0]++;const isHorizontal=(cov_1e6mltoeyp().s[2]++,"vertical"!==orientation),labelPositionClass=(cov_1e6mltoeyp().s[3]++,isHorizontal?(cov_1e6mltoeyp().b[2][0]++,{start:"justify-start",center:"justify-center",end:"justify-end"}[labelPosition]):(cov_1e6mltoeyp().b[2][1]++,{start:"items-start",center:"items-center",end:"items-end"}[labelPosition]));return cov_1e6mltoeyp().s[4]++,(0,jsx_runtime.jsx)("div",{ref,className:(0,utils.cn)(dividerVariants({orientation,size}),color,(cov_1e6mltoeyp().b[3][0]++,label&&(cov_1e6mltoeyp().b[3][1]++,isHorizontal)&&(cov_1e6mltoeyp().b[3][2]++,"flex items-center")),(cov_1e6mltoeyp().b[4][0]++,label&&(cov_1e6mltoeyp().b[4][1]++,!isHorizontal)&&(cov_1e6mltoeyp().b[4][2]++,"flex flex-col")),labelPositionClass,className),role:"separator","aria-orientation":(cov_1e6mltoeyp().b[5][0]++,orientation||void cov_1e6mltoeyp().b[5][1]++),...props,children:(cov_1e6mltoeyp().b[6][0]++,label&&(cov_1e6mltoeyp().b[6][1]++,(0,jsx_runtime.jsx)("span",{className:(0,utils.cn)("px-2 rounded-lg text-sm text-gray-700 dark:text-gray-100",isHorizontal?(cov_1e6mltoeyp().b[7][0]++,"bg-white"):(cov_1e6mltoeyp().b[7][1]++,"writing-mode-vertical-rl")),children:label})))})})));cov_1e6mltoeyp().s[5]++,Divider.displayName="Divider";const Divider_Divider=Divider;try{Divider.displayName="Divider",Divider.__docgenInfo={description:"A flexible Divider component that supports different orientations, sizes, and optional labels.",displayName:"Divider",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"center"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:'"horizontal" | "vertical" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"components/Divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}const Divider_stories={title:"Components/Divider",component:Divider_Divider,argTypes:{orientation:{control:{type:"select",options:["horizontal","vertical"]},description:"The orientation of the divider.",table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}}},size:{control:{type:"select",options:["sm","md","lg"]},description:"The size of the divider.",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}}},color:{control:"text",description:"Custom color for the divider.",table:{type:{summary:"string"}}},label:{control:"text",description:"Optional label to display on the divider.",table:{type:{summary:"string"}}},labelPosition:{control:{type:"select",options:["start","center","end"]},description:"Position of the label along the divider.",table:{type:{summary:"start | center | end"},defaultValue:{summary:"center"}}},className:{control:"text",description:"Additional class names for custom styling.",table:{type:{summary:"string"}}}},parameters:{docs:{description:{component:"A flexible Divider component that supports different orientations, sizes, and optional labels."}}}},Template=args=>(0,jsx_runtime.jsx)(Divider_Divider,{...args}),Horizontal=Template.bind({});Horizontal.args={orientation:"horizontal",size:"md",label:"Horizontal Divider",labelPosition:"center"};const Vertical=Template.bind({});Vertical.args={orientation:"vertical",size:"md",label:"Vertical Divider",labelPosition:"center"};const WithCustomColor=Template.bind({});WithCustomColor.args={orientation:"horizontal",size:"md",color:"bg-blue-500",label:"Custom Color Divider",labelPosition:"center"};const WithoutLabel=Template.bind({});WithoutLabel.args={orientation:"horizontal",size:"md"};const LargeDivider=Template.bind({});LargeDivider.args={orientation:"horizontal",size:"lg",label:"Large Divider",labelPosition:"center"};const __namedExportsOrder=["Horizontal","Vertical","WithCustomColor","WithoutLabel","LargeDivider"];Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...Horizontal.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...Vertical.parameters?.docs?.source}}},WithCustomColor.parameters={...WithCustomColor.parameters,docs:{...WithCustomColor.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...WithCustomColor.parameters?.docs?.source}}},WithoutLabel.parameters={...WithoutLabel.parameters,docs:{...WithoutLabel.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...WithoutLabel.parameters?.docs?.source}}},LargeDivider.parameters={...LargeDivider.parameters,docs:{...LargeDivider.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...LargeDivider.parameters?.docs?.source}}}},"./node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);