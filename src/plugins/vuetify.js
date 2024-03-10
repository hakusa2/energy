import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
//import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  /* breakpoint: {
    thresholds: {
      xs: 430,
      sm: 768,
    },
    mobileBreakpoint: "xs",
  }, */
  theme: {
    themes: {
      light: {
        primary: "#A6D086",
        secondary: "#C6C2C2",
        accent: "#000000",
        error: "#FF3040",
      },
    },
  },
});
