<template>
  <nav
    class="fixed inset-x-0 top-0 bg-green-800 h-16 flex items-center justify-between px-6 shadow-md z-50"
  >

    <!-- Logo -->
    <div>
      <img
        src="@/assets/logo (2).png"
        class="h-12"
        alt="Logo"
      />
    </div>

    <!-- Menu -->
    <ul class="flex items-center gap-8 text-white font-bold">

      <li>
        <RouterLink to="/">
          {{ language === 'en' ? 'Home' : 'Ahabanza' }}
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/about">
          {{ language === 'en' ? 'About' : 'Ibyerekeye' }}
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/services">
          {{ language === 'en' ? 'Services' : 'Serivisi' }}
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/gallery">
          {{ language === 'en' ? 'Gallery' : 'Amafoto' }}
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/destination">
          {{ language === 'en' ? 'Destination' : 'Aho Gusura' }}
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/contact">
          {{ language === 'en' ? 'Contact' : 'Twandikire' }}
        </RouterLink>
      </li>

      <!-- Language -->
      <li>
        <select
          v-model="language"
          class="text-black rounded-md px-2 py-1"
        >
          <option value="en">English</option>
          <option value="rw">Kinyarwanda</option>
        </select>
      </li>

    </ul>

  </nav>

 
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const language = ref('en')
</script>