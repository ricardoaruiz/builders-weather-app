import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const APP_ID = 'e6dee5bc2f5590148d38a82a494b8c38';

export default class WeatherService {


    static _http = undefined;

    static get _api() {
        if(!WeatherService._http) {
            WeatherService._http = axios.create({
                baseURL: BASE_URL,
                timeout: 10000
            });
        }
        return WeatherService._http;
    }

    static getByGeographicCoordinates(coords) {
        return WeatherService._api.get(`?lat=${coords.lat}&lon=${coords.lon}&appid=${APP_ID}&units=metric&lang=pt_br`)
    }

}