<template>
  <nav>
    <v-toolbar app flat>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />
      <v-container mx-auto py-0>
        <v-layout>
          <router-link to="/">
            <v-img
              :src="require('@/assets/logo.png')"
              class="mr-5"
              contain
              height="48"
              width="48"
              max-width="48"
            />
          </router-link>
          <v-btn
            v-for="item in menu"
            :key="item.title"
            :to="item.path"
            class="ml-0 hidden-sm-and-down"
            flat
          >{{ item.title }}</v-btn>
          <v-spacer />
          <v-text-field append-icon="mdi-magnify" flat hide-details style="max-width: 300px;" />
          <v-spacer />
          <v-btn color="primary" @click="login" flat icon>
            <v-icon>mdi-login</v-icon>
          </v-btn>
          <v-avatar>
            <img :src="require('@/assets/guide/no-avatar.png')" alt="Not logged in" />
          </v-avatar>
        </v-layout>
      </v-container>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app dark temporary>
      <v-list>
        <v-list-tile v-for="item in menu" :key="item.title" :to="item.path">
          <v-list-tile-title v-text="item.title" />
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: 'FINVILLE',
      drawer: false,
      redirect: 'http://nordicguides-server.test/api/members',
      menu: [
        {
          title: 'Home',
          path: '/',
          icon: 'home',
        },
        {
          title: 'Lapland',
          path: '/lapland',
        },
        {
          title: 'Blog',
          path: '/blog/auroras',
        },
        {
          title: 'Guides',
          path: '/guides',
        },
        {
          title: 'Cities',
          path: '/cities',
        },
        {
          title: 'About',
          path: '/about',
        },
        {
          title: 'Contact',
          path: '/contact',
        },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    login() {
      location.href = this.redirect;
    },
  },
};
</script>
