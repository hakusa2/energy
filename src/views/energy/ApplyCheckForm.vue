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
              <v-card class="card-form" flat>
                <div class="card-header">
                  <div class="card-left">
                    <div class="card-title">공동주택형 에너지서비스 사업</div>
                    <div class="card-date">신청일시: 2023.12.18 17:44</div>
                  </div>
                  <div class="card-label">
                    <v-chip class="chip-color1" color="#F2F3F3">검토중</v-chip>
                  </div>
                </div>
                <div class="card-body">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12">
                        <div class="form-group">
                          <v-label>신청유형</v-label>
                          <v-radio-group
                            v-model="row"
                            row
                            class="pt-0 mt-1"
                            readonly
                            hide-details="auto"
                          >
                            <v-radio label="세대" value="radio-1"></v-radio>
                            <v-radio label="단지" value="radio-2"></v-radio>
                          </v-radio-group>
                        </div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <div class="form-group">
                          <v-label>이름</v-label>
                          <v-text-field
                            dense
                            outlined
                            solo
                            value="홍길동"
                            readonly
                            hide-details="auto"
                          ></v-text-field>
                        </div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <div class="form-group">
                          <v-label>휴대폰</v-label>
                          <v-text-field
                            dense
                            outlined
                            solo
                            value="010 0000 0000"
                            readonly
                            hide-details="auto"
                          ></v-text-field>
                        </div>
                      </v-col>
                      <v-col cols="12" md="12">
                        <div class="form-group">
                          <v-label>이메일</v-label>
                          <div class="d-flex">
                            <v-text-field
                              dense
                              outlined
                              solo
                              value="example"
                              readonly
                              hide-details="auto"
                            ></v-text-field>
                            <div class="pt-2 px-2">@</div>
                            <v-text-field
                              dense
                              outlined
                              solo
                              value="example.com"
                              readonly
                              hide-details="auto"
                            ></v-text-field>
                          </div>
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div class="form-group">
                          <v-label>신청주소</v-label>
                          <v-row>
                            <v-col cols="12" md="12" class="pb-2">
                              <v-text-field
                                dense
                                outlined
                                solo
                                value="경기 성남시 수정구 수정로 319"
                                readonly
                                hide-details="auto"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" class="py-0">
                              <v-text-field
                                dense
                                outlined
                                solo
                                value="0000동 0000호"
                                readonly
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
              <v-btn outlined class="btn-outline-solid btn-secondary" to="main">
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
    row: "radio-1",
  }),
};
</script>

<style lang="scss"></style>
