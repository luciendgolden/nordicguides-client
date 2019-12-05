<template>
  <div class="show-guide">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-spacer></v-spacer>
            <v-avatar class="ma-3" size="150" color="grey lighten-4">
              <v-img
                :src="require(`@/assets/guide/${guide.profileimage}`)"
                :lazy-src="require(`@/assets/guide/${guide.profileimage}`)"
                alt="avatar"
              />
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <div class="sh-w-div">{{ guide.firstname }} {{ guide.lastname }}</div>
                <span class="grey--text">1,000 miles of wonder</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from '@/components/HeroParallex.vue';

import { mapState } from 'vuex';

export default {
  name: 'show-guide',
  data() {
    return {
      displayInfo: {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: 'hero-guides-bg.jpg',
        header: 'EXPLORE',
        cta: false,
      },
    };
  },
  methods: {},
  computed: {
    guide() {
      let id = this.$route.params.id;
      return this.members.find(element => element.memberID == id);
    },
    ...mapState(['members']),
  },
  components: { HeroParallex },
};
</script>
