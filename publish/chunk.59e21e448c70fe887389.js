(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{366:function(e,t,a){"use strict";a.r(t);a(24);var n=a(35),r=a(26);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{ebitStoreId:t}=e;if(t){const e=window.storefrontApp&&window.storefrontApp.router;if(e){let a=0;const i=e=>{let{name:i,params:o}=e;"confirmation"===i&&0===a&&(a++,r.a.fetchOrder(o.id).then((e=>{const a=r.a.getCustomer();let i=`storeId=${t}&mktSaleId=0&platform=ecomplus&totalSpent=${e.amount.total}&deliveryTax=${e.amount.freight||0}&transactionId=${e.number||e._id}&email=${a.main_email}`;if(a.gender&&(i+=`&gender=${a.gender.toUpperCase()}`),a.birth_date){const{day:e,month:t,year:n}=a.birth_date;i+=`&birthday=${e.toString().padStart(2,"0")}-${t.toString().padStart(2,"0")}-${n}`}const{items:o}=e;if(o&&o.length){let e=o[0].sku,t=Object(n.a)(o[0]),a=o[0].quantity,r=encodeURIComponent(o[0].name);for(let i=1;i<o.length;i++)e+=`|${o[i].sku}`,t+=`|${Object(n.a)(o[i])}`,a+=`|${o[i].quantity}`,r+=`|${encodeURIComponent(o[i].name)}`;i+=`&sku=${e}&value=${t}&quantity=${a}&productName=${r}`}if(e.shipping_lines&&e.shipping_lines[0]){const t=e.shipping_lines[0];i+=`&deliveryTime=${t.delivery_time.days||0}&zipCode=${t.to.zip}`}if(e.transactions&&e.transactions[0]){const t=e.transactions[0];switch(i+=`&parcels=${t.installments&&t.installments.number||1}`,i+="&paymentType=",t.payment_method.code){case"credit_card":i+="05";break;case"banking_billet":i+="08";break;case"debit_card":case"online_debit":case"account_deposit":i+="28";break;case"loyalty_points":i+="24";break;default:i+="14"}if(t.credit_card&&t.credit_card.company)switch(i+="&cardFlag=",t.credit_card.company.toLowerCase()){case"visa":i+=6;break;case"mastercard":i+=5;break;case"american express":case"amex":i+=1;break;case"elo":i+=8;break;case"aura":i+=2;break;case"hipercard":i+=4;break;case"diners club":i+=3;break;default:i+=7}}const s=setInterval((()=>{const e=document.getElementById("confirmation");if(e){e.insertAdjacentHTML("beforeend",`<div> <param id="ebitParam" value="${i}"> <a id="bannerEbit"></a> </div>`);const a=document.createElement("script");a.id="getSelo",a.type="text/javascript",a.src=`https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?${t}&lightbox=true`,document.body.appendChild(a),clearInterval(s)}}),200)})).catch(console.error))};e.currentRoute&&i(e.currentRoute),e.afterEach(i)}}else console.error(new Error("Can't show lightbox without `ebitStoreId` option"))}}}]);