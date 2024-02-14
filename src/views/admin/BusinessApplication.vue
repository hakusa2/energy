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
            sort-by="model"
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
                <v-col
                  cols="12"
                  sm="12"
                  md="auto"
                  class="filter-group py-sm-2 py-md-0 pl-md-4"
                >
                  <v-checkbox
                    single-line
                    hide-details
                    class="mt-0 pt-0"
                    label="사회복지시설"
                  ></v-checkbox>
                  <v-checkbox
                    single-line
                    hide-details
                    class="mt-0 pt-0 ml-3"
                    label="소규모점포"
                  ></v-checkbox>
                  <v-checkbox
                    single-line
                    hide-details
                    class="mt-0 pt-0 ml-3"
                    label="아파트단지"
                  ></v-checkbox>
                  <v-checkbox
                    single-line
                    hide-details
                    class="mt-0 pt-0 ml-3"
                    label="태양광주택"
                  ></v-checkbox>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="auto"
                  class="filter-group pb-sm-2 pb-md-0 pl-md-4"
                >
                  <v-select
                    v-model="select"
                    :items="items"
                    single-line
                    hide-details
                    dense
                    outlined
                    class="mt-0"
                    style="width: 120px"
                  ></v-select>
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

                  <v-dialog v-model="dialog" max-width="700px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        depressed
                        class="ml-1"
                        v-bind="attrs"
                        v-on="on"
                      >
                        글쓰기
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        {{ formTitle }}
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.model"
                                label="신청모델"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.name"
                                label="이름"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.birth"
                                label="생년월일"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                              <v-text-field
                                v-model="editedItem.mobile"
                                label="휴대폰"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="8">
                              <v-text-field
                                v-model="editedItem.email"
                                label="이메일"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" class="d-flex">
                              <v-text-field
                                v-model="editedItem.address"
                                label="주소"
                                append-icon="mdi-magnify"
                              ></v-text-field>
                              <v-text-field
                                v-model="editedItem.address"
                                label="상세주소"
                                class="ml-3"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn depressed @click="close"> 취소 </v-btn>
                        <v-btn depressed color="primary" @click="save">
                          저장
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-divider class="mx-2" vertical></v-divider>
                  <v-btn depressed dark color="teal"> 엑셀다운로드 </v-btn>
                </v-col>
              </v-row>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
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
  name: "BusinessApplication",
  components: { Tables },
  data: () => ({
    select: "전체",
    items: ["전체", "신청중", "신청완료"],
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
      { text: "신청모델", align: "center", value: "model" },
      { text: "이름", align: "center", value: "name" },
      { text: "생년월일", align: "center", value: "birth" },
      { text: "휴대폰", align: "center", value: "mobile" },
      { text: "이메일", align: "center", value: "email" },
      { text: "주소", value: "address" },
      { text: "Actions", align: "center", value: "actions", sortable: false },
    ],
    tabledata: [],
    editedIndex: -1,
    editedItem: {
      model: "",
      name: "",
      birth: "",
      mobile: "",
      email: "",
      address: "",
    },
    defaultItem: {
      model: "",
      name: "",
      birth: "",
      mobile: "",
      email: "",
      address: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "글쓰기" : "수정하기";
    },
  },

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
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
        {
          model: "사회복지시설",
          name: "홍길동",
          birth: "910201",
          mobile: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.tabledata.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tabledata[this.editedIndex], this.editedItem);
      } else {
        this.tabledata.push(this.editedItem);
      }
      this.close();
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
  },
};
</script>

<style lang="scss"></style>
