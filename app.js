import * as ELEMENTS from 'elements';
import { Http } from 'http';

const API_KEY = 'c5941ee1946f17708a86adfbfb19dfcc';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
    if (CITY_NAME.length == 0) {
        return alert('Please enter a city name!');
    }
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`;

    Http.fetchData(URL)
        .then((responseData) => {
            
        })
        .catch((error) => alert(error));
}
