function init() {
        var mapOptions1 = {
          center: new google.maps.LatLng(42.31994242, -83.04060818),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
         
  var river = new google.maps.Map(document.getElementById("riverside"), mapOptions1);
  
};

function init2() {
         var mapOptions2 = {
          center: new google.maps.LatLng(42.337907, -82.918302),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
		
		var spbeach = new google.maps.Map(document.getElementById("sandpoint"), mapOptions2);
};

function init3() {
         var mapOptions3 = {
          center: new google.maps.LatLng(42.294095, -83.022039),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
  
  var jpark = new google.maps.Map(document.getElementById("jackson"), mapOptions3);
};

function loadScript() {
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 // Add element to page
};

window.onload = loadScript;                          // on load call loadScript()
        
 // var river = new googleMap ('river', 42.31994242,  -83.04060818);
 // var spbeach = new googleMap ('spbeach', 42.337907, -82.918302);
 // var jpark = new googleMap ('jpark', 42.294095, -83.022039);  



