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
                  <!-- <div class="card-header">
                    <div class="card-left">
                      <div class="card-title">우리집 정보 입력</div>
                      <div class="card-stext">
                        우리집 전기요금 고지서를 확인하여 정보를 입력해보세요.
                      </div>
                    </div>
                  </div> -->
                  <div class="card-body">
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <div class="form-group">
                            <v-label>평형</v-label>
                            <div class="d-flex">
                              <v-select
                                outlined
                                solo
                                v-model="type"
                                :items="types"
                                hide-details="auto"
                              ></v-select>
                            </div>
                          </div>
                        </v-col>
                        <!-- <v-col cols="6" sm="6" md="6">
                          <div class="form-group">
                            <v-label>세대원 수</v-label>
                            <div class="d-flex">
                              <v-select
                                outlined
                                solo
                                v-model="people"
                                :items="peoples"
                                hide-details="auto"
                              ></v-select>
                            </div>
                          </div>
                        </v-col> -->
                        <v-col cols="12" md="12">
                          <div class="form-group">
                            <v-label>
                              월간 사용량
                              <!-- <v-btn @click="show = !show"> toggle </v-btn> -->
                              <v-tooltip bottom v-model="show">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn x-small icon v-bind="attrs" v-on="on">
                                    <v-icon color="grey lighten-1">
                                      mdi-custom mdi-information-outline
                                    </v-icon>
                                  </v-btn>
                                </template>
                                <div class="tooltip-text">
                                  <div class="mb-7">
                                    선택한 월에 따라 누진단계 구간 및 전기요금
                                    계산식이 달라져요.
                                  </div>
                                  <ol class="ol-list fs-12">
                                    <li>
                                      기타계절 (1~6월, 9~12월)
                                      <ul
                                        class="ul-list list-dot list-dot-white"
                                      >
                                        <li>
                                          누진1단계: 200kWh 이하 (기본요금
                                          910원, 단가 120.0원/kWh)
                                        </li>
                                        <li>
                                          누진2단계: 201~400kWh (기본요금
                                          1,600원, 단가 214.6원/kWh)
                                        </li>
                                        <li>
                                          누진3단계: 400kWh 초과 (기본요금
                                          7,300원, 단가 307.3원/kWh)
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      하계 (7월, 8월)
                                      <ul
                                        class="ul-list list-dot list-dot-white"
                                      >
                                        <li>
                                          누진1단계: 300kWh 이하 (기본요금
                                          910원, 단가 120.0원/kWh)
                                        </li>
                                        <li>
                                          누진2단계: 301~450kWh (기본요금
                                          1,600원, 단가 214.6원/kWh)
                                        </li>
                                        <li>
                                          누진3단계: 450kWh 초과 (기본요금
                                          7,300원, 단가 307.3원/kWh)
                                        </li>
                                      </ul>
                                    </li>
                                  </ol>
                                </div>
                              </v-tooltip>
                            </v-label>
                            <div class="d-flex">
                              <v-select
                                outlined
                                solo
                                v-model="month"
                                :items="months"
                                hide-details="auto"
                                style="max-width: 120px"
                              ></v-select>
                              <v-text-field
                                outlined
                                solo
                                v-model="monthuse"
                                placeholder="0,000 "
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                @input="formatMonthUse"
                                class="ml-2"
                                hide-details="auto"
                                suffix="kWh"
                                :rules="rules"
                                required
                              ></v-text-field>
                            </div>
                          </div>
                        </v-col>
                        <v-col cols="12">
                          <div class="form-group border-top-CBCDD1 mt-4 pt-10">
                            <v-label class="mb-3">
                              태양광
                              <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn x-small icon v-bind="attrs" v-on="on">
                                    <v-icon color="grey lighten-1">
                                      mdi-custom mdi-information-outline
                                    </v-icon>
                                  </v-btn>
                                </template>
                                <div class="tooltip-text">
                                  <div class="mb-5">
                                    월간태양광발전량 계산식
                                  </div>
                                  월간태양광발전량 = 태양광용량 x 3.5h x 30일
                                </div>
                              </v-tooltip>
                            </v-label>
                            <v-radio-group
                              v-model="sunLight"
                              @change="sunLightChanged"
                              row
                              class="pt-0 mt-1"
                              hide-details="auto"
                            >
                              <v-radio
                                label="유"
                                color="black"
                                value="Y"
                              ></v-radio>
                              <v-radio
                                label="무"
                                color="black"
                                value="N"
                              ></v-radio>
                            </v-radio-group>
                          </div>
                        </v-col>
                        <v-col cols="12" md="12">
                          <div
                            class="form-group"
                            :class="{ 'form-disabled': sunLightDisabled }"
                          >
                            <!-- 태양광 '무' 선택 시 비활성화 처리 <div class="form-group form-disabled"> -->
                            <v-label>용량</v-label>
                            <div class="d-flex">
                              <v-select
                                outlined
                                solo
                                v-model="unit"
                                :items="units"
                                hide-details="auto"
                                style="max-width: 120px"
                              ></v-select>
                              <v-text-field
                                :disabled="sunLightDisabled"
                                v-model="sunuse"
                                outlined
                                solo
                                placeholder="0,000"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                @input="formatSunUse"
                                hide-details="auto"
                                class="ml-2"
                                :rules="rules"
                                required
                              ></v-text-field>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-form>
                  </div>
                  <v-card-actions class="pa-5">
                    <v-spacer></v-spacer>
                    <v-btn depressed color="primary" @click="cal"
                      >계산하기</v-btn
                    >
                  </v-card-actions>
                </v-card>

                <v-card class="card-form card-tab-detail mt-10" flat>
                  <div class="card-header">
                    <div class="card-left">
                      <div class="card-title">계산 결과</div>
                      <div class="card-stext">
                        우리집과 동일 평형 이웃의 평균 사용량을 비교해보세요.
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
                            <span classs="mr-2">우리집 현황</span>
                          </div>
                          <v-row class="w-100">
                            <v-col>
                              <div class="result-value">
                                {{ monthValue
                                }}<!-- <small>({{ sunValue }})</small> -->
                                <span class="unit">kWh</span>
                              </div>
                              <div class="result-save">
                                태양광으로 00 kWh 절약
                              </div>
                            </v-col>
                            <v-col>
                              <div class="result-value">
                                {{ calPriceValue }} <span class="unit">원</span>
                              </div>
                              <div class="result-save">
                                태양광으로 0,000 원 절약
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <div class="result-stitle">
                            <span>동일 평형 이웃 비교</span>
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  x-small
                                  icon
                                  v-bind="attrs"
                                  v-on="on"
                                  class="ml-1"
                                >
                                  <v-icon color="grey lighten-1">
                                    mdi-custom mdi-information-outline
                                  </v-icon>
                                </v-btn>
                              </template>
                              <div class="tooltip-text">
                                (주)헤리트의 세대형 수요관리서비스, 에챌의
                                운영데이터를 기반으로 <br />약 0000세대의
                                평형대별/월별 평균사용량 분석
                              </div>
                            </v-tooltip>
                          </div>
                          <v-row class="w-100">
                            <v-col>
                              <div class="result-value">
                                {{ sampleUseVaue }}
                                <span class="unit">kWh</span>
                              </div>
                            </v-col>
                            <v-col>
                              <div class="result-value">
                                {{ samplePriceValue }}
                                <span class="unit">원</span>
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
                        <li
                          class="banselect"
                          v-for="(item, index) in elecs"
                          :key="index"
                          @click="elecSelect(item)"
                        >
                          <v-chip v-if="item.line" :color="item.color" outlined>
                            {{ item.name }}
                          </v-chip>
                          <v-chip
                            v-else
                            :color="item.color"
                            :text-color="item.textcolor"
                          >
                            {{ item.name }}
                          </v-chip>
                        </li>
                        <li>
                          <v-dialog v-model="dialogElec" scrollable width="550">
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
                                  @click="closeDialogElec"
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
                                          v-model="addelecText"
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
                                <v-btn
                                  outlined
                                  color="secondary"
                                  @click="closeDialogElec"
                                  >취소</v-btn
                                >
                                <v-btn
                                  depressed
                                  color="primary"
                                  class="ml-4"
                                  @click="addElec"
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
                        <div v-for="(sun, index) in suns" :key="index">
                          <div v-if="sun.visible">
                            <div class="house-item">
                              <div class="item-title color-sunlight">
                                <div class="d-flex align-center">
                                  {{ sun.name }}
                                  <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-btn
                                        x-small
                                        icon
                                        v-bind="attrs"
                                        v-on="on"
                                        class="mt-0 ml-1"
                                      >
                                        <v-icon color="grey lighten-1">
                                          mdi-custom mdi-information-outline
                                        </v-icon>
                                      </v-btn>
                                    </template>
                                    <div class="tooltip-text">
                                      <div class="mb-5">
                                        월간태양광발전량 계산식
                                      </div>
                                      월간태양광발전량 = 태양광용량 x 3.5h x
                                      30일
                                    </div>
                                  </v-tooltip>
                                </div>
                              </div>
                              <div class="item-form">
                                <v-row
                                  v-for="(item, idx) in sun.items"
                                  :key="idx"
                                >
                                  <v-col cols="12" sm="12" md="6">
                                    <div class="form-group">
                                      <v-label>현재 설치 용량</v-label>
                                      <v-row class="gutters-1">
                                        <v-col cols="12" sm="12" md="3">
                                          <v-select
                                            outlined
                                            solo
                                            v-model="unit"
                                            :items="units"
                                            hide-details="auto"
                                          ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="9">
                                          <v-text-field
                                            v-model="item.dayhourval"
                                            outlined
                                            solo
                                            placeholder="240"
                                            hide-details="auto"
                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                            @input="formatDayHour(item)"
                                          ></v-text-field>
                                          <div class="house-item-value">
                                            <div class="label">월간발전량</div>
                                            <div class="value">00</div>
                                            <div class="unit">kWh</div>
                                          </div>
                                        </v-col>
                                      </v-row>
                                    </div>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="6">
                                    <div class="form-group">
                                      <v-label>목표 설치 용량</v-label>
                                      <v-row class="gutters-1">
                                        <v-col cols="12" sm="12" md="3">
                                          <v-select
                                            outlined
                                            solo
                                            v-model="unit"
                                            :items="units"
                                            hide-details="auto"
                                          ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="9">
                                          <v-text-field
                                            v-model="item.dayhourval"
                                            outlined
                                            solo
                                            placeholder="240"
                                            hide-details="auto"
                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                            @input="formatDayHour(item)"
                                          ></v-text-field>
                                          <div class="house-item-value">
                                            <div class="label">월간발전량</div>
                                            <div class="value">00</div>
                                            <div class="unit">kWh</div>
                                          </div>
                                        </v-col>
                                      </v-row>
                                    </div>
                                  </v-col>
                                </v-row>
                              </div>
                            </div>
                            <!--/.house-item-->
                            <div class="house-item-add border-bottom">
                              <!-- <v-btn
                                text
                                small
                                color="#7C828B"
                                @click="addSunItem(sun)"
                              >
                                태양광 추가 +
                              </v-btn> -->
                            </div>
                          </div>
                        </div>
                        <div
                          class="house-item-group"
                          v-for="(row, index) in rows"
                          :key="index"
                        >
                          <div v-if="row.visible">
                            <div
                              class="house-item"
                              v-for="(item, idx) in row.items"
                              :key="idx"
                            >
                              <div class="item-title">
                                {{ row.name }}
                                <v-btn
                                  text
                                  small
                                  color="#7C828B"
                                  @click="removeElec(index)"
                                >
                                  <v-icon left>
                                    mdi-custom mdi-trash-can-outline
                                  </v-icon>
                                  삭제
                                </v-btn>
                              </div>
                              <div class="item-form">
                                <v-row>
                                  <v-col cols="12" sm="12" md="4">
                                    <div class="form-group">
                                      <v-label>정격용량</v-label>
                                      <v-text-field
                                        v-model="item.elecval"
                                        outlined
                                        solo
                                        placeholder="0"
                                        hide-details="auto"
                                        suffix="kWh"
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                        @input="formatElec(item)"
                                        :rules="rules"
                                        required
                                      ></v-text-field>
                                    </div>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="4">
                                    <div class="form-group">
                                      <v-label>일 평균 사용 시간(현재)</v-label>
                                      <v-text-field
                                        v-model="item.dayhourval"
                                        outlined
                                        solo
                                        placeholder="0"
                                        hide-details="auto"
                                        suffix="시간"
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                        @input="formatDayHour(item)"
                                        :rules="rules"
                                        required
                                      ></v-text-field>
                                      <div class="house-item-value">
                                        <div class="label">월간사용량</div>
                                        <div class="value">00</div>
                                        <div class="unit">kWh</div>
                                      </div>
                                    </div>
                                  </v-col>
                                  <v-col cols="12" sm="12" md="4">
                                    <div class="form-group">
                                      <v-label>일 평균 사용 시간(목표)</v-label>
                                      <v-text-field
                                        v-model="item.targethourval"
                                        outlined
                                        solo
                                        placeholder="0"
                                        hide-details="auto"
                                        suffix="시간"
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                        @input="formatTargetHour(item)"
                                      ></v-text-field>
                                      <div class="house-item-value">
                                        <div class="label">월간사용량</div>
                                        <div class="value">00</div>
                                        <div class="unit">kWh</div>
                                      </div>
                                    </div>
                                  </v-col>
                                  <!-- <v-col cols="12" sm="12" md="6">
                                    <div class="form-group">
                                      <v-label>목표 소비 전력량</v-label>
                                      <v-text-field
                                        v-model="item.targetuseval"
                                        outlined
                                        solo
                                        placeholder="0"
                                        hide-details="auto"
                                        suffix="kWh"
                                        disabled="true"
                                      ></v-text-field>
                                    </div>
                                  </v-col> -->
                                </v-row>
                              </div>
                            </div>
                            <!--/.house-item-->
                            <div class="house-item-add">
                              <v-btn
                                text
                                small
                                color="#7C828B"
                                @click="addRowItem(row)"
                              >
                                {{ row.name }} 추가 +
                              </v-btn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </v-form>
                  </div>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn depressed color="primary" @click="calculate"
                      >계산하기</v-btn
                    >
                  </v-card-actions>
                </v-card>

                <v-card class="card-form card-tab-detail mt-10" flat>
                  <div class="card-header">
                    <div class="card-left">
                      <div class="card-title">계산 결과</div>
                      <div class="card-stext">
                        입력한 정보에 따른 월간 예상 사용량과 요금을
                        확인해보세요.
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
                            <span>월간 예상 사용량</span>
                          </div>
                          <v-row class="w-100">
                            <v-col>
                              <div class="result-value">
                                {{ elecUseValue }}
                                <span class="unit">kWh</span>
                              </div>
                              <div class="result-save">
                                <!-- 기존 사용량 대비 {{ targetUseVaue }} kWh 절약 -->
                                목표시간 사용 시 000kWh 증가(+00.00%)
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                          <div class="result-stitle">
                            <span>월간 예상 전력량요금</span>
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  x-small
                                  icon
                                  v-bind="attrs"
                                  v-on="on"
                                  class="ml-1"
                                >
                                  <v-icon color="grey lighten-1">
                                    mdi-custom mdi-information-outline
                                  </v-icon>
                                </v-btn>
                              </template>
                              <div class="tooltip-text">
                                <div class="mb-5">월간태양광발전량 계산식</div>
                                <div>
                                  월간태양광발전량 = 태양광용량 x 3.5h x 30일
                                </div>
                              </div>
                            </v-tooltip>
                          </div>
                          <v-row class="w-100">
                            <v-col>
                              <div class="result-value">
                                {{ elecPriceValue }}
                                <span class="unit">원</span>
                              </div>
                              <div class="result-save">
                                <!-- 기존 요금 대비 {{ targetPriceValue }} 원 절약 -->
                                목표시간 사용 시 0,000원 감소(-00.00%)
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
    rules: [(value) => !!value || "필수 입력 항목이에요"],
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
    show: false,
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
    types: ["13평이하", "18평", "25평", "34평", "34평이상"],
    type: "",
    peoples: ["1인", "2인", "3인", "4인", "5인", "6인이상"],
    people: "",
    months: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    month: "",
    units: ["kW"],
    unit: "",
    sunLight: "Y",
    monthValue: 0,
    sunValue: 0,
    monthuse: "",
    sunuse: "",
    samplePrice: 0,
    sampleUse: 0,
    calPrice: 0,
    calUse: 0,
    samplePriceValue: "0",
    sampleUseVaue: "0",
    calPriceValue: "0",
    calUseValue: "0",
    sunLightDisabled: false,
    elecs: [],
    rows: [],
    suns: [],
    dialogElec: false,
    addelecText: "",
    targetPriceValue: "0,000",
    targetUseVaue: "0,000",
    elecPriceValue: "0,000",
    elecUseValue: "0,000",
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      this.type = "13평이하";
      this.people = "1인";
      this.month = "1월";

      this.rows.push({
        name: "태양광",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "TV",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "냉장고",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "세탁기",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "건조기",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "에어컨(벽걸이)",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "청소기",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "컴퓨터",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "오디오",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "LED 전등(큰방/거실)",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "LED 전등(작은방/화장실)",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "에어컨(시스템)",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "에어컨(스탠드형)",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "형광등(큰방/거실)",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "식기세척기",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "난방기(온풍/온열)",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "전자레인지",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "오븐",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "의류관리기",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "공기청정기",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "안마의자",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "가습기",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });
      this.rows.push({
        name: "전기장판",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });

      this.suns.push({
        name: "태양광",
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });

      this.elecs.push({
        name: "태양광",
        textcolor: "white",
        color: "#FF7E12",
        line: false,
      });
      this.elecs.push({ name: "TV", color: "primary", line: false });
      this.elecs.push({ name: "냉장고", color: "primary", line: false });
      this.elecs.push({ name: "세탁기", color: "primary", line: false });
      this.elecs.push({ name: "건조기", color: "primary", line: false });
      this.elecs.push({
        name: "에어컨(벽걸이)",
        color: "primary",
        line: false,
      });
      this.elecs.push({ name: "청소기", color: "primary", line: false });
      this.elecs.push({ name: "컴퓨터", color: "primary", line: false });
      this.elecs.push({ name: "오디오", color: "primary", line: false });
      this.elecs.push({
        name: "LED 전등(큰방/거실)",
        color: "primary",
        line: false,
      });
      this.elecs.push({
        name: "LED 전등(작은방/화장실)",
        color: "primary",
        line: false,
      });

      this.elecs.push({ name: "에어컨(시스템)", color: "#bfbfbf", line: true });
      this.elecs.push({
        name: "에어컨(스탠드형)",
        color: "#bfbfbf",
        line: true,
      });
      this.elecs.push({
        name: "형광등(큰방/거실)",
        color: "#bfbfbf",
        line: true,
      });
      this.elecs.push({ name: "식기세척기", color: "#bfbfbf", line: true });
      this.elecs.push({
        name: "난방기(온풍/온열)",
        color: "#bfbfbf",
        line: true,
      });
      this.elecs.push({ name: "전자레인지", color: "#bfbfbf", line: true });
      this.elecs.push({ name: "오븐", color: "#bfbfbf", line: true });
      this.elecs.push({ name: "의류관리기", color: "#bfbfbf", line: true });
      this.elecs.push({ name: "공기청정기", color: "#bfbfbf", line: true });
      this.elecs.push({ name: "안마의자", color: "#bfbfbf", line: true });
      this.elecs.push({ name: "가습기", color: "#bfbfbf", line: true });
      this.elecs.push({ name: "전기장판", color: "#bfbfbf", line: true });
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    cal() {
      //구간별 전기요금
      let sectionPrice = 0;
      //월간 기준
      let monthStd = 1;

      if (this.month === "7월" || this.month === "8월") monthStd = 0.7;

      if (this.monthValue < 100) sectionPrice = 60.7;
      else if (this.monthValue < 200) sectionPrice = 125.9;
      else if (this.monthValue < 300) sectionPrice = 187.9;
      else if (this.monthValue < 400) sectionPrice = 280.6;
      else if (this.monthValue < 500) sectionPrice = 417.7;
      // 500보다 크면
      else sectionPrice = 709.5;

      //요금 = ( 월간 사용량 – (태양광용량) ) * 구간별전기요금 * 월간기준
      this.calPrice = Math.round(
        (this.monthValue - this.sunValue) * sectionPrice * monthStd
      );
      this.calUse = this.monthValue - this.sunValue;

      if (this.type === "13평이하") {
        this.sampleUse = "216";
        this.samplePrice = "29808";
      } else if (this.type === "18평") {
        this.sampleUse = "275";
        this.samplePrice = "37950";
      } else if (this.type === "25평") {
        this.sampleUse = "348";
        this.samplePrice = "48024";
      } else if (this.type === "34평") {
        this.sampleUse = "452";
        this.samplePrice = "62376";
      } else if (this.type === "34평이상") {
        this.sampleUse = "560";
        this.samplePrice = "94080";
      }

      this.samplePriceValue = (
        parseFloat(this.samplePrice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.sampleUseVaue = (
        parseFloat(this.sampleUse.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.calPriceValue = (
        parseFloat(this.calPrice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.calUseValue =
        (
          parseFloat(this.calUse.toString().replace(/,/g, "")) || 0
        ).toLocaleString() +
        "(" +
        this.sunValue +
        ")";
    },

    formatMonthUse() {
      const parsedAmount = parseFloat(this.monthuse.replace(/,/g, "")) || 0;
      this.monthValue = parsedAmount;
      this.monthuse = parsedAmount.toLocaleString();
    },

    formatSunUse() {
      const parsedAmount = parseFloat(this.sunuse.replace(/,/g, "")) || 0;
      this.sunValue = parsedAmount;
      this.sunuse = parsedAmount.toLocaleString();
    },

    sunLightChanged() {
      if (this.sunLight === "Y") this.sunLightDisabled = false;
      else {
        this.sunLightDisabled = true;
        this.sunValue = 0;
        this.sunuse = "";
      }
    },

    closeDialogElec() {
      this.dialogElec = false;
    },

    elecSelect(item) {
      if (item.color === "#bfbfbf") {
        //on action
        if (item.name === "태양광") item.color = "#FF7E12";
        else item.color = "primary";

        item.line = false;

        for (const idx in this.rows) {
          if (this.rows[idx].name === item.name && item.name != "태양광") {
            this.rows[idx].visible = true;
          }
        }
      } else {
        //off action
        item.color = "#bfbfbf";
        item.line = true;

        for (const idx in this.rows) {
          if (this.rows[idx].name === item.name) {
            this.rows[idx].visible = false;
          }
        }
      }
    },

    addElec() {
      if (this.addelecText === "") {
        alert("추가할 가전의 이름을 입력하세요");
        return;
      }

      if (this.elecs.length == 30) {
        alert("더이상 추가할 수 없습니다.");
        return;
      }

      for (const idx in this.elecs) {
        if (this.elecs[idx].name === this.addelecText) {
          alert(this.addelecText + " 는 이미 추가되어 있습니다.");
          return;
        }
      }

      this.elecs.push({
        name: this.addelecText,
        color: "primary",
        line: false,
      });
      this.rows.push({
        name: this.addelecText,
        visible: true,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", targetuseval: "" },
        ],
      });

      this.addelecText = "";
      this.closeDialogElec();
    },

    removeElec(index) {
      this.elecs.splice(index, 1);
      this.rows.splice(index, 1);
    },

    addRowItem(row) {
      if (row.items.length == 5) {
        alert("더이상 추가할 수 없습니다.");
        return;
      }

      row.items.push({
        dayhourval: "",
        elecval: "",
        targethourval: "",
        targetuseval: "",
      });
    },

    addSunItem(sun) {
      if (sun.items.length == 5) {
        alert("더이상 추가할 수 없습니다.");
        return;
      }

      sun.items.push({
        dayhourval: "",
        elecval: "",
        targethourval: "",
        targetuseval: "",
      });
    },

    formatDayHour(item) {
      const parsedAmount = parseFloat(item.dayhourval.replace(/,/g, "")) || 0;
      item.dayhour = parsedAmount;
      item.dayhourval = parsedAmount.toLocaleString();
    },

    formatElec(item) {
      const parsedAmount = parseFloat(item.elecval.replace(/,/g, "")) || 0;
      item.elec = parsedAmount;
      item.elecval = parsedAmount.toLocaleString();

      if (item.elec > 0 && item.targethour > 0) {
        item.targetuse = item.elec * item.targethour;
        item.targetuseval = (
          parseFloat(item.targetuse.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }
    },

    formatTargetHour(item) {
      const parsedAmount =
        parseFloat(item.targethourval.replace(/,/g, "")) || 0;
      item.targethour = parsedAmount;
      item.targethourval = parsedAmount.toLocaleString();

      if (item.elec > 0 && item.targethour > 0) {
        item.targetuse = item.elec * item.targethour;
        item.targetuseval = (
          parseFloat(item.targetuse.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }
    },

    calculate() {
      //월간사용량
      let elecmonthuse = 0;
      //월간태양광사용량
      let elecsunuse = 0;
      //월간목표사용량
      let targetmonthuse = 0;
      //구간별 전기요금
      let sectionPrice = 0;
      //구간별 전기요금 (목표)
      let sectionTargetPrice = 0;
      //월간 기준
      let monthStd = 1;

      for (let index in this.rows) {
        if (this.rows[index].name === "태양광" && this.rows[index].visible) {
          for (let idx in this.rows[index].items) {
            if (
              this.rows[index].items[idx].dayhour > 0 &&
              this.rows[index].items[idx].elec > 0 &&
              this.rows[index].items[idx].targethour > 0 &&
              this.rows[index].items[idx].targetuse > 0
            ) {
              elecsunuse +=
                this.rows[index].items[idx].dayhour *
                this.rows[index].items[idx].elec;
            }
          }
        } else if (this.rows[index].visible) {
          for (let idx in this.rows[index].items) {
            if (
              this.rows[index].items[idx].dayhour > 0 &&
              this.rows[index].items[idx].elec > 0 &&
              this.rows[index].items[idx].targethour > 0 &&
              this.rows[index].items[idx].targetuse > 0
            ) {
              elecmonthuse +=
                this.rows[index].items[idx].dayhour *
                this.rows[index].items[idx].elec;
              targetmonthuse += this.rows[index].items[idx].targetuse;
            }
          }
        }
      }

      //elecsunuse = elecsunuse * 30;

      for (let index in this.suns) {
        if (this.suns[index].visible) {
          for (let idx in this.suns[index].items) {
            if (this.suns[index].items[idx].dayhour > 0) {
              elecsunuse += this.suns[index].items[idx].dayhour;
            }
          }
        }
      }

      elecmonthuse = elecmonthuse * 30;
      targetmonthuse = targetmonthuse * 30;

      if (this.month === "7월" || this.month === "8월") monthStd = 0.7;

      if (elecmonthuse < 100) sectionPrice = 60.7;
      else if (elecmonthuse < 200) sectionPrice = 125.9;
      else if (elecmonthuse < 300) sectionPrice = 187.9;
      else if (elecmonthuse < 400) sectionPrice = 280.6;
      else if (elecmonthuse < 500) sectionPrice = 417.7;
      // 500보다 크면
      else sectionPrice = 709.5;

      if (targetmonthuse < 100) sectionTargetPrice = 60.7;
      else if (targetmonthuse < 200) sectionTargetPrice = 125.9;
      else if (targetmonthuse < 300) sectionTargetPrice = 187.9;
      else if (targetmonthuse < 400) sectionTargetPrice = 280.6;
      else if (targetmonthuse < 500) sectionTargetPrice = 417.7;
      // 500보다 크면
      else sectionTargetPrice = 709.5;

      let tmpelecUseVal = 0;
      let tmpelecPriceVal = 0;
      let tmptargetUseVal = 0;
      let tmptargetPriceVal = 0;

      //요금 = ( 월간 사용량 – (태양광용량) ) * 구간별전기요금 * 월간기준
      tmpelecPriceVal = Math.round(
        (elecmonthuse - elecsunuse) * sectionPrice * monthStd
      );
      tmptargetPriceVal = Math.round(
        (targetmonthuse - elecsunuse) * sectionTargetPrice * monthStd
      );
      tmpelecUseVal = elecmonthuse - elecsunuse;
      tmptargetUseVal = targetmonthuse - elecsunuse;

      let saveuse = 0;
      let saveprice = 0;

      saveuse = tmpelecUseVal - tmptargetUseVal;
      saveprice = tmpelecPriceVal - tmptargetPriceVal;

      this.elecUseValue = (
        parseFloat(tmpelecUseVal.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.elecPriceValue = (
        parseFloat(tmpelecPriceVal.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.targetUseVaue = (
        parseFloat(saveuse.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.targetPriceValue = (
        parseFloat(saveprice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
    },
  },
};
</script>

<style lang="scss">
.banselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
}
</style>
