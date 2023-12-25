<script setup lang="ts">
import SearchInput from '../elements/SearchInput.vue';
</script>

<template>
  <header
    class="sticky -top-1 left-0 z-50 flex w-full flex-col items-center justify-between gap-6 bg-900 p-6 md:flex-row">
    <figure class="h-24">
      <img class="h-full" src="../../assets/img/logo_clashroyale.webp" alt="logo">
    </figure>
    <search-input />
  </header>
</template>

