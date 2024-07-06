const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');

function setupTopNav(e) {
    if (e.matches) {
        //  is mobile
        console.log('is mobile');
        topNavMenu.setAttribute('inert', '');
        topNavMenu.style.transition = 'none';
    } else {
        // is tablet or desktop
        console.log('is desktop');
        topNavMenu.removeAttribute('inert');
    }
}

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');

    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500);
}

setupTopNav(media);
btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
    setupTopNav(e);
});
