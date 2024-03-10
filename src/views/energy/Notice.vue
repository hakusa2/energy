<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'복지 소식'">
          <template v-slot:TitleDescription>
            <div class="heading-description">
              성남시에너지포털에 관한 새로운 소식을 확인해보세요.
            </div>
          </template>
        </Title>
      </v-container>
    </div>
    <div class="page-bg border-top h-100">
      <div class="page-container">
        <v-container>
          <Tables class="table-energy no-title">
            <template v-slot:TableData>
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items="tabledata"
                :page.sync="page"
                :items-per-page="itemsPerPage"
                hide-default-header
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
    </div>
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
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "참여와소통",
        disabled: false,
        href: "energynotice",
      },
      {
        text: "복지 소식",
        disabled: true,
        href: "energynotice",
      },
    ],
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
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
          title: "[공지사항] 주택용 태양광DR사업 신청안내",
          date: "2024-01-01",
          link: "/energynoticeview",
        },
        {
          title: "[공지사항] 주택용 태양광DR사업 신청안내",
          date: "2024-01-01",
          link: "/energynoticeview",
        },
        {
          title: "[공지사항] 주택용 태양광DR사업 신청안내",
          date: "2024-01-01",
          link: "/energynoticeview",
        },
        {
          title: "[공지사항] 주택용 태양광DR모델 신청안내",
          date: "2024-01-01",
          link: "/energynoticeview",
        },
        {
          title: "[공지사항] 주택용 태양광DR모델 신청안내",
          date: "2024-01-01",
          link: "/energynoticeview",
        },
        {
          title: "[공지사항] 주택용 태양광DR모델 신청안내",
          date: "2024-01-01",
          link: "/energynoticeview",
        },
      ];
    },
  },
};
</script>

<style lang="scss"></style>
