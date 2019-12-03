<template>
  <div class="guides">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-card>
            <v-container grid-list-xl fluid>
              <v-layout row wrap>
                <v-flex xs12 class="mt-5 mb-5">
                  <div class="section-heading text-uppercase">We are here to help!</div>
                </v-flex>
                <v-flex v-for="(guide, index) in guides" :key="index" xs12 sm4>
                  <FlipCard>
                    <template slot="front">
                      <tour-guide :item="guide"></tour-guide>
                    </template>
                    <template slot="back">
                      <v-card>
                        <v-img :src="require(`@/assets/articles/${guide.img}`)" />
                        <v-card-title primary-title>
                          <div>
                            <div class="headline">About me</div>
                            <span class="grey--text">{{guide.subInfo}}</span>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          <span>Email: {{ guide.personInfo.email }}</span>
                          <br />
                          <span>Birthday: {{guide.personInfo.birthdate}}</span>
                          <br />
                          <span>Address: {{guide.personInfo.address}}</span>
                          <br />
                          <span>Phone: {{guide.personInfo.phone}}</span>
                        </v-card-text>
                      </v-card>
                    </template>
                  </FlipCard>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from "@/components/HeroParallex.vue";
import FlipCard from "@/components/base/FlipCard.vue";
import TourGuide from "@/components/TourGuide.vue";

export default {
  name: "guides",
  data() {
    return {
      displayInfo: {
        alignment: "align-center",
        justify: "justify-center",
        fillHeight: true,
        img: "hero-guides-bg.jpg",
        header: "GUIDES",
        cta: false
      },
      guides: [
        {
          avatar: "1.jpg",
          img: "huskey.jpg",
          subInfo: "Let's find some beautiful places",
          personInfo: {
            name: "Terry Lopez",
            email: "terry.lopez@example.com",
            birthdate: "7/2/1986",
            address: "9602 Homestead Rd",
            phone: "(896)-675-7311"
          }
        },
        {
          avatar: "2.jpg",
          img: "midnight.jpg",
          subInfo: "Wherever you go, go with all your heart",
          personInfo: {
            name: "Levi Gilbert",
            email: "levi.gilbert@example.com",
            birthdate: "3/7/1994",
            address: "4151 Nowlin Rd",
            phone: "(154)-278-4645"
          }
        },
        {
          avatar: "3.jpg",
          img: "santa.jpg",
          subInfo: "With age, comes wisdom. With travel, comes understanding.",
          personInfo: {
            name: "Devon Morrison",
            email: "devon.morrison@example.com",
            birthdate: "1/7/1950",
            address: "654 Taylor St",
            phone: "(308)-287-5380"
          }
        },
        {
          avatar: "4.jpg",
          img: "winter.jpg",
          subInfo: "Happy to help you",
          personInfo: {
            name: "Evan Fowler",
            email: "evan.fowler@example.com",
            birthdate: "1/2/1975",
            address: "8612 Saddle Dr",
            phone: "(358)-838-3941"
          }
        },
        {
          avatar: "5.jpg",
          img: "autumn.jpg",
          subInfo: "Let’s Be Adventurers.",
          personInfo: {
            name: "Letitia Hughes",
            email: "letitia.hughes@example.com",
            birthdate: "5/6/1954",
            address: "859 Camden Ave",
            phone: "(758)-640-2236"
          }
        },
        {
          avatar: "6.jpg",
          img: "aurora009.jpg",
          subInfo:
            "Remember that happiness is a way of travel – not a destination.",
          personInfo: {
            name: "Mike Parker",
            email: "mike.parker@example.com",
            birthdate: "4/3/1977",
            address: "973 Mockingbird Ln",
            phone: "(824)-270-1409"
          }
        }
      ]
    };
  },
  components: { HeroParallex, FlipCard, TourGuide }
};
</script>
