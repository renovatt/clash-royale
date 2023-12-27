<script setup lang="ts">
import type { Challenge } from '~/@types';
import SlotItem from '../elements/SlotItem.vue';

const { challenge } = defineProps<{ challenge: Challenge }>()
</script>

<template>
  <aside
    class="flex h-full w-full flex-col items-center justify-start gap-5 overflow-y-scroll rounded-lg p-2 scrollbar-hide">
    <figure class="relative h-40 w-full">
      <img class="h-full w-full rounded-lg object-cover opacity-40 drop-shadow-2xl"
        src="../../assets/img/chests-banner.jpg" alt="prizes-banner">
      <div class="absolute inset-0 flex w-full items-center justify-center">
        <h2 class="text-5xl text-700 drop-shadow-contour">Prizes</h2>
      </div>
    </figure>

    <article
      class="flex h-full max-h-[17rem] w-full flex-col items-center justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <section v-for="(prize, index) in challenge.prizes" :key="index"
        class="flex w-full flex-col items-start justify-center space-y-2 rounded-lg border-4 border-800 bg-800 p-2"
        v-show="prize.type && (prize.type !== 'none' && prize.type !== null)">
        <SlotItem>
          <template #title>
            Type:
          </template>
          <template #description>
            {{ prize.type }}
          </template>
        </SlotItem>

        <SlotItem v-if="prize.amount">
          <template #title>
            Amount:
          </template>
          <template #description>
            {{ prize.amount }}
          </template>
        </SlotItem>

        <SlotItem v-if="prize.consumableName">
          <template #title>
            Consumable Name:
          </template>
          <template #description>
            {{ prize.consumableName }}
          </template>
        </SlotItem>

        <SlotItem v-if="prize.resource">
          <template #title>
            Resource:
          </template>
          <template #description>
            {{ prize.resource }}
          </template>
        </SlotItem>

        <SlotItem v-if="prize.chest">
          <template #title>
            Chest:
          </template>
          <template #description>
            {{ prize.chest }}
          </template>
        </SlotItem>
      </section>
    </article>
  </aside>
</template>