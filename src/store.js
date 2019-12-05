/* eslint-disable arrow-parens */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const articles = require('@/data/articles.json');

const baseUrl = 'http://nordicguides-server.test/api';

const store = new Vuex.Store({
  state: {
    articles,
    members: [],
    groups: [],
  },
  actions: {
    fetchMembers({ commit }) {
      axios
        .get(`${baseUrl}/members`)
        .then(res => res.data)
        .then(data => commit('SET_MEMBERS', data))
        .catch(err => console.log(err));
    },
    fetchGroups({ commit }, member) {
      axios
        .get(`${baseUrl}/group/${member.id}`)
        .then(res => res.data)
        .then(data => commit('SET_GROUPS', data))
        .catch(err => console.log(err));
    },
  },
  mutations: {
    SET_MEMBERS(state, members) {
      state.members = members;
    },
    SET_GROUPS(state, groups) {
      state.groups = groups;
    },
  },
  getters: {
    getGuides: state => {
      const cardImages = ['autumn.jpg', 'huskey.jpg', 'midnight.jpg', 'santa.jpg', 'winter.jpg'];

      return state.members.map(member => ({
        id: member.memberID,
        avatar: member.profileimage || 'no-avatar.png',
        img: cardImages[Math.floor(Math.random() * cardImages.length)],
        info: 'We are here to help',
        personInfo: {
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
