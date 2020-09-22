<template>
  <v-app>
    <v-main
      class="ma-auto"
    >
      <v-row>
        <v-card
          class="ma-5"
          max-width="344"
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
          max-width="344"
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
      </v-row>
      <v-row>
        <v-card
          class="ma-5"
          max-width="344"
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
          max-width="344"
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
    
  },
  computed: {
    
  },
};
</script>
