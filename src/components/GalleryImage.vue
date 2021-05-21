<template lang="html">
  <v-container class="gallery-image">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card max-width="250" max-height="350">
          <v-img :src="imageInfo.url" max-width="250" max-height="250"></v-img>
          <v-card-title>
            {{cuttedTitle}}
          </v-card-title>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute>
              <v-btn @click="onDetailsClick">Details</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </v-container>
</template>

<script>
import {cutTitle} from '@/utils.js'
export default {
  name: 'GalleryImage',
  props: { imageInfo: Object },
  computed: {
    cuttedTitle(){ return cutTitle(this.imageInfo.title, 40) }
  },
  methods: {
    onDetailsClick(){
      this.$router.push({ path: `/details/${this.imageInfo.id}` })
    }
  }
}
</script>
