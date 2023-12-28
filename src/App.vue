<script setup lang="ts">
import Container from './components/elements/Container.vue';
import Footer from './components/modules/Footer.vue';
import Header from './components/modules/Header.vue';
</script>

<template>
  <!-- <Container> -->
  <Header />
  <main class="min-h-screen">
    <RouterView />
  </main>
  <Footer />
  <!-- </Container> -->
</template>