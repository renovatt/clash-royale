<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { computed, inject } from 'vue';
import type { Item } from '~/@types';
import SlotItem from '@/components/elements/SlotItem.vue';

defineEmits(['close'])

const { card } = defineProps<{ card: Item; }>()
const isOpen: boolean = inject('isOpen') ?? false;
const cardclass = computed(() => `border-${card.rarity} text-${card.rarity}`);
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/70" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto scrollbar-hide">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="relative flex w-full max-w-md flex-col items-center justify-center rounded-2xl border-b-4 border-400 bg-600 p-4 text-left align-middle shadow-xl transition-all">
              <img src="../../../assets/img/stamp_deck.png" alt="stamp_deck" class="-mt-5 w-52">

              <DialogTitle as="h3"
                class="my-2 text-center text-3xl font-medium leading-10 text-gray-900 drop-shadow-smooth">
                {{ card.name }}
              </DialogTitle>

              <DialogTitle as="h3" :class="cardclass"
                class="my-2 text-2xl font-medium capitalize leading-6 drop-shadow-smooth">
                {{ card.rarity }} card
              </DialogTitle>

              <figure class="grid p-2">
                <img :src="card.iconUrls.medium" class="h-80 rounded-lg p-2" />
              </figure>

              <article class="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-800 py-4">
                <SlotItem>
                  <template #title>
                    Elixir Cost:
                  </template>
                  <template #description>
                    {{ card.elixirCost }}
                  </template>
                </SlotItem>

                <SlotItem>
                  <template #title>
                    Max Level:
                  </template>
                  <template #description>
                    {{ card.maxLevel }}
                  </template>
                </SlotItem>

                <SlotItem v-if="card.maxEvolutionLevel">
                  <template #title>
                    Max Evolution Level:
                  </template>
                  <template #description>
                    {{ card.maxEvolutionLevel }}
                  </template>
                </SlotItem>
              </article>

              <div class="mt-4 w-full">
                <button type="button"
                  class="inline-flex w-full justify-center rounded-lg border border-transparent bg-700 p-4 font-medium text-600 opacity-90 transition-all ease-out hover:opacity-100 focus:outline-none"
                  @click="$emit('close')">
                  <span class="text-base drop-shadow-contour">Back</span>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>