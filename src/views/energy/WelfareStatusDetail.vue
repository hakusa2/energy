<template>
  <div class="page-container">
    <v-container>
      <Title :title="'복지모델 현황'">
        <template v-slot:TitleDescription>
          성남시의 에너지복지모델 현황은 다음과 같습니다
        </template>
        <template v-slot:FormGroup>
          <v-select
            v-model="select"
            :items="items"
            single-line
            hide-details
            dense
            outlined
            class="mt-3 mt-md-0"
          ></v-select>
        </template>
      </Title>

      <Tables class="table-energy no-title-padding">
        <template v-slot:TableTitle> 수정구 일반현황 </template>
        <template v-slot:TableData>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="tabledata"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            item-key="name"
            sort-by="status"
            @page-count="pageCount = $event"
          >
            <template v-slot:top>
              <v-row no-gutters class="table-toolbar">
                <v-col cols="12" sm="12" md="auto" class="filter-group">
                  성남시 수정구의 복지모델 현황은 다음과 같습니다. (최종
                  업데이트 : 2024.01)
                </v-col>
                <v-col cols="auto" class="button-group">
                  <v-btn depressed text>
                    <v-icon left dark class="mdi-custom">
                      mdi-file-excel-outline
                    </v-icon>
                    엑셀다운로드
                  </v-btn>
                </v-col>
              </v-row>
            </template>

            <template v-slot:[`item.status`]="{ item }">
              <v-chip label :color="item.color" dark>
                {{ item.status }}
              </v-chip>
            </template>

            <template v-slot:no-data> 등록된 글이 없습니다. </template>
          </v-data-table>
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </template>
      </Tables>

      <v-card class="card-tab mt-5 mb-10" flat>
        <v-card-title class="px-0"> 상세정보 </v-card-title>
        <v-tabs v-model="tab" background-color="#F6F7FB" grow>
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab> 기본현황 </v-tab>
          <v-tab> 발전량 </v-tab>
          <v-tab> 수요예측정보 (DR) </v-tab>
          <v-tab> 추가정보 </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat class="card-tab-detail">
              <v-card-title class="title-line">기본현황</v-card-title>
              <v-card-text>
                <ul class="ul-list">
                  <li>정예산 : 99,999,999 원</li>
                  <li>거용, 기관용 태양광 발전 모델이 많이 분포되어 있음</li>
                </ul>
              </v-card-text>
              <v-card-title class="title-line">참고</v-card-title>
              <v-card-text>
                <ul class="ul-list">
                  <li>
                    용된 태양광 패널의 표준 발전량은 200 Kw/월 이 일반적임
                  </li>
                  <li>
                    를 기준으로 평균 10~15%의 에너지 절약을 예상할 수 있음
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="card-tab-detail">
              <v-card-text>발전량</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="card-tab-detail">
              <v-card-text>수요예측정보 (DR)</v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="card-tab-detail">
              <v-card-text>추가정보</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-btn depressed color="primary" to="/applysocialwelfare" width="200"
            >복지모델 신청하기</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Tables from "@/components/Tables.vue";

export default {
  name: "WelfareStatusDetail",
  components: {
    Title,
    Tables,
  },
  data: () => ({
    tab: null,
    select: "대상 전체",
    items: ["대상 전체", "분당구", "수정구", "중원구"],
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "행정동", align: "center", value: "area" },
      { text: "기관", align: "center", value: "group" },
      { text: "사업자", align: "center", value: "business" },
      { text: "개인", align: "center", value: "individual" },
      { text: "전체", align: "center", value: "total" },
      { text: "신청현황", align: "center", value: "status" },
    ],
    tabledata: [],
  }),
  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.tabledata = [
        {
          area: "고등동",
          group: "999 / 999",
          business: "999 / 999",
          individual: "999 / 999",
          total: "999 / 999",
          status: "신청가능",
          color: "blue",
        },
        {
          area: "고등동",
          group: "999 / 999",
          business: "999 / 999",
          individual: "999 / 999",
          total: "999 / 999",
          status: "마감임박",
          color: "red",
        },
        {
          area: "고등동",
          group: "999 / 999",
          business: "999 / 999",
          individual: "999 / 999",
          total: "999 / 999",
          status: "마감",
          color: "gray",
        },
      ];
    },
  },
};
</script>

<style lang="scss"></style>
