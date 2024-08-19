"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[682],{"./stories/SearchBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomClassName:()=>CustomClassName,CustomIcon:()=>CustomIcon,Default:()=>Default,LargeSize:()=>LargeSize,SmallSize:()=>SmallSize,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchBar_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js");function MagnifyingGlassIcon({title,titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const esm_MagnifyingGlassIcon=react.forwardRef(MagnifyingGlassIcon);function cov_1mkm6zwb8p(){var path="/Users/ahmadrafidev/Developer/side-projects/web/astra/components/SearchBar/SearchBar.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"1ad580b5f2a1897a59f52f15448d0f1d055c8684"===coverage[path].hash||(coverage[path]={path:"/Users/ahmadrafidev/Developer/side-projects/web/astra/components/SearchBar/SearchBar.tsx",statementMap:{0:{start:{line:11,column:21},end:{line:17,column:1}},1:{start:{line:13,column:4},end:{line:16,column:6}},2:{start:{line:14,column:8},end:{line:14,column:32}},3:{start:{line:15,column:8},end:{line:15,column:57}},4:{start:{line:15,column:35},end:{line:15,column:48}},5:{start:{line:18,column:20},end:{line:22,column:1}},6:{start:{line:29,column:22},end:{line:58,column:1}},7:{start:{line:33,column:30},end:{line:33,column:42}},8:{start:{line:34,column:28},end:{line:34,column:60}},9:{start:{line:35,column:30},end:{line:39,column:5}},10:{start:{line:36,column:22},end:{line:36,column:36}},11:{start:{line:37,column:8},end:{line:37,column:24}},12:{start:{line:38,column:8},end:{line:38,column:31}},13:{start:{line:40,column:4},end:{line:57,column:7}},14:{start:{line:59,column:0},end:{line:59,column:36}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:21},end:{line:11,column:22}},loc:{start:{line:11,column:36},end:{line:17,column:1}},line:11},1:{name:"(anonymous_1)",decl:{start:{line:13,column:11},end:{line:13,column:12}},loc:{start:{line:13,column:22},end:{line:16,column:5}},line:13},2:{name:"(anonymous_2)",decl:{start:{line:15,column:31},end:{line:15,column:32}},loc:{start:{line:15,column:35},end:{line:15,column:48}},line:15},3:{name:"(anonymous_3)",decl:{start:{line:29,column:22},end:{line:29,column:23}},loc:{start:{line:32,column:88},end:{line:58,column:1}},line:32},4:{name:"(anonymous_4)",decl:{start:{line:35,column:30},end:{line:35,column:31}},loc:{start:{line:35,column:35},end:{line:39,column:5}},line:35}},branchMap:{0:{loc:{start:{line:29,column:46},end:{line:32,column:2}},type:"default-arg",locations:[{start:{line:29,column:67},end:{line:32,column:2}}],line:29},1:{loc:{start:{line:32,column:4},end:{line:32,column:34}},type:"default-arg",locations:[{start:{line:32,column:18},end:{line:32,column:34}}],line:32},2:{loc:{start:{line:32,column:36},end:{line:32,column:54}},type:"default-arg",locations:[{start:{line:32,column:51},end:{line:32,column:54}}],line:32},3:{loc:{start:{line:32,column:68},end:{line:32,column:83}},type:"default-arg",locations:[{start:{line:32,column:75},end:{line:32,column:83}}],line:32}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0],1:[0],2:[0],3:[0]},inputSourceMap:{version:3,sources:["/Users/ahmadrafidev/Developer/side-projects/web/astra/components/SearchBar/SearchBar.tsx"],sourcesContent:["'use client'\n\nimport React, { useState } from 'react';\nimport { MagnifyingGlassIcon } from '@heroicons/react/24/outline';\n\n/**\n * Props for the SearchBar component.\n * \n * @typedef {Object} SearchBarProps\n * @property {(query: string) => void} onSearch - Callback function when the search query changes.\n * @property {string} [className] - Additional class names for custom styling.\n * @property {React.ReactNode} [icon] - Icon to display inside the search bar.\n * @property {string} [placeholder='Search AstraUI'] - Placeholder text for the search input.\n * @property {number} [debounceTime=300] - Time in milliseconds to debounce the search input.\n * @property {React.InputHTMLAttributes<HTMLInputElement>} [inputProps] - Additional props for the input element.\n * @property {'small' | 'medium' | 'large'} [size='medium'] - Size of the search bar.\n */\nexport interface SearchBarProps {\n    onSearch: (query: string) => void;\n    className?: string;\n    icon?: React.ReactNode;\n    placeholder?: string;\n    debounceTime?: number;\n    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;\n    size?: 'small' | 'medium' | 'large';\n}\n\n/**\n * Debounce function to delay the execution of the given function.\n * \n * @param {Function} func - The function to debounce.\n * @param {number} delay - The delay in milliseconds.\n * @returns {Function} The debounced function.\n */\nconst debounce = (func: Function, delay: number) => {\n    let timeoutId: ReturnType<typeof setTimeout>;\n    return (...args: any[]) => {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => func(...args), delay);\n    };\n};\n\nconst sizeClasses = {\n    small: 'p-2 pl-10 text-sm',\n    medium: 'p-3 pl-12 text-base',\n    large: 'p-4 pl-13 text-lg',\n};\n\n/**\n * SearchBar component for entering search queries.\n * \n * @component\n * @param {SearchBarProps} props - Props for the SearchBar component.\n * @returns {JSX.Element} The rendered SearchBar component.\n */\nconst SearchBar: React.FC<SearchBarProps> = ({\n    onSearch,\n    className,\n    icon = <MagnifyingGlassIcon className=\"h-5 w-5 text-gray-400\" aria-hidden=\"true\" />,\n    placeholder = 'Search AstraUI',\n    debounceTime = 300,\n    inputProps,\n    size = \"medium\"\n}) => {\n    const [query, setQuery] = useState('');\n    const debouncedSearch = debounce(onSearch, debounceTime);\n\n    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n        const value = e.target.value;\n        setQuery(value);\n        debouncedSearch(value);\n    };\n\n    return (\n        <div className={`relative ${className}`}>\n            <div className=\"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none\">\n                {icon}\n            </div>\n            <input\n                type=\"text\"\n                value={query}\n                onChange={handleInputChange}\n                placeholder={placeholder}\n                aria-label={placeholder}\n                className={`${sizeClasses[size]} border dark:border-none p-2 pl-10 leading-6 rounded-lg w-full text-sm md:text-base text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-gray-700 `}\n                {...inputProps}\n            />\n        </div>\n    );\n};\n\nSearchBar.displayName = \"SearchBar\";\nexport default SearchBar;\n"],names:["React","useState","MagnifyingGlassIcon","debounce","func","delay","timeoutId","args","clearTimeout","setTimeout","sizeClasses","small","medium","large","SearchBar","onSearch","className","icon","aria-hidden","placeholder","debounceTime","inputProps","size","query","setQuery","debouncedSearch","handleInputChange","e","value","target","div","input","type","onChange","aria-label","displayName"],mappings:"AAAA;;AAEA,OAAOA,SAASC,QAAQ,QAAQ,QAAQ;AACxC,SAASC,mBAAmB,sFAAsC;AAwBlE;;;;;;CAMC,GACD,MAAMC,WAAW,CAACC,MAAgBC;IAC9B,IAAIC;IACJ,OAAO,CAAC,GAAGC;QACPC,aAAaF;QACbA,YAAYG,WAAW,IAAML,QAAQG,OAAOF;IAChD;AACJ;AAEA,MAAMK,cAAc;IAChBC,OAAO;IACPC,QAAQ;IACRC,OAAO;AACX;AAEA;;;;;;CAMC,GACD,MAAMC,YAAsC,CAAC,EACzCC,QAAQ,EACRC,SAAS,EACTC,qBAAO,KAACf;IAAoBc,WAAU;IAAwBE,eAAY;EAAS,EACnFC,cAAc,gBAAgB,EAC9BC,eAAe,GAAG,EAClBC,UAAU,EACVC,OAAO,QAAQ,EAClB;IACG,MAAM,CAACC,OAAOC,SAAS,GAAGvB,SAAS;IACnC,MAAMwB,kBAAkBtB,SAASY,UAAUK;IAE3C,MAAMM,oBAAoB,CAACC;QACvB,MAAMC,QAAQD,EAAEE,MAAM,CAACD,KAAK;QAC5BJ,SAASI;QACTH,gBAAgBG;IACpB;IAEA,qBACI,MAACE;QAAId,WAAW,CAAC,SAAS,EAAEA,UAAU,CAAC;;0BACnC,KAACc;gBAAId,WAAU;0BACVC;;0BAEL,KAACc;gBACGC,MAAK;gBACLJ,OAAOL;gBACPU,UAAUP;gBACVP,aAAaA;gBACbe,cAAYf;gBACZH,WAAW,CAAC,EAAEN,WAAW,CAACY,KAAK,CAAC,iPAAiP,CAAC;gBACjR,GAAGD,UAAU;;;;AAI9B;AAEAP,UAAUqB,WAAW,GAAG;AACxB,eAAerB,UAAU"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1ad580b5f2a1897a59f52f15448d0f1d055c8684"});var actualCoverage=coverage[path];return cov_1mkm6zwb8p=function(){return actualCoverage},actualCoverage}cov_1mkm6zwb8p(),cov_1mkm6zwb8p().s[0]++;const sizeClasses=(cov_1mkm6zwb8p().s[5]++,{small:"p-2 pl-10 text-sm",medium:"p-3 pl-12 text-base",large:"p-4 pl-13 text-lg"});cov_1mkm6zwb8p().s[6]++;const SearchBar=({onSearch,className,icon=(cov_1mkm6zwb8p().b[0][0]++,(0,jsx_runtime.jsx)(esm_MagnifyingGlassIcon,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})),placeholder=(cov_1mkm6zwb8p().b[1][0]++,"Search AstraUI"),debounceTime=(cov_1mkm6zwb8p().b[2][0]++,300),inputProps,size=(cov_1mkm6zwb8p().b[3][0]++,"medium")})=>{cov_1mkm6zwb8p().f[3]++;const[query,setQuery]=(cov_1mkm6zwb8p().s[7]++,(0,react.useState)("")),debouncedSearch=(cov_1mkm6zwb8p().s[8]++,((func,delay)=>{let timeoutId;return cov_1mkm6zwb8p().f[0]++,cov_1mkm6zwb8p().s[1]++,(...args)=>{cov_1mkm6zwb8p().f[1]++,cov_1mkm6zwb8p().s[2]++,clearTimeout(timeoutId),cov_1mkm6zwb8p().s[3]++,timeoutId=setTimeout((()=>(cov_1mkm6zwb8p().f[2]++,cov_1mkm6zwb8p().s[4]++,func(...args))),delay)}})(onSearch,debounceTime));cov_1mkm6zwb8p().s[9]++;return cov_1mkm6zwb8p().s[13]++,(0,jsx_runtime.jsxs)("div",{className:`relative ${className}`,children:[(0,jsx_runtime.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:icon}),(0,jsx_runtime.jsx)("input",{type:"text",value:query,onChange:e=>{cov_1mkm6zwb8p().f[4]++;const value=(cov_1mkm6zwb8p().s[10]++,e.target.value);cov_1mkm6zwb8p().s[11]++,setQuery(value),cov_1mkm6zwb8p().s[12]++,debouncedSearch(value)},placeholder,"aria-label":placeholder,className:`${sizeClasses[size]} border dark:border-none p-2 pl-10 leading-6 rounded-lg w-full text-sm md:text-base text-gray-800 dark:text-gray-300 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-gray-700 `,...inputProps})]})};cov_1mkm6zwb8p().s[14]++,SearchBar.displayName="SearchBar";const SearchBar_SearchBar=SearchBar;try{SearchBar.displayName="SearchBar",SearchBar.__docgenInfo={description:"SearchBar component for entering search queries.",displayName:"SearchBar",props:{onSearch:{defaultValue:null,description:"",name:"onSearch",required:!0,type:{name:"(query: string) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:{value:'<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />'},description:"",name:"icon",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:{value:"Search AstraUI"},description:"",name:"placeholder",required:!1,type:{name:"string"}},debounceTime:{defaultValue:{value:"300"},description:"",name:"debounceTime",required:!1,type:{name:"number"}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!1,type:{name:"InputHTMLAttributes<HTMLInputElement>"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/SearchBar/SearchBar.tsx#SearchBar"]={docgenInfo:SearchBar.__docgenInfo,name:"SearchBar",path:"components/SearchBar/SearchBar.tsx#SearchBar"})}catch(__react_docgen_typescript_loader_error){}const SearchBar_stories={title:"Components/SearchBar",component:SearchBar_SearchBar,argTypes:{onSearch:{action:"searched",description:"Callback function when the search query changes."},className:{control:"text",description:"Additional class names for custom styling.",table:{type:{summary:"string"}}},icon:{control:"object",description:"Icon to display inside the search bar.",table:{type:{summary:"React.ReactNode"},defaultValue:{summary:"<MagnifyingGlassIcon />"}}},placeholder:{control:"text",description:"Placeholder text for the search input.",table:{type:{summary:"string"},defaultValue:{summary:"'Search AstraUI'"}}},debounceTime:{control:{type:"number",min:0},description:"Time in milliseconds to debounce the search input.",table:{type:{summary:"number"},defaultValue:{summary:"300"}}},inputProps:{control:"object",description:"Additional props for the input element.",table:{type:{summary:"React.InputHTMLAttributes<HTMLInputElement>"}}},size:{control:{type:"select",options:["small","medium","large"]},description:"Size of the search bar.",table:{type:{summary:"'small' | 'medium' | 'large'"},defaultValue:{summary:"'medium'"}}}}},Template=args=>(0,jsx_runtime.jsx)(SearchBar_SearchBar,{...args}),Default=Template.bind({});Default.args={placeholder:"Search AstraUI",debounceTime:300,size:"medium"};const SmallSize=Template.bind({});SmallSize.args={placeholder:"Search...",debounceTime:300,size:"small"};const LargeSize=Template.bind({});LargeSize.args={placeholder:"Search AstraUI",debounceTime:300,size:"large"};const CustomIcon=Template.bind({});CustomIcon.args={placeholder:"Search AstraUI",debounceTime:300,size:"medium",icon:(0,jsx_runtime.jsx)(esm_MagnifyingGlassIcon,{className:"h-6 w-6 text-blue-500","aria-hidden":"true"})};const CustomClassName=Template.bind({});CustomClassName.args={placeholder:"Search...",debounceTime:300,size:"medium",className:"custom-search-bar"};const __namedExportsOrder=["Default","SmallSize","LargeSize","CustomIcon","CustomClassName"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SearchBar {...args} />",...Default.parameters?.docs?.source}}},SmallSize.parameters={...SmallSize.parameters,docs:{...SmallSize.parameters?.docs,source:{originalSource:"args => <SearchBar {...args} />",...SmallSize.parameters?.docs?.source}}},LargeSize.parameters={...LargeSize.parameters,docs:{...LargeSize.parameters?.docs,source:{originalSource:"args => <SearchBar {...args} />",...LargeSize.parameters?.docs?.source}}},CustomIcon.parameters={...CustomIcon.parameters,docs:{...CustomIcon.parameters?.docs,source:{originalSource:"args => <SearchBar {...args} />",...CustomIcon.parameters?.docs?.source}}},CustomClassName.parameters={...CustomClassName.parameters,docs:{...CustomClassName.parameters?.docs,source:{originalSource:"args => <SearchBar {...args} />",...CustomClassName.parameters?.docs?.source}}}}}]);