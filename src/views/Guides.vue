<template>
  <div class="guides">
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
                  <div class="section-heading text-uppercase">We are here to help</div>
                </v-flex>
                <v-flex v-for="(guide, index) in guides" :key="index" xs12 sm4>
                  <FlipCard>
                    <template slot="front">
                      <tour-guide :item="guide"></tour-guide>
                    </template>
                    <template slot="back">
                      <v-card>
                        <v-img :src="require(`@/assets/section/${guide.img}`)" />
                        <v-card-title primary-title>
                          <div>
                            <div class="headline">About me</div>
                            <span class="grey--text">{{ guide.info }}</span>
                          </div>
                          <div class="mt-3">
                            <span>Email: {{ guide.personInfo.email }}</span>
                            <br />
                            <span>Birthday: {{ guide.personInfo.birthdate }}</span>
                            <br />
                            <span>Address: {{ guide.personInfo.street }}</span>
                            <br />
                            <span>Phone: {{ guide.personInfo.phone }}</span>
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="exploreGuide(guide)">
                            <strong>Explore</strong>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </FlipCard>
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
import FlipCard from '@/components/base/FlipCard.vue';
import TourGuide from '@/components/TourGuide.vue';

export default {
  name: 'guides',
  data() {
    return {
      displayInfo: {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: 'section/hero-guides-bg.jpg',
        header: 'GUIDES',
        cta: false,
      },
    };
  },
  methods: {
    exploreGuide(evt) {
      const userId = evt.personInfo.id;
      this.$router.push({ name: 'guide.show', params: { id: userId } });
    },
  },
  computed: {
    guides() {
      return this.$store.getters.getGuides;
    },
  },
  components: { HeroParallex, FlipCard, TourGuide },
};
</script>
