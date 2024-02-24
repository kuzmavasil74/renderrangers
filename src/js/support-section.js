import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

import { supportList } from '../db/supportList';
import { refs } from './refs';

// 1. appending list items to the support list
renderSupportList(supportList);

function renderSupportList(supportList) {
  const listItems = supportList.map(createSupportItem);
  refs.supportList.append(...listItems);
}

function createSupportItem(item, index) {
  // example index = 0
  // example index = 1
  // example index = 2
  // example: item =  {
  //   title: 'Save the Children',
  //   url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
  //   img: 'stc',
  // },

  //що там в item
  const { title, url, img } = item;
  //create li
  const li = document.createElement('li');
  li.classList.add('swiper-slide');
  // create a
  const a = document.createElement('a');
  a.classList.add('support-link');
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.ariaLabel = title;
  a.href = url;
  // create count
  const span = document.createElement('span');
  span.classList.add('support-count');
  span.textContent = `0${index + 1}`;
  // create img
  const imgEl = document.createElement('img');
  imgEl.classList.add('support-img');
  imgEl.src = `./img/support/${img}.png`;
  imgEl.alt = title;

  // add count and image in a
  a.append(span, imgEl);
  // add a in li
  li.append(a);
  // return li
  return li;
}

// 2. Setting up swiper
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const swiper = new Swiper('.support-swiper', {
  direction: 'vertical',
  slidesPerView: 6,
  slidesPerGroup: 6,
  // can be true but will turn button into disable
  // can be avoided by changing html button to div/span
  allowTouchMove: false,
  spaceBetween: '20px',

  // configure Swiper to use modules
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
