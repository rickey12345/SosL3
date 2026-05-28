<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue';
</script>

<template>
  <Navbar />
  <main class="max-w-6xl mx-auto p-4 mt-16">
    <RouterView />
    <Footer/>
  </main>
</template>