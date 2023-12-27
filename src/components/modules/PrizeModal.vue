<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/vue'
import { inject } from 'vue';
import type { Challenge } from '~/@types';
import Prizes from './Prizes.vue';

defineEmits(['close'])
const { challenge } = defineProps<{ challenge: Challenge }>()
const isOpen: boolean = inject('isOpen') ?? false;
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
              <img src="../../assets/img/chest.png" alt="stamp_deck"
                class="my-1 mb-5 w-20 drop-shadow-2xl transition-all ease-out hover:scale-110">
              <Prizes :challenge="challenge" />
              <div class="mt-4 w-full">
                <button type="button"
                  class="inline-flex w-full justify-center rounded-lg border border-transparent bg-700 p-4 font-medium text-600 opacity-90 transition-all ease-out hover:opacity-100 focus:outline-none"
                  @click="$emit('close')">
                  <span class="text-base drop-shadow-contour">Close</span>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>