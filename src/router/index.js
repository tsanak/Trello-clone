import Vue from 'vue'
import Router from 'vue-router'
import StartingPage from '@/components/StartingPage'
import Home from '@/components/Home'
import Project from '@/components/Project'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartingPage',
      component: StartingPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/project/:projectID',
      name: 'Project',
      component: Project
    }
  ]
})
