<template>
  <v-row class="ma-8">
    <v-col class="my-8" cols="8">
      <v-row>
        <v-col>
          <div>
            <span class="greeting"
              >Hi, I'm <strong class="name">Dillon Harris</strong></span
            >
          </div>
          <div>
            <span class="my-title">Full Stack Web Developer</span>
          </div>
          <div>
            <span class="sub-title">
              Student and Freelance Web Developer
            </span>
          </div>
          <div class="mt-8">
            <v-row>
              <v-col cols="5">
                <v-btn
                  outlined
                  color="rgb(109, 167, 113)"
                  @click="
                    goToLink(
                      'https://dillonkharris-personal-website.s3-us-west-2.amazonaws.com/Resume2020.pdf'
                    )
                  "
                >
                  Resume
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <img class="my-image" src="./../assets/static/me.png" />
      </v-row>
      <v-row>
        <v-col>
          <img
            class="icon"
            src="./../assets/static/LI-In-Bug.png"
            @click="
              goToLink('https://www.linkedin.com/in/dillon-harris-489237159/')
            "
          />
        </v-col>
        <v-col>
          <img
            class="icon"
            src="./../assets/static/f_logo_RGB-Blue_250.png"
            @click="
              goToLink(
                'https://www.facebook.com/profile.php?id=100013068433133'
              )
            "
          />
        </v-col>
        <v-col>
          <img
            class="icon"
            src="./../assets/static/GitHub-Mark-64px.png"
            @click="goToLink('https://github.com/dillonkh')"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  components: {},

  methods: {
    goToLink(link) {
      window.open(link, "_blank");
    },
    hovering(isHovering) {
      if (isHovering) {
        document.body.style.cursor = "pointer";
      } else {
        document.body.style.cursor = "default";
      }
    },
  },
};
</script>

<style scoped>
.greeting {
  font-size: 1.2em;
}
.name {
  color: rgb(87, 141, 91);
}
.my-title {
  font-size: 2em;
}
.sub-title {
  font-size: 0.9em;
  color: gray;
}
.my-image {
  max-width: 100%;
  border-radius: 5%;
}
.icon {
  max-width: 3em;
}
.icon:hover {
  cursor: pointer;
}
</style>
