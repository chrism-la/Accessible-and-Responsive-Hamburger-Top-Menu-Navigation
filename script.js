const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
