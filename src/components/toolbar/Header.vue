<template>
    <v-app-bar
            app
            dark
            collapse-on-scroll
    >
        <router-link to="/" class="without_underline">
            <div class="d-flex align-center" >
                <v-img
                        class="shrink mr-2"
                        contain
                        :src="require('@/assets/film-roll.png')"
                        transition="scale-transition"
                        width="40"
                />
                Next Movies
            </div>
        </router-link>
        <v-spacer></v-spacer>
        <Search />
    </v-app-bar>
</template>

<script>
  import Search from './Search'
  export default {
    name: 'Header',
    components: { Search },
  }
</script>

<style scoped>
    @import './../../style/mainStyle.css';
</style>
