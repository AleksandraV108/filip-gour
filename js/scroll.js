$(window).scroll(function ()
{
   var scrollTop = $(this).scrollTop();

   $('.bg-img').css({
      opacity: function ()
      {
         var elementHeight = $(this).height();
         var offset = $(this).offset().top - (elementHeight * 0.5);
         var opacity = ((elementHeight - scrollTop + offset) / elementHeight);
         if (opacity < 0.3)
         {
            opacity = 0.3;
         }
         return opacity;
      }
   });

});

$(window).scroll(function ()
{
   var scrollTop = $(this).scrollTop();
   console.log("scrollTop:" + scrollTop);
   $('.overlay-text').css({
      opacity: function ()
      {
         var elementHeight = $(this).height();
         var offset = $(this).offset().top - (elementHeight * 0.7);
         console.log("offset:" + offset);
         opacity = (1-(elementHeight - scrollTop + offset) / elementHeight);
         console.log("opacity:" + opacity);
         return opacity;
      }
   });
});

