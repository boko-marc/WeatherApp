import $axios from "@/axios"
import { objectToFormData } from "@/utils";

export default {
    searchWeather(payload) {
        const data = objectToFormData(payload)
        return $axios.post('/fetch', data)

    }
}
