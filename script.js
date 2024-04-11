let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};

document.querySelectorAll('.nav').forEach(el => {
    el.addEventListener('click', function(){
    navbar.classList.toggle('open')
    menu.classList.toggle('bx-x')
    })
})

const sr=ScrollReveal({
    distance:'40px',
    duration:2500,
    reset:true
});
sr.reveal('.home-text span',{delay:600, origin: 'top'});
sr.reveal('.home-text h1',{delay:680, origin: 'left'});
sr.reveal('.main-btn',{delay:860, origin: 'left'});
sr.reveal('.home-img',{delay:1000, origin: 'right'});
/*sticky navbar*/
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

