<template>
  <div class="topmenu-group align-center">
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/introduce">에너지복지사업</v-btn>
    </div>
    <div class="topmenu-item">
      <v-menu open-on-hover offset-y rounded="t-0 b-lg topmeu-dropdown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="rounded-0"
            v-bind="attrs"
            v-on="on"
            to="/welfareModel"
          >
            세부사업내용
          </v-btn>
        </template>
        <v-list>
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
        </v-list>
      </v-menu>
    </div>
    <div class="topmenu-item">
      <v-menu open-on-hover offset-y rounded="t-0 b-lg topmeu-dropdown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="rounded-0" v-bind="attrs" v-on="on">
            운영현황
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/welfarestatus">
            <v-list-item-title>사업현황</v-list-item-title>
          </v-list-item>
          <v-list-item to="/constructioncase">
            <v-list-item-title>구축사례</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="topmenu-item">
      <v-menu open-on-hover offset-y rounded="t-0 b-lg topmeu-dropdown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text class="rounded-0" v-bind="attrs" v-on="on">
            참여와소통
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/energynotice">
            <v-list-item-title>복지소식</v-list-item-title>
          </v-list-item>
          <v-list-item to="/energyfaq">
            <v-list-item-title>자주묻는질문</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="topmenu-item">
      <v-btn
        class="btn-confirm rounded-xl"
        color="#A6D086"
        dark
        elevation="0"
        to="/myenergy"
        >마이에너지</v-btn
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TopMenu",
  components: {},
  created() {},
  data: () => ({}),
};
</script>

<style lang="scss">
.topmenu-item + .topmenu-item {
  margin-left: 40px;
}
.topmenu-item .v-btn {
  font-weight: 700;
}
.topmenu-item .v-btn.btn-confirm {
  font-weight: 500;
}
.topmenu-item .v-btn:not(.btn-confirm) {
  font-size: 16px;
  min-width: 0;
  height: 60px;
  padding: 0;
  border-bottom: 3px solid transparent;
}
.topmenu-item .theme--light.v-btn:not(.btn-confirm):hover,
.topmenu-item .theme--light.v-btn--active:not(.btn-confirm):hover,
.topmenu-item .theme--light.v-btn--active:not(.btn-confirm),
.topmenu-item .v-btn[aria-expanded="true"] {
  border-bottom: 3px solid #0077c5;
}
.topmenu-item .theme--light.v-btn:not(.btn-confirm)::before {
  opacity: 0 !important;
}
.topmenu-item .theme--light.v-btn:not(.btn-confirm) .v-ripple__container {
  display: none;
}
.rounded-topmeu-dropdown {
  min-width: 200px !important;
}
.rounded-topmeu-dropdown.v-menu__content {
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.12);
}
.rounded-topmeu-dropdown .v-list-item {
  font-size: 12px;
  font-weight: 600;
  min-height: 30px;
}
.rounded-topmeu-dropdown
  .theme--light.v-list-item:not(.v-list-item--active):not(
    .v-list-item--disabled
  ) {
  color: #161816;
}
.rounded-topmeu-dropdown .theme--light.v-list-item:hover {
  background-color: #cbcdd1;
}
.rounded-topmeu-dropdown .theme--light.v-list-item:hover::before {
  opacity: 0;
}
</style>
