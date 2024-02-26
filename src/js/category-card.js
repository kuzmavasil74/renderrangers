console.log('category-card');
import { getDataBooks } from './Api/uBooksApi';
import renderMarkup from './helpers/renderMarkup';
import { refs } from './refs';

// Function to fetch and display category books
export const getCategoryBooks = async params => {
  // Clear the container before inserting new category data
  refs.mainContainer.innerHTML = '';
  try {
    // Fetch category books data from the server
    const categoryBooks = await getDataBooks('category', params);

    // Insert the category name on the page
    const categoryName = categoryBooks[0].list_name;

    refs.mainContainer.insertAdjacentHTML(
      'afterbegin',
      booksCategoryTemplate(categoryName, categoryBooks)
    );
  } catch (error) {
    console.error('Error fetching category books:', error);
  }
};

// Function to create markup for the category name
function booksCategoryTemplate(categoryName, categoryBooks) {
  console.log(categoryBooks);
  return `
  <section class="seller-section">
    <h1 class="section-title">${categoryName}</h1>
    <ul class="sellers-category-list flex-wrap">${renderMarkup(
      booksTemplate,
      null,
      categoryBooks
    )}</ul>
</section>
    `;
}

// Function to create markup for a single book
function booksTemplate({ book_image, title, author, _id }) {
  return `
      <li class="sellers-item" data-id="${_id}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${book_image}"
          alt="${title}"
          >
        </div>
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </li>
    `;
}
