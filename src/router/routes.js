import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/pages/Posts'
import NewPosts from '@/components/pages/NewPost'
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
    path: '/new-post',
    name: 'new-posts',
    meta: {
      requiresAuth: true
    },
    component: NewPosts
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

]
