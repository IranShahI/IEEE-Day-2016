// Typed.js
$(function(){
   $("#intro .typed span").typed({
      strings: ["مهندسان برق", "مهندسان الکترونیک", "مهندسان کامپیوتر", "مهندسان مخابرات", "دانشجویان برق", "دانشجویان الکترونیک", "دانشجویان کامپیوتر", "دانشجویان مخابرات", "اساتید دانشگاه", "همه‌", "همه‌ی دانشجویان", "دانشگاه آزاد تهران مرکزی"],
      typeSpeed: 80,
      backDelay: 1000,
      shuffle: true,
      loop: true,
   });
});

// Soft Scroll
$(function(){
   var pattern = /^(#)\w+/;

   $('a').on('click', function(event){
      $anchor = $(this).attr('href');
      if ( pattern.test($anchor) ) {
         $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top
         }, 1000, 'swing');
         event.preventDefault();
      }
   })

});


// Owl carousel
$(function(){
  $(".owl-carousel").owlCarousel({
     loop: true,
     rtl:true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items: 9
        }
    }
 });
});


// ATV Image
atvImg();

// countdown
$(function() {
   countdown(year,month,day,hour,minute)
})
