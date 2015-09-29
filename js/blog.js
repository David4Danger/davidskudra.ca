$(document).ready(function($) {

   var posts = $('.post');
   
   function BringInPosts(){
           for (post in posts) {
               $(post).slideUp('fast');
            }
   };
   
   BringInPosts();
});