

import { defineStore } from "pinia";
import { ref } from "vue";

interface Tarea {
  id: number;
  nombre: string;
  completado: number;
  fechaCompletado?: string;
  editando?: boolean;
}

interface Proyecto {
  id: number;
  nombre: string;
  fecha: string;
  tareas: Tarea[];
  editando?: boolean;
}

export const useCounterStore = defineStore('counter', () => {
  const myArray = ref<Proyecto[]>([]);
  let currentId = 1;
  let tareaId = 1;

  
  function cargarDesdeLocalStorage() {
    const data = localStorage.getItem('proyectos');
    if (data) {
      myArray.value = JSON.parse(data);
     
      currentId = Math.max(0, ...myArray.value.map(p => p.id)) + 1;
      tareaId = Math.max(0, ...myArray.value.flatMap(p => p.tareas.map(t => t.id))) + 1;
    }
  }

  function guardarCambios() {
    localStorage.setItem('proyectos', JSON.stringify(myArray.value));
  }

  function addItem(item: { nombre: string; fecha: string }) {
    myArray.value.push({
      ...item,
      id: currentId++,
      tareas: []
    });
    guardarCambios();
  }

  function agregarTarea(proyectoId: number, nombre: string) {
    const proyecto = myArray.value.find(p => p.id === proyectoId);
    if (proyecto) {
      proyecto.tareas.push({
        id: tareaId++,
        nombre,
        completado: 0,
        fechaCompletado: undefined
      });
      guardarCambios();
    }
  }

  function marcarTareaCompletada(proyectoId: number, tareaId: number, porcentaje: number) {
    const proyecto = myArray.value.find(p => p.id === proyectoId);
    if (!proyecto) return;
    const tarea = proyecto.tareas.find(t => t.id === tareaId);
    if (tarea) {
      tarea.completado = porcentaje;
      tarea.fechaCompletado = porcentaje === 100 ? new Date().toISOString() : undefined;
      guardarCambios();
    }
  }

  function eliminarTarea(proyectoId: number, tareaId: number) {
    const proyecto = myArray.value.find(p => p.id === proyectoId);
    if (proyecto) {
      proyecto.tareas = proyecto.tareas.filter(t => t.id !== tareaId);
      guardarCambios();
    }
  }

  function eliminarProyecto(proyectoId: number) {
    myArray.value = myArray.value.filter(p => p.id !== proyectoId);
    guardarCambios();
  }

  cargarDesdeLocalStorage();

  return {
    myArray,
    addItem,
    agregarTarea,
    marcarTareaCompletada,
    eliminarTarea,
    eliminarProyecto,
    guardarCambios
  };
});
