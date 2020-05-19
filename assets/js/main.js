'use strict'

let btnNav = document.getElementById('menu-btn');

btnNav.addEventListener('click', function(){
    let sidebar = document.getElementById('nav-menu');
    sidebar.classList.toggle("show");
});

// ScrollReveal().reveal('.showcase');
// ScrollReveal().reveal('.news-container', {delay: 500});
// ScrollReveal().reveal('.cards-banner-one', {delay: 500});
// ScrollReveal().reveal('.cards-banner-two', {delay: 500});