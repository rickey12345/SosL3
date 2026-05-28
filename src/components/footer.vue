<template>
<footer class=" px-6 fixed inset-x-0 bottom-0   bg-green-800 text-white text-center py-4 mt-12  ">
<div class="flex flex-wrap justify-between gap-15">
<div>
<h3 class="text-yellow-300 font-bold text-ig mg-3">TEMBERA U RWANDA</h3>
<p class=" text-green-200 ">Discover the beauty</p>
</div>
<div>
    <h3 class="text-yellow-300 font bold text-lg mb-3 font-underline text-5m text-right text-underline">Quick links</h3>
    <ul class="space-y-text-sm text-right">
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
            <ul class="absolute left-0 mt-2 w-40 bg-green-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <li>
              <a href="#" class="block px-4 py-2 hover:bg-green-7">Images</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-green-700">Videos</a>
            </li>
          </ul>
          </li>
            <li class="relative group">
          <RouterLink to="/destination" class="px-3 py-2 text-white font-bold text-center">Destination</RouterLink>
           <ul class="absolute left-0 mt-2 w-40 bg-green-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <li><RouterLink to="/kigali"class="block px-4 py-2 hover:bg-green-700">Kigali</RouterLink></li>
            <li><RouterLink to="/southern"class="block px-4 py-2 hover:bg-green-700">South</RouterLink></li>
            <li><RouterLink to="/western"class="block px-4 py-2 hover:bg-green-700">West</RouterLink></li>
            <li><RouterLink to="/northern"class="block px-4 py-2 hover:bg-green-700">North</RouterLink></li>
            <li><RouterLink to="/eastern"class="block px-4 py-2 hover:bg-green-700">East</RouterLink></li>
          </ul>
          </li>
            <li>
          <RouterLink to="/contact" class="px-3 py-2 text-white font-bold ">Contact</RouterLink>
        </li>
    </ul>
</div>
<div class="text-center">
    <h3 class="text-yellow-300 text-ig mb-3 mg-top-120  ">Destinations</h3>
    <ul class="space-y-2 text-sm">
        <li> <RouterLink to="/northern" class="hover:text-yellow-300">North</RouterLink></li>
         <li><RouterLink to="/southern" class="hover:text-yellow-300">South</RouterLink></li>
            <li><RouterLink to="/eastern" class="hover:text-yellow-300">West</RouterLink></li>
               <li><RouterLink to="/eastern" class="hover:text-yellow-300">East</RouterLink></li>
                  <li><RouterLink to="/Kigali" class="hover:text-yellow-300">Kigali </RouterLink></li>
    </ul>
</div>
<div>
    <h3 class="text-yellow-300">Contact</h3>
    <ul>
        <li>+250 788447240</li>
        <li>ahantunyaburanga@gmail.com</li>
        <li>kagugu-kigali-Rwanda</li>
    </ul>
</div>
<div>
    
</div>
</div>
<div>
  <p>&copy; 2022 Tembera U Rwanda.All Right Reserved</p>
</div>
    </footer>
</template>