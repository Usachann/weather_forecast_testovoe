<!-- src/App.vue -->
<template>
  <div>
    <nav class="menu">
      <router-link class="link" to="/">Главная</router-link>
      <router-link class="link" to="/weekly">За неделю</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.menu {
  display: flex;
  gap: 20px;
  padding: 10px;
  background-color: #f0f0f0;
}

.link {
  text-decoration: none;
  color: inherit;
  font: inherit;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}
.router-link-active {
  font-weight: bold;
  color: #007bff;
  text-decoration: underline;
}
</style>
