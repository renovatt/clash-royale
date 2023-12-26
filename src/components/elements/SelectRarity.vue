<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDown } from 'lucide-vue-next';
import { ref, watch } from 'vue';

const rarity = ref('')
const emits = defineEmits(['rarity'])
const raritys = ["all", "common", "rare", "epic", "legendary", "champion"]

watch(rarity, (newRarity) => {
  emits('rarity', newRarity)
})

const handleSelectRarity = (rarityOption: string) => {
  rarity.value = rarityOption === 'all' ? '' : rarityOption
}
</script>

<template>
  <div class="w-56 text-right">
    <Menu as="div" class="relative inline-block w-full text-left">
      <div class="w-full">
        <MenuButton
          class="inline-flex w-full justify-around rounded-lg bg-black/20 p-4 text-sm font-medium text-600 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-600/75">
          Raritys
          <ChevronDown class="-mr-1 ml-2 h-5 w-5 text-600" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-600 shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div class="p-1">
            <MenuItem v-slot="{ active }" v-for="(rarity, index) in raritys" :key="index">
            <button @click="handleSelectRarity(rarity)" :class="[
              active ? 'bg-900 text-600' : 'text-gray-900',
              'group flex w-full items-center rounded-lg p-2 text-sm capitalize',
            ]">
              {{ rarity }}
            </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>


