import{a as d}from"./vendor-0cb09735.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();console.log("mobile menu");const i={categoryListElem:document.querySelector(".js-category-list"),categoryCardElem:document.querySelector(".js-category-card"),categoryCardSection:document.querySelector(".js-category"),supportList:document.querySelector(".js-support-list"),scrollBtn:document.querySelector(".js-support-btn"),scrollToTopBtn:document.querySelector(".js-scrollToTopBtn")},f="https://books-backend.p.goit.global/books/";async function a(t,e){try{return(await d.get(f+t,{params:e})).data}catch(o){console.error(o)}}function h(t,e){return e.map(t).join("")}function c(t,e,o){const s=h(t,o);if(e===null)return s;e.innerHTML="",e.insertAdjacentHTML("beforeend",s)}console.log("category-card");const y=async t=>{const e=await a("category",t);console.log(e),i.categoryCardElem.insertAdjacentHTML("beforebegin",b(e[0].list_name)),c(k,i.categoryCardElem,e)};function b(t){return`
      <h2 class="category-card-title">${t}</h2>
    `}function k({book_image:t,title:e,author:o,_id:s}){return`
      <li class="sellers-item" data-id="${s}">
        <img class="book-image"
        src="${t}"
        alt="${e}"
        width="335"
        height="485">
        <h3 class="book-title">${e}</h3>
        <p class="book-author">${o}</p>
      </li>
    `}const u=document.getElementById("books-list"),p=async()=>{try{const t=await a("top-books"),e=w(t,4);L(e)}catch(t){console.error(t)}finally{}};p();function w(t,e){const o=[];for(;o.length<e;){const s=Math.floor(Math.random()*t.length);o.includes(s)||o.push(s)}return o.map(s=>t[s])}function L(t){const e=E(t);u.innerHTML="",u.appendChild(e)}function E(t){const e=document.createDocumentFragment();return t.forEach(({list_name:o,books:s})=>{const r=document.createElement("li");r.className="sellers-category",r.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${T(s)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,e.appendChild(r)}),e}function T(t){let e="";const o=C(),s=o==="desktop"?5:o==="tablet"?3:1;for(let r=0;r<s&&r<t.length;r++){const{book_image:n,title:l,author:m,_id:g}=t[r];e+=`
      <li class="sellers-item" data-id="${g}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${n}"
          alt="${l}"
          >
        </div>
        <h3 class="book-title">${l}</h3>
        <p class="book-author">${m}</p>
      </li>
    `}return e}function C(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}i.categoryListElem.addEventListener("click",v);function v(t){if(t.target.nodeName!=="BUTTON"||t.target.classList.contains("active"))return;const e=t.target.parentElement;for(const o of i.categoryListElem.children)o.firstElementChild.classList.remove("active");console.log("active"),e.firstElementChild.classList.add("active"),e.firstElementChild.textContent==="ALL CATEGORIES"?p():y({category:e.firstElementChild.textContent})}const $=async()=>{const t=await a("category-list");t.unshift({list_name:"ALL CATEGORIES",classActive:"active"}),c(S,i.categoryListElem,t)};$();function S({list_name:t,classActive:e=""}){return`<li class="category-item">
  
      <button class="category-button ${e}" type="button">${t}</button>
    </li>`}const B=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"stc"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"hope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"u24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"msf"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"aah"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"wv"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"prytula"}];function M(t,e,o){t.classList.toggle(o),t.classList.contains(o)?e.scrollTop=e.scrollHeight:e.scrollTop=0}i.scrollBtn.addEventListener("click",()=>M(i.scrollBtn,i.supportList,"isDown"));c(j,i.supportList,B);function j(t){const{title:e,url:o,img:s}=t;return`
    <li class="support-item">
      <a
        class="support-link"
        target="_blank"
        rel="noopener noreferrer"
        arial-label="${e}"
        href="${o}"
      >
        <img class="support-img" src="./img/support/${s}.png" alt="${e}" />
      </a>
    </li>`}console.log("pop up");
//# sourceMappingURL=main-c92a2297.js.map
