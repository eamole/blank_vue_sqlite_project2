// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from '@/store/Store.js'
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'

Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyAx_hQgeWDJILn7Hy6FJ0rNrjtXfbQ-O0k'
  // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
})

Vue.use(Vuetify)
Vue.use(Vuetify, {
  iconfont: 'mdi' // use the material-design-icons
})
Vue.config.productionTip = false
// create a global state
// Vue.prototype.$test = '12345'
Vue.prototype.$state = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
