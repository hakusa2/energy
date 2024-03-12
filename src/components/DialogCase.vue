<template>
  <div>
    <v-dialog v-model="dialogVisible" scrollable width="1100">
      <template v-slot:activator="{ on, attrs }">
        <div class="model-case-group" v-bind="attrs" v-on="on">
          <div class="item-image">
            <v-img src="@/assets/img_business5.png" height="240"></v-img>
          </div>
          <div class="item-chip">
            <v-chip outlined> PV </v-chip>
            <v-chip outlined> ESS </v-chip>
            <v-chip outlined> EV </v-chip>
          </div>
          <div class="item-title">
            하얀마을 복지회관 <v-icon>mdi-chevron-right</v-icon>
          </div>
          <div class="item-address">경기도 성남시 분당구 금곡로 25번길 10</div>
        </div>
      </template>
      <v-card class="card-dialog">
        <div class="dialog-header">
          <v-btn icon color="black" class="dialog-close" @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-card-title class="dialog-title"> 하얀마을 복지회관 </v-card-title>
        </div>
        <div class="dialog-body">
          <div class="model-detail-group">
            <div class="item-image">
              <v-img src="@/assets/img_business5.png" height="320"></v-img>
            </div>
            <div class="item-group">
              <div class="item-title">구축 상세</div>
              <div class="item-description">
                <ul class="ul-list list-dot row">
                  <li class="col col-12 col-sm-12 col-md-6">
                    <span class="font-weight-bold">사업개요</span>
                    <ul class="ul-list list-dash py-2">
                      <li>
                        에너지비용 및 온실가스 절감을 동시에 실현하기 위한
                        건물형 에너지 복지 인프라 구축
                      </li>
                      <li>
                        성남시와 함께하는 온실가스 감축을 통한 성남시 탄소중립
                        참여
                      </li>
                    </ul>
                  </li>
                  <li class="col col-12 col-sm-12 col-md-6">
                    <span class="font-weight-bold">패키지 구성</span>
                    <ul class="ul-list list-dash py-2">
                      <li>
                        국가 또는 성남시가 지원하는 분산전원 또는 에너지효율화
                        설비
                      </li>
                      <li>
                        태양광 발전설비, 양방향 전기차 충전기, 소형 ESS(Energy
                        Storage System) 등
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogCase",
  components: {},
  props: {},
  computed: {},
  data: () => ({
    dialogVisible: false,
  }),
  methods: {
    close(){
      this.dialogVisible = false;
    }
  },
};
</script>

<style lang="scss"></style>
