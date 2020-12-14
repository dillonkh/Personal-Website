<template>
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
              What I'm Looking For
            </p>

            <div class="text--primary">
              My name is Dillon Harris. <br />
              I will be graduating from BYU in April of 2021. <br />
              I am looking for full time employment any time after graduation
              and part time employment any time before then. <br />
              I have experience in full stack web development and some
              experience in Android development
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="currentSlide === 1" width="500px">
          <v-card-text class="my-5">
            <p class="display-1 text--primary">
              My Story
            </p>

            <div class="text--primary">
              I grew up outside the town of Farmington, NM. After graduating
              high school from Farmington High, I lived in San Pedro Sula
              Honduras for two years serving as a proselyting missionary for the
              Church of Jesus Christ of Latter-day Saints. <br />
              Upon Ariving Home, I shortly married my high school sweetheart,
              Jade. Together we moved to Provo, UT to go to school and Brigham
              Young University. Initially, I thought I wanted to persue a career
              in medicine. However, I quickly discovered that I did not have an
              aptitude for science. <br />
              I decided to take a few online career tests to see what other
              options were out there. I was a little suprised to see that jobs
              in technology were always at the top of the list. I had never
              considered a job in technology, mostly because growing up in
              Farmington, I didn't know anyone who worked in the technology
              industry. I took a free python course through Code Academy and
              instantly fell in love. I quickly changed my major from Biology to
              Computer Science and have not had a second thought since.<br />
              I feel truly blessed that I was able to find a career path that
              involves doing something that I love.
            </div>
          </v-card-text>
        </v-card>

        <v-card v-if="currentSlide === 2" width="500px">
          <v-card-text class="my-5">
            <p class="display-1 text--primary">
              My Family
            </p>

            <div class="mb-5 text--primary">
              I married Jade in 2016 and we have been living in the Provo, UT
              area ever since. <br />
              We have two litter fur babies: We got Tuna as a kitten in 2017 and
              Tillie just a few weeks ago!
            </div>
            <img
              class="ma-1"
              width="225px"
              height="225px"
              src="./../assets/static/tuna.jpg"
            />
            <img
              class="ma-1"
              width="225px"
              height="225px"
              src="./../assets/static/tillie.jpg"
            />
          </v-card-text>
        </v-card>

        <v-card v-if="currentSlide === 3" width="500px">
          <v-card-text class="my-5">
            <p class="display-1 text--primary">
              My Hobbies
            </p>

            <div class="text--primary">
              I've always love the outdoors, and New Mexico is the perfect place
              for people like me! <br />
              I grew up riding dirt bikes and mountain bikes. As a teen, I also
              picked snowboarding, a great way to spend the winter months!
              <br />
              As a student here at BYU (without a dirt bike or mountain bike)
              I've started running a lot more. I also enjoy drawing, painting,
              and playing video games.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.smAndDown">
        <div v-if="currentSlide < 3" class="mt-10">
          <v-hover v-slot:default="{}">
            <v-icon light @click="nextSlide()">
              mdi-arrow-right
            </v-icon>
          </v-hover>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  // data: () => ({
  //   //
  // }),
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
