<template>
    <v-text-field
            v-model="filterMovies"
            class="shrink"
            flat
            solo-inverted
            hide-details
            rounded
            prepend-inner-icon="mdi-magnify"
            label="Search"
    />
</template>

<script>

  import { mapFields } from 'vuex-map-fields';

  export default {
    name: 'Search',
    computed: {
      ...mapFields([
        'filterMovies',
      ]),
    }
  };
</script>

<style scoped>

</style>
