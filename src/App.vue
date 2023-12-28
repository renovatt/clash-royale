<script setup lang="ts">
import Footer from './components/modules/Footer.vue';
import Header from './components/modules/Header.vue';
</script>

<template>
  <Header />
  <main class="min-h-screen">
    <RouterView />
  </main>
  <Footer />
</template>