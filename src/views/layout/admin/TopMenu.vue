<template>
  <div class="topmenu-group admin-topmenu-group align-center">
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/adminbusinessapplication"
        >사업신청관리</v-btn
      >
    </div>
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/adminconstructioncase">구축사례</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/adminnotice">복지소식</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/adminpromotion">배너관리</v-btn>
    </div>
    <div class="topmenu-item">
      <v-btn text class="rounded-0" to="/adminfaq">자주하는질문</v-btn>
    </div>
    <div class="topmenu-item">
      <v-dialog v-model="dialog" max-width="300px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed outlined v-bind="attrs" v-on="on" class="btn-confirm"
            >로그아웃</v-btn
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TopMenu",
  components: {},
  created() {},
  data: () => ({
    dialog: false,
  }),
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
