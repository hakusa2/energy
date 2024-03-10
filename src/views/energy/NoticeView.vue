<template>
  <div class="page-sub">
    <div class="page-header pb-4">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </div>
    <div class="page-bg border-top h-100">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col>
              <div class="table-energy table-view">
                <div class="view-header">
                  <div class="view-title">
                    [공지사항] 주택용 태양광DR사업 신청안내
                  </div>
                  <div class="view-date">2024.01.29</div>
                </div>
                <div class="view-body">
                  <v-img
                    src="@/assets/sample_notice.png"
                    contain
                    max-width="500"
                  ></v-img>
                  <p>
                    안녕하세요 성남시 에너지포털입니다 오늘 날씨가 참 좋습니다.
                    내일 날씨도 참 좋기를 바랍니다. 감사합니다.
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-right">
              <v-btn
                outlined
                class="btn-outline-solid btn-secondary"
                to="energynotice"
              >
                목록
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "NoticeView",
  components: {},
  data: () => ({
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "참여와소통",
        disabled: false,
        href: "energynotice",
      },
      {
        text: "복지 소식",
        disabled: true,
        href: "energynotice",
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
