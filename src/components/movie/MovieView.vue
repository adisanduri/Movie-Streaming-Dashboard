<template>
    <div>
        <v-row align="center" justify="center">
            <v-col cols="10">
                <v-card v-if="movie">
                    <v-container>
                    <v-row>
                        <v-col cols="5">
                            <v-img :src="movie.largeimage" class="rounded-lg"></v-img>
                        </v-col>
                        <v-col>
                            <MovieDetails :movie="movie"/>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
  import MovieDetails from './MovieDetails';
  import { getMovieById } from '../../services/movies';
  import router from '@/router';

  export default {
    name: 'MovieView',
    components: { MovieDetails },
    data(){
      return {
        movieId: '',
        movie: undefined,
      }
    },
    async created() {
      this.movieId = this.$route.params.movieId;
      try {
        this.movie = await getMovieById(this.movieId);
      }
      catch(e) {
        router.push('/error');
      }
    },
  }
</script>

<style scoped>

</style>
