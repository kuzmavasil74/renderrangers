import axios from 'axios';

const baseUrl = 'https://books-backend.p.goit.global/books/';

export async function getCategoryList() {
  try {
    const response = await axios.get(`${baseUrl}category-list`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getTopBooks() {
  try {
    const response = await axios.get(`${baseUrl}top-books`);
    console.log(response.data);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getCategory(category) {
  try {
    const response = await axios.get(`${baseUrl}category?category=${category}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getBookById(id) {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
/* how to use */
/* import { getCategoryList, getCategory } from './booksApi'; */
/* getCategoryList(); */
/* getTopBooks(); */
/* getBookById('643282b1e85766588626a0dc'); */
/* getCategory('Audio Fiction'); */
