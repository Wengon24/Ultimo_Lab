import { defineStore } from "pinia";
import { ref } from "vue";

interface Tarea {
  id: number;
  nombre: string;
  completado: boolean;
  fechaCompletado?: string;
}

interface Proyecto {
  id: number;
  nombre: string;
  fecha: string;
  tareas: Tarea[];
}

export const useCounterStore = defineStore('counter', () => {
  const myArray = ref<Proyecto[]>([])
  let currentId = 1
  let tareaId = 1

  function addItem(item: { nombre: string; fecha: string }) {
    myArray.value.push({ ...item, id: currentId++, tareas: [] })
  }

  function agregarTarea(proyectoId: number, nombre: string) {
    const proyecto = myArray.value.find(p => p.id === proyectoId)
    if (proyecto) {
      proyecto.tareas.push({ id: tareaId++, nombre, completado: false })
    }
  }

  
  function marcarTareaCompletada(proyectoId: number, tareaId: number, porcentaje: number) {
    const proyecto = myArray.value.find(p => p.id === proyectoId)
    if (!proyecto) return
    const tarea = proyecto.tareas.find(t => t.id === tareaId)
    if (tarea) {
      tarea.completado = porcentaje
      tarea.fechaCompletado = porcentaje === 100 ? new Date().toISOString() : undefined
    }
  }

  return {
    myArray,
    addItem,
    agregarTarea,
    marcarTareaCompletada
  }
})

