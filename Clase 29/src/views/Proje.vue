
<script setup lang="ts">
import { inject, Ref } from 'vue'
import FloatingButton from '../components/FloatingButton.vue' 

interface ModalControl {
  isModalOpen: Ref<boolean>
  openModal: () => void
  closeModal: () => void
}

const modalControl = inject<ModalControl>('modalControl')

function openModalFromSidebar() {
  modalControl?.openModal()
}
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table-auto w-full text-left border-separate border-spacing-y-2">
      <thead class="text-gray-300 uppercase text-sm">
        <tr>
          <th>#</th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody class="text-white">
        <tr class="bg-gray-800 rounded-lg">
          <td class="px-4 py-2">2</td>
          <td class="px-4 py-2">Hart Hagerty</td>
          <td class="px-4 py-2">Desktop Support Technician</td>
          <td class="px-4 py-2">Purple</td>
        </tr>
      </tbody>
    </table>
  </div>

  <FloatingButton position="right" @click="openModalFromSidebar" />
</template>
