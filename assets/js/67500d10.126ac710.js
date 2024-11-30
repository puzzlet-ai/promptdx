"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{3718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(4848),r=t(8453);const a={title:"Examples"},o="Examples",i={id:"examples",title:"Examples",description:"Using AgentMark is easy to get started with. Feel free to copy the below examples, try your own inputs, switch the models, etc.",source:"@site/docs/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/agentmark/docs/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/puzzlet-ai/agentmark-docs/edit/main/docs/examples.mdx",tags:[],version:"current",frontMatter:{title:"Examples"},sidebar:"docs",previous:{title:"Model Plugins",permalink:"/agentmark/docs/model-plugins"},next:{title:"Type Safety (Coming Soon)",permalink:"/agentmark/docs/type-safety"}},l={},c=[{value:"Basic",id:"basic",level:2},{value:"Chatbot (w/ ChatHistory Component)",id:"chatbot-w-chathistory-component",level:2},{value:"Tools (w/ Streaming)",id:"tools-w-streaming",level:2},{value:"Object Schema",id:"object-schema",level:2},{value:"Direct Provider Call",id:"direct-provider-call",level:2},{value:"Custom Model",id:"custom-model",level:2},{value:"Chaining",id:"chaining",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"examples",children:"Examples"})}),"\n",(0,s.jsxs)(n.p,{children:["Using AgentMark is easy to get started with. Feel free to copy the below examples, try your own inputs, switch the models, etc.\nIt's recommended to download our ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=puzzlet.agentmark",children:"vscode extension"})," for rapid development."]}),"\n",(0,s.jsx)(n.h2,{id:"basic",children:"Basic"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"index.prompt.mdx"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"---\nname: basic-prompt\nmetadata:\n  model:\n    name: gpt-4o-mini\n    settings:\n      top_p: 1\n      temperature: 0.7\n---\n\n<System>You are an expert math tutor</System>\n<User>What's 2 + 2?</User>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running via SDK:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { runInference, load } from '@puzzlet/agentmark';\n\nconst props = {};\nconst Prompt = await load('./index.prompt.mdx');\nconst result = await runInference(Prompt, props);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"chatbot-w-chathistory-component",children:"Chatbot (w/ ChatHistory Component)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"index.prompt.mdx"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"---\nname: chat\nmetadata:\n  model:\n    name: gpt-4o-mini\n    settings:\n      top_p: 1\n      temperature: 0.7\ntest_settings:\n  props:\n    messageHistory:\n      - role: user\n        message: What's 2 + 2?\n      - role: assistant\n        message: 5\n---\n\nimport ChatHistory from './chat-history.mdx';\n\n<System>You are an expert math tutor</System>\n<ChatHistory history={props.history}>\n<User>That's wrong. What's 2 + 2?</User>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"chat-history.mdx"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<ForEach arr={props.history}>\n  {(item) => (\n    <>\n      <If condition={item.role == 'user'}>\n        <User>{item.message}</User>\n      </If>\n      <ElseIf condition={item.role == 'assistant'}>\n        <Assistant>{item.message}</Assistant>\n      </ElseIf>\n    </>\n  )}\n</ForEach>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running via SDK:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { runInference, load } from \'@puzzlet/agentmark\';\n\nconst props = {\n  history: [\n    {\n      role: "user",\n      message: "What\'s 2 + 2?"\n    },\n    {\n      role: "assistant",\n      message: "5"\n    },\n  ]\n};\nconst Prompt = await load(\'./index.prompt.mdx\');\nconst result = await runInference(Prompt, props);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"tools-w-streaming",children:"Tools (w/ Streaming)"}),"\n",(0,s.jsx)(n.p,{children:"Optionally return a data format which adheres to tools schema."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"index.prompt.mdx"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"---\nname: tools\nmetadata:\n  model:\n    name: gpt-4o-mini\n    settings:\n      temperature: 0.7\n      top_p: 1\n      stream: true\n      tools:\n        weather:\n          description: Fetches the current weather for a specified location.\n          parameters:\n            type: object\n            properties:\n              name:\n                type: string\n                description: location\n---\n\n<System>You are a helpful assistant able to access the weather.</System>\n<User>What is the current weather in Cleveland?</User>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running via SDK:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import Prompt from './index.prompt.mdx';\nimport { runInference, load } from '@puzzlet/agentmark';\n\nconst props = {};\nconst Prompt = await load('./index.prompt.mdx');\nconst result = await runInference(Prompt, props);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"object-schema",children:"Object Schema"}),"\n",(0,s.jsx)(n.p,{children:"Return an object that adheres to a given schema."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"index.prompt.mdx"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"---\nname: schema\nmetadata:\n  model:\n    name: gpt-4o-mini\n    settings:\n      temperature: 0.7\n      top_p: 1\n      schema:\n        type: object\n        properties:\n          names:\n            type: array\n            items:\n              type: string\n            description: names of people\n        required:\n        - names\n---\n\n<System>You are a helpful assistant capable of finding all the names of the people in a given body of text.</System>\n<User>Jessica and Michael decided to host a barbecue at their house, inviting their closest friends, Emily, David, and Sarah. As the evening went on, Jessica shared stories from her recent trip, while Michael grilled burgers, and Emily entertained everyone with her hilarious anecdotes.</User>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running via SDK:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import Prompt from './index.prompt.mdx';\nimport { runInference, load } from '@puzzlet/agentmark';\n\nconst props = {};\nconst Prompt = await load('./index.prompt.mdx');\nconst result = await runInference(Prompt, props);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"direct-provider-call",children:"Direct Provider Call"}),"\n",(0,s.jsxs)(n.p,{children:["Grab the config, and call openai, anthropic, or any other provider directly instead of through ",(0,s.jsx)(n.code,{children:"runInference"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"index.prompt.mdx"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"---\nname: direct-call\nmetadata:\n  model:\n    name: gpt-4o-mini\n    settings:\n      top_p: 1\n      temperature: 0.7\n---\n\n<System>You are an expert math tutor</System>\n<User>What's 2 + 2?</User>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running via SDK:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { deserialize, load } from '@puzzlet/agentmark';\nimport { OpenAI } from 'openai';\n\nconst client = new OpenAI();\n\nconst props = {};\nconst Prompt = await load('./index.prompt.mdx');\nconst openAIConfig = await deserialize(Prompt, props);\nconst result = await client.chat.completions.create(openAIConfig);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"custom-model",children:"Custom Model"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Register your model provider parser w/ "my-custom-model", by following steps outlined in "Supported Provders".'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Invoke config\n",(0,s.jsx)(n.code,{children:"index.prompt.mdx"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"---\nname: custom\nmetadata:\n  model:\n    name: my-custom-model\n    settings:\n      top_p: 1\n      temperature: 0.7\n      custom_settings: 1\n---\n\n<System>You are an expert math tutor</System>\n<User>What's 2 + 2?</User>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running via SDK:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { runInference, load } from '@puzzlet/agentmark';\n\nconst props = {};\nconst Prompt = await load('./index.prompt.mdx');\nconst result = await runInference(Prompt, props);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"chaining",children:"Chaining"}),"\n",(0,s.jsx)(n.p,{children:"Docs Coming soon."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);