$(document).ready(function() {
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

	// populate select list with options
	cities.forEach(function(city) {
		$('#city-type').append('<option value="' + city + '">' + city + '</option>');
	});
	// add event handler
	$('#city-type').on('change', function() {
		var value= this.value;
		console.log(value);
	})
})	