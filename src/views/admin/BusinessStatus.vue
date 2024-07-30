<template>
    <div class="page-container">
      <v-container>
        <Tables class="table-admin">
          <template v-slot:TableTitle> 사업현황관리 </template>
          
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
                        v-model="editedItem.categoryName"
                        :items="category"
                        label="구분"
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
                            v-model="editedItem.createdAt"
                            label="등록일"
                            persistent-hint
                            v-bind="attrs"
                            @blur="date = parseDate(dateFormatted)"
                            v-on="on"
                            hide-details="auto"
                            disabled="true"
                          ></v-text-field>
                        </template>
                        <!-- <v-date-picker
                          v-model="date"
                          no-title
                          @input="menu1 = false"
                        ></v-date-picker> -->
                      </v-menu>
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
                        v-model="editedItem.id"
                        label="순번"
                        hide-details="auto"
                        disabled="true"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.builtDate"
                        label="구축일자"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.units"
                        label="세대수"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.zipcode"
                        label="우편번호"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.addr1"
                        label="주소"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.addr2"
                        label="상세주소"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.latitude"
                        label="위도"
                        hide-details="auto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.longitude"
                        label="경도"
                        hide-details="auto"
                      ></v-text-field>
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
    name: "BusinessStatus",
    components: { Tables },
    data: () => ({
      filters: [
        { title: "전체" },
        { title: "일반건물" },
        { title: "점포" },
        { title: "공동주택" },
        { title: "단독주택" },
      ],
      category: ["일반건물", "점포", "공동주택", "단독주택"],
      toggle_exclusive: undefined,
      search: "",
      dialog1: false,
      dialog: false,
      dialogDelete: false,
      dialogApproval: false,
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
        applydate: "",
        category: "",
        name: "",
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
        contact: "",
        email: "",
        address: "",
        status: "",
      },
      filterText: "필터",
      buildingValue: 0,
      shopValue: 0,
      apartmentValue: 0,
      detachedValue: 0,
      sunLightVisible: false,
      exceldata:[],
    }),
  
    computed: {
      headers() {
        return [
          { text: "순번", align: "center", value: "id"},
          { text: "구분", align: "center", value: "categoryName" , filter:this.statusFilter},
          { text: "명칭", align: "center", value: "name", sortable: false },
          { text: "주소", align: "center", value: "addr" },
          { text: "세대수", align: "center", value: "units", sortable: false },
          { text: "구축일자", align: "center", value: "builtDate" },
          { text: "위도", align: "center", value: "latitude", sortable: false },
          { text: "경도", align: "center", value: "longitude", sortable: false},
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
      dialogApproval(val) {
        val || this.closeApproval();
      },
    },
  
    created() {
      this.initialize();
    },
  
    methods: {
      initialize() {
        try {
          let token = this.$cookies.get("token");
          let axiosConfig = {
            headers: {
              "Authorization": "Bearer " + token
            }
          };
  
          let self = this;
          axios.get("/api/businessStatus/getList", axiosConfig).then((response) => {
            this.tabledata = response.data;
  
            for(const item in this.tabledata){
              switch (this.tabledata[item].category) {
                case "1" :
                  this.tabledata[item].categoryName = "일반건물";
                  break;
                case "2" :
                  this.tabledata[item].categoryName = "점포";
                  break;
                case "3" :
                  this.tabledata[item].categoryName = "공동주택";
                  break;
                case "4" :
                  this.tabledata[item].categoryName = "단독주택";
                  break;
              }
  
              this.tabledata[item].addr = "(" + this.tabledata[item].zipcode + ") " + this.tabledata[item].addr1 + " " + this.tabledata[item].addr2;
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
        this.sunLightVisible = this.editedItem.sunLight === "유" ? true : false;
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
          axios.post("/api/businessStatus/remove", formData).then((response) => {
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
  
      closeApproval() {
        this.dialogApproval = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
  
      save() {
        switch (this.editedItem.categoryName) {
          case "일반건물" :
            this.editedItem.category = "1";
            break;
          case "점포" :
            this.editedItem.category = "2";
            break;
          case "공동주택" :
            this.editedItem.category = "3";
            break;
          case "단독주택" :
            this.editedItem.category = "4";
            break;
        }
  
  
        const formData = new FormData();
        formData.append("category", this.editedItem.category);
        formData.append("name", this.editedItem.name);
        formData.append("builtDate", this.editedItem.builtDate);
        formData.append("units", this.editedItem.units);
        formData.append("zipcode", this.editedItem.zipcode);
        formData.append("addr1", this.editedItem.addr1);
        formData.append("addr2", this.editedItem.addr2);
        formData.append("latitude", this.editedItem.latitude);
        formData.append("longitude", this.editedItem.longitude);
        formData.append("id", this.editedItem.id);
  
        if (this.editedIndex > -1) {
          try {
            axios.post("/api/businessStatus/modify", formData).then((response) => {
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
            axios.post("/api/businessStatus/write", formData).then((response) => {
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
  
      statusFilter(value) {
        if(this.filterText === "필터" || value === this.filterText){
          return true;
        } else {
          return false;
        }
      },
  
      newform(){
        this.editedItem.categoryName = "일반건물";
      },
    },
  };
  </script>
  
  <style lang="scss"></style>
  