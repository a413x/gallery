<template lang="html">
  <v-container class="gallery-image">
    <v-card max-width="250" max-height="350">
      <v-img :src="url" max-width="250" max-height="250"></v-img>
      <v-card-title>
        {{title}}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'GalleryImage',
  props: {
    url: String, title: String,
  }
}
</script>
