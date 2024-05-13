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
                                {{ toralCalValue }}
                                <!-- {{ monthValue + sunCalValue }} -->
                                <!-- <small>({{ sunValue }})</small> -->
                                <span class="unit">kWh</span>
                              </div>
                              <div class="result-save">
                                태양광으로 {{ saveUseValue }} kWh 절약
                              </div>
                            </v-col>
                            <v-col>
                              <div class="result-value">
                                {{ sumPriceValue }} <span class="unit">원</span>
                               <!-- {{ realPriceValue }} <span class="unit">원</span> -->
                              </div>
                              <div class="result-save">
                                태양광으로 {{ savePriceValue }} 원 절약
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
                            <div class="house-item" :class="{ 'form-disabled': sunLightDisabled2 }">
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
                                            v-model="unitNow"
                                            :disabled="sunLightDisabled2"
                                            :items="units"
                                            hide-details="auto"
                                            @change="formatSunDayHour(item)"
                                          ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="9">
                                          <v-text-field
                                            v-model="item.sunhourval"
                                            outlined
                                            solo
                                            :disabled="sunLightDisabled2"
                                            placeholder="0"
                                            hide-details="auto"
                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                            @input="formatSunDayHour(item)"
                                          ></v-text-field>
                                          <div class="house-item-value">
                                            <div class="label">월간발전량</div>
                                            <div class="value">{{ item.sunmonthval }}</div>
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
                                            v-model="unitTarget"
                                            :disabled="sunLightDisabled2"
                                            :items="units"
                                            hide-details="auto"
                                            @change="formatSunTargetHour(item)"
                                          ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="9">
                                          <v-text-field
                                            v-model="item.targetsunhourval"
                                            outlined
                                            solo
                                            :disabled="sunLightDisabled2"
                                            placeholder="0"
                                            hide-details="auto"
                                            oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                            @input="formatSunTargetHour(item)"
                                          ></v-text-field>
                                          <div class="house-item-value">
                                            <div class="label">월간발전량</div>
                                            <div class="value">{{ item.targetsunmonthval }}</div>
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
                         <div v-if="row.visible" :class="{'form-disabled': row.visible2 }">
                         <!-- <div v-if="row.visible" > -->
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
                                  @click="removeElec(index, idx)"
                                >
                                  <v-icon left>
                                    mdi-custom mdi-trash-can-outline
                                  </v-icon>
                                  삭제
                                </v-btn>
                              </div>
                              <div class="item-form" >
                                <v-row>
                                  <v-col cols="12" sm="12" md="4">
                                    <div class="form-group">
                                      <v-label>정격용량</v-label>
                                      <v-text-field
                                        v-model="item.elecval"
                                        outlined
                                        solo
                                        :disabled="row.visible2"
                                        placeholder="0"
                                        hide-details="auto"
                                        suffix="W"
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                        @input="formatElec(item)"

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
                                        :disabled="row.visible2"
                                        onkeyup="if(this.value.length > 3) this.value = Math.round(this.value * 100) / 100;"
                                        placeholder="0"
                                        hide-details="auto"
                                        suffix="시간"
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                        @input="formatDayHour(item)"

                                        required
                                      ></v-text-field>
                                      <div class="house-item-value">
                                        <div class="label">월간사용량</div>
                                        <div class="value">{{ item.monthuseval }}</div>
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
                                        :disabled="row.visible2"
                                        onkeyup="if(this.value.length > 3) this.value = Math.round(this.value * 100) / 100;"
                                        placeholder="0"
                                        hide-details="auto"
                                        suffix="시간"
                                        oninput="this.value = this.value.replace(/[^0-9.]/g, '')"
                                        @input="formatTargetHour(item)"
                                      ></v-text-field>
                                      <div class="house-item-value">
                                        <div class="label">월간사용량</div>
                                        <div class="value">{{ item.monthtargetval }}</div>
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
                                {{ resultvalue1 }}
                                <span class="unit">kWh</span>
                              </div>
                              <div class="result-save">
                                <!-- 기존 사용량 대비 {{ targetUseVaue }} kWh 절약 -->
                                <!--목표시간 사용 시 {{ resultvalue2 }}kWh 증가({{resultvalue3}}%)  -->
                                목표시간 사용 시 {{ resultvalue2 }}kWh {{resultvalue3}} {{ resultvalue7 }}
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
                                {{ resultvalue4 }}
                                <span class="unit">원</span>
                              </div>
                              <div class="result-save">
                                <!-- 기존 요금 대비 {{ targetPriceValue }} 원 절약 -->
                               <!--  목표시간 사용 시 {{ resultvalue5 }}원 감소({{ resultvalue6 }}%) -->

                                목표시간 사용 시 {{ resultvalue5 }}원  {{ resultvalue6 }} {{ resultvalue7 }}

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
import Energy from "@/assets/js/energy";

