let menuBar = document.querySelector('.fa-bars')
let menuClose = document.querySelector('.fa-times');
let navMenu = document.querySelector('.navbar');

menuBar.onclick=()=>{
    navMenu.classList.add('active');
}
menuClose.onclick=()=>{
    navMenu.classList.remove('active');
}
