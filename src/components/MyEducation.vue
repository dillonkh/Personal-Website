<template>
  <v-main class="ma-10">
    <v-row>
      <div>
        <p class="display-1">
          Brigham Young University
        </p>
      </div>
    </v-row>
    <v-row>
      <div>
        <span
          >I am a Computer Science undergraduate graduating
          <strong>April 2021</strong></span
        >
      </div>
    </v-row>
    <v-row>
      <div><span>My cumulative GPA is 3.6</span><br /></div>
    </v-row>
    <v-row class="mb-10 mt-5">
      <div>
        <v-btn
          outlined
          color="rgb(109, 167, 113)"
          @click="
            goToLink(
              'https://dillonkharris-personal-website.s3-us-west-2.amazonaws.com/Transcript2020.pdf'
            )
          "
        >
          Transcript
        </v-btn>
      </div>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "MyEducation",
  data() {
    return {};
  },
  methods: {
    goToLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
