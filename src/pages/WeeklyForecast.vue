<script setup lang="ts">
import { computed } from "vue";
import { useWeatherStore } from "../store/index";
import { searchWeeeklyForecast } from "../api/formatedDatas";

const weatherStore = useWeatherStore();
const city = weatherStore.selectedCity;

const displayedForecast = computed(() => {
  if (!city) return null;
  return searchWeeeklyForecast(city);
});
</script>

<template>
  <div class="forecast-container">
    <h1>Недельный прогноз</h1>
    <h2 class="city-title">{{ city }}</h2>

    <div v-if="displayedForecast && displayedForecast.length">
      <div
        v-for="(dayForecast, index) in displayedForecast"
        :key="index"
        class="day-card"
      >
        <h3 class="day-title">{{ dayForecast.day }}</h3>
        <p class="temperature-range">
          Температура: от
          <span class="temp-min">{{ dayForecast.temperature.min }}°C</span> до
          <span class="temp-max">{{ dayForecast.temperature.max }}°C</span>
        </p>
        <p class="weather-description">
          Описание: {{ dayForecast.weather[0].description }}
        </p>
      </div>
    </div>
    <div v-else>
      <p class="no-data">Данные прогноза не найдены.</p>
    </div>
  </div>
</template>

<style scoped>
.forecast-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.city-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
}

.day-card {
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.day-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 0.5rem;
}

.temperature-range {
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
}

.temp-min {
  color: #007bff;
}

.temp-max {
  color: #dc3545;
}

.weather-description {
  font-size: 1rem;
  color: #555;
  text-align: center;
}

.no-data {
  color: #777;
  font-size: 1.2rem;
  margin-top: 2rem;
}
</style>
