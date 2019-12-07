/* eslint-disable arrow-parens */
import Vue from 'vue';
import Vuex from 'vuex';
import Repository from '@/service/repository';

import mapMemberToGuide from '@/helper/store-helper';

Vue.use(Vuex);

const articles = require('@/data/articles.json');

const store = new Vuex.Store({
  state: {
    articles,
    members: [],
    cities: [],
    guides: [],
  },
  actions: {
    fetchCityGuides({ commit }, id) {
      return new Promise((resolve, reject) => {
        Repository.get(`/members/city/${id}`)
          .then(res => res.data)
          .then(data => {
            commit('SET_CITY_GUIDES', data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    fetchMembers({ commit }) {
      return new Promise((resolve, reject) => {
        Repository.get('/members')
          .then(res => res.data)
          .then(data => {
            commit('SET_MEMBERS', data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    fetchCities({ commit }) {
      return new Promise((resolve, reject) => {
        Repository.get('/cities')
          .then(res => res.data)
          .then(data => {
            commit('SET_CITIES', data);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    },
  },
  mutations: {
    SET_MEMBERS(state, members) {
      state.members = members;
    },
    SET_CITIES(state, cities) {
      state.cities = cities;
    },
    SET_CITY_GUIDES(state, guides) {
      state.guides = guides;
    },
  },
  getters: {
    mappedCities: state =>
      // eslint-disable-next-line implicit-arrow-linebreak
      state.cities.map(city => ({
        cityID: city.cityID,
        cityname: city.cityname,
        country: city.country,
        img: `${city.cityname.toLowerCase()}.jpg`,
      })),
    getGuides: state => mapMemberToGuide(state.members),
    getCityGuides: state => mapMemberToGuide(state.guides),
  },
});

export default store;
