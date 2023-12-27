<script setup lang="ts">
import { computed } from 'vue';

const { rarity } = defineProps({
  rarity: {
    type: String,
    required: true
  },
  grid: {
    type: Boolean,
    required: true,
    default: false
  }
});

const gradientClassMap: { [key: string]: string } = {
  common: 'bg-gradient-common',
  rare: 'bg-gradient-rare',
  epic: 'bg-gradient-epic',
  legendary: 'bg-gradient-legendary',
  champion: 'bg-gradient-champion',
};

const cardclass = computed(() => `${gradientClassMap[rarity]} border-${rarity}`);
</script>

<template>
  <div v-if="grid" class="flex cursor-pointer items-center justify-center overflow-hidden">
    <article class="relative flex items-center justify-center rounded-xl">
      <figure class="transition-all ease-in-out hover:scale-95">
        <slot name="image"></slot>
      </figure>
    </article>
  </div>

  <div v-else :class="cardclass"
    class="flex h-72 w-56 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-4 shadow-xl transition-all ease-in-out hover:scale-95 ">
    <article class="relative flex h-full w-full flex-col items-center justify-center rounded-xl p-4">
      <figure class="p-2 pb-6">
        <slot name="image"></slot>
      </figure>
      <span class="absolute bottom-4 text-xs font-bold text-600 drop-shadow-contour">
        <slot name="name"></slot>
      </span>
    </article>
  </div>
</template>


