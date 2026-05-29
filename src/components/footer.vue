<template>
  <footer
    class="bg-green-800 text-white px-6 py-6 mt-12 transition-all duration-700"
    :class="showFooter ? 'fixed bottom-0 inset-x-0 z-50' : 'hidden'"
  >
    <div class="flex flex-wrap justify-between gap-10">

      <!-- Logo / Intro -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          TEMBERA U RWANDA
        </h3>

        <p class="text-green-200">
          Discover the beauty
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3 underline">
          Quick Links
        </h3>

        <ul class="space-y-2 text-right">

          <li>
            <RouterLink
              to="/"
              class="hover:text-yellow-300 font-bold"
            >
              Home
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/about"
              class="hover:text-yellow-300 font-bold"
            >
              About
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/services"
              class="hover:text-yellow-300 font-bold"
            >
              Services
            </RouterLink>
          </li>

          <!-- Gallery Dropdown -->
          <li class="relative group">
            <RouterLink
              to="/gallery"
              class="hover:text-yellow-300 font-bold"
            >
              Gallery
            </RouterLink>

            <ul
              class="absolute left-0 mt-2 w-40 bg-green-600 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-700">
                  Images
                </a>
              </li>

              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-700">
                  Videos
                </a>
              </li>
            </ul>
          </li>

          <!-- Destination Dropdown -->
          <li class="relative group">
            <RouterLink
              to="/destination"
              class="hover:text-yellow-300 font-bold"
            >
              Destination
            </RouterLink>

            <ul
              class="absolute left-0 mt-2 w-40 bg-green-600 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
            >
              <li><RouterLink to="/kigali" class="block px-4 py-2 hover:bg-green-700">Kigali</RouterLink></li>
              <li><RouterLink to="/southern" class="block px-4 py-2 hover:bg-green-700">South</RouterLink></li>
              <li><RouterLink to="/western" class="block px-4 py-2 hover:bg-green-700">West</RouterLink></li>
              <li><RouterLink to="/northern" class="block px-4 py-2 hover:bg-green-700">North</RouterLink></li>
              <li><RouterLink to="/eastern" class="block px-4 py-2 hover:bg-green-700">East</RouterLink></li>
            </ul>
          </li>

          <li>
            <RouterLink
              to="/contact"
              class="hover:text-yellow-300 font-bold"
            >
              Contact
            </RouterLink>
          </li>

        </ul>
      </div>

      <!-- Destinations -->
      <div class="text-center">
        <h3 class="text-yellow-300 text-lg mb-3">
          Destinations
        </h3>

        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/northern" class="hover:text-yellow-300">North</RouterLink></li>
          <li><RouterLink to="/southern" class="hover:text-yellow-300">South</RouterLink></li>
          <li><RouterLink to="/western" class="hover:text-yellow-300">West</RouterLink></li>
          <li><RouterLink to="/eastern" class="hover:text-yellow-300">East</RouterLink></li>
          <li><RouterLink to="/kigali" class="hover:text-yellow-300">Kigali</RouterLink></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-yellow-300 text-lg mb-3">
          Contact
        </h3>

        <ul class="space-y-2 text-sm">
          <li>+250 788447240</li>
          <li>ahantunyaburanga@gmail.com</li>
          <li>Kagugu - Kigali - Rwanda</li>
        </ul>
      </div>

    </div>

    <!-- Bottom -->
    <div class="border-t border-green-600 mt-6 pt-4 text-center text-sm text-green-200">
      <p>&copy; 2026 Tembera U Rwanda. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showFooter = ref(false)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  // Show footer only when user reaches bottom
  showFooter.value =
    scrollTop + windowHeight >= documentHeight - 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>