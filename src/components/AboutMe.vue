<template>
  <div>
    <v-row v-if="this.$vuetify.breakpoint.smAndUp" class="ma-10">
      <v-col class="mb-8" cols="7">
        <v-row>
          <p class="display-1 text--primary">
            What I'm Looking For
          </p>
        </v-row>
        <v-row>
          <div class="text--primary">
            I am looking for full time employment after my graduation from BYU
            in April 2021. <br />
            I would be a good fit for any agile, web development team. <br />
            I have experience building new websites and maintaining existing
            websites. <br />
            I am just as comfortable on the front end using something like Vue
            or React as I am on the back end. <br />
          </div>
        </v-row>

        <v-row class="mt-5">
          <p class="display-1 text--primary">
            My Story
          </p>

          <div class="text--primary">
            I grew up outside the town of Farmington, NM. After graduating high
            school from Farmington High, I lived in San Pedro Sula Honduras for
            two years serving as a proselyting missionary for the Church of
            Jesus Christ of Latter-day Saints. <br />
            Upon Ariving Home, I shortly married my high school sweetheart,
            Jade. Together we moved to Provo, UT to go to school and Brigham
            Young University. Initially, I thought I wanted to persue a career
            in medicine. However, I quickly discovered that I did not have an
            aptitude for science. <br />
            I decided to take a few online career tests to see what other
            options were out there. I was a little suprised to see that jobs in
            technology were always at the top of the list. I had never
            considered a job in technology, mostly because growing up in
            Farmington, I didn't know anyone who worked in the technology
            industry. I took a free python course through Code Academy and
            instantly fell in love. I quickly changed my major from Biology to
            Computer Science and have not had a second thought since.<br />
            I feel truly blessed that I was able to find a career path that
            involves doing something that I love.
          </div>
        </v-row>

        <v-row class="mt-5">
          <p class="display-1 text--primary">
            My Family
          </p>

          <div class="mb-5 text--primary">
            I married Jade in 2016 and we have been living in the Provo, UT area
            ever since. <br />
            We have two little critters who live with us: We got Tuna as a
            kitten in 2017 and Tillie in September 2020.
          </div>
        </v-row>

        <v-row class="mt-5">
          <p class="display-1 text--primary">
            My Hobbies
          </p>

          <div class="text--primary">
            I've always love the outdoors, and New Mexico is the perfect place
            for people like me! <br />
            I grew up riding dirt bikes and mountain bikes. As a teen, I also
            picked up snowboarding, a great way to spend the winter months!
            <br />
            As a student here at BYU (without a dirt bike or mountain bike) I've
            started running a lot more. I also enjoy drawing, painting, and
            playing video games.
          </div>
        </v-row>
      </v-col>
      <v-col>
        <v-row class="mx-1 mt-10">
          <img class="my-image" src="./../assets/static/me_and_jade.jpeg" />
        </v-row>
        <v-row class="mx-1 mt-10">
          <img class="my-image" src="./../assets/static/tuna_and_tillie.jpeg" />
        </v-row>
        <v-row class="mx-1 mt-10">
          <img class="my-image" src="./../assets/static/me_and_jade2.jpg" />
        </v-row>
        <v-row class="mx-1 mt-10">
          <img class="my-image" src="./../assets/static/family.jpeg" />
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else class="ma-10">
      <v-row>
        <p class="display-1 text--primary">
          What I'm Looking For
        </p>
      </v-row>
      <v-row>
        <div class="text--primary">
          I am looking for full time employment after my graduation from BYU in
          April 2021. <br />
          I would be a good fit for any agile, web development team. <br />
          I have experience building new websites and maintaining existing
          websites. <br />
          I am just as comfortable on the front end using something like Vue or
          React as I am on the back end. <br />
        </div>
      </v-row>

      <v-row class="mt-5">
        <p class="display-1 text--primary">
          My Story
        </p>

        <div class="text--primary">
          I grew up outside the town of Farmington, NM. After graduating high
          school from Farmington High, I lived in San Pedro Sula Honduras for
          two years serving as a proselyting missionary for the Church of Jesus
          Christ of Latter-day Saints. <br />
          Upon Ariving Home, I shortly married my high school sweetheart, Jade.
          Together we moved to Provo, UT to go to school and Brigham Young
          University. Initially, I thought I wanted to persue a career in
          medicine. However, I quickly discovered that I did not have an
          aptitude for science. <br />
          I decided to take a few online career tests to see what other options
          were out there. I was a little suprised to see that jobs in technology
          were always at the top of the list. I had never considered a job in
          technology, mostly because growing up in Farmington, I didn't know
          anyone who worked in the technology industry. I took a free python
          course through Code Academy and instantly fell in love. I quickly
          changed my major from Biology to Computer Science and have not had a
          second thought since.<br />
          I feel truly blessed that I was able to find a career path that
          involves doing something that I love.
        </div>
      </v-row>

      <v-row class="mt-5">
        <p class="display-1 text--primary">
          My Family
        </p>

        <div class="mb-5 text--primary">
          I married Jade in 2016 and we have been living in the Provo, UT area
          ever since. <br />
          We have two little critters who live with us: We got Tuna as a kitten
          in 2017 and Tillie in September 2020.
        </div>
      </v-row>

      <v-row class="mt-5">
        <p class="display-1 text--primary">
          My Hobbies
        </p>

        <div class="text--primary">
          I've always love the outdoors, and New Mexico is the perfect place for
          people like me! <br />
          I grew up riding dirt bikes and mountain bikes. As a teen, I also
          picked up snowboarding, a great way to spend the winter months!
          <br />
          As a student here at BYU (without a dirt bike or mountain bike) I've
          started running a lot more. I also enjoy drawing, painting, and
          playing video games.
        </div>
      </v-row>
      <v-row>
        <v-row class="mx-1 mt-10">
          <img class="my-image" src="./../assets/static/me_and_jade.jpeg" />
        </v-row>
        <v-row class="mx-1 mt-10">
          <img class="my-image" src="./../assets/static/tuna_and_tillie.jpeg" />
        </v-row>
        <v-row class="mx-1 mt-10">
          <img class="my-image" src="./../assets/static/me_and_jade2.jpg" />
        </v-row>
        <v-row class="mx-1 mt-10 mb-10">
          <img class="my-image" src="./../assets/static/family.jpeg" />
        </v-row>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.my-image {
  max-width: 100%;
  border-radius: 5%;
}
</style>
