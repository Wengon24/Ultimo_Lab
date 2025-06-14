<script setup lang="ts">
import { ref } from 'vue'
import FloatingButton from '../components/FloatingButton.vue'
import ProjectModal from '../components/ModalSlots.vue'
import { useCounterStore } from "../stores/Projes"

const counterStore = useCounterStore()

const isModalOpen = ref(false)
const projectName = ref('')

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

function handleSave() {
  if (projectName.value.trim() === '') {
    alert('Por favor, ingresa un nombre válido para el proyecto.')
    return
  }

  counterStore.addItem({
    nombre: projectName.value,
    fecha: new Date().toISOString()
  })

  alert('Proyecto guardado exitosamente')
  projectName.value = ''
  closeModal()
}

function handleClose() {
  closeModal()
}

function progreso(proyecto: { tareas: { completado: number }[] }) {
  if (!proyecto.tareas.length) return 0
  const sumaPorcentajes = proyecto.tareas.reduce((acc, t) => acc + (t.completado || 0), 0)
  return Math.round(sumaPorcentajes / proyecto.tareas.length)
}

</script>

<template>
  <div class="overflow-x-auto">
    <table class="table-auto w-full text-left border-separate border-spacing-y-2">
      <thead class="text-gray-300 uppercase text-sm">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody class="text-white">
        <tr v-for="(proyecto, index) in counterStore.myArray" :key="index" class="bg-gray-800 rounded-lg">
          <td class="px-4 py-2">{{ index + 1 }}</td>
          <td class="px-4 py-2">{{ proyecto.nombre }}</td>
          <td class="px-4 py-2">{{ proyecto.tareas.length }}</td>
          <td class="px-4 py-2 w-40">
            <div>
              <progress class="progress progress-primary w-full" :value="progreso(proyecto)" max="100" />
              <div class="text-xs text-right mt-1">{{ progreso(proyecto) }}%</div>

            </div>
          </td>
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
        <input type="text" v-model="projectName" placeholder="Escribe aquí"
          class="input input-bordered text-black bg-white w-full max-w-xs" />
      </div>
    </div>

    <template #actions>
      <button class="btn btn-primary mr-2" @click="handleSave">Guardar</button>
      <button class="btn" @click="handleClose">Cerrar</button>
    </template>
  </ProjectModal>
</template>

