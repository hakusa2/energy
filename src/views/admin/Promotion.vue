<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 프로모션 게시판 </template>
        <template v-slot:TableDescription>
          홈 화면에 표시되는 프로모션 영역을 설정합니다
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
            show-select
            sort-by="date"
            @page-count="pageCount = $event"
          >
            <template v-slot:top>
              <v-row no-gutters class="table-toolbar">
                <v-col cols="12" sm="12" md="auto" class="filter-group">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="검색"
                    single-line
                    hide-details
                    dense
                    class="mt-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto" class="button-group">
                  <v-dialog v-model="dialogDelete" max-width="300px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn depressed v-bind="attrs" v-on="on"> 삭제 </v-btn>
                    </template>
                    <v-card class="card-alert">
                      <v-card-text>삭제하시겠습니까?</v-card-text>
                      <v-card-actions class="pa-0">
                        <v-row no-gutters>
                          <v-col>
                            <v-btn depressed block tile @click="closeDelete"
                              >취소</v-btn
                            >
                          </v-col>
                          <v-col>
                            <v-btn
                              depressed
                              block
                              tile
                              color="error"
                              @click="deleteItemConfirm"
                              >삭제</v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-btn color="primary" depressed class="ml-1"> 글쓰기 </v-btn>
                </v-col>
              </v-row>
            </template>

            <template v-slot:no-data> 등록된 글이 없습니다. </template>
          </v-data-table>
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </template>
      </Tables>

      <Tables class="table-admin">
        <template v-slot:TableTitle> 배너 컨텐츠 관리 </template>
        <template v-slot:TableDescription>
          공지사항 우측의 컨텐츠 배너를 관리합니다
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
            show-select
            sort-by="date"
            @page-count="pageCount = $event"
          >
            <template v-slot:top>
              <v-row no-gutters class="table-toolbar">
                <v-col cols="12" sm="12" md="auto" class="filter-group">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="검색"
                    single-line
                    hide-details
                    dense
                    class="mt-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto" class="button-group">
                  <v-dialog v-model="dialogDelete" max-width="300px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn depressed v-bind="attrs" v-on="on"> 삭제 </v-btn>
                    </template>
                    <v-card class="card-alert">
                      <v-card-text>삭제하시겠습니까?</v-card-text>
                      <v-card-actions class="pa-0">
                        <v-row no-gutters>
                          <v-col>
                            <v-btn depressed block tile @click="closeDelete"
                              >취소</v-btn
                            >
                          </v-col>
                          <v-col>
                            <v-btn
                              depressed
                              block
                              tile
                              color="error"
                              @click="deleteItemConfirm"
                              >삭제</v-btn
                            >
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-btn color="primary" depressed class="ml-1"> 글쓰기 </v-btn>
                </v-col>
              </v-row>
            </template>

            <template v-slot:no-data> 등록된 글이 없습니다. </template>
          </v-data-table>
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </template>
      </Tables>

      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false"> Close </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Tables from "@/components/Tables.vue";

export default {
  name: "Promotion",
  components: { Tables },
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    snack: false,
    snackColor: "",
    snackText: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    headers: [
      { text: "제목", value: "title" },
      { text: "등록일", align: "center", value: "date", width: "20%" },
    ],
    tabledata: [],
  }),

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

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
        {
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
        {
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
        {
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
        {
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
        {
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
        {
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
        {
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
        {
          title: "24년 01월 01일 정기점검 안내",
          date: "2024-01-01 11:59:59",
        },
      ];
    },

    deleteItem(item) {
      this.editedIndex = this.tabledata.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.tabledata.splice(this.editedIndex, 1);
      this.closeDelete();
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Deleted";
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>

<style lang="scss"></style>
