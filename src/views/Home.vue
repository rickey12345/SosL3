<script setup>
const heroImg = new URL('@/assets/image-1779990738755.jpeg', import.meta.url).href
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
</template>
