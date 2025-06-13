<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Side from './components/Side.vue';
import FloatingButton from './components/FloatingButton.vue';
import { createPinia } from 'pinia'
const pinia = createPinia()
</script>

<template>
  <RouterView />
</template>
