"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[503],{5335:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=r(4848),i=r(8453);const s={title:"API"},d="API",l={id:"api",title:"API",description:"AgentMark supports 3 basic methods for interacting with prompts: runInference, deserialize, and serialize.",source:"@site/docs/api.mdx",sourceDirName:".",slug:"/api",permalink:"/agentmark/docs/api",draft:!1,unlisted:!1,editUrl:"https://github.com/puzzlet-ai/agentmark-docs/edit/main/docs/api.mdx",tags:[],version:"current",frontMatter:{title:"API"},sidebar:"docs",previous:{title:"Syntax",permalink:"/agentmark/docs/syntax"},next:{title:"Model Plugins",permalink:"/agentmark/docs/model-plugins"}},o={},a=[{value:"runInference",id:"runinference",level:2},{value:"usage",id:"usage",level:3},{value:"input",id:"input",level:3},{value:"output",id:"output",level:3},{value:"example:",id:"example",level:3},{value:"deserialize",id:"deserialize",level:2},{value:"usage",id:"usage-1",level:3},{value:"input",id:"input-1",level:3},{value:"output",id:"output-1",level:3},{value:"example",id:"example-1",level:3},{value:"serialize",id:"serialize",level:2},{value:"usage",id:"usage-2",level:3},{value:"input",id:"input-2",level:3},{value:"output",id:"output-2",level:3},{value:"example",id:"example-2",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"api",children:"API"})}),"\n",(0,t.jsxs)(n.p,{children:["AgentMark supports 3 basic methods for interacting with prompts: ",(0,t.jsx)(n.code,{children:"runInference"}),", ",(0,t.jsx)(n.code,{children:"deserialize"}),", and ",(0,t.jsx)(n.code,{children:"serialize"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"runinference",children:"runInference"}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { runInference, load } from '@puzzlet/agentmark';\n...\nconst prompt = await load('./example.prompt.mdx');\nconst result = await runInference(prompt, props)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run inference will take a prompt config, call the model provider's API, and return the result in AgentMark format."}),"\n",(0,t.jsx)(n.h3,{id:"input",children:"input"}),"\n",(0,t.jsxs)(n.p,{children:["A valid AgentMark file. See ",(0,t.jsx)(n.a,{href:"/agentmark/docs/syntax",children:"syntax"})," for more."]}),"\n",(0,t.jsx)(n.h3,{id:"output",children:"output"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"AgentMarkOutput Properties"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Optional/Required"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"result"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"Contains the primary output of the prompt, which can be either text or an object."}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\u251c\u2500 ",(0,t.jsx)(n.code,{children:"text"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The generated text result."}),(0,t.jsx)(n.td,{children:"Optional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\u2514\u2500 ",(0,t.jsx)(n.code,{children:"object"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Record<string, any>"})}),(0,t.jsx)(n.td,{children:"The generated object result."}),(0,t.jsx)(n.td,{children:"Optional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tools"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Array<{ name: string; input: Record<string, any>; output?: Record<string, any>; }>"})}),(0,t.jsxs)(n.td,{children:["An array detailing the tools invoked during the prompt execution. Each tool includes:  - ",(0,t.jsx)(n.code,{children:"name"}),": The tool's name.  - ",(0,t.jsx)(n.code,{children:"input"}),": The input parameters provided to the tool.  - ",(0,t.jsx)(n.code,{children:"output"})," (optional): The tool's output."]}),(0,t.jsx)(n.td,{children:"Optional"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"usage"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"Provides token usage statistics for the prompt execution."}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\u251c\u2500 ",(0,t.jsx)(n.code,{children:"promptTokens"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"The number of tokens used in the prompt."}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\u251c\u2500 ",(0,t.jsx)(n.code,{children:"completionTokens"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"The number of tokens generated in the completion."}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\u2514\u2500 ",(0,t.jsx)(n.code,{children:"totalTokens"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"The total number of tokens consumed (sum of prompt and completion tokens)."}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"finishReason"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:'"stop" | "length" | "content-filter" | "tool-calls" | "error" | "other" | "unknown"'})}),(0,t.jsxs)(n.td,{children:["Indicates the reason why the prompt generation was terminated. Possible values include:  - ",(0,t.jsx)(n.code,{children:'"stop"'}),": The generation was successfully completed.  - ",(0,t.jsx)(n.code,{children:'"length"'}),": The generation stopped due to reaching the maximum token length.  - ",(0,t.jsx)(n.code,{children:'"content-filter"'}),": The content was filtered due to policy restrictions.  - ",(0,t.jsx)(n.code,{children:'"tool-calls"'}),": The generation involved tool calls.  - ",(0,t.jsx)(n.code,{children:'"error"'}),": An error occurred during generation.  - ",(0,t.jsx)(n.code,{children:'"other"'}),": Terminated for reasons not specified above.  - ",(0,t.jsx)(n.code,{children:'"unknown"'}),": The termination reason is unknown."]}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example:"}),"\n",(0,t.jsx)(n.p,{children:"example.prompt.mdx:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"---\nname: my-prompt\nmetadata:\n  model:\n    name: gpt-4o-mini\n---\n\n<User>\nSay: {props.greeting}\n</User>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { runInference, load } from '@puzzlet/agentmark';\n...\nconst props = { greeting: 'Hello' };\nconst prompt = await load('./example.prompt.mdx');\nawait runInference(myPrompt, props);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Result:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"Hello\n"})}),"\n",(0,t.jsx)(n.h2,{id:"deserialize",children:"deserialize"}),"\n",(0,t.jsx)(n.p,{children:"Deserialize takes a prompt in AgentMark format, and turns it into the configuration needed to call a model provider."}),"\n",(0,t.jsx)(n.h3,{id:"usage-1",children:"usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { deserialize } from '@puzzlet/agentmark';\n...\nawait deserialize(prompt, props)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"input-1",children:"input"}),"\n",(0,t.jsxs)(n.p,{children:["A valid AgentMark file. See ",(0,t.jsx)(n.a,{href:"/agentmark/docs/syntax",children:"syntax"})," for more."]}),"\n",(0,t.jsx)(n.h3,{id:"output-1",children:"output"}),"\n",(0,t.jsx)(n.p,{children:"A valid consumer (OpenAI, Anthropic, etc.) format for running inference w/ the given config."}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"example"}),"\n",(0,t.jsx)(n.p,{children:"my-prompt.mdx:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"---\nname: my-prompt\nmetadata:\n  model:\n    name: gpt-4o-mini\n---\n\n<User>\nSay: {props.greeting}\n</User>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const props = { greeting: 'Hello' };\nawait deserialize(myPrompt, props);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Result:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'{\n  "model": "gpt-4o-mini",\n  "messages": [\n    {\n      "content": "Say: Hello",\n      "role": "user",\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"serialize",children:"serialize"}),"\n",(0,t.jsx)(n.p,{children:"Serialize allows you to take an existing configuration for a Prompt, and serialize it into a AgentMark file."}),"\n",(0,t.jsx)(n.h3,{id:"usage-2",children:"usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { serialize } from '@puzzlet/agentmark';\n...\nserialize(config, modelName, promptName)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"input-2",children:"input"}),"\n",(0,t.jsx)(n.p,{children:"A valid consumer (OpenAI, Anthropic, etc.) format for running inference w/ the given config."}),"\n",(0,t.jsx)(n.h3,{id:"output-2",children:"output"}),"\n",(0,t.jsxs)(n.p,{children:["A valid AgentMark file. See ",(0,t.jsx)(n.a,{href:"/agentmark/docs/syntax",children:"syntax"})," for more."]}),"\n",(0,t.jsx)(n.h3,{id:"example-2",children:"example"}),"\n",(0,t.jsx)(n.p,{children:"Input Config:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "model": "gpt-4o-mini",\n  "top_p": 1,\n  "temperature": 0.7,\n  "messages": [\n    {\n      "content": "Say: {props.greeting}",\n      "role": "user",\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'serialize(config, "gpt-4o-mini", "basic-prompt")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Result (serialized string):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"---\nname: my-prompt\nmetadata:\n  model:\n    name: gpt-4o-mini\n    settings:\n      top_p: 1\n      temperature: 0.7\n---\n\n<User>\nSay: {props.greeting}\n</User>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var t=r(6540);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);