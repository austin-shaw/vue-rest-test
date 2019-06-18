<template>
  <v-app>
    <v-toolbar app>
      <v-img :src="require('./assets/st-logo.png')"
        max-height=50px
        max-width=50px
       ></v-img>
      <v-toolbar-title class="headline">
        <span>Smoke Test</span>
      </v-toolbar-title>
      <v-spacer/>
    <v-toolbar-items>
    </v-toolbar-items>
      <v-spacer/>
      <v-btn
        icon
        href="https://github.com/austin-shaw/vue-rest-test"
        target="_blank"
        color="secondary"
      >
        <v-icon>fab fa-github</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.v-toolbar__title{
  color:#435466
}
</style>
