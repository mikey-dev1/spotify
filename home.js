
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active')
}
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.remove('active')
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('myslides');
    if(n>slides.length) {
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i= 0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';

}