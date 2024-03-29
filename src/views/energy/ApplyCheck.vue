<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'신청이력조회'">
          <template v-slot:TitleDescription>
            <div class="heading-description">
              신청 시 입력한 정보로 신청 이력을 확인해보세요.
            </div>
          </template>
        </Title>
      </v-container>
    </div>

    <div class="page-bg border-top h-100">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col>
              <v-card flat class="card-applycheck card-transparent">
                <div class="form-bg border">
                  <v-form ref="form" v-model="valid" lazy-validation>
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
                              <v-label class="pt-1">이름</v-label>
                            </v-col>
                            <v-col>
                              <v-text-field
                                v-model="name"
                                :rules="nameRules"
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
                              <v-label class="pt-1">휴대폰</v-label>
                            </v-col>
                            <v-col class="pb-0">
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
                                  :disabled="isDisableMobile"
                                  required
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
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                  </v-form>
                </div>
                <v-card-actions class="mt-10">
                  <v-spacer></v-spacer>
                  <v-btn
                    large
                    depressed
                    color="primary"
                    @click="confirm"
                    width="120"
                    >신청 확인</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
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
  name: "ApplyCheck",
  components: {
    Title,
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
        text: "신청이력조회",
        disabled: true,
        href: "applycheck",
      },
    ],
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
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    isDisableMobile: false,
    isDisableMobileBtn: true,
    isDisableAuth: true,
    isDisableAuthBtn: true,
    timerStr: "03:00",
    timer: null,
    timeCounter: 180,
    authbtnname: "인증요청",
    authcount: 1,
    authcheck: false,
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

      if(this.authcount === 1){
        this.timerStart();
        this.smsSend();
      } else {
        if(this.timeCounter < 170){
          this.timeCounter = 180;
          this.smsSend();
        } else {
          alert("10초이내 재발송할 수 없습니다.")
        }
      }
      this.authcount++;
    },
    smsSend(){
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
      if(this.timeCounter === 0){
        alert("인증시간이 종료되었습니다.");
        return;
      }

      try {
        axios.get("/api/etc/getAuthCheck?mobile=" + this.mobile + "&auth=" + this.auth).then((response) => {
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
    confirm() {
      if (this.$refs.form.validate()) {
        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("mobile", this.mobile);

        if(!this.authcheck){
          alert("휴대폰 인증이 되지 않았습니다.");
          return;
        }

        try {
          axios.post("/api/business/getCheck", formData).then((response) => {
            console.log(response);
            if (response.data != "") {
              this.$router.push("/applycheckform?id=" + response.data);
            } else {
              alert("신청내역이 없습니다.");
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

<style lang="scss">
.card-applycheck .v-card__text {
  background-color: #f8f8f8;
}
</style>
