<template>
  <div class="topmenu-group align-center">
    <div class="topmenu-item">
      <v-btn text to="/introduce">사업소개</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text to="/welfaremodel">복지모델소개</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text to="/welfarestatus">사업현황</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text to="/energynotice">공지사항</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text to="/energyfaq">사업문의</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn class="btn-confirm" color="#C3C3C3" elevation="0" to="/applycheck"
        >신청이력확인</v-btn
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
  margin-left: 20px;
}
.topmenu-item .v-btn {
  font-weight: 700;
}
.topmenu-item .v-btn:not(.btn-confirm) {
  font-size: 14px;
  min-width: 0;
  padding: 0;
}
.topmenu-item .theme--light.v-btn:not(.btn-confirm):hover,
.topmenu-item .theme--light.v-btn--active:not(.btn-confirm):hover,
.topmenu-item .theme--light.v-btn--active:not(.btn-confirm) {
  color: #0055a5;
}
.topmenu-item .theme--light.v-btn:not(.btn-confirm)::before {
  opacity: 0 !important;
}
.topmenu-item .theme--light.v-btn:not(.btn-confirm) .v-ripple__container {
  display: none;
}
</style>
