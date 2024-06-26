searchForm = document.querySelector('.search-form');

document.querySelector('#search-button').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-button').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-button').onclick = () =>{
    loginForm.classList.remove('active');
}

let registerForm = document.querySelector('.register-form-container');

document.querySelector('#create-account').onclick = () =>{
    registerForm.classList.toggle('active');
}

document.querySelector('#close-register-button').onclick = () =>{
    registerForm.classList.remove('active');
}




var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('.fa-shopping-cart').onclick = () =>{
    shoppingCart.classList.add('active');
}

document.querySelector('.close-cart-button').onclick = () =>{
    shoppingCart.classList.remove('active');
}

let favoriteBooks = document.querySelector('.favorite-books');

document.querySelector('.fa-heart').onclick = () =>{
    favoriteBooks.classList.add('active');
}

document.querySelector('.close-favorites-button').onclick = () =>{
    favoriteBooks.classList.remove('active');
}