"use strict";(self.webpackChunkastra_ui=self.webpackChunkastra_ui||[]).push([[7167],{"./stories/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomClassName:()=>CustomClassName,Default:()=>Default,Error:()=>Error,Success:()=>Success,Warning:()=>Warning,WithoutTitle:()=>WithoutTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/.pnpm/next@14.2.5_@babel+core@7.24.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./components/Alert/Alert.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Alert",component:_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__.Fc,argTypes:{type:{control:{type:"radio"},options:["info","success","warning","error"],description:"The type of the alert, determines the styling.",table:{type:{summary:"info | success | warning | error"},defaultValue:{summary:"info"}}},title:{control:{type:"text"},description:"Optional title for the alert.",table:{type:{summary:"string"}}},children:{control:"text",description:"The content of the alert.",table:{type:{summary:"ReactNode"}}},isDismissible:{control:{type:"boolean"},description:"Whether the alert is dismissible.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:{type:"text"},description:"Additional class names for custom styling.",table:{type:{summary:"string"}}}},parameters:{docs:{description:{component:"The Alert component is used to display contextual messages with different types like info, success, warning, and error. It supports optional titles, dismissibility, and custom content."}}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__.Fc,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__.uX,{children:["This is an alert message. You can include ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"formatted text"})," and other elements here."]})}),Default=Template.bind({});Default.args={type:"info",title:"Info Alert",isDismissible:!1};const Success=Template.bind({});Success.args={type:"success",title:"Success Alert",isDismissible:!1};const Warning=Template.bind({});Warning.args={type:"warning",title:"Warning Alert",isDismissible:!0};const Error=Template.bind({});Error.args={type:"error",title:"Error Alert",isDismissible:!0};const WithoutTitle=Template.bind({});WithoutTitle.args={type:"info",isDismissible:!1};const CustomClassName=Template.bind({});CustomClassName.args={type:"success",title:"Custom Styled Alert",isDismissible:!0,className:"border-dashed border-2 border-green-600"};const __namedExportsOrder=["Default","Success","Warning","Error","WithoutTitle","CustomClassName"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Alert {...args}>\n        <AlertContent>\n            This is an alert message. You can include <strong>formatted text</strong> and other elements here.\n        </AlertContent>\n    </Alert>",...Default.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <Alert {...args}>\n        <AlertContent>\n            This is an alert message. You can include <strong>formatted text</strong> and other elements here.\n        </AlertContent>\n    </Alert>",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"args => <Alert {...args}>\n        <AlertContent>\n            This is an alert message. You can include <strong>formatted text</strong> and other elements here.\n        </AlertContent>\n    </Alert>",...Warning.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <Alert {...args}>\n        <AlertContent>\n            This is an alert message. You can include <strong>formatted text</strong> and other elements here.\n        </AlertContent>\n    </Alert>",...Error.parameters?.docs?.source}}},WithoutTitle.parameters={...WithoutTitle.parameters,docs:{...WithoutTitle.parameters?.docs,source:{originalSource:"args => <Alert {...args}>\n        <AlertContent>\n            This is an alert message. You can include <strong>formatted text</strong> and other elements here.\n        </AlertContent>\n    </Alert>",...WithoutTitle.parameters?.docs?.source}}},CustomClassName.parameters={...CustomClassName.parameters,docs:{...CustomClassName.parameters?.docs,source:{originalSource:"args => <Alert {...args}>\n        <AlertContent>\n            This is an alert message. You can include <strong>formatted text</strong> and other elements here.\n        </AlertContent>\n    </Alert>",...CustomClassName.parameters?.docs?.source}}}}}]);