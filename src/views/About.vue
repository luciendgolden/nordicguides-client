<template>
  <div class="about">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-container>
              <v-layout row align-center justify-center wrap>
                <v-flex xs12 sm6>
                  <v-img :src="require('@/assets/about/profile.jpg')" aspect-ratio="1.1" contain></v-img>
                </v-flex>
                <v-flex pt-5 pb-5 pl-5 xs12 sm6>
                  <h1 class="display-1 font-weight-black pb-3" color="primary">Who am I?</h1>
                  <div class="subheading">
                    <p>... I was born and raised in Aurora, and now I’m proud to be raising my young family here. That’s why I love helping people find their Aurora dream home. Having lived and worked here nearly my entire life, my local market knowledge is unparalleled. As a digital native with a marketing background, I create highly strategic and engaging marketing campaigns for each and every one of my clients, to make sure their homes get top dollar …</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio iusto sequi veniam mollitia tempora dolore optio, quam, nemo exercitationem cupiditate eum praesentium et velit perferendis maiores repudiandae. Tempore, harum?</p>
                    <p>Keep in touch with me! 🙂</p>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
            <photo-grip :items="items" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from '@/components/HeroParallex.vue';
import PhotoGrip from '@/components/PhotoGrip.vue';

export default {
  name: 'about',
  data() {
    return {
      displayInfo: {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: 'about/me.jpg',
        header: 'ABOUT',
        cta: false,
      },
    };
  },
  computed: {
    items() {
      const myArr = [];

      for (let i = 0; i < 9; i += 1) {
        myArr.push({
          img: `about/me00${i + 1}.jpg`,
        });
      }

      return myArr;
    },
  },
  components: { HeroParallex, PhotoGrip },
};
</script>