const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

const nav = document.querySelector(".nav")
const menuNav = document.querySelector(".menu-nav")
const bodFix = document.querySelector(".bod")

const menuLink = document.querySelector(".menu-link")
const menuLinkTwo = document.querySelector(".menu-link-two")
const menuLinkThree = document.querySelector(".menu-link-three")
const menuLinkFour = document.querySelector(".menu-link-four")

const navItems = document.querySelectorAll(".menu-nav__item")

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuLink.addEventListener("click", toggleMenu);
menuLinkTwo.addEventListener("click", toggleMenu);
menuLinkThree.addEventListener("click", toggleMenu);
menuLinkFour.addEventListener("click", toggleMenu);


function toggleMenu() {
    if(!showMenu) {
      hamburger.classList.add('open');
      nav.classList.add('open');
      menuNav.classList.add('open');
      bodFix.classList.add('open');
      navItems.forEach(item => item.classList.add("open"))
    
      showMenu = true;
    } else {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      menuNav.classList.remove('open');
      bodFix.classList.remove('open');
      navItems.forEach(item => item.classList.remove("open"))
  
      showMenu = false;
    }
  }



const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
    rootMargin: "0px 0px -150px 0px",
  };


const apperaOnScroll = new IntersectionObserver(function(entries, apperaOnScroll) {
entries.forEach(entry => {
  if(!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.add('appear');
    apperaOnScroll.unobserve(entry.target);
  }
})
}, 
appearOptions);

faders.forEach(fader => {
  apperaOnScroll.observe(fader)
})

sliders.forEach(slider => {
  apperaOnScroll.observe(slider);
})