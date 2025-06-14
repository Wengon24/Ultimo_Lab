<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/Projes'

const route = useRoute()
const router = useRouter()
const store = useCounterStore()
const proyectoId = Number(route.params.id)

const proyecto = computed(() =>
  store.myArray.find(p => p.id === proyectoId)
)

const nuevaTarea = ref('')

function agregarTarea() {
  if (nuevaTarea.value.trim()) {
    store.agregarTarea(proyectoId, nuevaTarea.value.trim())
    nuevaTarea.value = ''
  }
}

function volver() {
  router.push({ name: 'proyect' })
}
</script>

<template>
  <div v-if="proyecto">

    <button @click="volver" class="mb-4 text-pink-400 hover:underline flex items-center gap-1">
      <span class="text-xl">←</span> Volver
    </button>



    <table class="table w-full text-sm">
      <thead class="text-black">
        <tr>
          <th>#</th>
          <th>Tarea</th>
          <th>Completado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarea, index) in proyecto.tareas" :key="tarea.id">
          <td>{{ index + 1 }}</td>
          <td>{{ tarea.nombre }}</td>
          <td>
            <input type="checkbox" :checked="tarea.completado" disabled />
          </td>
        </tr>
        <tr>
          <td>+</td>
          <td colspan="2">
            <div class="flex gap-2 items-center">
              <input v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Nueva tarea"
                class="text-[10px] h-5 px-2 py-0.5 rounded border border-gray-300 text-white" />

              <button @click="agregarTarea" class="btn btn-xs bg-pink-500 text-white">
                Agregar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-else class="text-white">Proyecto no encontrado.</div>
</template>

