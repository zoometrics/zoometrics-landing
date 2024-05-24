
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