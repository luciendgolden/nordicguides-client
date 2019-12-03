<template>
  <div class="app">
    <v-app>
      <navbar />
      <Content />
      <Footer />
      <ScrollUp />
    </v-app>
  </div>
</template>

<style>
.sh-w-div {
  font-weight: 700;
  text-align: start !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #222222;
  font-size: 2rem;
  font-family: Montserrat;
  text-align: -webkit-center;
}

.section-heading {
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #222222;
  font-size: 2rem;
  font-family: Montserrat;
  text-align: -webkit-center;
}

.section-heading::after {
  content: "";
  display: block;
  width: 30%;
  border: 2px solid #ff4f2b;
  margin-top: 25px !important;
}
</style>

<script>
import Navbar from '@/components/core/Navbar.vue';
import Content from '@/components/core/Content.vue';
import Footer from '@/components/core/MyFooter.vue';
import ScrollUp from '@/components/core/ScrollUp.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Content,
    Footer,
    ScrollUp,
  },
};
</script>
