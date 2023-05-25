$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() < 1200) {
      startCarousel();
    } else {
      stopCarousel();
    }
  });
});

function startCarousel() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      320: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
        autoplay: false,
      },
    },
  });
}
function stopCarousel() {
  $(".owl-carousel").trigger("destroy.owl.carousel");
}
