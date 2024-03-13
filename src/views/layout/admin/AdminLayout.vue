<template>
  <v-app>
    <v-app-bar
      absolute
      elevation="2"
      color="white"
      height="60px"
      class="admin-appbar"
    >
      <div class="page-header">
        <v-container class="d-flex align-center">
          <router-link class="d-inline-block" to="/adminbusinessapplication">
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
      </div>
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

    <v-main class="admin-view pb-5">
      <router-view />
    </v-main>

    <v-footer class="admin-footer">
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
  name: "AdminLayout",
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
.v-main.admin-view {
  background-color: #fafafa;
}
.theme--light.v-footer.admin-footer {
  background-color: #ffffff;
  border-top: 0 solid #f2f3f3;
}
</style>
