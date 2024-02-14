<template>
  <div class="page-container">
    <v-container>
      <Title :title="'에너지복지모델 신청 (사회복지시설)'">
        <template v-slot:TitleDescription>
          에너지복지모델 신청 절차에 따라 다음의 내용을 입력해주세요
        </template>
      </Title>
      <v-stepper v-model="e1" flat>
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            신청 이용 동의
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="e1 > 2" step="2">
            신청인 정보 입력
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3"> 신청완료 </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-divider class="divider-dashed"></v-divider>
            <v-card class="card-form">
              <v-card-title class="mb-3">신청 이용 동의</v-card-title>
              <v-form ref="form" v-model="valid" lazy-validation class="px-5">
                <div class="form-group">
                  <v-label
                    >신청 시 유의사항 <span class="icon-required"></span
                  ></v-label>
                  <div class="terms-group" style="height: 160px">
                    <p>
                      아래 가입요건을 모두 충족하는 대한민국 거주 청년을
                      대상으로 합니다.
                    </p>
                    <ul class="ul-list list-dash">
                      <li>
                        (나이요건) 신규 가입일 기준 만 19세 ~ 34세 이하인 청년
                        *병역이행기간 최대 6년 추가 인정
                      </li>
                      <li>
                        (개인소득요건) 직전과세기간의 총급여액이 7,500만원
                        이하이며, 종합소득과세표준에 합산되는 종합소득금액이
                        6,300만원 이하인 경우 단, 비과세소득만 있는 경우는 제외
                      </li>
                      <li>
                        (금융소득요건) 가입일이 속한 과세기간의 직전 3개
                        과세기간 중 1회 이상 금융소득종합과세대상*에 해당하지
                      </li>
                      <li>(가구소득요건) 가구소득 중위 180% 이하인 자</li>
                    </ul>
                  </div>
                  <v-checkbox
                    v-model="checkbox"
                    label="(필수) 신청 시 유의사항을 확인하였습니다."
                    class="label-padding"
                  ></v-checkbox>
                </div>
                <div class="form-group mt-5">
                  <v-label
                    >개인정보 수집 및 이용 동의<span
                      class="icon-required"
                    ></span
                  ></v-label>
                  <div class="terms-group" style="height: 160px">
                    <p>
                      아래 가입요건을 모두 충족하는 대한민국 거주 청년을
                      대상으로 합니다.
                    </p>
                    <ul class="ul-list list-dash">
                      <li>
                        (나이요건) 신규 가입일 기준 만 19세 ~ 34세 이하인 청년
                        *병역이행기간 최대 6년 추가 인정
                      </li>
                      <li>
                        (개인소득요건) 직전과세기간의 총급여액이 7,500만원
                        이하이며, 종합소득과세표준에 합산되는 종합소득금액이
                        6,300만원 이하인 경우 단, 비과세소득만 있는 경우는 제외
                      </li>
                      <li>
                        (금융소득요건) 가입일이 속한 과세기간의 직전 3개
                        과세기간 중 1회 이상 금융소득종합과세대상*에 해당하지
                      </li>
                      <li>(가구소득요건) 가구소득 중위 180% 이하인 자</li>
                    </ul>
                  </div>
                  <v-checkbox
                    v-model="checkbox"
                    label="(필수) 개인정보 수집 및 이용에 동의합니다."
                    class="label-padding"
                  ></v-checkbox>
                </div>
              </v-form>
              <v-divider class="divider-dashed"></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn depressed large> 취소 </v-btn>
                <v-btn depressed large color="primary" @click="e1 = 2">
                  다음
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-divider class="divider-dashed"></v-divider>
            <v-card class="card-form">
              <v-card-title class="mb-5">신청인 정보 입력</v-card-title>
              <v-form ref="form" v-model="valid" lazy-validation class="px-5">
                <v-row>
                  <v-col cols="12" md="6" class="py-0">
                    <div class="form-group">
                      <v-label
                        >이름 <span class="icon-required"></span
                      ></v-label>
                      <v-text-field
                        :rules="rules"
                        solo
                        placeholder="이름을 입력해주세요."
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <div class="form-group">
                      <v-label>시설명</v-label>
                      <v-text-field
                        solo
                        placeholder="기관, 사업자의 시설명을 입력해주세요"
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <div class="form-group">
                      <v-label
                        >휴대폰 <span class="icon-required"></span
                      ></v-label>
                      <v-text-field
                        :rules="rules"
                        solo
                        placeholder="'-' 없이 숫자만 입력해주세요"
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <div class="form-group">
                      <v-label>직위</v-label>
                      <v-text-field
                        solo
                        placeholder="직위를 입력해주세요."
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <div class="form-group">
                      <v-label
                        >생년월일 <span class="icon-required"></span
                      ></v-label>
                      <v-text-field
                        :rules="rules"
                        solo
                        placeholder="생년월일을 입력해주세요."
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0">
                    <div class="form-group">
                      <v-label>이메일</v-label>
                      <v-text-field
                        solo
                        placeholder="이메일을 입력해주세요."
                      ></v-text-field>
                    </div>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <div class="form-group">
                      <v-label>주소</v-label>
                      <v-row>
                        <v-col cols="12" md="6" class="d-flex">
                          <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                color="primary"
                                depressed
                                v-bind="attrs"
                                v-on="on"
                                class="mr-3"
                                height="48"
                              >
                                검색
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title> 주소 검색 </v-card-title>
                              <div class="zipcode-group px-5">
                                주소 검색 영역
                              </div>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn depressed @click="dialog = false">
                                  취소
                                </v-btn>
                                <v-btn
                                  depressed
                                  color="primary"
                                  @click="dialog = false"
                                >
                                  저장
                                </v-btn>
                                <v-spacer></v-spacer>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                          <v-text-field
                            solo
                            placeholder="지번 및 도로명주소를 입력 후 검색해주세요"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            solo
                            placeholder="나머지 주소를 입력해주세요"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </v-form>
              <v-divider class="divider-dashed"></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn depressed large> 취소 </v-btn>
                <v-btn depressed large color="primary" @click="e1 = 3">
                  다음
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-divider class="divider-dashed"></v-divider>
            <v-card class="card-form">
              <v-flex
                class="complete-group flex-column align-center justify-center text-center py-10"
              >
                <v-img
                  src="@/assets/img_complete.png"
                  max-height="280"
                  contain
                ></v-img>
                <div class="complete-title my-3">
                  복지모델 신청이 완료되었습니다.
                </div>
                <div class="complete-stext">
                  처리내역은 등록된 연락처를 통해 안내드리겠습니다. <br />
                  문의사항은 하단의 성남시 콜센터 (1577-3100)으로 문의해주시기
                  바랍니다.
                </div>
              </v-flex>
              <v-divider class="divider-dashed"></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  depressed
                  color="primary"
                  to="/welfarestatus"
                  width="200"
                >
                  완료
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "ApplySocialWelfare",
  components: {
    Title,
  },
  data: () => ({
    dialog: false,
    e1: 1,
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Required.",
    ],
  }),
};
</script>

<style lang="scss"></style>
