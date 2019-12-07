import Vue from 'vue';
import VueRouter from 'vue-router';

import ShowGuide from '@/components/ShowGuide';
import CityGuides from '@/components/CityGuides';
import NotFound from '@/components/core/NotFound';

import Home from '@/views/Home.vue';
import Lapland from '@/views/Lapland.vue';
import Auroras from '@/views/Auroras.vue';
import Guides from '@/views/Guides.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About';
import Cities from '@/views/Cities';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/lapland', name: 'lapland', component: Lapland },
  { path: '/blog/auroras', name: 'blog-auroras', component: Auroras },
  { path: '/guides', name: 'guides', component: Guides },
  { path: '/cities', name: 'cities', component: Cities },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/guide/:id', name: 'guide.show', component: ShowGuide },
  { path: '/cityguides/:id', name: 'cityguides.show', component: CityGuides },
  { path: '*', component: NotFound },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
