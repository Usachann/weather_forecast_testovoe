import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import WeeklyForecast from "../pages/WeeklyForecast.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/weekly", component: WeeklyForecast, name: "WeeklyForecast" },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
