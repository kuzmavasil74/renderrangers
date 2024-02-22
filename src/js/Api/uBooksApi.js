import axios from 'axios';

const baseUrl = 'https://books-backend.p.goit.global/books/';

export async function getDataBooks(endPoint, paramsRequest) {
  try {
    const response = await axios.get(baseUrl + endPoint, {
      params: paramsRequest,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
/* Hardcover Nonfiction */
/* const par = {
  category: 'Hardcover Nonfiction',
};
getDataBooks('category', par); */
