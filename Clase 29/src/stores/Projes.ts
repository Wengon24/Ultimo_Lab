import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const myArray = ref<{ id: number; nombre: string; fecha: string; tareas: any[] }[]>([])
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

  return {
    myArray,
    addItem,
    agregarTarea
  }
})
