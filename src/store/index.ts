import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    selectedCity: "" as string | null,
  }),
  actions: {
    setCity(city: string) {
      this.selectedCity = city;
    },
  },
});
