import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // routes,
  // [...routes,
  //   { path: '/404', component: NotFound },
  //   { path: '*', redirect: '/404' }
  // ],
})

router.addRoute({ path: '/404', name: 'NotFound', component: Error })
router.addRoute({ path: '/:pathMatch(.*)*', redirect: '/404' })

export default router
