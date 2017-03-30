// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Alerts from './components/Alerts'
import router from './router'

Vue.config.productionTip = false

Vue.component('alerts', Alerts)

const bus = new Vue()

// Bind the event bus to Vue.
Vue.$bus = bus
Object.defineProperty(Vue.prototype, '$bus', {
  get () {
    return bus
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
