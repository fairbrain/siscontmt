const navBtn = document.getElementById("nav-btn");
const closeNav = document.getElementById("close-nav");
const navMenu = document.querySelector(".nav-list");

navBtn.addEventListener("click",()=>{
    navMenu.classList.add("active");
})
closeNav.addEventListener("click",()=>{
    navMenu.classList.remove("active");
})

