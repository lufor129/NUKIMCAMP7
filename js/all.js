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

$(function(){
	$('.faq-content').hide();

	$('body').on('click', '.faq', function(){
		$('#activity-dialog-title').text($(this).find('.activity-title').text());
		$('#activity-dialog-body').html($(this).find('.activity-content').html());
	});
});