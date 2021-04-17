import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'normalize.css'
import 'bootstrap'
import { format } from 'date-fns';

Vue.filter('formatDate', (value) => {
  return !!value ? format(value, `DD MMM YYYY,  hh:mm`) : 'Invalid date';
})

Vue.config.productionTip = false

Vue.filter('formatArray', function formatArray(array) {
      return array.join(' => ')
})

async function main() {
  let storeInstance = await store()

  new Vue({
    router: router(storeInstance),
    store: storeInstance,
    render: h => h(App)
  }).$mount('#app')
}

main()
