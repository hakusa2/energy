<template>
  <v-app>
    <v-app-bar
      app
      flat
      clipped-left
      clipped-right
      color="#F4F4F4"
      height="60px"
      class="px-2"
    >
      <router-link class="d-inline-block" to="/admin">
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
  </v-app>
</template>

<script>
// @ is an alias to /src
import TopMenu from "./TopMenu.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  name: "AdminLayout",
  components: {
    TopMenu,
    MobileMenu,
  },
  created() {},
  data: () => ({
    drawer: null,
  }),
};
</script>

<style lang="scss">
// energy > MainLayout.vue
</style>
