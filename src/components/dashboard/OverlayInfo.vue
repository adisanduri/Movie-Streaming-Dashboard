<template>
    <div>
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
        <router-link :to="{name: 'movie', params: { movieId : movie.id }}" class="without_underline">
            <v-btn fab class="mx-2" small>
                <v-icon>
                    mdi-arrow-right
                </v-icon>
            </v-btn>
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'OverlayInfo',
    props: {
      movie: Object,
    }
  }
</script>

<style scoped>
    @import './../../style/mainStyle.css';
</style>
