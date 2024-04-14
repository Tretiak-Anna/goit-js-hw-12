import{a as S,S as C,i as a}from"./assets/vendor-f736e62a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const H="43244566-bb96021fc186f0172f7edc4d3",v="https://pixabay.com/api/";async function p(t,e){try{return(await S(v,{params:{key:H,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}catch(r){throw console.error("Error:",r),r}}const d=document.querySelector(".gallery"),y=new C(".gallery a",{captionsData:"alt",captionDelay:250});y.refresh();function L(t){t.forEach(e=>{const r=`
      <li class="card">
        <a href="${e.largeImageURL}" class="link">
          <img src="${e.webformatURL}" alt="${e.tags}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${e.likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${e.views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${e.comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${e.downloads}</p></li>
        </ul>
        </a>
        
      </li>
    `;d.insertAdjacentHTML("beforeend",r)}),y.refresh()}function b(){const t=document.createElement("p");t.classList.add("end-message"),t.textContent="We're sorry, but you've reached the end of search results.",d.insertAdjacentElement("afterend",t)}const M=document.querySelector(".form"),g=document.querySelector(".search-input"),w=document.querySelector(".loader"),f=document.querySelector(".load-more-btn");h();let c="",n=1;const m=15;M.addEventListener("submit",q);async function q(t){if(t.preventDefault(),c=g.value.trim(),n=1,d.innerHTML="",c===""){a.error({message:"The field can not be empty!",messageColor:" #fff",backgroundColor:"#ef4040",position:"bottomRight",messageSize:"16px",messageLineHeight:"100%",iconColor:"white",title:"Attention"}),l();return}P(),E();try{const e=await p(c,n,m),r=e.totalHits;if(e.hits.length===0){d.innerHTML="",a.info({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:" #fff",backgroundColor:"#ef4040",position:"bottomRight",messageSize:"16px",messageLineHeight:"100%",iconColor:"white",title:"Info"}),l();return}else L(e.hits),g.value="",x();m*n>=r&&(l(),b())}catch(e){console.error("Error:",e),a.error({message:"Failed to fetch images. Please try again later.",messageColor:" #fff",backgroundColor:"#ef4040",position:"bottomRight",messageSize:"16px",messageLineHeight:"100%",iconColor:"white",title:"Error"})}finally{h()}}f.addEventListener("click",async()=>{try{let r=function(){const i=document.querySelector(".gallery a");if(i){const o=i.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}};f&&(n+=1);const t=await p(c,n,m),e=t.totalHits;L(t.hits),E(),m*n>=e&&(l(),b()),r()}catch(t){console.error("Error fetching more images:",t),a.error({title:"Error",message:`Error fetching more images: ${t}`})}finally{h()}});function E(){w.classList.remove("hidden")}function h(){w.classList.add("hidden")}function x(){f.style.display="block"}function l(){f.style.display="none"}function P(){const t=document.querySelector(".end-message");t&&t.remove()}
//# sourceMappingURL=commonHelpers.js.map
