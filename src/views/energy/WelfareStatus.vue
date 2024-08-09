<template>
  <div class="page-sub h-100">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'사업현황'">
          <template v-slot:TitleDescription>
            <div class="heading-description">
              에너지복지사업 현황을 확인해보세요.
            </div>
          </template>
        </Title>
      </v-container>
    </div>
    <div class="page-bg border-top h-100">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="5">
              <v-card class="card-welfarestatus h-100">
                <v-card-title>
                  <h4>성남시 에너지복지 현황</h4>
                </v-card-title>
                
                <v-card-text class="pt-2"  style="display: none;">
                  <div class="d-flex algin-center">
                    <div class="select-group mr-4" style="max-width: 160px">
                      <v-select
                        v-model="filterText"
                        :items="items"
                        label="구분"
                        solo
                        dense
                        hide-details
                        @change="filterData"
                      ></v-select>
                    </div>
                    <div class="btn-group d-flex align-center col pa-0">
                      <v-text-field
                        v-model="preSearchVal"
                        hide-details
                        solo
                        dense
                        class="mt-0"
                        placeholder="검색어를 입력하세요"
                        @keydown.enter="searchData"
                      ></v-text-field>
                      <v-btn
                        depressed
                        small
                        color="#F0F0F0"
                        @click="searchData"
                      >
                        검색
                      </v-btn>
                    </div>
                  </div>
                  <!-- <v-menu offset-y>
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
                        <v-list-item-title
                          class="cursor-pointer"
                          @click="menuActionClick(item.title)"
                          >{{ item.title }}</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu> -->
                  <!-- <v-text-field
                    v-model="preSearchVal"
                    @input="filterData"
                    prepend-inner-icon="mdi-magnify"
                    label="검색"
                    hide-details
                    solo
                    dense
                    class="mt-0"
                  ></v-text-field> -->
                </v-card-text>
                <v-card-text class="pt-0">
                  <Map ref="mapComponent" @map-ready="onMapReady" />
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="7">
              <v-card class="card-welfarestatus card-welfarestatus-total">
                <v-card-text>
                  <v-row class="align-center py-2 px-0">
                    <v-col cols="6" sm="6" md="3" class="total-item">
                      <div class="name">건물</div>
                      <div class="count">
                        <span>{{ category1Count }}<small>개</small></span>
                      </div>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="6" sm="6" md="3" class="total-item">
                      <div class="name">점포</div>
                      <div class="count">
                        <span>{{ category2Count }}<small>개</small></span>
                      </div>
                    </v-col>
                    <v-divider vertical class="d-sm-none d-md-flex"></v-divider>
                    <v-col cols="6" sm="6" md="3" class="total-item">
                      <div class="name">공동주택</div>
                      <div class="count">
                        <span>{{ category3Count }}<small>개</small></span>
                        <span class="ml-4"
                          >{{ category3SubCount }}<small>세대</small></span
                        >
                      </div>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="6" sm="6" md="3" class="total-item">
                      <div class="name">단독주택</div>
                      <div class="count">
                        <span>{{ category4Count }}<small>세대</small></span>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <v-card class="mt-4 card-welfarestatus card-welfarestatus-table">
                <v-card-title>
                  <h4>{{ tableTitle }}</h4>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="btn-admin-link"
                    outlined
                    color="#6E42C1"
                    small
                    href="https://seongnam-ems.e-smartcity.kr/sign"
                    target="_blank"
                  >
                    관리시스템 바로가기
                    <v-icon right> mdi-custom mdi-open-in-new </v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <Tables class="welfarestatus-table">
                    <!-- <template v-slot:TableTitle>{{ tableTitle }} </template> -->
                    <template v-slot:TableData>
                      <v-data-table
                        :headers="headers"
                        :items="filteredData"
                        :search="searchVal"
                        :page.sync="page"
                        :items-per-page="itemsPerPage"
                        hide-default-footer
                        item-key="id"
                        @page-count="pageCount = $event"
                        @click:row="onRowClick"
                        height="542px"
                        mobile-breakpoint="0"
                      >
                        <template v-slot:top>
                          <v-row no-gutters class="table-toolbar align-end">
                            <v-col cols="12" sm="12" md="3">
                              <div class="select-group d-flex flex-column">
                                <div class="select-label">구분</div>
                                <v-select
                                  v-model="filterText"
                                  :items="items"
                                  label="구분"
                                  solo
                                  dense
                                  hide-details
                                  @change="filterData"
                                ></v-select>
                              </div>
                              <!-- <v-menu offset-y>
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                      color="white"
                                      v-bind="attrs"
                                      v-on="on"
                                    >
                                      {{ filterText }}
                                      <v-icon right> mdi-tune </v-icon>
                                    </v-btn>
                                  </template>
                                  <v-list dense>
                                    <v-list-item
                                      v-for="(item, index) in filters"
                                      :key="index"
                                    >
                                      <v-list-item-title
                                        class="cursor-pointer"
                                        @click="menuActionClick(item.title)"
                                        >{{ item.title }}
                                      </v-list-item-title>
                                    </v-list-item>
                                  </v-list>
                                </v-menu> -->
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="12" sm="12" md="6">
                              <div class="btn-group d-flex align-center">
                                <v-text-field
                                  v-model="preSearchVal"
                                  hide-details
                                  solo
                                  dense
                                  class="mt-0"
                                  placeholder="건물명 혹은 주소로 검색"
                                  @keydown.enter="searchData"
                                ></v-text-field>
                                <v-btn
                                  depressed
                                  small
                                  color="#F0F0F0"
                                  @click="searchData"
                                >
                                  검색
                                </v-btn>
                              </div>
                            </v-col>
                          </v-row>
                        </template>

                        <template v-slot:no-data> 데이터가 없습니다. </template>
                      </v-data-table>
                    </template>
                    <template v-slot:TableFooterRight>
                      <div class="pagination-group d-flex align-center">
                        <div class="pagination-page d-flex align-center">
                          <span class="pr-2">{{ pageCount }} 페이지 중</span>
                          <v-select
                            solo
                            dense
                            hide-details="auto"
                            style="max-width: 100px"
                            v-model="page"
                            :items="pageList"
                          ></v-select>
                          <span class="pl-2">번째 페이지</span>
                        </div>
                        <v-pagination
                          v-model="page"
                          :length="pageCount"
                        ></v-pagination>
                      </div>
                    </template>
                  </Tables>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Tables from "@/components/Tables.vue";
