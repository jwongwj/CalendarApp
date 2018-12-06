import Layout from 'layouts/MyLayout.vue'
import HomePage from 'pages/HomePage.vue'
import ExpensesCategoryPage from 'pages/ExpensesCategoryPage.vue'
import ManageAccountPage from 'pages/ManageAccountPage.vue'
import ManageExpensesPage from 'pages/ManageExpensesPage'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/Home', component: HomePage },
      { path: '/Expenses', component: ExpensesCategoryPage },
      { path: '/manageacct', component: ManageAccountPage },
      { path: '/manageexp', component: ManageExpensesPage }
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
