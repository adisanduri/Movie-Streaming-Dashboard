<template>
    <v-row>
        <v-col cols="1">
            <v-row>
                {{movie.download}}
                <v-icon>
                    mdi-package-down
                </v-icon>
            </v-row>
        </v-col>
        <v-divider vertical />
        <v-col cols="2">
            <a :href="imdbUrl" target="_blank">
                <v-img max-width="50" :src="require('@/assets/imdb.png')"/>
            </a>
        </v-col>
    </v-row>
</template>

<script>
  export default {
    name: 'MovieActions',
    props: {
      movie: Object,
    },
    data() {
      return {
        imdbUrl: 'https://www.imdb.com/title/'
      }
    },
    created () {
      this.imdbUrl += this.movie.imdbid;
    },
  }
</script>

<style scoped>

</style>
