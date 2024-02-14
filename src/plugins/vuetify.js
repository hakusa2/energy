import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
//import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  /* breakpoint: {
    thresholds: {
      xs: 360,
    },
    mobileBreakpoint: "xs",
  }, */
  theme: {
    themes: {
      light: {
        primary: "#2C3263",
        secondary: "#C3C3C3",
        accent: "#0055A5",
        error: "#D50037",
      },
    },
  },
});
