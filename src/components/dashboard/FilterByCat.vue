<template>
    <v-select
            :items="categories"
            v-model="filteredCategories"
            label="Filter by Category"
            multiple
    />
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'FilterByCat',
    computed: {
      ...mapState(['filteredCategories']),
      filteredCategories: {
        get() {
          return this.$store.filteredCategories;
        },
        set(val) {
          this.setFilteredCategories(val);
        },
      },
    },
    methods: {
      ...mapMutations([
        'setFilteredCategories',
      ])
    },
    props : {
      categories: Array
    }
  }
</script>

<style scoped>

</style>
