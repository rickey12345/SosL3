import HomeView from '@/views/Home.vue'
import About from '@/views/About.vue'
import Gallery from '@/views/gallery.vue'
import Destination from '@/views/destination.vue'
import Contact from '@/views/contact.vue'
import Services from '@/views/services.vue'
import Kigali from '@/views/kigali.vue'
import Western from '@/views/western.vue'
import Eastern from '@/views/eastern.vue'
import Southern from '@/views/southern.vue'
import Northern from '@/views/northern.vue'

export const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/services', name: 'Services', component: Services },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/destination', name: 'Destination', component: Destination },
  { path: '/kigali', name: 'Kigali', component: Kigali },
  { path: '/northern', name: 'North', component: Northern },
  { path: '/eastern', name: 'East', component: Eastern },
  { path: '/southern', name: 'South', component: Southern },
  { path: '/western', name: 'West', component: Western },
]

export default routes
