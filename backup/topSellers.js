import { getDataBooks } from './Api/uBooksApi';
import renderMarkup from './helpers/renderMarkup';
//aсинхронна функція чекає на відповідь з сервера
const getTopBooksData = async () => {
  //run loading написати загрузку
  // чекаємо на дані
  const topBooks = await getDataBooks('top-books');
  const randomBooks = getRandomBooks(topBooks, 4); // вибираємо 4 випадкові книги
  // малюємо дані на сторінці
  renderMarkup(
    booksCategoryTemplate,
    document.querySelector('.sellers-list'),
    randomBooks
  );
};

//  функція для рандому
function getRandomBooks(books, count) {
  const randomIndexes = [];

  while (randomIndexes.length < count) {
    const randomIndex = Math.floor(Math.random() * books.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  return randomIndexes.map(index => books[index]);
}

// створення розмітки категорій книг
function booksCategoryTemplate({ list_name, books }) {
  return `
      <li class="sellers-category">
      <h2 class="sellers-category-title">${list_name}</h2>
      <ul class="sellers-category-list">
        ${renderMarkup(booksTemplate, null, books)}
      </ul>
      </li>
    `;
}
// створення розмітки однієї книги
function booksTemplate({ book_image, title, author, _id }) {
  return `
      <li class="sellers-item" data-id="${_id}">
        <img class="book-image"
        src="${book_image}"
        alt="${title}"
        width="335"
        height="485">
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </li>
    `;
}

getTopBooksData();
