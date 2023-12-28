<script setup lang="ts">

</script>

<template>
  <footer class="flex flex-col items-center justify-center">
    <section
      class="relative flex w-full flex-col items-center justify-start gap-5 bg-footer pt-8 md:h-40 md:flex-row md:pl-8 md:pt-0">
      <p class="text-xs font-bold text-600 drop-shadow-smooth md:text-xl">Interested in a battle?</p>
      <img class="bottom-0 right-2 h-32 md:absolute md:right-10 md:h-52" src="../../assets/img/mini_pekka.webp"
        alt="mini-pekka">
    </section>

    <section class="relative flex w-full flex-col items-center justify-between gap-2 bg-black p-4 md:flex-row">
      <div class="flex flex-col items-center justify-center gap-2 md:items-start">
        <h4 class="text-center font-sans text-xs font-semibold text-600">All image rights reserved to their creators</h4>
        <h4 class="text-center font-sans text-xs font-semibold text-500">Page created just for studies</h4>
      </div>

      <div class="my-2 flex flex-col items-center justify-center gap-5">
        <div class="flex items-center justify-center gap-4">
          <a href="https://apps.apple.com/us/app/clash-royale/id1053012308" target="_blank">
            <picture>
              <img class="h-10" src="../../assets/img/appstore.webp" alt="appstore">
            </picture>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=en" target="_blank">
            <picture>
              <img class="h-10" src="../../assets/img/googleplay.webp" alt="googleplay">
            </picture>
          </a>
        </div>

        <span class="text-center font-sans text-xs font-semibold text-600">© 2023 Powered by <a
            class="font-sans text-xs font-semibold text-600 transition-all ease-out hover:text-700"
            href="https://www.linkedin.com/in/renovatt/" target="_blank">@renovatt</a>
        </span>
      </div>
    </section>
  </footer>
</template>

