<template>
  <v-app>
    <v-app-bar
      app
      dark
      collapse-on-scroll
    >

      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          contain
          :src="require('@/assets/film-roll.png')"
          transition="scale-transition"
          width="40"
        />
          Next Movies
      </div>

      <v-spacer></v-spacer>

        <v-text-field
                v-model="searchMovies"
                class="shrink"
                flat
                solo-inverted
                hide-details
                rounded
                prepend-inner-icon="mdi-magnify"
                label="Search"
        ></v-text-field>
    </v-app-bar>

    <v-main>
        <v-container >
        <!--      <HelloWorld/>-->
        <router-view></router-view>

        </v-container>

    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',

  components: {
  //  HelloWorld,
  },

  data: () => ({
  }),
  computed: {
    ...mapState(['searchMovies']),
    searchMovies: {
      get() {
        return this.$store.searchMovies;
      },
      set(val) {
        this.setSearchMovies(val);
      },
    },
  },
  methods: {
    ...mapMutations([
      'setSearchMovies',
      ])
  }
};
</script>
