<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { inject } from 'vue';
import type { Item } from '~/@types';

defineEmits(['close'])
const { card } = defineProps<{ card: Item; }>()
const isOpen: boolean = inject('isOpen') ?? false;
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('close')" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/50 bg-modal bg-center bg-no-repeat md:bg-modal_desk" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto scrollbar-hide">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="relative flex w-full max-w-md flex-col items-center justify-center rounded-2xl border-b-4 border-400 bg-600 p-6 text-left align-middle shadow-xl transition-all">
              <img src="../../assets/img/stamp_deck.png" alt="stamp_deck" class="-mt-7 w-52">

              <DialogTitle as="h3" class="my-2 text-2xl font-medium leading-6 text-gray-900 drop-shadow-smooth">
                {{ card.name }}
              </DialogTitle>

              <figure class="grid p-2">
                <img :src="card.iconUrls.medium" class="h-80 rounded-lg p-2" />
              </figure>

              <article class="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-800/80 py-4">
                <span class="text-xs font-bold text-600 drop-shadow-smooth">Rarity:
                  <span class="capitalize text-600 drop-shadow-smooth"> {{ card.rarity }}</span>
                </span>

                <span class="text-xs font-bold text-600 drop-shadow-smooth">Elixir Cost:
                  <span class="text-600 drop-shadow-smooth"> {{ card.elixirCost }}</span>
                </span>

                <span class="text-xs font-bold text-600 drop-shadow-smooth">Max Level:
                  <span class="text-600 drop-shadow-smooth"> {{ card.maxLevel }}</span>
                </span>

                <span v-if="card.maxEvolutionLevel" class="text-xs font-bold text-600 drop-shadow-smooth">Evolution Level:
                  <span class="text-600 drop-shadow-smooth"> {{ card.maxEvolutionLevel }}</span>
                </span>
              </article>

              <div class="mt-4 w-full">
                <button type="button"
                  class="inline-flex w-full justify-center rounded-lg border border-transparent bg-700 p-4 text-sm font-medium text-600 opacity-90 hover:opacity-100 focus:outline-none"
                  @click="$emit('close')">
                  <span class="drop-shadow-smooth">Back</span>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>