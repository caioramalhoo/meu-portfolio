const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.cabecalho');


ativaMenu.addEventListener('click', ()=> {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('active')
})