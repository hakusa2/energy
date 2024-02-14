<template>
  <div class="page-container">
    <v-container>
      <Title :title="'사업문의'"> </Title>
      <v-card class="card-contact" flat>
        <v-row class="align-center justify-center">
          <v-col cols="12">
            <div class="contact-stext">
              궁금하신 내용이 해결이 안될 경우<br />
              전화나 이메일로 문의 바랍니다
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="contact-group">
              <div class="contact-item">
                <div class="contact-title">
                  전화상담<small>월~금 09:00 ~ 18:00</small>
                </div>
                <div class="contact-text">
                  <v-icon large class="mdi-custom">mdi-phone-in-talk</v-icon>
                  070-0000-0000
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="contact-group">
              <div class="contact-item">
                <div class="contact-title">이메일상담</div>
                <div class="contact-text">
                  <v-icon large class="mdi-custom">mdi-email-outline</v-icon>
                  email@email.com
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="card-accordion mt-5" flat>
        <v-card-title>자주묻는 질문</v-card-title>
        <v-expansion-panels accordion flat>
          <v-expansion-panel>
            <v-expansion-panel-header
              >Q. 에너지 복지시설은 어떻게 신청하나요?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div class="panel-content-title">
                A. 에너지 복지시설은 다음과 같은 방법으로 신청할 수 있습니다.
              </div>
              <div class="panel-content-text">
                <ol class="ol-list">
                  <li>
                    홈페이지를 통한 신청
                    <ul class="ul-list list-dash">
                      <li>
                        홈페이지의 에너지복지모델 소개를 참고하셔서 자신에게
                        해당하는 복지모델을 확인 후 "에너지복지모델 신청" 버튼을
                        통해 신청해주시면 됩니다.
                      </li>
                    </ul>
                  </li>
                  <li class="mt-2">
                    전화 및 이메일을 통한 신청
                    <ul class="ul-list list-dash">
                      <li>
                        본 페이지 상단의 상담전화번호 혹은 이메일 주소를 통하여
                        상담 문의를 진행하시기 바랍니다.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >Q. 에너지 복지시설은 어떻게 신청하나요?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div class="panel-content-title">
                A. 에너지 복지시설은 다음과 같은 방법으로 신청할 수 있습니다.
              </div>
              <div class="panel-content-text">
                <ol class="ol-list">
                  <li>
                    홈페이지를 통한 신청
                    <ul class="ul-list list-dash">
                      <li>
                        홈페이지의 에너지복지모델 소개를 참고하셔서 자신에게
                        해당하는 복지모델을 확인 후 "에너지복지모델 신청" 버튼을
                        통해 신청해주시면 됩니다.
                      </li>
                    </ul>
                  </li>
                  <li>
                    전화 및 이메일을 통한 신청
                    <ul class="ul-list list-dash">
                      <li>
                        본 페이지 상단의 상담전화번호 혹은 이메일 주소를 통하여
                        상담 문의를 진행하시기 바랍니다.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >Q. 에너지 복지시설은 어떻게 신청하나요?</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div class="panel-content-title">
                A. 에너지 복지시설은 다음과 같은 방법으로 신청할 수 있습니다.
              </div>
              <div class="panel-content-text">
                <ol class="ol-list">
                  <li>
                    홈페이지를 통한 신청
                    <ul class="ul-list list-dash">
                      <li>
                        홈페이지의 에너지복지모델 소개를 참고하셔서 자신에게
                        해당하는 복지모델을 확인 후 "에너지복지모델 신청" 버튼을
                        통해 신청해주시면 됩니다.
                      </li>
                    </ul>
                  </li>
                  <li>
                    전화 및 이메일을 통한 신청
                    <ul class="ul-list list-dash">
                      <li>
                        본 페이지 상단의 상담전화번호 혹은 이메일 주소를 통하여
                        상담 문의를 진행하시기 바랍니다.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-pagination v-model="page" :length="6"></v-pagination>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "Faq",
  components: {
    Title,
  },
  data: () => ({
    page: 1,
  }),
};
</script>

<style lang="scss"></style>
