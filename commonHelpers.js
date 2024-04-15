import{a as C,S as H,i as l}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const M="43244566-bb96021fc186f0172f7edc4d3",v="https://pixabay.com/api/";async function p(e,o){return(await C(v,{params:{key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const m=document.querySelector(".gallery"),y=new H(".gallery a",{captionsData:"alt",captionDelay:250});y.refresh();function b(e){m.insertAdjacentHTML("beforeend",q(e)),y.refresh()}function q(e){return e.map(({webformatURL:o,largeImageURL:s,tags:i,likes:t,views:r,comments:a,downloads:E})=>`<li class="card">
        <a href="${s}" class="link">
          <img src="${o}" alt="${i}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${t}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${r}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${a}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${E}</p></li>
        </ul>
        </a>
      
      </li>`).join(" ")}function L(){const e=document.createElement("p");e.classList.add("end-message"),e.textContent="We're sorry, but you've reached the end of search results.",m.insertAdjacentElement("afterend",e)}const x=document.querySelector(".form"),g=document.querySelector(".search-input"),S=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");h();let d="",n=1;const u=15;x.addEventListener("submit",P);async function P(e){if(c(),e.preventDefault(),d=g.value.trim(),n=1,m.innerHTML="",d===""){l.error({message:"The field can not be empty!",messageColor:" #fff",backgroundColor:"#ef4040",position:"bottomRight",messageSize:"16px",messageLineHeight:"100%",iconColor:"white",title:"Attention"}),c();return}T(),w();try{const o=await p(d,n,u),s=o.totalHits;if(o.hits.length===0){m.innerHTML="",l.info({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:" #fff",backgroundColor:"#ef4040",position:"bottomRight",messageSize:"16px",messageLineHeight:"100%",iconColor:"white",title:"Info"}),c();return}else b(o.hits),g.value="",$();u*n>=s&&(c(),L())}catch(o){console.error("Error:",o),l.error({message:"Failed to fetch images. Please try again later.",messageColor:" #fff",backgroundColor:"#ef4040",position:"bottomRight",messageSize:"16px",messageLineHeight:"100%",iconColor:"white",title:"Error"})}finally{h()}}f.addEventListener("click",async()=>{try{let s=function(){const i=document.querySelector(".gallery a");if(i){const t=i.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}};f&&(n+=1);const e=await p(d,n,u),o=e.totalHits;b(e.hits),w(),u*n>=o&&(c(),L()),s()}catch(e){console.error("Error fetching more images:",e),l.error({title:"Error",message:`Error fetching more images: ${e}`})}finally{h()}});function w(){S.classList.remove("hidden")}function h(){S.classList.add("hidden")}function $(){f.style.display="block"}function c(){f.style.display="none"}function T(){const e=document.querySelector(".end-message");e&&e.remove()}
//# sourceMappingURL=commonHelpers.js.map
