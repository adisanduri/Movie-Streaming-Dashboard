<template>
    <v-hover v-slot="{ hover }">
        <v-card max-width="300">
            <v-img :src="movie.image" class="img-card"></v-img>

            <v-fade-transition>
                <OverlayInfo :movie="movie" :hover="hover"/>
            </v-fade-transition>
        </v-card>
    </v-hover>
</template>

<script>
  import OverlayInfo from './OverlayInfo';

  export default {
    name: 'MovieCard',
    components: {
      OverlayInfo
    },
    props: {
      movie: Object
    }
  }
</script>

<style scoped>
</style>
