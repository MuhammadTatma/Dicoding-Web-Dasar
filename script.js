const burger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const linksHref = document.querySelectorAll(".links li a")
burger.addEventListener("click", ()=>{
    links.classList.toggle("show-links")
    
})

linksHref.forEach((a)=>{
    a.addEventListener("click", ()=>{
        links.classList.toggle("show-links")
    })
})