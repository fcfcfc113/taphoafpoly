

    $('.header-content .menu-slider .slider .slides').slick({
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
     });

     $('.header-content .menu-slider .slider-product .list-slide-pro').slick({
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
   });

    $('.banner-best-sale').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

$(".slick-next").css("display","none");
$(".slick-prev").css("display","none");     
let buttonNext = document.getElementById("btn-prev");
let buttonPrev = document.getElementById("btn-next");

let buttonNextPlugin = document.getElementsByClassName("slick-prev");
buttonNext.addEventListener("click",function(){
$(".slick-next").trigger("click");
})
buttonPrev.addEventListener("click",function(){
  $(".slick-prev").trigger("click");
})


//slick-slider detail product

$('.img-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.img-detail-slider'
});
$('.img-detail-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.img-main',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

$(".color").click(function(){
  $(".color").prop( "checked", false );
  $(this).prop( "checked", true );
});



