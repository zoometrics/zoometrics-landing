
/*Active navigation when checked hamburguer button*/
document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('menu_checkbox');
    let nav = document.querySelector('.header-nav');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});
// if the screen is resized, if the screen is bigger than 768px, the nav will be displayed
window.addEventListener('resize', function () {
    let checkbox = document.getElementById('menu_checkbox');
    let nav = document.querySelector('.header-nav');
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
        checkbox.checked = false;
    } else {
        nav.style.display = 'none';
    }
});