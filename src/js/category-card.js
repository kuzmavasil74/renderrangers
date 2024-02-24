console.log('category-card');
import { getDataBooks } from './Api/uBooksApi';
import renderMarkup from './helpers/renderMarkup';
import { refs } from './refs';

//aсинхронна функція чекає на відповідь з сервера
export const getCategoryBooks = async params => {
  //run loading написати загрузку

  // чекаємо на дані
  const categoryBooks = await getDataBooks('category', params);
  // малюємо дані на сторінці
  console.log(categoryBooks);
  refs.categoryCardElem.insertAdjacentHTML(
    'beforebegin',
    booksCategoryTemplate(categoryBooks[0].list_name)
  );

  renderMarkup(booksTemplate, refs.categoryCardElem, categoryBooks);
};

// створення розмітки категорій книг
function booksCategoryTemplate(catTitle) {
  return `
      <h2 class="category-card-title">${catTitle}</h2>
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
/* call this function */
/* getCategoryBooks({ category: 'Hardcover Nonfiction' }); */
