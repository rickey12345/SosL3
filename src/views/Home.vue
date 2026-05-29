<script setup>
const heroImg = new URL('@/assets/image-1779990738755.jpeg', import.meta.url).href
const img1 = new URL('@/assets/download (3).jpg', import.meta.url).href
const img2 = new URL('@/assets/download (4).jpg', import.meta.url).href
const img3 = new URL('@/assets/download (6).jpg', import.meta.url).href
const img4 = new URL('@/assets/download (7).jpg', import.meta.url).href
const logo = new URL('@/assets/logo (2).png', import.meta.url).href
</script>

<template>
  <section class="features py-12 px-6 max-w-5xl mx-auto">
    <h2 class="text-2xl font-bold text-center mb-6">Explore Rwanda</h2>
    <p class="text-center mb-8">From terraced hills to vibrant city life, Rwanda invites visitors to discover its landscapes, wildlife, and culture. Start with these highlights:</p>
    <div
      class="h-screen bg-cover bg-center flex items-center justify-center "
      :style="{ backgroundImage: `url(${heroImg})` }"
    >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card p-4 bg- green-500 rounded shadow">
        <h3 class="font-semibold mb-2">Nature</h3>
        <p>Visit Volcanoes National Park to see mountain gorillas and hike scenic trails.</p>
      </div>
      <div class="card p-4  rounded shadow">
        <h3 class="font-semibold mb-2">Culture</h3>
        <p>Experience local markets, traditional dance, and community-led tours.</p>
      </div>
      <div class="card p-4  rounded shadow">
        <h3 class="font-semibold mb-2 text-white">Stay</h3>
        <p>Find cozy guesthouses on hilltops and modern hotels in Kigali.</p>
      </div>
    </div>
    </div>
  </section>

  <!-- Photo Gallery Section -->
  <section class="gallery py-12 px-6 bg-gray-50">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-8">Gallery</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="overflow-hidden rounded-lg shadow-lg">
          <img :src="img1" alt="Rwanda gallery image 1" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
        </div>
        <div class="overflow-hidden rounded-lg shadow-lg">
          <img :src="img2" alt="Rwanda gallery image 2" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
        </div>
        <div class="overflow-hidden rounded-lg shadow-lg">
          <img :src="img3" alt="Rwanda gallery image 3" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
        </div>
        <div class="overflow-hidden rounded-lg shadow-lg">
          <img :src="img4" alt="Rwanda gallery image 4" class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
        </div>
      </div>
    </div>
  </section>
  </template>
