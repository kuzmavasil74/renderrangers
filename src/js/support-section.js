import { supportList } from '../db/supportList';
import { refs } from './refs';
refs.scrollBtn.addEventListener('click', handleClickButton);
function handleClickButton() {
  refs.scrollBtn.classList.toggle('isDown');
  const divWrapper = refs.supportList.parentElement;
  if (refs.scrollBtn.classList.contains('isDown')) {
    divWrapper.scrollTop = divWrapper.scrollHeight;
  } else {
    divWrapper.scrollTop = 0;
  }
}
/* renderSupportList(supportList); */

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
function supportListTemplate(supportList) {
  return supportList.map(supportTemplate).join('');
}
function renderSupportList(supportList) {
  const markup = supportListTemplate(supportList);
  refs.supportList.insertAdjacentHTML('beforeend', markup);
}
