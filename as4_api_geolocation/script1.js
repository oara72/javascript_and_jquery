/*
	Assignment 4
	{Your name here}
*/

$(document).ready(function(){
	
	//1. Use geolocation to find the current location and display it on the page.
	//2. Store the current location values in localstorage.
	//3. Compare the new value with the old value and display a message to show how far the person has moved. /(function provided to calculate the distance between two lat/long pairs.)
	
	//4. Display a welcome message if the person is visiting for the first time (no location stored). Display a different message if localstorage is not available.
	
	//5. Display a suitable message if geolocation is not available.

	// function to calculate the distance between two lat/long pairs
	
	// Aren't those cool variable names? Yah gotta love JavaScript
	
	function calcDistance(lat1, lon1, lat2, lon2){
		// Haversine formula
		var toRadians = function(num) {
			return num * Math.PI / 180;
		}
		var R = 6371000; // metres
		var φ1 = toRadians(lat1);
		var φ2 = toRadians(lat2);
		var Δφ = toRadians(lat2-lat1);
		var Δλ = toRadians(lon2-lon1);

		var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

		return ( R * c );
	}
});


http://www.arumeinformatica.es/blog/html5-api-de-geolocalizacion-geolocation-api/

