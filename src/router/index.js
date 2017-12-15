import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/pages/login.vue'
import Home from '../components/common/Home.vue'
import Button from '../components/pages/button.vue'
import Table from '../components/pages/tables.vue'
import Tabs from '../components/pages/navTabs.vue'
import Panel from '../components/pages/panel.vue'
import TimeLine from '../components/pages/timeLine.vue'
import Form from '../components/pages/form.vue'
import Grid from '../components/pages/Grid.vue'
import Alert from '../components/pages/Alert.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/login",
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      redirect:"/button/baseElement/button",
      component: Home,
      children:[
        {path:'/button/:parent/:child',component:Button},
        {path:'/table/:parent/:child',component:Table},
        {path:'/tabs/:parent/:child',component:Tabs},
        {path:'/panel/:parent/:child',component:Panel},
        {path:'/timeline/:parent/:child',component:TimeLine},
        {path:'/form/:parent/:child',component:Form},
        {path:'/grid/:parent/:child',component:Grid},
        {path:'/alert/:parent/:child',component:Alert}
      ]
    }
  ]
})
