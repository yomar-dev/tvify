$(function(){
	/**
	 * Submit search form
	 */
	
	$('#app-body')
		.find('form')
		.submit(function(e){
			e.preventDefault();
			var busqueda = $(this).find('input[type="text"]').val();
		})

	var template = '<article class="tv-show">' +
					'<div class="left">' +
						'<img src=":img:" alt=":img alt:">' +
					'</div>'+

					'<div class="left info">' +
						'<h1>:name:</h1>' +
						'<p>:summary:</p>' +
					'</div>'+
				'</article>';

	$.ajax({
		url: 'http://api.tvmaze.com/shows',
		success: function(data, textStatus, xhr){
			console.log(data);
		}
	})
})