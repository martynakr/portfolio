const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

const nav = document.querySelector(".nav")
const menuNav = document.querySelector(".menu-nav")

const menuLink = document.querySelector(".menu-link")
const menuLinkTwo = document.querySelector(".menu-link-two")
const menuLinkThree = document.querySelector(".menu-link-three")
const menuLinkFour = document.querySelector(".menu-link-four")

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
    
      showMenu = true;
    } else {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      menuNav.classList.remove('open');
  
      showMenu = false;
    }
  }