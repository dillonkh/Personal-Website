<template>
  <v-app>
    <v-main class="ma-auto">
      <v-row>
        <v-col v-if="$vuetify.breakpoint.smAndDown">
          <div v-if="currentSlide > 0" class="mt-10">
            <v-hover v-slot:default="{}">
              <v-icon light @click="previousSlide()">
                mdi-arrow-left
              </v-icon>
            </v-hover>
          </div>
        </v-col>
        <v-col v-if="$vuetify.breakpoint.smAndDown">
          <div v-if="currentSlide < 2" class="mt-10" style="float: right">
            <v-hover v-slot:default="{}">
              <v-icon light @click="nextSlide()">
                mdi-arrow-right
              </v-icon>
            </v-hover>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="!$vuetify.breakpoint.smAndDown">
          <div v-if="currentSlide > 0" class="mt-10">
            <v-hover v-slot:default="{}">
              <v-icon light @click="previousSlide()">
                mdi-arrow-left
              </v-icon>
            </v-hover>
          </div>
        </v-col>
        <v-col>
          <v-card v-if="currentSlide === 0" width="500px">
            <v-card-text class="my-5">
              <p class="display-1 text--primary">
                Personal Website
              </p>

              <div class="text--primary">
                This is it! You are currently looking at my personal website,
                congrats! <br />
                I had a website in the past, but it honestly was terrible...
                <br />
                After my internship at SimpleNexus, I decided it was time to
                create a new website. This website is written in Vue.js and
                hosted on AWS S3 as a static website. Currently this website has
                no backend. My next step is to add some aspect of the website
                that would require a backend and emplement it with AWS Lambdas.
                <br />
                Here is a link to the GitHub repo if it interests you:
                <a href="https://github.com/dillonkh/Personal-Website"
                  >Personal Website</a
                >
              </div>
            </v-card-text>
          </v-card>

          <v-card v-if="currentSlide === 1" width="500px">
            <v-card-text class="my-5">
              <p class="display-1 text--primary">
                Meal Planning App
              </p>

              <div class="text--primary">
                <ul>
                  <li>
                    Currently developing a simple meal planning app in Android
                    Studio
                  </li>
                  <li>Developing an app for a real need for a real person</li>
                </ul>
                <br />
                I started this app as something to help my wife meal prep. This
                app will save recipes and parse ingredient lists so that they
                can easily be added to a shopping list.<br />
                <br />
                <iframe
                  width="470"
                  height="225"
                  src="https://www.youtube.com/embed/PYZdWvn6vsA"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </v-card-text>
          </v-card>

          <v-card v-if="currentSlide === 2" width="500px">
            <v-card-text class="my-5">
              <p class="display-1 text--primary">
                Robot Game
              </p>

              <div class="text--primary">
                <ul>
                  <li>Founding member of the game dev club</li>
                  <li>
                    Helped younger CS students gain experience in a fun way
                  </li>
                  <li>Help organize a team to efficiently develop code</li>
                </ul>
                This project is in the VERY early stages of development. We are
                still waiting for approval to be an official club at BYU. <br />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.smAndDown">
          <div v-if="currentSlide < 2" class="mt-10">
            <v-hover v-slot:default="{}">
              <v-icon light @click="nextSlide()">
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
  name: "MyProjects",
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = this.currentSlide + 1;
    },
    previousSlide() {
      this.currentSlide = this.currentSlide - 1;
    },
  },
};
</script>
