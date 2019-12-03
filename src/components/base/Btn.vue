<template>
  <v-btn fab small :color="color" :style="styles" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'BaseBtn',

  inheritAttrs: false,

  props: {
    square: Boolean,
    color: String,
  },
  computed: {
    styles() {
      return {
        borderRadius: this.square ? '2px' : undefined,
      };
    },
  },
};
</script>
