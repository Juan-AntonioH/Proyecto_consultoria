function luis(){
  console.log("hola")
}

$(function() {
  $('.center').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5300,
    dots: false,
    centerModel: true,
    centerPadding: '60px',
    responsive: [{
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 5300,
          dots: false,
          centerModel: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 5300,
          dots: false,
          centerModel: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 5300,
          dots: false,
          centerModel: true,
          centerPadding: '60px',
        }
      }
    ]
  });
  $('.slick-dots li:nth-child(-n+3) button').addClass('.slick-active button:before');
});
