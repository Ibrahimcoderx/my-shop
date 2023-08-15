

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {

    240: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
    },
    
  },



});




// Google sheet

