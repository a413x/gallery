<template>
  <div id="app">
    <v-app>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  const url = 'https://jsonplaceholder.typicode.com/photos/'
  import {mapActions} from 'vuex'
  import {getData} from '@/utils.js'
  export default {
    mounted(){
      getData(
        url,
        data => this.setImagesDelayed(data),
        err => console.error(err)
      )
    },
    methods: mapActions(['setImagesDelayed'])
  }
</script>
