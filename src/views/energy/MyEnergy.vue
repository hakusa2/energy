<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container class="pb-0">
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'마이에너지'">
          <!-- <template v-slot:TitleDescription>
          <div class="heading-description">성남시에너지복지 포털은 에너지복지모델을 통한 서비스를 제공합니다.</div>
        </template> -->
        </Title>
        <v-tabs v-model="tab">
          <v-tabs-slider></v-tabs-slider>
          <v-tab> 전기요금 비교 </v-tab>
          <v-tab> 가전 사용량 계산 </v-tab>
        </v-tabs>
      </v-container>
    </div>
    <div class="page-bg border-top h-100">
      <div class="page-container">
        <v-container>
          <v-card class="card-tab" flat>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card flat class="card-tab-detail">
                  <v-card-title class="title-line">전기요금 비교</v-card-title>
                  <v-card-text> </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat class="card-tab-detail">
                  <v-card-title>가전 사용량 계산</v-card-title>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <v-card-actions class="pa-0">
              <v-spacer></v-spacer>
              <v-btn depressed color="primary">계산하기</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "MyEnergy",
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
        text: "마이에너지",
        disabled: true,
        href: "myenergy",
      },
    ],
    tab: null,
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
  },
};
</script>

<style lang="scss"></style>
