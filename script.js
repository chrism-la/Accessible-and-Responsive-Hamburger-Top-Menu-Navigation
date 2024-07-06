const btnOpen = document.querySelector('#btnOpen');

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
}

btnOpen.addEventListener('click', openMobileMenu);
