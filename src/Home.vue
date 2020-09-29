<template>
  <v-app>
    <v-main
      style="max-width: 800px; margin-top: 100px;"
      class="mx-auto"
    >
      <v-row no-gutters>
        <v-col no-gutters>
          <v-card
            class="ma-5"
            @click="$emit('card-clicked', 'AboutMe')">
              <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">Get to Know Me</v-list-item-title>
                <v-list-item-subtitle>Find out information about me</v-list-item-subtitle>
              </v-list-item-content>

              <v-avatar
                height="75px"
                width="75px"
                class="my-5">
                <img
                  src='./assets/static/me.png'
                  alt="Me"
                >
              </v-avatar>
            </v-list-item>
          </v-card>

          <v-card
            class="ma-5"
            @click="$emit('card-clicked', 'WorkExperience')">
              <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">Work Experience</v-list-item-title>
                <v-list-item-subtitle>See my work experience</v-list-item-subtitle>
              </v-list-item-content>

              <v-avatar
                height="75px"
                width="75px"
                class="my-5">
                <img
                  src='./assets/static/work.jpg'
                  alt="Work"
                >
              </v-avatar>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col no-gutters>
          <v-card
            class="ma-5"
            @click="$emit('card-clicked', 'MyEducation')">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">My Education</v-list-item-title>
                <v-list-item-subtitle>See my educational history</v-list-item-subtitle>
              </v-list-item-content>

              <v-avatar
                height="75px"
                width="75px"
                class="my-5">
                <img
                  src='./assets/static/Cougar.jpg'
                  alt="Education"
                >
              </v-avatar>
            </v-list-item>
          </v-card>

          <v-card
            class="ma-5"
            @click="$emit('card-clicked', 'MyProjects')">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1">My Projects</v-list-item-title>
                <v-list-item-subtitle>See projects I've worked on</v-list-item-subtitle>
              </v-list-item-content>

              <v-avatar
                height="75px"
                width="75px"
                class="my-5">
                <img
                  src='./assets/static/projects.png'
                  alt="Projects"
                >
              </v-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-card
          class="mx-auto mb-10"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Social Media</v-list-item-title>
              <v-list-item-subtitle>Lets get connected!</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
            <v-row
              class="ma-1"
              @mouseover="hovering(true)"
              @mouseleave="hovering(false)"
              @click="goToLink('https://github.com/dillonkh')"
            >
              <p style="width: 80px;" class="my-auto mx-2">GitHub</p>
              <div width="237.845px" class="ml-0">
                <img
                  src='./assets/static/github.png'
                  alt="GitHub"
                  height="50px"
                  width="150.375px"
                  class="ma-1"
                >
              </div>
              
            </v-row>
            <v-row
              class="ma-1"
              @mouseover="hovering(true)"
              @mouseleave="hovering(false)"
              @click="goToLink('https://www.linkedin.com/in/dillon-harris-489237159/')"
            >
                <p style="width: 80px;" class="my-auto mx-2">LinkedIn</p>
                <div width="237.845px" class="ml-0">
                  <img
                    src='./assets/static/linkedin.png'
                    alt="LinkedIn"
                    height="50px"
                    width="205.298px"
                    class="ma-1"
                  >
                </div>
            </v-row>
            <v-row
              class="ma-1"
              @mouseover="hovering(true)"
              @mouseleave="hovering(false)"
              @click="goToLink('https://www.facebook.com/profile.php?id=100013068433133')"
            >
              <p style="width: 80px;" class="my-auto mx-2">FaceBook</p>
              <div width="237.845px" class="ml-0">
                <img
                  src='./assets/static/facebook.png'
                  alt="FaceBook"
                  height="50px"
                  width="237.845px"
                  class="ma-1"
                >
              </div>
              
            </v-row>
          </v-card>
          <v-card
            class="mx-auto mb-10"
            @click="$emit('card-clicked', 'MyGames')"
          >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Games</v-list-item-title>
              <v-list-item-subtitle>See some web games I'm Working On</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          </v-card>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },
  data () {
    return {
      
    }
  },
  methods: {
    goToLink(link) {
      window.open(link, '_blank')
    },
    hovering(isHovering) {
      if (isHovering) {
        document.body.style.cursor = "pointer"
      } else {
        document.body.style.cursor = "default"
      }
    }
  },
  computed: {
    
  },
};
</script>
