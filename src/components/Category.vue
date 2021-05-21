<template>
  <v-container class="category">
    <v-row>
      <v-col v-for="image in images" :key="image.id">
        <GalleryImage :imageInfo="image"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import GalleryImage from '@/components/GalleryImage.vue'
  export default {
    props: { images: Array },
    components: { GalleryImage }
  }
</script>
