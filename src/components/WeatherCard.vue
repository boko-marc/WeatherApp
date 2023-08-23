<template>
  <div class="bg-white rounded shadow-md p-4 m-2 max-w-md">
    <h2 class="text-xl font-semibold mb-2">{{ city }}</h2>
    <div class="text-gray-700">
      <p class="mb-1">Temperature: {{ temperature }}°C</p>
      <p class="mb-1">Weather: {{ weatherDescription }}</p>
      <p class="mb-1">Sunrise: {{ sunriseTime }}</p>
      <p class="mb-1">Sunset: {{ sunsetTime }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "WeatherCard",
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },
  computed: {
   
  },

  mounted() {},

  methods: {},
};
</script>
  