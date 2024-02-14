<template>
  <div class="page-title my-5">
    <v-row no-gutters class="align-center">
      <v-col cols="auto">
        <h2 class="v-heading-title">{{ title }}</h2>
      </v-col>
      <v-col cols="auto" class="ml-auto">
        <slot name="BtnGroup"></slot>
      </v-col>
    </v-row>
    <v-row no-gutters class="align-start mt-3">
      <v-col cols="auto">
        <slot name="TitleDescription"></slot>
      </v-col>
      <v-col cols="auto" class="ml-auto">
        <slot name="FormGroup"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import { get, sync } from 'vuex-pathify'

export default {
  name: "Title",
  components: {},
  props: ["title"],
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss"></style>
