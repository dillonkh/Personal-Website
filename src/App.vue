<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <v-spacer></v-spacer>
      <div style="color: #3352a9;">Dillon Harris</div>
      <img
        src="./assets/static/DH-logo-light.png"
        alt="DH"
        height="55px"
        width="55px"
        class="my-5 ml-5 mr-0"
      />

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    // AboutMe,
    // MyEducation,
    // MyProjects,
    // WorkExperience,
    // Home
  },
  data() {
    return {
      // backButtonHover: false,
      // theCurrentComponent: 'Home'
    };
  },
  // methods: {
  //   setCurrentComponent (comp) {
  //     this.theCurrentComponent = comp
  //   }
  // },
  // computed: {
  //   currentComponent () {
  //     return this.theCurrentComponent
  //   }
  // },
};
</script>
<style scoped></style>
