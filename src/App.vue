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
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
