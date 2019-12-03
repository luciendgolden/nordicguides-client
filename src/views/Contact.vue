<template>
  <div class="contact">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-layout column pa-3>
            <v-flex xs12 mb-5>
              <div class="sh-w-div">WE'RE READY, LET'S TALK.</div>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Name" placeholder="Your Name" solo></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Name" placeholder="Your Name" solo></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Name" placeholder="Your Name" solo></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-btn color="primary" depressed round>SEND MESSAGE</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6>
          <v-layout column pa-3>
            <v-flex xs12 mb-4>
              <div class="sh-w-div">CONTACT INFO</div>
            </v-flex>
            <v-flex xs12>
              <div class="title font-weight-bold">
                <v-icon color="secondary">mdi-map-marker</v-icon>Address
              </div>
              <br />
              <div class="body-1">Kirkkokatu 1</div>
              <div class="body-1">95336 Tornio</div>
              <div class="body-1">Finland</div>
            </v-flex>
            <v-flex xs12 mt-3>
              <div class="title font-weight-bold">
                <v-icon color="secondary">mdi-email-outline</v-icon>Have any questions?
              </div>
              <br />
              <div class="body-1">support@finville.com</div>
            </v-flex>
            <v-flex xs12 mt-3>
              <div class="title font-weight-bold">
                <v-icon color="secondary">mdi-phone</v-icon>Address
              </div>
              <br />
              <div class="body-1">+43 (0) 83 83 99-8388-3332</div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8067.63032333191!2d24.13645482185248!3d65.85091820292268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d547775acfd3e5%3A0xcc881a0192e7f192!2sLapland%20University%20of%20Applied%20Sciences%20Minerva!5e0!3m2!1sen!2sfi!4v1571231369020!5m2!1sen!2sfi"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from '@/components/HeroParallex.vue';

export default {
  name: 'contact',
  data() {
    return {
      displayInfo: {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: 'hero-contact-bg.jpg',
        header: 'CONTACT US',
        cta: false,
      },
    };
  },
  components: { HeroParallex },
};
</script>
