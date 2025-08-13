const navBtn = document.getElementById("nav-btn");
const closeNav = document.getElementById("close-nav");
const navMenu = document.querySelector(".nav-list");

navBtn?.addEventListener("click",(e)=>{
    e.preventDefault();
    navMenu.classList.add("active");
})
closeNav?.addEventListener("click",(e)=>{
    e.preventDefault();
    navMenu.classList.remove("active");
})

const preloader = document.getElementById("preloader");
setTimeout(()=>{
    preloader.classList.add("hide");
},1000)

// LENIS

// Initialize Lenis with smooth scroll options
const lenis = new Lenis({
    smooth: true,              // Enables smooth scrolling
    duration: 1,             // Adjusts scroll duration (higher = slower, smoother scroll)
    easing: (t) => t * (2 - t) // Ease-in-out effect (you can adjust this easing function for different effects)
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });
  
  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

//   fancybox

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  
  

