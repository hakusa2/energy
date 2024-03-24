<template>
  <v-card class="card-table" elevation="0">
    <v-card-title class="px-0 pb-0 pt-0 mt-10 mb-5">
      <v-row no-gutters>
        <v-col cols="6" class="mr-auto">
          <div class="table-title"><slot name="TableTitle"></slot></div>
        </v-col>
        <v-col cols="auto">
          <div class="table-btn">
            <slot name="TableBtn"></slot>
          </div>
        </v-col>
      </v-row>
    </v-card-title>
    <v-row no-gutters class="align-center">
      <v-col cols="6" class="mr-auto">
        <slot name="TableHeaderLeft"></slot>
      </v-col>
      <v-col cols="auto">
        <slot name="TableHeaderRight"></slot>
      </v-col>
    </v-row>
    <slot name="TableData"></slot>
    <v-row no-gutters class="align-center mt-2">
      <v-col cols="auto">
        <slot name="TableFooterLeft"></slot>
      </v-col>
      <v-col>
        <slot name="TableFooterCenter"></slot>
      </v-col>
      <v-col cols="auto">
        <slot name="TableFooterRight"></slot>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
//import { get, sync } from 'vuex-pathify'

export default {
  name: "Tables",
  components: {},
  props: ["title"],
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss"></style>
