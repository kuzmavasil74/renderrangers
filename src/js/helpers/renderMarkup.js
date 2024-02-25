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
