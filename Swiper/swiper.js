const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  centeredSlides: true,
  slidesPerView: 3,
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

  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
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
  updateOnWindowResize: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
