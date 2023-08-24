<template>
  <div class="bg-white rounded shadow-md p-4 m-2 max-w-md">
    <h2 class="text-xl font-semibold mb-2">{{ city }}</h2>
    <div class="text-gray-700">
      <p class="mb-1">
        Temperature: {{ celsiusTemp }}°C |
        {{ $filters.formatToFahrenheit(celsiusTemp) }} °F
      </p>
      <p class="mb-1">Humidité: {{ humidity }} %</p>

      <p class="mb-1">Vitesse du vent: {{ windSpeed }} Km/h</p>
      <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="" />

      <p class="mb-1">Weather: {{ weatherDescription }}</p>
      <p class="mb-1">
        Ville: {{ countryName }} ({{ weatherData.sys.country }})
      </p>
      <p class="mb-1">Donnée calculées: {{ moment }}</p>

      <p class="mb-1">Levé du soleil à: {{ sunriseTime }}</p>
      <p class="mb-1">Couché du soleil à : {{ sunsetTime }}</p>
    </div>
  </div>
</template>
  
  <script>
import moment from "moment";
export default {
  name: "WeatherCard",
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    celsiusTemp() {
      return Math.round(this.weatherData.main.temp);
    },
    humidity() {
      return this.weatherData.main.humidity;
    },
    //convert wind speed from meter/sec to km/h
    windSpeed() {
      return Math.round(this.weatherData.wind.speed * 3.6);
    },
    //weather icon
    icon() {
      return this.weatherData.weather[0].icon;
    },

    weatherDescription() {
      return this.weatherData.weather[0].description;
    },

    countryName() {
      return this.weatherData.name;
    },
    //Time of data calculation
    moment() {
      return moment.unix(this.weatherData.dt).locale("fr").fromNow();
    },
    sunriseTime() {
      return moment
        .unix(this.weatherData.sys.sunrise)
        .locale("fr")
        .format("LT");
    },
    sunsetTime() {
      return moment.unix(this.weatherData.sys.sunset).locale("fr").format("LT");
    },
  },

  mounted() {},

  methods: {},
};
</script>
  