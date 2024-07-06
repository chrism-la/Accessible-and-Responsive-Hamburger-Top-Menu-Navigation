const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');

function setupTopNav(e) {
    if (e.matches) {
        //  is mobile
        console.log('is mobile');
    } else {
        // is tablet or desktop
        console.log('is desktop');
    }
}

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
