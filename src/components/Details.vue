<template>
  <v-container class="details" v-if="imageInfo">
    <v-img :src="imageInfo.url" max-width="600" max-height="600"></v-img>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      imageInfo(){ return this.$store.getters.getImageById(+this.id) }
    }
  }
</script>
