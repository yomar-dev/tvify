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
})