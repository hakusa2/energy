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

    <v-list class="mt-5">
      <v-list-item-group v-model="selectedItem" color="#0055a5">
        <v-list-item to="/introduce">
          <v-list-item-content>
            <v-list-item-title>에너지복지사업</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action>
          <!-- <v-list-group :value="true" no-action> -->
          <template v-slot:activator>
            <v-list-item-title>세부사업내용</v-list-item-title>
          </template>
          <v-list-item to="/welfareModel1">
            <v-list-item-title>건물형 인프라구축 사업</v-list-item-title>
          </v-list-item>
          <v-list-item to="/welfareModel2">
            <v-list-item-title>점포형 에너지비용절감 사업</v-list-item-title>
          </v-list-item>
          <v-list-item to="/welfareModel3">
            <v-list-item-title>공동주택형 에너지서비스 사업</v-list-item-title>
          </v-list-item>
          <v-list-item to="/welfareModel4">
            <v-list-item-title>단독주택형 에너지서비스 사업</v-list-item-title>
          </v-list-item>
          <v-list-item to="/applycheck">
            <v-list-item-title>신청이력조회</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>운영현황</v-list-item-title>
          </template>
          <v-list-item to="/welfarestatus">
            <v-list-item-title>사업현황</v-list-item-title>
          </v-list-item>
          <v-list-item to="/constructioncase">
            <v-list-item-title>구축사례</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>참여와소통</v-list-item-title>
          </template>
          <v-list-item to="/energynotice">
            <v-list-item-title>복지소식</v-list-item-title>
          </v-list-item>
          <v-list-item to="/energyfaq">
            <v-list-item-title>자주묻는질문</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-item-group>
    </v-list>

    <v-card-actions class="pb-5">
      <v-btn
        class="btn-confirm rounded-xl"
        color="#A6D086"
        dark
        elevation="0"
        to="/myenergy"
        block
        >신청이력조회</v-btn
      >
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
.theme--light.v-card.card-mobile-menu {
  background-color: #fafafa;
}
.card-mobile-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.card-mobile-menu .v-list {
  height: 100%;
  overflow: auto;
  padding: 0;
}
.card-mobile-menu .v-list .v-list-item__title {
  font-size: 16px;
  font-weight: 700;
}
.card-mobile-menu .v-list .v-list-group__items .v-list-item__title {
  position: relative;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  padding-left: 10px;
}
.card-mobile-menu .v-list .v-list-group__items .v-list-item__title:before {
  content: "";
  position: absolute;
  top: 7px;
  left: 0;
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.65);
}
.card-mobile-menu
  .v-list
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 24px;
  min-height: 36px;
}
</style>
