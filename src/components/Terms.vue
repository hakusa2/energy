<template>
  <div class="terms-group" style="height: 160px">
    <p>아래 가입요건을 모두 충족하는 대한민국 거주 청년을 대상으로 합니다.</p>
    <ul class="ul-list list-dash">
      <li>
        (나이요건) 신규 가입일 기준 만 19세 ~ 34세 이하인 청년 *병역이행기간
        최대 6년 추가 인정
      </li>
      <li>
        (개인소득요건) 직전과세기간의 총급여액이 7,500만원 이하이며,
        종합소득과세표준에 합산되는 종합소득금액이 6,300만원 이하인 경우 단,
        비과세소득만 있는 경우는 제외
      </li>
      <li>
        (금융소득요건) 가입일이 속한 과세기간의 직전 3개 과세기간 중 1회 이상
        금융소득종합과세대상*에 해당하지
      </li>
      <li>(가구소득요건) 가구소득 중위 180% 이하인 자</li>
    </ul>
  </div>
</template>

<script>
//import { get, sync } from 'vuex-pathify'

export default {
  name: "Terms",
  components: {},
  props: ["title"],
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss"></style>
