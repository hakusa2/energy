<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 복지소식 </template>
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
            item-key="id"
            show-select

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
                        {{ filterText }}
                        <v-icon right> mdi-tune </v-icon>
                      </v-btn>
                    </template>
                    <v-list dense>
                      <v-list-item
                        v-for="(item, index) in filters"
                        :key="index"
                      >
                        <v-list-item-title class="cursor-pointer" @click="menuActionClick(item.title)">{{ item.title }} </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>
            </template>

            <template v-slot:[`item.title`]="{ item }">
              <a
                class="text-link black--text text-decoration-underline"
                @click="editItem(item)"
              >
                {{ item.title }}
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
            <v-card class="card-alert admin-alert">
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
          <v-pagination v-model="page" :length="pageCount" total-visible="9"></v-pagination>
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
                @click="newform"
              >
                신규작성
              </v-btn>
            </template>
            <v-card class="admin-dialog">
              <v-card-title>
                {{ formTitle }}
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        v-model="editedItem.category"
                        :items="categorys"
                        label="분류"
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
                            :value="editedItem.createdAt"
                            label="신청일자"
                            persistent-hint
                            v-bind="attrs"
                            v-on="on"
                            readonly
                            disabled="true"
                            hide-details="auto"
                          ></v-text-field>
                        </template>
                        <!-- <v-date-picker
                          v-model="newDate"
                          no-title
                          @input="menu1 = false"
                          @change="editedItem.createdAt = parseDate(newDate)"
                          :header-date-format="getHeaderTitleMonth"
                          @click="close"
                        ></v-date-picker> -->
                      </v-menu>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        ref="title"
                        v-model="editedItem.title"
                        label="제목"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        v-model="editedItem.description"
                        label="내용"
                        hide-details="auto"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="editedItem.imageFile"
                        :value="editedItem.imageFile"
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
import axios from "axios";

export default {
  name: "Notice",
  components: { Tables },
  data: () => ({
    filters: [{ title: "전체" }, { title: "공지사항" }, { title: "보도자료" }],
    categorys: ["[공지사항]", "[보도자료]"],
    datatest: "",
    newDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
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
    selected: [],
    deletekey: [],
    tabledata: [],
    editedIndex: -1,
    editedItem: {
      applydate: "",
      category: "",
      title: "",
    },
    defaultItem: {
      applydate: "",
      category: "",
      title: "",
    },
    filterText: "필터",
  }),

  computed: {
    headers() {
        return [
          { text: "순번", align: "center", value: "id", sortable: false },
          { text: "분류", align: "center", value: "category", filter:this.categoryFilter},
          { text: "제목", align: "center", value: "title", sortable: false },
          { text: "신청일자", align: "center", value: "createdAt" },
        ]
      },
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
      try {
        let self = this;
        let token = this.$cookies.get("token");
        let axiosConfig = {
          headers: {
            "Authorization": "Bearer " + token
          }
        };

        axios.get("/api/notice/getListAdmin", axiosConfig).then((response) => {
          this.tabledata = response.data;
        }).catch(function (error) {
          if(error.response.status == "403"){
            alert("권한이 없습니다.");
            self.$router.push("/signin");
          }
        });

      } catch (err) {
        console.log(err);
      }
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
      for(let idx in this.selected){
        this.deletekey.push(this.selected[idx].id);
      }

      if(this.deletekey == null || this.deletekey.length == 0){
        this.snack = true;
        this.closeDelete();
        this.snackColor = "error";
        this.snackText = "삭제할 데이터가 없습니다.";
        return;
      }

      const formData = new FormData();
      formData.append("id", this.deletekey);

      try {
        axios.post("/api/notice/remove", formData).then((response) => {
          if (response.data.code == 0) {
            this.closeDelete();
            this.snack = true;
            this.snackColor = "error";
            this.snackText = "Deleted";

            this.initialize();
          } else {
            console.log(response.data.message);
          }
        });
      } catch (err) {
        console.log(err);
      }
      //this.tabledata.splice(this.editedIndex, 1);
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
      // if (this.editedIndex > -1) {
      //   Object.assign(this.tabledata[this.editedIndex], this.editedItem);
      // } else { //new
      //   this.tabledata.push(this.editedItem);
      // }

      const formData = new FormData();
      formData.append("title", this.editedItem.title);
      formData.append("type", this.editedItem.category);
      formData.append("description", this.editedItem.description);
      formData.append("image", this.editedItem.imageFile);
      formData.append("id", this.editedItem.id);

      if (this.editedIndex > -1) {
        try {
          axios.post("/api/notice/modify", formData).then((response) => {
            if (response.data.code == 0) {
              this.close();
              this.snack = true;
              this.snackColor = "success";
              this.snackText = "Data saved";

              this.initialize();
            } else {
              console.log(response.data.message);
            }
          });
        } catch (err) {
          console.log(err);
        }
      } else { //new
        try {
          axios.post("/api/notice/write", formData).then((response) => {
            if (response.data.code == 0) {
              this.close();
              this.snack = true;
              this.snackColor = "success";
              this.snackText = "Data saved";

              this.initialize();
            } else {
              console.log(response.data.message);
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
    },

    menuActionClick(action) {
      if(action === "전체")
        this.filterText = "필터";
      else
        this.filterText = action;
    },

    categoryFilter(value) {
      if(this.filterText === "필터" || value.indexOf(this.filterText) > 0){
        return true;
      } else {
        return false;
      }
    },

    parseDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}.${month.padStart(2, '0')}.${day.padStart(2, '0')}`
    },

    getHeaderTitleMonth(date) {
      const monthName = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ];
      let i = new Date(date).getMonth(date);
      const year = new Date(date).getFullYear(date);
      const month = monthName[i];
      return `${year}.${month}`;
    },

    newform(){
      this.editedItem.category = "[공지사항]";
      //this.editedItem.createdAt = this.parseDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));
    },

  },
};
</script>

<style lang="scss"></style>
