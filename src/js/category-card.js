console.log('category-card');
import { getDataBooks } from './Api/uBooksApi';
/* Hardcover Nonfiction */
/* const params = {
  category: 'Hardcover Nonfiction',
}; */
//aсинхронна функція чекає на відповідь з сервера
export const getCategoryData = async params => {
  //run loading написати загрузку

  // чекаємо на дані
  /* const topBooks = await getTopBooks(); */
  const categoryBooks = await getDataBooks('category', params);
  // малюємо дані на сторінці
  console.log(categoryBooks);
  /* renderTopBooks(topBooks); */
};
/* call this function */
/* getCategoryData({ category: 'Hardcover Nonfiction' }); */
