<!-- 
<template>
  <div class="flex h-screen bg-gray-900 text-white flex-col">
    <div>
      <Topbar />
    </div>

  
    <div class="flex flex-1 overflow-hidden">
    
      <aside class="w-64 bg-gray-800 p-4 overflow-auto">
       <Sidebar />
      </aside>

      <main class="flex-1 relative overflow-auto p-4">
        <RouterView />

       
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Side.vue'
import Topbar from '../components/Top.vue'
</script> -->

<script setup>
import Sidebar from '../components/Side.vue'
import Topbar from '../components/Top.vue'
import { ref, provide } from 'vue'

const isModalOpen = ref(false)

provide('modalControl', {
  isModalOpen,
  openModal: () => { isModalOpen.value = true },
  closeModal: () => { isModalOpen.value = false },
})
</script>

<template>
  <div class="flex h-screen bg-gray-900 text-white flex-col">
    <div>
      <Topbar />
    </div>

    <div class="flex flex-1 overflow-hidden">
      <aside class="w-64 bg-gray-800 p-4 overflow-auto">
        <Sidebar />
      </aside>

      <main class="flex-1 relative overflow-auto p-4">
        <RouterView />
      </main>
    </div>
    
    <!-- Modal global -->
    <dialog :open="isModalOpen" class="modal" @close="isModalOpen = false">
      <div class="modal-box">
        <h3 class="text-lg font-bold">¡Hola!</h3>
        <p class="py-4 text-blue-500">Presiona ESC o haz clic en el botón para cerrar</p>
        <div class="modal-action">
          <button class="btn" @click="isModalOpen = false">Cerrar</button>
        </div>
      </div>
    </dialog>
  </div> 
</template>
