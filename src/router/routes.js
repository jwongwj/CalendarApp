import Layout from 'layouts/MyLayout.vue'
import CalendarPage from 'components/CalendarComponent'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/calendar', component: CalendarPage }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
