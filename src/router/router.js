export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    props: route => ({
      food: route.query.food
    }),
    // beforeEnter: (to, from, next) => {
    //   if (from.name === 'about') alert('这是从登陆也来得')
    //   else alert('这不是从登陆也来得')
    //   next()
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "home" */ '@/views/login.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import(/* webpackChunkName: "argu" */ '@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import(/* webpackChunkName: "parent" */ '@/views/parent.vue'),
    children: [
      {
        path: '/child',
        component: () => import(/* webpackChunkName: "child" */ '@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => {
      console.log(to)
    }
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
