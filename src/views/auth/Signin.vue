<template>
  <v-content class="signin-main">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="signin-group">
          <v-container>
            <v-row class="align-center">
              <v-col cols="12" sm="12" md="6" class="d-flex flex-column">
                <v-img
                  src="@/assets/logo.svg"
                  max-width="290"
                  class="mb-5"
                  contain
                ></v-img>
                <div class="signin-title">
                  성남시 에너지복지포털 관리자 사이트
                </div>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <div class="signin-stitle mb-5">관리자 로그인</div>
                <div class="signin-form">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <div class="form-group">
                      <v-label>아이디</v-label>
                      <v-text-field
                        v-model="id"
                        :rules="idRules"
                        dense
                        outlined
                        placeholder="아이디를 입력해주세요"
                      ></v-text-field>
                    </div>
                    <div class="form-group">
                      <v-label>비밀번호</v-label>
                      <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        dense
                        outlined
                        placeholder="비밀번호를 입력해주세요"
                      ></v-text-field>
                    </div>
                    <div class="signin-action">
                      <v-btn
                        depressed
                        color="primary"
                        to="/adminbusinessapplication"
                        class="mt-2"
                        >로그인</v-btn
                      >
                    </div>
                  </v-form>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "SignIn",
  components: {},
  data: () => ({
    valid: true,
    id: "",
    idRules: [
      (v) => !!v || "잘못된 아이디를 입력하셨습니다. 다시 확인해주세요",
      (v) => (v && v.length <= 10) || "숫자 및 특수문자는 입력할 수 없어요.",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "잘못된 비밀번호를 입력하셨습니다. 다시 확인해주세요",
      (v) => /.+@.+\..+/.test(v) || "잘못된 휴대폰 번호 양식이에요.",
    ],
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

<style lang="scss">
.signin-main {
  width: 100%;
  height: 100%;
  background: url("@/assets/main_img3.png") no-repeat center center;
  background-size: cover;
}
.signin-group {
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 48px 60px;
}
.signin-title {
  font-size: 20px;
  font-weight: 700;
}
.signin-stitle {
  font-size: 22px;
  font-weight: 600;
}
</style>
