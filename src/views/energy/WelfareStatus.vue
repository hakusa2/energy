<template>
  <div class="page-sub h-100">
    <div class="page-bg h-100">
      <div class="page-container d-flex align-center h-100">
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-card >
                <v-row no-gutters class="table-toolbar">
                  <v-col cols="auto">
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
                          <v-list-item-title class="cursor-pointer" @click="menuActionClick(item.title)">{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                  <v-col cols="auto">
                    <v-text-field
                      v-model="search"
                      @input="handleSearch"
                      prepend-inner-icon="mdi-magnify"
                      label="검색"
                      hide-details
                      solo
                      dense
                      class="mt-0"
                    ></v-text-field>
                  </v-col>
                </v-row>  
                <v-card flat>
                  <Map ref="mapComponent"  @map-ready="onMapReady" />
                </v-card>
              </v-card>
            </v-col>

            <v-col cols="12" md="5">
              <v-row>
                <v-col cols="12" md="12">
                  <v-card>
                    <v-card-title>컨텐츠 2</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="12" md="12">
                  <v-card flat class="card-form mt-10" >
                      <Tables>
                        <template v-slot:TableTitle> {{tableTitle}} </template>
                        <template v-slot:TableData>
                          <v-data-table
                            :headers="headers"
                            :items="tabledata"
                            :search="search"
                            :page.sync="page"
                            :items-per-page="itemsPerPage"
                            hide-default-footer
                            item-key="id"
                            @page-count="pageCount = $event"
                          >
                            <template v-slot:top>
                              <v-row no-gutters class="table-toolbar">
                                <v-col cols="auto">
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
                                <v-col cols="auto">
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
                              </v-row>
                            </template>
                
                            <template v-slot:no-data> 데이터가 없습니다. </template>
                          </v-data-table>
                        </template>
                        <template v-slot:TableFooterRight>
                          <v-pagination v-model="page" :length="pageCount" total-visible="9"></v-pagination>
                        </template>
                      </Tables>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>



      </div>
    </div>
  </div>
</template>

<script>
import Tables from "@/components/Tables.vue";
import Map from '@/components/Map.vue'
import axios from "axios";
// @ is an alias to /src
export default {
  name: "WelfareStatus",
  components: { Tables, Map },
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
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      tabledata: [],
      filteredData: [], 
      filterText: "필터",
      mapReady:false,
  }),
  computed: {
    headers() {
      return [
        { text: "번호", align: "center", value: "id"},
        { text: "구분", align: "center", value: "categoryName" , filter:this.categoryFilter},
        { text: "명칭", align: "center", value: "name", sortable: false },
        { text: "주소", align: "center", value: "addr" },
        { text: "구축일자", align: "center", value: "builtDate" },
      ]
    },
    tableTitle() {
      return this.tabledata.length> 0 ? `구축목록(총 ${this.tabledata.length}개)` : "";
    },
  },
  created() {
    this.mapReady=false,
    this.initialize();
  },
  mounted() {
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
          console.log(response.data)
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
            this.tabledata[item].desc=this.tabledata[item].name;
            this.tabledata[item].addr = "(" + this.tabledata[item].zipcode + ") " + this.tabledata[item].addr1 ;//+ " " + this.tabledata[item].addr2;
            
            try {
              if(this.mapReady)
                this.$refs.mapComponent.displayMarker(this.tabledata);
            } catch (err) {
              console.log(err);
            }

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
    menuActionClick(action) {
      if(action === "전체")
        this.filterText = "필터";
      else
        this.filterText = action;
    },
  
    categoryFilter(value) {
      if(this.filterText === "필터" || value === this.filterText){
        return true;
      } else {
        return false;
      }
    },
    onMapReady() {
      this.$refs.mapComponent.displayMarker(this.tabledata);
      this.mapReady=true;
    },
    handleSearch() {
      // 검색어를 기반으로 데이터를 필터링
      this.filteredData = this.filterData(this.search);
      console.log(this.filteredData)
      try {
        if(this.mapReady)
          this.$refs.mapComponent.displayMarker(this.filteredData);
      } catch (err) {
        console.log(err);
      }
    },
    filterData(searchTerm) {
      if (!searchTerm) {
        return this.tabledata; // 검색어가 없으면 원본 데이터를 반환
      }
      return this.tabledata.filter(item => 
        this.searchInProperties(item, searchTerm)
      );
    },
    searchInProperties(item, searchTerm) {
      // 검색할 프로퍼티 목록
      const properties = ['name', 'addr1', 'categoryName'];

      // 속성 값 중 하나라도 검색어를 포함하면 true
      return properties.some(prop => 
        item[prop] && item[prop].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

};
</script>

<style lang="scss"></style>
