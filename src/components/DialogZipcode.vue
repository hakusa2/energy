<template>
  <div>
    <v-dialog v-model="dialog" scrollable width="450">
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
        <div class="dialog-body">
          <div class="zipcode-group">우편번호 찾기 불러오는 곳</div>
        </div>
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
  }),
};
</script>

<style lang="scss"></style>
