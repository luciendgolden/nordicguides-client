// eslint-disable-next-line import/no-extraneous-dependencies
import '@mdi/font/css/materialdesignicons.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuetify/dist/vuetify.min.css';

import BaseBtn from '@/components/base/Btn.vue';
import BaseCard from '@/components/base/Card.vue';
import BaseSubheading from '@/components/base/Subheading.vue';

Vue.use(Vuetify, {
  theme: {
    primary: '#ff4f2b',
    secondary: '#429798',
  },
  iconfont: 'mdi',
});

Vue.component(BaseBtn.name, BaseBtn);
Vue.component(BaseCard.name, BaseCard);
Vue.component(BaseSubheading.name, BaseSubheading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
