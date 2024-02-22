console.log('category-card');
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
};
getTopBooksData();
