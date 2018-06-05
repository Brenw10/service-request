// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'v-autocomplete/dist/v-autocomplete.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Autocomplete from 'v-autocomplete';
import App from './App';
import router from './router';
import AddressField from './components/AddressField';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Autocomplete);
Vue.component('app-address-field', AddressField);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
