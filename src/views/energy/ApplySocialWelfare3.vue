<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'사업 신청 (공동주택형 에너지서비스 사업)'">
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
                      class="label-padding mt-6"
                    ></v-checkbox>
                  </div>
                  <div class="card-title mt-5">개인정보 수집 및 이용 동의</div>
                  <div class="form-group">
                    <Privacy />
                    <v-checkbox
                      v-model="checkagree2"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="(필수) 개인정보 수집 및 이용에 동의합니다."
                      class="label-padding mt-6"
                    ></v-checkbox>
                  </div>

                  <div class="card-title mt-5 mb-10">
                    신청인 정보 입력
                    <small class="ml-3">
                      <span class="text-required"></span>는 필수 입력
                      정보입니다.</small
                    >
                  </div>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="mb-10">
                      <div class="form-group">
                        <v-label>
                          신청유형 <span class="icon-required"></span>
                        </v-label>
                        <v-radio-group
                          v-model="request"
                          row
                          class="pt-0 mt-1"
                          hide-details="auto"
                        >
                          <v-radio
                            label="세대"
                            color="black"
                            value="single"
                            @click="singleVisible = true"
                          ></v-radio>
                          <v-radio
                            label="단지"
                            color="black"
                            value="group"
                            @click="singleVisible = false"
                          ></v-radio>
                        </v-radio-group>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <div class="form-group">
                        <v-label class="pt-1">
                          이름 <span class="icon-required"></span>
                        </v-label>
                        <v-text-field
                          v-model="name"
                          :rules="nameRules"
                          outlined
                          solo
                          placeholder="홍길동"
                          required
                        ></v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" class="pt-sm-0 pt-md-3">
                      <div class="form-group">
                        <v-label class="pt-1"
                          >휴대폰 <span class="icon-required"></span
                        ></v-label>
                        <div class="d-flex">
                          <v-text-field
                            ref="mobile"
                            v-model="mobile"
                            :rules="mobileRules"
                            oninput="javascript: this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );"
                            type="number"
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
                            {{ authbtnname }}
                          </v-btn>
                        </div>
                        <div class="d-flex">
                          <v-text-field
                            ref="auth"
                            v-model="auth"
                            :rules="authRules"
                            oninput="javascript: this.value = this.value.replace(/.[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );"
                            counter="6"
                            type="number"
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
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6" class="pt-sm-0 pt-md-3">
                      <div class="form-group">
                        <v-label class="pt-1">이메일</v-label>
                        <div class="d-flex">
                          <v-text-field
                            v-model="email1"
                            outlined
                            solo
                            placeholder="email"
                          ></v-text-field>
                          <div class="pt-3 px-3">@</div>
                          <v-select
                            v-model="email2"
                            outlined
                            solo
                            placeholder="선택해주세요"
                            :items="selectitems1"
                          ></v-select>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" class="pt-sm-0 pt-md-3">
                      <div class="form-group">
                        <v-label class="pt-1">전화번호</v-label>
                        <div class="d-flex">
                          <v-select
                            v-model="tel1"
                            outlined
                            solo
                            placeholder="선택해주세요"
                            :items="selectitems2"
                          ></v-select>
                          <div class="pt-3 px-3">-</div>
                          <v-text-field
                            v-model="tel2"
                            outlined
                            solo
                            placeholder="0000"
                          ></v-text-field>
                          <div class="pt-3 px-3">-</div>
                          <v-text-field
                            v-model="tel3"
                            outlined
                            solo
                            placeholder="0000"
                          ></v-text-field>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" class="pt-sm-0 pt-md-3">
                      <div class="form-group">
                        <v-label class="pt-1"
                          >신청단지 <span class="icon-required"></span
                        ></v-label>
                        <v-row no-gutters>
                          <v-col cols="auto">
                            <DialogZipcode @move="inputAddr" />
                          </v-col>
                          <v-col cols="1" class="col-zipcode">
                            <v-text-field
                              v-model="zipcode"
                              outlined
                              solo
                              placeholder="16866"
                              required
                              class="ml-2"
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-text-field
                              v-model="addr1"
                              :rules="addressRules"
                              outlined
                              solo
                              placeholder="산성역포레스티아아파트"
                              required
                              class="ml-2"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <!-- 신청 단지 일때 감춰줍니다. -->
                        <div v-if="singleVisible">
                          <v-text-field
                            v-model="addr2"
                            :rules="addressRules"
                            outlined
                            solo
                            placeholder="000동 0000호"
                            required
                          ></v-text-field>
                        </div>
                        <!-- /.신청 단지 일때 감춰줍니다. -->
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <div class="form-group">
                        <v-label> 태양광 </v-label>
                        <v-radio-group
                          v-model="sunlight"
                          row
                          class="pt-0 mt-1"
                          hide-details="auto"
                        >
                          <v-radio label="유" color="black" value="Y"></v-radio>
                          <v-radio label="무" color="black" value="N"></v-radio>
                        </v-radio-group>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row v-if="!singleVisible">
                    <v-col cols="12" sm="12" md="6">
                      <div class="form-group">
                        <v-label> 원격검침 </v-label>
                        <v-radio-group
                          v-model="remote"
                          row
                          class="pt-0 mt-1"
                          hide-details="auto"
                        >
                          <v-radio
                            label="유"
                            color="black"
                            value="Y"
                            @click="remoteVisible = true"
                          ></v-radio>
                          <v-radio
                            label="무"
                            color="black"
                            value="N"
                            @click="remoteVisible = false"
                          ></v-radio>
                        </v-radio-group>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row v-if="!singleVisible && remoteVisible">
                    <v-col cols="12" sm="12" md="6">
                      <div class="form-group">
                        <v-label class="pt-1"> 제조사 </v-label>
                        <v-select
                          v-model="model"
                          outlined
                          solo
                          placeholder="선택해주세요"
                          :items="modelitems"
                        ></v-select>
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
                large
                class="btn-outline-solid btn-secondary"
                @click="back"
              >
                뒤로
              </v-btn>
              <v-btn depressed large color="primary" @click="save" class="ml-2">
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
import axios from "axios";

