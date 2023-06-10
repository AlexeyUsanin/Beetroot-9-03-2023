$(function () {
  $('#slider').slick({
    // autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    // prevArrow: $('#prev'),
    // nextArrow: $('#next'),
    dots: true

  })
})