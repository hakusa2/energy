<template>
  <div class="page-main">
    <div class="main-banner">
      <v-carousel v-model="model" hide-delimiters show-arrows-on-hover>
        <v-carousel-item src="@/assets/main_img1.png">
          <div class="carousel-sheet">
            <div class="container carousel-text-group">
              <div class="title">
                에너지비용은 낮추고 <br />
                시민복지는 올립니다.
              </div>
              <div class="stext">
                성남시 에너지복지사업 신청의 전 과정을 확인해보세요
              </div>
              <div class="action">
                <v-btn depressed large color="primary" to="/welfareModel"
                  >사업소개 <v-icon>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="@/assets/main_img2.png">
          <div class="carousel-sheet">
            <div class="container carousel-text-group">
              <div class="title">
                성남시와 성남시민이 <br />
                함께하는 탄소중립 실현
              </div>
              <div class="stext">
                성남시 에너지복지사업 신청의 전 과정을 확인해보세요
              </div>
              <div class="action">
                <v-btn depressed large color="primary" to="/welfareModel"
                  >사업소개 <v-icon>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="@/assets/main_img3.png">
          <div class="carousel-sheet">
            <div class="container carousel-text-group">
              <div class="title">
                성남시 <br />
                에너지복지를 한눈에
              </div>
              <div class="stext">
                성남시 에너지복지사업 신청의 전 과정을 확인해보세요
              </div>
              <div class="action">
                <v-btn depressed large color="primary" to="/welfareModel"
                  >사업소개 <v-icon>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="page-bg">
      <div class="page-container">
        <v-container>
          <v-row class="align-stretch">
            <v-col class="col-myhome-energy">
              <v-card class="card-myhome-energy card-transparent" flat>
                <v-card-title class="pt-0 px-0"
                  >우리집 에너지 진단</v-card-title
                >
                <div class="form-bg form-main">
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    v-if="!active"
                  >
                    <v-row class="mb-5">
                      <v-col cols="12" sm="12" md="12">
                        <div class="form-group">
                          <v-label class="pt-1"> 평형 </v-label>
                          <v-select
                            v-model="type"
                            :items="types"
                            outlined
                            solo
                            hide-details="auto"
                          ></v-select>
                        </div>
                      </v-col>
                      <!-- <v-col cols="12" sm="12" md="6">
                        <div class="form-group">
                          <v-row>
                            <v-col
                              cols="12"
                              sm="12"
                              md="4"
                              class="col-label pb-0"
                            >
                              <v-label class="pt-1"> 세대원 수 </v-label>
                            </v-col>
                            <v-col>
                              <v-select
                                outlined
                                solo
                                v-model="people"
                                :items="peoples"
                                hide-details="auto"
                              ></v-select>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col> -->
                    </v-row>
                    <v-row class="mb-5">
                      <v-col cols="12" sm="12" md="12" class="pt-sm-0 pt-md-3">
                        <div class="form-group">
                          <v-label class="pt-1">월간 사용량</v-label>
                          <v-row no-gutters>
                            <v-col cols="3">
                              <v-select
                                outlined
                                solo
                                v-model="month"
                                :items="months"
                                hide-details="auto"
                              ></v-select>
                            </v-col>
                            <v-col>
                              <v-text-field
                                v-model="monthuse"
                                placeholder="0,000 "
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                @input="formatMonthUse"
                                outlined
                                solo
                                class="ml-2"
                                hide-details="auto"
                                suffix="kW"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row class="mb-5">
                      <v-col cols="12" sm="12" md="6">
                        <div class="form-group">
                          <v-label> 태양광 </v-label>
                          <v-radio-group
                            v-model="sunLight"
                            @change="sunLightChanged"
                            row
                            class="pt-0 mt-1"
                            hide-details="auto"
                          >
                            <v-radio
                              label="유"
                              color="black"
                              value="Y"
                            ></v-radio>
                            <v-radio
                              label="무"
                              color="black"
                              value="N"
                            ></v-radio>
                          </v-radio-group>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row class="mb-5">
                      <v-col cols="12" sm="12" md="12">
                        <div class="form-group" :class="{'form-disabled': sunLightDisabled }">
                          <!-- 태양광 '무' 선택 시 비활성화 처리 <div class="form-group form-disabled"> -->
                          <v-label class="pt-1"> 용량 </v-label>
                          <v-text-field
                            :disabled="sunLightDisabled"
                            v-model="sunuse"
                            outlined
                            solo
                            placeholder="0,000 "
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                            @input="formatSunUse"
                            hide-details="auto"
                            suffix="kW"
                          ></v-text-field>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row class="mt-10">
                      <v-col class="text-right">
                        <v-btn depressed color="primary" @click="cal">
                          계산하기
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>

                  <div class="main-myenergy-result align-start" v-else>
                    <div class="result-title w-100">
                      <v-img
                        src="@/assets/icon_circle_lightning.png"
                        max-width="48"
                        contain
                        class="mr-3"
                      ></v-img>
                      계산 결과
                    </div>
                    <div class="result-stitle primary--text w-100">
                      <span classs="mr-2">우리집</span> 이번달
                      사용량(발전량)/요금
                    </div>
                    <v-row class="w-100">
                      <v-col>
                        <div class="result-value">
                          {{ monthValue }}<small>({{ sunValue }})</small>
                          <span class="unit">kWh</span>
                        </div>
                      </v-col>
                      <v-col>
                        <div class="result-value">
                          {{ calPriceValue }} <span class="unit">원</span>
                        </div>
                      </v-col>
                    </v-row>
                    <div class="result-stitle">
                      <span classs="mr-2">동일 평형</span>
                      이번달 평균 사용량/요금
                    </div>
                    <v-row class="w-100">
                      <v-col>
                        <div class="result-value">
                          {{ sampleUseVaue }} <span class="unit">kWh</span>
                        </div>
                      </v-col>
                      <v-col>
                        <div class="result-value">
                          {{ samplePriceValue }} <span class="unit">원</span>
                        </div>
                      </v-col>
                    </v-row>
                    <div class="d-flex justify-space-between mt-auto w-100">
                      <v-btn text color="secondary" to="myenergy">
                        가전 사용량 계산하기 ->
                      </v-btn>
                      <v-btn
                        depressed
                        color="primary"
                        @click="active = !active"
                      >
                        다시 계산
                      </v-btn>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="12" class="col-support">
              <v-card class="card-transparent card-banner card-support" flat>
                <v-card-title class="pt-0 px-0">복지배너</v-card-title>
                <!-- <div class="carousel-control">
                  <div class="carousel-count"><span>1</span>/5</div>
                  <v-btn icon color="black">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn icon color="black">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div> -->
                <v-carousel v-model="banner" hide-delimiters cycle height="616">
                  <v-carousel-item
                    v-for="(item, i) in banners"
                    :key="i"
                    :src="item.imageUrl"
                    @click="goUrl(item.linkUrl)"
                  >
                  </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-col>
          </v-row>
          <dashboard-key-metrics />
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Main",
  components: {},
  data: () => ({
    model: 0,
    banner: 0,
    banners: [],
    active: false,
    row: "radio-1",
    selectitems1: ["naver.com", "gmail.com"],
    selectitems2: ["070", "010"],
    dialog: false,
    valid: true,

    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    types: ["13평이하", "18평", "25평", "34평", "34평이상"],
    type: "",
    peoples: ["1인", "2인", "3인", "4인", "5인", "6인이상"],
    people: "",
    months: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    month: "",
    sunLight: "Y",
    monthValue: 0,
    sunValue: 0,
    monthuse: "",
    sunuse: "",
    samplePrice: 0,
    sampleUse: 0,
    calPrice: 0,
    calUse: 0,
    samplePriceValue: "",
    sampleUseVaue: "",
    calPriceValue: "",
    calUseValue: "",
    sunLightDisabled: false,
  }),
  computed: {},
  created() {
    this.init();
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    openEditor(slider) {
      slider.showEdit = true;
    },
    closeEditor(slider) {
      slider.showEdit = false;
    },
    init() {
      this.type = "13평이하";
      this.people = "1인";
      this.month = "1월";
      try {
        axios.get("/api/banner/getList").then((response) => {
          this.banners = response.data;
        });
      } catch (err) {
        console.log(err);
      }
    },

    goUrl(url) {
      window.open(url, "_blank");
    },

    cal() {
      //alert(this.monthValue);
      this.active = !this.active;

      //구간별 전기요금
      let sectionPrice = 0;
      //월간 기준
      let monthStd = 1;

      if (this.month === "7월" || this.month === "8월") monthStd = 0.7;

      if (this.monthValue < 100) sectionPrice = 60.7;
      else if (this.monthValue < 200) sectionPrice = 125.9;
      else if (this.monthValue < 300) sectionPrice = 187.9;
      else if (this.monthValue < 400) sectionPrice = 280.6;
      else if (this.monthValue < 500) sectionPrice = 417.7;
      // 500보다 크면
      else sectionPrice = 709.5;

      //요금 = ( 월간 사용량 – (태양광용량) ) * 구간별전기요금 * 월간기준
      this.calPrice = Math.round(
        (this.monthValue - this.sunValue) * sectionPrice * monthStd
      );
      this.calUse = this.monthValue - this.sunValue;

      if (this.type === "13평이하") {
        this.sampleUse = "216";
        this.samplePrice = "29808";
      } else if (this.type === "18평") {
        this.sampleUse = "275";
        this.samplePrice = "37950";
      } else if (this.type === "25평") {
        this.sampleUse = "348";
        this.samplePrice = "48024";
      } else if (this.type === "34평") {
        this.sampleUse = "452";
        this.samplePrice = "62376";
      } else if (this.type === "34평이상") {
        this.sampleUse = "560";
        this.samplePrice = "94080";
      }

      this.samplePriceValue = (
        parseFloat(this.samplePrice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.sampleUseVaue = (
        parseFloat(this.sampleUse.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.calPriceValue = (
        parseFloat(this.calPrice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.calUseValue = this.monthValue + "(" + this.sunValue + ")";
    },

    formatMonthUse() {
      const parsedAmount = parseFloat(this.monthuse.replace(/,/g, "")) || 0;
      this.monthValue = parsedAmount;
      this.monthuse = parsedAmount.toLocaleString();
    },

    formatSunUse() {
      const parsedAmount = parseFloat(this.sunuse.replace(/,/g, "")) || 0;
      this.sunValue = parsedAmount;
      this.sunuse = parsedAmount.toLocaleString();
    },

    sunLightChanged() {
      if (this.sunLight === "Y") this.sunLightDisabled = false;
      else {
        this.sunLightDisabled = true;
        this.sunValue = 0;
        this.sunuse = "";
      }
    },
  },
};
</script>

<style lang="scss"></style>
