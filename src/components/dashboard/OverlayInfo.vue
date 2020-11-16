<template>
    <v-overlay
            v-if="hover"
            absolute
            color="#FAFAFA"
            class="text-center"
    >
        <h3 class="black--text">{{movie.title}}</h3>
        <h5 class="black--text">{{movie.released}}</h5>
        <div v-if="movie.rating"
             class="grey--text text--darken-3 caption mr-2"
        >
            ({{ movie.rating }})
            <v-icon color="orange">
                mdi-star
            </v-icon>
        </div>

        <router-link :to="{name: 'movie', params: { movie_id : movie.id }}" class="without_underline">
            <v-btn fab class="mx-2" small>
                <v-icon>
                    mdi-arrow-right
                </v-icon>
            </v-btn>
        </router-link>

    </v-overlay>
</template>

<script>
  export default {
    name: 'OverlayInfo',
    props :{
      hover: Boolean,
      movie: Object,
    }
  }
</script>

<style scoped>
    .without_underline {
        text-decoration: none;
    }
</style>
