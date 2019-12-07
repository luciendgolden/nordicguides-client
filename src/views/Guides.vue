<template>
  <div class="guides">
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
                  <div class="section-heading text-uppercase">We are here to help</div>
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
  computed: {
    guides() {
      return this.$store.getters.getGuides;
    },
  },
  components: { HeroParallex, GuideList },
};
</script>
