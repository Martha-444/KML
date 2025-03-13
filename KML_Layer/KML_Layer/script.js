var map;
var layer;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'),
    {
        zoom: 6,
        center: { lat: 49.496675, lng: -102.65625 },
    });

    var layer = new google.maps.KmlLayer({
        url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss"
    });

    layer.setMap(map);
}

window.initMap = initMap();