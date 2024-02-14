<template>
  <div class="page-container">
    <v-container>
      <Title :title="'에너지복지모델'">
        <template v-slot:TitleDescription>
          에너지복지모델별 기능을 확인하고 나에게 맞는 모델을 신청하세요.
        </template>
      </Title>
      <v-row class="align-center">
        <v-col cols="12" sm="12" md="8">
          <v-img src="@/assets/picture1.jpeg" max-height="200"></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-row class="align-center">
            <v-col cols="8" md="12">
              <h3 class="mb-1 mb-md-3">사회복지시설</h3>
              <p>
                PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
                에너지관리를 통해 에너지비용을 절감하는 복지모델
              </p>
            </v-col>
            <v-col cols="auto" md="12" class="ml-auto">
              <v-btn depressed block color="primary" to="/welfaremodel1"
                >신청하기</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col cols="12" sm="12" md="8">
          <v-img src="@/assets/picture2.jpeg" max-height="200"></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-row class="align-center">
            <v-col cols="8" md="12">
              <h3 class="mb-1 mb-md-3">소규모 점포</h3>
              <p>
                PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
                에너지관리를 통해 에너지비용을 절감하는 복지모델
              </p>
            </v-col>
            <v-col cols="auto" md="12" class="ml-auto">
              <v-btn depressed block color="secondary" to="/welfaremodel2"
                >마감</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col cols="12" sm="12" md="8">
          <v-img src="@/assets/picture3.jpeg" max-height="200"></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-row class="align-center">
            <v-col cols="8" md="12">
              <h3 class="mb-1 mb-md-3">공동 주택</h3>
              <p>
                PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
                에너지관리를 통해 에너지비용을 절감하는 복지모델
              </p>
            </v-col>
            <v-col cols="auto" md="12" class="ml-auto">
              <v-btn depressed block color="primary" to="/welfaremodel3"
                >신청하기</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col cols="12" sm="12" md="8">
          <v-img src="@/assets/picture4.jpeg" max-height="200"></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-row class="align-center">
            <v-col cols="8" md="12">
              <h3 class="mb-1 mb-md-3">단독 주택</h3>
              <p>
                PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
                에너지관리를 통해 에너지비용을 절감하는 복지모델
              </p>
            </v-col>
            <v-col cols="auto" md="12" class="ml-auto">
              <v-btn depressed block color="primary" to="/welfaremodel4"
                >신청하기</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
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
  data: () => ({}),
};
</script>

<style lang="scss"></style>
