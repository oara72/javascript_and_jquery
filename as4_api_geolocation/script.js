/*
	Assignment 4
	oliver Rodriguez
*/

$(document).ready(function(){

//1. Use geolocation to find the current location and display it on the page.
	
	var elMap = document.getElementById('youarehere');                
	var msg = 'Sorry, we were unable to get your location.';    

	if (Modernizr.geolocation) {                                
	navigator.geolocation.getCurrentPosition(success, fail);  
	elMap.textContent = 'Checking location...';              
	} else {                                                    
	elMap.textContent = msg;                                  
	}

	function success(location) {                                
	msg = '<h3>lon1:<br>';                             
	msg += location.coords.longitude + '</h3>';             
	msg += '<h3>lat1:<br>';                             
	msg += location.coords.latitude + '</h3>';             
	elMap.innerHTML = msg;  
	
//2. Store the current location values in localstorage.
	
if (Modernizr.localstorage) {
	
	if((localStorage.getItem('lon1')===null) && (localStorage.getItem('lat1')===null)) {
		
		alert('Primera visita a esta web ');
		
		localStorage.setItem('lon1', location.coords.longitude);
		localStorage.setItem('lat1', location.coords.latitude);
	
		} else {
		var lon1 = localStorage.getItem('lon1');
		var lat1 = localStorage.getItem('lat1');
		var lon2 = location.coords.longitude;
		var lat2 = location.coords.latitude;
		
		alert('your distance is' + calcDistance(lat1, lon1, lat2, lon2));
		localStorage.clear();
	}
}

	}
	
	function fail(msg) {                                        // Not got location
	elMap.textContent = msg;                                  // Show text input
	console.log(msg.code);                                    // Log the error
	}

	//alert('Tenemos ' + localStorage.length + ' elementos dentro de Local Storage');

//3. Compare the new value with the old value and display a message to show how far the person has moved. /(function provided to calculate the distance between two lat/long pairs.)
	
//4. Display a welcome message if the person is visiting for the first time (no location stored). Display a different message if localstorage is not available.
	
//5. Display a suitable message if geolocation is not available.
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



