// Імпортує 'refs' об'єкт з файлу './refs'
import { refs } from './refs';

// Деструктуризація для отримання 'scrollToTopBtn' з 'refs'
const { scrollToTopBtn } = refs;

// Додає обробник подій до 'scrollToTopBtn' при кліці
scrollToTopBtn.addEventListener('click', topFunction);

// Встановлює обробник подій прокрутки на вікні
window.onscroll = function () {
  // Функція зворотного виклику для обробки події прокрутки
  scrollFunction();
};

// Функція зворотного виклику для обробки події прокрутки
function scrollFunction() {
  // Перевіряє позицію прокрутки, щоб визначити, чи відображати кнопку чи ні
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Якщо прокручено більше 20px, відображає 'scrollToTopBtn'
    scrollToTopBtn.style.display = 'block';
  } else {
    // Якщо не прокручено достатньо, приховує 'scrollToTopBtn'
    scrollToTopBtn.style.display = 'none';
  }
}

// Функція для прокручування до верху документу при кліці на кнопку
function topFunction() {
  // Для Safari
  document.body.scrollTop = 0;
  // Для Chrome, Firefox, IE і Opera
  document.documentElement.scrollTop = 0;
}
