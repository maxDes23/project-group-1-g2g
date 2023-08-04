const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.indicaror',
  },


  grabCursor: true,
  spaceBetween: 0,

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