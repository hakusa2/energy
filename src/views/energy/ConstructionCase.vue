<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'구축사례'">
          <template v-slot:TitleDescription>
            <div class="heading-description">
              에너지복지사업에 구축사례들을 확인해보세요.
            </div>
          </template>
        </Title>
      </v-container>
    </div>
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col cols="auto">
              <h3 class="text-body1">건물형 인프라구축 사업</h3>
            </v-col>
            <v-col cols="auto" class="ml-auto">
              <div class="list-control">
                <div class="carousel-count">
                  <span>{{ buildingpage }}</span
                  >/{{ buildingtotal }}
                </div>
                <v-btn
                  icon
                  color="black"
                  v-bind:disabled="buildingpage === 1"
                  @click="prevBuilding"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  icon
                  color="black"
                  v-bind:disabled="buildingpage === buildingtotal"
                  @click="nextBuilding"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row class="flex-nowrap overflow-hidden">
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="(item, index) in buildingdata"
              :key="index"
            >
              <v-dialog v-model="item.visible" scrollable width="1520">
                <template v-slot:activator="{ on, attrs }">
                  <div class="model-case-group" v-bind="attrs" v-on="on">
                    <div class="item-image">
                      <v-img
                        :src="item.imageUrl"
                        height="300"
                      ></v-img>
                    </div>
                    <div class="item-chip">
                      <v-chip small outlined v-if="item.tagYn1 === 'Y'">
                        PV
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn2 === 'Y'">
                        ESS
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn3 === 'Y'">
                        EV
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn4 === 'Y'">
                        DR
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn5 === 'Y'">
                        에너지서비스
                      </v-chip>
                    </div>
                    <div class="item-title">
                      {{ item.groupName }} <v-icon>mdi-chevron-right</v-icon>
                    </div>
                    <div class="item-address">
                      {{ item.addr1 }}&nbsp;{{ item.addr2 }}
                    </div>
                  </div>
                </template>
                <v-card class="card-dialog">
                  <div class="dialog-header">
                    <v-btn
                      icon
                      color="black"
                      class="dialog-close"
                      @click="buildingClose(index)"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-card-title class="dialog-title">
                      {{ item.groupName }}
                    </v-card-title>
                  </div>
                  <v-card-text class="dialog-body">
                    <div class="model-detail-group">
                      <div class="item-image">
                        <v-img
                          :src="item.imageUrl"
                          height="500"
                        ></v-img>
                      </div>
                      <div class="item-group">
                        <div class="item-title mb-5">구축 상세</div>
                        <div class="item-description">
                          <ul class="ul-list list-dot row">
                            <li class="col col-12 col-sm-12 col-md-6">
                              <span class="font-weight-bold">사업개요</span>
                              <ul class="ul-list list-dash py-2">
                                <li
                                  v-for="(c, index) in item.businessSummaryList"
                                  :key="`item-${index}`"
                                >
                                  {{ c }}
                                </li>
                              </ul>
                            </li>
                            <li class="col col-12 col-sm-12 col-md-6">
                              <span class="font-weight-bold">패키지 구성</span>
                              <ul class="ul-list list-dash py-2">
                                <li
                                  v-for="(c, index) in item.packageComposeList"
                                  :key="`item-${index}`"
                                >
                                  {{ c }}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div class="page-container py-5">
      <v-container>
        <v-row>
          <v-col cols="auto">
            <h3 class="text-body1">점포형 에너지비용절감 사업</h3>
          </v-col>
          <v-col cols="auto" class="ml-auto">
            <div class="list-control">
              <div class="carousel-count">
                <span>{{ shoppage }}</span
                >/{{ shoptotal }}
              </div>
              <v-btn
                icon
                color="black"
                v-bind:disabled="shoppage === 1"
                @click="prevShop"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                icon
                color="black"
                v-bind:disabled="shoppage === shoptotal"
                @click="nextShop"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row class="flex-nowrap overflow-hidden">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, index) in shopdata"
            :key="index"
          >
            <v-dialog v-model="item.visible" scrollable width="1520">
              <template v-slot:activator="{ on, attrs }">
                <div class="model-case-group" v-bind="attrs" v-on="on">
                  <div class="item-image">
                    <v-img
                      :src="item.imageUrl"
                      height="300"
                    ></v-img>
                  </div>
                  <div class="item-chip">
                    <v-chip small outlined v-if="item.tagYn1 === 'Y'">
                      PV
                    </v-chip>
                    <v-chip small outlined v-if="item.tagYn2 === 'Y'">
                      ESS
                    </v-chip>
                    <v-chip small outlined v-if="item.tagYn3 === 'Y'">
                      EV
                    </v-chip>
                    <v-chip small outlined v-if="item.tagYn4 === 'Y'">
                      DR
                    </v-chip>
                    <v-chip small outlined v-if="item.tagYn5 === 'Y'">
                      에너지서비스
                    </v-chip>
                  </div>
                  <div class="item-title">
                    {{ item.groupName }} <v-icon>mdi-chevron-right</v-icon>
                  </div>
                  <div class="item-address">
                    {{ item.addr1 }}&nbsp;{{ item.addr2 }}
                  </div>
                </div>
              </template>
              <v-card class="card-dialog">
                <div class="dialog-header">
                  <v-btn
                    icon
                    color="black"
                    class="dialog-close"
                    @click="shopClose(index)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-card-title class="dialog-title">
                    {{ item.groupName }}
                  </v-card-title>
                </div>
                <v-card-text class="dialog-body">
                  <div class="model-detail-group">
                    <div class="item-image">
                      <v-img
                        :src="item.imageUrl"
                        height="500"
                      ></v-img>
                    </div>
                    <div class="item-group">
                      <div class="item-title mb-5">구축 상세</div>
                      <div class="item-description">
                        <ul class="ul-list list-dot row">
                          <li class="col col-12 col-sm-12 col-md-6">
                            <span class="font-weight-bold">사업개요</span>
                            <ul class="ul-list list-dash py-2">
                              <li
                                v-for="(c, index) in item.businessSummaryList"
                                :key="`item-${index}`"
                              >
                                {{ c }}
                              </li>
                            </ul>
                          </li>
                          <li class="col col-12 col-sm-12 col-md-6">
                            <span class="font-weight-bold">패키지 구성</span>
                            <ul class="ul-list list-dash py-2">
                              <li
                                v-for="(c, index) in item.packageComposeList"
                                :key="`item-${index}`"
                              >
                                {{ c }}
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col cols="auto">
              <h3 class="text-body1">공동주택형 에너지서비스 사업</h3>
            </v-col>
            <v-col cols="auto" class="ml-auto">
              <div class="list-control">
                <div class="carousel-count">
                  <span>{{ apartmentpage }}</span
                  >/{{ apartmenttotal }}
                </div>
                <v-btn
                  icon
                  color="black"
                  v-bind:disabled="apartmentpage === 1"
                  @click="prevApartment"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  icon
                  color="black"
                  v-bind:disabled="apartmentpage === apartmenttotal"
                  @click="nextApartment"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row class="flex-nowrap overflow-hidden">
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="(item, index) in apartmentdata"
              :key="index"
            >
              <v-dialog v-model="item.visible" scrollable width="1520">
                <template v-slot:activator="{ on, attrs }">
                  <div class="model-case-group" v-bind="attrs" v-on="on">
                    <div class="item-image">
                      <v-img
                        :src="item.imageUrl"
                        height="300"
                      ></v-img>
                    </div>
                    <div class="item-chip">
                      <v-chip small outlined v-if="item.tagYn1 === 'Y'">
                        PV
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn2 === 'Y'">
                        ESS
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn3 === 'Y'">
                        EV
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn4 === 'Y'">
                        DR
                      </v-chip>
                      <v-chip small outlined v-if="item.tagYn5 === 'Y'">
                        에너지서비스
                      </v-chip>
                    </div>
                    <div class="item-title">
                      {{ item.groupName }} <v-icon>mdi-chevron-right</v-icon>
                    </div>
                    <div class="item-address">
                      {{ item.addr1 }}&nbsp;{{ item.addr2 }}
                    </div>
                  </div>
                </template>
                <v-card class="card-dialog">
                  <div class="dialog-header">
                    <v-btn
                      icon
                      color="black"
                      class="dialog-close"
                      @click="apartmentClose(index)"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-card-title class="dialog-title">
                      {{ item.groupName }}
                    </v-card-title>
                  </div>
                  <v-card-text class="dialog-body">
                    <div class="model-detail-group">
                      <div class="item-image">
                        <v-img
                          :src="item.imageUrl"
                          height="500"
                        ></v-img>
                      </div>
                      <div class="item-group">
                        <div class="item-title mb-5">구축 상세</div>
                        <div class="item-description">
                          <ul class="ul-list list-dot row">
                            <li class="col col-12 col-sm-12 col-md-6">
                              <span class="font-weight-bold">사업개요</span>
                              <ul class="ul-list list-dash py-2">
                                <li
                                  v-for="(c, index) in item.businessSummaryList"
                                  :key="`item-${index}`"
                                >
                                  {{ c }}
                                </li>
                              </ul>
                            </li>
                            <li class="col col-12 col-sm-12 col-md-6">
                              <span class="font-weight-bold">패키지 구성</span>
                              <ul class="ul-list list-dash py-2">
                                <li
                                  v-for="(c, index) in item.packageComposeList"
                                  :key="`item-${index}`"
                                >
                                  {{ c }}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div class="page-container py-5">
      <v-container>
        <v-row>
          <v-col cols="auto">
            <h3 class="text-body1">단독주택형 에너지서비스 사업</h3>
          </v-col>
          <v-col cols="auto" class="ml-auto">
            <div class="list-control">
              <div class="carousel-count">
                <span>{{ detachedpage }}</span
                >/{{ detachedtotal }}
              </div>
              <v-btn
                icon
                color="black"
                v-bind:disabled="detachedpage === 1"
                @click="prevDetached"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                icon
                color="black"
                v-bind:disabled="detachedpage === detachedtotal"
                @click="nextDetached"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row class="flex-nowrap overflow-hidden">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(item, index) in detacheddata"
            :key="index"
          >
            <v-dialog v-model="item.visible" scrollable width="1520">
              <template v-slot:activator="{ on, attrs }">
                <div class="model-case-group" v-bind="attrs" v-on="on">
                  <div class="item-image">
                    <v-img
                      :src="item.imageUrl"
                      height="300"
                    ></v-img>
                  </div>
                  <div class="item-chip">
                    <v-chip small outlined v-if="item.tagYn1 === 'Y'">
                      PV
                    </v-chip>
                    <v-chip small outlined v-if="item.tagYn2 === 'Y'">
                      ESS
                    </v-chip>
                    <v-chip small outlined v-if="item.tagYn3 === 'Y'">
                      EV
                    </v-chip>
                    <v-chip small outlined v-if="item.tagYn4 === 'Y'">
                      DR
                    </v-chip>
                    <v-chip small outlined v-if="item.tagYn5 === 'Y'">
                      에너지서비스
                    </v-chip>
                  </div>
                  <div class="item-title">
                    {{ item.groupName }} <v-icon>mdi-chevron-right</v-icon>
                  </div>
                  <div class="item-address">
                    {{ item.addr1 }}&nbsp;{{ item.addr2 }}
                  </div>
                </div>
              </template>
              <v-card class="card-dialog">
                <div class="dialog-header">
                  <v-btn
                    icon
                    color="black"
                    class="dialog-close"
                    @click="detachedClose(index)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-card-title class="dialog-title">
                    {{ item.groupName }}
                  </v-card-title>
                </div>
                <v-card-text class="dialog-body">
                  <div class="model-detail-group">
                    <div class="item-image">
                      <v-img
                        :src="item.imageUrl"
                        height="500"
                      ></v-img>
                    </div>
                    <div class="item-group">
                      <div class="item-title mb-5">구축 상세</div>
                      <div class="item-description">
                        <ul class="ul-list list-dot row">
                          <li class="col col-12 col-sm-12 col-md-6">
                            <span class="font-weight-bold">사업개요</span>
                            <ul class="ul-list list-dash py-2">
                              <li
                                v-for="(c, index) in item.businessSummaryList"
                                :key="`item-${index}`"
                              >
                                {{ c }}
                              </li>
                            </ul>
                          </li>
                          <li class="col col-12 col-sm-12 col-md-6">
                            <span class="font-weight-bold">패키지 구성</span>
                            <ul class="ul-list list-dash py-2">
                              <li
                                v-for="(c, index) in item.packageComposeList"
                                :key="`item-${index}`"
                              >
                                {{ c }}
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
//import DialogCase from "@/components/DialogCase.vue";
import axios from "axios";

