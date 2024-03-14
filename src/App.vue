<template>
  <router-view class="v-application-bgarage" />
</template>

<script>
import "@/styles/pretendard/pretendard.css";
import "@/styles/overrides.sass";

export default {
  name: "App",
  mounted() {
    let zippopup = document.createElement('script');
    zippopup.setAttribute('src', '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');
    document.head.appendChild(zippopup);
  },
};
</script>

<style></style>
