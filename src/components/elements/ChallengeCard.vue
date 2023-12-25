<script setup lang="ts">
import type { Challenge } from '~/@types';
import SlotItem from './SlotItem.vue';
const { challenge } = defineProps<{ challenge: Challenge }>()
</script>

<template>
  <article
    class="relative flex h-full w-full items-start justify-center gap-5 overflow-hidden rounded-lg border-4 bg-900/20 p-2">
    <div class="fixed inset-0 -z-10 bg-challenge bg-cover bg-center bg-no-repeat opacity-10" />
    <aside class="flex w-1/2 flex-col items-start justify-center space-y-4 rounded-lg border-4 bg-800/60 p-2">
      <SlotItem>
        <template #description>
          <figure class="w-full">
            <img class="object-cover drop-shadow-2xl" :src="challenge.iconUrl" :alt="challenge.name">
          </figure>
        </template>
      </SlotItem>

      <section class="grid grid-cols-2 gap-5">
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
            Max Losses:
          </template>
          <template #description>
            {{ challenge.maxLosses }}
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
    </aside>

    <aside
      class="flex max-h-[35.5rem] w-1/2 flex-col items-center justify-start gap-5 overflow-y-scroll rounded-lg scrollbar-hide">
      <section v-for="(prize, index) in challenge.prizes" :key="index"
        class="flex w-full flex-col items-start justify-center space-y-2 rounded-lg border-4 bg-800/60 p-2 transition-all ease-out hover:bg-800"
        v-show="prize.type && (prize.type !== 'none' && prize.type !== null)">
        <SlotItem>
          <template #title>
            Type:
          </template>
          <template #description>
            <span>{{ prize.type }}</span>
          </template>
        </SlotItem>

        <SlotItem v-if="prize.amount">
          <template #title>
            Amount:
          </template>
          <template #description>
            <span>{{ prize.amount }}</span>
          </template>
        </SlotItem>

        <SlotItem v-if="prize.consumableName">
          <template #title>
            Consumable Name:
          </template>
          <template #description>
            <span>{{ prize.consumableName }}</span>
          </template>
        </SlotItem>

        <SlotItem v-if="prize.resource">
          <template #title>
            Resource:
          </template>
          <template #description>
            <span>{{ prize.resource }}</span>
          </template>
        </SlotItem>

        <SlotItem v-if="prize.chest">
          <template #title>
            Chest:
          </template>
          <template #description>
            <span>{{ prize.chest }}</span>
          </template>
        </SlotItem>
      </section>
    </aside>
  </article>
</template>