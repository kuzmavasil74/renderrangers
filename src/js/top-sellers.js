console.log('Top book');
import { getDataBooks } from './Api/uBooksApi';

const booksList = document.getElementById('books-list');

//aсинхронна функція чекає на відповідь з сервера
const getTopBooksData = async () => {
  //run loading написати загрузку

  // чекаємо на дані
  /* const topBooks = await getTopBooks(); */
  const topBooks = await getDataBooks('top-books');
  // малюємо дані на сторінці
  console.log(topBooks);
  /* renderTopBooks(topBooks); */
  const randomBooks = getRandomBooks(topBooks, 4); // Вибираємо 4 випадкові книги
  renderTopBooks(randomBooks);
};

getTopBooksData();


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

// рендер сторінки

function renderTopBooks(topBooks) {
  const fragment = createMarkUp(topBooks);
  booksList.innerHTML = ''; // Очищення вмісту перед додаванням нового
  booksList.appendChild(fragment); // Додавання фрагменту до DOM
}

// створення розмітки категорій книг

function createMarkUp(results) {
  const fragment = document.createDocumentFragment();

  results.forEach(({ list_name, books }) => {
    const li = document.createElement('li');
    li.className = 'sellers-category';
    li.innerHTML = `
      <h2 class="sellers-category-title">${list_name}</h2>
      <ul class="sellers-category-list">
        ${generateListItems(books)}
      </ul>
    `;
    fragment.appendChild(li);
  });

  return fragment;
}

// створення розмітки однієї книги

function generateListItems(books) {
  let items = '';

  books.forEach(({ book_image, title, author, _id }) => {
    items += `
      <li class="sellers-item" data-id="${_id}">
        <img class="book-image" src="${book_image}" alt="${title}">
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </li>
    `;
  });

  return items;
}
