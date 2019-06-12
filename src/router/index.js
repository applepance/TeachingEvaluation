import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Admin from '@/components/Admin'
import Student from '@/components/Student'
import TSstudent from '@/components/TSstudent'
import MSstudent from '@/components/MSstudent'
import Amsg from '@/components/Amsg'
import Auser from '@/components/Auser'
import Dmsg from '@/components/Dmsg'
import Duser from '@/components/Duser'
import Smsg from '@/components/Smsg'
import Suser from '@/components/Suser'
import Umsg from '@/components/Umsg'
import Uuser from '@/components/Uuser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: Main,
      component: Main,
      children: [
        {
          path: '/main/admin',
          name: 'Admin',
          component: Admin
        },
        {
          path: '/main/student',
          name: 'Student',
          component: Student
        },
        {
          path: '/main/student/ts',
          name: 'TSstudent',
          component: TSstudent
        },
        {
          path: '/main/student/ms',
          name: 'MSstudent',
          component: MSstudent
        },
        {
          path: '/main/admin/amsg',
          name: 'Amsg',
          component: Amsg
        },
        {
          path: '/main/admin/smsg',
          name: 'Smsg',
          component: Smsg
        },
        {
          path: '/main/admin/umsg',
          name: 'Umsg',
          component: Umsg
        },
        {
          path: '/main/admin/dmsg',
          name: 'Dmsg',
          component: Dmsg
        },
        {
          path: '/main/admin/auser',
          name: 'Auser',
          component: Auser
        },
        {
          path: '/main/admin/suser',
          name: 'Suser',
          component: Suser
        },
        {
          path: '/main/admin/uuser',
          name: 'Uuser',
          component: Uuser
        },
        {
          path: '/main/admin/duser',
          name: 'Duser',
          component: Duser
        }
      ]
    }
  ]
})
