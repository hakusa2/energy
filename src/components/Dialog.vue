<template>
  <div>
    <v-dialog v-model="dialog" scrollable :width="width">
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <slot name="dialogLinkGroup"></slot>
        </div>
      </template>
      <v-card>
        <v-toolbar flat class="dialog-toolbar" height="56px">
          <v-toolbar-title>
            <slot name="dialogTitle"></slot>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <slot name="dialogContent"></slot>
        <v-divider></v-divider>
        <v-card-actions>
          <slot name="dialogActionLeft"></slot>
          <v-spacer></v-spacer>
          <slot name="dialogActionRight"></slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  components: {},
  props: {
    width: {
      type: String,
      default: 680 + "px",
    },
  },
  computed: {
    src() {
      return "";
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss"></style>
