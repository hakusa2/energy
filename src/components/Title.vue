<template>
  <div class="page-title mt-1 mb-6">
    <v-row no-gutters class="align-center">
      <v-col>
        <h2 class="v-heading-title">{{ title }}</h2>
        <slot name="TitleDescription"></slot>
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