export default {
  mixins:[Energy],
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
    types: ["13평이하", "13~24평", "24~32평", "32~38평", "38~42평", "42평이상"],
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
    units: ["kW", "W"],
    unit: "",
    sunLight: "Y",
    monthValue: 0,
    sunValue: 0,
    sunCalValue: 0,
    toralCalValue: 0,
    monthuse: "",
    sunuse: "",
    samplePrice: 0,
    sampleUse: 0,
    //calPrice: 0,
    calUse: 0,
    realPrice: 0,
    savePrice: 0,
    samplePriceValue: "0",
    sampleUseVaue: "0",
    //calPriceValue: "0",
   // calUseValue: "0",
    sunLightDisabled: false,
    sunLightDisabled2: false,
    elecs: [],
    rows: [],
    suns: [],
    dialogElec: false,
    addelecText: "",
    targetPriceValue: "0,000",
    targetUseVaue: "0,000",
    elecPriceValue: "0,000",
    elecUseValue: "0,000",
    saveUseValue: "",
    savePriceValue: "",
    resultvalue1:"0",
    resultvalue2:"0",
    resultvalue3:"",
    resultvalue4:"0",
    resultvalue5:"0",
    resultvalue6:"",
    resultvalue7:"증가",
    sumPriceValue:"",
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      this.type = "13평이하";
      this.people = "1인";
      this.month = "1월";
      this.unit = "kW";
      this.unitNow = "kW";
      this.unitTarget = "kW";

      this.rows.push({
        name: "태양광",
        visible: false,
        items: [
          { dayhourval: "", elecval: "", targethourval: "", monthuseval: "0", monthtargetval:"0" },
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
      //하계요금 적용기준
      let calType = "1";

      if (this.month === "7월" || this.month === "8월"){
        calType = "2";
      }

      let calSunType = "1";
      if(this.unit === "W"){
        calSunType = "2";
      }

      //태양광 용량 계산
      this.sunCalValue = this.calSunEnergy(this.sunValue, calSunType);

      // 월사용량 금액(태양광 발전량이 차감이 포함된 요금계산)
      this.realPrice = this.calEnergyPay(this.monthValue, calType) ;

      // monthValue = 월 총 사용량(한전에서 공급된 총 전력-태양광 발전량)
      // 태양광발전 차감이 안된 원래 사용요금(월 총 사용량(한전에서 공급된 총 전력-태양광 발전량) + 태양광 발전량) 요금계산
      this.sumPrice = this.calEnergyPay(this.monthValue + this.sunCalValue, calType);

      //절약된 요금계산 = (월사용량 금액+태양광 발전량 금액) - 월사용량 금액
      this.savePrice = this.sumPrice - this.realPrice;

      //console.log(" sunCalValue =" + this.sunCalValue );
      //console.log("월사용량+태양광 발전량 금액 =" + this.sumPrice );
      //console.log(" 월사용량 금액 =" + this.realPrice );
      //선택한 평형별 사용량 가져오기
      for (const idx in this.elecStdData) {
        if(this.elecStdData[idx].type === this.type){
          for(const id in this.elecStdData[idx].data){
            if(this.elecStdData[idx].data[id].month === this.month){
              this.sampleUse = this.elecStdData[idx].data[id].val;
            }
          }
        }
      }

      //선택한 평형별 요금 계산하기
      this.samplePrice = this.calEnergyPay(this.sampleUse, calType);

      this.sumPriceValue = (
        parseFloat(this.sumPrice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();

      this.realPriceValue = (
        parseFloat(this.realPrice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();

      this.saveUseValue = (
        parseFloat(this.sunCalValue.toString().replace(/,/g, "")) || 0
      ).toLocaleString();

      this.savePriceValue = (
        parseFloat(this.savePrice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();

      this.samplePriceValue = (
        parseFloat(this.samplePrice.toString().replace(/,/g, "")) || 0
      ).toLocaleString();
      this.sampleUseVaue = (
        parseFloat(this.sampleUse.toString().replace(/,/g, "")) || 0
      ).toLocaleString();

      this.toralCalValue = (
        parseFloat( (this.monthValue+ this.sunCalValue) .toString().replace(/,/g, "")) || 0
      ).toLocaleString();
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
        if (item.name === "태양광") {
          item.color = "#FF7E12";
          this.sunLightDisabled2 = false;
        }
        else
          item.color = "primary";


        item.line = false;

        for (const idx in this.rows) {
          if (this.rows[idx].name === item.name && item.name != "태양광") {
            this.rows[idx].visible = true;
            this.rows[idx].visible2 = false;
          }
        }

      } else {
        if (item.name === "태양광") {
          this.sunLightDisabled2 = true;
          this.suns[0].items[0].sunhourval = "";
          this.suns[0].items[0].targetsunhourval = "";
          this.suns[0].items[0].sunmonthval = "";
          this.suns[0].items[0].targetsunmonthval = "";
          this.suns[0].items[0].sunmonth = 0;
          this.suns[0].items[0].targetsunmonth = 0;

          this.unitNow = "kW";
          this.unitTarget = "kW";
        }

        //off action
        item.color = "#bfbfbf";
        item.line = true;

        for (const idx in this.rows) {
          //console.log("rows[idx].name = " + this.rows[idx].name + " / item.name = " +  item.name);
          if (this.rows[idx].name === item.name) {
            this.rows[idx].visible = false;
            for(const index in this.rows[idx].items){
              this.rows[idx].items[index].targethourval = "";
              this.rows[idx].items[index].dayhourval = "";
              this.rows[idx].items[index].elecval = "";
              this.rows[idx].items[index].monthuseval = "";
              this.rows[idx].items[index].monthtargetval = "";
              this.rows[idx].items[index].monthuse = 0;
              this.rows[idx].items[index].monthtarget = 0;
            }
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

    removeElec(index, idx) {


      if(this.rows[index].items.length == 1){

        if(this.rows[index].name === "TV"
        ||this.rows[index].name === "냉장고"
        ||this.rows[index].name === "세탁기"
        ||this.rows[index].name === "건조기"
        ||this.rows[index].name === "청소기"
        ||this.rows[index].name === "컴퓨터"
        ||this.rows[index].name === "오디오"
        ||this.rows[index].name === "LED 전등(큰방/거실)"
        ||this.rows[index].name === "LED 전등(작은방/화장실)"
        ||this.rows[index].name === "에어컨(벽걸이)"
        ||this.rows[index].name === "냉장고"
        ||this.rows[index].name === "냉장고")
        {
          this.rows[index].visible2 = true;
          this.rows[index].items[0].targethourval = "";
          this.rows[index].items[0].dayhourval = "";
          this.rows[index].items[0].elecval = "";
          this.rows[index].items[0].monthuseval = "";
          this.rows[index].items[0].monthtargetval = "";
          this.rows[index].items[0].monthtuse = 0;
          this.rows[index].items[0].monthtarget = 0;

          //this.rows[index].visible = true;
          this.$forceUpdate();
        } else {
          this.elecs.splice(index, 1);
          this.rows.splice(index, 1);
        }
        return;
      }

      this.rows[index].items.splice(idx, 1);
    },

    addRowItem(row) {
      if (row.visible2)
        return;

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
      const parsedAmount = parseFloat(item.dayhourval);
      item.dayhour = parsedAmount;
      item.dayhourval = item.dayhour.toLocaleString();

      if(item.dayhour > 24){
        item.dayhour = 0;
        item.dayhourval = "";
        item.monthuse = 0;
        item.monthuseval = "";
      }

      if( (item.dayhour >= 0 && item.dayhour <= 24)
        && (item.targethour === undefined || item.targethour === null || item.targethour === '' )) {
        item.targethour = 0;
      }

      // eslint-disable-next-line no-empty
      if (item.elec >= 0 && item.dayhourval >= 0) {
        // eslint-disable-next-line no-empty
        item.monthuse = item.elec * item.dayhour * 30 / 1000;
        item.monthuseval = (
          parseFloat(item.monthuse.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }

      // eslint-disable-next-line no-empty
      if (item.elec >= 0 && item.dayhourval >= 0 && item.targethour >= 0) {
        // eslint-disable-next-line no-empty
        //console.log("item.targethour >= 0");
        item.monthtarget = item.elec * item.targethour * 30 / 1000;
        item.monthtargetval = (
          parseFloat(item.monthtarget.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }

      this.$forceUpdate();
    },

    formatElec(item) {
      const parsedAmount = parseFloat(item.elecval.replace(/,/g, "")) || 0;
      item.elec = parsedAmount;
      item.elecval = parsedAmount.toLocaleString();

      if (item.elec >= 0 && item.dayhour >= 0) {
        item.monthuse = item.elec * item.dayhour * 30 / 1000;
        item.monthuseval = (
          parseFloat(item.monthuse.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }

      if (item.elec >= 0 && item.targethour >= 0) {
        item.monthtarget = item.elec * item.targethour * 30 / 1000;
        item.monthtargetval = (
          parseFloat(item.monthtarget.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }

      this.$forceUpdate();
    },

    formatTargetHour(item) {
      const parsedAmount =
        parseFloat(item.targethourval.replace(/,/g, "")) || 0;
      item.targethour = parsedAmount;
      item.targethourval = parsedAmount.toLocaleString();

      if(item.targethour > 24){
        item.targethour = 0;
        item.targethourval = "";
        item.monthtarget = 0;
        item.monthtargetval = "";
      }

      if (item.elec >= 0 && item.targethour >= 0) {
        item.monthtarget = item.elec * item.targethour * 30 / 1000;
        item.monthtargetval = (
          parseFloat(item.monthtarget.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }

      if( (item.targethour >= 0 && item.targethour <= 24)
        && (item.dayhour === undefined || item.dayhour === null || item.dayhour === '' )) {
        console.log("item.dayhour = 0");
        item.dayhour = 0;
      }

      // eslint-disable-next-line no-empty
      if (item.elec >= 0 && item.targethourval >= 0 && item.dayhour >= 0) {
        // eslint-disable-next-line no-empty
        console.log("item.dayhour >= 0");

        item.monthuse = item.elec * item.dayhour * 30 / 1000;
        item.monthuseval = (
          parseFloat(item.monthuse.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }


      this.$forceUpdate();
    },

    formatSunDayHour(item) {
      const parsedAmount =
        parseFloat(item.sunhourval.replace(/,/g, "")) || 0;
      item.sunhour = parsedAmount;
      item.sunhourval = parsedAmount.toLocaleString();

      let calSunType = "1";
      if(this.unitNow === "W"){
        calSunType = "2";
      }

      if (item.sunhour >= 0) {
        item.sunmonth = this.calSunEnergy(item.sunhour, calSunType);

        item.sunmonthval = (
          parseFloat(item.sunmonth.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }

      this.$forceUpdate();
    },

    formatSunTargetHour(item) {
      const parsedAmount =
        parseFloat(item.targetsunhourval.replace(/,/g, "")) || 0;
      item.targetsunhour = parsedAmount;
      item.targetsunhourval = parsedAmount.toLocaleString();

      let calSunType = "1";
      if(this.unitTarget === "W"){
        calSunType = "2";
      }

      if (item.targetsunhour >= 0) {
        item.targetsunmonth = this.calSunEnergy(item.targetsunhour, calSunType);

        item.targetsunmonthval = (
          parseFloat(item.targetsunmonth.toString().replace(/,/g, "")) || 0
        ).toLocaleString();
      }

      this.$forceUpdate();
    },

    calculate() {
      //월간사용량
      let elecmonthuse = 0;
      //월간태양광사용량
      let elecsunuse = 0;
      //월간목표사용량
      let targetmonthuse = 0;
      //월간태양광목표사용량
      let electargetsunuse = 0;

      for (let index in this.rows) {
        for (let idx in this.rows[index].items) {
          if (
            this.rows[index].items[idx].monthuse > 0 &&
            this.rows[index].items[idx].monthtarget >= 0
          ) {
            elecmonthuse += this.rows[index].items[idx].monthuse;
            targetmonthuse += this.rows[index].items[idx].monthtarget;
          }
        }
      }

      for (let index in this.suns){
        for (let idx in this.suns[index].items) {
          if (this.suns[index].items[idx].sunmonth > 0) {
            elecsunuse += this.suns[index].items[idx].sunmonth
          }

          if (this.suns[index].items[idx].targetsunmonth > 0) {
            electargetsunuse += this.suns[index].items[idx].targetsunmonth
          }
        }
      }

      // 월간 예상 사용량
      let result1 = Math.round(elecmonthuse - elecsunuse, 3);
      // 목표 사용시간 - 월간 예상 사용량
      let result2 = Math.round(targetmonthuse - electargetsunuse, 3) - Math.round(elecmonthuse - elecsunuse, 3);
      // 증감량 백분율(%)
      let result3 = Math.round(result2 / result1 * 100, 2);

      this.resultvalue1 = (parseFloat(result1.toString().replace(/,/g, "")) || 0).toLocaleString();

      // 월간 예상 전령량 요금(태양광 차감 포함)
      let result4 = this.calEnergyPay(elecmonthuse - elecsunuse, "1");
      //this.resultvalue3 = (parseFloat(result3.toString().replace(/,/g, "")) || 0).toLocaleString();

      // 사용 요금 -  목표요금(태양광 차감 포함)
      let result5 = result4 - this.calEnergyPay(targetmonthuse - electargetsunuse, "1");
      let result6 = Math.round(result5 / result4 * 100, 2);
      this.resultvalue4 = (parseFloat(result4.toString().replace(/,/g, "")) || 0).toLocaleString();
      this.resultvalue5 = (parseFloat(result5.toString().replace(/,/g, "")) || 0).toLocaleString();
      this.resultvalue6 = (parseFloat(result6.toString().replace(/,/g, "")) || 0).toLocaleString();

      console.log("################");
      console.log("태양광발전량  =" + elecsunuse + "kWh");
      console.log("월간 예상 사용량 = " + elecmonthuse + "kWh");
      console.log("월간 예상 사용량 - 태양광발전량 = " + (elecmonthuse - elecsunuse) + "kWh");
      console.log("태양광발전량(목표)  =" + electargetsunuse + "kWh");
      console.log("월간사용량(목표) 전력량= " + targetmonthuse + "kWh");
      console.log("월간사용량(목표) - 태양광발전량(목표) 전력량 = " + (targetmonthuse - electargetsunuse) + "kWh");
      console.log("목표 사용시간 전력량 - 월간 예상 사용량 = " + result2 + "kWh");
      console.log("월간 예상 전령량 요금(태양광 차감 포함) = " + result4 + "원");
      console.log("월간사용량(목표) - 태양광발전량(목표)  전령량 요금 = " + this.calEnergyPay(targetmonthuse - electargetsunuse, "1") + "원");
      console.log("월간 예상 전령량 요금(태양광 차감 포함) - 목표 월간사용량(태양광(목표) 차감 포함) = " + result5 + "원");

      // [목표시간 요금]이 [월간예상 사용요금] 보다 크면 요금 증가로 판단.
      if ( (this.calEnergyPay(targetmonthuse - electargetsunuse, "1") >= result4) > 0) {
        console.log("!!!! 증가 구간 진입1 !!!" );
        this.resultvalue7 = "증가 ";

        // 월간 에상 사용량 : 목표시간 사용 시 {{ resultvalue2 }}kWh ({{resultvalue3}}%) {{ resultvalue7 }}
        // 월간 예상 전력량 요금: 목표시간 사용 시 {{ resultvalue5 }}원  ({{ resultvalue6 }}%) {{ resultvalue7 }}

        // resultvalue2 : 절력량 차분,
        // resultvalue3 : 월간사용량(목표)요금 - 태양광발전량 요금 / 월간 예상 전령량 요금 - 태양광 요금 *100
        // resultvalue7 : 문자 "증가"
        // resultvalue5 : 월간 예상 전령량 요금(태양광 차감 포함) - 목표 월간사용량(태양광 차감 포함),
        // resultvalue6 : 월간 목표 전령량 요금(태양광 차감 포함) / 월간 예상 전령량 요금(태양광 차감 포함) *100

        this.resultvalue2 = (parseFloat((result2).toString().replace(/,/g, "")) || 0).toLocaleString();
        result3 = Math.round((((targetmonthuse -electargetsunuse) / (elecmonthuse - elecsunuse)) * 100), 2);
        this.resultvalue3 = "("+ (parseFloat((result3).toString().replace(/,/g, "")) || 0).toLocaleString()+")%";
        this.resultvalue5 = (parseFloat((result5).toString().replace(/,/g, "")) || 0).toLocaleString();
        //this.resultvalue6 = (parseFloat(Math.round(((result5 / result4) * 100), 1).toString().replace(/,/g, "")) || 0).toLocaleString();
        this.resultvalue6 =  "("+ (parseFloat(Math.round(((this.calEnergyPay(targetmonthuse - electargetsunuse, "1") / result4) * 100), 1).toString().replace(/,/g, "")) || 0).toLocaleString() + ")%";
        // eslint-disable-next-line no-empty
        if(result5 < 0){
          this.resultvalue5 = (parseFloat((result5 * -1).toString().replace(/,/g, "")) || 0).toLocaleString();
        }

        if(this.calEnergyPay(targetmonthuse - electargetsunuse, "1") < 0){
          this.resultvalue6 = "("+ (parseFloat(Math.round(((this.calEnergyPay(targetmonthuse - electargetsunuse, "1") / result4) * -100), 1).toString().replace(/,/g, "")) || 0).toLocaleString()+ ")%";
        }

      // eslint-disable-next-line no-empty
      } else {
        console.log("!!!! 감소 구간 진입1 !!!" );
        this.resultvalue7 = "감소 ";

        // 월간 에상 사용량 : 목표시간 사용 시 {{ resultvalue2 }}kWh ({{resultvalue3}}%) {{ resultvalue7 }}
        // 월간 예상 전력량 요금: 목표시간 사용 시 {{ resultvalue5 }}원  ({{ resultvalue6 }}%) {{ resultvalue7 }}

        // resultvalue2 : 절력량 차분,
        // resultvalue3: (월간 예상 전령량 요금- 태양광발전량 전령량 요금) / (월간사용량(목표) 요금 - 태양광발전량 전령량 요금) *100
        // resultvalue7 : 문자 "감소"
        // resultvalue5 : 월간 예상 전령량 요금(태양광 차감 포함) - 목표 월간사용량(태양광 차감 포함) 요금,
        // resultvalue6 : 월간 예상 전령량 요금(태양광 차감 포함) / 목표 월간사용량(태양광 차감 포함) 요금 *100

        this.resultvalue2 = (parseFloat((result2).toString().replace(/,/g, "")) || 0).toLocaleString();
        result3 = Math.round((( (elecmonthuse - elecsunuse) / (targetmonthuse - electargetsunuse)) * 100), 2);
        if(result2 < 0){
          this.resultvalue2 = (parseFloat((result2 * -1).toString().replace(/,/g, "")) || 0).toLocaleString();
        }

        if(result3 < 0){
          result3 = Math.round((( (elecmonthuse - elecsunuse) / (targetmonthuse - electargetsunuse)) * -100), 2);
        }

        this.resultvalue3 = "("+(parseFloat((result3).toString().replace(/,/g, "")) || 0).toLocaleString() + ")%";
        this.resultvalue5 = (parseFloat((result5).toString().replace(/,/g, "")) || 0).toLocaleString();
        this.resultvalue6 = "("+(parseFloat(Math.round((((result4) / this.calEnergyPay(targetmonthuse - electargetsunuse, "1")) * 100), 1).toString().replace(/,/g, "")) || 0).toLocaleString() + ")%";

        if(result5 < 0){
          this.resultvalue5 = (parseFloat((result5 * -1).toString().replace(/,/g, "")) || 0).toLocaleString();
          this.resultvalue6 = "("+(parseFloat(Math.round(((result4 / this.calEnergyPay(targetmonthuse - electargetsunuse, "1")) * -100), 1).toString().replace(/,/g, "")) || 0).toLocaleString() + ")%";
        }

        // 목표 전력의 요금이 0원인 경우.
        if(targetmonthuse - electargetsunuse <= 0){
          console.log("!!!! 목표 전력의 요금이 0원 !!!");
          this.resultvalue2 = this.resultvalue1;
          this.resultvalue3 = "";
          this.resultvalue7 = "감소";
          this.resultvalue5 = this.resultvalue4;
          this.resultvalue6 = "";
        }

        console.log(" kWh % 증감치 = " + this.resultvalue3);
        console.log(" 요금 % 증감치 = " + this.resultvalue6);

      }

      if(result4 < 0 ) {
        // 사용금액이 마이너스이면, 모두 "0" 으로 처리한다.
          console.log("!!!! 사용금액 마이너스 구간 !!!" );
          this.resultvalue1 = 0;
          this.resultvalue2 = 0;
          this.resultvalue3 = 0;
          this.resultvalue7 = "감소";
          this.resultvalue4 = 0;
          this.resultvalue5 = 0;
          this.resultvalue6 = 0;
        }

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
