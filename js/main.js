AOS.init();
var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "project-bullet",
    bulletActiveClass: "project-bullet-active",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});
