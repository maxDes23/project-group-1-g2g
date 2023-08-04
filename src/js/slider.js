import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.comment-swiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  grabCursor: true,
  spaceBetween: 25,

  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

new Swiper('.yahts-cards', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next, .under-button-next',
    prevEl: '.swiper-button-prev, .under-button-prev',
  },

  spaceBetween: 16,

  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
