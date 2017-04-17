import Vue from 'vue'
import App from './App.vue'

require("file-loader?./assets/img/poster.png");

new Vue({
  el: '#app',
  render: h => h(App)
})
