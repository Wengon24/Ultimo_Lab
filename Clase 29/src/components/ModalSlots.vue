<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @keydown.esc="$emit('close')"
    tabindex="0"
  >
    <div class="bg-gray-700 rounded-lg shadow-lg max-w-md w-full p-6 relative" @click.stop>
      
    
      <header class="mb-4">
        <slot name="header"></slot>
      </header>

     
      <main class="mb-4">
        <slot></slot>
      </main>

     
      <footer class="flex justify-end gap-2">
        <slot name="actions"></slot>
      </footer>

      <button
        class="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        @click="$emit('close')"
        aria-label="Cerrar modal"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean
})
</script>

<style scoped>
div[tabindex="0"] {
  outline: none;
}
</style>
