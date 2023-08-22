import axios from "axios";

const apiKey = '63c98329f7ddcace00afe83cfe164bda';

// Créez une instance Axios personnalisée avec la configuration de base
const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5", // URL de base commune
  headers: {
    "Content-type": "application/json"
  }
});

// Créez une fonction pour ajouter votre clé API aux requêtes
axiosInstance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appid: apiKey // Ajoutez votre clé API à chaque requête
  };
  return config;
});

export default axiosInstance;
