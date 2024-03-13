<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'세부사업내용'">
          <template v-slot:TitleDescription>
            <div class="heading-description">
              에너지복지사업별 상세내용을 확인하고 나에게 맞는 사업을
              신청해보세요.
            </div>
          </template>
        </Title>
      </v-container>
    </div>
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-row class="align-stretch">
            <v-col cols="12" sm="12" md="6">
              <div class="model-group">
                <div class="item-image">
                  <v-img src="@/assets/img_business1.png" height="280"></v-img>
                </div>
                <div class="item-title">건물형 인프라구축 사업</div>
                <div class="item-description">
                  태양광, 에너지저장시스템, 전기자동차 등 건물형 에너지복지
                  인프라와 에너지관리시스템을 구축하여 에너지 생산/소비 관리를
                  통해 전기요금을 저감하고 다양한 에너지 서비스 참여를 통해 추가
                  편익을 창출합니다.
                </div>
                <div class="item-keyword">
                  <v-chip> #공공시설 </v-chip>
                  <v-chip> #꼬마빌딩 </v-chip>
                  <v-chip> #상가건물 </v-chip>
                  <v-chip> #체육시설 </v-chip>
                  <v-chip> #주차장 </v-chip>
                </div>
                <div class="item-action">
                  <v-btn text color="primary" to="welfaremodel1">
                    자세히보기 ->
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <div class="model-group">
                <div class="item-image">
                  <v-img src="@/assets/img_business2.jpg" height="280"></v-img>
                </div>
                <div class="item-title">점포형 에너지비용절감 사업</div>
                <div class="item-description">
                  점포 내 전력 및 환경데이터를 수집하는 점포형 에너지복지
                  인프라와 에너지관리시스템을 구축하여 소비패턴 최적화,
                  수요반응(DR) 서비스, 컨설팅 서비스 등을 통해 에너지 비용을
                  저감 및 추가 편익을 창출합니다.
                </div>
                <div class="item-keyword">
                  <v-chip> #무인점포 </v-chip>
                  <v-chip> #편의점 </v-chip>
                  <v-chip> #슈퍼마켓 </v-chip>
                </div>
                <div class="item-action">
                  <v-btn text color="primary" to="welfaremodel2">
                    자세히보기 ->
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <div class="model-group">
                <div class="item-image">
                  <v-img src="@/assets/img_business3.jpg" height="280"></v-img>
                </div>
                <div class="item-title">공동주택형 에너지서비스 사업</div>
                <div class="item-description">
                  세대별 에너지데이터를 수집하는 에너지복지 인프라 및 앱 서비스
                  기반의 세대별 에너지관리시스템 구축을 통해 성남시가 후원하는
                  성남DR 참여를 통해 편익을 창출합니다.
                </div>
                <div class="item-keyword">
                  <v-chip> #아파트단지 </v-chip>
                  <v-chip> #나홀로아파트 </v-chip>
                  <v-chip> #빌라 </v-chip>
                  <v-chip> #오피스텔 </v-chip>
                </div>
                <div class="item-action">
                  <v-btn text color="primary" to="welfaremodel3">
                    자세히보기 ->
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <div class="model-group">
                <div class="item-image">
                  <v-img src="@/assets/img_business4.jpg" height="280"></v-img>
                </div>
                <div class="item-title">단독주택형 에너지서비스 사업</div>
                <div class="item-description">
                  태양광, 전기자동차 등 주택향 에너지복지 인프라와
                  에너지관리시스템을 구축하여 탄소배출권거래제 외부사업,
                  성남시가 후원하는 성남DR 등 다양한 에너지서비스 참여를 통해
                  추가편익을 창출합니다.
                </div>
                <div class="item-keyword">
                  <v-chip> #단독주택</v-chip>
                  <v-chip> #연립주택 </v-chip>
                  <v-chip> #한옥주택 </v-chip>
                </div>
                <div class="item-action">
                  <v-btn text color="primary" to="welfaremodel4">
                    자세히보기 ->
                  </v-btn>
                </div>
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
  name: "WelfareModel",
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
        text: "세부사업내용",
        disabled: true,
        href: "welfaremodel",
      },
    ],
  }),
  created() {
    document.body.scrollTop = 0;
  },
};
</script>

<style lang="scss"></style>
