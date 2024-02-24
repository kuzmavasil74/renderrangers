import{a as p}from"./vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();console.log("mobile menu");const n={categoryListElem:document.querySelector(".js-category-list"),categoryCardElem:document.querySelector(".js-category-card"),categoryCardSection:document.querySelector(".js-category"),supportList:document.querySelector(".js-support-list"),scrollBtn:document.querySelector(".js-support-btn"),scrollToTopBtn:document.querySelector(".js-scrollToTopBtn")},g="https://books-backend.p.goit.global/books/";async function c(e,t){try{return(await p.get(g+e,{params:t})).data}catch(o){console.error(o)}}function m(e,t){return t.map(e).join("")}function a(e,t,o){const i=m(e,o);if(t===null)return i;t.innerHTML="",t.insertAdjacentHTML("beforeend",i)}console.log("category-card");const d=async e=>{const t=await c("category",e);console.log(t),n.categoryCardElem.insertAdjacentHTML("beforebegin",y(t[0].list_name)),a(f,n.categoryCardElem,t)};function y(e){return`
      <h2 class="category-card-title">${e}</h2>
    `}function f({book_image:e,title:t,author:o,_id:i}){return`
      <li class="sellers-item" data-id="${i}">
        <img class="book-image"
        src="${e}"
        alt="${t}"
        width="335"
        height="485">
        <h3 class="book-title">${t}</h3>
        <p class="book-author">${o}</p>
      </li>
    `}console.log("Top book");const u=async()=>{const e=await c("top-books");console.log(e)};u();n.categoryListElem.addEventListener("click",h);function h(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;const t=e.target.parentElement;for(const o of n.categoryListElem.children)o.firstElementChild.classList.remove("active");console.log("active"),t.firstElementChild.classList.add("active"),t.firstElementChild.textContent==="ALL CATEGORIES"?u():d({category:t.firstElementChild.textContent})}const w=async()=>{const e=await c("category-list");e.unshift({list_name:"ALL CATEGORIES",classActive:"active"}),a(L,n.categoryListElem,e)};w();function L({list_name:e,classActive:t=""}){return`<li class="category-item">
  
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const b=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function k(e,t,o){e.classList.toggle(o),e.classList.contains(o)?t.scrollTop=t.scrollHeight:t.scrollTop=0}n.scrollBtn.addEventListener("click",()=>k(n.scrollBtn,n.supportList,"isDown"));a(E,n.supportList,b);function E(e){const{title:t,url:o,img:i}=e;return`
    <li class="support-item">
      <a
        class="support-link"
        target="_blank"
        rel="noopener noreferrer"
        arial-label="${t}"
        href="${o}"
      >
        <img class="support-img" src="./img/support/${i}.png" alt="${t}" />
      </a>
    </li>`}console.log("pop up");
//# sourceMappingURL=main-9b66e3be.js.map
