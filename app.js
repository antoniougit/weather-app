import * as ELEMENTS from 'elements';
import { Http } from 'http';
import { WeatherData, WEATHER_PROXY_HANDLER } from 'weather-data';

const API_KEY = 'c5941ee1946f17708a86adfbfb19dfcc';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert('Please enter a city name!');
    }
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;

    Http.fetchData(URL)
        .then((responseData) => {
            const WEATHER_DATA = new WeatherData(
                CITY_NAME,
                responseData.weather[0].description.toUpperCase()
            );
            const WEATHER_PROXY = new Proxy(
                WEATHER_DATA,
                WEATHER_PROXY_HANDLER
            );
            WEATHER_PROXY.temperature = responseData.main.temp;
        })
        .catch((error) => alert(error));
}
