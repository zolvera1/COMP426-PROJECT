function initalize() {
    var input = document.getElementById('searchTextField');
    var auto = new google.maps.places.Autocomplete(input);
    
}
google.maps.event.addDomListener(window, 'load', initalize)

$('#location-search').on('click', async () => {
    let coordinates = {
        lat: 0,
        long: 0
    }
    //deconstructing 
    let {lat, long} = coordinates

    let val =  $('#searchTextField').val();
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${val}&key=AIzaSyBGWUB0Cw0-nco2gEEXETWFai3a-fpdtmM`
    const result = await axios({
        method: 'get',
        url: url
    });
     lat = result.data.results[0].geometry.location.lat;
    long = result.data.results[0].geometry.location.lng;
    initMap(lat, long)
    
})

function initMap(lat, long) {
var map;
map = new google.maps.Map(document.getElementById('map'), {
    center: 
    {
        lat: lat, 
        lng: long
    }, 
    zoom: 14
})
}