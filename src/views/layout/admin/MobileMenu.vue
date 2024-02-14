<template>
  <v-card tile elevation="0" class="card-mobile-menu">
    <v-app-bar flat dark color="#333333" height="60px">
      <v-toolbar-title>관리자</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

    <v-list>
      <v-list-item-group v-model="selectedItem" color="#0055a5">
        <v-list-item title="프로모션 / 배너관리" to="/promotion">
          <v-list-item-content>
            <v-list-item-title>프로모션 / 배너관리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item title="공지사항 관리" to="/notice">
          <v-list-item-content>
            <v-list-item-title>공지사항 관리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item title="내용관리" to="/faq">
          <v-list-item-content>
            <v-list-item-title>FAQ 내용관리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item title="사업신청 관리" to="/businessapplication">
          <v-list-item-content>
            <v-list-item-title>사업신청 관리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item title="로그오프">
          <v-list-item-content>
            <v-list-item-title>로그오프</v-list-item-title>
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
  data: () => ({}),
};
</script>

<style lang="scss">
// energy > MobileMenu.vue
</style>
