<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 자주하는질문 </template>
        <template v-slot:TableBtn>
          <v-dialog v-model="dialogPhone" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                depressed
                class="ml-1"
                v-bind="attrs"
                v-on="on"
              >
                연락처수정
              </v-btn>
            </template>
            <v-card class="admin-dialog">
              <v-card-title class="justify-center pb-5">
                연락처수정
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="phoneValue"
                        label="현재"
                        hide-details="auto"
                        disabled="true"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="newPhoneValue"
                        label="변경"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="closePhone"> 취소 </v-btn>
                <v-btn text color="primary" @click="savePhone"> 확인 </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogEmail" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                depressed
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                이메일수정
              </v-btn>
            </template>
            <v-card class="admin-dialog">
              <v-card-title class="justify-center pb-5">
                이메일수정
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        label="현재"
                        v-model="emailValue"
                        hide-details="auto"
                        disabled="true"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        label="변경"
                        v-model="newEmailValue"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="closeEmail"> 취소 </v-btn>
                <v-btn text color="primary" @click="saveEmail"> 확인 </v-btn>
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
                <!-- <v-col cols="auto" class="button-group">
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
                </v-col> -->
              </v-row>
            </template>

            <template v-slot:[`item.qtitle`]="{ item }">
              <a
                class="text-link black--text text-decoration-underline"
                @click="editItem(item)"
              >
                {{ item.qtitle }}
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
                    <v-col cols="12">
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
                            @blur="date = parseDate(dateFormatted)"
                            v-on="on"
                            readonly
                            disabled="true"
                            hide-details="auto"
                          ></v-text-field>
                        </template>
                        <!-- <v-date-picker
                          v-model="date"
                          no-title
                          @input="menu1 = false"
                        ></v-date-picker> -->
                      </v-menu>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.qtitle"
                        label="질문"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.atitle"
                        label="답변"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        v-model="editedItem.description"
                        label="상세답변"
                        hide-details="auto"
                      ></v-textarea>
                    </v-col>
                    <!-- <v-col cols="12">
                      <v-file-input
                        label="이미지"
                        hide-details="auto"
                      ></v-file-input>
                    </v-col> -->
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
  name: "Faq",
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
    emailValue: "",
    newEmailValue: "",
    phoneValue: "",
    newPhoneValue: "",
    dialogPhone: false,
    dialogEmail: false,
    dialog: false,
    dialogDelete: false,
    snack: false,
    snackColor: "",
    snackText: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      { text: "순번", align: "center", value: "id", sortable: false },
      { text: "질문", align: "center", value: "qtitle", sortable: false },
      { text: "답변", align: "center", value: "atitle", sortable: false },
    ],
    tabledata: [],
    selected: [],
    deletekey: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      answer: "",
    },
    defaultItem: {
      title: "",
      answer: "",
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
    dialogPhone(val) {
      val || this.close();
    },
    dialogEmail(val) {
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

        axios.get("/api/faq/getListAdmin", axiosConfig).then((response) => {
          this.tabledata = response.data;
        }).catch(function (error) {
          if(error.response.status == "403"){
            alert("권한이 없습니다.");
            self.$router.push("/signin");
          }
        });

        axios.get("/api/etc/getAdvice").then((response) => {
          this.phoneValue = response.data.phone;
          this.emailValue = response.data.email
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
        axios.post("/api/faq/remove", formData).then((response) => {
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
      // this.tabledata.splice(this.editedIndex, 1);
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

    closePhone(){
      this.dialogPhone = false;
    },

    closeEmail(){
      this.dialogEmail = false;
    },

    save() {
      const formData = new FormData();
      formData.append("qTitle", this.editedItem.qtitle? this.editedItem.qtitle : "");
      formData.append("aTitle", this.editedItem.atitle? this.editedItem.atitle : "");
      formData.append("description", this.editedItem.description? this.editedItem.description : "");
      formData.append("id", this.editedItem.id);

      if (this.editedIndex > -1) {
        try {
          axios.post("/api/faq/modify", formData).then((response) => {
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
          axios.post("/api/faq/write", formData).then((response) => {
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

    savePhone() {
      const formData = new FormData();
      formData.append("code", "phone");
      formData.append("data", this.newPhoneValue);

      try {
        axios.post("/api/etc/modify", formData).then((response) => {
          if (response.data.code == 0) {
            this.phoneValue = this.newPhoneValue;
            this.newPhoneValue = "";
            this.closePhone();
            this.snack = true;
            this.snackColor = "success";
            this.snackText = "Data saved";
          } else {
            console.log(response.data.message);
          }
        });
      } catch (err) {
        console.log(err);
      }
    },

    saveEmail() {
      const formData = new FormData();
      formData.append("code", "email");
      formData.append("data", this.newEmailValue);
      try {
        axios.post("/api/etc/modify", formData).then((response) => {
          if (response.data.code == 0) {
            this.emailValue = this.newEmailValue;
            this.newEmailValue = "";
            this.closeEmail();
            this.snack = true;
            this.snackColor = "success";
            this.snackText = "Data saved";
          } else {
            console.log(response.data.message);
          }
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss"></style>
