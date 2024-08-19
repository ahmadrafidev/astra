"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[45],{"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@2.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cov_u35lfyphl(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"a28d0bcfef70a9d6da2156340ad3611c4f702a3d"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts",statementMap:{0:{start:{line:4,column:4},end:{line:4,column:33}}},fnMap:{0:{name:"cn",decl:{start:{line:3,column:16},end:{line:3,column:18}},loc:{start:{line:3,column:30},end:{line:5,column:1}},line:3}},branchMap:{},s:{0:0},f:{0:0},b:{},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/lib/utils.ts"],sourcesContent:['import { type ClassValue, clsx } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n'],names:["clsx","twMerge","cn","inputs"],mappings:"AAAA,SAA0BA,IAAI,QAAQ,OAAM;AAC5C,SAASC,OAAO,QAAQ,iBAAgB;AAExC,OAAO,SAASC,GAAG,GAAGC,MAAoB;IACxC,OAAOF,QAAQD,KAAKG;AACtB"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a28d0bcfef70a9d6da2156340ad3611c4f702a3d"});var actualCoverage=coverage[path];return cov_u35lfyphl=function(){return actualCoverage},actualCoverage}function cn(...inputs){return cov_u35lfyphl().f[0]++,cov_u35lfyphl().s[0]++,(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}cov_u35lfyphl()},"./stories/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithError:()=>WithError,WithHelperText:()=>WithHelperText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),utils=__webpack_require__("./lib/utils.ts");function cov_1it0usrchp(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/components/TextArea/TextArea.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"70968a2fe29e888bd7b5dbb98ae2a329c60c0f60"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/components/TextArea/TextArea.tsx",statementMap:{0:{start:{line:4,column:31},end:{line:34,column:2}},1:{start:{line:5,column:23},end:{line:5,column:82}},2:{start:{line:6,column:4},end:{line:33,column:7}},3:{start:{line:35,column:0},end:{line:35,column:34}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:42},end:{line:4,column:43}},loc:{start:{line:4,column:104},end:{line:34,column:1}},line:4}},branchMap:{0:{loc:{start:{line:5,column:23},end:{line:5,column:82}},type:"binary-expr",locations:[{start:{line:5,column:23},end:{line:5,column:25}},{start:{line:5,column:29},end:{line:5,column:82}}],line:5},1:{loc:{start:{line:9,column:12},end:{line:13,column:14}},type:"binary-expr",locations:[{start:{line:9,column:12},end:{line:9,column:17}},{start:{line:9,column:35},end:{line:13,column:14}}],line:9},2:{loc:{start:{line:17,column:134},end:{line:17,column:178}},type:"cond-expr",locations:[{start:{line:17,column:142},end:{line:17,column:158}},{start:{line:17,column:161},end:{line:17,column:178}}],line:17},3:{loc:{start:{line:22,column:12},end:{line:26,column:14}},type:"binary-expr",locations:[{start:{line:22,column:12},end:{line:22,column:17}},{start:{line:22,column:35},end:{line:26,column:14}}],line:22},4:{loc:{start:{line:27,column:12},end:{line:31,column:14}},type:"binary-expr",locations:[{start:{line:27,column:12},end:{line:27,column:22}},{start:{line:27,column:40},end:{line:31,column:14}}],line:27}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0]},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/components/TextArea/TextArea.tsx"],sourcesContent:['import React, { forwardRef } from \'react\';\nimport { cn } from "@/lib/utils";\n\n/**\n * TextArea component with label, error message, and helper text.\n * \n * @component\n * @param {Object} props - Props for TextArea component\n * @param {string} [props.label] - Label for the textarea\n * @param {string} [props.error] - Error message to display\n * @param {string} [props.helperText] - Helper text to display\n * @param {string} [props.className] - Additional class names for styling\n * @param {string} [props.id] - ID for the textarea\n * @param {React.Ref<HTMLTextAreaElement>} ref - Ref for the textarea\n * @returns {JSX.Element} The rendered TextArea component\n */\nexport interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {\n  label?: string;\n  error?: string;\n  helperText?: string;\n}\n\nconst TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(\n  ({ label, error, helperText, className, id, ...props }, ref) => {\n    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;\n\n    return (\n      <div className="w-full">\n        {label && (\n          <label htmlFor={textareaId} className="block text-base font-medium text-gray-700 dark:text-gray-200 mb-1">\n            {label}\n          </label>\n        )}\n        <textarea\n          ref={ref}\n          id={textareaId}\n          className={cn(\n            "w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",\n            error ? "border-red-500" : "border-gray-300",\n            className\n          )}\n          aria-invalid={!!error}\n          aria-describedby={`${textareaId}-error ${textareaId}-helper`}\n          {...props}\n        />\n        {error && (\n          <p id={`${textareaId}-error`} className="mt-1 text-xs text-red-500">\n            {error}\n          </p>\n        )}\n        {helperText && (\n          <p id={`${textareaId}-helper`} className="mt-1 text-xs text-gray-600 dark:text-gray-300">\n            {helperText}\n          </p>\n        )}\n      </div>\n    );\n  }\n);\n\nTextArea.displayName = "TextArea";\nexport default TextArea;\n'],names:["React","forwardRef","cn","TextArea","label","error","helperText","className","id","props","ref","textareaId","Math","random","toString","substr","div","htmlFor","textarea","aria-invalid","aria-describedby","p","displayName"],mappings:";AAAA,OAAOA,SAASC,UAAU,QAAQ,QAAQ;AAC1C,SAASC,EAAE,QAAQ,cAAc;AAqBjC,MAAMC,yBAAWF,WACf,CAAC,EAAEG,KAAK,EAAEC,KAAK,EAAEC,UAAU,EAAEC,SAAS,EAAEC,EAAE,EAAE,GAAGC,OAAO,EAAEC;IACtD,MAAMC,aAAaH,MAAM,CAAC,SAAS,EAAEI,KAAKC,MAAM,GAAGC,QAAQ,CAAC,IAAIC,MAAM,CAAC,GAAG,GAAG,CAAC;IAE9E,qBACE,MAACC;QAAIT,WAAU;;YACZH,uBACC,KAACA;gBAAMa,SAASN;gBAAYJ,WAAU;0BACnCH;;0BAGL,KAACc;gBACCR,KAAKA;gBACLF,IAAIG;gBACJJ,WAAWL,GACT,wGACAG,QAAQ,mBAAmB,mBAC3BE;gBAEFY,gBAAc,CAAC,CAACd;gBAChBe,oBAAkB,CAAC,EAAET,WAAW,OAAO,EAAEA,WAAW,OAAO,CAAC;gBAC3D,GAAGF,KAAK;;YAEVJ,uBACC,KAACgB;gBAAEb,IAAI,CAAC,EAAEG,WAAW,MAAM,CAAC;gBAAEJ,WAAU;0BACrCF;;YAGJC,4BACC,KAACe;gBAAEb,IAAI,CAAC,EAAEG,WAAW,OAAO,CAAC;gBAAEJ,WAAU;0BACtCD;;;;AAKX;AAGFH,SAASmB,WAAW,GAAG;AACvB,eAAenB,SAAS"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"70968a2fe29e888bd7b5dbb98ae2a329c60c0f60"});var actualCoverage=coverage[path];return cov_1it0usrchp=function(){return actualCoverage},actualCoverage}cov_1it0usrchp();const TextArea=(cov_1it0usrchp().s[0]++,(0,react.forwardRef)((({label,error,helperText,className,id,...props},ref)=>{cov_1it0usrchp().f[0]++;const textareaId=(cov_1it0usrchp().s[1]++,cov_1it0usrchp().b[0][0]++,id||(cov_1it0usrchp().b[0][1]++,`textarea-${Math.random().toString(36).substr(2,9)}`));return cov_1it0usrchp().s[2]++,(0,jsx_runtime.jsxs)("div",{className:"w-full",children:[(cov_1it0usrchp().b[1][0]++,label&&(cov_1it0usrchp().b[1][1]++,(0,jsx_runtime.jsx)("label",{htmlFor:textareaId,className:"block text-base font-medium text-gray-700 dark:text-gray-200 mb-1",children:label}))),(0,jsx_runtime.jsx)("textarea",{ref,id:textareaId,className:(0,utils.cn)("w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",error?(cov_1it0usrchp().b[2][0]++,"border-red-500"):(cov_1it0usrchp().b[2][1]++,"border-gray-300"),className),"aria-invalid":!!error,"aria-describedby":`${textareaId}-error ${textareaId}-helper`,...props}),(cov_1it0usrchp().b[3][0]++,error&&(cov_1it0usrchp().b[3][1]++,(0,jsx_runtime.jsx)("p",{id:`${textareaId}-error`,className:"mt-1 text-xs text-red-500",children:error}))),(cov_1it0usrchp().b[4][0]++,helperText&&(cov_1it0usrchp().b[4][1]++,(0,jsx_runtime.jsx)("p",{id:`${textareaId}-helper`,className:"mt-1 text-xs text-gray-600 dark:text-gray-300",children:helperText})))]})})));cov_1it0usrchp().s[3]++,TextArea.displayName="TextArea";const TextArea_TextArea=TextArea;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"components/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}const TextArea_stories={title:"Components/TextArea",component:TextArea_TextArea,argTypes:{label:{control:"text",description:"Label for the textarea",table:{type:{summary:"string"}}},error:{control:"text",description:"Error message to display",table:{type:{summary:"string"}}},helperText:{control:"text",description:"Helper text to display",table:{type:{summary:"string"}}},className:{control:"text",description:"Additional class names for styling",table:{type:{summary:"string"}}},id:{control:"text",description:"ID for the textarea",table:{type:{summary:"string"}}},rows:{control:{type:"number"},description:"Number of rows for the textarea",table:{type:{summary:"number"}}},disabled:{control:{type:"boolean"},description:"Disables the textarea",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"Placeholder text for the textarea",table:{type:{summary:"string"}}}}},Template=args=>(0,jsx_runtime.jsx)(TextArea_TextArea,{...args}),Default=Template.bind({});Default.args={label:"Description",placeholder:"Enter your description here...",rows:4};const WithError=Template.bind({});WithError.args={label:"Description",placeholder:"Enter your description here...",error:"This field is required",rows:4};const WithHelperText=Template.bind({});WithHelperText.args={label:"Description",placeholder:"Enter your description here...",helperText:"Please provide a detailed description",rows:4};const Disabled=Template.bind({});Disabled.args={label:"Description",placeholder:"This field is disabled",disabled:!0,rows:4};const __namedExportsOrder=["Default","WithError","WithHelperText","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TextArea {...args} />",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"args => <TextArea {...args} />",...WithError.parameters?.docs?.source}}},WithHelperText.parameters={...WithHelperText.parameters,docs:{...WithHelperText.parameters?.docs,source:{originalSource:"args => <TextArea {...args} />",...WithHelperText.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <TextArea {...args} />",...Disabled.parameters?.docs?.source}}}}}]);