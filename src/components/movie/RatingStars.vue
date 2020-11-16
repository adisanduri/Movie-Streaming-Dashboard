<template>
    <div
            v-if="movieRating"
            class="grey--text text--darken-2"
    >
        ({{ movieRating }})
        <v-rating
                :value="parseFloat(movieRating)"
                length="10"
                color="orange"
                background-color="orange lighten-3" small half-increments readonly class="d-inline"/>
    </div>
</template>

<script>
  export default {
    name: 'RatingStars',
    props: {
      movieRating: String,
    }
  }
</script>

<style scoped>
    /*style="display: inline"*/
</style>
