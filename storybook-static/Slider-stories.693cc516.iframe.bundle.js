"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[3876],{"./stories/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomRange:()=>CustomRange,Default:()=>Default,SmallSteps:()=>SmallSteps,WithCustomClass:()=>WithCustomClass,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Slider_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");function cov_29deofdu3r(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Slider/Slider.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"74a889e58503b5ff59a51d52942cf116685527a2"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Slider/Slider.tsx",statementMap:{0:{start:{line:9,column:19},end:{line:27,column:1}},1:{start:{line:10,column:4},end:{line:26,column:7}},2:{start:{line:28,column:0},end:{line:28,column:30}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:9,column:19},end:{line:9,column:20}},loc:{start:{line:9,column:152},end:{line:27,column:1}},line:9}},branchMap:{0:{loc:{start:{line:9,column:39},end:{line:9,column:47}},type:"default-arg",locations:[{start:{line:9,column:46},end:{line:9,column:47}}],line:9},1:{loc:{start:{line:9,column:59},end:{line:9,column:73}},type:"default-arg",locations:[{start:{line:9,column:71},end:{line:9,column:73}}],line:9}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0],1:[0]},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Slider/Slider.tsx"],sourcesContent:["import React from 'react';\n\n/**\n * Props for the Slider component.\n * \n * @typedef {Object} SliderProps\n * @property {number} value - The current value of the slider.\n * @property {number} min - The minimum value of the slider.\n * @property {number} max - The maximum value of the slider.\n * @property {number} [step=1] - The step value for the slider.\n * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange - Callback when the slider value changes.\n * @property {string} [className] - Additional class names for custom styling.\n * @property {string} [id] - The id for the slider input.\n * @property {string} ['aria-label'] - The aria-label for accessibility.\n * @property {string} ['aria-labelledby'] - The aria-labelledby for accessibility.\n */\nexport interface SliderProps {\n  value: number;\n  min: number;\n  max: number;\n  step?: number;\n  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;\n  className?: string;\n  id?: string;\n  'aria-label'?: string;\n  'aria-labelledby'?: string;\n}\n\n/**\n * Slider component for selecting a value from a range.\n * \n * @component\n * @param {SliderProps} props - Props for the Slider component.\n * @returns {JSX.Element} The rendered Slider component.\n */\nconst Slider: React.FC<SliderProps> = ({\n  value,\n  min,\n  max,\n  step = 1,\n  onChange,\n  className = '',\n  id,\n  'aria-label': ariaLabel,\n  'aria-labelledby': ariaLabelledby,\n  ...props\n}) => {\n  return (\n    <input\n      type=\"range\"\n      value={value}\n      min={min}\n      max={max}\n      step={step}\n      onChange={onChange}\n      className={`slider ${className}`}\n      id={id}\n      aria-valuenow={value}\n      aria-valuemin={min}\n      aria-valuemax={max}\n      aria-label={ariaLabel}\n      aria-labelledby={ariaLabelledby}\n      role=\"slider\"\n      {...props}\n    />\n  );\n};\n\nSlider.displayName = \"Slider\";\nexport default Slider;\n"],names:["React","Slider","value","min","max","step","onChange","className","id","ariaLabel","ariaLabelledby","props","input","type","aria-valuenow","aria-valuemin","aria-valuemax","aria-label","aria-labelledby","role","displayName"],mappings:";AAAA,OAAOA,WAAW,QAAQ;AA4B1B;;;;;;CAMC,GACD,MAAMC,SAAgC,CAAC,EACrCC,KAAK,EACLC,GAAG,EACHC,GAAG,EACHC,OAAO,CAAC,EACRC,QAAQ,EACRC,YAAY,EAAE,EACdC,EAAE,EACF,cAAcC,SAAS,EACvB,mBAAmBC,cAAc,EACjC,GAAGC,OACJ;IACC,qBACE,KAACC;QACCC,MAAK;QACLX,OAAOA;QACPC,KAAKA;QACLC,KAAKA;QACLC,MAAMA;QACNC,UAAUA;QACVC,WAAW,CAAC,OAAO,EAAEA,UAAU,CAAC;QAChCC,IAAIA;QACJM,iBAAeZ;QACfa,iBAAeZ;QACfa,iBAAeZ;QACfa,cAAYR;QACZS,mBAAiBR;QACjBS,MAAK;QACJ,GAAGR,KAAK;;AAGf;AAEAV,OAAOmB,WAAW,GAAG;AACrB,eAAenB,OAAO"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"74a889e58503b5ff59a51d52942cf116685527a2"});var actualCoverage=coverage[path];return cov_29deofdu3r=function(){return actualCoverage},actualCoverage}cov_29deofdu3r(),cov_29deofdu3r().s[0]++;const Slider=({value,min,max,step=(cov_29deofdu3r().b[0][0]++,1),onChange,className=(cov_29deofdu3r().b[1][0]++,""),id,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,...props})=>(cov_29deofdu3r().f[0]++,cov_29deofdu3r().s[1]++,(0,jsx_runtime.jsx)("input",{type:"range",value,min,max,step,onChange,className:`slider ${className}`,id,"aria-valuenow":value,"aria-valuemin":min,"aria-valuemax":max,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,role:"slider",...props}));cov_29deofdu3r().s[2]++,Slider.displayName="Slider";const Slider_Slider=Slider;try{Slider.displayName="Slider",Slider.__docgenInfo={description:"Slider component for selecting a value from a range.",displayName:"Slider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Slider/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"components/Slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}const Slider_stories={title:"Components/Slider",component:Slider_Slider,argTypes:{value:{control:{type:"number",min:0},description:"The current value of the slider.",table:{type:{summary:"number"}}},min:{control:{type:"number",min:0},description:"The minimum value of the slider.",table:{type:{summary:"number"}}},max:{control:{type:"number",min:0},description:"The maximum value of the slider.",table:{type:{summary:"number"}}},step:{control:{type:"number",min:1},description:"The step value for the slider.",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},onChange:{action:"changed",description:"Callback when the slider value changes.",table:{type:{summary:"(e: React.ChangeEvent<HTMLInputElement>) => void"}}},className:{control:"text",description:"Additional class names for custom styling.",table:{type:{summary:"string"}}},id:{control:"text",description:"The id for the slider input.",table:{type:{summary:"string"}}},"aria-label":{control:"text",description:"The aria-label for accessibility.",table:{type:{summary:"string"}}},"aria-labelledby":{control:"text",description:"The aria-labelledby for accessibility.",table:{type:{summary:"string"}}}}},Template=args=>(0,jsx_runtime.jsx)(Slider_Slider,{...args}),Default=Template.bind({});Default.args={value:50,min:0,max:100,step:1,id:"default-slider","aria-label":"Slider"};const CustomRange=Template.bind({});CustomRange.args={value:25,min:10,max:50,step:5,id:"custom-range-slider","aria-label":"Custom Range Slider"};const WithCustomClass=Template.bind({});WithCustomClass.args={value:75,min:0,max:100,step:1,className:"custom-slider",id:"custom-class-slider","aria-label":"Custom Class Slider"};const SmallSteps=Template.bind({});SmallSteps.args={value:10,min:0,max:100,step:.1,id:"small-steps-slider","aria-label":"Small Steps Slider"};const __namedExportsOrder=["Default","CustomRange","WithCustomClass","SmallSteps"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Slider {...args} />",...Default.parameters?.docs?.source}}},CustomRange.parameters={...CustomRange.parameters,docs:{...CustomRange.parameters?.docs,source:{originalSource:"args => <Slider {...args} />",...CustomRange.parameters?.docs?.source}}},WithCustomClass.parameters={...WithCustomClass.parameters,docs:{...WithCustomClass.parameters?.docs,source:{originalSource:"args => <Slider {...args} />",...WithCustomClass.parameters?.docs?.source}}},SmallSteps.parameters={...SmallSteps.parameters,docs:{...SmallSteps.parameters?.docs,source:{originalSource:"args => <Slider {...args} />",...SmallSteps.parameters?.docs?.source}}}}}]);