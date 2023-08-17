(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7940:function(e,n,r){Promise.resolve().then(r.bind(r,241))},241:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return U}});var t=r(3955),l=r(5501),i=r(7557),a=(0,l.G)(function(e,n){let{direction:r,align:l,justify:a,wrap:s,basis:o,grow:u,shrink:d,...c}=e;return(0,t.jsx)(i.m.div,{ref:n,__css:{display:"flex",flexDirection:r,alignItems:l,justifyContent:a,flexWrap:s,flexBasis:o,flexGrow:u,flexShrink:d},...c})});a.displayName="Flex";var s=(0,i.m)("div");s.displayName="Box";var o=(0,l.G)(function(e,n){let{size:r,centerContent:l=!0,...i}=e;return(0,t.jsx)(s,{ref:n,boxSize:r,__css:{...l?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});o.displayName="Square",(0,l.G)(function(e,n){let{size:r,...l}=e;return(0,t.jsx)(o,{size:r,ref:n,borderRadius:"9999px",...l})}).displayName="Circle";var u=r(5797),d=r(9837),c=r(3101);function m(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(r){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}var f=r(2073),p=r(2586),x=r(617),[h,v]=(0,d.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[b,y]=(0,d.k)({strict:!1,name:"FormControlContext"}),j=(0,l.G)(function(e,n){let r=(0,f.jC)("Form",e),l=(0,p.Lr)(e),{getRootProps:a,htmlProps:s,...o}=function(e){let{id:n,isRequired:r,isInvalid:t,isDisabled:l,isReadOnly:i,...a}=e,s=(0,c.useId)(),o=n||`field-${s}`,u=`${o}-label`,d=`${o}-feedback`,f=`${o}-helptext`,[p,h]=(0,c.useState)(!1),[v,b]=(0,c.useState)(!1),[y,j]=(0,c.useState)(!1),g=(0,c.useCallback)((e={},n=null)=>({id:f,...e,ref:m(n,e=>{e&&b(!0)})}),[f]),_=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,"data-focus":(0,x.PB)(y),"data-disabled":(0,x.PB)(l),"data-invalid":(0,x.PB)(t),"data-readonly":(0,x.PB)(i),id:void 0!==e.id?e.id:u,htmlFor:void 0!==e.htmlFor?e.htmlFor:o}),[o,l,y,t,i,u]),k=(0,c.useCallback)((e={},n=null)=>({id:d,...e,ref:m(n,e=>{e&&h(!0)}),"aria-live":"polite"}),[d]),N=(0,c.useCallback)((e={},n=null)=>({...e,...a,ref:n,role:"group"}),[a]),C=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!i,isDisabled:!!l,isFocused:!!y,onFocus:()=>j(!0),onBlur:()=>j(!1),hasFeedbackText:p,setHasFeedbackText:h,hasHelpText:v,setHasHelpText:b,id:o,labelId:u,feedbackId:d,helpTextId:f,htmlProps:a,getHelpTextProps:g,getErrorMessageProps:k,getRootProps:N,getLabelProps:_,getRequiredIndicatorProps:C}}(l),u=(0,x.cx)("chakra-form-control",e.className);return(0,t.jsx)(b,{value:o,children:(0,t.jsx)(h,{value:r,children:(0,t.jsx)(i.m.div,{...a({},n),className:u,__css:r.container})})})});j.displayName="FormControl",(0,l.G)(function(e,n){let r=y(),l=v(),a=(0,x.cx)("chakra-form__helper-text",e.className);return(0,t.jsx)(i.m.div,{...null==r?void 0:r.getHelpTextProps(e,n),__css:l.helperText,className:a})}).displayName="FormHelperText";var g=(0,l.G)(function(e,n){var r;let l=(0,f.mq)("FormLabel",e),a=(0,p.Lr)(e),{className:s,children:o,requiredIndicator:u=(0,t.jsx)(_,{}),optionalIndicator:d=null,...c}=a,m=y(),h=null!=(r=null==m?void 0:m.getLabelProps(c,n))?r:{ref:n,...c};return(0,t.jsxs)(i.m.label,{...h,className:(0,x.cx)("chakra-form__label",a.className),__css:{display:"block",textAlign:"start",...l},children:[o,(null==m?void 0:m.isRequired)?u:d]})});g.displayName="FormLabel";var _=(0,l.G)(function(e,n){let r=y(),l=v();if(!(null==r?void 0:r.isRequired))return null;let a=(0,x.cx)("chakra-form__required-indicator",e.className);return(0,t.jsx)(i.m.span,{...null==r?void 0:r.getRequiredIndicatorProps(e,n),__css:l.requiredIndicator,className:a})});_.displayName="RequiredIndicator";var k=(0,l.G)(function(e,n){let{htmlSize:r,...l}=e,a=(0,f.jC)("Input",l),s=(0,p.Lr)(l),o=function(e){let{isDisabled:n,isInvalid:r,isReadOnly:t,isRequired:l,...i}=function(e){var n,r,t;let l=y(),{id:i,disabled:a,readOnly:s,required:o,isRequired:u,isInvalid:d,isReadOnly:c,isDisabled:m,onFocus:f,onBlur:p,...h}=e,v=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&v.push(l.feedbackId),(null==l?void 0:l.hasHelpText)&&v.push(l.helpTextId),{...h,"aria-describedby":v.join(" ")||void 0,id:null!=i?i:null==l?void 0:l.id,isDisabled:null!=(n=null!=a?a:m)?n:null==l?void 0:l.isDisabled,isReadOnly:null!=(r=null!=s?s:c)?r:null==l?void 0:l.isReadOnly,isRequired:null!=(t=null!=o?o:u)?t:null==l?void 0:l.isRequired,isInvalid:null!=d?d:null==l?void 0:l.isInvalid,onFocus:(0,x.v0)(null==l?void 0:l.onFocus,f),onBlur:(0,x.v0)(null==l?void 0:l.onBlur,p)}}(e);return{...i,disabled:n,readOnly:t,required:l,"aria-invalid":(0,x.Qm)(r),"aria-required":(0,x.Qm)(l),"aria-readonly":(0,x.Qm)(t)}}(s),u=(0,x.cx)("chakra-input",e.className);return(0,t.jsx)(i.m.input,{size:r,...o,__css:a.field,ref:n,className:u})});k.displayName="Input",k.id="Input";let N=(0,u.cn)({key:"error",default:!1}),C=(0,u.cn)({key:"host",default:""}),I=(0,u.cn)({key:"port",default:""}),F=(0,u.cn)({key:"username",default:""});function S(){let e=(0,u.sJ)(N),[n,r]=(0,u.FV)(C);return(0,t.jsxs)(j,{isInvalid:e,isRequired:!0,children:[(0,t.jsx)(g,{children:"Host (URL or IP)"}),(0,t.jsx)(k,{value:n,onChange:e=>r(e.target.value)})]})}function B(){let e=(0,u.sJ)(N),[n,r]=(0,u.FV)(I);return(0,t.jsxs)(j,{isInvalid:e,marginTop:5,isRequired:!0,children:[(0,t.jsx)(g,{children:"Port"}),(0,t.jsx)(k,{value:n,onChange:e=>r(e.target.value)})]})}function q(){let e=(0,u.sJ)(N),[n,r]=(0,u.FV)(F);return(0,t.jsxs)(j,{isInvalid:e,marginTop:5,isRequired:!0,children:[(0,t.jsx)(g,{children:"Username"}),(0,t.jsx)(k,{value:n,onChange:e=>r(e.target.value)})]})}var O=r(5103),P=r(8665),R=r(1181),[T,w]=(0,d.k)({strict:!1,name:"ButtonGroupContext"});function G(e){let{children:n,className:r,...l}=e,a=(0,c.isValidElement)(n)?(0,c.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,s=(0,x.cx)("chakra-button__icon",r);return(0,t.jsx)(i.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...l,className:s,children:a})}G.displayName="ButtonIcon";var E=r(7067);function D(e){let{label:n,placement:r,spacing:l="0.5rem",children:a=(0,t.jsx)(E.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:o,...u}=e,d=(0,x.cx)("chakra-button__spinner",s),m="start"===r?"marginEnd":"marginStart",f=(0,c.useMemo)(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[m]:n?l:0,fontSize:"1em",lineHeight:"normal",...o}),[o,n,m,l]);return(0,t.jsx)(i.m.div,{className:d,...u,__css:f,children:a})}D.displayName="ButtonSpinner";var L=(0,l.G)((e,n)=>{let r=w(),l=(0,f.mq)("Button",{...r,...e}),{isDisabled:a=null==r?void 0:r.isDisabled,isLoading:s,isActive:o,children:u,leftIcon:d,rightIcon:h,loadingText:v,iconSpacing:b="0.5rem",type:y,spinner:j,spinnerPlacement:g="start",className:_,as:k,...N}=(0,p.Lr)(e),C=(0,c.useMemo)(()=>{let e={...null==l?void 0:l._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...l,...!!r&&{_focus:e}}},[l,r]),{ref:I,type:F}=function(e){let[n,r]=(0,c.useState)(!e),t=(0,c.useCallback)(e=>{e&&r("BUTTON"===e.tagName)},[]);return{ref:t,type:n?"button":void 0}}(k),S={rightIcon:h,leftIcon:d,iconSpacing:b,children:u};return(0,t.jsxs)(i.m.button,{ref:function(...e){return(0,c.useMemo)(()=>m(...e),e)}(n,I),as:k,type:null!=y?y:F,"data-active":(0,x.PB)(o),"data-loading":(0,x.PB)(s),__css:C,className:(0,x.cx)("chakra-button",_),...N,disabled:a||s,children:[s&&"start"===g&&(0,t.jsx)(D,{className:"chakra-button__spinner--start",label:v,placement:"start",spacing:b,children:j}),s?v||(0,t.jsx)(i.m.span,{opacity:0,children:(0,t.jsx)($,{...S})}):(0,t.jsx)($,{...S}),s&&"end"===g&&(0,t.jsx)(D,{className:"chakra-button__spinner--end",label:v,placement:"end",spacing:b,children:j})]})});function $(e){let{leftIcon:n,rightIcon:r,children:l,iconSpacing:i}=e;return(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)(G,{marginEnd:i,children:n}),l,r&&(0,t.jsx)(G,{marginStart:i,children:r})]})}L.displayName="Button";let z={host:/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z0-9]{2,}$/i,port:/^[0-9]{1,5}$/,username:/^[a-z0-9_]{3,16}$/i},J=(e,n,r)=>{let t={client:{host:"Please enter your server ip or url",port:"Please enter your server port",username:"Please enter the bot's username you want"},"! DO NOT EDIT BELOW !":"ONLY IF YOU KNOW WHAT YOU ARE DOING",logLevel:["error","log","debug"],action:{commands:["forward","back","left","right","jump"],holdDuration:5e3,retryDelay:15e3}};return t.client.host=e,t.client.port=n,t.client.username=r,JSON.stringify(t,null,"	")},H=(e,n,r)=>z.host.test(e)&&z.port.test(n)&&z.username.test(r);function M(){let e=function(e){let{theme:n}=(0,R.uP)(),r=(0,O.OX)();return(0,c.useMemo)(()=>(0,P.Cj)(n.direction,{...r,...e}),[e,n.direction,r])}(),n=(0,u.Zl)(N),r=(0,u.sJ)(C),l=(0,u.sJ)(I),i=(0,u.sJ)(F),a=async()=>{H(r,l,i)?(n(!1),await navigator.clipboard.writeText(J(r,l,i)),e({title:"Code generated!",description:"The generated code has been copied to your clipboard.",status:"success",duration:5e3,isClosable:!0})):n(!0)};return(0,t.jsx)(L,{width:"full",marginTop:10,type:"submit",onClick:a,children:"Generate!"})}function U(){return(0,t.jsx)(a,{width:"full",align:"center",justifyContent:"center",children:(0,t.jsx)(s,{minW:{md:"400px"},marginY:4,children:(0,t.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,t.jsx)(S,{}),(0,t.jsx)(B,{}),(0,t.jsx)(q,{}),(0,t.jsx)(M,{})]})})})}}},function(e){e.O(0,[565,755,828,694,744],function(){return e(e.s=7940)}),_N_E=e.O()}]);