(window.webpackJsonp=window.webpackJsonp||[]).push([["main~493df0b3"],{"+y+u":function(a,b,c){"use strict";(function(a){var d=c("mXGw"),e=c.n(d),f=c("Za3l"),g=c.n(f),h=c("vtzz"),i=c("jf7e"),j=c("qPgm"),k=c("geMm"),l=c("MV5A"),m=c.n(l);class n extends d.Component{constructor(a){super(a),this.createInvoice=this.createInvoice.bind(this),this.updateInvoice=this.updateInvoice.bind(this),this.removeInvoice=this.removeInvoice.bind(this),this.state={invoices:[]}}componentDidMount(){this.readInvoices()}readInvoices(){return Object(j.a)().then((a)=>(this.setState({invoices:a}),Promise.resolve(a)))}createInvoice(a){return Object(j.d)(a).then(()=>this.readInvoices())}updateInvoice(a){return Object(j.c)(a).then(()=>this.readInvoices())}removeInvoice(a){return Object(j.b)(a).then(()=>this.readInvoices())}render(){const{invoices:a}=this.state,{createInvoice:b,removeInvoice:c,updateInvoice:d}=this;return e.a.createElement(h.a,null,e.a.createElement("div",{className:m.a.wrapper},e.a.createElement("h1",null,"Invoice App"),e.a.createElement(i.a,{path:"/",exact:!0,render:()=>e.a.createElement(k.b,{invoices:a,removeInvoice:c})}),e.a.createElement(i.a,{path:"/create-invoice",render:()=>e.a.createElement(k.a,{saveInvoice:b,action:"create",invoices:a})}),e.a.createElement(i.a,{path:"/edit-invoice",render:()=>e.a.createElement(k.a,{saveInvoice:d,action:"update",invoices:a})})))}}b.a=Object(f.hot)(a)(n)}).call(this,c("Ono3")(a))},0:function(a,b,c){c("34aQ"),a.exports=c("orQE")},"34aQ":function(a,b,c){"use strict";c.r(b);var d=c("+jjx"),e=c.n(d);new Promise((a)=>{a()}),[][Symbol.iterator]},D9WN:function(a,b,c){function d(a){var b=e(a);return c(b)}function e(a){var b=f[a];if(!(b+1)){var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}return b}var f={"./af":"ggbP","./af.js":"ggbP","./ar":"zaxx","./ar-dz":"fyYX","./ar-dz.js":"fyYX","./ar-kw":"jogf","./ar-kw.js":"jogf","./ar-ly":"zWXE","./ar-ly.js":"zWXE","./ar-ma":"6Nbo","./ar-ma.js":"6Nbo","./ar-sa":"ooRU","./ar-sa.js":"ooRU","./ar-tn":"ZPeb","./ar-tn.js":"ZPeb","./ar.js":"zaxx","./az":"sTnJ","./az.js":"sTnJ","./be":"mOKi","./be.js":"mOKi","./bg":"oaWn","./bg.js":"oaWn","./bm":"TQ38","./bm.js":"TQ38","./bn":"6K5y","./bn.js":"6K5y","./bo":"vPIy","./bo.js":"vPIy","./br":"afE2","./br.js":"afE2","./bs":"JNFb","./bs.js":"JNFb","./ca":"NQcR","./ca.js":"NQcR","./cs":"0V88","./cs.js":"0V88","./cv":"e/5r","./cv.js":"e/5r","./cy":"HTX9","./cy.js":"HTX9","./da":"oBlQ","./da.js":"oBlQ","./de":"DPpk","./de-at":"7epm","./de-at.js":"7epm","./de-ch":"mq6o","./de-ch.js":"mq6o","./de.js":"DPpk","./dv":"FyKI","./dv.js":"FyKI","./el":"U5Cp","./el.js":"U5Cp","./en-au":"2tm8","./en-au.js":"2tm8","./en-ca":"bxNt","./en-ca.js":"bxNt","./en-gb":"YmdP","./en-gb.js":"YmdP","./en-ie":"gLHG","./en-ie.js":"gLHG","./en-il":"rTiS","./en-il.js":"rTiS","./en-nz":"Odsn","./en-nz.js":"Odsn","./eo":"GjBA","./eo.js":"GjBA","./es":"SKOl","./es-do":"8wa+","./es-do.js":"8wa+","./es-us":"YL9C","./es-us.js":"YL9C","./es.js":"SKOl","./et":"+JHh","./et.js":"+JHh","./eu":"pAPS","./eu.js":"pAPS","./fa":"zhSd","./fa.js":"zhSd","./fi":"/BTK","./fi.js":"/BTK","./fo":"K/JZ","./fo.js":"K/JZ","./fr":"wehu","./fr-ca":"UKIa","./fr-ca.js":"UKIa","./fr-ch":"sIcz","./fr-ch.js":"sIcz","./fr.js":"wehu","./fy":"RmWi","./fy.js":"RmWi","./gd":"BWwv","./gd.js":"BWwv","./gl":"794S","./gl.js":"794S","./gom-latn":"jixF","./gom-latn.js":"jixF","./gu":"Uz2K","./gu.js":"Uz2K","./he":"dSB2","./he.js":"dSB2","./hi":"0vPu","./hi.js":"0vPu","./hr":"fnly","./hr.js":"fnly","./hu":"FI+y","./hu.js":"FI+y","./hy-am":"ZxHn","./hy-am.js":"ZxHn","./id":"KxDR","./id.js":"KxDR","./is":"H+sD","./is.js":"H+sD","./it":"GyEJ","./it.js":"GyEJ","./ja":"km6H","./ja.js":"km6H","./jv":"WnjQ","./jv.js":"WnjQ","./ka":"WXVf","./ka.js":"WXVf","./kk":"zJNk","./kk.js":"zJNk","./km":"ZuGE","./km.js":"ZuGE","./kn":"VCFo","./kn.js":"VCFo","./ko":"EpfC","./ko.js":"EpfC","./ky":"Pfmo","./ky.js":"Pfmo","./lb":"wSTE","./lb.js":"wSTE","./lo":"IKWk","./lo.js":"IKWk","./lt":"wUrv","./lt.js":"wUrv","./lv":"xVOH","./lv.js":"xVOH","./me":"riUx","./me.js":"riUx","./mi":"b1YN","./mi.js":"b1YN","./mk":"yPwC","./mk.js":"yPwC","./ml":"dS3T","./ml.js":"dS3T","./mn":"8J7P","./mn.js":"8J7P","./mr":"Cla+","./mr.js":"Cla+","./ms":"Vbbc","./ms-my":"qelJ","./ms-my.js":"qelJ","./ms.js":"Vbbc","./mt":"YkvB","./mt.js":"YkvB","./my":"4lZK","./my.js":"4lZK","./nb":"4dXb","./nb.js":"4dXb","./ne":"dhqa","./ne.js":"dhqa","./nl":"oPI1","./nl-be":"XLIu","./nl-be.js":"XLIu","./nl.js":"oPI1","./nn":"T9ox","./nn.js":"T9ox","./pa-in":"Ly9c","./pa-in.js":"Ly9c","./pl":"MX9p","./pl.js":"MX9p","./pt":"VVP3","./pt-br":"qatJ","./pt-br.js":"qatJ","./pt.js":"VVP3","./ro":"2xJO","./ro.js":"2xJO","./ru":"eqS4","./ru.js":"eqS4","./sd":"6Huv","./sd.js":"6Huv","./se":"opZB","./se.js":"opZB","./si":"Ueyn","./si.js":"Ueyn","./sk":"YIvA","./sk.js":"YIvA","./sl":"s2ex","./sl.js":"s2ex","./sq":"9o/V","./sq.js":"9o/V","./sr":"CZE8","./sr-cyrl":"xXeP","./sr-cyrl.js":"xXeP","./sr.js":"CZE8","./ss":"z3ad","./ss.js":"z3ad","./sv":"AVN5","./sv.js":"AVN5","./sw":"y2+C","./sw.js":"y2+C","./ta":"i/qy","./ta.js":"i/qy","./te":"Zov1","./te.js":"Zov1","./tet":"6ucV","./tet.js":"6ucV","./tg":"cLEX","./tg.js":"cLEX","./th":"cYD4","./th.js":"cYD4","./tl-ph":"+Ls2","./tl-ph.js":"+Ls2","./tlh":"sCZo","./tlh.js":"sCZo","./tr":"Nx06","./tr.js":"Nx06","./tzl":"x0TR","./tzl.js":"x0TR","./tzm":"eHpI","./tzm-latn":"ceDr","./tzm-latn.js":"ceDr","./tzm.js":"eHpI","./ug-cn":"a1x9","./ug-cn.js":"a1x9","./uk":"jAw7","./uk.js":"jAw7","./ur":"UZ6Q","./ur.js":"UZ6Q","./uz":"eYI/","./uz-latn":"MTcW","./uz-latn.js":"MTcW","./uz.js":"eYI/","./vi":"riLI","./vi.js":"riLI","./x-pseudo":"ESkz","./x-pseudo.js":"ESkz","./yo":"tL86","./yo.js":"tL86","./zh-cn":"/cTU","./zh-cn.js":"/cTU","./zh-hk":"dH0k","./zh-hk.js":"dH0k","./zh-tw":"0+Cr","./zh-tw.js":"0+Cr"};d.keys=function(){return Object.keys(f)},d.resolve=e,a.exports=d,d.id="D9WN"},MV5A:function(a){a.exports={wrapper:"_1SDHsJz1_gv_MhaoDjTMgw",elementUIWrapper:"_3DwnCUfnbG3lEYYp1Gom0f",header:"_2rqfuBR5AvCYv54-jJ9yu5",actionButton:"_53El4LaSrZbH0eWKx7bgV"}},geMm:function(a,b,c){"use strict";var d=c("1zSE"),e=c("gMlf"),f=c("mXGw"),g=c.n(f),h=c("W0B4"),i=c.n(h),j=c("4BqW"),k=c("H4M2"),l=c("Fcif"),m=c("dV/x"),n=c("U8a7");class o extends f.Component{constructor(a){super(a),this.state={redirect:!1},this.onClick=this.onClick.bind(this)}onClick(){this.setState({redirect:!0})}render(){const{state:a,onClick:b,props:c}=this,{to:d,children:e}=c,f=Object(m.a)(c,["to","children"]);return g.a.createElement(k.a,Object(l.a)({type:"primary",onClick:b},f),a.redirect&&g.a.createElement(n.a,{push:!0,to:d}),e)}}var p=o,q=c("pJMU"),r=c("J+xt"),s=c("MV5A"),t=c.n(s);const u=i.a.shape({id:i.a.string,number:i.a.number,date_created:i.a.string,date_supply:i.a.string,comment:i.a.string}),v=i.a.oneOf(["create","update"]),w=(a)=>a.id,x=Object(f.createContext)(),y=[{title:"Create",dataIndex:"date_created",width:"15%"},{title:"No",dataIndex:"number",width:"15%"},{title:"Supply",dataIndex:"date_supply",width:"15%"},{title:"Comment",dataIndex:"comment",width:"45%"},{title:"Actions",width:"10%",dataIndex:"id",render:(a)=>g.a.createElement(g.a.Fragment,null,g.a.createElement(p,{to:`/edit-invoice/${a}`,ghost:!0,className:t.a.actionButton},"Edit"),g.a.createElement(x.Consumer,null,(b)=>{return g.a.createElement(k.a,{type:"danger",onClick:(c)=>{b(a);const d=c.target;d.children[0].innerText="Removing...",d.style.padding=0},ghost:!0,className:t.a.actionButton},"Remove")}))}],z=({invoices:a,removeInvoice:b})=>g.a.createElement("div",{className:t.a.elementUIWrapper},"Invoices",g.a.createElement(x.Provider,{value:b},g.a.createElement(r.a,{dataSource:a,rowKey:w,columns:y,pagination:!1})));z.propTypes={invoices:i.a.arrayOf(u).isRequired,removeInvoice:i.a.func.isRequired};var A=c("PA7x"),B=c("aLqd"),C=c("0o3k"),D=c("fkL1"),E=c("+/I5"),F=c("Oi5Q"),G=c("eeRk"),H=c("GCqQ"),I=c("kTx1"),J=c("2//r"),K=c("W1QL"),L=c("vAZZ"),M=c("qgEq"),N=c("0tWB"),O=c("AXN6"),P=c("ecsc"),Q=c("epfg"),R=c("TiKg"),S=c.n(R);const T=()=>g.a.createElement(O.a,{style:{marginRight:".9em",marginTop:".85em"},indicator:g.a.createElement(Q.a,{type:"loading",style:{fontSize:20},spin:!0})}),U=M.a.Item,V=(a)=>Object.keys(a).some((b)=>a[b]);class W extends f.Component{constructor(a){super(a);const{invoices:b,action:c}=a;this.handleSubmit=this.handleSubmit.bind(this),this.state={submitted:!1,isSaving:!1},"update"===c&&(this.id=window.location.href.slice(window.location.href.lastIndexOf("/")+1),[this.invoiceData]=b.filter((a)=>a.id===this.id))}componentDidMount(){this.props.form.validateFields()}handleSubmit(a){a.preventDefault();const{form:b,saveInvoice:c,action:d}=this.props;b.validateFields((a,{invoiceNumber:b,invoiceDate:e,supplyDate:f,comment:g})=>{if(!a){this.setState({isSaving:!0,saveError:!1});const a={number:+b,date_created:e.format("DD MMMM YYYY"),date_supply:f.format("DD MMMM YYYY"),comment:g};"update"===d&&(a.id=this.id),c(a).then(()=>this.setState({submitted:!0,isSaving:!1}),(a)=>this.setState({isSaving:!1,saveError:a.message}))}})}render(){const{state:a,props:b}=this,{getFieldDecorator:c,getFieldsError:d,getFieldError:e,isFieldTouched:f}=b.form,h=f("invoiceNumber")&&e("invoiceNumber"),i=f("invoiceDate")&&e("invoiceDate"),j=f("supplyDate")&&e("supplyDate");return g.a.createElement("div",{style:{border:"1px solid #ECECED",background:"#fff",paddingBottom:".5em",marginTop:"2em"}},a.submitted&&g.a.createElement(n.a,{push:!0,to:"/"}),g.a.createElement(M.a,{layout:"inline",onSubmit:this.handleSubmit,hideRequiredMark:!0},g.a.createElement("div",{style:{margin:"1.4em",border:"1px solid #ECECED",paddingBottom:"1.8em"}},g.a.createElement(D.a,null,g.a.createElement(H.a,{xs:24,md:8},g.a.createElement(U,{label:"Number",validateStatus:h?"error":"",help:h||"",style:{width:"100%",padding:"1em"},wrapperCol:{span:24}},c("invoiceNumber",{initialValue:this.invoiceData&&this.invoiceData.number,rules:[{required:!0,pattern:/^[0-9]+$/,message:"Please input invoice number!"}]})(g.a.createElement(J.a,{placeholder:"Invoice number"})))),g.a.createElement(H.a,{xs:12,md:8},g.a.createElement(U,{label:"Invoice Date",validateStatus:i?"error":"",help:i||"",style:{width:"100%",padding:"1em"},wrapperCol:{span:24}},c("invoiceDate",{initialValue:this.invoiceData&&S()(this.invoiceData.date_created,"DD MMMM YYYY"),rules:[{type:"object",required:!0,message:"Please specify date!"}]})(g.a.createElement(F.a,{style:{width:"100%"}})))),g.a.createElement(H.a,{xs:12,md:8},g.a.createElement(U,{label:"Supply Date",validateStatus:j?"error":"",help:j||"",style:{width:"100%",padding:"1em"},wrapperCol:{span:24}},c("supplyDate",{initialValue:this.invoiceData&&S()(this.invoiceData.date_supply,"DD MMMM YYYY"),rules:[{type:"object",required:!0,message:"Please specify date!"}]})(g.a.createElement(F.a,{style:{width:"100%"}}))))),g.a.createElement(U,{label:"Comment",style:{width:"100%",padding:"1em"},wrapperCol:{span:24}},c("comment",{initialValue:this.invoiceData&&this.invoiceData.comment})(g.a.createElement(J.a.TextArea,{rows:"2"})))),g.a.createElement(D.a,{type:"flex",justify:"end",style:{paddingBottom:".8em",paddingRight:".4em"}},a.saveError&&g.a.createElement(B.a,{message:a.saveError,type:"error",style:{marginRight:"1.4em",marginLeft:"1.4em",flexGrow:"1"}}),a.isSaving&&g.a.createElement(T,null),g.a.createElement(U,null,g.a.createElement(k.a,{type:"primary",htmlType:"submit",size:"large",disabled:V(d())||a.isSaving},"Save")))))}}W.propTypes={invoices:i.a.arrayOf(u).isRequired,action:v.isRequired,saveInvoice:i.a.func.isRequired,form:i.a.any.isRequired};const X=M.a.create()(W);c.d(b,"b",function(){return Z}),c.d(b,"a",function(){return $});const Y=({header:a,children:b})=>g.a.createElement(g.a.Fragment,null,g.a.createElement(e.a,{orientation:"left",className:t.a.header},a),b);Y.propTypes={header:i.a.string.isRequired,children:i.a.any},Y.defaultProps={children:""};const Z=({invoices:a,removeInvoice:b})=>g.a.createElement(Y,{header:"Invoices"},g.a.createElement("div",{className:t.a.elementUIWrapper},"Actions",g.a.createElement("div",null,g.a.createElement(p,{to:"/create-invoice",size:"large"},"Add new"))),g.a.createElement(z,{invoices:a,removeInvoice:b}));Z.propTypes={invoices:i.a.arrayOf(u).isRequired,removeInvoice:i.a.func.isRequired};const $=({saveInvoice:a,invoices:b,action:c})=>g.a.createElement(Y,{header:"Create invoice"},g.a.createElement(X,{saveInvoice:a,invoices:b,action:c}));$.propTypes={saveInvoice:i.a.func.isRequired,invoices:i.a.arrayOf(u).isRequired,action:v.isRequired}},oRai:function(a){a.exports={invoices:[{id:"5ac1f09a60edb54701c767da",direction:"8ad47368-b85b-4b25-a209-9a975fa85ba1",number:55958,date_created:"07 May 1973",date_due:"15 August 2009",date_supply:"28 May 2004",comment:"Officia cillum fugiat aliqua dolor sint adipisicing anim elit ipsum proident pariatur veniam laborum in. Fugiat deserunt cillum ad irure excepteur occaecat. Exercitation nisi minim aliqua et proident."},{id:"5ac1f09a104dfc9b0b85b02f",direction:"bee33a4c-e0cf-4f2c-80b5-93ccab966e46",number:39804,date_created:"21 March 1971",date_due:"14 January 1991",date_supply:"20 October 2014",comment:"Consequat fugiat ut et dolore id fugiat voluptate qui consectetur. Tempor ad aliqua aute deserunt et cillum exercitation proident minim cupidatat sunt pariatur. Duis excepteur dolore exercitation magna consequat ut."},{id:"5ac1f09af3535ad5cf96a221",direction:"3411c638-1a2f-4a1b-bdbc-6d16833149a9",number:968296,date_created:"24 March 1991",date_due:"08 August 1985",date_supply:"14 October 1980",comment:"Pariatur duis et labore elit consequat non eu consectetur. Id quis pariatur ut eiusmod non proident anim commodo in quis. Mollit ea pariatur tempor ut excepteur non."},{id:"5ac1f09a86e937b54f560552",direction:"0f4fec70-c933-4cc3-900e-f4764113326a",number:381693,date_created:"15 July 2013",date_due:"13 October 2009",date_supply:"14 August 1980",comment:"Reprehenderit tempor officia esse dolore in id aliqua voluptate proident. Qui ullamco proident adipisicing ullamco laborum officia velit et nisi. Ut aliquip elit elit pariatur incididunt est qui ullamco sunt deserunt exercitation occaecat ea."},{id:"5ac1f09ac46e68ee97c8f424",direction:"e795889d-c1a0-4d42-b67b-d1e72200a213",number:771062,date_created:"06 December 1980",date_due:"27 May 1988",date_supply:"31 July 2009",comment:"Esse nisi dolore nisi velit ea cillum deserunt. Sunt aliquip esse elit irure eiusmod sunt commodo sint cupidatat aliqua velit elit amet ut. Dolor esse ad ad non adipisicing culpa id voluptate do."},{id:"5ac1f09a835436ee9a0bfeb2",direction:"458d8ccd-eb1a-45c1-a286-c4a0f2e2c866",number:235250,date_created:"19 October 1980",date_due:"22 February 2006",date_supply:"05 November 1979",comment:"Ut officia magna id sit laboris ipsum proident adipisicing ipsum nisi cillum nostrud minim ut. Irure sit duis ad veniam. Esse elit cillum deserunt ea nostrud consectetur ipsum minim."},{id:"5ac1f09af99f30746982959c",direction:"df89896c-8efb-4973-8880-4a5a62dd4563",number:963955,date_created:"02 January 1983",date_due:"19 November 1980",date_supply:"12 December 2013",comment:"Tempor enim consectetur exercitation quis pariatur do ullamco nostrud commodo nulla esse occaecat reprehenderit quis. Ullamco ex sit magna magna anim. Culpa irure officia velit ea esse ullamco duis ullamco ad aute sit veniam ut occaecat."},{id:"5ac1f09ae3212d5279cdf3b7",direction:"acbd951e-8436-45bf-a8a1-ec82ba50a9fc",number:474297,date_created:"09 February 1990",date_due:"18 December 2000",date_supply:"02 November 2014",comment:"Veniam anim sunt dolor sint nulla amet consectetur adipisicing. Amet nostrud mollit minim veniam laboris. Lorem esse in nulla enim et quis nulla deserunt ea duis mollit ipsum nulla."},{id:"5ac1f09a1248c018d5f62d87",direction:"6f70af27-06d9-4718-a1cf-51f6ee5acb82",number:899281,date_created:"26 October 1982",date_due:"10 August 1977",date_supply:"29 July 1982",comment:"Et est amet ad culpa sint. Qui ut cillum est culpa. Culpa mollit consectetur ipsum est est eiusmod do eiusmod."},{id:"5ac1f09aa890dde85c144469",direction:"68af2bbf-7832-4957-8270-7d873000fdf8",number:747722,date_created:"29 September 1983",date_due:"11 July 2013",date_supply:"17 July 2007",comment:"Veniam amet est elit proident voluptate sint mollit ipsum reprehenderit esse. Laborum ea veniam ad duis mollit enim non. Occaecat culpa laborum duis officia dolore nisi quis duis irure labore esse adipisicing ullamco minim."}]}},orQE:function(a,b,c){"use strict";c.r(b);var d=c("mXGw"),e=c.n(d),f=c("xARA"),g=c.n(f),h=c("+y+u");g.a.render(e.a.createElement(h.a,null),document.getElementById("root"))},qPgm:function(a,b,c){"use strict";c.d(b,"a",function(){return o}),c.d(b,"d",function(){return p}),c.d(b,"c",function(){return q}),c.d(b,"b",function(){return r});var d=c("W1QL"),e=c.n(d),f=c("CoJX"),g=c("2tSK"),h=c.n(g),i=c("oRai"),j=c.t("oRai",1);const k=(a)=>new Promise((b)=>setTimeout(b,a)),l=(a,b=200)=>(...c)=>k(b).then(()=>a(...c)),m={},n={readRecords(){return JSON.parse(JSON.stringify(i.invoices))},writeRecord(a){const b=i.invoices.some((b)=>a.number===b.number);if(b)throw new Error("Provided number already exists!");i.invoices.push(Object(f.a)({},a,{id:h()()}))},updateRecord(a){const b=i.invoices.some((b)=>a.number===b.number&&a.id!==b.id);if(b)throw new Error("Provided number already exists!");i.invoices.forEach((b,c)=>{b.id===a.id&&(i.invoices[c]=Object(f.a)({},b,a))})},removeRecord(a){i.invoices=i.invoices.filter((b)=>b.id!==a)}};Object.keys(n).forEach((a)=>{m[a]=l(n[a])});const{readRecords:o,writeRecord:p,updateRecord:q,removeRecord:r}=m}},[[0,"runtime","vendor~main~9b1fde68","vendor~main~74226ea0","vendor~main~e50ee5dc","vendor~main~e4dfd1bd"]]]);
//# sourceMappingURL=main~493df0b3.ae0912cbb944b9cd6156.js.map