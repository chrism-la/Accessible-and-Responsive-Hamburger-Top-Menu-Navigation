const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');

function setupTopNav(e) {
    if (e.matches) {
        //  is mobile
        console.log('is mobile');
        topNavMenu.setAttribute('inert', '');
    } else {
        // is tablet or desktop
        console.log('is desktop');
        topNavMenu.removeAttribute('inert');
    }
}

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
}

setupTopNav(media);
btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
    setupTopNav(e);
});
