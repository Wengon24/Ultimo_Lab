<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  position: {
    type: String,
    default: 'right',
    validator: (value: string) =>
      ['left', 'right', 'top-left', 'top-right', 'top-center', 'bottom-center'].includes(value),
  },
})

const positionClass = () => {
  switch (props.position) {
    case 'left':
      return 'bottom-6 left-6'
    case 'right':
      return 'bottom-6 right-6'
    case 'top-left':
      return 'top-6 left-6'
    case 'top-right':
      return 'top-6 right-6'
    case 'top-center':
      return 'top-6 left-1/2 transform -translate-x-1/2'
    case 'bottom-center':
      return 'bottom-6 left-1/2 transform -translate-x-1/2'
    default:
      return 'bottom-6 right-6'
  }
}
</script>

<template>
  <button
    :class="[
      'fixed',
      positionClass(),
      'bg-pink-500 hover:bg-pink-600 text-white rounded-full w-12 h-12 text-2xl shadow-lg z-50 flex items-center justify-center'
    ]"
    @click="$emit('click')"
    aria-label="Botón flotante"
  >
    <slot>+</slot>
  </button>
</template>
