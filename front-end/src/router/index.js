import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Ping from '@/components/Ping'
import Table from '@/components/Table';

Vue.use(Router);
Vue.use(iView);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ping',
      component: Ping
    },
    {
      path:'/table',
      name: 'Table',
      component: Table
    }
  ]
})
