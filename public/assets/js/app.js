$("#owner-submit").on('click', function() {
	$.ajax({
		url:queryURL,
		method:"GET"
	}).done(function(response) {
		console.log(response);
	})
})