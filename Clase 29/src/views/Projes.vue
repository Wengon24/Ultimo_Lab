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

function toggleCompletado(tareaId: number, porcentaje: number) {
  store.marcarTareaCompletada(proyectoId, tareaId, porcentaje)
}
function editarTarea(tarea) {
  tarea.editando = true
}

function guardarEdicionTarea(tarea) {
  tarea.editando = false
  store.guardarCambios()
}

function eliminarTarea(id: number) {
  store.eliminarTarea(proyectoId, id)
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
          <th>Nombre</th>
          <th>Completado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tarea, index) in proyecto.tareas" :key="tarea.id">
          <td>{{ index + 1 }}</td>
          <td @dblclick="editarTarea(tarea)">
            <template v-if="tarea.editando">
              <input v-model="tarea.nombre" @keyup.enter="guardarEdicionTarea(tarea)" @blur="guardarEdicionTarea(tarea)"
                class="text-black rounded px-1 text-sm" autofocus />
            </template>
            <template v-else>
              {{ tarea.nombre }}
            </template>
          </td>
          <td class="flex flex-col items-start gap-1">
            <input type="range" min="0" max="100" step="10" :value="tarea.completado"
              @input="(e) => toggleCompletado(tarea.id, Number(e.target.value))" />
            <span>{{ tarea.completado }}%</span>
            <small v-if="tarea.completado === 100 && tarea.fechaCompletado" class="text-xs text-gray-400">
              Completado: {{ new Date(tarea.fechaCompletado).toLocaleDateString() }}
            </small>
            <button @click="eliminarTarea(tarea.id)" class="text-red-500 hover:underline text-xs">
              Eliminar
            </button>
          </td>
        </tr>
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
      </tbody>
    </table>
  </div>

  <div v-else class="text-white">Proyecto no encontrado.</div>
</template>
