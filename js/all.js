$(document).ready(function() {
    $('.IM-carousel-control').on('mouseleave', function(event) {
      event.preventDefault();
      $(this).css('opacity',"0.5");
    });

    $('.IM-carousel-control').on('mouseenter', function(event) {
      event.preventDefault();
      $(this).css('opacity',"1");
    });
});
