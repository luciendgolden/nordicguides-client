<template>
  <div v-if="city" class="city-guide">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-container>
              <v-layout>
                <v-flex xs12 class="mt-5 mb-5">
                  <div
                    class="section-heading text-uppercase"
                  >Guides {{ city.country }} - {{ city.cityname }}</div>
                </v-flex>
              </v-layout>
            </v-container>
            <guide-list :guides="guides" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from '@/components/HeroParallex.vue';
import GuideList from '@/components/GuideList.vue';

import Repository from '@/service/repository';

import { mapGetters } from 'vuex';

export default {
  name: 'city-guide',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cities: 'mappedCities',
      guides: 'getCityGuides',
    }),
    city() {
      let cityId = this.$route.params.id;
      return this.cities.find(element => element.cityID == cityId);
    },
    displayInfo() {
      let img = this.city.img;
      let name = this.city.cityname.toUpperCase();
      return {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: `cities/${img}`,
        header: name,
        cta: false,
      };
    },
  },
  created() {
    let id = this.$route.params.id;

    this.$store.dispatch('fetchCityGuides', id);
  },
  components: { HeroParallex, GuideList },
};
</script>