<template>
  <v-parallax :src="require(`@/assets/${item.img}`)">
    <v-layout column>
      <v-flex xs12>
        <div class="resultContainer">
          <v-layout column v-bind="layoutAttributes">
            <h1 class="display-3 font-weight-bold mb-3">{{item.header}}</h1>
            <div class="subheading pl-2 mb-4">{{item.subtitle}}</div>
            <div v-if="item.cta.text">
              <v-btn color="primary" @click="item.evt" depressed round>{{ item.cta.text }}</v-btn>
            </div>
            <div v-else>
              <v-btn color="primary" @click="item.evt" depressed round>LEARN MORE</v-btn>
            </div>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<style scoped>
.resultContainer {
  height: 100%;
}
</style>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  computed: {
    layoutAttributes() {
      return {
        [this.item.alignment]: true,
        [this.item.justify]: true,
        [this.item.flexDirection]: true,
        reverse: this.item.reverse,
        'fill-height': this.item.fillHeight,
      };
    },
  },
};
</script>
