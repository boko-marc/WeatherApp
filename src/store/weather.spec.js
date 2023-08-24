/* eslint-disable no-undef */
import { setActivePinia, createPinia } from 'pinia'
import { useWeatherStore } from '@/store/weather'

// eslint-disable-next-line no-undef
describe('fetches weather data', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('fetches weather data', async () => {
        const store = useWeatherStore()
        const cityName = 'Paris';
        await store.fetchWeatherData(cityName);
        const weatherData = store.weatherData;
        expect(weatherData.name).toBe('Paris');
    });

    it('handles city not found error', async () => {
        const store = useWeatherStore()

        const cityName = 'UnknownCity'; // unknown city
        try {
            await store.fetchWeatherData(cityName);

            expect(true).toBeFalsy();
        } catch (error) {
            expect(error.response.data.message).toBe('city not found');
        }
    });
})