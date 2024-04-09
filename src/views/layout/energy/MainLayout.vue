<template>
  <v-app>
    <v-app-bar app flat color="white" height="66px" class="main-appbar" :class="{'v-app-bar--is-scrolled': whiteNav }">
      <!-- <v-app-bar app flat color="white" height="66px" class="main-appbar v-app-bar--is-scrolled"> -->
      <!-- 스크롤 시 GNB  class="main-appbar v-app-bar--is-scrolled" -->
      <div class="page-header">
        <v-container class="d-flex align-center pa-0">
          <router-link class="d-inline-block" to="/main">
            <v-img src="@/assets/logo_w.png" max-width="193" contain></v-img>
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
    drawer: false,
    scrollPosition: null,
    whiteNav: false,
  }),
  mounted() {
    document.body.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = document.body.scrollTop;
      if(this.scrollPosition > 700){
        this.whiteNav = true;
      } else {
        this.whiteNav = false;
      }
    },
    closeMobileMenu() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
.right-navigation-drawer.v-navigation-drawer--absolute {
  position: fixed;
  width: 320px !important;
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
.main-appbar.v-app-bar--is-scrolled .v-image__image {
  background-image: url("@/assets/logo.png") !important;
}
.main-appbar.v-app-bar--is-scrolled.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffffff !important;
  border-bottom: 1px solid #f2f3f3;
}
.main-appbar.v-app-bar--is-scrolled .topmenu-item .v-btn:not(.btn-confirm) {
  color: rgba(0, 0, 0, 0.87);
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
