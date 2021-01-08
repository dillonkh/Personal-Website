<template>
  <v-card>
    <div v-if="this.$vuetify.breakpoint.smAndUp">
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
    </div>
    <div v-else>
      <v-row>
        <v-col cols="3" class="ml-2">
          <img class="logo" src="./../assets/static/DH-logo-green.png" />
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2" align-self="center" class="mr-1">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" large color="green darken-2">
                mdi-menu
              </v-icon>
            </template>

            <v-list>
              <v-list-item v-for="item in items" :key="item.name">
                <router-link class="item" :to="item.uri">
                  <span
                    :class="item.selected ? 'selected' : ''"
                    @click="setSelected(item)"
                    >{{ item.name }}</span
                  >
                </router-link>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </div>
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
