<template>

    <div>
        <v-card v-if="movie">
            <v-row>
                <v-col cols="5">
                    <v-img :src="movie.largeimage"></v-img>
                </v-col>
                <v-col>
                    <MovieDetails :movie="movie"/>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>

  import MovieDetails from './MovieDetails'
  export default {
    name: 'MovieView',
    components: { MovieDetails },
    data(){
      return {
        movie_id: '',
        movie: undefined,
      }
    },
    created() {
      this.movie_id = this.$route.params.movie_id;
      this.getMovie().then(response => {
        this.movie=response[0];
        this.imdbUrl += this.movie.imdbid;
      });
    },
    methods: {
      async getMovie () {
        const response = await fetch('/api/movies/'+ this.movie_id);
        const movie = await response.json();
        return movie;
      }
    }
  }
</script>

<style scoped>

</style>
