<template>
  <v-container class="home">
    <v-row>
      <v-col v-for="image in images" :key="image.id">
        <GalleryImage
          :url="image.url"
          :title="image.title"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import GalleryImage from '@/components/GalleryImage.vue'
  import {getData} from '@/utils.js'
  const url = 'https://jsonplaceholder.typicode.com/photos/'
  export default {
    mounted(){
      getData(
        url,
        (data) => {
          const slicedData = data.slice(0, 24)
          this.setImagesDelayed(slicedData)
        },
        (err) => console.error(err)
      )
    },
    computed: mapState(['images']),
    methods: mapActions(['setImagesDelayed']),
    components: {
      GalleryImage
    }
  }
</script>
