<template>
  <div class="notfound">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
  </div>
</template>

<style scoped>
.resultContainer {
  height: 500px;
}
</style>

<script>
import HeroParallex from '@/components/HeroParallex.vue';

export default {
  name: 'notfound',
  data() {
    return {
      displayInfo: {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: 'section/hero-404-bg.jpg',
        header: '404',
        subtitle:
          'We are sorry, the page you requested could not be found. Please go back to previous Page!',
        cta: {
          text: 'Go back',
        },
        evt: () => {
          this.$router.go(-1);
        },
      },
    };
  },
  components: { HeroParallex },
};
</script>