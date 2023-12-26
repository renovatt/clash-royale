<script setup lang="ts">
import type { Challenge } from '~/@types';
import SlotItem from '../elements/SlotItem.vue';
const { challenge } = defineProps<{ challenge: Challenge }>()
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center space-y-4 bg-800/50 p-2">
    <figure class="h-60 w-full overflow-hidden rounded-lg shadow-md drop-shadow-2xl">
      <img class="h-full w-full object-cover" :src="challenge.iconUrl" :alt="challenge.name">
    </figure>

    <figure class="absolute bottom-2 right-2 h-12 cursor-pointer transition-all ease-in-out hover:scale-105">
      <img src="../../assets/img/chest.png" alt="chest-image" class="h-full">
    </figure>

    <section class="flex flex-col items-start justify-center gap-4">
      <SlotItem>
        <template #title>
          Name:
        </template>
        <template #description>
          {{ challenge.name }}
        </template>
      </SlotItem>

      <SlotItem>
        <template #title>
          Description:
        </template>
        <template #description>
          {{ challenge.description }}
        </template>
      </SlotItem>

      <SlotItem>
        <template #title>
          Max Losses:
        </template>
        <template #description>
          {{ challenge.maxLosses }}
        </template>
      </SlotItem>

      <SlotItem>
        <template #title>
          Max Wins:
        </template>
        <template #description>
          {{ challenge.maxWins }}
        </template>
      </SlotItem>

      <SlotItem>
        <template #title>
          Game Mode:
        </template>
        <template #description>
          {{ challenge.gameMode.name }}
        </template>
      </SlotItem>

      <SlotItem>
        <template #title>
          Win Mode:
        </template>
        <template #description>
          {{ challenge.winMode }}
        </template>
      </SlotItem>

      <SlotItem>
        <template #title>
          Casual:
        </template>
        <template #description>
          {{ challenge.casual ? 'Yes' : 'No' }}
        </template>
      </SlotItem>
    </section>
  </section>
</template>