
<script setup>
import Sidebar from '../components/Side.vue'
import Topbar from '../components/Top.vue'
import { ref, provide } from 'vue'


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
    
  </div> 
</template>
