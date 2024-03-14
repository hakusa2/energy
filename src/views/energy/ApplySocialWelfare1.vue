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
                      v-model="checkagree1"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="(필수) 신청 시 유의사항을 확인하였습니다."
                      class="label-padding mt-2"
                    ></v-checkbox>
                  </div>
                  <div class="card-title mt-3">개인정보 수집 및 이용 동의</div>
                  <div class="form-group">
                    <Privacy />
                    <v-checkbox
                      v-model="checkagree2"
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
                                ref="mobile"
                                v-model="mobile"
                                :rules="mobileRules"
                                oninput="javascript: this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );"
                                type="number"
                                dense
                                outlined
                                solo
                                placeholder="'-' 없이 숫자만 입력해주세요"
                                required
                                :disabled="isDisableMobile"
                              ></v-text-field>
                              <v-btn
                                class="ml-2"
                                outlined
                                color="black"
                                width="80"
                                :disabled="isDisableMobileBtn"
                                @click="mobileSend"
                              >
                                인증요청
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                        <v-row>
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
                                ref="auth"
                                v-model="auth"
                                :rules="authRules"
                                oninput="javascript: this.value = this.value.replace(/.[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );"
                                counter="10"
                                type="number"
                                dense
                                outlined
                                solo
                                placeholder="인증 번호 입력"
                                :suffix="timerStr"
                                class="input-certification"
                                required
                                :disabled="isDisableAuth"
                              ></v-text-field>
                              <v-btn
                                class="ml-2"
                                outlined
                                color="black"
                                width="80"
                                :disabled="isDisableAuthBtn"
                                @click="authSend"
                              >
                                확인
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
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
                                <v-btn outlined color="black" width="80" v-bind="attrs" @click="showAddr">
                                  주소찾기
                                </v-btn>
                              </v-col>
                              <v-col cols="3">
                                <v-text-field
                                  v-model="zipcode"
                                  :rules="addressRules"
                                  dense
                                  outlined
                                  solo
                                  placeholder="16866"
                                  required
                                  disabled
                                  class="ml-2"
                                ></v-text-field>
                              </v-col>
                              <v-col>
                                <v-text-field
                                  v-model="addr1"
                                  :rules="addressRules"
                                  dense
                                  outlined
                                  solo
                                  placeholder="산성역포레스티아아파트"
                                  required
                                  disabled
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
                              v-model="addr2"
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
                </v-form>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <v-btn
                outlined
                class="btn-outline-solid btn-secondary"
                @click="back"
              >
                뒤로
              </v-btn>
              <v-btn
                depressed
                color="primary"
                @click="save"
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


export default {
  name: "ApplySocialWelfare1",
  components: {
    Title,
    Terms,
    Privacy,
    
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
      (v) => /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]*$/.test(v) || "잘못된 이름 양식이에요.",
      (v) => !(v && (v.length >= 20)) || "이름은 20자리 이상 입력할 수 없습니다.",
    ],
    mobile: "",
    mobileRules: [
      (v) => !!v || "휴대폰 번호를 입력해주세요",
      (v) => /^[0-9]*$/.test(v) || "잘못된 휴대폰 번호 양식이에요.",
      (v) => !( v && (v.length >= 12)) || '휴대폰 번호는 12자리 이상 입력할 수 없습니다.',
      (v) => !( v && (v.length <= 9)) || '휴대폰 번호 10자리 이상 입력해주세요.',
    ],
    auth: "",
    authRules: [
      (v) => !!v || "인증번호를 입력해주세요",
      (v) => /^[0-9]*$/.test(v) || "인증번호를 다시 확인해주세요.",
      (v) => !( v && (v.length != 6)) || '6자리의 인증번호를 입력해주세요.',
    ],
    zipcode: "",
    addr1: "",
    addr2: "",
    addressRules: [
      (v) => !!v || "주소를 입력해주세요",
      (v) => /.+@.+\..+/.test(v) || "주소를 다시 확인해주세요.",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkagree1: false,
    checkagree2: false,
    isDisableMobile: false,
    isDisableMobileBtn: true,
    isDisableAuth: true,
    isDisableAuthBtn: true,
    timerStr: "03:00",
    timer: null,
    timeCounter: 180,
  }),
  watch: {
    mobile: {
      handler() {
        if (this.$refs && this.$refs.mobile) {
          this.isDisableMobileBtn = !this.$refs.mobile.validate();
        } else {
          this.isDisableMobileBtn = true;
        }
      },
    },
    auth: {
      handler() {
        if (this.$refs && this.$refs.auth) {
          this.isDisableAuthBtn = !this.$refs.auth.validate();
        } else {
          this.isDisableAuthBtn = true;
        }
      },
    },
  },
  created: function () {
      
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
    mobileSend(){
      this.isDisableMobile = true;
      this.isDisableMobileBtn = true;
      this.isDisableAuth = false;

      this.timerStart();
    },
    authSend(){
      this.isDisableAuth = true;
      this.isDisableAuthBtn = true;

      this.timerStop();
    },
    timerStart() {
        this.timeCounter = 180;

        var interval = setInterval(() => {
            this.timeCounter--; //1초씩 감소
            this.timerStr = this.prettyTime();
            if (this.timeCounter <= 0) this.timerStop(interval);
        }, 1000);

        return interval;
    },
    timerStop(timerStr) {
        this.timerStr = "03:00";
        this.timeCounter = 0;
        clearInterval(timerStr);
    },
    prettyTime: function () {
        // 시간 형식으로 변환 리턴
        let time = this.timeCounter / 60;
        let minutes = parseInt(time);
        let secondes = Math.round((time - minutes) * 60);

        return (minutes.toString().padStart(2, "0") + ":" + secondes.toString().padStart(2, "0"));
    },
    back(){
      this.$router.go(-1);
    },
    save(){
      //alert(this.$refs.mobile.validate());
      // if(this.$refs.mobile.validate()){
      //   alert('test');
      // }

      //alert(this.$refs.pform.validate());

      if(this.validate()){
        
        alert('test');
      }

      
      
      //this.$router.push('/applysocialwelfare5');
    },

    showAddr() {
        new window.daum.Postcode({
          oncomplete: (data) => {
              // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
  
              // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
              // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
              let fullRoadAddr = data.roadAddress; // 도로명 주소 변수
              let extraRoadAddr = ''; // 도로명 조합형 주소 변수
  
              // 법정동명이 있을 경우 추가한다. (법정리는 제외)
              // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
              if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                  extraRoadAddr += data.bname;
              }
              // 건물명이 있고, 공동주택일 경우 추가한다.
              if(data.buildingName !== '' && data.apartment === 'Y'){
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
              }
              // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
              if(extraRoadAddr !== ''){
                  extraRoadAddr = ' (' + extraRoadAddr + ')';
              }
              // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
              if(fullRoadAddr !== ''){
                  fullRoadAddr += extraRoadAddr;
              }
  
              // 우편번호와 주소 정보를 해당 필드에 넣는다.
              this.zip = data.zonecode; //5자리 새우편번호 사용
              this.addr1 = fullRoadAddr;
          }
        }).open();
      },
  },
};
</script>

<style lang="scss"></style>
