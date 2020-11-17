<template>
  <v-app>
    <Header/>
    <v-main>
        <v-container>
            <router-view></router-view>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from './components/toolbar/Header'

  export default {
    name: 'App',
    components: {
      Header
    }
  };

</script>
