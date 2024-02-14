<template>
  <v-app>
    <v-app-bar
      app
      flat
      clipped-left
      clipped-right
      color="white"
      height="60px"
      class="px-2"
    >
      <router-link class="d-inline-block" to="/main">
        <v-img src="@/assets/logo.svg" max-width="168" contain></v-img>
      </router-link>
      <v-spacer></v-spacer>
      <TopMenu class="d-none d-md-flex" />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-flex d-md-none"
      >
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      right
      absolute
      temporary
      class="right-navigation-drawer"
    >
      <MobileMenu />
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="mt-5">
      <CopyRight />
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import TopMenu from "./TopMenu.vue";
import MobileMenu from "./MobileMenu.vue";
import CopyRight from "./CopyRight.vue";

export default {
  name: "MainLayout",
  components: {
    TopMenu,
    MobileMenu,
    CopyRight,
  },
  created() {},
  data: () => ({
    drawer: null,
  }),
};
</script>

<style lang="scss">
.right-navigation-drawer.v-navigation-drawer--absolute {
  position: fixed;
}
.right-navigation-drawer.v-navigation-drawer--close {
  display: none;
}
.theme--light.v-footer {
  background-color: #333333;
  color: rgba(255, 255, 255, 0.87);
}
</style>
