<template>
  <div class="page-main">
    <div class="main-banner">
      <v-carousel v-model="model" hide-delimiters>
        <v-carousel-item src="@/assets/main_img1.png">
          <div class="carousel-sheet">
            <div class="carousel-text-group">
              <div class="title">
                에너지비용은 낮추고 <br />
                시민복지는 올립니다.
              </div>
              <div class="stext">
                성남시 에너지복지사업 신청의 전 과정을 확인해보세요
              </div>
              <div class="action">
                <v-btn depressed color="primary" to="/applysocialwelfare"
                  >사업소개 <v-icon>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="@/assets/main_img2.png">
          <div class="carousel-sheet">
            <div class="carousel-text-group">
              <div class="title">
                성남시와 성남시민이 <br />
                함께하는 탄소중립 실현
              </div>
              <div class="stext">
                성남시 에너지복지사업 신청의 전 과정을 확인해보세요
              </div>
              <div class="action">
                <v-btn depressed color="primary" to="/applysocialwelfare"
                  >사업소개 <v-icon>mdi-chevron-right</v-icon></v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item src="@/assets/main_img3.png">
          <div class="carousel-sheet">
            <div class="carousel-text-group">
              <div class="title">
                성남시 <br />
                에너지복지를 한눈에
              </div>
              <div class="stext">
                성남시 에너지복지사업 신청의 전 과정을 확인해보세요
              </div>
              <div class="action">
                <v-btn depressed color="primary" to="/applysocialwelfare"
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
            <v-col cols="12" sm="12" md="8">
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
                    <v-row>
                      <v-col cols="12" sm="12" md="6">
                        <div class="form-group">
                          <v-row>
                            <v-col
                              cols="12"
                              sm="12"
                              md="4"
                              class="col-label pb-0"
                            >
                              <v-label class="pt-1"> 평형 </v-label>
                            </v-col>
                            <v-col>
                              <v-select
                                dense
                                outlined
                                solo
                                placeholder="13평 이하"
                                hide-details="auto"
                              ></v-select>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                      <v-col cols="12" sm="12" md="6">
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
                                dense
                                outlined
                                solo
                                placeholder="1명"
                                hide-details="auto"
                              ></v-select>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="12" class="pt-sm-0 pt-md-3">
                        <div class="form-group">
                          <v-row>
                            <v-col
                              cols="12"
                              sm="12"
                              md="4"
                              class="col-label pb-0"
                            >
                              <v-label class="pt-1">월간 사용량</v-label>
                            </v-col>
                            <v-col class="pb-0">
                              <v-row no-gutters>
                                <v-col cols="3">
                                  <v-select
                                    dense
                                    outlined
                                    solo
                                    placeholder="1월"
                                    hide-details="auto"
                                  ></v-select>
                                </v-col>
                                <v-col>
                                  <v-text-field
                                    dense
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    class="ml-2"
                                    hide-details="auto"
                                    suffix="kWh"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="6">
                        <div class="form-group">
                          <v-row class="align-center">
                            <v-col
                              cols="12"
                              sm="12"
                              md="4"
                              class="col-label pb-0"
                            >
                              <v-label> 태양광 </v-label>
                            </v-col>
                            <v-col>
                              <v-radio-group
                                v-model="row"
                                row
                                class="pt-0 mt-1"
                                hide-details="auto"
                              >
                                <v-radio label="유" value="radio-1"></v-radio>
                                <v-radio label="무" value="radio-2"></v-radio>
                              </v-radio-group>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <div class="form-group">
                          <v-row>
                            <v-col
                              cols="12"
                              sm="12"
                              md="4"
                              class="col-label pb-0"
                            >
                              <v-label class="pt-1"> 용량 </v-label>
                            </v-col>
                            <v-col>
                              <v-text-field
                                dense
                                outlined
                                solo
                                placeholder="0,000 "
                                hide-details="auto"
                                suffix="kWh"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="text-right">
                        <v-btn
                          depressed
                          color="primary"
                          @click="active = !active"
                        >
                          계산하기
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>

                  <div class="main-myenergy-result" v-else>
                    <div class="result-title">
                      <v-img
                        src="@/assets/icon_circle_lightning.png"
                        max-width="40"
                        contain
                        class="mr-3"
                      ></v-img>
                      계산결과
                    </div>
                    <div class="result-stitle primary--text">
                      <span classs="mr-2">우리집</span> 이번달
                      사용량(발전량)/요금
                    </div>
                    <v-row>
                      <v-col cols="6">
                        <div class="result-value">
                          0,000<small>(000)</small>
                          <span class="unit">kWh</span>
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <div class="result-value">
                          0,000 <span class="unit">원</span>
                        </div>
                      </v-col>
                    </v-row>
                    <div class="result-stitle mt-3">
                      <span classs="mr-2">동일 평형</span>
                      이번달 평균 사용량/요금
                    </div>
                    <v-row>
                      <v-col cols="6">
                        <div class="result-value">
                          0,000 <span class="unit">kWh</span>
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <div class="result-value">
                          0,000 <span class="unit">원</span>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row class="">
                      <v-col class="d-flex justify-space-between mt-auto">
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
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="4">
              <v-card class="card-support card-transparent" flat>
                <v-card-title class="pt-0 px-0">복지배너</v-card-title>
                <div class="carousel-control">
                  <div class="carousel-count"><span>1</span>/5</div>
                  <v-btn icon color="black">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn icon color="black">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </div>
                <v-carousel hide-delimiters cycle height="312">
                  <v-carousel-item
                    v-for="(item, i) in banners"
                    :key="i"
                    :src="item.src"
                    :to="item.url"
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

export default {
  name: "Main",
  components: {},
  data: () => ({
    model: 0,
    banners: [
      {
        src: require("@/assets/sample_banner.png"),
        url: "https://www.naver.com/", //새창으로 띄우기
      },
      {
        src: require("@/assets/sample_support_project.png"),
        url: "https://www.naver.com/", //새창으로 띄우기
      },
    ],
    active: false,
    row: "radio-1",
    selectitems1: ["naver.com", "gmail.com"],
    selectitems2: ["070", "010"],
    dialog: false,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "이름을 입력해주세요",
      (v) => (v && v.length <= 10) || "숫자 및 특수문자는 입력할 수 없어요.",
    ],
    mobile: "",
    mobileRules: [
      (v) => !!v || "휴대폰 번호를 입력해주세요",
      (v) => /.+@.+\..+/.test(v) || "잘못된 휴대폰 번호 양식이에요.",
    ],
    mobile1: "",
    mobileRules1: [
      (v) => !!v || "인증번호를 입력해주세요",
      (v) => /.+@.+\..+/.test(v) || "인증번호를 다시 확인해주세요.",
    ],
    address: "",
    addressRules: [
      (v) => !!v || "주소를 입력해주세요",
      (v) => /.+@.+\..+/.test(v) || "주소를 다시 확인해주세요.",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
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
  },
};
</script>

<style lang="scss"></style>
