export default function renderMarkup(template, data) {
  return data.map(template).join('');
}
