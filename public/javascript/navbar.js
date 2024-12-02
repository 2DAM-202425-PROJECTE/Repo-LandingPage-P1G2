// JavaScript for toggling the mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu-2');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');

    // Toggle icon visibility
    iconOpen.classList.toggle('hidden', !isOpen);
    iconClose.classList.toggle('hidden', isOpen);
});

