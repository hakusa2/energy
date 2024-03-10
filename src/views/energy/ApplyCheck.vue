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
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col>
              <v-card flat class="card-applycheck card-transparent">
                <div class="form-bg">
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
                              <v-label class="pt-1">휴대폰</v-label>
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
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                  </v-form>
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    large
                    depressed
                    color="primary"
                    to="/applycheckform"
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
  },
};
</script>

<style lang="scss">
.card-applycheck .v-card__text {
  background-color: #f8f8f8;
}
</style>
