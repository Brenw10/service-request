import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ServiceRequest from '@/components/ServiceRequest';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/service-request',
      name: 'ServiceRequest',
      component: ServiceRequest,
    },
  ],
});
