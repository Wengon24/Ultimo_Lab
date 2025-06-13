
<script setup lang="ts">
import { ref } from 'vue'
import FloatingButton from '../components/FloatingButton.vue'
import ProjectModal from '../components/ModalSlots.vue' 


const isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

function handleSave() {
  alert('Proyecto guardado exitosamente')
  closeModal()
}

function handleClose() {
  closeModal()
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

  <FloatingButton position="right" @click="openModal" />

  <ProjectModal :isOpen="isModalOpen" @close="closeModal">
  <template #header>
    <h3 class="text-lg font-bold">Nuevo Proyecto</h3>
    <p class="py-2">Aquí puedes crear un nuevo proyecto.</p>
  </template>

 
  <div class="form-control w-full max-w-xs space-y-4">
    <div>
      <label class="label">
        <span class="label-text">Nombre del proyecto</span>
      </label>
      <input type="text" placeholder="Escribe aquí" class="input input-bordered text-black bg-white w-full max-w-xs" />

    </div>

  </div>

  <template #actions>
    <button class="btn btn-primary mr-2" @click="handleSave">Guardar</button>
    <button class="btn" @click="handleClose">Cerrar</button>
  </template>
</ProjectModal>

</template>
