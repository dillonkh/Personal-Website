<template>
  <v-row class="ma-0">
    <v-row>
      <div>
        <span>PlayerId: {{ this.playerId }}</span>
      </div>
    </v-row>
    <v-row>
      <v-col class="ma-0">
        <canvas
          ref="game"
          :width="width"
          :height="height"
          style="background: grey;"
        />
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "GameHolder",
  data() {
    return {
      socket: {},
      frozen: false,
      context: {},
      position: {
        x: 0,
        y: 0,
      },
      width: 750,
      height: 480,
      playerId: "",
      playerMovement: {
        up: false,
        down: false,
        left: false,
        right: false,
      },
    };
  },
  created() {
    this.socket = io("http://localhost:3000", {
      withCredentials: false,
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  mounted() {
    window.addEventListener("keydown", (event) => this.getInput(event));
    window.addEventListener("keyup", (event) => this.setInputFalse(event.code));
    this.context = this.$refs.game.getContext("2d");
    this.socket.on("connect", () => {
      this.playerId = this.socket.id;
    });
    this.socket.emit("newPlayer");
    this.socket.on("state", (gameState) => {
      // console.log(gameState);
      this.context.clearRect(0, 0, this.width, this.height);
      for (var player in gameState.players) {
        this.drawPlayer(gameState.players[player]);
        this.movePlayer(this.playerMovement);
      }
    });
    this.socket.on("gameOver", () => {
      alert("Game Over");
    });
    this.socket.on("freeze", () => {
      this.frozen = true;
    });
    this.socket.on("thaw", () => {
      this.frozen = false;
    });
  },
  methods: {
    drawPlayer(player) {
      this.context.fillStyle = "#FFFFFF";
      this.context.fillStyle = player.color;
      this.context.fillRect(player.x, player.y, 20, 20);
    },
    getInput(e) {
      if (!this.frozen) {
        if (e.code === "ArrowUp" || e.code === "KeyW") {
          this.playerMovement.up = true;
        }
        if (e.code === "ArrowDown" || e.code === "KeyS") {
          this.playerMovement.down = true;
        }
        if (e.code === "ArrowRight" || e.code === "KeyD") {
          this.playerMovement.right = true;
        }
        if (e.code === "ArrowLeft" || e.code === "KeyA") {
          this.playerMovement.left = true;
        }
        e.preventDefault();
        this.movePlayer(this.playerMovement);
      }
    },
    setInputFalse(code) {
      if (code === "ArrowUp" || code === "KeyW") {
        this.playerMovement.up = false;
      }
      if (code === "ArrowDown" || code === "KeyS") {
        this.playerMovement.down = false;
      }
      if (code === "ArrowRight" || code === "KeyD") {
        this.playerMovement.right = false;
      }
      if (code === "ArrowLeft" || code === "KeyA") {
        this.playerMovement.left = false;
      }
    },
    movePlayer(playerMovement) {
      // console.log(playerMovement);
      this.socket.emit("movePlayer", playerMovement);
    },
  },
};
</script>

<style scoped></style>
