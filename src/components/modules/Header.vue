<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';
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

const isOpen = ref(false);
</script>

<template>
  <header class="sticky inset-0 z-50 flex w-full items-center justify-between gap-6 bg-900 p-4 md:flex-row">
    <figure class="h-20">
      <img class="h-full" src="../../assets/img/logo_clashroyale.webp" alt="logo">
    </figure>

    <Menu class="h-10 w-10 text-600 md:hidden" @click="isOpen = !isOpen" />

    <nav v-show="isOpen"
      class="absolute right-0 top-0 flex h-screen w-1/2 animate-open flex-col items-start justify-start gap-5 border-l border-600/20 bg-900 p-2 shadow-2xl shadow-black/60 md:hidden">
      <X class="h-10 w-10 self-end text-600 transition-all hover:text-700" @click="isOpen = !isOpen" />
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path" active-class="text-700"
        class="text-xl text-600 drop-shadow-contour transition-all ease-in-out hover:text-700">{{ route.name }}
      </RouterLink>
    </nav>

    <nav class="hidden items-center justify-center gap-5 md:flex">
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path" active-class="text-700"
        class="text-2xl text-600 drop-shadow-contour transition-all ease-in-out hover:text-700">{{ route.name }}
      </RouterLink>
    </nav>
  </header>
</template>

