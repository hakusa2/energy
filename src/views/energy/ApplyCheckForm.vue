<template>
  <div class="page-container">
    <v-container>
      <Title :title="'신청이력 확인 (사회복지시설)'">
        <template v-slot:BtnGroup>
          <v-chip label>신청중</v-chip>
          <v-chip label color="secondary">신청대기중</v-chip>
          <v-chip label color="primary">신청완료</v-chip>
          <v-chip label color="green" text-color="white"> 신청완료 </v-chip>
        </template>
        <template v-slot:TitleDescription>
          우측 상단의 처리현황을 확인해주세요. 검토중인 신청내역은 수정하실 수
          없습니다.
        </template>
      </Title>

      <v-divider class="divider-dashed"></v-divider>
      <v-card class="card-form" flat>
        <v-card-title class="mb-5">신청인 정보 입력</v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation class="px-5">
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <div class="form-group">
                <v-label>이름 <span class="icon-required"></span></v-label>
                <v-text-field
                  :rules="rules"
                  solo
                  placeholder="이름을 입력해주세요."
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <div class="form-group">
                <v-label>시설명</v-label>
                <v-text-field
                  solo
                  placeholder="기관, 사업자의 시설명을 입력해주세요"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <div class="form-group">
                <v-label>휴대폰 <span class="icon-required"></span></v-label>
                <v-text-field
                  :rules="rules"
                  solo
                  placeholder="'-' 없이 숫자만 입력해주세요"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <div class="form-group">
                <v-label>직위</v-label>
                <v-text-field
                  solo
                  placeholder="직위를 입력해주세요."
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <div class="form-group">
                <v-label>생년월일 <span class="icon-required"></span></v-label>
                <v-text-field
                  :rules="rules"
                  solo
                  placeholder="생년월일을 입력해주세요."
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <div class="form-group">
                <v-label>이메일</v-label>
                <v-text-field
                  solo
                  placeholder="이메일을 입력해주세요."
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" class="py-0">
              <div class="form-group">
                <v-label>주소</v-label>
                <v-row>
                  <v-col cols="12" md="6" class="d-flex">
                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          depressed
                          v-bind="attrs"
                          v-on="on"
                          class="mr-3"
                          height="48"
                        >
                          검색
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title> 주소 검색 </v-card-title>
                        <div class="zipcode-group px-5">주소 검색 영역</div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn depressed @click="dialog = false">
                            취소
                          </v-btn>
                          <v-btn
                            depressed
                            color="primary"
                            @click="dialog = false"
                          >
                            저장
                          </v-btn>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-text-field
                      solo
                      placeholder="지번 및 도로명주소를 입력 후 검색해주세요"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      solo
                      placeholder="나머지 주소를 입력해주세요"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-form>
        <v-divider class="divider-dashed"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed large> 신청취소 </v-btn>
          <v-btn depressed large color="primary"> 수정 </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";

export default {
  name: "ApplyCheckForm",
  components: {
    Title,
  },
  data: () => ({}),
};
</script>

<style lang="scss"></style>
