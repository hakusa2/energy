<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> FAQ 내용관리 </template>
        <template v-slot:TableDescription>
          사업문의 게시판에 표시되는 내용을 등록/관리합니다
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
            sort-by="title"
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

                  <v-divider class="mx-2" vertical></v-divider>
                  <v-btn depressed color="success"> 전화번호 변경 </v-btn>
                  <v-btn depressed color="success" class="ml-1">
                    이메일 주소변경
                  </v-btn>
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
  name: "Faq",
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
    itemsPerPage: 10,
    headers: [
      { text: "질문", value: "title" },
      { text: "답변", value: "reply" },
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
          title: "Q. 에너지 복지시설은 어떻게 신청하나요?",
          reply:
            "A. 에너지 복지시설은 다음과 같은 방법으로 신청할 수 있습니다...",
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
