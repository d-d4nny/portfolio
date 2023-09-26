function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 37.37709939499153, lng: -5.94621053163665};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Seville, ESP' // Title Location
    });
}