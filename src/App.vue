<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue</span>
        <span class="font-weight-light"> TEST REST</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        href="https://github.com/austin-shaw"
        target="_blank"
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
