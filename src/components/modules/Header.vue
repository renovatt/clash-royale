<script setup lang="ts">
import { Menu } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Cards'
  },
  {
    path: '/challenges',
    name: 'Challenges'
  }
]
</script>

<template>
  <header class="sticky inset-0 z-50 flex w-full items-center justify-between gap-6 bg-900 p-4 md:flex-row">
    <figure class="h-20">
      <img class="h-full" src="../../assets/img/logo_clashroyale.webp" alt="logo">
    </figure>

    <Menu class="h-10 w-10 text-600 md:hidden" />

    <nav class="hidden items-center justify-center gap-5 md:flex">
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path" active-class="text-700"
        class="text-2xl text-600 drop-shadow-contour transition-all ease-in-out hover:text-700">{{ route.name }}
      </RouterLink>
    </nav>
  </header>
</template>

