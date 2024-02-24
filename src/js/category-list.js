import { refs } from './refs';
import { getDataBooks } from './Api/uBooksApi';
import renderMarkup from './helpers/renderMarkup';
import { getCategoryBooks } from './category-card';
import { getTopBooksData } from './top-sellers';

refs.categoryListElem.addEventListener('click', selectedCategory);

function selectedCategory(e) {
  if (e.target.nodeName !== 'BUTTON' || e.target.classList.contains('active')) {
    return; // користувач клікнув між кнопками
  }
  const listItem = e.target.parentElement;
  for (const li of refs.categoryListElem.children) {
    li.firstElementChild.classList.remove('active');
  }
  console.log('active');
  listItem.firstElementChild.classList.add('active');
  if (listItem.firstElementChild.textContent === 'ALL CATEGORIES') {
    // create function where using method foreach remove active
    //then add class active for button
    //use localstorage for saving active item

    getTopBooksData();
  } else {
    getCategoryBooks({ category: listItem.firstElementChild.textContent });
  }
}

//aсинхронна функція чекає на відповідь з сервера
const getData = async () => {
  //run loading написати загрузку
  // чекаємо на дані
  const cat = await getDataBooks('category-list');
  cat.unshift({ list_name: 'ALL CATEGORIES', classActive: 'active' });
  // малюємо дані на сторінці
  renderMarkup(categoryTemplate, refs.categoryListElem, cat);
};
getData();

function categoryTemplate({ list_name, classActive = '' }) {
  /*   let active = '';
  list_name === 'ALL CATEGORIES' ? (active = 'active') : (active = ''); */
  return `<li class="category-item">
  
      <button class="category-button ${classActive}" type="button">${list_name}</button>
    </li>`;
}
