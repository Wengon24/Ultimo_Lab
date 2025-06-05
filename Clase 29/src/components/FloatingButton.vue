<template>
  <button
    class="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white rounded-full w-12 h-12 text-2xl shadow-lg z-50 flex items-center justify-center"
    @click="$emit('click')"
    aria-label="Botón flotante"
  >
    <slot>+</slot>
  </button>
</template>
