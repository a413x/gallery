<template>
  <v-container class="category">
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
  import GalleryImage from '@/components/GalleryImage.vue'
  export default {
    props: {
       images: GalleryImage
    },
    components: {
      GalleryImage
    }
  }
</script>
