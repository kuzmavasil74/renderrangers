document.addEventListener('DOMContentLoaded', function () {
    const checkboxInput = document.querySelector('.checkbox-input');
    const body = document.body;

    checkboxInput.addEventListener('change', function () {
        if (checkboxInput.checked) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     const burgerMenuBtn = document.querySelector('.burger-menu-btn');
//     const closeMenuBtn = document.querySelector('.close-menu-btn');
//     const headerNav = document.querySelector('.header-nav');

//     burgerMenuBtn.addEventListener('click', function () {
//         burgerMenuBtn.classList.add('is-hidden');
//         closeMenuBtn.classList.remove('is-hidden');

//         headerNav.style.display = 'flex';
//     });

//     closeMenuBtn.addEventListener('click', function () {
//         burgerMenuBtn.classList.remove('is-hidden');
//         closeMenuBtn.classList.add('is-hidden');

//         headerNav.style.display = 'none';
//     });
// });





