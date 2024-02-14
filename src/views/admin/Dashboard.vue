<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 사업신청 등록현황 </template>
        <template v-slot:TableDescription>
          등록된 사업신청 내역을 표시합니다
        </template>
        <!-- <template v-slot:TableHeaderLeft>
        </template>
        <template v-slot:TableHeaderRight>
        </template> -->
        <template v-slot:TableData>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">사업종류</th>
                  <th class="text-center">신규</th>
                  <th class="text-center">검토중</th>
                  <th class="text-center">전체</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">사회복지시설</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                </tr>
                <tr>
                  <td class="text-center">소규모 점포</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                </tr>
                <tr>
                  <td class="text-center">아파트 단지</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                </tr>
                <tr>
                  <td class="text-center">태양광 주택</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class="text-center">전체</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                  <td class="text-center">0건</td>
                </tr>
              </tfoot>
            </template>
          </v-simple-table>
        </template>
      </Tables>

      <Tables class="table-admin mt-5">
        <template v-slot:TableTitle> 공지사항 </template>
        <template v-slot:TableDescription>
          플랫폼에 표시되는 공지사항의 상위 10개 내용이 표시됩니다
        </template>
        <!-- <template v-slot:TableHeaderLeft>
        </template>
        <template v-slot:TableHeaderRight>
        </template> -->
        <template v-slot:TableData>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="tabledata"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            item-key="name"
            sort-by="date"
            @page-count="pageCount = $event"
          >
            <template v-slot:no-data> 등록된 글이 없습니다. </template>
          </v-data-table>
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </template>
      </Tables>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Tables from "@/components/Tables.vue";

export default {
  name: "Dashboard",
  components: { Tables },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    headers: [
      { text: "제목", value: "title" },
      { text: "등록일", align: "center", value: "date", width: "20%" },
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
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
      ];
    },
  },
};
</script>

<style lang="scss"></style>
