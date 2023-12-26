<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from 'vue';
import type { Item } from '~/@types';
import Modal from './Modal.vue';
import Card from '../elements/Card.vue';
import { CardsMock } from '@/mocks/CardsMock';
import SearchInput from '../elements/SearchInput.vue';
import SelectRarity from '../elements/SelectRarity.vue';

const isOpen = ref(false)
const searchInput = ref('')
const raritySelected = ref('')
const filteredCards = ref<Item[]>([])
const selecetedCard = ref<Item[]>([])

provide('isOpen', isOpen)
provide('rarity', raritySelected)

const openModal = () => isOpen.value = true

const handleGetCardId = (id: number) => {
  selecetedCard.value = CardsMock.items.filter(card => card.id === id)
}

const handleSearchInput = (newName: string) => {
  searchInput.value = newName
  raritySelected.value = ''
}

const handleSelectRarity = (rarity: string) => {
  raritySelected.value = rarity
  searchInput.value = ''
}

const cardclass = computed(() => `bg-${filteredCards.value[0]?.rarity}`)
console.log(cardclass.value)

watch([raritySelected, searchInput], ([newRarity]) => {
  raritySelected.value = newRarity
  filteredCards.value = CardsMock.items.filter(cards => raritySelected.value ? cards.rarity === raritySelected.value : searchInput.value ? cards.name.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase()) : cards)
})

onMounted(() => {
  filteredCards.value = CardsMock.items
})
</script>

<template>
  <section class="flex flex-col items-center justify-center p-2">
    <Modal v-for="card in selecetedCard" :key="card.id" :card="card" @close="isOpen = !isOpen" />

    <header class="my-4 flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-5 px-10 md:flex-row">
      <SearchInput @name-card="handleSearchInput" />
      <SelectRarity @rarity="handleSelectRarity" />
    </header>

    <div v-show="filteredCards.length === 0" class="flex h-20 w-full items-center justify-center">
      <span class="text-2xl text-600 drop-shadow-contour">Not found</span>
    </div>

    <section
      class="grid h-screen grid-cols-1 gap-5 overflow-y-auto p-2 scrollbar-hide sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Card :rarity="card.rarity" v-for="card in filteredCards" :key="card.id"
        @click="handleGetCardId(card.id); openModal()">
        <template #name>
          {{ card.name }}
        </template>

        <template #image>
          <img :src="card.iconUrls.medium" :alt="card.name" class="p-2" />
        </template>
      </Card>
    </section>
  </section>
</template>