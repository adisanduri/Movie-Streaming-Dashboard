<template>
    <v-row justify="center" align="center">
        <v-img max-width="400" :src="require('@/assets/server-error.png')"/>
        <h2>Server Error, please contact with the administrator</h2>
    </v-row>
</template>

<script>
  export default {
    name: 'ErrorPage',
  }
</script>

<style scoped>

</style>
