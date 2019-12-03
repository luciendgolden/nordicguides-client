<template>
  <div class="auroras">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div>
                <div class="sh-w-div">DOZE OFF UNDER THE NORTHERN LIGHTS</div>
                <span class="grey--text">1,000 miles of wonder</span>
              </div>
            </v-card-title>

            <v-img :src="require(`@/assets/articles/aurora.jpg`)"></v-img>

            <v-card-actions>
              <v-btn fab flat circle color="primary">
                <v-icon class="mr-1">mdi-heart</v-icon>
              </v-btn>
              <v-btn fab flat circle>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>

            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12>
                  <p
                    class="subheading font-weight-bold"
                  >In Finland, nature’s most spectacular light show, the Aurora Borealis, can be viewed in a range of purpose-built spaces from glass igloos to luxury suites.</p>
                  <p
                    class="body-2"
                  >The thrill of witnessing the Aurora Borealis is a once-in-a-lifetime experience for many. Finland is one of the best places on Earth to spot the Northern Lights – they appear on more than 200 nights a year in Finnish Lapland.</p>
                  <p
                    class="body-2"
                  >The more traditional ways to go Aurora spotting are snowshoeing, cross-country skiing or snowmobile and sled dog touring. If gazing at the dark sky in crispy winter air is not your thing, you can simply add comfort. See the slideshow above for places that have made it very easy to keep cosy and sleep well under the Aurorae.</p>
                  <p
                    class="body-2"
                  >The Northern Lights are visible on roughly 200 nights a year – or every other clear night – in Finnish Lapland. The more traditional ways to go Aurora spotting are snowshoeing, cross-country skiing or snowmobile and sled dog touring. If gazing at the dark sky in crispy winter air is not your thing, you can simply add comfort. Scroll down for places that have made it very easy to keep cosy and sleep well under the Aurorae.</p>
                  <p
                    class="body-2"
                  >In Lapland, swapping the hustle and bustle of ski resorts and cities to the peace and quiet of the wilderness takes mere minutes.</p>
                  <p class="subheading font-weight-bold">VISIBLE THROUGH MOST OF THE YEAR</p>
                  <p
                    class="body-2"
                  >In Finland, nights are dark enough for Northern Lights viewing from late August to April. Seeing them requires clear skies and just a bit of luck. Chances of catching them get better the further north you go.</p>
                  <p class="subheading font-weight-bold">ARCTIC TREEHOUSE HOTEL, ROVANIEMI</p>
                  <p
                    class="body-2"
                  >Located on the Arctic Circle in Rovaniemi, Lapland these 37 TreeHouses have a warm, wooden interior which highlights the exclusive Scandinavian design of the suits that combines local tradition and Lappish heritage. You can discover the spectacular views over the Northern skies from the nest like atmosphere of these thoughtfully designed suits.</p>
                  <p
                    class="subheading font-weight-bold"
                  >KEMI SEASIDE GLASS VILLAS BY THE BAY OF BOTHNIA</p>
                  <p
                    class="body-2"
                  >Beautiful and quiet villa area is located next to the SnowCastle and just couple of minutes away from the Kemi city centre. To begin with there will be 20 of these villas with small kitchen and bathroom. It is a cozy place to snuggle up and enjoy the nature’s incredible light show – the Northern Lights. In Sea Lapland the nature presents its beautiful light show from early autumn until late spring.</p>
                  <p
                    class="subheading font-weight-bold"
                  >GLASS IGLOOS ON THE ARCTIC CIRCLE, ROVANIEMI AND NEAR PYHÄ-LUOSTO NATIONAL PARK, LUOSTO</p>
                  <p
                    class="body-2"
                  >The glass igloos by Santa’s Hotel Santa Claus were opened in December 2016 at the Santa Claus Village on the Arctic Circle in Rovaniemi. The new glass-roofed, arctic view rooms offer an opportunity to experience Lapland’s ever-changing nature while enjoying the comforts of a hotel room. It is possible to enjoy Northern Lights, midnight sun, autumn colors and polar night. Santa’s Hotel Aurora’s glass igloos are located near the Pyhä-Luosto National Park and offer a great possibility to observe the unique landscape of Luosto presenting itself outside the windows every day in a new way.</p>
                  <p class="subheading font-weight-bold">AURORA BUBBLES, WILDERNESS HOTEL NELLIM</p>
                  <p
                    class="body-2"
                  >The village of Nellim by Lake Inari in Northern Lapland lies amidst the most beautiful Lappish scenery. Wilderness Hotel Nellim’s Aurora Bubbles are terrific little heated pods for viewing the Northern Lights. The pods have a double bed and eco-toilet for staying overnight. Try also their Aurora Camp and Northern Lights search by snowmobile.</p>
                  <p class="subheading font-weight-bold">AURORA DOME, HARRINIVA</p>
                  <p
                    class="body-2"
                  >This comfortable and warm Dome is a perfect place to enjoy the magical winter scenery of lake Torassieppi lit by the northern lights. The round igloo-shaped tent with Lappish themed decoration and one transparent wall is completely insulated and a fireplace with an open fire gives out both warmth and comforting ambiance. The transparent walls of the Dome are facing north to insure the best possible view of the starlit sky and the northern lights.</p>
                </v-flex>
              </v-layout>
            </v-card-text>
            <photo-grip :items="items" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from "@/components/HeroParallex.vue";
import PhotoGrip from "@/components/PhotoGrip.vue";

export default {
  name: "auroras",
  computed: {
    items() {
      let myArr = [];

      for (let i = 0; i < 9; i++) {
        myArr.push({
          img: `aurora00${i + 1}.jpg`
        });
      }

      return myArr;
    }
  },
  data() {
    return {
      displayInfo: {
        alignment: "align-center",
        justify: "justify-center",
        fillHeight: true,
        img: "hero-blog-bg.jpg",
        header: "BLOG",
        cta: false
      }
    };
  },
  components: { HeroParallex, PhotoGrip }
};
</script>
