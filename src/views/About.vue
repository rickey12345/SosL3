<script setup>
const heroImg = new URL('@/assets/image-1779990738755.jpeg', import.meta.url).href
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-black/45"></div>
    <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${heroImg})` }"></div>
    <div class="relative z-10 px-6 py-24 text-center text-white">
      <div class="mx-auto max-w-4xl rounded-3xl bg-white/10 p-10 shadow-2xl backdrop-blur-sm">
        <p class="text-sm uppercase tracking-[0.3em] text-emerald-200">About Rwanda</p>
        <h1 class="mt-4 text-4xl sm:text-5xl font-extrabold">Land of a Thousand Hills</h1>
        <p class="mt-6 text-lg sm:text-xl text-white/80">Rwanda is a compact, welcoming destination filled with mountain gorillas, shimmering lakes, vibrant communities, and rich cultural stories.</p>
      </div>
    </div>
  </section>

  <section class="py-16 px-6">
    <div class="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
      <div>
        <h2 class="text-3xl font-bold mb-4">Why visit Rwanda?</h2>
        <p class="text-gray-600 mb-6">Rwanda blends dramatic scenery with authentic hospitality. Explore national parks, learn from local guides, and discover the country’s inspiring recovery story.</p>
        <ul class="space-y-4">
          <li class="flex gap-3">
            <span class="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">🐘</span>
            <div>
              <h3 class="font-semibold">Wildlife encounters</h3>
              <p class="text-gray-600">Search for gorillas, golden monkeys, and rare birds across lush forests.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">🏞️</span>
            <div>
              <h3 class="font-semibold">Scenic landscapes</h3>
              <p class="text-gray-600">From volcanoes to tea terraces, every region offers dramatic views.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">🤝</span>
            <div>
              <h3 class="font-semibold">Culture & community</h3>
              <p class="text-gray-600">Connect with local people, crafts, music, and modern Kigali life.</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="space-y-6">
        <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <h3 class="text-xl font-semibold mb-3">Our mission</h3>
          <p class="text-gray-600">To present Rwanda as a natural and cultural destination that welcomes travelers with warm hospitality, responsible tourism, and memorable experiences.</p>
        </div>
        <div class="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
          <h3 class="text-xl font-semibold mb-3">What makes it special</h3>
          <p class="text-gray-600">A small country where nature, history, and modern life come together in a way that feels both safe and adventurous.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-6 bg-slate-50">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Plan your visit</h2>
      <p class="text-gray-600 max-w-3xl mx-auto mb-8">Whether you want gorilla trekking, peaceful lake cruises, or lively city days, Rwanda makes it easy to build a trip you’ll remember.</p>
      <a href="/" class="inline-flex rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-emerald-600">Back to home</a>
    </div>
  </section>
</template>

<style scoped>
</style>
