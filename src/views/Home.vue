<template>
  <div class="home">
    <slide-show :items="items"></slide-show>
    <v-container fluid class="quote-sec">
      <v-layout row wrap class="mt-5">
        <v-flex xs12 md4 class="mb-5">
          <v-img :src="require('@/assets/section/quote-1.png')" aspect-ratio="3.7" contain></v-img>
        </v-flex>
        <v-flex xs12 md8 class="mb-5">
          <div
            class="title font-weight-thin font-italic pb-4"
          >“Finnish Lapland is as close as reality gets to those who dream of a winter wonderland”</div>
          <div class="subheading font-weight-bold text-uppercase">– visitfinland</div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xl class="card-section">
      <v-layout column align-center justify-center fill-height>
        <v-flex xs12 class="mt-5 mb-5">
          <div class="section-heading text-uppercase">Experience Finland</div>
        </v-flex>
        <v-flex xs12>
          <v-timeline>
            <v-timeline-item
              v-for="(item, index) in siteItems"
              :key="index"
              color="red lighten-2"
              large
            >
              <template v-slot:opposite>
                <span>{{item.opposite}}</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">{{item.headline}}</v-card-title>
                <v-card-text>{{item.text}}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
      <v-layout column align-center justify-center fill-height>
        <v-flex xs12 class="mt-5 mb-5">
          <div class="section-heading">Upcoming Events</div>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <feed-card v-for="article in articles" :key="article.title" :article="article" />
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.quote-sec {
  background-color: #f4f5f9;
  margin-top: -5px !important;
}

.card-section {
  background-color: #fff;
}
</style>

<script>
import { mapState } from 'vuex';
import FeedCard from '@/components/FeedCard.vue';
import SlideShow from '@/components/SlideShow.vue';

export default {
  name: 'Home',
  data() {
    return {
      items: [
        {
          src: require('@/assets/section/finland001.jpg'),
        },
        {
          src: require('@/assets/section/finland002.jpg'),
        },
        {
          src: require('@/assets/section/finland003.jpg'),
        },
        {
          src: require('@/assets/section/finland004.jpg'),
        },
      ],
      siteItems: [
        {
          opposite: 'Home',
          headline: 'SUSTAINABLE FINLAND',
          text:
            'Respect, treasure, enjoy, love. Use these words as your mantra when you are in Finland and you will enrich your visit and help to preserve this beautiful country. Finland’s untouched and pristine nature is at the core of Finnish life and its sanctity is paramount. Living sustainably and in harmony with the environment is deep-rooted here and is an essential element of responsible travel. This includes not only a respect for nature and wildlife, but also people and their age-old customs',
        },
        {
          opposite: 'Lapland',
          headline: 'THE MAGICAL, MYTHICAL LAPLAND',
          text:
            'Finnish Lapland is as close as reality gets to those who dream of a winter wonderland. Contrasts are a key factor in the allure of Lapland where 24-hour sunlight in the summer replaces the dark winter days. The hustle and bustle of towns and ski resorts is just minutes away from the peace and quiet of the wild wilderness.',
        },
        {
          opposite: 'Auroras',
          headline: 'DOZE OFF UNDER THE NORTHERN LIGHTS',
          text:
            'The Northern Lights are visible on roughly 200 nights a year – or every other clear night – in Finnish Lapland. The more traditional ways to go Aurora spotting are snowshoeing, cross-country skiing or snowmobile and sled dog touring. If gazing at the dark sky in crispy winter air is not your thing, you can simply add comfort. Scroll down for places that have made it very easy to keep cosy and sleep well under the Aurorae.',
        },
        {
          opposite: 'Guides',
          headline:
            'CONTACT THOUSANDS OF GUIDES AROUND LAPLAND FOR FREE AND PLAN YOUR TRIP',
          text:
            'Our guests are using the smart and informative guides every day. It is a real additional benefit. Especially Lapland offers their guests a huge variety of opportunities and our Guide helps our guest to plan their trip. We are very satisfied. It is a fantastic travel tour, which brings a lot of fun too!',
        },
        {
          opposite: 'Contact',
          headline: 'STAY IN TOUCH WITH US?',
          text:
            'At MAKARO we do things differently. We do not believe in compromise - but in courage and passion to break new ground. We believe in opportunities, in creativity and new ideas - and that you can even overcome opposites with them.',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
    };
  },
  computed: mapState(['articles']),
  components: {
    SlideShow,
    FeedCard,
  },
};
</script>
