<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="w-full bg-white shadow-md border-b border-gray-200">
    
    <div class="max-w-7xl mx-auto px-6 py-4">
      
      <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
        
<img
  alt="sos ths"
  src="@/assets/g.png"
  width="125"
  height="125"
/>

        <div class="flex flex-col items-center gap-5 w-full">
          
          <nav class="flex flex-wrap justify-center gap-8 bg-blue-50 px-8 py-4 rounded-2xl shadow-sm">
            
            <RouterLink
              to="/"
              class="text-blue-900 font-bold text-lg hover:text-blue-500 transition duration-300"
            >
              Home
            </RouterLink>

            <RouterLink
              to="/about"
              class="text-blue-900 font-bold text-lg hover:text-blue-500 transition duration-300"
            >
              About
            </RouterLink>

            <RouterLink
              to="/admission"
              class="text-blue-900 font-bold text-lg hover:text-blue-500 transition duration-300"
            >
              Admissions
            </RouterLink>

            <RouterLink
              to="/achievements"
              class="text-blue-900 font-bold text-lg hover:text-blue-500 transition duration-300"
            >
              Achievements
            </RouterLink>

          </nav>

          <h1 class="text-4xl font-extrabold text-blue-700 underline text-center tracking-wide">
            SOS Technical High School
          </h1>

        </div>

      </div>

    </div>

  </header>

  <main class="max-w-7xl mx-auto px-6 py-8">
    <RouterView />
  </main>
</template>