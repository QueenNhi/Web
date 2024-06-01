

let navLinks = document.querySelector('.navLinks');
let menuBtn = document.querySelector('#menuBtn');
let closeBtn = document.querySelector('#closeBtn');

menuBtn.onclick = () => {
    navLinks.classList.add('active');
}

closeBtn.onclick = () => {
    navLinks.classList.remove('active');
}

var swiper = new Swiper(".mySwiper" , {

    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    breakpoints: {
        600: {
            slidesPerView:2,
            spaceBetween:20,
        },
        768: {
            slidesPerView:3,
            spaceBetween:40,
        },
        1024: {
            slidesPerView:4,
            spaceBetween:50,
        },
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prew",
    },



});