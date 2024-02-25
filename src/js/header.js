const checkboxInput = document.querySelector('.checkbox-input');
const body = document.body;

checkboxInput.addEventListener('change', function () {
  if (checkboxInput.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'ldark-theme');
  }
});
window.onload = setActive;
function setActive() {
  body.classList.add(localStorage.getItem('theme'));
  const aObj = document.querySelector('.header-nav').getElementsByTagName('a');
  for (let i = 0; i < aObj.length; i++) {
    if (document.location.href.indexOf(aObj[i].href) >= 0) {
      aObj[i].classList.add('active');
      console.log(document.location.href);
    }
  }
}

/* const burgerMenuBtn = document.querySelector('.burger-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const headerNav = document.querySelector('.header-nav');

burgerMenuBtn.addEventListener('click', function () {
  burgerMenuBtn.classList.add('is-hidden');
  closeMenuBtn.classList.remove('is-hidden');

  headerNav.style.display = 'flex';
});

closeMenuBtn.addEventListener('click', function () {
  burgerMenuBtn.classList.remove('is-hidden');
  closeMenuBtn.classList.add('is-hidden');

  headerNav.style.display = 'none';
}); */
