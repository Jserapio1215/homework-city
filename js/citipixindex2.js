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
		// if states are used to change the background when a specific value is selected from the Array
		if (value === "NYC") {
		$('body').attr('class', '.nyc');
		}
		else if (value === "SF") {
			$('body').attr('class', '.sf');
		}
		else if (value === "LA") {
			$('body').attr('class', '.la');
		}
		else if (value === "ATX") {
			$('body').attr('class', '.austin');
		}
		else if (value === "SYD") {
			$('body').attr('class', '.sydney');
		}
	})
})	

// used $.change to change the background image 