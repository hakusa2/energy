<template>
  <div class="topmenu-group align-center">
    <div class="topmenu-item">
      <v-btn text to="/promotion">프로모션 / 배너관리</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text to="/notice">공지사항 관리</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text to="/faq">FAQ 내용관리</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text to="/businessapplication">사업신청 관리</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text to="/signin">로그오프</v-btn>
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
</style>
