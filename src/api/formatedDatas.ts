import { fakeDatas } from "../api/fakeApi";
import { WeatherData, DailyForecast } from "../types/types";

let filteredCities: WeatherData[] = [];

export function search(city: string): WeatherData[] | [] {
  const query = city.toLowerCase();

  if (query) {
    filteredCities = fakeDatas.filter((data) =>
      data.city.toLowerCase().includes(query)
    );
    return filteredCities;
  }

  return [];
}
export function searchWeeeklyForecast(city: string): DailyForecast[] | null {
  const cityData = fakeDatas.find((data) => data.city === city);
  return cityData ? cityData.weekly || [] : null;
}
