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
   $('.slider2').slick({
      adaptiveHeight:true,
      slidesToShow:3,
      slidesToScroll:1,
      easing:'linear',
      infinite:true,
      autoplay:true,
      autoplaySpeed:6000,
      speed:1000,
      pauseOnFocus:true,
      pauseOnHover:true,
      draggable:false,
      responsive:[
         {
         breakpoint:849,
         settings:{
            slidesToShow:2,
         }
         },
         {
            breakpoint:666,
            settings:{
               slidesToShow:1,
               
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

$(document).ready(function() {
   $('.menu-footer__title_1,.menu-footer__arrow_1').click(function(event) {
      $('.sub-menu-footer__list_1,.menu-footer__arrow_1').toggleClass('active1');
   });
});
$(document).ready(function() {
   $('.menu-footer__title_2,.menu-footer__arrow_2').click(function(event) {
      $('.sub-menu-footer__list_2,.menu-footer__arrow_2').toggleClass('active1');
   });
});

$(document).ready(function() {
   $('.menu-footer__title_3,.menu-footer__arrow_3').click(function(event) {
      $('.sub-menu-footer__list_3,.menu-footer__arrow_3').toggleClass('active1');
   });
});

$(document).ready(function() {
   $('.menu-footer__title_4 ,.menu-footer__arrow_4').click(function(event) {
      $('.sub-menu-footer__list_4,.menu-footer__arrow_4').toggleClass('active1');
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