import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/pages/Posts'

export const routes = [

  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  }

];
