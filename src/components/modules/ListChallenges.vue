<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Challenge } from '~/@types';
import { ChallengesMock } from '@/mocks/ChallengesMock';
import ChallengeCard from './ChallengeCard.vue';

const challenges = ref<Challenge[]>([])

onMounted(() => {
  challenges.value = ChallengesMock.flatMap(challenge => challenge.challenges)
})
</script>

<template>
  <section class="flex items-center justify-center">
    <section class="flex max-w-7xl flex-wrap items-center justify-between gap-5 p-6">
      <TransitionGroup name="fade">
        <article v-for="challenge in challenges" :key="challenge.id"
          class="max-h-[36rem] w-full overflow-y-auto rounded-lg border-4 scrollbar-hide md:w-[30rem]">
          <ChallengeCard :challenge="challenge" />
        </article>
      </TransitionGroup>
    </section>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>