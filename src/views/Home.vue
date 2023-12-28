<template>
  <section class="h-full">
    <figure class="relative h-screen w-full md:h-full">
      <img :class="`logo`" src="../assets/img/logo_clashroyale.webp" alt="logo_clashroyale">
      <img class="h-full w-full object-cover" src="../assets/img/hero_bg_clashroyale.webp" alt="hero_bg_clashroyale">
    </figure>
  </section>
</template>

<style scoped>
.logo {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 20%;
  min-width: 300px;
  min-height: 130px;
  max-height: 120px;
  object-fit: contain;
}
</style>