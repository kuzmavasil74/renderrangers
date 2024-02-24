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





