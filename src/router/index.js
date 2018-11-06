import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Login from '@/views/Login'
import DailySchedule from '@/views/DailySchedule'
import WeeklySchedule from '@/views/WeeklySchedule'
import MonthlySchedule from '@/views/MonthlySchedule'
import Clients from '@/views/Clients'
import Billing from '@/views/Billing'
import Settings from '@/views/Settings'


Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/schedule/daily',
      name: 'DailySchedule',
      component: DailySchedule
    },
    {
      path: '/schedule/weekly',
      name: 'WeeklySchedule',
      component: WeeklySchedule
    },
    {
      path: '/schedule/monthly',
      name: 'MonthlySchedule',
      component: MonthlySchedule
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/billing',
      name: 'Billing',
      component: Billing
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
