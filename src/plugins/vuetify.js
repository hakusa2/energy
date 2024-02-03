import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        thresholds: {
            xs:360,
        },
        mobileBreakpoint: 'xs'
    },
    theme: {
      themes: {
        light: {
          primary: colors.brown,
          secondary: '#9C27B0',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
});
