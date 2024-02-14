<template>
  <div class="page-container">
    <v-container>
      <Title :title="'신청이력확인'">
        <template v-slot:TitleDescription>
          에너지복지모델 신청 과정에서 입력한 정보를 확인합니다
        </template>
      </Title>
      <v-row>
        <v-col>
          <v-card elevation="0" class="card-applycheck">
            <v-card-text class="mb-5 d-flex justify-center px-10 pt-8 pb-5">
              <v-flex xs12 sm12 md6>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <div class="form-group">
                    <v-label>이름</v-label>
                    <v-text-field
                      :rules="rules"
                      dense
                      outlined
                      solo
                      placeholder="이름을 입력해주세요"
                    ></v-text-field>
                  </div>
                  <div class="form-group">
                    <v-label>휴대폰</v-label>
                    <v-text-field
                      :rules="rules"
                      dense
                      outlined
                      solo
                      placeholder="'-' 없이 숫자만 입력해주세요"
                    ></v-text-field>
                  </div>
                  <div class="form-group">
                    <v-label>생년월일</v-label>
                    <v-text-field
                      :rules="rules"
                      dense
                      outlined
                      solo
                      placeholder="생년월일을 입력해주세요"
                    ></v-text-field>
                  </div>
                </v-form>
              </v-flex>
            </v-card-text>
            <p class="text-center">
              신청시 입력한 정보를 입력창에 기입해주세요. <br />
              입력내용이 생각나지 않으시는 경우 성남시 콜센터(1577-3100)로
              문의해주시기 바랍니다
            </p>
            <v-card-actions class="d-flex flex-column px-10">
              <v-btn
                large
                depressed
                color="primary"
                to="/applycheckform"
                width="200"
                >확인</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "ApplyCheck",
  components: {
    Title,
  },
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
};
</script>

<style lang="scss">
.card-applycheck .v-card__text {
  background-color: #f8f8f8;
}
</style>
