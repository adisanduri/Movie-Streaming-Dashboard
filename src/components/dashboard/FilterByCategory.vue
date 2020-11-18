<template>
    <v-row>
        <v-col cols="2">
            <v-select
                    :items="categories"
                    v-model="selectedCategories"
                    label="Filter by Category"
                    multiple
            />
        </v-col>
    </v-row>
</template>

<script>
  import { mapFields } from 'vuex-map-fields';

  export default {
    name: 'FilterByCategory',
    props : {
      categories: Array
    },
    computed: {
      ...mapFields([
        'selectedCategories'
      ]),
    },
  }
</script>

<style scoped>

</style>
