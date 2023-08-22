<template>
  <div class="container mx-auto max-w-min bg-red-300 mt-4 md:mt-32 rounded-2xl px-4">
    <header class="text-gray-600 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src="./assets/icon_weather_app.svg" alt="" />
          <span class="ml-3 text-xl">Weather App</span>
        </a>
      </div>
    </header>
    <section>
      <CitySearch></CitySearch>
      <WeatherCard></WeatherCard>
    </section>

    <footer class="text-gray-600 body-font">
      <div
        class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
      >
        <p
          class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
        >
          © 2023 Copyright —
          <a
            href=""
            class="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
            >Weather App</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import  CitySearch  from "./components/CitySearch.vue";
import WeatherCard from './components/WeatherCard.vue';

export default {
  name: "App",
  components: {
    CitySearch,WeatherCard
  },
};
</script>

<style>
</style>
