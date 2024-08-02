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

            <template v-slot:[`item.groupName`]="{ item }">
              <a
                class="text-link black--text text-decoration-underline"
                @click="editItem(item)"
              >
                {{ item.groupName }}
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
                        v-model="editedItem.btypeName"
                        label="사업종류"
                        :items="types"
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
                            disabled="true"
                            v-on="on"
                            hide-details="auto"
                          ></v-text-field>
                        </template>
                      </v-menu>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        v-model="editedItem.mark"
                        label="표시여부"
                        :items="marks"
                        hide-details="auto"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.id"
                        label="순번"
                        disabled="true"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.groupName"
                        label="시설명"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.addr1"
                        label="주소"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.addr2"
                        label="상세주소"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" class="d-flex">
                      <v-checkbox
                        v-model="editedItem.tag1"
                        label="PV"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        v-model="editedItem.tag2"
                        label="ESS"
                        hide-details
                        class="ml-2"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="editedItem.tag3"
                        label="EV"
                        hide-details
                        class="ml-2"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="editedItem.tag4"
                        label="DR"
                        hide-details
                        class="ml-2"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="editedItem.tag5"
                        label="에너지서비스"
                        hide-details
                        class="ml-2"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        name="input-7-1"
                        label="사업개요"
                        v-model="editedItem.businessSummary"
                        hide-details="auto"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        name="input-7-1"
                        label="패키지구성"
                        v-model="editedItem.packageCompose"
                        hide-details="auto"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                      <v-file-input
                        v-model="editedItem.image"
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
  name: "ConstructionCase",
  components: { Tables },
  data: () => ({
    filters: [{ title: "전체" }, { title: "노출" }, { title: "미노출" }],
    types: ["건물형 인프라구축 사업", "점포형 에너지비용절감 사업", "공동주택형 에너지서비스 사업", "단독주택형 에너지서비스 사업"],
    marks: ["노출", "미노출"],
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
    filterText: "필터",
  }),

  computed: {
    headers() {
        return [
          { text: "순번", align: "center", value: "id", sortable: false },
          { text: "노출여부", align: "center", value: "mark", sortable: false, filter:this.markFilter },
          { text: "등록일자", align: "center", value: "createdAt" },
          { text: "사업종류", align: "center", value: "btypeName" },
          { text: "시설명", align: "center", value: "groupName", sortable: false },
          { text: "주소", value: "addr", sortable: false },
          { text: "태그", align: "center", value: "tagName", sortable: false },
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

        axios.get("/api/construction/getListAll", axiosConfig).then((response) => {
          this.tabledata = response.data;

          for(const item in this.tabledata){
            switch (this.tabledata[item].btype) {
              case "1" :
                this.tabledata[item].btypeName = "건물형 인프라구축 사업";
                break;
              case "2" :
                this.tabledata[item].btypeName = "점포형 에너지비용절감 사업";
                break;
              case "3" :
                this.tabledata[item].btypeName = "공동주택형 에너지서비스 사업";
                break;
              case "4" :
                this.tabledata[item].btypeName = "단독주택형 에너지서비스 사업";
                break;
            }

            this.tabledata[item].addr = this.tabledata[item].addr1 + " " + this.tabledata[item].addr2;

            this.tabledata[item].mark = this.tabledata[item].markYn === "Y" ? "노출" : "미노출";

            let tagName = [];
            if(this.tabledata[item].tagYn1 === "Y")
              tagName.push("PV")
            if(this.tabledata[item].tagYn2 === "Y")
              tagName.push("ESS")
            if(this.tabledata[item].tagYn3 === "Y")
              tagName.push("EV")
            if(this.tabledata[item].tagYn4 === "Y")
              tagName.push("DR")
            if(this.tabledata[item].tagYn5 === "Y")
              tagName.push("에너지서비스")

            this.tabledata[item].tagName = tagName;

            if(this.tabledata[item].tagYn1 === "Y") this.tabledata[item].tag1 = true; else this.tabledata[item].tag1 = false;
            if(this.tabledata[item].tagYn2 === "Y") this.tabledata[item].tag2 = true; else this.tabledata[item].tag2 = false;
            if(this.tabledata[item].tagYn3 === "Y") this.tabledata[item].tag3 = true; else this.tabledata[item].tag3 = false;
            if(this.tabledata[item].tagYn4 === "Y") this.tabledata[item].tag4 = true; else this.tabledata[item].tag4 = false;
            if(this.tabledata[item].tagYn5 === "Y") this.tabledata[item].tag5 = true; else this.tabledata[item].tag5 = false;
          }
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
        axios.post("/api/construction/remove", formData).then((response) => {
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

      switch (this.editedItem.btypeName) {
        case "건물형 인프라구축 사업" :
          this.editedItem.btype = "1";
          break;
        case "점포형 에너지비용절감 사업" :
          this.editedItem.btype = "2";
          break;
        case "공동주택형 에너지서비스 사업" :
          this.editedItem.btype = "3";
          break;
        case "단독주택형 에너지서비스 사업" :
          this.editedItem.btype = "4";
          break;
      }

      switch (this.editedItem.mark) {
        case "노출" :
          this.editedItem.markYn = "Y";
          break;
        case "미노출" :
          this.editedItem.markYn = "N";
          break;
      }

      this.editedItem.tagYn1 = this.editedItem.tag1 ? "Y" : "N";
      this.editedItem.tagYn2 = this.editedItem.tag2 ? "Y" : "N";
      this.editedItem.tagYn3 = this.editedItem.tag3 ? "Y" : "N";
      this.editedItem.tagYn4 = this.editedItem.tag4 ? "Y" : "N";
      this.editedItem.tagYn5 = this.editedItem.tag5 ? "Y" : "N";

      const formData = new FormData();
      formData.append("bType", this.editedItem.btype);
      formData.append("groupName", this.editedItem.groupName);
      formData.append("addr1", this.editedItem.addr1);
      formData.append("addr2", this.editedItem.addr2);
      formData.append("businessSummary", this.editedItem.businessSummary);
      formData.append("packageCompose", this.editedItem.packageCompose);
      formData.append("markYn", this.editedItem.markYn);
      formData.append("tagYn1", this.editedItem.tagYn1);
      formData.append("tagYn2", this.editedItem.tagYn2);
      formData.append("tagYn3", this.editedItem.tagYn3);
      formData.append("tagYn4", this.editedItem.tagYn4);
      formData.append("tagYn5", this.editedItem.tagYn5);
      formData.append("tagYn6", "N");
      formData.append("tagYn7", "N");
      formData.append("tagYn8", "N");
      formData.append("tagYn9", "N");
      formData.append("image", this.editedItem.image);
      formData.append("id", this.editedItem.id);

      if (this.editedIndex > -1) {
        try {
          axios.post("/api/construction/modify", formData).then((response) => {
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
          axios.post("/api/construction/write", formData).then((response) => {
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

    markFilter(value) {
      if(this.filterText === "필터" || value === this.filterText){
        return true;
      } else {
        return false;
      }
    },

    newform(){
      this.editedItem.btypeName = "건물형 인프라구축 사업";
      this.editedItem.mark = "노출";
    },

  },
};
</script>

<style lang="scss"></style>
