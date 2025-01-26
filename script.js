
const current=document.querySelector("#current");
const imgs=document.querySelector(".imgs");
const img=document.querySelectorAll(".imgs img");
const opacity=0.6;
imgs.addEventListener("click",(event)=>{
    img.forEach((imgElem)=>{
        imgElem.style.opacity=1;
    })
    const clickedimgurl=event.target.src;
    current.src=clickedimgurl;
    current.classList.add("fade-In");
    setTimeout(()=>{
        current.classList.remove("fade-In");
    
    },600)
    event.target.style.opacity=opacity;
})
