import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../authentication/LoginPage.vue'
import RegistrationPage from '../authentication/RegistrationPage.vue'
import AdminDashboard from '../dashboard/AdminDashboard.vue'
import ApplicantDashboard from '../dashboard/ApplicantDashboard.vue'
import EmployerDashboard from '../dashboard/EmployerDashboard.vue'
import StudentDashboard from '../dashboard/StudentDashboard.vue'

import ScholarshipApplication from '../forms/ScholarshipApplication.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegistrationPage
  },
  {
    path: '/admindashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/applicantdashboard',
    name: 'ApplicantDashboard',
    component: ApplicantDashboard
  },
  {
    path: '/employerdashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard
  },
  {
    path: '/studentdashboard',
    name: 'StudentDashboard',
    component: StudentDashboard
  },
  {
    path: '/scholarshipapplication',
    name: 'ScholarshipApplication',
    component: ScholarshipApplication
  },


]

const router = new VueRouter({
  routes
})

export default router
