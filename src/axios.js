import axios from "axios";

const apiKey = '63c98329f7ddcace00afe83cfe164bda';

// create axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5", // base URL
  headers: {
    "Content-type": "application/json"
  }
});

// add axios inteceptors for every request
axiosInstance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appid: apiKey // Add api key
  };
  return config;
});

export default axiosInstance;
