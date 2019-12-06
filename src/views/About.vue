<template>
  <div class="about">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from '@/components/HeroParallex.vue';

export default {
  name: 'about',
  data() {
    return {
      displayInfo: {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: 'about/me.jpg',
        header: 'ABOUT',
        cta: false,
      },
    };
  },
  components: { HeroParallex },
};
</script>