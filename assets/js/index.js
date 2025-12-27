const swiper = new Swiper('.s-creators-swiper', {
  initialSlide: 3, 
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: true,
  speed: 600,
  pagination: false,
  navigation: false,
  slideToClickedSlide: true,
  breakpoints: {
    1221: {
      spaceBetween: 30,
      autoplay: {
        enabled: false,
      },
      allowTouchMove: false,
      simulateTouch: false,
    },
  },
});

const swiper2 = new Swiper('.s-updates-swiper', {
  initialSlide: 3, 
  slidesPerView: 'auto',
  spaceBetween: 15,
  loop: true,
  speed: 800,
  pagination: false,
  navigation: false,
  breakpoints: {
    1025: {
      spaceBetween: 30,
      autoplay: {
        enabled: false,
      },
      allowTouchMove: false,
      simulateTouch: false,
    },
  },
});