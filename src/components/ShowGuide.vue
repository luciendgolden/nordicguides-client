<template>
  <div v-if="guide" class="show-guide">
    <v-container fluid pa-0>
      <HeroParallex :item="displayInfo" />
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-spacer></v-spacer>
            <v-avatar class="ma-3" size="150" color="grey lighten-4">
              <v-img
                :src="require(`@/assets/guide/${guide.avatar}`)"
                :lazy-src="require(`@/assets/guide/${guide.avatar}`)"
                alt="avatar"
              />
            </v-avatar>
            <v-card-title primary-title>
              <div>
                <div
                  class="sh-w-div"
                >{{ guide.personInfo.firstname }} {{ guide.personInfo.lastname }}</div>
                <span class="grey--text">{{ guide.info }}</span>
              </div>
            </v-card-title>
            <v-form>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12 sm6 v-for="(value, key) in guide.personInfo" :key="key">
                    <v-text-field :value="value" :label="key" readonly></v-text-field>
                  </v-flex>
                  <div v-if="groupNames.length > 0 && languages.length > 0">
                    <v-flex xs12 sm6>
                      <v-combobox v-model="groupNames" label="Membergroups" chips multiple readonly></v-combobox>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-combobox v-model="languages" label="Languages" chips multiple readonly></v-combobox>
                    </v-flex>
                  </div>
                </v-layout>
              </v-container>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HeroParallex from '@/components/HeroParallex.vue';

import Repository from '@/service/repository';

export default {
  name: 'show-guide',
  data() {
    return {
      groups: [],
      memberlanguages: [],
    };
  },
  computed: {
    languages() {
      return this.memberlanguages.map(language => {
        return language['language'] + ' ' + language['level'];
      });
    },
    groupNames() {
      return this.groups.map(group => group['groupname']);
    },
    guide() {
      let id = this.$route.params.id;
      return this.$store.getters.getGuides.find(
        element => element.personInfo.id == id,
      );
    },
    displayInfo() {
      let img = this.guide.img;
      return {
        alignment: 'align-center',
        justify: 'justify-center',
        fillHeight: true,
        img: `section/${img}`,
        header: 'EXPLORE',
        cta: false,
      };
    },
  },
  created() {
    let id = this.$route.params.id;

    Promise.all([
      new Promise(resolve => {
        Repository.get(`/group/${id}`)
          .then(res => res.data)
          .then(data => {
            this.groups = data;
            resolve();
          })
          .catch(err => {
            console.log(err);
          });
      }),
      new Promise(resolve => {
        Repository.get(`/memberlanguages/${id}`)
          .then(res => res.data)
          .then(data => {
            this.memberlanguages = data;
            resolve();
          })
          .catch(err => {
            console.log(err);
          });
      }),
    ]);
  },
  components: { HeroParallex },
};
</script>
