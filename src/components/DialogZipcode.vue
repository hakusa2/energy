<template>
  <div>
    <v-dialog v-model="dialog" scrollable width="550">
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="black" width="80" v-bind="attrs" v-on="on">
          주소찾기
        </v-btn>
      </template>
      <v-card class="card-dialog">
        <div class="dialog-header">
          <v-btn icon color="black" class="dialog-close" @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-card-title class="dialog-title"> 우편번호 찾기 </v-card-title>
        </div>
        <v-card-text class="dialog-body">
          <div class="zipcode-group" ref="embed"></div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DialogCase",
  components: {},
  props: {},
  computed: {},
  data: () => ({
    dialog: false,
    zipcode: "",
    addr1: "",
    zipVisible: false,
  }),
  updated() {
    //this.init();
    this.showAddr();
  },

  methods: {
    close() {
      this.dialog = false;
    },
    open() {
      this.dialog = true;
    },

    showAddr() {
      //alert('test');
      // let _ = '650';
      // let _height = '380';

      // let _left = Math.ceil(( window.screen.width - _width )/2);
      // let _top = Math.ceil(( window.screen.height - _height )/2);
      new window.daum.Postcode({
        oncomplete: (data) => {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          let fullRoadAddr = data.roadAddress; // 도로명 주소 변수
          let extraRoadAddr = ""; // 도로명 조합형 주소 변수

          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName) {
            extraRoadAddr +=
              extraRoadAddr !== ""
                ? ", " + data.buildingName
                : data.buildingName;
          }
          // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraRoadAddr !== "") {
            extraRoadAddr = " (" + extraRoadAddr + ")";
          }
          // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
          if (fullRoadAddr !== "") {
            fullRoadAddr += extraRoadAddr;
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          this.zipcode = data.zonecode; //5자리 새우편번호 사용
          this.addr1 = fullRoadAddr;
          this.dialog = false;
          this.$emit("move", this.zipcode, this.addr1);
        },
      }).embed(this.$refs.embed);
    },
  },
};
</script>

<style lang="scss"></style>
