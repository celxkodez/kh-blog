import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/pages/Posts'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
// import store from './store'

export const routes = [

  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/posts',
    name: 'posts',
    meta: {
      requiresAuth: true
    },
    component: Posts
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }

];
