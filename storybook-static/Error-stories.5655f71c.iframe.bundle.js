/*! For license information please see Error-stories.5655f71c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[8167],{"./stories/Error.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthenticationError:()=>AuthenticationError,Default:()=>Default,FilesizeError:()=>FilesizeError,UploadError:()=>UploadError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Error_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),circle_alert=(__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/.pnpm/lucide-react@0.379.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/circle-alert.js")),createLucideIcon=__webpack_require__("./node_modules/.pnpm/lucide-react@0.379.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js");const Wifi=(0,createLucideIcon.A)("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]),FileWarning=(0,createLucideIcon.A)("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Lock=(0,createLucideIcon.A)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Timer=(0,createLucideIcon.A)("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),Clock=(0,createLucideIcon.A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Server=(0,createLucideIcon.A)("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),CreditCard=(0,createLucideIcon.A)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);function cov_2a98w86mq1(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Error/Error.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"593feb6c82c498b70108bc2adf575e0a63921849"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Error/Error.tsx",statementMap:{0:{start:{line:4,column:19},end:{line:29,column:1}},1:{start:{line:36,column:18},end:{line:72,column:1}},2:{start:{line:37,column:4},end:{line:71,column:7}},3:{start:{line:73,column:0},end:{line:73,column:28}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:36,column:18},end:{line:36,column:19}},loc:{start:{line:36,column:89},end:{line:72,column:1}},line:36}},branchMap:{0:{loc:{start:{line:56,column:20},end:{line:61,column:22}},type:"binary-expr",locations:[{start:{line:56,column:20},end:{line:56,column:35}},{start:{line:56,column:53},end:{line:61,column:22}}],line:56}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0,0]},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/components/Error/Error.tsx"],sourcesContent:["import React from 'react';\nimport { \n  AlertCircle, \n  Wifi, \n  FileWarning, \n  RefreshCw,\n  Lock,\n  Timer,\n  Clock,\n  Server,\n  CreditCard \n} from 'lucide-react';\n\n/**\n * Type of errors that the Error component can display.\n * \n * @typedef {'upload' | 'network' | 'filesize' | 'authentication' | 'limiter' | 'timeout' | 'server' | 'payment'} ErrorType\n */\nexport type ErrorType = 'upload' | 'network' | 'filesize' | 'authentication'| 'limiter'| 'timeout'| 'server' | 'payment';\n\n/**\n * Props for the Error component.\n * \n * @typedef {Object} ErrorProps\n * @property {ErrorType} type - The type of error to display.\n * @property {string} title - The title of the error message.\n * @property {string} message - The detailed error message.\n * @property {string} [className] - Additional class names for custom styling.\n * @property {{ label: string; onClick: () => void }} primaryAction - Primary action for the error.\n * @property {{ label: string; onClick: () => void }} [secondaryAction] - Secondary action for the error.\n */\nexport interface ErrorProps {\n  type: ErrorType;\n  title: string;\n  message: string;\n  className?: string;\n  primaryAction: {\n    label: string;\n    onClick: () => void;\n  };\n  secondaryAction?: {\n    label: string;\n    onClick: () => void;\n  };\n}\n\nconst alertIcons: Record<ErrorType, React.ReactNode> = {\n  upload: <AlertCircle className=\"w-9 h-9 text-red-500\" />,\n  network: <Wifi className=\"w-9 h-9 text-red-500\" />,\n  filesize: <FileWarning className=\"w-9 h-9 text-red-500\" />,\n  authentication: <Lock className=\"w-9 h-9 text-red-500\" />,\n  limiter: <Timer className=\"w-9 h-9 text-red-500\" />,\n  timeout: <Clock className=\"w-9 h-9 text-red-500\" />,\n  server: <Server className=\"w-9 h-9 text-red-500\" />,\n  payment: <CreditCard className=\"w-9 h-9 text-red-500\" />,\n};\n\n/**\n * Error component for displaying error messages with actions.\n * \n * @component\n * @param {ErrorProps} props - Props for the Error component.\n * @returns {JSX.Element} The rendered Error component.\n */\nconst Error: React.FC<ErrorProps> = ({\n  type,\n  title,\n  message,\n  className,\n  primaryAction,\n  secondaryAction,\n}) => {\n  return (\n    <div className={`rounded-lg shadow-md w-64 p-4 flex flex-col items-center ${className}`} role=\"alert\">\n      <div className=\"mb-4\">\n        {alertIcons[type]}\n      </div>\n      <h3 className=\"text-lg font-semibold text-gray-900 mb-1 text-center\">{title}</h3>\n      <p className=\"text-sm text-gray-700 text-center mb-4\">{message}</p>\n      <div className=\"flex justify-center space-x-2 w-full\">\n        {secondaryAction && (\n          <button\n            type=\"button\" \n            onClick={secondaryAction.onClick}\n            className=\"px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500\"\n          >\n            {secondaryAction.label}\n          </button>\n        )}\n        <button\n          type=\"button\" \n          onClick={primaryAction.onClick}\n          className=\"px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500\"\n        >\n          {primaryAction.label}\n        </button>\n      </div>\n    </div>\n  );\n};\n\nError.displayName = \"Error\";\nexport default Error;\n"],names:["React","AlertCircle","Wifi","FileWarning","Lock","Timer","Clock","Server","CreditCard","alertIcons","upload","className","network","filesize","authentication","limiter","timeout","server","payment","Error","type","title","message","primaryAction","secondaryAction","div","role","h3","p","button","onClick","label","displayName"],mappings:";AAAA,OAAOA,WAAW,QAAQ;AAC1B,SACEC,WAAW,EACXC,IAAI,EACJC,WAAW,EAEXC,IAAI,EACJC,KAAK,EACLC,KAAK,EACLC,MAAM,EACNC,UAAU,mHACU;AAmCtB,MAAMC,aAAiD;IACrDC,sBAAQ,KAACT;QAAYU,WAAU;;IAC/BC,uBAAS,KAACV;QAAKS,WAAU;;IACzBE,wBAAU,KAACV;QAAYQ,WAAU;;IACjCG,8BAAgB,KAACV;QAAKO,WAAU;;IAChCI,uBAAS,KAACV;QAAMM,WAAU;;IAC1BK,uBAAS,KAACV;QAAMK,WAAU;;IAC1BM,sBAAQ,KAACV;QAAOI,WAAU;;IAC1BO,uBAAS,KAACV;QAAWG,WAAU;;AACjC;AAEA;;;;;;CAMC,GACD,MAAMQ,QAA8B,CAAC,EACnCC,IAAI,EACJC,KAAK,EACLC,OAAO,EACPX,SAAS,EACTY,aAAa,EACbC,eAAe,EAChB;IACC,qBACE,MAACC;QAAId,WAAW,CAAC,yDAAyD,EAAEA,UAAU,CAAC;QAAEe,MAAK;;0BAC5F,KAACD;gBAAId,WAAU;0BACZF,UAAU,CAACW,KAAK;;0BAEnB,KAACO;gBAAGhB,WAAU;0BAAwDU;;0BACtE,KAACO;gBAAEjB,WAAU;0BAA0CW;;0BACvD,MAACG;gBAAId,WAAU;;oBACZa,iCACC,KAACK;wBACCT,MAAK;wBACLU,SAASN,gBAAgBM,OAAO;wBAChCnB,WAAU;kCAETa,gBAAgBO,KAAK;;kCAG1B,KAACF;wBACCT,MAAK;wBACLU,SAASP,cAAcO,OAAO;wBAC9BnB,WAAU;kCAETY,cAAcQ,KAAK;;;;;;AAK9B;AAEAZ,MAAMa,WAAW,GAAG;AACpB,eAAeb,MAAM"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"593feb6c82c498b70108bc2adf575e0a63921849"});var actualCoverage=coverage[path];return cov_2a98w86mq1=function(){return actualCoverage},actualCoverage}cov_2a98w86mq1();const alertIcons=(cov_2a98w86mq1().s[0]++,{upload:(0,jsx_runtime.jsx)(circle_alert.A,{className:"w-9 h-9 text-red-500"}),network:(0,jsx_runtime.jsx)(Wifi,{className:"w-9 h-9 text-red-500"}),filesize:(0,jsx_runtime.jsx)(FileWarning,{className:"w-9 h-9 text-red-500"}),authentication:(0,jsx_runtime.jsx)(Lock,{className:"w-9 h-9 text-red-500"}),limiter:(0,jsx_runtime.jsx)(Timer,{className:"w-9 h-9 text-red-500"}),timeout:(0,jsx_runtime.jsx)(Clock,{className:"w-9 h-9 text-red-500"}),server:(0,jsx_runtime.jsx)(Server,{className:"w-9 h-9 text-red-500"}),payment:(0,jsx_runtime.jsx)(CreditCard,{className:"w-9 h-9 text-red-500"})});cov_2a98w86mq1().s[1]++;const Error=({type,title,message,className,primaryAction,secondaryAction})=>(cov_2a98w86mq1().f[0]++,cov_2a98w86mq1().s[2]++,(0,jsx_runtime.jsxs)("div",{className:`rounded-lg shadow-md w-64 p-4 flex flex-col items-center ${className}`,role:"alert",children:[(0,jsx_runtime.jsx)("div",{className:"mb-4",children:alertIcons[type]}),(0,jsx_runtime.jsx)("h3",{className:"text-lg font-semibold text-gray-900 mb-1 text-center",children:title}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-gray-700 text-center mb-4",children:message}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-center space-x-2 w-full",children:[(cov_2a98w86mq1().b[0][0]++,secondaryAction&&(cov_2a98w86mq1().b[0][1]++,(0,jsx_runtime.jsx)("button",{type:"button",onClick:secondaryAction.onClick,className:"px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:secondaryAction.label}))),(0,jsx_runtime.jsx)("button",{type:"button",onClick:primaryAction.onClick,className:"px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:primaryAction.label})]})]}));cov_2a98w86mq1().s[3]++,Error.displayName="Error";const Error_Error=Error;try{Error.displayName="Error",Error.__docgenInfo={description:"Error component for displaying error messages with actions.",displayName:"Error",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"upload"'},{value:'"network"'},{value:'"filesize"'},{value:'"authentication"'},{value:'"limiter"'},{value:'"timeout"'},{value:'"server"'},{value:'"payment"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!0,type:{name:"{ label: string; onClick: () => void; }"}},secondaryAction:{defaultValue:null,description:"",name:"secondaryAction",required:!1,type:{name:"{ label: string; onClick: () => void; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Error/Error.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"components/Error/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}const Error_stories={title:"Components/Error",component:Error_Error,argTypes:{type:{control:{type:"select",options:["upload","network","filesize","authentication","limiter","timeout","server","payment"]},description:"The type of error to display.",table:{type:{summary:"ErrorType"},defaultValue:{summary:"network"}}},title:{control:"text",description:"The title of the error message.",table:{type:{summary:"string"}}},message:{control:"text",description:"The detailed error message.",table:{type:{summary:"string"}}},className:{control:"text",description:"Additional class names for custom styling.",table:{type:{summary:"string"}}},primaryAction:{control:"object",description:"Primary action for the error.",table:{type:{summary:"{ label: string; onClick: () => void }"}}},secondaryAction:{control:"object",description:"Secondary action for the error.",table:{type:{summary:"{ label: string; onClick: () => void }"}}}},parameters:{docs:{description:{component:"The Error component displays an error message with associated actions, such as retrying or canceling."}}}},Template=args=>(0,jsx_runtime.jsx)(Error_Error,{...args}),Default=Template.bind({});Default.args={type:"network",title:"Network Error",message:"There was a problem connecting to the network. Please check your internet connection and try again.",primaryAction:{label:"Retry",onClick:()=>alert("Retry clicked")},secondaryAction:{label:"Cancel",onClick:()=>alert("Cancel clicked")}};const UploadError=Template.bind({});UploadError.args={type:"upload",title:"Upload Failed",message:"The file could not be uploaded. Please try again.",primaryAction:{label:"Retry",onClick:()=>alert("Retry clicked")},secondaryAction:{label:"Cancel",onClick:()=>alert("Cancel clicked")}};const FilesizeError=Template.bind({});FilesizeError.args={type:"filesize",title:"File Too Large",message:"The file size exceeds the maximum allowed size.",primaryAction:{label:"Select Another File",onClick:()=>alert("Select Another File clicked")}};const AuthenticationError=Template.bind({});AuthenticationError.args={type:"authentication",title:"Authentication Error",message:"Your session has expired. Please log in again.",primaryAction:{label:"Log In",onClick:()=>alert("Log In clicked")}};const __namedExportsOrder=["Default","UploadError","FilesizeError","AuthenticationError"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Error {...args} />",...Default.parameters?.docs?.source}}},UploadError.parameters={...UploadError.parameters,docs:{...UploadError.parameters?.docs,source:{originalSource:"args => <Error {...args} />",...UploadError.parameters?.docs?.source}}},FilesizeError.parameters={...FilesizeError.parameters,docs:{...FilesizeError.parameters?.docs,source:{originalSource:"args => <Error {...args} />",...FilesizeError.parameters?.docs?.source}}},AuthenticationError.parameters={...AuthenticationError.parameters,docs:{...AuthenticationError.parameters?.docs,source:{originalSource:"args => <Error {...args} />",...AuthenticationError.parameters?.docs?.source}}}},"./node_modules/.pnpm/lucide-react@0.379.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/.pnpm/lucide-react@0.379.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/circle-alert.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CircleAlert});const CircleAlert=(0,__webpack_require__("./node_modules/.pnpm/lucide-react@0.379.0_react@18.3.1/node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])}}]);