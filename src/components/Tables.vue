<template>
  <v-card class="card-table" elevation="0">
    <v-card-title class="px-0">
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="auto" class="mr-auto">
          <div class="table-title"><slot name="TableTitle"></slot></div>
        </v-col>
        <v-col cols="12" sm="12" md="auto">
          <div class="table-description">
            <slot name="TableDescription"></slot>
          </div>
        </v-col>
      </v-row>
    </v-card-title>
    <v-row no-gutters class="align-center">
      <v-col cols="12" sm="12" md="auto" class="mr-auto">
        <slot name="TableHeaderLeft"></slot>
      </v-col>
      <v-col cols="12" sm="12" md="auto">
        <slot name="TableHeaderRight"></slot>
      </v-col>
    </v-row>
    <slot name="TableData"></slot>
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
