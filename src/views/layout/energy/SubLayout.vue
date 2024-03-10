<template>
  <v-app>
    <v-app-bar absolute flat color="white" height="60px" class="sub-appbar">
      <v-container class="d-flex align-center">
        <router-link class="d-inline-block" to="/main">
          <v-img src="@/assets/logo.png" max-width="168" contain></v-img>
        </router-link>
        <v-spacer></v-spacer>
        <TopMenu class="d-none d-md-flex" />
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="d-flex d-md-none"
        >
        </v-app-bar-nav-icon>
      </v-container>
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

    <v-footer>
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
  name: "SubLayout",
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
// energy > MainLayout.vue
.v-application .white.sub-appbar {
  border-bottom: 1px solid #f2f3f3 !important;
}
.v-main {
  padding: 60px 0 0 !important;
}
</style>