import Map from "@/components/Map.vue";
import axios from "axios";
// @ is an alias to /src
export default {
  name: "WelfareStatus",
  components: { Title, Tables, Map },
  data: () => ({
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "운영현황",
        disabled: false,
        href: "welfarestatus",
      },
      {
        text: "사업현황",
        disabled: true,
        href: "welfarestatus",
      },
    ],
    items: ["전체", "일반건물", "점포", "공동주택", "단독주택"],
    filters: [
      { title: "전체" },
      { title: "일반건물" },
      { title: "점포" },
      { title: "공동주택" },
      { title: "단독주택" },
    ],
    category: ["일반건물", "점포", "공동주택", "단독주택"],
    toggle_exclusive: undefined,
    searchVal: "",
    preSearchVal: "",
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    perPageValues: [5, 10, 15, 20],
    tabledata: [],
    filteredData: [],
    filterText: "전체",
    mapReady: false,
  }),
  computed: {
    headers() {
      return [
        { text: "번호", align: "center", value: "id", width: "80" , sortable: false },
        {
          text: "구분",
          align: "center",
          value: "categoryName",
          filter: this.categoryFilter,
          width: "100",
          sortable: false 
        },
        { text: "명칭", align: "center", value: "name", sortable: false },
        { text: "주소", align: "center", value: "addr", sortable: false },
        {
          text: "구축일자",
          align: "center",
          value: "builtDate",
          sortable: false ,
        },
      ];
    },
    tableTitle() {
      return this.tabledata.length > 0
        ? `구축목록(총 ${this.filteredData.length}개)`
        : "";
    },
    category1Count() {
      return this.tabledata.length > 0
        ? this.tabledata
            .filter((item) => item.category === "1")
            .length.toLocaleString()
        : "0";
    },
    category2Count() {
      return this.tabledata.length > 0
        ? this.tabledata
            .filter((item) => item.category === "2")
            .length.toLocaleString()
        : "0";
    },
    category3Count() {
      return this.tabledata.length > 0
        ? this.tabledata
            .filter((item) => item.category === "3")
            .length.toLocaleString()
        : "0";
    },
    category3SubCount() {
      return this.tabledata.length > 0
        ? this.tabledata
            .filter((item) => item.category === "3")
            .map((item) => parseFloat(item.units))
            .reduce((sum, units) => sum + units, 0)
            .toLocaleString()
        : "0";
    },
    category4Count() {
      return this.tabledata.length > 0
        ? this.tabledata
            .filter((item) => item.category === "4")
            .length.toLocaleString()
        : "0";
    },
    pageList() {
      return Array.from({ length: this.pageCount }, (_, index) => index + 1);
    },
  },
  created() {
    (this.mapReady = false), this.initialize();
  },
  mounted() {},
  watch: {
    searchVal(newSearch) {
      this.filterData(newSearch);
    },
    filteredData(newVal) {
      try {
        if (this.mapReady) this.$refs.mapComponent.displayMarker(newVal);
      } catch (err) {
        console.log(err);
      }
    },
  },
  methods: {
    initialize() {
      try {
        let token = this.$cookies.get("token");
        let axiosConfig = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        let self = this;
        axios
          .get("/api/businessStatus/getList", axiosConfig)
          .then((response) => {
            this.tabledata = response.data;
            for (const item in this.tabledata) {
              switch (this.tabledata[item].category) {
                case "1":
                  this.tabledata[item].categoryName = "일반건물";
                  break;
                case "2":
                  this.tabledata[item].categoryName = "점포";
                  break;
                case "3":
                  this.tabledata[item].categoryName = "공동주택";
                  break;
                case "4":
                  this.tabledata[item].categoryName = "단독주택";
                  break;
              }
              this.tabledata[item].desc = `
                            <div class="customoverlay" style="">
                                <div class="name">${this.tabledata[item].name}</div>
                            <div class="date">(구축일자: ${this.tabledata[item].builtDate})</div>
                            <div class="address">${this.tabledata[item].addr1}</div>
                        </div>`;
              this.tabledata[item].addr =
                // "(" +
                // this.tabledata[item].zipcode +
                // ") " +
                this.tabledata[item].addr1; //+ " " + this.tabledata[item].addr2;
              this.filteredData = this.tabledata;
              try {
                if (this.mapReady)
                  this.$refs.mapComponent.displayMarker(this.tabledata);
              } catch (err) {
                console.log(err);
              }
            }
          })
          .catch(function (error) {
            if (error.response.status == "403") {
              alert("권한이 없습니다.");
              self.$router.push("/signin");
            }
          });
      } catch (err) {
        console.log(err);
      }
    },
    menuActionClick(action) {
      if (action === "전체") this.filterText = "전체";
      else this.filterText = action;
    },

    categoryFilter(value) {
      if (this.filterText === "전체" || value === this.filterText) {
        return true;
      } else {
        return false;
      }
    },
    onMapReady() {
      this.$refs.mapComponent.displayMarker(this.tabledata);
      this.mapReady = true;
    },

    searchData() {
      this.searchVal = this.preSearchVal;
    },

    filterData() {
      var filteredTabledata = this.tabledata;
      //필터 처리
      if (this.filterText != "전체") {
        filteredTabledata = this.tabledata.filter(
          (item) => item.categoryName === this.filterText
        );
      }
      //검색어 처리
      if (this.searchVal) {
        filteredTabledata = filteredTabledata.filter((item) =>
          this.searchInProperties(item, this.searchVal)
        );
      }
      this.filteredData = filteredTabledata;
    },
    searchInProperties(item, searchTerm) {
      // 검색할 프로퍼티 목록
      const properties = ["name", "addr1"];

      // 속성 값 중 하나라도 검색어를 포함하면 true
      return properties.some(
        (prop) =>
          item[prop] &&
          item[prop].toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    onRowClick(item) {
      try {
        if (this.mapReady) this.$refs.mapComponent.displayCustomOverlay([item]);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
.customoverlay {
  position: relative;
  left: 2px;
  bottom: 40px;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  padding: 16px 56px;
  color: #ffffff;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
}
.customoverlay:after {
  content: "";
  position: absolute;
  margin-left: -10px;
  left: 50%;
  bottom: -10px;
  border-top: 10px solid rgba(0, 0, 0, 0.45);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 0px solid transparent;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
}
.customoverlay .name {
  font-size: 18px;
  font-weight: 600;
}
.customoverlay .date,
.customoverlay .address {
  font-size: 14px;
  font-weight: 400;
}
.customoverlay .date {
  margin-top: 6px;
}
.customoverlay .address {
  margin-top: 10px;
}
</style>
