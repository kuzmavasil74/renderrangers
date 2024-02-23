console.log('Top book');
import { getDataBooks } from './Api/uBooksApi';
//aсинхронна функція чекає на відповідь з сервера
const getTopBooksData = async () => {
  //run loading написати загрузку

  // чекаємо на дані
  /* const topBooks = await getTopBooks(); */
  const topBooks = await getDataBooks('top-books');
  // малюємо дані на сторінці
  console.log(topBooks);
  /* renderTopBooks(topBooks); */
booksList.innerHTML = createMarkUp(topBooks)

};
getTopBooksData();

const booksList = document.getElementById('books-list');

// markup

function createMarkUp(results) {
  const markUp = results.map(
    ({ list_name, books: { book_image, title, author, _id } }) => 
      `<li class="sellers-category">
        <h2 class="sellers-category-title">${list_name}</h2>
        <ul class="sellers-category-list">
            <li class="sellers-item" data-id="${_id}">
                <img class="book-image" src="${book_image}" alt="${title}">
                <h3 class="book-title">${title}</h3>
                <p class="book-author">${author}</p>
            </li>
            <li class="sellers-item" data-id="${_id}">
                <img class="book-image" src="${book_image}" alt="${title}">
                <h3 class="book-title">${title}</h3>
                <p class="book-author">${author}</p>
            </li>
            <li class="sellers-item" data-id="${_id}">
                <img class="book-image" src="${book_image}" alt="${title}">
                <h3 class="book-title">${title}</h3>
                <p class="book-author">${author}</p>
            </li>
            <li class="sellers-item" data-id="${_id}">
                <img class="book-image" src="${book_image}" alt="${title}">
                <h3 class="book-title">${title}</h3>
                <p class="book-author">${author}</p>
            </li>
            <li class="sellers-item" data-id="${_id}">
                <img class="book-image" src="${book_image}" alt="${title}">
                <h3 class="book-title">${title}</h3>
                <p class="book-author">${author}</p>
            </li>
        </ul>
      </li>`
  ).join('');
  console.log(markUp)
  return markUp;
}
