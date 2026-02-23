function copyCode(){
navigator.clipboard.writeText("snh20");
alert("Copied: snh20");
}

function toggleMenu(){
let menu=document.getElementById("menu");
menu.style.display=menu.style.display==="flex"?"none":"flex";
}

document.querySelectorAll(".faq-btn").forEach(btn=>{
btn.addEventListener("click",()=>{
let content=btn.nextElementSibling;
let symbol=btn.querySelector("span");
if(content.style.maxHeight){
content.style.maxHeight=null;
symbol.textContent="+";
}else{
content.style.maxHeight=content.scrollHeight+"px";
symbol.textContent="-";
}
});
});

function setLang(lang){
document.documentElement.lang = lang;
document.querySelectorAll("[data-en]").forEach(el=>{
let text = el.getAttribute("data-"+lang);
if(text) el.innerText = text;
});
localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", ()=>{
let saved = localStorage.getItem("lang");
if(saved) setLang(saved);
});