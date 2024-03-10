<template>
  <v-app>
    <v-app-bar absolute flat color="white" height="60px" class="main-appbar">
      <v-container class="d-flex align-center">
        <router-link class="d-inline-block" to="/main">
          <v-img src="@/assets/logo_w.png" max-width="168" contain></v-img>
        </router-link>
        <v-spacer></v-spacer>
        <TopMenu class="d-none d-md-flex" />
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="d-flex d-md-none"
          dark
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

    <v-main class="main-view">
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
.right-navigation-drawer.v-navigation-drawer--absolute {
  position: fixed;
}
@media (max-width: 600px) {
  .right-navigation-drawer.v-navigation-drawer--absolute {
    width: 100% !important;
  }
}
.v-toolbar__content,
.v-footer {
  padding-right: 12px;
  padding-left: 12px;
}
.main-appbar.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent !important;
}
.main-appbar .topmenu-item .v-btn:not(.btn-confirm) {
  color: #ffffff;
}
.v-main.main-view {
  padding: 0 !important;
}
.right-navigation-drawer.v-navigation-drawer--close {
  display: none;
}
.theme--light.v-footer {
  background-color: #ffffff;
  border-top: 1px solid #f2f3f3;
}
</style>
