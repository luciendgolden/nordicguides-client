<template>
  <v-footer dark height="auto">
    <v-card flat tile>
      <v-container fluid>
        <v-layout align-start justify-space-between row fill-height wrap>
          <v-flex xs12 sm6 md3 mb-3>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="title font-weight-bold text-uppercase mb-3">About us</div>
                </v-flex>
                <v-flex xs6 md12 mt-2>
                  <div class="subtitle font-weight-bold">
                    <v-icon color="secondary">mdi-map-marker</v-icon>Address
                  </div>
                  <div class="subtitle">Kirkkokatu 1</div>
                  <div class="subtitle">95336 Tornio</div>
                  <div class="subtitle">Finland</div>
                </v-flex>
                <v-flex xs6 md12 mt-2>
                  <div class="subtitle font-weight-bold">
                    <v-icon color="secondary">mdi-email-outline</v-icon>Have any questions?
                  </div>
                  <div class="subtitle">support@finville.com</div>
                </v-flex>
                <v-flex xs12 md12 mt-2>
                  <div class="subtitle font-weight-bold">
                    <v-icon color="secondary">mdi-phone</v-icon>Address
                  </div>
                  <div class="subtitle">+43 (0) 83 83 99-8388-3332</div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm6 md3 mb-3>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="title font-weight-bold text-uppercase mb-3">Destinations</div>
                </v-flex>
                <v-flex xs12 ml-2>
                  <div class="subtitle">- Lapland</div>
                  <div class="subtitle">- Lakeland</div>
                  <div class="subtitle">- Helsinki</div>
                  <div class="subtitle">- Coast and Archipelago</div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm6 md3 mb-3>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="title font-weight-bold text-uppercase mb-3">Seasons</div>
                </v-flex>
                <v-flex xs12 ml-2>
                  <div class="subtitle">- Summer</div>
                  <div class="subtitle">- Autumn</div>
                  <div class="subtitle">- Winter</div>
                  <div class="subtitle">- Spring</div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="title font-weight-bold text-uppercase mb-3">Connect with us</div>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Your Email Address" solo light color="secondary"></v-text-field>
                  <base-btn
                    v-for="(socialItem, index) in socialItems"
                    :key="index"
                    :href="socialItem.href"
                    class="ml-0 mr-3"
                    :color="'secondary'"
                    square
                    target="_blank"
                  >
                    <v-icon v-text="socialItem.icon" />
                  </base-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-card-actions class="white--text justify-center">
        &copy;&nbsp;2019 -&nbsp;
        <strong>Alexander Tampier</strong>&nbsp;All Rights Reserved
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socialItems: [
      {
        href: 'https://twitter.com',
        icon: 'mdi-twitter',
      },
      {
        href: 'https://instagram.com',
        icon: 'mdi-instagram',
      },
      {
        href: 'https://facebook.com',
        icon: 'mdi-facebook',
      },
      {
        href: 'https://pinterest.com',
        icon: 'mdi-pinterest',
      },
    ],
  }),
};
</script>
