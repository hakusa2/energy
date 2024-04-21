<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </div>
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col>
              <v-card class="card-form border" flat>
                <div class="card-header">
                  <div class="card-left">
                    <div class="card-title">{{ businessdata.btypeName }}</div>
                    <div class="card-date">
                      신청일시: {{ businessdata.createdAt }}
                    </div>
                  </div>
                  <div class="card-label">
                    <v-chip large class="chip-color1" color="#F2F3F3">{{
                      businessdata.statusName
                    }}</v-chip>
                  </div>
                </div>
                <div class="card-body">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12">
                        <div class="form-group">
                          <v-label class="mb-6">신청유형</v-label>
                          <v-radio-group
                            v-model="businessdata.stype"
                            row
                            class="pt-0 mt-1"
                            disabled
                            hide-details="auto"
                          >
                            <v-radio
                              color="black"
                              label="세대"
                              value="1"
                            ></v-radio>
                            <v-radio
                              color="black"
                              label="단지"
                              value="2"
                            ></v-radio>
                          </v-radio-group>
                        </div>
                      </v-col>
                      <v-col cols="12" md="12">
                        <div class="form-group">
                          <v-label>이름</v-label>
                          <v-text-field
                            outlined
                            solo
                            :value="businessdata.name"
                            disabled
                            hide-details="auto"
                          ></v-text-field>
                        </div>
                      </v-col>
                      <v-col cols="12" md="12">
                        <div class="form-group">
                          <v-label>휴대폰</v-label>
                          <v-text-field
                            outlined
                            solo
                            :value="businessdata.mobile"
                            disabled
                            hide-details="auto"
                          ></v-text-field>
                        </div>
                      </v-col>
                      <v-col cols="12" md="12">
                        <div class="form-group">
                          <v-label>이메일</v-label>
                          <div class="d-flex">
                            <div style="width: calc(100% - 6px)">
                              <v-text-field
                                outlined
                                solo
                                :value="businessdata.email1"
                                disabled
                                hide-details="auto"
                              ></v-text-field>
                            </div>
                            <div class="pt-3 px-3">@</div>
                            <div style="width: calc(100% - 6px)">
                              <v-text-field
                                outlined
                                solo
                                :value="businessdata.email2"
                                disabled
                                hide-details="auto"
                              ></v-text-field>
                            </div>
                          </div>
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div class="form-group">
                          <v-label>신청주소</v-label>
                          <v-row>
                            <v-col cols="12" md="12" class="pb-2">
                              <v-text-field
                                outlined
                                solo
                                :value="businessdata.addr1"
                                disabled
                                hide-details="auto"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" class="py-0">
                              <v-text-field
                                outlined
                                solo
                                :value="businessdata.addr2"
                                disabled
                                hide-details="auto"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </div>
                      </v-col>
                    </v-row>
                  </v-form>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-right">
              <v-btn
                outlined
                large
                class="btn-outline-solid btn-secondary"
                @click="back"
              >
                뒤로
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "ApplyCheckForm",
  components: {},
  data: () => ({
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "세부사업내용",
        disabled: false,
        href: "welfaremodel",
      },
      {
        text: "신청이력조회",
        disabled: false,
        href: "applycheck",
      },
      {
        text: "신청이력확인",
        disabled: true,
        href: "applycheckform",
      },
    ],
    businessdata: {
      bType: "",
      btypeName: "",
      status: "",
      statusName: "",
      name: "",
      birth: "",
      mobile: "",
      phone: "",
      email: "",
      zipcode: "",
      addr1: "",
      addr2: "",
      sunLightYn: "",
      modelName: "",
      remoteYn: "",
      createdAt: "",
    },
  }),
  created() {
    this.init();
    //alert(this.$route.query.id);
    //oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
  },
  methods: {
    init() {
      try {
        axios
          .get("/api/business/getConfirm?id=" + this.$route.params.id)
          .then((response) => {
            this.businessdata = response.data;
          });
      } catch (err) {
        console.log(err);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss"></style>
