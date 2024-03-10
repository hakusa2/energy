<template>
  <div class="topmenu-group admin-topmenu-group align-center">
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/promotion">프로모션 / 배너관리</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/notice">공지사항 관리</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/faq">FAQ 내용관리</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/businessapplication"
        >사업신청 관리</v-btn
      >
    </div>
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/signin">로그오프</v-btn>
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
// energy > TopMenu.vue

.admin-topmenu-group .topmenu-item .v-btn:not(.btn-confirm) {
  border-bottom: 0 solid transparent;
}
.admin-topmenu-group .topmenu-item .theme--light.v-btn:not(.btn-confirm):hover,
.admin-topmenu-group
  .topmenu-item
  .theme--light.v-btn--active:not(.btn-confirm):hover,
.admin-topmenu-group
  .topmenu-item
  .theme--light.v-btn--active:not(.btn-confirm),
.admin-topmenu-group .topmenu-item .v-btn[aria-expanded="true"] {
  border-bottom: 0 solid #0077c5;
  color: #0077c5;
}
</style>
