<template>
  <v-flex xs12 md6>
    <base-card :height="350" color="grey lighten-1" dark>
      <v-img
        :src="require(`@/assets/articles/${article.img}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-layout fill-height wrap text-xs-right ma-0>
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop
            >{{article.category}}</v-chip>
            <h3 class="title font-weight-bold mb-2">{{article.title}}</h3>
            <v-layout>
              <v-flex xs12 md10 offset-md2>
                <div class="subtitle">{{article.subheader}}</div>
              </v-flex>
            </v-layout>
            <div class="caption">
              <br />
              {{article.date}}
            </div>
          </v-flex>
          <v-flex align-self-end>
            <div v-if="article.path">
              <router-link :to="article.path">
                <v-chip class="text-uppercase ma-0" color="primary" label small>Read More</v-chip>
              </router-link>
            </div>
            <div v-else>
              <v-chip class="text-uppercase ma-0" color="primary" label small>Read More</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-img>
    </base-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  }
};
</script>
