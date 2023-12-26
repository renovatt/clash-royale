<script setup lang="ts">
import { ref, watch } from 'vue';

const name = ref('')
const emits = defineEmits(['name-card'])

watch(name, (newName) => {
  emits('name-card', newName)
})

</script>

<template>
  <input type="search" v-model="name" placeholder="Mini P.E.K.K.A"
    class="w-56 rounded-lg bg-black/20 p-4 text-xs text-600 outline-none placeholder:text-xs">
</template>

