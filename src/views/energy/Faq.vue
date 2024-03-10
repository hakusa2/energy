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
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-card class="card-accordion" flat>
            <v-expansion-panels accordion flat>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <div class="panel-content-header">
                    <span class="text-question">Q.</span> 에너지 복지시설은
                    어떻게 신청하나요?
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="panel-content-title">
                    <span class="text-answer">A.</span> 에너지 복지시설은 다음과
                    같은 방법으로 신청할 수 있어요.
                  </div>
                  <div class="panel-content-text">
                    홈페이지의 에너지복지사업 소개를 참고하셔서 자신에게
                    해당하는 복지사업을 확인 후 에너지복지사업 신청" 버튼을 통해
                    신청해주세요. 본 페이지 상단의 상담전화번호 혹은 이메일
                    주소를 통하여 상담 문의를 진행해주세요.
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <div class="panel-content-header">
                    <span class="text-question">Q.</span> 에너지 복지시설은
                    어떻게 신청하나요?
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="panel-content-title">
                    <span class="text-answer">A.</span> 에너지 복지시설은 다음과
                    같은 방법으로 신청할 수 있어요.
                  </div>
                  <div class="panel-content-text">
                    홈페이지의 에너지복지사업 소개를 참고하셔서 자신에게
                    해당하는 복지사업을 확인 후 에너지복지사업 신청" 버튼을 통해
                    신청해주세요. 본 페이지 상단의 상담전화번호 혹은 이메일
                    주소를 통하여 상담 문의를 진행해주세요.
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <div class="panel-content-header">
                    <span class="text-question">Q.</span> 에너지 복지시설은
                    어떻게 신청하나요?
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="panel-content-title">
                    <span class="text-answer">A.</span> 에너지 복지시설은 다음과
                    같은 방법으로 신청할 수 있어요.
                  </div>
                  <div class="panel-content-text">
                    홈페이지의 에너지복지사업 소개를 참고하셔서 자신에게
                    해당하는 복지사업을 확인 후 에너지복지사업 신청" 버튼을 통해
                    신청해주세요. 본 페이지 상단의 상담전화번호 혹은 이메일
                    주소를 통하여 상담 문의를 진행해주세요.
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <!-- <v-pagination v-model="page" :length="6"></v-pagination> -->
          </v-card>

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
                      070-0000-0000
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
                      email@email.com
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

export default {
  name: "Faq",
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
};
</script>

<style lang="scss"></style>
