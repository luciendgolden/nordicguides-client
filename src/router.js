import Vue from 'vue';
import VueRouter from 'vue-router';
import ShowGuide from '@/components/ShowGuide';
import Home from '@/views/Home.vue';
import Lapland from '@/views/Lapland.vue';
import Auroras from '@/views/Auroras.vue';
import Guides from '@/views/Guides.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/lapland', name: 'lapland', component: Lapland },
  { path: '/blog/auroras', name: 'blog-auroras', component: Auroras },
  { path: '/guides', name: 'guides', component: Guides },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/guide/:id', name: 'guide.show', component: ShowGuide },
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
