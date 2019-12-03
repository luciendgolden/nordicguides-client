<template>
  <div class="lapland">
    <v-container fluid pa-0>
      <HeroParallex :item="showItem" />
    </v-container>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-container fluid>
              <v-layout align-center justify-space-around row wrap>
                <v-flex xs12 sm5 class="mt-5 mb-5">
                  <div class="section-heading">THE MAGICAL, MYTHICAL LAPLAND</div>
                  <div
                    class="subheading mt-5"
                  >Finnish Lapland is as close as reality gets to those who dream of a winter wonderland. Contrasts are a key factor in the allure of Lapland where 24-hour sunlight in the summer replaces the dark winter days. The hustle and bustle of towns and ski resorts is just minutes away from the peace and quiet of the wild wilderness.</div>
                </v-flex>
                <v-flex xs12 sm5 class="mt-5 mb-5">
                  <div class="section-heading">LAPLAND IN FIGURES</div>
                  <div
                    class="subheading mt-5"
                  >Finnish Lapland is as close as reality gets to those who dream of a winter wonderland. Contrasts are a key factor in the allure of Lapland where 24-hour sunlight in the summer replaces the dark winter days. The hustle and bustle of towns and ski resorts is just minutes away from the peace and quiet of the wild wilderness.</div>
                </v-flex>
              </v-layout>
            </v-container>
            <photo-grip :items="articles" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.v-parallax__content {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45));
}
</style>

<script>
import { mapState } from 'vuex';

import HeroParallex from '@/components/HeroParallex.vue';
import PhotoGrip from '@/components/PhotoGrip.vue';

export default {
  name: 'lapland',
  data() {
    return {
      showItem: {
        alignment: 'align-start',
        justify: 'justify-center',
        fillHeight: true,
        img: 'hero-bg.jpg',
        header: 'Destinations Lapland',
        subtitle:
          'Finnish Lapland is as close as reality gets to those who dream of a winter wonderland. Contrasts are a key factor in the allure of Lapland where 24-hour sunlight in the summer replaces the dark winter days. The hustle and bustle of towns and ski resorts is just minutes away from the peace and quiet of the wild wilderness.',
        cta: true,
      },
    };
  },
  computed: mapState(['articles']),
  components: { HeroParallex, PhotoGrip },
};
</script>
