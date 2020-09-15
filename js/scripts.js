$(function () {
   $('.mini-menu').click(function(){
      if ($('nav ul').css('display') == 'none') {
         $('nav ul').slideDown();
      } else {
         $('nav ul').slideUp();
      }

      
   });
});