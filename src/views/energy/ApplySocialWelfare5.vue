<template>
  <div class="page-sub h-100">
    <div class="page-bg h-100">
      <div class="page-container d-flex align-center h-100">
        <v-container>
          <v-card flat class="card-transparent">
            <v-flex
              class="complete-group flex-column align-center justify-center text-center py-10"
            >
              <v-img
                src="@/assets/img_complete.png"
                max-height="590"
                contain
              ></v-img>
              <div class="complete-title my-3">사업 신청이 완료되었습니다</div>
              <div class="complete-stext">
                신청이력조회를 통해 신청 현황을 확인할 수 있습니다.<br />
                문의사항은 고객센터(1577-3100)으로 부탁드립니다.
              </div>
            </v-flex>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn large depressed color="primary" to="/main"> 홈으로 </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ApplySocialWelfare5",
  components: {},
  data: () => ({}),
};
</script>

<style lang="scss"></style>
