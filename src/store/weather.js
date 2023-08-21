// stores/weather.js
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
    state: () => {
        return { isFiltered: false }
    },
    actions: {
        increment() {
            this.count++
        },
    },
})