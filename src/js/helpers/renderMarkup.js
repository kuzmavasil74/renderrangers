/* function categoryTemplate(template) {
  return `<li class="category-list">
      <button class="category-button" type="button">${list_name}</button>
    </li>`;
} */
function mapTemplate(template, data) {
  return data.map(template).join('');
}
export default function renderMarkup(template, element, data) {
  const markup = mapTemplate(template, data);
  if (element === null) {
    return markup;
  } else {
    element.insertAdjacentHTML('beforeend', markup);
  }
}
