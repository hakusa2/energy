<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 구축사례 </template>
        <!-- <template v-slot:TableBtn>
        </template>
        <template v-slot:TableHeaderLeft>
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

          <!-- <v-btn depressed color="primary" class="ml-2"> 엑셀다운로드 </v-btn> -->
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
                        v-model="editedItem.category"
                        label="사업종류"
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
                            label="등록일자"
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
                        v-model="editedItem.output"
                        label="표시여부"
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
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.name"
                        label="시설명"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.address"
                        label="주소"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.address"
                        label="상세주소"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="d-flex">
                      <v-checkbox
                        v-model="editedItem.tag"
                        label="PV"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        v-model="editedItem.tag"
                        label="ESS"
                        hide-details
                        class="ml-2"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="editedItem.tag"
                        label="EV"
                        hide-details
                        class="ml-2"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        name="input-7-1"
                        label="사업개요"
                        value="- 에너지 비용 및 온실가스 절감을 동시에 실현하기 위한 건물형 에너지 복지 인프라 구축
- 성남시와 함께하는 온실가스 감축을 통한 성남시 탄소중립 참여"
                        hide-details="auto"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        name="input-7-1"
                        label="패키지구성"
                        value="- 에너지 비용 및 온실가스 절감을 동시에 실현하기 위한 건물형 에너지 복지 인프라 구축
- 성남시와 함께하는 온실가스 감축을 통한 성남시 탄소중립 참여"
                        hide-details="auto"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        label="대표이미지"
                        hide-details="auto"
                      ></v-file-input>
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
    filters: [{ title: "전체" }, { title: "노출" }, { title: "미노출" }],
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
      { text: "노출여부", align: "center", value: "output", sortable: false },
      { text: "등록일자", align: "center", value: "applydate" },
      { text: "사업종류", align: "center", value: "category" },
      { text: "시설명", align: "center", value: "name", sortable: false },
      { text: "주소", value: "address", sortable: false },
      { text: "태그", align: "center", value: "tag", sortable: false },
    ],
    tabledata: [],
    editedIndex: -1,
    editedItem: {
      count: "",
      output: "",
      applydate: "",
      category: "",
      name: "",
      address: "",
      tag: "",
    },
    defaultItem: {
      count: "",
      output: "",
      applydate: "",
      category: "",
      name: "",
      address: "",
      tag: "",
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
          output: "노출",
          applydate: "2024-03-01",
          category: "건물형 인프라구축 사업",
          name: "하얀마을 복지회관",
          address: "경기도 성남시 분당구 대왕판교로 660",
          tag: "PV, ESS, EV",
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
