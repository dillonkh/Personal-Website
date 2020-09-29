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
      <v-spacer></v-spacer>
      <div style="color: #3352a9;">Dillon Harris</div>
      <img
        src='./assets/static/DH-logo-light.png'
        alt="DH"
        height="55px"
        width="55px"
        class="my-5 ml-5 mr-0"
      >
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
import MyGames from './MyGames'

export default {
  name: 'App',

  components: {
    AboutMe,
    MyEducation,
    MyProjects,
    WorkExperience,
    MyGames,
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
    },
    initializeGame() {
      this.initialize = true;
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
