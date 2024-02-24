// Прокручує контейнер вгору чи вниз на основі класу перемикання.
// @param {HTMLElement} btnRefs - Елемент кнопки, який викликає прокрутку.
// @param {HTMLElement} containerRefs - Елемент контейнера, який потрібно прокрутити.
// @param {string} toggleClass - Клас, який використовується для перемикання поведінки прокрутки.

export default function scrollContainer(btnRefs, containerRefs, toggleClass) {
  // Перемикає вказаний клас на елементі кнопки
  btnRefs.classList.toggle(toggleClass);

  // Перевіряє, чи присутній клас перемикання
  if (btnRefs.classList.contains(toggleClass)) {
    // Якщо клас перемикання присутній, прокручує контейнер до кінця
    containerRefs.scrollTop = containerRefs.scrollHeight;
  } else {
    // Якщо клас перемикання не присутній, прокручує контейнер до початку
    containerRefs.scrollTop = 0;
  }
}
