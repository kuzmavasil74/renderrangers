import { getDataBooks } from './Api/uBooksApi';
import { getLoader } from './helpers/loader';
const booksList = document.getElementById('books-list');

// отримання даних з серверу
export const getTopBooksData = async () => {
  //run loading написати загрузку
  getLoader();
  try {
    const topBooks = await getDataBooks('top-books'); // запит на сервер
    const randomBooks = getRandomBooks(topBooks, 4); // вибираємо 4 випадкові книги
    renderTopBooks(randomBooks); // рендер розмітки
  } catch (err) {
    console.error(err);
  } finally {
    // ховаємо лоадер
  }
};

getTopBooksData();

//  функція для рандомного вибору 4 категорій з масиву книг
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
  booksList.innerHTML = ''; // очищення вмісту перед додаванням нового
  booksList.appendChild(fragment); // додавання фрагменту до DOM
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
      <button class="sellers-button" type="button">see more</button>
    `;
    fragment.appendChild(li);
  });

  return fragment;
}

// створення розмітки однієї книги
function generateListItems(books) {
  let items = '';
  const screenSize = getScreenSize(); // визначення розміру екрану
  const maxItems =
    screenSize === 'desktop' ? 5 : screenSize === 'tablet' ? 3 : 1; // визначення кількості айтемів

  for (let i = 0; i < maxItems && i < books.length; i++) {
    const { book_image, title, author, _id } = books[i];
    items += `
      <li class="sellers-item" data-id="${_id}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${book_image}"
          alt="${title}"
          >
        </div>
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </li>
    `;
  }

  return items;
}

// визначення розмірів екрану
function getScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return 'mobile';
  } else if (screenWidth < 1200) {
    return 'tablet';
  } else {
    return 'desktop';
  }
}

// визначення кількості елементів залежно від розміру екрану
function getBooksCountByScreenSize(screenSize) {
  switch (screenSize) {
    case 'mobile':
      return 1; // один елемент на мобільному
    case 'tablet':
      return 3; // три елементи на планшеті
    case 'desktop':
    default:
      return 5; // п'ять елементів на десктопі
  }
}
