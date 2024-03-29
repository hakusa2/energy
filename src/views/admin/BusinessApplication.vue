<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 사업신청관리 </template>
        <template v-slot:TableBtn>
          신청가능여부
          <v-dialog v-model="dialogApproval" max-width="500px">
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
            <v-card class="admin-dialog">
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
                      <v-btn-toggle v-model="buildingValue" mandatory dense>
                        <v-btn> 신청가능 </v-btn>
                        <v-btn> 신청불가 </v-btn>
                      </v-btn-toggle>
                    </v-col>
                    <v-col cols="6" class="text-damin-label text-right">
                      점포형 에너지비용절감 사업
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <v-btn-toggle v-model="shopValue" mandatory dense>
                        <v-btn> 신청가능 </v-btn>
                        <v-btn> 신청불가 </v-btn>
                      </v-btn-toggle>
                    </v-col>
                    <v-col cols="6" class="text-damin-label text-right">
                      공동주택형 에너지서비스 사업
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <v-btn-toggle v-model="apartmentValue" mandatory dense>
                        <v-btn> 신청가능 </v-btn>
                        <v-btn> 신청불가 </v-btn>
                      </v-btn-toggle>
                    </v-col>
                    <v-col cols="6" class="text-damin-label text-right">
                      단독주택형 에너지서비스 사업
                    </v-col>
                    <v-col cols="6" class="text-right">
                      <v-btn-toggle v-model="detachedValue" mandatory dense>
                        <v-btn> 신청가능 </v-btn>
                        <v-btn> 신청불가 </v-btn>
                      </v-btn-toggle>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="closeApproval"> 취소 </v-btn>
                <v-btn text color="primary" @click="saveApproval"> 확인 </v-btn>
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

          <v-btn depressed color="primary" class="ml-2"> 엑셀다운로드 </v-btn>
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
                        v-model="editedItem.statusName"
                        :items="statuses"
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
                            v-model="editedItem.createdAt"
                            label="신청일자"
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
                      <v-select
                        v-model="editedItem.btypeName"
                        :items="types"
                        label="사업종류"
                        hide-details="auto"
                      ></v-select>
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
                        v-model="editedItem.mobile"
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
                      <v-select label="태양광"
                      v-model="editedItem.sunLight"
                      :items="sunLights"
                      @change="sunLightChnge"
                      hide-details="auto"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" v-if="sunLightVisible">
                      <v-select label="모델명"
                      v-model="editedItem.modelName"
                      :items="models"
                      hide-details="auto"></v-select>
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
  name: "BusinessApplication",
  components: { Tables },
  data: () => ({
    filters: [
      { title: "전체" },
      { title: "신청완료" },
      { title: "심사중" },
      { title: "선정" },
      { title: "미선정" },
    ],
    statuses: ["신청완료", "심사중", "선정", "미선정"],
    types: ["건물형 인프라구축 사업", "점포형 에너지비용절감 사업", "공동주택형 에너지서비스 사업", "단독주택형 에너지서비스 사업"],
    sunLights: ["유", "무"],
    models: ["model1", "model2"],
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
    filterText: "필터",
    buildingValue: 0,
    shopValue: 0,
    apartmentValue: 0,
    detachedValue: 0,
    sunLightVisible: false,
  }),

  computed: {
    headers() {
      return [
        { text: "순번", align: "center", value: "id", sortable: false },
        { text: "신청일자", align: "center", value: "createdAt" },
        { text: "사업종류", align: "center", value: "btypeName" },
        { text: "이름", align: "center", value: "name", sortable: false },
        { text: "생년월일", align: "center", value: "birth", sortable: false },
        { text: "연락처", align: "center", value: "mobile", sortable: false },
        { text: "이메일", align: "center", value: "email", sortable: false },
        { text: "신청주소", value: "addr", sortable: false },
        { text: "상태", align: "center", value: "statusName", sortable: false, filter:this.statusFilter},
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
        axios.get("/api/business/getList", axiosConfig).then((response) => {
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

            switch (this.tabledata[item].status) {
              case "1" :
                this.tabledata[item].statusName = "신청완료";
                break;
              case "2" :
                this.tabledata[item].statusName = "심사중";
                break;
              case "3" :
                this.tabledata[item].statusName = "선정";
                break;
              case "4" :
                this.tabledata[item].statusName = "미선정";
                break;
            }

            this.tabledata[item].sunLight = this.tabledata[item].sunLightYn === "Y" ? "유" : "무";
          }
        }).catch(function (error) {
          if(error.response.status == "403"){
            alert("권한이 없습니다.");
            self.$router.push("/signin");
          }
        });

        axios.get("/api/etc/getApproval").then((response) => {
          this.buildingValue = response.data.building === "Y" ? 0 : 1;
          this.shopValue = response.data.shop === "Y" ? 0 : 1;
          this.apartmentValue = response.data.apartment === "Y" ? 0 : 1;
          this.detachedValue = response.data.detached === "Y" ? 0 : 1;
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
        axios.post("/api/business/remove", formData).then((response) => {
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

      switch (this.editedItem.statusName) {
        case "신청완료" :
          this.editedItem.status = "1";
          break;
        case "심사중" :
          this.editedItem.status = "2";
          break;
        case "선정" :
          this.editedItem.status = "3";
          break;
        case "미선정" :
          this.editedItem.status = "4";
          break;
      }

      this.editedItem.sunLightYn = this.editedItem.sunLight === "유" ? "Y" : "N";

      const formData = new FormData();
      formData.append("bType", this.editedItem.btype);
      formData.append("status", this.editedItem.status);
      formData.append("name", this.editedItem.name);
      formData.append("birth", this.editedItem.birth);
      formData.append("mobile", this.editedItem.mobile);
      formData.append("phone", "");
      formData.append("zipcode", "");
      formData.append("email", this.editedItem.email);
      formData.append("addr1", this.editedItem.addr1);
      formData.append("addr2", this.editedItem.addr2);
      formData.append("sunLightYn", this.editedItem.sunLightYn);
      formData.append("modelName", this.editedItem.modelName);
      formData.append("remoteYn", "N");
      formData.append("id", this.editedItem.id);

      if (this.editedIndex > -1) {
        try {
          axios.post("/api/business/modify", formData).then((response) => {
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
          axios.post("/api/business/write", formData).then((response) => {
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

    sunLightChnge(){
      this.sunLightVisible = this.editedItem.sunLight === "유" ? true : false;
    },

    newform(){
      this.editedItem.statusName = "신청완료";
      this.editedItem.btypeName = "건물형 인프라구축 사업";
      this.editedItem.sunLight = "유";
      this.editedItem.modelName = "model1";
      this.sunLightVisible = true;
    },

    saveApproval(){
      const formData = new FormData();
      formData.append("code1", "building");
      formData.append("data1", this.buildingValue === 0 ? "Y" : "N");
      formData.append("code2", "shop");
      formData.append("data2", this.shopValue === 0 ? "Y" : "N");
      formData.append("code3", "apartment");
      formData.append("data3", this.apartmentValue === 0 ? "Y" : "N");
      formData.append("code4", "detached");
      formData.append("data4", this.detachedValue === 0 ? "Y" : "N");

      try {
        axios.post("/api/etc/modifyApproval", formData).then((response) => {
          if (response.data.code == 0) {
            this.closeApproval();
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
