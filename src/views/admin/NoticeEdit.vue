<template>
  <div class="page-container">
    <v-container>
      <Tables class="table-admin">
        <template v-slot:TableTitle> 공지사항 </template>
        <template v-slot:TableDescription>
          홈 화면에 표시되는 공지사항의 내용을 등록/관리합니다
        </template>
        <template v-slot:TableData>
          <v-card elevation="0" class="card-form">
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <div class="form-group form-horizontal">
                  <v-label>제목</v-label>
                  <v-text-field :rules="rules" dense outlined></v-text-field>
                </div>
                <div class="form-group form-horizontal">
                  <v-label>내용</v-label>
                  <v-textarea
                    :rules="rules"
                    dense
                    outlined
                    rows="12"
                  ></v-textarea>
                </div>
                <div class="form-group form-horizontal">
                  <v-label>이미지</v-label>
                  <v-file-input dense outlined></v-file-input>
                </div>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn large depressed to="/notice">취소</v-btn>
              <v-btn large depressed color="primary" to="/notice">확인</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </template>
      </Tables>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Tables from "@/components/Tables.vue";

export default {
  name: "NoticeEdit",
  components: { Tables },
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Required.",
    ],
  }),
};
</script>

<style lang="scss"></style>
