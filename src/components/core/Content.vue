<template>
  <v-content>
    <router-view />
    <PreviousPage />
  </v-content>
</template>

<script>
import PreviousPage from '@/components/core/PreviousPage.vue';

export default {
  components: {
    PreviousPage,
  },
};
</script>