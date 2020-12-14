<template>
  <v-app>
    <v-main class="ma-auto">
      <v-row>
        <v-col>
          <div
            v-if="currentSlide > 0"
            class="mt-10"
          >
            <v-hover
              v-slot:default="{  }"
            >
              <v-icon
                light
                @click="previousSlide()"
              >
                mdi-arrow-left
              </v-icon>
            </v-hover>
          </div>
        </v-col>
        <v-col>
          <v-card
            v-if="currentSlide === 0"
            width="500px"
          >
            <v-card-text class="my-5">

              <p class="display-1 text--primary">
                Brigham Young University
              </p>

              <div class="text--primary">
                I am a Computer Science undergraduate graduating <strong>April 2021</strong> <br>
                <br>
                My cumulative GPA is 3.6 <br>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
      </v-row>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  // data: () => ({
  //   //
  // }),
  data () {
    return {
      currentSlide: 0
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = this.currentSlide + 1
    },
    previousSlide() {
      this.currentSlide = this.currentSlide - 1
    }
  },
};
</script>
