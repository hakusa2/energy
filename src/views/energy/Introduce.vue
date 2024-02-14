<template>
  <div class="page-container">
    <v-container>
      <Title :title="'사업소개'">
        <template v-slot:TitleDescription>
          성남시에너지복지 포털은 에너지복지모델을 통한 서비스를 제공합니다.
        </template>
      </Title>
      <v-row class="align-center">
        <v-col cols="12" sm="12" md="4">
          <v-img
            src="@/assets/img_introduce.svg"
            max-height="280"
            contain
          ></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <h3 class="mb-5">성남시 에너지복지포털</h3>
          <p>
            환경과 에너지에 대한 인식이 더욱 중요해지는 시대, 성남시에서는 지속
            가능한 발전과 시민의 행복을 위해 다양한 노력을 기울이고 있습니다.
          </p>
          <p>
            이에 따라 성남시 에너지복지포털은 시민들에게 소중한 정보를 제공하고
            함께 에너지와 환경에 대한 경각심을 고취시키기 위해 만들어졌습니다.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "Introduce",
  components: {
    Title,
  },
  data: () => ({}),
};
</script>

<style lang="scss"></style>
