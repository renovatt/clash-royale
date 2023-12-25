<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue';
import type { Item } from '~/@types';
import Modal from './Modal.vue';
import Card from '../elements/Card.vue';
import { CardsMock } from '@/mocks/CardsMock';

const isOpen = ref(false)
const raritySelected = ref('')
const filteredCards = ref<Item[]>([])
const selecetedCard = ref<Item[]>([])

const raritys = ["common", "rare", "epic", "legendary", "champion"]

provide('isOpen', isOpen)

const openModal = () => isOpen.value = true

const handleGetCardId = (id: number) => {
  selecetedCard.value = CardsMock.items.filter(card => card.id === id)
}

watch(raritySelected, (newRarity) => {
  raritySelected.value = newRarity
  filteredCards.value = CardsMock.items.filter(cards => raritySelected.value ? cards.rarity === raritySelected.value : cards)
})

onMounted(() => {
  filteredCards.value = CardsMock.items
})
</script>

<template>
  <section class="flex flex-col items-center justify-center p-2">
    <select v-model="raritySelected"
      class="my-5 cursor-pointer self-center rounded-lg p-2 text-center capitalize outline-none md:self-end">
      <option value="">All</option>
      <option :value="rarity" v-for="rarity in raritys" :key="rarity">{{ rarity }}</option>
    </select>
    <Modal v-for="card in selecetedCard" :key="card.id" :card="card" @close="isOpen = !isOpen" />
    <div class="grid grid-cols-1 gap-5 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Card v-for="card in filteredCards" :key="card.id" @click="handleGetCardId(card.id); openModal()">
        <template #name>
          {{ card.name }}
        </template>
        <template #image>
          <img :src="card.iconUrls.medium" :alt="card.name" class="p-2" />
        </template>
      </Card>
    </div>
  </section>
</template>