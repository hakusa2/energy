<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container class="pb-0">
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'마이에너지'">
          <!-- <template v-slot:TitleDescription>
          <div class="heading-description">성남시에너지복지 포털은 에너지복지모델을 통한 서비스를 제공합니다.</div>
        </template> -->
        </Title>
        <v-tabs v-model="tab" class="tab-energy">
          <v-tabs-slider></v-tabs-slider>
          <v-tab> 전기요금 비교 </v-tab>
          <v-tab> 가전 사용량 계산 </v-tab>
        </v-tabs>
      </v-container>
    </div>
    <div class="page-bg border-top h-100">
      <div class="page-container">
        <v-container>
          <v-card class="card-tab" flat>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card class="card-form card-tab-detail" flat>
                  <div class="card-header">
                    <div class="card-left">
                      <div class="card-title">우리집 정보 입력</div>
                      <div class="card-stext">
                        우리집 전기요금 고지서를 확인하여 정보를 입력해보세요.
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-row>
                        <v-col cols="6" sm="6" md="6">
                          <div class="form-group">
                            <v-label>평형</v-label>
                            <div class="d-flex">
                              <v-select
                                outlined
                                solo
                                placeholder="13평 이하"
                                hide-details="auto"
                              ></v-select>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="6" sm="6" md="6">
                          <div class="form-group">
                            <v-label>세대원 수</v-label>
                            <div class="d-flex">
                              <v-select
                                outlined
                                solo
                                placeholder="1명"
                                hide-details="auto"
                              ></v-select>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="12" md="12">
                          <div class="form-group">
                            <v-label>월간 사용량</v-label>
                            <div class="d-flex">
                              <v-select
                                outlined
                                solo
                                placeholder="1월"
                                hide-details="auto"
                                style="max-width: 190px"
                              ></v-select>
                              <v-text-field
                                outlined
                                solo
                                placeholder="0,000 "
                                class="ml-2"
                                hide-details="auto"
                                suffix="kWh"
                              ></v-text-field>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <div class="form-group">
                            <v-label class="mb-3">태양광</v-label>
                            <v-radio-group
                              v-model="row"
                              row
                              class="pt-0 mt-1"
                              hide-details="auto"
                            >
                              <v-radio
                                label="유"
                                color="black"
                                value="radio-1"
                              ></v-radio>
                              <v-radio
                                label="무"
                                color="black"
                                value="radio-2"
                              ></v-radio>
                            </v-radio-group>
                          </div>
                        </v-col>
                        <v-col cols="12" md="12">
                          <div class="form-group">
                            <v-label>용량</v-label>
                            <v-text-field
                              outlined
                              solo
                              placeholder="0,000 "
                              hide-details="auto"
                              suffix="kWh"
                            ></v-text-field>
                          </div>
                        </v-col>
                      </v-row>
                    </v-form>
                  </div>
                  <v-card-actions class="pa-5">
                    <v-spacer></v-spacer>
                    <v-btn depressed large color="primary">계산하기</v-btn>
                  </v-card-actions>
                </v-card>

                <v-card class="card-form card-tab-detail mt-10" flat>
                  <div class="card-header">
                    <div class="card-left">
                      <div class="card-title">계산 결과</div>
                      <div class="card-stext">
                        이번 달 우리집과 동일 평형 세대의 사용량 및 요금을
                        비교해보세요.
                      </div>
                    </div>
                  </div>
                  <div class="card-body pb-3">
                    <div class="sub-myenergy-result">
                      <div class="energy-image d-none d-sm-flex">
                        <v-img
                          src="@/assets/icon_circle_lightning.png"
                          max-width="48"
                          contain
                        ></v-img>
                      </div>
                      <v-row class="w-100">
                        <v-col cols="12" sm="12" md="6">
                          <div class="result-stitle primary--text">
                            <span classs="mr-2">우리집</span> 이번달
                            사용량(발전량)/요금
                          </div>
                          <v-row class="w-100">
                            <v-col>
                              <div class="result-value">
                                0,000<small>(000)</small>
                                <span class="unit">kWh</span>
                              </div>
                            </v-col>
                            <v-col>
                              <div class="result-value">
                                0,000 <span class="unit">원</span>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <div class="result-stitle">
                            <span classs="mr-2">동일 평형</span>
                            이번달 평균 사용량/요금
                          </div>
                          <v-row class="w-100">
                            <v-col>
                              <div class="result-value">
                                0,000 <span class="unit">kWh</span>
                              </div>
                            </v-col>
                            <v-col>
                              <div class="result-value">
                                0,000 <span class="unit">원</span>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card class="card-form card-tab-detail detail-house" flat>
                  <div class="card-header">
                    <div class="card-title">우리집 가전 목록</div>
                    <div class="card-chip">
                      <ul>
                        <li>
                          <v-chip color="primary"> TV </v-chip>
                        </li>
                        <li>
                          <v-chip color="primary"> 전자레인지 </v-chip>
                        </li>
                        <li>
                          <v-chip color="primary"> 컴퓨터 </v-chip>
                        </li>
                        <li>
                          <v-chip color="primary"> 인터넷전화기 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 프린터 </v-chip>
                        </li>
                        <li>
                          <v-chip color="primary"> 에어컨 </v-chip>
                        </li>
                        <li>
                          <v-chip color="primary"> 냉장고 </v-chip>
                        </li>
                        <li>
                          <v-chip color="primary"> 청소기 </v-chip>
                        </li>
                        <li>
                          <v-chip color="primary"> 세탁기 </v-chip>
                        </li>
                        <li>
                          <v-chip color="#FF7E12" text-color="white">
                            태양광
                          </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 전기밥솥 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 셋톱박스 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 선풍기 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 전기장판 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 보일러 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 공기청정기 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 가습기 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 로봇청소기 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 식기세척기 </v-chip>
                        </li>
                        <li>
                          <v-chip outlined color="#bfbfbf"> 건조기 </v-chip>
                        </li>
                        <li>
                          <v-dialog v-model="dialog" scrollable width="550">
                            <template v-slot:activator="{ on, attrs }">
                              <v-chip
                                outlined
                                color="#bfbfbf"
                                v-bind="attrs"
                                v-on="on"
                              >
                                가전 추가 +
                              </v-chip>
                            </template>
                            <v-card class="card-dialog">
                              <div class="dialog-header">
                                <v-btn
                                  icon
                                  color="black"
                                  class="dialog-close"
                                  @click="close"
                                >
                                  <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-card-title class="dialog-title">
                                  가전 추가
                                </v-card-title>
                              </div>
                              <v-card-text class="dialog-body px-10">
                                <v-form
                                  ref="form"
                                  v-model="valid"
                                  lazy-validation
                                >
                                  <v-row>
                                    <v-col cols="12" md="12">
                                      <div class="form-group">
                                        <v-label
                                          >추가하려는 가전의 이름을
                                          입력해주세요.</v-label
                                        >
                                        <v-text-field
                                          outlined
                                          solo
                                          placeholder="안락의자"
                                          hide-details="auto"
                                        ></v-text-field>
                                      </div>
                                    </v-col>
                                  </v-row>
                                </v-form>
                              </v-card-text>

                              <v-card-actions class="pa-5">
                                <v-spacer></v-spacer>
                                <v-btn outlined color="secondary">취소</v-btn>
                                <v-btn depressed color="primary" class="ml-4"
                                  >확인</v-btn
                                >
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body pb-0">
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <div class="house-item-list">
                        <div class="house-item">
                          <div class="item-title">TV</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B"> TV 추가 + </v-btn>
                        </div>
                        <div class="house-item">
                          <div class="item-title">전자레인지</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                            <v-row class="mt-6">
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B">
                            전자레인지 추가 +
                          </v-btn>
                        </div>
                        <div class="house-item">
                          <div class="item-title">컴퓨터</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B">
                            컴퓨터 추가 +
                          </v-btn>
                        </div>
                        <div class="house-item">
                          <div class="item-title">인터넷전화기</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B">
                            인터넷전화기 추가 +
                          </v-btn>
                        </div>
                        <div class="house-item">
                          <div class="item-title">에어컨</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B">
                            에어컨 추가 +
                          </v-btn>
                        </div>
                        <div class="house-item">
                          <div class="item-title">냉장고</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B">
                            냉장고 추가 +
                          </v-btn>
                        </div>
                        <div class="house-item">
                          <div class="item-title">청소기</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B">
                            청소기 추가 +
                          </v-btn>
                        </div>
                        <div class="house-item">
                          <div class="item-title">세탁기</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>일 평균 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24 "
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>가전 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="240"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 시간</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="시간"
                                  ></v-text-field>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12" md="6">
                                <div class="form-group">
                                  <v-label>목표 절감 사용 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="0,000 "
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B">
                            세탁기 추가 +
                          </v-btn>
                        </div>
                        <div class="house-item">
                          <div class="item-title">태양광</div>
                          <div class="item-form">
                            <v-row>
                              <v-col cols="12" sm="12" md="12">
                                <div class="form-group">
                                  <v-label>태양광 용량</v-label>
                                  <v-text-field
                                    outlined
                                    solo
                                    placeholder="24"
                                    hide-details="auto"
                                    suffix="kW"
                                  ></v-text-field>
                                </div>
                              </v-col>
                            </v-row>
                          </div>
                        </div>
                        <!--/.house-item-->
                        <div class="house-item-add">
                          <v-btn text small color="#7C828B">
                            태양광 추가 +
                          </v-btn>
                        </div>
                      </div>
                    </v-form>
                  </div>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn depressed large color="primary">계산하기</v-btn>
                  </v-card-actions>
                </v-card>

                <v-card class="card-form card-tab-detail mt-10" flat>
                  <div class="card-header">
                    <div class="card-left">
                      <div class="card-title">계산 결과</div>
                      <div class="card-stext">
                        목표 절감 사용 시간을 적용한 한달 간 전기 사용량과 전기
                        요금을 확인해보세요.
                      </div>
                    </div>
                  </div>
                  <div class="card-body pb-3">
                    <div class="sub-myenergy-result">
                      <div class="energy-image d-none d-sm-flex">
                        <v-img
                          src="@/assets/icon_circle_lightning.png"
                          max-width="48"
                          contain
                        ></v-img>
                      </div>
                      <v-row class="w-100">
                        <v-col cols="12" sm="12" md="6">
                          <div class="result-stitle primary--text">
                            한달 전기 사용량
                          </div>
                          <v-row class="w-100">
                            <v-col>
                              <div class="result-value">
                                0,000
                                <span class="unit">kWh</span>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <div class="result-stitle">한달 전기 요금</div>
                          <v-row class="w-100">
                            <v-col>
                              <div class="result-value">
                                0,000 <span class="unit">원</span>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "MyEnergy",
  components: {
    Title,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "마이에너지",
        disabled: true,
        href: "myenergy",
      },
    ],
    tab: null,
    row: "radio-1",
    selectitems1: ["naver.com", "gmail.com"],
    selectitems2: ["070", "010"],
    dialog: false,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "이름을 입력해주세요",
      (v) => (v && v.length <= 10) || "숫자 및 특수문자는 입력할 수 없어요.",
    ],
    mobile: "",
    mobileRules: [
      (v) => !!v || "휴대폰 번호를 입력해주세요",
      (v) => /.+@.+\..+/.test(v) || "잘못된 휴대폰 번호 양식이에요.",
    ],
    mobile1: "",
    mobileRules1: [
      (v) => !!v || "인증번호를 입력해주세요",
      (v) => /.+@.+\..+/.test(v) || "인증번호를 다시 확인해주세요.",
    ],
    address: "",
    addressRules: [
      (v) => !!v || "주소를 입력해주세요",
      (v) => /.+@.+\..+/.test(v) || "주소를 다시 확인해주세요.",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss"></style>
