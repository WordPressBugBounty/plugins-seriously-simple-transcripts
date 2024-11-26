(()=>{"use strict";const e=window.wp.element,t=window.wp.hooks,l=window.wp.components,i=window.wp.data,n=window.wp.i18n,a=window.wp.blockEditor,s=({audioUrl:t,onChangeUrl:i,onSelectAudio:s})=>(0,e.createElement)("div",{className:"ssp-file-uploader"},(0,e.createElement)(l.TextControl,{value:t,onChange:i,placeholder:(0,n.__)("Enter transcript file URL or upload a file","seriously-simple-transcripts")}),(0,e.createElement)(a.MediaUploadCheck,null,(0,e.createElement)(a.MediaUpload,{onSelect:s,allowedTypes:["application/pdf","text/plain","text/vtt","application/json","text/html","application/x-subrip"],render:({open:t})=>(0,e.createElement)(l.Button,{className:"button w-full",onClick:t,isSecondary:!0},(0,n.__)("Upload File","seriously-simple-transcripts"))}))),r=()=>{const t=(0,i.useSelect)((e=>e("core/editor"))).getEditedPostAttribute("meta");if(!t)return;const{editPost:a}=(0,i.useDispatch)("core/editor"),r=t.transcript_file||"",[o,d]=(0,e.useState)(r),[c,p]=(0,e.useState)(!0),u=(e,t,l)=>{const i={transcript_file:d};((e,t)=>{a({meta:{[e]:t}})})(e,t),i[e]?.(t),l&&document.dispatchEvent(new CustomEvent("changedSSPGutField",{detail:{field:e,value:t}}))};return(0,e.useEffect)((()=>{const e=e=>{u(e.detail.field,e.detail.value)};return document.addEventListener("changedSSPField",e),()=>{document.removeEventListener("changedSSPField",e)}}),[]),(0,e.createElement)(l.PanelBody,null,(0,e.createElement)("h2",{className:"ssp-accordion "+(c?"open":""),onClick:()=>p(!c),"aria-expanded":c},(0,n.__)("Transcript file","seriously-simple-transcripts")),c&&(0,e.createElement)("div",{className:"ssp-sidebar-content"},(0,e.createElement)("div",{className:"ssp-sidebar-field-section"},(0,e.createElement)(s,{audioUrl:o,onChangeUrl:e=>u("transcript_file",e,!0),onSelectAudio:e=>u("transcript_file",e.url,!0)}),(0,e.createElement)("div",{className:"description"},(0,e.createElement)("div",null,(0,n.__)("Upload the transcript file or paste the file URL here.","seriously-simple-transcripts")),(0,e.createElement)("div",null,(0,n.__)("To show the transcript file in the feed, please use SRT, VTT, JSON, HTML or TXT files.","seriously-simple-transcripts"))))))};(0,t.addFilter)("ssp.episodeMetaSidebarEnd","ssstats/additional-panel-body",(()=>(0,e.createElement)(r,null)))})();