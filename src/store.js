import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const articles = require('@/data/articles.json');

const store = new Vuex.Store({
  state: {
    articles,
  },
});

export default store;
