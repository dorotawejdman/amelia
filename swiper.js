const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  centeredSlides: true,
  slidesPerView: 5,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperShowcase = new Swiper(".swiper-showcase", {
  // Optional parameters
  //   direction: "horizontal",
  //   slidesPerView: 1,
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 30,
  effect: "fade",
  // Autoplay
  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
