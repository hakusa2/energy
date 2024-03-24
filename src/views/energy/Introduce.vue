<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </div>
    <div class="page-container pb-5">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" sm="12" md="5" class="order-2 order-sm-2 order-md-1">
            <div class="text-body-h3 my-5">
              성남시 에너지복지사업은
              <br />에너지비용을 <span class="primary--text">낮추고 </span>
              <br class="d-sm-none d-md-block" />
              시민복지를
              <span class="primary--text">올립니다.</span>
            </div>
            <p>
              성남시 에너지복지사업은 효율적인 에너지 관리를 통해 에너지비용을
              낮출 수 있도록 에너지컨설팅, 인프라 및 EMS 구축을 지원하고
              수요반응(DR) 서비스, 탄소배출권거래제 외부사업에 참여하여
              부가수익을 얻을 수 있게 해주는 지원사업입니다.
            </p>
            <p>
              에너지비용은 낮추고, 시민복지는 올리는
              <br class="d-sm-none d-md-block" />성남시 에너지복지사업에 많은
              관심과 참여 부탁드립니다.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="7" class="order-1 order-sm-1 order-md-2">
            <v-img src="@/assets/img_introduce1.png" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="page-bg">
      <div class="page-container">
        <v-container>
          <v-row class="align-center">
            <v-col cols="12" sm="12" md="12">
              <div class="text-body1 mb-5">
                누가 참여할 수 있고, 어떤 혜택이 있나요?
              </div>
              <p>
                성남시 내 건물, 소형 점포, 아파트단지, 단독주택 등이
                에너지복지사업에 참여할 수 있어요. 사업에 참여하면 각 대상에
                맞는 맞춤형 솔루션을 비롯하여 연계 가능한 지원사업에 대한 정보를
                제공해 드립니다.
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-row class="align-stretch">
                <v-col cols="12" sm="6" md="3">
                  <div class="introduce-group">
                    <div class="item-icon">
                      <v-img
                        src="@/assets/icon_introduce1.png"
                        max-width="48"
                        contain
                      ></v-img>
                    </div>
                    <div class="item-title">에너지컨설팅</div>
                    <div class="item-description">
                      참여유형(건물, 소형 점포, 공동주택, 단독주택) 및 현장
                      환경에 따라 에너지비용을 절감할 수 있는 맞춤형 컨설팅을
                      진행하고 인프라 구축계획을 수립합니다.
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <div class="introduce-group">
                    <div class="item-icon">
                      <v-img
                        src="@/assets/icon_introduce2.png"
                        max-width="48"
                        contain
                      ></v-img>
                    </div>
                    <div class="item-title">인프라 및 EMS 구축</div>
                    <div class="item-description">
                      참여유형에 따라 태양광 발전설비, 소형ESS(에너지저장장치),
                      전기차충전기 등 인프라와 에너지현황을 실시간 모니터링할 수
                      있는 에너지관리시스템(EMS)을 구축합니다.
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <div class="introduce-group">
                    <div class="item-icon">
                      <v-img
                        src="@/assets/icon_introduce3.png"
                        max-width="48"
                        contain
                      ></v-img>
                    </div>
                    <div class="item-title">탄소배출권거래제 참여</div>
                    <div class="item-description">
                      태양광 발전설비가 구축된 경우, 탄소배출권거래제 외부사업에
                      참여하여 발전실적에 대한 수익을 얻을 수 있습니다.
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <div class="introduce-group">
                    <div class="item-icon">
                      <v-img
                        src="@/assets/icon_introduce4.png"
                        max-width="48"
                        contain
                      ></v-img>
                    </div>
                    <div class="item-title">수요반응(DR) 서비스 참여</div>
                    <div class="item-description">
                      중소형DR, 국민DR 등 수요반응(DR) 서비스에 참여하여 부가
                      수익을 얻을 수 있습니다.
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row class="justify-center justify-sm-center justify-md-end">
            <v-col class="col-auto">
              <v-btn outlined large color="primary" to="welfaremodel">
                세부사업 보러가기 ->
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div class="page-container py-10">
      <v-container>
        <v-row class="align-center">
          <v-col cols="12" sm="12" md="7" class="order-2 order-sm-2 order-md-1">
            <div class="text-body1 my-5">성남시 에너지복지포털은</div>
            <p>
              성남시민에게 에너지분야의 다양한 복지정보를 제공하고
              에너지복지사업의 참여 신청을 받기 위해 성남시에서 운영하는
              포털사이트입니다. 더 많은 성남시민이 에너지복지를 경험할 수 있도록
              에너지복지사업에 대한 상세한 정보를 비롯하여 사업현황, 연계 지원사
              업 정보 등을 제공합니다.
            </p>
          </v-col>
          <v-col cols="12" sm="12" md="5" class="order-1 order-sm-1 order-md-2">
            <v-img src="@/assets/img_introduce2.png" contain></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Introduce",
  components: {},
  data: () => ({
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "에너지복지사업",
        disabled: true,
        href: "introduce",
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
