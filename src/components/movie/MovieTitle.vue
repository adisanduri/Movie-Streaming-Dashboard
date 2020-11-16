<template>
    <v-card-title>
        <h1>{{title}}</h1>
        <v-spacer/>

        <router-link to="/" class="without_underline">
            <v-icon>
                mdi-redo-variant
            </v-icon>
        </router-link>
    </v-card-title>
</template>

<script>
  export default {
    name: 'MovieTitle',
    props: {
      title: String
    }
  }
</script>

<style scoped>

    .without_underline {
        text-decoration: none;
    }
</style>
