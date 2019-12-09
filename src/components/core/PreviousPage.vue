<template>
  <v-container>
    <v-layout align-start justify-center column fill-height>
      <v-flex xs12 ma-3>
        <div>
          <v-btn flat small color="primary" @click="$router.go(-1)">
            <strong>← Previous Site</strong>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>