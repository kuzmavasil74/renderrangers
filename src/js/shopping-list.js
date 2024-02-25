import LS from './helpers/localStorageHelper';
import renderMarkup from './helpers/renderMarkup';

import { getDataBooks } from './Api/uBooksApi';
import { refs } from './refs';
LS.remove('cart1');
//aсинхронна функція чекає на відповідь з сервера
export const getCategoryBooks = async () => {
  //run loading написати загрузку

  // чекаємо на дані
  const book = await getDataBooks('643282b1e85766588626a0b2');
  // малюємо дані на сторінці
  const books = [];
  books.push(book);
  LS.set('cart', books);

  /*   refs.categoryCardElem.insertAdjacentHTML(
    'beforebegin',
    booksCategoryTemplate(categoryBooks[0].list_name)
  );
  renderMarkup(booksTemplate, refs.categoryCardElem, categoryBooks); */
};
getCategoryBooks();
/* LS.set(key, value);
LS.get(key);
 cart*/

if (LS.has('cart')) {
  const localstorageItem = LS.get('cart');
  console.log(localstorageItem[0]);
  renderMarkup(templateList, refs.shoppingListMain, LS.get('cart'));
} else {
  renderMarkup(templateEmpty);
}
function templateEmpty(book) {
  console.log(book);
  return `<section class="shopping-list">
        <h1 class="shopping-list-text">
          Shopping <span class="shopping-list-span">List</span>
        </h1>
        <div class="shopping-list-container">
          <p class="shopping-list-container-text">
            This page is empty, add some books <br />
            and proceed to order.
          </p>
        </div>
      </section>`;
}

function templateList(book) {
  console.log(book);
  return `<section class="shopping-list">
        <h2 class="shopping-list-text">
          Shopping <span class="shopping-list-span">List</span>
        </h2>
        <div class="shopping-list-container">
        <ul class="shopping-list">
  <li class="shopping-item">
    <img class="shopping-img" src="${book_image}" alt="${title}" width="100" height="142" />
    <svg class="header-logo-icon-bookshelf" width="12" height="12">
      <use href="./img/icons/icons.svg#icon-bookshelf"></use>
    </svg>
    <h2 class="shopping-item-title">${title}</h2>
    <p class="shopping-category-title">${list_name}</p>
    <p class="shopping-desc"></p>
    <p class="shopping-autor"></p>
    <ul class="shopping-shop-list">
      <li class="shopping-shop-item">
        <a class="shopping-shop-link" href="">
          <svg class="header-logo-icon-bookshelf" width="77" height="14">
            <use href="./img/icons/icons.svg#icon-amazon"></use>
          </svg>
        </a>
        <a class="shopping-shop-link" href="">
          <svg class="header-logo-icon-bookshelf" width="77" height="14">
            <use href="./img/icons/icons.svg#icon-amazon"></use>
          </svg>
        </a>
      </li>
    </ul>
  </li>
</ul>
        </div>
      </section>`;
}
