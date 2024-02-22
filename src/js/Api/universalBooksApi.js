import axios from 'axios';

const baseUrl = 'https://books-backend.p.goit.global/book/';

export async function getCategoryList(endPoint, paramsRequest) {
  try {
    const response = await axios.get(baseUrl + endPoint, {
      params: paramsRequest,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
/* Hardcover Nonfiction */
const par = {
  category: 'Hardcover Nonfiction',
};
getCategoryList('category', par);
