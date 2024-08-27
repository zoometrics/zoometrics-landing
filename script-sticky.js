window.addEventListener('scroll', function() {
    let nav = document.querySelector('.main-header');
    let logo = document.querySelector('.header-logo');
    let logoWhite = document.querySelector('.header-logo-white');
    let menuitems = document.querySelectorAll ('.nav-link');

    let scrollPosition = window.scrollY;

    if (scrollPosition >= 30) {
        nav.classList.add('header-sticky');
        logoWhite.style.display = 'flex';
        logo.style.display = 'none';
        
        menuitems.forEach((menuitem) => {
            menuitem.classList.add('sticky');
        });

        
    } else {
        nav.classList.remove('header-sticky');
        logoWhite.style.display = 'none';
        logo.style.display = 'flex';
        menuitems.forEach((menuitem) => {
            menuitem.classList.remove('sticky');
        });
    }

});
