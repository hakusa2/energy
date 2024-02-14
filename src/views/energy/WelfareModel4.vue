<template>
  <div class="page-container">
    <v-container>
      <Title :title="'단독 주택'">
        <template v-slot:BtnGroup>
          <v-btn depressed color="primary" width="200" to="/applysocialwelfare">
            신청하기
          </v-btn>
        </template>
        <template v-slot:TitleDescription>
          PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
          에너지관리를 통해 에너지비용을 절감하는 복지모델
        </template>
      </Title>

      <v-img src="@/assets/picture4.jpeg" max-height="300"></v-img>

      <v-card class="card-tab mt-5 mb-10" flat>
        <v-tabs v-model="tab" background-color="#F6F7FB" grow>
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab> 지원대상 </v-tab>
          <v-tab> 지원내용 </v-tab>
          <v-tab> 신청방법</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat class="card-tab-detail">
              <v-card-title class="title-line">사업내용</v-card-title>
              <v-card-text>
                <p>
                  아래 가입요건을 모두 충족하는 대한민국 거주 청년을 대상으로
                  합니다.
                </p>
                <ol class="ol-list">
                  <li>
                    (나이요건) 신규 가입일 기준 만 19세 ~ 34세 이하인 청년<br />
                    * 병역이행기간 최대 6년 추가 인정
                  </li>
                  <li class="mt-2">
                    (개인소득요건) 직전과세기간의 총급여액이 7,500만원 이하이며,
                    종합소득과세표준에 합산되는 종합소득금액이 6,300만원 이하인
                    경우<br />
                    * 단, 비과세소득만 있는 경우는 제외
                  </li>
                  <li class="mt-2">
                    (금융소득요건) 가입일이 속한 과세기간의 직전 3개 과세기간 중
                    1회 이상 금융소득<br />
                    * 직전과세기간의 소득이 확정되기 이전에는 전전년도의 소득을
                    기준으로 산정합니다.<br />
                    * 국세청의 소득확인증명서를 통해 소득확인이 이루어집니다.
                  </li>
                </ol>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="card-tab-detail">
              <v-card-text>지원내용</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="card-tab-detail">
              <v-card-text>신청방법</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed color="primary" to="/applysocialwelfare" width="200"
            >신청하기</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "WelfareModel4",
  components: {
    Title,
  },
  data: () => ({
    tab: null,
  }),
};
</script>

<style lang="scss"></style>
