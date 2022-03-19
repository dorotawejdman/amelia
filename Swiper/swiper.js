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
  effect: "creative",

  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      opacity: 0,
    },
    next: {
      // will set `translateX(100%)` on next slides
      opacity: 1,
    },
  },
  // Autoplay
  autoplay: {
    delay: 4000,
  },
  updateOnWindowResize: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
