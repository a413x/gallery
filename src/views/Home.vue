<template>
  <v-container class="home">
    <v-tabs centered>
      <v-tab v-for="n in categoriesNum" :key="n">category {{n}}</v-tab>
      <v-tab-item v-for="n in categoriesNum" :key="n">
        <Category :images="getCategoryImages(n)"/>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
  const url = 'https://jsonplaceholder.typicode.com/photos/'

  import {mapState, mapActions} from 'vuex'
  import Category from '@/components/Category.vue'
  import {getData} from '@/utils.js'

  export default {
    data(){ return {categoriesNum: 4, iamgesNum: 24} },
    mounted(){
      getData(
        url,
        (data) => {
          const slicedData = data.slice(0, this.iamgesNum)
          this.setImagesDelayed(slicedData)
        },
        (err) => console.error(err)
      )
    },
    computed: mapState(['images']),
    methods: {
      getCategoryImages(num){
        const images = [...this.images]
        const imagesInCategoryNum = this.iamgesNum/this.categoriesNum
        return images.splice((num-1)*imagesInCategoryNum, imagesInCategoryNum)
      },
      ...mapActions(['setImagesDelayed'])
    },
    components: {
      Category
    }
  }
</script>
