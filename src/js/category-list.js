import { refs } from './refs';
import { getDataBooks } from './Api/uBooksApi';
import { getCategoryBooks } from './category-card';
import { getTopBooksData } from './top-sellers';

refs.categoryListElem.addEventListener('click', selectedCategory);

function selectedCategory(e) {
  if (e.target.nodeName !== 'BUTTON' || e.target.classList.contains('active')) {
    return; // користувач клікнув між кнопками
  }
  refs.categoryListElem.querySelector('.active').classList.remove('active');
  const categoryName = e.target;
  categoryName.classList.add('active');
  if (categoryName.textContent === 'ALL CATEGORIES') {
    // create function where using method foreach remove active
    //then add class active for button
    //use localstorage for saving active item
    getTopBooksData();
  } else {
    getCategoryBooks({ category: categoryName.textContent });
  }
}
function categoryTemplate({ list_name, classButton = '' }) {
  return `<li class="category-list">
      <button class="category-button ${classButton}" type="button">${list_name}</button>
    </li>`;
}
function categoriesTemplate(categoryList) {
  return categoryList.map(categoryTemplate).join('');
}
function renderCategories(categoryList) {
  const markup = categoriesTemplate(categoryList);

  refs.categoryListElem.insertAdjacentHTML('beforeend', markup);
}

//aсинхронна функція чекає на відповідь з сервера
const getData = async () => {
  //run loading написати загрузку

  // чекаємо на дані
  const cat = await getDataBooks('category-list');
  cat.unshift({ list_name: 'ALL CATEGORIES', classButton: 'active' });
  // малюємо дані на сторінці
  renderCategories(cat);
};
getData();
