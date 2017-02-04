      function initialize() {
        var mapCanvas = document.getElementById('map-canvas2');
        var mapOptions = {
          center: new google.maps.LatLng(42.337907, -82.918302),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);