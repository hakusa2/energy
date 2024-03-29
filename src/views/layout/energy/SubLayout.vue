<template>
  <v-app>
    <v-app-bar app flat color="white" height="66px" class="sub-appbar">
      <div class="page-header">
        <v-container class="d-flex align-center">
          <router-link class="d-inline-block" to="/main">
            <v-img src="@/assets/logo.png" max-width="193" contain></v-img>
          </router-link>
          <v-spacer></v-spacer>
          <TopMenu class="d-none d-md-flex" />
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="d-flex d-md-none"
          >
          </v-app-bar-nav-icon>
        </v-container>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      right
      absolute
      temporary
      class="right-navigation-drawer"
    >
      <MobileMenu @closeMobile="closeMobileMenu" />
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
    drawer: false,
  }),
  methods: {
    closeMobileMenu(){
      this.drawer = false;
    },
  },
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
