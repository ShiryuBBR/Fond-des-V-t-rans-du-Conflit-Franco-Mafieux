const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 16,

  slidesPerView: 1,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.pagination',
    clickable: true,
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.veteran-section__button.next',
    prevEl: '.veteran-section__button.prev',
  },
});
