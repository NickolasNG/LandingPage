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
