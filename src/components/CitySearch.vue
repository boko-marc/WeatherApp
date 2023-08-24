<template>
  <section
    class="text-gray-600 body-font container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
  >
    <div
      class="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
    >
      <div
        class="flex w-full flex-col md:flex-row md:justify-start justify-center items-center gap-4"
      >
        <div class="">
          <input
            type="text"
            id="hero-field"
            name="hero-field"
            placeholder="Veuillez saisir la ville"
            v-model="cityName"
            required="true"
            class="bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          class="text-white bg-indigo-500 border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          :disabled="cityName == ''"
          v-on:click="filterWeatherData"
        >
          Rechercher
        </button>
      </div>
    </div>
  </section>
</template>


<script>
import { mapStores } from "pinia";
import { useWeatherStore } from "@/store/weather"; // import  store

export default {
  name: "CitySearch",
  data() {
    return {
      cityName: "",
    };
  },
  computed: {
    ...mapStores(useWeatherStore),
  },

  emits: ["searchEvent"],
  methods: {
    async filterWeatherData() {
      const store = useWeatherStore();
      store.weatherData = null;
      try {
        const store = useWeatherStore();
        await store.fetchWeatherData(this.cityName);
        this.$emit("searchEvent", store.weatherData); // emit event
      } catch (error) {
        this.$emit("searchEvent", store.weatherData); // emit event with store weatherData null
        alert(error.response.data.message);
      }
    },
  },
};
</script>

