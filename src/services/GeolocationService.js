export default class GeolocationService {

    static getCurrentPosition(callback) {
        navigator.geolocation.getCurrentPosition(function(position) {
            callback({
                lat: position.coords.latitude, 
                lon: position.coords.longitude
            });
          });
    }

}