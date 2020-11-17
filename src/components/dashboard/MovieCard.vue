<template>
    <v-hover v-slot="{ hover }">
        <v-card max-width="300">
            <v-img :src="movie.image" class="img-card" />

            <v-fade-transition>
                <v-overlay
                        v-if="hover"
                        absolute
                        color="#FAFAFA"
                        class="text-center"
                >
                    <OverlayInfo :movie="movie"/>
                </v-overlay>
            </v-fade-transition>
        </v-card>
    </v-hover>
</template>

<script>
  import OverlayInfo from './OverlayInfo';

  export default {
    name: 'MovieCard',
    props: {
      movie: Object
    },
    components: {
      OverlayInfo
    }

  }
</script>

<style scoped>
</style>
