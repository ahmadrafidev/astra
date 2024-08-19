"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[3562],{"./stories/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSpeed:()=>CustomSpeed,CustomThickness:()=>CustomThickness,Default:()=>Default,LargeSpinner:()=>LargeSpinner,SmallSpinner:()=>SmallSpinner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Spinner_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");function cov_v8vrws0uk(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Spinner/Spinner.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"926f124d0c277e5ec156e5afa28eb7eafdba7b76"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Spinner/Spinner.tsx",statementMap:{0:{start:{line:9,column:20},end:{line:37,column:1}},1:{start:{line:10,column:20},end:{line:14,column:5}},2:{start:{line:15,column:21},end:{line:19,column:5}},3:{start:{line:20,column:24},end:{line:20,column:71}},4:{start:{line:21,column:25},end:{line:21,column:40}},5:{start:{line:22,column:4},end:{line:36,column:7}},6:{start:{line:38,column:0},end:{line:38,column:32}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:20},end:{line:9,column:21}},loc:{start:{line:9,column:127},end:{line:37,column:1}},line:9}},branchMap:{0:{loc:{start:{line:9,column:23},end:{line:9,column:34}},type:"default-arg",locations:[{start:{line:9,column:30},end:{line:9,column:34}}],line:9},1:{loc:{start:{line:9,column:43},end:{line:9,column:56}},type:"default-arg",locations:[{start:{line:9,column:55},end:{line:9,column:56}}],line:9},2:{loc:{start:{line:9,column:58},end:{line:9,column:74}},type:"default-arg",locations:[{start:{line:9,column:66},end:{line:9,column:74}}],line:9},3:{loc:{start:{line:9,column:101},end:{line:9,column:122}},type:"default-arg",locations:[{start:{line:9,column:113},end:{line:9,column:122}}],line:9},4:{loc:{start:{line:20,column:24},end:{line:20,column:71}},type:"cond-expr",locations:[{start:{line:20,column:51},end:{line:20,column:55}},{start:{line:20,column:58},end:{line:20,column:71}}],line:20}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0,0]},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Spinner/Spinner.tsx"],sourcesContent:["import React from 'react';\n\n/**\n * Props for the Spinner component.\n * \n * @typedef {Object} SpinnerProps\n * @property {'sm' | 'md' | 'lg' | number} [size='md'] - The size of the spinner.\n * @property {string} [color] - The color of the spinner.\n * @property {number} [thickness=4] - The thickness of the spinner border.\n * @property {'slow' | 'normal' | 'fast'} [speed='normal'] - The speed of the spinner animation.\n * @property {string} [className] - Additional class names for custom styling.\n * @property {string} ['aria-label'] - ARIA label for accessibility.\n */\nexport interface SpinnerProps {\n  size?: 'sm' | 'md' | 'lg' | number;\n  color?: string;\n  thickness?: number;\n  speed?: 'slow' | 'normal' | 'fast';\n  className?: string;\n  'aria-label'?: string;\n}\n\n/**\n * Spinner component for displaying a loading spinner.\n * \n * @component\n * @param {SpinnerProps} props - Props for the Spinner component.\n * @returns {JSX.Element} The rendered Spinner component.\n */\nconst Spinner: React.FC<SpinnerProps> = ({\n  size = 'md',\n  color,\n  thickness = 4,\n  speed = 'normal',\n  className,\n  'aria-label': ariaLabel = 'Spinner',\n}) => {\n  const sizeMap = {\n    sm: 16,\n    md: 24,\n    lg: 32,\n  };\n\n  const speedMap = {\n    slow: 'animate-spin-slow',\n    normal: 'animate-spin',\n    fast: 'animate-spin-fast',\n  };\n\n  const spinnerSize = typeof size === 'number' ? size : sizeMap[size];\n  const spinnerSpeed = speedMap[speed];\n\n  return (\n    <div\n      className={`inline-block rounded-full ${spinnerSpeed} ${color} ${className}`}\n      style={{\n        width: spinnerSize,\n        height: spinnerSize,\n        borderWidth: thickness,\n        borderTopColor: 'transparent',\n      }}\n      role=\"status\"\n      aria-label={ariaLabel}\n    >\n      <span className=\"sr-only\">{ariaLabel}</span>\n    </div>\n  );\n};\n\nSpinner.displayName = \"Spinner\";\nexport default Spinner;\n"],names:["React","Spinner","size","color","thickness","speed","className","ariaLabel","sizeMap","sm","md","lg","speedMap","slow","normal","fast","spinnerSize","spinnerSpeed","div","style","width","height","borderWidth","borderTopColor","role","aria-label","span","displayName"],mappings:";AAAA,OAAOA,WAAW,QAAQ;AAsB1B;;;;;;CAMC,GACD,MAAMC,UAAkC,CAAC,EACvCC,OAAO,IAAI,EACXC,KAAK,EACLC,YAAY,CAAC,EACbC,QAAQ,QAAQ,EAChBC,SAAS,EACT,cAAcC,YAAY,SAAS,EACpC;IACC,MAAMC,UAAU;QACdC,IAAI;QACJC,IAAI;QACJC,IAAI;IACN;IAEA,MAAMC,WAAW;QACfC,MAAM;QACNC,QAAQ;QACRC,MAAM;IACR;IAEA,MAAMC,cAAc,OAAOd,SAAS,WAAWA,OAAOM,OAAO,CAACN,KAAK;IACnE,MAAMe,eAAeL,QAAQ,CAACP,MAAM;IAEpC,qBACE,KAACa;QACCZ,WAAW,CAAC,0BAA0B,EAAEW,aAAa,CAAC,EAAEd,MAAM,CAAC,EAAEG,UAAU,CAAC;QAC5Ea,OAAO;YACLC,OAAOJ;YACPK,QAAQL;YACRM,aAAalB;YACbmB,gBAAgB;QAClB;QACAC,MAAK;QACLC,cAAYlB;kBAEZ,cAAA,KAACmB;YAAKpB,WAAU;sBAAWC;;;AAGjC;AAEAN,QAAQ0B,WAAW,GAAG;AACtB,eAAe1B,QAAQ"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"926f124d0c277e5ec156e5afa28eb7eafdba7b76"});var actualCoverage=coverage[path];return cov_v8vrws0uk=function(){return actualCoverage},actualCoverage}cov_v8vrws0uk(),cov_v8vrws0uk().s[0]++;const Spinner=({size=(cov_v8vrws0uk().b[0][0]++,"md"),color,thickness=(cov_v8vrws0uk().b[1][0]++,4),speed=(cov_v8vrws0uk().b[2][0]++,"normal"),className,"aria-label":ariaLabel=(cov_v8vrws0uk().b[3][0]++,"Spinner")})=>{cov_v8vrws0uk().f[0]++;const sizeMap=(cov_v8vrws0uk().s[1]++,{sm:16,md:24,lg:32}),speedMap=(cov_v8vrws0uk().s[2]++,{slow:"animate-spin-slow",normal:"animate-spin",fast:"animate-spin-fast"}),spinnerSize=(cov_v8vrws0uk().s[3]++,"number"==typeof size?(cov_v8vrws0uk().b[4][0]++,size):(cov_v8vrws0uk().b[4][1]++,sizeMap[size])),spinnerSpeed=(cov_v8vrws0uk().s[4]++,speedMap[speed]);return cov_v8vrws0uk().s[5]++,(0,jsx_runtime.jsx)("div",{className:`inline-block rounded-full ${spinnerSpeed} ${color} ${className}`,style:{width:spinnerSize,height:spinnerSize,borderWidth:thickness,borderTopColor:"transparent"},role:"status","aria-label":ariaLabel,children:(0,jsx_runtime.jsx)("span",{className:"sr-only",children:ariaLabel})})};cov_v8vrws0uk().s[6]++,Spinner.displayName="Spinner";const Spinner_Spinner=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Spinner component for displaying a loading spinner.",displayName:"Spinner",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'number | "sm" | "md" | "lg"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},thickness:{defaultValue:{value:"4"},description:"",name:"thickness",required:!1,type:{name:"number"}},speed:{defaultValue:{value:"normal"},description:"",name:"speed",required:!1,type:{name:"enum",value:[{value:'"slow"'},{value:'"normal"'},{value:'"fast"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"components/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}const Spinner_stories={title:"Components/Spinner",component:Spinner_Spinner,argTypes:{size:{control:{type:"select",options:["sm","md","lg",16,24,32]},description:"The size of the spinner.",table:{type:{summary:"string | number"},defaultValue:{summary:"'md'"}}},color:{control:"color",description:"The color of the spinner.",table:{type:{summary:"string"}}},thickness:{control:{type:"number",min:1},description:"The thickness of the spinner border.",table:{type:{summary:"number"},defaultValue:{summary:"4"}}},speed:{control:{type:"select",options:["slow","normal","fast"]},description:"The speed of the spinner animation.",table:{type:{summary:"'slow' | 'normal' | 'fast'"},defaultValue:{summary:"'normal'"}}},className:{control:"text",description:"Additional class names for custom styling.",table:{type:{summary:"string"}}},"aria-label":{control:"text",description:"ARIA label for accessibility.",table:{type:{summary:"string"},defaultValue:{summary:"'Spinner'"}}}}},Template=args=>(0,jsx_runtime.jsx)(Spinner_Spinner,{...args}),Default=Template.bind({});Default.args={size:"md",color:"text-blue-500",thickness:4,speed:"normal","aria-label":"Spinner"};const LargeSpinner=Template.bind({});LargeSpinner.args={size:"lg",color:"text-red-500",thickness:4,speed:"normal","aria-label":"Large Spinner"};const SmallSpinner=Template.bind({});SmallSpinner.args={size:"sm",color:"text-green-500",thickness:2,speed:"fast","aria-label":"Small Spinner"};const CustomThickness=Template.bind({});CustomThickness.args={size:"md",color:"text-purple-500",thickness:6,speed:"slow","aria-label":"Spinner with Custom Thickness"};const CustomSpeed=Template.bind({});CustomSpeed.args={size:"md",color:"text-yellow-500",thickness:4,speed:"fast","aria-label":"Fast Spinner"};const __namedExportsOrder=["Default","LargeSpinner","SmallSpinner","CustomThickness","CustomSpeed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...Default.parameters?.docs?.source}}},LargeSpinner.parameters={...LargeSpinner.parameters,docs:{...LargeSpinner.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...LargeSpinner.parameters?.docs?.source}}},SmallSpinner.parameters={...SmallSpinner.parameters,docs:{...SmallSpinner.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...SmallSpinner.parameters?.docs?.source}}},CustomThickness.parameters={...CustomThickness.parameters,docs:{...CustomThickness.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...CustomThickness.parameters?.docs?.source}}},CustomSpeed.parameters={...CustomSpeed.parameters,docs:{...CustomSpeed.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...CustomSpeed.parameters?.docs?.source}}}}}]);