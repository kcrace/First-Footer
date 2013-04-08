// this loads everything first
$(document).ready(function(){ 

// this says 'when something is clicked, do the following'
	$('.tabby').click(function(){
		// remove the active from the other class
		$('.tabby').removeClass('active');
		// and make the one clicked active
		$(this).addClass('active');


		// make a variable for the id attribute u click
		var id = $(this).attr('id');

		// and remove the active class from other and make the class clicked active
		$('.stats').removeClass('active');
		$('.' + id).addClass('active');
	})


})