

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

