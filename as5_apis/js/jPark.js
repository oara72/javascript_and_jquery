      function initialize() {
        var mapCanvas = document.getElementById('map-canvas3');
        var mapOptions = {
          center: new google.maps.LatLng(42.294095, -83.022039),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);