<template>
  <div
    class="flex h-72 w-56 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-4 border-600 shadow-xl transition-all ease-in-out hover:scale-105">
    <article class="bg-body relative flex h-full w-full flex-col items-center justify-center rounded-xl p-4">
      <figure class="p-2">
        <slot name="image"></slot>
      </figure>
      <span class="absolute bottom-4 text-xs font-bold text-600 drop-shadow-contour">
        <slot name="name"></slot>
      </span>
    </article>
  </div>
</template>