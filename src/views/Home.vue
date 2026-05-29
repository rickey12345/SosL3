<script setup>
const heroImg = new URL('@/assets/image-1779990738755.jpeg', import.meta.url).href
const img1 = new URL('@/assets/download (3).jpg', import.meta.url).href
const img2 = new URL('@/assets/download (4).jpg', import.meta.url).href
const img3 = new URL('@/assets/download (6).jpg', import.meta.url).href
const img4 = new URL('@/assets/download (7).jpg', import.meta.url).href
</script>

<template>

  <!-- HERO -->
  <section class="relative min-h-screen overflow-hidden">

    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center scale-110 animate-pulse"
      :style="{ backgroundImage: `url(${heroImg})` }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-emerald-900/60 backdrop-blur-[2px]"></div>

    <!-- Floating Blur -->
    <div class="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>
    <div class="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"></div>

    <!-- Content -->
    <div class="relative z-10 flex min-h-screen items-center justify-center px-6">
      <div class="max-w-5xl text-center text-white">

        <span
          class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.3em] shadow-2xl backdrop-blur-md"
        >
          ✨ Visit Rwanda
        </span>

        <h1
          class="mt-8 bg-gradient-to-r from-white via-emerald-200 to-sky-300 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-7xl"
        >
          Explore The Beauty <br />
          Of Rwanda
        </h1>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
          Discover mountains, wildlife, culture, luxury tourism,
          beautiful lakes, and unforgettable adventures in the heart of Africa.
        </p>

        <div class="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <a
            href="#gallery"
            class="rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_40px_rgba(16,185,129,0.5)] transition duration-300 hover:scale-110 hover:bg-emerald-400"
          >
            Explore Gallery
          </a>

          <a
            href="#highlights"
            class="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white/20"
          >
            Learn More
          </a>

        </div>

      </div>
    </div>
  </section>

  <!-- HIGHLIGHTS -->
  <section
    id="highlights"
    class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 px-6"
  >

    <div class="absolute -top-20 left-0 h-96 w-96 rounded-full bg-emerald-100 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl"></div>

    <div class="relative z-10 mx-auto max-w-7xl">

      <div class="text-center">
        <h2 class="text-5xl font-black text-slate-800">
          Why Visit Rwanda?
        </h2>

        <p class="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Rwanda combines modern cities, peaceful nature, mountain gorillas,
          luxury tourism, and rich African culture in one unforgettable destination.
        </p>
      </div>

      <div class="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

        <!-- CARD -->
        <div
          class="group rounded-[35px] border border-slate-200 bg-white/70 p-10 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
        >
          <div
            class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 text-4xl shadow-inner"
          >
            🌿
          </div>

          <h3 class="text-2xl font-bold text-slate-800">
            Wildlife & Nature
          </h3>

          <p class="mt-4 leading-8 text-slate-600">
            Trek volcanoes, visit Akagera National Park,
            and experience breathtaking gorilla adventures.
          </p>
        </div>

        <!-- CARD -->
        <div
          class="group rounded-[35px] border border-slate-200 bg-white/70 p-10 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
        >
          <div
            class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-100 text-4xl shadow-inner"
          >
            🎨
          </div>

          <h3 class="text-2xl font-bold text-slate-800">
            Rich Culture
          </h3>

          <p class="mt-4 leading-8 text-slate-600">
            Explore Kigali, traditional dance,
            local art, and authentic Rwandan hospitality.
          </p>
        </div>

        <!-- CARD -->
        <div
          class="group rounded-[35px] border border-slate-200 bg-white/70 p-10 shadow-xl backdrop-blur-xl transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
        >
          <div
            class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-100 text-4xl shadow-inner"
          >
            🏨
          </div>

          <h3 class="text-2xl font-bold text-slate-800">
            Luxury Tourism
          </h3>

          <p class="mt-4 leading-8 text-slate-600">
            Stay in premium lodges and enjoy world-class experiences across Rwanda.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section
    id="gallery"
    class="bg-slate-950 py-24 px-6"
  >

    <div class="mx-auto max-w-7xl">

      <div class="mb-16 text-center">
        <h2 class="text-5xl font-black text-white">
          Rwanda Gallery
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          A cinematic collection of Rwanda’s landscapes,
          wildlife, culture, and tourism experiences.
        </p>
      </div>

      <!-- MASONRY STYLE -->
      <div class="grid auto-rows-[250px] gap-6 md:grid-cols-2 xl:grid-cols-4">

        <!-- BIG IMAGE -->
        <div
          class="group relative overflow-hidden rounded-[35px] md:col-span-2 md:row-span-2"
        >
          <img
            :src="img1"
            alt="Rwanda"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div class="absolute bottom-8 left-8">
            <h3 class="text-3xl font-black text-white">
              Volcano Adventures
            </h3>

            <p class="mt-2 text-slate-200">
              Experience mountain trekking and gorilla tourism.
            </p>
          </div>
        </div>

        <!-- IMAGE -->
        <div class="group relative overflow-hidden rounded-[35px]">
          <img
            :src="img2"
            alt="Rwanda"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-black/30"></div>
        </div>

        <!-- IMAGE -->
        <div class="group relative overflow-hidden rounded-[35px]">
          <img
            :src="img3"
            alt="Rwanda"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-black/30"></div>
        </div>

        <!-- WIDE IMAGE -->
        <div
          class="group relative overflow-hidden rounded-[35px] md:col-span-2"
        >
          <img
            :src="img4"
            alt="Rwanda"
            class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          <div class="absolute left-8 top-8">
            <h3 class="text-2xl font-black text-white">
              Discover Kigali
            </h3>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-sky-500 py-24 px-6">

    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 h-72 w-72 rounded-full bg-white blur-3xl"></div>
      <div class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white blur-3xl"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-4xl text-center text-white">

      <h2 class="text-5xl font-black leading-tight">
        Ready To Explore Rwanda?
      </h2>

      <p class="mt-6 text-lg leading-8 text-white/90">
        Start your unforgettable journey through Rwanda’s landscapes,
        wildlife, luxury tourism, and vibrant culture.
      </p>

      <a
        href="/about"
        class="mt-10 inline-flex rounded-full bg-white px-10 py-4 text-sm font-black uppercase tracking-[0.2em] text-emerald-700 shadow-2xl transition duration-300 hover:scale-110"
      >
        About Rwanda
      </a>

    </div>
  </section>

</template> 