<template>
  <div class="page-footer">
    <v-container
      class="d-flex justify-space-between flex-column flex-xs-column flex-sm-row flex-md-row flex-lg-row flex-xl-row w-100 py-10"
    >
      <div class="contact-info">
        <p class="text-address mb-3">
          경기도 성남시 중원구 성남대로 997(여수동200번지) 성남시청
        </p>
        <p class="text-contact mb-10">
          전화 031-729-2837 | 팩스 031-729-2838 | 이메일 email@email.com
        </p>
        <p class="text-copyright mb-0">
          Copyright ⓒ 성남시에너지복지포털 All Rights Reserved.
        </p>
      </div>
      <div class="brand-name mt-10 mb-5">
        <v-img src="@/assets/logo.png" max-width="240" contain></v-img>
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CopyRight",
  components: {},
  created() {},
  data: () => ({}),
};
</script>

<style lang="scss">
.contact-info {
  font-size: 16px;
  line-height: 24px;
}
.text-copyright {
  font-weight: 300;
}
</style>
