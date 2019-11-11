function initMap() {
  var myLatLng = {lat: 37.7936, lng: -122.4836};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: 'https://image.flaticon.com/icons/svg/181/181545.svg'
  });

  var contentString = '<h1>Baker Beach</h1><p>One of my favorite beaches in San Francisco. It is great for hiking (Coastal Trail on the cliffside) and has a historical site called Battery Chamberlin built in 1904.</p>';

  var infowindow = new google.maps.InfoWindow({
     content: contentString
  });


  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(map, marker);
  });

}

