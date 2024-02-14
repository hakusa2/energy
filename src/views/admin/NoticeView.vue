<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 공지사항 </template>
        <template v-slot:TableDescription>
          홈 화면에 표시되는 공지사항의 내용을 등록/관리합니다
        </template>
        <template v-slot:TableData>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">제목</th>
                  <th class="text-center">등록일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24년 01월 01일 정기점검 안내</td>
                  <td class="text-center" style="width: 20%">
                    2024-01-01 11:59:59
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
            <v-divider></v-divider>
            <v-card-actions class="px-0">
              <v-btn depressed color="secondary"> 목록 </v-btn>
              <v-spacer></v-spacer>
              <v-btn depressed> 삭제 </v-btn>
              <v-btn depressed color="secondary" class="ml-1" to="/noticeedit">
                수정
              </v-btn>
              <v-btn depressed color="primary" class="ml-1" to="/noticeedit">
                글쓰기
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>[이전글] 4년 01월 01일 정기점검 안내</td>
                  <td class="text-center" style="width: 20%">
                    2024-01-01 11:59:59
                  </td>
                </tr>
                <tr>
                  <td>[다음글] 4년 01월 01일 정기점검 안내</td>
                  <td class="text-center">2024-01-01 11:59:59</td>
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
import Tables from "@/components/Tables.vue";

export default {
  name: "NoticeView",
  components: { Tables },
  data: () => ({}),
};
</script>

<style lang="scss"></style>
