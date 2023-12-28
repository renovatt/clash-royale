<script setup lang="ts">
import ListChallenges from '@/components/modules/ListChallenges.vue';
import { usePageTitle } from '@/composables/usePageTitle';

usePageTitle('Challenges')
</script>

<template>
  <ListChallenges />
</template>