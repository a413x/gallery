<template>
  <v-container class="details" v-if="imageInfo">
    <v-row>
      <v-col>
        <v-img :src="imageInfo.url" max-width="600" max-height="600"></v-img>
      </v-col>
      <v-col>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Id</v-list-item-title>
            <v-list-item-subtitle>{{imageInfo.id}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Title</v-list-item-title>
            <v-list-item-subtitle>{{imageInfo.title}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Url</v-list-item-title>
            <v-list-item-subtitle>{{imageInfo.url}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
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
