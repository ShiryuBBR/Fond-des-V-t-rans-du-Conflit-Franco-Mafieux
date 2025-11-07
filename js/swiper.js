const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
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