<template>
  <div id="app">
    <v-app>
      <div>
        <v-app-bar>
          <v-app-bar-nav-icon @click="showNav = true"></v-app-bar-nav-icon>
        </v-app-bar>
      </div>

      <v-navigation-drawer v-model="showNav" app temporary>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://eu.ui-avatars.com/api/?name=A+V"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">Alexander</v-list-item-title>
              <v-list-item-subtitle>variuhin75@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text">
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Gallery</v-list-item-title>
            </v-list-item>

            <v-list-item to="/about">
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  const url = 'https://jsonplaceholder.typicode.com/photos/'
  import {mapActions} from 'vuex'
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
    methods: mapActions(['setImagesDelayed'])
  }
</script>
