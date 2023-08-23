// stores/weather.js
import { defineStore } from 'pinia'
import $service from '@/callApi/weather'
export const useWeatherStore = defineStore('weather', {
    state: () => ({
        weatherData: null,
    }),

    getters: {
    },
    actions: {
        async fetchWeatherData(cityName) {
            const response = await $service.fetchWeatherData(cityName);
            this.weatherData = response.data;
            return response.data;
        },
    },
})