<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Challenge } from '~/@types';
import { ChallengesMock } from '@/mocks/ChallengesMock';
import ChallengeCard from '../elements/ChallengeCard.vue';

const challenges = ref<Challenge[]>([])

onMounted(() => {
  challenges.value = ChallengesMock.flatMap(challenge => challenge.challenges)
})
</script>

<template>
  <section class="flex flex-col items-center justify-center gap-5 rounded-lg p-2">
    <article v-for="challenge in challenges" :key="challenge.id">
      <ChallengeCard :challenge="challenge" />
    </article>
  </section>
</template>