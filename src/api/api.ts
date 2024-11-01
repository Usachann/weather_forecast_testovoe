import axios from "axios";

const API_KEY = "df23751193c9148da7026223b53b189e"; //пытался с начала с апи, но оно рабоатет с перебоями, поэтмоу решил использовать фейковые данные
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export async function fetchWeatherToday(city: string) {
  const response = await axios.get(`${BASE_URL}weather`, {
    params: { q: city, appid: API_KEY, units: "metric", lang: "ru" },
  });
  return response.data;
}

export async function fetchWeeklyForecast(city: string) {
  const response = await axios.get(`${BASE_URL}forecast/daily`, {
    params: { q: city, appid: API_KEY, units: "metric", cnt: 7, lang: "ru" },
  });
  return response.data;
}
