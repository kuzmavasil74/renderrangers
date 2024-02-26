console.log('category-card');
import { getDataBooks } from './Api/uBooksApi';
import renderMarkup from './helpers/renderMarkup';
import { refs } from './refs';

// Function to fetch and display category books
export const getCategoryBooks = async params => {
  // Clear the container before inserting new category data
  refs.categoryCardElem.innerHTML = '';
  refs.topSellerSection.innerHTML = '';
  try {
    // Fetch category books data from the server
    const categoryBooks = await getDataBooks('category', params);

    // Remove existing category title if it exists
    const existingCategoryTitle = refs.categoryCardElem.querySelector(
      '.category-card-title'
    );
    if (existingCategoryTitle) {
      existingCategoryTitle.remove();
    }

    // Insert the category name on the page
    const categoryName = categoryBooks[0].list_name;

    document.querySelectorAll('.category-card-title').forEach(element => {
      element.remove();
    });

    refs.categoryCardElem.insertAdjacentHTML(
      'afterbegin',
      booksCategoryTemplate(categoryName)
    );

    // Insert the list of books on the page
    renderMarkup(booksTemplate, refs.categoryCardElem, categoryBooks);
  } catch (error) {
    console.error('Error fetching category books:', error);
  }
};

// Function to create markup for the category name
function booksCategoryTemplate(catTitle) {
  return `
      <h2 class="category-card-title">${catTitle}</h2>
    `;
}

// Function to create markup for a single book
function booksTemplate({ book_image, title, author, _id }) {
  return `
      <li class="card-book-item" data-id="${_id}">
        <img class="card-book-image"
        src="${book_image}"
        alt="${title}"
        >
        <h3 class="card-book-title">${title}</h3>
        <p class="card-book-author">${author}</p>
      </li>
    `;
}
