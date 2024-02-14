<template>
  <div class="page-main">
    <div class="main-banner">
      <v-carousel v-model="model" hide-delimiters>
        <v-carousel-item>
          <v-img src="@/assets/picture1.jpeg" class="carousel-image"></v-img>
          <div class="carousel-sheet">
            <div class="carousel-text-group">
              <div class="title">
                <span class="d-none d-md-flex">사회복지시설 <br /></span>
                에너지 복지모델
              </div>
              <div class="stext">
                PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
                에너지관리를 통해 에너지비용 을 절감하는 복지모델
              </div>
              <div class="action">
                <v-btn depressed color="primary" to="/applysocialwelfare"
                  >신청하기</v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="@/assets/picture2.jpeg" class="carousel-image"></v-img>
          <div class="carousel-sheet">
            <div class="carousel-text-group">
              <div class="title">
                <span class="d-none d-md-flex">사회복지시설 <br /></span>
                소규모 점포
              </div>
              <div class="stext">
                PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
                에너지관리를 통해 에너지비용 을 절감하는 복지모델
              </div>
              <div class="action">
                <v-btn depressed color="primary" to="/applysocialwelfare"
                  >신청하기</v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="@/assets/picture3.jpeg" class="carousel-image"></v-img>
          <div class="carousel-sheet">
            <div class="carousel-text-group">
              <div class="title">
                <span class="d-none d-md-flex">사회복지시설 <br /></span>
                공동 주택
              </div>
              <div class="stext">
                PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
                에너지관리를 통해 에너지비용 을 절감하는 복지모델
              </div>
              <div class="action">
                <v-btn depressed color="primary" to="/applysocialwelfare"
                  >신청하기</v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <v-img src="@/assets/picture4.jpeg" class="carousel-image"></v-img>
          <div class="carousel-sheet">
            <div class="carousel-text-group">
              <div class="title">
                <span class="d-none d-md-flex">사회복지시설 <br /></span>
                단독 주택
              </div>
              <div class="stext">
                PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고 효율적인
                에너지관리를 통해 에너지비용 을 절감하는 복지모델
              </div>
              <div class="action">
                <v-btn depressed color="primary" to="/applysocialwelfare"
                  >신청하기</v-btn
                >
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
      <div class="banner-icon-group">
        <div class="banner-icon">
          <v-btn depressed text large class="icon-item" to="/introduce">
            <v-icon large class="mdi-custom">mdi-diamond-outline</v-icon>
            <div class="icon-name">사업소개</div>
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn depressed text large class="icon-item" to="/welfaremodel">
            <v-icon large class="mdi-custom">mdi-home-heart</v-icon>
            <div class="icon-name">복지모델소개</div>
          </v-btn>
          <v-divider vertical class="d-none d-sm-flex"></v-divider>
          <v-btn depressed text large class="icon-item" to="/applycheck">
            <v-icon large class="mdi-custom">mdi-clipboard-check</v-icon>
            <div class="icon-name">신청확인</div>
          </v-btn>
          <v-divider vertical></v-divider>
          <v-btn depressed text large class="icon-item" to="/energynotice">
            <v-icon large class="mdi-custom">mdi-bulletin-board</v-icon>
            <div class="icon-name">공지사항</div>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="page-container">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="8">
            <v-card class="card-notice" flat>
              <v-card-title class="px-0">공지사항</v-card-title>
              <v-row>
                <v-col cols="12" md="5">
                  <div class="noice-main-item">
                    <router-link to="/energynoticeview">
                      <div class="date">23.10.12</div>
                      <div class="title">
                        PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축
                      </div>
                      <div class="description">
                        PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 구축하고
                        효율적인 에너지관리를 통해 에너지비용을 절감하는
                        복지모델 에너지관리를 통해 에너지비용을 절감하는
                        복지모델
                      </div>
                    </router-link>
                  </div>
                </v-col>
                <v-col cols="12" md="7">
                  <ul class="ul-list list-dot list-notice">
                    <li>
                      <router-link to="/energynoticeview"
                        >PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 PV, 소형
                        ESS, EV 설비를 융합하여 V2B 인프라를</router-link
                      >
                      <div class="date">23.10.12</div>
                    </li>
                    <li>
                      <router-link to="/energynoticeview"
                        >PV, 소형 ESS, EV 설비를 융합하여 V2B
                        인프라를</router-link
                      >
                      <div class="date">23.10.12</div>
                    </li>
                    <li>
                      <router-link to="/energynoticeview"
                        >PV, 소형 ESS, EV 설비를 융합하여 V2B
                        인프라를</router-link
                      >
                      <div class="date">23.10.12</div>
                    </li>
                    <li>
                      <router-link to="/energynoticeview"
                        >PV, 소형 ESS, EV 설비를 융합하여 V2B 인프라를 PV, 소형
                        ESS, EV 설비를 융합하여 V2B 인프라를</router-link
                      >
                      <div class="date">23.10.12</div>
                    </li>
                    <li>
                      <router-link to="/energynoticeview"
                        >PV, 소형 ESS, EV 설비를 융합하여 V2B
                        인프라를</router-link
                      >
                      <div class="date">23.10.12</div>
                    </li>
                    <li>
                      <router-link to="/energynoticeview"
                        >PV, 소형 ESS, EV 설비를 융합하여 V2B
                        인프라를</router-link
                      >
                      <div class="date">23.10.12</div>
                    </li>
                  </ul>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="card-support" flat>
              <v-card-title class="px-0">컨텐츠배너</v-card-title>
              <div class="carousel-control">
                <div class="carousel-count"><span>1</span>/5</div>
                <v-btn icon color="secondary">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn icon color="secondary">
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
                <v-btn icon color="secondary">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
              <v-carousel hide-delimiters cycle height="200">
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                  :to="item.url"
                >
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
        </v-row>
        <dashboard-key-metrics />
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Main",
  components: {},
  data: () => ({
    model: 0,
    items: [
      {
        src: require("@/assets/sample_notice.png"),
        url: "/supportinformation",
      },
      {
        src: require("@/assets/sample_support_project.png"),
        url: "/supportinformation",
      },
    ],
  }),
};
</script>

<style lang="scss"></style>
