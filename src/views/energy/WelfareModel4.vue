<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'단독주택형 에너지서비스 사업'">
          <template v-slot:TitleDescription>
            <div class="heading-description">
              건물에너지비용 저감을 위한 인프라 지원사업. 태양광, ESS,
              전기차충전기
            </div>
          </template>
        </Title>
      </v-container>
    </div>
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col>
              <div class="model-detail-group">
                <div class="item-image">
                  <v-img src="@/assets/img_business4.jpg" height="380"></v-img>
                </div>
                <div class="item-group">
                  <div class="item-title">사업내용</div>
                  <div class="item-description">
                    <ul class="ul-list list-dot">
                      <li class="mb-4">
                        <span class="font-weight-bold">사업개요</span>
                        <ul class="ul-list list-dash py-2">
                          <li>
                            에너지비용 및 온실가스 절감을 동시에 실현하기 위한
                            건물형 에너지 복지 인프라 구축
                          </li>
                          <li>
                            성남시와 함께하는 온실가스 감축을 통한 성남시
                            탄소중립 참여
                          </li>
                        </ul>
                      </li>
                      <li class="mb-4">
                        <span class="font-weight-bold">패키지 구성</span>
                        <ul class="ul-list list-dash py-2">
                          <li>
                            국가 또는 성남시가 지원하는 분산전원 또는
                            에너지효율화 설비
                          </li>
                          <li>
                            태양광 발전설비, 양방향 전기차 충전기, 소형
                            ESS(Energy Storage System) 등
                          </li>
                        </ul>
                      </li>
                      <li class="mb-4">
                        <span class="font-weight-bold">운영서비스</span>
                        <ul class="ul-list list-dash py-2">
                          <li>
                            전력 피크관리 및 스마트 충장전을 통한 에너지
                            비용절감
                          </li>
                          <li>DR, 온실가스 감축 외부사업 참여로 편익</li>
                        </ul>
                      </li>
                      <li class="mb-4">
                        <span class="font-weight-bold">사업비지원비율</span>
                        <ul class="ul-list list-dash py-2">
                          <li>
                            국비(50~60%) + 지방비(20~30%)를 통한 자부담금 최소화
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="item-title">지원대상</div>
                  <div class="item-description">
                    <ul class="ul-list list-dot">
                      <li class="mb-4">
                        <span class="font-weight-bold"
                          >아래의 조건을 일부 또는모두 충족하는 성남시 관내
                          건물을 대상으로 합니다.</span
                        >
                        <ul class="ul-list list-dash py-2">
                          <li>
                            (대상) 공공시설, 상가 및 꼬마빌딩, 체육시설 및
                            주차장 등 성남시 관내에 위치한 건물
                          </li>
                          <li>
                            (태양광 발전설비) 주차장, 옥상 및 지붕 면적이 00m²
                            이상
                          </li>
                          <li>
                            (소규모 ESS) 전기실 또는 옥상의 여유부지 00m² 이상
                          </li>
                          <li>
                            (양방향 EV 충전기) EV 충전용 주차면수 1면 이상
                          </li>
                        </ul>
                      </li>
                      <li class="mb-4">
                        <span class="font-weight-bold"
                          >아래의 경우 지원이 제한될수 있습니다.</span
                        >
                        <ul class="ul-list list-dash py-2">
                          <li>토지 소유주와 건물 소유주가 다를 경우</li>
                          <li>불법증축물</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="item-title">참여절차</div>
                  <div class="item-description">
                    <div class="apply-process-group row align-stretch">
                      <div class="col col-sm-12 col-md">
                        <div class="process-item">
                          <div class="process-title">서비스 신청</div>
                          <div class="process-description">
                            신청서를 작성하여 사업을 신청합니다.
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-12 col-sm-12 col-md-auto d-flex align-self-center justify-center"
                      >
                        <div class="process-icon">
                          <v-icon class="mdi-custom"
                            >mdi-chevron-double-right</v-icon
                          >
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 col-md">
                        <div class="process-item">
                          <div class="process-title">현장 실사</div>
                          <div class="process-description">
                            현장 실사를 통해 선정 여부를 확인합니다.
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-12 col-sm-12 col-md-auto d-flex align-self-center justify-center"
                      >
                        <div class="process-icon">
                          <v-icon class="mdi-custom"
                            >mdi-chevron-double-right</v-icon
                          >
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 col-md">
                        <div class="process-item">
                          <div class="process-title">최종 선정</div>
                          <div class="process-description">
                            현장심사 결과에 따라 최종 선정합니다.
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-12 col-sm-12 col-md-auto d-flex align-self-center justify-center"
                      >
                        <div class="process-icon">
                          <v-icon class="mdi-custom"
                            >mdi-chevron-double-right</v-icon
                          >
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 col-md">
                        <div class="process-item">
                          <div class="process-title">인프라 구축</div>
                          <div class="process-description">
                            복지사업 인프라 구축을 합니다.
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-12 col-sm-12 col-md-auto d-flex align-self-center justify-center"
                      >
                        <div class="process-icon">
                          <v-icon class="mdi-custom"
                            >mdi-chevron-double-right</v-icon
                          >
                        </div>
                      </div>
                      <div class="col-12 col-sm-12 col-md">
                        <div class="process-item">
                          <div class="process-title">사업 운영</div>
                          <div class="process-description">
                            지속적으로 관리 및 운영을 진행합니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <v-btn outlined color="secondary" to="welfaremodel"> 목록 </v-btn>
              <v-btn
                depressed
                color="primary"
                class="ml-4"
                disabled
                v-if="approvaldata.detached === 'N'"
              >
                사업 신청 기간이 아닙니다
              </v-btn>
              <v-btn
                depressed
                color="primary"
                class="ml-4"
                to="applysocialwelfare4"
                v-if="approvaldata.detached === 'Y'"
              >
                사업 신청
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
              <h3 class="text-body-h3">구축사례</h3>
            </v-col>
          </v-row>
          <v-row class="flex-nowrap overflow-hidden">
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="(item, index) in detacheddata"
              :key="index"
            >
              <v-dialog v-model="item.visible" scrollable width="1520">
                <template v-slot:activator="{ on, attrs }">
                  <div class="model-case-group" v-bind="attrs" v-on="on">
                    <div class="item-image">
                      <v-img
                        src="@/assets/img_business5.png"
                        height="300"
                      ></v-img>
                    </div>
                    <div class="item-chip">
                      <v-chip small outlined v-if="item.tagYn1 === 'Y'">
                        PV
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn2 === 'Y'">
                        ESS
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn3 === 'Y'">
                        EV
                      </v-chip>
                    </div>
                    <div class="item-title">
                      {{ item.groupName }} <v-icon>mdi-chevron-right</v-icon>
                    </div>
                    <div class="item-address">
                      {{ item.addr1 }}&nbsp;{{ item.addr2 }}
                    </div>
                  </div>
                </template>
                <v-card class="card-dialog">
                  <div class="dialog-header">
                    <v-btn
                      icon
                      color="black"
                      class="dialog-close"
                      @click="detachedClose(index)"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-card-title class="dialog-title">
                      {{ item.groupName }}
                    </v-card-title>
                  </div>
                  <div class="dialog-body">
                    <div class="model-detail-group">
                      <div class="item-image">
                        <v-img
                          src="@/assets/img_business5.png"
                          height="500"
                        ></v-img>
                      </div>
                      <div class="item-group">
                        <div class="item-title mb-5">구축 상세</div>
                        <div class="item-description">
                          <ul class="ul-list list-dot row">
                            <li class="col col-12 col-sm-12 col-md-6">
                              <span class="font-weight-bold">사업개요</span>
                              <ul class="ul-list list-dash py-2">
                                <li
                                  v-for="(c, index) in item.businessSummaryList"
                                  :key="`item-${index}`"
                                >
                                  {{ c }}
                                </li>
                              </ul>
                            </li>
                            <li class="col col-12 col-sm-12 col-md-6">
                              <span class="font-weight-bold">패키지 구성</span>
                              <ul class="ul-list list-dash py-2">
                                <li
                                  v-for="(c, index) in item.packageComposeList"
                                  :key="`item-${index}`"
                                >
                                  {{ c }}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-dialog>
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
import axios from "axios";

export default {
  name: "WelfareModel1",
  components: {
    Title,
  },
  data: () => ({
    approvaldata: {
      building: "",
      shop: "",
      apartment: "",
      detached: "",
    },
    detacheddata: [],
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "세부사업내용",
        disabled: false,
        href: "welfaremodel",
      },
      {
        text: "단독주택형 에너지서비스 사업",
        disabled: true,
        href: "welfaremodel4",
      },
    ],
  }),
  created() {
    this.init();
    document.body.scrollTop = 0;
  },

  methods: {
    init() {
      try {
        axios.get("/api/etc/getApproval").then((response) => {
          this.approvaldata = response.data;
        });
        axios.get("/api/construction/getListTop3?type=4").then((response) => {
          this.detacheddata = response.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
    detachedClose(index) {
      this.detacheddata[index].visible = false;
    },
  },
};
</script>

<style lang="scss"></style>
