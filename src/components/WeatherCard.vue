
   <template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <div class="flex justify-between item-center mb-4">
      <h2 class="text-xl font-semibold mb-4">
        {{ countryName }} ({{ weatherData.sys.country }})
      </h2>
      <span> {{ moment }} </span>
    </div>
    <div class="flex items-center border rounded">
      <div class="mr-4">
        <img
          :src="`https://openweathermap.org/img/wn/${icon}@2x.png`"
          :alt="weatherDescription"
          class="h-20 w-20 bg-black-100"
        />
      </div>
      <div>
        <div class="font-semibold text-2xl">
          {{ celsiusTemp }}°C |
          {{ $filters.formatToFahrenheit(celsiusTemp) }} °F
        </div>
        <div class="text-gray-600">{{ weatherDescription }}</div>
      </div>
    </div>
    <div class="mt-4">
      <div class="mb-2">
        Levé du soleil à : <span> {{ sunriseTime }}</span>
      </div>
      <div class="mb-2">
        Couché du soleil à : <span> {{ sunsetTime }}</span>
      </div>
      <div class="mb-2">
        Humidité: <span>{{ humidity }} %</span>
      </div>
      <div>
        Vitesse du vent: <span>{{ windSpeed }} Km/h</span>
      </div>
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
      return moment.unix(this.weatherData.dt).locale("fr").format("llll");
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
  
  <style scoped>
/* Add Tailwind classes or custom styles here */
</style>
  