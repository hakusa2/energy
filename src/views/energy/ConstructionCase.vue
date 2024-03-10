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
              <h3 class="text-body-h3">건물형 인프라구축 사업</h3>
            </v-col>
            <v-col cols="auto" class="ml-auto">
              <div class="list-control">
                <div class="carousel-count"><span>1</span>/5</div>
                <v-btn icon color="black">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn icon color="black">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row class="flex-nowrap overflow-hidden">
            <v-col cols="12" sm="6" md="4">
              <DialogCase />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <DialogCase />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <DialogCase />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div class="page-container py-5">
      <v-container>
        <v-row>
          <v-col cols="auto">
            <h3 class="text-body-h3">점포형 에너지비용절감 사업</h3>
          </v-col>
          <v-col cols="auto" class="ml-auto">
            <div class="list-control">
              <div class="carousel-count"><span>1</span>/5</div>
              <v-btn icon color="black">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn icon color="black">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row class="flex-nowrap overflow-hidden">
          <v-col cols="12" sm="6" md="4">
            <DialogCase />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <DialogCase />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <DialogCase />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="page-bg border-top">
      <div class="page-container">
        <v-container>
          <v-row>
            <v-col cols="auto">
              <h3 class="text-body-h3">공동주택형 에너지서비스 사업</h3>
            </v-col>
            <v-col cols="auto" class="ml-auto">
              <div class="list-control">
                <div class="carousel-count"><span>1</span>/5</div>
                <v-btn icon color="black">
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn icon color="black">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row class="flex-nowrap overflow-hidden">
            <v-col cols="12" sm="6" md="4">
              <DialogCase />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <DialogCase />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <DialogCase />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div class="page-container py-5">
      <v-container>
        <v-row>
          <v-col cols="auto">
            <h3 class="text-body-h3">단독주택형 에너지서비스 사업</h3>
          </v-col>
          <v-col cols="auto" class="ml-auto">
            <div class="list-control">
              <div class="carousel-count"><span>1</span>/5</div>
              <v-btn icon color="black">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn icon color="black">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row class="flex-nowrap overflow-hidden">
          <v-col cols="12" sm="6" md="4">
            <DialogCase />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <DialogCase />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <DialogCase />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import DialogCase from "@/components/DialogCase.vue";

export default {
  name: "WelfareStatus",
  components: {
    Title,
    DialogCase,
  },
  data: () => ({
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
};
</script>

<style lang="scss"></style>
