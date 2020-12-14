<template>
  <v-card>
    <v-row justify="center" align="center" class="mx-auto">
      <v-col>
        <img class="logo" src="./../assets/static/DH-logo-green.png" />
      </v-col>
      <v-spacer></v-spacer>
      <v-col v-for="item in items" :key="item.name">
        <router-link class="item" :to="item.uri">
          <span
            :class="item.selected ? 'selected' : ''"
            @click="setSelected(item)"
            >{{ item.name }}</span
          >
        </router-link>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    items: Array,
  },
  data() {
    return {};
  },
  mounted() {
    let pathname = window.location.pathname;
    this.items.map((i) => {
      if (i.uri === pathname) {
        i.selected = true;
      } else {
        i.selected = false;
      }
    });
  },
  methods: {
    goToLink(link) {
      window.open(link, "_blank");
    },
    hovering(isHovering) {
      if (isHovering) {
        document.body.style.cursor = "pointer";
      } else {
        document.body.style.cursor = "default";
      }
    },
    setSelected(item) {
      this.items.map((i) => {
        if (i.name === item.name) {
          i.selected = true;
        } else {
          i.selected = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.item {
  text-decoration: none;
  color: black;
}
.item:hover {
  font-weight: bold;
  color: rgb(87, 141, 91);
  cursor: pointer;
}
.logo {
  max-width: 50%;
}
.selected {
  font-weight: bold;
}
</style>
