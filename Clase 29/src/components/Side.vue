
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/Projes'
import { ref } from 'vue'

const store = useCounterStore()
const router = useRouter()

function verProyecto(id: number) {
  router.push({ name: 'proyecto', params: { id } })
}

const abiertos = ref<number[]>([])

function toggleProyecto(id: number) {
  if (abiertos.value.includes(id)) {
    abiertos.value = abiertos.value.filter(pid => pid !== id)
  } else {
    abiertos.value.push(id)
  }
}
</script>

<template>
  <aside>
    <h1 class="text-lg font-bold mb-4">Proyectos</h1>

    <p v-if="store.myArray.length === 0" class="text-sm text-gray-400 mb-4">
      No hay proyectos
    </p>

    <nav class="space-y-2 text-sm">
      <div v-for="proyecto in store.myArray" :key="proyecto.id" class="cursor-pointer space-y-1">
       
        <div
          class="font-semibold flex justify-between items-center"
        >
          <span @click="verProyecto(proyecto.id)" class="hover:underline">
            {{ proyecto.nombre }}
          </span>
          <span @click="toggleProyecto(proyecto.id)" class="cursor-pointer">
            {{ abiertos.includes(proyecto.id) ? '▲' : '▼' }}
          </span>
        </div>

        <ul v-if="abiertos.includes(proyecto.id)" class="pl-4 space-y-1">
          <li v-for="tarea in proyecto.tareas" :key="tarea.id" class="text-gray-300">
            {{ tarea.nombre }}
          </li>
        </ul>
      </div>
    </nav>

    <button
      class="absolute bottom-4 left-4 bg-pink-500 text-white p-3 rounded-full text-lg shadow-md"
      @click="openModalFromSidebar"
    >
      Hola!!
    </button>
  </aside>
</template>

