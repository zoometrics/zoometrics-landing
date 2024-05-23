document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.header-nav');

    hamburger.addEventListener('click', function () {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
});