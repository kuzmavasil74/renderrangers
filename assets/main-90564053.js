import{a}from"./vendor-0cb09735.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}})();console.log("mobile menu");const i=async()=>{(await getDataBooks("category-list")).unshift({list_name:"ALL CATEGORIES"}),console.log(categoryBooks)};i();console.log("category-list");const l="https://books-backend.p.goit.global/books/";async function u(t,s){try{return(await a.get(l+t,{params:s})).data}catch(r){console.error(r)}}console.log("Top book");const p=async()=>{const t=await u("top-books");console.log(t)};p();console.log("support section");console.log("pop up");console.log("category-card");
//# sourceMappingURL=main-90564053.js.map
