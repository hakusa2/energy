<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm10 md6 lg4>
          <v-card elevation="0" class="card-signin px-3">
            <v-img
              src="@/assets/logo.svg"
              max-width="250"
              class="ml-auto mr-auto mb-10"
              contain
            ></v-img>
            <v-card-title class="justify-center">
              성남시 에너지 포털 컨텐츠 관리시스템
            </v-card-title>
            <v-card-text
              class="mt-7 mb-7 d-flex justify-center px-10 pt-8 pb-5"
            >
              <v-flex xs12 sm10 md8>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <div class="form-group">
                    <v-label>아이디</v-label>
                    <v-text-field
                      v-model="id"
                      :rules="idRules"
                      dense
                      outlined
                      solo
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
                      solo
                      placeholder="비밀번호를 입력해주세요"
                    ></v-text-field>
                  </div>
                </v-form>
              </v-flex>
            </v-card-text>
            <v-card-actions class="d-flex flex-column px-10">
              <v-btn
                large
                block
                depressed
                color="primary"
                to="/adminbusinessapplication"
                >로그인</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
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
.card-signin .v-card__title {
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
}
.card-signin .v-card__text {
  background-color: #f8f8f8;
}
</style>
