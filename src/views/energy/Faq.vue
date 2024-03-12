<template>
  <div class="page-sub">
    <div class="page-header">
      <v-container>
        <v-breadcrumbs :items="breadcrumbs" class="page-breadcrumbs">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <Title :title="'자주묻는질문'">
          <!-- <template v-slot:TitleDescription>
          <div class="heading-description">성남시에너지복지 포털은 에너지복지모델을 통한 서비스를 제공합니다.</div>
        </template> -->
        </Title>
      </v-container>
    </div>
    <div class="page-bg border-top h-100">
      <div class="page-container">
        <v-container>
          <v-expansion-panels accordion flat class="panels-accordion">
            <v-expansion-panel v-for="(item, index) in faqdata" :key="index">
              <v-expansion-panel-header>
                <div class="panel-content-header">
                  <span class="text-question">Q.</span> {{ item.qtitle }}
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="panel-content-title">
                  <span class="text-answer">A.</span> {{ item.atitle }}
                </div>
                <div
                  class="panel-content-text"
                  v-for="(c, index) in item.descriptionList"
                  :key="`item-${index}`"
                >
                  {{ c }} <br />
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <!-- <v-pagination v-model="page" :length="6"></v-pagination> -->

          <v-card class="card-contact" flat>
            <v-row>
              <v-col cols="12" sm="12" md="4">
                <div class="contact-stext">
                  궁금하신 내용이 해결이 안될 경우<br />
                  전화나 이메일로 문의 바랍니다
                </div>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="auto"
                class="ml-auto py-0 py-sm-0 py-sm-2"
              >
                <div class="contact-group">
                  <div class="contact-item">
                    <div class="contact-title">
                      전화상담<small>월~금 09:00 ~ 18:00</small>
                    </div>
                    <div class="contact-text">
                      <v-icon large class="mdi-custom"
                        >mdi-phone-in-talk</v-icon
                      >
                      {{ advicedata.phone }}
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="auto" class="py-0 py-sm-0 py-sm-2">
                <div class="contact-group">
                  <div class="contact-item">
                    <div class="contact-title">이메일상담</div>
                    <div class="contact-text">
                      <v-icon large class="mdi-custom"
                        >mdi-email-outline</v-icon
                      >
                      {{ advicedata.email }}
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import axios from "axios";

export default {
  name: "Faq",
  components: {
    Title,
  },
  data: () => ({
    faqdata: [],
    advicedata: {
      phone: "",
      email: "",
    },
    breadcrumbs: [
      {
        text: "home",
        disabled: false,
        href: "main",
      },
      {
        text: "참여와소통",
        disabled: false,
        href: "energynotice",
      },
      {
        text: "자주묻는질문",
        disabled: true,
        href: "energyfaq",
      },
    ],
    page: 1,
  }),
  created() {
    this.init();
  },

  methods: {
    init() {
      try {
        axios.get("/api/faq/getList").then((response) => {
          this.faqdata = response.data;
        });
        axios.get("/api/etc/getAdvice").then((response) => {
          this.advicedata = response.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss"></style>
