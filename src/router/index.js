import Vue from 'vue'
import Router from 'vue-router'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
  // It looks like the '/' route must be named Home
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Experience
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      redirect: {name: 'Home'}
    }
  ]
})
