<template>
  <nav class="fixed inset-x-0 top-0 bg-green-800 h-16 flex items-center justify-between px-6 shadow-md z-20">
    <div class="flex items-center gap-3">
      <img
        src="@/assets/logo (2).png"
        alt="Logo (2)"
        class="h-12 w-auto"
      />
    </div>

    
    <div class="flex items-center gap-4">
      <ul class="flex gap-8 text-sm font-medium text-white items-center">

        <li>
          <RouterLink to="/" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Home</RouterLink>
        </li>

        <li>
          <RouterLink to="/about" class="px-3 py-2 text-white font-bold hover:text-yellow-300">About</RouterLink>
        </li>

        <li>
          <RouterLink to="/services" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Services</RouterLink>
        </li>

     
        <li class="relative group">
          <RouterLink to="/gallery" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Gallery</RouterLink>
          </li>

          <ul class="absolute left-0 mt-2 w-40 bg-green-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <li>
              <a href="#" class="block px-4 py-2 hover:bg-green-700">Images</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-green-700">Videos</a>
            </li>
          </ul>
        

        
        <li class="relative group">
          <RouterLink to="/destination" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Destination</RouterLink>

          <ul class="absolute left-0 mt-2 w-40 bg-green-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <li><RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</RouterLink>   </li>

            <li><RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">South</RouterLink>   </li>

            <li><RouterLink to="/western"class="block px-4 py-2 hover:bg-green-700">West</RouterLink>   </li>

            <li><RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">North</RouterLink>   </li>

            <li><RouterLink to="/eastern"class="block px-4 py-2 hover:bg-green-700">East</RouterLink>   </li>

          </ul>
        </li>

        <li>
          <RouterLink to="/contact" class="px-3 py-2 text-white font-bold hover:text-yellow-300">Contact</RouterLink>
        </li>

      </ul>
    </div>

  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>