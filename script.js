let listMenu = document.querySelector('.ulMenu');
const burgerMenu = document.querySelector('.burgerMenu');

function showNav() {
    listMenu.classList.toggle('navbarHidden');
};

burgerMenu.addEventListener('click', showNav);