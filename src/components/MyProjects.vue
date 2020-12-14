<template>
  <v-row class="ma-10">
    <v-col>
      <p class="display-1 text--primary">
        Personal Website
      </p>

      <div class="mb-5 text--primary">
        This is it! You are currently looking at my personal website, congrats!
        <br />
        After my internship at SimpleNexus, I decided it was time to create a
        new website. This website is written in Vue.js and hosted on AWS S3 as a
        static website. Currently this website has no backend. My next step is
        to add some aspect of the website that would require a backend and
        emplement it with AWS Lambdas.
        <br />
        Here is a link to the GitHub repo if it interests you:
        <a href="https://github.com/dillonkh/Personal-Website"
          >Personal Website</a
        >
      </div>

      <p class="display-1 text--primary">
        Meal Planning App
      </p>

      <div class="mb-5 text--primary">
        <ul>
          <li>
            Currently developing a simple meal planning app in Android Studio
          </li>
          <li>Developing an app for a real need for a real person</li>
        </ul>
        <br />
        I started this app as something to help my wife meal prep. This app will
        save recipes and parse ingredient lists so that they can easily be added
        to a shopping list.<br />
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

      <p class="display-1 text--primary">
        Robot Game
      </p>

      <div class="mb-10 text--primary">
        <ul>
          <li>Founding member of the game dev club</li>
          <li>
            Helped younger CS students gain experience in a fun way
          </li>
          <li>Help organize a team to efficiently develop code</li>
        </ul>
        This project is in the VERY early stages of development. We are still
        waiting for approval to be an official club at BYU. <br />
      </div>
    </v-col>
  </v-row>
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
