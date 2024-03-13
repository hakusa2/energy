<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 구축사례 </template>
        <template v-slot:TableBtn>
          신청가능여부
          <v-dialog v-model="dialog1" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                depressed
                class="ml-1"
                v-bind="attrs"
                v-on="on"
              >
                변경
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="justify-center pb-5">
                사업신청가능여부
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row class="align-center">
                    <v-col cols="6" class="text-damin-label text-right">
                      건물형 인프라구축 사업
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <v-btn-toggle v-model="toggle_exclusive" mandatory dense>
                        <v-btn> 신청가능 </v-btn>
                        <v-btn> 신청불가 </v-btn>
                      </v-btn-toggle>
                    </v-col>
                    <v-col cols="6" class="text-damin-label text-right">
                      점포형 에너지비용절감 사업
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <v-btn-toggle v-model="toggle_exclusive" mandatory dense>
                        <v-btn> 신청가능 </v-btn>
                        <v-btn> 신청불가 </v-btn>
                      </v-btn-toggle>
                    </v-col>
                    <v-col cols="6" class="text-damin-label text-right">
                      공동주택형 에너지서비스 사업
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <v-btn-toggle v-model="toggle_exclusive" mandatory dense>
                        <v-btn> 신청가능 </v-btn>
                        <v-btn> 신청불가 </v-btn>
                      </v-btn-toggle>
                    </v-col>
                    <v-col cols="6" class="text-damin-label text-right">
                      단독주택형 에너지서비스 사업
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <v-btn-toggle v-model="toggle_exclusive" mandatory dense>
                        <v-btn> 신청가능 </v-btn>
                        <v-btn> 신청불가 </v-btn>
                      </v-btn-toggle>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text> 취소 </v-btn>
                <v-btn text color="primary"> 확인 </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
            sort-by="count"
            @page-count="pageCount = $event"
          >
            <template v-slot:top>
              <v-row no-gutters class="table-toolbar">
                <v-col cols="auto" class="filter-group">
                  <v-text-field
                    v-model="search"
                    prepend-inner-icon="mdi-magnify"
                    label="검색"
                    hide-details
                    solo
                    dense
                    class="mt-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto" class="button-group">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="white" v-bind="attrs" v-on="on">
                        필터
                        <v-icon right> mdi-tune </v-icon>
                      </v-btn>
                    </template>
                    <v-list dense>
                      <v-list-item
                        v-for="(item, index) in filters"
                        :key="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>
            </template>

            <template v-slot:[`item.name`]="{ item }">
              <a
                class="text-link black--text text-decoration-underline"
                @click="editItem(item)"
              >
                {{ item.name }}
              </a>
            </template>

            <template v-slot:[`item.status`]="{ item }">
              <v-chip label> {{ item.status }}</v-chip>
            </template>

            <template v-slot:no-data> 등록된 글이 없습니다. </template>
          </v-data-table>
        </template>
        <template v-slot:TableFooterLeft>
          <v-dialog v-model="dialogDelete" max-width="300px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed class="primary" v-bind="attrs" v-on="on">
                삭제
              </v-btn>
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

          <v-btn depressed color="primary" class="ml-2"> 엑셀다운로드 </v-btn>
        </template>
        <template v-slot:TableFooterCenter>
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </template>
        <template v-slot:TableFooterRight>
          <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                depressed
                class="ml-1"
                v-bind="attrs"
                v-on="on"
              >
                신규작성
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                {{ formTitle }}
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        v-model="editedItem.status"
                        label="상태"
                        hide-details="auto"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="editedItem.applydate"
                            label="신청일자"
                            persistent-hint
                            v-bind="attrs"
                            @blur="date = parseDate(dateFormatted)"
                            v-on="on"
                            hide-details="auto"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="date"
                          no-title
                          @input="menu1 = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        v-model="editedItem.category"
                        label="사업종류"
                        hide-details="auto"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.count"
                        label="순번"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.name"
                        label="이름"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.birth"
                        label="생년월일"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.contact"
                        label="연락처"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.email"
                        label="이메일"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.address"
                        label="주소"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.address"
                        label="상세주소"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select label="태양광" hide-details="auto"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select label="모델명" hide-details="auto"></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn depressed @click="close"> 취소 </v-btn>
                <v-btn depressed color="primary" @click="save"> 저장 </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
  name: "ConstructionCase",
  components: { Tables },
  data: () => ({
    filters: [
      { title: "전체" },
      { title: "신청완료" },
      { title: "심사중" },
      { title: "선정" },
      { title: "미선정" },
    ],
    toggle_exclusive: undefined,
    search: "",
    dialog1: false,
    dialog: false,
    dialogDelete: false,
    snack: false,
    snackColor: "",
    snackText: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "순번", align: "center", value: "count", sortable: false },
      { text: "신청일자", align: "center", value: "applydate" },
      { text: "사업종류", align: "center", value: "category" },
      { text: "이름", align: "center", value: "name", sortable: false },
      { text: "생년월일", align: "center", value: "birth", sortable: false },
      { text: "연락처", align: "center", value: "contact", sortable: false },
      { text: "이메일", align: "center", value: "email", sortable: false },
      { text: "신청주소", value: "address", sortable: false },
      { text: "상태", align: "center", value: "status", sortable: false },
    ],
    tabledata: [],
    editedIndex: -1,
    editedItem: {
      count: "",
      applydate: "",
      category: "",
      name: "",
      birth: "",
      contact: "",
      email: "",
      address: "",
      status: "",
    },
    defaultItem: {
      count: "",
      applydate: "",
      category: "",
      name: "",
      birth: "",
      contact: "",
      email: "",
      address: "",
      status: "",
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
          count: "1",
          applydate: "2024-03-01",
          category: "건물형 인프라구축 사업",
          name: "홍길동",
          birth: "910201",
          contact: "010-1234-5678",
          email: "name@company.com",
          address: "(14157) 서울시 금천구 대륭포스트타워 5차 1807호",
          status: "신청완료",
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
