<template>
  <div class="content-container">
    <h1>Прогноз погоды</h1>
    <label for="city-input">Введите город:</label>
    <input
      class="city-input"
      v-model.trim="cityInput"
      @keydown.enter="searchCities"
      @input="searchCities"
      placeholder="Например, Казань"
    />

    <ul v-if="filteredCities.length && showDropdown" class="dropdown-list">
      <li
        v-for="query in filteredCities"
        :key="query.city"
        @click="selectCity(query.city)"
      >
        {{ query.city }}
      </li>
    </ul>

    <div v-else class="weather-card">
      <h2>{{ cityInput }}</h2>
      <p>{{ description }}</p>
      <p>Температура: {{ temperature }}°C</p>
      <p>Влажность: {{ humidity }}%</p>
      <p>Ветер: {{ windSpeed }} м/с</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, Ref, onMounted } from "vue";
import { fakeDatas } from "../api/fakeApi";
import { WeatherData } from "../types/types";
import { useWeatherStore } from "../store/index";
import { search } from "../api/formatedDatas";

const weatherStore = useWeatherStore();

const cityInput: Ref<string> = ref("");
const filteredCities = ref<WeatherData[]>([]);
const showDropdown: Ref<boolean> = ref(false);

const searchCities = () => {
  filteredCities.value = search(cityInput.value);
  if (!filteredCities.value.length) {
    showDropdown.value = false;
  }
  showDropdown.value = true;
};

const selectCity = (query: string) => {
  cityInput.value = query;
  showDropdown.value = false;
  weatherStore.setCity(query);
};

const description = computed(() => {
  return fakeDatas.find((item) => item.city === cityInput.value)
    ?.weather_condition;
});

const temperature = computed(() => {
  return fakeDatas.find((item) => item.city === cityInput.value)?.temperature;
});

const humidity = computed(() => {
  return fakeDatas.find((item) => item.city === cityInput.value)?.humidity;
});

const windSpeed = computed(() => {
  return fakeDatas.find((item) => item.city === cityInput.value)?.wind_speed;
});

onMounted(() => {
  const city = weatherStore.selectedCity;

  if (city) {
    cityInput.value = city;
  }
});
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.city-input {
  background-color: #fff;
  border: 1px solid #ccc;
  width: 200px;
  border-radius: 5px;
  min-height: 25px;
}

.weather-card {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.dropdown-list {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 200px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
}
.dropdown-list li {
  padding: 8px;
  cursor: pointer;
}
.dropdown-list li:hover {
  background-color: #f0f0f0;
}
</style>
