<template>
  <v-card tile elevation="0" class="card-mobile-menu">
    <v-app-bar flat dark color="#333333" height="60px">
      <v-toolbar-title>안녕하세요</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-app-bar>

    <v-list>
      <v-list-item-group v-model="selectedItem" color="#0055a5">
        <v-list-item title="사업소개" to="/introduce">
          <v-list-item-content>
            <v-list-item-title>사업소개</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action>
          <!-- <v-list-group :value="true" no-action> -->
          <template v-slot:activator>
            <v-list-item-title>복지모델소개</v-list-item-title>
          </template>
          <v-list-item to="/welfaremodel1">
            <v-list-item-title>사회복지시설</v-list-item-title>
          </v-list-item>
          <v-list-item to="/welfaremodel2">
            <v-list-item-title>소규모점포</v-list-item-title>
          </v-list-item>
          <v-list-item to="/welfaremodel3">
            <v-list-item-title>공동 주택</v-list-item-title>
          </v-list-item>
          <v-list-item to="/welfaremodel4">
            <v-list-item-title>단독 주택</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>사업현황</v-list-item-title>
          </template>
          <v-list-item to="/welfarestatusdetail">
            <v-list-item-title>수정구</v-list-item-title>
          </v-list-item>
          <v-list-item to="/welfarestatusdetail">
            <v-list-item-title>중원구</v-list-item-title>
          </v-list-item>
          <v-list-item to="/welfarestatusdetail">
            <v-list-item-title>분당구</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>공지사항</v-list-item-title>
          </template>
          <v-list-item to="/energynotice">
            <v-list-item-title>주요 공지사항</v-list-item-title>
          </v-list-item>
          <v-list-item to="/supportinformation">
            <v-list-item-title>지원사업 안내</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item title="사업문의" to="/energyfaq">
          <v-list-item-content>
            <v-list-item-title>사업문의</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item title="신청내역확인" to="/applycheck">
          <v-list-item-content>
            <v-list-item-title>신청내역확인</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-card-actions>
      <v-row no-gutters>
        <v-col cols="6">
          <v-btn depressed block dark color="#333333" to="/welfaremodel">
            <v-icon>mdi-account-plus</v-icon>
            <span>복지모델소개</span>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn depressed block dark color="#979CA0" to="/applycheck">
            <v-icon class="mdi-custom">mdi-clipboard-check-outline</v-icon>
            <span>신청확인하기</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
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
.card-mobile-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.card-mobile-menu .v-toolbar__title {
  font-size: 16px;
}
.card-mobile-menu .v-list {
  height: 100%;
  overflow: auto;
  padding: 0;
}
.card-mobile-menu .v-list .v-list-item__title {
  font-size: 14px;
  font-weight: 600;
}
.card-mobile-menu .v-list .v-list-group__items .v-list-item__title {
  font-size: 13px;
  font-weight: 500;
}
.card-mobile-menu
  .v-list
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 30px;
  background-color: #e8eef2;
  min-height: 36px;
}
.card-mobile-menu .v-card__actions {
  margin-top: auto;
  padding: 0;
}
.card-mobile-menu .v-card__actions .v-btn {
  height: auto;
  border-radius: 0;
  padding: 16px;
}
.card-mobile-menu .v-card__actions .v-btn .v-btn__content {
  display: flex;
  flex-direction: column;
}
.card-mobile-menu .v-card__actions .v-btn .v-btn__content .mdi {
  font-size: 32px;
  margin-bottom: 4px;
}
.card-mobile-menu .v-card__actions .v-btn .v-btn__content span {
  font-weight: 500;
}
</style>
