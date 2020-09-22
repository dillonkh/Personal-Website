<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <v-hover
        v-if="currentComponent !== 'Home'"
        v-slot:default="{  }"
      >
        <v-icon
          style="color: #3352a9"
          @click="setCurrentComponent('Home')"
        >
          mdi-arrow-left
        </v-icon>
      </v-hover>
      <div class="d-flex align-center">
      </div>

      <v-spacer></v-spacer>
      <div style="color: #3352a9;">Dillon Harris</div>
      <img
        src='./assets/static/DH-logo-light.png'
        alt="DH"
        height="125px"
        width="125px"
        class="mr-0 mt-2"
      >
      


      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
    <component
      v-bind:is="currentComponent"
      @card-clicked="setCurrentComponent($event)"
    />
  </v-app>
</template>

<script>
import AboutMe from './AboutMe'
import MyEducation from './MyEducation'
import MyProjects from './MyProjects'
import WorkExperience from './WorkExperience'
import Home from './Home'

export default {
  name: 'App',

  components: {
    AboutMe,
    MyEducation,
    MyProjects,
    WorkExperience,
    Home
  },
  data () {
    return {
      backButtonHover: false,
      theCurrentComponent: 'Home'
    }
  },
  methods: {
    setCurrentComponent (comp) {
      this.theCurrentComponent = comp
    }
  },
  computed: {
    currentComponent () {
      return this.theCurrentComponent
    }
  },
};
</script>
<style scoped>
</style>
