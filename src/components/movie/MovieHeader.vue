<template>
    <div>
        <v-card-title>
            <h1>{{movie.title}}</h1>
            <v-spacer/>

            <router-link to="/" class="without_underline">
                <v-icon>
                    mdi-redo-variant
                </v-icon>
            </router-link>
        </v-card-title>

        <v-card-subtitle>
            <RatingStars :movie-rating="movie.rating"/>
            {{movie.released}} | {{movie.runtime}} | {{movie.type}}
        </v-card-subtitle>
    </div>
</template>

<script>

  import RatingStars from './RatingStars';

  export default {
    name: 'MovieHeader',
    props: {
      movie: Object
    },
    components: {
      RatingStars
    }
  }
</script>

<style scoped>

    .without_underline {
        text-decoration: none;
    }
</style>
