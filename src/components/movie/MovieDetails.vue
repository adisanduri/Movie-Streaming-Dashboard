<template>
    <div>
        <MovieTitle :title="movie.title"/>

        <v-card-subtitle>
            <RatingStars :movie-rating="movie.rating"/>
            {{movie.released}} | {{movie.runtime}} | {{movie.type}}
        </v-card-subtitle>

        <v-divider/>

        <v-card-text v-html="movie.synopsis"/>

        <MovieActions :movie="movie" />

    </div>
</template>

<script>
  import RatingStars from './RatingStars';
  import MovieActions from './MovieActions'
  import MovieTitle from './MovieTitle'

  export default {
    name: 'MovieDetails',
    components: {
      MovieTitle,
      MovieActions,
      RatingStars
    },
    props: {
      movie: Object,
    }
  }
</script>

<style scoped>

</style>