export default {
  name: "ApplySocialWelfare3",
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
        href: "welfaremodel3",
      },
      {
        text: "사업 신청",
        disabled: true,
        href: "applysocialwelfare4",
      },
    ],
    request: "single",
    remote: "N",
    selectitems1: ["naver.com", "gmail.com"],
    selectitems2: ["070", "010"],
    modelitems: ["model1", "model2"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "이름을 입력해주세요",
      (v) => /^[ㄱ-ㅎ|가-힣|a-z|A-Z]*$/.test(v) || "잘못된 이름 양식이에요.",
      (v) => !(v && v.length >= 20) || "이름은 20자리 이상 입력할 수 없습니다.",
    ],
    mobile: "",
    mobileRules: [
      (v) => !!v || "휴대폰 번호를 입력해주세요",
      (v) => /^[0-9]*$/.test(v) || "잘못된 휴대폰 번호 양식이에요.",
      (v) =>
        !(v && v.length >= 12) ||
        "휴대폰 번호는 12자리 이상 입력할 수 없습니다.",
      (v) => !(v && v.length <= 9) || "휴대폰 번호 10자리 이상 입력해주세요.",
    ],
    auth: "",
    authRules: [
      (v) => !!v || "인증번호를 입력해주세요",
      (v) => /^[0-9]*$/.test(v) || "인증번호를 다시 확인해주세요.",
      (v) => !(v && v.length != 6) || "6자리의 인증번호를 입력해주세요.",
    ],
    zipcode: "",
    addr1: "",
    addr2: "",
    addressRules: [(v) => !!v || "주소를 입력해주세요"],
    model: "",
    email1: "",
    email2: "",
    tel1: "",
    tel2: "",
    tel3: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkagree1: false,
    checkagree2: false,
    isDisableMobile: false,
    isDisableMobileBtn: true,
    isDisableAuth: true,
    isDisableAuthBtn: true,
    singleVisible: true,
    remoteVisible: false,
    timerStr: "03:00",
    timer: null,
    timeCounter: 180,
    authbtnname: "인증요청",
    authcount: 1,
    authcheck: false,
    sunlight: "Y",
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
    document.body.scrollTop = 0;
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
    mobileSend() {
      this.authbtnname = "재발송";
      this.isDisableMobile = true;
      this.isDisableAuth = false;

      if (this.authcount === 1) {
        this.timerStart();
        this.smsSend();
      } else {
        if (this.timeCounter < 170) {
          this.timeCounter = 180;
          this.smsSend();
        } else {
          alert("10초이내 재발송할 수 없습니다.");
        }
      }
      this.authcount++;
    },
    smsSend() {
      try {
        axios.get("/api/etc/getAuth?mobile=" + this.mobile).then((response) => {
          if (response.data.code === 0) {
            alert("인증코드가 발송되었습니다.");
          }
        });
      } catch (err) {
        console.log(err);
      }
    },
    authSend() {
      if (this.timeCounter === 0) {
        alert("인증시간이 종료되었습니다.");
        return;
      }

      try {
        axios
          .get(
            "/api/etc/getAuthCheck?mobile=" + this.mobile + "&auth=" + this.auth
          )
          .then((response) => {
            if (response.data.code === 0) {
              this.authcheck = true;
              this.isDisableAuth = true;
              this.isDisableAuthBtn = true;
              this.isDisableMobileBtn = true;

              this.timerStop();
            } else {
              alert("인증번호가 잘못되었습니다.");
              return;
            }
          });
      } catch (err) {
        console.log(err);
      }
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

      return (
        minutes.toString().padStart(2, "0") +
        ":" +
        secondes.toString().padStart(2, "0")
      );
    },
    inputAddr(zipcode, addr1) {
      this.zipcode = zipcode;
      this.addr1 = addr1;
    },
    back() {
      this.$router.go(-1);
    },
    save() {
      if (this.$refs.form.validate()) {
        if (!this.authcheck) {
          alert("휴대폰 인증이 되지 않았습니다.");
          return;
        }

        const formData = new FormData();
        formData.append("bType", "3"); //공동주택형 에너지서비스 사업
        formData.append("status", "1"); //신청완료
        formData.append("name", this.name);
        formData.append("birth", "");
        formData.append("mobile", this.mobile);
        formData.append("phone", this.tel1 + "-" + this.tel2 + "-" + this.tel3);
        formData.append(
          "email",
          this.email1 == null ||
            this.email1 === "" ||
            this.email2 == null ||
            this.email2 === ""
            ? ""
            : this.email1 + "@" + this.email2
        );
        formData.append("zipcode", this.zipcode);
        formData.append("addr1", this.addr1);
        formData.append("addr2", this.singleVisible ? this.addr2 : "");
        formData.append("sunLightYn", this.sunlight);
        formData.append("modelName", this.remoteVisible ? this.model : "");
        formData.append("remoteYn", this.remote);

        try {
          axios.post("/api/business/write", formData).then((response) => {
            if (response.data.code == 0) {
              this.$router.push("/applysocialwelfare5");
            } else {
              console.log(response.data.message);
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

<style lang="scss"></style>
