<template>
  <div>
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
  </div>
</template>
