const menuHamburguer = document.querySelector('.menu-hamburguer');
const navMenu = document.querySelector('.nav-menu');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar o menu quando clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuHamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Variáveis para controlar o menu na rolagem/mouse
const header = document.querySelector('header');
let lastScrollY = window.scrollY;

header.classList.add('visible');

// Event listener para rolagem da página
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.remove('visible');
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
        header.classList.add('visible');
    }
    lastScrollY = window.scrollY;
});

// Event listener para movimento do mouse
let mouseMoveTimeout;
document.addEventListener('mousemove', (e) => {
    if (e.clientY < 100) {
        header.classList.remove('hidden');
        header.classList.add('visible');
        clearTimeout(mouseMoveTimeout);
    } else if (header.classList.contains('visible') && window.scrollY > 100) {
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
            header.classList.remove('visible');
            header.classList.add('hidden');
        }, 500);
    }
});
