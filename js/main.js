$(document).ready(function($) {
  
   var thoughts = $('.thought');
   var thoughtind = -1;
  
   function showNextThought(){
           ++thoughtind;
           thoughts.eq(thoughtind % thoughts.length)
                    .fadeIn(2000)
                    .delay(1500)
                    .fadeOut(2500, showNextThought);
   }
   showNextThought();
  
}); 