export default {
  name: "WelfareStatus",
  components: {
    Title,
    //DialogCase,
  },
  data: () => ({
    buildingdata: [],
    shopdata: [],
    apartmentdata: [],
    detacheddata: [],
    buildingpage: 1,
    shoppage: 1,
    apartmentpage: 1,
    detachedpage: 1,
    buildingtotal: 1,
    shoptotal: 1,
    apartmenttotal: 1,
    detachedtotal: 1,
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
        text: "구축사례",
        disabled: true,
        href: "constructioncase",
      },
    ],
  }),
  created() {
    this.init();
  },

  methods: {
    init() {
      this.searchTotalPage();
      this.searchBuilding();
      this.searchShop();
      this.searchApartment();
      this.searchDetached();
    },
    nextBuilding() {
      this.buildingpage++;
      this.searchBuilding();
    },
    prevBuilding() {
      this.buildingpage--;
      this.searchBuilding();
    },
    nextShop() {
      this.shoppage++;
      this.searchShop();
    },
    prevShop() {
      this.shoppage--;
      this.searchShop();
    },
    nextApartment() {
      this.apartmentpage++;
      this.searchApartment();
    },
    prevApartment() {
      this.apartmentpage--;
      this.searchApartment();
    },
    nextDetached() {
      this.detachedpage++;
      this.searchDetached();
    },
    prevDetached() {
      this.detachedpage--;
      this.searchDetached();
    },
    searchBuilding() {
      try {
        axios
          .get("/api/construction/getList?type=1&page=" + this.buildingpage)
          .then((response) => {
            this.buildingdata = response.data;
          });
      } catch (err) {
        console.log(err);
      }
    },
    searchShop() {
      try {
        axios
          .get("/api/construction/getList?type=2&page=" + this.shoppage)
          .then((response) => {
            this.shopdata = response.data;
          });
      } catch (err) {
        console.log(err);
      }
    },
    searchApartment() {
      try {
        axios
          .get("/api/construction/getList?type=3&page=" + this.apartmentpage)
          .then((response) => {
            this.apartmentdata = response.data;
          });
      } catch (err) {
        console.log(err);
      }
    },
    searchDetached() {
      try {
        axios
          .get("/api/construction/getList?type=4&page=" + this.detachedpage)
          .then((response) => {
            this.detacheddata = response.data;
          });
      } catch (err) {
        console.log(err);
      }
    },
    searchTotalPage() {
      try {
        axios.get("/api/construction/getTotal?type=1").then((response) => {
          this.buildingtotal = response.data;
        });
        axios.get("/api/construction/getTotal?type=2").then((response) => {
          this.shoptotal = response.data;
        });
        axios.get("/api/construction/getTotal?type=3").then((response) => {
          this.apartmenttotal = response.data;
        });
        axios.get("/api/construction/getTotal?type=4").then((response) => {
          this.detachedtotal = response.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
    buildingClose(index) {
      this.buildingdata[index].visible = false;
    },
    shopClose(index) {
      this.shopdata[index].visible = false;
    },
    apartmentClose(index) {
      this.apartmentdata[index].visible = false;
    },
    detachedClose(index) {
      this.detacheddata[index].visible = false;
    },
  },
};
</script>

<style lang="scss"></style>
