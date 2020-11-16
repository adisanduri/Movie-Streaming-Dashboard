<template>
    <div>
<!--        <FilterByCat :categories="this.categories"/>-->
        <v-data-iterator
            :items="movies"
            :search="searchMovies"
            hide-default-footer
        >
            <v-row
                   align="center"
                   justify="center"
            >
                <v-col
                        v-for="movie in filteredMovies"
                        :key="movie.id"
                        cols="2"
                >
                    <movie-card :movie="movie" />
                </v-col>
            </v-row>
        </v-data-iterator>
    </div>
</template>

<script>
  import MovieCard from './MovieCard'
  import { mapMutations, mapState } from 'vuex'
  //import FilterByCat from './FilterByCat'

  export default {
    name: 'index',
    components: {
      //FilterByCat,
      'movie-card' : MovieCard
    },
    created() {
      this.getMovies().then(movies => {
        this.movies = movies;
        //var duplicatesCat = movies.map(v=> v.type);
        //this.categories=[...new Set(duplicatesCat)];
        //this.setFilteredCategories(this.categories);
      });
    },
    computed: {
      ...mapState(['searchMovies',
        //'filteredCategories'
        ]),

      filteredMovies: function(){
        return this.movies.filter((movie) => {
//          if (movie.type == this.filteredCategories[0])
            return movie.title.toLowerCase().match(this.searchMovies.toLowerCase())
        });
      }
    },
    methods: {
      async getMovies() {
        const response = await fetch('/api/movies');
        const movies = await response.json();
        return movies;
      },
      ...mapMutations([
        'setFilteredCategories',
      ])
    },
    data() {
      return {
        movies: [],
        //categories: [],
        search: ''
      }
    }
  }
</script>

<style scoped>

</style>
