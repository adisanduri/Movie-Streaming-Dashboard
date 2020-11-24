<template>
    <div>
        <FilterByCategory :categories="categories"/>
        <v-data-iterator
            :items="movies"
            :search="filterMovies"
            :sort-by="sortBy"
            :sort-desc="true"
            hide-default-footer
            no-results-text=""
        >
            <v-row
                   align="center"
                   justify="center"
            >
                <v-col
                        v-for="movie in resultFilteredMovies"
                        :key="movie.id"
                        cols="2"
                >
                    <MovieCard :movie="movie" />
                </v-col>
            </v-row>
        </v-data-iterator>

        <v-row v-if="resultFilteredMovies.length==0" justify="center" align="center">
            <v-img max-width="400" :src="require('@/assets/no-result-found.png')"/>
            <h2>No matching records found</h2>
        </v-row>
    </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import { getMovies, getCategories } from '../../services/movies'
  import MovieCard from './MovieCard'
  import FilterByCategory from './FilterByCategory'
  import router from '@/router';

  export default {
    name: 'Dashboard',
    components: {
      FilterByCategory,
      MovieCard
    },
    data() {
      return {
        movies: [],
        categories: [],
      }
    },
    computed: {
      ...mapState([
        'filterMovies',
        'selectedCategories',
        'sortBy',
        ]),
      resultFilteredMovies() {
        return this.movies.filter((movie) =>
          (this.selectedCategories.includes(movie.type) &&
            movie.title.toLowerCase().match(this.filterMovies.toLowerCase()))
        );
      }
    },
    created() {
      getMovies().then(movies => {
        this.movies = movies;
        this.categories = getCategories();
        this.setSelectedCategories(this.categories);
      }).catch(() => {
        router.push('/error');
      });
    },
    methods: {
      ...mapMutations([
        'setSelectedCategories',
      ]),
    }
  }
</script>

<style scoped>

</style>
