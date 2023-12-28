<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue';
import type { Item } from '~/@types';
import Card from '../elements/Card.vue';
import { CardsMock } from '@/mocks/CardsMock';
import SearchInput from '../elements/SearchInput.vue';
import SelectRarity from '../elements/SelectRarity.vue';
import CardModal from './modals/CardModal.vue';
import { LayoutGrid } from 'lucide-vue-next';

const grid = ref(false)
const isOpen = ref(false)
const searchInput = ref('')
const raritySelected = ref('')
const filteredCards = ref<Item[]>([])
const selecetedCard = ref<Item[]>([])

provide('isOpen', isOpen)

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
    <CardModal v-for="card in selecetedCard" :key="card.id" :card="card" @close="isOpen = !isOpen" />

    <header class="my-4 flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-5 px-10 md:flex-row">
      <SearchInput @name-card="handleSearchInput" />

      <div class="relative flex items-center justify-center gap-5">
        <SelectRarity @rarity="handleSelectRarity" />
        <LayoutGrid
          class="absolute -right-14 h-10 w-10 cursor-pointer text-600/50 transition-all ease-out hover:text-700 md:static md:flex"
          @click="grid = !grid" />
      </div>
    </header>

    <div v-show="filteredCards.length === 0" class="flex h-20 w-full items-center justify-center">
      <span class="text-2xl text-600 drop-shadow-contour">Not found</span>
    </div>

    <section
      :class="`${grid ? 'flex flex-wrap justify-around items-start gap-2 px-10' : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'} overflow-y-auto p-2 scrollbar-hide max-w-7xl h-screen`">
      <TransitionGroup name="fade">
        <Card :rarity="card.rarity" :grid="grid" v-for="card in filteredCards" :key="card.id"
          @click="handleGetCardId(card.id); openModal()">
          <template #name>
            {{ card.name }}
          </template>

          <template #image>
            <img :src="card.iconUrls.medium" :alt="card.name" :class="`block ${grid ? 'h-20' : 'w-full'} `" />
          </template>
        </Card>
      </TransitionGroup>
    </section>
  </section>
</template>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>