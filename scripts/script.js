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