
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/singUp',
    component:()=>import('components/singUp')
  },
  {
    path: '/login',
    component: () => import('components/login')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/first',
    component:()=> import('components/fistPage')
  }
]

export default routes
