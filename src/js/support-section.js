import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { supportList } from '../db/supportList';
import { refs } from './refs';

renderSupportList(supportList);

function renderSupportList(supportList) {
  const listItems = supportList.map(createSupportItem);
  refs.supportList.append(...listItems);
}

function createSupportItem(item, index) {
  //що там в item
  const { title, url, img, srcset } = item;

  const li = document.createElement('li');
  li.classList.add('swiper-slide');

  const a = document.createElement('a');
  a.classList.add('support-link');
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.ariaLabel = title;
  a.href = url;

  const span = document.createElement('span');
  span.classList.add('support-count');
  span.textContent = `0${index + 1}`;

  const imgEl = document.createElement('img');
  imgEl.classList.add('support-img');
  imgEl.src = `./img/support/${img}.png`;
  imgEl.srcset = `./img/support/${srcset}`;
  imgEl.alt = title;

  a.append(span, imgEl);

  li.append(a);
  return li;
}
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const swiper = new Swiper('.support-swiper', {
  direction: 'vertical',
  slidesPerView: 6,
  slidesPerGroup: 6,
  allowTouchMove: true,
  spaceBetween: '20px',

  modules: [Navigation],
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
    disabledClass: 'none',
  },
  on: {
    slideChange: function () {
      if (this.activeIndex === 0) {
        prevBtn.classList.add('swiper-button-hidden');
        nextBtn.classList.remove('swiper-button-hidden');
      } else {
        prevBtn.classList.remove('swiper-button-hidden');
        nextBtn.classList.add('swiper-button-hidden');
      }
    },
  },
});
