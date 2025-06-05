
<script setup lang="ts">
import { ref } from 'vue'
import FloatingButton from '../components/FloatingButton.vue'

// Declaramos la referencia al modal
const modalRef = ref<HTMLDialogElement | null>(null)

// Manejamos el clic del botón flotante
function handleAddClick(): void {
  console.log('Botón presionado desde Proje.vue')
  modalRef.value?.showModal()
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

  <!-- Botón flotante -->
  <FloatingButton @click="handleAddClick">
    +
  </FloatingButton>

  <!-- Modal estilo DaisyUI -->
  <dialog ref="modalRef" id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">¡Hola!</h3>
      <p class="py-4 text-blue-500">Presiona ESC o haz clic en el botón para cerrar</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Cerrar</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
