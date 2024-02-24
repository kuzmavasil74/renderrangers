/**
 * Об'єкт-утиліта для взаємодії з локальним сховищем браузера.
 */
const LocalStorage = {
  /**
   * Визначає, чи підтримує браузер локальне сховище.
   *
   * @return {boolean}
   */
  isSupported() {
    return typeof Storage !== 'undefined';
  },

  /**
   * Перевіряє, чи існує ключ у локальному сховищі.
   *
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return localStorage.hasOwnProperty(key);
  },

  /**
   * Отримує значення з локального сховища за ключем.
   *
   * @param {string} key
   * @return {any}
   */
  get(key) {
    let item = localStorage.getItem(key);

    if (typeof item !== 'string') return item;

    if (item === 'undefined') return undefined;

    if (item === 'null') return null;

    // Перевірка для чисел і десяткових дробів
    if (/^'-?\d{1,}?\.?\d{1,}'$/.test(item)) return Number(item);

    // Перевірка для чисел у науковій нотації
    if (/^'-?\d{1}\.\d+e\+\d{2}'$/.test(item)) return Number(item);

    // Перевірка для серіалізованих об'єктів та масивів
    if (item[0] === '{' || item[0] === '[') return JSON.parse(item);

    return item;
  },

  /**
   * Зберігає значення в локальному сховищі за ключем.
   *
   * @param {string} key
   * @param {any} value
   * @return {void}
   */
  set(key, value) {
    if (typeof key !== 'string') {
      throw new TypeError(
        `localStorage: Ключ повинен бути рядком. (зчитування '${key}')`
      );
    }

    if (typeof value === 'object' || Array.isArray(value)) {
      value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);
  },

  /**
   * Видаляє елемент з локального сховища за ключем.
   *
   * @param {string} key
   * @return {void}
   */
  remove(key) {
    localStorage.removeItem(key);
  },
};

export default LocalStorage;
