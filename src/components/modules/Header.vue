<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchInput from '../elements/SearchInput.vue';
</script>

<template>
  <header class="sticky left-0 top-0 z-50 flex w-full flex-col items-center justify-between gap-6 bg-900 p-4 md:flex-row">
    <figure class="h-16">
      <img class="h-full" src="../../assets/img/logo_clashroyale.webp" alt="logo">
    </figure>

    <RouterLink to="/" class="text-600">Cards</RouterLink>
    <RouterLink to="/challenges" class="text-600">Challenges</RouterLink>
    <search-input />
  </header>
</template>

