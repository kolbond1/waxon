$(document).ready(function(){
   $('.slider').slick({
      dots:true,
      adaptiveHeight:true,
      slidesToShow:1,
      speed:1000,
      autoplay:true,
      autoplaySpeed:3500,
      draggable:false, 
      swipe:false,
      responsive:[
         {
            breakpoint: 768,
            settings:{
               arrows:false
            }
         }
      ]
   });
});



$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

