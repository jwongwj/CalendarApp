import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

Vue.filter('convertMthToString', function (value) {
  var day = "";
  switch (value) {
    case 1:
      day = "January";
      break;
    case 2:
      day = "Feburary";
      break;
    case 3:
      day = "March";
      break;
    case 4:
      day = "April";
      break;
    case 5:
      day = "May";
      break;
    case 6:
      day = "June";
      break;
    case 7:
      day = "July";
      break;
     case 8:
      day = "August";
      break;
    case 9:
      day = "September";
      break;
    case 10:
      day = "October";
      break;
    case 11:
      day = "November";
      break;
    case 12:
      day = "December";
      break;
  }

  return day
})
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function ( /* { store, ssrContext } */ ) {
  const Router = new VueRouter({
    scrollBehavior: () => ({
      y: 0
    }),
    routes,
    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
