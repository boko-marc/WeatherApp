// weather-service.js
import $axios from "@/axios";



export default {
    fetchWeatherData(cityName) {
        return $axios.get("/weather", {
            params: {
                q: cityName,
                lang: 'fr', // langue params
                units: 'metric' // units of measurement params 
            },
        });
    },
};

