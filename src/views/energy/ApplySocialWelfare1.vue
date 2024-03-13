<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'사업 신청 (건물형 인프라구축 사업)'">
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
              <v-card flat class="card-form card-transparent">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <div class="card-title">신청 시 유의사항</div>
                  <div class="form-group">
                    <Terms />
                    <v-checkbox
                      v-model="checkbox1"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="(필수) 신청 시 유의사항을 확인하였습니다."
                      class="label-padding mt-2"
                    ></v-checkbox>
                  </div>
                  <div class="card-title mt-3">개인정보 수집 및 이용 동의</div>
                  <div class="form-group">
                    <Privacy />
                    <v-checkbox
                      v-model="checkbox2"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="(필수) 개인정보 수집 및 이용에 동의합니다."
                      class="label-padding mt-2"
                    ></v-checkbox>
                  </div>

                  <div class="card-title mt-3 mb-5">
                    신청인 정보 입력
                    <small class="ml-3">
                      <span class="icon-required"></span>는 필수 입력
                      정보입니다.</small
                    >
                  </div>
                  <!-- <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <div class="form-group">
                        <v-row class="align-center">
                          <v-col
                            cols="12"
                            sm="12"
                            md="2"
                            class="col-label pb-0"
                          >
                            <v-label>
                              신청유형 <span class="icon-required"></span>
                            </v-label>
                          </v-col>
                          <v-col cols="12" sm="12" md="10">
                            <v-radio-group
                              v-model="row"
                              row
                              class="pt-0 mt-1"
                              readonly
                              hide-details="auto"
                            >
                              <v-radio label="세대" value="radio-1"></v-radio>
                              <v-radio label="단지" value="radio-2"></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row> -->
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <div class="form-group">
                        <v-row>
                          <v-col
                            cols="12"
                            sm="12"
                            md="2"
                            class="col-label pb-0"
                          >
                            <v-label class="pt-1">
                              이름 <span class="icon-required"></span>
                            </v-label>
                          </v-col>
                          <v-col>
                            <v-text-field
                              v-model="name"
                              :rules="nameRules"
                              dense
                              outlined
                              solo
                              placeholder="홍길동"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" class="pt-sm-0 pt-md-3">
                      <div class="form-group">
                        <v-row>
                          <v-col
                            cols="12"
                            sm="12"
                            md="2"
                            class="col-label pb-0"
                          >
                            <v-label class="pt-1"
                              >휴대폰 <span class="icon-required"></span
                            ></v-label>
                          </v-col>
                          <v-col class="pb-0">
                            <div class="d-flex">
                              <v-text-field
                                v-model="mobile"
                                :rules="mobileRules"
                                dense
                                outlined
                                solo
                                placeholder="'-' 없이 숫자만 입력해주세요"
                                required
                              ></v-text-field>
                              <v-btn
                                class="ml-2"
                                outlined
                                color="black"
                                width="80"
                              >
                                인증요청
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                        <!-- <v-row>
                          <v-col
                            cols="12"
                            sm="12"
                            md="2"
                            class="col-label py-0"
                          >
                          </v-col>
                          <v-col class="pt-0">
                            <div class="d-flex">
                              <v-text-field
                                v-model="mobile1"
                                :rules="mobileRules1"
                                dense
                                outlined
                                solo
                                placeholder="인증 번호 입력"
                                suffix="3:00"
                                class="input-certification"
                                required
                              ></v-text-field>
                              <v-btn
                                class="ml-2"
                                outlined
                                color="black"
                                width="80"
                              >
                                확인
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row> -->
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6" class="pt-sm-0 pt-md-3">
                      <div class="form-group">
                        <v-row>
                          <v-col
                            cols="12"
                            sm="12"
                            md="2"
                            class="col-label pb-0"
                          >
                            <v-label class="pt-1">이메일</v-label>
                          </v-col>
                          <v-col class="pb-0">
                            <div class="d-flex">
                              <v-text-field
                                dense
                                outlined
                                solo
                                placeholder="email"
                              ></v-text-field>
                              <div class="pt-2 px-2">@</div>
                              <v-select
                                dense
                                outlined
                                solo
                                placeholder="선택해주세요"
                                :items="selectitems1"
                              ></v-select>
                            </div>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" class="pt-sm-0 pt-md-3">
                      <div class="form-group">
                        <v-row>
                          <v-col
                            cols="12"
                            sm="12"
                            md="auto"
                            class="col-label pb-0"
                          >
                            <v-label class="pt-1">전화번호</v-label>
                          </v-col>
                          <v-col class="pb-0">
                            <div class="d-flex">
                              <v-select
                                dense
                                outlined
                                solo
                                placeholder="선택해주세요"
                                :items="selectitems2"
                              ></v-select>
                              <div class="pt-2 px-2">-</div>
                              <v-text-field
                                dense
                                outlined
                                solo
                                placeholder="0000"
                              ></v-text-field>
                              <div class="pt-2 px-2">-</div>
                              <v-text-field
                                dense
                                outlined
                                solo
                                placeholder="0000"
                              ></v-text-field>
                            </div>
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
                            md="2"
                            class="col-label pb-0"
                          >
                            <v-label class="pt-1"
                              >신청주소 <span class="icon-required"></span
                            ></v-label>
                          </v-col>
                          <v-col class="pb-0">
                            <v-row no-gutters>
                              <v-col cols="auto">
                                <DialogZipcode />
                              </v-col>
                              <v-col cols="3">
                                <v-text-field
                                  v-model="address"
                                  :rules="addressRules"
                                  dense
                                  outlined
                                  solo
                                  placeholder="16866"
                                  required
                                  class="ml-2"
                                ></v-text-field>
                              </v-col>
                              <v-col>
                                <v-text-field
                                  v-model="address"
                                  :rules="addressRules"
                                  dense
                                  outlined
                                  solo
                                  placeholder="산성역포레스티아아파트"
                                  required
                                  class="ml-2"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-row>
                        <!-- 신청 단지 일때 감춰줍니다. -->
                        <v-row>
                          <v-col
                            cols="12"
                            sm="12"
                            md="2"
                            class="col-label pb-0"
                          >
                          </v-col>
                          <v-col class="py-0">
                            <v-text-field
                              v-model="address"
                              :rules="addressRules"
                              dense
                              outlined
                              solo
                              placeholder="000동 0000호"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <!-- /.신청 단지 일때 감춰줍니다. -->
                      </div>
                    </v-col>
                  </v-row>
                  <!-- <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <div class="form-group">
                        <v-row class="align-center">
                          <v-col
                            cols="12"
                            sm="12"
                            md="2"
                            class="col-label pb-0"
                          >
                            <v-label> 원격검침 </v-label>
                          </v-col>
                          <v-col>
                            <v-radio-group
                              v-model="row"
                              row
                              class="pt-0 mt-1"
                              readonly
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
                    <v-col cols="12" sm="12" md="6">
                      <div class="form-group">
                        <v-row>
                          <v-col
                            cols="12"
                            sm="12"
                            md="2"
                            class="col-label pb-0"
                          >
                            <v-label class="pt-1"> 제조사 </v-label>
                          </v-col>
                          <v-col>
                            <v-select
                              dense
                              outlined
                              solo
                              placeholder="선택해주세요"
                            ></v-select>
                          </v-col>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row> -->
                </v-form>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <v-btn outlined class="btn-outline-solid btn-secondary" to="welfaremodel1">
                뒤로
              </v-btn>
              <v-btn
                depressed
                color="primary"
                to="applysocialwelfare5"
                class="ml-2"
              >
                신청하기
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
import Title from "@/components/Title.vue";
import Terms from "@/components/Terms.vue";
import Privacy from "@/components/Privacy.vue";
import DialogZipcode from "@/components/DialogZipcode.vue";

export default {
  name: "ApplySocialWelfare1",
  components: {
    Title,
    Terms,
    Privacy,
    DialogZipcode,
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
        disabled: false,
        href: "welfaremodel",
      },
      {
        text: "공동주택형 에너지서비스 사업",
        disabled: false,
        href: "welfaremodel1",
      },
      {
        text: "사업 신청",
        disabled: true,
        href: "applysocialwelfare1",
      },
    ],
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
    checkbox1: false,
    checkbox2: false,
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
  },
};
</script>

<style lang="scss"></style>
