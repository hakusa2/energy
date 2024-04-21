<template>
  <div class="page-sub h-100">
    <div class="page-bg h-100">
      <div class="page-container d-flex align-center h-100">
        <v-container>
          <v-card flat class="card-transparent">
            <v-flex
              class="loading-group flex-column align-center justify-center text-center py-10"
            >
              <v-img
                src="@/assets/loading.png"
                max-height="136"
                contain
              ></v-img>
              <div class="loading-title my-6">현재 페이지 준비중이에요.</div>
              <div class="loading-stext mt-4">
                보다 나은 서비스 제공을 위해 페이지 준비중에 있어요. <br />
                빠른 시일안에 서비스를 제공드릴 수 있도록 할게요.
              </div>
            </v-flex>
          </v-card>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "WelfareStatus",
  components: {},
  data: () => ({
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "운영현황",
        disabled: false,
        href: "welfarestatus",
      },
      {
        text: "사업현황",
        disabled: true,
        href: "welfarestatus",
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
