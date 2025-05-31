
<template>
  <aside class="w-64 bg-gray-800 text-white h-screen p-4 relative">
    <h1 class="text-lg font-bold mb-4">Projects App</h1>

    <nav class="space-y-2">
      <div>Item 1</div>

      <div>
        <div class="font-semibold">Parent</div>
        <ul class="pl-4 space-y-1 text-sm">
          <li>Submenu 1</li>
          <li>Submenu 2</li>
        </ul>
      </div>

      <div>
        <div class="font-semibold">Parent</div>
        <ul class="pl-4 space-y-1 text-sm">
          <li>Submenu 1</li>
          <li>Submenu 2</li>
        </ul>
      </div>

      <div>Item 3</div>
    </nav>

    <button class="absolute bottom-4 left-4 bg-pink-500 text-white p-3 rounded-full text-lg shadow-md">
      +
    </button>
  </aside>
</template>

