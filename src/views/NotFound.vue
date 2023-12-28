<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle';

usePageTitle('Not Found')
</script>

<template>
  <div class="flex h-screen items-center justify-center p-2">
    <section
      class="-mt-40 flex w-full flex-col items-center justify-center rounded-lg bg-500 p-4 shadow-lg shadow-black/20 md:w-96">
      <h2 class="text-600 drop-shadow-contour">Page Nout Found</h2>

      <div class="mt-4 flex flex-col items-center justify-between gap-10 rounded-sm bg-600 p-2 py-5">
        <p class="text-center text-base">This page does not exist, please return to the home page</p>

        <RouterLink to="/"
          class="rounded-lg border-b-4 border-black bg-red-600 p-2 px-6 transition-all hover:cursor-pointer hover:bg-red-700">
          <span class="text-center text-xs font-bold text-600 drop-shadow-contour">Go Home</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>