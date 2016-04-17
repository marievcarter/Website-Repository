var myCenter = new google.maps.LatLng(40.40845, -3.69289);
//
function initialize() {
    if (screen.width <= 700) {
        var mapProp = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
}
     else {
        var mapProp = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
}

    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker =  new google.maps.Marker({
        position:myCenter,
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
