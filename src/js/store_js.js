function initMap() {
    var uluru = {lat: 37.253505, lng: 127.108928};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
    