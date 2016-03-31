$(document).ready(function() {
	// first create an even when someone clicks submit-btn
	$('#submit-btn').click(addCity);
	
		function addCity() {		
		
		// adding console.log to ensure functions are firing properly
		console.log ('city-type');
		
		var city = $('#city-type').val(); 
		// city = city.toLowerCase();
		//created a variable to log what city is inputted when someone clicks submit
		var body = $('body');
		

		// create if else statements to when someone inputs a city name, to determine what background picture will be used
		// If a user submits the following:
	    // "New York" or "New York City" or "NYC" THEN make the background of the page nyc.jpg
	    // "San Francisco" or "SF" or "Bay Area" THEN make the background of the page sf.jpg
	    // "Los Angeles" or "LA" or "LAX" THEN make the background of the page la.jpg
	    // "Austin" or "ATX" THEN make the background of the page austin.jpg
	    // "Sydney" or "SYD" THEN make the background of the page sydney.jpg
	    
	    if (city === "New York" || city === "New York City" || city === "NYC") {
	   	removeClass();
	   	body.addClass('nyc');
	   	}
	    else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
	   	removeClass();
	   	body.addClass('sf');
	   	}
		else if (city === city === "Los Angeles" || city === "LA" || city === "LAX" ) {
		removeClass();
		body.addClass('la');
		}
		else if (city === "Austin" || city === "ATX") {
	   	removeClass();
	   	body.addClass('austin');
	   	}
	   	else if (city === "Sydney" || city === "SYD") {
	   	removeClass();
	   	body.addClass('sydney');
	   	}

	   	event.preventDefault();
	   	// adding event.prevent will stop a form submission from occuring
	   	
	   	   		   	
	   	// in order to change the background image to a new image, creating a removeClass function will serve this purpose
	   	function removeClass () {
		$('body').removeClass();
		}
	}
})