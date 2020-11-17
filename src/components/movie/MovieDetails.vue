<template>
    <div>
        <MovieHeader :movie="movie"/>
        <v-divider/>
        <v-card-text v-html="movie.synopsis"/>
        <v-card-actions>
            <MovieActions :movie="movie" />
        </v-card-actions>
    </div>
</template>

<script>
  import MovieActions from './MovieActions'
  import MovieHeader from './MovieHeader'

  export default {
    name: 'MovieDetails',
    components: {
      MovieHeader,
      MovieActions,
    },
    props: {
      movie: Object,
    }
  }
</script>

<style scoped>

</style>
