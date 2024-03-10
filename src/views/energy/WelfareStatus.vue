<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'사업현황'">
          <template v-slot:TitleDescription>
            <div class="heading-description">
              성남시의 에너지복지모델 현황은 다음과 같습니다.
            </div>
          </template>
        </Title>
      </v-container>
    </div>
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="5">
              <v-list class="list-status">
                <v-list-item to="/welfarestatusdetail">
                  <v-list-item-content>
                    <v-list-item-title>사회복지시설</v-list-item-title>
                    <v-list-item-subtitle
                      ><span>0</span>개소</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="list-item-image">
                    <v-img
                      src="@/assets/img_welfare_model1.svg"
                      contain
                      max-width="140"
                    ></v-img>
                  </div>
                </v-list-item>
                <v-list-item to="/welfarestatusdetail">
                  <v-list-item-content>
                    <v-list-item-title>소규모 점포</v-list-item-title>
                    <v-list-item-subtitle
                      ><span>0</span>개소</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="list-item-image">
                    <v-img
                      src="@/assets/img_welfare_model2.svg"
                      contain
                      max-width="140"
                    ></v-img>
                  </div>
                </v-list-item>
                <v-list-item to="/welfarestatusdetail">
                  <v-list-item-content>
                    <v-list-item-title>아파트 단지</v-list-item-title>
                    <v-list-item-subtitle
                      ><span>0</span>개소</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="list-item-image">
                    <v-img
                      src="@/assets/img_welfare_model3.svg"
                      contain
                      max-width="140"
                    ></v-img>
                  </div>
                </v-list-item>
                <v-list-item to="/welfarestatusdetail">
                  <v-list-item-content>
                    <v-list-item-title>태양광 주택</v-list-item-title>
                    <v-list-item-subtitle
                      ><span>0</span>개소</v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <div class="list-item-image">
                    <v-img
                      src="@/assets/img_welfare_model4.svg"
                      contain
                      max-width="140"
                    ></v-img>
                  </div>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="12" md="7">
              <div class="map-group w-100">
                <!-- 지도들어가는 곳 -->
                <router-link
                  class="d-inline-flex w-100"
                  to="/welfarestatusdetail"
                >
                  <v-img
                    src="@/assets/sample_map.svg"
                    contain
                    max-height="500"
                  ></v-img>
                </router-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "WelfareStatus",
  components: {
    Title,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "운영현황",
        disabled: false,
        href: "welfarestatus",
      },
      {
        text: "사업현황",
        disabled: true,
        href: "welfarestatus",
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
