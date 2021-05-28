<template>
  <div id="app">
    <v-app>
      <div>
        <v-app-bar>
          <v-app-bar-nav-icon @click="showNav = true"></v-app-bar-nav-icon>
        </v-app-bar>
      </div>
      <v-navigation-drawer v-model="showNav" app temporary>
        <Navigation />
      </v-navigation-drawer>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  const url = 'https://jsonplaceholder.typicode.com/photos/'
  import {mapActions} from 'vuex'
  import Navigation from '@/components/Navigation.vue'
  import {getData} from '@/utils.js'
  export default {
    data(){ return { showNav: false } },
    mounted(){
      getData(
        url,
        data => this.setImagesDelayed(data),
        err => {
          console.error(err)
          this.$store.commit('setLoading', false)
        }
      )
    },
    methods: mapActions(['setImagesDelayed']),
    components: { Navigation }
  }
</script>
