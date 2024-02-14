<template>
  <div
    class="d-flex justify-space-between flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row w-100 px-2 py-5"
  >
    <div
      class="order-2 order-sm-2 order-md-1 order-lg-1 order-xl-1 contact-info"
    >
      <p class="text-address mb-0">
        경기도 성남시 중원구 성남대로 997(여수동200번지) 성남시청
      </p>
      <p class="text-contact mb-3">
        전화 031-729-2837 | 팩스 031-729-2838 | 이메일 email@email.com
      </p>
      <p class="text-copyright mb-0">
        Copyright ⓒ 성남시에너지복지포털 All Rights Reserved.
      </p>
    </div>
    <div
      class="order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2 brand-name mb-3"
    >
      성남시에너지포탈
    </div>
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
  font-size: 11px;
}
.brand-name {
  font-size: 16px;
  font-weight: 700;
}
</style>
