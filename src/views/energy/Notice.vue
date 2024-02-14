<template>
  <div class="page-container">
    <v-container>
      <Title :title="'공지사항'"></Title>
      <Tables class="table-energy no-title">
        <template v-slot:TableData>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="tabledata"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            item-key="name"
            sort-by="date"
            @page-count="pageCount = $event"
          >
            <template v-slot:[`item.title`]="{ item }">
              <router-link :to="item.link">
                {{ item.title }}
              </router-link>
            </template>

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
import Title from "@/components/Title.vue";
import Tables from "@/components/Tables.vue";

export default {
  name: "Notice",
  components: {
    Title,
    Tables,
  },
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "제목", value: "title" },
      { text: "작성자", align: "center", value: "writer", width: "20%" },
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
          title: "[공지사항]택용 태양광DR모델 신청안내",
          writer: "에너지복지포털",
          date: "2024-01-01",
          link: "/energynoticeview",
        },
      ];
    },
  },
};
</script>

<style lang="scss"></style>
