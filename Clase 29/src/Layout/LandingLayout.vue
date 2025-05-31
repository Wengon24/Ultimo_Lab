<template> 

 <header>
    <aside class="w-64 bg-base-200 text-base-content hidden md:block"> 
    <Side/>

  </aside>
  </header>
  <<div class="flex h-screen bg-gray-900 text-white">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <Topbar />
      
    </div>
  </div> 
   <main class="flex-1 flex items-center justify-center">
      <RouterView />
    </main>
</template>

 

<script setup>
import Sidebar from './Side.vue'
import Topbar from './Top.vue'
</script>