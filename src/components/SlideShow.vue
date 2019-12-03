<template>
  <v-carousel height="600">
    <v-carousel-item v-for="(item,i) in items" :key="i">
      <v-img
        :src="item.src"
        height="100%"
        gradient="rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.12)"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<style>
</style>

<script>
export default {
  props: {
    items: Array
  },
  data() {
    return {};
  }
};
</script>
