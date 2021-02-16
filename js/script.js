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


$(window).scroll(function(){
   if ($(window).scrollTop() > 2) {
      $('.header').addClass('_scroll');
   }
   else {
      $('.header').removeClass('_scroll')
   }
});


$(document).ready(function(){
   $('.tabs-triggers__item').click(function(e){
      e.preventDefault();

      $('.tabs-triggers__item').removeClass('active');
      $('.tabs-content__item').removeClass('active');

      $(this).addClass('active');
      $($(this).attr('href')).addClass('active');
   });

   $('.tabs-triggers__item:first').click();
});