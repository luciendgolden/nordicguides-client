/* eslint-disable arrow-parens */
import Vue from 'vue';
import Vuex from 'vuex';
import Repository from '@/service/repository';

Vue.use(Vuex);

const articles = require('@/data/articles.json');

const store = new Vuex.Store({
  state: {
    articles,
    members: [],
  },
  actions: {
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
  },
  mutations: {
    SET_MEMBERS(state, members) {
      state.members = members;
    },
  },
  getters: {
    getGuides: state => {
      const cardImages = ['autumn.jpg', 'huskey.jpg', 'midnight.jpg', 'santa.jpg', 'winter.jpg'];

      return state.members.map(member => ({
        avatar: member.profileimage || 'no-avatar.png',
        img: cardImages[Math.floor(Math.random() * cardImages.length)],
        info: 'We are here to help',
        personInfo: {
          id: member.memberID,
          firstname: member.firstname,
          lastname: member.lastname,
          birthdate: member.birthdate || 'N/A',
          street: `${member.street}`,
          city: member.city,
          zip: member.zip,
          phone: member.phone || 'N/A',
          email: member.email,
          role: member.role,
          driverslicense: member.driverslicense || 'N/A',
        },
      }));
    },
  },
});

export default store;
