$(function(){
    
  $('.top-btm').click(function(){

    $('body,html').animate({scrollTop:0},1000);

});
// Smoth Scroll

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 250){
      $('.top-btm').fadeIn(500);
  }
  else {
      $('.top-btm').fadeOut(500);
  }

  // for navBar background

  if(scrolling>500){

      $('.navbar').addClass('nav-new');

  }else{
      
      $('.navbar').removeClass('nav-new');

  }
  

});






// Slider Banner

$('.banner-slck').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed:800,
    arrows:false,
    speed:800,
    dots:true,

  });

   // lightbox
   $('.venobox').venobox(); 

//Team Slider
   $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1000,
    arrows:false,
    speed:800,
    dots:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3
        }
      },
    ]
  });

  //Revew Slider
   $('.testo-content').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed:1000,
    arrows:false,
    speed:800,
    dots:true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      },
      
    ]
  });

  //Sponser Slider
   $('.slick-sponser').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed:1000,
    arrows:true,
    speed:800,
    dots:false,
    prevArrow:'.left',
    nextArrow:'.right',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
    ]
  });


  //Smoth Scroll 
var html_body = $('html, body');
$('.nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 50
            }, 1500);
            return false;
        }
    }
});




})