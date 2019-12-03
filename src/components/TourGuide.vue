<template>
  <v-card>
    <v-img :src="require(`@/assets/articles/${item.img}`)" />
    <v-layout column align-center justify-center>
      <v-flex xs12 style="margin-top: -100px !important">
        <v-avatar size="150" color="grey lighten-4">
          <img :src="require(`@/assets/guide/${item.avatar}`)" alt="avatar" />
        </v-avatar>
      </v-flex>
      <v-flex xs12>
        <div class="headline">{{item.personInfo.name}}</div>
      </v-flex>
      <v-flex xs12>
        <div class="subtitle font-weight-bold">
          <v-icon color="secondary">mdi-account</v-icon>Guide
        </div>
      </v-flex>
    </v-layout>
    <v-card-actions>
      <v-btn icon>
        <v-icon class="mr-1" color="grey">mdi-heart</v-icon>
      </v-btn>
      <span class="subheading mr-2">{{ randomNumber }}</span>
      <span class="mr-1">·</span>
      <v-btn icon>
        <v-icon class="mr-1" color="grey">mdi-share-variant</v-icon>
      </v-btn>
      <span class="subheading">{{ randomNumber }}</span>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.v-avatar .v-icon,
.v-avatar .v-image,
.v-avatar img {
  border: 5px solid #fff;
}
</style>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    randomNumber() {
      return Math.floor(Math.random() * 50) + 1;
    }
  }
};
</script>