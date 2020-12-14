<template>
  <v-app>
    <v-main class="ma-auto">
      <v-row>
        <v-col v-if="$vuetify.breakpoint.smAndDown">
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
        <v-col v-if="$vuetify.breakpoint.smAndDown">
          <div
            v-if="currentSlide < 2"
            class="mt-10"
            style="float: right"
          >
            <v-hover
              v-slot:default="{  }"
            >
              <v-icon
                light
                @click="nextSlide()"
              >
                mdi-arrow-right
              </v-icon>
            </v-hover>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="!$vuetify.breakpoint.smAndDown">
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
              <v-row>
                <v-col>
                  <div>Jan 2020 - Sept 2020</div>

                  <p class="display-1 text--primary">
                    SimpleNexus
                  </p>
                </v-col>
                <v-col>
                  <img
                    style="float: right"
                    height="75px"
                    width="75px"
                    class="mb-0 mr-10"
                    src='./../assets/static/SN.png'
                    alt="SN"
                  >
                </v-col>
              </v-row>

              <div class="text--primary">
                <strong>Software Development Intern</strong> -- Lehi, UT <br>
                <ul>
                  <li>Participated in agile web development on a persona based team</li>
                  <li>Gained experience working as a full stack web developer making commits daily</li>
                  <li>Showed independence and adaptability working from home with little supervision</li>
                </ul>
                <br>
                I started in January 2020 working part time for SimpleNexus. When school got out in May I transitioned to full time <br>
                This was my first coding experience working on a team, and I really enjoyed this aspect of it! My team was super cool and fun to be around. <br>
                This was also my first time working with Vue, Rails, and Graphql. I feel like I picked them up fairly quickly.
              </div>
            </v-card-text>
          </v-card>

          <v-card
            v-if="currentSlide === 1"
            width="500px"
          >
            <v-card-text class="my-5">
              <v-row>
                <v-col :cols="8">
                  <div>May 2019 - Aug 2019</div>

                  <p class="display-1 text--primary">
                    Hughes Network Systems
                  </p>
                </v-col>
                <v-col>
                  <img
                    style="float: right"
                    height="75px"
                    width="75px"
                    class="mb-0 mr-10"
                    src='./../assets/static/hughes.png'
                    alt="HughesNet"
                  >
                </v-col>
              </v-row>

              <div class="text--primary">
                <strong>Software Development Intern</strong> -- Gaithersburg, MD <br>
                <ul>
                  <li>Developed a web application that is now used in the field by professionals</li>
                  <li>Learned software design and testing principles</li>
                  <li>Participated at every level of the software development lifecycle</li>
                </ul>
                <br>
                I will always be grateful to Hughes for my first full time coding job and my first internship. <br>
                For this internship I got to my a small web app from scratch by myself (with the guidance of a great mentor and manager) <br>
                I chose to make this app using Flask Web Framework for the backend and Jquery for the front end.
              </div>
            </v-card-text>
          </v-card>

          <v-card
            v-if="currentSlide === 2"
            width="500px"
          >
            <v-card-text class="my-5">
              <v-row>
                <v-col :cols="8">
                  <div>Feb 2019 - Jan 2020</div>

                  <p class="display-1 text--primary">
                    Brigham Young University
                  </p>
                </v-col>
                <v-col >
                  <img
                    style="float: right"
                    height="75px"
                    width="75px"
                    class="mb-0 mr-10"
                    src='./../assets/static/cs.jpeg'
                    alt="CS"
                  >
                </v-col>
              </v-row>

              <div class="text--primary">
                <strong>Research Assistant (Computer Vision)</strong> -- Provo, UT <br>
                <ul>
                  <li>Learned to work independently on a long term project</li>
                  <li>Set realistic goals and report on those goals regularly</li>
                  <li>Developed a command line application for detecting key features to track on insects</li>
                </ul>
                <br>
                As a research assistant I learned a lot about Computer Vision. While computer vision is not necessarily what I want to go into long term, I still learned a lot of things that have helped me with web developement <br>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.smAndDown">
          <div
            v-if="currentSlide < 2"
            class="mt-10"
          >
            <v-hover
              v-slot:default="{  }"
            >
              <v-icon
                light
                @click="nextSlide()"
              >
                mdi-arrow-right
              </v-icon>
            </v-hover>
          </div>
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
