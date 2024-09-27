/*
MENU REDES
*/
let menuToggle = document.querySelector(".menu-toggle");
let menuRedes = document.querySelector(".menu-redes");
menuToggle.onclick = function(){
    menuRedes.classList.toggle("activeColor");
};

window.addEventListener("scroll", function(){
    nav.classList.toggle("activeMenu",window.scrollY > 0);
});