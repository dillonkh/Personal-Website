<template>
  <v-app>
    <background class="my-background" />
    <v-layout fill-height fluid>
      <v-row class="mt-10" justify="center">
        <v-col style="max-width: 800px; width: 100%;">
          <v-card class="ma-3">
            <Navigation :items="items" />
            <router-view style="" />
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    Navigation,
  },
  data() {
    return {
      items: [
        { name: "Home", uri: "/", selected: false },
        { name: "About Me", uri: "/about-me", selected: false },
        { name: "Experience", uri: "/work-experience", selected: false },
        { name: "Projects", uri: "/my-projects", selected: false },
        { name: "Education", uri: "/my-education", selected: false },
      ],
    };
  },
};
</script>

<style scoped>
.my-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background-color: rgb(109, 167, 113);
}
</style>
