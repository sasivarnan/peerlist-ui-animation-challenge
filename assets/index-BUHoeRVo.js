import{a as l,k as c}from"./index-4QZcGjhH.js";import{A as o,c as d}from"./index-DZxtJdhT.js";import{m as i}from"./proxy-BpoiGc05.js";const x=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",...e},l.createElement("path",{d:"M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"})),m=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",...e},l.createElement("path",{d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})),k="_root_hwujx_1",u="_checkbox_hwujx_13",w="_icon_hwujx_32",b="_label_hwujx_42",a={root:k,checkbox:u,icon:w,"icon-checked":"_icon-checked_hwujx_38",label:b,"label-checked-line":"_label-checked-line_hwujx_46"},_=i.create(x),j=i.create(m),g=e=>{var t;return c.jsxs("div",{className:a.root,children:[c.jsx("input",{type:"checkbox",className:a.checkbox,onChange:e.onChange,"aria-label":(t=e.children)==null?void 0:t.toString(),checked:e.checked}),c.jsx(o,{children:e.checked?c.jsx(j,{className:d(a.icon,a["icon-checked"]),initial:{scale:0},animate:{scale:1},exit:{scale:0}}):c.jsx(_,{className:a.icon,initial:{scale:0},animate:{scale:1},exit:{scale:0}})}),c.jsxs("div",{className:a.label,children:[c.jsx(o,{children:e.checked?c.jsx(i.div,{className:a["label-checked-line"],initial:{width:0},animate:{width:"100%"},exit:{width:0}}):null}),e.children]})]})},L=function(){const[t,h]=l.useState([{id:1,label:"Buy groceries",checked:!1},{id:2,label:"Contemplate existence",checked:!0},{id:3,label:"Learn SwiftUI",checked:!1}]),r=n=>h(v=>t.map(s=>s===n?{...s,checked:!s.checked}:s));return c.jsx("div",{className:"page-container",children:c.jsx("div",{className:"list-container",children:t.map(n=>c.jsx(g,{checked:n.checked,onChange:()=>r(n),children:n.label},n.id))})})};export{L as component};
