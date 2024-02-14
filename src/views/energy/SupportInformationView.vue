<template>
  <div class="page-container">
    <v-container>
      <Title :title="'지원사업 안내'"></Title>
      <Tables class="table-energy table-view">
        <template v-slot:TableTitle> 주택용 태양광DR모델 신청안내 </template>
        <template v-slot:TableDescription> 2024.12.29 </template>
        <template v-slot:TableData>
          <v-card class="card-view" elevation="0">
            <v-img
              src="@/assets/sample_notice.png"
              contain
              max-width="500"
              class="mx-auto my-5"
            ></v-img>
            <v-card-text>
              안녕하세요 성남시 에너지포털입니다 오늘 날씨가 참 좋습니다. 내일
              날씨도 참 좋기를 바랍니다. 감사합니다.
            </v-card-text>
          </v-card>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>[이전글] 4년 01월 01일 정기점검 안내</td>
                  <td class="text-center">2024-01-01</td>
                </tr>
                <tr>
                  <td>[다음글] 4년 01월 01일 정기점검 안내</td>
                  <td class="text-center">2024-01-01</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </Tables>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import Tables from "@/components/Tables.vue";

export default {
  name: "SupportInformationView",
  components: {
    Title,
    Tables,
  },
  data: () => ({}),
};
</script>

<style lang="scss"></style>
