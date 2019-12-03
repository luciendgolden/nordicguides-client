<template>
  <v-layout>
    <v-flex xs12>
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex v-for="(item, index) in items" :key="index" xs12 sm4 d-flex>
            <v-img
              :src="require(`@/assets/articles/${item.img}`)"
              aspect-ratio="1.5"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => ({}),
    },
  },
};
</script>
