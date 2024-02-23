import { supportList } from '../db/supportList';
import renderMarkup from './helpers/renderMarkup';
import scrollContainer from './helpers/scrollSection';
import { refs } from './refs';
// handle button click
refs.scrollBtn.addEventListener('click', () =>
  scrollContainer(refs.scrollBtn, refs.supportList, 'isDown')
);
// малюємо дані на сторінці
renderMarkup(supportTemplate, refs.supportList, supportList);
function supportTemplate(item) {
  //що там в item
  const { title, url, img } = item;
  return `
    <li class="support-item">
      <a
        class="support-link"
        target="_blank"
        rel="noopener noreferrer"
        arial-label="${title}"
        href="${url}"
      >
        <img class="support-img" src="./img/support/${img}.png" alt="${title}" />
      </a>
    </li>`;
}
