<template>
  <v-container class="home">
    <v-tabs centered>
      <v-tab v-for="n in categoriesNum" :key="n">category {{n}}</v-tab>
      <v-tab-item v-for="n in categoriesNum" :key="n">
        <v-container class="text-center my-16" v-if="loading">
          <v-progress-circular :size="100" indeterminate>
          </v-progress-circular>
        </v-container>
        <Category v-else :images="getCategoryImages(n)"/>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
  import {mapState} from 'vuex'
  import Category from '@/components/Category.vue'

  export default {
    data(){ return {categoriesNum: 4, iamgesNum: 24} },
    computed: mapState(['images', 'loading']),
    methods: {
      getCategoryImages(num){
        const images = [...this.images]
        const imagesInCategoryNum = this.iamgesNum/this.categoriesNum
        return images.splice((num-1)*imagesInCategoryNum, imagesInCategoryNum)
      }
    },
    components: { Category }
  }
</script>
