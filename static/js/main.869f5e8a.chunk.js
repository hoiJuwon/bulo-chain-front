(this["webpackJsonpbulo-chain-front"]=this["webpackJsonpbulo-chain-front"]||[]).push([[0],{249:function(e,t){},251:function(e,t){},253:function(e,t){},257:function(e,t){},284:function(e,t){},286:function(e,t){},300:function(e,t){},302:function(e,t){},332:function(e,t){},334:function(e,t){},424:function(e,t){},425:function(e,t){},537:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(223),s=n.n(i),o=n(25),u=n(10),c=n.n(u),p=n(20),d=n(7),l=n(8),y=n(52),b=n(13),m=n(12),f=n(89),v=n(90),h=n.n(v),j=new(n(225).a)({supportedChainIds:[1,3,4,5,42]}),g=n(2);var x=function(){var e=Object(f.b)(),t=e.active,n=e.account,a=(e.library,e.connector,e.activate),r=e.deactivate;function i(){return(i=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(j);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function s(){return(s=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r()}catch(t){}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsxs)("div",{className:"Connect",children:[" ",Object(g.jsx)("button",{onClick:function(){return i.apply(this,arguments)},className:"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800",children:"Connect to MetaMask"}),t?Object(g.jsxs)("span",{children:["Connected with ",Object(g.jsx)("b",{children:n})]}):Object(g.jsx)("span",{children:"Not connected"}),Object(g.jsx)("button",{onClick:function(){return s.apply(this,arguments)},className:"py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800",children:"Disconnect"})]})},T=n(14),O=n(41),k=n(21),w=n(127),C=n.n(w);function I(e){return M.apply(this,arguments)}function M(){return(M=Object(p.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={data:null,error:null},e.prev=1,e.next=4,t;case 4:n.data=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.error=e.t0;case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function G(e,t,n,a,r){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(c.a.mark((function e(t,n,a,r,i){var s,o,u,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://ipfs.infura.io:5001/api/v0/add?stream-channels=true",s={name:t,note:n,birth:a,x:r,y:i},o=JSON.stringify(s),(u=new FormData).append("data",o),p={headers:{"content-type":"multipart/form-data"}},e.next=8,I(C.a.post("https://ipfs.infura.io:5001/api/v0/add?stream-channels=true",u,p));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return A.apply(this,arguments)}function A(){return(A=Object(p.a)(c.a.mark((function e(t){var n,a,r,i,s,o,u,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://ipfs.io/ipfs/".concat(t),{headers:{"content-type":"multipart/form-data"}},e.prev=2,e.next=5,I(C.a.get(n));case 5:return a=e.sent,r=a.data.data,i=r.name,s=r.note,o=r.birth,u=r.x,p=r.y,e.abrupt("return",[i,s,o,u,p]);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",["not found"]);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var D=function(e){var t=e.onLocationChange,n=e.graves;function a(e,n,a){return a?Object(g.jsx)("button",{className:"grave",onClick:function(){return t(e,n,a)},children:"\ud83e\udea6"},"{c.tokenId}"):Object(g.jsx)("button",{className:"grass",onClick:function(){return t(e,n)},children:"\ud83c\udf31"})}return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{children:Object(g.jsx)("table",{children:Object(g.jsx)("tbody",{children:n.map((function(e,t){return Object(g.jsx)("tr",{children:e.map((function(e,n){return Object(g.jsx)("td",{children:a(t,n,e)},n)}))},t)}))})})})})};function B(e,t,n){return"object"===typeof n[e][t]}var V=n(550);var N=function(e){var t=e.registerGrave,n=e.graves,r=Object(a.useState)({name:"",note:"",birth:"",x:"",y:""}),i=Object(k.a)(r,2),s=i[0],o=i[1],u=Object(a.useState)(null),d=Object(k.a)(u,2),l=d[0],y=d[1],b=s.name,m=s.note,f=s.birth,v=s.x,h=s.y,j=function(e){var t=e.target,n=t.value,a=t.name;o(Object(O.a)(Object(O.a)({},s),{},Object(T.a)({},a,n)))},x=function(){var e=Object(p.a)(c.a.mark((function e(){var a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b&&m&&f){e.next=2;break}return e.abrupt("return",alert("\ubaa8\ub450 \uc785\ub825\ud574\uc8fc\uc138\uc694"));case 2:if(v&&h){e.next=4;break}return e.abrupt("return",alert("\ubb18\uc9c0\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"));case 4:if(!B(v,h,n)){e.next=6;break}return e.abrupt("return",alert("\ud574\ub2f9 \uc704\uce58\uc5d0 \uc774\ubbf8 \ubb18\uc9c0\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4."));case 6:return e.next=8,G(b,m,f,v,h);case 8:a=e.sent,r=a.data,i=r.data.Hash,console.log(i),alert(i),t(i);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{name:"name",value:b,onChange:j,placeholder:"name"}),Object(g.jsx)("input",{name:"note",value:m,onChange:j,placeholder:"note"}),Object(g.jsx)("input",{name:"birth",value:f,onChange:j,placeholder:"birth"}),Object(g.jsx)(V.a,{onClick:x,children:"post "}),Object(g.jsx)(D,{onLocationChange:function(e,t,a){if(a?(console.log(a.data),y(a.data)):y(null),o(Object(O.a)(Object(O.a)({},s),{},{x:e,y:t})),B(e,t,n))return alert("\ud574\ub2f9 \uc704\uce58\uc5d0 \uc774\ubbf8 \ubb18\uc9c0\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4.")},graves:n}),Object(g.jsx)("div",{children:l?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{children:"\ud83e\udea6"}),"name : ",l[0]," ",Object(g.jsx)("br",{}),"message: ",l[1]," ",Object(g.jsx)("br",{}),"birth: ",l[2]," ",Object(g.jsx)("br",{})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{children:"\ud83c\udf31Empty Grave"})})})]})};var _=function(e){var t=e.info,n=e.vault,r=e.myAddress,i=e.createVault,s=e.donateTo,o=e.updateDonateTarget,u=(e.vaultInfoOf,Object(a.useState)({donateTarget:"",amount:0,tokenId:t[5]})),d=Object(k.a)(u,2),l=d[0],y=d[1],b=l.donateTarget,m=l.amount,f=function(e){var t=e.target,n=t.value,a=t.name;console.log(n,a),y(Object(O.a)(Object(O.a)({},l),{},Object(T.a)({},a,n))),console.log(l)},v=function(){var e=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("donate ".concat(l.donateTarget," ").concat(l.amount)),s(l.donateTarget,l.amount);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("create vault ".concat(t[5]," ").concat(r,"->").concat(l.donateTarget)),i(t[5],r,l.donateTarget);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("update ".concat(r," vault to ").concat(l.donateTarget)),o(r,l.donateTarget);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(t),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{children:"Check out my Grave"}),"name : ",t[0]," ",Object(g.jsx)("br",{}),"message: ",t[1]," ",Object(g.jsx)("br",{}),"birth: ",t[2]," ",Object(g.jsx)("br",{}),"tokenId: ",t[5]," ",Object(g.jsx)("br",{}),"your address: ",r,Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("strong",{children:"=Vault="})}),Object(g.jsxs)("div",{children:["isActive : ",!0===(null===n||void 0===n?void 0:n.isActive)?"true":"false"]}),Object(g.jsxs)("div",{children:["balance : ",null===n||void 0===n?void 0:n.balanceOf]}),Object(g.jsxs)("div",{children:["tokenId : ",null===n||void 0===n?void 0:n.tokenId]}),Object(g.jsxs)("div",{children:["donate target : ",null===n||void 0===n?void 0:n.donateTarget]}),Object(g.jsx)("input",{name:"donateTarget",value:b,onChange:f,placeholder:"donateTarget"}),Object(g.jsx)("button",{onClick:h,children:"create vault"}),Object(g.jsx)("button",{onClick:j,children:"change target"}),Object(g.jsx)("div",{children:"\ud83c\udf39"}),Object(g.jsx)("input",{name:"amount",value:m,onChange:f,placeholder:"amount"}),Object(g.jsx)("button",{onClick:v,children:"donate to this vault"}),Object(g.jsx)(g.Fragment,{})]})]})},E=[{inputs:[{internalType:"string",name:"initURI",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"_uri",type:"string"},{indexed:!1,internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"NewGrave",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"Graves",outputs:[{internalType:"string",name:"uri",type:"string"},{internalType:"uint256",name:"tokenId",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"getMyTokenId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"graveCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"graveInfoOf",outputs:[{internalType:"string",name:"uri",type:"string"},{internalType:"uint256",name:"tokenId",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"graveToOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_uri",type:"string"}],name:"registerGrave",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],L=[{inputs:[{internalType:"uint256",name:"donationBlockGap_",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{internalType:"uint256",name:"tokenId_",type:"uint256"},{internalType:"address",name:"vaultOwner_",type:"address"},{internalType:"address",name:"donateTarget_",type:"address"}],name:"createVault",type:"function"},{anonymous:!1,inputs:[{internalType:"address",name:"vaultOwner_",type:"address"},{internalType:"address",name:"donateTarget_",type:"address"}],name:"updateDonateTarget",type:"function"},{anonymous:!1,inputs:[{internalType:"address",name:"vaultOwner_",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"donateTo",type:"function"},{anonymous:!1,inputs:[{internalType:"address",name:"",type:"address"}],name:"vaultInfoOf",outputs:[{internalType:"bool",name:"isActive",type:"bool"},{internalType:"uint256",name:"balanceOf",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"lastDonationBlockNumber",type:"uint256"},{internalType:"address",name:"donateTarget",type:"address"}],stateMutability:"view",type:"function"}];function J(e){return new h.a(e)}var P=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={account:"",graveCount:0,Graves:[],GraveMap:Array.from(Array(10),(function(){return new Array(10).fill(0)})),loading:!0,myGrave:[]},a.registerGrave=a.registerGrave.bind(Object(y.a)(a)),a.createVault=a.createVault.bind(Object(y.a)(a)),a.updateDonateTarget=a.updateDonateTarget.bind(Object(y.a)(a)),a.donateTo=a.donateTo.bind(Object(y.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadBlockchainData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadBlockchainData",value:function(){var e=Object(p.a)(c.a.mark((function e(){var t,n,a,r,i,s,u,p,d,l,y,b,m,f,v,j,g,x,T,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.a(h.a.givenProvider||"http://localhost:8545"),e.next=3,t.eth.net.getNetworkType();case 3:return n=e.sent,console.log("network:",n),e.next=7,t.eth.getAccounts();case 7:return a=e.sent,this.setState({account:a[0]}),r=new t.eth.Contract(E,"0xF59c5b62F1B40c8c1083C8088E5dB9C4aF9FB3b0"),this.setState({bulo:r}),e.next=13,r.methods.graveCount().call();case 13:i=e.sent,this.setState({graveCount:i}),s=Array.from(Array(11),(function(){return new Array(11).fill(0)})),u=0;case 17:if(!(u<i)){e.next=31;break}return e.next=20,r.methods.Graves(u).call();case 20:return p=e.sent,d=p.uri,l=p.tokenId,e.next=24,F(d);case 24:y=e.sent,b=[y[3],y[4]],f=b[1],void 0!==(m=b[0])&&void 0!==f&&(s[parseInt(m,10)][parseInt(f,10)]={tokenId:l,uri:d,data:y}),this.setState({Graves:[].concat(Object(o.a)(this.state.Graves),[{tokenId:l,uri:d,data:y}])});case 28:u++,e.next=17;break;case 31:return this.setState({GraveMap:s}),e.next=34,r.methods.graveInfoOf(a[0]).call();case 34:return v=e.sent,j=v.uri,g=v.tokenId,e.next=39,F(j);case 39:return x=e.sent,console.log(x),console.log(g),this.setState({myGrave:[].concat(Object(o.a)(x),[g])}),T=new t.eth.Contract(L,"0x7E66F3DB4c9606e79F1b161985888335AE7c46E2"),this.setState({vault:T}),console.log(this.state.vault),e.next=48,T.methods.vaultInfoOf(a[0]).call();case 48:O=e.sent,console.log(O),this.setState({myVault:O});case 51:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"registerGrave",value:function(e){var t=this;this.setState({loading:!0}),this.state.bulo.methods.registerGrave(e).send({from:this.state.account}).once("receipt",(function(e){t.setState({loading:!1})}))}},{key:"createVault",value:function(e,t,n){var a=this;console.log(e,t,n),this.setState({loading:!0}),this.state.vault.methods.createVault(e,t,n).send({from:this.state.account}).once("receipt",(function(e){a.setState({loading:!1})}))}},{key:"updateDonateTarget",value:function(e,t){var n=this;this.setState({loading:!0}),this.state.vault.methods.updateDonateTarget(e,t).send({from:this.state.account}).once("receipt",(function(e){n.setState({loading:!1})}))}},{key:"donateTo",value:function(e,t){var n=this;this.setState({loading:!0}),this.state.vault.methods.donateTo(e,t).send({from:this.state.account}).once("receipt",(function(e){n.setState({loading:!1})}))}},{key:"render",value:function(){return Object(g.jsxs)(f.a,{getLibrary:J,style:{display:"flex"},children:[Object(g.jsxs)("div",{style:{float:"left"},children:[Object(g.jsx)(x,{}),Object(g.jsx)(N,{registerGrave:this.registerGrave,graves:this.state.GraveMap}),Object(g.jsxs)("p",{children:["Your account : ",this.state.account]}),Object(g.jsxs)("p",{style:{marginBottom:"30px"},children:[this.state.graveCount," people didn't die"]})]}),Object(g.jsx)("div",{style:{float:"left"},children:Object(g.jsx)(_,{info:this.state.myGrave,vault:this.state.myVault,myAddress:this.state.account,createVault:this.createVault,updateDonateTarget:this.updateDonateTarget,donateTo:this.donateTo})})]})}}]),n}(a.Component),R=P,U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,551)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),U()}},[[537,1,2]]]);
//# sourceMappingURL=main.869f5e8a.chunk.js.map