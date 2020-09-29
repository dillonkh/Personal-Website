<template>
  <v-app>
    <v-main>
      <div>
        <v-btn @click="postRequest()" small color="primary">make post request</v-btn>
    <!-- <v-btn @click="start()" small color="primary">Start Game</v-btn> -->
    <!-- <canvas id="myCanvas" width="100%" height="500" /> -->
  </div>
    </v-main>
  </v-app>
</template>

<script>

import {Game} from './Game.js'
import {Test} from './Test.js'

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data () {
    return {
      myGame: null,
      response: null,
      data: null
    }
  },
  created() {
    const app = this
    window.addEventListener("keydown", function(e) {
      // space and arrow keys
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        if (e.keyCode === 37) {
          app.left()
        } else if (e.keyCode === 39) {
          app.right()
        } else if (e.keyCode === 38) {
          app.up()
        } else if (e.keyCode === 40) {
          app.down()
        } else if (e.keyCode === 32) {
          app.space()
        }
        e.preventDefault();
      }
    }, false);
  },

  methods: {
    postRequest () {
  //     const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ title: "Vue POST Request Example" })
  // };

  // fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
  //   .then(response => (this.response = response.json()))
  //   .then(data => (this.data = data));

  // console.log(this.response)
  // console.log(this.data)
      const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          "name": "Dillon Harris",
          "email": "dillon.keith.harris96@gmail.com",
          "resume": "https://www.linkedin.com/in/dillon-harris-489237159/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACXxjOkB1_HWqHyglulne08X2VC1dBXJqAc,1600873866162)/",
          "phone": "5057933568", // optional
          "github": "https://github.com/dillonkh", // optional
          "website": "http://dillonkharris-personal-website.s3-website-us-west-2.amazonaws.com/", // optional
          "location": "SLC", // optional
          "favorite_candy": "Reese's", // optional
          "superpower": "APIs?" // optional
        }
      )
      };
      fetch("https://contact.plaid.com/jobs", requestOptions)
        .then(response => (this.response = response.json()))
        .then(data => (this.data = data));

      console.log(this.response)
      console.log(this.data)
    },
    start () {
      console.log(new Test().getFull())
      this.myGame = new Game(30, 30, "red", 10, 120)
      this.myGame.startGame()
    },
    up () {
      this.myGame.moveup()
      console.log(this.myGame.gamePiece.y)
    },
    down () {
      this.myGame.movedown()
    },
    left () {
      this.myGame.moveleft()
    },
    right () {
      this.myGame.moveright()
    },
  },
};
</script>

<style>
#myCanvas {
  border:1px solid #d3d3d3;
  background-color: #f1f1f1;
}
</style>
