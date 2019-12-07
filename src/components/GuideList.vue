<template>
  <div class="guide-list">
    <v-container grid-list-xl fluid>
      <v-layout row wrap align-center justify-center>
        <v-flex v-for="(guide, index) in guides" :key="index" xs12 sm4 md4 class="ma-5">
          <FlipCard>
            <template slot="front">
              <tour-guide :item="guide"></tour-guide>
            </template>
            <template slot="back">
              <v-card>
                <v-img :src="require(`@/assets/section/${guide.img}`)" />
                <v-card-title primary-title>
                  <v-flex xs12>
                    <div class="headline">About me</div>
                    <span class="grey--text">{{ guide.info }}</span>
                  </v-flex>
                  <v-flex xs12 class="mt-3">
                    <span>Email: {{ guide.personInfo.email }}</span>
                    <br />
                    <span>Birthday: {{ guide.personInfo.birthdate }}</span>
                    <br />
                    <span>Address: {{ guide.personInfo.street }}</span>
                    <br />
                    <span>Phone: {{ guide.personInfo.phone }}</span>
                  </v-flex>
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
  </div>
</template>

<script>
import FlipCard from '@/components/base/FlipCard.vue';
import TourGuide from '@/components/TourGuide.vue';

export default {
  name: 'guide-list',
  props: {
    guides: Array,
  },
  data() {
    return {};
  },
  methods: {
    exploreGuide(evt) {
      const userId = evt.personInfo.id;
      this.$router.push({ name: 'guide.show', params: { id: userId } });
    },
  },
  components: { FlipCard, TourGuide },
};
</script>