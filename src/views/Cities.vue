<template>
  <div class="about">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-container grid-list-xl fluid>
              <v-layout row wrap>
                <v-flex xs12 class="mt-5 mb-5">
                  <div class="section-heading text-uppercase">Visit our cities</div>
                </v-flex>
                <v-flex v-for="(city, index) in cities" :key="index" xs12 sm4>
                  <v-card>
                    <v-img :src="require(`@/assets/cities/${city.img}`)" aspect-ratio="1.75"></v-img>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">{{city.cityname}}</h3>
                        <div>{{city.country}}</div>
                      </div>
                    </v-card-title>

                    <v-card-actions>
                      <v-btn flat color="primary" @click="showCityGuide(city)">
                        <strong>Show guides</strong>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from '@/components/HeroParallex.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'cities',
  data() {
    return {
      displayInfo: {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: 'section/hero-cities-bg.jpg',
        header: 'CITIES',
        cta: false,
      },
    };
  },
  methods: {
    showCityGuide(evt) {
      const cityId = evt.cityID;
      this.$router.push({ name: 'cityguides.show', params: { id: cityId } });
    },
  },
  computed: {
    ...mapGetters({
      cities: 'mappedCities',
    }),
  },
  components: { HeroParallex },
};
</script>