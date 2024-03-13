<template>
  <v-card tile elevation="0" class="card-mobile-menu">
    <v-app-bar flat color="white" height="60px">
      <v-toolbar-title
        ><v-img src="@/assets/logo.png" max-width="168" contain></v-img
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

    <v-list>
      <v-list-item-group v-model="selectedItem" color="#0055a5">
        <v-list-item to="/adminbusinessapplication">
          <v-list-item-content>
            <v-list-item-title>사업신청관리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/adminconstructioncase">
          <v-list-item-content>
            <v-list-item-title>구축사례</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/adminnotice">
          <v-list-item-content>
            <v-list-item-title>복지소식</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/adminpromotion">
          <v-list-item-content>
            <v-list-item-title>배너관리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/adminfaq">
          <v-list-item-content>
            <v-list-item-title>자주하는질문</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-dialog v-model="dialog" max-width="300px">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-title v-bind="attrs" v-on="on"
                  >로그아웃</v-list-item-title
                >
              </template>
              <v-card class="card-alert">
                <v-card-text>로그아웃 하시겠습니까?</v-card-text>
                <v-card-actions class="pa-0">
                  <v-row no-gutters>
                    <v-col>
                      <v-btn depressed block tile>취소</v-btn>
                    </v-col>
                    <v-col>
                      <v-btn depressed block tile color="primary" to="/signin"
                        >로그아웃</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
// @ is an alias to /src
export default {
  name: "MobileMenu",
  components: {},
  data: () => ({
    dialog: false,
  }),
};
</script>

<style lang="scss">
// energy > MobileMenu.vue
</style>
